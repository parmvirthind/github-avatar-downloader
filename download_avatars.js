var request = require('request');
var fs = require('fs');

console.log("Welcome to the GitHub Avatar Downloader!");

var GITHUB_USER = "parmvirthind";
var GITHUB_TOKEN = "b6b728add7fbdd2f10aa1e5fe451507ac94b8718";


function getRepoContributors(cb) {
  var myArgs = process.argv.slice(2);
  var repoOwner = myArgs[0];
  var repoName = myArgs[1];
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'Avatar Downloader'
    }
  };

  request(options, function (error, response, body) {
    if (error) {
      cb(error);
    } else {
      body = JSON.parse(body);
      cb(undefined, body);
    }
  });

}

function downloadImageByURL(url, filePath) {
  request.get(url)

          .pipe(fs.createWriteStream(filePath))
}


getRepoContributors(function(err, result) {
  if (err) {
    console.log('Errors:', err);
  } else {
    for (var index in result) {
      var contributor = result[index];
      var filePathLogin = "./avatars/" + contributor.login + ".png"
      downloadImageByURL(contributor.avatar_url, filePathLogin);
    }
  }
});



