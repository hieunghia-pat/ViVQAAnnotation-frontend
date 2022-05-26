//import { Component, OnInit } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { NavItem } from './ui/menu-list-item/model/nav-item';
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { Subscription } from 'rxjs';
import { menu } from './ui/menu-list-item/model/menu';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnDestroy {

    public opened: boolean = true;
    private mediaWatcher: Subscription = new Subscription() ;
    public menu: NavItem[] = menu;

    constructor(private media: MediaObserver) {
      this.mediaWatcher = this.media.media$.subscribe((mediaChange: MediaChange) => {
          this.handleMediaChange(mediaChange);
      })
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
