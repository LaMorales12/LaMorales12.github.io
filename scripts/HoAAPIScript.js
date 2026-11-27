const button = document.getElementById('fetch-button');
const output = document.getElementById('output');

button.addEventListener('click', async () => {

  output.innerHTML = 'Loading...';

  const response = await fetch(
    'https://proxy.cors.dev/https://store.steampowered.com/api/appdetails?appids=1281590'
  );

  const data = await response.json();

  const game = data[1281590].data;
  console.log(JSON.stringify(data, null, 2));
  const gallery = document.getElementById('gallery');
  const movieGallery = document.getElementById('movieGallery');

  let screenshotsHTML = '';
  let moviesHTML = '';

  game.screenshots.forEach(screenshot => {
    screenshotsHTML += `
      <a href="${screenshot.path_full}">
      <img src="${screenshot.path_thumbnail}" 
      alt="House of Ashes screenshot">
      </a>
    `;
  });

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

  gallery.innerHTML = screenshotsHTML;
  movieGallery.innerHTML = moviesHTML;

  output.innerHTML = `
        <h1>${game.name}</h1>
        <img src="${game.header_image}" alt="${game.name}">
        <p>${game.short_description}</p>
        <p>Developer: ${game.developers[0]}</p>
    `;
});