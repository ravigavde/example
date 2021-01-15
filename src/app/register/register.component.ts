import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public router: Router) { }

  name:string = "" ;
  email:string;
  pass:string;
  repPass:string;
  ngOnInit(): void {
  }
  register(values)
  {
    let name = values.name;
    let email = values.email;
    let pass = values.psw;
    let passRepeat = values.pswRepeat;
    let gender = values.gender;
    let address = values.address;


    let data = [];
    data = JSON.parse(window.localStorage.getItem("user"));
   let regEmail =  /\S+@\S+\.\S+/; 
   let error = false;
   if(name == "" && email == "" && pass == "" && passRepeat == "" && gender == "" && address == "")
   {
    document.getElementById('error').innerText = "Enter Name, Email, Password and Repeat Password";
    setTimeout(() => {
      document.getElementById('error').innerText = "";
    }, 2000);
     error = true;

   }
   else if(name == "")
   {
    //  alert("Enter name");
    document.getElementById('error').innerText = "Enter name";
    setTimeout(() => {
      document.getElementById('error').innerText = "";
    }, 2000);
     error = true;
   }
  else if(!regEmail.test(email))
   {
    //  alert("Enter Correct email");
    document.getElementById('error').innerText = "Enter valid email";
    setTimeout(() => {
      document.getElementById('error').innerText = "";
    }, 2000);
     error = true;
   }
   else if( pass == "")
   {
    //  alert("Enter password")
    document.getElementById('error').innerText = "Enter Password";
    setTimeout(() => {
      document.getElementById('error').innerText = "";
    }, 2000);
     error = true;
   }
   else if(passRepeat == "")
   {
    // alert("Enter Repeat Password");
    document.getElementById('error').innerText = "Enter Repeat Password";
        setTimeout(() => {
          document.getElementById('error').innerText = "";
        }, 2000);
    error = true;
   }
   else if(pass != passRepeat)
   {
    // alert("Password and Repear Password does not match");
    document.getElementById('error').innerText = "Password and Repear Password does not match";
        setTimeout(() => {
          document.getElementById('error').innerText = "";
        }, 2000);
    error = true;
   }
   else if(gender == "")
   {
    // alert("Password and Repear Password does not match");
    document.getElementById('error').innerText = "Please enter gender";
        setTimeout(() => {
          document.getElementById('error').innerText = "";
        }, 2000);
    error = true;
   }
   else if(address == "")
   {
    // alert("Password and Repear Password does not match");
    document.getElementById('error').innerText = "Please enter address";
        setTimeout(() => {
          document.getElementById('error').innerText = "";
        }, 2000);
    error = true;
   }
   
  if(!error)
  {
    let userObj = { name : name, email : email , password : pass , gender : gender, address : address, todo:[] };
    
    if(data == null)
    {
      
      data =  [ userObj];
      window.localStorage.setItem("user", JSON.stringify(data));
      document.getElementById('error').innerText = "User Registered Successfully";
      setTimeout(() => {
        document.getElementById('error').innerText = "";
        this.router.navigate(['login']);
      }, 2000);
    }
    else
    {
      for(let i =0; i < data.length;i++)
      {
        if(email == data[i].email )
        {
          error = true;
        }
      }
      if(!error)
      {
        data.push(userObj);
        window.localStorage.setItem("user", JSON.stringify(data));
        // alert("User Registered");
        document.getElementById('error').innerText = "User Registered Successfully";
        setTimeout(() => {
          document.getElementById('error').innerText = "";
          this.router.navigate(['login']);
        }, 2000);
      }
      else
      {
        // alert("email already registered, please use different email ID");
        document.getElementById('error').innerText = "email already registered, please use different email ID";
        setTimeout(() => {
          document.getElementById('error').innerText = "";
        }, 2000);
      }
    }
  }
  }

}
