import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListttComponent } from './listtt.component';

describe('ListttComponent', () => {
  let component: ListttComponent;
  let fixture: ComponentFixture<ListttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListttComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
