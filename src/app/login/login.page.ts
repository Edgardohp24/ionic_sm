import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_message = {
    email: [
      {type: "required", message: "EL CORREO ES OBLIGATORIO"},
      {type: "pattern", message: "CORREO ES INVALIDO"}
    ],

    password: [
      {type: "required", message: "LA CONTRASEÑA ES OBLIGATORIA"},
      {type: "minLength", message: " numero de caracteres es incorrecto"}
    ],

    
  }

  errorMessage: any;

  constructor(private formBuilder: FormBuilder, 
    private authenticate: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage) { 


    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ),

      
    });
  }

  ngOnInit() {
  }
  loginUser(credentials: any){
     console.log(credentials);
     this.authenticate.loginUser(credentials).then( res => {
      this.errorMessage ="";
      console.log("login")
      this.storage.set("login",true);
      this.navCtrl.navigateForward("/menu/home")
     }).catch(err =>{
      this.errorMessage = err
     })
    }

    goToRegister(){
      this.navCtrl.navigateForward("/register")
    }
  
}
