/**
 * This will contain the routes for the ticket Notification Request
 */
const notificationController = require("../controllers/notification.controller");
module.exports = (app) => {

    app.post("/notifservice/api/v1/notifications", notificationController.acceptNotificationRequest);
}