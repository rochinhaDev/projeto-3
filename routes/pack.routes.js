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
      const newPack = await packModel.create(form);
          
      return res.status(200).json(newPack);
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
});




export default packRouter