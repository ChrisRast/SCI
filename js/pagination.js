// affichage du nombre de résultats par page désiré
function displayRow() {
    // sélection de la valeur de l'option du select
    var displayValues = $('#display').val();
    researchGlobal('0', displayValues);
}

// affichage du nombre de résultats trouvés
function viewNumResults(json) {
    var numResults = json.response.numFound;
    if (numResults == 0) {
        $('p.numResults').text('There is no result for this search.');
    } else {
        if (numResults == 1) {
            $('p.numResults').text('There is 1 result.');
        } else {
            var textResults = 'There are ' + numResults + ' results';
            $('p.numResults').text(textResults);
        }
    }
}

function displayNbPages(json) {
    var numResults = json.response.numFound;
    var start = json.response.start;
    var displayValues = $('#display').val();
    var nbPages = Math.ceil(numResults / displayValues);
    $('.nbPages').text('/ ' + nbPages);
    $('#goPage').empty();
    for (var i = 0; i < nbPages; i++) {
        if ((start / displayValues) == i) {
            $('#goPage').append($('<option>').val(i).text(i + 1).prop('selected', true))
        } else {
            $('#goPage').append($('<option>').val(i).text(i + 1))
        }
    }
}
// Redirection vers la page désirée d'après le numéro entré
function goToPage() {
    // récupérer le nombre de résultat affichés par page
    var displayValues = $('#display').val();
    // récupère la page voulue
    var pageToGo = $('#goPage').val();
    var start = displayValues * pageToGo;
    researchGlobal(start, displayValues);
}

// Page précédente
function previous() {
    // récupération du value de l'option séléctionnée
    var numRecup = $('#goPage option:selected').val();
    var displayValues = $('#display').val();
    // met à jour le start
    var start = displayValues * (parseInt(numRecup) - 1);
    researchGlobal(start, displayValues);
}

// Page suivante
function next() {
    // récupération du value de l'option séléctionnée
    var numRecup = $('#goPage option:selected').val();
    var displayValues = $('#display').val();
    var start = displayValues * (parseInt(numRecup) + 1);
    researchGlobal(start, displayValues);
}

// 1ère page
function firstPage() {
    // récupère la valeur du nombre de page de résultat
    var displayValues = $('#display').val();
    // passage des paramètres à la fonction avec start = 0
    researchGlobal('0', displayValues);
}

// Dernière page
function lastPage() {
    var lastPage = $('#goPage option').last().val()
    var displayValues = $('#display').val();
    // passage des paramètres à la fonction        
    researchGlobal(lastPage * displayValues, displayValues);
}