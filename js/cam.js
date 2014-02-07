$(function () {
    // submit de la recherche
    $('#globalSubmit, #advancedSubmit').submit(function (event) {
        event.preventDefault();
        var rows = $('#display').val()
        researchGlobal('0', rows)
    });
    //recherche les facet de base
    getfacet('role');
    //change l'affichage de la recherche avancée
    toggleSearch();
    //Cache des elements au chargement
    $('p.subfacet, .suborder, .order, .pageNav').hide();
    //Surveille le changement sur #role
    $('#advancedSubmit').on('change', '#role', function () {
        changeFacet();
        toggleSort();
        researchGlobal('0', $('#display option:selected').val().toString())
    })
    $('#display').on('change', displayRow)
    $('#role').on('endChangeFacet', function (event, field) {
        if (field !== '') {
            getSubfacet(field);
        }
    })
    $('.advancedSearch').on('click', 'h2', toggleSearch);
    $('#goPage').on('change', goToPage);
    $('.result').on('click','.title', function () {
        $(this).siblings('.data, .file').toggle('100');
        if($(this).hasClass('active')){
            $(this).removeClass('active')
        } else {
        $(this).addClass('active')
        }
    })
    //$('#firstPage').on('change', firstPage);
})

function researchGlobal(start, rows) {
    // récupère la valeur entrée dans l'input de recherche par exemple : person
    var valueField = $('#globalSearch').val();
    // test si le champ est rempli
    if (valueField == '') {
        return
    } else {
        // variable de l'url et de la requête
        var url = "http://localhost:8983/solr/select";
        var request = {};
        // les paramètres de l'objet request{}
        request['sort'] = 'id asc';
        request['start'] = start;
        request['rows'] = rows;
        request['wt'] = 'json';
        request['q'] = '+global:' + valueField;
        //Vérifie que les champs sont activés et récupère les valeurs au besoin
        if ($('.advancedSearch > h2').hasClass('arrowup') && ($('#role').val() !== '')) {
            //Change la requête avec les facet
            request['q'] += ' +role:' + $('#role').val();
            var visible = $('.subfacet select:visible')
            //Change requete avec subfact
            if (visible.val() !== '') {
                request['q'] += ' +' + visible.attr('name') + ':' + visible.val();
            }
            //change ordre d'affichage des résultats selon sélectionnés
            if ($('.suborder select').filter(':visible').val() != '') {
                request['sort'] = $('.suborder select:visible').val() + ' ' + $('.order select').val();
            }
        }

        // la requête JSON dans global
        $.getJSON(url, request, function (json) {
            var result = json.response.docs
            // pour chaque résultat, on lance la fonction qui générer le html
            $('.right > ul').empty();
            if (result.length != 0) {
                $.each(result, function (i, e) {
                    buildHTMLDisplayResult(e);
                })
                $('.pageNav').show();
                $('div.data, div.file').toggle();
            } else {
                $('.pageNav').hide();
                $('.right > ul').append($('<li>').append($('<p>').text('There is no result to display. Try another term.')))
            }
            viewNumResults(json);
            displayNbPages(json);
            lastPage(json);
            firstPage();
            next();
            previous();
        });
    }
}

function toggleSearch() {
    $('#advancedSubmit').toggle();
    if ($('.advancedSearch > h2').hasClass('arrowdown')) {
        $('.advancedSearch > h2').removeClass().addClass('arrowup');
    } else {
        $('.advancedSearch > h2').removeClass().addClass('arrowdown');
    }
}

function toggleSort() {
    var role = $('#role option:selected').val();
    switch (role) {
    case '':
        $('.suborder, .order').hide();
        break;
    case 'person':
        $('.suborder').hide();
        $('h3.suborder, .suborder.person, .order').fadeIn();
        break;
    case 'city':
        $('.suborder').hide();
        $('h3.suborder, .suborder.city, .order').fadeIn();
        break;
    default:
        $('.suborder').hide();
        $('h3.suborder, .suborder.media, .order').fadeIn();
        break;
    }
}