const { Router } = require('express');
const schemaValidator = require('./apps/middlewares/schemaValidator');

const UserController = require('./apps/controllers/UserController');
const userSchema = require('./schema/create.user.schema.json');

const routes = new Router();

routes.get('/user', UserController.getAll);
routes.post('/user', schemaValidator(userSchema), UserController.create);

routes.get('/health', (req, res) => res.send({
  message: 'Connected with success',
}));

module.exports = routes;
