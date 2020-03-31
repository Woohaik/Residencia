let buttonShow = false;
const navBar = $(".secondNav__navbar");
const scroll = $("#pageScroll");
scroll.hide();
/**************Eventos**********************/
//Scroll
$(window).scroll(() => {
  let navImage = $(".secondNav__image img");


  if ($(this).scrollTop() >= 50) {
    scroll.slideDown(500);
    navImage.css("width", "240px");
    if (buttonShow == false) {
      scroll.css("bottom", "0px");
    } else {
      scroll.addClass("leftT");
    }
  } else {
    scroll.slideUp(500);
    if (buttonShow == false) {
      scroll.css("bottom", "-60px");
    } else {
      scroll.removeClass("leftT");
    }
    navImage.css("width", "290px");
  }
});
//Rezise
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    navBar.show(250);
  }

  if (window.innerWidth < 992) {
    navBar.hide(250);
  }

  if (window.innerWidth <= 1630) {
    buttonShow = true;
    $("#pageScroll").addClass("scrollModify");
  } else {
    buttonShow = false;
    $("#pageScroll").removeClass("scrollModify");
  }
});

//Interaccion
$("#pageScroll").click(() => {
  $("html, body").animate({ scrollTop: 0 }, 500);
  return false;
});

$("#dropdownCountry").hover(
  () => {
    $("#dropdownCountry .dropdown__options").fadeIn(200);
  },
  () => {
    $("#dropdownCountry .dropdown__options").fadeOut(200);
  }
);

$("#iconified").on("keyup", () => {
  let input = $(this);
  if (input.val().length === 0) {
    input.addClass("empty");
  } else {
    input.removeClass("empty");
  }
});

/**************Eventos**********************/
toggleNav = () => {
  navBar.toggle(250);
};
