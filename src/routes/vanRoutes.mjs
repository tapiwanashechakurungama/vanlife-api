import { createVan, deleteVan, getAllVans, getVanById, updateVan } from "../controllers/vanController.mjs";

import express from "express"

const router = express.Router();


router.get("/", getAllVans);
router.get("/vans/:id", getVanById);
router.post("/create", createVan);
router.put("/vans/:id", updateVan);
router.delete("/:id", deleteVan);


export default router;