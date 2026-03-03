// =====================
// Task 1 — Dynamic List Manager
// JavaScript (jQuery) File
// =====================

// DOM ready hone par yeh sab code chalega
$(document).ready(function () {

  // Counter update karne ka function
  function updateCounter() {
    let count = $("#myList li").length;
    if (count === 0) {
      $("#counter").text("");
      $("#emptyMsg").show();
    } else {
      $("#emptyMsg").hide();
      $("#counter").text(count + " item" + (count > 1 ? "s" : "") + " in list");
    }
  }

  // Add button click hone par
  $("#addBtn").click(function () {
    addItem();
  });

  // Enter key dabane par bhi add ho
  $("#itemInput").keypress(function (e) {
    if (e.which === 13) {   // 13 = Enter key
      addItem();
    }
  });

  // Item add karne ka function
  function addItem() {
    let text = $("#itemInput").val().trim();

    if (text === "") {
      // Empty input par field flash karo
      $("#itemInput").css("border-color", "#ff4444");
      setTimeout(function () {
        $("#itemInput").css("border-color", "#2a2a2a");
      }, 600);
      return;
    }

    // Naya list item banao
    let li = $(
      "<li>" +
        "<span class='item-text'>" + text + "</span>" +
        "<button class='delete-btn'>Delete</button>" +
      "</li>"
    );

    // List mein add karo
    $("#myList").append(li);

    // Input clear karo
    $("#itemInput").val("");

    // Counter update karo
    updateCounter();
  }

  // Delete button click — dynamically added items ke liye .on() use karo
  $(document).on("click", ".delete-btn", function () {
    $(this).closest("li").fadeOut(200, function () {
      $(this).remove();
      updateCounter();
    });
  });

  // Pehle counter set karo
  updateCounter();
});