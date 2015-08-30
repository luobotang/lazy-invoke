# lazy-invoke

Invoke a function asynchronously, lazily.

## usage

```hash
npm install lazy-invoke
```

```javascript
var LazyInvoke = require('lazy-invoke')

var lazyFn = LazyInvoke(function (msg) {
    console.log(msg)
}, 500)

lazyFn('hi, 1')
lazyFn('hi, 2')
lazyFn('hi, 3')
lazyFn('hi, 4')
lazyFn('hi, 5')

// after 500ms, output once:
// "hi, 5"
```
