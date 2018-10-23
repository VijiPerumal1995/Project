const mongoose = require('mongoose');


const BookingSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required:true
    },
    contactno:{
        type: String,
        required:true
    }
});

const Booking = module.exports = mongoose.model('Booking',BookingSchema);