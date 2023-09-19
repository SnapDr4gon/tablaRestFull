const operaciones = require('./operaciones');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/results/:n1/:n2', (request, response) => {
    if (operaciones.checkType(request.params.n1, request.params.n2)) {
        response.status(404).json({ error: 'No todas la variables son numeros' });
    } else {
        response.send(`Suma: ${operaciones.suma(request.params.n1, request.params.n2)}`);
    }
});

app.post('/results', (request, response) => {
    if (operaciones.checkType(request.body.n1, request.body.n2)) {
        response.status(404).json({ error: 'No todas la variables son numeros' });
    } else {
        response.send(`Multiplicacion: ${operaciones.multiplicacion(request.body.n1, request.body.n2)}`);
    }
    
});

app.put('/results', (request, response) => {
    if (operaciones.checkType(request.body.n1, request.body.n2)) {
        response.status(404).json({ error: 'No todas la variables son numeros' });
    } else {
        response.send(`Division: ${operaciones.division(request.body.n1, request.body.n2)}`);
    }
});

app.patch('/results', (request, response) => {
    if (operaciones.checkType(request.body.n1, request.body.n2)) {
        response.status(404).json({ error: 'No todas la variables son numeros' });
    } else {
        response.send(`Potencia: ${operaciones.potencia(request.body.n1, request.body.n2)}`);
    }
});

app.delete('/results/:n1/:n2', (request, response) => {
    if (operaciones.checkType(request.params.n1, request.params.n2)) {
        response.status(404).json({ error: 'No todas la variables son numeros' });
    } else {
        response.send(`Resta: ${operaciones.resta(request.params.n1, request.params.n2)}`);
    }
});

app.listen(4000, () => {
    console.log("Server is running in port 4000");
});