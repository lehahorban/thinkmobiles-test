// import Event from "../../models/Event.js";

// export const getEventById = async (req, res) => {
//   try {
//     const event = await Event.findById(req.params.id);
//     if (!event) {
//       return res.status(404).json({ message: "Event not found" });
//     }
//     res.json(event);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

import Event from "../../models/Event.js";

export const getClientEvents = async (req, res) => {
  try {
    const { clientId } = req.params;
    const events = await Event.find({ clientId });
    res.status(200).json(events);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
