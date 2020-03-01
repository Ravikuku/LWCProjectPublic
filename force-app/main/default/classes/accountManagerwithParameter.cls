public with sharing class accountManagerwithParameter {
    
    @AuraEnabled
    public static List<Account> getAccount(Integer numberOfRecords){
        System.debug('numberOfRecords__'+numberOfRecords);
        
        return [SELECT Id,Name, Phone FROM Account LIMIT :numberOfRecords];
        
    }
}