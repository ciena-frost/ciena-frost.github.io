var requestify = require('requestify');

requestify.get('https://api.github.com/orgs/ciena-frost/repos').then(function(response) {
    // Get the response body
    var body = response.getBody();
    body.forEach(function(repo){
      console.log(repo.name);
      console.log("Last Push: " + repo.pushed_at);
      console.log("Clone URL: ")
    });
});
