var requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();

function Player (canvas, sampleRate) {
    // vars
    this._canvas = null;
    this._canvasContext = null;
    this._rgba = null;
    this._renderInterval = 5;

    this._playedTime = -1;
    this._lastTime = -1;
    this._videoTime = -1;
    this._lastVideoTime = -1;

    this._avc = null;
    this._videoBufferList = null;

    // call backs
    this.onStreamStarvation = null;

    // public functions
    this._constructor = function() {
        this._canvas = canvas;
        this._canvasContext = this._canvas.getContext("2d");
        this._canvasContext.font = "12px sans-serif";
        this._canvasContext.textAlign = 'right';
        this._canvasContext.fillStyle = 'rgba(0,255,0, 0.9)';
        this._rgba = this._canvasContext.getImageData(0, 0, this._canvas.width, this._canvas.height);
        this._videoBufferList = new Array();

        this._avc = new Avc();

        // setInterval(this._playVideo, this._renderInterval);
        requestAnimFrame(this._playVideo);
    }.bind(this);

    this.playMedia = function(media) {
        if ( this._videoBufferList.length > 150) {
            return;
        }

        console.log("block number:", media.nalBlocks.length);
        for (var i = 0; i < media.nalBlocks.length; i++) {
          this._avc.decode(media.nalBlocks[i].payload, function(firstFrame, timeStamp, buffer) {
              var yuv = new Uint8Array(buffer.length);
              yuv.set(buffer, 0, buffer.length);
              var picture = {
                yuv:yuv,
                // wid:wid,
                // hei:hei,
                timeStamp: timeStamp,
                flag: firstFrame,
              };
              // console.log("pushing--->", this._videoBufferList.length);
              this._videoBufferList.push(picture);
          }.bind(this, i === 0, media.nalBlocks[i].timeStamp));
        }

        delete media;

    }.bind(this);

    // private functions
    this._updateInfo = function(info) {
        this._infoText = info;
        this._canvasContext.fillText(this._infoText, this._canvas.width - 5, 20);
    }.bind(this);

    this._showPicture = function(picture) {
        yuv2ImageData(picture.yuv, this._rgba);
        console.log(this._canvasContext.canvas);
        this._canvasContext.putImageData(this._rgba, 0, 0);
    }.bind(this);

    this._playVideo = function() {
        requestAnimFrame(this._playVideo);
        if ( this._videoBufferList.length > 0) {
            if ( this._videoBufferList[0].flag === true) {
                this._playedTime = this._videoBufferList[0].timeStamp;
                this._lastVideoTime = this._videoBufferList[0].timeStamp;
                this._videoTime = 0;
            } else {
                this._playedTime += (new Date()).getTime() - this._lastTime;
            }

            //console.log(this._playedTime + " vs " + this._videoTime + this._videoBufferList[0].timeStamp );

            if ( this._playedTime >= this._videoTime + this._videoBufferList[0].timeStamp ) {
                // updated video time
                if (  this._videoBufferList[0].timeStamp < this._lastVideoTime ) {
                    this._videoTime += 65535;
                }
                this._lastVideoTime = this._videoBufferList[0].timeStamp;

                //console.log(">>>>> " +  this._videoBufferList[0].timeStamp)
                this._showPicture(this._videoBufferList[0] );
                // delete this._videoBufferList[0];
                this._videoBufferList.shift();
            }
        }
        this._lastTime = (new Date()).getTime();
    }.bind(this);

    // init
    this._constructor();
}
