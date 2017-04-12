jQuery(document).ready(function ( $ ) {
    $("#my-gallery-container").mpmansory(
        {
            childrenClass: 'item', 
            columnClasses: 'padding', 
            breakpoints:{
                lg: 3, 
                md: 4, 
                sm: 6,
                xs: 12
            },
            distributeBy: { order: false, height: false, attr: 'data-order', attrOrder: 'asc' },
            onload: function (items) { } 
        }
    );
});