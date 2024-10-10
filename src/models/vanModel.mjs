import mongoose from "mongoose";

const VanSchema = new mongoose.Schema({
  van_id: { type: String, required: true },
  name: { type: String, required: true },
  pictureUrl: { type: String, required: true },
  category: { type: String, required: true },
  pricePerDay: { type: Number, required: true },
  description: { type: String, required: true },
  available: { type: Boolean, default: true },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  
})


const Van = mongoose.model("Van", VanSchema);

export default Van;