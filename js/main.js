function translate(){
  var title= document.getElementById("form-signin-heading");
  var email= document.getElementById("inputEmail");
  var password= document.getElementById("inputPassword");

  var remember=document.getElementsByTagName("span")[0];
  var button=document.getElementsByClassName("btn")[0];

  title.innerHTML="Por favor inicia sesión";
  email.placeholder="Correo Electrónico";
  password.placeholder="Contraseña";
  remember.innerHTML="Recordar datos";
  button.innerHTML="Iniciar sesión";
}
translate();

function mostrar(){
  var email=document.getElementById("inputEmail").value;
  var password=document.getElementById("inputPassword").value;

    document.getElementById("datos").innerHTML = "<h2>" + "Datos del Formulario"+ "</h2>" +
   "El correo electrónico ingresado es : " + "</br>" + email + "</br>" + "La clave ingresada es : "+ "</br>" + password;
}
