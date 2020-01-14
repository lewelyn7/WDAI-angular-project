import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { User } from './model/User-model'
@Injectable({
  providedIn: 'root'
})


export class AuthservService {

  userData: Observable<firebase.User>;
  
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.userData = afAuth.authState;
  }
  CurrentUser(): User{
    let user:User;
    let user1  = this.afAuth.auth.currentUser;
    user = {  uid: user1.uid,email: this.userData.email, roles: {   admin:  true,reader: true}}
    return user;
  }
  isLoggedIn(): boolean{
    if(localStorage.getItem('user') !== null){
      return true;
    }
    if(this.afAuth.auth.currentUser !== null) return true;
    return false;
  }
  SignOut() {
    return this.afAuth.auth.signOut().then(() => { localStorage.removeItem('user');
    this.router.navigate(['/login']); })
  }

  SignInUser(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((result) => {    
      localStorage.setItem('user', JSON.stringify(result)); this.router.navigate(['/main']);} ).catch((error) => {   console.log(error.message); })
  }

  SignUpUser(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {     })
    .catch((error) => { window.alert(error.message)   })
  }

  CanRead(user: User): boolean{
    const allowed= ['admin', 'editor', 'reader'];
    return this.checkAuthorization(user,allowed); 
  }
  private checkAuthorization(user: User, allowedRoles: string[]): boolean{
    if(!user) 
      return false;
    for (const role of allowedRoles)  {
      if(user.roles[role]) {
          return true; 
        }
      }
    }
}