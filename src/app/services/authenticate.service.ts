import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  urlServer = "https://librarypca.fly.dev/";
  HttpHeaders = { headers: new HttpHeaders({"Content-Type": "application/json"})}

  constructor(private storage: Storage, 
  private http: HttpClient) { }

  loginUser(credentials: any){
    return new Promise((accept, reject) =>{
      let params = {
        "user": credentials
      }
      console.log(params)
      this.http.post(`${this.urlServer}login`,params, this.HttpHeaders).subscribe ((data:any) => {
        if (data.status == "OK"){
          accept(data);
        }else{
          reject(data.errors)
        }
      },(error) => {
        reject("Error en el login")
      })
    });
  }

  registerUser(userData: any){
    userData.password = btoa(userData.password);
    return this.storage.set("user",userData);
  }

  getRegUser(){
    return this.storage.get("user")
  }

  regUser(userData: any){
    let params = {
      "user": userData
    }
    return new Promise( (accept, reject) => {
      this.http.post(`${this.urlServer}signup`,params, this.HttpHeaders).subscribe((data: any) => {
        if (data.status == "OK"){
          accept(data.msg);
        }else{
          reject(data.errors)
        }
      },(error) => {
        reject("Error al intentar registrarse")
      })
    })
  }
}
