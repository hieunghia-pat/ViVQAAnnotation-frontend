import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/annotators-related/shared/components/navbar/navbar.component.spec.ts
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
=======
import { SubsetItemComponent } from './subset-item.component';

describe('SubsetItemComponent', () => {
  let component: SubsetItemComponent;
  let fixture: ComponentFixture<SubsetItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsetItemComponent ]
>>>>>>> 4acdda1f7e4f254f09e5c7edebb1718e0dd5dc9c:src/app/admin/subsets/subset-item/subset-item.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:src/app/annotators-related/shared/components/navbar/navbar.component.spec.ts
    fixture = TestBed.createComponent(NavbarComponent);
=======
    fixture = TestBed.createComponent(SubsetItemComponent);
>>>>>>> 4acdda1f7e4f254f09e5c7edebb1718e0dd5dc9c:src/app/admin/subsets/subset-item/subset-item.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
