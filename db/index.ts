import * as dbConfig from '../database.json';
import pgPromise from 'pg-promise';
import { IMain } from 'pg-promise';

const pgp: IMain = pgPromise({
  capSQL: true,
});

const db = pgp(dbConfig.pg);

export { db, pgp };
