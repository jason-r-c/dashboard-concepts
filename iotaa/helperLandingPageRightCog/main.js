the.App.onReady(function () {

  var mock = {
    "pulseHeader" : {
      "mep" : "inout",
      "pulseType" : "document",
      "pulseClass" : "pumpCo.user.notificationListUnviewed.response",
      "endpointId" : "66A6196D-1FEE-4AED-9816-E76FFB803566",
      "referenceId" : "DB6570D3-BA02-4BB5-B5FE-96080436E548",
      "referer" : "http://dev.cnect.to/iotaa?socket=false",
      "pulseId" : "9178f156-f5fd-4a5c-8735-f95fc53206f4",
      "timestamp" : "2017-07-28T10:09:13.330",
      "requestingComponentId" : "597ae922a2647c76c14d91a2",
      "instanceRoutingSlip" : [ ]
    },
    "pulseBody" : {
      "notifications" : [ {
        "type" : "message",
        "description" : "Admin Iotaa sent you a message",
        "activity" : {
          "verb" : "send",
          "priority" : "HIGH",
          "published" : "2017-07-28T10:01:17Z",
          "smallIcon" : {
            "url" : "/PumpHouse/uploads/system/images/notify/message_28by28.png"
          },
          "icon" : {
            "url" : "/PumpHouse/uploads/system/images/notify/message_28by28.png"
          },
          "largeIcon" : {
            "url" : "/PumpHouse/uploads/system/images/notify/message_28by28.png"
          },
          "actor" : {
            "objectType" : "person",
            "id" : "0036ebcba33ed14f00000001",
            "url" : "http://goto.cnect.to/bettertogether/user/0036ebcba33ed14f00000001",
            "pumpUrl" : "roadie://visit/user/0036ebcba33ed14f00000001",
            "displayName" : "Admin Iotaa"
          },
          "storyId" : "sentAMessage",
          "generator" : {
            "objectType" : "service",
            "id" : "userConvService"
          },
          "object" : {
            "objectType" : "message",
            "author" : {
              "id" : "0036ebcba33ed14f00000001",
              "url" : "http://goto.cnect.to/bettertogether/user/0036ebcba33ed14f00000001",
              "pumpUrl" : "roadie://visit/user/0036ebcba33ed14f00000001",
              "displayName" : "Admin Iotaa",
              "objectType" : "person"
            },
            "id" : "597b0b6da2647c76c14d9663",
            "i18nName" : {
              "key" : "pumpcore.userMessageService.message",
              "params" : [ ]
            },
            "softLink" : "appSlot://System.convApp/conversationCog",
            "softParams" : {
              "cid" : "597b0b6da2647c76c14d9661",
              "mid" : "597b0b6da2647c76c14d9663"
            },
            "url" : "http://goto.cnect.to/bettertogether?action=visit&owner=597ae921a2647c76c14d911c&place=597ae921a2647c76c14d9127&space=597ae921a2647c76c14d9143&cog=597ae921a2647c76c14d9142&cid=597b0b6da2647c76c14d9661&mid=597b0b6da2647c76c14d9663",
            "pumpUrl" : "roadie://visit/cog/597ae921a2647c76c14d911c/597ae921a2647c76c14d9127/597ae921a2647c76c14d9143/597ae921a2647c76c14d9142?cid=597b0b6da2647c76c14d9661&mid=597b0b6da2647c76c14d9663"
          },
          "to" : [ {
            "id" : "597ae921a2647c76c14d911c",
            "url" : "http://goto.cnect.to/bettertogether/user/597ae921a2647c76c14d911c",
            "pumpUrl" : "roadie://visit/user/597ae921a2647c76c14d911c",
            "displayName" : "Alex Adams",
            "objectType" : "person"
          } ],
          "target" : {
            "objectType" : "person",
            "id" : "597ae921a2647c76c14d911c",
            "url" : "http://goto.cnect.to/bettertogether/user/597ae921a2647c76c14d911c",
            "pumpUrl" : "roadie://visit/user/597ae921a2647c76c14d911c",
            "displayName" : "Alex Adams"
          },
          "id" : "597b0b6da2647c76c14d9665"
        },
        "created" : "2017-07-28T10:01:17Z",
        "viewed" : null,
        "userId" : "597ae921a2647c76c14d911c",
        "tag" : [ ],
        "id" : "597b0b6da2647c76c14d9666",
        "smallIcon" : "/PumpHouse/uploads/system/images/notify/message_28by28.png",
        "mediumIcon" : "/PumpHouse/uploads/system/images/notify/message_28by28.png",
        "largeIcon" : "/PumpHouse/uploads/system/images/notify/message_28by28.png"
      }, {
        "type" : "message",
        "description" : "Admin Iotaa added you to their contact book",
        "activity" : {
          "verb" : "add",
          "priority" : "NORMAL",
          "published" : "2017-07-28T10:01:03Z",
          "actor" : {
            "objectType" : "person",
            "id" : "0036ebcba33ed14f00000001",
            "url" : "http://goto.cnect.to/bettertogether/user/0036ebcba33ed14f00000001",
            "pumpUrl" : "roadie://visit/user/0036ebcba33ed14f00000001",
            "displayName" : "Admin Iotaa"
          },
          "object" : {
            "objectType" : "person",
            "id" : "597ae921a2647c76c14d911c",
            "url" : "http://goto.cnect.to/bettertogether?action=visit&owner=0036ebcba33ed14f00000001&place=8ad7c3dc002268ffa33ed14f&space=1391bbfbd8401166a33ed14f&cog=f022bf07dc3b82f6a33ed14f&id=597ae921a2647c76c14d911c",
            "pumpUrl" : "roadie://visit/cog/0036ebcba33ed14f00000001/8ad7c3dc002268ffa33ed14f/1391bbfbd8401166a33ed14f/f022bf07dc3b82f6a33ed14f?id=597ae921a2647c76c14d911c",
            "displayName" : "Alex Adams"
          },
          "target" : {
            "objectType" : "collection",
            "author" : {
              "id" : "0036ebcba33ed14f00000001",
              "url" : "http://goto.cnect.to/bettertogether/user/0036ebcba33ed14f00000001",
              "pumpUrl" : "roadie://visit/user/0036ebcba33ed14f00000001",
              "displayName" : "Admin Iotaa",
              "objectType" : "person"
            },
            "i18nName" : {
              "key" : "pumphouse.userContactService.contactBook",
              "params" : [ ]
            },
            "url" : "http://goto.cnect.to/bettertogether?action=visit&owner=0036ebcba33ed14f00000001&place=8ad7c3dc002268ffa33ed14f&space=1391bbfbd8401166a33ed14f&cog=f022bf07dc3b82f6a33ed14f",
            "pumpUrl" : "roadie://visit/cog/0036ebcba33ed14f00000001/8ad7c3dc002268ffa33ed14f/1391bbfbd8401166a33ed14f/f022bf07dc3b82f6a33ed14f",
            "id" : "f022bf07dc3b82f6a33ed14f"
          },
          "smallIcon" : {
            "url" : "/PumpHouse/uploads/system/images/notify/generic_add_28by28.png"
          },
          "icon" : {
            "url" : "/PumpHouse/uploads/system/images/notify/generic_add_28by28.png"
          },
          "largeIcon" : {
            "url" : "/PumpHouse/uploads/system/images/notify/generic_add_28by28.png"
          },
          "to" : [ {
            "id" : "0036ebcba33ed14f00000001",
            "url" : "http://goto.cnect.to/bettertogether/user/0036ebcba33ed14f00000001",
            "pumpUrl" : "roadie://visit/user/0036ebcba33ed14f00000001",
            "displayName" : "Admin Iotaa",
            "objectType" : "person"
          }, {
            "id" : "597ae921a2647c76c14d911c",
            "url" : "http://goto.cnect.to/bettertogether?action=visit&owner=0036ebcba33ed14f00000001&place=8ad7c3dc002268ffa33ed14f&space=1391bbfbd8401166a33ed14f&cog=f022bf07dc3b82f6a33ed14f&id=597ae921a2647c76c14d911c",
            "pumpUrl" : "roadie://visit/cog/0036ebcba33ed14f00000001/8ad7c3dc002268ffa33ed14f/1391bbfbd8401166a33ed14f/f022bf07dc3b82f6a33ed14f?id=597ae921a2647c76c14d911c",
            "displayName" : "Alex Adams",
            "objectType" : "person"
          } ],
          "generator" : {
            "objectType" : "service",
            "id" : "userContactService"
          },
          "storyId" : "addContact",
          "id" : "597b0b5fa2647c76c14d965a"
        },
        "created" : "2017-07-28T10:01:03Z",
        "viewed" : null,
        "userId" : "597ae921a2647c76c14d911c",
        "tag" : [ ],
        "id" : "597b0b5fa2647c76c14d965b",
        "smallIcon" : "/PumpHouse/uploads/system/images/notify/generic_add_28by28.png",
        "mediumIcon" : "/PumpHouse/uploads/system/images/notify/generic_add_28by28.png",
        "largeIcon" : "/PumpHouse/uploads/system/images/notify/generic_add_28by28.png"
      } ],
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

    /**
     * Fired when the App has created the basic model structure for you to extend
     * my.model
     */
    my.$on( "postModelCreate", function(){

      // **observable** {JSON} actions
      my.model.actions = phil.observe( [] );

      // **observable** {JSON} events
      my.model.events = phil.observe( [] );

      // **observable** {JSON} device
      my.model.notifications = phil.observe( [] );

      // @JC 17/08/17: display notifications that are not 'high' alerts
      my.model.lowPriorityNotifications = phil.observe( [] );

      // @JC 17/08/17: Navigate to the notificationsSpace
      my.model.openNotifications = function(){
        Navigation.navTo( "System.notificationsSpace", {} );
      };

      // @JC 18/08/17: Navigate to the actionSpace
      my.model.openActions = function(){
        Navigation.navTo( "System.actionSpace", {} );
      };

      // @JC 18/08/17: Navigate to the
      my.model.visitUpdates = function(){
        //Navigation.navTo( "System.actionSpace", {} );
        my.$alert("Visit Updates not implemented for demo");
      };

      // @JC 18/08/17: Navigate to the
      my.model.activityToday = function(){
        //Navigation.navTo( "System.actionSpace", {} );
        my.$alert("Activity Today not implemented for demo");
      };

      // @JC 18/08/17: Navigate to the
      my.model.scheduleToday = function(){
        //Navigation.navTo( "System.actionSpace", {} );
        my.$alert("Schedule Today not implemented for demo");
      };

      my.model.patient = "";

      // @JC 23/08/17:
      console.log( "params.houseImg is:" );
      console.log( params.houseImg );

      my.model.houseImg = params.houseImg;

      console.log( "params.carerImg is:" );
      console.log( params.carerImg );
      my.model.carerImg = params.carerImg;


    } );

    /**
     * Fired Once when the cog is initialised
     */
    my.$on( "postInit", function( params ){
        // Your code here
    } );

    /********************************************
    // Pulse request handlers
    *********************************************/

    /**
     * Fired when the cog is shown
     */
    my.$on( "postShown", function( params ){

      // Fire off request for notificationListUnviewed pulse
      my.$pulse( "pumpCo.user.notificationListUnviewed.request", {} );

      //debugger
      // @JC 18/08/17: Fire off request for action list pulse
      my.$pulse( "pumpCo.user.action.list.request", {} );

      // @JC 18/08/17: Fire off request for calendar list pulse
      //my.$pulse( "pumpCo.user.calendar.list.request", { uid: "599c392ae738103bfd11dccc" } );
      my.$fire("pumpCo.user.calendar.list.response");

      // @JC 22/08/17: attempt to get the forwarding pulses to work
      // dosnt work
      //my.$pulse( "pumpCo.user.forward.request", { uid: "599c392ae738103bfd11dccc" } );

      // @JC 22/08/17: attempt to get the contat list
      my.$pulse( "pumpCo.user.contact.list.request", {} );


    } );

    /**
     * Fired when the cog is hidden
     */
    my.$on( "postHidden", function( params ){} );

    /**
     * ###postCardCreate
     * Cards are loaded Async sych, such that postInit can/will complete BEFORE the CARDS are ready.
     * If you are using Cards, you MUST wait until this completes, before creating any cards.
     */
    my.$on( "postCardCreate", function( data ){} );

    /**
     * ###internal.event.network.status
     * Sent once at startup by the Cog Service, using the last known Network status.
     * Run just before 'postInit' but after 'postModelCreate'
     * Then broadcast to all cogs on network status change.
     * @parmas {json} data { connection:'wifi'|'4g'|'3g'|'2g'|'gprs', state:'online'|'offline' } }
     */
    my.$on( "internal.event.network.status", function( data ){
        if( data.state ){ console.log( "State:" + data.state ); }
        if( data.connection ){ console.log( "Connection:" + data.connection ); }
    } );

    /********************************************
    // Pulse response handlers
    *********************************************/

    // User profile response
    my.$on( "internal.user.profile.response", function( pulse ){
        //debugger
        // pulse = mockPulse

        // Get the VCard information from the pulse.
        my.model.vcard( __get( "pulseBody.vcard", pulse ) );
    } );

    // Device list response
    my.$on( "pumpCo.user.notificationListUnviewed.response", function( pulse ){
        //debugger
        my.model.notifications( [] );

        // @JC 17/08/17: Holds notificaitons other than high alerts
        my.model.lowPriorityNotifications( [] );

        /**
         * BEGIN: Real and mock pulses
         */
        // @JC 25/08/17: The real pulse.
        //var notifications = __get( "pulseBody.notifications", pulse );

        // @JC 25/08/17: Use the dummy pulse at the top of this file (overwrite the pulse response)
        var notifications = __get( "pulseBody.notifications", mockNotifications );
        /**
         * END: Real and mock pulses
         */

        for( var i=0; i<notifications.length; i++ ){
            var priority = __get( "activity.priority", notifications[ i ] );
            if( priority === "HIGH" ){
                my.model.notifications.push( notifications[ i ] );
            }

            // @JC 17/08/17: Stores non high alerts
            if( priority !== "HIGH" ){
                my.model.lowPriorityNotifications.push( notifications[ i ] );
            }
        }
    } );

    // @JC 18/08/17: this response function is never called for some reason
    my.$on( "pumpCo.user.action.list.response", function( pulse ){
      //debugger
        my.model.actions( [] );

        //var actions = __get( "pulseBody.action", pulse );
        //console.log(actions);

        // @JC : the mock pulse
        var actions = __get( "action", mockActions );

        the.formatDate(actions[0].dueBy);

        for( var i=0; i<actions.length; i++ ){
            var status = __get( "status", actions[ i ] );
            if( status !== "closed" ){
                my.model.actions.push( actions[ i ] );
            }
        }
    } );

    // @JC 18/08/17: this response function is never called for some reason
    my.$on( "pumpCo.user.calendar.list.response", function( pulse ){
        //debugger
        my.model.events( [] );

        /**
         * BEGIN: Real and mock pulses
         */
        // @JC 22/08/17: the real pulse
        // var events = __get( "pulseBody.entry", pulse );

        // @JC 22/08/17: the mock pulse
        var events = __get( "pulseBody.entry", mockCalendar );
        /**
         * END: Real and mock pulses
         */

        //console.log( events.nurseAppointment );
        //console.log( events );

        for( var i=0; i<events.length; i++ ){
            if( __get( "subType", events[ i ] ) === "carerVisit" ){
                my.model.events.push( events[ i ] );
            }
        }
    } );


    // @JC 22/08/17: never fired. However the pulse is automatically
    my.$on( "pumpCo.user.contact.list.response", function( pulse ){
        //debugger

        //console.log(pulse.pulseBody.contacts);
        var contacts = pulse.pulseBody.contacts;

        for( var i = 0; i < contacts.length ; i++ ) {
          //console.log( contacts[ i ] );

          if ( contacts[ i ].domain === "patient" ) {
            my.model.patient = contacts[ i ].uid;
            //console.log( my.model.patient );
          }


        }
    });

    // Initialise the Cog
    my.$init();
} );
