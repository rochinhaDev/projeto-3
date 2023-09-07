import { Schema, model } from "mongoose";

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18 },
    telephone: {
      type: String,
      required: true,
      trim: true,
    },
    cpf: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (cpf) {
          return cpfRegex.test(cpf);
        },
        message: "CPF inválido",
      },
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, // match = regex
    },

    profilePicture: {
      type: String,
      default: "https://cdn.wallpapersafari.com/92/63/wUq2AY.jpg",
    },
    history_pack: [
      {
        type: Schema.Types.ObjectId,
        ref: "Pack",
      },
    ],
    history_wine: [
      {
        type: Schema.Types.ObjectId,
        ref: "Wine",
      },
    ],

    passwordHash: { type: String, required: true },
  },
  // o que mais eu posso colocar nas opcoes do schema?
  { timestamps: true }
);

export default model("User", userSchema);
