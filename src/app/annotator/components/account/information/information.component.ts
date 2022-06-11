import { Component, Input, OnInit } from '@angular/core';
import { AnnotatorInterface } from 'src/app/interfaces/annotator.interface';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  @Input() information!: AnnotatorInterface

  public isUpdatingInformation: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public onUpdatedInformation(newInformation: AnnotatorInterface): void {
    this.information = newInformation
  }
}
