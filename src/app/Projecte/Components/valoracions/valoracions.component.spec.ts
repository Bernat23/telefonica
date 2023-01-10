import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionsComponent } from './valoracions.component';

describe('ValoracionsComponent', () => {
  let component: ValoracionsComponent;
  let fixture: ComponentFixture<ValoracionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValoracionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValoracionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
