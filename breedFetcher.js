const request = require('request');
const prompt = process.argv.slice(2)[0]
// console.log(prompt);
request(`https://api.thecatapi.com/v1/breeds/search?q=${prompt}`, (error, response, body) => {
  // console.log('error:', error);
  // console.log('statusCode:', response && response.statusCode); 
  // console.log('body:', body);
  if (error) {console.log('Oh no! An error has occurred!',error)}
  const data = JSON.parse(body);
  // console.log(data);
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`Failed to find ${prompt}`);
  }
  // console.log(typeof data);
});
