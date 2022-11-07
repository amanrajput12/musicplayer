const play = document.getElementById("play");
const previous = document.getElementById("backward");
const next = document.getElementById("forward");
const music = document.querySelector(".audio");
const img = document.getElementById("img");
const title = document.querySelector(".title");
const artist = document.querySelector(".artist");

let isPlaying = true;
const songs = [
  {
    title: "/We Rollin",
    artist: "J Shubh",
    name: "We Rollin (Official Video) - Shubh _ Rubbal GTR(MP3_320K)",
  },
  {
    title: "Firecracker",
    artist: " Vishal Dadlani, Shekhar Ravjiani",
    name: "Firecracker _ Jayeshbhai Jordaar _ Ranveer Singh _ Vishal _ Sheykhar _ New Song _ Laal Rangi Chola(MP3_320K)",
  },
  {
    title: "Shoot Da Order",
    artist: "Jass Manak",
    name: "Shoot Da Order _ Jass Manak (Full Song) Jagpal Sandhu _ Jayy Randhawa _ Punjabi Songs _ Geet(MP3_320K)",
  },
  {
    title: "Kehndi Hundi Si",
    artist: " AP Dhillon",
    name: "Kehndi Hundi Si Chan Tak Raah Bana De (Full Song) AP Dhillon I Gurinder Gill I Shinda Kahlon(MP3_320K)",
  },
];
play.addEventListener("click", () => {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

const playMusic = () => {
  isPlaying = true;

  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

// for pause
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

const loadSongs = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "music/" + songs.name + ".mp3" ;
};
songIndex = 0;
const nextsong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
};
const prevsong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSongs(songs[songIndex]);
  playMusic();
};

// loadSongs(songs[3])
next.addEventListener("click", nextsong);
previous.addEventListener("click", prevsong);
// volume
var volumeBar = document.getElementsByTagName("input")[0];
volumeBar.addEventListener()