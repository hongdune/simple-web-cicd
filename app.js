// 취약한 코드 예시 (보안 스캔 테스트용)
const express = require('express');
const app = express();

// SQL Injection 취약점 (예시)
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const query = "SELECT * FROM users WHERE id = " + userId; // 취약한 코드
    res.send(query);
});

// XSS 취약점 (예시)
app.get('/search', (req, res) => {
    const searchTerm = req.query.q;
    res.send("<h1>Search results for: " + searchTerm + "</h1>"); // 취약한 코드
});

// 하드코딩된 크리덴셜 (예시)
const API_KEY = "sk-1234567890abcdef"; // 취약한 코드
const DB_PASSWORD = "admin123"; // 취약한 코드

app.listen(3000);
