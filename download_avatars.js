var request = require('request');
var fs = require('fs');

console.log("Welcome to the GitHub Avatar Downloader!");

var GITHUB_USER = "parmvirthind";
var GITHUB_TOKEN = "b6b728add7fbdd2f10aa1e5fe451507ac94b8718";


function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'Avatar Downloader'
    }
  };

  request(options, function (error, response, body) {
    console.log('error:', error);
    console.log('response:', response.statusCode);
    body = JSON.parse(body);
    var urlArray = [];
    for(var cont in body) {
      console.log('body', body[cont]['avatar_url']);
      urlArray.push(body[cont]['avatar_url']);
    }
  });

}

function downloadImageByURL(url) {
  request.get(url)

          .pipe(fs.createWriteStream('./blah.png'))
}

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466");

getRepoContributors('jquery', 'jquery', function(err, result) {
  console.log('Errors:', err);
  console.log('Result:', result);
});