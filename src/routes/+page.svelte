<script>
	import { Canvas } from '@threlte/core';
	import { onMount } from 'svelte';
	import Scene from '/src/components/Scene.svelte';
  // import pkg from "/src/art-palette/palette-extraction/palette_extractor.min.cjs"

  // console.log(pkg)

  // let paletteExtractor;

  // onMount(() => {
  //   paletteExtractor = new PaletteExtractor()

  //   console.log(paletteExtractor)
  // })
</script>

<!-- <svelte:head>
	<script
		src="/src/art-palette/palette-extraction/palette_extractor.min.js"
	></script>
</svelte:head> -->

<div class="wrapper">
	<Canvas linear flat>
		<Scene />
	</Canvas>
</div>

<style>
	.wrapper {
		position: fixed;
		inset: 0;
		background-color: #18181b;
	}
</style>
