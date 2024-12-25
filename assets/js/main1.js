(function (window, document, $, undefined) {
  "use strict";

  var axilInit = {
    i: function (e) {
      axilInit.s();
      axilInit.methods();
    },

    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },

    methods: function (e) {
      axilInit.axilSlickActivation();  
    },

    axilSlickActivation: function (e) {
      /* banner slider */
      $(".slider-thumb-activation-one").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        focusOnSelect: false,
        speed: 1000,
        autoplay: false,
        asNavFor: ".slider-content-activation-one",
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

      $(".slider-thumb-activation-two").slick({
        infinite: true,
        slidesToShow: 3,
        centerPadding: "0",
        arrows: false,
        dots: true,
        speed: 1500,
        autoplay: false,
        centerMode: true,
        responsive: [
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

      $(".slider-thumb-activation-three").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        focusOnSelect: false,
        speed: 1500,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

      $(".slider-content-activation-one").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        focusOnSelect: false,
        speed: 500,
        fade: true,
        autoplay: false,
        asNavFor: ".slider-thumb-activation-one",
      });

    },

  };
  axilInit.i();
})(window, document, jQuery);
