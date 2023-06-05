import express from "express";
const router = express.Router();
import {updateUser, deleteUser, getUser, getUsers} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("Logged in successfully")
})

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
    res.send("Logged in successfully")
})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
    res.send("Admin verified. Logged in successfully")
})
//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUser);
//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router
