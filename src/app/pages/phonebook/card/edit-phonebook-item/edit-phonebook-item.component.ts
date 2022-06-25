import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  errorMessage: any = null;
  @Output() refreshData: EventEmitter<IContact[]> = new EventEmitter();
  @Output() editFinished: EventEmitter<boolean> = new EventEmitter(false);


  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {}

  addContact = () => {
    const contact: IContact = {
      name: this.name,
      phone: this.phone,
    };

    this.contactService.addContact(contact).subscribe(
      (data) => {
        this.refreshData.emit(data as IContact[]);
        this.editFinished.emit(true)
      },
      (error) => {
        console.error('error caught in component');
        this.errorMessage = error.error;
      }
    );
  };

  editContact = () => {
    const contact: IContact = {
      id: this.id,
      name: this.name,
      phone: this.phone,
    };

    this.contactService.editContact(contact).subscribe(
      (data) => {
        this.refreshData.emit(data as IContact[]);
        this.editFinished.emit(true)
      },
      (error) => {
        console.error('error caught in component');
        this.errorMessage = error.error;
        this.editFinished.emit(true)
      }
    );
  };
}
