console.log("welcome to Spotify");
// Initialize of variable
let songIndex = 0;
let coverIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = document.getElementsByClassName('songItemPlay');
let coverImg = document.getElementById('coverImg');

let songs = [
    { songName: "Bhula Denge", filePath: "Songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Frozen", filePath: "Songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Humko Deewana", filePath: "Songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "I Am Moana", filePath: "Songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Mera Jahan", filePath: "Songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Tera Ghata", filePath: "Songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Traffic Lights", filePath: "Songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Tu Hi Haqeeqat", filePath: "Songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Tum Mile Tum Mile Original Motion Picturetrack", filePath: "Songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Tum sason mein", filePath: "Songs/11.mp3", coverPath: "covers/10.jpg" },
    { songName: "Tune Mere Jana - Gajendra Verma 320Kbps", filePath: "Songs/10.mp3", coverPath: "covers/11.jpg" },
]
// let songs = [
//     { songName: "Bhula Denge", filePath: "Songs/1.mp3", coverPath: "covers/1cover.jpg" },
//     { songName: "Frozen", filePath: "Songs/2.mp3", coverPath: "covers/c-d-x-PDX_a_82obo-unsplash.jpg" },
//     { songName: "Humko Deewana", filePath: "Songs/3.mp3", coverPath: "covers/daniel-schludi-mbGxz7pt0jM-unsplash.jpg" },
//     { songName: "I Am Moana", filePath: "Songs/4.mp3", coverPath: "covers/ebuen-clemente-jr-H5Iw3Xz0vxM-unsplash.jpg" },
//     { songName: "Mera Jahan", filePath: "Songs/5.mp3", coverPath: "covers/eric-nopanen-8e0EHPUx3Mo-unsplash.jpg" },
//     { songName: "Tera Ghata", filePath: "Songs/6.mp3", coverPath: "covers/erik-mclean-9y1cTVKe1IY-unsplash.jpg" },
//     { songName: "Traffic Lights", filePath: "Songs/7.mp3", coverPath: "covers/freestocks-Fx5rrxSaUtI-unsplash.jpg" },
//     { songName: "Tu Hi Haqeeqat", filePath: "Songs/8.mp3", coverPath: "covers/ilyuza-mingazova-6UhgG8kpg6U-unsplash.jpg" },
//     { songName: "Tum Mile Tum Mile Original Motion Picturetrack", filePath: "Songs/9.mp3", coverPath: "covers/juja-han-HU-uL54pfQI-unsplash.jpg" },
//     { songName: "Tune Mere Jana - Gajendra Verma 320Kbps", filePath: "Songs/10.mp3", coverPath: "covers/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg" },
// ]

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to Event
audioElement.addEventListener("timeupdate", () => {
    console.log('timeupdate');
    // Update Seeker
    Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = Progress;
})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration) / 100);
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        // Array.from(coverImg).forEach((e) => {
        e.target.src = songs[coverIndex].coverPath;
        // });
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
