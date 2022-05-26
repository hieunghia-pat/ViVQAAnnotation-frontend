// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-annotators-table',
//   templateUrl: './annotators-table.component.html',
//   styleUrls: ['./annotators-table.component.css']
// })
// export class AnnotatorsTableComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// SERVICES
import { GlobalDataService } from '@core/services/common';
// MODELS
import { PROFILE } from '@models/auth';
// ENV
import { environment } from '@environments/environment';
@Component({
  selector: 'app-annotators-table',
  templateUrl: './annotators-table.component.html',
  styleUrls: ['./annotators-table.component.css']
})
export class AnnotatorsTableComponent implements OnInit {
  private readonly role = environment?.role;
  @Input() userList!: PROFILE[];
  @Output() update = new EventEmitter<PROFILE>();
  @Output() delete = new EventEmitter<PROFILE>();

  constructor(private globalData: GlobalDataService) {}

  ngOnInit(): void {}
  // visualizeUserRole(roleIndex: number | undefined): string {
  //   return this.role[roleIndex ? roleIndex : 0];
  // }
  // AVOID TO DELETE CURRENT USER
  isOwner(user: PROFILE): boolean {
    return this.globalData.currentUser$.getValue()?.id === user?.id;
  }
  // FOR LOOP PERFORMANCE
  trackByFn(index: number, user: PROFILE) {
    return user?.id;
  }
}
