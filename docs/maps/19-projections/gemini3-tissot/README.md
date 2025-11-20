# Gemini 3 Pro – Tissot's Lie Detector

Platform: Google AI Studio (Gemini 3 Pro)
Status: ✅ Success
URL: https://tissot-s-lie-detector-903076358991.us-west1.run.app

## Overview

An interactive projection comparison tool that uses Tissot's Indicatrix (red circles of constant size) to reveal how different projections distort area, shape, and distance. Users can morph between projections or view them side-by-side to understand the "Greenland Problem" and other cartographic distortions.

## What Works

**Distortion Visualization**
- Grid of Tissot circles (indicatrices) overlaid on world map
- Circles remain constant size on the globe but deform in the projection
- Clearly demonstrates area distortion (e.g., Mercator's polar exaggeration)
- Works across 9 different projections

**Projection Comparison**
- **Morph View:** Smooth blend between two projections with a slider
- **Side-by-Side View:** Compare projections simultaneously
- Auto-morph button for continuous animation
- Real-time blend percentage display (0% to 100%)

**Projection Library**
- Mercator (Conformal)
- Equal Earth (Equal Area)
- Natural Earth
- Equirectangular
- Mollweide
- Robinson
- Winkel Tripel
- Sinusoidal
- Orthographic

**Interface**
- Dark theme with red Tissot circles for high contrast
- Dropdown selectors for start/end projections
- Educational descriptions for each projection
- Contextual tips about the "Greenland Problem" and other distortion patterns

**Technical Implementation**
- D3.js with extended d3-geo-projection library
- Natural Earth 110m countries data from world-atlas CDN
- SVG rendering with smooth interpolation
- Mobile-responsive layout

## Development Notes

**Initial Success (Prompts 1-3):**
- Gemini 3 correctly implemented Tissot's Indicatrix on first attempt
- Morph view with slider worked immediately
- Basic projection comparison functional

**Refinements (Prompts 4-13):**
- Expanded projection library from 4 to 9 projections
- Added side-by-side comparison mode
- Improved Tissot circle rendering and distribution
- Enhanced educational descriptions for each projection
- Added auto-morph animation for continuous playback
- Polished UI with better spacing and typography

## Key Observations

**Gemini 3 Strengths:**
1. **Mathematical Accuracy:** Tissot circles correctly placed and sized
2. **Complex Interactions:** Morph slider and view mode switching worked seamlessly
3. **Educational UX:** Automatically included helpful explanations and tips
4. **Feature Expansion:** Easily added more projections and view modes through iteration

**Educational Impact:**
This visualization makes abstract cartographic concepts concrete. Seeing Tissot circles stretch and deform in real-time provides an intuitive understanding of projection trade-offs that would be difficult to grasp from textbooks alone.

**Performance:**
The side-by-side view with dual SVG renders and the morph view with interpolated paths both run smoothly, even on mobile devices.

## Screenshots

![Desktop view showing Mercator with Tissot circles](tissot-desktop.png)
*Desktop: Mercator projection with Tissot's Indicatrix revealing extreme polar distortion*

![Mobile view of morph interface](tissot-mobile.png)
*Mobile: Morph controls for blending between Mercator and Equal Earth projections*

