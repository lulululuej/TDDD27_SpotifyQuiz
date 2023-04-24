import { Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Database, set, ref, update, push, onValue, onChildChanged, onChildAdded, onChildMoved, onChildRemoved } from '@angular/fire/database';
import { Router, ActivatedRoute } from '@angular/router';

export interface DialogData {
  roomname: string;
  roomtype: boolean;
  roompassword: string;
}

/* Pop-up */
@Component({
  selector: 'create-room-dialog',
  templateUrl: 'createroom.dialog.html',
})
export class CreateRoomDialogComponent {
  isChecked = false;
  constructor(
    public dialogRef: MatDialogRef<CreateRoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  
  toggle(): void {
    this.isChecked = (this.isChecked)? false : true;
    const passwordBlock = document.getElementById('roomPassword');
    if(this.isChecked){
      passwordBlock.style.display = 'none';
    } 
    else{
      passwordBlock.style.display = 'block';
    }
  }

  disableSelect = new FormControl(false);

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/* Browse */
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  providers: [ CreateRoomDialogComponent ]
})
export class BrowseComponent implements OnInit {
  roomname: string = "";
  roomtype!: boolean;
  roompassword: string = "";
  htmlToAdd: string;
  rooms: string[];
  
  constructor(
    public dialog: MatDialog,
    public database: Database,
    private router: Router,
  ) {}
  
  ngOnInit(): void {
    const userRef = ref(this.database, 'rooms/');
    const roomcontainer = document.getElementById('room-content');

    onValue(userRef, (snapshotChanges) => {
      this.rooms = Object.values(snapshotChanges.val());
      /*this.rooms.forEach(function(value) {
        console.log(value);
        roomcontainer.insertAdjacentHTML('beforeend','<app-room [inputFromBrowseComponent_Roomname]="roomname" [inputFromBrowseComponent_Roomtype]="roomtype"></app-room>');
      });*/
    })
  };

  createRoom(): void {
    const dialogRef = this.dialog.open(CreateRoomDialogComponent, {
      data: {roomname: this.roomname, roomtype: false, roompassword: this.roompassword}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result.roomname}, ${result.roomtype}, ${result.roompassword}`);
      if(result.roomtype) {
        result.roompassword = null;
      }
      this.roomname = result.roomname;
      this.roomtype = result.roomtype;
      this.roompassword = result.roompassword;
      let user = '';
      if (localStorage.hasOwnProperty("user")) {
        user = localStorage.getItem("user");
      }

      set(push(ref(this.database, 'rooms/')), {
        roomname: result.roomname,
        public: result.roomtype,
        password: result.roompassword,
        owner: user
      });
      
      
      //alert('Room Created!');
    });
  }  

  enterRoom(roomname): void {
    console.log(roomname);
    //this.router.navigate(['/room',roomname]);
    //this.router.navigate(['/room' + roomname]);
    this.router.navigateByUrl('/room', { state: { id:1 , name: roomname } });
  }

}
