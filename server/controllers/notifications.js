const getNotifications = (req, res) => {
  res.json({ message: "get notifications" });
};

const getNotificationById = (req, res) => {
  res.json({ message: req.params.id });
};

const createNotification = (req, res) => {
  res.json({ message: "create notification" });
};

const updateNotificationById = (req, res) => {
  res.json({ message: req.params.id });
};

const deleteNotificationById = (req, res) => {
  res.json({ message: req.params.id });
};

module.exports = {
  getNotifications,
  getNotificationById,
  createNotification,
  updateNotificationById,
  deleteNotificationById,
};
