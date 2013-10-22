# model-memoize

  Memoizes the model objects returned from the server to reduce outbound requests and speed up initial page loading.

## Installation

    $ component install segmentio/model-memoize

## Examples

  Just `use` the plugin:

```js
var memoize = require('model-memoize');
var model = require('model');

var Person = model('person')
  .use(memoize)
  .attr('id')
  .attr('name');
```

  You can also pass in an array of models to be memoized from the beginning, which is useful for passing in models served from the server on initial page load:

```js
var Person = model('person')
  .attr('id')
  .attr('name')
  .use(memoize(window.people)); // array of `person` objects
```

  If you're passing in an array, make sure to define your Model's attributes first.

## License

  MIT
