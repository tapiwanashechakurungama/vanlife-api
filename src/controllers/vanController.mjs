
import Van from "../models/vanModel.mjs";

export async function createVan(req, res) {
  try {
    const newVan = new Van(req.body);
    await newVan.save();
    res.status(201).json(newVan);
  } catch (error) {
  
    res
      .status(400)
      .json({ message: "Failed to create van", error: error.message });
  }
}

export async function getAllVans(req, res) {
  try {
    const vans = await Van.find();
    res.status(200).json(vans);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch vans", error: error.message });
  }
}

export async function getVanById(req, res) {
  try {
    const van = await Van.findById(req.params.id);
    if (!van) {
      return res.status(404).json({ message: "Van not found" });
    }
    res.status(200).json(van);
  } catch (error) {
     res.status(500).json({ message: "Failed to fetch van", error: error.message });
  }
}

export async function updateVan(req, res) {
  try {
    const updatedVan = await Van.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedVan) {
      return res.status(404).json({ message: "Van not found" });
    }
    res.status(200).json(updatedVan);
  } catch (error) {
    
    res
      .status(400)
      .json({ message: "Failed to update van", error: error.message });
  }
}


export async function deleteVan(req, res) {
  try {
    const deletedVan = await Van.findByIdAndDelete(req.params.id);
    if (!deletedVan) {
      return res.status(404).json({ message: "Van not found" });
    }
    res.status(200).json({ message: "Van deleted successfully" });
  } catch (error) {
    
    
    res
      .status(500)
      .json({ message: "Failed to delete van", error: error.message });
  }
}
