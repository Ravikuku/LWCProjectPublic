import { LightningElement,track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
@track displayDiv = false;
@track cityList = ["Bangalore","Hyderabad","Delhi","Jaipur"];

showDivHandler(event){
    this.displayDiv = event.target.checked; 
}

}