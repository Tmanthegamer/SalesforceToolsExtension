function ColorRows( rawList ) {
    var labels = rawList.split( '&' );

    for (var i = labels.length - 1; i >= 0; i--) {
        var labelToTest = labels[i];
        $('tr td').filter(function(){
            return $(this).text() === labelToTest;
        }).parent().css("background", "darkseagreen");
    }

}
var list = 'Account Name&Account Number&Number of Contacts&Billing Street';
ColorRows( list );