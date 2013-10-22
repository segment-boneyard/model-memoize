describe('model-memoize', function () {
  var memoize = require('model-memoize')
    , assert = require('assert')
    , model = require('model');

  var Model = model('model')
    .attr('name')
    .attr('id')
    .use(memoize([
      { id: 1, name: 'a' },
      { id: 2, name: 'b' }
    ]));

  it('should accept initial values up front', function (done) {
    Model.get(1, function (err, model) {
      assert(model);
      assert('a' === model.name());
      done();
    });
  });

  it('should memoize new instances', function (done) {
    var model = new Model({ id: 3, name: 'c' });
    Model.get(3, function (err, res) {
      assert(res);
      assert('c' === res.name());
      done();
    });
  });
});