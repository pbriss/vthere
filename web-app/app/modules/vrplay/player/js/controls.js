/* global canvas, fullScreenButton, loopButton, muteButton, playL, playR, playButton, projectionSelect, quat, seekBar, webGL, video, videoSelect, vrHMD, vrSensor */

var reqAnimFrameID = 0;
var projection = 0;
var manualRotation = quat.create(),
    degtorad = Math.PI / 180;  // Degree-to-Radian conversion

(function(global) {
  'use strict';

  var videoObjectURL;

  var controls = {
    manualControls: {
      'a' : {index: 1, sign: 1, active: 0},
      'd' : {index: 1, sign: -1, active: 0},
      'w' : {index: 0, sign: 1, active: 0},
      's' : {index: 0, sign: -1, active: 0},
      'q' : {index: 2, sign: -1, active: 0},
      'e' : {index: 2, sign: 1, active: 0}
    },

    manualRotateRate: new Float32Array([0, 0, 0]),  // Vector, camera-relative

    create: function() {
      playButton.addEventListener('click', function() {
        controls.playPause();

        if (!video.paused)
          controls.fullscreen();
      });

      playL.addEventListener('click', function() {
        controls.playPause();

        if (!video.paused)
          controls.fullscreen();
      });
    },

    enableKeyControls: function() {
      function key(event, sign) {
        var control = controls.manualControls[String.fromCharCode(event.keyCode).toLowerCase()];
        if (!control)
          return;
        if (sign === 1 && control.active || sign === -1 && !control.active)
          return;
        control.active = (sign === 1);
        controls.manualRotateRate[control.index] += sign * control.sign;
      }

      function onkey(event) {
        switch (String.fromCharCode(event.charCode)) {
        case 'f':
          controls.fullscreen();
          break;
        case 'z':
          vrSensor.zeroSensor();
          break;
        case 'p':
          controls.playPause();
          controls.fullscreen();
          break;
        case ' ': //spacebar
          controls.playPause();
          break;
        case 'g':
          controls.fullscreenIgnoreHMD();
          break;
        case 'l':
          controls.toggleLooping();
          break;
        }
      }

      document.addEventListener('keydown', function(event) { key(event, 1); },
              false);
      document.addEventListener('keyup', function(event) { key(event, -1); },
              false);
      window.addEventListener('keypress', onkey, true);
    },

    /**
     * Video Commands
     */
    loaded: function() {
      window.leftLoad.classList.add('hidden');
      if (video.paused) {
        window.leftPlay.classList.remove('hidden');
      }
    },

    play: function() {
      if (video.ended) {
        video.currentTime = 0.1;
      }

      video.play();
      if (!video.paused) { // In case somehow hitting play button doesn't work.
        window.leftPlay.classList.add('hidden');

        window.playButton.className = 'fa fa-pause icon';
        window.playButton.title = 'Pause';

        reqAnimFrameID = requestAnimationFrame(webGL.drawScene);
      }
    },

    pause: function() {
      video.pause();

      window.playButton.className = 'fa fa-play icon';
      window.playButton.title = 'Play';

      window.leftPlay.classList.remove('hidden');
    },

    playPause: function() {
      if (video.paused === true) {
        controls.play();
      } else {
        controls.pause();
      }
    },

    setLooping: function(loop) {
      loop = !!loop;
      if (video.loop !== loop) {
        controls.toggleLooping();
      }
    },

    toggleLooping: function() {
      if (video.loop === true) {
        loopButton.className = 'fa fa-refresh icon';
        loopButton.title = 'Start Looping';
        video.loop = false;
      } else {
        loopButton.className = 'fa fa-chain-broken icon';
        loopButton.title = 'Stop Looping';
        video.loop = true;
      }
    },

    ended: function() {
      controls.pause();
      if (reqAnimFrameID) {
        cancelAnimationFrame(reqAnimFrameID);
        reqAnimFrameID = 0;
      }
    },

    mute: function() {
      if (video.muted) {
        return;
      }
      video.muted = true;
      window.muteButton.className = 'fa fa-volume-off icon';
      window.muteButton.title = 'Unmute';
    },

    unmute: function() {
      if (video && !video.muted) {
        return;
      }
      video.muted = false;
      window.muteButton.className = 'fa fa-volume-up icon';
      window.muteButton.title = 'Mute';
    },

    loadVideo: function(videoFile) {
      controls.pause();
      window.leftPlay.classList.add('hidden');
      window.leftLoad.classList.remove('hidden');

      webGL.gl.clear(webGL.gl.COLOR_BUFFER_BIT);

      if (reqAnimFrameID) {
        cancelAnimationFrame(reqAnimFrameID);
        reqAnimFrameID = 0;
      }

      // Hack to fix rotation for vidcon video for vidcon
      if (videoFile === 'videos/Vidcon.webm' || videoFile === 'videos/Vidcon5.mp4') {
        manualRotation = [0.38175851106643677, -0.7102527618408203, -0.2401944249868393, 0.5404701232910156];
      } else {
        manualRotation = quat.create();
      }

      var oldObjURL = videoObjectURL;
      videoObjectURL = null;

      video.src = videoFile;

      if (videoObjectURL && videoObjectURL !== videoFile) {
        URL.removeObjectURL(oldObjURL);
      }
    },

    fullscreen: function() {
      if (canvas.mozRequestFullScreen) {
        canvas.mozRequestFullScreen({ vrDisplay: vrHMD }); // Firefox
      } else if (canvas.webkitRequestFullscreen) {
        canvas.webkitRequestFullscreen({ vrDisplay: vrHMD }); // Chrome and Safari
      } else if (canvas.requestFullScreen){
        canvas.requestFullscreen();
      }
    },

    fullscreenIgnoreHMD: function() {
      if (canvas.mozRequestFullScreen) {
        canvas.mozRequestFullScreen(); // Firefox
      } else if (canvas.webkitRequestFullscreen) {
        canvas.webkitRequestFullscreen(); // Chrome and Safari
      } else if (canvas.requestFullScreen){
        canvas.requestFullscreen();
      }
    },

    hide: function() {
      if(window.videoControls)
        window.videoControls.classList.add('hidden');
    },

    show: function() {
      if(window.videoControls)
        window.videoControls.classList.remove('hidden');
    }
  };

  global.controls = controls;

})(window);
