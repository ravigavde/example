import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData : any;
  loopData : any;
  name : string ;
  gender : string  ;
  address : string  ;
  edit : boolean = true;
  index : number;
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
  allow()
  {
    this.edit = false;
  }
  editData(value)
  {
    if(value.name == "" && value.gender == "" && value.address == "")
    {
      document.getElementById("error").innerText = "Enter Name and Address";
      setTimeout(() => {
        document.getElementById("error").innerText = "";
      }, 2000);
    }
    else if(value.name == "")
    {
      document.getElementById("error").innerText = "Enter Name";
      setTimeout(() => {
        document.getElementById("error").innerText = "";
      }, 2000);
    }
    else if(value.address == "")
    {
      document.getElementById("error").innerText = "Enter Address";
      setTimeout(() => {
        document.getElementById("error").innerText = "";
      }, 2000);
    }
    else{
      let data = JSON.parse(window.localStorage.getItem("user"));
      data[this.index].name = value.name;
      data[this.index].gender = value.gender;
      data[this.index].address = value.address;
      window.localStorage.setItem("user",JSON.stringify(data));
      console.log(value);
      console.log(data[this.index]);
      
      
    }
  }
  getData()
  {
    let data = JSON.parse(window.localStorage.getItem("user"));
    this.loopData = data;
    let loggedIn = window.localStorage.getItem("loggedIn");
    for (let i = 0; i < data.length; i++) 
    {
      if(loggedIn == data[i].email)
      {
        this.index = i;
        this.userData = data[i];
        this.name = this.userData.name;
        this.gender = this.userData.gender;
        this.address = this.userData.address;
      }    
    }
  }

}
