// =====================
// Task 4 — Tabbed Content with Smooth Scroll
// JavaScript (jQuery) File
// =====================

$(document).ready(function () {

  // Tab button click hone par
  $(".tab-btn").click(function () {

    // 1. Kaun sa tab click hua
    let targetTab = $(this).data("tab");   // e.g. "css", "jquery"

    // 2. Saare buttons se active class hata do
    $(".tab-btn").removeClass("active");

    // 3. Clicked button ko active banao
    $(this).addClass("active");

    // 4. Saare panels hide karo
    $(".tab-panel").hide().removeClass("active");

    // 5. Sirf target panel dikhao — fadeIn ke saath (chaining)
    $("#" + targetTab)
      .addClass("active")
      .hide()
      .fadeIn(350);

    // 6. Content area tak smoothly scroll karo
    $("html, body").animate({
      scrollTop: $("#content-area").offset().top - 20
    }, 500);

  });

});