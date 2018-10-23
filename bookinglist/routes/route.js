const express = require('express');
const router = express.Router();

const Booking = require('../models/bookings');
//retrieving booking details
router.get('/bookings',(req,res,next)=>{
    //res.send('Retrieveing booking details');
    Booking.find(function(err, bookings){
        res.json(bookings);
    })
});

//add the booking details
router.post('/booking',(req, res,next)=>{
 let newBooking = new Booking({
     first_name:req.body.first_name,
     last_name:req.body.last_name,
     contactno:req.body.contactno
 })
 newBooking.save((err, booking)=>{
     if(err)
     {
         res.json({msg:'Failed to add booking'});
    }
    else{
        res.json({msg:'room bookked sucessfully'});;
    }
 });
});
//deleting the booking details
router.delete('/booking/:id',(req, res,next)=>{
    Booking.remove({_id:req.params.id}, function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
module.exports = router;