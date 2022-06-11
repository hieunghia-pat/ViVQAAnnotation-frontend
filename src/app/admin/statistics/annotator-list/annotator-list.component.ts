import { Component, Input, OnInit, Output } from '@angular/core';
import { AnnotatorInterface } from 'src/app/interfaces/annotator.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-annotator-list',
  templateUrl: './annotator-list.component.html',
  styleUrls: ['./annotator-list.component.css']
})
export class AnnotatorListComponent implements OnInit {

  @Input() annotators!: AnnotatorInterface[]
  @Output() annotatorChanged: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

}
