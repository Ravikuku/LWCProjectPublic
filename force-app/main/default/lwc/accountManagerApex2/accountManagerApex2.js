import { LightningElement,track } from 'lwc';
import getAllAccount from '@salesforce/apex/accountManagerwithParameter.getAccount';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountManagerApex2 extends LightningElement {
@track numberOfRecords;
@track accounts;
numberOfAccountChangeHandler(event){
    this.numberOfRecords = event.target.value;
    console.log('No Of Records__'+this.numberOfRecords);
}
get responseReceived(){
    if(this.accounts){
        return true;
    }return false;
}

getAccount(){
    getAllAccount({numberOfRecords:this.numberOfRecords}).then(response =>{
        
        this.accounts = response;
        const toastEvent = new ShowToastEvent({
            title : 'Accounts Loaded',
            message : this.numberOfRecords+ ' Accounts Fetched From Server',
            variant : 'success',
        });
        this.dispatchEvent(toastEvent);
    }).catch(error => {
        const toastEvent = new ShowToastEvent({
            title : 'Error',
            message : error.body.message,
            variant : 'error',
        });
        this.dispatchEvent(toastEvent);
        console.log('Error in Getting the Accounts__', error.body.message);
    })
}
}