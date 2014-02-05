$(function () {
    // submit de la recherche
    $('#globalSubmit, #advancedSubmit').submit(function (event) {
        event.preventDefault();
        var rows = $('#display').val()
        researchGlobal('0', rows)
    });
    //recherche les facet de base
    getfacet('role');
    //Cache des elements au chargement
    $('p.subfacet').hide();
    $('.suborder').hide();
    //Surveille le changement sur #role
    $('#advancedSubmit').on('change', '#role', function () {
        changeFacet();
        toggleSort();
    })
    $('#display').on('change', displayRow)
    $('#role').on('endChangeFacet', function (event, field) {
        if (field !== '') {
            getSubfacet(field);
        } else {
            console.log('le field est vide')
        }
    })
    toggleSearch();
    $('.advancedSearch').on('click', 'h2', toggleSearch);
    $('#goPage').on('change', goToPage)
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
        request['sort'] = 'id asc'; // a voir après 
        request['start'] = start;
        request['rows'] = rows;
        request['wt'] = 'json';
        request['q'] = '+global:' + valueField;
        if ($('h2.arrowup') && ($('#role').val() !== '')) {
            request['q'] += ' +role:' + $('#role').val();
            var visible = $('.subfacet select:visible')
            if (visible.val() !== '') {
                request['q'] += ' +' + visible.attr('name') + ':' + visible.val();
            }
        }
        // la requête JSON dans global
        $.getJSON(url, request, function (json) {
            var result = json.response.docs
            // pour chaque résultat, on lance la fonction qui générer le html
            $('.right > ul').empty();
            $.each(result, function (i, e) {
                buildHTMLDisplayResult(e);
            })
            viewNumResults(json);
            displayNbPages(json)
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
        $('.suborder').hide();
        break;
    case 'person':
        $('.suborder').hide();
        $('h3.suborder').fadeIn();
        $('.suborder.person').fadeIn();
        break;
    case 'city':
        $('.suborder').hide();
        $('h3.suborder').fadeIn();
        $('.suborder.city').fadeIn();
        break;
    default:
        $('.suborder').hide();
        $('h3.suborder').fadeIn();
        $('.suborder.media').fadeIn();
        break;
    }
}