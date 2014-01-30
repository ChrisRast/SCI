$(function () {
	// submit de la recherche
	$('#globalSubmit').submit(researchGlobal);
	getfacet('role');
	$('p.subfacet').hide();
	$('#role').on('change', changeFacet)
    // $('#display').on('change', changeRow)
	$('#role').on('endChangeFacet', function (event, field) {
		if (field !== '') {
			getSubfacet(field);
		}
	})
})

function researchGlobal() {

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
		request['rows'] = '10';
		request['wt'] = 'json';

		// la requête JSON dans global
		$.getJSON(url, request, function (json) {
			var result = json.response.docs
			console.log(result)
            // pour chaque résultat, on lance la fonction qui générer le html
			$.each(result, function (i, e) {
				buildHTMLDisplayResult(e)
			})
			//for (var i = 0; i < result.length; i++) {
			//  buildHTMLDisplayResult(result[i]);
			//}
		});


	}
}