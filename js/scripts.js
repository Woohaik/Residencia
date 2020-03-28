var btnS = false;
var t = $(".secondNav__navbar");
let s = $("#pageScroll");
s.hide();
/**************Eventos**********************/
//Scroll
$(window).scroll(function() {
  let m = $(".secondNav__image img");


  if ($(this).scrollTop() >= 50) {
    s.slideDown(500);
    m.css("width", "240px");
    if (btnS == false) {
      s.css("bottom", "0px");
    } else {
      s.addClass("leftT");
    }
  } else {
    s.slideUp(500);
    if (btnS == false) {
      s.css("bottom", "-60px");
    } else {
      s.removeClass("leftT");
    }
    m.css("width", "290px");
  }
});
//Rezise
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    t.show(250);
  }

  if (window.innerWidth < 992) {
    t.hide(250);
  }

  if (window.innerWidth <= 1630) {
    btnS = true;
    $("#pageScroll").addClass("scrollModify");
  } else {
    btnS = false;
    $("#pageScroll").removeClass("scrollModify");
  }
});

//Interaccion
$("#pageScroll").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 500);
  return false;
});

$("#dropdownCountry").hover(
  function() {
    $("#dropdownCountry .dropdown__options").fadeIn(200);
  },
  function() {
    $("#dropdownCountry .dropdown__options").fadeOut(200);
  }
);

$("#iconified").on("keyup", function() {
  var input = $(this);
  if (input.val().length === 0) {
    input.addClass("empty");
  } else {
    input.removeClass("empty");
  }
});

/**************Eventos**********************/
toggleNav = () => {
  t.toggle(250);
};
