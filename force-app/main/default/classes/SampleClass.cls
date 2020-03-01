public class SampleClass {
    
    public static void demoMethod(List<id> contactId){
        
        List<Contact> approvalRequestList = [SELECT LastName FROM Contact WHERE Id=:contactId
                                                                         AND (LastName !='Approved' OR
                                                                         LastName != 'Rejected')];
    }

}