import express from 'express';

const app = express();

app.use(express.json());

// Rota: Endereço completo da requisição
// Recurso: Entidade acessada no sistema
//  Verbos: GET (Buscar), POST(Criar), PUT(Atualizar), DELETE (Apagar)


// Request Param: Parâmetro recebido na rota para identificar um recurso.
// Query Param: Parâmetros opcionais recebidos na rota usados como filtros, paginação, etc.
// Request Body: Parâmetros para criação e atualização de informações em um recurso.

const users = ["Eugênio", "Pollyana", "Nícolas"];


app.get('/users', (request, response) => {

  const search = String(request.query.search);

  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

  return response.json(filteredUsers);

});

app.get('/users/:id', (request, response) => {

  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);

});

app.post('/users', (request, response) => {

  const data = request.body;

  const user = {
    name: data.name,
    email: data.email
  }

  return response.json(user);

});


app.listen(3333);