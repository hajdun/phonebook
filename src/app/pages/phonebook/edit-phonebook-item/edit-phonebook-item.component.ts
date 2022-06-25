import { IContact } from './../../../types/Contact';
import { Component, Input, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/core/contacts.service';

@Component({
  selector: 'app-edit-phonebook-item',
  templateUrl: './edit-phonebook-item.component.html',
  styleUrls: ['./edit-phonebook-item.component.scss'],
})
export class EditPhonebookItemComponent implements OnInit {
  @Input('name') name: string = '';
  @Input('phone') phone: string = '';
  editName: string = this.name;
  editPhone: string = this.phone;
  errorMessage: string = '';

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {}

  addContact = () => {
    const contact: IContact = {
      name: this.editName,
      phone: this.editPhone,
    };

    this.contactService.addContact(contact).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('error caught in component');
        this.errorMessage = error.error;
      }
    );
  };

  editContact = () => {};
}
