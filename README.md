# Chitral Snow Cover Mapping (2025) Using NDSI and Google Earth Engine

## Overview
This project maps seasonal snow cover across Chitral, northern Pakistan, using Sentinel-2 satellite imagery and the Normalized Difference Snow Index (NDSI).

The analysis uses Sentinel-2 Surface Reflectance imagery from June to September 2025. Google Earth Engine (GEE) was used to process the satellite images, calculate NDSI, and identify snow-covered areas.

## Methodology
- **Study Area:** Chitral, Pakistan
- **Satellite Data:** Sentinel-2 Surface Reflectance (Harmonized)
- **Study Period:** June–September 2025
- **Cloud Filtering:** Less than 20% cloud cover
- **Index:** Normalized Difference Snow Index (NDSI)
- **Snow Threshold:** NDSI ≥ 0.4
- **Platform:** Google Earth Engine

## NDSI Calculation

NDSI was calculated using the Green and SWIR bands:

`NDSI = (B3 - B11) / (B3 + B11)`

Pixels with NDSI values equal to or greater than 0.4 were classified as snow cover.

## Map Visualization
Snow-covered areas are displayed in pink, with the Chitral administrative boundary shown in black.

## Tools Used
- Google Earth Engine
- Sentinel-2 imagery
- JavaScript
- Remote Sensing
- GIS

## Purpose
This project demonstrates the use of satellite remote sensing and Google Earth Engine for seasonal snow-cover identification in the Hindu Kush region.

**Research Note:** This is a seasonal snow-cover mapping exercise, not a glacier-area change assessment.

#GoogleEarthEngine #RemoteSensing #GIS #NDSI #SnowCover #Sentinel2 #Chitral #Pakistan
