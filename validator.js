/* Modified by :Author */
$('input:radio[name="fixation"]').change(function(){
    if($(this).val() !== undefined){
      $(".TF").hide();
    }
});
$("#hauteur").change(function(){
	 if($(this).val() !== 0){
 		$(".HT").hide();
	}	
}); 
$("#longueurId").change(function(){
 			 if($(this).val() !== 0){
 		$(".TTal").hide();
 	}
});
$("#longueurId2").change(function(){
 			 if($(this).val() !== 0){
 		$(".TTal").hide();
 	}
});
$("#longueurId3").change(function(){
 			 if($(this).val() !== 0){
 		$(".TTal").hide();
 	}
});

 $(".TTal").hide();
 $('#priceId').click(function(){
	if(($.trim($('#total').val()) == 0)){
  $(".TTal").show();
			return;
 	}
 	else{
 $(".TTal").hide();
 	
 	}
});	
$(".HT").hide();
$('#priceId').click(function(){
	if(($.trim($('#hauteur').val()) == 0)){
  $(".HT").show();
			return;
 	}
 	else{
 $(".HT").hide();

 	}
});	
fixation = $("input[name='fixation']:checked").val();
console.log("fixation:"+fixation);
$(".TF").hide();
$('#priceId').click(function(){
	
	if($("input[name='fixation']:checked").length > 0){
  		$(".TF").hide();
	 }else{
	  	$(".TF").show();
	 }
 	
});

/*End Author*/