import { NavItem } from './nav-item';

export let menu: NavItem[] = [
  {
    displayName: 'Annotators',
    iconName: 'annotators',
<<<<<<< HEAD:src/app/admin/ui/menu-list-item/model/menu.ts
    route: 'admin/annotators'
=======
    route: '/admin/annotators'
>>>>>>> 4acdda1f7e4f254f09e5c7edebb1718e0dd5dc9c:src/app/admin/subsets/model/menu.ts
  },
  {
    displayName: 'Subsets',
    iconName: 'subset',
<<<<<<< HEAD:src/app/admin/ui/menu-list-item/model/menu.ts
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
>>>>>>> 4acdda1f7e4f254f09e5c7edebb1718e0dd5dc9c:src/app/admin/subsets/model/menu.ts
  },
  {
    displayName: 'Statictics',
    iconName: 'statistics',
    route: 'admin/statistics'
  }
];