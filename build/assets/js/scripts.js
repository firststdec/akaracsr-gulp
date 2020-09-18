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
  var $prev = $nav.children('.c-activity__nav-prev');
  var $next = $nav.children('.c-activity__nav-next');
  var DISABLED_CLASS = 'is-disabled';

  var checkPosition = function checkPosition() {
    var boxWidth = $scroller.width();
    var scrollWidth = $scroller.get(0).scrollWidth;
    var left = $scroller.scrollLeft();
    $prev.toggleClass(DISABLED_CLASS, left <= 0);
    $next.toggleClass(DISABLED_CLASS, left + boxWidth >= scrollWidth);
  };

  $prev.on('click', function () {
    if ($(this).hasClass(DISABLED_CLASS)) {
      return false;
    }

    $scroller.stop().animate({
      scrollLeft: '-=600'
    }, 150, checkPosition);
  });
  $next.on('click', function () {
    if ($(this).hasClass(DISABLED_CLASS)) {
      return false;
    }

    $scroller.stop().animate({
      scrollLeft: '+=600'
    }, 150, checkPosition);
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
  var visible = 0;

  if (total > view) {
    $list.children().filter(":gt(".concat(view - 1, ")")).addClass(HIDDEN_CLASS);
    visible = $list.children().filter(':visible').length;
  } else {
    $button.hide();
  }

  $button.on('click', function () {
    if (visible < total) {
      $list.children().filter(":lt(".concat(visible + view, ")")).removeClass(HIDDEN_CLASS);
      visible = $list.children().filter(':visible').length;

      if (visible >= total) {
        $button.hide();
      }
    }

    return false;
  });
};