import  express  from "express";
import {connection} from "./db/connection.js"
import userRoutes from "./modules/users/user.routes.js";
import postRoutes from "./modules/posts/post.routes.js";
const app = express()
const port = 3000
app.use(express.json())
app.use(userRoutes);
app.use(postRoutes);
connection()


app.get("/", (req, res) => res.send("hello world"));
app.listen(port, () => console.log(`Example app on port ${port}`))


