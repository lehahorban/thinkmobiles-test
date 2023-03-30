import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register user
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const isUsed = await User.findOne({ name });

    if (isUsed) {
      return res.json({
        message: "Користувач с таким ім'ям вже існує",
      });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      name,
      email,
      password: hash,
    });

    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "30d" }
    );

    await newUser.save();

    res.json({
      newUser,
      token,
      message: "Реєстрація пройшла успішно",
    });
  } catch (error) {
    res.json({
      message: "Помилка при створюванні користувача",
    });
  }
};
