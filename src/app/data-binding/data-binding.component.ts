import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  data = 'event data binding';
  data1 = "twoWayDataBinding"
  onClick($event){
    console.log('clicked button saved',$event);  
  }
  constructor() { }

  ngOnInit() {
  }

}
