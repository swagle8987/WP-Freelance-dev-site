function validate(){
  var nameexp=/[A-Za-z].{0,20}/
  var passwordexp=/[A-Za-z0-9].{6,}/

  var name=document.getElementById("name");
  var password=document.getElementById("password");
  var gender=document.getElementById("gender");
  var skills=document.getElementById("skills");
  var error=document.getElementById("error");
  error.innerHTML=""
  if(!(name.match(nameexp)))
  {
    error.innerHTML+="Name is either too long or wrong"
  }
  if(!(password.match(passwordexp)))
  {
    error.innerHTML+="password is wrong"
  }

}
