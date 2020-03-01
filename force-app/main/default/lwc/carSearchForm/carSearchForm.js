import { LightningElement,wire,track   } from 'lwc';

import getCarTypes from '@salesforce/apex/CarTypesHandler.getCarTypes';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class CarSearchForm extends LightningElement {
    @track carTypes;
    @wire(getCarTypes) 
    wiredCarType({data,error}){
        if(data){
            this.carTypes = [];
            data.forEach(element=>{
                const carType ={};
                carType.label = element.Name;
                carType.value = element.Id;
                this.carTypes.push(carType);
            })
        }else if(error){

            const toastEvent = new ShowToastEvent({
                title : 'Error',
                message : error.body.message,
                variant : 'error',
            });
            this.dispatchEvent(toastEvent);

        }
    }

    
    handleChange(event) {
        const carTypeId = event.detail.value;

        alert(`Option selected with value: ${carTypeId}`);
    }
    handleClick(){

    }
}