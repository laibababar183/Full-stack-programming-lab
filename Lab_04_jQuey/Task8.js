// =============================================
// Home Task 8 — Quiz Game
// Task8.js  |  Features: DOM Manipulation,
//              Event Handling, Effects & Animations,
//              CSS Manipulation
// =============================================

$(document).ready(function () {

  // ===============================================
  //  QUIZ DATA — 8 Questions
  // ===============================================
  const questions = [
    {
      question: "What does jQuery's $() function do?",
      options: [
        "Creates a new HTML file",
        "Selects HTML elements from the DOM",
        "Sends an Ajax request",
        "Declares a JavaScript variable"
      ],
      correct: 1   // Index 1 = correct answer
    },
    {
      question: "Which jQuery method is used to hide an element with a fade effect?",
      options: ["hide()", "remove()", "fadeOut()", "slideUp()"],
      correct: 2
    },
    {
      question: "What does e.preventDefault() do in a jQuery event?",
      options: [
        "Stops the event from firing",
        "Removes the element from DOM",
        "Prevents the browser's default behavior (e.g. page reload)",
        "Delays the event by 1 second"
      ],
      correct: 2
    },
    {
      question: "Which method attaches an event handler in jQuery?",
      options: ["bind()", "attach()", "on()", "listen()"],
      correct: 2
    },
    {
      question: "What is jQuery method chaining?",
      options: [
        "Linking multiple HTML files together",
        "Calling multiple jQuery methods on the same element in one line",
        "Connecting to a database",
        "Using CSS classes on multiple elements"
      ],
      correct: 1
    },
    {
      question: "Which jQuery Ajax method sends a GET request to a URL?",
      options: ["$.post()", "$.send()", "$.request()", "$.get()"],
      correct: 3
    },
    {
      question: "What does .toggleClass() do in jQuery?",
      options: [
        "Always adds the class",
        "Always removes the class",
        "Adds the class if missing, removes it if present",
        "Renames the class"
      ],
      correct: 2
    },
    {
      question: "Which selector targets an element with id='box' in jQuery?",
      options: ['.box', '*box', '#box', 'id(box)'],
      correct: 2
    }
  ];

  // ===============================================
  //  State Variables
  // ===============================================
  let currentQ    = 0;    // Current question index
  let score       = 0;    // Correct answers count
  let answered    = false; // Agar question answer ho chuka hai

  const letters   = ['A', 'B', 'C', 'D'];  // Option badges

  // ===============================================
  //  showQuestion(index)
  //  Question aur options render karta hai
  //  DOM Manipulation — elements banata hai
  // ===============================================
  function showQuestion(index) {
    answered = false;

    let q = questions[index];

    // ---- Progress Bar update ---- Effects & Animation
    let pct = ((index) / questions.length) * 100;
    $("#progressFill").css("width", pct + "%");
    $("#progressText").text("Question " + (index + 1) + " of " + questions.length);

    // ---- Question text ----
    $("#qNumber").text("Q" + (index + 1));

    // ---- Animate question in ---- Effects & Animations
    $(".question-card").hide().fadeIn(300);
    $("#questionText").text(q.question);

    // ---- Clear previous options ----
    $("#optionsGrid").empty();

    // ---- Feedback clear ----
    $("#feedback").text("").removeClass("correct-fb wrong-fb");

    // ---- Hide Next button ----
    $("#nextBtn").hide();

    // ---- Build option buttons ---- DOM Manipulation
    $.each(q.options, function (i, optText) {
      let btn = $(
        "<button class='option-btn' data-index='" + i + "'>" +
          "<span class='opt-letter'>" + letters[i] + "</span>" +
          "<span>" + optText + "</span>" +
        "</button>"
      );
      $("#optionsGrid").append(btn);
    });
  }

  // ===============================================
  //  checkAnswer(selectedIndex)
  //  Answer check karta hai, CSS se highlight karta hai
  //  CSS Manipulation — classes add karke color change
  // ===============================================
  function checkAnswer(selectedIndex) {
    if (answered) return;
    answered = true;

    let correctIndex = questions[currentQ].correct;

    // Sab options disable karo
    $(".option-btn").prop("disabled", true);

    if (selectedIndex === correctIndex) {
      // ---- CORRECT ---- CSS Manipulation
      $(".option-btn[data-index='" + selectedIndex + "']")
        .addClass("correct");

      $("#feedback")
        .text("✓ Correct! Well done!")
        .addClass("correct-fb");

      score++;

    } else {
      // ---- WRONG ---- CSS Manipulation
      $(".option-btn[data-index='" + selectedIndex + "']")
        .addClass("wrong");

      // Sahi answer highlight karo
      $(".option-btn[data-index='" + correctIndex + "']")
        .addClass("correct");

      $("#feedback")
        .text("✗ Wrong! The correct answer is highlighted in green.")
        .addClass("wrong-fb");
    }

    // Next button dikhao
    if (currentQ < questions.length - 1) {
      $("#nextBtn").text("Next Question →").fadeIn(300);
    } else {
      $("#nextBtn").text("See Results →").fadeIn(300);
    }
  }

  // ===============================================
  //  showResult()
  //  Result screen dikhata hai — DOM + Animation
  // ===============================================
  function showResult() {
    let total   = questions.length;
    let wrong   = total - score;
    let percent = Math.round((score / total) * 100);

    // Message decide karo based on score
    let title, msg;
    if (percent === 100) {
      title = "Perfect Score! 🏆"; msg = "You're a jQuery master!";
    } else if (percent >= 75) {
      title = "Great Job! 🎉";     msg = "You really know your jQuery!";
    } else if (percent >= 50) {
      title = "Good Try! 💪";      msg = "A little more practice and you'll nail it.";
    } else {
      title = "Keep Practicing! 📚"; msg = "Review the jQuery concepts and try again.";
    }

    // Progress bar 100% fill
    $("#progressFill").css("width", "100%");

    // Screens switch karo — DOM Manipulation
    $("#quizScreen").fadeOut(300, function () {
      // Score ring aur stats set karo
      $("#scoreText").text(score + "/" + total);
      $("#resultTitle").text(title);
      $("#resultMsg").text(msg);

      // Stats boxes
      $("#resultStats").html(
        "<div class='stat-box correct-stat'>" +
          "<span class='stat-num'>" + score + "</span>" +
          "<span class='stat-label'>Correct</span>" +
        "</div>" +
        "<div class='stat-box wrong-stat'>" +
          "<span class='stat-num'>" + wrong + "</span>" +
          "<span class='stat-label'>Wrong</span>" +
        "</div>" +
        "<div class='stat-box pct-stat'>" +
          "<span class='stat-num'>" + percent + "%</span>" +
          "<span class='stat-label'>Score</span>" +
        "</div>"
      );

      // Result screen fadeIn — Effects & Animations
      $("#resultScreen").fadeIn(400);
    });
  }

  // ===============================================
  //  EVENT: Start Button
  // ===============================================
  $("#startBtn").click(function () {
    currentQ = 0;
    score    = 0;

    // Screens switch karo — DOM Manipulation
    $("#startScreen").fadeOut(300, function () {
      showQuestion(currentQ);
      $("#quizScreen").fadeIn(300);
    });
  });

  // ===============================================
  //  EVENT: Option Click — dynamically created buttons
  //  .on() use kiya kyunke options dynamically bante hain
  // ===============================================
  $(document).on("click", ".option-btn", function () {
    let selectedIndex = parseInt($(this).data("index"));
    checkAnswer(selectedIndex);
  });

  // ===============================================
  //  EVENT: Next Button
  // ===============================================
  $("#nextBtn").click(function () {
    currentQ++;

    if (currentQ < questions.length) {
      // Agle question par jao — fadeOut/fadeIn animation
      $("#optionsGrid, .question-card").fadeOut(200, function () {
        showQuestion(currentQ);
      });
    } else {
      // Quiz khatam — result dikhao
      showResult();
    }
  });

  // ===============================================
  //  EVENT: Restart Button
  // ===============================================
  $("#restartBtn").click(function () {
    currentQ = 0;
    score    = 0;

    $("#resultScreen").fadeOut(300, function () {
      showQuestion(0);
      $("#progressFill").css("width", "0%");
      $("#quizScreen").fadeIn(300);
    });
  });

});