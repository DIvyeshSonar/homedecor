<?php
// Basic configuration for the API
return [
    'app_name' => 'Homdecor API',
    'env' => 'local',
    // If you serve React via CRA dev server
    'cors_allowed_origins' => [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        // If served from XAMPP directly
        'http://localhost',
        'http://localhost/prjct',
        'http://127.0.0.1/prjct'
    ],
    'db' => [
        'host' => 'localhost',
        'port' => 3306,
        'database' => 'homedecor',
        'username' => 'root',
        'password' => '',
        'charset' => 'utf8mb4',
    ],
    'security' => [
        'jwt_secret' => 'replace_with_secure_secret_string',
        'session_name' => 'homdecor_sid'
    ]
];
