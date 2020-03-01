public class ContactController {
    
    @auraEnabled(cacheable=true)
    
    public static List<Contact> getContactList(){
        List<Contact> contactList = [SELECT Id,Name,Title,Picture__c,Phone,Email FROM Contact];
        return contactList;
    }

}