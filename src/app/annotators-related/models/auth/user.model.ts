export interface USER {
  id: number;
  //email: string;
}
export interface PROFILE extends USER {
  //Userid: string;
  password : String;
  username: String;
  role: String;
}
