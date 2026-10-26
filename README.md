# ⚡ Realtime Power Card for Home Assistant

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub release](https://img.shields.io/github/v/release/HavenFlow/realtime-power-card?include_prereleases=&sort=semver&color=blue)](https://github.com/HavenFlow/realtime-power-card/releases)

**Version:** `1.0.0`

A modern, highly customizable Lovelace card for **Home Assistant** that synchronizes monitored appliances from the **Energy Dashboard** to display **real-time power consumption (W / kW)** alongside **daily energy usage (kWh)**.

Featuring an interactive **Visual GUI Editor**, a **unified cross-platform Desktop Spectrum Color Picker** (identical on mobile and desktop browsers), **seamless 3D solid extruded prism bars**, multi-level **Sankey diagrams**, and a customizable **header history chart** with **progressive "From Start of Day (00:00)"** mode.

---

## 🌟 Key Features in v1.0.0

* **Direct Energy Dashboard Integration:** Automatically imports devices, parent-child hierarchies (`included_in_stat`), and active power sensors (`stat_rate`) directly from your Home Assistant Energy Panel.
* **Seamless 3D Solid Extruded Prism Bars:**
  * Engineered with Phong/Lambert surface shading (lit top face, smooth front gradient, deep-shaded right end-cap) and sub-pixel vertex overlapping (`0.5px`).
  * Eliminates wireframe border gaps and double-line artifacts so every bar looks like a solid, monolithic 3D block.
* **Header Background History Chart (`00:00 -> Now` & Rolling Modes):**
  * **From Start of Day (`today`):** Starts at `00:00` (midnight) and fills progressively from left to right as the day unfolds. Future time slots remain dimmed on the LED matrix until reached.
  * **Rolling Window (`rolling`):** Displays the last $X$ hours (e.g., 24h).
  * 4 visual styles: **Segmented LED Equalizer**, **Combo (Bars + Line & Nodes)**, **Smooth Area Line**, and **Classic Bars**.
* **Unified Cross-Platform Color Picker (Desktop Spectrum on Mobile & PC):**
  * Replaces inconsistent native mobile OS color dialogs with a built-in **2D Saturation/Brightness Spectrum Box + Rainbow Hue Slider + HEX/RGB inputs + Preset Swatches** that looks and behaves identically on Android, iOS, and desktop browsers.
* **Sub-device & Hierarchy Handling:**
  * Sub-devices are excluded from the *Untracked / Other* calculation to prevent double-counting.
  * Supports bracketed display `(299,3 W • 0,28 kWh)`, parent load subtraction, or hiding.

---

## 📦 Installation

### Method 1: HACS (Recommended)

1. Open **HACS** in your Home Assistant instance.
2. Go to **Frontend** → Click the **three dots** in the top right corner → Select **Custom repositories**.
3. Paste the repository URL:
   `https://github.com/HavenFlow/realtime-power-card`
4. Set category to **Dashboard** and click **Add**.
5. Download **Realtime Power Card** and reload your browser.

### Method 2: Manual Installation

1. Download `realtime-power-card.js` from the latest [Release](https://github.com/HavenFlow/realtime-power-card/releases).
2. Copy the file into `/config/www/realtime-power-card.js`.
3. Add `/local/realtime-power-card.js` as a **JavaScript Module** in **Settings** → **Dashboards** → **Resources**.

---

## ⚙️ Configuration Reference (YAML)

All options can be configured visually via the built-in GUI Editor or via YAML:

```yaml
type: custom:realtime-power-card
chart_type: bar # bar | pie | donut | sankey_h | sankey_v
total_power_entity: sensor.inverter_load_power
total_energy_entity: sensor.house_daily_energy_kwh
show_daily_kwh_devices: true
show_daily_kwh_total: true
unit_kw_above_1kw: true
min_power_threshold: 4
sub_device_mode: bracket # bracket | normal | hide

# Header & Progressive Daily History
header_history_enable: true
header_history_mode: today # today (from 00:00, fills over time) | rolling (last X hours)
header_history_type: led   # led | combo | line | bar
header_history_hours: 24
header_history_buckets: 48
header_total_prefix: "Całkowite zużycie:"
header_color_max: "#7ce8ff"
header_color_min: "#005b8f"

# Seamless 3D Solid Prism Style
bar_style: 3d # 3d | gradient | glass | flat
bar_3d_depth: 9
bar_height: 28
bar_shadow: true
bar_opacity: 95
card_glass: false

devices:
  - entity: sensor.klima_pietro_power
    energy_entity: sensor.klima_pietro_daily_kwh
    name: Klima Piętro
    icon: mdi:air-conditioner
    color: "#b324ff"
  - entity: sensor.silownia_power
    energy_entity: sensor.silownia_daily_kwh
    name: Siłownia
    icon: mdi:dumbbell
    color: "#26e6c9"
  - entity: sensor.pc_power
    energy_entity: sensor.pc_daily_kwh
    name: PC
    icon: mdi:desktop-tower-monitor
    color: "#ff2a6d"
    is_child: true
    parent_entity: sensor.silownia_power
```

---

## 📄 License

Licensed under the [MIT License](LICENSE).