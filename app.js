$(document).ready(function () {

  var text = $("#title").text(),
    char = 0;
  $("#title").text("");
  var typing = setInterval(function () {
    if (char < text.length) {
      $("#title").text($("#title").text() + text[char++]);
    } else {
      clearInterval(typing);
    }
  }, 40);

  $(".row").each(function (index) {
    var element = $(this);
    setTimeout(function () {
      element.addClass("row-start-animation");
    }, 300 * index);
  });

  var CalculateBtn = $(".calculate");
  var ResultTxt = $(".result");
  var SeveralDisTxt = $(".severaldis");
  var clickCount = 0;

  $("#restart").click(function () {
    // location.reload();
    var PercentageToRemoveIpt = parseFloat($(".percentage-to-remove").val());
    $(".percentage-to-remove").val(PercentageToRemoveIpt);
    $(".percentage").val(100);
    clickCount = 0;
    SeveralDisTxt.text("Several disqualifications: ___");
    ResultTxt.text("Result: ___");
  });

  CalculateBtn.click(function () {
    var PercentageToRemoveIpt = parseFloat($(".percentage-to-remove").val());
    var PercentageIpt = parseFloat($(".percentage").val());

    result = PercentageIpt - PercentageToRemoveIpt;
    $(".percentage").val(result);

    console.log("PercentageIpt:", PercentageIpt);
    console.log("PercentageToRemoveIpt:", PercentageToRemoveIpt);
    console.log("Result:", result);

    clickCount++;
    SeveralDisTxt.text("Several disqualifications: " + clickCount);
    ResultTxt.text("Result: " + result);
  });

  function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    button.appendChild(circle);
  }

  const button = document.getElementById("calculate");
  button.addEventListener("click", createRipple);
});
