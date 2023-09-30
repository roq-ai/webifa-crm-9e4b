interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Team Member', 'Project Manager', 'Administrator'],
  tenantName: 'Company',
  applicationName: 'WEBIFA CRM',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read project details',
    'Read team and task information',
  ],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage projects', 'Manage teams'],
  getQuoteUrl: 'https://app.roq.ai/proposal/dec01004-4069-4490-8bd7-4cb7c68b73c1',
};
