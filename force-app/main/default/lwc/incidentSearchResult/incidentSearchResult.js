import { LightningElement,wire,track } from 'lwc';
import { registerListener,unregisterAllListeners } from 'c/pubSub';
import searchIncidents from '@salesforce/apex/IncidentHandler.searchIncidents';
import { CurrentPageReference } from 'lightning/navigation';
const columns = [
    { label: 'IncidentNumber', fieldName: 'IncidentNumber__c' },
    { label: 'Status', fieldName: 'Status__c' },
];

export default class IncidentSearchResult extends LightningElement {
@track incidents;
@track tableColumn = columns;
    inciNumber;
status;
@wire(CurrentPageReference) pageRef;
@wire(searchIncidents,{incidentNumber:'$inciNumber',Status:'$status'}) incidents;
    connectedCallback(){
        registerListener('searchKey',this.handelSearchKey,this);
    }
    disconnectedCallback(){
        unregisterAllListeners(this);
    }
    handelSearchKey(searchKey){
        this.inciNumber = searchKey.incNum;
        this.status = searchKey.status;
        console.log('inside Incident Search__'+this.inciNumber);
    }
}