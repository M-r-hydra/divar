import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const swaggerOptions = swaggerJsDoc({
  swaggerDefinition: {
    info: {
      title: "divar_backend_clone",
      description: "ali goodarzi",
      version: "1.0.0",
    },
  },
  apis: [],
});

const swaggerConfing = swaggerUI.setup(swaggerOptions, {
  // extra options
});

export default { swaggerConfing, _swagger: swaggerUI };
