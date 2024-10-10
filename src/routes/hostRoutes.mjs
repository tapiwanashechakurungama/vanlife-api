import express from "express";
import {getAllHosts, getHostById, addHost, updateHost, deleteHost} from "./../controllers/hostController.mjs";

const router = express.Router();

// Get all hosts
router.get("/", getAllHosts);

// Get a specific host by ID
router.get("/:id", getHostById);

// Create a new host
router.post("/", addHost);

// Update an existing host
router.put("/:id", updateHost);

// Delete a host
router.delete("/:id", deleteHost);

export default router;
