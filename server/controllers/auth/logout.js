import User from "../../models/User.js";

export const logout = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Користувач не знайдений" });
    }
    res.json({ message: "Користувача видалено" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Помилка сервера" });
  }
};
