"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const hola_1 = require("../src/helpers/hola");
(0, vitest_1.test)('adds 1 + 2 to equal 3', () => {
    (0, vitest_1.expect)((0, hola_1.getUser)()).toEqual({
        "age": 55,
        "name": "Juan",
    });
});
