/**
 * Realtime Power Card for Home Assistant (v6.2)
 * HACS Ready | True 3D Translucent Prism Bars | Regional Number Formatting | Top-Aligned Transparent Header
 */

const TRANSLATIONS = {
  en: {
    default_title: "",
    other: "Untracked / Other",
    total: "Total consumption",
    untracked_parent: "Other (in group)",
    no_data: "No active power data above threshold",
    editor: {
      title: "Card Title (optional)",
      language: "Language & Regional Formatting",
      lang_auto: "Auto (Home Assistant Locale)",
      chart_type: "Main Chart Type",
      bar: "Horizontal Bar Chart",
      pie: "Pie Chart",
      donut: "Donut Chart",
      sankey_h: "Sankey Chart – Horizontal (Left → Right)",
      sankey_v: "Sankey Chart – Vertical (Top → Bottom)",
      total_entity: "Total Power Entity (type to search, empty = auto from Energy Panel)",
      search_entity_placeholder: "Type to search entity (e.g. socket, power)...",
      clear_entity: "Clear",
      auto_energy: "Auto-sync devices from HA Energy Dashboard",
      show_daily_kwh_devices: "Show daily energy sum (kWh) next to devices",
      show_daily_kwh_total: "Show daily energy sum (kWh) in header (Total)",
      hierarchy_mode: "Sub-devices display mode (for Bar/Pie)",
      h_brackets: "Put sub-device value in brackets & don't subtract from Other",
      h_subtract: "Subtract sub-device power from parent device & don't subtract twice from Other",
      h_hide: "Hide sub-devices on chart",
      show_other: "Calculate and show 'Untracked / Other'",
      other_color: "'Other' Color",
      sort_mode: "Sorting Mode",
      sort_power: "By Power Consumption",
      sort_alpha: "Alphabetically (A → Z)",
      sort_custom: "Custom User Order (use ▲/▼ buttons below)",
      sort_reverse: "Reverse sorting order (Ascending / Z → A)",
      min_power: "Hide devices below power threshold (W)",
      max_devices: "Max devices shown on chart (0 = unlimited)",
      unit_kw_above_1kw: "Auto-convert unit to kW above 1 kW (>= 1000 W)",
      show_icons: "Show device icons",
      icons_only: "Show ONLY icons (hide device text names)",
      icons_inside_charts: "Render device icons inside Pie / Donut slices & Sankey nodes",
      show_percentage: "Show percentage share (%)",
      // Header & History Chart
      header_section: "Header & Background History Chart",
      show_total_subtitle: "Show 'Total consumption: W/kW' in header",
      header_total_prefix: "Header total label text",
      header_top_offset: "Header text offset from top (px)",
      header_total_font_size: "Total consumption font size (px)",
      header_total_color: "Total consumption text color",
      header_total_opacity: "Header text layer opacity (%)",
      header_text_shadow: "Enable drop shadow under header text",
      header_text_outline: "Enable text outline (stroke) around header text",
      header_text_outline_color: "Header text outline color",
      header_text_outline_width: "Header text outline thickness (px)",
      header_height: "Header / History chart height (px)",
      header_bg_color: "Header background color",
      header_bg_opacity: "Header background opacity (%)",
      header_history_enable: "Enable history chart in header background",
      header_chart_opacity: "Entire Header History Chart Opacity (%)",
      header_history_type: "Header history chart style",
      hh_line: "Smooth Line + Area Gradient",
      hh_bar: "Vertical Bars",
      hh_combo: "Combo: Bars + Line with Nodes",
      hh_led: "Segmented LED Equalizer",
      header_history_hours: "History time span (hours)",
      header_history_buckets: "Number of columns / time bars",
      header_led_segments: "Number of vertical LED segments",
      header_scale_mode: "History Y-Axis Scale",
      scale_auto: "Automatic (fit to max value)",
      scale_fixed: "Fixed Maximum (W)",
      header_max_scale_w: "Fixed Max Scale Value (W)",
      header_color_max: "Chart Color – High / Max values",
      header_color_min: "Chart Color – Low / Min values",
      header_line_color: "Chart Line / Peak Dots Color",
      header_opacity_max: "Opacity for HIGH values (%)",
      header_opacity_min: "Opacity for LOW values (%)",
      header_effect_glow: "Enable Neon Glow on header chart",
      header_effect_3d: "Enable 3D depth effect on header chart",
      header_effect_glass: "Enable Glass frost on header container",
      // Main Chart Visual Effects
      effects_header: "Main Chart Visual Effects, Opacity & Background",
      bar_style: "Visual Style (Bars, Pie & Sankey)",
      style_flat: "Flat (Classic)",
      style_gradient: "Linear Gradient",
      style_3d: "3D Translucent Prism / Cuboid",
      style_glass: "Frosted Glass & Neon Glow",
      bar_3d_depth: "3D Prism Depth (px, for 3D style)",
      bar_shadow: "Enable drop shadow / floor glow on chart elements",
      bar_opacity: "Chart Elements Opacity (%)",
      card_opacity: "Entire Card Opacity (%)",
      card_bg_opacity: "Card Background Opacity (%)",
      card_glass: "Card Glassmorphism (blurred background)",
      card_bg_color: "Custom Card Background Color",
      bg_image: "Background Image URL (e.g. /local/bg.jpg)",
      bg_overlay: "Background Image Darkening (%)",
      size_header: "Card Size & Auto / Percentage Scaling",
      size_mode: "Card Sizing & Scaling Mode",
      size_auto: "Automatic height (manual pixel dimensions)",
      size_fixed: "Fixed / Max dimensions (auto-scale bars & % fonts)",
      card_max_width: "Max Card Width (px, 0 = 100% auto)",
      card_height: "Fixed Card Height (px)",
      bar_height_pct: "Bar thickness (% of available row height, 20-95%)",
      font_bar_pct: "Font size (% of bar thickness, 30-90%)",
      appearance_header: "Manual Dimensions & Typography (px)",
      bar_height: "Bar thickness / height (px)",
      bar_gap: "Gap between bars / nodes (px)",
      bar_radius: "Corner radius (px)",
      label_width: "Left label column width (px)",
      label_font_size: "Device name font size (px)",
      value_font_size: "Power value font size (px)",
      title_font_size: "Header title font size (px)",
      icon_size: "Icon size (px)",
      pie_size: "Pie / Donut chart size (px)",
      sankey_height: "Sankey chart height (px)",
      devices_header: "Device Customizations & Hierarchy",
      sync_btn: "Sync new from Energy Panel (keep manual edits)",
      resync_btn: "Force full reset from Energy Panel",
      add_btn: "Add device manually",
      entity_power: "Power Sensor (W/kW)",
      name_override: "Custom Name",
      icon_search: "Search icon (e.g. fan, tv, ac)...",
      is_subdevice: "Sub-device (in brackets, excluded from 'Other' calculation)",
      parent_entity: "Parent Device (for Sankey tree & subtraction)",
      none: "None / Main device...",
      unmapped_warn: "⚠️ No power sensor (stat_rate) found – type below to search and select!"
    }
  },
  pl: {
    default_title: "",
    other: "Pozostałe",
    total: "Całkowite zużycie",
    untracked_parent: "Reszta obwodu",
    no_data: "Brak urządzeń powyżej progu mocy",
    editor: {
      title: "Tytuł karty (opcjonalny)",
      language: "Język i formatowanie regionalne",
      lang_auto: "Automatyczny (z ustawień HA)",
      chart_type: "Typ wykresu głównego",
      bar: "Wykres słupkowy (poziomy)",
      pie: "Wykres kołowy (Pie)",
      donut: "Wykres pierścieniowy (Donut)",
      sankey_h: "Wykres Sankey – Poziomy (Lewo → Prawo)",
      sankey_v: "Wykres Sankey – Pionowy (Góra → Dół)",
      total_entity: "Encja całkowitego poboru mocy (wpisz fragment, puste = auto z Panelu Energii)",
      search_entity_placeholder: "Wpisz aby wyszukać encję (np. socket, power, silka)...",
      clear_entity: "Wyczyść",
      auto_energy: "Pobieraj urządzenia automatycznie z Panelu Energii",
      show_daily_kwh_devices: "Pokazuj dzienną sumę zużycia (kWh) przy urządzeniach",
      show_daily_kwh_total: "Pokazuj dzienną sumę zużycia (kWh) w nagłówku (Całkowite)",
      hierarchy_mode: "Tryb urządzeń podrzędnych (dla Słupkowego/Kołowego)",
      h_brackets: "Pokaż podrzędne w nawiasie – nie odliczaj od 'Pozostałe'",
      h_subtract: "Odejmij moc podrzędnego od nadrzędnego – nie odliczaj podwójnie od 'Pozostałe'",
      h_hide: "Ukryj urządzenia podrzędne na wykresie",
      show_other: "Obliczaj i pokazuj pozycję 'Pozostałe'",
      other_color: "Kolor pozycji 'Pozostałe'",
      sort_mode: "Sposób sortowania",
      sort_power: "Według aktualnego zużycia mocy",
      sort_alpha: "Alfabetycznie (A → Z)",
      sort_custom: "Własna kolejność użytkownika (przyciski ▲/▼ poniżej)",
      sort_reverse: "Odwróć kolejność sortowania (Rosnąco / Z → A)",
      min_power: "Ukryj urządzenia poniżej określonej mocy (W, np. 4)",
      max_devices: "Maksymalna ilość urządzeń na wykresie (0 = bez limitu)",
      unit_kw_above_1kw: "Zmieniaj jednostkę z W na kW powyżej 1 kW (>= 1000 W)",
      show_icons: "Pokazuj ikony urządzeń",
      icons_only: "Pokazuj TYLKO ikony urządzeń (ukryj nazwy tekstowe)",
      icons_inside_charts: "Wyświetlaj ikony wewnątrz wykresu kołowego i węzłów Sankey",
      show_percentage: "Pokazuj udział procentowy (%)",
      // Sekcja Nagłówka i Wykresu Historii w tle
      header_section: "Nagłówek i Wykres Historii w Tle",
      show_total_subtitle: "Pokazuj 'Całkowite zużycie: W/kW' w nagłówku",
      header_total_prefix: "Tekst przed całkowitym zużyciem",
      header_top_offset: "Przesunięcie tekstu nagłówka od góry (px)",
      header_total_font_size: "Rozmiar czcionki całkowitego zużycia (px)",
      header_total_color: "Kolor tekstu całkowitego zużycia",
      header_total_opacity: "Przezroczystość (krycie) tekstu nagłówka (%)",
      header_text_shadow: "Włącz cień pod tekstem nagłówka",
      header_text_outline: "Włącz obrys (Outline) wokół tekstu nagłówka",
      header_text_outline_color: "Kolor obrysu (Outline) tekstu nagłówka",
      header_text_outline_width: "Grubość obrysu (Outline) tekstu (px)",
      header_height: "Wysokość nagłówka / wykresu historii (px)",
      header_bg_color: "Kolor tła nagłówka",
      header_bg_opacity: "Przezroczystość (krycie) tła nagłówka (%)",
      header_history_enable: "Włącz wykres historii całkowitego zużycia w tle nagłówka",
      header_chart_opacity: "Przezroczystość (krycie) CAŁEGO wykresu w nagłówku (%)",
      header_history_type: "Typ wykresu historii w nagłówku",
      hh_line: "Liniowy z gradientem wypełnienia",
      hh_bar: "Słupkowy klasyczny",
      hh_combo: "Combo: Słupki + Linia z punktami",
      hh_led: "Słupkowy segmentowy (Equalizer LED)",
      header_history_hours: "Zakres czasu historii (godziny)",
      header_history_buckets: "Ilość kolumn / słupków na osi czasu",
      header_led_segments: "Ilość segmentów pionowych Equalizera LED",
      header_scale_mode: "Skala pionowa wykresu historii",
      scale_auto: "Automatyczna (dopasuj do wartości max)",
      scale_fixed: "Zdefiniowany maksymalny pułap (W)",
      header_max_scale_w: "Maksymalna wartość skali wykresu (W)",
      header_color_max: "Kolor wykresu / gradientu – Wartości WYSOKIE (Max)",
      header_color_min: "Kolor wykresu / gradientu – Wartości NISKIE (Min)",
      header_line_color: "Kolor linii głównej i punktów szczytowych",
      header_opacity_max: "Krycie dla WYSOKICH wartości (%)",
      header_opacity_min: "Krycie dla NISKICH wartości (%)",
      header_effect_glow: "Efekt poświaty (Neon Glow) na wykresie nagłówka",
      header_effect_3d: "Efekt głębi 3D na słupkach/segmentach nagłówka",
      header_effect_glass: "Efekt szkła (Glass) na panelu nagłówka",
      // Sekcja Efektów Głównych
      effects_header: "Efekty wizualne wykresu głównego i Tło karty",
      bar_style: "Styl wizualny wykresu (Słupki, Kołowy, Sankey)",
      style_flat: "Płaski (Klasyczny)",
      style_gradient: "Gradient liniowy",
      style_3d: "Szklany prostopadłościan 3D (Izometryczny)",
      style_glass: "Szkło (Glass) + Poświata Neon",
      bar_3d_depth: "Głębia bryły 3D (px, dla stylu 3D)",
      bar_shadow: "Włącz cień / dolną poświatę (Glow) pod słupkami",
      bar_opacity: "Przezroczystość (krycie) słupków / wycinków (%)",
      card_opacity: "Przezroczystość (krycie) CAŁEJ karty (%)",
      card_bg_opacity: "Przezroczystość (krycie) TŁA karty (%)",
      card_glass: "Efekt Glass na tle karty (rozmycie backdrop-blur)",
      card_bg_color: "Własny kolor tła karty",
      bg_image: "URL obrazu w tle (np. /local/tlo.jpg)",
      bg_overlay: "Przyciemnienie obrazu w tle (%)",
      size_header: "Rozmiar karty i skalowanie (Automatyczne / Procentowe)",
      size_mode: "Tryb rozmiaru karty i czcionek",
      size_auto: "Automatyczna wysokość (ręczne wymiary w px)",
      size_fixed: "Zdefiniowany rozmiar karty (automatyczna grubość słupków i % czcionki)",
      card_max_width: "Maksymalna szerokość karty (px, 0 = 100% automatyczna)",
      card_height: "Docelowa wysokość karty (px)",
      bar_height_pct: "Wypełnienie wiersza słupkiem (% wysokości wiersza, 20-95%)",
      font_bar_pct: "Wielkość czcionki względem grubości słupka (%, np. 55%)",
      appearance_header: "Ręczne wymiary i czcionki (px)",
      bar_height: "Grubość słupków (px)",
      bar_gap: "Odstęp między słupkami / węzłami (px)",
      bar_radius: "Zaokrąglenie rogów (px)",
      label_width: "Szerokość kolumny z nazwami (px)",
      label_font_size: "Rozmiar czcionki nazw urządzeń (px)",
      value_font_size: "Rozmiar czcionki wartości mocy (px)",
      title_font_size: "Rozmiar czcionki tytułu karty (px)",
      icon_size: "Rozmiar ikon (px)",
      pie_size: "Średnica wykresu kołowego (px)",
      sankey_height: "Wysokość wykresu Sankey (px)",
      devices_header: "Konfiguracja urządzeń (Wyszukiwarka encji, Kolejność ▲/▼, Kolory, Ikony)",
      sync_btn: "Uzupełnij z Panelu Energii (zachowaj ręczne zmiany)",
      resync_btn: "Wymuś pełny reset z Panelu Energii (wczytaj stat_rate)",
      add_btn: "Dodaj urządzenie ręcznie",
      entity_power: "Sensor mocy (W/kW)",
      name_override: "Własna nazwa",
      icon_search: "Szukaj ikony (np. fan, klima, tv)...",
      is_subdevice: "Urządzenie podrzędne (w nawiasie – nie odliczane od 'Pozostałe')",
      parent_entity: "Urządzenie nadrzędne / Rodzic (dla wykresu Sankey i odejmowania)",
      none: "Brak / Urządzenie główne...",
      unmapped_warn: "⚠️ Brak sensora mocy – wyszukaj i wybierz właściwą encję poniżej!"
    }
  }
};

const DEFAULT_PALETTE = [
  "#0091ea", "#00e676", "#ffd600", "#ff1744", "#d500f9",
  "#ff6d00", "#00bfa5", "#304ffe", "#c6ff00", "#ff3d00",
  "#aa00ff", "#00b0ff", "#76ff03", "#ffab00", "#f50057"
];

const MDI_ICON_CATALOG = [
  "mdi:fan", "mdi:fan-alert", "mdi:fan-auto", "mdi:fan-chevron-down", "mdi:fan-chevron-up", "mdi:fan-clock", "mdi:fan-minus", "mdi:fan-off", "mdi:fan-plus", "mdi:fan-speed-1", "mdi:fan-speed-2", "mdi:fan-speed-3", "mdi:ceiling-fan", "mdi:ceiling-fan-light",
  "mdi:air-conditioner", "mdi:snowflake", "mdi:fire", "mdi:radiator", "mdi:heat-pump", "mdi:heat-pump-outline", "mdi:water-boiler", "mdi:thermostat", "mdi:hvac", "mdi:air-purifier", "mdi:air-humidifier",
  "mdi:washing-machine", "mdi:tumble-dryer", "mdi:dishwasher", "mdi:fridge", "mdi:fridge-outline", "mdi:stove", "mdi:microwave", "mdi:coffee-maker", "mdi:kettle", "mdi:toaster-oven", "mdi:blender", "mdi:robot-vacuum", "mdi:iron", "mdi:hair-dryer",
  "mdi:television", "mdi:television-classic", "mdi:monitor", "mdi:desktop-tower-monitor", "mdi:desktop-classic", "mdi:laptop", "mdi:server", "mdi:server-network", "mdi:nas", "mdi:router-wireless", "mdi:printer", "mdi:printer-3d", "mdi:printer-3d-nozzle", "mdi:gamepad-variant", "mdi:speaker", "mdi:amplifier", "mdi:projector",
  "mdi:lightbulb", "mdi:lightbulb-on", "mdi:lightbulb-group", "mdi:led-strip", "mdi:led-strip-variant", "mdi:lamp", "mdi:floor-lamp", "mdi:ceiling-light", "mdi:outdoor-lamp", "mdi:coach-lamp",
  "mdi:dumbbell", "mdi:weight-lifter", "mdi:run", "mdi:bike", "mdi:motorbike", "mdi:car-electric", "mdi:ev-station", "mdi:garage", "mdi:tools", "mdi:hammer-wrench", "mdi:saw-blade", "mdi:welding-torch",
  "mdi:solar-power", "mdi:solar-panel", "mdi:battery-charging", "mdi:battery-high", "mdi:home-battery", "mdi:transmission-tower", "mdi:power-plug", "mdi:power-socket-eu", "mdi:flash", "mdi:lightning-bolt", "mdi:meter-electric", "mdi:current-ac",
  "mdi:water-pump", "mdi:sprinkler", "mdi:mower", "mdi:pool", "mdi:hot-tub", "mdi:cctv", "mdi:shield-home", "mdi:gate", "mdi:window-shutter", "mdi:curtains"
];

const DEFAULT_CONFIG = {
  title: "",
  chart_type: "bar",
  total_power_entity: "",
  auto_from_energy_panel: true,
  show_daily_kwh_devices: true,
  show_daily_kwh_total: true,
  hierarchy_mode: "brackets",
  show_other: true,
  other_color: "#7f8c8d",
  sort_mode: "power",
  sort_reverse: false,
  min_power_threshold: 0,
  max_devices: 0,
  unit_kw_above_1kw: true,
  show_icons: true,
  icons_only: false,
  icons_inside_charts: true,
  show_percentage: false,
  language: "auto",
  // Nagłówek i Wykres Historii w Tle
  show_total_subtitle: true,
  header_total_prefix: "",
  header_top_offset: 4,
  header_total_font_size: 18,
  header_total_color: "#ffffff",
  header_total_opacity: 90,
  header_text_shadow: true,
  header_text_outline: true,
  header_text_outline_color: "#000000",
  header_text_outline_width: 2,
  header_height: 110,
  header_bg_color: "#07192b",
  header_bg_opacity: 75,
  header_history_enable: true,
  header_chart_opacity: 90,
  header_history_type: "combo",
  header_history_hours: 24,
  header_history_buckets: 48,
  header_led_segments: 12,
  header_scale_mode: "auto",
  header_max_scale_w: 5000,
  header_color_max: "#00e5ff",
  header_color_min: "#004d7a",
  header_line_color: "#80d8ff",
  header_opacity_max: 88,
  header_opacity_min: 18,
  header_effect_glow: true,
  header_effect_3d: true,
  header_effect_glass: true,
  // Efekty główne
  bar_style: "3d", // 'flat' | 'gradient' | '3d' | 'glass'
  bar_3d_depth: 10,
  bar_shadow: true,
  bar_opacity: 92,
  card_opacity: 100,
  card_bg_opacity: 100,
  card_glass: false,
  card_bg_color: "#111111",
  background_image: "",
  bg_overlay_opacity: 60,
  // Skalowanie i wymiary
  size_mode: "auto",
  card_max_width: 0,
  card_height: 480,
  bar_height_pct: 72,
  font_bar_pct: 52,
  bar_height: 28,
  bar_gap: 14,
  bar_radius: 2,
  label_width: 135,
  label_font_size: 15,
  value_font_size: 14,
  title_font_size: 18,
  icon_size: 18,
  pie_size: 210,
  sankey_height: 360,
  devices: []
};

function hexToRgb(hex) {
  const clean = (hex || "#7f8c8d").replace("#", "").trim();
  if (clean.length === 3) {
    return {
      r: parseInt(clean[0] + clean[0], 16) || 0,
      g: parseInt(clean[1] + clean[1], 16) || 0,
      b: parseInt(clean[2] + clean[2], 16) || 0
    };
  }
  const num = parseInt(clean.substring(0, 6), 16) || 0;
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function adjustColor(hex, amount) {
  const { r, g, b } = hexToRgb(hex);
  const clamp = (v) => Math.max(0, Math.min(255, v));
  const toHex = (v) => clamp(v).toString(16).padStart(2, "0");
  return `#${toHex(r + amount)}${toHex(g + amount)}${toHex(b + amount)}`;
}

function interpolateHexColor(hexMin, hexMax, factor) {
  const t = Math.max(0, Math.min(1, factor));
  const c1 = hexToRgb(hexMin);
  const c2 = hexToRgb(hexMax);
  const r = Math.round(c1.r + (c2.r - c1.r) * t);
  const g = Math.round(c1.g + (c2.g - c1.g) * t);
  const b = Math.round(c1.b + (c2.b - c1.b) * t);
  const toHex = (v) => v.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function hexToRgba(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getContrastText(hexcolor) {
  const { r, g, b } = hexToRgb(hexcolor);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 160 ? "#141414" : "#ffffff";
}

function getEffectiveLocale(hass, configLang) {
  if (configLang && configLang !== "auto") {
    return configLang === "pl" ? "pl-PL" : "en-US";
  }
  if (hass && hass.locale && hass.locale.language) return hass.locale.language;
  if (hass && hass.language) return hass.language;
  return navigator.language || "pl-PL";
}

function formatRegionalNumber(value, locale, maxDecimals = 1, minDecimals = 0) {
  if (value === null || value === undefined || isNaN(value)) return "0";
  try {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: minDecimals,
      maximumFractionDigits: maxDecimals,
      useGrouping: false
    }).format(value);
  } catch (e) {
    const fixed = value.toFixed(maxDecimals);
    return locale.startsWith("pl") ? fixed.replace(".", ",") : fixed;
  }
}

function localize(hass, configLang, key) {
  let lang = configLang;
  if (!lang || lang === "auto") {
    lang = (hass && hass.language) ? hass.language.split("-")[0] : "en";
  }
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const res = key.split(".").reduce((o, i) => (o !== undefined && o !== null ? o[i] : null), dict);
  return res !== null && res !== undefined ? res : key;
}

function guessDeviceIcon(name, stateObj) {
  if (stateObj && stateObj.attributes.icon && stateObj.attributes.icon !== "mdi:chart-line" && stateObj.attributes.icon !== "mdi:flash") {
    return stateObj.attributes.icon;
  }
  const n = (name || "").toLowerCase();
  if (n.includes("klima") || n.includes("ac") || n.includes("klimatyzacja")) return "mdi:air-conditioner";
  if (n.includes("siłownia") || n.includes("silka") || n.includes("gym")) return "mdi:dumbbell";
  if (n.includes("bieżnia") || n.includes("treadmill")) return "mdi:run";
  if (n.includes("pralka") || n.includes("pranie") || n.includes("wash")) return "mdi:washing-machine";
  if (n.includes("suszarka") || n.includes("dryer")) return "mdi:tumble-dryer";
  if (n.includes("zmywarka") || n.includes("dish")) return "mdi:dishwasher";
  if (n.includes("lodówka") || n.includes("zamrażarka") || n.includes("fridge")) return "mdi:fridge-outline";
  if (n.includes("tv") || n.includes("telewizor") || n.includes("salon")) return "mdi:television";
  if (n.includes("pc") || n.includes("komputer") || n.includes("biuro") || n.includes("laptop")) return "mdi:desktop-tower-monitor";
  if (n.includes("serwer") || n.includes("nas") || n.includes("truenas") || n.includes("rack")) return "mdi:server-network";
  if (n.includes("drukarka") || n.includes("3d") || n.includes("creality") || n.includes("bambu")) return "mdi:printer-3d";
  if (n.includes("piekarnik") || n.includes("indukcja") || n.includes("kuchnia") || n.includes("płyta") || n.includes("multicook")) return "mdi:stove";
  if (n.includes("ekspres") || n.includes("kawa")) return "mdi:coffee-maker";
  if (n.includes("czajnik") || n.includes("kettle")) return "mdi:kettle";
  if (n.includes("jacuzzi") || n.includes("balia") || n.includes("basen") || n.includes("spa")) return "mdi:hot-tub";
  if (n.includes("pompa ciepła") || n.includes("heat pump")) return "mdi:heat-pump";
  if (n.includes("bojler") || n.includes("cwu") || n.includes("grzałka")) return "mdi:water-boiler";
  if (n.includes("światł") || n.includes("lampa") || n.includes("led") || n.includes("oświetlenie")) return "mdi:lightbulb-on";
  if (n.includes("wentylator") || n.includes("rekuperacja") || n.includes("fan")) return "mdi:fan";
  if (n.includes("pompa") || n.includes("studnia") || n.includes("nawadnianie")) return "mdi:water-pump";
  if (n.includes("garaż") || n.includes("warsztat")) return "mdi:garage";
  return "mdi:power-plug";
}

function isPowerStateObj(stateObj) {
  if (!stateObj) return false;
  const dc = (stateObj.attributes.device_class || "").toLowerCase();
  const unit = (stateObj.attributes.unit_of_measurement || "").toLowerCase();
  if (unit === "kwh" || unit === "wh" || unit === "mwh" || dc === "energy" || dc === "voltage" || dc === "current" || dc === "power_factor") return false;
  return dc === "power" || unit === "w" || unit === "kw";
}

function getAllPowerEntities(hass) {
  if (!hass) return [];
  return Object.keys(hass.states)
    .filter((eid) => eid.startsWith("sensor.") && isPowerStateObj(hass.states[eid]))
    .sort();
}

const PHASE_PENALTY_REGEX = /(_[abc]|_l[123]|_phase_?[123abc]|_faza_?[123abc]|_ch[1234]|_channel_?[1234])$/i;
const BAD_METRIC_REGEX = /(voltage|current|reactive|apparent|factor|frequency|daily|monthly|yearly|today|yesterday|total_energy|energy)/i;
const ENERGY_TOKEN_STRIP = /^(sensor|energy|energia|consumption|zuzycie|kwh|wh|total|daily|today|licznik|meter|stat|sum|accumulated)$/i;

function tokenizeStr(str) {
  return (str || "")
    .toLowerCase()
    .replace(/[^a-z0-9ąćęłńóśźż]+/g, " ")
    .split(" ")
    .filter((t) => t.length > 1 && !ENERGY_TOKEN_STRIP.test(t));
}

function scorePowerCandidateV6(hass, candidateId, statId, customName, regMap) {
  const candState = hass.states[candidateId];
  if (!isPowerStateObj(candState)) return -9999;

  let score = 0;
  const statClean = (statId || "").replace(/^sensor\./, "").toLowerCase();
  const candClean = candidateId.replace(/^sensor\./, "").toLowerCase();

  const baseStat = statClean
    .replace(/_energy_total|_total_energy|_energy_consumption|_daily_energy|_today_energy|_energy|_consumption|_kwh|_wh|_energia|_zuzycie|_total|_licznik|_sum/g, "");
  const baseCand = candClean
    .replace(/_active_power|_current_power|_total_power|_power|_watts|_watt|_load|_moc|_pobor|_w$/g, "");

  if (baseCand === baseStat) {
    score += 350;
  } else if (candClean === `${baseStat}_power` || candClean === `${baseStat}_active_power` || candClean === `${baseStat}_moc`) {
    score += 320;
  } else if (baseCand.startsWith(baseStat) || baseStat.startsWith(baseCand)) {
    score += 140;
  }

  const statReg = regMap ? regMap[statId] : null;
  const candReg = regMap ? regMap[candidateId] : null;
  if (statReg && candReg) {
    if (statReg.device_id && statReg.device_id === candReg.device_id) score += 250;
    if (statReg.unique_id && candReg.unique_id) {
      const uStat = statReg.unique_id.toLowerCase().replace(/energy|consumption|kwh|total/g, "");
      const uCand = candReg.unique_id.toLowerCase().replace(/power|active|watts|load|moc/g, "");
      if (uStat === uCand) score += 200;
    }
  }

  const statHasPhase = PHASE_PENALTY_REGEX.test(statClean);
  const candHasPhase = PHASE_PENALTY_REGEX.test(candClean);
  if (candHasPhase && !statHasPhase) {
    score -= 300;
  } else if (candHasPhase && statHasPhase) {
    const statPhaseMatch = statClean.match(PHASE_PENALTY_REGEX)[0];
    const candPhaseMatch = candClean.match(PHASE_PENALTY_REGEX)[0];
    score += statPhaseMatch === candPhaseMatch ? 200 : -300;
  }

  if (BAD_METRIC_REGEX.test(candClean)) score -= 180;

  const statState = hass.states[statId];
  const statFriendly = customName || (statState && statState.attributes.friendly_name) || "";
  const candFriendly = (candState && candState.attributes.friendly_name) || "";

  const statTokens = new Set([...tokenizeStr(baseStat), ...tokenizeStr(statFriendly)]);
  const candTokens = new Set([...tokenizeStr(baseCand), ...tokenizeStr(candFriendly)]);

  let shared = 0;
  statTokens.forEach((t) => {
    if (candTokens.has(t)) shared++;
  });
  score += shared * 40;
  score -= Math.abs(candClean.length - baseStat.length) * 1.5;

  return score;
}

function resolvePowerForEnergyDevice(hass, devObj, statToDevice, deviceToPowerEntities, allPowerEntities, regMap) {
  if (!hass || !devObj) return null;
  if (devObj.stat_rate && hass.states[devObj.stat_rate]) return devObj.stat_rate;

  const statId = devObj.stat_consumption;
  if (!statId) return null;
  if (hass.states[statId] && isPowerStateObj(hass.states[statId])) return statId;

  const devId = statToDevice[statId];
  if (devId && deviceToPowerEntities[devId] && deviceToPowerEntities[devId].length > 0) {
    const devCandidates = deviceToPowerEntities[devId];
    if (devCandidates.length === 1) return devCandidates[0];
    const scoredDev = devCandidates
      .map((cid) => ({ cid, s: scorePowerCandidateV6(hass, cid, statId, devObj.name, regMap) }))
      .sort((a, b) => b.s - a.s);
    if (scoredDev[0].s > 0) return scoredDev[0].cid;
  }

  const scoredAll = allPowerEntities
    .map((cid) => ({ cid, s: scorePowerCandidateV6(hass, cid, statId, devObj.name, regMap) }))
    .filter((item) => item.s >= 90)
    .sort((a, b) => b.s - a.s);

  return scoredAll.length > 0 ? scoredAll[0].cid : null;
}

function resolveAutoTotalPowerAndEnergy(hass, prefs, statToDevice, deviceToPowerEntities, allPowerEntities, regMap) {
  let totalPowerEnt = null;
  const gridEnergyStats = [];

  if (prefs && Array.isArray(prefs.energy_sources)) {
    for (const src of prefs.energy_sources) {
      if (src.type === "grid") {
        if (src.stat_rate && hass.states[src.stat_rate]) totalPowerEnt = src.stat_rate;
        if (Array.isArray(src.flow_from)) {
          for (const flow of src.flow_from) {
            if (flow.stat_energy_from) gridEnergyStats.push(flow.stat_energy_from);
            if (!totalPowerEnt && flow.stat_rate && hass.states[flow.stat_rate]) totalPowerEnt = flow.stat_rate;
            if (!totalPowerEnt && flow.stat_energy_from) {
              const matched = resolvePowerForEnergyDevice(
                hass,
                { stat_consumption: flow.stat_energy_from },
                statToDevice,
                deviceToPowerEntities,
                allPowerEntities,
                regMap
              );
              if (matched) totalPowerEnt = matched;
            }
          }
        }
      }
    }
  }

  if (!totalPowerEnt) {
    const totalKeywords = [/load_power|total_load_power|home_power|house_power|grid_power|total_power|active_power_total|moc_obciazenia|calkowity_pobor/i];
    for (const rx of totalKeywords) {
      const found = allPowerEntities.find((eid) => rx.test(eid) && !PHASE_PENALTY_REGEX.test(eid));
      if (found) {
        totalPowerEnt = found;
        break;
      }
    }
  }

  return { autoTotalEntity: totalPowerEnt, gridEnergyStats };
}

function getFallbackStorageEnergySensorPrefs(hass) {
  const st = hass && hass.states ? hass.states["sensor.energy_dashboard_devices"] : null;
  if (st && st.attributes && st.attributes.data) return st.attributes.data;
  return null;
}

// ==========================================
// GŁÓWNA KLASA KARTY (v6.2)
// ==========================================
class RealtimePowerCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = {};
    this._hass = null;
    this._energyMapping = null;
    this._loadingPrefs = false;
    this._domInitialized = false;
    this._currentChartMode = null;
    this._resizeObserver = null;
    this._dailyKwhMap = {};
    this._lastKwhFetchTs = 0;
    this._historySeries = [];
    this._lastHistoryFetchTs = 0;
    this._lastHistoryKey = "";
  }

  connectedCallback() {
    if (!this._resizeObserver && window.ResizeObserver) {
      this._resizeObserver = new ResizeObserver(() => {
        if (this._config.chart_type === "bar") this._updateCard();
      });
      this._resizeObserver.observe(this);
    }
  }

  disconnectedCallback() {
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
  }

  static getConfigElement() {
    return document.createElement("realtime-power-card-editor");
  }

  static getStubConfig() {
    return { ...DEFAULT_CONFIG };
  }

  setConfig(config) {
    this._config = { ...DEFAULT_CONFIG, ...config };
    if (config.show_daily_kwh !== undefined) {
      if (config.show_daily_kwh_devices === undefined) this._config.show_daily_kwh_devices = Boolean(config.show_daily_kwh);
      if (config.show_daily_kwh_total === undefined) this._config.show_daily_kwh_total = Boolean(config.show_daily_kwh);
    }
    if (config.sort_by_power === false && !config.sort_mode) {
      this._config.sort_mode = "custom";
    }
    if (this._config.title === "Aktualny pobór – urządzenia" || this._config.title === "Current power – devices") {
      this._config.title = "";
    }
    this._domInitialized = false;
    this._energyMapping = null;
    this._lastHistoryFetchTs = 0;
    this._lastKwhFetchTs = 0;
    this._updateCard();
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._energyMapping && !this._loadingPrefs) {
      this._fetchEnergyPanelData();
    } else {
      this._maybeFetchDailyKwh();
      this._maybeFetchHeaderHistory();
      this._updateCard();
    }
  }

  async _fetchEnergyPanelData() {
    if (!this._hass) return;
    this._loadingPrefs = true;
    try {
      let [prefs, entityReg] = await Promise.all([
        this._hass.callWS({ type: "energy/get_prefs" }).catch(() => null),
        this._hass.callWS({ type: "config/entity_registry/list" }).catch(() => [])
      ]);

      if (!prefs || !prefs.device_consumption) {
        const fallbackPrefs = getFallbackStorageEnergySensorPrefs(this._hass);
        if (fallbackPrefs) prefs = fallbackPrefs;
      }

      const deviceToPowerEntities = {};
      const deviceToEnergyEntities = {};
      const statToDevice = {};
      const regMap = {};
      const allPower = getAllPowerEntities(this._hass);

      entityReg.forEach((ent) => {
        regMap[ent.entity_id] = ent;
        if (ent.device_id && !ent.disabled_by) {
          statToDevice[ent.entity_id] = ent.device_id;
          const stateObj = this._hass.states[ent.entity_id];
          if (stateObj && ent.entity_id.startsWith("sensor.")) {
            if (isPowerStateObj(stateObj)) {
              if (!deviceToPowerEntities[ent.device_id]) deviceToPowerEntities[ent.device_id] = [];
              deviceToPowerEntities[ent.device_id].push(ent.entity_id);
            } else {
              const u = (stateObj.attributes.unit_of_measurement || "").toLowerCase();
              const dc = (stateObj.attributes.device_class || "").toLowerCase();
              if (u === "kwh" || u === "wh" || dc === "energy") {
                if (!deviceToEnergyEntities[ent.device_id]) deviceToEnergyEntities[ent.device_id] = [];
                deviceToEnergyEntities[ent.device_id].push(ent.entity_id);
              }
            }
          }
        }
      });

      const resolvedDevices = [];
      if (prefs && prefs.device_consumption) {
        prefs.device_consumption.forEach((dev, idx) => {
          const powerEntity = resolvePowerForEnergyDevice(
            this._hass,
            dev,
            statToDevice,
            deviceToPowerEntities,
            allPower,
            regMap
          );
          resolvedDevices.push({
            stat_id: dev.stat_consumption || null,
            stat_rate: dev.stat_rate || null,
            power_entity: powerEntity,
            name: dev.name || null,
            included_in_stat: dev.included_in_stat || null,
            default_color: DEFAULT_PALETTE[idx % DEFAULT_PALETTE.length]
          });
        });
      }

      const { autoTotalEntity, gridEnergyStats } = resolveAutoTotalPowerAndEnergy(
        this._hass,
        prefs,
        statToDevice,
        deviceToPowerEntities,
        allPower,
        regMap
      );

      this._energyMapping = {
        devices: resolvedDevices,
        autoTotalEntity,
        gridEnergyStats,
        statToDevice,
        deviceToPowerEntities,
        deviceToEnergyEntities,
        regMap
      };
    } catch (e) {
      console.error("RealtimePowerCard: Error fetching Energy prefs", e);
      this._energyMapping = { devices: [], autoTotalEntity: null, gridEnergyStats: [] };
    }
    this._loadingPrefs = false;
    this._maybeFetchDailyKwh(true);
    this._maybeFetchHeaderHistory(true);
    this._updateCard();
  }

  async _maybeFetchDailyKwh(force = false) {
    const wantDevKwh = this._config.show_daily_kwh_devices !== false;
    const wantTotKwh = this._config.show_daily_kwh_total !== false;
    if (!this._hass || (!wantDevKwh && !wantTotKwh) || !this._energyMapping) return;

    const now = Date.now();
    if (!force && now - this._lastKwhFetchTs < 60000) return;
    this._lastKwhFetchTs = now;

    const statIds = new Set();
    (this._energyMapping.devices || []).forEach((d) => {
      if (d.stat_id) statIds.add(d.stat_id);
    });
    (this._energyMapping.gridEnergyStats || []).forEach((s) => statIds.add(s));

    const totalEnt = this._getEffectiveTotalEntity();
    if (totalEnt && this._energyMapping.statToDevice[totalEnt]) {
      const devId = this._energyMapping.statToDevice[totalEnt];
      const eList = this._energyMapping.deviceToEnergyEntities[devId] || [];
      eList.forEach((s) => statIds.add(s));
    }

    const idsArray = Array.from(statIds).filter(Boolean);
    if (idsArray.length === 0) return;

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    try {
      const stats = await this._hass.callWS({
        type: "recorder/statistics_during_period",
        start_time: startOfDay.toISOString(),
        end_time: new Date().toISOString(),
        statistic_ids: idsArray,
        period: "hour",
        types: ["change"],
        units: { energy: "kWh" }
      });

      const nextMap = {};
      if (stats) {
        Object.keys(stats).forEach((sid) => {
          const pts = stats[sid] || [];
          const sumChange = pts.reduce((acc, p) => acc + (typeof p.change === "number" ? p.change : 0), 0);
          nextMap[sid] = Math.max(0, sumChange);
        });
      }
      this._dailyKwhMap = nextMap;
      this._updateCard();
    } catch (e) {
      // Recorder fallback
    }
  }

  async _maybeFetchHeaderHistory(force = false) {
    if (!this._hass || !this._config.header_history_enable) return;
    const totalEnt = this._getEffectiveTotalEntity();
    if (!totalEnt) return;

    const hours = Math.max(1, Math.min(168, Number(this._config.header_history_hours) || 24));
    const buckets = Math.max(12, Math.min(120, Number(this._config.header_history_buckets) || 48));
    const cacheKey = `${totalEnt}_${hours}_${buckets}`;
    const now = Date.now();

    if (!force && this._lastHistoryKey === cacheKey && now - this._lastHistoryFetchTs < 60000) return;
    this._lastHistoryFetchTs = now;
    this._lastHistoryKey = cacheKey;

    const startTime = new Date(now - hours * 3600 * 1000);
    const endTime = new Date(now);
    const unit = (this._hass.states[totalEnt]?.attributes?.unit_of_measurement || "").toLowerCase();
    const mult = unit === "kw" ? 1000 : 1;

    try {
      const url = `history/period/${startTime.toISOString()}?filter_entity_id=${encodeURIComponent(totalEnt)}&end_time=${encodeURIComponent(endTime.toISOString())}&minimal_response&no_attributes`;
      const hist = await this._hass.callApi("GET", url);

      if (hist && hist[0] && hist[0].length > 0) {
        const rawPts = hist[0];
        const startMs = startTime.getTime();
        const spanMs = Math.max(1, endTime.getTime() - startMs);
        const bucketDuration = spanMs / buckets;

        const bucketSums = new Array(buckets).fill(0);
        const bucketCounts = new Array(buckets).fill(0);

        rawPts.forEach((pt) => {
          const val = parseFloat(pt.s !== undefined ? pt.s : pt.state);
          if (isNaN(val)) return;
          const ts = pt.lu ? pt.lu * 1000 : new Date(pt.last_changed || pt.last_updated).getTime();
          const bIdx = Math.min(buckets - 1, Math.max(0, Math.floor((ts - startMs) / bucketDuration)));
          bucketSums[bIdx] += Math.max(0, val * mult);
          bucketCounts[bIdx]++;
        });

        const series = [];
        let lastKnown = this._getPowerWatts(totalEnt);
        for (let i = 0; i < buckets; i++) {
          if (bucketCounts[i] > 0) {
            lastKnown = bucketSums[i] / bucketCounts[i];
          }
          series.push(lastKnown);
        }
        series[buckets - 1] = this._getPowerWatts(totalEnt);
        this._historySeries = series;
        this._updateCard();
      }
    } catch (e) {
      // Fallback
    }
  }

  _getEffectiveTotalEntity() {
    if (this._config.total_power_entity) return this._config.total_power_entity;
    return this._energyMapping ? this._energyMapping.autoTotalEntity : null;
  }

  _getPowerWatts(entityId) {
    if (!entityId || !this._hass || !this._hass.states[entityId]) return 0;
    const stateObj = this._hass.states[entityId];
    const val = parseFloat(stateObj.state);
    if (isNaN(val)) return 0;
    const unit = (stateObj.attributes.unit_of_measurement || "").toLowerCase();
    if (unit === "kwh" || unit === "wh" || unit === "mwh") return 0;
    return unit === "kw" ? val * 1000 : val;
  }

  // Regionalne formatowanie wartości W / kW (przecinek lub kropka zależnie od języka)
  _formatWatts(w) {
    const locale = getEffectiveLocale(this._hass, this._config.language);
    const useKwAbove1000 = this._config.unit_kw_above_1kw !== false;
    if ((useKwAbove1000 && w >= 1000) || w >= 10000) {
      return `${formatRegionalNumber(w / 1000, locale, 2, 0)} kW`;
    }
    return `${formatRegionalNumber(w, locale, 1, 0)} W`;
  }

  // Regionalne formatowanie kWh
  _formatKwh(kwh) {
    if (kwh === null || kwh === undefined || isNaN(kwh)) return null;
    const locale = getEffectiveLocale(this._hass, this._config.language);
    return `${formatRegionalNumber(kwh, locale, 2, 2)} kWh`;
  }

  _formatLabelValue(watts, pct, dailyKwh, isBracketed) {
    const locale = getEffectiveLocale(this._hass, this._config.language);
    const wStr = this._formatWatts(watts);
    const showPct = this._config.show_percentage;
    const showKwh = this._config.show_daily_kwh_devices !== false && dailyKwh !== null && dailyKwh !== undefined;
    const pctStr = `${formatRegionalNumber(pct, locale, 1, 0)}%`;
    const kwhStr = showKwh ? this._formatKwh(dailyKwh) : "";

    const parts = [wStr];
    if (showKwh) parts.push(kwhStr);
    if (showPct) parts.push(pctStr);

    const joined = parts.join(" • ");
    return isBracketed ? `(${joined})` : joined;
  }

  _buildDeviceList() {
    if (!this._hass) return { items: [], rawNodes: [], nodeById: new Map(), otherWatts: 0, totalWatts: 0, totalDailyKwh: null, baseTotalForPct: 1 };

    const customDevices = this._config.devices || [];
    const customMap = new Map();
    const customOrderMap = new Map();

    customDevices.forEach((d, idx) => {
      if (d.stat_id) {
        customMap.set(d.stat_id, d);
        customOrderMap.set(d.stat_id, idx);
      }
      if (d.entity) {
        customMap.set(d.entity, d);
        customOrderMap.set(d.entity, idx);
      }
    });

    const rawNodes = [];
    const usedKeys = new Set();

    if (this._config.auto_from_energy_panel && this._energyMapping) {
      this._energyMapping.devices.forEach((ed, idx) => {
        const override =
          customMap.get(ed.stat_id) ||
          (ed.stat_rate ? customMap.get(ed.stat_rate) : null) ||
          (ed.power_entity ? customMap.get(ed.power_entity) : null) ||
          {};

        const candidateEntity =
          override.entity && this._hass.states[override.entity] && isPowerStateObj(this._hass.states[override.entity])
            ? override.entity
            : ed.stat_rate || ed.power_entity;

        if (ed.stat_id) usedKeys.add(ed.stat_id);
        if (ed.stat_rate) usedKeys.add(ed.stat_rate);
        if (candidateEntity) usedKeys.add(candidateEntity);
        if (!candidateEntity) return;

        const stateObj = this._hass.states[candidateEntity];
        const energyStateObj = this._hass.states[ed.stat_id];
        const fallbackName =
          ed.name ||
          (stateObj ? stateObj.attributes.friendly_name : energyStateObj ? energyStateObj.attributes.friendly_name : candidateEntity);
        const friendlyName = (override.name || fallbackName || candidateEntity)
          .replace(/ power| moc| energy| energia/gi, "")
          .trim();
        const icon =
          override.icon && override.icon !== "mdi:chart-line"
            ? override.icon
            : guessDeviceIcon(friendlyName, stateObj);
        const color = override.color || ed.default_color || DEFAULT_PALETTE[idx % DEFAULT_PALETTE.length];
        const parentId =
          override.parent_entity !== undefined && override.parent_entity !== ""
            ? override.parent_entity
            : ed.included_in_stat;
        const isChildFlag = override.is_child !== undefined ? Boolean(override.is_child) : Boolean(parentId);
        const orderIdx = customOrderMap.has(ed.stat_id)
          ? customOrderMap.get(ed.stat_id)
          : customOrderMap.has(candidateEntity)
          ? customOrderMap.get(candidateEntity)
          : 500 + idx;

        const dailyKwh = ed.stat_id && this._dailyKwhMap[ed.stat_id] !== undefined ? this._dailyKwhMap[ed.stat_id] : null;

        rawNodes.push({
          id: ed.stat_id || candidateEntity,
          stat_id: ed.stat_id || null,
          entity: candidateEntity,
          name: friendlyName,
          icon: icon,
          color: color,
          parent_id: parentId || null,
          is_child_manual: isChildFlag,
          userOrder: orderIdx,
          rawWatts: Math.max(0, this._getPowerWatts(candidateEntity)),
          dailyKwh
        });
      });
    }

    customDevices.forEach((cd, idx) => {
      const key = cd.stat_id || cd.entity;
      if (!cd.entity || !this._hass.states[cd.entity] || usedKeys.has(cd.entity) || (key && usedKeys.has(key))) return;
      const stateObj = this._hass.states[cd.entity];
      if (!isPowerStateObj(stateObj)) return;
      const friendlyName = cd.name || (stateObj ? stateObj.attributes.friendly_name : cd.entity);
      const isChildFlag = Boolean(cd.is_child || cd.parent_entity);
      const dailyKwh = cd.stat_id && this._dailyKwhMap[cd.stat_id] !== undefined ? this._dailyKwhMap[cd.stat_id] : null;

      rawNodes.push({
        id: cd.stat_id || cd.entity,
        stat_id: cd.stat_id || null,
        entity: cd.entity,
        name: friendlyName,
        icon: cd.icon || guessDeviceIcon(friendlyName, stateObj),
        color: cd.color || DEFAULT_PALETTE[(rawNodes.length + idx) % DEFAULT_PALETTE.length],
        parent_id: cd.parent_entity || null,
        is_child_manual: isChildFlag,
        userOrder: idx,
        rawWatts: Math.max(0, this._getPowerWatts(cd.entity)),
        dailyKwh
      });
    });

    const nodeById = new Map();
    rawNodes.forEach((n) => {
      if (n.id) nodeById.set(n.id, n);
      if (n.stat_id) nodeById.set(n.stat_id, n);
      if (n.entity) nodeById.set(n.entity, n);
    });

    const childrenWattsMap = new Map();
    const childrenKwhMap = new Map();
    rawNodes.forEach((n) => {
      if (n.parent_id && nodeById.has(n.parent_id)) {
        const parent = nodeById.get(n.parent_id);
        childrenWattsMap.set(parent.id, (childrenWattsMap.get(parent.id) || 0) + n.rawWatts);
        if (n.dailyKwh !== null) {
          childrenKwhMap.set(parent.id, (childrenKwhMap.get(parent.id) || 0) + n.dailyKwh);
        }
      }
    });

    let trackedRootWatts = 0;
    let trackedRootKwh = 0;
    let hasAnyKwh = false;

    rawNodes.forEach((n) => {
      const isSubDevice = Boolean(n.is_child_manual || (n.parent_id && nodeById.has(n.parent_id)));
      if (!isSubDevice) {
        trackedRootWatts += n.rawWatts;
        if (n.dailyKwh !== null) {
          trackedRootKwh += n.dailyKwh;
          hasAnyKwh = true;
        }
      }
    });

    let totalWatts = trackedRootWatts;
    let otherWatts = 0;
    const totalEntity = this._getEffectiveTotalEntity();

    if (totalEntity) {
      const measuredTotal = this._getPowerWatts(totalEntity);
      if (measuredTotal > 0) {
        totalWatts = measuredTotal;
        otherWatts = Math.max(0, measuredTotal - trackedRootWatts);
      }
    }

    let totalDailyKwh = hasAnyKwh ? trackedRootKwh : null;
    if (this._energyMapping && Array.isArray(this._energyMapping.gridEnergyStats) && this._energyMapping.gridEnergyStats.length > 0) {
      let gridSum = 0;
      let foundGrid = false;
      this._energyMapping.gridEnergyStats.forEach((gs) => {
        if (this._dailyKwhMap[gs] !== undefined) {
          gridSum += this._dailyKwhMap[gs];
          foundGrid = true;
        }
      });
      if (foundGrid && gridSum > trackedRootKwh) {
        totalDailyKwh = gridSum;
      }
    }

    const otherDailyKwh = totalDailyKwh !== null && totalDailyKwh > trackedRootKwh ? Math.max(0, totalDailyKwh - trackedRootKwh) : null;
    const baseTotalForPct = Math.max(totalWatts, trackedRootWatts, 1);
    const mode = this._config.hierarchy_mode || "brackets";
    const minThreshold = Number(this._config.min_power_threshold) || 0;
    let displayItems = [];

    rawNodes.forEach((n) => {
      const isChild = Boolean(n.is_child_manual || (n.parent_id && nodeById.has(n.parent_id)));
      if (isChild && mode === "hide") return;

      let displayWatts = n.rawWatts;
      let displayKwh = n.dailyKwh;
      const childrenSum = childrenWattsMap.get(n.id) || 0;
      const childrenKwh = childrenKwhMap.get(n.id) || 0;

      if (!isChild && childrenSum > 0 && mode === "subtract") {
        displayWatts = Math.max(0, n.rawWatts - childrenSum);
        if (displayKwh !== null) displayKwh = Math.max(0, displayKwh - childrenKwh);
      }

      if (displayWatts < minThreshold || (this._config.hide_zero && displayWatts <= 0)) return;

      const pct = (displayWatts / baseTotalForPct) * 100;
      const isBracketed = isChild && mode === "brackets";

      displayItems.push({
        ...n,
        isChild,
        isBracketed,
        displayWatts,
        displayKwh,
        pct,
        formattedValue: this._formatLabelValue(displayWatts, pct, displayKwh, isBracketed)
      });
    });

    const sortMode = this._config.sort_mode || "power";
    const rev = this._config.sort_reverse ? -1 : 1;

    if (sortMode === "alpha") {
      displayItems.sort((a, b) => a.name.localeCompare(b.name, "pl") * rev);
    } else if (sortMode === "custom") {
      displayItems.sort((a, b) => (a.userOrder - b.userOrder) * rev);
    } else {
      displayItems.sort((a, b) => (b.displayWatts - a.displayWatts) * rev);
    }

    const maxDev = Number(this._config.max_devices) || 0;
    if (maxDev > 0 && displayItems.length > maxDev) {
      displayItems = displayItems.slice(0, maxDev);
    }

    if (this._config.show_other && totalEntity) {
      if (otherWatts >= minThreshold && (!this._config.hide_zero || otherWatts > 0)) {
        const otherPct = (otherWatts / baseTotalForPct) * 100;
        displayItems.push({
          id: "__other__",
          entity: totalEntity,
          name: localize(this._hass, this._config.language, "other"),
          icon: "mdi:dots-horizontal-circle-outline",
          color: this._config.other_color || "#7f8c8d",
          isChild: false,
          isBracketed: false,
          isOther: true,
          displayWatts: otherWatts,
          displayKwh: otherDailyKwh,
          pct: otherPct,
          formattedValue: this._formatLabelValue(otherWatts, otherPct, otherDailyKwh, false)
        });
      }
    }

    return { items: displayItems, rawNodes, nodeById, otherWatts, totalWatts, totalDailyKwh, baseTotalForPct, totalEntity };
  }

  _openMoreInfo(entityId) {
    if (!entityId) return;
    this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true }));
  }

  _renderHeaderHistorySvg() {
    if (!this._config.header_history_enable) return "";
    const series = this._historySeries && this._historySeries.length > 1 ? this._historySeries : [];
    if (series.length === 0) return "";

    const W = 600;
    const H = Math.max(60, Number(this._config.header_height) || 110);
    const padTop = 10;
    const padBot = 6;
    const padX = 8;
    const plotW = W - padX * 2;
    const plotH = H - padTop - padBot;

    const maxValData = Math.max(...series, 10);
    const maxScale =
      this._config.header_scale_mode === "fixed" && Number(this._config.header_max_scale_w) > 0
        ? Number(this._config.header_max_scale_w)
        : maxValData * 1.12;

    const cMax = this._config.header_color_max || "#00e5ff";
    const cMin = this._config.header_color_min || "#004d7a";
    const cLine = this._config.header_line_color || "#80d8ff";
    const opMax = Math.min(100, Math.max(5, Number(this._config.header_opacity_max ?? 88))) / 100;
    const opMin = Math.min(100, Math.max(0, Number(this._config.header_opacity_min ?? 18))) / 100;
    const chartGlobalOp = (Math.min(100, Math.max(5, Number(this._config.header_chart_opacity ?? 90))) / 100).toFixed(2);
    const hType = this._config.header_history_type || "combo";
    const hasGlow = this._config.header_effect_glow !== false;
    const has3d = this._config.header_effect_3d !== false;

    const n = series.length;
    const stepX = plotW / Math.max(1, n - 1);
    const colWidth = plotW / n;

    const defs = `
      <linearGradient id="hh_area_grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="${cMax}" stop-opacity="${opMax}" />
        <stop offset="65%" stop-color="${interpolateHexColor(cMin, cMax, 0.45)}" stop-opacity="${((opMax + opMin) / 2).toFixed(2)}" />
        <stop offset="100%" stop-color="${cMin}" stop-opacity="${opMin}" />
      </linearGradient>
      <filter id="hh_glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2.4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="hh_3d" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="1" dy="2" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.55" />
      </filter>
    `;

    const filterStr = `${hasGlow ? 'filter="url(#hh_glow)"' : ""}`;
    let bodySvg = "";

    if (hType === "led") {
      const segs = Math.max(4, Math.min(30, Number(this._config.header_led_segments) || 12));
      const gapX = Math.max(1.5, colWidth * 0.22);
      const barW = Math.max(2, colWidth - gapX);
      const segStepY = plotH / segs;
      const segH = Math.max(1.5, segStepY * 0.68);

      const rects = [];
      for (let i = 0; i < n; i++) {
        const val = series[i];
        const ratio = Math.max(0, Math.min(1, val / maxScale));
        const activeSegs = Math.round(ratio * segs);
        const x = padX + i * colWidth + gapX / 2;

        for (let s = 0; s < segs; s++) {
          const segRatio = (s + 1) / segs;
          const y = padTop + plotH - (s + 1) * segStepY + (segStepY - segH) / 2;
          const isLit = s < activeSegs;
          const isPeak = s === activeSegs - 1 && activeSegs > 0;

          if (isLit) {
            const segColor = isPeak ? cLine : interpolateHexColor(cMin, cMax, segRatio);
            const segOpacity = (opMin + (opMax - opMin) * segRatio).toFixed(2);
            rects.push(
              `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${segH.toFixed(1)}" rx="1" fill="${segColor}" fill-opacity="${isPeak ? 1 : segOpacity}" ${isPeak && hasGlow ? 'filter="url(#hh_glow)"' : ""} />`
            );
          } else {
            rects.push(
              `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${segH.toFixed(1)}" rx="1" fill="${cMin}" fill-opacity="0.12" />`
            );
          }
        }
      }
      bodySvg = `<g ${has3d ? 'filter="url(#hh_3d)"' : ""}>${rects.join("")}</g>`;
    }

    if (hType === "bar" || hType === "combo") {
      const gapX = Math.max(1.5, colWidth * 0.25);
      const barW = Math.max(2, colWidth - gapX);
      const bars = [];

      for (let i = 0; i < n; i++) {
        const val = series[i];
        const ratio = Math.max(0.02, Math.min(1, val / maxScale));
        const bH = ratio * plotH;
        const x = padX + i * colWidth + gapX / 2;
        const y = padTop + plotH - bH;
        const barColor = interpolateHexColor(cMin, cMax, ratio);
        const barAlpha = (opMin + (opMax - opMin) * ratio).toFixed(2);

        bars.push(
          `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW.toFixed(1)}" height="${bH.toFixed(1)}" rx="1.5" fill="${barColor}" fill-opacity="${barAlpha}" ${has3d ? 'filter="url(#hh_3d)"' : ""} />`
        );
      }
      bodySvg += `<g>${bars.join("")}</g>`;
    }

    if (hType === "line" || hType === "combo") {
      const pts = series.map((val, i) => {
        const ratio = Math.max(0, Math.min(1, val / maxScale));
        const x = hType === "combo" ? padX + i * colWidth + colWidth / 2 : padX + i * stepX;
        const y = padTop + plotH - ratio * plotH;
        return { x, y, ratio, val };
      });

      const linePath = pts.map((p, idx) => `${idx === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
      const areaPath = `${linePath} L ${pts[pts.length - 1].x.toFixed(1)} ${padTop + plotH} L ${pts[0].x.toFixed(1)} ${padTop + plotH} Z`;

      const dotStep = n > 36 ? 3 : 2;
      const dots =
        hType === "combo"
          ? pts
              .filter((_, idx) => idx % dotStep === 0 || idx === pts.length - 1)
              .map(
                (p) =>
                  `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="2.5" fill="#ffffff" stroke="${cLine}" stroke-width="1.5" ${filterStr} />`
              )
              .join("")
          : "";

      bodySvg += `
        <path d="${areaPath}" fill="url(#hh_area_grad)" opacity="${hType === "combo" ? "0.45" : "0.85"}" />
        <path d="${linePath}" fill="none" stroke="${cLine}" stroke-width="${hType === "combo" ? "2" : "2.4"}" stroke-linecap="round" stroke-linejoin="round" ${filterStr} />
        ${dots}
      `;
    }

    return `
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" class="header-history-svg" style="opacity: ${chartGlobalOp};">
        <defs>${defs}</defs>
        ${bodySvg}
      </svg>
    `;
  }

  _computeDimensions(itemCount) {
    const isFixed = this._config.size_mode === "fixed";
    const cardMaxWidth = Number(this._config.card_max_width) || 0;
    const cardHeight = Number(this._config.card_height) || 480;
    const titleFontSize = Number(this._config.title_font_size) || 18;
    const headerHeight = Number(this._config.header_height) || 110;
    const is3d = this._config.bar_style === "3d";
    const depth3d = is3d ? Math.max(4, Math.min(24, Number(this._config.bar_3d_depth) || 10)) : 0;

    let barHeight = Number(this._config.bar_height) || 28;
    let barGap = Number(this._config.bar_gap) ?? 14;
    let labelFontSize = Number(this._config.label_font_size) || 15;
    let valueFontSize = Number(this._config.value_font_size) || 14;
    let iconSize = Number(this._config.icon_size) || 18;
    let pieSize = Number(this._config.pie_size) || 210;
    let sankeyHeight = Number(this._config.sankey_height) || 360;

    if (isFixed && cardHeight > 150) {
      const headerOverhead = headerHeight + 44 + depth3d;
      const availChartHeight = Math.max(100, cardHeight - headerOverhead);
      const count = Math.max(1, itemCount);
      const rowSlot = availChartHeight / count;
      const fillPct = Math.min(92, Math.max(20, Number(this._config.bar_height_pct) || 72)) / 100;

      barHeight = Math.max(12, Math.min(64, Math.round(rowSlot * fillPct)));
      barGap = Math.max(depth3d + 4, Math.round(rowSlot * (1 - fillPct)));

      const fontPct = Math.min(95, Math.max(25, Number(this._config.font_bar_pct) || 52)) / 100;
      const computedFont = Math.max(10, Math.min(28, Math.round(barHeight * fontPct)));
      labelFontSize = computedFont;
      valueFontSize = computedFont;
      iconSize = Math.max(12, Math.round(barHeight * 0.68));
      pieSize = Math.max(120, Math.min(availChartHeight - 10, 360));
      sankeyHeight = availChartHeight;
    } else if (is3d && barGap < depth3d + 4) {
      barGap = depth3d + 4;
    }

    const iconsOnly = Boolean(this._config.icons_only && this._config.show_icons);
    const labelWidth = iconsOnly ? iconSize + 18 : Number(this._config.label_width) || 135;

    return {
      isFixed,
      cardMaxWidth,
      cardHeight,
      headerHeight,
      barHeight,
      barGap,
      depth3d,
      barRadius: is3d ? 0 : (Number(this._config.bar_radius) ?? 4),
      labelWidth,
      labelFontSize,
      valueFontSize,
      titleFontSize,
      iconSize,
      pieSize,
      sankeyHeight,
      iconsOnly
    };
  }

  // Generowanie stylów dla słupków (w tym Izometryczny Szklany Prostopadłościan 3D)
  _getBarFillStyle(color, widthPct, depth3d) {
    const styleType = this._config.bar_style || "gradient";
    const opacity = (Number(this._config.bar_opacity ?? 92) / 100).toFixed(2);
    const hasShadow = this._config.bar_shadow !== false;

    const baseRgba = hexToRgba(color, opacity);
    const lightHex = adjustColor(color, 65);
    const veryLightHex = adjustColor(color, 105);
    const darkHex = adjustColor(color, -45);
    const lightRgba = hexToRgba(lightHex, opacity);
    const darkRgba = hexToRgba(darkHex, opacity);

    let bgCss = `background: ${baseRgba};`;
    let borderCss = "";
    let shadowCss = hasShadow ? `box-shadow: 0 3px 10px ${hexToRgba(color, 0.38)};` : "";
    let varsCss = "";

    if (styleType === "gradient") {
      bgCss = `background: linear-gradient(90deg, ${darkRgba} 0%, ${baseRgba} 55%, ${lightRgba} 100%);`;
    } else if (styleType === "3d") {
      // Szklany prostopadłościan 3D w poziomie (z refleksami, górną i prawą ścianką oraz dolną poświatą)
      const frontTop = hexToRgba(lightHex, opacity * 0.88);
      const frontMid = hexToRgba(color, opacity * 0.78);
      const frontBot = hexToRgba(darkHex, opacity * 0.92);

      const topFaceStart = hexToRgba(lightHex, opacity * 0.72);
      const topFaceEnd = hexToRgba(veryLightHex, opacity * 0.95);

      const rightFaceTop = hexToRgba(veryLightHex, opacity * 0.96);
      const rightFaceBot = hexToRgba(color, opacity * 0.85);
      const edgeHighlight = hexToRgba(veryLightHex, 0.85);

      bgCss = `
        background:
          linear-gradient(125deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.12) 32%, rgba(255,255,255,0.0) 33%),
          linear-gradient(180deg, ${frontTop} 0%, ${frontMid} 52%, ${frontBot} 100%);
      `;
      borderCss = `border: 1px solid ${edgeHighlight};`;
      shadowCss = hasShadow
        ? `box-shadow: -3px 7px 14px ${hexToRgba(color, 0.45)}, 0 4px 8px rgba(0,0,0,0.6), inset 0 1px 2px rgba(255,255,255,0.65);`
        : `box-shadow: inset 0 1px 2px rgba(255,255,255,0.65);`;

      varsCss = `
        --d3d: ${depth3d}px;
        --d3d-top-bg: linear-gradient(90deg, ${topFaceStart} 0%, ${topFaceEnd} 100%);
        --d3d-right-bg: linear-gradient(180deg, ${rightFaceTop} 0%, ${rightFaceBot} 100%);
        --d3d-edge: ${edgeHighlight};
      `;
    } else if (styleType === "glass") {
      bgCss = `background: linear-gradient(90deg, ${hexToRgba(color, opacity * 0.45)} 0%, ${hexToRgba(lightHex, opacity * 0.78)} 100%); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);`;
      borderCss = `border: 1px solid ${hexToRgba(lightHex, 0.85)}; border-left: none;`;
      shadowCss = hasShadow ? `box-shadow: 0 0 14px ${hexToRgba(color, 0.55)}, inset 0 1px 2px rgba(255,255,255,0.35);` : "";
    }

    return `width: ${widthPct.toFixed(2)}%; ${bgCss} ${borderCss} ${shadowCss} ${varsCss}`;
  }

  _buildSvgVisualFilters(items) {
    const hasShadow = this._config.bar_shadow !== false;
    const colorGradients = items
      .map((it, idx) => {
        const c = it.color || "#03a9f4";
        const light = adjustColor(c, 50);
        const dark = adjustColor(c, -40);
        return `
        <linearGradient id="svg_grad_${idx}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${light}" />
          <stop offset="55%" stop-color="${c}" />
          <stop offset="100%" stop-color="${dark}" />
        </linearGradient>`;
      })
      .join("");

    return `
      ${colorGradients}
      <filter id="svg_3d_bevel" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.8" result="blur"/>
        <feSpecularLighting in="blur" surfaceScale="3" specularConstant="0.85" specularExponent="18" lighting-color="#ffffff" result="specOut">
          <fePointLight x="-100" y="-100" z="120"/>
        </feSpecularLighting>
        <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
        <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint"/>
        ${hasShadow ? `<feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000000" flood-opacity="0.45"/>` : ""}
      </filter>
      <filter id="svg_neon_glow" x="-25%" y="-25%" width="150%" height="150%">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="svg_drop_shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.45"/>
      </filter>
    `;
  }

  _getSvgFilterAttr() {
    const styleType = this._config.bar_style || "gradient";
    if (styleType === "3d") return `filter="url(#svg_3d_bevel)"`;
    if (styleType === "glass") return `filter="url(#svg_neon_glow)"`;
    if (this._config.bar_shadow !== false) return `filter="url(#svg_drop_shadow)"`;
    return "";
  }

  _initDomSkeleton() {
    this.shadowRoot.innerHTML = `
      <style id="dynamic_styles"></style>
      <ha-card id="main_card">
        <div id="header_wrap">
          <div id="header_bg_chart"></div>
          <div class="header-content">
            <div id="title_el" class="header"></div>
            <div id="subtitle_el" class="subtitle"></div>
          </div>
        </div>
        <div id="chart_root"></div>
      </ha-card>
    `;
    this._domInitialized = true;
  }

  _updateBarChartDOM(rootEl, items, dims) {
    let container = rootEl.querySelector(".bar-container");
    if (!container) {
      rootEl.innerHTML = `<div class="bar-container"></div>`;
      container = rootEl.querySelector(".bar-container");
    }

    if (items.length === 0) {
      container.style.height = "auto";
      container.innerHTML = `<div class="empty">${localize(this._hass, this._config.language, "no_data")}</div>`;
      return;
    }

    const emptyEl = container.querySelector(".empty");
    if (emptyEl) emptyEl.remove();

    const is3d = this._config.bar_style === "3d";
    const topPad3d = is3d ? dims.depth3d + 2 : 0;
    const maxWatts = Math.max(...items.map((i) => i.displayWatts), 1);
    const rowStep = dims.barHeight + dims.barGap;
    const totalContainerHeight = topPad3d + items.length * dims.barHeight + Math.max(0, items.length - 1) * dims.barGap + 6;
    container.style.height = `${totalContainerHeight}px`;

    const containerRectWidth = container.clientWidth || (this.clientWidth ? this.clientWidth - dims.labelWidth - 36 : 320);
    const trackWidthPx = Math.max(120, containerRectWidth - dims.depth3d);

    const existingRows = new Map();
    container.querySelectorAll(".bar-row").forEach((el) => {
      existingRows.set(el.getAttribute("data-id"), el);
    });

    const activeIds = new Set();

    items.forEach((item, index) => {
      activeIds.add(item.id);
      const maxPct = is3d ? 96 : 100;
      const widthPct = Math.max((item.displayWatts / maxWatts) * maxPct, 1.5);
      const barPx = (widthPct / 100) * trackWidthPx;
      const spaceOutsidePx = trackWidthPx - barPx - dims.depth3d;
      const estimatedTextWidthPx = item.formattedValue.length * (dims.valueFontSize * 0.62) + 18;

      // Domyślnie POZA słupkiem; wewnątrz tylko gdy na zewnątrz się nie mieści
      const fitsOutside = spaceOutsidePx >= estimatedTextWidthPx;
      const textInside = !fitsOutside && barPx >= estimatedTextWidthPx - 6;

      const textColor = (this._config.bar_style === "glass" || is3d) ? "#ffffff" : getContrastText(item.color);
      const barStyle = this._getBarFillStyle(item.color, widthPct, dims.depth3d);
      const topPos = topPad3d + index * rowStep;

      let row = existingRows.get(item.id);
      if (!row) {
        row = document.createElement("div");
        row.className = "bar-row";
        row.setAttribute("data-id", item.id);
        row.style.transform = `translateY(${topPos}px)`;
        row.innerHTML = `
          <div class="bar-label">
            <ha-icon class="row-icon"></ha-icon>
            <span class="label-text"></span>
          </div>
          <div class="bar-track">
            <div class="bar-fill">
              <span class="bar-value inside"></span>
            </div>
            <span class="bar-value outside"></span>
          </div>
        `;
        row.addEventListener("click", () => this._openMoreInfo(row.getAttribute("data-entity")));
        container.appendChild(row);
      }

      row.setAttribute("data-entity", item.entity);
      row.style.height = `${dims.barHeight}px`;
      row.style.transform = `translateY(${topPos}px)`;

      const labelEl = row.querySelector(".bar-label");
      labelEl.title = `${item.name}: ${item.formattedValue}`;

      const iconEl = row.querySelector(".row-icon");
      if (this._config.show_icons && item.icon) {
        iconEl.style.display = "inline-flex";
        iconEl.setAttribute("icon", item.icon);
        iconEl.style.color = item.color;
      } else {
        iconEl.style.display = "none";
      }

      const nameEl = row.querySelector(".label-text");
      if (dims.iconsOnly) {
        nameEl.style.display = "none";
      } else {
        nameEl.style.display = "inline";
        nameEl.textContent = item.name;
      }

      const fillEl = row.querySelector(".bar-fill");
      fillEl.className = `bar-fill ${is3d ? "prism-3d" : ""}`;
      fillEl.setAttribute("style", barStyle);

      const insideValEl = row.querySelector(".bar-value.inside");
      const outsideValEl = row.querySelector(".bar-value.outside");

      if (textInside) {
        insideValEl.textContent = item.formattedValue;
        insideValEl.style.color = textColor;
        insideValEl.style.display = "inline";
        outsideValEl.style.display = "none";
      } else {
        outsideValEl.textContent = item.formattedValue;
        outsideValEl.style.marginLeft = is3d ? `${dims.depth3d + 8}px` : "8px";
        outsideValEl.style.display = "inline";
        insideValEl.style.display = "none";
      }
    });

    existingRows.forEach((el, id) => {
      if (!activeIds.has(id)) el.remove();
    });
  }

  _renderPieOrDonutHTML(items, isDonut, totalWatts, totalDailyKwh, dims) {
    const sliceItems = items.filter((i) => !i.isBracketed);
    const sumWatts = sliceItems.reduce((acc, i) => acc + i.displayWatts, 0);
    if (sumWatts <= 0) return `<div class="empty">${localize(this._hass, this._config.language, "no_data")}</div>`;

    let cumulativePct = 0;
    const radius = 15.91549430918954;
    const opacity = (Number(this._config.bar_opacity ?? 92) / 100).toFixed(2);
    const styleType = this._config.bar_style || "gradient";
    const filterAttr = this._getSvgFilterAttr();
    const showIconsInside = Boolean(this._config.icons_inside_charts && this._config.show_icons);

    const slices = [];
    const sliceOverlays = [];

    sliceItems.forEach((item, idx) => {
      const pct = (item.displayWatts / sumWatts) * 100;
      const dashArray = `${pct} ${100 - pct}`;
      const dashOffset = 100 - cumulativePct + 25;
      const midPct = cumulativePct + pct / 2;
      cumulativePct += pct;

      const strokePaint = styleType === "flat" ? item.color : `url(#svg_grad_${idx})`;
      const strokeW = isDonut ? "8" : "31.83";

      slices.push(`<circle r="${radius}" cx="21" cy="21" fill="transparent"
        stroke="${strokePaint}" stroke-opacity="${opacity}" stroke-width="${strokeW}"
        stroke-dasharray="${dashArray}" stroke-dashoffset="${dashOffset}"
        class="pie-slice" data-entity="${item.entity}">
        <title>${item.name}: ${item.formattedValue}</title>
      </circle>`);

      if (showIconsInside && pct >= 5.5 && item.icon) {
        const angleRad = ((midPct / 100) * 360 - 90) * (Math.PI / 180);
        const iconRadius = isDonut ? 15.9 : 10.5;
        const ix = 21 + iconRadius * Math.cos(angleRad);
        const iy = 21 + iconRadius * Math.sin(angleRad);
        const leftPct = (ix / 42) * 100;
        const topPct = (iy / 42) * 100;

        sliceOverlays.push(`
          <div class="pie-slice-icon" style="left: ${leftPct.toFixed(1)}%; top: ${topPct.toFixed(1)}%;" title="${item.name}: ${item.formattedValue}" data-entity="${item.entity}">
            <ha-icon icon="${item.icon}"></ha-icon>
          </div>
        `);
      }
    });

    const kwhCenter =
      this._config.show_daily_kwh_total !== false && totalDailyKwh !== null
        ? `<text x="21" y="27.2" class="donut-total-kwh">${this._formatKwh(totalDailyKwh)}</text>`
        : "";

    return `
      <div class="pie-layout">
        <div class="pie-svg-wrap" style="width:${dims.pieSize}px; height:${dims.pieSize}px;">
          <svg viewBox="0 0 42 42" class="pie-svg">
            <defs>${this._buildSvgVisualFilters(sliceItems)}</defs>
            <g ${filterAttr}>${slices.join("")}</g>
            ${
              isDonut
                ? `<g class="donut-center">
                    <text x="21" y="18.2" class="donut-total-lbl">${localize(this._hass, this._config.language, "total")}</text>
                    <text x="21" y="22.8" class="donut-total-val">${this._formatWatts(totalWatts || sumWatts)}</text>
                    ${kwhCenter}
                  </g>`
                : ""
            }
          </svg>
          ${sliceOverlays.join("")}
        </div>
        <div class="pie-legend">
          ${items
            .map(
              (item) => `
            <div class="legend-row ${item.isBracketed ? "legend-sub" : ""}" data-entity="${item.entity}" title="${item.name}">
              <span class="legend-dot" style="background-color: ${item.color}; box-shadow: 0 0 6px ${hexToRgba(item.color, 0.6)};"></span>
              ${this._config.show_icons && item.icon ? `<ha-icon icon="${item.icon}" class="legend-icon" style="color: ${item.color};"></ha-icon>` : ""}
              ${dims.iconsOnly ? "" : `<span class="legend-name">${item.name}</span>`}
              <span class="legend-val">${item.formattedValue}</span>
            </div>`
            )
            .join("")}
        </div>
      </div>
    `;
  }

  _renderSankeyHTML(rawNodes, nodeById, otherWatts, totalWatts, totalDailyKwh, baseTotalForPct, isVertical, dims, totalEntity) {
    const minThreshold = Number(this._config.min_power_threshold) || 0;
    const maxDev = Number(this._config.max_devices) || 0;
    const childrenByParentId = new Map();
    let rootNodes = [];

    rawNodes.forEach((n) => {
      const parentObj = n.parent_id && nodeById.has(n.parent_id) ? nodeById.get(n.parent_id) : null;
      if (parentObj && parentObj.id !== n.id) {
        if (!childrenByParentId.has(parentObj.id)) childrenByParentId.set(parentObj.id, []);
        if (n.rawWatts >= minThreshold && n.rawWatts > 0) {
          childrenByParentId.get(parentObj.id).push(n);
        }
      } else if (!n.is_child_manual) {
        if (n.rawWatts >= minThreshold && n.rawWatts > 0) {
          rootNodes.push(n);
        }
      }
    });

    const sortMode = this._config.sort_mode || "power";
    const rev = this._config.sort_reverse ? -1 : 1;
    const sortFn = (a, b) => {
      if (sortMode === "alpha") return a.name.localeCompare(b.name, "pl") * rev;
      if (sortMode === "custom") return (a.userOrder - b.userOrder) * rev;
      return (b.rawWatts - a.rawWatts) * rev;
    };

    rootNodes.sort(sortFn);
    if (maxDev > 0 && rootNodes.length > maxDev) rootNodes = rootNodes.slice(0, maxDev);
    childrenByParentId.forEach((arr) => arr.sort(sortFn));

    const level1Nodes = [...rootNodes];
    if (this._config.show_other && totalEntity && otherWatts >= minThreshold && otherWatts > 0) {
      level1Nodes.push({
        id: "__other__",
        entity: totalEntity,
        name: localize(this._hass, this._config.language, "other"),
        icon: "mdi:dots-horizontal-circle-outline",
        color: this._config.other_color || "#7f8c8d",
        rawWatts: otherWatts,
        dailyKwh: null,
        isOther: true
      });
    }

    if (level1Nodes.length === 0) {
      return `<div class="empty">${localize(this._hass, this._config.language, "no_data")}</div>`;
    }

    let hasLevel2 = false;
    const level2Nodes = [];
    level1Nodes.forEach((p) => {
      const kids = childrenByParentId.get(p.id) || [];
      if (kids.length > 0) {
        hasLevel2 = true;
        let kidsSum = 0;
        kids.forEach((k) => {
          kidsSum += k.rawWatts;
          level2Nodes.push({ ...k, parentRef: p });
        });
        const remainder = p.rawWatts - kidsSum;
        if (remainder >= Math.max(minThreshold, 2)) {
          level2Nodes.push({
            id: `${p.id}_rem`,
            entity: p.entity,
            name: `${p.name} (${localize(this._hass, this._config.language, "untracked_parent")})`,
            icon: "mdi:dots-horizontal",
            color: adjustColor(p.color, -25),
            rawWatts: remainder,
            dailyKwh: null,
            parentRef: p,
            isRemainder: true
          });
        }
      }
    });

    const sumLevel1Watts = level1Nodes.reduce(
      (s, n) => s + Math.max(n.rawWatts, (childrenByParentId.get(n.id) || []).reduce((ks, k) => ks + k.rawWatts, 0)),
      0
    );
    const rootTotalWatts = Math.max(totalWatts, sumLevel1Watts, 1);

    const rootNode = {
      id: "__root__",
      entity: totalEntity || "",
      name: localize(this._hass, this._config.language, "total"),
      icon: "mdi:transmission-tower",
      color: "#03a9f4",
      rawWatts: rootTotalWatts,
      dailyKwh: this._config.show_daily_kwh_total !== false ? totalDailyKwh : null,
      isRoot: true
    };

    const W = isVertical ? 650 : 780;
    const H = dims.sankeyHeight;
    const padStart = isVertical ? 40 : 18;
    const padEnd = isVertical ? 50 : dims.iconsOnly ? 120 : 210;
    const padSide = isVertical ? 26 : 18;
    const nodeThick = Math.min(Math.max(dims.barHeight * 0.65, 14), 28);
    const nodeGap = Math.max(dims.barGap, 8);

    const numCols = hasLevel2 ? 3 : 2;
    const spanMain = (isVertical ? H : W) - padStart - padEnd;
    const spanCross = (isVertical ? W : H) - padSide * 2;
    const colPos = (colIdx) => padStart + (colIdx / (numCols - 1)) * spanMain;

    const layoutColumn = (nodes, colIdx, scaleRefWatts) => {
      const totalGap = Math.max(0, (nodes.length - 1) * nodeGap);
      const availBreadth = Math.max(60, spanCross - totalGap);
      const colSumWatts = nodes.reduce((s, n) => s + n.effWatts, 0) || 1;
      const scaleFactor = Math.min(1, colSumWatts / Math.max(scaleRefWatts, colSumWatts));
      const usableBreadth = availBreadth * scaleFactor;

      let cursor = padSide + (availBreadth - usableBreadth) / 2;
      nodes.forEach((n) => {
        const b = Math.max(6, (n.effWatts / colSumWatts) * usableBreadth);
        n.col = colIdx;
        n.mainPos = colPos(colIdx);
        n.crossStart = cursor;
        n.crossSize = b;
        n.outCursor = cursor;
        n.inCursor = cursor;
        cursor += b + nodeGap;
      });
    };

    rootNode.effWatts = rootTotalWatts;
    level1Nodes.forEach((n) => {
      const kidsSum = (childrenByParentId.get(n.id) || []).reduce((s, k) => s + k.rawWatts, 0);
      n.effWatts = Math.max(n.rawWatts, kidsSum);
    });
    level2Nodes.forEach((n) => {
      n.effWatts = n.rawWatts;
    });

    layoutColumn([rootNode], 0, rootTotalWatts);
    layoutColumn(level1Nodes, 1, rootTotalWatts);
    if (hasLevel2) layoutColumn(level2Nodes, 2, rootTotalWatts);

    const links = [];
    level1Nodes.forEach((target) => {
      const w = target.effWatts;
      const sThick = (w / rootNode.effWatts) * rootNode.crossSize;
      links.push({
        source: rootNode,
        target: target,
        watts: w,
        sStart: rootNode.outCursor,
        sSize: sThick,
        tStart: target.inCursor,
        tSize: target.crossSize,
        colorStart: rootNode.color,
        colorEnd: target.color
      });
      rootNode.outCursor += sThick;
    });

    if (hasLevel2) {
      level2Nodes.forEach((child) => {
        const parent = child.parentRef;
        const w = child.effWatts;
        const sThick = (w / parent.effWatts) * parent.crossSize;
        links.push({
          source: parent,
          target: child,
          watts: w,
          sStart: parent.outCursor,
          sSize: sThick,
          tStart: child.inCursor,
          tSize: child.crossSize,
          colorStart: parent.color,
          colorEnd: child.color
        });
        parent.outCursor += sThick;
      });
    }

    const opacity = (Number(this._config.bar_opacity ?? 92) / 100).toFixed(2);
    const linkOpacity = Math.max(0.3, opacity * 0.58).toFixed(2);
    const radius = Math.min(dims.barRadius, 8);
    const allSankeyNodes = [rootNode, ...level1Nodes, ...level2Nodes];
    const filterAttr = this._getSvgFilterAttr();
    const showIconsInside = Boolean(this._config.icons_inside_charts && this._config.show_icons);

    const defsHtml = `
      ${this._buildSvgVisualFilters(allSankeyNodes)}
      ${links
        .map((l, i) => {
          const gradCoords = isVertical ? `x1="0%" y1="0%" x2="0%" y2="100%"` : `x1="0%" y1="0%" x2="100%" y2="0%"`;
          return `
          <linearGradient id="sankey_link_grad_${i}" ${gradCoords}>
            <stop offset="0%" stop-color="${l.colorStart}" stop-opacity="${linkOpacity}" />
            <stop offset="100%" stop-color="${l.colorEnd}" stop-opacity="${linkOpacity}" />
          </linearGradient>`;
        })
        .join("")}
    `;

    const linksHtml = links
      .map((l, i) => {
        let d = "";
        if (!isVertical) {
          const x0 = l.source.mainPos + nodeThick;
          const x1 = l.target.mainPos;
          const cx = (x0 + x1) / 2;
          d = `M ${x0} ${l.sStart} C ${cx} ${l.sStart}, ${cx} ${l.tStart}, ${x1} ${l.tStart} L ${x1} ${l.tStart + l.tSize} C ${cx} ${l.tStart + l.tSize}, ${cx} ${l.sStart + l.sSize}, ${x0} ${l.sStart + l.sSize} Z`;
        } else {
          const y0 = l.source.mainPos + nodeThick;
          const y1 = l.target.mainPos;
          const cy = (y0 + y1) / 2;
          d = `M ${l.sStart} ${y0} C ${l.sStart} ${cy}, ${l.tStart} ${cy}, ${l.tStart} ${y1} L ${l.tStart + l.tSize} ${y1} C ${l.tStart + l.tSize} ${cy}, ${l.sStart + l.sSize} ${cy}, ${l.sStart + l.sSize} ${y0} Z`;
        }
        const pct = (l.watts / baseTotalForPct) * 100;
        const valStr = this._formatLabelValue(l.watts, pct, l.target.dailyKwh, false);
        return `<path d="${d}" fill="url(#sankey_link_grad_${i})" class="sankey-link" data-entity="${l.target.entity}">
          <title>${l.source.name} → ${l.target.name}: ${valStr}</title>
        </path>`;
      })
      .join("");

    const nodeOverlays = [];
    const nodesHtml = allSankeyNodes
      .map((n, idx) => {
        const pct = (n.rawWatts / baseTotalForPct) * 100;
        const valStr = n.isRoot
          ? `${this._formatWatts(n.rawWatts)}${n.dailyKwh !== null ? ` • ${this._formatKwh(n.dailyKwh)}` : ""}`
          : this._formatLabelValue(n.rawWatts, pct, n.dailyKwh, false);

        const rx = isVertical ? n.crossStart : n.mainPos;
        const ry = isVertical ? n.mainPos : n.crossStart;
        const rw = isVertical ? n.crossSize : nodeThick;
        const rh = isVertical ? nodeThick : n.crossSize;

        let tx = 0;
        let ty = 0;
        let anchor = "start";
        if (!isVertical) {
          if (n.col === 1 && hasLevel2 && (childrenByParentId.get(n.id) || []).length > 0) {
            tx = rx - 8;
            ty = ry + rh / 2;
            anchor = "end";
          } else {
            tx = rx + rw + 8;
            ty = ry + rh / 2;
            anchor = "start";
          }
        } else {
          tx = rx + rw / 2;
          ty = n.col === 0 ? ry - 12 : ry + rh + 16;
          anchor = "middle";
        }

        if (showIconsInside && n.icon) {
          const cxPct = ((rx + rw / 2) / W) * 100;
          const cyPct = ((ry + rh / 2) / H) * 100;
          nodeOverlays.push(`
            <div class="sankey-node-icon" style="left: ${cxPct.toFixed(2)}%; top: ${cyPct.toFixed(2)}%; border-color: ${n.color};" title="${n.name}: ${valStr}" data-entity="${n.entity}">
              <ha-icon icon="${n.icon}" style="color: ${n.color};"></ha-icon>
            </div>
          `);
        }

        const fillPaint = this._config.bar_style === "flat" ? n.color : `url(#svg_grad_${idx})`;

        return `
        <g class="sankey-node" data-entity="${n.entity}">
          <rect x="${rx}" y="${ry}" width="${rw}" height="${rh}" rx="${radius}" fill="${fillPaint}" fill-opacity="${opacity}" stroke="rgba(255,255,255,0.3)" stroke-width="1" ${filterAttr}>
            <title>${n.name}: ${valStr}</title>
          </rect>
          <text x="${tx}" y="${ty}" text-anchor="${anchor}" dominant-baseline="middle" class="sankey-label">
            ${dims.iconsOnly ? "" : `<tspan class="sankey-name">${n.name} </tspan>`}
            <tspan class="sankey-val">${valStr}</tspan>
          </text>
        </g>`;
      })
      .join("");

    return `
      <div class="sankey-wrap">
        <svg viewBox="0 0 ${W} ${H}" class="sankey-svg">
          <defs>${defsHtml}</defs>
          <g class="links-layer">${linksHtml}</g>
          <g class="nodes-layer">${nodesHtml}</g>
        </svg>
        ${nodeOverlays.join("")}
      </div>
    `;
  }

  _updateCard() {
    if (!this.shadowRoot || !this._hass) return;
    if (!this._domInitialized) this._initDomSkeleton();

    const { items, rawNodes, nodeById, otherWatts, totalWatts, totalDailyKwh, baseTotalForPct, totalEntity } = this._buildDeviceList();
    const chartType = this._config.chart_type || "bar";
    const dims = this._computeDimensions(items.length);

    const cardOpacity = (Math.min(100, Math.max(10, Number(this._config.card_opacity ?? 100))) / 100).toFixed(2);
    const bgOpacity = (Math.min(100, Math.max(0, Number(this._config.card_bg_opacity ?? 100))) / 100).toFixed(2);
    const bgColorHex = (this._config.card_bg_color || "#111111").trim();
    const bgRgba = hexToRgba(bgColorHex, bgOpacity);

    const bgImage = (this._config.background_image || "").trim();
    const bgOverlay = (Number(this._config.bg_overlay_opacity ?? 60) / 100).toFixed(2);
    const isCardGlass = Boolean(this._config.card_glass);

    let cardBgCss = `background: ${bgRgba};`;
    if (bgImage) {
      cardBgCss = `background-image: linear-gradient(rgba(0, 0, 0, ${bgOverlay}), rgba(0, 0, 0, ${bgOverlay})), url('${bgImage}'); background-size: cover; background-position: center;`;
    }
    if (isCardGlass) {
      cardBgCss += ` backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border: 1px solid rgba(255, 255, 255, 0.14);`;
    }

    const hdrBgHex = (this._config.header_bg_color || "#07192b").trim();
    const hdrBgOp = (Math.min(100, Math.max(0, Number(this._config.header_bg_opacity ?? 75))) / 100).toFixed(2);
    const hdrRgba = hexToRgba(hdrBgHex, hdrBgOp);
    const hdrGlass = this._config.header_effect_glass !== false;

    const totalTextColor = this._config.header_total_color || "#ffffff";
    // Przezroczystość nakładana na CAŁY kontener tekstu (wraz z cieniem i obrysem), dzięki czemu wykres pod spodem prześwituje!
    const totalTextLayerOp = (Math.min(100, Math.max(5, Number(this._config.header_total_opacity ?? 90))) / 100).toFixed(2);
    const totalTextFont = Number(this._config.header_total_font_size) || 18;
    const headerTopOffset = Number(this._config.header_top_offset ?? 4);

    const hasHdrShadow = this._config.header_text_shadow !== false;
    const hasHdrOutline = this._config.header_text_outline !== false;
    const outlineCol = this._config.header_text_outline_color || "#000000";
    const outlineW = Number(this._config.header_text_outline_width ?? 2);

    const hdrShadowCss = hasHdrShadow
      ? `text-shadow: 0 2px 5px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.75);`
      : `text-shadow: none;`;
    const hdrOutlineCss = hasHdrOutline && outlineW > 0
      ? `-webkit-text-stroke: ${outlineW}px ${outlineCol}; paint-order: stroke fill;`
      : "";

    const sizeCss = `
      ${dims.cardMaxWidth > 0 ? `max-width: ${dims.cardMaxWidth}px; margin: 0 auto;` : ""}
      ${dims.isFixed && dims.cardHeight > 0 ? `height: ${dims.cardHeight}px; box-sizing: border-box;` : ""}
    `;

    const title = this._config.title ? this._config.title.trim() : "";
    const showSubtitle = this._config.show_total_subtitle !== false;
    const showHeaderBox = Boolean(this._config.header_history_enable || title || showSubtitle);

    const styleEl = this.shadowRoot.getElementById("dynamic_styles");
    styleEl.textContent = `
      :host { display: block; opacity: ${cardOpacity}; }
      ha-card {
        padding: 14px 16px 18px 16px;
        ${cardBgCss}
        ${sizeCss}
        color: var(--primary-text-color, #f1f1f1);
        font-family: var(--paper-font-body1_-_font-family, Roboto, sans-serif);
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      /* Nagłówek wyrównany do góry z konfigurowalnym przesunięciem w dół (px) */
      #header_wrap {
        display: ${showHeaderBox ? "flex" : "none"};
        position: relative;
        min-height: ${this._config.header_history_enable ? `${dims.headerHeight}px` : "auto"};
        margin-bottom: 14px;
        border-radius: ${Math.max(6, dims.barRadius + 4)}px;
        background: ${this._config.header_history_enable ? hdrRgba : "transparent"};
        ${this._config.header_history_enable && hdrGlass ? "backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.12); box-shadow: inset 0 1px 1px rgba(255,255,255,0.15), 0 4px 14px rgba(0,0,0,0.35);" : ""}
        overflow: hidden;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 0 14px 6px 14px;
        box-sizing: border-box;
        flex-shrink: 0;
        cursor: pointer;
      }
      #header_bg_chart {
        position: absolute;
        inset: 0;
        z-index: 0;
        pointer-events: none;
      }
      .header-history-svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .header-content {
        position: relative;
        z-index: 2;
        text-align: center;
        pointer-events: none;
        padding-top: ${headerTopOffset}px;
        opacity: ${totalTextLayerOp};
      }
      .header {
        font-size: ${dims.titleFontSize}px;
        font-weight: 700;
        color: var(--primary-text-color, #ffffff);
        letter-spacing: 0.3px;
        ${hdrShadowCss}
        ${hdrOutlineCss}
        margin-bottom: 2px;
      }
      .subtitle {
        font-size: ${totalTextFont}px;
        font-weight: 700;
        color: ${totalTextColor};
        ${hdrShadowCss}
        ${hdrOutlineCss}
        letter-spacing: 0.3px;
        line-height: 1.2;
      }
      .subtitle .total-val-strong {
        font-weight: 800;
      }
      .subtitle .total-kwh-tag {
        font-weight: 700;
        margin-left: 6px;
      }

      #chart_root { flex: 1; position: relative; }
      .empty { text-align: center; padding: 24px; color: var(--secondary-text-color); }

      .bar-container {
        position: relative;
        border-left: 1px solid rgba(150, 150, 150, 0.3);
        border-bottom: 1px solid rgba(150, 150, 150, 0.3);
        margin-left: ${dims.labelWidth}px;
        transition: height 0.35s ease;
      }
      .bar-row {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), height 0.3s ease;
        will-change: transform;
      }
      .bar-row:hover .bar-fill { filter: brightness(1.15); }
      .bar-label {
        position: absolute;
        right: 100%;
        width: ${dims.labelWidth - 5}px;
        padding-right: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 6px;
        font-size: ${dims.labelFontSize}px;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
      }
      .bar-label::after {
        content: "";
        position: absolute;
        right: 0;
        width: 5px;
        height: 1px;
        background: rgba(150, 150, 150, 0.45);
      }
      .row-icon { --mdc-icon-size: ${dims.iconSize}px; flex-shrink: 0; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.35)); }
      .label-text { overflow: hidden; text-overflow: ellipsis; }
      .bar-track {
        flex: 1;
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        background: ${this._config.bar_style === "3d" ? "transparent" : "rgba(128, 128, 128, 0.06)"};
        border-radius: 0 ${dims.barRadius}px ${dims.barRadius}px 0;
        overflow: visible;
      }
      .bar-fill {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-radius: 0 ${dims.barRadius}px ${dims.barRadius}px 0;
        transition: width 0.55s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease;
        box-sizing: border-box;
        padding-right: 8px;
        min-width: 4px;
        flex-shrink: 0;
      }

      /* Izometryczny Szklany Prostopadłościan 3D (Górna i Prawa ścianka) */
      .bar-fill.prism-3d {
        border-radius: 0;
      }
      .bar-fill.prism-3d::before {
        content: "";
        position: absolute;
        top: calc(-1 * var(--d3d, 10px));
        left: 0;
        width: 100%;
        height: var(--d3d, 10px);
        background: var(--d3d-top-bg);
        transform-origin: bottom left;
        transform: skewX(-45deg);
        border-top: 1px solid var(--d3d-edge);
        border-left: 1px solid rgba(255, 255, 255, 0.4);
        box-sizing: border-box;
        pointer-events: none;
      }
      .bar-fill.prism-3d::after {
        content: "";
        position: absolute;
        top: 0;
        right: calc(-1 * var(--d3d, 10px));
        width: var(--d3d, 10px);
        height: 100%;
        background: var(--d3d-right-bg);
        transform-origin: top left;
        transform: skewY(-45deg);
        border-right: 1px solid var(--d3d-edge);
        border-top: 1px solid var(--d3d-edge);
        box-sizing: border-box;
        pointer-events: none;
      }

      .bar-value { font-size: ${dims.valueFontSize}px; font-weight: 600; white-space: nowrap; line-height: 1; z-index: 2; }
      .bar-value.inside { text-shadow: 0 1px 3px rgba(0,0,0,0.65); }
      .bar-value.outside { margin-left: 8px; color: var(--primary-text-color); flex-shrink: 0; }

      .pie-layout { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 22px; }
      .pie-svg-wrap { position: relative; flex-shrink: 0; }
      .pie-svg { width: 100%; height: 100%; overflow: visible; }
      .pie-slice { cursor: pointer; transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease, opacity 0.2s; }
      .pie-slice:hover { opacity: 0.85; filter: brightness(1.15); }
      .pie-slice-icon {
        position: absolute;
        transform: translate(-50%, -50%);
        width: ${Math.max(20, dims.iconSize + 6)}px;
        height: ${Math.max(20, dims.iconSize + 6)}px;
        border-radius: 50%;
        background: rgba(15, 15, 20, 0.65);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: auto;
        cursor: pointer;
        color: #ffffff;
        box-shadow: 0 2px 6px rgba(0,0,0,0.45);
        transition: left 0.45s ease, top 0.45s ease;
      }
      .pie-slice-icon ha-icon { --mdc-icon-size: ${Math.max(13, dims.iconSize - 2)}px; }
      .donut-center { text-anchor: middle; fill: var(--primary-text-color); }
      .donut-total-lbl { font-size: 2.7px; fill: var(--secondary-text-color); }
      .donut-total-val { font-size: 3.9px; font-weight: bold; }
      .donut-total-kwh { font-size: 2.8px; fill: var(--primary-color, #4fc3f7); }
      .pie-legend { flex: 1; min-width: 180px; display: flex; flex-direction: column; gap: ${Math.max(4, Math.round(dims.barGap * 0.75))}px; }
      .legend-row { display: flex; align-items: center; gap: 8px; font-size: ${dims.labelFontSize}px; cursor: pointer; padding: 4px 6px; border-radius: 6px; }
      .legend-row.legend-sub { opacity: 0.85; padding-left: 18px; }
      .legend-row:hover { background: rgba(128, 128, 128, 0.15); }
      .legend-dot { width: 12px; height: 12px; border-radius: 3px; flex-shrink: 0; }
      .legend-icon { --mdc-icon-size: ${dims.iconSize}px; }
      .legend-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .legend-val { font-size: ${dims.valueFontSize}px; font-weight: 600; white-space: nowrap; }

      .sankey-wrap { position: relative; width: 100%; overflow: hidden; }
      .sankey-svg { width: 100%; height: auto; min-height: 220px; display: block; overflow: visible; }
      .sankey-link { cursor: pointer; transition: d 0.45s ease, opacity 0.2s, filter 0.2s; }
      .sankey-link:hover { filter: brightness(1.3); opacity: 0.95; }
      .sankey-node { cursor: pointer; }
      .sankey-node:hover rect { filter: brightness(1.2); }
      .sankey-node-icon {
        position: absolute;
        transform: translate(-50%, -50%);
        width: ${Math.max(22, dims.iconSize + 6)}px;
        height: ${Math.max(22, dims.iconSize + 6)}px;
        border-radius: 50%;
        background: rgba(18, 18, 24, 0.85);
        border: 1.5px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 6px rgba(0,0,0,0.5);
      }
      .sankey-node-icon ha-icon { --mdc-icon-size: ${Math.max(13, dims.iconSize - 2)}px; }
      .sankey-label { font-size: ${Math.max(11, dims.labelFontSize - 2)}px; fill: var(--primary-text-color, #ffffff); text-shadow: 0 1px 3px rgba(0,0,0,0.85); pointer-events: none; }
      .sankey-name { font-weight: 500; }
      .sankey-val { font-weight: 700; fill: var(--primary-color, #4fc3f7); }
    `;

    const headerWrap = this.shadowRoot.getElementById("header_wrap");
    headerWrap.onclick = () => {
      if (totalEntity) this._openMoreInfo(totalEntity);
    };

    const headerBgChart = this.shadowRoot.getElementById("header_bg_chart");
    headerBgChart.innerHTML = this._renderHeaderHistorySvg();

    const titleEl = this.shadowRoot.getElementById("title_el");
    titleEl.textContent = title;
    titleEl.style.display = title ? "block" : "none";

    const subtitleEl = this.shadowRoot.getElementById("subtitle_el");
    if (showSubtitle) {
      const prefix =
        this._config.header_total_prefix && this._config.header_total_prefix.trim() !== ""
          ? this._config.header_total_prefix.trim()
          : `${localize(this._hass, this._config.language, "total")}:`;
      const kwhPart =
        this._config.show_daily_kwh_total !== false && totalDailyKwh !== null
          ? `<span class="total-kwh-tag">• ${this._formatKwh(totalDailyKwh)}</span>`
          : "";
      subtitleEl.style.display = "block";
      subtitleEl.innerHTML = `${prefix} <span class="total-val-strong">${this._formatWatts(totalWatts)}</span>${kwhPart}`;
    } else {
      subtitleEl.style.display = "none";
    }

    const chartRoot = this.shadowRoot.getElementById("chart_root");
    if (this._currentChartMode !== chartType) {
      chartRoot.innerHTML = "";
      this._currentChartMode = chartType;
    }

    if (chartType === "bar") {
      this._updateBarChartDOM(chartRoot, items, dims);
    } else if (chartType === "pie" || chartType === "donut") {
      chartRoot.innerHTML = this._renderPieOrDonutHTML(items, chartType === "donut", totalWatts, totalDailyKwh, dims);
      chartRoot.querySelectorAll("[data-entity]").forEach((el) => {
        el.addEventListener("click", () => this._openMoreInfo(el.getAttribute("data-entity")));
      });
    } else if (chartType === "sankey_h" || chartType === "sankey_v") {
      chartRoot.innerHTML = this._renderSankeyHTML(
        rawNodes,
        nodeById,
        otherWatts,
        totalWatts,
        totalDailyKwh,
        baseTotalForPct,
        chartType === "sankey_v",
        dims,
        totalEntity
      );
      chartRoot.querySelectorAll("[data-entity]").forEach((el) => {
        el.addEventListener("click", () => this._openMoreInfo(el.getAttribute("data-entity")));
      });
    }
  }

  getCardSize() {
    return 6;
  }
}

// ==========================================
// EDYTOR GRAFICZNY (GUI v6.2)
// ==========================================
class RealtimePowerCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = {};
    this._hass = null;
  }

  setConfig(config) {
    this._config = { ...DEFAULT_CONFIG, ...config };
    if (config.show_daily_kwh !== undefined) {
      if (config.show_daily_kwh_devices === undefined) this._config.show_daily_kwh_devices = Boolean(config.show_daily_kwh);
      if (config.show_daily_kwh_total === undefined) this._config.show_daily_kwh_total = Boolean(config.show_daily_kwh);
    }
    if (this._config.title === "Aktualny pobór – urządzenia" || this._config.title === "Current power – devices") {
      this._config.title = "";
    }
    this._render();
  }

  set hass(hass) {
    const firstLoad = !this._hass;
    this._hass = hass;
    if (firstLoad) this._render();
  }

  _updateConfig(updates, skipRender = false) {
    this._config = { ...this._config, ...updates };
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this._config }, bubbles: true, composed: true }));
    if (!skipRender) this._render();
  }

  async _syncFromEnergyPanel(forceReset = false) {
    if (!this._hass) return;
    try {
      let [prefs, entityReg] = await Promise.all([
        this._hass.callWS({ type: "energy/get_prefs" }).catch(() => null),
        this._hass.callWS({ type: "config/entity_registry/list" }).catch(() => [])
      ]);

      if (!prefs || !prefs.device_consumption) {
        const fallbackPrefs = getFallbackStorageEnergySensorPrefs(this._hass);
        if (fallbackPrefs) prefs = fallbackPrefs;
      }

      if (!prefs) {
        alert("Nie udało się pobrać konfiguracji Panelu Energii.");
        return;
      }

      const deviceToPowerEntities = {};
      const statToDevice = {};
      const regMap = {};
      const allPower = getAllPowerEntities(this._hass);

      entityReg.forEach((ent) => {
        regMap[ent.entity_id] = ent;
        if (ent.device_id && !ent.disabled_by) {
          statToDevice[ent.entity_id] = ent.device_id;
          const st = this._hass.states[ent.entity_id];
          if (st && ent.entity_id.startsWith("sensor.") && isPowerStateObj(st)) {
            if (!deviceToPowerEntities[ent.device_id]) deviceToPowerEntities[ent.device_id] = [];
            deviceToPowerEntities[ent.device_id].push(ent.entity_id);
          }
        }
      });

      const existing = new Map();
      if (!forceReset) {
        (this._config.devices || []).forEach((d) => {
          if (d.stat_id) existing.set(d.stat_id, d);
          if (d.entity) existing.set(d.entity, d);
        });
      }

      const merged = [];
      (prefs.device_consumption || []).forEach((dev, idx) => {
        const statId = dev.stat_consumption || dev.stat_rate;
        const matchedPower = resolvePowerForEnergyDevice(
          this._hass,
          dev,
          statToDevice,
          deviceToPowerEntities,
          allPower,
          regMap
        );
        const prev = existing.get(statId) || (matchedPower ? existing.get(matchedPower) : {}) || {};
        const parentStat = prev.parent_entity !== undefined ? prev.parent_entity : dev.included_in_stat || "";

        const hasValidManualEntity = !forceReset && prev.entity && isPowerStateObj(this._hass.states[prev.entity]);
        const finalEntity = hasValidManualEntity ? prev.entity : matchedPower || "";

        const stateObj = finalEntity ? this._hass.states[finalEntity] : this._hass.states[statId];
        const rawName = prev.name || dev.name || (stateObj ? stateObj.attributes.friendly_name : statId);
        const cleanName = rawName.replace(/ power| moc| energy| energia/gi, "").trim();

        merged.push({
          stat_id: dev.stat_consumption || statId,
          entity: finalEntity,
          name: cleanName,
          color: prev.color || DEFAULT_PALETTE[idx % DEFAULT_PALETTE.length],
          icon: prev.icon && prev.icon !== "mdi:chart-line" ? prev.icon : guessDeviceIcon(cleanName, stateObj),
          is_child: prev.is_child !== undefined ? prev.is_child : Boolean(parentStat),
          parent_entity: parentStat
        });
      });

      const { autoTotalEntity } = resolveAutoTotalPowerAndEnergy(this._hass, prefs, statToDevice, deviceToPowerEntities, allPower, regMap);
      const nextTotal = !forceReset && this._config.total_power_entity ? this._config.total_power_entity : autoTotalEntity || "";

      this._updateConfig({ devices: merged, total_power_entity: nextTotal });
    } catch (e) {
      alert("Błąd odczytu Panelu Energii: " + e.message);
    }
  }

  _getDynamicIconSuggestions(query) {
    const q = (query || "").toLowerCase().replace("mdi:", "").trim();
    if (!q) return [];
    const iconSet = new Set(MDI_ICON_CATALOG);
    if (this._hass && this._hass.states) {
      Object.values(this._hass.states).forEach((st) => {
        if (st.attributes && st.attributes.icon) iconSet.add(st.attributes.icon);
      });
    }
    return Array.from(iconSet)
      .filter((ic) => ic.toLowerCase().includes(q))
      .slice(0, 24);
  }

  _searchEntities(query, powerEntitiesOnly = true) {
    if (!this._hass || !this._hass.states) return [];
    const q = (query || "").toLowerCase().trim();
    const allIds = Object.keys(this._hass.states).filter((eid) => {
      if (!eid.startsWith("sensor.")) return false;
      if (powerEntitiesOnly) return isPowerStateObj(this._hass.states[eid]);
      return true;
    });

    const scored = [];
    for (const eid of allIds) {
      const st = this._hass.states[eid];
      const fn = (st.attributes.friendly_name || "").toLowerCase();
      const idLow = eid.toLowerCase();

      if (!q || idLow.includes(q) || fn.includes(q)) {
        let rank = 0;
        if (q) {
          if (idLow.includes(q) && fn.includes(q)) rank += 50;
          if (fn.startsWith(q) || idLow.replace("sensor.", "").startsWith(q)) rank += 30;
        }
        scored.push({
          eid,
          name: st.attributes.friendly_name || eid,
          stateStr: `${st.state} ${st.attributes.unit_of_measurement || ""}`.trim(),
          rank
        });
      }
    }
    scored.sort((a, b) => b.rank - a.rank || a.name.localeCompare(b.name, "pl"));
    return scored.slice(0, 35);
  }

  _setupEntitySearchBox(wrapperEl, initialEntityId, onSelectCallback) {
    if (!wrapperEl) return;
    const inputEl = wrapperEl.querySelector(".entity-search-input");
    const dropdownEl = wrapperEl.querySelector(".entity-search-dropdown");
    const clearBtn = wrapperEl.querySelector(".entity-clear-btn");

    const formatDisplay = (eid) => {
      if (!eid) return "";
      const st = this._hass.states[eid];
      return st ? `${st.attributes.friendly_name || eid} (${eid})` : eid;
    };

    inputEl.value = formatDisplay(initialEntityId);

    const renderDropdown = (filterText) => {
      const matches = this._searchEntities(filterText, true);
      if (matches.length === 0) {
        dropdownEl.classList.remove("open");
        return;
      }
      dropdownEl.innerHTML = matches
        .map(
          (m) => `
        <div class="entity-opt" data-eid="${m.eid}">
          <div class="entity-opt-main">
            <span class="entity-opt-name">${m.name}</span>
            <span class="entity-opt-state">[${m.stateStr}]</span>
          </div>
          <div class="entity-opt-id">${m.eid}</div>
        </div>
      `
        )
        .join("");
      dropdownEl.classList.add("open");

      dropdownEl.querySelectorAll(".entity-opt").forEach((opt) => {
        opt.addEventListener("mousedown", (ev) => {
          ev.preventDefault();
          const chosenEid = opt.getAttribute("data-eid");
          inputEl.value = formatDisplay(chosenEid);
          dropdownEl.classList.remove("open");
          onSelectCallback(chosenEid);
        });
      });
    };

    inputEl.addEventListener("focus", () => {
      inputEl.select();
      renderDropdown("");
    });
    inputEl.addEventListener("input", (e) => renderDropdown(e.target.value));
    inputEl.addEventListener("blur", () => {
      setTimeout(() => {
        dropdownEl.classList.remove("open");
        inputEl.value = formatDisplay(initialEntityId);
      }, 200);
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        inputEl.value = "";
        onSelectCallback("");
      });
    }
  }

  _render() {
    if (!this.shadowRoot || !this._hass) return;
    const t = (k) => localize(this._hass, this._config.language, `editor.${k}`);
    const devices = this._config.devices || [];
    const isFixedSize = this._config.size_mode === "fixed";
    const isLed = this._config.header_history_type === "led";
    const isFixedScale = this._config.header_scale_mode === "fixed";

    this.shadowRoot.innerHTML = `
      <style>
        .editor-wrap { display: flex; flex-direction: column; gap: 12px; padding: 8px 0; }
        .row { display: flex; flex-direction: column; gap: 5px; }
        .row-inline { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
        label { font-weight: 500; font-size: 0.86rem; color: var(--primary-text-color); }
        input[type="text"], input[type="number"], select {
          padding: 7px 10px; border-radius: 6px; border: 1px solid var(--divider-color, #444);
          background: var(--card-background-color, #1e1e1e); color: var(--primary-text-color, #fff);
          font-size: 0.9rem; width: 100%; box-sizing: border-box;
        }
        input[type="color"] { width: 42px; height: 34px; border: none; background: none; cursor: pointer; padding: 0; flex-shrink: 0; }
        .section-title {
          font-size: 0.96rem; font-weight: 600; margin-top: 14px; padding-bottom: 5px;
          border-bottom: 1px solid var(--divider-color, #444); color: var(--primary-color, #03a9f4);
        }
        .btn-bar { display: flex; gap: 8px; flex-wrap: wrap; }
        button {
          padding: 7px 12px; border-radius: 6px; border: 1px solid var(--primary-color, #03a9f4);
          background: rgba(3, 169, 244, 0.15); color: var(--primary-text-color); cursor: pointer; font-weight: 500;
        }
        button:hover { background: rgba(3, 169, 244, 0.3); }
        .btn-warn { border-color: #ff9800; background: rgba(255, 152, 0, 0.15); }
        .dev-card {
          border: 1px solid var(--divider-color, #444); border-radius: 8px; padding: 10px;
          display: flex; flex-direction: column; gap: 8px; background: rgba(128, 128, 128, 0.05);
        }
        .dev-card.unmapped { border-color: #ff9800; background: rgba(255, 152, 0, 0.08); }
        .warn-msg { font-size: 0.8rem; color: #ffb74d; font-weight: 500; }
        .dev-top { display: flex; gap: 6px; align-items: center; }
        .order-btns { display: flex; flex-direction: column; gap: 2px; }
        .btn-ord { padding: 2px 6px; font-size: 0.72rem; line-height: 1; }
        .sub-check-row { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; padding: 2px; color: var(--secondary-text-color); }
        .btn-del { border-color: #e53935; background: rgba(229, 57, 53, 0.15); padding: 6px 10px; }

        .entity-search-wrap { position: relative; flex: 1; display: flex; gap: 4px; align-items: center; }
        .entity-search-dropdown {
          display: none; position: absolute; top: 100%; left: 0; right: 0; z-index: 60;
          background: var(--card-background-color, #1c1c1c); border: 1px solid var(--primary-color, #03a9f4);
          border-radius: 6px; margin-top: 3px; max-height: 230px; overflow-y: auto;
          box-shadow: 0 8px 24px rgba(0,0,0,0.7);
        }
        .entity-search-dropdown.open { display: block; }
        .entity-opt {
          padding: 7px 10px; border-bottom: 1px solid rgba(128,128,128,0.15); cursor: pointer;
          display: flex; flex-direction: column; gap: 2px;
        }
        .entity-opt:hover { background: rgba(3, 169, 244, 0.22); }
        .entity-opt-main { display: flex; justify-content: space-between; align-items: center; gap: 8px; }
        .entity-opt-name { font-weight: 500; font-size: 0.88rem; color: var(--primary-text-color, #fff); }
        .entity-opt-state { font-size: 0.8rem; font-weight: 600; color: var(--primary-color, #4fc3f7); white-space: nowrap; }
        .entity-opt-id { font-size: 0.75rem; color: var(--secondary-text-color, #999); }
        .entity-clear-btn { padding: 6px 8px; font-size: 0.78rem; border-color: #666; background: transparent; }

        .icon-picker-wrap { position: relative; flex: 1; display: flex; align-items: center; gap: 6px; }
        .icon-preview { --mdc-icon-size: 22px; color: var(--primary-color, #03a9f4); flex-shrink: 0; }
        .icon-results {
          display: none; position: absolute; top: 100%; left: 0; right: 0; z-index: 50;
          background: var(--card-background-color, #1e1e1e); border: 1px solid var(--primary-color, #03a9f4);
          border-radius: 6px; padding: 8px; margin-top: 4px; max-height: 180px; overflow-y: auto;
          grid-template-columns: repeat(auto-fill, minmax(38px, 1fr)); gap: 6px; box-shadow: 0 6px 20px rgba(0,0,0,0.6);
        }
        .icon-results.open { display: grid; }
        .icon-option { display: flex; align-items: center; justify-content: center; padding: 6px; border-radius: 4px; cursor: pointer; }
        .icon-option:hover { background: rgba(3, 169, 244, 0.25); }
      </style>

      <div class="editor-wrap">
        <div class="grid-2">
          <div class="row">
            <label>${t("chart_type")}</label>
            <select id="cfg_chart_type">
              <option value="bar" ${this._config.chart_type === "bar" ? "selected" : ""}>${t("bar")}</option>
              <option value="pie" ${this._config.chart_type === "pie" ? "selected" : ""}>${t("pie")}</option>
              <option value="donut" ${this._config.chart_type === "donut" ? "selected" : ""}>${t("donut")}</option>
              <option value="sankey_h" ${this._config.chart_type === "sankey_h" ? "selected" : ""}>${t("sankey_h")}</option>
              <option value="sankey_v" ${this._config.chart_type === "sankey_v" ? "selected" : ""}>${t("sankey_v")}</option>
            </select>
          </div>
          <div class="row">
            <label>${t("language")}</label>
            <select id="cfg_language">
              <option value="auto" ${this._config.language === "auto" ? "selected" : ""}>${t("lang_auto")}</option>
              <option value="pl" ${this._config.language === "pl" ? "selected" : ""}>Polski (123,4 W)</option>
              <option value="en" ${this._config.language === "en" ? "selected" : ""}>English (123.4 W)</option>
            </select>
          </div>
        </div>

        <div class="row">
          <label>${t("total_entity")}</label>
          <div class="entity-search-wrap" id="total_entity_search">
            <input type="text" class="entity-search-input" placeholder="${t("search_entity_placeholder")}" autocomplete="off">
            <button type="button" class="entity-clear-btn">${t("clear_entity")}</button>
            <div class="entity-search-dropdown"></div>
          </div>
        </div>

        <div class="row-inline"><label>${t("show_daily_kwh_devices")}</label><input type="checkbox" id="cfg_show_kwh_dev" ${this._config.show_daily_kwh_devices !== false ? "checked" : ""}></div>
        <div class="row-inline"><label>${t("show_daily_kwh_total")}</label><input type="checkbox" id="cfg_show_kwh_tot" ${this._config.show_daily_kwh_total !== false ? "checked" : ""}></div>
        <div class="row-inline"><label>${t("unit_kw_above_1kw")}</label><input type="checkbox" id="cfg_unit_kw" ${this._config.unit_kw_above_1kw !== false ? "checked" : ""}></div>
        <div class="row-inline"><label>${t("show_percentage")}</label><input type="checkbox" id="cfg_show_pct" ${this._config.show_percentage ? "checked" : ""}></div>

        <!-- ======================================================== -->
        <!-- SEKCJA NAGŁÓWKA I WYKRESU HISTORII W TLE -->
        <!-- ======================================================== -->
        <div class="section-title">${t("header_section")}</div>

        <div class="grid-2">
          <div class="row">
            <label>${t("title")}</label>
            <input type="text" id="cfg_title" value="${this._config.title || ""}" placeholder="">
          </div>
          <div class="row">
            <label>${t("header_top_offset")}</label>
            <input type="number" id="cfg_hdr_top_offset" min="0" max="200" value="${this._config.header_top_offset ?? 4}">
          </div>
        </div>

        <div class="row-inline">
          <label>${t("show_total_subtitle")}</label>
          <input type="checkbox" id="cfg_show_subtitle" ${this._config.show_total_subtitle !== false ? "checked" : ""}>
        </div>

        <div class="grid-2">
          <div class="row">
            <label>${t("header_total_prefix")}</label>
            <input type="text" id="cfg_hdr_prefix" value="${this._config.header_total_prefix || ""}" placeholder="${localize(this._hass, this._config.language, "total")}:">
          </div>
          <div class="row">
            <label>${t("header_total_font_size")}</label>
            <input type="number" id="cfg_hdr_total_font" min="10" max="42" value="${this._config.header_total_font_size ?? 18}">
          </div>
          <div class="row">
            <label>${t("header_total_color")}</label>
            <div style="display:flex; gap:6px; align-items:center;">
              <input type="color" id="cfg_hdr_total_color" value="${this._config.header_total_color || "#ffffff"}">
              <input type="text" id="cfg_hdr_total_color_txt" value="${this._config.header_total_color || "#ffffff"}">
            </div>
          </div>
          <div class="row">
            <label>${t("header_total_opacity")}</label>
            <input type="number" id="cfg_hdr_total_op" min="5" max="100" value="${this._config.header_total_opacity ?? 90}">
          </div>
        </div>

        <div class="row-inline">
          <label>${t("header_text_shadow")}</label>
          <input type="checkbox" id="cfg_hdr_txt_shadow" ${this._config.header_text_shadow !== false ? "checked" : ""}>
        </div>

        <div class="row-inline">
          <label>${t("header_text_outline")}</label>
          <input type="checkbox" id="cfg_hdr_txt_outline" ${this._config.header_text_outline !== false ? "checked" : ""}>
        </div>

        <div class="grid-2">
          <div class="row">
            <label>${t("header_text_outline_color")}</label>
            <div style="display:flex; gap:6px; align-items:center;">
              <input type="color" id="cfg_hdr_out_col" value="${this._config.header_text_outline_color || "#000000"}">
              <input type="text" id="cfg_hdr_out_col_txt" value="${this._config.header_text_outline_color || "#000000"}">
            </div>
          </div>
          <div class="row">
            <label>${t("header_text_outline_width")}</label>
            <input type="number" id="cfg_hdr_out_w" min="0" max="10" step="0.5" value="${this._config.header_text_outline_width ?? 2}">
          </div>
        </div>

        <div class="row-inline">
          <label>${t("header_history_enable")}</label>
          <input type="checkbox" id="cfg_hh_enable" ${this._config.header_history_enable !== false ? "checked" : ""}>
        </div>

        <div class="grid-2">
          <div class="row">
            <label>${t("header_history_type")}</label>
            <select id="cfg_hh_type">
              <option value="combo" ${this._config.header_history_type === "combo" ? "selected" : ""}>${t("hh_combo")}</option>
              <option value="led" ${this._config.header_history_type === "led" ? "selected" : ""}>${t("hh_led")}</option>
              <option value="line" ${this._config.header_history_type === "line" ? "selected" : ""}>${t("hh_line")}</option>
              <option value="bar" ${this._config.header_history_type === "bar" ? "selected" : ""}>${t("hh_bar")}</option>
            </select>
          </div>
          <div class="row">
            <label>${t("header_chart_opacity")}</label>
            <input type="number" id="cfg_hh_chart_op" min="5" max="100" value="${this._config.header_chart_opacity ?? 90}">
          </div>
        </div>

        <div class="grid-3">
          <div class="row">
            <label>${t("header_height")}</label>
            <input type="number" id="cfg_hdr_height" min="50" max="300" value="${this._config.header_height ?? 110}">
          </div>
          <div class="row">
            <label>${t("header_history_hours")}</label>
            <input type="number" id="cfg_hh_hours" min="1" max="168" value="${this._config.header_history_hours ?? 24}">
          </div>
          <div class="row">
            <label>${t("header_history_buckets")}</label>
            <input type="number" id="cfg_hh_buckets" min="12" max="120" value="${this._config.header_history_buckets ?? 48}">
          </div>
        </div>

        ${
          isLed
            ? `<div class="row">
                <label>${t("header_led_segments")}</label>
                <input type="number" id="cfg_hh_led_segs" min="4" max="30" value="${this._config.header_led_segments ?? 12}">
              </div>`
            : ""
        }

        <div class="grid-2">
          <div class="row">
            <label>${t("header_scale_mode")}</label>
            <select id="cfg_hh_scale_mode">
              <option value="auto" ${this._config.header_scale_mode !== "fixed" ? "selected" : ""}>${t("scale_auto")}</option>
              <option value="fixed" ${this._config.header_scale_mode === "fixed" ? "selected" : ""}>${t("scale_fixed")}</option>
            </select>
          </div>
          ${
            isFixedScale
              ? `<div class="row">
                  <label>${t("header_max_scale_w")}</label>
                  <input type="number" id="cfg_hh_max_w" min="100" max="50000" step="100" value="${this._config.header_max_scale_w ?? 5000}">
                </div>`
              : `<div></div>`
          }
        </div>

        <div class="grid-3">
          <div class="row">
            <label>${t("header_color_max")}</label>
            <input type="color" id="cfg_hh_cmax" value="${this._config.header_color_max || "#00e5ff"}" style="width:100%;">
          </div>
          <div class="row">
            <label>${t("header_color_min")}</label>
            <input type="color" id="cfg_hh_cmin" value="${this._config.header_color_min || "#004d7a"}" style="width:100%;">
          </div>
          <div class="row">
            <label>${t("header_line_color")}</label>
            <input type="color" id="cfg_hh_cline" value="${this._config.header_line_color || "#80d8ff"}" style="width:100%;">
          </div>
        </div>

        <div class="grid-2">
          <div class="row">
            <label>${t("header_opacity_max")}</label>
            <input type="number" id="cfg_hh_opmax" min="10" max="100" value="${this._config.header_opacity_max ?? 88}">
          </div>
          <div class="row">
            <label>${t("header_opacity_min")}</label>
            <input type="number" id="cfg_hh_opmin" min="0" max="100" value="${this._config.header_opacity_min ?? 18}">
          </div>
          <div class="row">
            <label>${t("header_bg_color")}</label>
            <div style="display:flex; gap:6px; align-items:center;">
              <input type="color" id="cfg_hdr_bg_col" value="${this._config.header_bg_color || "#07192b"}">
              <input type="text" id="cfg_hdr_bg_col_txt" value="${this._config.header_bg_color || "#07192b"}">
            </div>
          </div>
          <div class="row">
            <label>${t("header_bg_opacity")}</label>
            <input type="number" id="cfg_hdr_bg_op" min="0" max="100" value="${this._config.header_bg_opacity ?? 75}">
          </div>
        </div>

        <div class="row-inline"><label>${t("header_effect_glow")}</label><input type="checkbox" id="cfg_hh_glow" ${this._config.header_effect_glow !== false ? "checked" : ""}></div>
        <div class="row-inline"><label>${t("header_effect_3d")}</label><input type="checkbox" id="cfg_hh_3d" ${this._config.header_effect_3d !== false ? "checked" : ""}></div>
        <div class="row-inline"><label>${t("header_effect_glass")}</label><input type="checkbox" id="cfg_hh_glass" ${this._config.header_effect_glass !== false ? "checked" : ""}></div>

        <!-- ======================================================== -->
        <!-- SORTOWANIE I FILTROWANIE URZĄDZEŃ -->
        <!-- ======================================================== -->
        <div class="section-title">${t("sort_mode")}</div>
        <div class="grid-2">
          <div class="row">
            <label>${t("sort_mode")}</label>
            <select id="cfg_sort_mode">
              <option value="power" ${this._config.sort_mode === "power" ? "selected" : ""}>${t("sort_power")}</option>
              <option value="alpha" ${this._config.sort_mode === "alpha" ? "selected" : ""}>${t("sort_alpha")}</option>
              <option value="custom" ${this._config.sort_mode === "custom" ? "selected" : ""}>${t("sort_custom")}</option>
            </select>
          </div>
          <div class="row">
            <label>${t("min_power")}</label>
            <input type="number" id="cfg_min_power" min="0" max="5000" step="0.5" value="${this._config.min_power_threshold ?? 0}">
          </div>
        </div>

        <div class="row">
          <label>${t("max_devices")}</label>
          <input type="number" id="cfg_max_devices" min="0" max="100" step="1" value="${this._config.max_devices ?? 0}">
        </div>

        <div class="row-inline"><label>${t("sort_reverse")}</label><input type="checkbox" id="cfg_sort_rev" ${this._config.sort_reverse ? "checked" : ""}></div>

        <div class="row">
          <label>${t("hierarchy_mode")}</label>
          <select id="cfg_hierarchy">
            <option value="brackets" ${this._config.hierarchy_mode === "brackets" ? "selected" : ""}>${t("h_brackets")}</option>
            <option value="subtract" ${this._config.hierarchy_mode === "subtract" ? "selected" : ""}>${t("h_subtract")}</option>
            <option value="hide" ${this._config.hierarchy_mode === "hide" ? "selected" : ""}>${t("h_hide")}</option>
          </select>
        </div>

        <div class="row-inline"><label>${t("auto_energy")}</label><input type="checkbox" id="cfg_auto_energy" ${this._config.auto_from_energy_panel !== false ? "checked" : ""}></div>
        <div class="row-inline">
          <label>${t("show_other")}</label>
          <div style="display:flex; align-items:center; gap:8px;">
            <input type="color" id="cfg_other_color" value="${this._config.other_color || "#7f8c8d"}">
            <input type="checkbox" id="cfg_show_other" ${this._config.show_other !== false ? "checked" : ""}>
          </div>
        </div>

        <div class="row-inline"><label>${t("show_icons")}</label><input type="checkbox" id="cfg_show_icons" ${this._config.show_icons !== false ? "checked" : ""}></div>
        <div class="row-inline"><label>${t("icons_only")}</label><input type="checkbox" id="cfg_icons_only" ${this._config.icons_only ? "checked" : ""}></div>
        <div class="row-inline"><label>${t("icons_inside_charts")}</label><input type="checkbox" id="cfg_icons_inside" ${this._config.icons_inside_charts !== false ? "checked" : ""}></div>

        <!-- ROZMIAR KARTY I SKALOWANIE -->
        <div class="section-title">${t("size_header")}</div>
        <div class="row">
          <label>${t("size_mode")}</label>
          <select id="cfg_size_mode">
            <option value="auto" ${this._config.size_mode !== "fixed" ? "selected" : ""}>${t("size_auto")}</option>
            <option value="fixed" ${this._config.size_mode === "fixed" ? "selected" : ""}>${t("size_fixed")}</option>
          </select>
        </div>

        <div class="grid-2">
          <div class="row">
            <label>${t("card_max_width")}</label>
            <input type="number" id="cfg_card_max_width" min="0" max="2000" value="${this._config.card_max_width ?? 0}">
          </div>
          ${
            isFixedSize
              ? `<div class="row">
                  <label>${t("card_height")}</label>
                  <input type="number" id="cfg_card_height" min="180" max="1500" value="${this._config.card_height ?? 480}">
                </div>
                <div class="row">
                  <label>${t("bar_height_pct")}</label>
                  <input type="number" id="cfg_bar_height_pct" min="20" max="95" value="${this._config.bar_height_pct ?? 72}">
                </div>
                <div class="row">
                  <label>${t("font_bar_pct")}</label>
                  <input type="number" id="cfg_font_bar_pct" min="25" max="95" value="${this._config.font_bar_pct ?? 52}">
                </div>`
              : ""
          }
        </div>

        <!-- EFEKTY WIZUALNE -->
        <div class="section-title">${t("effects_header")}</div>
        <div class="grid-2">
          <div class="row">
            <label>${t("bar_style")}</label>
            <select id="cfg_bar_style">
              <option value="flat" ${this._config.bar_style === "flat" ? "selected" : ""}>${t("style_flat")}</option>
              <option value="gradient" ${this._config.bar_style === "gradient" ? "selected" : ""}>${t("style_gradient")}</option>
              <option value="3d" ${this._config.bar_style === "3d" ? "selected" : ""}>${t("style_3d")}</option>
              <option value="glass" ${this._config.bar_style === "glass" ? "selected" : ""}>${t("style_glass")}</option>
            </select>
          </div>
          <div class="row">
            <label>${t("bar_3d_depth")}</label>
            <input type="number" id="cfg_bar_3d_depth" min="4" max="24" value="${this._config.bar_3d_depth ?? 10}">
          </div>
          <div class="row">
            <label>${t("bar_opacity")}</label>
            <input type="number" id="cfg_bar_opacity" min="15" max="100" value="${this._config.bar_opacity ?? 92}">
          </div>
          <div class="row">
            <label>${t("card_opacity")}</label>
            <input type="number" id="cfg_card_opacity" min="10" max="100" value="${this._config.card_opacity ?? 100}">
          </div>
          <div class="row">
            <label>${t("card_bg_opacity")}</label>
            <input type="number" id="cfg_card_bg_opacity" min="0" max="100" value="${this._config.card_bg_opacity ?? 100}">
          </div>
        </div>

        <div class="row-inline"><label>${t("bar_shadow")}</label><input type="checkbox" id="cfg_bar_shadow" ${this._config.bar_shadow !== false ? "checked" : ""}></div>
        <div class="row-inline"><label>${t("card_glass")}</label><input type="checkbox" id="cfg_card_glass" ${this._config.card_glass ? "checked" : ""}></div>

        <div class="grid-2">
          <div class="row">
            <label>${t("card_bg_color")}</label>
            <div style="display:flex; gap:6px; align-items:center;">
              <input type="color" id="cfg_card_bg_picker" value="${(this._config.card_bg_color || "#111111").startsWith("#") ? this._config.card_bg_color : "#111111"}">
              <input type="text" id="cfg_card_bg_color" value="${this._config.card_bg_color || "#111111"}">
            </div>
          </div>
          <div class="row">
            <label>${t("bg_overlay")}</label>
            <input type="number" id="cfg_bg_overlay" min="0" max="95" value="${this._config.bg_overlay_opacity ?? 60}">
          </div>
        </div>
        <div class="row"><label>${t("bg_image")}</label><input type="text" id="cfg_bg_image" placeholder="/local/background.jpg lub https://..." value="${this._config.background_image || ""}"></div>

        <!-- RĘCZNE WYMIARY PIXELOWE -->
        <div class="section-title">${t("appearance_header")}</div>
        <div class="grid-2">
          <div class="row"><label>${t("bar_height")}</label><input type="number" id="cfg_bar_height" min="12" max="80" value="${this._config.bar_height ?? 28}" ${isFixedSize ? "disabled" : ""}></div>
          <div class="row"><label>${t("bar_gap")}</label><input type="number" id="cfg_bar_gap" min="0" max="40" value="${this._config.bar_gap ?? 14}" ${isFixedSize ? "disabled" : ""}></div>
          <div class="row"><label>${t("bar_radius")}</label><input type="number" id="cfg_bar_radius" min="0" max="30" value="${this._config.bar_radius ?? 2}"></div>
          <div class="row"><label>${t("label_width")}</label><input type="number" id="cfg_label_width" min="40" max="320" value="${this._config.label_width ?? 135}"></div>
          <div class="row"><label>${t("label_font_size")}</label><input type="number" id="cfg_label_font_size" min="9" max="32" value="${this._config.label_font_size ?? 15}" ${isFixedSize ? "disabled" : ""}></div>
          <div class="row"><label>${t("value_font_size")}</label><input type="number" id="cfg_value_font_size" min="9" max="32" value="${this._config.value_font_size ?? 14}" ${isFixedSize ? "disabled" : ""}></div>
          <div class="row"><label>${t("title_font_size")}</label><input type="number" id="cfg_title_font_size" min="12" max="40" value="${this._config.title_font_size ?? 18}"></div>
          <div class="row"><label>${t("icon_size")}</label><input type="number" id="cfg_icon_size" min="10" max="40" value="${this._config.icon_size ?? 18}" ${isFixedSize ? "disabled" : ""}></div>
          <div class="row"><label>${t("pie_size")}</label><input type="number" id="cfg_pie_size" min="100" max="400" value="${this._config.pie_size ?? 210}"></div>
          <div class="row"><label>${t("sankey_height")}</label><input type="number" id="cfg_sankey_height" min="180" max="900" value="${this._config.sankey_height ?? 360}"></div>
        </div>

        <!-- LISTA URZĄDZEŃ -->
        <div class="section-title">${t("devices_header")}</div>
        <div class="btn-bar">
          <button type="button" id="btn_sync">${t("sync_btn")}</button>
          <button type="button" id="btn_resync" class="btn-warn">${t("resync_btn")}</button>
          <button type="button" id="btn_add">+ ${t("add_btn")}</button>
        </div>

        <div id="devices_list" style="display:flex; flex-direction:column; gap:10px;">
          ${devices
            .map((dev, idx) => {
              const isSub = Boolean(dev.is_child || dev.parent_entity);
              const isUnmapped = !dev.entity || !isPowerStateObj(this._hass.states[dev.entity]);
              return `
            <div class="dev-card ${isUnmapped ? "unmapped" : ""}" data-idx="${idx}">
              ${isUnmapped ? `<div class="warn-msg">${t("unmapped_warn")} (${dev.stat_id || ""})</div>` : ""}
              <div class="dev-top">
                <div class="order-btns">
                  <button type="button" class="btn-ord" data-move-up="${idx}" ${idx === 0 ? "disabled" : ""}>▲</button>
                  <button type="button" class="btn-ord" data-move-down="${idx}" ${idx === devices.length - 1 ? "disabled" : ""}>▼</button>
                </div>
                <input type="color" class="dev-color" value="${dev.color || DEFAULT_PALETTE[idx % DEFAULT_PALETTE.length]}">
                <div class="entity-search-wrap dev-entity-search">
                  <input type="text" class="entity-search-input" placeholder="${t("search_entity_placeholder")}" autocomplete="off">
                  <div class="entity-search-dropdown"></div>
                </div>
                <button type="button" class="btn-del" data-del="${idx}">✕</button>
              </div>
              <div class="row-inline">
                <input type="text" class="dev-name" style="flex:1;" placeholder="${t("name_override")}" value="${dev.name || ""}">
                <div class="icon-picker-wrap">
                  <ha-icon class="icon-preview" icon="${dev.icon || "mdi:power-plug"}"></ha-icon>
                  <input type="text" class="dev-icon-input" placeholder="${t("icon_search")}" value="${dev.icon || ""}" autocomplete="off">
                  <div class="icon-results"></div>
                </div>
              </div>
              <label class="sub-check-row">
                <input type="checkbox" class="dev-is-child" ${isSub ? "checked" : ""}>
                <span>${t("is_subdevice")}</span>
              </label>
              ${
                isSub
                  ? `<div class="row">
                      <select class="dev-parent">
                        <option value="">-- ${t("parent_entity")}: ${t("none")} --</option>
                        ${devices
                          .filter((_, i) => i !== idx)
                          .map((pDev) => {
                            const valKey = pDev.stat_id || pDev.entity;
                            const sel = dev.parent_entity && (dev.parent_entity === pDev.entity || dev.parent_entity === pDev.stat_id) ? "selected" : "";
                            return `<option value="${valKey}" ${sel}>${pDev.name || pDev.entity}</option>`;
                          })
                          .join("")}
                      </select>
                    </div>`
                  : ""
              }
            </div>`;
            })
            .join("")}
        </div>
      </div>
    `;

    this._setupEntitySearchBox(
      this.shadowRoot.getElementById("total_entity_search"),
      this._config.total_power_entity,
      (chosenEid) => this._updateConfig({ total_power_entity: chosenEid })
    );

    this.shadowRoot.getElementById("cfg_title").addEventListener("change", (e) => this._updateConfig({ title: e.target.value }));
    this.shadowRoot.getElementById("cfg_hdr_top_offset").addEventListener("change", (e) => this._updateConfig({ header_top_offset: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_chart_type").addEventListener("change", (e) => this._updateConfig({ chart_type: e.target.value }));
    this.shadowRoot.getElementById("cfg_language").addEventListener("change", (e) => this._updateConfig({ language: e.target.value }));
    this.shadowRoot.getElementById("cfg_show_kwh_dev").addEventListener("change", (e) => this._updateConfig({ show_daily_kwh_devices: e.target.checked }));
    this.shadowRoot.getElementById("cfg_show_kwh_tot").addEventListener("change", (e) => this._updateConfig({ show_daily_kwh_total: e.target.checked }));
    this.shadowRoot.getElementById("cfg_unit_kw").addEventListener("change", (e) => this._updateConfig({ unit_kw_above_1kw: e.target.checked }));
    this.shadowRoot.getElementById("cfg_show_pct").addEventListener("change", (e) => this._updateConfig({ show_percentage: e.target.checked }));

    // Nagłówek i wykres historii w tle
    this.shadowRoot.getElementById("cfg_show_subtitle").addEventListener("change", (e) => this._updateConfig({ show_total_subtitle: e.target.checked }));
    this.shadowRoot.getElementById("cfg_hdr_prefix").addEventListener("change", (e) => this._updateConfig({ header_total_prefix: e.target.value }));
    this.shadowRoot.getElementById("cfg_hdr_total_font").addEventListener("change", (e) => this._updateConfig({ header_total_font_size: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_hdr_total_color").addEventListener("change", (e) => this._updateConfig({ header_total_color: e.target.value }));
    this.shadowRoot.getElementById("cfg_hdr_total_color_txt").addEventListener("change", (e) => this._updateConfig({ header_total_color: e.target.value }));
    this.shadowRoot.getElementById("cfg_hdr_total_op").addEventListener("change", (e) => this._updateConfig({ header_total_opacity: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_hdr_txt_shadow").addEventListener("change", (e) => this._updateConfig({ header_text_shadow: e.target.checked }));
    this.shadowRoot.getElementById("cfg_hdr_txt_outline").addEventListener("change", (e) => this._updateConfig({ header_text_outline: e.target.checked }));
    this.shadowRoot.getElementById("cfg_hdr_out_col").addEventListener("change", (e) => this._updateConfig({ header_text_outline_color: e.target.value }));
    this.shadowRoot.getElementById("cfg_hdr_out_col_txt").addEventListener("change", (e) => this._updateConfig({ header_text_outline_color: e.target.value }));
    this.shadowRoot.getElementById("cfg_hdr_out_w").addEventListener("change", (e) => this._updateConfig({ header_text_outline_width: Number(e.target.value) }));

    this.shadowRoot.getElementById("cfg_hh_enable").addEventListener("change", (e) => this._updateConfig({ header_history_enable: e.target.checked }));
    this.shadowRoot.getElementById("cfg_hh_type").addEventListener("change", (e) => this._updateConfig({ header_history_type: e.target.value }));
    this.shadowRoot.getElementById("cfg_hh_chart_op").addEventListener("change", (e) => this._updateConfig({ header_chart_opacity: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_hdr_height").addEventListener("change", (e) => this._updateConfig({ header_height: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_hh_hours").addEventListener("change", (e) => this._updateConfig({ header_history_hours: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_hh_buckets").addEventListener("change", (e) => this._updateConfig({ header_history_buckets: Number(e.target.value) }));
    if (isLed) {
      this.shadowRoot.getElementById("cfg_hh_led_segs").addEventListener("change", (e) => this._updateConfig({ header_led_segments: Number(e.target.value) }));
    }
    this.shadowRoot.getElementById("cfg_hh_scale_mode").addEventListener("change", (e) => this._updateConfig({ header_scale_mode: e.target.value }));
    if (isFixedScale) {
      this.shadowRoot.getElementById("cfg_hh_max_w").addEventListener("change", (e) => this._updateConfig({ header_max_scale_w: Number(e.target.value) }));
    }
    this.shadowRoot.getElementById("cfg_hh_cmax").addEventListener("change", (e) => this._updateConfig({ header_color_max: e.target.value }));
    this.shadowRoot.getElementById("cfg_hh_cmin").addEventListener("change", (e) => this._updateConfig({ header_color_min: e.target.value }));
    this.shadowRoot.getElementById("cfg_hh_cline").addEventListener("change", (e) => this._updateConfig({ header_line_color: e.target.value }));
    this.shadowRoot.getElementById("cfg_hh_opmax").addEventListener("change", (e) => this._updateConfig({ header_opacity_max: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_hh_opmin").addEventListener("change", (e) => this._updateConfig({ header_opacity_min: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_hdr_bg_col").addEventListener("change", (e) => this._updateConfig({ header_bg_color: e.target.value }));
    this.shadowRoot.getElementById("cfg_hdr_bg_col_txt").addEventListener("change", (e) => this._updateConfig({ header_bg_color: e.target.value }));
    this.shadowRoot.getElementById("cfg_hdr_bg_op").addEventListener("change", (e) => this._updateConfig({ header_bg_opacity: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_hh_glow").addEventListener("change", (e) => this._updateConfig({ header_effect_glow: e.target.checked }));
    this.shadowRoot.getElementById("cfg_hh_3d").addEventListener("change", (e) => this._updateConfig({ header_effect_3d: e.target.checked }));
    this.shadowRoot.getElementById("cfg_hh_glass").addEventListener("change", (e) => this._updateConfig({ header_effect_glass: e.target.checked }));

    // Sortowanie i opcje ogólne
    this.shadowRoot.getElementById("cfg_sort_mode").addEventListener("change", (e) => this._updateConfig({ sort_mode: e.target.value }));
    this.shadowRoot.getElementById("cfg_sort_rev").addEventListener("change", (e) => this._updateConfig({ sort_reverse: e.target.checked }));
    this.shadowRoot.getElementById("cfg_min_power").addEventListener("change", (e) => this._updateConfig({ min_power_threshold: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_max_devices").addEventListener("change", (e) => this._updateConfig({ max_devices: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_hierarchy").addEventListener("change", (e) => this._updateConfig({ hierarchy_mode: e.target.value }));
    this.shadowRoot.getElementById("cfg_auto_energy").addEventListener("change", (e) => this._updateConfig({ auto_from_energy_panel: e.target.checked }));
    this.shadowRoot.getElementById("cfg_show_other").addEventListener("change", (e) => this._updateConfig({ show_other: e.target.checked }));
    this.shadowRoot.getElementById("cfg_other_color").addEventListener("change", (e) => this._updateConfig({ other_color: e.target.value }));
    this.shadowRoot.getElementById("cfg_show_icons").addEventListener("change", (e) => this._updateConfig({ show_icons: e.target.checked }));
    this.shadowRoot.getElementById("cfg_icons_only").addEventListener("change", (e) => this._updateConfig({ icons_only: e.target.checked }));
    this.shadowRoot.getElementById("cfg_icons_inside").addEventListener("change", (e) => this._updateConfig({ icons_inside_charts: e.target.checked }));

    // Skalowanie i rozmiar
    this.shadowRoot.getElementById("cfg_size_mode").addEventListener("change", (e) => this._updateConfig({ size_mode: e.target.value }));
    this.shadowRoot.getElementById("cfg_card_max_width").addEventListener("change", (e) => this._updateConfig({ card_max_width: Number(e.target.value) }));
    if (isFixedSize) {
      this.shadowRoot.getElementById("cfg_card_height").addEventListener("change", (e) => this._updateConfig({ card_height: Number(e.target.value) }));
      this.shadowRoot.getElementById("cfg_bar_height_pct").addEventListener("change", (e) => this._updateConfig({ bar_height_pct: Number(e.target.value) }));
      this.shadowRoot.getElementById("cfg_font_bar_pct").addEventListener("change", (e) => this._updateConfig({ font_bar_pct: Number(e.target.value) }));
    }

    // Efekty i przezroczystość
    this.shadowRoot.getElementById("cfg_bar_style").addEventListener("change", (e) => this._updateConfig({ bar_style: e.target.value }));
    this.shadowRoot.getElementById("cfg_bar_3d_depth").addEventListener("change", (e) => this._updateConfig({ bar_3d_depth: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_bar_opacity").addEventListener("change", (e) => this._updateConfig({ bar_opacity: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_card_opacity").addEventListener("change", (e) => this._updateConfig({ card_opacity: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_card_bg_opacity").addEventListener("change", (e) => this._updateConfig({ card_bg_opacity: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_bar_shadow").addEventListener("change", (e) => this._updateConfig({ bar_shadow: e.target.checked }));
    this.shadowRoot.getElementById("cfg_card_glass").addEventListener("change", (e) => this._updateConfig({ card_glass: e.target.checked }));
    this.shadowRoot.getElementById("cfg_card_bg_picker").addEventListener("change", (e) => this._updateConfig({ card_bg_color: e.target.value }));
    this.shadowRoot.getElementById("cfg_card_bg_color").addEventListener("change", (e) => this._updateConfig({ card_bg_color: e.target.value }));
    this.shadowRoot.getElementById("cfg_bg_overlay").addEventListener("change", (e) => this._updateConfig({ bg_overlay_opacity: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_bg_image").addEventListener("change", (e) => this._updateConfig({ background_image: e.target.value }));

    // Wymiary px
    this.shadowRoot.getElementById("cfg_bar_height").addEventListener("change", (e) => this._updateConfig({ bar_height: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_bar_gap").addEventListener("change", (e) => this._updateConfig({ bar_gap: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_bar_radius").addEventListener("change", (e) => this._updateConfig({ bar_radius: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_label_width").addEventListener("change", (e) => this._updateConfig({ label_width: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_label_font_size").addEventListener("change", (e) => this._updateConfig({ label_font_size: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_value_font_size").addEventListener("change", (e) => this._updateConfig({ value_font_size: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_title_font_size").addEventListener("change", (e) => this._updateConfig({ title_font_size: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_icon_size").addEventListener("change", (e) => this._updateConfig({ icon_size: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_pie_size").addEventListener("change", (e) => this._updateConfig({ pie_size: Number(e.target.value) }));
    this.shadowRoot.getElementById("cfg_sankey_height").addEventListener("change", (e) => this._updateConfig({ sankey_height: Number(e.target.value) }));

    this.shadowRoot.getElementById("btn_sync").addEventListener("click", () => this._syncFromEnergyPanel(false));
    this.shadowRoot.getElementById("btn_resync").addEventListener("click", () => this._syncFromEnergyPanel(true));
    this.shadowRoot.getElementById("btn_add").addEventListener("click", () => {
      const next = [...devices, { entity: "", name: "", color: DEFAULT_PALETTE[devices.length % DEFAULT_PALETTE.length], icon: "mdi:power-plug", is_child: false }];
      this._updateConfig({ devices: next });
    });

    this.shadowRoot.querySelectorAll(".dev-card").forEach((card) => {
      const idx = parseInt(card.getAttribute("data-idx"), 10);
      const updateDev = (patch, skipRender = false) => {
        const next = [...devices];
        next[idx] = { ...next[idx], ...patch };
        this._updateConfig({ devices: next }, skipRender);
      };

      this._setupEntitySearchBox(
        card.querySelector(".dev-entity-search"),
        devices[idx].entity,
        (chosenEid) => {
          const st = this._hass.states[chosenEid];
          const autoName = devices[idx].name || (st ? (st.attributes.friendly_name || "").replace(/ power| moc/gi, "").trim() : "");
          updateDev({ entity: chosenEid, name: autoName });
        }
      );

      const btnUp = card.querySelector("[data-move-up]");
      if (btnUp) {
        btnUp.addEventListener("click", () => {
          if (idx <= 0) return;
          const next = [...devices];
          [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
          this._updateConfig({ devices: next, sort_mode: "custom" });
        });
      }

      const btnDown = card.querySelector("[data-move-down]");
      if (btnDown) {
        btnDown.addEventListener("click", () => {
          if (idx >= devices.length - 1) return;
          const next = [...devices];
          [next[idx + 1], next[idx]] = [next[idx], next[idx + 1]];
          this._updateConfig({ devices: next, sort_mode: "custom" });
        });
      }

      card.querySelector(".dev-color").addEventListener("change", (e) => updateDev({ color: e.target.value }));
      card.querySelector(".dev-name").addEventListener("change", (e) => updateDev({ name: e.target.value }));

      const iconInput = card.querySelector(".dev-icon-input");
      const iconPreview = card.querySelector(".icon-preview");
      const resultsBox = card.querySelector(".icon-results");

      const showSuggestions = (val) => {
        const matches = this._getDynamicIconSuggestions(val);
        if (matches.length === 0) {
          resultsBox.classList.remove("open");
          return;
        }
        resultsBox.innerHTML = matches.map((ic) => `<div class="icon-option" data-icon="${ic}" title="${ic}"><ha-icon icon="${ic}"></ha-icon></div>`).join("");
        resultsBox.classList.add("open");

        resultsBox.querySelectorAll(".icon-option").forEach((opt) => {
          opt.addEventListener("mousedown", (ev) => {
            ev.preventDefault();
            const chosen = opt.getAttribute("data-icon");
            iconInput.value = chosen;
            iconPreview.setAttribute("icon", chosen);
            resultsBox.classList.remove("open");
            updateDev({ icon: chosen }, true);
          });
        });
      };

      iconInput.addEventListener("input", (e) => {
        const val = e.target.value;
        if (val.startsWith("mdi:")) iconPreview.setAttribute("icon", val);
        showSuggestions(val);
      });
      iconInput.addEventListener("focus", (e) => { if (e.target.value) showSuggestions(e.target.value); });
      iconInput.addEventListener("blur", (e) => {
        setTimeout(() => resultsBox.classList.remove("open"), 180);
        updateDev({ icon: e.target.value }, true);
      });

      card.querySelector(".dev-is-child").addEventListener("change", (e) => {
        const checked = e.target.checked;
        updateDev({ is_child: checked, ...(checked ? {} : { parent_entity: "" }) });
      });

      const parentSelect = card.querySelector(".dev-parent");
      if (parentSelect) {
        parentSelect.addEventListener("change", (e) => updateDev({ parent_entity: e.target.value, is_child: true }));
      }

      card.querySelector(".btn-del").addEventListener("click", () => {
        const next = devices.filter((_, i) => i !== idx);
        this._updateConfig({ devices: next });
      });
    });
  }
}

customElements.define("realtime-power-card", RealtimePowerCard);
customElements.define("realtime-power-card-editor", RealtimePowerCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "realtime-power-card",
  name: "Realtime Power Card (Energy Panel)",
  description: "Displays real-time power (W/kW), daily energy (kWh), and a Header History Equalizer/Line chart with 3D Prism Bar, Pie, Donut & Sankey diagrams.",
  preview: true
});