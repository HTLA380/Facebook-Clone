const notificationModel = require("../model/Notification");

const getNotifications = async (req, res) => {
  try {
    const notifications = await notificationModel.find({});
    res.status(200).json({ success: true, pages: notifications.length, notifications });
  } catch (error) {
    throw new Error(error);
  }
};

const getNotificationById = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await notificationModel.findById(id);
    if (!notification) {
      return res.status(404).json({ success: false, message: `notification with id:${id} not found` });
    }
    res.status(200).json({ success: true, notification });
  } catch (error) {
    throw new Error(error);
  }
};

const createNotification = async (req, res) => {
  try {
    await notificationModel.create(req.body);
    res.status(201).json({ success: true, message: "created notification successfully" });
  } catch (error) {
    throw new Error(error);
  }
};

const updateNotificationById = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await notificationModel.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    if (!notification) {
      return res.status(404).json({ success: false, message: `notification with id:${id} not found` });
    }
    res.status(200).json({ success: true, notification });
  } catch (error) {
    throw new Error(error);
  }
};

const deleteNotificationById = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await notificationModel.findByIdAndDelete(id);
    if (!notification) {
      return res.status(404).json({ success: false, message: `notification with id:${id} not found` });
    }
    res.status(200).json({ success: true, message: "deleted notification successfully" });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getNotifications,
  getNotificationById,
  createNotification,
  updateNotificationById,
  deleteNotificationById,
};
