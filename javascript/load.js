function populate(){
  var username=document.getElementById("uname");
  var uid=document.getElementById("uid");
  var xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
      document.getElementById("uname").innerHTML+=JSON.parse(xhttp.responseText)[0].name;
    }
  };
  xhttp.open("GET","data.json",true);
  xhttp.send();
}
