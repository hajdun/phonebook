import { Component, Input, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/core/contacts.service';

@Component({
  selector: 'app-phonebook-item',
  templateUrl: './phonebook-item.component.html',
  styleUrls: ['./phonebook-item.component.scss']
})

export class PhonebookItemComponent implements OnInit {
  @Input('id') id: string='';
  @Input('name') name: string='';
  @Input('phone') phone: string='';
  isEditMode=false;

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {
  }

  deleteContact=()=>{
    this.contactService.deleteContact(this.id).subscribe(
      (data) => {
        console.log(data);
      })
  }

  editContact=()=>{
    this.isEditMode=true
  }

}
