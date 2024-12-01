import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

async function getUser(email: String) {
    const client = new Client({
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        ssl: true
    })

    await client.connect();
    const query = 'SELECT * from todos where email=$1';
    const values = [email];
    const result = await client.query(query, values);
    console.log(result.rows[0]);
}

getUser("abhi@example.com")