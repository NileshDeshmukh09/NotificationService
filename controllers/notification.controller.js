/**
 *  Controller for th Notification Request
 */

const Notification = require("../models/notification.model");


/**
 * Accept the Notification  request and return the Tracking ID
 */

function acceptNotificationRequest(req , res){

    // Request Body
    const notificationObj = { 
        subject : req.body.subject,
        content : req.body.content,
        recepientEmails : req.body.recepientEmails,
        requester : req.body.requester,
        ticketId : req.body.ticketId,
    }

    try {
        const notification = await Notification.create(notificationObj);

        res.status(201).send({
            status : "Accepted Request - It's in Progress.",
            requestID : notification.ticketId,
        })
    }catch(err){
        console.log(err);
        res.status(500).send({
            message : "Error while accepting the request"
        })
    }
}

module.exports = { acceptNotificationRequest }
/**
 *  Check the Notification Status ( if email is sent or not ) using the 
 *  Tracking ID
 */