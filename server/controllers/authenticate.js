const userModel = require("../model/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  try {
    const user = await userModel.create(req.body);

    const token = await user.createJWT();

    res.status(StatusCodes.CREATED).json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    throw new Error(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ error: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ error: "Invalid credentials" });
    }

    const token = await user.createJWT();

    res.status(StatusCodes.OK).json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};

module.exports = { register, login };
