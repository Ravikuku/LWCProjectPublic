import { LightningElement,wire } from 'lwc';
import getAllAccount from '@salesforce/apex/AccountManager.getAccount';

export default class AccountManagerApex extends LightningElement {

@wire(getAllAccount) accounts;

get responseReceived(){
    if(this.accounts){
        return true;
    }return false;
}
}