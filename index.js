var DEFAULT_DELAY_TIME = 50

/*
 * @param {function} fn
 * @param {number} [delay] - ms
 * @param {Object} [context] - used as `this` when call fn
 * @returns {function}
 */
module.exports = function (fn, delay, context) {

	if (typeof fn !== 'function') {
		throw new Error('require fn')
	}

	if (arguments.length >= 2) {
		if (typeof delay === 'number') {
			delay = delay > 0 ? delay : DEFAULT_DELAY_TIME
		} else { // (fn, context)
			context = delay
			delay = DEFAULT_DELAY_TIME
		}
	} else {
		delay = DEFAULT_DELAY_TIME
	}

	var lazyTimer
	var args
	var self
	var invokeFn = function () {
		lazyTimer = null
		fn.apply(self, args)
	}

	return function () {
		self = context || this
		args = arguments
		if (lazyTimer) clearTimeout(lazyTimer)
		lazyTimer = setTimeout(invokeFn, delay)
	}
}