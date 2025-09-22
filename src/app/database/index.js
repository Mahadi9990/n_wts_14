import mongoose from "mongoose";

const connectToDb =async ()=>{
    const connectDbUrl = "mongodb+srv://mdshafayat9999:mdshafayat9999@cluster0.tnfeys5.mongodb.net/" 
    mongoose.connect(connectDbUrl).then(()=>console.log("mongoose is connected")).catch((error)=>console.log(error))
}

export default connectToDb