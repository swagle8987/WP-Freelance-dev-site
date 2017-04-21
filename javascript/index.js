$(document).ready(function(){
  $("#qtbtn").click(function(){
   $("#form2").slideToggle(500);
  });
    $("#joinbtn").click(function(){
   $("#form1").slideToggle(500);
  });
});

function createuser()
{
  var fname=document.getElementById("fname");
  var lname=document.getElementById("lname");
  document.getElementById("uname").value=fname.value+lname.value;
}
function checkpass()
{
  var password=document.getElementById("passw");
  var errormsg=document.getElementById("passworderror");
  var passexpression=/(?=[a-zA-Z0-9]).{6,}/;
  if(password.value.match(passexpression))
  {
    document.getElementById("retype").innerHTML="";
  }
  else {
    document.getElementById("retype").innerHTML=="Enter correct password";
  }
}

function validate()
{
  var firstname=document.getElementById("fname");
  var surname=document.getElementById("lname");
  var username=document.getElementById("uname");
  var password=document.getElementById("passw");
  var errormsg=document.getElementById("errormsg");
  var passexpression=/(?=[a-zA-Z0-9]).{6,}/;
  var firstnameexp=/[A-Za-z]/;
  var surnameexp=/[a-zA-Z]/;
  var unameexp=/[A-Za-z0-9].{6,}/;

  if(!(firstname.value.match(firstnameexp)))
  {
    errormsg.innerHTML="Invalid first name <br>";
  }
  if(!(surname.value.match(surname)))
  {
    errormsg.innerHTML+="Invalid surname<br>";
  }
  if(!(uname.value.match(unameexp)))
  {
    errormsg.innerHTML+="Invalid username<br>";
  }
  if(!(password.value.match(passexpression)))
  {
    errormsg.innerHTML+="Invalid password<br>";
  }
  if(errormsg.innerHTML!="")
  {
    return False
  }
  else {
    return True
  }
}
