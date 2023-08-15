const controllers = require ('./DB/controllers')
const express = require ('express');

const app = express();

app.use(express.json())
app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
   next();
});

app.get('/get_performance', (req, res) => {
    controllers.get_performance()
        .then(response => {
            res.status(200).send(response)
        })
        .catch(error => {
            res.status(500).send(error)
        })
});


app.get('/contacts', (req, res) => {
    controllers.get_contact()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error.message);
    })
});

const Port = 5001;
app.listen(Port, 
    console.log(`App listerning on port: ${Port}`));


