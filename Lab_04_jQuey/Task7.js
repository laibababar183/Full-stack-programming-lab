// =============================================
// Home Task 7 — Drag & Drop Sortable List
// Task7.js  |  Features: DOM Manipulation,
//              Event Handling, CSS Manipulation
//              (jQuery UI Sortable plugin)
// =============================================

$(document).ready(function () {

  // -----------------------------------------------
  //  updateOrderDisplay()
  //  List ki current order numbers dikhata hai
  //  DOM se data uthata hai — DOM Manipulation
  // -----------------------------------------------
  function updateOrderDisplay() {
    let order = [];

    // Har item ka data-id attribute collect karo
    $("#sortableList .sort-item").each(function () {
      order.push($(this).data("id"));
    });

    // Order display update karo
    $("#orderOutput").text(order.join(", "));
  }

  // -----------------------------------------------
  //  updateItemNumbers()
  //  Drag ke baad har item ki visible number badge update
  //  taaki 1,2,3... sequence hamesha sahi rahe
  // -----------------------------------------------
  function updateItemNumbers() {
    $("#sortableList .sort-item").each(function (index) {
      $(this).find(".item-num").text(index + 1);
    });
  }

  // -----------------------------------------------
  //  jQuery UI Sortable Plugin initialize karo
  //  Yeh drag-and-drop functionality deta hai
  // -----------------------------------------------
  $("#sortableList").sortable({

    // Handle: sirf is element se drag ho sakta hai
    handle: ".drag-handle",

    // Placeholder class — jahan item drop hoga wahan yeh dikhega
    placeholder: "ui-sortable-placeholder",

    // Animation speed during sort
    revert: 150,

    // ---- EVENT: Jab drag shuru ho ----
    start: function (event, ui) {
      // Dragged item ko CSS Manipulation se highlight karo
      ui.item.css("opacity", "0.85");
    },

    // ---- EVENT: Jab item drop ho ----
    stop: function (event, ui) {
      // Opacity wapas normal karo
      ui.item.css("opacity", "1");

      // Numbers aur order display update karo
      updateItemNumbers();
      updateOrderDisplay();
    },

    // ---- EVENT: Har change par (real-time) ----
    change: function () {
      updateOrderDisplay();
    }

  });

  // jQuery UI Sortable ko touch devices par bhi kaam karne do
  $("#sortableList").disableSelection();

  // -----------------------------------------------
  //  Hover Effects — CSS Manipulation
  //  Item drag hone par highlight
  // -----------------------------------------------
  $(document).on("mouseenter", ".sort-item", function () {
    $(this).find(".item-num")
      .css("background", "#00e5a0")
      .css("color", "#0e0e16");
  });

  $(document).on("mouseleave", ".sort-item", function () {
    $(this).find(".item-num")
      .css("background", "#252535")
      .css("color", "#00e5a0");
  });

  // -----------------------------------------------
  //  Page load par initial order dikhao
  // -----------------------------------------------
  updateOrderDisplay();

});