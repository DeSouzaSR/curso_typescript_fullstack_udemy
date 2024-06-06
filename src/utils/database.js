import mongoose from "mongoose";

const URI =
  "mongodb+srv://sandrofisica:ut3C5OWuJzMRC4Ow@cluster0.jxqkwjj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const databaseConnection = async () => {
  if (!global.mongoose) {
    mongoose.set("strictQuery", false);
    global.mongoose = await mongoose.connect(URI);
  }
};

export default databaseConnection;
