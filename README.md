# color-photo-viz

**[DEMO](https://yizhe-ang.github.io/color-photo-viz/)**  
3D visualization of photographs of Singapore, arranged by semantics and color palette.

https://github.com/yizhe-ang/color-photo-viz/assets/17507891/bf54283a-f39d-47ee-bd56-545325b5c45f

Photographs by [@darrensohphoto](https://www.instagram.com/darrensohphoto/?hl=en).

## Usage
- `bin/resizeImgs.cjs`
  - Resize images for atlas
- `bin/createImageAtlas.cjs`
  - Create image atlas
- `bin/extractPalettes.cjs`
  - Extract color palettes from each image
- `art-palette/palette-embedding/python/compute_embeddings.py`
  - Compute palette embeddings
- `notebooks/computeEmbeddings.ipynb`
  - Compute image embeddings
  - Generates `positions.json` file
- `bin/processPositions.js`
  - Generates `positionsProcessed.json` file

## To Explore
- Use a 3d texture, or a 2d array of textures
  - Instead of using conditionals in shader
- Use a material that reacts to light
- Increase resolution on zoom
- Add links on image
- Gridify strategies
  - Just discretize
  - Linear assignment
  - Nearest neighbour

## Resources
### Increase resolution of texture on zoom
- https://stackoverflow.com/questions/47465975/three-js-strategies-to-progressively-increase-resolution-of-texture
