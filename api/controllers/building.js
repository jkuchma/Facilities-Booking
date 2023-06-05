import Building from "../models/Building.js";

//CREATE
export const createBuilding = async (req, res, next) => {
  const newBuilding = new Building(req.body);

  try {
    const savedBuilding = await newBuilding.save();
    res.status(200).json(savedBuilding);
  } catch (err) {
    next(err);
  }
};

//UPDATE
export const updateBuilding  = async (req,res, next)=>{
    try{
        const updatedBuilding = await Building.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new:true}
            );
        res.status(200).json(updatedBuilding);

    }catch(err){
        res.status(500).json(err)
    }

};

//DELETE
export const deleteBuilding = async (req, res, next)=>{
    try{
        await Building.findByIdAndDelete(
            req.params.id
            );
        res.status(200).json("Building has been deleted.");
    }catch(err){
        res.status(500).json(err)
    }
};

//GET
export const getBuilding = async (req,res, next)=> {
    try{
        const building = await Building.findById(
            req.params.id
            );
        res.status(200).json(building);

    }catch(err){
        res.status(500).json(err)
    }
}
//GET ALL
export const getBuildings = async (req, res, next) =>{
    try{
        const buildings = await Building.find();
        res.status(200).json(buildings);
    } catch (err){
        next(err);
    }
}
