

var btnPlayPause = document.getElementById('btnPlayPause');
var songInfo = document.getElementById('songInfo');
var disc = document.getElementById('disc');
var musicPlayer = document.getElementById('musicPlayer');
var watched = document.getElementById('watched');
btnPlayPause.addEventListener('click', function (e) {
    musicPlayer.addEventListener('timeupdate', function () {
        var watchedPosition = musicPlayer.currentTime / musicPlayer.duration;
        watched.style.width = watchedPosition * 100 + "%";
    })
    musicPlayer.controls = false;
    if (e.target.children[0].classList[1] == 'fa-play') {
        musicPlayer.play();
        e.target.children[0].classList.remove('fa-play');
        e.target.children[0].classList.add('fa-pause');
    }
    else {
        musicPlayer.pause();
        e.target.children[0].classList.remove('fa-pause');
        e.target.children[0].classList.add('fa-play');
    }
    disc.classList.toggle('spin-animation');
    songInfo.classList.toggle('show')
})