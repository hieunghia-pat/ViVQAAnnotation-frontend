import { FormFactoryModel } from '../form-factory/core/models/form-factory';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../annotators-related/core/services/common';
import { SnackMessageService } from '../../annotators-related/core/services/notifcation';
// MODELS
// import { ImagesJsonFormate } from '../annotator/annotator.component';
import { HTTP_REQ } from '@models/common';
import { PROFILE } from '@models/auth';
// import { UserAuthService } from './user-auth.service';


@Injectable({
  providedIn: 'root',
})
// co the tao ham get set de luu tru anotation ids
export class fieldsFromApi {
constructor(
  private apiService: ApiService,
  private snackMessage: SnackMessageService,
    ) {}
  
  async getFormlabel(img_id : number): Promise<FormFactoryModel[]>{
    const httpData: HTTP_REQ = {
      url: 'api/v1/annotations/get/image/' + img_id,
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

  async submitlabel (Formlabel : FormFactoryModel){
    const profileHttpData: HTTP_REQ = {
      url: 'api/v1/annotator/add',
      body: Formlabel,
    };
    const formresult = await this.apiService.post(profileHttpData);
    // console.log(profileResult)
    if (formresult?.success) {
      this.snackMessage.show({
        message: `User (${formresult?.data.id}) has been created`,
      });
      return { success: true, user: formresult?.data };
    } else {
      return { success: false, user: formresult?.data };
    }
  }
}

// export const fieldsFromApi: FormFactoryModel[] = [
//   {
//     // url: 'https://tse2.mm.bing.net/th?id=OIP.3HqD3gjGShfdWJ-XowfgagHaE8&pid=Api&w=1200&h=800&rs=1&p=0',
//     group: [
//       {
//         controlType: 'input',
//         options: {
//           type: 'text',
//           containerClass: 'mb-0',
//           label: 'Trong Hình có mấy người con gái',
//           placeholder: 'Hello',
//           formControlName: 'title',
//           value: '',
//           disabled: false,
//           validators: {
//             required: true,
//             maxLength: 400,
//           },
//         },
//       },
//       {
//         controlType: 'input',
//         options: {
//           type: 'text',
//           containerClass: 'mb-0',
//           label: 'Trong Hình có mấy người con trai',
//           placeholder: '',
//           formControlName: 'subtitle',
//           value: '',
//           disabled: false,
//           validators: {
//             required: true,
//             maxLength: 400,
//           },
//         },
//       },
//     ],
//   },
  // {
  //   controlType: 'textarea',
  //   colSize: 'col-12 sm:col-3',
  //   options: {
  //     type: 'text',
  //     label: 'Description',
  //     formControlName: 'description',
  //     value: '',
  //     rows: 5,
  //     validators: {
  //       required: true,
  //       maxLength: 200,
  //     },
  //   },
  // },
  // {
  //   colSize: 'col-12 sm:col-3',
  //   group: [
  //     {
  //       controlType: 'dropdown',
  //       options: {
  //         label: 'List',
  //         placeholder: 'Chose',
  //         formControlName: 'listOptions',
  //         optionValue: 'value',
  //         optionLabel: 'label',
  //         dropdownOptions: [
  //           {
  //             label: 'Item 1',
  //             value: 1,
  //           },
  //         ],
  //         value: [],
  //       },
  //     },
  //     {
  //       controlType: 'checkbox',
  //       options: {
  //         label: 'Remember me',
  //         formControlName: 'remember',
  //         value: true,
  //       },
  //     },
  //   ],
  // },
  // {
  //   dummyFields: [
  //     {
  //       options: {
  //         formControlName: 'dummyField',
  //         value: 'Hello!',
  //       },
  //     },
  //   ],
  // },
// ];
