const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ["Appartement", "Villa", "Bureau", "Studio", "Immeuble"],
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // Personnalisation du projet
  customization: {
    colors: {
      interior: {
        type: String,
        required: true,
      },
      exterior: {
        type: String,
        required: true,
      },
    },
    materials: {
      type: String,
      required: true,
    },
    surface: {
      type: Number,
      required: true,
    },
  },
  options: {
    jardin: {
      type: Boolean,
      default: false,
    },
    piscine: {
      type: Boolean,
      default: false,
    },
    garage: {
      type: Boolean,
      default: false,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

projectSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Project", projectSchema);
