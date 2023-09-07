import express from "express";
import isAuth from "../middlewares/isAuth.js";
import WineModel from "../model/wine.model.js";
import PackModel from "../model/pack.model.js";
import UserModel from "../model/user.model.js";

const packRouter = express.Router();

//criar um pack
jobRouter.post("/create-pack", isAuth, async (req, res) => {
   try {
      const form = req.body;
      const id_wine = req.auth._id;

      const packCreated = await packModel.create({
         ...form,
         wine: id_wine,
      });

      //adicionar o id do pack recem criado dentro da array packs(?)
      await UserModel.findByIdAndUpdate(id_user, {
         $push: { listedIn: jobCreated._id },
      });

      return res.status(200).json(packCreated);
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
});


export default packRouter