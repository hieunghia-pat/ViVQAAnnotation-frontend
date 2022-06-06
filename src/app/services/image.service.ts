import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
// SERVICES
import { ApiService,GlobalDataService } from '../annotators-related/core/services/common';
import { SnackMessageService } from '../annotators-related/core/services/notifcation';
// MODELS
import { ImagesJsonFormate } from '../annotator/annotator.component';
import { HTTP_REQ } from '@models/common';
import { PROFILE } from '@models/auth';
import { UserAuthService } from './user-auth.service';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
  })
// co the tao ham get set de luu tru anotation ids
export class ImageService {
  constructor(
    private userService : UserAuthService,
    private apiService: ApiService,
    private snackMessage: SnackMessageService,
      ) {}
  
   async getListimages () : Promise<ImagesJsonFormate[]>{
    const user_name : string | null  = this.userService.getUsername();
    console.log(user_name);
    
    let httpData: HTTP_REQ = {
      url: 'api/v1/annotators/get/images/' + user_name ,
    };
    const { success, error, data } = await this.apiService.get(httpData);
    if (success && data?.length > 0) {
      
      return data;
    } else {
      this.snackMessage.show({
        message: error?.message || 'Failure during list images profile',
      });
      return [];
    }
  }
  async getFistImage() {
      
      // const currentImage: ImagesJsonFormate;
      // const currentUser: PROFILE  =

      const user_name : string | null  = this.userService.getUsername();
      if(user_name != undefined){
        console.log(user_name);
        
        let httpData: HTTP_REQ = {
          url: 'api/v1/annotators/get/images/' + user_name ,
        };
        console.log(httpData);
        const { success, error, data } = await this.apiService.get(httpData);
        // console.log(image_id
        const temp = data;
        console.log(success);
        if (success && data?.length > 0) {
          const image_id = temp[0].id;
          console.log(image_id);
          let httpData1: HTTP_REQ = {
            url: 'api/v1/images/get/image/' + image_id ,
          };
          let { success, error, data } = await this.apiService.get(httpData1);
          if (success && data?.length > 0){
            return data;
          }
          else{
            this.snackMessage.show({
              message : error?.message || 'Failure during load single image',
            });
            return {};
          }
        } 
        else {
          this.snackMessage.show({
            message: error?.message || 'Failure during load list images',
          });
          return {};
        }
      }}
    
      async getNextImage(id : number) {
      
        // const currentImage: ImagesJsonFormate;
        // const currentUser: PROFILE  =
  
        const user_name : string | null  = this.userService.getUsername();
        if(user_name != undefined){
          console.log(user_name);
          
          let httpData: HTTP_REQ = {
            url: 'api/v1/annotators/get/images/' + user_name ,
          };
          console.log(httpData);
          const { success, error, data } = await this.apiService.get(httpData);
          // console.log(image_id
          const temp = data;
          console.log(success);
          if (success && data?.length > 0) {
            const image_id = temp[id + 1].id;
            console.log(image_id);
            let httpData1: HTTP_REQ = {
              url: 'api/v1/images/get/image/' + image_id ,
            };
            let { success, error, data } = await this.apiService.get(httpData1);
            if (success && data?.length > 0){
              return data;
            }
            else{
              this.snackMessage.show({
                message : error?.message || 'Failure during load single image',
              });
              return {};
            }
          } 
          else {
            this.snackMessage.show({
              message: error?.message || 'Failure during load list images',
            });
            return {};
          }
        }}

        async getPreviousImage(id : number) {
      
          // const currentImage: ImagesJsonFormate;
          // const currentUser: PROFILE  =
    
          const user_name : string | null  = this.userService.getUsername();
          if(user_name != undefined){
            console.log(user_name);
            
            let httpData: HTTP_REQ = {
              url: 'api/v1/annotators/get/images/' + user_name ,
            };
            console.log(httpData);
            const { success, error, data } = await this.apiService.get(httpData);
            // console.log(image_id
            const temp = data;
            console.log(success);
            if (success && data?.length > 0) {
              const image_id = temp[id - 1].id;
              console.log(image_id);
              let httpData1: HTTP_REQ = {
                url: 'api/v1/images/get/image/' + image_id ,
              };
              let { success, error, data } = await this.apiService.get(httpData1);
              if (success && data?.length > 0){
                return data;
              }
              else{
                this.snackMessage.show({
                  message : error?.message || 'Failure during load single image',
                });
                return {};
              }
            } 
            else {
              this.snackMessage.show({
                message: error?.message || 'Failure during load list images',
              });
              return {};
            }
          }}
      
  }

