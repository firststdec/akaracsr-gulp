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
  var totalNumber = 0;
  var date = new Date();
  var today = (date.getMonth() + 1).toString() + '-' + date.getDate().toString();
  var numberList = {
    '10-14': 0,
    '10-15': 0,
    '10-16': 0,
    '10-17': 5638,
    '10-18': 10484,
    '10-19': 14996,
    '10-20': 19054,
    '10-21': 23000,
    '10-22': 26044,
    '10-23': 29426,
    '10-24': 33260,
    '10-25': 37334,
    '10-26': 42632,
    '10-27': 46916,
    '10-28': 50072,
    '10-29': 53890,
    '10-30': 56934,
    '10-31': 61556,
    '11-1': 69448,
    '11-2': 77792,
    '11-3': 83656,
    '11-4': 90082,
    '11-5': 96734,
    '11-6': 104062,
    '11-7': 112748
  };

  if (numberList[today] !== 'undefined') {
    totalNumber = numberList[today];
  }

  $('.js-inview-number').waypoint(function () {
    var _this = this;

    if ($(this.element).hasClass(ANIMATED_CLASS)) {
      return false;
    }

    $(this.element).addClass(ANIMATED_CLASS);
    setTimeout(function () {
      /*var number = totalNumber > 0 ? totalNumber : $(_this.element).data('number');//First Edited*/
      var number = totalNumber > 0 ? totalNumber : 0;
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
    pagination: {
      el: '.c-why-we-do__pagination',
      type: 'bullets',
      clickable: true
    },
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
    $list.children().filter(":gt(".concat(view - 1, ")")).addClass(HIDDEN_CLASS);
    visible = $list.children().filter(':visible').length;
  } else {
    $button.hide();
  }

  $button.on('click', function (e) {
    e.preventDefault();

    if (visible < total) {
      var $target = $list.children().filter(":lt(".concat(visible + view, ")"));
      $target.removeClass(HIDDEN_CLASS).queue(function () {
        var header = $('#gnav').hasClass('is-fixed') ? $('#gnav').height() : 20;
        var offset = $list.children().eq(visible).offset().top - header;
        $('body, html').stop().animate({
          scrollTop: offset
        }, 100, function () {
          $target.children().addClass('is-animated');
        });
        $('this').dequeue();
      });
      visible = $list.children().filter(':visible').length;

      if (visible >= total) {
        $button.hide();
      }
    }

    return false;
  });
};
/* ----------------------------------------------------------
  Polyfill
---------------------------------------------------------- */
// isNan


if (!Number.isNan) {
  Object.defineProperty(Number, 'isNaN', {
    value: function value(_value) {
      return _value !== _value;
    }
  });
}