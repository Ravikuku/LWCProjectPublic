({
    doInit : function(component, event, helper) {

       component.set("v.meetingRoomInfo",[
            {"roomName":"A-01","roomCapacity":"12"},
            {"roomName":"A-02","roomCapacity":"10"},
            {"roomName":"B-01","roomCapacity":"14"},
            {"roomName":"B-02","roomCapacity":"16 "},
        ]);

    },

    handelTileClick: function(component, event, helper) {
        component.set("v.selectedMeetingRoom" ,event.getParam('roomName'));
    }
})