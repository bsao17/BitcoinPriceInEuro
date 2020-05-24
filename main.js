let displayRequest = document.getElementById('displayApi');



function hello(){
  let doc = document.createElement('div');
  doc.innerHTML = '<a href="https://jquery.com/">jquery applicarion</a>'
  displayRequest.appendChild(doc)

}

$('#bouton').on('click', hello);
