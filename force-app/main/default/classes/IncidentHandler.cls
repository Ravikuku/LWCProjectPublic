public class IncidentHandler {
    
    @auraEnabled(cacheable=true)
    public static List<Incident__c> searchIncidents(String incidentNumber,String Status){
        
        List<Incident__c> incidentList = [SELECT Id,Status__c,IncidentNumber__c FROM Incident__c 
                                                 WHERE Status__c =:Status AND IncidentNumber__c=:incidentNumber];
        System.debug('incidentList__'+incidentList[0]);
         return incidentList;
    }

}