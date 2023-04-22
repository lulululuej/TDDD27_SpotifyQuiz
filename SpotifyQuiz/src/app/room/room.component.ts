import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit{
  @Input() inputFromBrowseComponent_Roomname: string = '';
  @Input() inputFromBrowseComponent_Roomtype: boolean;

  constructor(){};

  ngOnInit(): void {
    
  }
}
