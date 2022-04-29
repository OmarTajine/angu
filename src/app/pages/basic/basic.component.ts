import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   title = 'angular-project';
  age: number = 18;
  isSelected = false;
  tab: any[] = [
    { nom: 'user1', email: 'user1@gmail.com' },
    { nom: 'user2', email: 'user1@gmai2.com' },
    { nom: 'user3', email: 'user1@gmai3.com' }
  ];
  etat = 1;
  fn(event : any) {
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
    this.title= event.target.value
  };

}
