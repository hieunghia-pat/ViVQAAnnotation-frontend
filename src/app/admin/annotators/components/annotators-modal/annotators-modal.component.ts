// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-annotators-modal',
//   templateUrl: './annotators-modal.component.html',
//   styleUrls: ['./annotators-modal.component.css']
// })
// export class AnnotatorsModalComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserListService } from '@core/services/auth';
// MODELS
import { PROFILE } from '@models/auth';
@Component({
  selector: 'app-annotators-modal',
  templateUrl: './annotators-modal.component.html',
  styleUrls: ['./annotators-modal.component.css']
})
export class AnnotatorsModalComponent implements OnInit {
  constructor(
    private userListService: UserListService,
    private dialogRef: MatDialogRef<AnnotatorsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PROFILE
  ) {}
  async save(formData: any) {
    const { success, user } = this.data
      ? await this.userListService.updateUser(this.data.username,{
          ...this.data,//id : this.data.Userid,
          username: formData?.username,
          password : this.data.password,
          role: "ROLE_ANNOTATOR",
        })
      : await this.userListService.addNewUser(formData);
    if (success) {
      this.dialogRef.close({ success: true, userData: user });
    }
  }
  ngOnInit(): void {}
}
