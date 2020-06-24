const express = require('express');
const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/user', UserController.index);
routes.post('/user', UserController.create);

routes.post('/session', SessionController.create);

routes.get('/product', ProductController.index);
routes.post('/product', ProductController.create);
routes.delete('/product/:id', ProductController.delete);
routes.put('/product/:id/:qtd/:op', ProductController.edit);

routes.get('/profile/:name',  ProfileController.index);
routes.get('/profile',  ProfileController.relatorio);

module.exports = routes;