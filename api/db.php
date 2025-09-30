<?php

class Database {
    private $pdo;

    public function __construct(array $config) {
        $host = $config['db']['host'];
        $port = $config['db']['port'];
        $db   = $config['db']['database'];
        $user = $config['db']['username'];
        $pass = $config['db']['password'];
        $charset = $config['db']['charset'] ?? 'utf8mb4';

        $dsn = "mysql:host={$host};port={$port};dbname={$db};charset={$charset}";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        $this->pdo = new PDO($dsn, $user, $pass, $options);
    }

    public function pdo(): PDO {
        return $this->pdo;
    }
}
