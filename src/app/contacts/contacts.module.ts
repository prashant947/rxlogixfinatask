import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class ContactsModule { }
