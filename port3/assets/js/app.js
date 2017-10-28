$( document ).ready(function() {
  $('.button').click(function(){
    $('.button').removeClass('active');
    $(this).addClass('active');
    $(".block-1:first").css('margin-left', ($(this).data('num')-1)*-100+"vw")
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