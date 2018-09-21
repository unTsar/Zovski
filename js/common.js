$(document).ready(function(){
    // owl1
    var owl1 = $('.owl1')

    owl1.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false
    });

    $('#NextBtn1').click(function() {
        owl1.trigger('next.owl.carousel', [150]);
    })
    $('#PrevBtn1').click(function() {
        owl1.trigger('prev.owl.carousel', [150]);
    })

    // owl2
    var owl2 = $('.owl2')

    owl2.owlCarousel({
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            769: {
                items: 2
            },
            1200: {
                items: 3
            },
            1550: {
                items: 4
            },
        },
        loop: true,
        nav: false,
        dots: false,
        margin: 0,
    });

    $('#NextBtn2').click(function() {
        owl2.trigger('next.owl.carousel', [150]);
    })
    $('#PrevBtn2').click(function() {
        owl2.trigger('prev.owl.carousel', [150]);
    })
});