import mongoose from 'mongoose';
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    room_number:{
        type:Number,
        required:true
    },
    unavailable_dates:{
    },
    space_type:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    booked:{
        type:Boolean,
        required:true
    }
},
{timestamps: true}
);

export default mongoose.model("Room",RoomSchema)