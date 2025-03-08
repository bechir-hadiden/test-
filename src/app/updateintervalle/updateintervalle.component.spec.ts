import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateintervalleComponent } from './updateintervalle.component';

describe('UpdateintervalleComponent', () => {
  let component: UpdateintervalleComponent;
  let fixture: ComponentFixture<UpdateintervalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateintervalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateintervalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
