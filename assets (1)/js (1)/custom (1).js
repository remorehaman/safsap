$(function () {
	$('body').removeClass('clicked');
	lazy();
	new WOW().init();
	/*-------------------------------------STICKY_NAV--GO_TO_TOP-------------------------*/
	var previousScroll = 0,
		headMainHeight = $('.header_main').height(),
		headerOrgOffset = $('.header_main').offset().top + headMainHeight;

	$(window).scroll(function () {
		var currentScroll = $(this).scrollTop();

		if (currentScroll > headerOrgOffset) {
			/* if (currentScroll > previousScroll)
				$('body').removeClass('fixed');
			else */
				$('body').addClass('sticky fixed');
		}
		else
			$('body').removeClass('sticky fixed');

		previousScroll = currentScroll;

		if ($(this).scrollTop() > 200)
			$('.scrollup').fadeIn();
		else
			$('.scrollup').fadeOut();
	});
	$('.scrollup').click(function (e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, 300);
		return false;
	});
/* ===============================FAQS========================================= */
	$(function () {
		$(".sk_toggle .sk_box > .sk_ques").bind("click", function () {
			if ($(this).parent().hasClass('opened')) {
				$(this).parent().siblings().removeClass('opened');
				$(this).parent().siblings().children(".sk_ans").slideUp(300);
				$(this).parent().removeClass('opened');
				$(this).next('.sk_ans').slideUp(300);
				return false;
			} else {
				$(this).parent().siblings().removeClass('opened');
				$(this).parent().siblings().children(".sk_ans").slideUp(300);
				$(this).parent().addClass('opened');
				$(this).next('.sk_ans').slideDown(300);
				return false;
			}
		});
	});
	/* ------------------------------------header search-------------------------- */
	$(".search .sbtn").click(function() {
		$(this).parent(".search").toggleClass("collapsed");
	});
  
 
	/*-------------------------------------RESPONSIVE_NAV--------------------------------*/
	var nav = $(".nav_menu").html();
	$(".responsive_nav").append(nav);
	if ($(".responsive_nav").children('ul').length) {
		$(".responsive_nav").addClass('mCustomScrollbar');
		$('.mCustomScrollbar').mCustomScrollbar({ scrollbarPosition: "outside" });
	}

	$('.responsive_btn').click(function () {
		$('html').addClass('responsive');
	});
	$('.bodyOverlay').click(function () {
		if ($('html.responsive').length)
			$('html').removeClass('responsive');
	});

	$(document).on('click', '.subarrow', function () {
		$(this).parent().siblings().find('.sub-menu').slideUp();
		$(this).parent().siblings().removeClass('opened');

		$(this).siblings('.sub-menu').slideToggle();
		$(this).parent().toggleClass('opened');
	});

	/*-------------------------------------WIDGET----------------------------------------*/
	$('.wform').click(function (event) {
		$('.widget_form').slideToggle(300);
	});
	$('.wmap').click(function () {
		var ahref = $(this).data('href');
		window.location.href = ahref;
	});

	/*-------------------------------------TABLE_WRAP------------------------------------*/
	$('table').each(function () {
		if (!$(this).parent().hasClass('table-responsive')) {
			$(this).wrap('<div class="table-responsive"></div>');
		}
	});

	/*-------------------------------------CUSTOM_SCROLLBAR------------------------------*/
	$('.mCustomScrollbar').mCustomScrollbar({ scrollbarPosition: "outside" });

	/*-------------------------------------STICKY_SIDEBAR--------------------------------*/
	/* $('.stickySidebar, .stickyContent').theiaStickySidebar({ additionalMarginTop: 60 }); */

	/*-------------------------------------HOME_SLIDER-----------------------------------*/
	$(".homeslider").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		smartSpeed: 1000,
		margin: 1,
		dots: false,
		nav: true,
		navElement: 'div',
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		lazyLoad: true,
		responsive: {
			0: { items: 1 },
			480: { items: 1 },
			600: { items: 1 },
			768: { items: 1 },
			992: { items: 1 },
			1600: { items: 1 }
		},
	});



	$(".cat-slider").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		smartSpeed: 1000,
		margin: 30,
		dots: false,
		nav: true,
		navElement: 'div',
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		lazyLoad: true,
		responsive: {
			0: { items: 2 },
			480: { items: 2 },
			600: { items: 4 },
			768: { items: 4 },
			992: { items: 4 },
			1600: { items: 4 }
		},
	});

	$(".dtls-slider").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		smartSpeed: 1000,
		margin: 30,
		dots: false,
		nav: true,
		navElement: 'div',
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		lazyLoad: true,
		responsive: {
			0: { items: 2 },
			480: { items: 2 },
			600: { items: 4 },
			768: { items: 4 },
			992: { items: 4 },
			1600: { items: 4 }
		},
	});

	/*-------------------------------------HOME_ABOUT------------------------------------*/
	var $window = $(window);
	function resize() {
		var winWidth = $window.width(),
			containerWidth = $('.container').outerWidth(),
			contentWidth = $('.content_section').outerWidth(),
			contentHeight = $('.content_section').outerHeight(),
			contentInWidth = contentWidth + (winWidth - containerWidth) / 2 + 150,
			imageWidth = (containerWidth - contentWidth) + (winWidth - containerWidth) / 2;

		$('.content_section_inner').css({ 'width': contentInWidth });
		$('.image_section_inner').css({
			'width': imageWidth + 50,
			'height': contentHeight + 100
		});
	}
	$window.resize(resize).trigger('resize');
});

function lazy() {
	$(".lazy").lazyload({
		effect: 'fadeIn',
		delay: 1000
	});
}

function ajaxFormSubmit(form, formData, btn, msg, url, file) {
	btn.addClass('clicked');
	if (file == true) {
		$.ajax({
			type: 'POST',
			url: url,
			data: formData,
			mimeType: "multipart/form-data",
			processData: false,  /* tell jQuery not to process the data */
			contentType: false,  /* tell jQuery not to set contentType */
			cache: false,
			success: function (response) {

				response = JSON.parse(response);

				if (response['type'] == 1) {
					form[0].reset();
					msg.html('<span class="success">' + response['message'] + '</span>');
					setTimeout(function () {
						if (response['goto'])
							window.location.href = response['goto'];
						else
							window.location.reload();
						btn.removeClass('clicked');
					}, 3000);
				} else {
					msg.html('<span class="error">' + response['message'] + '</span>');
					btn.removeClass('clicked');
				}
			}
		});
	}
	else {
		$.ajax({
			type: 'POST',
			url: url,
			data: formData,
			success: function (response) {
				if (response.type == 1) {
					form[0].reset();
					msg.html('<span class="success">' + response.message + '</span>');
					setTimeout(function () {
						if (response.goto)
							window.location.href = response.goto;
						else
							window.location.reload();
						btn.removeClass('clicked');
					}, 3000);
				} else {
					msg.html('<span class="error">' + response.message + '</span>');
					btn.removeClass('clicked');
				}
			}
		});
	}
}