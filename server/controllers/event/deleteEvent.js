import Event from "../../models/Event.js";

export const deleteEvent = async (req, res) => {
  const eventIds = req.body;
  try {
    for (let i = 0; i < eventIds.length; i++) {
      const event = await Event.findByIdAndDelete(eventIds[i]);

      if (!event) {
        return res.status(404).json({
          message: `Event with id ${eventIds[i]} not found`,
        });
      }
    }

    res.status(200).json({
      message: `Events with ids ${eventIds.join(
        ", "
      )} have been deleted successfully`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

// export const deleteEvent = async (req, res) => {
//   const eventId = req.params.id;

//   try {
//     const event = await Event.findByIdAndDelete(eventId);

//     if (!event) {
//       return res.status(404).json({
//         message: `Event with id ${eventId} not found`,
//       });
//     }

//     res.status(200).json({
//       message: `Event with id ${eventId} has been deleted successfully`,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// };
