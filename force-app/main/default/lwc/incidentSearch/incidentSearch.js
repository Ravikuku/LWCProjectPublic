import { LightningElement,wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import STATUS_FIELD from '@salesforce/schema/Incident__c.Status__c';
import { fireEvent } from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation';

export default class IncidentSearch extends LightningElement {
    incNum = "";
    statusValue = "";
    @wire(CurrentPageReference) pageRef;
    @wire(getPicklistValues, { recordTypeId: '012000000000000AAA', fieldApiName: STATUS_FIELD }) statusValues;
    
    handelIncNum(event){
        this.incNum = event.target.value;
    }
    handleChange(event){
        if(event.target.name ==='status'){
            this.statusValue = event.target.value; 
        }

    }
    handleSearch(event){
        console.log('insidehandelSearch');
        let eventData = {"incNum":this.incNum,"status":this.statusValue};
        console.log(eventData);
        fireEvent(this.pageRef,'searchKey',eventData);
    }
   
}