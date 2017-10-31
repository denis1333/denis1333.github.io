$( document ).ready(function() {
  var c1btn = $('#c1').find('.button');
  c1btn.click(function(){
    c1btn.removeClass('active');
    $(this).addClass('active');
    $("#c1blockStart").css('margin-left', ($(this).data('num')-1)*-100-($(this).data('num')-1)*0.5+"vw")
  })

  var c2btn = $('#c2').find('.button');
  c2btn.click(function(){
    c2btn.removeClass('active');
    $(this).addClass('active');
    $("#c2blockStart").css('margin-left', ($(this).data('num')-1)*-100-($(this).data('num')-1)*0.5+"vw")
  })

  $('.image').hover(function(){
    var url = $(this).css('background');
    url = url.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');
    console.log("url("+url+")");
    $('.imagec').css('background', "url("+url+")");
  })

  $('.image').mouseleave(function(){
    $('.imagec').css('background', "#5ec2e7");
  })
});