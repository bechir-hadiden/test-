import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdesatComponent } from './listdesat.component';

describe('ListdesatComponent', () => {
  let component: ListdesatComponent;
  let fixture: ComponentFixture<ListdesatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListdesatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdesatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
