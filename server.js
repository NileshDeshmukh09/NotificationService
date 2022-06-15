/**
 * This file will havee the logic to start the server
 */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose= require("mongoose");
const dbConfig = require("./configs/db.config");
const serverConfig = require("./configs/server.config");

// Register the body-parser middleware to express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true} ));

// Connect to the MongoDB
mongoose.connect(dbConfig.DB_URL , ()=>{
    console.log("MongoDB Connected !")
}, err =>{
    console.log("Error while Connecting ", err);
});
/**
 * Stitching the Routes
 */
require("./routes/ticketNotification.route")(app);


/**
 * Staart the server
 */

app.listen(serverConfig.PORT, (req, res)=>{
    console.log(`Server setup at http://localhost:${serverConfig.PORT}`)
})
