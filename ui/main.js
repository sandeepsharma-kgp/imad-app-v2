//submit username/password to login
var submit=document.getElementById('submit_btn');

submit.onclick=function(){
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.Done){
            if(request.status===200){
                alert('Logged in succesfully');
            } else if(request.status===403){
                    alert('Username/ Password is incorrec');   
            } else if(request.status===500){
                alert('Something went wrong on the server');
            }
            
        }
    };
    
    //Make the request
    
    var usernmae=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://sandeepsharma-kgp.imad.hasura-app.io/login',true);
    request.setRequestheader('Content-Type','application/json');
    request.send(JSON.stringify({username: username,password: password}));
    
};
