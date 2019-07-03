/**************************
// Notifications
// @JC 17/08/17: contains a few more high alert and normal notifications
**************************/

var mockNotifications = {
    "pulseBody" : {
      "notifications" : [ {
        "type" : "message",
        "description" : "Meals on Wheels has not arrived, please contact them. (click for contact details)",
        "activity" : {
          "verb" : "ignore",
          "priority" : "HIGH",
          "published" : "2017-08-24T21:40:17Z",
          "icon" : {
            "url" : "/PumpHouse/uploads/iotaa/images/missedAppointment.png"
          },
          "smallIcon" : {
            "url" : "/PumpHouse/uploads/iotaa/images/missedAppointment.png"
          },
          "largeIcon" : {
            "url" : "/PumpHouse/uploads/iotaa/images/missedAppointment.png"
          },
          "actor" : {
            "objectType" : "person",
            "id" : "599f47b2e738103bfd11fdf6",
            "url" : "http://goto.cnect.to/bettertogether/user/599f47b2e738103bfd11fdf6",
            "pumpUrl" : "roadie://visit/user/599f47b2e738103bfd11fdf6",
            "displayName" : "John Jenkins"
          },
          "storyId" : "missedAppointment",
          "generator" : {
            "objectType" : "service",
            "id" : "iotaaService"
          },
          "object" : {
            "objectType" : "organization",
            "displayName" : "Meals on Wheels",
            "id" : "599f47c1e738103bfd120452",
            "url" : "http://goto.cnect.to/bettertogether?action=visit&owner=05e0f67f5da16d630740ff63&place=c26c05e8002268ff5da16d63&space=4bc641c7bad580be5da16d63&cog=f022bf07071e9f335da16d63&id=599f47c1e738103bfd120452",
            "pumpUrl" : "roadie://visit/cog/05e0f67f5da16d630740ff63/c26c05e8002268ff5da16d63/4bc641c7bad580be5da16d63/f022bf07071e9f335da16d63?id=599f47c1e738103bfd120452"
          },
          "to" : [ {
            "id" : "599f47b4e738103bfd11ff54",
            "url" : "http://goto.cnect.to/bettertogether/user/599f47b4e738103bfd11ff54",
            "pumpUrl" : "roadie://visit/user/599f47b4e738103bfd11ff54",
            "displayName" : "Diana Dawson",
            "objectType" : "person"
          } ],
          "tag" : [ "System.tag.alert" ],
          "id" : "599f47c1e738103bfd120458"
        },
        "created" : "2017-08-24T21:40:17Z",
        "viewed" : null,
        "userId" : "599f47b4e738103bfd11ff54",
        "tag" : [ "System.tag.alert" ],
        "id" : "599f47c1e738103bfd12045b",
        "smallIcon" : "/PumpHouse/uploads/iotaa/images/missedAppointment.png",
        "mediumIcon" : "/PumpHouse/uploads/iotaa/images/missedAppointment.png",
        "largeIcon" : "/PumpHouse/uploads/iotaa/images/missedAppointment.png"
      },
      {
        // @JC 25/08/17: added addtiional message to see multuple high alert notifications
        "type" : "message",
        "description" : "Fire hazard in hallway",
        "activity" : {
          "verb" : "ignore",
          "priority" : "HIGH",
          "published" : "2017-08-24T21:40:17Z",
          "icon" : {
            "url" : "/PumpHouse/uploads/iotaa/images/missedAppointment.png"
          },
          "smallIcon" : {
            "url" : "/PumpHouse/uploads/iotaa/images/missedAppointment.png"
          },
          "largeIcon" : {
            "url" : "/PumpHouse/uploads/iotaa/images/missedAppointment.png"
          },
          "actor" : {
            "objectType" : "person",
            "id" : "599f47b2e738103bfd11fdf6",
            "url" : "http://goto.cnect.to/bettertogether/user/599f47b2e738103bfd11fdf6",
            "pumpUrl" : "roadie://visit/user/599f47b2e738103bfd11fdf6",
            "displayName" : "John Jenkins"
          },
          "storyId" : "missedAppointment",
          "generator" : {
            "objectType" : "service",
            "id" : "iotaaService"
          },
          "object" : {
            "objectType" : "organization",
            "displayName" : "Meals on Wheels",
            "id" : "599f47c1e738103bfd120452",
            "url" : "http://goto.cnect.to/bettertogether?action=visit&owner=05e0f67f5da16d630740ff63&place=c26c05e8002268ff5da16d63&space=4bc641c7bad580be5da16d63&cog=f022bf07071e9f335da16d63&id=599f47c1e738103bfd120452",
            "pumpUrl" : "roadie://visit/cog/05e0f67f5da16d630740ff63/c26c05e8002268ff5da16d63/4bc641c7bad580be5da16d63/f022bf07071e9f335da16d63?id=599f47c1e738103bfd120452"
          },
          "to" : [ {
            "id" : "599f47b4e738103bfd11ff54",
            "url" : "http://goto.cnect.to/bettertogether/user/599f47b4e738103bfd11ff54",
            "pumpUrl" : "roadie://visit/user/599f47b4e738103bfd11ff54",
            "displayName" : "Diana Dawson",
            "objectType" : "person"
          } ],
          "tag" : [ "System.tag.alert" ],
          "id" : "599f47c1e738103bfd120458"
        },
        "created" : "2017-08-24T21:40:17Z",
        "viewed" : null,
        "userId" : "599f47b4e738103bfd11ff54",
        "tag" : [ "System.tag.alert" ],
        "id" : "599f47c1e738103bfd12045b",
        "smallIcon" : "/PumpHouse/uploads/iotaa/images/missedAppointment.png",
        "mediumIcon" : "/PumpHouse/uploads/iotaa/images/missedAppointment.png",
        "largeIcon" : "/PumpHouse/uploads/iotaa/images/missedAppointment.png"
      },
      {
        "type" : "message",
        "description" : "Water leak being investigated.",
        "activity" : {
          "verb" : "review",
          "priority" : "NORMAL",
          "published" : "2017-08-24T21:40:17Z",
          "icon" : {
            "url" : "/PumpHouse/uploads/iotaa/images/flood.png"
          },
          "smallIcon" : {
            "url" : "/PumpHouse/uploads/iotaa/images/flood.png"
          },
          "largeIcon" : {
            "url" : "/PumpHouse/uploads/iotaa/images/flood.png"
          },
          "actor" : {
            "objectType" : "person",
            "id" : "599f47b2e738103bfd11fdf6",
            "url" : "http://goto.cnect.to/bettertogether/user/599f47b2e738103bfd11fdf6",
            "pumpUrl" : "roadie://visit/user/599f47b2e738103bfd11fdf6",
            "displayName" : "John Jenkins"
          },
          "storyId" : "investigation",
          "generator" : {
            "objectType" : "service",
            "id" : "iotaaService"
          },
          "object" : {
            "objectType" : "event",
            "displayName" : "Water leak"
          },
          "to" : [ {
            "id" : "599f47b4e738103bfd11ff54",
            "url" : "http://goto.cnect.to/bettertogether/user/599f47b4e738103bfd11ff54",
            "pumpUrl" : "roadie://visit/user/599f47b4e738103bfd11ff54",
            "displayName" : "Diana Dawson",
            "objectType" : "person"
          } ],
          "id" : "599f47c1e738103bfd120459"
        },
        "created" : "2017-08-24T21:40:17Z",
        "viewed" : null,
        "userId" : "599f47b4e738103bfd11ff54",
        "tag" : [ ],
        "id" : "599f47c1e738103bfd12045a",
        "smallIcon" : "/PumpHouse/uploads/iotaa/images/flood.png",
        "mediumIcon" : "/PumpHouse/uploads/iotaa/images/flood.png",
        "largeIcon" : "/PumpHouse/uploads/iotaa/images/flood.png"
      },
      {
        "type" : "message",
        "description" : "Crack in bedroom ceiling visibly larger",
        "activity" : {
          "verb" : "review",
          "priority" : "NORMAL",
          "published" : "2017-08-24T21:40:17Z",
          "icon" : {
            "url" : "/PumpHouse/uploads/iotaa/images/flood.png"
          },
          "smallIcon" : {
            "url" : "/PumpHouse/uploads/iotaa/images/flood.png"
          },
          "largeIcon" : {
            "url" : "/PumpHouse/uploads/iotaa/images/flood.png"
          },
          "actor" : {
            "objectType" : "person",
            "id" : "599f47b2e738103bfd11fdf6",
            "url" : "http://goto.cnect.to/bettertogether/user/599f47b2e738103bfd11fdf6",
            "pumpUrl" : "roadie://visit/user/599f47b2e738103bfd11fdf6",
            "displayName" : "John Jenkins"
          },
          "storyId" : "investigation",
          "generator" : {
            "objectType" : "service",
            "id" : "iotaaService"
          },
          "object" : {
            "objectType" : "event",
            "displayName" : "Water leak"
          },
          "to" : [ {
            "id" : "599f47b4e738103bfd11ff54",
            "url" : "http://goto.cnect.to/bettertogether/user/599f47b4e738103bfd11ff54",
            "pumpUrl" : "roadie://visit/user/599f47b4e738103bfd11ff54",
            "displayName" : "Diana Dawson",
            "objectType" : "person"
          } ],
          "id" : "599f47c1e738103bfd120459"
        },
        "created" : "2017-08-24T21:40:17Z",
        "viewed" : null,
        "userId" : "599f47b4e738103bfd11ff54",
        "tag" : [ ],
        "id" : "599f47c1e738103bfd12045a",
        "smallIcon" : "/PumpHouse/uploads/iotaa/images/flood.png",
        "mediumIcon" : "/PumpHouse/uploads/iotaa/images/flood.png",
        "largeIcon" : "/PumpHouse/uploads/iotaa/images/flood.png"
      }
     ],
      "summary" : {
        "alert" : {
          "size" : 0,
          "smallIcon" : "/PumpHouse/uploads/system/images/notify/alert_28by28.png",
          "mediumIcon" : "/PumpHouse/uploads/system/images/notify/alert_28by28.png",
          "largeIcon" : "/PumpHouse/uploads/system/images/notify/alert_28by28.png"
        },
        "comment" : {
          "size" : 0,
          "smallIcon" : "/PumpHouse/uploads/system/images/notify/journalentry_added_28by28.png",
          "mediumIcon" : "/PumpHouse/uploads/system/images/notify/journalentry_added_28by28.png",
          "largeIcon" : "/PumpHouse/uploads/system/images/notify/journalentry_added_28by28.png"
        },
        "message" : {
          "size" : 2,
          "smallIcon" : "/PumpHouse/uploads/system/images/notify/message_28by28.png",
          "mediumIcon" : "/PumpHouse/uploads/system/images/notify/message_28by28.png",
          "largeIcon" : "/PumpHouse/uploads/system/images/notify/message_28by28.png"
        },
        "other" : {
          "size" : 0,
          "smallIcon" : "/PumpHouse/uploads/system/images/notify/message_28by28.png",
          "mediumIcon" : "/PumpHouse/uploads/system/images/notify/message_28by28.png",
          "largeIcon" : "/PumpHouse/uploads/system/images/notify/message_28by28.png"
        }
      },
      "status" : {
        "code" : "success"
      }
    }
};

 /**************************
 // Calender
 // @JC 18/08/17: mock pulse for the calender pulse response
 **************************/
var mockCalendar = {
  "pulseBody" : {
    "entry" : [ {
     "type" : "appointment",
     "dtStart" : "2017-08-10T10:00:00Z",
     "summary" : "Carer visit",
     "uid" : "598c2593a2647c2329a310e9",
     "attendee" : [ {
       "uid" : "598c2593a2647c2329a310e9",
       "fn" : "John Jenkins",
       "link" : {
         "visit" : "roadie://visit/user/598c2593a2647c2329a310e9"
       }
     }, {
       "uid" : "598c2598a2647c2329a31488",
       "fn" : "Clara Carer",
       "role" : { }
     } ],
     "createdOn" : "2017-08-10T12:00:00Z",
     "createdBy" : "598c2598a2647c2329a31488",
     "value" : {
       "ref" : "1",
       "update" : "We went to the library today. John was very chatty and is looking forward to your visit this weekend."
     },
     "completedOn" : "",
     "ref" : "1",
     "dtEnd" : "2017-08-10T11:00:00Z",
     "localtime" : {
       "dtStart" : "2017-08-10T10:00:00Z",
       "dtEnd" : "2017-08-10T11:00:00+0000",
       "tz" : "UTC"
     },
     "subType" : "carerVisit",
     "id" : "598c25a1a2647c2329a31911",
     // @JC 23/08/17: Artifically added the below in order to
     // display ifomration for the Johns schedule card
     "nurseAppointment" : {
       "appointmentInfo" : "District Nurse (blood pressure check)",
       "appointmentTime" : "2017-08-10T18:00:00+0100"
     }
   }
  ] }
};

// @JC: 18/08/17: mock pulse for the actions response
var mockActions = {
  "action" : [ {
    "userIds" : [ "598c2598a2647c2329a31488" ],
    "ccIds" : [ "598c2593a2647c2329a310e9" ],
    "createdBy" : "598c2593a2647c2329a310e9",
    "createdOn" : "2017-08-10T09:21:37Z",
    "type" : "APPFLOW",
    "closeType" : "ALL",
    "closedOn" : "",
    "completedBy" : [ ],
    "source" : {
      "type" : "DIRECT",
      "details" : { }
    },
    "label" : "Clean kitchen",
    "description" : "John's Kitchen needs to be cleaned",
    "status" : "pending",
    "parent" : { },
    "forwarding" : [ ],
    "dueBy" : "2017-08-11T09:21:37Z",
    "dueTimeScaleInSecs" : -1,
    "appFlowName" : "system.action.centre.receive.manual",
    "context" : {
      "senderId" : "598c2593a2647c2329a310e9",
      "description" : "Clean kitchen"
    },
    "id" : "598c25a1a2647c2329a31915"
  },
  {
    "userIds" : [ "598c2598a2647c2329a31488" ],
    "ccIds" : [ "598c2593a2647c2329a310e9" ],
    "createdBy" : "598c2593a2647c2329a310e9",
    "createdOn" : "2017-08-10T09:21:37Z",
    "type" : "APPFLOW",
    "closeType" : "ALL",
    "closedOn" : "",
    "completedBy" : [ ],
    "source" : {
      "type" : "DIRECT",
      "details" : { }
    },
    "label" : "Enter Julian into Community art competition",
    "description" : "Julian must be in the competition",
    "status" : "pending",
    "parent" : { },
    "forwarding" : [ ],
    "dueBy" : "2017-08-11T09:21:37Z",
    "dueTimeScaleInSecs" : -1,
    "appFlowName" : "system.action.centre.receive.manual",
    "context" : {
      "senderId" : "598c2593a2647c2329a310e9",
      "description" : "Enter Julian into Community art competition"
    },
    "id" : "598c25a1a2647c2329a31915"
  }
] // END pulse
};
