import mongoose from 'mongoose';

// Define the payment schema
const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to User model
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },  // Reference to Booking model
  amount: { type: Number, required: true },  // Payment amount
  currency: { type: String, required: true },  // Currency type (e.g., USD, EUR)
  paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },  // Payment status
  paymentMethod: { type: String, required: true },  // Payment method (e.g., 'card', 'paypal')
  createdAt: { type: Date, default: Date.now },  // Timestamp of payment creation
});

// Create the Payment model using the schema
const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
