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
    console.log(pageToGo);
    var start = displayValues * pageToGo;
    researchGlobal(start, displayValues);
}

// Page précédente
function previous() {

        console.log('Page précédente !');
        // récupération du value de l'option séléctionnée
        var numRecup = $('#goPage option:selected').attr('value');
        var numRecupInt = parseInt(numRecup);
        var previ0us = numRecupInt - 1;
         // affiche le numéro de la page suivante dans le menu déroulant
        $('#goPage option[value=' + previ0us + ']').attr("selected", "selected");
        var displayValues = $('#display').val();
        // met à jour le start
        var start = displayValues * previ0us;
        researchGlobal(start, displayValues);

        // Faut-il désactiver le bouton previous lorsque le nombre de page minimal est atteint ?!
}

// Page suivante
function next() {
    $('#next').click(function () {
        // récupération du value de l'option séléctionnée
        var numRecup = $('#goPage option:selected').attr('value');
        var numRecupInt = parseInt(numRecup);
        var next = numRecupInt + 1;
        // affiche le numéro de la page suivante dans le menu déroulant
        $('#goPage option[value=' + next + ']').attr("selected", "selected");
        var displayValues = $('#display').val();
        // met à jour le start
        var start = displayValues * next;
        researchGlobal(start, displayValues);
        
        // Faut-il désactiver le bouton next lorsque le nombre de page maximal est atteint ?!
        
    });
}

// 1ère page
function firstPage() {
    $('#firstPage').click(function () {
        // récupère la valeur du nombre de page de résultat
        var displayValues = $('#display').val();
        // passage des paramètres à la fonction avec start = 0
        researchGlobal('0', displayValues);
    });
}

// Dernière page
function lastPage(json) {
    $('#lastPage').click(function () {
        var numResults = json.response.numFound;
        var displayValues = $('#display').val();
        var nbPages = Math.ceil(numResults / displayValues);
        var start = nbPages * displayValues - displayValues;
        // passage des paramètres à la fonction
        researchGlobal(start, displayValues);
    });
}