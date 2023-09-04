$(function () {
  $(".header-nav__link, .header__link, .footer .logo").on(
    "click",

    function (event) {
      event.preventDefault();
      var id = $(this).attr("href"),
        top = $(id).offset().top - 50;
      $("body,html").animate({ scrollTop: top }, 1500);
    }
  );

  $(".header-nav__btn, .header-nav__link").on("click", function () {
    $(".header-nav__list, .header-nav__btn, body").toggleClass("menu-open ");
  });

  $(".header-nav .logo").on("click", function (event) {
    if ($(".header-nav__list, .header-nav__btn").hasClass("menu-open")) {
      $(".header-nav__list, .header-nav__btn").removeClass("menu-open ");
      event.preventDefault();
      var id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
    } else {
      event.preventDefault();
      var id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".header-nav").addClass("fixed");
    } else {
      $(" .header-nav").removeClass("fixed");
    }
  });

  var mixer = mixitup(".portfolio__gallery");
});
