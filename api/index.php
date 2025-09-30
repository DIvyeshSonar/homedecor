<?php
// Simple router for the API
// Usage examples:
//  GET    /api/products            -> list products
//  GET    /api/products/1          -> product detail
//  POST   /api/auth/signup         -> create user
//  POST   /api/auth/login          -> login
//  POST   /api/cart/add            -> add item to cart
//  GET    /api/cart                -> get current cart
//  DELETE /api/cart/{itemId}       -> remove cart item

$config = require __DIR__ . '/config.php';
require __DIR__ . '/db.php';
require __DIR__ . '/helpers/Response.php';
require __DIR__ . '/middleware/Cors.php';

(new Cors($config['cors_allowed_origins']))->handle();

$database = new Database($config);
$pdo = $database->pdo();

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$uri = $_SERVER['REQUEST_URI'] ?? '/';
$base = dirname($_SERVER['SCRIPT_NAME']); // /api
$path = '/' . trim(str_replace($base, '', parse_url($uri, PHP_URL_PATH)), '/');

// Utility: read JSON payload
function json_input(): array {
    $raw = file_get_contents('php://input');
    if (!$raw) return [];
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

try {
    if ($path === '' || $path === '/') {
        Response::json(['name' => $config['app_name'], 'status' => 'ok']);
    }

    // /products and /products/{id}
    if (preg_match('#^/products(?:/(\d+))?$#', $path, $m)) {
        if ($method !== 'GET') Response::error('Method Not Allowed', 405);
        if (!empty($m[1])) {
            $stmt = $pdo->prepare('SELECT * FROM products WHERE id = ?');
            $stmt->execute([$m[1]]);
            $product = $stmt->fetch();
            if (!$product) Response::error('Not Found', 404);
            Response::json($product);
        } else {
            $stmt = $pdo->query('SELECT * FROM products ORDER BY id DESC');
            $rows = $stmt->fetchAll();
            Response::json($rows);
        }
    }

    // /auth/signup
    if ($path === '/auth/signup') {
        if ($method !== 'POST') Response::error('Method Not Allowed', 405);
        $data = json_input();
        $name = trim($data['name'] ?? '');
        $email = strtolower(trim($data['email'] ?? ''));
        $password = $data['password'] ?? '';
        if (!$name || !$email || !$password) Response::error('Missing fields', 422);
        $hash = password_hash($password, PASSWORD_BCRYPT);
        $stmt = $pdo->prepare('INSERT INTO users(name,email,password_hash,created_at) VALUES(?,?,?,NOW())');
        try {
            $stmt->execute([$name, $email, $hash]);
        } catch (PDOException $e) {
            if ((int)$e->getCode() === 23000) Response::error('Email already exists', 409);
            throw $e;
        }
        Response::json(['ok' => true]);
    }

    // /auth/login
    if ($path === '/auth/login') {
        if ($method !== 'POST') Response::error('Method Not Allowed', 405);
        $data = json_input();
        $email = strtolower(trim($data['email'] ?? ''));
        $password = $data['password'] ?? '';
        if (!$email || !$password) Response::error('Missing fields', 422);
        $stmt = $pdo->prepare('SELECT * FROM users WHERE email = ?');
        $stmt->execute([$email]);
        $user = $stmt->fetch();
        if (!$user || !password_verify($password, $user['password_hash'])) Response::error('Invalid credentials', 401);
        // Minimal session token using PHP session id
        session_name($config['security']['session_name']);
        session_start();
        $_SESSION['user_id'] = $user['id'];
        Response::json(['ok' => true, 'user' => ['id' => $user['id'], 'name' => $user['name'], 'email' => $user['email']]]);
    }

    // Cart helpers
    $ensureCart = function() use ($pdo, $config) {
        session_name($config['security']['session_name']);
        session_start();
        $session = session_id();
        $stmt = $pdo->prepare('SELECT * FROM carts WHERE session_token = ?');
        $stmt->execute([$session]);
        $cart = $stmt->fetch();
        if (!$cart) {
            $pdo->prepare('INSERT INTO carts(session_token, created_at) VALUES(?, NOW())')->execute([$session]);
            $cartId = (int)$pdo->lastInsertId();
        } else {
            $cartId = (int)$cart['id'];
        }
        return $cartId;
    };

    // POST /cart/add
    if ($path === '/cart/add') {
        if ($method !== 'POST') Response::error('Method Not Allowed', 405);
        $data = json_input();
        $productId = (int)($data['product_id'] ?? 0);
        $qty = max(1, (int)($data['qty'] ?? 1));
        if ($productId <= 0) Response::error('Invalid product_id', 422);
        $cartId = $ensureCart();
        // upsert
        $stmt = $pdo->prepare('SELECT id, qty FROM cart_items WHERE cart_id = ? AND product_id = ?');
        $stmt->execute([$cartId, $productId]);
        $existing = $stmt->fetch();
        if ($existing) {
            $pdo->prepare('UPDATE cart_items SET qty = qty + ? WHERE id = ?')->execute([$qty, $existing['id']]);
        } else {
            $pdo->prepare('INSERT INTO cart_items(cart_id, product_id, qty) VALUES(?,?,?)')->execute([$cartId, $productId, $qty]);
        }
        Response::json(['ok' => true]);
    }

    // GET /cart
    if ($path === '/cart') {
        if ($method !== 'GET') Response::error('Method Not Allowed', 405);
        $cartId = $ensureCart();
        $stmt = $pdo->prepare('SELECT ci.id as item_id, ci.qty, p.* FROM cart_items ci JOIN products p ON p.id = ci.product_id WHERE ci.cart_id = ?');
        $stmt->execute([$cartId]);
        $rows = $stmt->fetchAll();
        Response::json($rows);
    }

    // DELETE /cart/{itemId}
    if (preg_match('#^/cart/(\d+)$#', $path, $m)) {
        if ($method !== 'DELETE') Response::error('Method Not Allowed', 405);
        $cartId = $ensureCart();
        $itemId = (int)$m[1];
        $pdo->prepare('DELETE FROM cart_items WHERE id = ? AND cart_id = ?')->execute([$itemId, $cartId]);
        Response::json(['ok' => true]);
    }

    Response::error('Not Found', 404);

} catch (PDOException $e) {
    // If schema missing, give a helpful message
    Response::error('Database error: ' . $e->getMessage(), 500);
} catch (Throwable $e) {
    Response::error('Server error: ' . $e->getMessage(), 500);
}
