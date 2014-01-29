function pagination(){
    var displayValues = $("#display").val();
    console.log(displayValues);
}

$(function () {
$( "select" ).change(pagination);
pagination();
});