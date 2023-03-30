import Client from "../../models/Client.js";

export const deleteClient = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedClient = await Client.findByIdAndDelete(id);

    if (!deletedClient) {
      return res.status(404).json({ message: "Client not found" });
    }

    return res.json({
      message: "Сlient successfully deleted",
      client: deletedClient,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error when deleting a client" });
  }
};
