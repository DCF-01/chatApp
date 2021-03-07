const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'email-smtp.eu-central-1.amazonaws.com',
    port: '465',
    secure: true,
    auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
    },
    debug: true
});

class Email {
    constructor (message) {
        this.message = message;
    }

    cb (error, info) {
        if(error){
            console.log(error);
        }
        else {
            console.log(info);
        }
    }
    send(){
        transporter.sendMail(this.message, this.cb);
    }
}

function handleEmail(obj) {
    if(obj.key === process.env.SECRET_KEY){
        const msg = {
            from: obj.from,
            to: obj.to,
            subject: obj.subject,
            text: obj.text
        }
        
        const new_email = new Email(msg);
        new_email.send();
        return true
    }
    else {
        throw new Error('Invalid key');
    }
}

module.exports = {
    handleEmail,
    Email
}