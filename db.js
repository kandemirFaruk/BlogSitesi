import mongoose from "mongoose";
mongoose.set("strictQuery", true);
const conn = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connected Successfuly");
    })
    .catch((err) => {
      console.log(`DB connection err: ${err}`);
    });
};
export default conn;
