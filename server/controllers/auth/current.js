import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const current = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      res.json({
        message: "Такого користувача не існує",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "30d" }
    );

    res.json({
      token,
      user,
    });
  } catch (error) {
    res.json({
      message: "Помилка доступу",
    });
  }
};
