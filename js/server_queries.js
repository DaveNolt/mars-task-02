$(document).ready(function() {
  $(".calc__button-order").click(function (){
    $.ajax({
      url: "ajax.php",
        dataType: "json",
      success: function(data) {
        alert(data["text"] + data["val"]);
      },
      error: function(xhr, opts, err) {
        alert(err);
      }
    });
  });
});