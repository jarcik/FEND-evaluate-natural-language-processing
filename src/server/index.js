//environment variales
const dotenv = require('dotenv');
dotenv.config();

//espress
var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

//application
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
//Cors for cross origin allowance
const cors = require('cors');
//aylien sdk
const AYLIENTextAPI = require("aylien_textapi");

//instantiate the textapi from aylien sdk
var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//use cors
app.use(cors());

//init the main project folder
app.use(express.static('dist'));

console.log(__dirname);

//server the home page index.html
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

//designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
    console.log(`Your API key is ${process.env.API_KEY}`);
});

//classify - route for getting data from the API
app.post('/classify', classifyUserInput);

//handling method for the post classify
//send request to API and get the data for user
function classifyUserInput(req, res) {
    //user input from request
    let userInput = req.body.formText;
    console.log(userInput);
    //request to API
    textapi.sentiment({
        text: userInput
    }, (errorMessage, apiData) => {
        if(errorMessage) {
            console.log(errorMessage);
            return;
        }
        res.json(apiData);
    });
}

//test
app.get('/test', function (req, res) {
    //send response to the client
    res.send(mockAPIResponse);
});
