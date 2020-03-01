import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
@track result="";
@track previousResults =[];
@track showPreviousResults = false;
firstNumber;
secondNumber;

numberChangeHandler(event){
    const inputBox = event.target.name;
    if(inputBox==='firstNumber')
        this.firstNumber = event.target.value;
    else if(inputBox==='secondNumber')
        this.secondNumber = event.target.value;
    }
    addmethod(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.result = 'Result of '+firstN+'+'+secondN+' is '+(firstN+secondN);
        this.previousResults.push(this.result);
    }
    submethod(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.result = 'Result of '+firstN+'+'+secondN+' is '+(firstN-secondN);
        this.previousResults.push(this.result);
    }
    mulmethod(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.result = 'Result of '+firstN+'+'+secondN+' is '+(firstN*secondN);
        this.previousResults.push(this.result);
    }
    divmethod(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.result = 'Result of '+firstN+'+'+secondN+' is '+(firstN/secondN);
        this.previousResults.push(this.result);
    }
    showPreviousResult(event){
        if(event.target.checked)
        this.showPreviousResults = true;
    }
}