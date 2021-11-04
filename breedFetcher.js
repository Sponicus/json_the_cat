const request = require('request');
// const prompt = process.argv.slice(2)[0];
const fetchBreedDescription = function(breedName, callback) { 
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
        // console.log('Oh no! An error has occurred!',error);
      callback('Oh no! An error has occurred!',null) //If we have error, we use the CAllback user provided to pass the error back.
    } else {
      const data = JSON.parse(body);
      const breed = data[0];
      if (breed) {
        // console.log(breed.description);
        callback(null, breed.description)
      } else {
        // console.log(`Failed to find ${breedName}`);
        callback(`Failed to find ${breedName}`, null)
      }
    }
   
  });
  
};

module.exports = {fetchBreedDescription};