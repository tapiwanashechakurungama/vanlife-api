import Review from "../models/reviewModel.mjs";

//Get All Reviews
const getAllReviews= async(req, res) =>{
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to get reviews", error });
  }
}

// Get Review by ID

const getReviewById = async(req, res) =>{
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: "Failed to get review", error });
  }
}

// Add Review

const addReview = async(req, res) =>{
  const review = new Review(req.body);
  try {
    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(400).json({ message: "Invalid review data", error });
  }
}

// Update Review

const updateReview = async(req, res) =>{
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedReview)
      return res.status(404).json({ message: "Review not found" });
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(400).json({ message: "Invalid review data", error });
  }
}

// Delete Review

const deleteReview = async(req, res) =>{
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview)
      return res.status(404).json({ message: "Review not found" });
    res.status(200).json(deletedReview);
  } catch (error) {
    res.status(500).json({ message: "Failed to delete review", error });
  }
}
export {deleteReview, updateReview,addReview,getReviewById ,getAllReviews}