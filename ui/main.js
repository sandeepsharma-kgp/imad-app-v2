//counter code
var button = document.getElementById('counter');

button.onclick = function() {

//create a request object
var request = new XMLHttpRequest();


//capture the response and store it in a variable
request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //Take some action
      if(request.status === 200){
         var counter = request.responseText;
         var span = document.getElementById('count');
         span.innerHTML = counter.toString();

      }

    }

       //Not done
};

//make request
request.open('GET', 'http://sandeepsharma-kgp.imad.hasura-app.io/counter',true);
request.send(null);
};

//Submit Name
var nameInput=document.getElementById('name');
var names=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //make a request to the server and send the name
    //Capture a list of name and render it is a list
    var names=['name1','name2','name3','name4'];
    var list='';
    for (var i=0;i<name.length;i++){
        list+='<li>'+name+'</li>';
    }
    var ul=document.getElemenentById('namelist');
    ul.innerHTML=list;
};