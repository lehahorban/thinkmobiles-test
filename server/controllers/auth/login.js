import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ name });

    if (!user) {
      return res.json({
        message: "Такого користувача не існує",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.json({
        message: "Невірний пароль",
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
      message: "Ви увійшли в акаунт",
    });
  } catch (error) {
    res.json({
      message: "Помилка авторизації",
    });
  }
};
