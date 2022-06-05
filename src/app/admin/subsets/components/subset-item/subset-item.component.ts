import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubsetItem } from '../interfaces/subset-item.interface';

@Component({
  selector: 'app-subset-item',
  templateUrl: './subset-item.component.html',
  styleUrls: ['./subset-item.component.css']
})
export class SubsetItemComponent implements OnInit {

  @Input() data!: SubsetItem;

  constructor(
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
  }

  public onSubsetClick() {
    this.router.navigate(
      ["admin/subsets/get"], 
      {
        queryParams: {
          id: this.data.id
        }
      })
  }

}
