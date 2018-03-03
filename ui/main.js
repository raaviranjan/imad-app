console.log('Loaded!');

//submit username/password

var submit=document.getElementById("submit_btn");
submit.onclick= function(){
    
    //create a request oblect
  var request = new XMLHttpRequest();
  
  //capture the responce and store it in a variable
  request.onreadystatechange = function(){
      if(request.readyState == XMLHttpRequest.DONE)
      {
          //take some action
          if(request.status === 200){
              //capture the name and render it as a list
              console.log('user logged in successfully');
              alert('Logged in successfully');
          }else if(request.status === 403){
              alert('username/password is incorrect');
          }else if(request.status === 500){
              alert('something went wrong on the server');
          }
      }
  };
  
  //make a request
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  console.log(username);
  console.log(password);
  request.open('POST','http://raviranjan091.imad.hasura-app.io/login',true);
  request.setRequestHeader('Content-Type','application/json');
  request.send(JSON.stringify({username: username, password: password}));
    
  //make a request to server and send the names
  
};
