import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logOutBtn : boolean ;
  constructor(public router: Router) { 
    if( window.localStorage.getItem("loggedIn") != ""  )
    {
      this.router.navigate(['dashboard']);
    }
   }
  
  check(username:string ,password:string)
  {
    let data = JSON.parse(window.localStorage.getItem("user"));
    let found = false;
    if(data == null)
    {
      // alert("UserName/Password not matched");
      document.getElementById('error').innerText = "Wrong Username/Password ";
      setTimeout(() => {
        document.getElementById('error').innerText = "";
      }, 2000);
    }
    else if( username == "" && password =="")
    {
      // alert("username and password cannot be blank");
      document.getElementById('error').innerText = "Username and Password cannot be blank";
      setTimeout(() => {
        document.getElementById('error').innerText = "";
      }, 2000);
    }
    else if(username == "")
    {
      // alert("username cannot be blank");
      document.getElementById('error').innerText = "Username cannot be blank";
      setTimeout(() => {
        document.getElementById('error').innerText = "";
      }, 2000);
    }
    else if( password == "")
    {
      // alert("password cannot be blank");
      document.getElementById('error').innerText = "Password cannot be blank";
      setTimeout(() => {
        document.getElementById('error').innerText = "";
      }, 2000);
    }

    else
    {
      for(let i =0; i < data.length ; i++)
      {
        if( username == data[i].email && password == data[i].password)
        {
          found = true;
          window.localStorage.setItem("loggedIn",data[i].email);
        }
      }
      if(found)
      {
        this.logOutBtn = true;
        this.router.navigate(['dashboard']);
      }
      else
      {
        // alert("Invalid UserName/Password ");
        document.getElementById('error').innerText = "Invalid Password / Email";
        setTimeout(() => {
          document.getElementById('error').innerText = "";
        }, 2000);
      }
    }
  }
  ngOnInit(): void {
  }

}
