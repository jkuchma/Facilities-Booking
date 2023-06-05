import Room from "../models/Room.js";
import Building from "../models/Building.js"
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const buildingId = req.params.buildingid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Building.findByIdAndUpdate(buildingId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom  = async (req,res, next)=>{
    try{
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new:true}
            );
        res.status(200).json(updatedRoom);

    }catch(err){
        res.status(500).json(err)
    }

};

//DELETE
export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.buildingid;
    try {
      await Room.findByIdAndDelete(req.params.id);
      try {
        await Building.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json("Room has been deleted.");
    } catch (err) {
      next(err);
    }
  };

//GET
export const getRoom = async (req,res, next)=> {
    try{
        const room = await Room.findById(
            req.params.id
            );
        res.status(200).json(room);

    }catch(err){
        res.status(500).json(err)
    }
}
//GET ALL
export const getRooms = async (req, res, next) =>{
    try{
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err){
        next(err);
    }
}
