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
            var element2 = document.getElementById("canvas2");
            var ctx = element.getContext('2d');
            var ctx2 = element2.getContext('2d');

            requestAnimationFrame(function loop() {
              var img = new Image;
              img.onload = function() {
                ctx.drawImage(img,0,0);
              };
              img.src = "http://localhost:9000";

              var img2 = new Image;
              img2.onload = function(){
                ctx2.drawImage(img2,0,0);
              };
              img2.src = "http://localhost:9002";

              requestAnimationFrame(loop);
            }.bind(null));
            // connect("localhost", 9000, element);
            // connect("localhost", 9001, element2);
              // connect("192.168.1.112", element);
              // connect("192.168.1.147", element2);
            // }
    });

});
