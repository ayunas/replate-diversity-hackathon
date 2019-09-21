// pls work mr. program

fetch('http://1e14c6f0.ngrok.io/restaurants').then(function(response) {
  return response.json();
}).then(function(json) {

  onInit(json)

}).catch(function(err) {
  console.log(err.message);
});



function onInit(json)
{

  url = "#"
  for (var i = 0; i < json.length; i++)
  {
    document.getElementById('res-list').innerHTML += '<li> <a id="res" href="' + url + '">' + json[i].restaurant_name + "</a> </li>";
  }
}
