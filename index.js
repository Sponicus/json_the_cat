const {fetchBreedDescription} = require('./breedFetcher');
const prompt = process.argv.slice(2)[0];

fetchBreedDescription(prompt, (error, desc) => { 
  if (error) {
    console.log('Index - Oh no! An error has occurred!', error);
  } else {
    console.log(desc);
  }
});
