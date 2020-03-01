import { LightningElement,track } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import NAME_PHONE from '@salesforce/schema/Account.Phone';
import NAME_WEBSITE from '@salesforce/schema/Account.Website';

export default class AccountRecordForm extends LightningElement {

    @track recordId;
    //@track fieldsArray = ['Name','Phone','Website'];
    @track fieldsArray = [NAME_FIELD,NAME_PHONE,NAME_WEBSITE];

    handelSuccess(event){
        this.recordId = event.detail.id;
    }
}