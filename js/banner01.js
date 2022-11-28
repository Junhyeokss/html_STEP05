$(function () {
  $(".topBanner i").on("click", function () {
    $(".topBanner").addClass("on");
  });

  $(".topBanner2 i").on("click", function () {
    $(".topBanner2 .inner").stop().slideToggle();
  });

  $(".bottomBanner i").on("click", function () {
    $(".tbottomBanner .inner").slideToggle();
  });

  $(".popup button").on("click", function () {
    $(this).parent().hide();
  });
});
