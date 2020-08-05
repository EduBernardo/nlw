import express from 'express'

const app = express();

app.use(express.json());

//http://localhost:3333/users

app.get('/', (request, response)=> {
 console.log('request', request);
 const users = [
    {method: 'get'}
 ]
 return response.json(users) 
});

app.listen(3333);