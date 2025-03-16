import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriterComponent } from './criter.component';

describe('CriterComponent', () => {
  let component: CriterComponent;
  let fixture: ComponentFixture<CriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
