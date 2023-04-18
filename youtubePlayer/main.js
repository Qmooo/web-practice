let player;
let currentPlay = 0;
let answers = "A";

function onYouTubeIframeAPIReady(){
    player = new YT.Player("player",{
        height:"390",
        width:"640",
        videoId:playList[answers][currentPlay],
        playerVars:{
            autoplay:0,
            controls:0,
            start:playTime[answers][currentPlay][0],
            end:playTime[answers][currentPlay][1],
            iv_load_policy:3
        },
        events:{
            onReady:onPlayerReady,
            onStateChange:onPlayerStateChange
        }
    });
    
    $("#submit").on("click",function(){
        answers = $("input").val();
        player.loadVideoById({
            videoId:playList[answers][currentPlay],
            startSeconds:playTime[answers][currentPlay][0],
            endSeconds:playTime[answers][currentPlay][1],
            suggestedQuality:"large"
        });
    });
}

function onPlayerReady(event){
    $("#playButton").on("click",function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}


function onPlayerStateChange(event){
    if(Math.floor(player.getCurrentTime())==playTime[answers][currentPlay][1]){
        if(currentPlay<playList[answers].length-1){
            currentPlay++;
            player.loadVideoById({
                videoId:playList[answers][currentPlay],
                startSeconds:playTime[answers][currentPlay][0],
                endSeconds:playTime[answers][currentPlay][1],
                suggestedQuality:"large"
            });
        }else{
            currentPlay=0;
            player.cueVideoById({
                videoId:playList[answers][currentPlay],
                startSeconds:playTime[answers][currentPlay][0],
                endSeconds:playTime[answers][currentPlay][1],
                suggestedQuality:"large"
            });
            $("h2").text("");
        } 
    }
    if(event.data==1){
        $("h2").text(player.getVideoData().title);
    }
}

