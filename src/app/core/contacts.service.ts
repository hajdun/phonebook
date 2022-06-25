import { IContact } from './../types/Contact';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getContacts=()=>{
    return this.http.get<IContact[]>('http://localhost:3001/contacts')
  }

  addContact=(contact:IContact)=>{
    return this.http.post('http://localhost:3001/contacts', contact)
  }

  deleteContact=(contactId:string)=>{
    return this.http.delete(`http://localhost:3001/contacts/${contactId}`)
  }

  editContact=(contact:IContact)=>{
    return this.http.put(`http://localhost:3001/contacts/${contact.id}`, contact)
  }
}
