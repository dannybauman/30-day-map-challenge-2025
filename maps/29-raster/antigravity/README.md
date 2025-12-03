# Google AntiGravity - Day 29: Raster

**Grade:** A
**Status:** ✅ Success
**URL:** https://dannybauman.github.io/rorschach-rain/

## Overview

Google AntiGravity is a new AI-powered IDE (similar to Cursor) made by the Windsurf team (almost acquired by OpenAI but not quite, then hired by Google instead). This was the first time testing this tool in the challenge.

## Results

Worked well with only minor hurdles at first. After initial success, spent additional development time adding features and improvements.

## Features Implemented

- Real-time radar tiles from RainViewer API
- Ink blot transformation of precipitation patterns
- CRT aesthetic (scanlines, phosphor glow, screen curvature)
- Local object detection (simple algorithm with interesting results)
- Cloud detection via Gemini Vision API (more thorough analysis)
- Area selection for targeted rain analysis
- Responsive UI/UX improvements
- Image generation capabilities
- View mode toggles (Radar / Ink Blot / Both)
- Color scheme options (Phosphor Green / Amber Terminal / Full Color)
- CRT intensity slider
- Timeline playback controls

## Why Grade A

- Worked well from the start
- Good for larger projects with more control
- Downloadable Mac app, works outside browser
- Automated browser control for debugging/testing
- Similar results to Gemini 3 + Google AI Studio but better for larger projects
- Successfully implemented both local and cloud detection approaches
- Responsive design works well

## Deployment

AntiGravity doesn't have a simple one-click deploy option (as far as I know), so set up a GitHub repo and deployed to GitHub Pages. Normally that setup can be annoying, but AI made it easy - just asked AntiGravity to help set up the repo structure and GitHub Pages configuration.

## Observations

**New Tool Discovery:**
- Google's new AI-powered IDE
- Made by Windsurf team (almost acquired by OpenAI but not quite, then hired by Google instead)
- Downloadable Mac app, works outside browser
- Good for larger projects with more control
- Automated browser control for debugging/testing
- Similar results to Gemini 3 + Google AI Studio

**Development Process:**
- Initial implementation worked well
- Spent additional time adding features (local + cloud detection, area selection, UI improvements)
- Took a while and a few tries, but eventually got both detection methods working
- Local detection uses simple algorithm with interesting results
- Cloud detection uses Gemini Vision API for more thorough analysis

## Screenshots

- Desktop: `screenshot.png`
- Mobile: `screenshot-mobile.png`
- Object Detection Feature (Desktop): `screenshot-object-detection.png` (shows local + cloud detection in action)
- Object Detection Feature (Mobile): `screenshot-object-detection-mobile.png`

