// Main backend file
// Side note I have a bunch of stuff commented out don't worrk about it
// I'll fix them up

// Needed imports
var express = require("express");
var app = express();
//var render = require('./components/render')
var http = require('http');
const path = require('path');
//const Mailer = require('./components/mailer');
var bodyParser = require('body-parser');

// Body Parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded);

// Middleware
app.use(express.static("~/Website/Website/Website/frontend/src"));

// Set backend port
app.set('PORT', process.env.PORT || 8080);

// Render webpages
app.use(path.join(__dirname, '~/Website/Website/Website/frontend/src'));

app.get("/", function(req, res){
    console.log();
    res.sendFile(path.join(__dirname, 'src', 'main'));
})

app.get("/howitWorks", function(req, res){
    console.log();
    res.sendFile(path.join(__dirname, 'src', './routes/howitWorks'));
})

app.get("/aboutus", function(req, res){
    console.log();
    res.sendFile(path.join(__dirname, 'src', './routes/whoweAre'));
})

app.get("/contact", function(req, res){
    console.log();
    res.sendFile(path.join(__dirname, 'src', './routes/contact'));
})

// Mailer section for contact page
app.post('/process?contactUs', function(req, res){
    let transporter = nodemailer.createTransport({
        host: "gmail",
        port: 8080,
        secure: true,
        auth: {
            user: 'afcplushies@gmail.com',
            pass: 'af2plush!3$',
        }
    })

    let mailOptions = {
        to: 'afcplushies@gmail.com',
        subject: req.body.name + req.body.email,
        text: req.body.message
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return console.log(error);
        }
            console.log('Message %s sent: %s', info.messageId, info.response);
        })

    res.writeHead(301, { Location: 'index.html' })
    res.end();
})

// Start listening on port 8080
app.listen(app.get('PORT'), function(){
    console.log('Server started on port: ' + app.get('PORT'));
})

/*
// Create the server
const server = http.createServer((req, res) => {
    app.get("/", function(req, res){
        console.log("Connected to AFCPlushies home");
        res.send("/");
    });
    
    app.get("/howitWorks", function(req, res){
        console.log("Connected to AFCPlushies how it works");
        res.send("/howitWorks");
    })
    
    app.get("/whoweAre", function(req, res){
        console.log("Connected to AFCPlushies who we are");
        res.send("/whoweAre");
    })
    
    app.get("/contactUs", function(req, res){
        console.log("Connected to AFCPlushies contact us");
        res.send("/contactUs");
    })
})

// Start listening on port 8080
app.listen(app.get('PORT'), function(){
    console.log('Server started on port: ' + app.get('PORT'));
})

/* // Render file for each webpageb 

app.get("/", function(req, res){
    console.log("Connected to AFCPlushies home");
    res.send("/");
});

app.get("/howitWorks", function(req, res){
    console.log("Connected to AFCPlushies how it works");
    res.send("/howitWorks");
})

app.get("/whoweAre", function(req, res){
    console.log("Connected to AFCPlushies who we are");
    res.send("/whoweAre");
})

app.get("/contactUs", function(req, res){
    console.log("Connected to AFCPlushies contact us");
    res.send("/contactUs");
})

module.exports = router; */
