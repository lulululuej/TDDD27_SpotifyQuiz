import { Component, Inject,} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Database, set, ref, update } from '@angular/fire/database';

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
    console.log(this.isChecked);
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
export class BrowseComponent {
  roomname: string = "";
  roomtype!: boolean;
  roompassword: string = "";
  
  constructor(
    public dialog: MatDialog,
    public database: Database,
  ) {};
  
  receiveMessage(event) {
    console.log(event);
    this.roomtype = event;
  }

  createRoom(): void {
    const dialogRef = this.dialog.open(CreateRoomDialogComponent, {
      data: {roomname: this.roomname, roomtype: false, roompassword: this.roompassword}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result.roomname}, ${result.roomtype}, ${result.roompassword}`);
      this.roomname = result.roomname;
      this.roomtype = result.roomtype;
      this.roompassword = result.roompassword;
      /*set(ref(this.database, 'rooms/' + result.roomname), {
        roomname: result.roomname,
        private: result.roomtype,
        password: result.roompassword
      });
      alert('Room Created!');*/

    });
  }

}