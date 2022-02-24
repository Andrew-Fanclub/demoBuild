// mailer file for contact page
// will use nodemailer and mailjet as api

// side note need to wait for catherine to finish up frontend so I can connect it
// also need to see if heroku will allow port-forwarding for mailjet api

/*const Mailer = require('nodemailer');

const transport = {
    host: 'afcplushies@gmail.com',
    secure: true,
    auth: {user: 'afcplushies@gmail.com', pass: 'af2plush!3$'},
}

const defaults = {
    from: 'body.req.email' + ' ' + 'body.req.name',
}

export const email = () => ({
    subject: body.req.email,
    body: (
        'body.req.message'
    )
})

export const mail = Mailer(
    { transport, defaults },
    { email }
)

mail.send('email', {
    to: 'afcplushies@gmail.com'
})*/

let transporter = nodemailer.createTransport({
    host: "gmail",
    port: 8080,
    secure: true,
    auth: {
        user: 'marlonportfolio@gmail.com',
        pass: '',
    }
})

let mailOptions = {
    to: 'marlonportfolio@gmail.com',
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

module.exports = { mailer };
