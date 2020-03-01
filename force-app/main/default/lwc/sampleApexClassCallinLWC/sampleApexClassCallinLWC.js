import { LightningElement  } from 'lwc';
import createAccount from '@salesforce/apex/AccountHandler.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class SampleApexClassCallinLWC extends LightningElement {
    AccountName = "";
    handelAccountName(event){
        this.AccountName = event.target.value;
        
    }
    createAccount(){
        //@wire(createAccount,{accountName:'$AccountName'}) accounts;
        createAccount({accountName:this.AccountName})
        .then(() => {
            const evt = new ShowToastEvent({
                title: 'Success',
                message: 'Account got Inserted',
                variant: 'success',
            });
            this.dispatchEvent(evt);
        })
        .catch((error) => {
            const evt = new ShowToastEvent({
                title: 'Failure',
                message: error.body.message,
                variant: 'error',
            });
            this.dispatchEvent(evt);
        });

        
        }
  }