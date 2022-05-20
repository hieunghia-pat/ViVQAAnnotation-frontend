import { NavItem } from './nav-item';

export let menu: NavItem[] = [
  {
    displayName: 'Annotators',
    iconName: 'annotators',
    route: 'annotators'
  },
  {
    displayName: 'Subsets',
    iconName: 'subset',
    route: 'subsets',
    children: [
      {
        displayName: 'Subset_Info',
        iconName: 'subset_info',
        route: 'subsets/subset_info'
      }
    ]
  },
  {
    displayName: 'Statictics',
    iconName: 'statistics',
    route: 'statistics'
  }
];