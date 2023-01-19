export default /* glsl */ `
  uniform float uUvScale;

  attribute vec3 aPosition;
  attribute vec2 aUvOffset;
  // attribute float aIndex;
  attribute float aTextureIndex;

  varying vec2 vUv;
  // varying float vIndex;
  varying float vTextureIndex;

  void main() {
    vec3 pos = position;

    pos += aPosition;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    // float dim = 1.0 / vUvScale;

    // vec2 uvOffset = vec2(0.0);
    // uvOffset.x = mod(aIndex, dim) * vUvScale;
    // uvOffset.y = floor(aIndex / dim) * vUvScale;

    vUv = uv * uUvScale + aUvOffset;

    // vIndex = aIndex;
    vTextureIndex = aTextureIndex;
  }
`;
