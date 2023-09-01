const controllers = require ('./DB/controllers')
const express = require ('express');
const { pool } = require('./DB/database');
const cors = require('cors');


const app = express();
app.use(cors());


app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: 'GET,POST', // Allow only specified HTTP methods
    allowedHeaders: 'Content-Type', // Allow only specified headers
}));

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

// API CALL for attendence

app.get('/get_attendence', (req, res) => {
    controllers.get_attendence()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(response);
    })
})

    // Call to all ongoing Calls
app.get('/ongoingCall', (req, res) => {
    controllers.get_going_calls()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(404).send(response);
    })
})

// Call to get contact being already contacted

app.get('/get_contacted', (req, res) => {
    controllers.get_contacted()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(404).send(response);
    })
});

// CALL TO REGISTER NEW STAFF

app.post('/add', async (req, res) => {
    try {
        // Extract data from the request body
        const { emp_id, First_Name, Last_Name, Username, _Password, _Role, CIN, Bank_Details, CNSS, Start_Time, End_Time, Phone, Email } = req.body;
        const values = [emp_id, First_Name, Last_Name, Username, _Password, _Role, CIN, Bank_Details, CNSS, Start_Time, End_Time, Phone, Email];

        console.log("Values entered:", values);

        // Perform database insertion using query
        const quecall = "INSERT INTO usage_right VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)";
        await pool.query(quecall, values);

        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error.stack);
        res.status(500).json({ success: false });
    }
});


app.post('/signin',  async (req, res) => {

    try {
        const { Username, _Password } = req.body;
        await pool.query('Select * from usage_right WHERE username = $1 AND _password = $2', [Username, _Password]);
        res.status(200)
    } catch (error) {
        if(!error) { console.log('Got an error in the login API call') };
        console.log(error);
    } 
})



const Port = 5001;
app.listen(Port, 
    console.log(`App listerning on port: ${Port}`));


