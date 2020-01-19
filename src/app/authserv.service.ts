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
  errmes: any = '';
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.userData = afAuth.authState;
    this.CurrentUser();
  }
  CurrentUser(): User{
    let user:User;
    let user1;
    if(localStorage.getItem('user') !== null){
      user1 =  (JSON.parse(localStorage.getItem('user'))).user;
    }else{
      user1 = this.afAuth.auth.currentUser;
    }
    if(user1 == null){
      user = {uid: '', email: '', roles: ['nobody'] };
    }else{
      user = {  uid: user1.uid, email: user1.email, roles: ['standard']}
    }
      if(user.email === 'admin@admin.com'){
      user.roles.push('admin');
    }
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
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((result) => {  this.errmes = '';  
      localStorage.setItem('user', JSON.stringify(result)); this.router.navigate(['/main']);} ).catch((error) => {   this.errmes = error.message; console.log(error.message); })
  }

  SignUpUser(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((result) => { this.router.navigate(['/main'])})
    .catch((error) => { console.log(error.message); this.errmes = error.message })
  }

  haveRole(role: string): boolean{
    let user: User = this.CurrentUser();
    return (user.roles.indexOf(role) !== -1) 
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

  ngOnInit(){
    this.CurrentUser();
  }

}