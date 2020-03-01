public class AccountHandler {
    
    @auraEnabled
    public static void createAccount(String accountName){
        System.debug('accountName__'+accountName);
            Account acc = new Account();
            acc.Name = accountName;
            insert acc;
        }
    
}