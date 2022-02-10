import { FavoriteInterface } from '../types';
import { db, pgp } from '../db';

class Favorite implements FavoriteInterface {
  id: number;
  user_id: number;
  repo_id: number;
  node_id: string;
  name: string;
  full_name: string;
  size: number;
  raw_data: object;

  constructor(data?: any) {
    if (data) {
      this.repo_id = data.id;
      this.node_id = data.node_id;
      this.name = data.name;
      this.full_name = data.full_name;
      this.size = data.size;
      this.raw_data = data;
    }
  }

  setId(id: number) {
    this.id = id;
  }

  save(): void {
    let method = 'insert';
    const columns = [
      'repo_id',
      'node_id',
      'name',
      'full_name',
      'size',
      'raw_data',
    ];
    const data = {
      repo_id: this.repo_id,
      node_id: this.node_id,
      name: this.name,
      full_name: this.full_name,
      size: this.size,
      raw_data: this.raw_data,
    };

    if (this.id) {
      method = 'update';
      columns.push('id');
      data['id'] = this.id;
    }

    const cs = new pgp.helpers.ColumnSet(columns, { table: 'favorite' });
    const query = pgp.helpers[method](data, cs) + 'RETURNING id';

    db.one(query)
      .then((data) => {
        this.setId(data.id);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

class FavoriteSearch {
  constructor() {}

  async all(): Promise<any> {
    return db.any('SELECT * FROM favorite');
  }

  async getReposId(): Promise<any> {
    return db.any('SELECT repo_id FROM favorite');
  }
}

export { Favorite, FavoriteSearch };
