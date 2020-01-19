import { Component, OnInit } from '@angular/core';
import { AuthservService } from '../authserv.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { throws } from 'assert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  modelForm : FormGroup;

  constructor(private formBuilder : FormBuilder, public  auth: AuthservService) { }
  tryRegister(){
    if(!this.modelForm.valid) return;
    this.auth.SignUpUser(this.modelForm.value.email, this.modelForm.value.password);
  }

  ngOnInit() {
    this.modelForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  
}
