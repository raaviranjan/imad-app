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
var nameInput=document.getElementById("name");
var name=nameInput.value;
var submit=document.getElementById("submit_btn");
submit.onClick= function(){
  //make a request to server and send the names
  //capture the name and render it as a list
  var names=["name1","name2","name3","name4"];
  var list="";
  for (var i=0;i<names.length();i++){
      list="<li>" + names[i] + "</li>";
  }
  val ul=document.getElementById("namelist");
  ul.innerHTML=list;
};
