import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Servername';
  serverCreated = false;
  servers = ['Server 1', 'Server 2', 'Server 1'];

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
      }, 2000);
  }

  ngOnInit() {
  }
  onServerCreate() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
