// affichage du nombre de résultats par page désiré
function displayRow() {
    // sélection de la valeur de l'option du select
    var displayValues = $('#display').val();
    console.log(displayValues);
    researchGlobal('0', displayValues);
}

// affichage du nombre de résultats trouvés
function viewNumResults(json) {
    var numResults = json.response.numFound;
    if (numResults == 0) {
        $('p.numResults').text('There are no result');
    } else {
        if (numResults == 1) {
            $('p.numResults').text('There is 1 result');
        } else {
            var textResults = 'There are ' + numResults + ' results';
            $('p.numResults').text(textResults);
        }
    }
}

// Redirection vers la page désirée d'après le numéro entré
function goToPage() {
    // récupérer le nombre de résultat par page
    var numFound = displayRow;
    // récupérer le nombre total de résultat
    var rows = viewNumResults;

    // dès que le numéro de page désiré est tapé, cette page s'affiche automatiquement
    $('#goPage').keyup(function () {
        var goToPage = $('#goPage').text;

        // comment afficher la page correspondante ?
        // faire modulo numFound / rows comme ci-dessous ?
        // var modulo = numFound % rows; ?!
        // console.log(modulo);
    });
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