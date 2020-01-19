import { Component } from '@angular/core';
import { AuthservService } from './authserv.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekt-kursy';
  constructor(public auth: AuthservService){
    
  }
  ngOnInit(){
  }

}
