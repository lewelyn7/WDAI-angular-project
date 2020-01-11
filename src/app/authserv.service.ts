import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angular/fire/auth';
import * as firebase from 'firebase/app';
import {Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})

export class AuthservService {
  userData: Observable<firebase.User>;
  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
   }
   doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }
 
}
