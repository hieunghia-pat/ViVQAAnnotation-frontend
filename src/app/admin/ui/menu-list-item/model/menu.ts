import { NavItem } from './nav-item';

export let menu: NavItem[] = [
  {
    displayName: 'Annotators',
    iconName: 'annotators',
<<<<<<< HEAD
    route: 'admin/annotators'
=======
    route: '/admin/annotators'
>>>>>>> c5f9a56253c4802e8e825f84e1197acd682db023
  },
  {
    displayName: 'Subsets',
    iconName: 'subset',
<<<<<<< HEAD
    route: 'admin/subsets',
    // children: [
    //   {
    //     displayName: 'Subset_Info',
    //     iconName: 'subset_info',
    //     route: 'subsets/subset_info'
    //   }
    // ]
=======
    route: '/admin/subsets'
>>>>>>> c5f9a56253c4802e8e825f84e1197acd682db023
  },
  {
    displayName: 'Statictics',
    iconName: 'statistics',
    route: 'admin/statistics'
  }
];