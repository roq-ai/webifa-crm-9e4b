import { TeamInterface } from 'interfaces/team';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  description?: string;
  start_date?: any;
  end_date?: any;
  status?: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  team?: TeamInterface[];
  company?: CompanyInterface;
  _count?: {
    team?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  company_id?: string;
}
