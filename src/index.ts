import { Client } from "pg";
import dotenv from "dotenv";
import express from "express";
import { getTodos } from "./todos";

dotenv.config();
const app = express()
app.use(express.json())

const port = 3000;

app.post("/gettodos", (req, res) => {
    const todos = getTodos(req.body.email);
    res.json({
        todos
    })
})

app.get("/hello", (req, res) => {
    res.json({
        message: "Hello World!"
    })
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})