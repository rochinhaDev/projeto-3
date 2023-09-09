import { Schema, model } from "mongoose";

const packSchema = new Schema(
  {
    title: {
      type: String,
      enum: [
        "Rose",
        "Reds and Whites",
        "Reds",
        "Whites",
        "Nationals",
        "Imports",
      ],
      required: true,
    },
    wines: [{type: Schema.Types.ObjectId, ref: "Wine"}],
    description: { type: String, required: true },
    type: { type: String, enum: ["2 pack", "4 pack", "6 pack"], required: true },
    delivery: { type: String, enum: ["Pick up", "Delivery"], required: true },
    origin: { type: String, required: true },
    price: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("Pack", packSchema);
