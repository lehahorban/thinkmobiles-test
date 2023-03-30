import Client from "../../models/Client.js";

export const createClient = async (req, res) => {
  try {
    const client = new Client(req.body); // Создание экземпляра модели на основе тела запроса
    await client.save(); // Сохранение клиента в базу данных
    res.status(201).json(client); // Отправка успешного ответа с созданным клиентом
  } catch (error) {
    res.status(400).json({ message: error.message }); // Отправка ошибки в случае возникновения проблем
  }
};
