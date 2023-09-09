import express from "express";
import isAuth from "../middlewares/isAuth.js";
import WineModel from "../model/wine.model.js";
import PackModel from "../model/pack.model.js";
import UserModel from "../model/user.model.js";

const packRouter = express.Router();

//criar um pack
packRouter.post("/create-pack", isAuth, async (req, res) => {
  try {
    const form = req.body;
    const newPack = await PackModel.create(form);

    return res.status(200).json(newPack);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

packRouter.get("/all", async (req, res) => {
  try {
    const allPacks = await PackModel.find({ active: true });
    return res.status(200).json(allPacks);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

packRouter.get("/get-all", isAuth, async (req, res) => {
  try {
    const allPacks = await PackModel.find({ active: true });
    return res.status(200).json(allPacks);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

packRouter.get("/get-pack/:id", async (req, res) => {
  try {
    const id_pack = req.params.id;
    const pack = await PackModel.findById(id_pack);
    return res.status(200).json(pack);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

packRouter.put("/update/:id"),
  async (req, res) => {
    try {
      const id_pack = req.params.id;
      const data = req.body;
      const config = { new: true, runValidators: true };
      const pack = await PackModel.findByIdAndUpdate(id_pack, data, config);
      return res.status(200).json(pack);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  };

packRouter.delete("/delete/:id-pack"),
  async (req, res) => {
    try {
      const id_pack = req.params.id;
      const deletedPack = await PackModel.findByIdAndUpdate(id_pack, {
        active: false,
      });
      const config = { new: true, runValidators: true };
      return res.status(200).json("Pack desativado");
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  };

  packRouter.put("/add-wine-to-pack", isAuth, async (req, res) => {
    try {
      const id_wine = req.auth._id;
      const id_pack = req.body.id_pack;
      const addPack = await PackModel.findByIdAndUpdate(
        id_wine,
        { $push: { history_pack: id_pack } },
        { new: true, runValidators: true }
      );
      return res.status(200).json(addPack);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  });

  packRouter.put("/delete-wine-from-pack", isAuth, async (req, res) => {
    try {
      const id_wine = req.auth._id;
      const id_pack = req.body.id_pack;
      const deletePack = await PackModel.findByIdAndUpdate(
        id_wine,
        { $pull: { history_pack: id_pack } },
        { new: true, runValidators: true }
      );
      return res.status(200).json(deletePack);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  });

export default packRouter;
