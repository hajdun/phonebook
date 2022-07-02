import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/core/contacts.service';
import { IContact } from 'src/app/types/Contact';

@Component({
  selector: 'app-phonebook-page',
  templateUrl: './phonebook-page.component.html',
  styleUrls: ['./phonebook-page.component.scss'],
})
export class PhonebookPageComponent implements OnInit {
  contacts: IContact[] = [];

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((data: IContact[]) => {
      this.contacts = data;
    });
  }

  onRefreshData = (data: IContact[]) => {
    this.contacts = data;
  };
}
