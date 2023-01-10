import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriterisComponent } from './criteris.component';

describe('CriterisComponent', () => {
  let component: CriterisComponent;
  let fixture: ComponentFixture<CriterisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriterisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriterisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
