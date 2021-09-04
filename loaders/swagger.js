// Document the API you have built by adding and configuring Swagger to your project.
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

// Loading via yml.safeLoad to avoid errors with special characters during processing
const swaggerDocument = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, '../swagger.yml'), 'utf8'));


module.exports = (app) => {
  // Serves Swagger API documentation to /docs url
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
