(function ($) {
  module('jQuery#happyScrollingJquery', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.happyScrollingJquery(), this.elems, 'should be chainable');
  });

  test('is happyScrollingJquery', function () {
    expect(1);
    strictEqual(this.elems.happyScrollingJquery().text(), 'happyScrollingJquery0happyScrollingJquery1happyScrollingJquery2', 'should be happyScrollingJquery');
  });

}(jQuery));
