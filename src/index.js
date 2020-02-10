const objSort = (obj = {}, descending = false) =>
	Object.keys(obj)
		.sort((a, b) => {
			const { [a]: a_, [b]: b_ } = obj
			if (descending) {
				return b_ - a_
			} else {
				return a_ - b_
			}
		})
		.reduce((acc, key) => {
			acc[key] = obj[key]
			return acc
		}, {})

export default objSort
