import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) {
    
    if( window.localStorage.getItem("loggedIn") == ""  )
    {
      this.router.navigate(['login']);
    }
   }
  logOutBtn : boolean = true;
  ngOnInit(): void {   this.state();    }
  state()
  {
    console.log("state called header");
    
    if( window.localStorage.getItem("loggedIn") == ""   )
      {
        this.logOutBtn = false;
      }
      if( window.localStorage.getItem("loggedIn") != ""  )
      {
        this.logOutBtn = true;
     } 
     console.log(this.logOutBtn);
  }
  logOut(){
    window.localStorage.setItem("loggedIn","");
    localStorage.removeItem('one');
    this.logOutBtn = false;
  }

}
