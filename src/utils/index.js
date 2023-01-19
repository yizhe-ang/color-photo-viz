export function gridLayout(numPoints) {
	// const numPoints = data.length;
	const numCols = Math.ceil(Math.sqrt(numPoints));
	const numRows = numCols;

	// for (let i = 0; i < numPoints; ++i) {
	//   const datum = data[i];
	//   const col = (i % numCols) - numCols / 2;
	//   const row = Math.floor(i / numCols) - numRows / 2;

	//   datum.x = col * 1.05;
	//   datum.y = row * 1.05;
	//   datum.z = 0;
	// }

	// return data;

	return [...Array(numPoints)].map((_, i) => {
		const col = (i % numCols) - numCols / 2;
		const row = Math.floor(i / numCols) - numRows / 2;

		return { x: col * 1.05, y: row * 1.05, z: 0 };
	});
}
