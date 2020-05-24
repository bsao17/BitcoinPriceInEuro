let displayRequest = document.getElementById('displayApi');

function callApi(){
  let url = "https://api.github.com/users/bsao17 ";
  let auth = '------------------------------'
  let init = {
    methode: 'GET',
    Authorization: btoa(auth)
  }

  fetch(url, init).then(response => console.log(response)).catch(error => console.log(error));
  let displayResponse = document.createElement('div');
  
}

$('#bouton').on('click', callApi);
