function calculatePrice () {
  var result = 0;

  $(".item_selected").each(function (i, el) {
    if(el.textContent === "Газель") {
      $('[data-name="rent"]').attr('data-price', 450);
    }
    if(el.textContent === "Удл. газель"){
      $('[data-name="rent"]').attr('data-price', 500);
    }
    result += parseInt(el.getAttribute("data-price"));
  });

  $(".option__number__val").each(function(i, el) {
    if (el.getAttribute("data-name") == "worktime"){
      result += parseInt($("[data-name='worker']").text()) * parseInt(el.getAttribute("data-price")) * parseInt(el.textContent);
    }
    else if (el.getAttribute("data-name") != "worker") {
      result += parseInt(el.getAttribute("data-price")) * parseInt(el.textContent);
    }
  });

  $(".price__val").text(result);
}

