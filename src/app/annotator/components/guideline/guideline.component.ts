import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-guideline',
  templateUrl: './guideline.component.html',
  styleUrls: ['./guideline.component.css']
})
export class GuidelineComponent implements OnInit {


  ngOnInit(): void {
  }
  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example.html',
})
export class DialogContentExampleDialog {}
