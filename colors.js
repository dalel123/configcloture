$('[data-toggle="collapse"]').click(function() { $('.collapse.in').collapse('hide') });
	
	
	function changeCouleur() {
	
    var couleur = $("input[name='couleur']:checked").val();
	
    if(couleur== ''){
	
	document.getElementById("Divclr").style.backgroundColor = "#ffffFF";
	
    }
	
    if (couleur == 'blanc') {
	//  document.getElementById("divClr").style.display = "block";
	// document.getElementById("divClr").style.backgroundColor = "#ffffFF";
	//  document.body.style.backgroundImage = "url('')";
	document.getElementById("Divclr").style.backgroundColor = "#ffffFF";
	//document.getElementById("divClr1").style.backgroundColor = "#ffffFF";
    } else if (couleur == 'gris') {
	// document.getElementById("divClr").style.display = "block";
	//document.getElementById("divClr").style.backgroundColor = "#3d3e43";
	//document.getElementById("divClr1").style.backgroundColor = "#3d3e43";
	//document.body.style.backgroundImage = "url('')";
	document.getElementById("Divclr").style.backgroundColor =  "#121213";
	//$("body").css({"backgroundImage": "url('')"});
	
    } else if (couleur == 'grisAlu') {
	//  document.getElementById("divClr").style.display = "block";
	// document.getElementById("divClr").style.backgroundColor = "#b3b5b4";
	// document.getElementById("divClr1").style.backgroundColor = "#b3b5b4";
	// document.body.style.backgroundImage = "url('')";
	//  $("body").css({"backgroundImage": "url('')"});
	//document.body.style.backgroundColor ="#b3b5b4";
	
    } else if (couleur == 'vert') {
	// document.getElementById("divClr").style.display = "block";
	//  document.getElementById("divClr").style.backgroundColor = "#2d4537";
	//  document.getElementById("divClr1").style.backgroundColor = "#2d4537";
	// document.body.style.backgroundImage = "url('')";
	// $("body").css({"backgroundImage": "url('')"});
	//  document.body.style.backgroundColor ="#2d4537";
	
    } else if (couleur == 'brun') {
	// document.getElementById("divClr").style.display = "block";
	//document.getElementById("divClr").style.backgroundColor = "#471b12";
	// document.getElementById("divClr1").style.backgroundColor = "#471b12";
	// document.body.style.backgroundImage = "url('')";
	// $("body").css({"backgroundImage": "url('')"});
	//  document.body.style.backgroundColor ="#471b12";
	
    } else if (couleur == 'bleu') {
	// document.getElementById("divClr").style.display = "block";
	//document.getElementById("divClr").style.backgroundColor = "#0f294e";
	//  document.getElementById("divClr1").style.backgroundColor = "#0f294e";
	// document.body.style.backgroundImage = "url('')";
	//  $("body").css({"backgroundImage": "url('')"});
	// document.body.style.backgroundColor ="#0f294e";
	
    } else if (couleur == 'rouge') {
	// document.getElementById("divClr").style.display = "block";
	//document.getElementById("divClr").style.backgroundColor = "#af2d1d";
	// document.getElementById("divClr1").style.backgroundColor = "#af2d1d";
	// document.body.style.backgroundImage = "url('')";
	//  $("body").css({"backgroundImage": "url('')"});
	//  document.body.style.backgroundColor ="#af2d1d";
	
    } else if (couleur == 'ivoire') {
	// document.getElementById("divClr").style.display = "block";
	// document.getElementById("divClr").style.backgroundColor = "#e5d691";
	// document.getElementById("divClr1").style.backgroundColor = "#e5d691";
	// document.body.style.backgroundImage = "url('')";
	// $("body").css({"backgroundImage": "url('')"});
	// document.body.style.backgroundColor ="#e5d691";
	
    }
	
	}
	
	$("select.colorer").change(function(){
    var couleur2 = $(this).children("option:selected").val();
	
	
    if(couleur2=='Ral 1000 - Beige vert'){
	
	document.getElementById("Divclr").style.backgroundColor = "#ccc188";
	document.getElementById("divClr1").style.backgroundColor = "#ccc188";
	document.getElementById("divClr2").style.backgroundColor = "#ccc188";
	document.getElementById("divClr3").style.backgroundColor = "#ccc188";
	document.getElementById("divClr4").style.backgroundColor = "#ccc188";
	document.getElementById("divClr5").style.backgroundColor ="#ccc188";
    }else if(couleur2=='Ral 1001 - Beige'){
	
	
	document.getElementById("Divclr").style.backgroundColor = "#ceb487";
	document.getElementById("divClr1").style.backgroundColor = "#ceb487";
	document.getElementById("divClr2").style.backgroundColor = "#ceb487";
	document.getElementById("divClr3").style.backgroundColor = "#ceb487";
	document.getElementById("divClr4").style.backgroundColor = "#ceb487";
	document.getElementById("divClr5").style.backgroundColor ="#ceb487";
    }else if(couleur2=='Ral 1002 - Jaune sable'){
	
	document.getElementById("Divclr").style.backgroundColor = "#d0b173";
	document.getElementById("divClr1").style.backgroundColor = "#d0b173";
	document.getElementById("divClr2").style.backgroundColor = "#d0b173";
	document.getElementById("divClr3").style.backgroundColor = "#d0b173";
	document.getElementById("divClr4").style.backgroundColor = "#d0b173";
	document.getElementById("divClr5").style.backgroundColor ="#d0b173";
	
	
    }else if(couleur2=='Ral 1003 - Jaune de sécurité'){
	
	document.getElementById("Divclr").style.backgroundColor = "#f2ad00";
	document.getElementById("divClr1").style.backgroundColor = "#f2ad00";
	document.getElementById("divClr2").style.backgroundColor = "#f2ad00";
	document.getElementById("divClr3").style.backgroundColor = "#f2ad00";
	document.getElementById("divClr4").style.backgroundColor = "#f2ad00";
	document.getElementById("divClr5").style.backgroundColor ="#f2ad00";
	
    }else if(couleur2=='Ral 1004 - Jaune or'){
	
	document.getElementById("Divclr").style.backgroundColor = "#e4a700";
	document.getElementById("divClr1").style.backgroundColor = "#e4a700";
	document.getElementById("divClr2").style.backgroundColor = "#e4a700";
	document.getElementById("divClr3").style.backgroundColor = "#e4a700";
	document.getElementById("divClr4").style.backgroundColor = "#e4a700";
	document.getElementById("divClr5").style.backgroundColor ="#e4a700";
    }else if(couleur2=='Ral 1005 - Jaune miel'){
	
	document.getElementById("Divclr").style.backgroundColor = "#c79600";
	document.getElementById("divClr1").style.backgroundColor = "#c79600";
	document.getElementById("divClr2").style.backgroundColor = "#c79600";
	document.getElementById("divClr3").style.backgroundColor = "#c79600";
	document.getElementById("divClr4").style.backgroundColor = "#c79600";
	document.getElementById("divClr5").style.backgroundColor ="#c79600";
    }else if(couleur2=='Ral 1006 - Jaune maïs'){
	
	document.getElementById("Divclr").style.backgroundColor = "#c79600";
	document.getElementById("divClr1").style.backgroundColor = "#c79600";
	document.getElementById("divClr2").style.backgroundColor = "#c79600";
	document.getElementById("divClr3").style.backgroundColor = "#c79600";
	document.getElementById("divClr4").style.backgroundColor = "#c79600";
	document.getElementById("divClr5").style.backgroundColor ="#c79600";
    }else if(couleur2=='Ral 1007 - Jaune narcisse'){
	
	document.getElementById("Divclr").style.backgroundColor = "#e69400";
	document.getElementById("divClr1").style.backgroundColor = "#e69400";
	document.getElementById("divClr2").style.backgroundColor = "#e69400";
	document.getElementById("divClr3").style.backgroundColor = "#e69400";
	document.getElementById("divClr4").style.backgroundColor = "#e69400";
	document.getElementById("divClr5").style.backgroundColor ="#e69400";
    }else if(couleur2=='Ral 1011 - Beige brun'){
	
	document.getElementById("Divclr").style.backgroundColor = "#af8552";
	document.getElementById("divClr1").style.backgroundColor = "#af8552";
	document.getElementById("divClr2").style.backgroundColor = "#af8552";
	document.getElementById("divClr3").style.backgroundColor = "#af8552";
	document.getElementById("divClr4").style.backgroundColor = "#af8552";
	document.getElementById("divClr5").style.backgroundColor ="#af8552";
    }else if(couleur2=='Ral 1012 - Jaune citron'){
	
	document.getElementById("Divclr").style.backgroundColor = "#d8ba2e";
	document.getElementById("divClr1").style.backgroundColor = "#d8ba2e";
	document.getElementById("divClr2").style.backgroundColor = "#d8ba2e";
	document.getElementById("divClr3").style.backgroundColor = "#d8ba2e";
	document.getElementById("divClr4").style.backgroundColor = "#d8ba2e";
	document.getElementById("divClr5").style.backgroundColor ="#d8ba2e";
    }else if(couleur2=='Ral 1013 - Blanc perlé'){
	
	document.getElementById("Divclr").style.backgroundColor = "#e5dfcc";
	document.getElementById("divClr1").style.backgroundColor = "#e5dfcc";
	document.getElementById("divClr2").style.backgroundColor = "#e5dfcc";
	document.getElementById("divClr3").style.backgroundColor = "#e5dfcc";
	document.getElementById("divClr4").style.backgroundColor = "#e5dfcc";
	document.getElementById("divClr5").style.backgroundColor ="#e5dfcc";
    }else if(couleur2=='Ral 1014 - Ivoire'){
	
	document.getElementById("Divclr").style.backgroundColor = "#dfcea1";
	document.getElementById("divClr1").style.backgroundColor = "#dfcea1";
	document.getElementById("divClr2").style.backgroundColor = "#dfcea1";
	document.getElementById("divClr3").style.backgroundColor = "#dfcea1";
	document.getElementById("divClr4").style.backgroundColor = "#dfcea1";
	document.getElementById("divClr5").style.backgroundColor ="#dfcea1";
    }else if(couleur2=='Ral 1015 - Ivoire clair'){
	
	document.getElementById("Divclr").style.backgroundColor = "#e6d9bd";
	document.getElementById("divClr1").style.backgroundColor = "#e6d9bd";
	document.getElementById("divClr2").style.backgroundColor = "#e6d9bd";
	document.getElementById("divClr3").style.backgroundColor = "#e6d9bd";
	document.getElementById("divClr4").style.backgroundColor = "#e6d9bd";
	document.getElementById("divClr5").style.backgroundColor ="#e6d9bd";
	
    }else if(couleur2=='Ral 1016 - Jaune soufre'){
	
	document.getElementById("Divclr").style.backgroundColor = "#ecea41";
	document.getElementById("divClr1").style.backgroundColor = "#ecea41";
	document.getElementById("divClr2").style.backgroundColor = "#ecea41";
	document.getElementById("divClr3").style.backgroundColor = "#ecea41";
	document.getElementById("divClr4").style.backgroundColor = "#ecea41";
	document.getElementById("divClr5").style.backgroundColor ="#ecea41";
    }else if(couleur2=='Ral 1017 - Jaune safran'){
	
	document.getElementById("Divclr").style.backgroundColor = "#f6b256";
	document.getElementById("divClr1").style.backgroundColor = "#f6b256";
	document.getElementById("divClr2").style.backgroundColor = "#f6b256";
	document.getElementById("divClr3").style.backgroundColor = "#f6b256";
	document.getElementById("divClr4").style.backgroundColor = "#f6b256";
	document.getElementById("divClr5").style.backgroundColor ="#f6b256";
    }else if(couleur2=='Ral 1018 - Jaune zinc'){
	
	document.getElementById("Divclr").style.backgroundColor = "#fdda38";
	document.getElementById("divClr1").style.backgroundColor = "#fdda38";
	document.getElementById("divClr2").style.backgroundColor = "#fdda38";
	document.getElementById("divClr3").style.backgroundColor = "#fdda38";
	document.getElementById("divClr4").style.backgroundColor = "#fdda38";
	document.getElementById("divClr5").style.backgroundColor ="#fdda38";
    }else if(couleur2=='Ral 1019 - Beige gris'){
	
	document.getElementById("Divclr").style.backgroundColor = "#a6937b";
	document.getElementById("divClr1").style.backgroundColor = "#a6937b";
	document.getElementById("divClr2").style.backgroundColor = "#a6937b";
	document.getElementById("divClr3").style.backgroundColor = "#a6937b";
	document.getElementById("divClr4").style.backgroundColor = "#a6937b";
	document.getElementById("divClr5").style.backgroundColor ="#a6937b";
    }else if(couleur2=='Ral 1020 - Jaune olive'){
	
	document.getElementById("Divclr").style.backgroundColor = "#a09465";
	document.getElementById("divClr1").style.backgroundColor = "#a09465";
	document.getElementById("divClr2").style.backgroundColor = "#a09465";
	document.getElementById("divClr3").style.backgroundColor = "#a09465";
	document.getElementById("divClr4").style.backgroundColor = "#a09465";
	document.getElementById("divClr5").style.backgroundColor ="#a09465";
	
    }else if(couleur2=='Ral 1021 - Jaune colza'){
	
	document.getElementById("divClr").style.backgroundColor = "#a09465";
	document.getElementById("divClr1").style.backgroundColor = "#a09465";
	document.getElementById("divClr2").style.backgroundColor = "#a09465";
	document.getElementById("divClr3").style.backgroundColor = "#a09465";
	document.getElementById("divClr4").style.backgroundColor = "#a09465";
	document.getElementById("divClr5").style.backgroundColor ="#a09465";
    }else if(couleur2=='Ral 1023 - Jaune trafic'){
	
	document.getElementById("Divclr").style.backgroundColor = "#f2bf00";
	document.getElementById("divClr1").style.backgroundColor = "#f2bf00";
	document.getElementById("divClr2").style.backgroundColor = "#f2bf00";
	document.getElementById("divClr3").style.backgroundColor = "#f2bf00";
	document.getElementById("divClr4").style.backgroundColor = "#f2bf00";
	document.getElementById("divClr5").style.backgroundColor ="#f2bf00";
	
    }else if(couleur2=='Ral 1024 - Jaune ocre'){
	
	document.getElementById("Divclr").style.backgroundColor = "#b89650";
	document.getElementById("divClr1").style.backgroundColor = "#b89650";
	document.getElementById("divClr2").style.backgroundColor = "#b89650";
	document.getElementById("divClr3").style.backgroundColor = "#b89650";
	document.getElementById("divClr4").style.backgroundColor = "#b89650";
	document.getElementById("divClr5").style.backgroundColor ="#b89650";
	
    }else if(couleur2=='Ral 1027 - Jaune curry'){
	
	document.getElementById("Divclr").style.backgroundColor = "#a4861a";
	document.getElementById("divClr1").style.backgroundColor = "#a4861a";
	document.getElementById("divClr2").style.backgroundColor = "#a4861a";
	document.getElementById("divClr3").style.backgroundColor = "#a4861a";
	document.getElementById("divClr4").style.backgroundColor = "#a4861a";
	document.getElementById("divClr5").style.backgroundColor ="#a4861a";
	
    }else if(couleur2=='Ral 1028 - Jaune melon'){
	
	document.getElementById("Divclr").style.backgroundColor = "#ffa600";
	document.getElementById("divClr1").style.backgroundColor = "#ffa600";
	document.getElementById("divClr2").style.backgroundColor = "#ffa600";
	document.getElementById("divClr3").style.backgroundColor = "#ffa600";
	document.getElementById("divClr4").style.backgroundColor = "#ffa600";
	document.getElementById("divClr5").style.backgroundColor ="#ffa600";
	
    }else if(couleur2=='Ral 1032 - Jaune genêt'){
	
	document.getElementById("Divclr").style.backgroundColor = "#e2ac00";
	document.getElementById("divClr1").style.backgroundColor = "#e2ac00";
	document.getElementById("divClr2").style.backgroundColor = "#e2ac00";
	document.getElementById("divClr3").style.backgroundColor = "#e2ac00";
	document.getElementById("divClr4").style.backgroundColor = "#e2ac00";
	document.getElementById("divClr5").style.backgroundColor ="#e2ac00";
	
    }else if(couleur2=='Ral 1033 - Jaune dahlia'){
	
	document.getElementById("Divclr").style.backgroundColor = "#f7a11f";
	document.getElementById("divClr1").style.backgroundColor = "#f7a11f";
	document.getElementById("divClr2").style.backgroundColor = "#f7a11f";
	document.getElementById("divClr3").style.backgroundColor = "#f7a11f";
	document.getElementById("divClr4").style.backgroundColor = "#f7a11f";
	document.getElementById("divClr5").style.backgroundColor ="#f7a11f";
	
    }else if(couleur2=='Ral 1034 - Jaune pastel'){
	
	document.getElementById("Divclr").style.backgroundColor = "#eba557";
	document.getElementById("divClr1").style.backgroundColor = "#eba557";
	document.getElementById("divClr2").style.backgroundColor = "#eba557";
	document.getElementById("divClr3").style.backgroundColor = "#eba557";
	document.getElementById("divClr4").style.backgroundColor = "#eba557";
	document.getElementById("divClr5").style.backgroundColor ="#eba557";
	
    }else if(couleur2=='Ral 2000 - Orangé jaune'){
	
	document.getElementById("divClr").style.backgroundColor = "#d97604";
	document.getElementById("divClr1").style.backgroundColor = "#d97604";
	document.getElementById("divClr2").style.backgroundColor = "#d97604";
	document.getElementById("divClr3").style.backgroundColor = "#d97604";
	document.getElementById("divClr4").style.backgroundColor = "#d97604";
	document.getElementById("divClr5").style.backgroundColor ="#d97604";
	
    }else if(couleur2=='Ral 2000 - Orangé jaune'){
	
	document.getElementById("Divclr").style.backgroundColor = "#d97604";
	document.getElementById("divClr1").style.backgroundColor = "#d97604";
	document.getElementById("divClr2").style.backgroundColor = "#d97604";
	document.getElementById("divClr3").style.backgroundColor = "#d97604";
	document.getElementById("divClr4").style.backgroundColor = "#d97604";
	document.getElementById("divClr5").style.backgroundColor ="#d97604";
	
    }else if(couleur2=='Ral 2001 - Orangé rouge'){
	
	document.getElementById("Divclr").style.backgroundColor = "#bb4926";
	document.getElementById("divClr1").style.backgroundColor = "#bb4926";
	document.getElementById("divClr2").style.backgroundColor = "#bb4926";
	document.getElementById("divClr3").style.backgroundColor = "#bb4926";
	document.getElementById("divClr4").style.backgroundColor = "#bb4926";
	document.getElementById("divClr5").style.backgroundColor ="#bb4926";
	
    }else if(couleur2=='Ral 2002 - Orangé sang'){
	
	document.getElementById("Divclr").style.backgroundColor = "#c13524";
	document.getElementById("divClr1").style.backgroundColor = "#c13524";
	document.getElementById("divClr2").style.backgroundColor = "#c13524";
	document.getElementById("divClr3").style.backgroundColor = "#c13524";
	document.getElementById("divClr4").style.backgroundColor = "#c13524";
	document.getElementById("divClr5").style.backgroundColor ="#c13524";
	
    }else if(couleur2=='Ral 2003 - Orangé pastel'){
	
	document.getElementById("Divclr").style.backgroundColor = "#f97a31";
	document.getElementById("divClr1").style.backgroundColor = "#f97a31";
	document.getElementById("divClr2").style.backgroundColor = "#f97a31";
	document.getElementById("divClr3").style.backgroundColor = "#f97a31";
	document.getElementById("divClr4").style.backgroundColor = "#f97a31";
	document.getElementById("divClr5").style.backgroundColor ="#f97a31";
	
    }else if(couleur2=='Ral 2004 - Orangé pur'){
	
	document.getElementById("Divclr").style.backgroundColor = "#e8540d";
	document.getElementById("divClr1").style.backgroundColor = "#e8540d";
	document.getElementById("divClr2").style.backgroundColor = "#e8540d";
	document.getElementById("divClr3").style.backgroundColor = "#e8540d";
	document.getElementById("divClr4").style.backgroundColor = "#e8540d";
	document.getElementById("divClr5").style.backgroundColor ="#e8540d";
	
    }
    else if(couleur2=='Ral 2004 - Orangé pur'){
	
	document.getElementById("Divclr").style.backgroundColor = "#f46f29";
	document.getElementById("divClr1").style.backgroundColor = "#f46f29";
	document.getElementById("divClr2").style.backgroundColor = "#f46f29";
	document.getElementById("divClr3").style.backgroundColor = "#f46f29";
	document.getElementById("divClr4").style.backgroundColor = "#f46f29";
	document.getElementById("divClr5").style.backgroundColor ="#f46f29";
	
    }else if(couleur2=='Ral 2009 - Orangé trafic'){
	
	document.getElementById("Divclr").style.backgroundColor = "#db5316";
	document.getElementById("divClr1").style.backgroundColor = "#db5316";
	document.getElementById("divClr2").style.backgroundColor = "#db5316";
	document.getElementById("divClr3").style.backgroundColor = "#db5316";
	document.getElementById("divClr4").style.backgroundColor = "#db5316";
	document.getElementById("divClr5").style.backgroundColor ="#db5316";
	
    }else if(couleur2=='Ral 2010 - Orangé de sécurité'){
	
	document.getElementById("Divclr").style.backgroundColor = "#d55d23";
	document.getElementById("divClr1").style.backgroundColor = "#d55d23";
	document.getElementById("divClr2").style.backgroundColor = "#d55d23";
	document.getElementById("divClr3").style.backgroundColor = "#d55d23";
	document.getElementById("divClr4").style.backgroundColor = "#d55d23";
	document.getElementById("divClr5").style.backgroundColor ="#d55d23";
	
    }
    else if(couleur2=='Ral 2011 - Orangé foncé'){
	
	document.getElementById("Divclr").style.backgroundColor = "#ea7625";
	document.getElementById("divClr1").style.backgroundColor = "#ea7625";
	document.getElementById("divClr2").style.backgroundColor = "#ea7625";
	document.getElementById("divClr3").style.backgroundColor = "#ea7625";
	document.getElementById("divClr4").style.backgroundColor = "#ea7625";
	document.getElementById("divClr5").style.backgroundColor ="#ea7625";
	
    }else if(couleur2=='Ral 2012 - Orangé saumon'){
	
	document.getElementById("Divclr").style.backgroundColor = "#d6654e";
	document.getElementById("divClr1").style.backgroundColor = "#d6654e";
	document.getElementById("divClr2").style.backgroundColor = "#d6654e";
	document.getElementById("divClr3").style.backgroundColor = "#d6654e";
	document.getElementById("divClr4").style.backgroundColor = "#d6654e";
	document.getElementById("divClr5").style.backgroundColor ="#d6654e";
	
    }else if(couleur2=='Ral 2100 - Noir profond'){
	
	document.getElementById("Divclr").style.backgroundColor = "#151619";
	document.getElementById("divClr1").style.backgroundColor = "#151619";
	document.getElementById("divClr2").style.backgroundColor = "#151619";
	document.getElementById("divClr3").style.backgroundColor = "#151619";
	document.getElementById("divClr4").style.backgroundColor = "#151619";
	document.getElementById("divClr5").style.backgroundColor ="#151619";
	
    }
    else if(couleur2=='Ral 3000 - Rouge feu'){
	
	document.getElementById("Divclr").style.backgroundColor = "#a02725";
	document.getElementById("divClr1").style.backgroundColor = "#a02725";
	document.getElementById("divClr2").style.backgroundColor = "#a02725";
	document.getElementById("divClr3").style.backgroundColor = "#a02725";
	document.getElementById("divClr4").style.backgroundColor = "#a02725";
	document.getElementById("divClr5").style.backgroundColor ="#a02725";
	
    }else if(couleur2=='Ral 3001 - Rouge de sécurité'){
	
	document.getElementById("Divclr").style.backgroundColor = "#a0001c";
	document.getElementById("divClr1").style.backgroundColor = "#a0001c";
	document.getElementById("divClr2").style.backgroundColor = "#a0001c";
	document.getElementById("divClr3").style.backgroundColor = "#a0001c";
	document.getElementById("divClr4").style.backgroundColor = "#a0001c";
	document.getElementById("divClr5").style.backgroundColor ="#a0001c";
	
    }else if(couleur2=='Ral 3002 - Rouge carmin'){
	
	document.getElementById("Divclr").style.backgroundColor = "#991424";
	document.getElementById("divClr1").style.backgroundColor = "#991424";
	document.getElementById("divClr2").style.backgroundColor = "#991424";
	document.getElementById("divClr3").style.backgroundColor = "#991424";
	document.getElementById("divClr4").style.backgroundColor = "#991424";
	document.getElementById("divClr5").style.backgroundColor ="#991424";
	
    }else if(couleur2=='Ral 3003 - Rouge rubis'){
	
	document.getElementById("Divclr").style.backgroundColor = "#870a24";
	document.getElementById("divClr1").style.backgroundColor = "#870a24";
	document.getElementById("divClr2").style.backgroundColor = "#870a24";
	document.getElementById("divClr3").style.backgroundColor = "#870a24";
	document.getElementById("divClr4").style.backgroundColor = "#870a24";
	document.getElementById("divClr5").style.backgroundColor ="#870a24";
	
    }
    else if(couleur2=='Ral 3004 - Rouge pourpre'){
	
	document.getElementById("Divclr").style.backgroundColor = "#6c1b2a";
	document.getElementById("divClr1").style.backgroundColor = "#6c1b2a";
	document.getElementById("divClr2").style.backgroundColor = "#6c1b2a";
	document.getElementById("divClr3").style.backgroundColor = "#6c1b2a";
	document.getElementById("divClr4").style.backgroundColor = "#6c1b2a";
	document.getElementById("divClr5").style.backgroundColor ="#6c1b2a";
	
    }else if(couleur2=='Ral 3005 - Rouge vin'){
	
	document.getElementById("Divclr").style.backgroundColor = "#581e29";
	document.getElementById("divClr1").style.backgroundColor = "#581e29";
	document.getElementById("divClr2").style.backgroundColor = "#581e29";
	document.getElementById("divClr3").style.backgroundColor = "#581e29";
	document.getElementById("divClr4").style.backgroundColor = "#581e29";
	document.getElementById("divClr5").style.backgroundColor ="#581e29";
	
    }else if(couleur2=='Ral 3007 - Rouge noir'){
	
	document.getElementById("Divclr").style.backgroundColor = "#402226";
	document.getElementById("divClr1").style.backgroundColor = "#402226";
	document.getElementById("divClr2").style.backgroundColor = "#402226";
	document.getElementById("divClr3").style.backgroundColor = "#402226";
	document.getElementById("divClr4").style.backgroundColor = "#402226";
	document.getElementById("divClr5").style.backgroundColor ="#402226";
	
    }else if(couleur2=='Ral 3009 - Rouge oxyde'){
	
	document.getElementById("Divclr").style.backgroundColor = "#6d312b";
	document.getElementById("divClr1").style.backgroundColor = "#6d312b";
	document.getElementById("divClr2").style.backgroundColor = "#6d312b";
	document.getElementById("divClr3").style.backgroundColor = "#6d312b";
	document.getElementById("divClr4").style.backgroundColor = "#6d312b";
	document.getElementById("divClr5").style.backgroundColor ="#6d312b";
	
    }
    else if(couleur2=='Ral 3011 - Rouge brun'){
	
	document.getElementById("Divclr").style.backgroundColor = "#791f24";
	document.getElementById("divClr1").style.backgroundColor = "#791f24";
	document.getElementById("divClr2").style.backgroundColor = "#791f24";
	document.getElementById("divClr3").style.backgroundColor = "#791f24";
	document.getElementById("divClr4").style.backgroundColor = "#791f24";
	document.getElementById("divClr5").style.backgroundColor ="#791f24";
	
    }else if(couleur2=='Ral 3012 - Rouge beige'){
	
	document.getElementById("Divclr").style.backgroundColor = "#c68873";
	document.getElementById("divClr1").style.backgroundColor = "#c68873";
	document.getElementById("divClr2").style.backgroundColor = "#c68873";
	document.getElementById("divClr3").style.backgroundColor = "#c68873";
	document.getElementById("divClr4").style.backgroundColor = "#c68873";
	document.getElementById("divClr5").style.backgroundColor ="#c68873";
	
    }else if(couleur2=='Ral 3013 - Rouge tomate'){
	
	document.getElementById("Divclr").style.backgroundColor = "#992a28";
	document.getElementById("divClr1").style.backgroundColor = "#992a28";
	document.getElementById("divClr2").style.backgroundColor = "#992a28";
	document.getElementById("divClr3").style.backgroundColor = "#992a28";
	document.getElementById("divClr4").style.backgroundColor = "#992a28";
	document.getElementById("divClr5").style.backgroundColor ="#992a28";
	
    }else if(couleur2=='Ral 3014 - Vieux rose'){
	
	document.getElementById("Divclr").style.backgroundColor = "#cf7278";
	document.getElementById("divClr1").style.backgroundColor = "#cf7278";
	document.getElementById("divClr2").style.backgroundColor = "#cf7278";
	document.getElementById("divClr3").style.backgroundColor = "#cf7278";
	document.getElementById("divClr4").style.backgroundColor = "#cf7278";
	document.getElementById("divClr5").style.backgroundColor ="#cf7278";
	
    }else if(couleur2=='Ral 3015 - Rose clair'){
	
	document.getElementById("Divclr").style.backgroundColor = "#e3a0ac";
	document.getElementById("divClr1").style.backgroundColor = "#e3a0ac";
	document.getElementById("divClr2").style.backgroundColor = "#e3a0ac";
	document.getElementById("divClr3").style.backgroundColor = "#e3a0ac";
	document.getElementById("divClr4").style.backgroundColor = "#e3a0ac";
	document.getElementById("divClr5").style.backgroundColor ="#e3a0ac";
	
    }else if(couleur2=='Ral 3016 - Rouge corail'){
	
	document.getElementById("Divclr").style.backgroundColor = "#ab392d";
	document.getElementById("divClr1").style.backgroundColor = "#ab392d";
	document.getElementById("divClr2").style.backgroundColor = "#ab392d";
	document.getElementById("divClr3").style.backgroundColor = "#ab392d";
	document.getElementById("divClr4").style.backgroundColor = "#ab392d";
	document.getElementById("divClr5").style.backgroundColor ="#ab392d";
	
    }else if(couleur2=='Ral 3017 - Rosé'){
	
	document.getElementById("Divclr").style.backgroundColor = "#cc515e";
	document.getElementById("divClr1").style.backgroundColor = "#cc515e";
	document.getElementById("divClr2").style.backgroundColor = "#cc515e";
	document.getElementById("divClr3").style.backgroundColor = "#cc515e";
	document.getElementById("divClr4").style.backgroundColor = "#cc515e";
	document.getElementById("divClr5").style.backgroundColor ="#cc515e";
	
    }
    else if(couleur2=='Ral 3018 - Rouge fraise'){
	
	document.getElementById("Divclr").style.backgroundColor = "#ca3f5";
	document.getElementById("divClr1").style.backgroundColor = "#ca3f5";
	document.getElementById("divClr2").style.backgroundColor = "#ca3f5";
	document.getElementById("divClr3").style.backgroundColor = "#ca3f5";
	document.getElementById("divClr4").style.backgroundColor = "#ca3f5";
	document.getElementById("divClr5").style.backgroundColor ="#ca3f5";
	
    }else if(couleur2=='Ral 3018 - Rouge fraise'){
	
	document.getElementById("Divclr").style.backgroundColor = "#bf111b";
	document.getElementById("divClr1").style.backgroundColor = "#bf111b";
	document.getElementById("divClr2").style.backgroundColor = "#bf111b";
	document.getElementById("divClr3").style.backgroundColor = "#bf111b";
	document.getElementById("divClr4").style.backgroundColor = "#bf111b";
	document.getElementById("divClr5").style.backgroundColor ="#bf111b";
	
    }else if(couleur2=='Ral 3022 - Rouge saumon'){
	document.getElementById("Divclr").style.backgroundColor = "#d36b56";
	document.getElementById("divClr1").style.backgroundColor = "#d36b56";
	document.getElementById("divClr2").style.backgroundColor = "#d36b56";
	document.getElementById("divClr3").style.backgroundColor = "#d36b56";
	document.getElementById("divClr4").style.backgroundColor = "#d36b56";
	document.getElementById("divClr5").style.backgroundColor ="#d36b56";
	
    }else if(couleur2=='Ral 3027 - Rouge framboise'){
	document.getElementById("Divclr").style.backgroundColor = "#d36b56";
	document.getElementById("divClr1").style.backgroundColor = "#d36b56";
	document.getElementById("divClr2").style.backgroundColor = "#d36b56";
	document.getElementById("divClr3").style.backgroundColor = "#d36b56";
	document.getElementById("divClr4").style.backgroundColor = "#d36b56";
	document.getElementById("divClr5").style.backgroundColor ="#d36b56";
	
    }
    else if(couleur2=='Ral 3031 - Rouge oriental'){
	document.getElementById("Divclr").style.backgroundColor = "#a7323e";
	document.getElementById("divClr1").style.backgroundColor = "#a7323e";
	document.getElementById("divClr2").style.backgroundColor = "#a7323e";
	document.getElementById("divClr3").style.backgroundColor = "#a7323e";
	document.getElementById("divClr4").style.backgroundColor = "#a7323e";
	document.getElementById("divClr5").style.backgroundColor ="#a7323e";
	
    }
    else if(couleur2=='Ral 4001 - Lilas rouge'){
	document.getElementById("Divclr").style.backgroundColor = "#865d86";
	document.getElementById("divClr1").style.backgroundColor = "#865d86";
	document.getElementById("divClr2").style.backgroundColor = "#865d86";
	document.getElementById("divClr3").style.backgroundColor = "#865d86";
	document.getElementById("divClr4").style.backgroundColor = "#865d86";
	document.getElementById("divClr5").style.backgroundColor ="#865d86";
	
    }
    else if(couleur2=='Ral 4002 - Violet rouge'){
	document.getElementById("Divclr").style.backgroundColor = "#8f3f51";
	document.getElementById("divClr1").style.backgroundColor = "#8f3f51";
	document.getElementById("divClr2").style.backgroundColor = "#8f3f51";
	document.getElementById("divClr3").style.backgroundColor = "#8f3f51";
	document.getElementById("divClr4").style.backgroundColor = "#8f3f51";
	document.getElementById("divClr5").style.backgroundColor ="#8f3f51";
	
    }else if(couleur2=='Ral 4003 - Violet bruyère'){
	document.getElementById("Divclr").style.backgroundColor = "#ca5b91";
	document.getElementById("divClr1").style.backgroundColor = "#ca5b91";
	document.getElementById("divClr2").style.backgroundColor = "#ca5b91";
	document.getElementById("divClr3").style.backgroundColor = "#ca5b91";
	document.getElementById("divClr4").style.backgroundColor = "#ca5b91";
	document.getElementById("divClr5").style.backgroundColor ="#ca5b91";
	
    }else if(couleur2=='Ral 4004 - Violet bordeaux'){
	document.getElementById("Divclr").style.backgroundColor = "#69193b";
	document.getElementById("divClr1").style.backgroundColor = "#69193b";
	document.getElementById("divClr2").style.backgroundColor = "#69193b";
	document.getElementById("divClr3").style.backgroundColor = "#69193b";
	document.getElementById("divClr4").style.backgroundColor = "#69193b";
	document.getElementById("divClr5").style.backgroundColor ="#69193b";
	
    }else if(couleur2=='Ral 4005 - Lilas bleu'){
	document.getElementById("Divclr").style.backgroundColor = "#7e63a1";
	document.getElementById("divClr1").style.backgroundColor = "#7e63a1";
	document.getElementById("divClr2").style.backgroundColor = "#7e63a1";
	document.getElementById("divClr3").style.backgroundColor = "#7e63a1";
	document.getElementById("divClr4").style.backgroundColor = "#7e63a1";
	document.getElementById("divClr5").style.backgroundColor ="#7e63a1";
	
    }
    else if(couleur2=='Ral 4006 - Pourpre trafic'){
	document.getElementById("Divclr").style.backgroundColor = "#912d76";
	document.getElementById("divClr1").style.backgroundColor = "#912d76";
	document.getElementById("divClr2").style.backgroundColor = "#912d76";
	document.getElementById("divClr3").style.backgroundColor = "#912d76";
	document.getElementById("divClr4").style.backgroundColor = "#912d76";
	document.getElementById("divClr5").style.backgroundColor ="#912d76";
	
    }else if(couleur2=='Ral 4007 - Violet pourpre'){
	document.getElementById("Divclr").style.backgroundColor = "#48233e";
	document.getElementById("divClr1").style.backgroundColor = "#48233e";
	document.getElementById("divClr2").style.backgroundColor = "#48233e";
	document.getElementById("divClr3").style.backgroundColor = "#48233e";
	document.getElementById("divClr4").style.backgroundColor = "#48233e";
	document.getElementById("divClr5").style.backgroundColor ="#48233e";
	
    }else if(couleur2=='Ral 4008 - Violet de sécurité'){
	document.getElementById("Divclr").style.backgroundColor = "#853d7d";
	document.getElementById("divClr1").style.backgroundColor = "#853d7d";
	document.getElementById("divClr2").style.backgroundColor = "#853d7d";
	document.getElementById("divClr3").style.backgroundColor = "#853d7d";
	document.getElementById("divClr4").style.backgroundColor = "#853d7d";
	document.getElementById("divClr5").style.backgroundColor ="#853d7d";
	
    }else if(couleur2=='Ral 4009 - Violet pastel'){
	document.getElementById("divClr").style.backgroundColor = "#9d8493";
	document.getElementById("divClr1").style.backgroundColor = "#9d8493";
	document.getElementById("divClr2").style.backgroundColor = "#9d8493";
	document.getElementById("divClr3").style.backgroundColor = "#9d8493";
	document.getElementById("divClr4").style.backgroundColor = "#9d8493";
	document.getElementById("divClr5").style.backgroundColor ="#9d8493";
	
    }else if(couleur2=='Ral 5000 - Bleu violet'){
	document.getElementById("Divclr").style.backgroundColor = "#2f4a71";
	document.getElementById("divClr1").style.backgroundColor = "#2f4a71";
	document.getElementById("divClr2").style.backgroundColor = "#2f4a71";
	document.getElementById("divClr3").style.backgroundColor = "#2f4a71";
	document.getElementById("divClr4").style.backgroundColor = "#2f4a71";
	document.getElementById("divClr5").style.backgroundColor ="#2f4a71";
	
    }else if(couleur2=='Ral 5001 - Bleu vert'){
	document.getElementById("Divclr").style.backgroundColor = "#0e4666";
	document.getElementById("divClr1").style.backgroundColor = "#0e4666";
	document.getElementById("divClr2").style.backgroundColor = "#0e4666";
	document.getElementById("divClr3").style.backgroundColor = "#0e4666";
	document.getElementById("divClr4").style.backgroundColor = "#0e4666";
	document.getElementById("divClr5").style.backgroundColor ="#0e4666";
	
    }else if(couleur2=='Ral 5002 - Bleu outremer'){
	document.getElementById("Divclr").style.backgroundColor = "#162e7b";
	document.getElementById("divClr1").style.backgroundColor = "#162e7b";
	document.getElementById("divClr2").style.backgroundColor = "#162e7b";
	document.getElementById("divClr3").style.backgroundColor = "#162e7b";
	document.getElementById("divClr4").style.backgroundColor = "#162e7b";
	document.getElementById("divClr5").style.backgroundColor ="#162e7b";
	
    }else if(couleur2=='Ral 5003 - Bleu saphir'){
	document.getElementById("Divclr").style.backgroundColor = "#193058";
	document.getElementById("divClr1").style.backgroundColor = "#193058";
	document.getElementById("divClr2").style.backgroundColor = "#193058";
	document.getElementById("divClr3").style.backgroundColor = "#193058";
	document.getElementById("divClr4").style.backgroundColor = "#193058";
	document.getElementById("divClr5").style.backgroundColor ="#193058";
	
    }else if(couleur2=='Ral 5004 - Bleu noir'){
	document.getElementById("Divclr").style.backgroundColor = "#1a1d2a";
	document.getElementById("divClr1").style.backgroundColor = "#1a1d2a";
	document.getElementById("divClr2").style.backgroundColor = "#1a1d2a";
	document.getElementById("divClr3").style.backgroundColor = "#1a1d2a";
	document.getElementById("divClr4").style.backgroundColor = "#1a1d2a";
	document.getElementById("divClr5").style.backgroundColor ="#1a1d2a";
	
    }else if(couleur2=='Ral 5005 - Bleu de sécurité'){
	document.getElementById("Divclr").style.backgroundColor = "#004389";
	document.getElementById("divClr1").style.backgroundColor = "#004389";
	document.getElementById("divClr2").style.backgroundColor = "#004389";
	document.getElementById("divClr3").style.backgroundColor = "#004389";
	document.getElementById("divClr4").style.backgroundColor = "#004389";
	document.getElementById("divClr5").style.backgroundColor ="#004389";
	
    }else if(couleur2=='Ral 5007 - Bleu brillant'){
	document.getElementById("Divclr").style.backgroundColor = "#38618c";
	document.getElementById("divClr1").style.backgroundColor = "#38618c";
	document.getElementById("divClr2").style.backgroundColor = "#38618c";
	document.getElementById("divClr3").style.backgroundColor = "#38618c";
	document.getElementById("divClr4").style.backgroundColor = "#38618c";
	document.getElementById("divClr5").style.backgroundColor ="#38618c";
	
    }else if(couleur2=='Ral 5008 - Bleu gris'){
	document.getElementById("Divclr").style.backgroundColor = "#2d3944";
	document.getElementById("divClr1").style.backgroundColor = "#2d3944";
	document.getElementById("divClr2").style.backgroundColor = "#2d3944";
	document.getElementById("divClr3").style.backgroundColor = "#2d3944";
	document.getElementById("divClr4").style.backgroundColor = "#2d3944";
	document.getElementById("divClr5").style.backgroundColor ="#2d3944";
	
    }else if(couleur2=='Ral 5009 - Bleu azur'){
	document.getElementById("Divclr").style.backgroundColor = "#245878";
	document.getElementById("divClr1").style.backgroundColor = "#245878";
	document.getElementById("divClr2").style.backgroundColor = "#245878";
	document.getElementById("divClr3").style.backgroundColor = "#245878";
	document.getElementById("divClr4").style.backgroundColor = "#245878";
	document.getElementById("divClr5").style.backgroundColor ="#245878";
	
    }else if(couleur2=='Ral 5010 - Bleu gentiane'){
	document.getElementById("Divclr").style.backgroundColor = "#00427f";
	document.getElementById("divClr1").style.backgroundColor = "#00427f";
	document.getElementById("divClr2").style.backgroundColor = "#00427f";
	document.getElementById("divClr3").style.backgroundColor = "#00427f";
	document.getElementById("divClr4").style.backgroundColor = "#00427f";
	document.getElementById("divClr5").style.backgroundColor ="#00427f";
	
    }else if(couleur2=='Ral 5011 - Bleu acier'){
	document.getElementById("Divclr").style.backgroundColor = "#1a2740";
	document.getElementById("divClr1").style.backgroundColor = "#1a2740";
	document.getElementById("divClr2").style.backgroundColor = "#1a2740";
	document.getElementById("divClr3").style.backgroundColor = "#1a2740";
	document.getElementById("divClr4").style.backgroundColor = "#1a2740";
	document.getElementById("divClr5").style.backgroundColor ="#1a2740";
	
    }else if(couleur2=='Ral 5012 - Bleu clair'){
	document.getElementById("Divclr").style.backgroundColor = "#2781bb";
	document.getElementById("divClr1").style.backgroundColor = "#2781bb";
	document.getElementById("divClr2").style.backgroundColor = "#2781bb";
	document.getElementById("divClr3").style.backgroundColor = "#2781bb";
	document.getElementById("divClr4").style.backgroundColor = "#2781bb";
	document.getElementById("divClr5").style.backgroundColor ="#2781bb";
	
    }else if(couleur2=='Ral 5013 - Bleu cobalt'){
	document.getElementById("Divclr").style.backgroundColor = "#2781bb";
	document.getElementById("divClr1").style.backgroundColor = "#2781bb";
	document.getElementById("divClr2").style.backgroundColor = "#2781bb";
	document.getElementById("divClr3").style.backgroundColor = "#2781bb";
	document.getElementById("divClr4").style.backgroundColor = "#2781bb";
	document.getElementById("divClr5").style.backgroundColor ="#2781bb";
	
    }else if(couleur2=='Ral 5014 - Bleu pigeon'){
	document.getElementById("Divclr").style.backgroundColor = "#667b9a";
	document.getElementById("divClr1").style.backgroundColor = "#667b9a";
	document.getElementById("divClr2").style.backgroundColor = "#667b9a";
	document.getElementById("divClr3").style.backgroundColor = "#667b9a";
	document.getElementById("divClr4").style.backgroundColor = "#667b9a";
	document.getElementById("divClr5").style.backgroundColor ="#667b9a";
	
    }else if(couleur2=='Ral 5015 - Bleu ciel'){
	document.getElementById("Divclr").style.backgroundColor = "#0071b5";
	document.getElementById("divClr1").style.backgroundColor = "#0071b5";
	document.getElementById("divClr2").style.backgroundColor = "#0071b5";
	document.getElementById("divClr3").style.backgroundColor = "#0071b5";
	document.getElementById("divClr4").style.backgroundColor = "#0071b5";
	document.getElementById("divClr5").style.backgroundColor ="#0071b5";
	
    }else if(couleur2=='Ral 5017 - Ral 501'){
	document.getElementById("Divclr").style.backgroundColor = "#004c91";
	document.getElementById("divClr1").style.backgroundColor = "#004c91";
	document.getElementById("divClr2").style.backgroundColor = "#004c91";
	document.getElementById("divClr3").style.backgroundColor = "#004c91";
	document.getElementById("divClr4").style.backgroundColor = "#004c91";
	document.getElementById("divClr5").style.backgroundColor ="#004c91";
	
    }else if(couleur2=='Ral 5018 - Bleu turquoise'){
	document.getElementById("Divclr").style.backgroundColor = "#138992";
	document.getElementById("divClr1").style.backgroundColor = "#138992";
	document.getElementById("divClr2").style.backgroundColor = "#138992";
	document.getElementById("divClr3").style.backgroundColor = "#138992";
	document.getElementById("divClr4").style.backgroundColor = "#138992";
	document.getElementById("divClr5").style.backgroundColor ="#138992";
	
    }else if(couleur2=='Ral 5019 - Bleu capri'){
	document.getElementById("Divclr").style.backgroundColor = "#005688";
	document.getElementById("divClr1").style.backgroundColor = "#005688";
	document.getElementById("divClr2").style.backgroundColor = "#005688";
	document.getElementById("divClr3").style.backgroundColor = "#005688";
	document.getElementById("divClr4").style.backgroundColor = "#005688";
	document.getElementById("divClr5").style.backgroundColor ="#005688";
	
    }else if(couleur2=='Ral 5020 - Bleu océan'){
	document.getElementById("Divclr").style.backgroundColor = "#00747d";
	document.getElementById("divClr1").style.backgroundColor = "#00747d";
	document.getElementById("divClr2").style.backgroundColor = "#00747d";
	document.getElementById("divClr3").style.backgroundColor = "#00747d";
	document.getElementById("divClr4").style.backgroundColor = "#00747d";
	document.getElementById("divClr5").style.backgroundColor ="#00747d";
	
    }else if(couleur2=='Ral 5021 - Bleu eau'){
	document.getElementById("Divclr").style.backgroundColor = "#00747d";
	document.getElementById("divClr1").style.backgroundColor = "#00747d";
	document.getElementById("divClr2").style.backgroundColor = "#00747d";
	document.getElementById("divClr3").style.backgroundColor = "#00747d";
	document.getElementById("divClr4").style.backgroundColor = "#00747d";
	document.getElementById("divClr5").style.backgroundColor ="#00747d";
	
    }else if(couleur2=='Ral 5022 - Bleu nocturne'){
	document.getElementById("Divclr").style.backgroundColor = "#28275a";
	document.getElementById("divClr1").style.backgroundColor = "#28275a";
	document.getElementById("divClr2").style.backgroundColor = "#28275a";
	document.getElementById("divClr3").style.backgroundColor = "#28275a";
	document.getElementById("divClr4").style.backgroundColor = "#28275a";
	document.getElementById("divClr5").style.backgroundColor ="#28275a";
	
    }
    else if(couleur2=='Ral 5023 - Bleu distant'){
	document.getElementById("Divclr").style.backgroundColor = "#486591";
	document.getElementById("divClr1").style.backgroundColor = "#486591";
	document.getElementById("divClr2").style.backgroundColor = "#486591";
	document.getElementById("divClr3").style.backgroundColor = "#486591";
	document.getElementById("divClr4").style.backgroundColor = "#486591";
	document.getElementById("divClr5").style.backgroundColor ="#486591";
	
    }else if(couleur2=='Ral 5024 - Bleu pastel'){
	document.getElementById("Divclr").style.backgroundColor = "#6391b0";
	document.getElementById("divClr1").style.backgroundColor = "#6391b0";
	document.getElementById("divClr2").style.backgroundColor = "#6391b0";
	document.getElementById("divClr3").style.backgroundColor = "#6391b0";
	document.getElementById("divClr4").style.backgroundColor = "#6391b0";
	document.getElementById("divClr5").style.backgroundColor ="#6391b0";
	
    }else if(couleur2=='Ral 6000 - Vert platine'){
	document.getElementById("Divclr").style.backgroundColor = "#327663";
	document.getElementById("divClr1").style.backgroundColor = "#327663";
	document.getElementById("divClr2").style.backgroundColor = "#327663";
	document.getElementById("divClr3").style.backgroundColor = "#327663";
	document.getElementById("divClr4").style.backgroundColor = "#327663";
	document.getElementById("divClr5").style.backgroundColor ="#327663";
	
    }else if(couleur2=='Ral 6001 - Vert émeraude'){
	document.getElementById("Divclr").style.backgroundColor = "#266d3b";
	document.getElementById("divClr1").style.backgroundColor = "#266d3b";
	document.getElementById("divClr2").style.backgroundColor = "#266d3b";
	document.getElementById("divClr3").style.backgroundColor = "#266d3b";
	document.getElementById("divClr4").style.backgroundColor = "#266d3b";
	document.getElementById("divClr5").style.backgroundColor ="#266d3b";
	
    }else if(couleur2=='Ral 6002 - Vert feuillage'){
	document.getElementById("Divclr").style.backgroundColor = "#276230";
	document.getElementById("divClr1").style.backgroundColor = "#276230";
	document.getElementById("divClr2").style.backgroundColor = "#276230";
	document.getElementById("divClr3").style.backgroundColor = "#276230";
	document.getElementById("divClr4").style.backgroundColor = "#276230";
	document.getElementById("divClr5").style.backgroundColor ="#276230";
	
    }else if(couleur2=='Ral 6003 - Vert olive'){
	document.getElementById("Divclr").style.backgroundColor = "#4e553d";
	document.getElementById("divClr1").style.backgroundColor = "#4e553d";
	document.getElementById("divClr2").style.backgroundColor = "#4e553d";
	document.getElementById("divClr3").style.backgroundColor = "#4e553d";
	document.getElementById("divClr4").style.backgroundColor = "#4e553d";
	document.getElementById("divClr5").style.backgroundColor ="#4e553d";
	
    }else if(couleur2=='Ral 6004 - Vert bleu'){
	document.getElementById("Divclr").style.backgroundColor = "#004547";
	document.getElementById("divClr1").style.backgroundColor = "#004547";
	document.getElementById("divClr2").style.backgroundColor = "#004547";
	document.getElementById("divClr3").style.backgroundColor = "#004547";
	document.getElementById("divClr4").style.backgroundColor = "#004547";
	document.getElementById("divClr5").style.backgroundColor ="#004547";
	
    }else if(couleur2=='Ral 6005 - Vert mousse'){
	document.getElementById("Divclr").style.backgroundColor = "#0e4438";
	document.getElementById("divClr1").style.backgroundColor = "#0e4438";
	document.getElementById("divClr2").style.backgroundColor = "#0e4438";
	document.getElementById("divClr3").style.backgroundColor = "#0e4438";
	document.getElementById("divClr4").style.backgroundColor = "#0e4438";
	document.getElementById("divClr5").style.backgroundColor ="#0e4438";
	
    }else if(couleur2=='Ral 6006 - Olive gris'){
	document.getElementById("Divclr").style.backgroundColor = "#3b3d33";
	document.getElementById("divClr1").style.backgroundColor = "#3b3d33";
	document.getElementById("divClr2").style.backgroundColor = "#3b3d33";
	document.getElementById("divClr3").style.backgroundColor = "#3b3d33";
	document.getElementById("divClr4").style.backgroundColor = "#3b3d33";
	document.getElementById("divClr5").style.backgroundColor ="#3b3d33";
	
    }else if(couleur2=='Ral 6007 - Vert bouteille'){
	document.getElementById("Divclr").style.backgroundColor = "#2b3626";
	document.getElementById("divClr1").style.backgroundColor = "#2b3626";
	document.getElementById("divClr2").style.backgroundColor = "#2b3626";
	document.getElementById("divClr3").style.backgroundColor = "#2b3626";
	document.getElementById("divClr4").style.backgroundColor = "#2b3626";
	document.getElementById("divClr5").style.backgroundColor ="#2b3626";
	
    }else if(couleur2=='Ral 6008 - Vert brun'){
	document.getElementById("Divclr").style.backgroundColor = "#302f22";
	document.getElementById("divClr1").style.backgroundColor = "#302f22";
	document.getElementById("divClr2").style.backgroundColor = "#302f22";
	document.getElementById("divClr3").style.backgroundColor = "#302f22";
	document.getElementById("divClr4").style.backgroundColor = "#302f22";
	document.getElementById("divClr5").style.backgroundColor ="#302f22";
	
    }else if(couleur2=='Ral 6009 - Vert sapin'){
	document.getElementById("Divclr").style.backgroundColor = "#213529";
	document.getElementById("divClr1").style.backgroundColor = "#213529";
	document.getElementById("divClr2").style.backgroundColor = "#213529";
	document.getElementById("divClr3").style.backgroundColor = "#213529";
	document.getElementById("divClr4").style.backgroundColor = "#213529";
	document.getElementById("divClr5").style.backgroundColor ="#213529";
	
    }else if(couleur2=='Ral 6009 - Vert sapin'){
	document.getElementById("Divclr").style.backgroundColor = "#426e38";
	document.getElementById("divClr1").style.backgroundColor = "#426e38";
	document.getElementById("divClr2").style.backgroundColor = "#426e38";
	document.getElementById("divClr3").style.backgroundColor = "#426e38";
	document.getElementById("divClr4").style.backgroundColor = "#426e38";
	document.getElementById("divClr5").style.backgroundColor ="#426e38";
	
    }else if(couleur2=='Ral 6010 - Vert herbe'){
	document.getElementById("Divclr").style.backgroundColor = "#426e38";
	document.getElementById("divClr1").style.backgroundColor = "#426e38";
	document.getElementById("divClr2").style.backgroundColor = "#426e38";
	document.getElementById("divClr3").style.backgroundColor = "#426e38";
	document.getElementById("divClr4").style.backgroundColor = "#426e38";
	document.getElementById("divClr5").style.backgroundColor ="#426e38";
	
    }
    else if(couleur2=='Ral 6011 - Vert réséda'){
	document.getElementById("Divclr").style.backgroundColor = "#68825f";
	document.getElementById("divClr1").style.backgroundColor = "#68825f";
	document.getElementById("divClr2").style.backgroundColor = "#68825f";
	document.getElementById("divClr3").style.backgroundColor = "#68825f";
	document.getElementById("divClr4").style.backgroundColor = "#68825f";
	document.getElementById("divClr5").style.backgroundColor ="#68825f";
	
    }else if(couleur2=='Ral 6012 - Vert noir'){
	document.getElementById("Divclr").style.backgroundColor = "#293a37";
	document.getElementById("divClr1").style.backgroundColor = "#293a37";
	document.getElementById("divClr2").style.backgroundColor = "#293a37";
	document.getElementById("divClr3").style.backgroundColor = "#293a37";
	document.getElementById("divClr4").style.backgroundColor = "#293a37";
	document.getElementById("divClr5").style.backgroundColor ="#293a37";
	
    }else if(couleur2=='Ral 6013 - Vert jonc'){
	document.getElementById("Divclr").style.backgroundColor = "#76785b";
	document.getElementById("divClr1").style.backgroundColor = "#76785b";
	document.getElementById("divClr2").style.backgroundColor = "#76785b";
	document.getElementById("divClr3").style.backgroundColor = "#76785b";
	document.getElementById("divClr4").style.backgroundColor = "#76785b";
	document.getElementById("divClr5").style.backgroundColor ="#76785b";
	
    }else if(couleur2=='Ral 6014 - Olive jaune'){
	document.getElementById("Divclr").style.backgroundColor = "#443f31";
	document.getElementById("divClr1").style.backgroundColor = "#443f31";
	document.getElementById("divClr2").style.backgroundColor = "#443f31";
	document.getElementById("divClr3").style.backgroundColor = "#443f31";
	document.getElementById("divClr4").style.backgroundColor = "#443f31";
	document.getElementById("divClr5").style.backgroundColor ="#443f31";
	
    }else if(couleur2=='Ral 6015 - Olive noir'){
	document.getElementById("Divclr").style.backgroundColor = "#383b34";
	document.getElementById("divClr1").style.backgroundColor = "#383b34";
	document.getElementById("divClr2").style.backgroundColor = "#383b34";
	document.getElementById("divClr3").style.backgroundColor = "#383b34";
	document.getElementById("divClr4").style.backgroundColor = "#383b34";
	document.getElementById("divClr5").style.backgroundColor ="#383b34";
	
    }else if(couleur2=='Ral 6016 - Vert turquoise'){
	document.getElementById("Divclr").style.backgroundColor = "#00664f";
	document.getElementById("divClr1").style.backgroundColor = "#00664f";
	document.getElementById("divClr2").style.backgroundColor = "#00664f";
	document.getElementById("divClr3").style.backgroundColor = "#00664f";
	document.getElementById("divClr4").style.backgroundColor = "#00664f";
	document.getElementById("divClr5").style.backgroundColor ="#00664f";
	
    }else if(couleur2=='Ral 6017 - Vert mai'){
	document.getElementById("Divclr").style.backgroundColor = "#4d8542";
	document.getElementById("divClr1").style.backgroundColor = "#4d8542";
	document.getElementById("divClr2").style.backgroundColor = "#4d8542";
	document.getElementById("divClr3").style.backgroundColor = "#4d8542";
	document.getElementById("divClr4").style.backgroundColor = "#4d8542";
	document.getElementById("divClr5").style.backgroundColor ="#4d8542";
	
    }else if(couleur2=='Ral 6018 - Vert jaune'){
	document.getElementById("Divclr").style.backgroundColor = "#4b9b3e";
	document.getElementById("divClr1").style.backgroundColor = "#4b9b3e";
	document.getElementById("divClr2").style.backgroundColor = "#4b9b3e";
	document.getElementById("divClr3").style.backgroundColor = "#4b9b3e";
	document.getElementById("divClr4").style.backgroundColor = "#4b9b3e";
	document.getElementById("divClr5").style.backgroundColor ="#4b9b3e";
	
    }else if(couleur2=='Ral 6019 - Vert blanc'){
	document.getElementById("Divclr").style.backgroundColor = "#b2d8b4";
	document.getElementById("divClr1").style.backgroundColor = "#b2d8b4";
	document.getElementById("divClr2").style.backgroundColor = "#b2d8b4";
	document.getElementById("divClr3").style.backgroundColor = "#b2d8b4";
	document.getElementById("divClr4").style.backgroundColor = "#b2d8b4";
	document.getElementById("divClr5").style.backgroundColor ="#b2d8b4";
	
    }else if(couleur2=='Ral 6020 - Oxyde chromique'){
	document.getElementById("Divclr").style.backgroundColor = "#394937";
	document.getElementById("divClr1").style.backgroundColor = "#394937";
	document.getElementById("divClr2").style.backgroundColor = "#394937";
	document.getElementById("divClr3").style.backgroundColor = "#394937";
	document.getElementById("divClr4").style.backgroundColor = "#394937";
	document.getElementById("divClr5").style.backgroundColor ="#394937";
	
    }else if(couleur2=='Ral 6021 - Vert pâle'){
	document.getElementById("Divclr").style.backgroundColor = "#87a180";
	document.getElementById("divClr1").style.backgroundColor = "#87a180";
	document.getElementById("divClr2").style.backgroundColor = "#87a180";
	document.getElementById("divClr3").style.backgroundColor = "#87a180";
	document.getElementById("divClr4").style.backgroundColor = "#87a180";
	document.getElementById("divClr5").style.backgroundColor ="#87a180";
	
    }else if(couleur2=='Ral 6022 - Olive brun'){
	document.getElementById("Divclr").style.backgroundColor = "#3c372a";
	document.getElementById("divClr1").style.backgroundColor = "#3c372a";
	document.getElementById("divClr2").style.backgroundColor = "#3c372a";
	document.getElementById("divClr3").style.backgroundColor = "#3c372a";
	document.getElementById("divClr4").style.backgroundColor = "#3c372a";
	document.getElementById("divClr5").style.backgroundColor ="#3c372a";
	
    }else if(couleur2=='Ral 6024 - Vert trafic'){
	document.getElementById("Divclr").style.backgroundColor = "#008455";
	document.getElementById("divClr1").style.backgroundColor = "#008455";
	document.getElementById("divClr2").style.backgroundColor = "#008455";
	document.getElementById("divClr3").style.backgroundColor = "#008455";
	document.getElementById("divClr4").style.backgroundColor = "#008455";
	document.getElementById("divClr5").style.backgroundColor ="#008455";
	
    }else if(couleur2=='Ral 6025 - Vert fougère'){
	document.getElementById("Divclr").style.backgroundColor = "#56723d";
	document.getElementById("divClr1").style.backgroundColor = "#56723d";
	document.getElementById("divClr2").style.backgroundColor = "#56723d";
	document.getElementById("divClr3").style.backgroundColor = "#56723d";
	document.getElementById("divClr4").style.backgroundColor = "#56723d";
	document.getElementById("divClr5").style.backgroundColor ="#56723d";
	
    }else if(couleur2=='Ral 6026 - Vert opale'){
	document.getElementById("Divclr").style.backgroundColor = "#005c54";
	document.getElementById("divClr1").style.backgroundColor = "#005c54";
	document.getElementById("divClr2").style.backgroundColor = "#005c54";
	document.getElementById("divClr3").style.backgroundColor = "#005c54";
	document.getElementById("divClr4").style.backgroundColor = "#005c54";
	document.getElementById("divClr5").style.backgroundColor ="#005c54";
	
    }else if(couleur2=='Ral 6027 - Vert clair'){
	document.getElementById("Divclr").style.backgroundColor = "#77bbbd";
	document.getElementById("divClr1").style.backgroundColor = "#77bbbd";
	document.getElementById("divClr2").style.backgroundColor = "#77bbbd";
	document.getElementById("divClr3").style.backgroundColor = "#77bbbd";
	document.getElementById("divClr4").style.backgroundColor = "#77bbbd";
	document.getElementById("divClr5").style.backgroundColor ="#77bbbd";
	
    }else if(couleur2=='Ral 6028 - Vert pin'){
	document.getElementById("Divclr").style.backgroundColor = "#2e554b";
	document.getElementById("divClr1").style.backgroundColor = "#2e554b";
	document.getElementById("divClr2").style.backgroundColor = "#2e554b";
	document.getElementById("divClr3").style.backgroundColor = "#2e554b";
	document.getElementById("divClr4").style.backgroundColor = "#2e554b";
	document.getElementById("divClr5").style.backgroundColor ="#2e554b";
	
    }else if(couleur2=='Ral 6029 - Vert menthe'){
	document.getElementById("Divclr").style.backgroundColor = "#006f43";
	document.getElementById("divClr1").style.backgroundColor = "#006f43";
	document.getElementById("divClr2").style.backgroundColor = "#006f43";
	document.getElementById("divClr3").style.backgroundColor = "#006f43";
	document.getElementById("divClr4").style.backgroundColor = "#006f43";
	document.getElementById("divClr5").style.backgroundColor ="#006f43";
	
    }else if(couleur2=='Ral 6032 - Vert de sécurité'){
	document.getElementById("Divclr").style.backgroundColor = "#00855a";
	document.getElementById("divClr1").style.backgroundColor = "#00855a";
	document.getElementById("divClr2").style.backgroundColor = "#00855a";
	document.getElementById("divClr3").style.backgroundColor = "#00855a";
	document.getElementById("divClr4").style.backgroundColor = "#00855a";
	document.getElementById("divClr5").style.backgroundColor ="#00855a";
	
    }else if(couleur2=='Ral 6033 - Turquoise menthe'){
	document.getElementById("Divclr").style.backgroundColor = "#3f8884";
	document.getElementById("divClr1").style.backgroundColor = "#3f8884";
	document.getElementById("divClr2").style.backgroundColor = "#3f8884";
	document.getElementById("divClr3").style.backgroundColor = "#3f8884";
	document.getElementById("divClr4").style.backgroundColor = "#3f8884";
	document.getElementById("divClr5").style.backgroundColor ="#3f8884";
	
    }else if(couleur2=='Ral 6034 - Turquoise pastel') {
	document.getElementById("Divclr").style.backgroundColor = "#75adb1";
	document.getElementById("divClr1").style.backgroundColor = "#75adb1";
	document.getElementById("divClr2").style.backgroundColor = "#75adb1";
	document.getElementById("divClr3").style.backgroundColor = "#75adb1";
	document.getElementById("divClr4").style.backgroundColor = "#75adb1";
	document.getElementById("divClr5").style.backgroundColor = "#75adb1";
    }else if(couleur2=='Ral 7000 - Gris petit-gris') {
	document.getElementById("Divclr").style.backgroundColor = "#798790";
	document.getElementById("divClr1").style.backgroundColor = "#798790";
	document.getElementById("divClr2").style.backgroundColor = "#798790";
	document.getElementById("divClr3").style.backgroundColor = "#798790";
	document.getElementById("divClr4").style.backgroundColor = "#798790";
	document.getElementById("divClr5").style.backgroundColor = "#798790";
    }else if(couleur2=='Ral 7001 - Gris argent') {
	document.getElementById("Divclr").style.backgroundColor = "#8c969f";
	document.getElementById("divClr1").style.backgroundColor = "#8c969f";
	document.getElementById("divClr2").style.backgroundColor = "#8c969f";
	document.getElementById("divClr3").style.backgroundColor = "#8c969f";
	document.getElementById("divClr4").style.backgroundColor = "#8c969f";
	document.getElementById("divClr5").style.backgroundColor = "#8c969f";
    }else if(couleur2=='Ral 7002 - Gris olive') {
	document.getElementById("Divclr").style.backgroundColor = "#827d67";
	document.getElementById("divClr1").style.backgroundColor = "#827d67";
	document.getElementById("divClr2").style.backgroundColor = "#827d67";
	document.getElementById("divClr3").style.backgroundColor = "#827d67";
	document.getElementById("divClr4").style.backgroundColor = "#827d67";
	document.getElementById("divClr5").style.backgroundColor = "#827d67";
	
    }else if(couleur2=='Ral 7004 - Gris de sécurité') {
	document.getElementById("Divclr").style.backgroundColor = "#999a9f";
	document.getElementById("divClr1").style.backgroundColor = "#999a9f";
	document.getElementById("divClr2").style.backgroundColor = "#999a9f";
	document.getElementById("divClr3").style.backgroundColor = "#999a9f";
	document.getElementById("divClr4").style.backgroundColor = "#999a9f";
	document.getElementById("divClr5").style.backgroundColor = "#999a9f";
	
    }else if(couleur2=='Ral 7005 - Gris souris') {
	document.getElementById("Divclr").style.backgroundColor = "#6d7270";
	document.getElementById("divClr1").style.backgroundColor = "#6d7270";
	document.getElementById("divClr2").style.backgroundColor = "#6d7270";
	document.getElementById("divClr3").style.backgroundColor = "#6d7270";
	document.getElementById("divClr4").style.backgroundColor = "#6d7270";
	document.getElementById("divClr5").style.backgroundColor = "#6d7270";
    }else if(couleur2=='Ral 7006 - Gris beige') {
	document.getElementById("Divclr").style.backgroundColor = "#766a5d";
	document.getElementById("divClr1").style.backgroundColor = "#766a5d";
	document.getElementById("divClr2").style.backgroundColor = "#766a5d";
	document.getElementById("divClr3").style.backgroundColor = "#766a5d";
	document.getElementById("divClr4").style.backgroundColor = "#766a5d";
	document.getElementById("divClr5").style.backgroundColor = "#766a5d";
    }else if(couleur2=='Ral 7009 - Gris vert') {
	document.getElementById("Divclr").style.backgroundColor = "#585e55";
	document.getElementById("divClr1").style.backgroundColor = "#585e55";
	document.getElementById("divClr2").style.backgroundColor = "#585e55";
	document.getElementById("divClr3").style.backgroundColor = "#585e55";
	document.getElementById("divClr4").style.backgroundColor = "#585e55";
	document.getElementById("divClr5").style.backgroundColor = "#585e55";
    }else if(couleur2=='Ral 7010 - Gris tente') {
	document.getElementById("Divclr").style.backgroundColor = "#565957";
	document.getElementById("divClr1").style.backgroundColor = "#565957";
	document.getElementById("divClr2").style.backgroundColor = "#565957";
	document.getElementById("divClr3").style.backgroundColor = "#565957";
	document.getElementById("divClr4").style.backgroundColor = "#565957";
	document.getElementById("divClr5").style.backgroundColor = "#565957";
    }else if(couleur2=='Ral 7011 - Gris fer') {
	document.getElementById("Divclr").style.backgroundColor = "#525a60";
	document.getElementById("divClr1").style.backgroundColor = "#525a60";
	document.getElementById("divClr2").style.backgroundColor = "#525a60";
	document.getElementById("divClr3").style.backgroundColor = "#525a60";
	document.getElementById("divClr4").style.backgroundColor = "#525a60";
	document.getElementById("divClr5").style.backgroundColor = "#525a60";
    }else if(couleur2=='Ral 7012 - Gris basalte') {
	document.getElementById("Divclr").style.backgroundColor = "#575e62";
	document.getElementById("divClr1").style.backgroundColor = "#575e62";
	document.getElementById("divClr2").style.backgroundColor = "#575e62";
	document.getElementById("divClr3").style.backgroundColor = "#575e62";
	document.getElementById("divClr4").style.backgroundColor = "#575e62";
	document.getElementById("divClr5").style.backgroundColor = "#575e62";
    }else if(couleur2=='Ral 7013 - Gris brun') {
	document.getElementById("Divclr").style.backgroundColor = "#585346";
	document.getElementById("divClr1").style.backgroundColor = "#585346";
	document.getElementById("divClr2").style.backgroundColor = "#585346";
	document.getElementById("divClr3").style.backgroundColor = "#585346";
	document.getElementById("divClr4").style.backgroundColor = "#585346";
	document.getElementById("divClr5").style.backgroundColor = "#585346";
    }else if(couleur2=='Ral 7015 - Gris ardoise') {
	document.getElementById("Divclr").style.backgroundColor = "#4c5057";
	document.getElementById("divClr1").style.backgroundColor = "#4c5057";
	document.getElementById("divClr2").style.backgroundColor = "#4c5057";
	document.getElementById("divClr3").style.backgroundColor = "#4c5057";
	document.getElementById("divClr4").style.backgroundColor = "#4c5057";
	document.getElementById("divClr5").style.backgroundColor = "#4c5057";
    }else if(couleur2=='Ral 7021 - Gris noir') {
	document.getElementById("Divclr").style.backgroundColor = "#2e3236";
	document.getElementById("divClr1").style.backgroundColor = "#2e3236";
	document.getElementById("divClr2").style.backgroundColor = "#2e3236";
	document.getElementById("divClr3").style.backgroundColor = "#2e3236";
	document.getElementById("divClr4").style.backgroundColor = "#2e3236";
	document.getElementById("divClr5").style.backgroundColor = "#2e3236";
    }else if(couleur2=='Ral 7022 - Gris terre dombre') {
	document.getElementById("Divclr").style.backgroundColor = "#464644";
	document.getElementById("divClr1").style.backgroundColor = "#464644";
	document.getElementById("divClr2").style.backgroundColor = "#464644";
	document.getElementById("divClr3").style.backgroundColor = "#464644";
	document.getElementById("divClr4").style.backgroundColor = "#464644";
	document.getElementById("divClr5").style.backgroundColor = "#464644";
    }else if(couleur2=='Ral 7023 - Gris béton') {
	document.getElementById("Divclr").style.backgroundColor = "#7f8279";
	document.getElementById("divClr1").style.backgroundColor = "#7f8279";
	document.getElementById("divClr2").style.backgroundColor = "#7f8279";
	document.getElementById("divClr3").style.backgroundColor = "#7f8279";
	document.getElementById("divClr4").style.backgroundColor = "#7f8279";
	document.getElementById("divClr5").style.backgroundColor = "#7f8279";
    }else if(couleur2=='Ral 7024 - Gris graphite') {
	document.getElementById("Divclr").style.backgroundColor = "#484b52";
	document.getElementById("divClr1").style.backgroundColor = "#484b52";
	document.getElementById("divClr2").style.backgroundColor = "#484b52";
	document.getElementById("divClr3").style.backgroundColor = "#484b52";
	document.getElementById("divClr4").style.backgroundColor = "#484b52";
	document.getElementById("divClr5").style.backgroundColor = "#484b52";
    }else if(couleur2=='Ral 7026 - Gris granit') {
	document.getElementById("Divclr").style.backgroundColor = "#354044";
	document.getElementById("divClr1").style.backgroundColor = "#354044";
	document.getElementById("divClr2").style.backgroundColor = "#354044";
	document.getElementById("divClr3").style.backgroundColor = "#354044";
	document.getElementById("divClr4").style.backgroundColor = "#354044";
	document.getElementById("divClr5").style.backgroundColor = "#354044";
    }else if(couleur2=='Ral 7030 - Gris pierre') {
	document.getElementById("Divclr").style.backgroundColor = "#919089";
	document.getElementById("divClr1").style.backgroundColor = "#919089";
	document.getElementById("divClr2").style.backgroundColor = "#919089";
	document.getElementById("divClr3").style.backgroundColor = "#919089";
	document.getElementById("divClr4").style.backgroundColor = "#919089";
	document.getElementById("divClr5").style.backgroundColor = "#919089";
    }else if(couleur2=='Ral 7031 - Gris bleu') {
	document.getElementById("Divclr").style.backgroundColor = "#5b686f";
	document.getElementById("divClr1").style.backgroundColor = "#5b686f";
	document.getElementById("divClr2").style.backgroundColor = "#5b686f";
	document.getElementById("divClr3").style.backgroundColor = "#5b686f";
	document.getElementById("divClr4").style.backgroundColor = "#5b686f";
	document.getElementById("divClr5").style.backgroundColor = "#5b686f";
    }else if(couleur2=='Ral 7032 - Gris silex') {
	document.getElementById("Divclr").style.backgroundColor = "#b5b5a7";
	document.getElementById("divClr1").style.backgroundColor = "#b5b5a7";
	document.getElementById("divClr2").style.backgroundColor = "#b5b5a7";
	document.getElementById("divClr3").style.backgroundColor = "#b5b5a7";
	document.getElementById("divClr4").style.backgroundColor = "#b5b5a7";
	document.getElementById("divClr5").style.backgroundColor = "#b5b5a7";
    }else if(couleur2=='Ral 7033 - Gris ciment') {
	document.getElementById("Divclr").style.backgroundColor = "#7a8376";
	document.getElementById("divClr1").style.backgroundColor = "#7a8376";
	document.getElementById("divClr2").style.backgroundColor = "#7a8376";
	document.getElementById("divClr3").style.backgroundColor = "#7a8376";
	document.getElementById("divClr4").style.backgroundColor = "#7a8376";
	document.getElementById("divClr5").style.backgroundColor = "#7a8376";
    }else if(couleur2=='Ral 7034 - Gris jaune') {
	document.getElementById("Divclr").style.backgroundColor = "#928d75";
	document.getElementById("divClr1").style.backgroundColor = "#928d75";
	document.getElementById("divClr2").style.backgroundColor = "#928d75";
	document.getElementById("divClr3").style.backgroundColor = "#928d75";
	document.getElementById("divClr4").style.backgroundColor = "#928d75";
	document.getElementById("divClr5").style.backgroundColor = "#928d75";
    }else if(couleur2=='Ral 7036 - Gris platine') {
	document.getElementById("Divclr").style.backgroundColor = "#949294";
	document.getElementById("divClr1").style.backgroundColor = "#949294";
	document.getElementById("divClr2").style.backgroundColor = "#949294";
	document.getElementById("divClr3").style.backgroundColor = "#949294";
	document.getElementById("divClr4").style.backgroundColor = "#949294";
	document.getElementById("divClr5").style.backgroundColor = "#949294";
    }else if(couleur2=='Ral 7038 - Gris agate') {
	document.getElementById("Divclr").style.backgroundColor = "#b0b3af";
	document.getElementById("divClr1").style.backgroundColor = "#b0b3af";
	document.getElementById("divClr2").style.backgroundColor = "#b0b3af";
	document.getElementById("divClr3").style.backgroundColor = "#b0b3af";
	document.getElementById("divClr4").style.backgroundColor = "#b0b3af";
	document.getElementById("divClr5").style.backgroundColor = "#b0b3af";
    }else if(couleur2=='Ral 7039 - Gris quartz') {
	document.getElementById("Divclr").style.backgroundColor = "#6d6b64";
	document.getElementById("divClr1").style.backgroundColor = "#6d6b64";
	document.getElementById("divClr2").style.backgroundColor = "#6d6b64";
	document.getElementById("divClr3").style.backgroundColor = "#6d6b64";
	document.getElementById("divClr4").style.backgroundColor = "#6d6b64";
	document.getElementById("divClr5").style.backgroundColor = "#6d6b64";
    }else if(couleur2=='Ral 7040 - Gris fenêtre') {
	document.getElementById("Divclr").style.backgroundColor = "#9aa0a7";
	document.getElementById("divClr1").style.backgroundColor = "#9aa0a7";
	document.getElementById("divClr2").style.backgroundColor = "#9aa0a7";
	document.getElementById("divClr3").style.backgroundColor = "#9aa0a7";
	document.getElementById("divClr4").style.backgroundColor = "#9aa0a7";
	document.getElementById("divClr5").style.backgroundColor = "#9aa0a7";
	
	
    }else if(couleur2=='Ral 7042 - Gris trafic A') {
	document.getElementById("Divclr").style.backgroundColor = "#929899";
	document.getElementById("divClr1").style.backgroundColor = "#929899";
	document.getElementById("divClr2").style.backgroundColor = "#929899";
	document.getElementById("divClr3").style.backgroundColor = "#929899";
	document.getElementById("divClr4").style.backgroundColor = "#929899";
	document.getElementById("divClr5").style.backgroundColor = "#929899";
    }else if(couleur2=='Ral 7043 - Gris trafic B') {
	document.getElementById("Divclr").style.backgroundColor = "#505455";
	document.getElementById("divClr1").style.backgroundColor = "#505455";
	document.getElementById("divClr2").style.backgroundColor = "#505455";
	document.getElementById("divClr3").style.backgroundColor = "#505455";
	document.getElementById("divClr4").style.backgroundColor = "#505455";
	document.getElementById("divClr5").style.backgroundColor = "#505455";
    }else if(couleur2=='Ral 7044 - Gris soie') {
	document.getElementById("Divclr").style.backgroundColor = "#bab9b0";
	document.getElementById("divClr1").style.backgroundColor = "#bab9b0";
	document.getElementById("divClr2").style.backgroundColor = "#bab9b0";
	document.getElementById("divClr3").style.backgroundColor = "#bab9b0";
	document.getElementById("divClr4").style.backgroundColor = "#bab9b0";
	document.getElementById("divClr5").style.backgroundColor = "#bab9b0";
    }else if(couleur2=='Ral 7045 - Télé gris 1') {
	document.getElementById("Divclr").style.backgroundColor = "#909090";
	document.getElementById("divClr1").style.backgroundColor = "#909090";
	document.getElementById("divClr2").style.backgroundColor = "#909090";
	document.getElementById("divClr3").style.backgroundColor = "#909090";
	document.getElementById("divClr4").style.backgroundColor = "#909090";
	document.getElementById("divClr5").style.backgroundColor = "#909090";
    }else if(couleur2=='Ral 7046 - Télé gris 2') {
	document.getElementById("Divclr").style.backgroundColor = "#82898f";
	document.getElementById("divClr1").style.backgroundColor = "#82898f";
	document.getElementById("divClr2").style.backgroundColor = "#82898f";
	document.getElementById("divClr3").style.backgroundColor = "#82898f";
	document.getElementById("divClr4").style.backgroundColor = "#82898f";
	document.getElementById("divClr5").style.backgroundColor = "#82898f";
    }else if(couleur2=='Ral 7047 - Télé gris 4') {
	document.getElementById("Divclr").style.backgroundColor = "#d0d0d0";
	document.getElementById("divClr1").style.backgroundColor = "#d0d0d0";
	document.getElementById("divClr2").style.backgroundColor = "#d0d0d0";
	document.getElementById("divClr3").style.backgroundColor = "#d0d0d0";
	document.getElementById("divClr4").style.backgroundColor = "#d0d0d0";
	document.getElementById("divClr5").style.backgroundColor = "#d0d0d0";
    }else if(couleur2=='Ral 7048 - Gris souris nacré') {
	document.getElementById("Divclr").style.backgroundColor = "#898176";
	document.getElementById("divClr1").style.backgroundColor = "#898176";
	document.getElementById("divClr2").style.backgroundColor = "#898176";
	document.getElementById("divClr3").style.backgroundColor = "#898176";
	document.getElementById("divClr4").style.backgroundColor = "#898176";
	document.getElementById("divClr5").style.backgroundColor = "#898176";
    }else if(couleur2=='Ral 8000 - Brun vert') {
	document.getElementById("Divclr").style.backgroundColor = "#8b7045";
	document.getElementById("divClr1").style.backgroundColor = "#8b7045";
	document.getElementById("divClr2").style.backgroundColor = "#8b7045";
	document.getElementById("divClr3").style.backgroundColor = "#8b7045";
	document.getElementById("divClr4").style.backgroundColor = "#8b7045";
	document.getElementById("divClr5").style.backgroundColor = "#8b7045";
    }else if(couleur2=='Ral 8001 - Terre de Sienne') {
	document.getElementById("Divclr").style.backgroundColor = "#9c6935";
	document.getElementById("divClr1").style.backgroundColor = "#9c6935";
	document.getElementById("divClr2").style.backgroundColor = "#9c6935";
	document.getElementById("divClr3").style.backgroundColor = "#9c6935";
	document.getElementById("divClr4").style.backgroundColor = "#9c6935";
	document.getElementById("divClr5").style.backgroundColor = "#9c6935";
    }else if(couleur2=='Ral 8002 - Brun de sécurité') {
	document.getElementById("Divclr").style.backgroundColor = "#774c3b";
	document.getElementById("divClr1").style.backgroundColor = "#774c3b";
	document.getElementById("divClr2").style.backgroundColor = "#774c3b";
	document.getElementById("divClr3").style.backgroundColor = "#774c3b";
	document.getElementById("divClr4").style.backgroundColor = "#774c3b";
	document.getElementById("divClr5").style.backgroundColor = "#774c3b";
    }else if(couleur2=='Ral 8003 - Brun argile') {
	document.getElementById("Divclr").style.backgroundColor = "#815333";
	document.getElementById("divClr1").style.backgroundColor = "#815333";
	document.getElementById("divClr2").style.backgroundColor = "#815333";
	document.getElementById("divClr3").style.backgroundColor = "#815333";
	document.getElementById("divClr4").style.backgroundColor = "#815333";
	document.getElementById("divClr5").style.backgroundColor = "#815333";
    }else if(couleur2=='Ral 8003 - Brun argile') {
	document.getElementById("Divclr").style.backgroundColor = "#904e3b";
	document.getElementById("divClr1").style.backgroundColor = "#904e3b";
	document.getElementById("divClr2").style.backgroundColor = "#904e3b";
	document.getElementById("divClr3").style.backgroundColor = "#904e3b";
	document.getElementById("divClr4").style.backgroundColor = "#904e3b";
	document.getElementById("divClr5").style.backgroundColor = "#904e3b";
    }else if(couleur2=='Ral 8007 - Brun fauve') {
	document.getElementById("Divclr").style.backgroundColor = "#6b442a";
	document.getElementById("divClr1").style.backgroundColor = "#6b442a";
	document.getElementById("divClr2").style.backgroundColor = "#6b442a";
	document.getElementById("divClr3").style.backgroundColor = "#6b442a";
	document.getElementById("divClr4").style.backgroundColor = "#6b442a";
	document.getElementById("divClr5").style.backgroundColor = "#6b442a";
    }else if(couleur2=='Ral 8008 - Brun olive') {
	document.getElementById("Divclr").style.backgroundColor = "#735230";
	document.getElementById("divClr1").style.backgroundColor = "#735230";
	document.getElementById("divClr2").style.backgroundColor = "#735230";
	document.getElementById("divClr3").style.backgroundColor = "#735230";
	document.getElementById("divClr4").style.backgroundColor = "#735230";
	document.getElementById("divClr5").style.backgroundColor = "#735230";
    }else if(couleur2=='Ral 8011 - Brun noisette') {
	document.getElementById("Divclr").style.backgroundColor = "#5b3927";
	document.getElementById("divClr1").style.backgroundColor = "#5b3927";
	document.getElementById("divClr2").style.backgroundColor = "#5b3927";
	document.getElementById("divClr3").style.backgroundColor = "#5b3927";
	document.getElementById("divClr4").style.backgroundColor = "#5b3927";
	document.getElementById("divClr5").style.backgroundColor = "#5b3927";
    }else if(couleur2=='Ral 8012 - Brun rouge') {
	document.getElementById("Divclr").style.backgroundColor = "#64312a";
	document.getElementById("divClr1").style.backgroundColor = "#64312a";
	document.getElementById("divClr2").style.backgroundColor = "#64312a";
	document.getElementById("divClr3").style.backgroundColor = "#64312a";
	document.getElementById("divClr4").style.backgroundColor = "#64312a";
	document.getElementById("divClr5").style.backgroundColor = "#64312a";
    }else if(couleur2=='Ral 8014 - Brun sépia') {
	document.getElementById("Divclr").style.backgroundColor = "#49372a";
	document.getElementById("divClr1").style.backgroundColor = "#49372a";
	document.getElementById("divClr2").style.backgroundColor = "#49372a";
	document.getElementById("divClr3").style.backgroundColor = "#49372a";
	document.getElementById("divClr4").style.backgroundColor = "#49372a";
	document.getElementById("divClr5").style.backgroundColor = "#49372a";
    }else if(couleur2=='Ral 8016 - Brun acajou') {
	document.getElementById("Divclr").style.backgroundColor = "#4f3128";
	document.getElementById("divClr1").style.backgroundColor = "#4f3128";
	document.getElementById("divClr2").style.backgroundColor = "#4f3128";
	document.getElementById("divClr3").style.backgroundColor = "#4f3128";
	document.getElementById("divClr4").style.backgroundColor = "#4f3128";
	document.getElementById("divClr5").style.backgroundColor = "#4f3128";
    }else if(couleur2=='Ral 8017 - Brun chocolat') {
	document.getElementById("Divclr").style.backgroundColor = "#45302b";
	document.getElementById("divClr1").style.backgroundColor = "#45302b";
	document.getElementById("divClr2").style.backgroundColor = "#45302b";
	document.getElementById("divClr3").style.backgroundColor = "#45302b";
	document.getElementById("divClr4").style.backgroundColor = "#45302b";
	document.getElementById("divClr5").style.backgroundColor = "#45302b";
    }
    else if(couleur2=='Ral 8019 - Brun gris') {
	document.getElementById("Divclr").style.backgroundColor = "#3b3332";
	document.getElementById("divClr1").style.backgroundColor = "#3b3332";
	document.getElementById("divClr2").style.backgroundColor = "#3b3332";
	document.getElementById("divClr3").style.backgroundColor = "#3b3332";
	document.getElementById("divClr4").style.backgroundColor = "#3b3332";
	document.getElementById("divClr5").style.backgroundColor = "#3b3332";
    }else if(couleur2=='Ral 8022 - Brun noir') {
	document.getElementById("Divclr").style.backgroundColor = "#1e1a1a";
	document.getElementById("divClr1").style.backgroundColor = "#1e1a1a";
	document.getElementById("divClr2").style.backgroundColor = "#1e1a1a";
	document.getElementById("divClr3").style.backgroundColor = "#1e1a1a";
	document.getElementById("divClr4").style.backgroundColor = "#1e1a1a";
	document.getElementById("divClr5").style.backgroundColor = "#1e1a1a";
    }else if(couleur2=='Ral 8023 - Brun orangé') {
	document.getElementById("Divclr").style.backgroundColor = "#a45c32";
	document.getElementById("divClr1").style.backgroundColor = "#a45c32";
	document.getElementById("divClr2").style.backgroundColor = "#a45c32";
	document.getElementById("divClr3").style.backgroundColor = "#a45c32";
	document.getElementById("divClr4").style.backgroundColor = "#a45c32";
	document.getElementById("divClr5").style.backgroundColor = "#a45c32";
    }else if(couleur2=='Ral 8024 - Brun beige') {
	document.getElementById("Divclr").style.backgroundColor = "#7b5741";
	document.getElementById("divClr1").style.backgroundColor = "#7b5741";
	document.getElementById("divClr2").style.backgroundColor = "#7b5741";
	document.getElementById("divClr3").style.backgroundColor = "#7b5741";
	document.getElementById("divClr4").style.backgroundColor = "#7b5741";
	document.getElementById("divClr5").style.backgroundColor = "#7b5741";
    }else if(couleur2=='Ral 8024 - Brun beige') {
	document.getElementById("Divclr").style.backgroundColor = "#7b5741";
	document.getElementById("divClr1").style.backgroundColor = "#7b5741";
	document.getElementById("divClr2").style.backgroundColor = "#7b5741";
	document.getElementById("divClr3").style.backgroundColor = "#7b5741";
	document.getElementById("divClr4").style.backgroundColor = "#7b5741";
	document.getElementById("divClr5").style.backgroundColor = "#7b5741";
    }else if(couleur2=='Ral 8025 - Brun pâle') {
	document.getElementById("Divclr").style.backgroundColor = "#765d4d";
	document.getElementById("divClr1").style.backgroundColor = "#765d4d";
	document.getElementById("divClr2").style.backgroundColor = "#765d4d";
	document.getElementById("divClr3").style.backgroundColor = "#765d4d";
	document.getElementById("divClr4").style.backgroundColor = "#765d4d";
	document.getElementById("divClr5").style.backgroundColor = "#765d4d";
    }else if(couleur2=='Ral 8028 - Brun terre') {
	document.getElementById("Divclr").style.backgroundColor = "#4f3b2b";
	document.getElementById("divClr1").style.backgroundColor = "#4f3b2b";
	document.getElementById("divClr2").style.backgroundColor = "#4f3b2b";
	document.getElementById("divClr3").style.backgroundColor = "#4f3b2b";
	document.getElementById("divClr4").style.backgroundColor = "#4f3b2b";
	document.getElementById("divClr5").style.backgroundColor = "#4f3b2b";
    }else if(couleur2=='Ral 9001 - Blanc crème') {
	document.getElementById("Divclr").style.backgroundColor = "#eee9da";
	document.getElementById("divClr1").style.backgroundColor = "#eee9da";
	document.getElementById("divClr2").style.backgroundColor = "#eee9da";
	document.getElementById("divClr3").style.backgroundColor = "#eee9da";
	document.getElementById("divClr4").style.backgroundColor = "#eee9da";
	document.getElementById("divClr5").style.backgroundColor = "#eee9da";
    }else if(couleur2=='Ral 9002 - Blanc gris') {
	document.getElementById("Divclr").style.backgroundColor = "#dadbd5";
	document.getElementById("divClr1").style.backgroundColor = "#dadbd5";
	document.getElementById("divClr2").style.backgroundColor = "#dadbd5";
	document.getElementById("divClr3").style.backgroundColor = "#dadbd5";
	document.getElementById("divClr4").style.backgroundColor = "#dadbd5";
	document.getElementById("divClr5").style.backgroundColor = "#dadbd5";
    }else if(couleur2=='Ral 9002 - Blanc gris') {
	document.getElementById("Divclr").style.backgroundColor = "#f8f9fb";
	document.getElementById("divClr1").style.backgroundColor = "#f8f9fb";
	document.getElementById("divClr2").style.backgroundColor = "#f8f9fb";
	document.getElementById("divClr3").style.backgroundColor = "#f8f9fb";
	document.getElementById("divClr4").style.backgroundColor = "#f8f9fb";
	document.getElementById("divClr5").style.backgroundColor = "#f8f9fb";
    }else if(couleur2=='Ral 9004 - Noir de sécurité') {
	document.getElementById("Divclr").style.backgroundColor = "#252427";
	document.getElementById("divClr1").style.backgroundColor = "#252427";
	document.getElementById("divClr2").style.backgroundColor = "#252427";
	document.getElementById("divClr3").style.backgroundColor = "#252427";
	document.getElementById("divClr4").style.backgroundColor = "#252427";
	document.getElementById("divClr5").style.backgroundColor = "#252427";
    }else if(couleur2=='Ral 9005 - Noir foncé') {
	document.getElementById("Divclr").style.backgroundColor = "#151619";
	document.getElementById("divClr1").style.backgroundColor = "#151619";
	document.getElementById("divClr2").style.backgroundColor = "#151619";
	document.getElementById("divClr3").style.backgroundColor = "#151619";
	document.getElementById("divClr4").style.backgroundColor = "#151619";
	document.getElementById("divClr5").style.backgroundColor = "#151619";
    }else if(couleur2=='Ral 9005 - Noir foncé') {
	document.getElementById("Divclr").style.backgroundColor = "#f4f4ed";
	document.getElementById("divClr1").style.backgroundColor = "#f4f4ed";
	document.getElementById("divClr2").style.backgroundColor = "#f4f4ed";
	document.getElementById("divClr3").style.backgroundColor = "#f4f4ed";
	document.getElementById("divClr4").style.backgroundColor = "#f4f4ed";
	document.getElementById("divClr5").style.backgroundColor = "#f4f4ed";
    }else if(couleur2=='Ral 9005 - Noir foncé') {
	document.getElementById("Divclr").style.backgroundColor = "#1f2126";
	document.getElementById("divClr1").style.backgroundColor = "#1f2126";
	document.getElementById("divClr2").style.backgroundColor = "#1f2126";
	document.getElementById("divClr3").style.backgroundColor = "#1f2126";
	document.getElementById("divClr4").style.backgroundColor = "#1f2126";
	document.getElementById("divClr5").style.backgroundColor = "#1f2126";
    }else if(couleur2=='Ral 9016 - Blanc trafic') {
	document.getElementById("Divclr").style.backgroundColor = "#f3f6f6";
	document.getElementById("divClr1").style.backgroundColor = "#f3f6f6";
	document.getElementById("divClr2").style.backgroundColor = "#f3f6f6";
	document.getElementById("divClr3").style.backgroundColor = "#f3f6f6";
	document.getElementById("divClr4").style.backgroundColor = "#f3f6f6";
	document.getElementById("divClr5").style.backgroundColor = "#f3f6f6";
    }else if(couleur2=='Ral 9017 - Noir trafic') {
	document.getElementById("Divclr").style.backgroundColor = "#1b191d";
	document.getElementById("divClr1").style.backgroundColor = "#1b191d";
	document.getElementById("divClr2").style.backgroundColor = "#1b191d";
	document.getElementById("divClr3").style.backgroundColor = "#1b191d";
	document.getElementById("divClr4").style.backgroundColor = "#1b191d";
	document.getElementById("divClr5").style.backgroundColor = "#1b191d";
    }else if(couleur2=='Ral 9018 - Blanc papyrus') {
	document.getElementById("Divclr").style.backgroundColor = "#cbd2d0";
	document.getElementById("divClr1").style.backgroundColor = "#cbd2d0";
	document.getElementById("divClr2").style.backgroundColor = "#cbd2d0";
	document.getElementById("divClr3").style.backgroundColor = "#cbd2d0";
	document.getElementById("divClr4").style.backgroundColor = "#cbd2d0";
	document.getElementById("divClr5").style.backgroundColor = "#cbd2d0";
	}
	
	});