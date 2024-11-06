const mongoose = require('mongoose');

const bookingsSchema = new mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number, 
})

 const Booking =  mongoose.model('bookings', bookingsSchema);
 
 module.exports = Booking