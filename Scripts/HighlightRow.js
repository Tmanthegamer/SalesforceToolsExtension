// only inject the sheet once
if( $( 'style#unique' ).length === 0 ) {
    $( document.body ).append('<style id="unique">\ntr.dataRow:hover{\n    background:#d6e2ec;\n}\n</style>');
}