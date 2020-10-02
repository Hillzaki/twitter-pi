
//var Twit = require("twit");
//var unirest = require("twit");


// var chave = {
//     'method' :'GET',
//     'contentType': 'application/json; charset=utf-8',
//     'consumer_key' : 'YVgjbURWVh3uMOuSJ466BUWQi',
//     'consumer_secret' : 'sRA7QJeaBUl8FSmyWQwo6oISobuwMB2UNLIlrb4V8AMFEOSNxM',
//     'mode' : 'no-cors'
// };
var endPoint = 'https://api.twitter.com/1.1/search/tweets.json'
fetch(endPoint, {
    method: 'POST',
    mode: 'cors', // pode ser cors ou basic(default)
    redirect: 'follow',
    q : '#brasil',
    headers: new Headers({
      'Content-Type': 'application/json; charset=utf-8',
      'consumer_key': 'YVgjbURWVh3uMOuSJ466BUWQi',
      'consumer_secret' : 'sRA7QJeaBUl8FSmyWQwo6oISobuwMB2UNLIlrb4V8AMFEOSNxM'
    })
  }).then(function(response) {
    // tratar a response
    console.log('primeiro then')
    return response.json();
  });
//   .then(function(data){
//     console.log('segundo then')
//     console.log(data);
// })













//var req = unirest("GET", "https://api.twitter.com/1.1/search/tweets.json?q=%40twitterdev");

     //1. GET RECENT TWEETS
    //T.get('search/tweets', { q: '#tesla since:2020-04-15', count: 100 }, function(err, data, response) {
    //   const tweets = data.statuses
    //   // .map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) //CHECK LANGUAGE
    //   .map(tweet => tweet.text)
    //   .filter(tweet => tweet.toLowerCase().includes('elon'));
    //   console.log(tweets);
    // })
// req.query({
// 	"#olamundo": "BillGates"
// });

// req.headers({
//     "consumer_key":    apikey,
//     "consumer_secret": apiSecretKey,
// });


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });