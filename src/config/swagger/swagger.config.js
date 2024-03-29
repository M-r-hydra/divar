"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerOptions = (0, swagger_jsdoc_1.default)({
    swaggerDefinition: {
        info: {
            title: "divar_backend_clone",
            description: "ali goodarzi",
            version: "1.0.0",
        },
    },
    apis: [],
});
const swaggerConfing = swagger_ui_express_1.default.setup(swaggerOptions, {
// extra options
});
exports.default = { swaggerConfing, _swagger: swagger_ui_express_1.default };
