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
    type: String,
    require: [true, "notification date is required"],
  },
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
