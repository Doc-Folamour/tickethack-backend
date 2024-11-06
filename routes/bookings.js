var express = require('express');
var router = express.Router();
require ("../models/connection.js");
const Booking = require ("../models/bookings")

router.post('/', function(req, res) {
    const purchase = new Booking ({
        departure: req.body.departure,
        arrival: req.body.arrival,
        date: new Date (req.body.date),
        price: req.body.price,
    });
    purchase.save()
    .then(
        res.json({ result: true }
        )
    );
});

module.exports = router;