import { TaskInterface } from 'interfaces/task';
import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface TeamInterface {
  id?: string;
  name: string;
  description?: string;
  project_id: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  project?: ProjectInterface;
  _count?: {
    task?: number;
  };
}

export interface TeamGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  project_id?: string;
}
