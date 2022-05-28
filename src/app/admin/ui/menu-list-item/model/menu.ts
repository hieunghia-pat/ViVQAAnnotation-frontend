import { NavItem } from './nav-item';

export let menu: NavItem[] = [
  {
    displayName: 'Annotators',
    iconName: 'annotators',
    route: '/admin/annotators'
  },
  {
    displayName: 'Subsets',
    iconName: 'subset',
    route: '/admin/subsets'
  },
  {
    displayName: 'Statictics',
    iconName: 'statistics',
    route: 'admin/statistics'
  }
];