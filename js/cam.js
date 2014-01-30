$(function () {
    // submit de la recherche
    $('#globalSubmit').submit(function () {
        var rows = $('#display').val()
        researchGlobal(rows)
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
})

function researchGlobal(rows) {

    event.preventDefault();

    // récupère la valeur entrée dans l'input de recherche par exemple : person
    var valueField = $('#globalSearch').val();

    // test si le champ est rempli
    if (valueField == '') {
        alert('Please field the text area !');
    } else {
        // variable de l'url et de la requête
        var url = "http://localhost:8983/solr/select";
        var request = {};

        // les paramètres de l'objet request{}
        request['q'] = 'global:' + valueField;
        request['sort'] = 'id asc'; // a voir après 
        request['rows'] = rows;
        request['wt'] = 'json';

        // la requête JSON dans global
        $.getJSON(url, request, function (json) {
            var result = json.response.docs
            console.log(result)
            // pour chaque résultat, on lance la fonction qui générer le html
            $('.right > ul').empty();

            $.each(result, function (i, e) {

                buildHTMLDisplayResult(e)
            })
            viewNumResults(json);
        });


    }
}