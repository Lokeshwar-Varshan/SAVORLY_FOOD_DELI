import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add food items
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// ✅ Define listFood function
const listFood = async (req, res) => {
  try {
      const foods = await foodModel.find({});
      res.status(200).json({ success: true, data: foods });
  } catch (error) {
      console.error("Database query failed:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


// ✅ Define removeFood function
const removeFood = async (req, res) => {
  try {
      const food = await foodModel.findById(req.body.id);
      if (!food) {
          return res.status(404).json({ success: false, message: "Food item not found" });
      }

      // Delete the associated image file safely
      fs.unlink(`uploads/${food.image}`, (err) => {
          if (err) {
              console.error("Error deleting image:", err);
          }
      });

      // Delete the food item from the database
      await foodModel.findByIdAndDelete(req.body.id);

      return res.json({ success: true, message: "Food Removed" });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


// ✅ Export all functions
export { addFood, listFood, removeFood };
