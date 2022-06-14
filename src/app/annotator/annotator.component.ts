import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
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
    let prevUrl = this.router.routerState.snapshot.url
    console.log(prevUrl)
    if (prevUrl && prevUrl != "/annotator")
      this.router.navigate([prevUrl])
    else
      this.router.navigate(["/annotator/annotation"])
  }

  public logout(): void {
    this.router.navigate(["/logout"])
  }

}
