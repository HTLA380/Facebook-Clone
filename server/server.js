const express = require("express");
const app = express();
const notifications = require("./routes/notifications");
const PORT = 8080;

app.use("/api/notifications", notifications);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
