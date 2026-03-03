// =============================================
// Home Task 5 — Chained Style Editor
// Task5.js  |  Features: CSS Manipulation,
//              Chaining, Event Handling
// =============================================

$(document).ready(function () {

  // -----------------------------------------------
  // Shortcut: #styledText element
  // -----------------------------------------------
  let $text = $("#styledText");

  // ===============================================
  //  FONT SIZE BUTTONS
  //  jQuery Chaining: .css().animate() ek saath
  // ===============================================

  // Small font
  $("#fontSmall").click(function () {
    $text
      .css("font-size", "13px")          // CSS Manipulation
      .css("line-height", "1.6");        // Chaining — ek ke baad ek
  });

  // Medium font (default)
  $("#fontMedium").click(function () {
    $text
      .css("font-size", "16px")
      .css("line-height", "1.7");
  });

  // Large font
  $("#fontLarge").click(function () {
    $text
      .css("font-size", "22px")
      .css("line-height", "1.8");
  });

  // ===============================================
  //  TEXT COLOR BUTTONS
  //  .css() use karke color change karo
  // ===============================================

  $("#colorWhite").click(function () {
    $text.css("color", "#ffffff");
  });

  $("#colorYellow").click(function () {
    $text.css("color", "#f5c542");
  });

  $("#colorCyan").click(function () {
    $text.css("color", "#00e5ff");
  });

  $("#colorPink").click(function () {
    $text.css("color", "#ff4d9e");
  });

  // ===============================================
  //  BACKGROUND BUTTONS
  //  .css() se background color change + chaining
  // ===============================================

  $("#bgDark").click(function () {
    $text
      .css("background-color", "#1e1e2e")
      .css("padding", "16px")
      .css("border-radius", "8px");
  });

  $("#bgPurple").click(function () {
    $text
      .css("background-color", "#3d1a78")
      .css("padding", "16px")
      .css("border-radius", "8px");
  });

  $("#bgTeal").click(function () {
    $text
      .css("background-color", "#004d4d")
      .css("padding", "16px")
      .css("border-radius", "8px");
  });

  $("#bgOrange").click(function () {
    $text
      .css("background-color", "#7a2e00")
      .css("padding", "16px")
      .css("border-radius", "8px");
  });

  // ===============================================
  //  TOGGLE STYLE BUTTONS
  //  toggleClass() — class add karo agar nahi hai,
  //  hata do agar hai
  // ===============================================

  // Bold toggle
  $("#toggleBold").click(function () {
    $text.toggleClass("is-bold");           // CSS class toggle
    $(this).toggleClass("active");          // Button highlight toggle
  });

  // Italic toggle
  $("#toggleItalic").click(function () {
    $text.toggleClass("is-italic");
    $(this).toggleClass("active");
  });

  // Underline toggle
  $("#toggleUnderline").click(function () {
    $text.toggleClass("is-underline");
    $(this).toggleClass("active");
  });

  // Shadow toggle
  $("#toggleShadow").click(function () {
    $text.toggleClass("is-shadow");
    $(this).toggleClass("active");
  });

  // ===============================================
  //  RESET BUTTON
  //  Sab styles hata ke original state par wapas
  //  jQuery Chaining: multiple methods ek line mein
  // ===============================================

  $("#resetBtn").click(function () {
    $text
      .removeAttr("style")                // Saari inline styles hata do
      .removeClass("is-bold is-italic is-underline is-shadow");  // Saari classes hata do

    // Toggle buttons ki active state bhi reset karo
    $(".toggle-btn").removeClass("active");
  });

});