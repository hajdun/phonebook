import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-phonebook-item',
  templateUrl: './edit-phonebook-item.component.html',
  styleUrls: ['./edit-phonebook-item.component.scss']
})
export class EditPhonebookItemComponent implements OnInit {
  @Input('name') name: string='';
  @Input('phone') phone: string='';

  constructor() { }

  ngOnInit(): void {
  }

}
