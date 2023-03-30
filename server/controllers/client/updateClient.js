import Client from "../../models/Client.js";

export const updateClient = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, phoneNumber } = req.body;

  try {
    const client = await Client.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        email,
        phoneNumber,
      },
      { new: true }
    );

    if (!client) {
      return res.status(404).send({ message: "Client not found" });
    }

    res.send(client);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
