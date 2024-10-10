import mongoose from "mongoose";

// review schema
const reviewSchema = new mongoose.Schema({
  rating: Number,
  comment: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  vanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Van', required: true },
  createdAt: { type:
    Date,
    default: Date.now,
    expires: 30 * 24 * 60 * 60 * 1000, // 30 days
  },
});

const Review = mongoose.model("Review",reviewSchema)

export default Review;
