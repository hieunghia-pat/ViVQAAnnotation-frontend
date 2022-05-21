import { Component, OnDestroy } from '@angular/core';
import { NavItem } from './subsets/model/nav-item';
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { Subscription } from 'rxjs';
import { menu } from './subsets/model/menu';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnDestroy {

    public opened: boolean = true;
    private mediaWatcher: Subscription = new Subscription() ;
    public menu: NavItem[] = menu;

    constructor(
      private media: MediaObserver,
      private userAuthService: UserAuthService,
      private router: Router) {
      this.mediaWatcher = this.media.media$.subscribe((mediaChange: MediaChange) => {
          this.handleMediaChange(mediaChange);
      })
    }

    logout(): void {
      this.userAuthService.clear()
      this.router.navigate(["/login"])
    }


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
