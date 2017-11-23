export default function callAPI(keyword, callback) {
  fetch(`https://api.500px.com/v1/photos/search?term=${keyword}&page=1&rpp=30&image_size=400&sort=highest_rating&consumer_key=WvMrGVVqeSktRC1dfnXY0FRLQaCuyC7idjDwG8Hg`)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    callback(data);
  }).catch(function(err) {
    console.log('Error ', err);
  });
}
