require("dotenv").config();

const connectDB = require("./db/connect");
const Notification = require("./model/Notification");

const jsonProducts = require("./data.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Notification.deleteMany();
    await Notification.create(jsonProducts);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
