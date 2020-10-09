// Nav Bar Shrinking on scroll
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 10) {
      $("#nav").addClass("shrink");
      // $('.navbar-brand').css("color", "white");
      // $('.nav-link').css("color", "white");
    } else {
      $("#nav").removeClass("shrink");
      // $('.navbar-brand').css("color", "black");
      // $('.nav-link').css("color", "black");
    }
  });

  var slider = $(".slider");

  slider.each(function (index) {
    $(this).slick({
      dots: false,

      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,

      autoplay: true,
      autoplaySpeed: 10000,

      nextArrow: $(".next-button")[index],
      prevArrow: $(".prev-button")[index],

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });

  $(".gallery-slider").slick({
    dots: false,
    arrows: true,

    centerMode: true,
    centerPadding: "60px",
    variableWidth: true,

    infinite: true,
    slidesToShow: 1,

    autoplay: true,
    autoplaySpeed: 10000,

    nextArrow: $(".gal-next-button"),
    prevArrow: $(".gal-prev-button"),

    responsive: [
      {
        breakpoint: 840,
        settings: {
          centerMode: false,
          centerPadding: "0px",
          variableWidth: false,
        },
      },
    ],
  });
});
