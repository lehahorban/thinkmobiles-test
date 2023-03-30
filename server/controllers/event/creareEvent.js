import Event from "../../models/Event.js";

export const createEvent = async (req, res) => {
  try {
    const { title, description, startDate, endDate, clientId } = req.body;
    const event = new Event({
      title,
      description,
      startDate,
      endDate,
      clientId,
    });
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
