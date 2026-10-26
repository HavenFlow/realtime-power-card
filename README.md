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
  * Renders historical background power over custom timeframes (e.g. 24h) in 4 modes: **Combo (Bars + Line with Nodes)**, **Segmented LED Equalizer**, **Smooth Area Line**, or **Classic Bars**.
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
   ```
4. Set category to **Dashboard** (or *Lovelace*) and click **Add**.
5. Find **Realtime Power Card** in the store, click **Download**, and reload your browser.

### Method 2: Manual Installation

1. Download `realtime-power-card.js` from the latest [Release](https://github.com/HavenFlow/realtime-power-card/releases).
2. Copy the file into your Home Assistant directory:
   ```text
   /config/www/realtime-power-card.js
   ```
3. In Home Assistant, navigate to **Settings** → **Dashboards** → **Resources** (three dots in top right).
4. Click **Add Resource**, set URL to `/local/realtime-power-card.js` and select **JavaScript Module**.
5. Refresh your browser (`Ctrl + F5`).

---

## 🚀 Quick Start

1. Edit your Lovelace Dashboard and click **Add Card**.
2. Search for **Realtime Power Card (Energy Panel)**.
3. In the visual editor, select your **Total Power Entity** (or leave empty to auto-detect from your inverter/grid setup).
4. Click **"Force full reset from Energy Panel"** (*Wymuś pełny reset z Panelu Energii*) to populate your device list.
5. Customize colors, icons, and visual styles directly in the editor!

---

## ⚙️ Configuration Reference (YAML)

While the card is designed to be configured entirely through the **Visual GUI Editor**, YAML configuration is fully supported:

```yaml
type: custom:realtime-power-card
chart_type: bar # bar | pie | donut | sankey_h | sankey_v
total_power_entity: sensor.inverter_load_power
show_daily_kwh_devices: true
show_daily_kwh_total: true
unit_kw_above_1kw: true
show_percentage: true
min_power_threshold: 4 # Hide standby loads below 4 W
max_devices: 10 # 0 = unlimited

# Header & Background History
header_history_enable: true
header_history_type: combo # combo | led | line | bar
header_history_hours: 24
header_history_buckets: 48
header_total_prefix: "Total consumption:"
header_total_font_size: 18
header_top_offset: 4
header_text_outline: true
header_text_outline_color: "#000000"
header_text_outline_width: 2
header_color_max: "#00e5ff"
header_color_min: "#004d7a"

# Visual Styles
bar_style: 3d # 3d | gradient | glass | flat
bar_3d_depth: 10
bar_shadow: true
bar_opacity: 92
card_glass: false

# Devices (auto-populated or manual)
devices:
  - entity: sensor.heat_pump_power
    name: Heat Pump
    icon: mdi:heat-pump
    color: "#0091ea"
  - entity: sensor.gym_ac_power
    name: Gym AC
    icon: mdi:air-conditioner
    color: "#00e676"
    is_child: true
    parent_entity: sensor.gym_subpanel_power
```

---

## 💡 Sub-devices & Hierarchy Logic

When monitoring an entire room/subpanel alongside individual smart plugs inside that room:
1. Mark the individual plug as a **Sub-device** (`is_child: true`) in the editor.
2. Select the room's main meter as the **Parent Device**.
3. **Calculation:** Sub-devices will **not** be subtracted from the overall **"Untracked / Other"** calculation twice, ensuring your household energy balance remains 100% mathematically accurate.
4. **Sankey Diagram:** The card automatically branches child nodes directly out of the parent node.

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).