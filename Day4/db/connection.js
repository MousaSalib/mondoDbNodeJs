import mongoose from "mongoose";
export const connection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/testMousa')
    .then(() => console.log("db conectted"))
    .catch((err) => console.log(`db error ${err}`))
}
