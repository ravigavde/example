import { JsonPipe } from '@angular/common';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private route : RouterModule) { }
  edit : string ;
  taskName : string ;
  taskCategory : string;
  endDate : string ;
  index : number ;

  ngOnInit(): void {
  this.edit = window.localStorage.getItem("edit");
  this.setValues();
  }
  save(name , type , date)
  {
    let today = new Date();
    let taskDate = new Date(date);   
      if(name == "" )
      { 
          document.getElementById('error').innerText = "Task name cannot be blank";
        }
        else if (taskDate <= today )
        {
          document.getElementById('error').innerText = "Please select end date greater than today";
        }
        else
        {
          let data = JSON.parse( window.localStorage.getItem("user"));
          let todo= [];
          todo = data[this.index].todo;
          for(let i = 0 ; i < todo.length ; i++)
          {
            if(todo[i].TaskName == this.edit)
            {
              todo[i].TaskName = name;
              todo[i].taskType = type;
              todo[i].endDate = date;
              // console.log(todo[i]);
            }
          }
          data[this.index].todo = todo;
          window.localStorage.setItem("user",JSON.stringify(data));
          window.location.reload();
        }
    
  }
  setValues()
  {
    let data = JSON.parse( window.localStorage.getItem("user"));
    let loggedIn = window.localStorage.getItem("loggedIn");
    let todo= [];
    this.edit = this.edit.slice(0, (this.edit.length - 1));
    
    for(let i = 0 ; i < data.length ; i++)
    {
      if(loggedIn == data[i].email)
      {
          this.index = i;
          todo = data[i].todo;
          break;
      }
    }
    for(let i = 0 ; i < todo.length ; i++)
    {
      if(this.edit == todo[i].TaskName)
      {
        this.taskName = todo[i].TaskName;
        this.taskCategory = todo[i].taskType;
        this.endDate = todo[i].endDate;
      }
    }
    // console.log(  this.taskName + this.taskCategory + this.endDate   );
  }

}
