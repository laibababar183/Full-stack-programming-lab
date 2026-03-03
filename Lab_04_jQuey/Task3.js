// =====================
// Task 3 — Interactive Form Validation
// JavaScript (jQuery) File
// =====================

$(document).ready(function () {

  // =====================
  // Validation Functions
  // =====================

  // Name: empty nahi hona chahiye
  function validateName() {
    let val = $("#name").val().trim();
    if (val === "") {
      showError("#name", "#nameErr");
      return false;
    }
    showValid("#name", "#nameErr");
    return true;
  }

  // Email: @ aur . hona chahiye
  function validateEmail() {
    let val = $("#email").val().trim();
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(val)) {
      showError("#email", "#emailErr");
      return false;
    }
    showValid("#email", "#emailErr");
    return true;
  }

  // Password: 6 characters se zyada
  function validatePassword() {
    let val = $("#password").val();
    if (val.length < 6) {
      showError("#password", "#passErr");
      return false;
    }
    showValid("#password", "#passErr");
    return true;
  }

  // Phone: 11 digits
  function validatePhone() {
    let val = $("#phone").val().trim();
    let regex = /^[0-9]{11}$/;
    if (!regex.test(val)) {
      showError("#phone", "#phoneErr");
      return false;
    }
    showValid("#phone", "#phoneErr");
    return true;
  }

  // =====================
  // Helper Functions
  // =====================

  function showError(inputId, errId) {
    $(inputId).removeClass("valid").addClass("error");
    $(errId).fadeIn(200);
  }

  function showValid(inputId, errId) {
    $(inputId).removeClass("error").addClass("valid");
    $(errId).fadeOut(200);
  }

  // =====================
  // Blur Events — jab field se bahar click karo
  // Real-time validation
  // =====================

  $("#name").blur(validateName);
  $("#email").blur(validateEmail);
  $("#password").blur(validatePassword);
  $("#phone").blur(validatePhone);

  // =====================
  // Form Submit
  // =====================

  $("#myForm").submit(function (e) {
    e.preventDefault();   // Page reload band karo

    // Sab fields validate karo
    let isValid =
      validateName() &
      validateEmail() &
      validatePassword() &
      validatePhone();

    if (isValid) {
      // Form hide karo, success box dikhao
      $("#myForm").fadeOut(300, function () {
        $("#successBox").fadeIn(400);
      });
    }
  });

  // =====================
  // Reset Button
  // =====================

  $("#resetBtn").click(function () {
    // Sab inputs clear karo
    $("input").val("").removeClass("valid error");
    $(".error-msg").hide();

    // Success box hide, form dikhao
    $("#successBox").fadeOut(200, function () {
      $("#myForm").fadeIn(300);
    });
  });

});