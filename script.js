let songIndex = 0;
let audioElement = new Audio("song/1.mp3.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songInfoName = document.getElementById('songInfoName');
let songs=[
    {songName: "Run", filePath:"song/1.mp3.mp3", coverPath:"cover/1.jpg.jpg"},
    {songName: "Let me down slowly", filePath:"song/2.mp3.mp3", coverPath:"cover/2.jpg.jpg"},
    {songName: "Pink Venom", filePath:"song/3.mp3.mp3", coverPath:"cover/3.jpg.jpg"},
    {songName: "Living hell", filePath:"song/4.mp3.mp3", coverPath:"cover/4.jpg.jpg"},
    {songName: "Dreamers", filePath:"song/5.mp3.mp3", coverPath:"cover/5.jpg.jpg"},
    {songName: "Believer", filePath:"song/6.mp3.mp3", coverPath:"cover/6.jpg.jpg"},
    {songName: "Singularity", filePath:"song/7.mp3.mp3", coverPath:"cover/7.jpg.jpg"},
    {songName: "Winter bear", filePath:"song/8.mp3.mp3", coverPath:"cover/8.jpg.jpg"}
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-regular fa-circle-play");
        masterPlay.classList.add("fa-regular fa-circle-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-regular fa-circle-pause");
        masterPlay.classList.add("fa-regular fa-circle-play");
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.target.classList.remove("fa-regular fa-circle-pause");
        element.target.classList.add("fa-regular fa-circle-play");
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-regular fa-circle-play");e.target.classList.add("fa-regular fa-circle-pause");
        audioElement.src = `song/${songIndex+1}.mp3`;
        songInfoName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-regular fa-circle-play");masterPlay.classList.add("fa-regular fa-circle-pause");
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    songInfoName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-regular fa-circle-play");masterPlay.classList.add("fa-regular fa-circle-pause");
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=9){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    songInfoName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1
    masterPlay.classList.remove("fa-regular fa-circle-play");masterPlay.classList.add("fa-regular fa-circle-pause");
})

