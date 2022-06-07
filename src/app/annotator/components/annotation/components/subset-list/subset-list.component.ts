import { Component, Input, OnInit, Output } from '@angular/core';
import { SubsetInterface } from 'src/app/interfaces/subset.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subset-list',
  templateUrl: './subset-list.component.html',
  styleUrls: ['./subset-list.component.css']
})
export class SubsetListComponent implements OnInit {

  @Input() subsets!: SubsetInterface[]
  @Input() subset!: SubsetInterface;
  
  @Output() subsetChange: EventEmitter<SubsetInterface> = new EventEmitter<SubsetInterface>()

  constructor(
  ) { }

  ngOnInit(): void {
    this.subset = this.subsets[0] // the first subset if selected by default
  }

  public onSelectedSubset(subset: SubsetInterface): void {
    this.subset = subset
    this.subsetChange.emit(this.subset)
  }

}
