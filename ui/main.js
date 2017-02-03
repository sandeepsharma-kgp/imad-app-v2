//Counter code
//console.log('Loaded');
//
window.onload = function(){ 
    // your code 

var button =document.getElementById("counter");
var counter=0;
//console.log('Clicked');
button.onclick = function(){
    //Make a request to the counter endpoint
    var request=new XMLHttpRequest();
    
    
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status === 200){
                var counter=request.reponseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
            }      
            //Not done yet
        }
    };
    //Make the request
    request.open('GET','http://sandeepsharma-kgp.imad.hasura-app.io/counter',true);
    request.send(null);

};

};