import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {NgForm} from '@angular/forms';

interface Contact {
  name: string;
  email: string;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  constructor(private modalService: BsModalService) {
  }

  @ViewChild('contactDetails') contactDetails: TemplateRef<any>;

  contactList: Contact[] = [{
    name: 'Contact 001',
    email: 'c001@email.com'
  }];
  selectedContact: Contact;

  contactDetailsModalRef: BsModalRef;

  ngOnInit(): void {
  }


  onShowDetails(contact: Contact): void {
    this.contactDetailsModalRef = this.modalService.show(this.contactDetails);
    this.selectedContact = contact;
  }

  onAddRow(): void {
    const threeZeroFilled = ('000' + this.getNextContactSerialNumber()).slice(-3);
    this.contactList.push({
      name: 'Contact ' + threeZeroFilled,
      email: 'c' + threeZeroFilled + '@email.com'
    });
  }

  onDelete(index: number): void {
    this.contactList.splice(index, 1);
  }

  getNextContactSerialNumber(): number {
    const lastContact = this.contactList[this.contactList.length - 1];
    const lastContactNameArr = lastContact.name.split(' ');
    if (Number(lastContactNameArr[1])) {
      return Number(lastContactNameArr[1]) + 1;
    } else {
      return this.contactList.length + 1;
    }
  }

  onSubmitContactDetailsForm(contactDetailForm: NgForm): void {
    console.log(contactDetailForm.value);
    console.log(this.contactList.indexOf(this.selectedContact));
    this.contactList[this.contactList.indexOf(this.selectedContact)].name = contactDetailForm.value.name;
    this.contactList[this.contactList.indexOf(this.selectedContact)].email = contactDetailForm.value.email;
    this.contactDetailsModalRef.hide();
  }

}
