/**
 *  Controller for the Notification Request
 */

const Notification = require("../models/notification.model");


/**
 * Accept the Notification  request and return the Tracking ID
 */

async function acceptNotificationRequest(req , res){

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
            ticketID : notification.ticketId,
        })
    }catch(err){
        console.log(err);
        res.status(500).send({
            message : "Error while accepting the request"
        })
    }
}

/**
 *  Check the Notification Status ( if email is sent or not ) using the 
 *  Tracking ID
 */

async function getNotificationStatus(req, res){
    const reqID = req.params.id;
    try{
        const notification = await Notification.findOne({
            ticketId : reqID
        });

        res.status(200).send({
            requestID : notification.ticketId,
            status : notification.sentStatus
        });
    }catch(err){
        console.log(err);

        res.status(500).send({
            message : "Internal error while fetching the Notification Status"
        })
    }
}
module.exports = { acceptNotificationRequest  , getNotificationStatus}