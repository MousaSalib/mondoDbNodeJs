import express from 'express';
import {connection} from './db/connection.js';
import userRoutes from './modules/users/user.routes.js';
import postRoutes from './modules/posts/post.routes.js';
const app = express();
const port = 3000;
connection()
app.use(express.json());
app.use(userRoutes);
app.use(postRoutes)
app.get('/', (req, res) => res.send('hello world'))
app.listen(port, () => console.log(`app listen on port ${port}`))