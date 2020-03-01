import { LightningElement,api } from 'lwc';


export default class AccountRecordForm extends LightningElement {

    @api recordId;
    @api objectApiName;

    handelSuccess(event){
        this.recordId = event.detail.id;
    }
}