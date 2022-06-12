import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MardownContainerComponent } from "./mardown-container/mardown-container.component"

@Component({
  selector: 'app-guideline',
  templateUrl: './guideline.component.html',
  styleUrls: ['./guideline.component.css']
})
export class GuidelineComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(
    private dialog: MatDialog
  ) { }

  openDialog() {
    this.dialog.open(MardownContainerComponent);
  }

}
