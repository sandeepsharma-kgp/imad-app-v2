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


//make request
request.open('GET', 'http://sandeepsharma-kgp.imad.hasura-app.io/counter',true);
request.send(null);

};