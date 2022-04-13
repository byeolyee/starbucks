
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    //<div id="player"></div>
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8', //최초 재생할 유튜브영상id
        playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'An6LvWQuj_8'
        },
        events: {
            onReady: function (e) {
                e.target.mute();
            }
        }
    });
}