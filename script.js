let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let gif = document.getElementById('gif');
let myProgressBar = document.getElementById('myProgressBar');
let songIndex = 0;
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [

    {songName:"Salam-e-ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Let me love you", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName:"Aashiq-banaya", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName:"Meherbaniyan", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName:"Saans me tere", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName:"Tumse milke dil", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName:"Badal hai - kishor", filePath: "songs/5.mp3", coverPath: "covers/3.jpg"}

];

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    // element.getElementsByClassName('timeStamp')[0].innerText = songs[i].filePath;
});



//Play-Pause Button inside Bar
const makeCallCurrent = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

//Music Adding 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeCallCurrent();
        gif.style.opacity=1;
        songIndex = parseInt(e.target.id)

        

        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');



    })
})



//Play-Pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=0.5;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
});

//Time Calculation for Progress Bar
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
});



document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9)
    {
        songIndex=0;
    }
    else
    {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});