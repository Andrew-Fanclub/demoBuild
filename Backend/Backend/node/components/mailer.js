// mailer file for contact page
// will use nodemailer and mailjet as api

// side note need to wait for catherine to finish up frontend so I can connect it
// also need to see if heroku will allow port-forwarding for mailjet api

import { Mailer } from 'nodemailer-react';

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

export const mailer = Mailer(
    { transport, defaults },
    { email }
)

mailer.send('email', {
    to: 'afcplushies@gmail.com'
})

module.exports = { Mailer };