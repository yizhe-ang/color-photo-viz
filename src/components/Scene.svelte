<script>
	import { T, PerspectiveCamera, OrbitControls } from '@threlte/core';
	import ImageInstancedMesh from './ImageInstancedMesh.svelte';
	import data from '/src/data/positionsProcessed.json';
	import * as knobby from 'svelte-knobby';

	let mesh;

	const discretize = false;
	// let key = 'palette2dGrid';

	let positions = new Float32Array(data.length * 3);
	let newPositions = new Float32Array(data.length * 3);

	const controls = knobby.panel({
		img2d: (value) => {
      updatePositions('img2d')
    },
		img2dGrid: (value) => {
      updatePositions('img2dGrid')
    },
		img3d: (value) => {
      updatePositions('img3d')
    },
		palette2d: (value) => {
      updatePositions('palette2d')
    },
		palette2dGrid: (value) => {
      updatePositions('palette2dGrid')
    },
		palette3d: (value) => {
      updatePositions('palette3d')
    },
	});
	console.log($controls);

	// $: if (mesh) updatePositions(key);

	function updatePositions(key) {
		for (let i = 0; i < data.length; i++) {
			let x = data[i][key].x;
			let y = data[i][key].y;
			let z = data[i][key].z;

			if (discretize) {
				x = Math.round(x);
				y = Math.round(y);
			}

      // To prevent z-fighting
      if (['img2d', 'palette2d'].includes(key)) {
        z += (Math.random() - 0.5) * 1
      }

			newPositions.set([x, y, z], i * 3);
		}

		mesh.updatePositions(newPositions);
	}
</script>

<PerspectiveCamera position={{ x: 0, y: 0, z: 120 }}>
	<OrbitControls enableDamping />
</PerspectiveCamera>

<!-- <T.PointLight distance={100} intensity={4} color={'white'} /> -->

<!-- TODO: Use instancing, with custom shader -->
<!-- TODO: How to change resolution on zoom? -->
<!-- TODO: Switch to HTML component on zoom? -->

<ImageInstancedMesh bind:this={mesh} {positions} />
