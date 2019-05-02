$(document).ready(function () {
  $('.button').click(function (event) {
    // $('.text').fadeToggle(5000);
    $('.text').toggleClass('active');
  })

  $('.ad-close').click(function (e) {
    $('.ad').hide();
  })
});