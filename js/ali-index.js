// 不能使用本地相对路径，需要修改
var liveurl="http://localhost:5000/sample.flv";
var player = new Aliplayer({
  id: "J_prismPlayer", // 容器id
  source: liveurl,//直播流url
  isLive:true,//设置为true时为直播状态
  width: "640px",
  height: "480px"
},function(player){
  console.log('播放器创建了');
});
