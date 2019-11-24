the.App.onReady(function () {

    /**
     * Fired when the App has created the basic model structure for you to extend
     * my.model
     */
    my.$on( "postModelCreate", function(){
      my.model.logo = phil.observe( params.basePath + params.imageName );

      // **observable** {JSON} vcard
      my.model.vcard = phil.observe( {} );

      // **observable** {JSON} propfile
      my.model.profile = phil.observe( {} );

      // @JC 17/08/17: Generic handler which calls appropriate handler acording to
      // data.name value.
      function callHandler( data, evt ){
          my[ 'on' + data.name ]( data, evt );
      }

      // @JC 28/07/17: links that are in the sidebar panel
      my.model.actions = phil.observe( [
          // View Care giver tasks
          // { name:'Tasks', label:'Tasks',
          //   fn:function( data, evt ){
          //     console.log( data );
          //     my[ 'on' + data.name ]( data, evt );
          //   }.bind( this )
          // },
          // @JC 17/08/17: call separte function declaration
          { name:'Alerts',   label:'Alerts', fn:callHandler.bind( this ) },
          { name:'Notifications',   label:'Notifications', fn:callHandler.bind( this ) },
          { name:'Actions',   label:'Actions', fn:callHandler.bind( this ) },
          { name:'Updates',   label:'Updates', fn:callHandler.bind( this ) },
          { name:'Activity',   label:'Activity', fn:callHandler.bind( this ) },
          { name:'Schedule',   label:'Schedule', fn:callHandler.bind( this ) },
          { name:'TestPlanner',   label:'** Test Planner **', fn:callHandler.bind( this ) },
      ] );

    } );

    /**
     * Fired Once when the cog is initialised
     */
    my.$on( "postInit", function( params ){
        // Your code here
        //my.$fire( "internal.user.profile.response" );
    } );

    /**
     * Fired when the cog is shown
     */
    my.$on( "postShown", function( params ){

      my.$pulse( "internal.user.profile.request", {} );

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


    /**
     * Event Handlers
     */
     my.$on( "internal.user.profile.response", function( pulse ) {

      // Get the VCard information from the pulse.
      my.model.vcard( __get( "pulseBody.vcard", pulse ) );

      my.model.profile( __get( "pulseBody.profileBody", pulse ) );

      //console.log( "my.model.actions is: ");
      //console.log( my.model.actions() );

     });

     // @JC 27/07/17: Redirect to the tasks space
      //  my.onTasks = function() {
      //    console.log( "TBC: Tasks space" );
      //    Navigation.navTo( "System.actionSpace", {} );
      //  };

     // @JC 17/08/17: Redirect to the Alerts space (same as the Notifications space)
     my.onAlerts = function() {
       Navigation.navTo( "System.notificationsSpace", {} );
     };

     // @JC 17/08/17: Redirect to the Notifications space (same as the Alerts space)
     my.onNotifications = function() {
       Navigation.navTo( "System.notificationsSpace", {} );
     };

     // @JC 17/08/17: Redirect to the Actions space
     my.onActions = function() {
       Navigation.navTo( "System.actionSpace", {} );
     };

     // @JC 17/08/17: not functional. simple toast msg displays.
     my.onUpdates = function() {
       my.$alert("@JC > Updates: i think need to 'pulse as' ");
     };

     // @JC 17/08/17: not functional. simple toast msg displays.
     my.onActivity = function() {
       my.$alert("@JC > Activity: i think need to 'pulse as' ");
     };

     // @JC 17/08/17: not functional. simple toast msg displays.
     my.onSchedule = function() {
       my.$alert("@JC > Schedule: i think need to 'pulse as' ");
     };

     // @JC 17/08/17: not functional. simple toast msg displays.
     my.onTestPlanner = function() {
       my.$alert("@JC > Planner test ");
       Navigation.navTo( "System.PlannerSpace", {} );
     };


    // Initialise the Cog
    my.$init();
} );
