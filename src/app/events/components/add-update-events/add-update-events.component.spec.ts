import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateEventsComponent } from './add-update-events.component';

describe('AddUpdateEventsComponent', () => {
  let component: AddUpdateEventsComponent;
  let fixture: ComponentFixture<AddUpdateEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUpdateEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddUpdateEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
