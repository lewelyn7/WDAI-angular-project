import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthservService } from '../authserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  modelForm : FormGroup;
  constructor(private formBuilder : FormBuilder, private auth: AuthservService) { }
  tryLogIn(){
    this.auth.SignInUser(this.modelForm.value.email, this.modelForm.value.password);

  }

  ngOnInit() {
    this.modelForm = this.formBuilder.group({
      email: '',
      password: ''
  });
  }

}
