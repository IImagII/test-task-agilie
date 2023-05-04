export function canGiftEveryone(tshirts, sizes) {
	const tshirtCount = {};
	for (let i = 0; i < tshirts.length; i++) {
		const size = tshirts[i];
		tshirtCount[size] = (tshirtCount[size] || 0) + 1;
	}

	for (let i = 0; i < sizes.length; i++) {
		const size = sizes[i];
		if (tshirtCount[size] > 0) {
			tshirtCount[size]--;
		} else if (size === "S" && tshirtCount["M"] > 0) {
			tshirtCount["M"]--;
		} else if (size === "M" && (tshirtCount["S"] > 0 || tshirtCount["L"] > 0)) {
			tshirtCount[tshirtCount["S"] > 0 ? "S" : "L"]--;
		} else if (size === "L" && (tshirtCount["M"] > 0 || tshirtCount["XL"] > 0)) {
			tshirtCount[tshirtCount["M"] > 0 ? "M" : "XL"]--;
		} else if (size === "XL" && (tshirtCount["L"] > 0 || tshirtCount["XXL"] > 0)) {
			tshirtCount[tshirtCount["L"] > 0 ? "L" : "XXL"]--;
		} else {
			return false;
		}
	}
	return true;
}