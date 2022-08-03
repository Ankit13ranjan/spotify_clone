let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterplay');
let gif = document.getElementById('gif');

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        audioElement.classList.remove('fa-play-circle');
        audioElement.classList.add('fa-pause-circle');
        gif.style.opacity=0.5;
    }
    else
    {
        audioElement.pause();
        audioElement.classList.remove('fa-pause-circle');
        audioElement.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
});