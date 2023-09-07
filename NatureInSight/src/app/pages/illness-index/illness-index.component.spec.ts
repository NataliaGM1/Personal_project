import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllnessIndexComponent } from './illness-index.component';

describe('IllnessIndexComponent', () => {
  let component: IllnessIndexComponent;
  let fixture: ComponentFixture<IllnessIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IllnessIndexComponent]
    });
    fixture = TestBed.createComponent(IllnessIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
