import express from "express";
import wineModel from "../model/wine.model.js";

const wineRouter = express.Router();

wineRouter.post("/create-wine", async (req, res) => {
  try {
    const form = req.body;
    const newWine = await wineModel.create(form);
    return res.status(200).json(newWine);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

wineRouter.get("/all", async (req, res) => {
  try {
    const allWines = await wineModel.find({});
    return res.status(200).json(allWines);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

wineRouter.get("/get-wine/:id", async (req, res) => {
  try {
    const id_wine = req.params.id;
    const wine = await wineModel.findById(id_wine);
    return res.status(200).json(wine);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//put
//delete

export default wineRouter;
