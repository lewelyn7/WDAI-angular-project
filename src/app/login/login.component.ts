import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthservService } from '../authserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  modelForm : FormGroup;
  constructor(private formBuilder : FormBuilder, public  auth: AuthservService) { }
  tryLogIn(){
    if(!this.modelForm.valid) return;
    
    this.auth.SignInUser(this.modelForm.value.email, this.modelForm.value.password);

  }

  ngOnInit() {
    this.modelForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8 )]]
  });
  }

}
