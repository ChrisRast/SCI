$(function () {
    // submit de la recherche
    $('#globalSubmit').submit(function (event) {
        event.preventDefault();
        var rows = $('#display').val()
        researchGlobal('0', rows)
    });
    getfacet('role');
    $('p.subfacet').hide();
    $('#role').on('change', changeFacet)
    $('#display').on('change', displayRow)
    $('#role').on('endChangeFacet', function (event, field) {
        if (field !== '') {
            getSubfacet(field);
        }
    })
    toggleSearch();
    $('.advancedSearch').on('click', 'h1', toggleSearch);
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
        request['q'] = 'global:' + valueField;
        request['sort'] = 'id asc'; // a voir après 
        request['start'] = start;
        request['rows'] = rows;
        request['wt'] = 'json';
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
    if ($('.advancedSearch > h1').hasClass('arrowdown')) {
        $('.advancedSearch > h1').removeClass().addClass('arrowup');
    } else {
        $('.advancedSearch > h1').removeClass().addClass('arrowdown');
    }
}