import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose .connect('mongodb+srv://221701504:d6NGt8xgi9KVlbTz@cluster0.eox7v.mongodb.net/food')
    .then(() =>console.log("DB Connected"));
};
