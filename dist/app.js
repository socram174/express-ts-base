"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hola_1 = require("./helpers/hola");
const chalk_1 = __importDefault(require("chalk"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const ENVIRONMENT = app.get("env");
if (ENVIRONMENT !== "production") {
    console.log("ENVIRONMENT: " + chalk_1.default.blue(ENVIRONMENT));
}
else {
    console.log("ENVIRONMENT: " + chalk_1.default.green(ENVIRONMENT));
}
app.get('/', (req, res) => {
    console.log("GET /");
    res.status(200).json(hola_1.user);
});
app.listen(3000, () => {
    console.log("http://localhost:3000");
});
