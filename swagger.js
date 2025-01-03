import swaggerJsdoc from 'swagger-jsdoc';

export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentación de API',
      version: '1.0.0',
      description: 'Documentación detallada de la API con ejemplos para cada endpoint',
    },
    servers: [
      {
        url: 'https://cdizdolpz4.execute-api.us-east-1.amazonaws.com/dev',
        description: 'Servidor local',
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/doc.js'],
};

export const specs = swaggerJsdoc(options);
