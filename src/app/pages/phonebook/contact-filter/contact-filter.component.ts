import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IContact } from 'src/app/types/Contact';
import { ContactsService } from './../../../core/contacts.service';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {
  @Output() refreshData: EventEmitter<IContact[]> = new EventEmitter();
  filterByName =new FormControl('', []);

  constructor(private contactService: ContactsService) { }

  ngOnInit(): void {
  }

  filterContacts = () => {

    this.contactService.getContactsByName(this.filterByName.value).subscribe((data: unknown) => {
      this.refreshData.emit(data as IContact[]);
 });
  };

}
