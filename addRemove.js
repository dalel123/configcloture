$(document).ready(function() {
    var maxField = 10; //Input fields increment limitation
    var btncount = $('#btncount'); //Add button selector
    var addButton = $('.add_button'); //Add button selector
    var field = document.getElementById('configHtmlForm');
    var field2 = document.getElementById('configHtmlForm2');
    var fieldHTML = field2.innerHTML;
    var removeBtn = '<a href="javascript:void(0);" class="remove_button btn btn-danger ml-auto" style="margin-bottom: 15px;">Supprimer</a>';
    var x = 1;

    $(addButton).click(function() {

        if (x < maxField) {

            $(field).append('<a class="col-toggle-btn"  href="javascript:void(0);" data-rel="Troncon' + x + '" onclick="TOG' + x + '();"  id="TronconToggle' + x + '" >' + (x + 1) + 'Éme Tronçon</a><div class="TronconToggleContainer" id="Troncon' + x + '" style="border-top:2px solid #ccc;padding-top: 5px;" >' + fieldHTML + removeBtn + '</div>');
            /* Modified by :Author */
            $('#Troncon' + (x - 1)).slideUp();
            $('html, body').animate({
                scrollTop: $("#Troncon0").offset().top
            }, 1000);
            console.log(x - 1);

            /* End Author */

            $('#nbTroncon').val(x);
           
            $('#Troncon' + x + ' input').each(function(index, element) {
               element.setAttribute('id', element.getAttribute('id') + x);
            });

            $('.form-check input').each(function(index, element) {
               element.setAttribute('value', element.getAttribute('value') + x);
            });

            $('#Troncon' + x + ' span input').each(function(index, element) {
                element.setAttribute('name', element.getAttribute('name') + x);
            });

            $('#Troncon' + x + ' select').each(function(index, element) {
                element.setAttribute('name', element.getAttribute('name') + x);
                element.setAttribute('id', element.getAttribute('id') + x);
            });

            $('#Troncon' + x + ' label').each(function(index, element) {
                element.setAttribute('id', element.getAttribute('id') + x);

            });

            if (x < 2) {
            	$('#configHtmlForm2 form-check input').each(function(index, element2) {
            	element.setAttribute('value', element2.getAttribute('value') + "0");
                });

                $('#configHtmlForm2 input').each(function(index, element2) {

                    element2.setAttribute('id', element2.getAttribute('id') + "0");
                   
                });

                 $('#configHtmlForm2 span input').each(function(index, element) {
                element.setAttribute('name', element.getAttribute('name') + "0");
            });

                $('#configHtmlForm2 label').each(function(index, element2) {

                    element2.setAttribute('id', element2.getAttribute('id') + "0");

                });

                $('#configHtmlForm2 select').each(function(index, element2) {
                    element2.setAttribute('name', element2.getAttribute('name') + "0");
                    element2.setAttribute('id', element2.getAttribute('id') + "0");
                });
            }

            x++;
        }
    });



    //Once remove button is clicked
    $(field).on('click', '.remove_button', function(e) {
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });
});