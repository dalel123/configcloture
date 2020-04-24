


function createRadioButtonCloture() {

    for (i = 0; i <= 10; i++) {
        var cloture = document.createElement("input");
        cloture.setAttribute("type", "radio");
        cloture.setAttribute("name", "cloture" + i);
        cloture.setAttribute("value", "C");
        cloture.setAttribute("id", "clotureCALU" + i);

        var lbl1 = document.createElement("label");
        lbl1.innerHTML = "CLOTURE";
        cell3Div.appendChild(lbl1);
        cell3Div.appendChild(cloture);
    }
}
function createRadioButtonFixation() {




    for (i = 0; i <= 10; i++) {
        var fixation = document.createElement("input");
        fixation.setAttribute("type", "radio");
        fixation.setAttribute("name", "fixation" + i);
        fixation.setAttribute("value", "C");
        fixation.setAttribute("id", "fixationCALU" + i);

        var lbl2 = document.createElement("label");
        lbl2.innerHTML = "FIXATION";
        cell4Div.appendChild(lbl2);
        cell4Div.appendChild(fixation);
    }
}
function createlongueur() {




    for (i = 0; i <= 10; i++) {
        var longueur = document.createElement("input");
        longueur.setAttribute("type", "number");
        longueur.setAttribute("name", "longueur" + i);
        longueur.setAttribute("value", "longueru");
        longueur.setAttribute("id", "longueurCALU" + i);

        var lbl3 = document.createElement("label");
        lbl3.innerHTML = "Longueur";
        cell5Div.appendChild(lbl3);
        cell5Div.appendChild(longueur);
    }
}


function createlongueur() {




    for (i = 0; i <= 10; i++) {
        var longueur = document.createElement("input");
        longueur.setAttribute("type", "number");
        longueur.setAttribute("name", "longueur" + i);
        longueur.setAttribute("value", "longueru");
        longueur.setAttribute("id", "longueurCALU" + i);

        var lbl3 = document.createElement("label");
        lbl3.innerHTML = "Longueur";
        cell5Div.appendChild(lbl3);
        cell5Div.appendChild(longueur);
    }
}

function createHauteur()

for (i = 0; i <= 10; i++) {

    var hauteur = document.createElement('select');
    hauteur.setAttribute('name', 'hauteurCALU' + i);
    hauteur.setAttribute('id', 'hauteurCALU' + i);
    var option1 = document.createElement('option');
    ption1.innerHTML = "200";
    var option2 = document.createElement('option');
    option2.innerHTML = "335";
    var option3 = document.createElement('option');
    option3.innerHTML = "470";
    var option4 = document.createElement('option');
    option4.innerHTML = "605";
    var option5 = document.createElement('option');
    option5.innerHTML = "740";
    var option6 = document.createElement('option');
    option6.innerHTML = "875";
    var option7 = document.createElement('option');
    option7.innerHTML = "1010";
    var option8 = document.createElement('option');
    option8.innerHTML = "1145";
    var option9 = document.createElement('option');
    option9.innerHTML = "1280";
    var option10 = document.createElement('option');
    option10.innerHTML = "1415";
    var option11 = document.createElement('option');
    option11.innerHTML = "1550";
    var option12 = document.createElement('option');
    option12.innerHTML = "1685";
    var option13 = document.createElement('option');
    option13.innerHTML = "1820";
    var option14 = document.createElement('option');
    option14.innerHTML = "1955";
    var option15 = document.createElement('option');
    option15.innerHTML = "2090";
    hauteur.appendChild(option1);
    hauteur.appendChild(option2);
    hauteur.appendChild(option3);
    hauteur.appendChild(option4);
    hauteur.appendChild(option5);
    hauteur.appendChild(option6);
    hauteur.appendChild(option7);
    hauteur.appendChild(option8);
    hauteur.appendChild(option9);
    hauteur.appendChild(option10);
    hauteur.appendChild(option11);
    hauteur.appendChild(option12);
    hauteur.appendChild(option13);
    hauteur.appendChild(option14);
    hauteur.appendChild(option15);



}





