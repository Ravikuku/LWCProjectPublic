import { LightningElement,track } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    @track value;

    checkBoxSelectedHandler(){
        const childComponent = this.template.querySelector('c-public-method-child');
        const returnedMessage = childComponent.selectCheckBox(this.value);
    }
    onInputChangeHandler(event){
        this.value = event.target.value;

    }
}