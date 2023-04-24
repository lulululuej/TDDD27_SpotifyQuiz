import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit{
  @Input() inputFromBrowseComponent_Roomname: string = '';
  @Input() inputFromBrowseComponent_Roomtype: boolean;
  roomname: any;
  routeState: any;

  constructor(
    private router: Router,
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.routeState = this.router.getCurrentNavigation()?.extras.state;
      if (this.routeState) {
        this.roomname = this.routeState.name;
      }
    }
  };

  ngOnInit(): void {
    
  }
}
