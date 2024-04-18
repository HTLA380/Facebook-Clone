const express = require("express");
const {
  getNotifications,
  getNotificationById,
  createNotification,
  updateNotificationById,
  deleteNotificationById,
} = require("../controllers/notifications");
const router = express.Router();

router.get("/", getNotifications);
router.get("/:id", getNotificationById);
router.post("/", createNotification);
router.patch("/:id", updateNotificationById);
router.delete("/:id", deleteNotificationById);

module.exports = router;
