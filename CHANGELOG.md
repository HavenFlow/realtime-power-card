# Changelog

All notable changes to this project will be documented in this file.

## [1.0.2] - 2026-10-26
### Fixed
- **Color Picker Top-Layer Rendering:** Fixed an issue where the custom color picker remained hidden behind Home Assistant's card editor dialog (`#top-layer`). The picker now uses a native `<dialog>` with `.showModal()` and local Shadow DOM mounting, ensuring it always appears on top of the configuration window and retains keyboard focus for HEX/RGB inputs.

## [1.0.1] - 2026-10-26
### Fixed
- **Color Picker Z-Index:** Increased z-index for the custom color picker overlay.

## [1.0.0] - 2026-10-26
### Added
- **Seamless 3D Isometric Prism:** Redesigned the 3D bar style to eliminate wireframe borders and overlapping subpixel gaps.
- **Start of Day History Mode:** Added a `today` mode for the header history chart (00:00 - 24:00).
- **Unified Color Picker:** Added a custom desktop-style Spectrum Color Picker across mobile and desktop browsers.