$(document).ready(function() {
    $('.quotes-carousel').slick({
        arrowsPlacement: 'split',
        prevArrow: '<button type="button" class="quotes-carousel__slide__prev"><i class="fa fa-chevron-left" aria-hidden="true"></i><span class="slick-sr-only">Previous</span></button>',
        nextArrow: '<button type="button" class="quotes-carousel__slide__next"><i class="fa fa-chevron-right" aria-hidden="true"></i><span class="slick-sr-only">Next</span></button>',
        dots: true
    });
  });