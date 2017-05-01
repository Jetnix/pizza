$(document).ready(function() {
  $("form#form").submit(function(event) {
  var fav1Input = $("input#fav1-input").val();
  var fav2Input = $("input#fav2-input").val();
  var fav3Input = $("input#fav3-input").val();
  var array = [fav1Input, fav2Input, fav3Input];
  array.push("pizza");

  $(".btn").click(function() {
    console.log(fav1Input, fav2Input, fav3Input, array);
  $(".list").show();
  });

  $(".fav1").text(array[0]);
  $(".fav2").text(array[1]);
  $(".fav3").text(array[2]);
  $(".fav4").text(array[3]);

  event.preventDefault();
  });
});
