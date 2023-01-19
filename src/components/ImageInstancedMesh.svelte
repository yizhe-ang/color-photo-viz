<script>
	import { T, useFrame, useTexture, useThrelte } from '@threlte/core';
	import vertexShader from '/src/shaders/imageVertex.js';
	import fragmentShader from '/src/shaders/imageFragment.js';
	import { DoubleSide, PlaneGeometry } from 'three';
	import { gridLayout } from '/src/utils';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	export let positions; // Not reactive, don't mutate

	let mesh;
	let positionAttribute;

	const ATLAS_DIM = 16;

	// Load image atlases
	const imageAtlases = useTexture([
		'atlases/atlas-0.png',
		'atlases/atlas-1.png',
		'atlases/atlas-2.png',
		'atlases/atlas-3.png',
		'atlases/atlas-4.png',
		'atlases/atlas-5.png',
		'atlases/atlas-6.png',
		'atlases/atlas-7.png'
	]);

	const numImgsPerAtlas = 16 * 16;
	// const count = numImgsPerAtlas * imageAtlases.length;
	const count = positions.length;

	// Blueprint geometry
	const geometry = new PlaneGeometry(1, 1);

	// Init instance attributes
	// const positions = new Float32Array(count * 3);
	const uvOffsets = new Float32Array(count * 2);
	const textureIndices = new Float32Array(count * 1);
	// const indices = new Float32Array(count * 1)

	// const gridPositions = gridLayout(count);

	for (let i = 0; i < count; i++) {
		// const x = (Math.random() - 0.5) * 50;
		// const y = (Math.random() - 0.5) * 50;
		// const z = (Math.random() - 0.5) * 1;

		// const x = gridPositions[i].x
		// const y = gridPositions[i].y
		// const z = gridPositions[i].z

		// const x = 0
		// const y = i * 1
		// const z = 0

		// const scale = 10
		// const x = data[i].img2d[0] * scale
		// const y = data[i].img2d[1] * scale
		// const z = (Math.random() - 0.5) * 1

		// const key = "img2d"
		// const scale = 10
		// const x = data[i][key].x * scale
		// const y = data[i][key].y * scale
		// const z = data[i][key].z * scale

		// positions.set([x, y, z], i * 3);

		const textureIndex = Math.floor(i / numImgsPerAtlas);
		textureIndices[i] = textureIndex;

		// Grabs from atlas in raster order
		const atlasIndex = i % numImgsPerAtlas;
		uvOffsets.set(
			[
				(atlasIndex % ATLAS_DIM) / ATLAS_DIM,
				1 - Math.floor(atlasIndex / ATLAS_DIM) / ATLAS_DIM - 1 / ATLAS_DIM
			],
			i * 2
		);

		// indices[i] = i
	}

	export function updatePositions(newPositions) {
		gsap.to(positionAttribute.array, {
			duration: 2,
			endArray: newPositions,
			onUpdate: () => {
				positionAttribute.needsUpdate = true;
			}
		});
	}

	// onMount(() => {
	// 	positionAttribute = mesh.geometry.attributes.aPosition;
	// });
</script>

<T.Mesh bind:ref={mesh} frustumCulled={false}>
	<T.ShaderMaterial
		uniforms={{
			uTextures: { value: imageAtlases },
			uUvScale: { value: 1 / ATLAS_DIM },
			uNumPerTexture: { value: numImgsPerAtlas }
		}}
		defines={{
			NUM_TEXTURES: imageAtlases.length
		}}
		{vertexShader}
		{fragmentShader}
		transparent
		side={DoubleSide}
	/>
	<T.InstancedBufferGeometry
		instanceCount={count}
		attributes.position={geometry.getAttribute('position')}
		attributes.uv={geometry.getAttribute('uv')}
		index={geometry.index}
	>
		<T.InstancedBufferAttribute
			bind:ref={positionAttribute}
			attach="attributes.aPosition"
			args={[positions, 3, 1]}
		/>
		<T.InstancedBufferAttribute attach="attributes.aUvOffset" args={[uvOffsets, 2, 1]} />
		<T.InstancedBufferAttribute attach="attributes.aTextureIndex" args={[textureIndices, 1, 1]} />
	</T.InstancedBufferGeometry>
</T.Mesh>
