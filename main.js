

let callbackSuccess = function(data){
  console.log("données api", data);
}


$('#bouton').on('click', function(){
  let url = 'https://api.github.com/users/bsao17 ' 
  $.get(url, function(data){
    console.log(data)
    let dataApi = document.createElement('div');
    dataApi.innerHTML = JSON.stringify(data.bio + '<br>' + data.location);
    document.getElementById('displayApi').appendChild(dataApi);
  })
})
  