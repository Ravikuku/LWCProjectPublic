public with sharing class AccountController {  
    
    @AuraEnabled( cacheable = true )  
    public static List< Account > fetchAccounts(String accountName,String industry ) {  
        String soql;
        soql = 'SELECT Id, Name, Industry FROM Account where Id != null';
        if (!accountName.equals(''))
            soql += ' and name LIKE \'%'+String.escapeSingleQuotes(accountName)+'%\'';
       if (!industry.equals(''))
          soql += ' and industry LIKE \'%'+String.escapeSingleQuotes(industry)+'%\''; 
        system.debug('soql__'+soql);
         List<Account> accounts = Database.query(soql);
        return accounts;
        
    }  
    
}