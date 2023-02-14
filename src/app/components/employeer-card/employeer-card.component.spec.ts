import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerCardComponent } from './employeer-card.component';

describe('EmployeerCardComponent', () => {
  let component: EmployeerCardComponent;
  let fixture: ComponentFixture<EmployeerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
