<?php
class Cors {
    private array $allowedOrigins;

    public function __construct(array $allowedOrigins) {
        $this->allowedOrigins = $allowedOrigins;
    }

    public function handle(): void {
        $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
        if (in_array($origin, $this->allowedOrigins, true)) {
            header("Access-Control-Allow-Origin: {$origin}");
            header('Vary: Origin');
        }
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');

        if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
            http_response_code(204);
            exit;
        }
    }
}
