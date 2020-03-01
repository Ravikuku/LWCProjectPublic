import { LightningElement,track } from 'lwc';
import {getBMI} from 'c/commonJSCode';

export default class BmiCalculator extends LightningElement {
    cardTitle="BMI Calculator";
height;
weight;
    @track BMIResult;
 
    changeinWeight(event){
        this.weight = parseFloat(event.target.value);
    }
    changeinHeight(event){
        this.height = parseFloat(event.target.value);
    }
    calculateBMI(){
      /*  try{
            this.BMIResult = this.weight/(this.height*this.height);
        }
       catch(error){
           this.BMIResult = undefined;
       }*/
       this.BMIResult = getBMI(this.weight,this.height);
    }
    get BMIvalue(){
        if(this.BMIResult === undefined){
            return "";
        }
        return 'Your BMI index is:'+this.BMIResult;
    }
}