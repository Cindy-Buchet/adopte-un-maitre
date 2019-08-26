var name__maitre = document.getElementById('name__maitre');
var img = document.getElementById("img");
var img__animal = document.getElementById("img__animal");
var sex = document.getElementById("sex");
var years = document.getElementById("years");
var province = document.getElementById("province");
var housing = document.getElementById("housing");
var animal = document.getElementById("animal");
var have = document.getElementById("have");
var text = document.getElementById("pres__text");
var list__charac = document.getElementById("list__charac");
var list__like = document.getElementById("list__like");
var list__nolike = document.getElementById("list__nolike");

/*	Récupération du tab	*/

var member_name = window.sessionStorage.getItem('members');
var decoded = JSON.parse(member_name);


/*	Création de la page 	*/

for (var i = tab_members.members.length - 1; i >= 0; i--) {
	tab_members.members[i]
	if (decoded == tab_members.members[i].name){
		name__maitre.innerHTML = tab_members.members[i].name;
		img.src = tab_members.members[i].img;
		img__animal.src = tab_members.members[i].img_animal;
		sex.innerHTML = tab_members.members[i].sex;
		years.innerHTML = tab_members.members[i].years + " ans";
		province.innerHTML = tab_members.members[i].province;
		housing.innerHTML = tab_members.members[i].housing;
		have.innerHTML = tab_members.members[i].have;
		text.innerHTML = tab_members.members[i].text;
		list__charac.innerHTML = tab_members.members[i].characters;
		list__like.innerHTML = tab_members.members[i].like;
		list__nolike.innerHTML = tab_members.members[i].nolike;
	}
};