# Changelog

All notable changes to this project will be documented in this file.

## [1.0.3] - 2026-10-27
### Fixed
- **Pie & Donut Chart Clipping (Square Crop Fix):** Corrected the SVG `<circle>` radius and `stroke-width` calculation in `_renderPieOrDonutHTML`. Previously, a radius of `15.915` combined with a stroke width of `31.83` resulted in a total diameter of `63.66` inside a `42x42` `viewBox`, clipping the pie chart into a square. The radius (`9.5`) and stroke width (`19`) now fit cleanly within the `42x42` viewBox with a `38x38` outer diameter, preserving a true circle with room for drop-shadow and neon glow filters.

### Changed
- **High-Gloss 3D Acrylic Prism Bars:** Upgraded the `3d` bar style (`_getBarFillStyle` & `.bar-fill.prism-3d`) with multi-layer glossy acrylic shaders: a sharp diagonal glass reflection (`52%` cut), a bright specular highlight ridge along the inner front/top/side edges, a top-edge glass sheen, and a rich floor reflection glow.

## [1.0.2] - 2026-10-26
### Fixed
- **Color Picker Top Layer Rendering:** Replaced the standard `div` overlay with a native HTML5 `<dialog>` opened via `.showModal()`. This places the color picker directly into the browser's `#top-layer`, guaranteeing it renders on top of Home Assistant's modal configuration dialogs.

## [1.0.1] - 2026-10-26
### Fixed
- **Color Picker Z-Index:** Increased z-index priority for the custom color picker popover.

## [1.0.0] - 2026-10-26
### Added
- **Seamless 3D Isometric Prism:** Redesigned the 3D bar style to eliminate wireframe borders and overlapping subpixel gaps.
- **Start of Day History Mode:** Added a `today` mode for the header history chart (00:00 - 24:00 live fill).
- **Unified Color Picker:** Replaced native color inputs in the GUI editor with a custom-built, desktop-style Spectrum Color Picker.
