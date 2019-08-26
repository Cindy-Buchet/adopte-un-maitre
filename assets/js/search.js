/*	Création de la liste 	*/
CreateListMembers()

function CreateListMembers(){
	var container__members = document.getElementById('contenu_membres');
	
	for (var i = 0; i <= tab_members.members.length -1; i++) {
		var li = document.createElement("li");
			li.classList.add("list__el");
		var img__membre = document.createElement("img");
			img__membre.src=  tab_members.members[i].img;
			img__membre.classList.add("img__membre");
		var titre__name = document.createElement("h2");
			titre__name.innerHTML =  tab_members.members[i].name;
			titre__name.classList.add("titre__name");
		var text__years = document.createElement("p");
			text__years.innerHTML =  tab_members.members[i].years + " ans";
			text__years.classList.add("text__years");
		var text__province = document.createElement("p");
			text__province.innerHTML = ", " + tab_members.members[i].province +".";
			text__province.classList.add("text__province");
		var text__characters = document.createElement("p");
			text__characters.innerHTML = "Je suis "+ tab_members.members[i].characters + ".";
			text__characters.classList.add("text__characters");
		container__members.appendChild(li);
		li.appendChild(img__membre);
		li.appendChild(titre__name);
		li.appendChild(text__years);
		li.appendChild(text__province);
		li.appendChild(text__characters);

		
	};

};

/*	Selectionner le membre	*/

var list__el = document.querySelectorAll(".list__el");
for (var i = list__el.length - 1; i >= 0; i--) {

	list__el[i].addEventListener('click', function(){

		var json__members = JSON.stringify(this.children[1].innerHTML)
		window.sessionStorage.setItem('members', json__members);

		window.location.href = 'profilmaitre.html';

	});
};

/* Recherche par type */
var inputFilters = document.querySelectorAll("input.filter");
for(var i = 0; i < inputFilters.length; i++){
	inputFilters[i].addEventListener("change", function(){
		viewAllMembers();
		filterMembers()
	});

}

/* Reprendre tout les membres */
function viewAllMembers(){
	var members = document.querySelectorAll("#contenu_membres .list__el ");
	for(var i = 0; i < members.length; i++){
		members[i].classList.remove("hide");
	}
}

/* Reprendre les éléments cochés */
function filterMembers(){
	var members = document.querySelectorAll("#contenu_membres .list__el ");
	var checkedFilters = document.querySelectorAll("input.filter:checked");
	for(var i = 0; i < checkedFilters.length; i++){
		filterValue = checkedFilters[i].value;
		filterProperty = checkedFilters[i].getAttribute("data-property");
		console.log(filterProperty);
		if(filterValue != ""){
			for(var j = 0; j < members.length; j++){
				if(tab_members.members[j][filterProperty] != checkedFilters[i].value){
					members[j].classList.add("hide");
				}
			}
		}
	
	}
}