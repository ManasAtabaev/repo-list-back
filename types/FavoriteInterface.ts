export interface FavoriteInterface {
  id?: number;
  user_id?: number;
  repo_id: number;
  node_id: string;
  name: string;
  full_name: string;
  size: number;
  raw_data: object;
}
