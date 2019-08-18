import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  serverID = 10;
  serverStatus:string = 'Offline'
  allowNewServer = false;
  serverCreationStatus = "NO server was created"
  serverName = ''
  serverCreated = false;
  servers = ['server1','server2']
  appList: any[] = [ {
    "ID": "1",
    "Name" : "One"
 },

 {
    "ID": "2",
    "Name" : "Two"
 } ];

  getServerStatus(){
    return this.serverStatus;
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }
  
  onCreateServerStatus(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server created"+" Server name is "+this.serverName
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  getColor(){
    return this.serverStatus === 'offline' ? 'red': 'green';
  }

  ngOnInit() {
  }

}
