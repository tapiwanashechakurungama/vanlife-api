import mongoose from "mongoose";

const hostSchema = new mongoose.Schema({
  // Host-specific information
  hostId: { type: String, required: true, unique: true },
  hostName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

});

export default mongoose.model("Host", hostSchema);      
