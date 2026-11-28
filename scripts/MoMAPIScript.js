const galleryButton = document.getElementById('gallery-button');
const movieGalleryButton = document.getElementById('movieGallery-button');
const charactersButton = document.getElementById('characters-button');
const galleryOutput = document.getElementById('gallery');

async function getGameData() {
  const response = await fetch(
    'https://proxy.cors.dev/https://store.steampowered.com/api/appdetails?appids=939850'
  );

  const data = await response.json();

  return data[939850].data;
}

async function setUp() {
  const game = await getGameData();


  galleryButton.addEventListener('click', async () => {

    galleryOutput.innerHTML = 'Loading...';

    let screenshotsHTML = '';

    game.screenshots.forEach(screenshot => {
      screenshotsHTML += `
        <a href="${screenshot.path_full}">
        <img src="${screenshot.path_thumbnail}" 
        alt="Man of Medan screenshot">
        </a>
      `;
    });

    galleryOutput.innerHTML = screenshotsHTML;
  });


  movieGalleryButton.addEventListener('click', async () => {

    galleryOutput.innerHTML = 'Loading...';

    let moviesHTML = '';

    game.movies.forEach(movie => {
      moviesHTML += `
        <div class="movie">
            <img src="${movie.thumbnail}" alt="${movie.name}">
            <p>${movie.name}</p>
            <a href="${movie.hls_h264}" target="_blank">
              Watch Trailer
            </a>
        </div>
      `;
    });

    galleryOutput.innerHTML = moviesHTML;
  });


  charactersButton.addEventListener('click', () => {

    galleryOutput.innerHTML = 'Loading...';

    let charactersHTML = `
      <div class="character-card1">
        <h3>Alex</h3>
        <img src="characters/alex.webp" alt="Alex image">
        <p>Alex Smith is a main playable protagonist in the horror
        video game The Dark Pictures Anthology&#58; Man of 
        Medan&#46; He is an Ivy League medical student&#44; 
        an experienced recreational diver&#44; the older brother 
        of Brad&#44; and the boyfriend of Julia&#46;</p>
      </div>
      <div class="character-card2">
        <h3>Brad</h3>
        <img src="characters/brad.webp" alt="Brad image">
        <p>Bradley &#34;Brad&#34; Smith is one of the five main 
        playable protagonists in The Dark Pictures Anthology&#58; 
        Man of Medan and the younger brother of Alex&#46; He is 
        an intelligent&#44; polite&#44; and witty character 
        whose survival depends on player choices&#46;</p>
      </div>
      <div class="character-card3">
        <h3>Conrad</h3>
        <img src="characters/conrad.webp" alt="Conrad image">
        <p>Conrad is one of the five main playable protagonists in
        the horror video game The Dark Pictures&#58; Man of 
        Medan&#46; Raised in a wealthy East Coast family&#44; 
        he starts out as a laid&#8208;back&#44; brash&#44; and 
        foolhardy partygoer whose choices can shift him toward 
        heroism or self&#8208;preservation&#46;</p>
      </div>
      <div class="character-card4">
        <h3>Fliss</h3>
        <img src="characters/fliss.webp" alt="Fliss image">
        <p>Félicité &#34;Fliss&#34; DuBois is the French 
        Polynesian boat captain of the Duke of Milan and one of 
        the five main protagonists in the video game The Dark 
        Pictures Anthology&#58; Man of Medan&#46; She guides the 
        diving group before they are kidnapped by pirates and 
        stranded aboard the abandoned freighter SS Ourang Medan&#46;</p>
      </div>
      <div class="character-card5">
        <h3>Julia</h3>
        <img src="characters/julia.webp" alt="Julia image">
        <p>Julia is one of the five main playable protagonists in 
        the survival horror game The Dark Pictures Anthology&#58; 
        Man of Medan&#46; She is an American university 
        student&#44; the younger sister of Conrad&#44; and the 
        girlfriend of Alex&#46;</p>
      </div>
    `;

    galleryOutput.innerHTML = charactersHTML;
  });
}

setUp();