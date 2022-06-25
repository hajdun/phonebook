import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookItemComponent } from './phonebook-item.component';

describe('PhonebookItemComponent', () => {
  let component: PhonebookItemComponent;
  let fixture: ComponentFixture<PhonebookItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonebookItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonebookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
