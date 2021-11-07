const mongoose = require("mongoose");

const greetingSchema = new mongoose.Schema(
  {
    _id: {
      type: "string",
    },
    name: {
      type: "string",
      required: true,
      trim: true,
    },
    email: {
      type: "string",
      required: true,
      lowercase: true,
      trim: true,
    },
    views: {
      type: "number",
      default: 0,
    },
  },
  { timestamps: true }
);

greetingSchema.methods.getPublicMessage = function () {
  const greet = this;
  const greetObj = greet.toObject();
  delete greetObj.email;
  delete greetObj.createdAt;
  delete greetObj.updatedAt;
  return greetObj;
};

const Greeting = mongoose.model("Greeting", greetingSchema);

module.exports = Greeting;
