var config = {};
config.streamingPort = 8088;

var cameraoneSocket = null;
var mediaSocket = null;
var player = null;
var myState = 0;    // -1: error; 0: idle; 1: wainting; 2: palying
   
var streamer = {};
streamer.onOpen = function() {

};
streamer.onMessage = function(evt) {
    if ( myState != 2) {
        myState = 2;
        $("#spanInfo").html("Playing...");
    }
    var blob = evt.data;
    if ( blob.slice !== undefined) {
        var media = new TeaMedia(blob, function() {
            player.playMedia(media);
        }.bind(this) );
    }
};

streamer.onClose = function() {
    alert("Mobile is disconnected!");
    $("#btnPlay").prop('disabled', true);
    $("#spanInfo").html("Please relaod...");
};

var connect = function() {
    var myHost = window.location.hostname;
    var wsURL = "ws://" + window.location.hostname + ":" + config.streamingPort;
    mediaSocket = new WebSocket("ws://localhost:9004");
    player = new Player(document.getElementById("cameraoneRaw"), 8000);
    
    mediaSocket.onopen = streamer.onOpen;
    mediaSocket.onmessage = streamer.onMessage;
    mediaSocket.onclose = streamer.onClose;

};

// like main function in C
$(document).ready(function() {
connect();
});
