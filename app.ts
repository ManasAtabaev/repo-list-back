import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Favorite, FavoriteSearch } from './models';

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

GET('/favorite', () => {
  const searchModel = new FavoriteSearch();
  return searchModel.getReposId();
});

app.post('/favorite', (req: Request, res: Response) => {
  const favoriteData = req.body;
  const model = new Favorite(favoriteData);
  model.save();
  res.send('Got a POST request');
});

// Generic GET handler;
function GET(url: string, handler: (req: any) => any) {
  app.get(url, async (req, res) => {
    try {
      const data = await handler(req);
      const result = [];
      for (let i of data) {
        result.push(i.repo_id);
      }
      res.json({
        success: true,
        result,
      });
    } catch (error) {
      res.json({
        success: false,
        error: error.message || error,
      });
    }
  });
}
