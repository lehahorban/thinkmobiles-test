import Client from "../../models/Client.js";

export const getClientById = async (req, res) => {
  const { id } = req.params;

  try {
    const client = await Client.findById(id);

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
