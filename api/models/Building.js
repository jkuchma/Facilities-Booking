import mongoose from 'mongoose';
const { Schema } = mongoose;

const BuildingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    manager:{
        type:String,
        required:true
    },
    building_code:{
        type:String,
        required:true
    },
    rooms:{
        type:[String],
    },
});

export default mongoose.model("Building",BuildingSchema)