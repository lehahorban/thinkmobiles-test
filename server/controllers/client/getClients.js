import Client from "../../models/Client.js";
export const getClients = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(userId);
    const clients = await Client.find({ user: userId });
    res.status(200).json(clients);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
