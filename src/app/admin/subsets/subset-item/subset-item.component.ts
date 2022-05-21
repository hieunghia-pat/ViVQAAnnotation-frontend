import { Component, Input, OnInit } from '@angular/core';
import { SubsetItemInterface } from '../model/subset-item-interface';

@Component({
  selector: 'app-subset-item',
  templateUrl: './subset-item.component.html',
  styleUrls: ['./subset-item.component.css']
})
export class SubsetItemComponent implements OnInit {

  @Input() item?: SubsetItemInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
