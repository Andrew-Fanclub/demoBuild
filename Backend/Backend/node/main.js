// Main backend file
// Side note I have a bunch of stuff commented out don't worrk about it
// I'll fix them up

// Needed imports
var express = require("express");
var http = require('http');
const path = require('path');
var bodyParser = require('body-parser');
//var connect = require('connect');
//var timeout = require('connect-timeout');

var app = express();
// Body Parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded);

// Middleware
app.use(express.static(path.join(__dirname + "~/Website/Website/Website/frontend/build")));

// Set backend port
app.set('PORT', process.env.PORT);

// Render webpages
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '~/Website/Website/Website/frontend/build/index.html'));    
});

// Express timeout
app.post('/', timeout('5s'), bodyParser.json(), haltOnTimedout, function(req, res, next){
    savePost(req.body, function(err, id){
        if (err) return next(err)
        if(req.timedout) return
        res.send('saved as id' + id)
    })
})

function haltOnTimedout (req, res, next) {
    if(!req.timedout) next()
}

function savePost (post, cb) {
    setTimeout(function() {
        cb(null, ((Math.random() * 40000) >>> 0))
    }, (Math.random() * 7000) >>> 0)
}

/*app.get("/", function(req, res, err){
    if(err){
        console.error(err);    
    }
    res.render(path.join(__dirname, '~/Website/Website/Website/frontend/src/main'));
})

app.get("/howitWorks", function(req, res){
    res.render(path.join(__dirname, '~/Website/Website/Website/frontend/src/routes/howitWorks'));
})

app.get("/aboutus", function(req, res){
    res.render(path.join(__dirname, '~/Website/Website/Website/frontend/src/routes/whoweAre'));
})

app.get("/contact", function(req, res){
    res.render(path.join(__dirname, '~/Website/Website/Website/frontend/src/routes/contact'));
})*/

// Mailer section for contact page
app.post('/process?contactUs', function(req, res){
    let transporter = nodemailer.createTransport({
        host: "gmail",
        port: 'PORT',
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
