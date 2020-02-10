import objSort from './index'

describe('test objSort', () => {
	const obj = {
		md: 768,
		dm: -768.965,
		sm: 576.28367,
		ms: -576,
		xs: 0,
		xl: 1200.23872,
		lx: -1200,
		lg: 992,
		gl: -992.34632,
	}
	it('test ascending', () => {
		expect.assertions(1)
		const sorted = objSort(obj)
		expect(sorted).toEqual({
			lx: -1200,
			gl: -992.34632,
			dm: -768.965,
			ms: -576,
			xs: 0,
			sm: 576.28367,
			md: 768,
			lg: 992,
			xl: 1200.23872,
		})
	})
	it('test descending', () => {
		expect.assertions(1)
		const sorted = objSort(obj, true)
		expect(sorted).toEqual({
			xl: 1200.23872,
			lg: 992,
			md: 768,
			sm: 576.28367,
			xs: 0,
			ms: -576,
			dm: -768.965,
			gl: -992.34632,
			lx: -1200,
		})
	})
})
