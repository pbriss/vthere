var connect = function(myHost, port, element) {
    var wsURL = "ws://" + myHost + ":" + port;
    var mediaSocket = new WebSocket(wsURL);
    var player = new Player(element, 8000);

    mediaSocket.onopen = function() {
      console.log("media socket for", wsURL);
    };
    mediaSocket.onmessage = function(evt) {
      var blob = evt.data;
      if (blob.slice !== undefined) {
        console.log("onmessage", wsURL);
        new TeaMedia(blob, function(media) {
          console.log("playinbg", wsURL);
          player.playMedia(media);
        });
      }
    };
    mediaSocket.onclose = function() {
      alert("Mobile is disconnected!");
      $("#btnPlay").prop('disabled', true);
      $("#spanInfo").html("Please relaod...");
    };

    $("#spanInfo").html("Connected, waiting for media..");
};

// like main function in C
$(document).ready(function() {
    $("#btnPlay").click( function() {
            $("#btnPlay").html("Stop")
            $("#spanInfo").html("Connecting...");
            var element = document.getElementById("canvas1");
            // element.width = 640;
            // element.height = 480;

            var element2 = document.getElementById("canvas2");
            // element2.width = 640;
            // element2.height = 480;
            // if (window.location.hostname.length > 0) {
            //   $.ajax({
            //     url: "/cgi/query",
            //     type: "get",
            //     cache: false,
            //     success: function(ret) {
            //       console.log(ret);
            //       var result = JSON.parse(ret);
            //       if ( result.state === "ok") {
            //         var element = document.getElementById("videoPlayer1");
            //         element.width = result.width;
            //         element.height = result.height;
            //
            //         connect(window.location.hostname, 8088, element);
            //       } else {
            //           alert("Mobile is busy!");
            //           location.reload();
            //       }
            //     },
            //     error: function() {
            //         alert("Mobile is error");
            //         location.reload();
            //       },
            //   });
            // } else {
            connect("localhost", 9000, element);
            // connect("localhost", 9003, element2);
              // connect("192.168.1.112", element);
              // connect("192.168.1.147", element2);
            // }
    });

});
