"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
// Mongoose
const mongoose_1 = __importDefault(require("mongoose"));
// Mongoose
// Moduels
require("dotenv/config");
// Moduels
const connectToDB = () => mongoose_1.default
    .connect(process.env.MONGODB_URI)
    .then(() => {
    console.log("Database Connected Successfully");
})
    .catch((err) => {
    var _a;
    console.clear();
    console.log("err in connect to mongodb");
    console.log((_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : "UnExpected Error In DB ;X");
});
exports.connectToDB = connectToDB;
