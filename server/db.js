const mysql = require('mysql2/promise');

let db; // 데이터베이스 연결을 재사용하기 위한 전역 변수

async function initDB() {
  if (!db) {
    db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }
  return db;
}