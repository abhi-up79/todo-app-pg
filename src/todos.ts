import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

export async function getTodos(email: string) {
    const client = new Client({
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        ssl: true
    })

    await client.connect();

    const query = "SELECT * FROM todos WHERE email=$1";
    const values = [email];
    const result = await client.query(query, values);

    console.log(result.rows);
    return result.rows;
}