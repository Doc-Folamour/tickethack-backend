var express = require("express");
var router = express.Router();
require("../models/connection.js");
const Trip = require("../models/trips.js");

//GET trips request
router.get("/:departure/:arrival/:date", (req, res) => {
    // Create Date Object from last params which start at midnight UTC
const tripDate = new Date(req.params.date);
    // Set a new Date object which is 24h later than our start date to search in database
const tripDateEnd = new Date(tripDate);
tripDateEnd.setDate(tripDate.getDate() + 1);
    // Find every documents in database which correspond to search criterias
Trip.find({ 
    departure: req.params.departure,
    arrival: req.params.arrival,
    // Important : use toISOString() method to convert Date object into standardize string to use in mongoDB
    date: { $gt: tripDate.toISOString(), $lt: tripDateEnd.toISOString() }
    })
    // Retunr results
.then(data => {
    res.json({
        result: true,
        trips: data,
    })
})
});

module.exports = router;