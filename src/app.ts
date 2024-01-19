import express from 'express';
import { user } from './helpers/hola'
import chalk from 'chalk';
import cors from 'cors';

const app = express();
app.use(cors());

const ENVIRONMENT = app.get("env");

if(ENVIRONMENT !== "production"){
    console.log("ENVIRONMENT: "+ chalk.blue(ENVIRONMENT));
}else {
    console.log("ENVIRONMENT: "+ chalk.green(ENVIRONMENT));
}

app.get('/',(req, res ) => {
    console.log("GET /");

    res.status(200).json(user);
});


app.listen(3000, () => {
    console.log("http://localhost:3000");
});