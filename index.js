function majProfil(pseudo) {

	$.get("http://localhost/profil_joueur/api/getProfil.php?name="+pseudo).done( function(data){
		profil = jQuery.parseJSON(data);

		$("#pseudo").text(profil.name);
		$("#level").text("Level "+profil.summonerLevel);
		$("#icon").attr('src','http://ddragon.leagueoflegends.com/cdn/12.4.1/img/profileicon/'+profil.profileIconId+'.png');
	});


}

//attend la fin du chargement de la page HTML
$(document).ready(function() {

	//Attend un clique sur la balise #input_button
	$("#input_button").click(function(){

		//Met le contenu de la balise #input_text dans la variable textDeLUtilisateur
		var textDeLUtilisateur =$("#input_text").val();

		//Met à jour le HTML
		majProfil(textDeLUtilisateur);


	});

});