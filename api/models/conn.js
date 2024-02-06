import mysql from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config();

const conn = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    port: process.env.MYSQL_PORT || 3306
});
// PPO - Poke Python Online

`
MYSQL_HOST = localhost
MYSQL_USER = root
MYSQL_PASSWORD = 
MYSQL_DB = PPO
MYSQL_PORT = 3306

`

export default conn;