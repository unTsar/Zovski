$(document).ready(function(){var o=$(".owl-carousel");o.owlCarousel({items:1,loop:!0,nav:!1,dots:!1}),$("#NextBtn").click(function(){o.trigger("next.owl.carousel",[150])}),$("#PrevBtn").click(function(){o.trigger("prev.owl.carousel",[150])})});