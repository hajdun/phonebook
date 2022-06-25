import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhonebookItemComponent } from './edit-phonebook-item.component';

describe('EditPhonebookItemComponent', () => {
  let component: EditPhonebookItemComponent;
  let fixture: ComponentFixture<EditPhonebookItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPhonebookItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPhonebookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
