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
});



