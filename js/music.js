const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prew = document.getElementById('prew');
const next = document.getElementById('next');
const myvideo = document.getElementById('myVideo');
const progress=document.getElementById('progress');
let sduration = document.getElementById('duration');
let current_time= document.getElementById('current_time');
const progress_div = document.getElementById('progress_div');
const vertical_nav=document.getElementById('vertical_nav');
const ourlist=document.getElementById('ourlist');

const song1=document.getElementById('song1');
const song2=document.getElementById('song2');
const song3=document.getElementById('song3');
const song4=document.getElementById('song4');
const song5=document.getElementById('song5');
const song6=document.getElementById('song6');
const song7=document.getElementById('song7');
const song8=document.getElementById('song8');
const song9=document.getElementById('song9');
const song10=document.getElementById('song10');

console.log(song1);
console.log(ourlist);
songIndex = 0;
const songs = [{
    artist: "Arijit Singh",
    id: "1",
    name: "Kesariya",
    image: "https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2017/dragon/poster.jpg",
    title: "Kesariya",
},
{
    id: "2",
    name: "Deva Deva",
    title: "Deva Deva",
    artist: "Pritam, Arijit Singh",
    image: "https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2017/dragon/poster.jpg"
},
{
    artist: "Arijit Singh",
    id: "3",
    image: "https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2017/dragon/poster.jpg",
    name: "Dance Ka Bhoot",
    title: "Dance Ka Bhoot"
},
{
    id: "4",
    name: "Rasiya",
    title: "Rasiya",
    artist: "Shreya Ghoshal",
    image: "https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2017/dragon/poster.jpg",

},
{
    id: "5",
    name: "Thumkeshwari",
    title: "Thumkeshwari",
    artist: "Sachin-Jigar",
    image: "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/10/Varun-Dhawan-turns-into-a-werewolf-in-first-ensemble-poster-of-Bhediya.jpg"
},
{
    id: "6",
    name: "Teriya Deedan",
    title: "Teriya Deedan",
    artist: "Parmesh Verma",
    image: "https://i.scdn.co/image/ab67616d0000b273fd79a0560e0ab840cce158a4"
},
{
    id: "7",
    name: "Manike",
    title: "Manike",
    artist: "Yohani, Jubin Nautiyal,",
    image: "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/10/Varun-Dhawan-turns-into-a-werewolf-in-first-ensemble-poster-of-Bhediya.jpg"
},
{
    id: "8",
    name: "Haaniya Ve",
    title: "Haaniya Ve",
    artist: "Jubin Nautiyal,",
    image: "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/10/Varun-Dhawan-turns-into-a-werewolf-in-first-ensemble-poster-of-Bhediya.jpg"
},
{
    id: "9",
    name: "Dil De Diya",
    title: "Dil De Diya",
    artist: "Rochak Kohlhi",
    image: "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/10/Varun-Dhawan-turns-into-a-werewolf-in-first-ensemble-poster-of-Bhediya.jpg"
},
{
    id: "10",
    name: "Raataan Lambiyan",
    title: "Raataan Lambiyan",
    artist: "Asees Kaur Jubin Nautiyal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAq_oU9csuAlwv2i5B3dp4M3vcIR_BkA8NEg&usqp=CAU"
},
{
    id: "11",
    name: "Jai Shree Ram",
    title: "Jai Shree Ram",
    artist: "Vikram Montrose",
    image: "https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2021/ram-setu/ram-setu-poster-4.jpg"
},
{
    id: "12",
    name: "Maarkhayegaa",
    title: "Maarkhayegaa",
    artist: "Farhad Bhiwandiwala",
    image: "https://www.bollywoodhungama.com/wp-content/uploads/2022/01/Akshay-Kumar-starrer-Bachchan-Pandey-to-release-on-March-18-2022-new-posters-unveiled.jpg"
},
{
    id: "13",
    name: "Meri Jaan Meri Jaan",
    title: "Meri Jaan",
    artist: "B Praak",
    image: "https://www.bollywoodhungama.com/wp-content/uploads/2022/01/Akshay-Kumar-starrer-Bachchan-Pandey-to-release-on-March-18-2022-new-posters-unveiled.jpg"
},
{
    id: "14",
    name: "Saare Bolo Bewafa",
    title: "Saare Bolo Bewafa",
    artist: "B Praak, Jaani",
    image: "https://www.bollywoodhungama.com/wp-content/uploads/2022/01/Akshay-Kumar-starrer-Bachchan-Pandey-to-release-on-March-18-2022-new-posters-unveiled.jpg"
},
{
    id: "15",
    name: "Heer Raanjhana",
    title: "Heer Raanjhana",
    artist: "Arijit Singh",
    image: "https://www.bollywoodhungama.com/wp-content/uploads/2022/01/Akshay-Kumar-starrer-Bachchan-Pandey-to-release-on-March-18-2022-new-posters-unveiled.jpg"
},
{
    id: "16",
    name: "Apna Bana Le",
    title: "Apna Bana Le",
    artist: "Arijit Singh",
    image: "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/10/Varun-Dhawan-turns-into-a-werewolf-in-first-ensemble-poster-of-Bhediya.jpg"
},
{
    id: "17",
    name: "Ranjha",
    title: "Ranjha",
    artist: "Jasleen Royal, B Praak",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAq_oU9csuAlwv2i5B3dp4M3vcIR_BkA8NEg&usqp=CAU"
},
{
    id: "18",
    name: "Jaihind Ki Senaa",
    title: "Jaihind Ki Senaa",
    artist: "Vikram Montrose",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAq_oU9csuAlwv2i5B3dp4M3vcIR_BkA8NEg&usqp=CAU"
},
{
    id: "19",
    name: "Mann Bharryaa 2.0",
    title: "Mann Bharryaa 2.0",
    artist: "B Praak",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAq_oU9csuAlwv2i5B3dp4M3vcIR_BkA8NEg&usqp=CAU"
},
{
    id: "20",
    name: "Kabhii Tumhhe",
    title: "Kabhii Tumhhe",
    artist: "Darshan Raval",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAq_oU9csuAlwv2i5B3dp4M3vcIR_BkA8NEg&usqp=CAU"
}

]
let isPlaying = false;
const playMusic = () => {
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('anime');
    myvideo.play();

    isPlaying = true;
}
const pauseMusic = () => {
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('anime');
    myvideo.pause();
    isPlaying = false;
}
play.addEventListener('click', () => {
    if (!isPlaying) {
        playMusic();
    }
    else {
        pauseMusic();
    }
});

// change in data
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    
    music.src = "music/" + songs.name + ".mp3";
    img.src = songs.image;
};

//loadSong(songs[2]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    artist.style.color='grey';
    loadSong(songs[songIndex]);
    playMusic();
}
const prewSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    artist.style.color='grey';
    loadSong(songs[songIndex]);
    playMusic();
}
// progree js 
music.addEventListener('timeupdate',(event)=>{
    //console.log(event);
    const { currentTime , duration} =event.srcElement;
    let progress_time= (currentTime/duration)*100;
    progress.style.width=`${progress_time}%`;
    // music duration update 
    let mytime=Math.floor(duration/60);
    let sec_duration = Math.floor(duration%60);
    if(sec_duration<10){
        sec_duration =`0${sec_duration}`
    }
    if(duration){
        sduration.textContent=mytime+":"+sec_duration;
    }
    let ctime=Math.floor(currentTime/60);
    let sec_time = Math.floor(currentTime%60);
    if(sec_time<10){
        sec_time =`0${sec_time}`
    }
    if(currentTime){
        current_time.textContent=ctime+":"+sec_time;
    }  
});

// progress on click 
progress_div.addEventListener('click',(event)=>{
    const {duration} =music;
    let move_progress =(event.offsetX / event.srcElement.clientWidth)*duration;

    music.currentTime= move_progress;
})
const showList=()=>{
    if(vertical_nav.style.display=='none'){
        vertical_nav.style.display="block";
    }
    else{
        vertical_nav.style.display="none";
    }
}
const plays1=()=>{
   title.textContent=song1.textContent;
   artist.style.color='white';
    music.src = "music/" + `${song1.textContent}` + ".mp3";
    img.src ="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-rap-songs-1583527287.png?crop=0.5xw:1xh;center,top&resize=480:*";
    songIndex = 0;
    showList();
    playMusic();
}
const plays2=()=>{
   title.textContent=song2.textContent;
   artist.style.color='white';
    music.src = "music/" + `${song2.textContent}` + ".mp3";
    songIndex = 0;
    showList();
    playMusic();
}
const plays3=()=>{
   title.textContent=song3.textContent;
   artist.style.color='white';
    music.src = "music/" + `${song3.textContent}` + ".mp3";
    songIndex = 0;
    showList();
    playMusic();
}
const plays4=()=>{
   title.textContent=song4.textContent;
   artist.style.color='white';
    music.src = "music/" + `${song4.textContent}` + ".mp3";
    songIndex = 0;
    showList();
    playMusic();
}
const plays5=()=>{
   title.textContent=song5.textContent;
   artist.style.color='white';
    music.src = "music/" + `${song5.textContent}` + ".mp3";
    songIndex = 0;
    showList();
    playMusic();
}
const plays6=()=>{
   title.textContent=song6.textContent;
   artist.style.color='white';
    music.src = "music/" + `${song6.textContent}` + ".mp3";
    songIndex = 0;
    showList();
    playMusic();
}
const plays7=()=>{
   title.textContent=song7.textContent;
   artist.style.color='white';
    music.src = "music/" + `${song7.textContent}` + ".mp3";
    songIndex = 0;
    showList();
    playMusic();
}
const plays8=()=>{
   title.textContent=song8.textContent;
   artist.style.color='white';
    music.src = "music/" + `${song8.textContent}` + ".mp3";
    songIndex = 0;
    showList();
    playMusic();
}
const plays9=()=>{
   title.textContent=song9.textContent;
   artist.style.color='white';
    music.src = "music/" + `${song9.textContent}` + ".mp3";
    img.src ="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-rap-songs-1583527287.png?crop=0.5xw:1xh;center,top&resize=480:*";
    songIndex = 0;
    showList();
    playMusic();
}
const plays10=()=>{
   title.textContent=song10.textContent;
   artist.style.color='white';
    music.src = "music/" + `${song10.textContent}` + ".mp3";
    img.src ="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-rap-songs-1583527287.png?crop=0.5xw:1xh;center,top&resize=480:*";
    songIndex = 0;
    showList();
    playMusic();
}

song1.addEventListener('click',plays1);
song2.addEventListener('click',plays2);
song3.addEventListener('click',plays3);
song4.addEventListener('click',plays4);
song5.addEventListener('click',plays5);
song6.addEventListener('click',plays6);
song7.addEventListener('click',plays7);
song8.addEventListener('click',plays8);
song9.addEventListener('click',plays9);
song10.addEventListener('click',plays10);


ourlist.addEventListener('click', showList);

music.addEventListener('ended',nextSong);

next.addEventListener('click', nextSong);

prew.addEventListener('click', prewSong);