const library = require('@neutrinojs/library')

module.exports = {
	options: {
		root: __dirname,
	},
	use: [
		library({
			name: 'sort-object-value',
		}),
	],
}
