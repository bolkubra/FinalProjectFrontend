import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44358/api/auth/";

  constructor(private httpClient : HttpClient) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }
  isAuthenticated(){ // API'nın hafızasında tutmak için
    if(localStorage.getItem("teken")){
      return true;
    }
    else{
      return false;
    }
  }
}
