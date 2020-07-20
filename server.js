const express = require('express');
const app = express();
const morgan = require('morgan')
const port = 4000;

app.listen(port, () => {
    console.log('Server Started on Port ${port}');

});

app.get('/api/students', (req, res) => {
const students = [
    { id: 1, firstName: 'Captain', lastName: 'Fancy'},
    {id: 2, firstName: 'John', lastName: 'buttercup'},
    { id: 3, firstName: 'Dusty', lastName: 'Trail'},
];
res.json(students);  

});