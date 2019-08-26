// Gestion du formulaire du profil
	document.getElementById("form-submit").addEventListener("click", function (event) {
		event.preventDefault();

		// Chat
		var race = "";
		if (document.choix.choix_type.selectedIndex == 1)
			race = document.getElementById("race_chat").value;
		// Chien
		if (document.choix.choix_type.selectedIndex == 2)
			race = document.getElementById("race_chien").value;

		// Caractères
		var final ="";
		for(e=0;e<22;e++){
	        if( document.getElementsByName("carac")[e].checked){
	            var a_caractere = document.getElementsByName("carac")[e].value;
	            final += a_caractere + ", "; 
	        }            
	    }

	    // Aime
		var final2 ="";
		for(f=0;f<15;f++){
	        if( document.getElementsByName("aime")[f].checked){
	            var a_aime = document.getElementsByName("aime")[f].value;
	            final2 += a_aime + ", "; 
	        } else{
	        	var final3 ="";
				for(o=0;o<15;o++){
			        if( document.getElementsByName("aime")[o].checked == false){
			            var a_naimepas = document.getElementsByName("aime")[o].value;
			            final3 += a_naimepas + ", ";
			        	}    	
				}
	        }           
	    }
    

		var data = {
			firstname: document.getElementById("firstname").value,
			sexe: document.getElementById("sexe").value,
			age: document.getElementById("age").value,
			province: document.getElementById("province").value,
			habitat: document.getElementById("habitat").value,
			type: document.getElementById("choix_type").value,
			text: document.getElementById("textpres").value,
			race: race,
			final: final,
			final2: final2,
			final3: final3
		};


		localStorage.setItem("profil", JSON.stringify(data));
	});

		

/* Pop up */
function masquer_div(chat__masquer)
{
  if (document.getElementById(chat__masquer).style.display == 'block') {
       document.getElementById(chat__masquer).style.display = 'none';
  }
  else {
       document.getElementById(chat__masquer).style.display = 'block';
  }
}


/* Cacher pour les races */
function affiche_formulaire() {

	if (document.choix.choix_type.selectedIndex == 0)
	document.getElementById('form_base').style.display = 'block';
	else
	document.getElementById('form_base').style.display = 'none';

	// Chat
	if (document.choix.choix_type.selectedIndex == 1)
	document.getElementById('form_chat').style.display = 'block';
	else
	document.getElementById('form_chat').style.display = 'none';

	// Chien
	if (document.choix.choix_type.selectedIndex == 2)
	document.getElementById('form_chien').style.display = 'block';
	else
	document.getElementById('form_chien').style.display = 'none';
	}



/* Complété */
var verif1 = document.getElementById("race_chien");
var verif2 = document.getElementById("race_chat");
var verif3 = document.getElementById("choix_type");
var verif4 = document.getElementById("habitat");
var verif5 = document.getElementById("province");
var verif6 = document.getElementById("age");
var verif7 = document.getElementById("sexe");
var verif8 = document.getElementById("firstname");
var verif9 = document.getElementById("race");

verif1.addEventListener('change', function(){
	if(verif1 != ""){
		verif1.style.color = "#e2aa37";
	}
});
verif2.addEventListener('change', function(){
	if(verif2 != ""){
		verif2.style.color = "#e2aa37";
	}
});
verif3.addEventListener('change', function(){
	if(verif3 != ""){
		verif3.style.color = "#e2aa37";
	}
});
verif4.addEventListener('change', function(){
	if(verif4 != ""){
		verif4.style.color = "#e2aa37";
	}
});
verif5.addEventListener('change', function(){
	if(verif5 != ""){
		verif5.style.color = "#e2aa37";
	}
});
verif6.addEventListener('change', function(){
	if(verif6 != ""){
		verif6.style.color = "#e2aa37";
	}
});
verif7.addEventListener('change', function(){
	if(verif7 != ""){
		verif7.style.color = "#e2aa37";
	}
});
verif8.addEventListener('change', function(){
	if(verif8 != ""){
		verif8.style.color = "#e2aa37";
	}
});
verif9.addEventListener('change', function(){
	if(verif9 != ""){
		verif9.style.color = "#e2aa37";
	}
});

myProfil = JSON.parse(localStorage.getItem("profil"));