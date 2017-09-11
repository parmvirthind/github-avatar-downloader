var request = require('request');

console.log("Welcome to the GitHub Avatar Downloader!");

var GITHUB_USER = "parmvirthind";
var GITHUB_TOKEN = "b6b728add7fbdd2f10aa1e5fe451507ac94b8718";

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  console.log(requestURL);
}




getRepoContributors('jquery', 'jquery', function(err, result) {
  console.log('Errors:', err);
  console.log('Result:', result);
});