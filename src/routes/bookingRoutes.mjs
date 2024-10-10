import express from "express";
import * as BookingController from '../controllers/bookingController.mjs'



const router = express.Router();

router.get('/bookings', BookingController.getAllBookings);
router.get('/bookings/:id' , BookingController.getBookingById);


// /////////////
// Create a new booking
router.post('/bookings', BookingController.createBooking); 

// Update a booking by ID
router.put('/bookings/:id', BookingController.updateBooking); 

// Delete a booking by ID
router.delete('/bookings/:id', BookingController.deleteBooking); 




export default router ;