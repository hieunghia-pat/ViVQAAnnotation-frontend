<<<<<<< HEAD
//import { Component, OnInit } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { NavItem } from './ui/menu-list-item/model/nav-item';
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { Subscription } from 'rxjs';
import { menu } from './ui/menu-list-item/model/menu';
=======
import { Component, OnDestroy } from '@angular/core';
import { NavItem } from './subsets/model/nav-item';
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { Subscription } from 'rxjs';
import { menu } from './subsets/model/menu';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';
>>>>>>> 4acdda1f7e4f254f09e5c7edebb1718e0dd5dc9c
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnDestroy {

    public opened: boolean = true;
    private mediaWatcher: Subscription = new Subscription() ;
    public menu: NavItem[] = menu;

<<<<<<< HEAD
    constructor(private media: MediaObserver) {
=======
    constructor(
      private media: MediaObserver,
      private userAuthService: UserAuthService,
      private router: Router) {
>>>>>>> 4acdda1f7e4f254f09e5c7edebb1718e0dd5dc9c
      this.mediaWatcher = this.media.media$.subscribe((mediaChange: MediaChange) => {
          this.handleMediaChange(mediaChange);
      })
    }
<<<<<<< HEAD
=======

    logout(): void {
      this.userAuthService.clear()
      this.router.navigate(["/login"])
    }

>>>>>>> 4acdda1f7e4f254f09e5c7edebb1718e0dd5dc9c

    private handleMediaChange(mediaChange: MediaChange) {
      if (this.media.isActive('lt-md')) {
          this.opened = false;
      } else {
          this.opened = true;
      }
    }

    ngOnDestroy() {
      this.mediaWatcher.unsubscribe();
    }
}
