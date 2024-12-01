"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// declare global {
//     namespace NodeJS {
//       interface ProcessEnv {
//         DB_USER: string,
//         DB_PASS: string,
//         DB_HOST: string,
//         DB_NAME: string
//       }
//     }
// }
console.log(process.env.DB_USER);
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(process.env.DB_HOST);
        const client = new pg_1.Client({
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            ssl: true
        });
        //postgresql://sharma.abhishek208:pmdh48inwsuY@ep-wandering-cloud-68038809.us-east-2.aws.neon.tech/test?sslmode=require
        yield client.connect();
        const query = 'SELECT * from todos where email=$1';
        const values = [email];
        const result = yield client.query(query, values);
        console.log(result.rows[0]);
    });
}
getUser("abhi@example.com");
