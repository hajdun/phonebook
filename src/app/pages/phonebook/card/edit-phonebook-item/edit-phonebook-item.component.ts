import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/core/contacts.service';
import { IContact } from 'src/app/types/Contact';

@Component({
  selector: 'app-edit-phonebook-item',
  templateUrl: './edit-phonebook-item.component.html',
  styleUrls: ['./edit-phonebook-item.component.scss'],
})
export class EditPhonebookItemComponent implements OnInit {
  @Input('id') id: string = '';
  @Input('name') name: string = '';
  @Input('phone') phone: string = '';
  inputName = new FormControl(this.name, [Validators.required, Validators.minLength(4)]);
  inputPhone = new FormControl(this.phone, [Validators.required, Validators.minLength(4)]);
  errorMessage: any = null;
  @Output() refreshData: EventEmitter<IContact[]> = new EventEmitter();
  @Output() editFinished: EventEmitter<boolean> = new EventEmitter(false);
  formSubmitAttempt = false;

  constructor(private contactService: ContactsService) {}

  resetData() {
    this.inputName.setValue('');
    this.inputPhone.setValue('');
    this.inputName.setErrors(null)
    this.inputPhone.setErrors(null)
    this.errorMessage = null;
  }

  ngOnInit(): void {
    if (!this.id) {
      this.resetData();
    } else {
      this.inputName.setValue(this.name)
      this.inputPhone.setValue(this.phone)
    }
  }

  addContact = () => {
    this.formSubmitAttempt = true;
    if (this.isNameFieldInvalid() || this.isPhoneFieldInvalid()) return
    const contact: IContact = {
      name: this.inputName.value || '',
      phone: this.inputPhone.value || '',
    };

    this.contactService.addContact(contact).subscribe(
      (data) => {
        this.refreshData.emit(data as IContact[]);
        this.editFinished.emit(true);
        this.resetData();
      },
      (error) => {
        console.error('error caught in component');
        this.errorMessage = error.error;
      }
    );
  };

  editContact = () => {
    this.formSubmitAttempt = true;
    if (this.isNameFieldInvalid() || this.isPhoneFieldInvalid()) return

    const contact: IContact = {
      id: this.id,
      name: this.inputName.value || '',
      phone: this.inputPhone.value || '',
    };

    this.contactService.editContact(contact).subscribe(
      (data) => {
        this.refreshData.emit(data as IContact[]);
        this.editFinished.emit(true);
        this.resetData();
      },
      (error) => {
        console.error('error caught in component');
        this.errorMessage = error.error;
        this.editFinished.emit(true);
      }
    );
  };

  isNameFieldInvalid() {
    return !this.inputName.valid && (this.inputName.touched ||
      this.formSubmitAttempt);
  }

  /**
   * some valid numbers
   * 123-456-7890
   * (123) 456-7890
   * 123 456 7890
   * 123.456.7890
   * +91 (123) 456-7890
   */
  isPhoneFieldInvalid() {
    return !this.inputPhone.valid && (this.inputPhone.touched ||
      this.formSubmitAttempt);
  }
}
