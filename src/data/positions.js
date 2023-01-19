import * as gridAssign from 'grid-assign-js';

import { extent, scaleLinear } from 'd3';

import data from './positions.json';

const { grid } = gridAssign;

let processedData = data;

// Gridify
const gridSize = 43;

['img2d', 'palette2d'].forEach((key) => {
	const positions = processedData.map((d) => {
    // Create empty values
    d[`${key}Grid`] = {}
    d[`${key}Grid`].x = null
    d[`${key}Grid`].y = null
    d[`${key}Grid`].z = 0

		return [d[key].x, d[key].y];
	});

	const { assignments } = grid.autoGridAssignment({
		points: positions,
		numColumns: gridSize,
		numRows: gridSize,
		screenWidth: gridSize,
		screenHeight: gridSize
	});

	assignments.forEach((d) => {
    // Translate to center of three.js scene
		processedData[d.assignedPointIndex][`${key}Grid`].x = d.gridPoint[0] - gridSize / 2;
		processedData[d.assignedPointIndex][`${key}Grid`].y = d.gridPoint[1] - gridSize / 2;
	});
});

// Scale positions
const rangeSize = 50;

['img2d', 'img3d', 'palette2d', 'palette3d'].forEach((key) => {
	const xAccessor = (d) => d[key].x;
	const yAccessor = (d) => d[key].y;
	const zAccessor = (d) => d[key].z;

	const xScale = scaleLinear()
		.domain(extent(processedData, xAccessor))
		.range([-rangeSize, rangeSize]);

	const yScale = scaleLinear()
		.domain(extent(processedData, yAccessor))
		.range([-rangeSize, rangeSize]);

	const zScale = scaleLinear()
		.domain(extent(processedData, zAccessor))
		.range([-rangeSize, rangeSize]);

	const xGet = (d) => xScale(xAccessor(d));
	const yGet = (d) => yScale(yAccessor(d));
	const zGet = (d) => zScale(zAccessor(d));

	processedData.forEach((d) => {
		d[key].x = xGet(d);
		d[key].y = yGet(d);
		d[key].z = zGet(d);
	});
});

// Format
// processedData = data.map((d) => {
// 	return {
// 		img2d: {
// 			x: d.img2d[0],
// 			y: d.img2d[1],
// 			z: 0
// 		},
// 		img3d: {
// 			x: d.img3d[0],
// 			y: d.img3d[1],
// 			z: d.img3d[2]
// 		},
// 		palette2d: {
// 			x: d.palette2d[0],
// 			y: d.palette2d[1],
// 			z: 0
// 		},
// 		palette3d: {
// 			x: d.palette3d[0],
// 			y: d.palette3d[1],
// 			z: d.palette3d[2]
// 		}
// 	};
// });

export default processedData;
