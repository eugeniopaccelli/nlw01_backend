import express from 'express';

const app = express();

app.get('/users', (request, response)=> {
 console.log("Hello, World");

 response.json(["Eugênio", "Pollyana", "Nícolas"]);
});

app.listen(3333);