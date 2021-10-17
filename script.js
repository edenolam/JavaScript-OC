// Create your variables here
// ==========================================
let titreSerie = "Squid Game";
let serie1 = document.querySelector("#serie1");
let serie2 = document.querySelector("#serie2");
let serie3 = document.querySelector("#serie3");
let serie4 = document.querySelector("#serie4");

serie1.innerHTML = titreSerie;
serie2.innerHTML = titreSerie;
serie3.innerHTML = titreSerie;
serie4.innerHTML = titreSerie;

let numberOfSeasons = 1;
let numberOfEpisodes = 6;

// ==========================================

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season`

// let totalCDs = 67;
// let totalVinyls = 34;
// let totalMusic = document.querySelector('#testjs');
// totalMusic.innerText = totalCDs + totalVinyls;

////////////////calculate////////////////////////////

const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

const dayInput = document.querySelector('#day-input');
const calculateButton = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

calculateButton.addEventListener('click', () => {
    let days = dayInput.value;
    let calcHours = days * hoursPerDay;
    let calcMinutes = calcHours * minutesPerHour;
    let calcSeconds = calcMinutes * secondsPerMinute;

    hours.innerHTML = `${calcHours} hours`;
    minutes.innerHTML = `${calcMinutes} minutes`;
    seconds.innerHTML = `${calcSeconds} seconds`;
})

///////////////////////////////////////////////////
let episode = {
    title: "le jeux de la mort",
    duration: 45,
    hasBeenWatched: true
}
let episodeTitle = episode.title
let episodeDuration = episode.duration
let episodeHasBeenWatched = episode.hasBeenWatched


document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${episodeHasBeenWatched? 'Already watched' : 'Not yet watched'}`
/////////////////////////////////////////////////////////

class Episode {
    constructor(title, duration, hasBeenWatched) {
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched = hasBeenWatched;
    }
}
let firstEpisode = new Episode("la tete en l'air", 45, true);
let secondEpisode = new Episode("les jambes en l'air", 45, false);
let thirdEpisode = new Episode("sa mere en l'air", 45, true);

document.querySelector('#first-episode-info').innerText = `Episode: ${firstEpisode.title}
Duration: ${firstEpisode.duration} min
${firstEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#second-episode-info').innerText = `Episode: ${secondEpisode.title}
Duration: ${secondEpisode.duration} min
${secondEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#third-episode-info').innerText = `Episode: ${thirdEpisode.title}
Duration: ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

