let url = 'https://blockchain.info/ticker';  
let request1 = new XMLHttpRequest(); 
request1.open('GET',url);
request1.responseType = 'json';
request1.send();

request1.onload = ()=>{
  if(request1.readyState === XMLHttpRequest.DONE){
    if(request1.status === 200){
      let responseOk = request1.response;
      console.log('reponse bien reçu', responseOk)
      $('#apiRest').append(responseOk.EUR.last);
    }
    else{
      console.log('Veuillez réessayer ultérieurement !')

    }
  }
}

$('#bouton').on('click', ()=>{
  window.location.reload();
});