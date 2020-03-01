import { LightningElement,track,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import { NavigationMixin } from 'lightning/navigation';  
export default class SearchAccountLookup extends  NavigationMixin(LightningElement) {

    @track selectedRecordId;
    @track record;
    @track name;
    @track url;
    @wire(getRecord, { recordId: '$selectedRecordId', fields: [ACCOUNT_NAME_FIELD] })
    wiredAccount({ error, data }) {
        if (data) {
            this.record = data;
            //this.name(this.record.fields.Name.value);
            console.log('name__'+this.record.fields.Name.value);
            this.name = this.record.fields.Name.value;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.record = undefined;
        }
  
    }
    connectedCallback() {
        this.accountHomePageRef = {
            type: "standard__recordPage",
            attributes: {
                "objectApiName" : "Case",
                "recordId": "00Q2w000001ltD0EAI",
               "actionName": "view"
            }
        };
        this[NavigationMixin.GenerateUrl](this.accountHomePageRef)
            .then(url => this.url = url);
    }

    handleOnClick(){
        console.log('parenturl__'+this.url);
        //window.open(this.url);
        const childComponent = this.template.querySelector('c-search-Accounts');
        childComponent.openComponent = true;
        childComponent.url = this.url;
    }
    selectedRecordEvent(event) {
        this.selectedRecordId = event.detail;
        console.log('selectedRecordId__'+this.selectedRecordId);
      }
   
}