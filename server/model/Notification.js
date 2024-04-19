const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "notification name is required"],
    trim: true,
  },
  description: {
    type: String,
    require: [true, "notification description is required"],
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
