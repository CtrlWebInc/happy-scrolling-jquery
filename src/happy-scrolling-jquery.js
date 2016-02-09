/*
 * 
 * 
 *
 * Copyright (c) 2016 Martin Grogan
 * Licensed under the MIT license.
 */
(function ($) {
  $.fn.happyScrollingJquery = function () {
    return this.each(function (i) {
      // Do something to each selected element.
      $(this).html('happyScrollingJquery' + i);
    });
  };
}(jQuery));
