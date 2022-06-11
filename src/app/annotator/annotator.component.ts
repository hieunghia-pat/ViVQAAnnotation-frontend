import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigate(["/annotator/annotation"])
  }

}
