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
    constructor(message, toAddress){
        this.message = message;
        this.message.to = toAddress
    }

    cb(error, info){
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

function handleEmail(key, message, toAddress){
    if(key === process.env.SECRET_KEY){
        const new_email = new Email(message, toAddress);
        new_email.send();
        return true
    }
    else {
        throw new Error('Invalid key');
    }
}

module.exports = {
    handleEmail
}