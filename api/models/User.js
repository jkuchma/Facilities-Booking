import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true,
        unique:true
    },
    department:{
        type:String,
        required:true
    },
    isAdmin:{
        type: Boolean,
        default:false
    },
},
{timestamps: true}
);

export default mongoose.model("User",UserSchema)