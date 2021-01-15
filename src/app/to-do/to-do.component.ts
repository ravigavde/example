import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  storeTask(values:any)
  {
    // TaskName taskType endDate
    let today = new Date();
    let taskDate = new Date(values.endDate);       
    let error = false;

    if(values.TaskName == "" && values.taskType == "" && values.endDate == "")
    {
      document.getElementById('error').innerText = "Please enter task name , task type and task end date";
      setTimeout(() => {
        document.getElementById('error').innerText = "";
      }, 2000);
      error = true;
    }
    else if(values.TaskName == "")
    {
      document.getElementById('error').innerText = "Please enter task name";
      setTimeout(() => {
        document.getElementById('error').innerText = "";
      }, 2000);
      error = true;
    }
    else  if(values.taskType == "")
    {
      document.getElementById('error').innerText = "Please enter task type";
      setTimeout(() => {
        document.getElementById('error').innerText = "";
      }, 2000);
      error = true;
    }
    else   if(values.endDate == "")
    {
      document.getElementById('error').innerText = "Please enter task end date";
      setTimeout(() => {
        document.getElementById('error').innerText = "";
      }, 2000);
      error = true;
    }
    else if(taskDate <= today)
    {
      document.getElementById('error').innerText = "Please enter task end date greater than today";
      setTimeout(() => {
        document.getElementById('error').innerText = "";
      }, 2000);
      error = true;
    }
   
    if(!error)
    {
      let data = JSON.parse(window.localStorage.getItem('user'));
      let loggedIn = window.localStorage.getItem('loggedIn');
      let pTodo = [];
      let duplicate = false;
      
      for(let i = 0 ; i < data.length ; i++)
      {
        if(loggedIn == data[i].email)
        {
          pTodo = data[i].todo;
          break;
        }
      }
      for(let i = 0 ; i < pTodo.length ; i++)
      {     
        if(values.TaskName == pTodo[i].TaskName )
        {
          duplicate = true;
          break;
        }
      }
      
      for(let items of data)
      {
        if(items.email == loggedIn)
        {
           items.todo.push(values);
        }
      }
      document.getElementById('error').innerText = "Task Added Successfully";
      setTimeout(() => {
        document.getElementById('error').innerText = "";
      }, 2000);
      if(!duplicate)
      {
        document.getElementById('reset').click();
        window.localStorage.setItem("user", JSON.stringify(data));
      }
      else
      {
        document.getElementById('error').innerText = "Task already exists";
        setTimeout(() => {
          document.getElementById('error').innerText = "";
        }, 2000);
      }
     
    }

  }

}
