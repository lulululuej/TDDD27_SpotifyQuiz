import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

export interface DialogData {
  roomname: string;
  roompassword: string;
}

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {
  roomname: string = "";
  roompassword: string = "";
  constructor(
    public dialog: MatDialog
  ) {};

  createRoom(): void {
    const dialogRef = this.dialog.open(CreateRoomDialog, {
      data: {roomname: this.roomname, roompassword: this.roompassword}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result.roomname}, ${result.roompassword}`);
      this.roomname = result.roomname;
      this.roompassword = result.roompassword;
    });
  }

}

@Component({
  selector: 'create-room-dialog',
  templateUrl: 'createroom.dialog.html',
})
export class CreateRoomDialog {
  constructor(
    public dialogRef: MatDialogRef<CreateRoomDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  disableSelect = new FormControl(false);

  onNoClick(): void {
    this.dialogRef.close();
  }
}