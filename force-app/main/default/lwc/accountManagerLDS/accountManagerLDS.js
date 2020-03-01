import { LightningElement,track,wire } from 'lwc';
import {createRecord,getRecord} from 'lightning/uiRecordApi';

const accountFields = ['Account.Name','Account.Website','Account.Phone'];

export default class AccountManagerLDS extends LightningElement {
    @track accountName;
    @track accountPhone;
    @track accountWebsite;
    @track recordId;
    @wire(getRecord,{recordId : '$recordId',fields: accountFields}) accountRecord;

    accountNameChangehandler(event){

        this.accountName = event.target.value;

    }
    accountPhoneChangehandler(event){
        this.accountPhone = event.target.value;
    }
    accountWebsiteChangehandler(event){
        this.accountWebsite = event.target.value;
        
    }
    createAccountHandler(){
        const fields = {'Name' : this.accountName,'Phone' : this.accountPhone,'Website' : this.accountWebsite};
        const recordInput = {apiName : 'Account',fields};
        createRecord(recordInput).then(Response=>{
            console.log('Account has been created ',Response.id);
            this.recordId = Response.id;
        }
        
            ).catch(error =>{
                console.log('Error in Creating Account ',error.body.message);
            })
    }
    get retAccountName(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Name.value;
        }
        return undefined;
    }
    get retAccountPhone(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Phone.value;
        }
        return undefined;
    }
    get retAccountWebsite(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Website.value;
        }
        return undefined;
    }
}