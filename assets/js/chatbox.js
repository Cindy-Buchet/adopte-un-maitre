/* Cacher la div */
function masquer_div(chat__masquer)
{
  if (document.getElementById(chat__masquer).style.display == 'block') {
       document.getElementById(chat__masquer).style.display = 'none';
  }
  else {
       document.getElementById(chat__masquer).style.display = 'block';
  }
}

/* Création des variables */
var ch_name = document.getElementById('ch_name');
var ch_img = document.getElementById("ch_img");
var ch_contenu = document.getElementById("ch_contenu");

/*	Récupération du tab	*/

var member_name = window.sessionStorage.getItem('members');
var decoded = JSON.parse(member_name);


/*	Création de la page 	*/

for (var i = tab_members.members.length - 1; i >= 0; i--) {
	tab_members.members[i]
	if (decoded == tab_members.members[i].name){
		ch_name.innerHTML = tab_members.members[i].name;
		ch_img.src = tab_members.members[i].img;

		for (var chatbox_el = 0; chatbox_el <= tab_members.members[i].chatbox.length -1; chatbox_el++) {
			var li = document.createElement("li");
			ch_contenu.appendChild(li);
			li.innerHTML = tab_members.members[i].chatbox[chatbox_el].chat;
		}
	}
};