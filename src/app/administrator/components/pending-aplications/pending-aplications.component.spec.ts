import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAplicationsComponent } from './pending-aplications.component';

describe('PendingAplicationsComponent', () => {
  let component: PendingAplicationsComponent;
  let fixture: ComponentFixture<PendingAplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PendingAplicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PendingAplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
