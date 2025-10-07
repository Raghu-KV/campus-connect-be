import User from "../model/User.model.js";
export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};
