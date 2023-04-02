// import Client from "../../models/Client.js";

// export const createClient = async (req, res) => {
//   try {
//     // const { firstName, lastName, email, phoneNumber, userId } = req.body;
//     const { firstName, lastName, email, phoneNumber } = req.body;
//     const userId = req.body.userId;

//     const client = new Client({
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       user: userId,
//     });
//     await client.save();
//     res.status(201).json(client);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

import Client from "../../models/Client.js";
import mongoose from "mongoose";

export const createClient = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, userId } = req.body;

    const client = new Client({
      firstName,
      lastName,
      email,
      phoneNumber,
      user: userId,
    });
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
