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
        url: 'http://localhost:8000',
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
