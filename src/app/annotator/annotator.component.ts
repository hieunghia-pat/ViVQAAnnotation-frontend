import { Component, OnInit } from '@angular/core';
import { menu } from './components/menu-item/model/menu';
import { NavItem } from './components/menu-item/model/nav-item';

@Component({
  selector: 'app-annotator',
  templateUrl: './annotator.component.html',
  styleUrls: ['./annotator.component.css']
})
export class AnnotatorComponent implements OnInit {
  
  public opened: boolean = false
  public menu: NavItem[] = menu

  constructor() { }

  ngOnInit(): void {
  }

}
