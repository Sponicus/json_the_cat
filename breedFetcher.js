const request = require('request');
const prompt = process.argv.slice(2)[0];
request(`https://api.thecatapi.com/v1/breeds/search?q=${prompt}`, (error, response, body) => {
  if (error) {
    console.log('Oh no! An error has occurred!',error);
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`Failed to find ${prompt}`);
  }
});
