if (flvjs.isSupported()) {
  var videoElement = document.getElementById('videoElement');
  var flvPlayer = flvjs.createPlayer({
    type: 'flv',
    isLive: true,
    // url: './jellyfish-25-mbps-hd-hevc.flv' 
    url: '../sample.flv' 
  });

  flvPlayer.attachMediaElement(videoElement);
  flvPlayer.load();
  flvPlayer.play();
}
