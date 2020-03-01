import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigationExample extends NavigationMixin(LightningElement) {

    openSFDCFacts(){
        this[NavigationMixin.Navigate] ({
            type : 'standard__webPage',
            attributes : {
                url: 'https://sfdcfacts.com'
            }
        })
    }

    OpenAccountHome(){

        this[NavigationMixin.Navigate] ({
            type : 'standard__objectPage',
            attributes : {
                objectApiName: 'Account',
                actionName : 'home' 
            }
        })

    }

    createNewContact(){
        this[NavigationMixin.Navigate] ({
            type : 'standard__objectPage',
            attributes : {
                objectApiName: 'Contact',
                actionName : 'new' 
            }
        })
    }

    openOppListView(){
        this[NavigationMixin.Navigate] ({
            type : 'standard__objectPage',
            attributes : {
                objectApiName: 'Opportunity',
                actionName : 'list' 
            }
        })
    }

    openCaseRecord(){
        this[NavigationMixin.Navigate] ({
            type : 'standard__recordPage',
            attributes : {
                recordId : '5002w000001qLAHAA2',
                objectApiName: 'Case',
                actionName : 'view' 
            }
        })
    }

    openIncidentsTab(){
        this[NavigationMixin.Navigate] ({
            type : 'standard__navItemPage',
            attributes : {
                apiName: 'Incident'
            }
        })
    }

    previewFile(){
        this[NavigationMixin.Navigate] ({
            type : 'standard__namedPage',
            attributes : {
                pageName: 'filePreview'
            },
            state :{
                recordId: '0692w000000kLdt',
                selectedRecordId: '0692w000000kLdt '
            }
        })
    }
}