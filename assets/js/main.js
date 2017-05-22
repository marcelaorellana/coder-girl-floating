document.getElementById("buttonForm").addEventListener("click", function(val){
	var nombre = document.getElementById("inputNombre").value;
	var email = document.getElementById("inputEmail").value;
	var asunto = document.getElementById("inputAsunto").value;
	var mensaje = document.getElementById("inputMensaje").value;
	console.log(nombre);
	console.log(email.indexOf("@"));
	val.preventDefault()
	
		if(nombre.charAt(0) != nombre.charAt(0).toUpperCase() || nombre == ""){
			alert("Nombre con mayúscula");
		}
		else if(email.indexOf("@") == -1){
			alert("eMail incorrecto");
		}
		else if(asunto == ""){
			alert("Asunto no puede ser vacio");
		}
		else if(mensaje.length > 100 || mensaje == ""){
			alert("Mensaje no puede ser vacio ni tener más de 100 caracteres");
		}
		 
		 return true;
	
}); 