import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthservService } from '../authserv.service';
@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(public router: Router,  private auth: AuthservService) {
   }

  ngOnInit() {
    this.auth.SignOut();
    this.router.navigate(['/login']);

  }

}
