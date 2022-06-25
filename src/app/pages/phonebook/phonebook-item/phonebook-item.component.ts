import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phonebook-item',
  templateUrl: './phonebook-item.component.html',
  styleUrls: ['./phonebook-item.component.scss']
})

export class PhonebookItemComponent implements OnInit {
  @Input('name') name: string='';
  @Input('phone') phone: string='';

  constructor() { }

  ngOnInit(): void {
  }

}
