$(document).ready(function () {
  $("a[href$='.jpg']").addClass('fa fa-file-photo-o');
  $("a[href$='.doc']").addClass('fa fa-file-word-o');
  $("a[href$='.zip']").addClass('fa fa-file-zip-o');
  $('a').click(function (e) {
    e.preventDefault();
  });
});