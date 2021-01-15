import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  logOutBtn : boolean;
  
  constructor(public router: Router) {
    if( window.localStorage.getItem("loggedIn") == ""  )
    {
      this.router.navigate(['login']);
    }
   }

  loggedIn = window.localStorage.getItem("loggedIn");
  userData:any;
  ngOnInit(): void {
    this.getdata();
    this.logOutBtn  = true; 
    let reload = window.localStorage.getItem("one");  
    if (reload == null) { 
      console.log("done");
      
      localStorage.setItem('one', 'no reload');
      window.location.reload(); 
    }
  }
  edit(target)
  {
     console.log(target);
     window.localStorage.setItem("edit",target);
     this.router.navigate(['edit']);
  }
  delete(value)
  {
    let data = JSON.parse( window.localStorage.getItem("user"));
    let newData = [];
    let permTodo = [];
    let index = 0;
    for(let i =0 ; i < data.length ; i++)
    {
      if( this.loggedIn == data[i].email)
      {
        newData = data[i].todo;
        index = i;
        break;
      }
    }
    for(let i = 0 ; i < newData.length ; i++)
    {
      if(value != newData[i].TaskName)
      {
        permTodo.push(newData[i]);
      }
    }
    data[index].todo = permTodo;
    let c = confirm("are you sure");
    if(c)
    {
      window.localStorage.setItem("user",JSON.stringify(data));
      window.location.reload();
    }
  }
  getdata()
  {
    // console.log("this is in get data");
    
    let data = JSON.parse( window.localStorage.getItem("user"));

    for(let i = 0 ; i< data.length ; i++)
    {
        if( data[i].email == this.loggedIn )
        {
          this.userData = data[i].todo;
        }
    }        
    // console.log("this is data fetch");
    // console.log(this.userData);
  }
}
