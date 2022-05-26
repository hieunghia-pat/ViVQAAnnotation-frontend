import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// SERVICES

import { UserListService } from '@core/services/auth';
import { SnackMessageService } from '@core/services/notifcation';
// MODELS
import { PROFILE } from '@models/auth';
import { AnnotatorsModal } from './components';
// COMP
@Component({
  selector: 'app-annotators',
  templateUrl: './annotators.component.html',
  styleUrls: ['./annotators.component.css'],
})
export class AnnotatorListComponent implements OnInit {
  userList!: PROFILE[];
  constructor(
    private annotatorListServist: UserListService,
    private dialog: MatDialog,
    private messageService: SnackMessageService
  ) {}

  async ngOnInit() {
    this.userList = await this.annotatorListServist.getAllUsers();
  }
  async createNewUser() {
    try {
      const { success, userData } = await this.openUserModal();
      if (success) {
        this.userList.push(userData);
        this.userList = await this.annotatorListServist.getAllUsers();
      }
    } catch (error: any) {
      this.messageService.show({
        message: error?.message || 'An error occoured when creating new user',
      });
    }
  }

  async updateUser(user: PROFILE) {
    try {
      const current_name : String = user.username;
      const { success, userData } = await this.openUserModal(user);
      if (success) {
        const userIndex = this.userList.findIndex(
          (usr) => usr?.id === user?.id
        );
        //const { success } = await this.annotatorListServist.updateUser(current_name,userData);
        
        if (userIndex >= 0 && success) {
          this.userList[userIndex] = userData;
          
          this.messageService.show({
            message: `User (${current_name}) has been updated successfully`,
            duration: 4000,
          });
          this.userList = await this.annotatorListServist.getAllUsers();
        }
      }
    } catch (error: any) {
      this.messageService.show({
        message: error?.message || 'An error occoured when updating  user',
      });
    }
  }
  async deleteUser(userData: PROFILE) {
    const { success } = await this.annotatorListServist.deleteUser(userData?.username);
    if (success) {
      const userIndex = this.userList.findIndex(
        (usr) => usr.id === userData?.id
      );
      console.log(userIndex);
      if (userIndex >= 0) {
        this.userList.splice(userIndex, 1);
        this.messageService.show({
          message: `User (${userData?.username}) has been removed successfully`,
        });
      }
    }
  }
  // OPEN MODAL WITH SOME CONFIGRATION
  private async openUserModal(user?: PROFILE) {
    const userDialog = this.dialog.open(AnnotatorsModal, {
      width: '450px',
      maxWidth: '100%',
      data: user,
      disableClose: true,
    });
    return await userDialog.afterClosed().toPromise();
  }
}
