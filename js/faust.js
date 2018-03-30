$(document).ready(function() {

  $('a.open').on('click', function() {
    opens = $(this).attr('for');
    console.log(opens);
    target = $('.hidden[id=' + opens + ']');
    $(this).addClass('clicked');
    target.show();
    setTimeout(function() {
      target.addClass('visible');
    }, 100);
  })

  $('a.close').on('click', function() {
    closes = $(this).attr('for');
    console.log(closes);
    target = $('.shown[hideid=' + closes + ']');
    $(this).addClass('clicked'); // might affect in bad way?
    target.show();
    setTimeout(function() {
      target.addClass('hidden');
    }, 100);
  })

  $('a.hide').on('click', function() {
    // setTimeout(function() {

    // $(this).addClass('hidden'); // docchika?
		$(this).hide();
    $(this).removeClass('visible'); // docchika shika kaicha dame nara kocchi nokosu
    // }, 100);
  })
  // $('a.longer').on('click', function()) {
  // 	lengthen = $(this).attr('for');
  // 	console.log(lengthen);
  // 	target = $('.hidden[]')
  //
});
