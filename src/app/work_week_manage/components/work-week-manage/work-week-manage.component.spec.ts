import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWeekManageComponent } from './work-week-manage.component';

describe('WorkWeekManageComponent', () => {
  let component: WorkWeekManageComponent;
  let fixture: ComponentFixture<WorkWeekManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkWeekManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkWeekManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
