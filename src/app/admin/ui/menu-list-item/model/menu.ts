import { NavItem } from './nav-item';

export let menu: NavItem[] = [
  {
    displayName: 'Annotators',
    iconName: 'person',
    route: '/admin/annotators'
  },
  {
    displayName: 'Subsets',
    iconName: 'folder',
    route: 'admin/subsets'
  },
  {
    displayName: 'Statictics',
    iconName: 'leaderboard',
    route: 'admin/statistics'
  },
  {
    displayName: "Assignment",
    iconName: "assignment",
    route: "admin/assignment"
  }
];