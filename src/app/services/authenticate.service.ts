import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credentials: any){
    return new Promise((accept, reject) =>{
      if ( credentials.email == "edgardo@gmail.com" && credentials.password == "123456" )
      {
        accept("Login Exitoso");
      } else {
        reject("Login Fallido");
      }
    });
  }

  registerUser(userData: any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}
