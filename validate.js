/*
Forms Validate 
*/
var ck_name = /^[ÑA-Zña-z ]{3,25}$/;
var ck_last_name = /^[ÑA-Zña-z ]{3,25}$/;
var ck_email = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
var ck_phone = /^\d{7,15}$/;

function validate(WebToLeadForm){

	var x = document.getElementsByClassName("msg-alert");
	var i;
	var ok = true;

	// Bucle que borra los msj de error 
	for (i = 0; i < x.length; i++) { 
    	x[i].innerHTML = "";
	}

	// Input Nombre 
	if( WebToLeadForm.first_name.value == ""){
		document.getElementById("name_loc").innerHTML= "Debe completar este campo";
		document.WebToLeadForm.first_name.focus();
		return false;
	}
	if(!ck_name.test(WebToLeadForm.first_name.value)){
		document.getElementById("name_loc").innerHTML= "Revise este campo !";
		document.WebToLeadForm.first_name.focus();
		return false;
	}	

	// Input Apellido
	if(WebToLeadForm.last_name.value == ""){
		document.getElementById("last_name_loc").innerHTML = "Debe completar este campo";
		document.WebToLeadForm.last_name.focus();
		return false;
	}
	if (!ck_last_name.test(WebToLeadForm.last_name.value)){
		document.getElementById("last_name_loc").innerHTML = "Revise este campo !";
		document.WebToLeadForm.last_name.focus();
		return false;
	}


	//Input Email
	if(WebToLeadForm.email1.value == ""){
		document.getElementById("email_loc").innerHTML = "Debe completar este campo";
		document.WebToLeadForm.email1.focus();
		return false;
	}	
	if(!ck_email.test(WebToLeadForm.email1.value)){
		document.getElementById("email_loc").innerHTML = "Revise este campo !";
		document.WebToLeadForm.email1.focus();
		return false;
	}


	//Input Número de Teléfono
	if(WebToLeadForm.phone_mobile.value == ""){
		document.getElementById("phone_loc").innerHTML = "Debe completar este campo";
		document.WebToLeadForm.phone_mobile.focus();
		return false;
	}		
	if(!ck_phone.test(WebToLeadForm.phone_mobile.value) || isNaN(WebToLeadForm.phone_mobile.value)){
		document.getElementById("phone_loc").innerHTML = "Revise este campo !";
		document.WebToLeadForm.phone_mobile.focus();
		return false;
	}


	// Lista Ciudad
	if(WebToLeadForm.d_ciudad_c.value == ""){
		document.getElementById("city_loc").innerHTML = "Debe seleccionar una ciudad";
		document.WebToLeadForm.d_ciudad_c.focus();
		return false;
	}	


	//Lista Programa
	if(WebToLeadForm.d_programa_interes_c.value == ""){
		document.getElementById("program_loc").innerHTML = "Debe seleccionar un programa";
		document.WebToLeadForm.d_programa_interes_c.focus();
		return false;
	}	


	// Checkbox Términos y Condiciones
	if(!WebToLeadForm.checkbox.checked){
		document.getElementById("terms_loc").innerHTML = "Debe aceptar los termino de condiciones para continuar";
		document.WebToLeadForm.checkbox.focus();
		return false;
	}

	// else{
	// 	window.location.replace("https://www.ucatolica.edu.co");
	// 	return false;
	// }

	return true;
	
}
