import { NavItem } from './nav-item';

export let menu: NavItem[] = [
  {
    displayName: 'Annotation',
    iconName: 'assignment',
    route: 'annotator/annotation'
  },
  {
    displayName: "Guidline",
    iconName: "note",
    route: "annotator/guideline"
  },
  {
    displayName: 'Account',
    iconName: 'account_circle',
    route: 'annotator/account'
  }
];