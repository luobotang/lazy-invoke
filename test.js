var LazyInvoke = require('./')

function test() {
	console.log('3 test cases')

	// 1 - lazy invoke
	var num = 5
	var fn1 = LazyInvoke(function (n) {
		if (num === n) {
			console.log('1 - success')
		} else {
			console.log('1 - fail')
		}
	})

	fn1(1)
	fn1(2)
	fn1(3)
	fn1(4)
	fn1(5)

	// 2 - context
	var fn2 = LazyInvoke(function () {
		if (this.name === 'luobo') {
			console.log('2 - success')
		} else {
			console.log('2 - fail')
		}
	}, {
		name: 'luobo'
	})

	fn2()

	// 3 - lazy
	var num3 = 0
	var fn3 = LazyInvoke(function () {
		if (num3 === 1) {
			console.log('3 - success')
		} else {
			console.log('3 - fail')
		}
	}, 500)

	fn3()

	setTimeout(function () {
		num3 = 1
	}, 200)
}

test()