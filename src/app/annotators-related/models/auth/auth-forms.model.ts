export interface LOGIN_FORM_DATA {
  username:string;
  password:string
}
export interface REGISTER_FORM_DATA extends LOGIN_FORM_DATA{
//username:string;
passwordConfirm?:string;
role?:string;
}
