const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("Item", ItemSchema);