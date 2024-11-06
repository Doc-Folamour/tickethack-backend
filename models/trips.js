const mongoose = require("mongoose");

const tripsSchema = new mongoose.Schema({
        departure: String,
        arrival: String,
        date: Date,
        price: Number,
    });

const Trip = mongoose.model("trips", tripsSchema);

module.exports = Trip;