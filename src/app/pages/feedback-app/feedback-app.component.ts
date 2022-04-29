import { list } from './../../Data/feedback_data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-app',
  templateUrl: './feedback-app.component.html',
  styleUrls: ['./feedback-app.component.css']
})
export class FeedbackAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items = list
}
