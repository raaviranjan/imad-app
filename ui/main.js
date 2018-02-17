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

//button counter
var button=document.getElementById("counter");
button.onclick = function(){
  //create a request oblect
  var request = new XMHttpRequest();
  
  //capture the responce and store it in a variable
  request.onReadyStateChange = function(){
      if(request.readystate == XMLHttpRequest.DONE)
      {
          //take some action
          if(request.status == 200){
              var coounter=request.responseText;
              var span=document.getElementById("count");
              span.innerHTML=counter.toString();
          }
      }
  };
  
  //make a request
  request.open('GET','http://raviranjan091.imad.hasura-app.io/counter',true);
  request.send(null);
};