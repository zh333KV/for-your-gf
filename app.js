let anniversary = '2024-08-30'; 
let dateVal = Date.parse(anniversary); // Используйте Date.parse
let today = new Date();
let now = today.getTime();
let value = now - dateVal;

if (!isNaN(value)) {
  let day = Math.floor(value / (1000 * 60 * 60 * 24));
  let month = Math.floor(value / (1000 * 60 * 60 * 24 * 30.4375));
  let year = Math.floor(value / (1000 * 60 * 60 * 24 * 365.25));

  document.getElementById('days').textContent = day.toString();
  document.getElementById('months').textContent = month.toString();
  document.getElementById('years').textContent = year.toString();
} else {
  console.error('Invalid date');
}

console.log(value)

let musicPlayer = document.querySelector('.music-container')
let trackInfo = document.querySelector('.track-info')
let trackName = document.querySelector('.trackname')
let trackArtist = document.querySelector('.trackartist')
let trackNav = document.querySelector('.track-nav')

let playPauseBtn = document.querySelector('.playpause-track')
let nextBtn = document.querySelector('.next-track')
let prevBtn = document.querySelector('.prev-track')

let trackIndex = 0
let isPlaying = false
let isHidden = true

let currentTrack = document.createElement('audio')
let soundBars = document.querySelector('.sound-bars')

let soundBarsLottie = bodymovin.loadAnimation({
  container: soundBars,
  renderer: 'svg',
  loop: true,
  autoPLay: false,
  path: 'https://lottie.host/9ec12a7e-e429-453a-9f22-a2af1dcb4dca/2zeuy4rwtP.json',
})

let trackList = [
  {
    name: 'NIGHTS LIKE THIS',
    artist: 'The Kid LAROI',
    path: './music/Nights Like This.mp3',
  },
  {
    name: 'Brooklyn Baby',
    artist: 'Lana Del Rey',
    path: './music/Brooklyn Baby.mp3',
  },
  {
    name: 'Daddy Issues',
    artist: 'The Neighbourhood',
    path: './music/Daddy Issues.mp3',
  },
]

// EVENT LISTENERS
playPauseBtn.addEventListener('click', playPauseTrack)
nextBtn.addEventListener('click', nextTrack)
prevBtn.addEventListener('click', prevTrack)

function loadTrack(trackIndex) {
  currentTrack.src = trackList[trackIndex].path
  trackName.textContent = trackList[trackIndex].name
  trackArtist.textContent = trackList[trackIndex].artist
  currentTrack.addEventListener('ended', nextTrack)
  currentTrack.load()
  currentTrack.volume = 0.05
}

loadTrack(trackIndex)

function playPauseTrack() {
  if (isPlaying == false) {
    playTrack()
  } else {
    pauseTrack()
  }
}

function playTrack() {
  currentTrack.play()
  isPlaying = true
  playPauseBtn.innerHTML = '<img class="w-8" src="icons/pause.svg">'
  soundBarsLottie.play()
}

function pauseTrack() {
  currentTrack.pause()
  isPlaying = false
  playPauseBtn.innerHTML = '<img class="w-8" src="icons/play.svg">'
  soundBarsLottie.stop()
}

function nextTrack() {
  if (trackIndex < trackList.length - 1) {
    trackIndex += 1
    loadTrack(trackIndex)
    playTrack()
  } else {
    trackIndex = 0
    loadTrack(trackIndex)
    playTrack()
  }
}

function prevTrack() {
  if (trackIndex > 0) {
    trackIndex -= 1
    loadTrack(trackIndex)
    playTrack()
  } else {
    trackIndex = trackList.length - 1
    loadTrack(trackIndex)
    playTrack()
  }
}
