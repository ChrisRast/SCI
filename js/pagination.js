// affichage du nombre de résultats par page désiré
function displayRow() {
    // sélection de la valeur de l'option du select
    var displayValues = $('#display').val();
    console.log(displayValues);
    researchGlobal(displayValues);
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

// Redirection vers la page désirée
function goToPage() {
    // Go to page n° -> faire modulo numFound / rows

}

// Page précédente
function previous() {
    $("#previous").click(function () {
        console.log('Page précédente !');

    });
}

// Page suivante
function next() {
    $("#next").click(function () {
        console.log('Page suivante !');
        
        // calcul le nombre restant de résultat à afficher
        var calculEcart = numResults - displayValues;
        // récupérer le start
        
    });


}

// 1ère page
function firstPage() {
    $("#firstPage").click(function () {
        console.log('Vous êtes sur la première page !');

    });
}

// Dernière page
function lastPage() {
    $("#lastPage").click(function () {
        console.log('Vous êtes sur la dernière page !');

    });
}