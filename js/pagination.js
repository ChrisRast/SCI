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
    var nbPages = Math.ceil(numResults / displayValues)
    $('.nbPages').text('/' + nbPages)
    $('#goPage').empty();
    for (var i = 0; i < nbPages; i++) {
        if ((start / displayValues) == i) {
            $('#goPage').append($('<option>').val(i).text(i + 1).attr('selected', true))
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
    researchGlobal(start, displayValues)
}

// Page précédente
function previous() {
    $('#previous').click(function () {
        console.log('Page précédente !');

    });
}

// Page suivante
function next() {
    $('#next').click(function () {
        console.log('Page suivante !');

        // aimerait avoir le résultat de ces fonctions...
        var result = viewNumResults;
        var display = displayRow;
        // calcul le nombre restant de résultat à afficher
        var calculEcart = result - display;
        // récupérer le start
        console.log(calculEcart);

    });
}

// 1ère page
function firstPage() {
    $('#firstPage').click(function () {
        console.log('Vous êtes sur la première page !');

    });
}

// Dernière page
function lastPage() {
    $('#lastPage').click(function () {
        console.log('Vous êtes sur la dernière page !');

    });
}