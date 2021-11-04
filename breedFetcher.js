const request = require('request');
const prompt = process.argv
console.log(prompt);
request(`https://api.thecatapi.com/v1/breeds/search?q=Siberian`, (error, response, body) => {
  // console.log('error:', error); 
  // console.log('statusCode:', response && response.statusCode); 
  // console.log('body:', body);
  const data = JSON.parse(body);
  console.log(data);
  // console.log(typeof data);
});
