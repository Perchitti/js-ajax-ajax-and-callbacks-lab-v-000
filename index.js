$(document).ready(function (){

  $.get("name.html"), function(response){

    $("name").html(response);
  }

});
