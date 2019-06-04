import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }
  @Output()   sidenavtoggle1 = new EventEmitter();
  ngOnInit() {
  }
  snavClose(){
    this.sidenavtoggle1.emit();
  }

}
