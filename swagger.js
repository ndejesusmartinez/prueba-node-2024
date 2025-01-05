import swaggerJsdoc from 'swagger-jsdoc';

export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentation',
      version: '1.0.0',
      description: 'Detailed API documentation with examples for each endpoint',
    },
    servers: [
      {
        url: 'https://cdizdolpz4.execute-api.us-east-1.amazonaws.com/dev',
        description: 'Servidor',
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

export const handler = async (event) => {
  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>API Documentation</title>
      <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist/swagger-ui.css" />
    </head>
    <body>
      <div id="swagger-ui"></div>
      <script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script>
      <script>
        const ui = SwaggerUIBundle({
          spec: ${JSON.stringify(specs)},
          dom_id: '#swagger-ui',
        });
      </script>
    </body>
    </html>
  `;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: htmlTemplate,
  };
};