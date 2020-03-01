import { LightningElement, wire, track } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class EventWithData extends LightningElement {
    @track selectedContact;
    @wire(getContactList) contacts;

    get listIsNotEmpty() {
        return this.contacts && Array.isArray(this.contacts.data) && this.contacts.data.length > 0;
    }

    contactSelected(event) {
        const contactId = event.detail;
        this.selectedContact = this.contacts.data.find(contact => contact.Id === contactId);
    }

}