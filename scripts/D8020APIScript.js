const button = document.getElementById('fetch-button');
const output = document.getElementById('output');

button.addEventListener('click', async () => {

  output.innerHTML = 'Loading...';

  const response = await fetch(
    'https://proxy.cors.dev/https://store.steampowered.com/api/appdetails?appids=2255370'
  );

  const data = await response.json();

  const game = data[2255370].data;
  console.log(JSON.stringify(data, null, 2));
  const gallery = document.getElementById('gallery');

  let screenshotsHTML = '';

  game.screenshots.forEach(screenshot => {
    screenshotsHTML += `
      <a href="${screenshot.path_full}">
      <img src="${screenshot.path_thumbnail}" 
      alt="The Devil in Me screenshot">
      </a>
    `;
  });

  gallery.innerHTML = screenshotsHTML;

  output.innerHTML = `
        <h1>${game.name}</h1>
        <img src="${game.header_image}" alt="${game.name}">
        <p>${game.short_description}</p>
        <p>Developer: ${game.developers[0]}</p>
    `;
});