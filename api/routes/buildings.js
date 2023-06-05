import express from "express";
import Building from "../models/Building.js";
import { createError } from "../utils/error.js";
import {createBuilding, deleteBuilding,getBuilding,getBuildings,updateBuilding} from "../controllers/building.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createBuilding);
//UPDATE
router.put("/:id", verifyUser, updateBuilding);
//DELETE
router.delete("/:id", verifyUser, deleteBuilding);
//GET
router.get("/:id", getBuilding);
//GET ALL
router.get("/", getBuildings);

export default router