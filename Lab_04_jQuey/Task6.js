// =============================================
// Home Task 6 — API Data Fetcher
// Task6.js  |  Features: Ajax, DOM Manipulation,
//              Event Handling
// =============================================

$(document).ready(function () {

  // -----------------------------------------------
  //  Configuration
  //  API URL — JSONPlaceholder free fake API
  // -----------------------------------------------
  const API_URL    = "https://jsonplaceholder.typicode.com/posts";
  const BATCH_SIZE = 5;       // Har baar kitne posts load hon
  let currentPage  = 1;       // Current page tracker
  let totalLoaded  = 0;       // Total loaded posts ka count

  // -----------------------------------------------
  //  fetchPosts(page)
  //  jQuery $.ajax() se API call karta hai
  //  page parameter se pagination hoti hai
  // -----------------------------------------------
  function fetchPosts(page) {

    // Loading indicator dikhao
    $("#loadingIndicator").show();
    $("#loadBtn, #loadMoreBtn").prop("disabled", true).css("opacity", "0.6");

    // ============================================
    //  AJAX CALL — jQuery $.ajax()
    //  Server se data mangna bina page reload ke
    // ============================================
    $.ajax({
      url:      API_URL,
      method:   "GET",
      data: {
        _page:  page,
        _limit: BATCH_SIZE
      },

      // SUCCESS: Data aa gaya
      success: function (posts) {

        // Pehli load par empty state chupao
        if (page === 1) {
          $("#emptyState").fadeOut(200);
          $("#loadBtn").hide();
          $("#loadMoreBtn, #clearBtn").fadeIn(300);
        }

        // Har post ke liye card banao — DOM Manipulation
        $.each(posts, function (index, post) {
          totalLoaded++;

          let card = $(
            "<div class='post-card'>" +
              "<div class='post-num'>" + totalLoaded + "</div>" +
              "<div class='post-body'>" +
                "<div class='post-title'>" + post.title + "</div>" +
                "<div class='post-content'>" + post.body + "</div>" +
              "</div>" +
            "</div>"
          );

          // List mein append karo
          $("#postsList").append(card);
        });

        // Stats update karo — DOM Manipulation
        $("#loadedCount").text(totalLoaded + " posts loaded");

        // Agar 100 posts ho gaye toh Load More hatao
        if (totalLoaded >= 20) {
          $("#loadMoreBtn").hide().after(
            "<span style='font-size:13px;color:#889;padding:13px 0;display:inline-block;'>All posts loaded!</span>"
          );
        }

        currentPage++;
      },

      // ERROR: API call fail ho gayi
      error: function () {
        $("#postsList").append(
          "<div style='color:#cc3333;padding:16px;font-size:14px;'>" +
          "⚠ Failed to fetch posts. Check your internet connection.</div>"
        );
      },

      // COMPLETE: Chahe success ho ya error — yeh hamesha chalega
      complete: function () {
        $("#loadingIndicator").hide();
        $("#loadBtn, #loadMoreBtn").prop("disabled", false).css("opacity", "1");
      }
    });
  }

  // -----------------------------------------------
  //  EVENT: Load Button (pehli baar)
  // -----------------------------------------------
  $("#loadBtn").click(function () {
    fetchPosts(currentPage);
  });

  // -----------------------------------------------
  //  EVENT: Load More Button
  // -----------------------------------------------
  $("#loadMoreBtn").click(function () {
    fetchPosts(currentPage);
  });

  // -----------------------------------------------
  //  EVENT: Clear Button
  //  Sab posts hata do aur reset karo
  // -----------------------------------------------
  $("#clearBtn").click(function () {
    $("#postsList").fadeOut(200, function () {
      $(this).empty().show();         // Empty karke wapas dikhao
    });

    totalLoaded  = 0;
    currentPage  = 1;

    $("#loadedCount").text("0 posts loaded");
    $("#loadMoreBtn, #clearBtn").hide();
    $("#loadBtn").fadeIn(300);
    $("#emptyState").fadeIn(300);
  });

});