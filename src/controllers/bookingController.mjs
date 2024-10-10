import Booking from "../models/bookingModel.mjs";


// get all bookings
export async function getAllBookings(req , res){

  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bookings', error });
  }
}

// Get a single booking by ID
export async function getBookingById (req, res) {
    try {
      const booking = await Booking.findById(req.params.id);
      if (!booking) {
        return res.status(404).json({ message: 'Booking not found' });
      }
      res.status(200).json(booking);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch booking', error });
    }
  };

 // Create a new booking
export async function createBooking(req, res) {
  res.status(200).send(req.body)
  // try {
  //   const newBooking = new Booking(req.body);
  //   const savedBooking = await newBooking.save();
  //   res.status(201).json(savedBooking);
  // } catch (error) {
  //   res.status(400).json({ message: 'Failed to create booking', error });
  // }
};

// Update a booking by ID
export async function updateBooking(req, res) {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return the updated document
    );
    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update booking', error });
  }
};

// Delete a booking by ID
export async function deleteBooking(req, res) {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(204).send(); // 204 No Content 
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete booking', error });
  }
};