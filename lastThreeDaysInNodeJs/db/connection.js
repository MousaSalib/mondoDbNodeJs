import mongoose from "mongoose";
export const connection = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/ITIApp")
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(`DB error ${err}`))
}
