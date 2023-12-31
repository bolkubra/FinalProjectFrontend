import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { observeNotification } from 'rxjs/internal/Notification';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private FormBuilder : FormBuilder,
    private authService : AuthService,
    private toastrService : ToastrService){}
  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm()
  {
    this.loginForm = this.FormBuilder.group({
      email : ["",Validators.required],
      password : ["",Validators.required]
    })
  }

  login (){
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.info(response.message)
        localStorage.setItem("token",response.data.token) // tarayıcının hatırlaması için
        
      },responseError=>{
        //console.log(responseError)
        this.toastrService.error(responseError.error)
      })
    }
  }
}
