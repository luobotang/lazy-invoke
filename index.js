var DEFAULT_DELAY_TIME_MS = 50

/*
 * @param {function} fn
 * @param {number} [delay=DEFAULT_DELAY_TIME_MS]
 * @param {Object} [context] - used as `this` when call fn
 * @returns {function}
 */
module.exports = function (fn, delay, context) {

	if (typeof fn !== 'function') {
		throw new Error('[lazy invoke] fn is not function')
	}

	if (arguments.length == 2 && typeof delay !== 'number') {
		context = delay
		delay = DEFAULT_DELAY_TIME_MS
	} else {
		delay = typeof delay === 'number' ? delay >>> 0 : DEFAULT_DELAY_TIME_MS
	}

	var _timer
	var args
	var self
	var invokeFn = function () {
		_timer = null
		fn.apply(self, args)
	}

	return function () {
		self = context || this
		args = arguments
		if (_timer) {
			clearTimeout(_timer)
		}
		_timer = setTimeout(invokeFn, delay)
	}
}