console.log('Loaded!');


//move the image
var img=document.getElementById("madi");

var marginLeft=0;

function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";
}

img.onclick = function(){
    var interval = setInterval(moveRight,50);
};

//blog content
var heading = document.getElementById("blogHeading");
heading.innerHTML="gfchjjg";




//button counter
var button=document.getElementById("counter");
button.onclick = function(){
  //create a request oblect
  var request = new XMLHttpRequest();
  
  //capture the responce and store it in a variable
  request.onreadystatechange = function(){
      if(request.readyState == XMLHttpRequest.DONE)
      {
          //take some action
          if(request.status == 200){
              var counter=request.responseText;
              var span=document.getElementById("count");
              span.innerHTML=counter.toString();
          }
      }
  };
  
  //make a request
  request.open('GET','http://raviranjan091.imad.hasura-app.io/counter',true);
  request.send(null);
};

//submit name

var submit=document.getElementById("submit_btn");
submit.onclick= function(){
    
    //create a request oblect
  var request = new XMLHttpRequest();
  
  //capture the responce and store it in a variable
  request.onreadystatechange = function(){
      if(request.readyState == XMLHttpRequest.DONE)
      {
          //take some action
          if(request.status == 200){
              //capture the name and render it as a list
              var names=request.responseText;
              names=JSON.parse(names);
              var list="";
              for (var i=0;i<names.length;i++){
                  list += "<li>" + names[i] + "</li>";
              }
              var ul=document.getElementById("namelist");
              ul.innerHTML=list;
          }
      }
  };
  
  //make a request
  var nameInput=document.getElementById("name");
  var name=nameInput.value;
  request.open('GET','http://raviranjan091.imad.hasura-app.io/submit-name?name=' + name,true);
  request.send(null);
    
  //make a request to server and send the names
  
};
