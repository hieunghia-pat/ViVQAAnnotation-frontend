import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnnotatorInterface } from 'src/app/interfaces/annotator.interface';

@Component({
  selector: 'app-annotators-list',
  templateUrl: './annotators-list.component.html',
  styleUrls: ['./annotators-list.component.css']
})
export class AnnotatorsListComponent implements OnInit {

  @Input() annotators!: AnnotatorInterface[]
  
  @Output() editEvent: EventEmitter<number> = new EventEmitter<number>()
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>()

  public columnsToDisplay: string[] = ["#", "username", "firstname", "lastname", "edit", "delete"]

  constructor() { }

  ngOnInit(): void {
  }

  public onEdit(index: number) {
    this.editEvent.emit(index)
  }

  public onDelete(index: number) {
    this.deleteEvent.emit(index)
  }

}
