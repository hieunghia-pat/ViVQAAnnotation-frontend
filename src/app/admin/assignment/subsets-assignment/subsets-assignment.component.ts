import { Component, Input, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserSubsetInterface } from 'src/app/interfaces/usersubset.interface';
import { SubsetService } from 'src/app/services/subset.service';

@Component({
  selector: 'app-subsets-assignment',
  templateUrl: './subsets-assignment.component.html',
  styleUrls: ['./subsets-assignment.component.css']
})
export class SubsetsAssignmentComponent implements OnInit {

  @Input() user!: UserInterface;

  @Input() subsets!: UserSubsetInterface[];

  constructor(
    private subsetService: SubsetService
  ) { }

  ngOnInit(): void {
  }

}
