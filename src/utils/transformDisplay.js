export const transformDisplay = (arr) => {
	const response = arr.map((plate) => {
		if (Number.isInteger(plate)) {
			return `${plate} кг`
		} else {
			const plateStr = plate.toFixed(2)
			return plateStr.endsWith('.0000')
				? plateStr.slice(0, -5) + ' кг'
				: plateStr + 'ф'
		}
	})
		.join(' ')
	return response
}