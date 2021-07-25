const { Router } = require('express');

const { users } = require('./data');

const router = Router();

router.get('/users', (request, response) => response.json(users));

router.post('/users', (request, response) => {
  const { name, email } = request.body;

  if (!name) return response.status(400).json({ msg: 'Nome é obrigatório.' })
  if (!email) return response.status(400).json({ msg: 'Email é obrigatório.' })

  const id = users.length + 1;

  const user = { id, name, email };

  users.push(user);
  response.status(201).send();
})

module.exports = { router };