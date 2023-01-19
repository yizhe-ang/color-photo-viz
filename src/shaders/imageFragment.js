// HACK:
const NUM_TEXTURES = 8;

function makeSwitchCase(i) {
	return `
    case ${i}:
      color = texture2D(uTextures[${i}], vUv);
      break;
  `;
}

export default /* glsl */ `
  uniform sampler2D uTextures[NUM_TEXTURES];
  uniform float uNumPerTexture;

  varying vec2 vUv;
  // varying float vIndex;
  varying float vTextureIndex;

  void main() {
    vec4 color = vec4(0.0);

    // HACK
    // Can try using 3d textures or 2d array of textures

    switch(int(vTextureIndex)) {
      // case 0:
      //   color = texture2D(uTextures[0], vUv);
      //   break;
      ${[...Array(NUM_TEXTURES)].map((_, i) => {
				return makeSwitchCase(i);
			}).join('')}
      default: break;
    }

    gl_FragColor = color;
  }
`;
