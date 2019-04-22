
$(function () {

  function scrollLock () {
    var scrollPosition = [
      self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    var $html = $('html, body'); // it would make more sense to apply this to body, but IE7 won't have that
    $html.data('scroll-position', scrollPosition);
    $html.data('previous-overflow', $html.css('overflow'));
    $html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
  }

  function scrollUnlock () {
    var $html = $('html, body'); // it would make more sense to apply this to body, but IE7 won't have that
    var scrollPosition = $html.data('scroll-position');
    $html.css('overflow', $html.data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
  }

 $('#r_menu_boxs').each (function () {
    var $that = $(this);
    $that.find ('span').click (function () {
      $(this).toggleClass ('s');
    });
  });

  $('.smenu').click(function() {
    $('.smenu_boxs').addClass('smenu_open');
  });

  $('.icon-menu').click(function() {
    $('.main').addClass('nav_hover');
    $('#r_menu_boxs').addClass('nav_open');
    $('#menu_back ').addClass('b_open');
    scrollLock();
  });


  $('#menu_back').click(function() {
    $('.main').removeClass('nav_hover');
    $('#r_menu_boxs').removeClass('nav_open');
    $('#menu_back').removeClass('b_open');
    scrollUnlock();
  });

  $('.icon-close').click(function() {
    $('.main').removeClass('nav_hover');
    $('#r_menu_boxs').removeClass('nav_open');
    $('#menu_back').removeClass('b_open');
    scrollUnlock();
});

  
  $(".teachPic, .icon_box, .navicon").imgLiquid ();

  // $("").imgLiquid (position: '50%');

  // $('.closeOpen').click(function() {
  //   $('.seIteamAll').addClass('seshow');
  // });

});

// 回到上面按鈕
$('#top_btn').click (function () {
    $('html, body').animate ({ scrollTop: 0 }, 'slow');
});




