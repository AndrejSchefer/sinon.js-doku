import { postsRoute } from './routes/metricsRoutes';
import express from 'express';

const app = express();
const port = 4000;

app.use(postsRoute(express.Router()));

app.listen(port, () => {
  console.log('Server is on Port:' + port);
})

