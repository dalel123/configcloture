function longueurcloture() {




 $('input:radio[name="cloture"]').change(function(){
        var valueis = $(this).attr('value');
        console.log(valueis);
        var valuenum = valueis.slice(-1);
        console.log(valuenum);
      	
         if (valueis == 'EN L') {

            $("#longueurId").show();
            $("#longueurId2").show();
            $("#longueurId3").hide();
            $("#div1").show();
            $("#div2").show();
            $("#div3").hide();

        }
         if (valueis == 'EN U') {

            $("#longueurId").show();
            $("#longueurId2").show();
            $("#longueurId3").show();
            $("#div1").show();
            $("#div2").show();
            $("#div3").show();

        }
        if (valueis == 'DROITE') {

            $("#longueurId").show();
            $("#longueurId2").hide();
            $("#longueurId3").hide();
            $("#div1").show();
            $("#div2").hide();
            $("#div3").hide();

        }

        if (valueis == 'EN L'+valuenum) {

            $("#longueurId1"+valuenum).show();
            $("#longueurId2"+valuenum).show();
            $("#longueurId3"+valuenum).hide();
            $("#div1"+valuenum).show();
            $("#div2"+valuenum).show();
            $("#div3"+valuenum).hide();

        }
         if (valueis == 'EN U'+valuenum) {

            $("#longueurId1"+valuenum).show();
            $("#longueurId2"+valuenum).show();
            $("#longueurId3"+valuenum).show();
            $("#div1"+valuenum).show();
            $("#div2"+valuenum).show();
            $("#div3"+valuenum).show();

        }
        if (valueis == 'DROITE'+valuenum) {

            $("#longueurId1"+valuenum).show();
            $("#longueurId2"+valuenum).hide();
            $("#longueurId3"+valuenum).hide();
            $("#div1"+valuenum).show();
            $("#div2"+valuenum).hide();
            $("#div3"+valuenum).hide();

        }
  });


    var sum = 0;
    //iterate through each textboxes and add the values
    $(".txt").each(function() {


        //add only if the value is number
        if (!isNaN(this.value) && this.value.length != 0) {
            sum += parseFloat(this.value);
        }

    });
    //.toFixed() method will roundoff the final sum to 2 decimal places
    $("#sum").html(sum.toFixed(2));




}

