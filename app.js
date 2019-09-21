/*TODO:
- Links for each title to jsonception

*/

var data;

// JSON 1 HERE
fetch('https://ghibliapi.herokuapp.com/films').then(function(response)
{
  return response.json();
})
  .then(function(json)
{
  onInit(json)
})
  .catch(function(err)
{
  console.log(err.message);
});


function onInit(json)
{


  for (var i = 0; i < json.length; i++)
  {
    document.getElementById('res-list').innerHTML += '<li> <a id="res"' + url + '>' + json[i].title + "</a> </li>";
  }
}



// JSON 2
/*fetch('https://ghibliapi.herokuapp.com/films').then(function(response)
{
  return response.json();
})
  .then(function(json)
{
  // another json my dude

})
  .catch(function(err)
{
  console.log(err.message);
});
*/
