import databaseConnection from "../utils/database";
import User from "../models/user";

export const listUsers = async () => {
  await databaseConnection();
  const users = await User.find();
  return users;
};

export const createUser = async (user) => {
  users.push(user);
};
