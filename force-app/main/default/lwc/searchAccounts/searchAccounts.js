import { LightningElement, track, api } from 'lwc';  
import fetchAccounts from '@salesforce/apex/AccountController.fetchAccounts';  

const columns = [  
    { label: 'Id', fieldName: 'Id' },  
    { label: 'Name', fieldName: 'Name' },  
    { label: 'Industry', fieldName: 'Industry' },  
    {type: "button", typeAttributes: {  
        label: 'Select',  
        name: 'Select',  
        title: 'Select',  
        disabled: false,  
        value: 'select',  
        iconPosition: 'left'  
    }},   
];  
  
export default class accountSearchLWC extends LightningElement {  
  
    @track accounts;  
    @track error;  
    @track columns = columns;  
    @track accountName = '';
    @track industry = '';
    @api openComponent = false;
    @api url;
    connectedCallback() {
        var accountName = this.accountName;
        var industry = this.industry;
        
        fetchAccounts( { accountName,industry } )    
            .then(result => {  
                this.accounts = result;  
            })  
            .catch(error => {  
                this.error = error;  
            });

    }
    handleIndustryKeyChange(event){
        var accountName = this.accountName;
        const industry = event.target.value;
        this.industry = event.target.value;
        
        if (industry) { 
            fetchAccounts( { accountName,industry } )    
            .then(result => {  
                this.accounts = result;  
            })  
            .catch(error => {  
                this.error = error;  
            });  
        }else {
              
            fetchAccounts( { accountName,industry } )    
                .then(result => {  
                    this.accounts = result;  
                })  
                .catch(error => {  
                    this.error = error;  
            }); 
        }
    }
    handleAccountKeyChange( event ) {

            var industry = this.industry;
            this.accountName = event.target.value;
            const accountName = event.target.value; 
        //console.log('searchKey__'+accountName); 
        if (accountName) { 
            fetchAccounts( { accountName,industry } )    
            .then(result => {  
                this.accounts = result;  
            })  
            .catch(error => {  
                this.error = error;  
            });  
        } else {
              
            fetchAccounts( { accountName,industry } )    
                .then(result => {  
                    this.accounts = result;  
                })  
                .catch(error => {  
                    this.error = error;  
            }); 
        } 
        //this.accounts = undefined;  
    }      
    callRowAction( event ) {  
        const recId =  event.detail.row.Id;  
        const actionName = event.detail.action.name;  
        if ( actionName === 'Select') {  
            const selectedEvent = new CustomEvent("selectedrecordevent", {
                detail: recId
              });
          
              // Dispatches the event.
              this.dispatchEvent(selectedEvent);
        }          
    } 
    closeModal() {
        var accountName = '';
        var industry = '';
        console.log('childUrl__'+this.url);
        this.openComponent = false
        fetchAccounts( { accountName,industry } )    
            .then(result => {  
                this.accounts = result;  
            })  
            .catch(error => {  
                this.error = error;  
            }); 
            window.open(this.url);
    } 
    resetSearch() {
        var accountName = '';
        var industry = '';
        fetchAccounts( { accountName,industry } )    
            .then(result => {  
                this.accounts = result;  
            })  
            .catch(error => {  
                this.error = error;  
            }); 
    }
    downloadCsv (){
        var csv = this.convertArrayOfObjectsToCSV(this.accounts);
        var hiddenElement = document.createElement('a');
        if (csv == null){return;} 
        
          hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
          hiddenElement.target = '_self';
          hiddenElement.download = 'ExportData.csv'; 
          document.body.appendChild(hiddenElement); 
    	  hiddenElement.click();
    }
    convertArrayOfObjectsToCSV(objectRecords){
        var csvStringResult, counter, keys, columnDivider, lineDivider,i,sTempkey,skey;

        if (objectRecords == null || !objectRecords.length) {
            return null;
         }

        columnDivider = ',';
        lineDivider =  '\n';
  
        keys = ['Id','Name','Industry' ];
        
        csvStringResult = '';
        csvStringResult += keys.join(columnDivider);
        csvStringResult += lineDivider;
 
        for(i=0; i < objectRecords.length; i++){   
            counter = 0;
           
             for(sTempkey in keys) {
                skey = keys[sTempkey] ;  
 
                  if(counter > 0){ 
                      csvStringResult += columnDivider; 
                   }   
               
               csvStringResult += '"'+ objectRecords[i][skey]+'"'; 
               
               counter++;
 
            }  
             csvStringResult += lineDivider;
          }
 
        return csvStringResult; 
    }
}