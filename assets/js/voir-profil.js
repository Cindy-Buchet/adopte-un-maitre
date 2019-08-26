var myProfil = JSON.parse(localStorage.getItem("profil"));
	function CalculAge() {
    var td=new Date();
    var dtn= myProfil.age; 
    var an=dtn.substr(0,4); 
    var mois=dtn.substr(5,2);
    var day= dtn.substr(8,2); 
    var agetot=td.getFullYear()-an; 
 
    var mMois=td.getMonth()-mois; 
 
    
    if(mMois < 0) 
    {
        agetot=agetot-1; 
    }  
    else
    {
        if(mMois == 0)
        {
            var mDate=td.getDay()-day;
            if(mDate < 0)
            {
                agetot=agetot-1;
            }
             
        }
    }
    if(agetot < 0){
    	document.getElementById('profil-age').innerHTML=" moins d'un an";
    }else if(agetot == 0 || agetot == 1){
    document.getElementById('profil-age').innerHTML=" 1 an"; 
	}else if(agetot > 20 && agetot < 2018){
	document.getElementById('profil-age').innerHTML= "Vieux TROLL ne raconte pas de mensonge!";	
	}else if(agetot >= 2018){
    document.getElementById('profil-age').innerHTML= ""; 
    }else{
	document.getElementById('profil-age').innerHTML=agetot + " ans";
	}
} 
	if (myProfil != null) {

       

		document.getElementById("profil-firstname").innerHTML = myProfil.firstname;
		document.getElementById("profil-sexe").innerHTML = myProfil.sexe;
		document.getElementById("profil-province").innerHTML = myProfil.province;
		document.getElementById("profil-habitat").innerHTML = myProfil.habitat;
		document.getElementById("profil-type").innerHTML = myProfil.type;
		document.getElementById("profil-race").innerHTML = myProfil.race;
        document.getElementById("profil-text").innerHTML = myProfil.text;
		document.getElementById("profil-a_caractere").innerHTML = myProfil.final;
		document.getElementById("profil-a_aime").innerHTML = myProfil.final2;
		document.getElementById("profil-a_naimepas").innerHTML = myProfil.final3;
        CalculAge();

        var dataImage = localStorage.getItem('img64');

	}

