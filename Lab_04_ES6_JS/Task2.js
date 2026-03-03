// =====================
// Task 2 — Animated Image Gallery
// JavaScript (jQuery) File
// =====================

$(document).ready(function () {

  let current = 0;                        // Abhi kaun si image show ho rahi hai
  let images  = $(".gallery-img");        // Saari images
  let total   = images.length;            // Total images ki ginti
  let isAnimating = false;                // Animation chal rahi ho toh double click rokna

  // ---- Dots banao ----
  for (let i = 0; i < total; i++) {
    let dot = $("<span class='dot'></span>");
    if (i === 0) dot.addClass("active");
    dot.attr("data-index", i);
    $("#dots").append(dot);
  }

  // ---- Image show karne ka main function ----
  function showImage(index) {
    if (isAnimating) return;
    isAnimating = true;

    let oldImg = $(images[current]);
    let newImg = $(images[index]);

    // Chaining: pehli image fadeOut karo, phir nayi fadeIn karo
    oldImg.fadeOut(350, function () {
      newImg.fadeIn(400, function () {
        isAnimating = false;
      });
    });

    // Caption update
    let caption = newImg.data("caption");
    $("#caption").fadeOut(150, function () {
      $(this).text(caption).fadeIn(200);
    });

    // Counter update
    $("#imgCounter").text((index + 1) + " / " + total);

    // Dots update
    $(".dot").removeClass("active");
    $(".dot[data-index='" + index + "']").addClass("active");

    current = index;
  }

  // ---- Next button ----
  $("#nextBtn").click(function () {
    let next = (current + 1) % total;    // Last ke baad first par ja
    showImage(next);
  });

  // ---- Prev button ----
  $("#prevBtn").click(function () {
    let prev = (current - 1 + total) % total;   // First ke pehle last par ja
    showImage(prev);
  });

  // ---- Dot click ----
  $(document).on("click", ".dot", function () {
    let index = parseInt($(this).data("index"));
    if (index !== current) {
      showImage(index);
    }
  });

  // ---- Keyboard arrows ----
  $(document).keydown(function (e) {
    if (e.key === "ArrowRight") $("#nextBtn").click();
    if (e.key === "ArrowLeft")  $("#prevBtn").click();
  });

});