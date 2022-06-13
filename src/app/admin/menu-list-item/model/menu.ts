import { NavItem } from './nav-item';

export let menu: NavItem[] = [
  {
    displayName: 'Annotators',
    iconName: 'people',
    route: '/admin/annotators'
  },
  {
    displayName: 'Guideline',
    iconName: 'description',
    route: '/admin/guideline'
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