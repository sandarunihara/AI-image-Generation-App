import mongoose from "mongoose";

const connectDB =(URL) => {
    mongoose.set('strictQuery',true);

    mongoose.connect(URL)
    .then(()=>console.log('MongoDB Connected'))
    .catch(err=>console.log(err));
}
    

export default connectDB;