// my_link = "https://myawsbucket-forcloudresumechallenge.s3.amazonaws.com/index.html"
my_link = "*"


  ips = fetch("https://ipinfo.io/json")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {

    fetch("https://uddkyyt448.execute-api.us-east-1.amazonaws.com/Prod/write?ip="+myJson.ip, {
    headers: {
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": my_link//"*"
    }
  })
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });

  response = fetch("https://uddkyyt448.execute-api.us-east-1.amazonaws.com/Prod/read", {
    headers: {
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": my_link//"*"
    }
  })
    .then(function (response) {
      d = response.json();
      return d//console.log(d)
    })
    .then(function (myJson) {
      var text = document.getElementsByClassName("counter")
      text[0].textContent = "There have been " + myJson["UserCount"] + " users to this site!"
      return myJson["UserCount"]
    })