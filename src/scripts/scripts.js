$(function () {
  initModal();
  heroSlider();
  whyWeDoSlider();
  childrenSoundSlider();
  activityScroller();
  ourAssociateMore();
});

$(window).on('load', () => {
  initAnimation();
});

const countUpDown = ($number, baseNumber, resultNumber) => {
  $number.countTo({
    from: baseNumber,
    to: resultNumber,
    speed: 600,
    formatter: (value, options) => {
      return Math.abs(value)
        .toFixed(options.decimals)
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    },
  });
};

const initAnimation = () => {
  let totalNumber = 0;
  const date = new Date();
  const today = (date.getMonth() + 1).toString() + '-' + date.getDate().toString();
  const numberList = {
    '10-14': 5638,
    '10-15': 5638,
    '10-16': 5638,
    '10-17': 10484,
    '10-18': 14996,
    '10-19': 19054,
    '10-20': 23000,
    '10-21': 26044,
    '10-22': 29426,
    '10-23': 33260,
    '10-24': 37334,
    '10-25': 42632,
    '10-26': 46916,
    '10-27': 50072,
    '10-28': 53890,
    '10-29': 56934,
    '10-30': 61556,
    '10-31': 69448,
    '11-1': 77792,
    '11-2': 83656,
    '11-3': 90082,
    '11-4': 96734,
    '11-5': 104062,
    '11-6': 112748,
  };

  if (numberList[today] !== 'undefined') {
    totalNumber = numberList[today];
  }

  $('.js-inview-number').waypoint(
    function () {
      if ($(this.element).hasClass(ANIMATED_CLASS)) {
        return false;
      }

      $(this.element).addClass(ANIMATED_CLASS);
      setTimeout(() => {
        const number = totalNumber > 0 ? totalNumber : $(this.element).data('number');
        countUpDown($(this.element), 0, number);
      }, 900);
    },
    { offset: '80%' }
  );

  const ANIMATED_CLASS = 'is-animated';

  $('.js-inview').waypoint(
    function () {
      if ($(this.element).hasClass(ANIMATED_CLASS)) {
        return false;
      }

      $(this.element).addClass(ANIMATED_CLASS);
    },
    { offset: '80%' }
  );
};

const initModal = () => {
  $('.js-modal-video').modaal({ type: 'video' });
};

const whyWeDoSlider = () => {
  const slider = new Swiper('.js-what-we-do-slider', {
    loop: false,
    speed: 500,
    spaceBetween: 50,
    draggable: true,
    pagination: {
      el: '.c-why-we-do__pagination',
      type: 'bullets',
      clickable: true
    },
    resistanceRatio: 0,
  });

  slider.on('slideChange', () => {
    $('.c-why-we-do__slider-prev').toggleClass(
      'is-disabled',
      slider.isBeginning
    );
    $('.c-why-we-do__slider-next').toggleClass('is-disabled', slider.isEnd);
  });

  $('.c-why-we-do__slider-prev').on('click', () => {
    slider.slidePrev();
  });

  $('.c-why-we-do__slider-next').on('click', () => {
    slider.slideNext();
  });
};

const childrenSoundSlider = () => {
  const slider = new Swiper('.js-children-sound-slider', {
    loop: false,
    speed: 500,
    spaceBetween: 50,
    slidesPerView: 1,
    draggable: true,
    pagination: {
      el: '.js-children-sound-pagination',
      type: 'bullets',
      clickable: true,
    },
    resistanceRatio: 0,
  });
};

const heroSlider = () => {
  const slider = new Swiper('.js-hero-slider', {
    loop: false,
    speed: 500,
    spaceBetween: 0,
    draggable: false,
    pagination: false,
    resistanceRatio: 0,
  });

  slider.on('slideChange', () => {
    $('.c-hero__nav-prev').toggleClass('is-disabled', slider.isBeginning);
    $('.c-hero__nav-next').toggleClass('is-disabled', slider.isEnd);
  });

  $('.c-hero__nav-prev').on('click', () => {
    slider.slidePrev();
  });

  $('.c-hero__nav-next').on('click', () => {
    slider.slideNext();
  });
};

const activityScroller = () => {
  const $nav = $('.js-activity-nav');

  if (!$nav.length) {
    return false;
  }

  const $scroller = $('.js-activity-scroller');
  const $row = $('.js-activity-row');
  const $prev = $nav.children('.c-activity__nav-prev');
  const $next = $nav.children('.c-activity__nav-next');
  const DISABLED_CLASS = 'is-disabled';
  const arrPos = [];
  let curIndex = 0;

  $row.find('.js-point').each(function () {
    arrPos.push($(this).position().left);
  });

  const checkPosition = () => {
    const boxWidth = $scroller.width();
    const scrollWidth = $scroller.get(0).scrollWidth;
    const left = $scroller.scrollLeft();

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

    $scroller
      .stop()
      .animate({ scrollLeft: arrPos[curIndex] }, 400, checkPosition);
  });

  $next.on('click', function () {
    if ($(this).hasClass(DISABLED_CLASS) || $scroller.is(':animated')) {
      return false;
    }

    if (curIndex < arrPos.length) {
      curIndex++;
    }

    $scroller
      .stop()
      .animate({ scrollLeft: arrPos[curIndex] }, 400, checkPosition);
  });
};

const ourAssociateMore = () => {
  const $list = $('.js-our-associate-list');

  if (!$list.length) {
    return false;
  }

  const $button = $('.js-our-associate-button');
  const view = 3;
  const total = $list.children().length;
  const HIDDEN_CLASS = 'is-hidden';
  const FADEIN_CLASS = 'u-fade-in';
  let visible = 0;

  if (total > view) {
    $list
      .children()
      .filter(`:gt(${view - 1})`)
      .addClass(HIDDEN_CLASS);
    visible = $list.children().filter(':visible').length;
  } else {
    $button.hide();
  }

  $button.on('click', (e) => {
    e.preventDefault();

    if (visible < total) {
      const $target = $list.children().filter(`:lt(${visible + view})`);
      $target
        .removeClass(HIDDEN_CLASS)
        .queue(function () {
          const header = $('#gnav').hasClass('is-fixed')
            ? $('#gnav').height()
            : 20;
          const offset = $list.children().eq(visible).offset().top - header;

          $('body, html').stop().animate({ scrollTop: offset }, 100, () => {
              $target.children().addClass('is-animated');
            }
          );
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
    value: function(value) {
      return value !== value;
    }
  });
}
