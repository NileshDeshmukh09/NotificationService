/**
 *  We will take help of node-cron to repeat some lines of code at regular Interval
 */

const cron = require("node-cron");

//  Every 30 seconds , send the email notification for each  new request
cron.schedule('*/30 * * * *', ()=>{
    /**
     * I need to send the Emails
     * 
     *  1. Get the list of all the Notifications to be sent.
     *  2. Send Emails for each Notifications.
     */
});