/**
 *  We will take help of node-cron to repeat some lines of code at regular Interval
 */

const cron = require("node-cron");
const Notification = require("../models/notification.model");
const constants = require("../utils/constants");
const emailTransporter =require("../notifier/emailService");

//  Every 30 seconds , send the email notification for each  new request
cron.schedule('*/30 * * * * *',async ()=>{

    console.log("cron started");
    /**
     * I need to send the Emails
     * 
     *  1. Get the list of all the Notifications to be sent.
     *  2. Send Emails for each Notifications.
     */

    const notification = await Notification.find({ 
        sentStatus : constants.sentStatus.unsent
    })

    console.log("length : ", notification.length);
    
    notification.forEach(notification => {
        const mailData = {
            from : "crm-notification-service@gmail.com",
            to : notification.recepientEmails,
            subject : notification.subject,
            text : notification.content,
        };

        emailTransporter.sendMail( mailData ,async ( err, info ) => {
            if(err){
                console.log(err);

            }else{
                console.log(info);
                //update the status of the Notification
                const savedNotification = await Notification.findOne({
                    _id : notification._id
                });

                console.log(savedNotification);
                savedNotification.sentStatus = constants.sentStatus.sent;

                await savedNotification.save(); 
            }
        })
    })   
});