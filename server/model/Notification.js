const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  notificationType: {
    type: String,
    require: [true, "notification name is required"],
    trim: true,
  },
  name: {
    type: String,
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
