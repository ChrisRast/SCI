function getfacet(field) {
    var url = "http://localhost:8983/solr/select";
    $.getJSON(url, {
            q: '*:*',
            wt: 'json',
            rows: '0',
            facet: 'true',
            'facet.field': field
        },
        function (json) {
            var facets = getFacetsForField(json, field)
            var select = undefined;
            switch (field) {
            case 'role':
                select = $('#role')
                break;
            case 'language':
                select = $('p.person select')
                break;
            case 'city.region.code':
                select = $('p.city select')
                break;
            default:
                select = $('p.media select')
                break;
            }
            select.empty();
            select.append($('<option>').val('').text('Choose...'))
            facets.forEach(function (e) {
                select.append($('<option>').val(e).text(e))
            })

        })

}
//needs a json full response as param, returns an array with the facetfields
function getFacetsForField(json, field) {
    var facet_field = new Array();
    var array = json.facet_counts.facet_fields[field]
    array.forEach(function (e, i) {
        if (i % 2 == 0) {
            facet_field.push(e)
        }
    })
    return facet_field;
}

function changeFacet() {
    var field = $('#role option:selected').val()
    switch (field) {
    case '':
        $('p.subfacet').hide();
        break;
    case "person":
        $('p.subfacet').hide();
        $('p.person').fadeIn();
        break;
    case "city":
        $('p.subfacet').hide();
        $('p.city').fadeIn();
        break;
    default:
        $('p.subfacet').hide();
        $('p.media').fadeIn();
        break;
    }
    $(this).trigger("endChangeFacet", [field])
}

function getSubfacet(field) {
    switch (field) {
    case 'city':
        field = 'city.region.code'
        break;
    case 'person':
        field = 'language';
        break;
    default:
        field = 'groupname'
        break;
    }
    getfacet(field)
}