document.getElementById("form-submit-suppression").addEventListener("click", function (event) {
			event.preventDefault();
			localStorage.removeItem("profil");
			localStorage.removeItem("img");
			document.getElementById("message").innerHTML = "Profil supprimé";
		});