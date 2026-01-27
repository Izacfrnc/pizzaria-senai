const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost", // Host do banco de dados
    user: "root", // Usuário
    password: "root", // Senha
    database: "pizzaria", // Banco de dados
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Exporta permitindo usar await/async
module.exports = pool.promise();