$(window).load(function() {

  $(".before-after").twentytwenty({
    before_label: 'без скинали',
    after_label: 'со скинали'
  });

  $('.before-slider').slick({
    draggable: false,
    dots: true,
    dotsClass: 'before-slider__dots'
  });

  $('.reviews-slider').slick({
    draggable: false,
    dots: true,
    dotsClass: 'reviews-slider__dots'
  });

  $('.menu-button').on('click', function (e) {
    $('.menu').toggleClass('menu--active')
  })
  
  $("a[href^='#']").click(function name(params) {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top -100 + 'px'})
  })

  // Selector

	$('.form__select').on('click', function() {
		$('.select__dropdown').toggleClass('select__dropdown--open');
  });
  
  $('.select__option').on('click', function(){
		var value = $(this).attr('data-value');
		$('#select-type').val(value);
		$('.select--checked').text(value);
		$('.select__dropdown').toggleClass('select__dropdown--open');
  });
  
  var reviews = $('.reviews');
  var reviewsTop = reviews.offset().top;
  $(window).bind('scroll', function () {
    var windowTop = $(this).scrollTop();
    if(windowTop > reviewsTop) {
      $('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21414.08122503614!2d37.65180042095295!3d55.65633056581003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab36c5589527b%3A0x46c49e407c219576!2z0JrQsNGI0LjRgNGB0LrQvtC1INGILiwgMjMsINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGPLCAxMTU0Nzg!5e0!3m2!1sru!2ses!4v1556899351119!5m2!1sru!2ses" width="100%" height="400" style="border:0" allowfullscreen></iframe>')
      $(window).unbind('scroll')
    }
  })
});



