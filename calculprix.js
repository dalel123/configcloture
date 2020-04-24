

$(document).ready(function () {
   var totalTTC=0;
    $('#priceId').click(function () {
	  $("#divAffichPrix2").html('');
    var nbTroncon = document.getElementById("nbTroncon").value ;

	if(nbTroncon > 0){
		nbTroncon++;
		totalTTC=0;
		for (let i = 0; i < nbTroncon; i++) {
		  var type = document.getElementById("type").value;
			var fixation= $("input[name='fixation"+i+"']:checked").val();
			var hauteur =$("#hauteur"+i+" option:selected").val();
			var longueur  = document.getElementById("total"+i+"").value;
			var departMureau  = document.getElementById("nbmurauxId"+i+"").value;
			var autreRal =0;
			var cloture=$("input[name='cloture"+i+"']:checked").val();
			
			var boitelettre= $("input[name='boite']:checked").val();
			var couleur = $("input[name='couleur']:checked").val();
			
			console.log("Type : " + type);
			console.log("Fixation : " + fixation);
			console.log("Longueur : " + longueur);
			console.log("Hauteur : " + hauteur);
			console.log("DepartMureau : " + departMureau);
			console.log("Couleur : " + couleur);
			console.log("autreRal : " + autreRal);
			console.log("cloture : " + cloture);
			console.log("boite : " + boitelettre);
			console.log("nbTroncon : " + nbTroncon);

			   requeteAjax(type,fixation,longueur, hauteur,departMureau, couleur,autreRal,boitelettre);
			  
		}
	
	}else{
    var type = document.getElementById("type").value;
    var fixation= $("input[name='fixation']:checked").val();
    var hauteur =$("#hauteur option:selected").val();
    var longueur  = document.getElementById("total").value;
    var departMureau  = document.getElementById("nbmurauxId").value;
    var couleur = $("input[name='couleur']:checked").val();
    var autreRal =document.getElementById('autreralId').value;
    var cloture=$("input[name='cloture']:checked").val();
    var boitelettre= $("input[name='boite']:checked").val();
	totalTTC=0;
    console.log("Type : " + type);
    console.log("Fixation : " + fixation);
    console.log("Longueur : " + longueur);
    console.log("Hauteur : " + hauteur);
    console.log("DepartMureau : " + departMureau);
    console.log("Couleur : " + couleur);
    console.log("autreRal : " + autreRal);
    console.log("cloture : " + cloture);
    console.log("boite : " + boitelettre);
    console.log("nbTroncon : " + nbTroncon);

       requeteAjax(type,fixation,longueur, hauteur,departMureau, couleur,autreRal,boitelettre);
	 
	   
	}
    });

    function requeteAjax(type,fixation,longueur, hauteur,departMureau, couleur,autreRal,boitelettre) {
       
        $.ajax({
            type: "POST",
            url: "calcul.php",
            data: "typeId=" + type + "&fixationId=" + fixation + "&longueurId=" + longueur + "&hauteurId=" + hauteur + "&departId=" + departMureau + "&couleurId=" + couleur + "&autreRalId=" + autreRal + "&boiteId=" + boitelettre,
            dataType: "json",
            success: function (data) {

                console.log(data);

		 		fixation = $("input[name='fixation']:checked").val();
				console.log("fixation:"+fixation);
				if (fixation == null){

					 $("#divAffichPrix2").html('');
					 $(".TF").addClass("error-class");
					totalTTC=0;
				}
				
				else{
				$(".TF").removeClass("error-class");	
					totalTTC= totalTTC + data.totalTTC;
				}
				 $("#divAffichPrix").html('');
				$('#divAffichPrix').append(totalTTC);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    }
});




