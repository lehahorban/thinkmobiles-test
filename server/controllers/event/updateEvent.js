import Event from "../../models/Event.js";

export const updateEvent = async (req, res) => {
  const eventId = req.params.id;
  const updatedEventData = req.body;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        message: `Event with id ${eventId} not found`,
      });
    }

    event.title = updatedEventData.title || event.title;
    event.description = updatedEventData.description || event.description;
    event.startDate = updatedEventData.startDate || event.startDate;
    event.endDate = updatedEventData.endDate || event.endDate;

    await event.save();

    res.status(200).json({
      message: `Event with id ${eventId} has been updated successfully`,
      data: event,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
