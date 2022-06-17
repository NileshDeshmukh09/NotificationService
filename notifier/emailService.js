/**
 *  This File will have the logic to send emails
 */

const nodemailer = require("nodemailer");

/**
 * I need to setup the nodeMailer for sending the EMails
 * 
 *   1. SMTP Hosts 
 *   2. Credentials if needed 
 */

//createTransport - help us to configure all the SMTP hosts ,PORT NUmber and credentials
module.exports = nodemailer.createTransport({
    port : 465,
    host : "smtp.gmail.com",
    auth : {
        user : 'deshmukh19cs035@satiengg.in',
        pass : 'Nilesh@2000'
    },
    secure : true
});

/**
 * Transporter will be used to send the emails
 */

// const mailDataObj = {
//     from : "salmanKhan@bollywood.com",
//     to : "nileshdeshmukh092000@gmail.com",
//     subject : "IMP Message ",
//     text : "There's nothing important than time in Life !"
// }

// transporter.sendMail(mailDataObj , (err, info)=> {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(info);
//     }
// })