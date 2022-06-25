import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactsService } from 'src/app/core/contacts.service';
import { IContact } from 'src/app/types/Contact';

@Component({
  selector: 'app-phonebook-item',
  templateUrl: './phonebook-item.component.html',
  styleUrls: ['./phonebook-item.component.scss'],
})
export class PhonebookItemComponent implements OnInit {
  @Input('id') id: string = '';
  @Input('name') name: string = '';
  @Input('phone') phone: string = '';
  isEditMode = false;
  @Output() refreshData: EventEmitter<IContact[]> = new EventEmitter();

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {}

  deleteContact = () => {
    this.contactService.deleteContact(this.id).subscribe((data) => {
      this.refreshData.emit(data as IContact[]);
    });
  };

  editContact = () => {
    this.isEditMode = true;
  };

  editDone = () => {
    this.isEditMode = false;
  };

  onRefreshData = (data: IContact[]) => {
    this.refreshData.emit(data);
  };
}
