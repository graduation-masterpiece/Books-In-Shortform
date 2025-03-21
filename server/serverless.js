// server/serverless.js
const awsServerlessExpress = require('aws-serverless-express');
const app = require('./server'); // 기존 Express 애플리케이션

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};