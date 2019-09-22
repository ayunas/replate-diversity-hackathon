/*
*/

fetch('https://e9abe383.ngrok.io/').then(function(response) {
  return response.json();
}).then(function(json) {


  onInit(json)

}).catch(function(err) {
  console.log(err.message);
});



function onInit(json)
{
  if (document.getElementById('res-list') != null){
    url = "app.html" // Might wanna change later
    for (var i = 0; i < json.length; i++)
    {
      document.getElementById('res-list').innerHTML += '<li> <a class="res" href="#' + /*url +*/ '">' + json[i].restaurant_name + "</a> </li>";
    }

  } else
  {
    
  }
}
