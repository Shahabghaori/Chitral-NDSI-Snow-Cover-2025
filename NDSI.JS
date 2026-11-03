// CHITRAL NDSI SNOW COVER — 2025

var area = ee.FeatureCollection(
  'projects/causal-galaxy-482405-n9/assets/Chitral'
);

Map.centerObject(area, 8);

var image = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(area)
  .filterDate('2025-06-01', '2025-10-01')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
  .median()
  .clip(area);

var ndsi = image.normalizedDifference(['B3', 'B11']);

var snow = ndsi.gte(0.4).selfMask();

Map.addLayer(
  snow,
  {palette: ['FF1493']},
  'NDSI Snow Cover 2025'
);

Map.addLayer(
  area.style({
    color: '000000',
    fillColor: '00000000',
    width: 3
  }),
  {},
  'Chitral Boundary'
);
