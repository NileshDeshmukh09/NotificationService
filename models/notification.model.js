const mongoose = require("mongoose");
const constant = require("../utils/constants");

const notificationSchema = new mongoose.Schema({

    subject : {
        type : String,
        required : true
    },

    ticketId : {
        type : [String],
        required : true
    },

    content : {
        type : String,
        requiree : true
    },

    recepientEmails : {
        type : [String],
        required : true
    },

    requester : {
        type : String,
    },

    sentStatus : {
        type : String,
        required : true,
        default : constant.sentStatus.unsent
    },

    createdAt : {
        type : Date,
        immutable :true,
        default :()=>{
            return Date.now();
        }
    },

    updatedAt : {
        type :Date,
        default : () => {
            return Date.now();
        }
    }
});

module.exports = mongoose.model("Notification", notificationSchema);