import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlantComponent } from './list-plant.component';

describe('ListPlantComponent', () => {
  let component: ListPlantComponent;
  let fixture: ComponentFixture<ListPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPlantComponent]
    });
    fixture = TestBed.createComponent(ListPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
