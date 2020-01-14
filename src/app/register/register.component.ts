import { Component, OnInit } from '@angular/core';
import { AuthservService } from '../authserv.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  modelForm : FormGroup;
  constructor(private formBuilder : FormBuilder, private auth: AuthservService) { }

  tryRegister(){
    this.auth.SignUpUser(this.modelForm.value.email, this.modelForm.value.password);
  }

  ngOnInit() {
    this.modelForm = this.formBuilder.group({
        email: '',
        password: ''
    });
  }

  
}
