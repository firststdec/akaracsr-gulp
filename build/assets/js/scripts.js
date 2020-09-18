"use strict";

$(function () {
  initModal();
  heroSlider();
  whyWeDoSlider();
  childrenSoundSlider();
  activityScroller();
  ourAssociateMore();
});
$(window).on('load', function () {
  initAnimation();
});

var countUpDown = function countUpDown($number, baseNumber, resultNumber) {
  $number.countTo({
    from: baseNumber,
    to: resultNumber,
    speed: 600,
    formatter: function formatter(value, options) {
      return Math.abs(value).toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    }
  });
};

var initAnimation = function initAnimation() {
  $('.js-inview-number').waypoint(function () {
    var _this = this;

    if ($(this.element).hasClass(ANIMATED_CLASS)) {
      return false;
    }

    $(this.element).addClass(ANIMATED_CLASS);
    setTimeout(function () {
      var number = $(_this.element).data('number');
      countUpDown($(_this.element), 0, number);
    }, 900);
  }, {
    offset: '80%'
  });
  var ANIMATED_CLASS = 'is-animated';
  $('.js-inview').waypoint(function () {
    if ($(this.element).hasClass(ANIMATED_CLASS)) {
      return false;
    }

    $(this.element).addClass(ANIMATED_CLASS);
  }, {
    offset: '80%'
  });
};

var initModal = function initModal() {
  $('.js-modal-video').modaal({
    type: 'video'
  });
};

var whyWeDoSlider = function whyWeDoSlider() {
  var slider = new Swiper('.js-what-we-do-slider', {
    loop: false,
    speed: 500,
    spaceBetween: 50,
    draggable: true,
    pagination: false,
    resistanceRatio: 0
  });
  slider.on('slideChange', function () {
    $('.c-why-we-do__slider-prev').toggleClass('is-disabled', slider.isBeginning);
    $('.c-why-we-do__slider-next').toggleClass('is-disabled', slider.isEnd);
  });
  $('.c-why-we-do__slider-prev').on('click', function () {
    slider.slidePrev();
  });
  $('.c-why-we-do__slider-next').on('click', function () {
    slider.slideNext();
  });
};

var childrenSoundSlider = function childrenSoundSlider() {
  var slider = new Swiper('.js-children-sound-slider', {
    loop: false,
    speed: 500,
    spaceBetween: 50,
    slidesPerView: 1,
    draggable: true,
    pagination: {
      el: '.js-children-sound-pagination',
      type: 'bullets',
      clickable: true
    },
    resistanceRatio: 0
  });
};

var heroSlider = function heroSlider() {
  var slider = new Swiper('.js-hero-slider', {
    loop: false,
    speed: 500,
    spaceBetween: 0,
    draggable: false,
    pagination: false,
    resistanceRatio: 0
  });
  slider.on('slideChange', function () {
    $('.c-hero__nav-prev').toggleClass('is-disabled', slider.isBeginning);
    $('.c-hero__nav-next').toggleClass('is-disabled', slider.isEnd);
  });
  $('.c-hero__nav-prev').on('click', function () {
    slider.slidePrev();
  });
  $('.c-hero__nav-next').on('click', function () {
    slider.slideNext();
  });
};

var activityScroller = function activityScroller() {
  var $nav = $('.js-activity-nav');

  if (!$nav.length) {
    return false;
  }

  var $scroller = $('.js-activity-scroller');
  var $row = $('.js-activity-row');
  var $prev = $nav.children('.c-activity__nav-prev');
  var $next = $nav.children('.c-activity__nav-next');
  var DISABLED_CLASS = 'is-disabled';
  var arrPos = [];
  var curIndex = 0;
  $row.find('.js-point').each(function () {
    arrPos.push($(this).position().left);
  });

  var checkPosition = function checkPosition() {
    var boxWidth = $scroller.width();
    var scrollWidth = $scroller.get(0).scrollWidth;
    var left = $scroller.scrollLeft();
    $prev.toggleClass(DISABLED_CLASS, left <= 0);
    $next.toggleClass(DISABLED_CLASS, left + boxWidth >= scrollWidth);
  };

  $prev.on('click', function () {
    if ($(this).hasClass(DISABLED_CLASS) || $scroller.is(':animated')) {
      return false;
    }

    if (curIndex > 0) {
      curIndex--;
    }

    $scroller.stop().animate({
      scrollLeft: arrPos[curIndex]
    }, 400, checkPosition);
  });
  $next.on('click', function () {
    if ($(this).hasClass(DISABLED_CLASS) || $scroller.is(':animated')) {
      return false;
    }

    if (curIndex < arrPos.length) {
      curIndex++;
    }

    $scroller.stop().animate({
      scrollLeft: arrPos[curIndex]
    }, 400, checkPosition);
  });
};

var ourAssociateMore = function ourAssociateMore() {
  var $list = $('.js-our-associate-list');

  if (!$list.length) {
    return false;
  }

  var $button = $('.js-our-associate-button');
  var view = 3;
  var total = $list.children().length;
  var HIDDEN_CLASS = 'is-hidden';
  var FADEIN_CLASS = 'u-fade-in';
  var visible = 0;

  if (total > view) {
    $list.children().filter(":gt(".concat(view - 1, ")")).addClass(FADEIN_CLASS).addClass(HIDDEN_CLASS);
    visible = $list.children().filter(':visible').length;
  } else {
    $button.hide();
  }

  $button.on('click', function (e) {
    e.preventDefault();

    if (visible < total) {
      $list.children().filter(":lt(".concat(visible + view, ")")).removeClass(HIDDEN_CLASS).queue(function () {
        var header = $('#gnav').hasClass('is-fixed') ? $('#gnav').height() : 20;
        var offset = $list.children().eq(visible).offset().top - header;
        $('body, html').stop().animate({
          scrollTop: offset
        }, 200);
        $('this').dequeue();
      }).stop().animate({
        opacity: 1
      }, 1000);
      visible = $list.children().filter(':visible').length;

      if (visible >= total) {
        $button.hide();
      }
    }

    return false;
  });
};