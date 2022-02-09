import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const port = process.env.SERVER_PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Favorite repositories');
});

app.listen(port, () => {
  console.log(`Test app listening on port ${port}`);
});

app.get('/favorite', (req: Request, res: Response) => {
  res.send([]);
});

app.post('/favorite', (req: Request, res: Response) => {
  const favorite = req.body;
  console.log(favorite);
  res.send('Got a POST request');
});
