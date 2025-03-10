import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose .connect('mongodb+srv://221701504:LOKESH@cluster3.r776l.mongodb.net/?retryWrites=true&w=majority&appName=ClusteR3')
    .then(() =>console.log("DB Connected"));
};
