$(function () {
    // submit de la recherche
    $('#globalSubmit').submit(researchGlobal);
})

function researchGlobal() {
    console.log('are you submitting ?');
    
    event.preventDefault();

    // récupère la valeur entrée dans l'input de recherche par exemple : person
    var valueField = $('#globalSearch').val();
    
    console.log(valueField);

    // test si le champ est rempli
    if (valueField == '') {
        alert('Please field the text area !');
    } else {
        console.log('ceci est le esle');
        // variable de l'url et de la requête
        var url = "http://localhost:8983/solr/select";
        var request = {};

        // les paramètres de l'objet request{}
        request['q'] = 'global:' + valueField;
        request['sort'] = 'id asc'; // a voir après 
        request['rows'] = '10';
        request['wt'] = 'json';

        // la requête JSON dans global
        $.getJSON(url, request, function (result) {
                /*var documents = result.response.docs;
                for (var i = 0; i < documents.length; i++) {
                    displayDocument(documents[i]);
                }*/
            console.log('You can see the result : '+result);
        });
    }

}