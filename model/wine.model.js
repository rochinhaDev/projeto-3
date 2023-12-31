import { Schema, model } from "mongoose";

const wineSchema = new Schema(
  {
    grape: {
      type: String,
      enum: [
        "Merlot",
        "Cabernet Sauvignon",
        "Pinot Noir",
        "Malbec",
        "Chardonnay",
        "Sauvignon Blanc",
        "Rose",
        "outro",
      ],
      required: true,
    },
    description: { type: String, required: true },
    category: { type: String, enum: ["red", "white", "rose"], required: true },
    alcoholLevel: { type: String, required: true },
    year: { type: String, required: true },
    brand: { type: String, required: true },
    origin: { type: String, required: true, default:"Inespecificada" },
    price: { type: String, required: true },
    status: {type: Boolean, default: true},
    photo: { type: String, default: "https://www.corneyandbarrow.com/media/catalog/product/placeholder/default/placeholder-image-base.jpeg"}
  },
  { timestamps: true }
);

export default model("Wine", wineSchema);
