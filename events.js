const express = require('express')
const bodyParser = require('body-parser')
const app = express();

//Services
let eventServices = require("./services/eventServices");

app.use(bodyParser.json({ extended: false }))

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
    let content = req.body.Content
    let eventName = req.body.EventName

    console.log(eventServices[eventName](content))
    res.send("Ok")
});

app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});

app.listen(8080, () =>
    console.log("stromee communication API is running"),
);