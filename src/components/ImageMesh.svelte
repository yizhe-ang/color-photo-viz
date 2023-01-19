<script>
	// https://douglasduhaime.com/posts/visualizing-tsne-maps-with-three-js.html
	import { T, useTexture } from '@threlte/core';
	import { Vector3, Vector2, Face } from 'three';

	let geometry;

  const map = useTexture('imgs/darrensohphoto/2013-09-21_03-10-00_UTC.jpg')

	const imageSize = { width: 10, height: 7.5 };
	const coords = { x: -5, y: -3.75, z: 0 };

	if (geometry) {
		geometry.vertices.push(
			new Vector3(coords.x, coords.y, coords.z),
			new Vector3(coords.x + imageSize.width, coords.y, coords.z),
			new Vector3(coords.x + imageSize.width, coords.y + imageSize.height, coords.z),
			new Vector3(coords.x, coords.y + imageSize.height, coords.z)
		);

		// add the first face (the lower-right triangle)
		const faceOne = new Face(
			geometry.vertices.length - 4,
			geometry.vertices.length - 3,
			geometry.vertices.length - 2
		);

		// add the second face (the upper-left triangle)
		const faceTwo = new Face(
			geometry.vertices.length - 4,
			geometry.vertices.length - 2,
			geometry.vertices.length - 1
		);

		// add those faces to the geometry
		geometry.faces.push(faceOne, faceTwo);

		// map the region of the image described by the lower-left,
		// lower-right, and upper-right vertices to the first face
		// of the geometry
		geometry.faceVertexUvs[0].push([new Vector2(0, 0), new Vector2(1, 0), new Vector2(1, 1)]);

		// map the region of the image described by the lower-left,
		// upper-right, and upper-left vertices to the second face
		// of the geometry
		geometry.faceVertexUvs[0].push([new Vector2(0, 0), new Vector2(1, 1), new Vector2(0, 1)]);
	}
</script>

<T.Mesh>
	<T.Geometry bind:ref={geometry} />
</T.Mesh>
