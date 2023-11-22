import express from 'express';
import { user } from './helpers/hola'


console.log("NODE_ENV: "+ process.env.NODE_ENV);

if(process.env.NODE_ENV !== "production"){
    console.log("Distinto a produccion");
}else {
    console.log("En produccion");
}


const app = express();

app.get('/',(req, res ) => {

    res.status(200).json(user);
});


app.listen(3000, () => {
    console.log("http://localhost:3000");
});