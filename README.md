# ⚡ Realtime Power Card for Home Assistant

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub release](https://img.shields.io/github/v/release/HavenFlow/realtime-power-card?include_prereleases=&sort=semver&color=blue)](https://github.com/HavenFlow/realtime-power-card/releases)

A modern, highly customizable Lovelace card for **Home Assistant** that maps your monitored appliances from the **Energy Dashboard** to display **real-time power consumption (W / kW)** and **daily energy usage (kWh)**.

Featuring an interactive **Visual GUI Editor**, live entity & icon search, **3D glass prism bars**, multi-level **Sankey diagrams**, and a customizable **header history chart** (including a retro LED Segmented Equalizer).

---

## 🌟 Key Features

* **Direct Energy Dashboard Integration:** Automatically imports devices, parent-child hierarchies (`included_in_stat`), and active power sensors (`stat_rate`) directly from your Home Assistant Energy Panel.
* **Real-time Power & Daily Energy:** Displays live wattage alongside cumulative daily consumption (kWh) fetched from Home Assistant recorder statistics.
* **5 Chart Types:**
  * **Horizontal Bar Chart:** Features smooth FLIP reordering animations, intelligent outside/inside label placement, and customizable bar radius.
  * **Isometric 3D Translucent Prism:** Horizontal 3D glass cuboids with reflective surfaces, top/side faces, and floor glow.
  * **Sankey Flow Diagrams (Horizontal & Vertical):** Multi-level energy distribution (`Grid/Inverter` → `Main Circuits` → `Sub-devices` → `Untracked / Other`).
  * **Pie & Donut Charts:** Displays proportional loads with embedded device icons and SVG glow/bevel filters.
* **Interactive Header with Background History Chart:**
  * Displays total load with adjustable font size, text color, outline (stroke), and shadow.
  * Renders historical background power over custom timeframes (e.g. 24h) in 4 modes: **Combo (Bars + Line & Nodes)**, **Segmented LED Equalizer**, **Smooth Area Line**, or **Classic Bars**.
  * Dynamic min/max color gradients and power-based transparency scaling.
* **Sub-device & Hierarchy Handling:**
  * Sub-devices are excluded from the *Untracked / Other* calculation to prevent artificial double-counting.
  * Supports bracketed display `(242.1 W • 1.15 kWh)`, parent load subtraction, or hiding.
* **Complete Visual GUI Editor:**
  * Live entity search with instant power feedback (`[395 W]`).
  * Live MDI icon picker with real-time text filtering.
  * Drag & drop / button ordering (▲ / ▼), color pickers, and threshold filters.
* **Regional Number Formatting:** Automatically uses localized decimal separators (`,` or `.`) matching your Home Assistant locale or chosen language.

---

## 📦 Installation

### Method 1: HACS (Recommended)

1. Open **HACS** in your Home Assistant instance.
2. Go to **Frontend** → Click the **three dots** in the top right corner → Select **Custom repositories**.
3. Paste the repository URL:
   ```text
   [https://github.com/HavenFlow/realtime-power-card](https://github.com/HavenFlow/realtime-power-card)