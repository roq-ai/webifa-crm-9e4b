const mapping: Record<string, string> = {
  companies: 'company',
  projects: 'project',
  tasks: 'task',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
