import express from "express";
import wineModel from "../model/wine.model.js";
import isAuth from "../middlewares/isAuth.js";

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
    const allWines = await wineModel.find({status: true});
    return res.status(200).json(allWines);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

wineRouter.get("/get-all", isAuth, async (req, res) => {
  try {
    console.log("acessado")
    const allWines = await wineModel.find({status: true});
    console.log("vinhos encontrados")
    return res.status(200).json(allWines);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

wineRouter.get("/get-wine/:id", isAuth, async (req, res) => {
  try {
    const id_wine = req.params.id;
    const wine = await wineModel.findById(id_wine);
    return res.status(200).json(wine);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

wineRouter.get("/get-all/:category", isAuth, async (req, res) => {
  try {
    const category = req.params.category;
    const categories = await wineModel.find({ category: category });

    return res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

wineRouter.put("/update/:id"),
  async (req, res) => {
    try {
      const id_wine = req.params.id;
      const data = req.body;
      const config = { new: true, runValidators: true };
      const wine = await wineModel.findByIdAndUpdate(id_wine, data, config);
      return res.status(200).json(wine);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  };

wineRouter.delete("/delete/:id-wine", async (req, res) => {
  try {
    const id_wine = req.params.id_wine;

    const deletedWine = await wineModel.findByIdAndUpdate(
      id_wine,
      {active: false}
    );
    return res.status(200).json("Vinho inativado com sucesso");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

export default wineRouter;
