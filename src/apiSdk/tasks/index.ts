import queryString from 'query-string';
import { TaskInterface, TaskGetQueryInterface } from 'interfaces/task';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTasks = async (query?: TaskGetQueryInterface): Promise<PaginatedInterface<TaskInterface>> => {
  return fetcher('/api/tasks', {}, query);
};

export const createTask = async (task: TaskInterface) => {
  return fetcher('/api/tasks', { method: 'POST', body: JSON.stringify(task) });
};

export const updateTaskById = async (id: string, task: TaskInterface) => {
  return fetcher(`/api/tasks/${id}`, { method: 'PUT', body: JSON.stringify(task) });
};

export const getTaskById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/tasks/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTaskById = async (id: string) => {
  return fetcher(`/api/tasks/${id}`, { method: 'DELETE' });
};
