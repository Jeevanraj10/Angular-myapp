import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  showSecret = false;
  log = []
  constructor() { }

  ngOnInit() {
  }
  onToggleDetails(){
    this.showSecret = !this.showSecret
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
