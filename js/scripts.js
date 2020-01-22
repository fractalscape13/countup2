$(document).ready(function() {
  $("#form").submit(function(event){
    var countTo = parseInt($("input#countTo").val());
    var countBy = parseInt($("input#countBy").val());
    var outputNums = [];
    
    if (countBy > countTo) {
    alert("Please enter couuntTo number greater than counBy number");
    location.reload();
    } else if (countBy > 0 && countTo > 0) {
      for (var i=countBy; i <= countTo; i += countBy) {
        outputNums.push(i);
      };
      outputNums.forEach(function(outputNum) {
        $("#results").append(outputNum + "<br>");
      });
    } else {
      alert("Please enter numbers");
      location.reload();

    }
    event.preventDefault();
  });



});