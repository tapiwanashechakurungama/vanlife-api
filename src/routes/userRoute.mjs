import { createUser, deleteUser, getAllUser, getUserById, updateuser } from "../controllers/userController.mjs"
import User from "./../models/userModel.mjs"
import express from "express"
const router = express.Router()


//create a new user 
router.post("/create",createUser)
//get user by id
router.get("/:id",getUserById)
//get all users
router.get("/",getAllUser);
//delete user by id
router.delete("/:id", deleteUser);
//update user by id
router.put("/:id", updateuser);


export default router