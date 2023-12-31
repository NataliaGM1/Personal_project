import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/models/loginRequest';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{
  loginError:string="";
  loginForm=this.formBuilder.group({
    email: [' ',[Validators.required, Validators.email]],
    password: ['' ,Validators.required],
  })
  constructor(private formBuilder:FormBuilder, private loginService: LoginService){ }

  ngOnInit(): void {
      
  }
  get email(){
    return this.loginForm.controls.email;
  }

  get password(){
    return this.loginForm.controls.password;
  }
  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.info("Login completo");
          this.loginForm.reset();
        }
      });
     
    }
    else{
      this.loginForm.markAllAsTouched();
      alert("Error");
    }
  }
}



