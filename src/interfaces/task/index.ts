import { TeamInterface } from 'interfaces/team';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  description?: string;
  start_date?: any;
  end_date?: any;
  status?: string;
  team_id: string;
  created_at?: any;
  updated_at?: any;

  team?: TeamInterface;
  _count?: {};
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  team_id?: string;
}
