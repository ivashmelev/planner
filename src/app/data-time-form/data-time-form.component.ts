import { Component, OnInit } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import 'rxjs/Rx' ;

@Component({
  selector: 'app-data-time-form',
  templateUrl: './data-time-form.component.html',
  styleUrls: ['./data-time-form.component.css']
})



export class DataTimeFormComponent implements OnInit {

  

  show: boolean =true;

  events = [
    {
      title:"Первое", date:"01.01.2001", time:"11:00", type:"Встреча" 
    },

    {
      title: "Второе", date:"01.01.2001", time:"12:00", type:"Праздник" 
    },

    {
      title: "Третье", date:"01.01.2001", time:"13:00", type:"Свидание" 
    }

  ];

  typesEvent= [
    {type:"Встреча"},{type:"Праздник"},{type:"Свидание"}
  ]
  

  
  // fs = require('fs');
  file(text, name, type){
    var data = JSON.stringify(this.events);
    // var blob = new Blob([data], {type: 'text/csv'});
    // var url = window.URL.createObjectURL(blob);
    // var s = window.open(url);
    // var fs = require('fs');
    // fs.writeFile('./data.json', data, 'utf-8');


  
  }

    

  

  add(title, date, time, type){
    this.events.push(
      {title, date, time, type,}
    );
    var eventjson = JSON.stringify(this.events);
    localStorage.setItem("event", eventjson);
  }

  delete(index:number){
    this.events.splice(index, 1); 
    console.log(index);
  }

  toggle(index: number){
    this.show=!this.show;
    // console.log(index);

    
  }

  rename(index: number, title, date, time, type, style){
    console.log(index,title, date, time, type);
    this.events.splice(index, 1);
    this.events.push(
      {title, date, time, type}
    );
    this.toggle(index);
  }

  constructor() {
    

    
    // console.log(this.events[0].type);

  
  }
  ngOnInit() {
  for (var i=0; i< this.events.length; i++){
    if (this.events[i].type=="Встреча"){
      var s ="meet";
      console.log(s);
    }
    else if(this.events[i].type=="Праздник"){
      var s ="celebrate";
      console.log(s);
    }
    else if(this.events[i].type=="Свидание"){
      var s ="date";
      console.log(s);
    }
  }
  }
  ngOnChanges(){
    for (var i=0; i< this.events.length; i++){
      if (this.events[i].type=="Встреча"){
        var s ="meet";
        console.log(s);
      }
      else if(this.events[i].type=="Праздник"){
        var s ="celebrate";
        console.log(s);
      }
      else if(this.events[i].type=="Свидание"){
        var s ="date";
        console.log(s);
      }
    }
  }

}
  


