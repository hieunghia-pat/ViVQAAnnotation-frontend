import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
// SERVICES
import { ApiService, GlobalDataService } from '../common';
import { SnackMessageService } from '../notifcation';
// MODELS
import { HTTP_REQ } from '@models/common';
import { PROFILE, REGISTER_FORM_DATA } from '@models/auth';
@Injectable({
  providedIn: 'root',
})
export class UserListService {
  constructor(
    private apiService: ApiService,
    private snackMessage: SnackMessageService,
    private globalDataService: GlobalDataService
  ) {}
  // LIST USERS
  async getAllUsers(): Promise<PROFILE[]> {
    const currentUser: PROFILE | null =
      this.globalDataService.currentUser$.getValue();

    const httpData: HTTP_REQ = {
      url: 'api/v1/annotators/get',
      params: { role_lte: 1 },
    };
    const { success, error, data } = await this.apiService.get(httpData);
    if (success && data?.length > 0) {
      
      return data;
    } else {
      this.snackMessage.show({
        message: error?.message || 'Failure during list users profile',
      });
      return [];
    }
  }
  // ADD NEW USER
  async addNewUser(
    formData: REGISTER_FORM_DATA
  ): Promise<{ success: boolean; user: PROFILE }> {
    //const userUUID = uuidv4();
    // REGISTER USER
    // const httpData: HTTP_REQ = {
    //   url: 'api/v1/annotator/add',
    //   body: {
    //     username: formData?.username,
    //     password: formData?.password,
    //     id: userUUID,
    //   },
    // };
    // const { success, data, error } = await this.apiService.post(httpData);
    // if (success && data?.accessToken) {
      // IF USER REGISTERED SUCCESSFULLY THEN CREATE PROFILE DATA
      // const httpData: HTTP_REQ = {
      //   url: 'api/v1/annotator/get',
      //   params: { role_lte: 1 },
      // };
      //const { success, error, data } = await this.apiService.get(httpData);
      const userUUID : string = uuidv4();
      const profileHttpData: HTTP_REQ = {
        url: 'api/v1/annotators/add',
        body: {
          id: userUUID,
          //email: formData.email,
          username: formData.username,
          password : formData.password,
          role: 'ROLE_ANNOTATOR',
        },
        params: { role_lte: 3 },
      };
      const profileResult = await this.apiService.post(profileHttpData);
      console.log(profileResult)
      if (profileResult?.success) {
        this.snackMessage.show({
          message: `User (${formData?.username}) has been created`,
        });
        return { success: true, user: profileResult?.data };
      } else {
        return { success: false, user: profileResult?.data };
      }
  }

  async updateUser(
    currentUser : String,
    user: PROFILE
  ): Promise<{ success: boolean; user: PROFILE }> {
    const userUUID : string = uuidv4();
    const httpData: HTTP_REQ = {
      url: `api/v1/annotators/update/${currentUser}`,
      body: {
        id: userUUID,
        //email: formData.email,
        username: user.username,
        password : user.password,
        role: 'ROLE_ANNOTATOR',
      },
    };
    console.log(httpData.body)
    const { success, error, data } = await this.apiService.put(httpData);
    if (success) {
      return { success: true, user: data };
    } else {
      this.snackMessage.show({
        message: error?.message || 'Failure during update',
      });
      return { success: false, user: data };
    }
  }
  async deleteUser(
    user: String
  ): Promise<{ success: boolean; user: String }> {
    const httpData: HTTP_REQ = {
      url: `api/v1/annotators/delete/${user}`,
    };
    const { success, error, data } = await this.apiService.delete(httpData);
    if (success) {
      return { success: true, user: data };
    } else {
      this.snackMessage.show({
        message: error?.message || 'Failure during update',
      });
      return { success: false, user: data };
    }
  }
  // LIST USERS WITH ROLE
  private getRoleLTE(userRole: string | undefined) {
    return 1;
  }
}
