// VERY BAD js port of (some) of tobkit for the purpose of theme previewing
// There is probably a faster way to do this but if so idk what it is lol

const colscheme = {
  col_bg: {hex: '20317b', name: 'Background'},
  col_env_bg: {hex: '20317b', name: 'Envelope editor background'},
  col_medium_bg: {hex: '4a5a8b', name: 'Medium background'},
  col_light_bg: {hex: '8394c5', name: 'Light background'},
  col_lighter_bg: {hex: 'bdcdff', name: 'Lighter background'},
  col_light_ctrl: {hex: 'ffff00', name: 'Light control / button gradient 1'},
  col_dark_ctrl: {hex: 'ff9400', name: 'Dark control / button gradient 2'},
  col_light_ctrl_disabled: {hex: '8394c5', name: 'Light control (disabled)'},
  col_dark_ctrl_disabled: {hex: '4a5a8b', name: 'Dark control (disabled)'},
  col_selected_tab: {hex: '8394c5', name: 'Selected tab'},
  col_unselected_tab: {hex: '4a5a8b', name: 'Unselected tab'},
  col_list_1: {hex: '4a5a8b', name: 'List item gradient 1'},
  col_list_2: {hex: '8394c5', name: 'List item gradient 2'},
  col_list_highlight1:
      {hex: 'e67b00', name: 'List item gradient 1 (highlighted)'},
  col_list_highlight2:
      {hex: 'e6e600', name: 'List item gradient 2 (highlighted)'},
  col_scrollbar_bg1: {hex: '4a5a8b', name: 'Scrollbar background gradient 1'},
  col_scrollbar_bg2: {hex: '8394c5', name: 'Scrollbar background gradient 2'},
  col_scrollbar_inactive: {hex: 'ff9400', name: 'Scrollbar thumb (inactive)'},
  col_scrollbar_active: {hex: 'ffff00', name: 'Scrollbar thumb (active)'},
  col_scrollbar_arr_bg1:
      {hex: 'ff9400', name: 'Scrollbar arrow background gradient 1'},
  col_scrollbar_arr_bg2:
      {hex: 'ffff00', name: 'Scrollbar arrow background gradient 2'},
  col_outline: {hex: '000000', name: 'Widget outline'},
  col_tab_outline: {hex: '000000', name: 'Tab/tab box outline'},
  col_sepline: {hex: 'ffff00', name: 'List item separator line'},
  col_icon_tab: {hex: '000000', name: 'Tab icon'},
  col_icon: {hex: '000000', name: 'Button icon and scrollbar arrows'},
  col_checkmark: {hex: '000000', name: 'Checkmark'},
  col_text: {hex: '000000', name: 'Text'},
  col_text_light: {hex: '8394c5', name: 'Text (light)'},
  col_text_bt: {hex: '000000', name: 'Text (buttons)'},
  col_text_value: {hex: '000000', name: 'Text (value input)'},
  col_text_lb: {hex: '000000', name: 'Text (list items)'},
  col_text_lb_highlight: {hex: '000000', name: 'Text (highlighted list item)'},
  col_signal: {hex: 'ff0000', name: 'Recording/signal (red)'},
  col_signal_off: {hex: '940000', name: 'Recording/signal (off, dark red)'},
  col_piano_label: {hex: '000000', name: 'Piano mapping label (naturals)'},
  col_piano_label_inv:
      {hex: 'ffffff', name: 'Piano mapping label (inverted, sharps)'},
  col_loop: {hex: '39cd29', name: 'Loop points'},
  col_env_sustain: {hex: '00ff00', name: 'Envelope sustain line'},
  col_env_line: {hex: 'ff9400', name: 'Envelope line'},
  col_env_pt: {hex: 'ffff00', name: 'Envelope point fill'},
  col_env_pt_border: {hex: '000000', name: 'Envelope point outline'},
  col_env_pt_border_active:
      {hex: 'ff0000', name: 'Envelope point outline (active)'},
  col_mem_ok: {hex: '8bc583', name: 'Memory usage: OK'},
  col_mem_warn: {hex: 'ffff00', name: 'Memory usage: Warning'},
  col_mem_alert: {hex: 'ff0000', name: 'Memory usage: Alert'},
  col_typewriter_cursor: {hex: '000000', name: 'Text entry cursor'},
  col_smp_bg: {hex: '20317b', name: 'Sample editor background'},
  col_smp_bg_sel: {hex: 'ffff00', name: 'Sample editor background (selection)'},
  col_smp_waveform: {hex: 'ff9c00', name: 'Sample editor waveform'},
  col_smp_waveform_sel:
      {hex: '000000', name: 'Sample editor waveform (selection)'},
  col_pv_bg: {hex: '20317b', name: 'Pattern - background'},
  col_pv_chn: {hex: '8394c5', name: 'Pattern - channel number'},
  col_pv_lines: {hex: '8394c5', name: 'Pattern - lines'},
  col_pv_sublines: {hex: '394a8b', name: 'Pattern - sublines'},
  col_pv_lines_record: {hex: 'ff9400', name: 'Pattern - lines (recording)'},
  col_pv_cb_col1: {hex: '4a5a8b', name: 'Pattern - cursor bar gradient 1'},
  col_pv_cb_col2: {hex: '8394c5', name: 'Pattern - cursor bar gradient 2'},
  col_pv_cb_col1_highlight:
      {hex: 'e67b00', name: 'Pattern - cursor bar gradient 1 (highlight)'},
  col_pv_cb_col2_highlight:
      {hex: 'e6e600', name: 'Pattern - cursor bar gradient 2 (highlight)'},
  col_pv_left_numbers: {hex: 'e67b00', name: 'Pattern - row numbers'},
  col_pv_notes: {hex: '4a7bff', name: 'Pattern - notes'},
  col_pv_notes_dark: {hex: '0031d5', name: 'Pattern - notes (dark)'},
  col_pv_instr: {hex: 'ff5a00', name: 'Pattern - instruments'},
  col_pv_instr_dark: {hex: 'a43100', name: 'Pattern - instruments (dark)'},
  col_pv_volume: {hex: '00de00', name: 'Pattern - volume'},
  col_pv_volume_dark: {hex: '008300', name: 'Pattern - volume (dark)'},
  col_pv_effect: {hex: 'ff62ee', name: 'Pattern - effect command'},
  col_pv_effect_dark: {hex: '623194', name: 'Pattern - effect command (dark)'},
  col_pv_effect_param: {hex: 'f6d541', name: 'Pattern - effect parameter'},
  col_pv_effect_param_dark:
      {hex: '4a4129', name: 'Pattern - effect parameter (dark)'},
  col_pv_cb_sel_highlight: {hex: 'ffc500', name: 'Pattern - selection'},
  col_pv_pb: {hex: '000000', name: 'Pattern - row outline'},
  col_pv_pb_cell: {hex: '000000', name: 'Pattern - cursor outline'},
  col_pv_mutesolo_text: {hex: '000000', name: 'Pattern - mute/solo text color'},
  col_pv_mutesolo_col1: {hex: '4a5a8b', name: 'Pattern - mute/solo gradient 1'},
  col_pv_mutesolo_col2: {hex: '8394c5', name: 'Pattern - mute/solo gradient 2'},
  col_pv_mutesolo_col1_highlight:
      {hex: 'e67b00', name: 'Pattern - mute/solo gradient 1 (highlight)'},
  col_pv_mutesolo_col2_highlight:
      {hex: 'e6e600', name: 'Pattern - mute/solo gradient 2 (highlight)'},
  col_pv_left_numbers_highlight:
      {hex: 'e67b00', name: 'Pattern - row numbers (highlight)'},
  col_list_sep_vertical:
      {hex: 'ffff00', name: 'List item separator line (vertical)'},
  col_tb_bg: {hex: 'ff9400', name: 'Togglebutton background'},
  col_tb_fg_off: {hex: '000000', name: 'Togglebutton foreground (off)'},
  col_tb_fg_on: {hex: 'ffff00', name: 'Togglebutton foreground (on)'},
};

const cols_ordered = Object.keys(colscheme);

let base_colours = {};
let colours = {};
let lockcols = false;
let active = null;
let hue = 0;
let sat = 1;
let lit = 0.5;

const inp = document.getElementById('input');
const parseres = document.getElementById('parseres');
const swatch_list = document.getElementById('swatches');
const load_btn = document.getElementById('load-btn');

const spec_canvas = document.getElementById('spectrum-canvas');
const spec_ctx = spec_canvas.getContext('2d');
const spec_cursor = document.getElementById('spectrum-cursor');

const hue_canvas = document.getElementById('hue-canvas');
const hue_ctx = hue_canvas.getContext('2d');
const hue_cursor = document.getElementById('hue-cursor');

const prev_canvas = document.getElementById('preview-canvas');
const fb_sub = prev_canvas.getContext('2d');
const prev_canvas_main = document.getElementById('preview-canvas-main');
const fb_main = prev_canvas_main.getContext('2d');
// const prev_canvas_samp = document.getElementById('preview-canvas-samp');
// const fb_sub_samped = prev_canvas_samp.getContext('2d');
fb_sub.imageSmoothingEnabled = false;
fb_main.imageSmoothingEnabled = false;

let font_img = new Image();
let font_loaded = false;
font_img.onload = () => {
  font_loaded = true;
  redraw();
};
font_img.src = 'font_8x11.png';

let icons_loaded = 0;
const icons = {};
['icon_song', 'icon_disk', 'icon_sample', 'icon_trumpet', 'icon_wrench',
 'icon_play', 'icon_pause', 'icon_stop', 'icon_flp', 'icon_undo', 'icon_redo',
 'haken', 'icon_record']
    .forEach(name => {
      const img = new Image();
      img.onload = () => {
        const c = document.createElement('canvas');
        c.width = img.width;
        c.height = img.height;
        const ctx = c.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const d = ctx.getImageData(0, 0, img.width, img.height).data;
        const bits = [];
        for (let i = 0; i < d.length; i += 4) {
          bits.push(d[i] < 128 ? 1 : 0);
        }
        icons[name] = {w: img.width, h: img.height, bits};
        icons_loaded++;
        redraw();
      };
      img.src = name + '.png';
    });

let piano_img = new Image();
let piano_loaded = false;
piano_img.onload = () => {
  piano_loaded = true;
  redraw();
};
piano_img.src = 'piano.png';

let logo_img = new Image();
let logo_loaded = false;
logo_img.onload = () => {
  logo_loaded = true;
  redraw();
};
logo_img.src = 'logo.png';

let font_3x5_img = new Image();
let font_3x5_loaded = false;
font_3x5_img.onload = () => {
  font_3x5_loaded = true;
  redraw();
};
font_3x5_img.src = 'font_3x5.png';


fb_main.imageSmoothingEnabled = false;

const pv_char_w = 4;
const pv_char_h = 8;
const pv_cell_h = 8;
const pv_border_w = 10;
const pv_cols = 4;
const pv_rows = 0x40;
const pv_cursorbar_y = 88;
const pv_cellw = 32;

let sel_x1 = 0, sel_y1 = 0, sel_x2 = 0, sel_y2 = 0;

// map ascii to tiles in font_8x11
// otherwise render ascii 64 '?' for unknown
const font_index = [
  64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64,
  64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 92, 63, 62, 69, 86, 70,
  71, 84, 72, 73, 67, 65, 74, 66, 75, 79, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 81, 87, 76, 77, 78, 64, 64, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 82, 80, 83, 90,
  68, 64, 0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24, 25, 88, 64, 89, 91, 64, 64, 64, 64, 64, 64,
  64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64,
  64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64,
  64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64,
  64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64,
  64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64,
  64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64,
  64, 64, 64, 64, 64, 64, 64, 64, 64
];
const font_widths = [
  6, 6, 6, 6, 6, 4, 6, 6, 2, 4, 6, 2, 8, 6, 6, 6, 6, 4, 6, 4, 6, 7, 8, 7,
  6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 2, 7, 7, 7, 8, 8, 7, 7, 7, 7, 7, 8, 7, 7,
  8, 8, 8, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 2, 7, 6, 5, 6, 6, 7, 7, 7,
  4, 4, 3, 2, 4, 4, 4, 4, 5, 2, 4, 4, 3, 6, 6, 3, 4, 4, 6, 8, 3
];

// randomise the memory bar on page load
const mem_use = Math.floor(Math.random() * 100) + 1;
const scalexy = 2;

sel_x1 = Math.floor(Math.random() * pv_cols);
sel_y1 = Math.floor(Math.random() * 10);
sel_x2 = sel_x1 + 1 + Math.floor(Math.random() * (pv_cols - sel_x1));
sel_y2 = sel_y1 + 1 + Math.floor(Math.random() * 5);

const vis_rows = Math.floor(192 / pv_cell_h);
const cursor_pos = Math.floor(vis_rows / 2) - 1;
const firstrow = 5 - cursor_pos;

const sel_sx1 = pv_border_w + (sel_x1 - 0) * pv_cellw;
const sel_sx2 = sel_sx1 + (sel_x2 - sel_x1) * pv_cellw;
const sel_sy1 = (sel_y1 - firstrow) * pv_cell_h;
const sel_sy2 = sel_sy1 + (sel_y2 - sel_y1) * pv_cell_h;
const effective_width = pv_border_w + pv_cols * pv_cellw;
// if the lck checkbox is checked them
// modifying one of these colours also
// changes the other
const tobkitSimilarCols = {
  col_light_ctrl_disabled: 'col_light_bg',
  col_dark_ctrl_disabled: 'col_medium_bg',
  col_selected_tab: 'col_light_bg',
  col_unselected_tab: 'col_medium_bg',
  col_list_1: 'col_medium_bg',
  col_list_2: 'col_light_bg',
  col_scrollbar_bg1: 'col_medium_bg',
  col_scrollbar_bg2: 'col_light_bg',
  col_scrollbar_inactive: 'col_dark_ctrl',
  col_scrollbar_active: 'col_light_ctrl',
  col_scrollbar_arr_bg1: 'col_dark_ctrl',
  col_scrollbar_arr_bg2: 'col_light_ctrl',
  col_tab_outline: 'col_outline',
  col_icon_tab: 'col_icon',
  col_env_bg: 'col_bg',
  col_env_line: 'col_dark_ctrl',
  col_env_pt: 'col_light_ctrl',
  col_env_pt_border: 'col_outline',
  col_env_pt_border_active: 'col_signal',
  col_smp_bg: 'col_bg',
  col_smp_bg_sel: 'col_light_ctrl',
  col_pv_bg: 'col_bg',
  col_pv_lines: 'col_light_bg',
  col_pv_lines_record: 'col_dark_ctrl',
  col_pv_cb_col1: 'col_medium_bg',
  col_pv_cb_col2: 'col_light_bg',
  col_pv_cb_col1_highlight: 'col_list_highlight1',
  col_pv_cb_col2_highlight: 'col_list_highlight2',
  col_pv_left_numbers: 'col_list_highlight1',
  col_pv_pb: 'col_outline',
  col_pv_pb_cell: 'col_outline',
  col_pv_mutesolo_col1: 'col_medium_bg',
  col_pv_mutesolo_col2: 'col_light_bg',
  col_pv_mutesolo_col1_highlight: 'col_list_highlight1',
  col_pv_mutesolo_col2_highlight: 'col_list_highlight2',
  col_list_sep_vertical: 'col_sepline',
  col_tb_bg: 'col_dark_ctrl',
  col_tb_fg_off: 'col_text_bt',
  col_tb_fg_on: 'col_light_ctrl'
};

function updateColsFrom(changed_key) {
  if (!lockcols) return;

  for (const [dep_key, source_key] of Object.entries(tobkitSimilarCols)) {
    if (source_key == changed_key) {
      colours[dep_key] = colours[changed_key];
      const idx = cols_ordered.indexOf(dep_key);
      if (idx >= 0) update_swatch(idx);
    }
  }

  for (const [dep_key, source_key] of Object.entries(tobkitSimilarCols)) {
    if (dep_key == changed_key && colours[source_key]) {
      colours[changed_key] = colours[source_key];
      const idx = cols_ordered.indexOf(changed_key);
      if (idx >= 0) update_swatch(idx);
    }
  }
}

function stringToRGB15(hex) {
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return ((b >> 3) << 10) | ((g >> 3) << 5) | (r >> 3) | 0x8000;
}

// tobkit drawing functions
function interpolateColor(c1, c2, alpha) {
  return (((((c1 & 0x1f) - (c2 & 0x1f)) * alpha) + ((c2 & 0x1f) << 12)) >> 12) |
      ((((((c1 >> 5) & 0x1f) - ((c2 >> 5) & 0x1f)) * alpha) +
        (((c2 >> 5) & 0x1f) << 12)) >>
       12)
      << 5 |
      ((((((c1 >> 10) & 0x1f) - ((c2 >> 10) & 0x1f)) * alpha) +
        (((c2 >> 10) & 0x1f) << 12)) >>
       12)
      << 10 |
      0x8000;
}


function drawPixel(x, y, col, __canvas__) {
  const r = (col & 0x1f) * 255 / 31;
  const g = ((col >> 5) & 0x1f) * 255 / 31;
  const b = ((col >> 10) & 0x1f) * 255 / 31;
  __canvas__.fillStyle = `rgb(${r},${g},${b})`;
  __canvas__.fillRect(x * scalexy, y * scalexy, scalexy, scalexy);
}

function drawFullBox(x, y, w, h, col, __canvas__) {
  const r = (col & 0x1f) * 255 / 31;
  const g = ((col >> 5) & 0x1f) * 255 / 31;
  const b = ((col >> 10) & 0x1f) * 255 / 31;
  __canvas__.fillStyle = `rgb(${r},${g},${b})`;
  __canvas__.fillRect(x * scalexy, y * scalexy, w * scalexy, h * scalexy);
}

function drawGradient(x, y, w, h, c1, c2, __canvas__) {
  if (c1 == c2) {
    drawFullBox(x, y, w, h, c1, __canvas__);
    return;
  }
  const step = Math.floor(4096 / h);
  let pos = 0;
  for (let j = 0; j < h; j++, pos += step) {
    const col = interpolateColor(c1, c2, pos);
    const r = (col & 0x1f) * 255 / 31;
    const g = ((col >> 5) & 0x1f) * 255 / 31;
    const b = ((col >> 10) & 0x1f) * 255 / 31;
    __canvas__.fillStyle = `rgb(${r},${g},${b})`;
    __canvas__.fillRect(
        x * scalexy, (y + j) * scalexy, w * scalexy, 1 * scalexy);
  }
}

function drawBorder(x, y, w, h, col, __canvas__) {
  drawFullBox(x, y, w, 1, col, __canvas__);
  drawFullBox(x, y + h - 1, w, 1, col, __canvas__);
  drawFullBox(x, y, 1, h, col, __canvas__);
  drawFullBox(x + w - 1, y, 1, h, col, __canvas__);
}

function drawHLine(x, y, w, col, __canvas__) {
  drawFullBox(x, y, w, 1, col, __canvas__);
}

function drawVLine(x, y, h, col, __canvas__) {
  drawFullBox(x, y, 1, h, col, __canvas__);
}

function drawString(str, x, y, col, maxw, maxh, __canvas__) {
  if (!font_loaded) return;
  const font_canvas = document.createElement('canvas');
  font_canvas.width = font_img.width;
  font_canvas.height = font_img.height;
  const font_ctx = font_canvas.getContext('2d');
  font_ctx.drawImage(font_img, 0, 0);
  const font_data =
      font_ctx.getImageData(0, 0, font_img.width, font_img.height).data;

  let drawpos = 0;
  for (let c of str) {
    const code = c.charCodeAt(0);
    const idx = font_index[code];
    const w = font_widths[idx];
    if (maxw && drawpos + w > maxw) break;
    const h = maxh ? Math.min(11, maxh) : 11;
    for (let j = 0; j < h; j++) {
      for (let i = 0; i < 8; i++) {
        const px = idx * 8 + i;
        const py = j;
        if (px < font_img.width && py < font_img.height) {
          const didx = (py * font_img.width + px) * 4;
          if (font_data[didx] < 128) {
            drawPixel(x + drawpos + i, y + j, col, __canvas__);
          }
        }
      }
    }
    drawpos += w + 1;
  }
}

function drawMonochromeIcon(x, y, w, h, name, col, __canvas__) {
  const icon = icons[name];
  let pixelidx = 0;
  for (let j = 0; j < h; j++) {
    for (let i = 0; i < w; i++, pixelidx++) {
      if (icon.bits[pixelidx]) {
        drawPixel(x + i, y + j, col, __canvas__);
      }
    }
  }
}


// pv notes
function drawMiniChar(c, cx, cy, col, ctx_main) {
  const font_3x5_raw = [
    0x92, 0xD6, 0xFB, 0xBF, 0xE6, 0xFD, 0xAE, 0xDE, 0x74, 0x9A, 0xE6,
    0xB7, 0x6D, 0x0F, 0x14, 0x5D, 0xD9, 0x84, 0x6D, 0x9B, 0x26, 0xA9,
    0xD4, 0xBC, 0x6D, 0x1B, 0xB5, 0x6D, 0x09, 0x1C, 0x15, 0xF5, 0x5D,
    0xFF, 0x97, 0x6E, 0xBD, 0xB4, 0xBC, 0x5D, 0x27, 0xB5, 0x97, 0xA4,
    0x17, 0x95, 0x48, 0x56, 0x65, 0x9B, 0x26, 0xAD, 0xD4, 0xB4, 0xCD,
    0x4A, 0xF5, 0xAF, 0x02, 0x1C, 0xFA, 0xC7, 0x3D, 0x5F, 0xE7, 0x3D,
    0xAE, 0xD2, 0xB7, 0x8A, 0x3B, 0x59, 0xAD, 0x0E, 0x14
  ];

  const GLYPH_3X5_COUNT = 40;
  const r = (col & 0x1f) * 255 / 31;
  const g = ((col >> 5) & 0x1f) * 255 / 31;
  const b = ((col >> 10) & 0x1f) * 255 / 31;
  ctx_main.fillStyle = `rgb(${r},${g},${b})`;

  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 3; i++) {
      const pixelidx = 3 * GLYPH_3X5_COUNT * j + 3 * c + i;
      if (font_3x5_raw[Math.floor(pixelidx / 8)] & (1 << (pixelidx % 8))) {
        ctx_main.fillRect(
            (cx + i) * scalexy, (cy + j) * scalexy, scalexy, scalexy);
      }
    }
  }
}

function drawHexByte(byte, cx, cy, col, ctx_main) {
  drawMiniChar(Math.floor(byte / 16), cx, cy, col, ctx_main);
  drawMiniChar(byte % 16, cx + pv_char_w, cy, col, ctx_main);
}

function drawSampleDisplay(x, y, width, height, __canvas__) {
  const col_s_bg = stringToRGB15(colours.col_smp_bg);
  const col_s_bg_s = stringToRGB15(colours.col_smp_bg_sel);
  const col_s_w = stringToRGB15(colours.col_smp_waveform);
  const col_s_w_s = stringToRGB15(colours.col_smp_waveform_sel);
  const col_signal = stringToRGB15(colours.col_signal);
  const cscrollarr2 = stringToRGB15(colours.col_scrollbar_arr_bg2);
  const cscrollarr1 = stringToRGB15(colours.col_scrollbar_arr_bg1);

  drawFullBox(1, 1, width - 2, height - 2, col_s_bg, __canvas__);
  drawBorder(x, y, width, height, col_signal, __canvas__);
  drawGradient(width-9, height-SCROLLBAR_WIDTH+1, 8, 8, cscrollarr2, cscrollarr1);
  // TODO FINISH THIS
}
// void SampleDisplay::draw(void)
// {
// 	if(!isExposed())
// 		return;

// 	//
// 	// Border and background
// 	//
// 	drawFullBox(1, 1, width - 2, height - 2, theme->col_smp_bg);
	
// 	if(active==false) {
// 		drawBorder(theme->col_outline);
// 	} else {
// 		drawBorder(theme->col_signal);
// 	}

// 	// Now comes sample-dependant stuff, so return if we have no sample
// 	if((smp==0)||(smp->getNSamples()==0)) return;

// 	//
// 	// Selection
// 	//
// 	s32 selleft = 0;
// 	s32 selwidth = 0;
// 	s32 selright = 0;

// 	if(selection_exists) {
// 		selleft = sampleToPixel(std::min(selstart, selend));
// 		selright = sampleToPixel(std::max(selstart, selend));
// 		bool dontdraw = false;

// 		if (selleft < 1) selleft = 1;
// 		else if (selleft > (width-1)) dontdraw = true;

// 		if (selright > width-1) selright = width-1;
// 		else if (selright < 1) dontdraw = true;

// 		selwidth = selright - selleft;
// 		if(!dontdraw) {
// 			drawFullBox(selleft, 1, selwidth, DRAW_HEIGHT+1, theme->col_smp_bg_sel);
// 		}
// 	}

// 	//
// 	// Scrollbar
// 	//

// 	// Right Button
// 	if(pen_on_scroll_right) {
// 		drawGradient(theme->col_scrollbar_arr_bg1, theme->col_scrollbar_arr_bg2, width-9, height-SCROLLBAR_WIDTH+1, 8, 8);
// 	} else {
// 		drawGradient(theme->col_scrollbar_arr_bg2, theme->col_scrollbar_arr_bg1, width-9, height-SCROLLBAR_WIDTH+1, 8, 8);
// 	}

// 	// This draws the right-arrow
// 	s8 j, p;
// 	for(j=0;j<3;j++) {
// 		for(p=-j;p<=j;++p) {
// 			*(*vram+SCREEN_WIDTH*(y+height-SCROLLBAR_WIDTH+4+p)+x+width-j-3) = theme->col_icon_bt;
// 		}
// 	}

// 	drawBox(width-SCROLLBAR_WIDTH, height-SCROLLBUTTON_HEIGHT, 9, 9, theme->col_outline);

// 	// Left Button
// 	if(pen_on_scroll_left) {
// 		drawGradient(theme->col_scrollbar_arr_bg1, theme->col_scrollbar_arr_bg2, 1, height-9, 8, 8);
// 	} else {
// 		drawGradient(theme->col_scrollbar_arr_bg2, theme->col_scrollbar_arr_bg1, 1, height-9, 8, 8);
// 	}

// 	// This draws the down-arrow
// 	for(j=2;j>=0;j--) {
// 		for(p=-j;p<=j;++p) {
// 			*(*vram+SCREEN_WIDTH*(y+height-SCROLLBAR_WIDTH+4+p)+x+j+3) = theme->col_icon_bt;
// 		}
// 	}

// 	drawBox(0, height-9, 9, 9, theme->col_outline);


// 	drawBox(0, height-SCROLLBAR_WIDTH, width, SCROLLBAR_WIDTH, theme->col_outline);

// 	// Clear Scrollbar
// 	drawGradient(theme->col_scrollbar_bg1, theme->col_scrollbar_bg2, SCROLLBUTTON_HEIGHT, height-SCROLLBAR_WIDTH+1, width-2*SCROLLBUTTON_HEIGHT, SCROLLBAR_WIDTH-2);

// 	// The scroll thingy
// 	if(pen_on_scrollthingy) {
// 		drawFullBox(SCROLLBUTTON_HEIGHT+scrollthingypos, height-SCROLLBAR_WIDTH+1, scrollthingywidth-2, SCROLLBAR_WIDTH-2, theme->col_scrollbar_active);
// 	} else {
// 		drawFullBox(SCROLLBUTTON_HEIGHT+scrollthingypos, height-SCROLLBAR_WIDTH+1, scrollthingywidth-2, SCROLLBAR_WIDTH-2, theme->col_scrollbar_inactive);
// 	}

// 	drawBox(SCROLLBUTTON_HEIGHT-1+scrollthingypos, height-SCROLLBAR_WIDTH, scrollthingywidth, SCROLLBAR_WIDTH, theme->col_outline);

// 	//
// 	// Sample
// 	//

// 	u16 colortable[DRAW_HEIGHT+2];
// 	u16 colortable_selected[DRAW_HEIGHT+2];
// 	for(s32 i=0; i<DRAW_HEIGHT+2; i++) {
// 		// colortable[i] = interpolateColor(theme->col_light_ctrl, theme->col_dark_ctrl, i<<4);
// 		colortable[i] = theme->col_smp_waveform;
// 		//colortable_selected[i] = ((colortable[i] >> 2) & 0x1CE7) | 0x8000;
// 		colortable_selected[i] = theme->col_smp_waveform_sel;
// 	}

// 	int32 step = divf32(inttof32(smp->getNSamples() >> zoom_level), inttof32(width-2));
// 	int32 pos = 0;

// 	u32 renderwindow = (u32)std::max(1, std::min(100, (int) ceil_f32toint(step)));

// 	u16 middle = (DRAW_HEIGHT+2)/2;//-1;

// 	s32 lastmax=0, lastmin=0;
// 	if(smp->is16bit() == true) {

// 		s16 *data;
// 		s16 *base = (s16*)smp->getData() + pixelToSample(0);

// 		for(s32 i=1; i<s32(width-1); ++i)
// 		{
// 			u16 *colortable_current = (selection_exists && i >= selleft && i < selright) ? colortable_selected : colortable;
// 			data = &(base[f32toint(pos)]);

// 			s32 maxsmp = -32767, minsmp = 32767;

// 			for(u32 j=0;j<renderwindow;++j) {
// 				if(*data > maxsmp) maxsmp = *data;
// 				if(*data < minsmp) minsmp = *data;
// 				data++;
// 			}

// 			s32 maxy = div32((DRAW_HEIGHT+2) * maxsmp, 2 * 32767);
// 			s32 miny = div32((DRAW_HEIGHT+2) * minsmp, 2 * 32767);

// 			if(i>1) {
// 				if(lastmin > maxy) maxy = lastmin;
// 				if(lastmax < miny) miny = lastmax;
// 			}

// 			for(s16 j=miny; j<=maxy; ++j) (*vram)[SCREEN_WIDTH*(y+middle-j)+x+i] = colortable_current[middle-j];

// 			lastmax = maxy;
// 			lastmin = miny;

// 			*(*vram+SCREEN_WIDTH*(y+middle)+x+i) = colortable_current[middle];

// 			pos += step;
// 		}

// 	} else {

// 		s8 *data;
// 		s8 *base = (s8*)smp->getData() + pixelToSample(0);

// 		for(s32 i=1; i<s32(width-1); ++i)
// 		{
// 			u16 *colortable_current = (selection_exists && i >= selleft && i < selright) ? colortable_selected : colortable;
// 			data = &(base[f32toint(pos)]);

// 			s8 maxsmp = -127, minsmp = 127;

// 			for(u32 j=0;j<renderwindow;++j) {
// 				if(*data > maxsmp) maxsmp = *data;
// 				if(*data < minsmp) minsmp = *data;
// 				data++;
// 			}

// 			s8 maxy = div32((DRAW_HEIGHT+2) * maxsmp, 2 * 127);
// 			s8 miny = div32((DRAW_HEIGHT+2) * minsmp, 2 * 127);

// 			if(i>1) {
// 				if(lastmin > maxy) maxy = lastmin;
// 				if(lastmax < miny) miny = lastmax;
// 			}

// 			for(s16 j=miny; j<=maxy; ++j) (*vram)[SCREEN_WIDTH*(y+middle-j)+x+i] = colortable_current[middle-j];

// 			lastmax = maxy;
// 			lastmin = miny;

// 			*(*vram+SCREEN_WIDTH*(y+middle)+x+i) = colortable_current[middle];

// 			pos += step;
// 		}

// 	}

// 	//
// 	// Loop Points
// 	//
// 	if( (loop_points_visible) && (smp->getLoop() != NO_LOOP) && !draw_mode )
// 	{
// 		s32 loop_start_pos = sampleToPixel(smp->getLoopStart());
// 		s32 loop_end_pos   = sampleToPixel(smp->getLoopStart() + smp->getLoopLength());

// 		// Loop Start

// 		if( (loop_start_pos >= 0) && (loop_start_pos <= width-2) ) {
// 			// Line
// 			for(u8 i=1; i<DRAW_HEIGHT+1; ++i)
// 				*(*vram+SCREEN_WIDTH*(y+i)+x+loop_start_pos) = theme->col_loop;

// 			/* unused
// 			u8 cutoff = 0;
// 			if(loop_start_pos < 1+LOOP_TRIANGLE_SIZE)
// 				cutoff = 1+LOOP_TRIANGLE_SIZE - loop_start_pos;
// 			*/

// 			// Left Triangle
// 			if(loop_start_pos > 1 + LOOP_TRIANGLE_SIZE)
// 			{
// 				drawHLine(loop_start_pos-2, DRAW_HEIGHT+1-LOOP_TRIANGLE_SIZE, 2, theme->col_outline);

// 				for(u8 i=0; i<LOOP_TRIANGLE_SIZE-2; ++i)
// 				{
// 					drawHLine(loop_start_pos-i-2, DRAW_HEIGHT+2-LOOP_TRIANGLE_SIZE+i, i+2, theme->col_loop);
// 					drawPixel(loop_start_pos-i-3, DRAW_HEIGHT+2-LOOP_TRIANGLE_SIZE+i, theme->col_outline);
// 				}

// 				drawHLine(loop_start_pos-LOOP_TRIANGLE_SIZE+1, DRAW_HEIGHT, LOOP_TRIANGLE_SIZE-1,
// 					theme->col_loop);
// 				drawPixel(loop_start_pos-LOOP_TRIANGLE_SIZE, DRAW_HEIGHT, theme->col_outline);
// 			}

// 			// Right Triangle
// 			if(loop_start_pos < width - 2 - LOOP_TRIANGLE_SIZE)
// 			{
// 				drawHLine(loop_start_pos+1, DRAW_HEIGHT+1-LOOP_TRIANGLE_SIZE, 2, theme->col_outline);
// 				for(u8 i=0; i<LOOP_TRIANGLE_SIZE-2; ++i) {
// 					drawHLine(loop_start_pos+1, DRAW_HEIGHT+2-LOOP_TRIANGLE_SIZE+i, 2+i, theme->col_loop);
// 					drawPixel(loop_start_pos+3+i, DRAW_HEIGHT+2-LOOP_TRIANGLE_SIZE+i, theme->col_outline);
// 				}
// 				drawHLine(loop_start_pos+1, DRAW_HEIGHT-LOOP_TRIANGLE_SIZE+LOOP_TRIANGLE_SIZE, LOOP_TRIANGLE_SIZE-1,
// 					theme->col_loop);
// 				drawPixel(loop_start_pos+LOOP_TRIANGLE_SIZE, DRAW_HEIGHT, theme->col_outline);
// 			}
// 		}

// 		// Loop End

// 		if( (loop_end_pos >= 0) && (loop_end_pos <= width-2) ) {
// 			// Line
// 			for(u8 i=1; i<DRAW_HEIGHT+1; ++i)
// 				*(*vram+SCREEN_WIDTH*(y+i)+x+loop_end_pos) = theme->col_loop;

// 			// Left Triangle
// 			if(loop_end_pos > 1 + LOOP_TRIANGLE_SIZE)
// 			{
// 				drawHLine(loop_end_pos-LOOP_TRIANGLE_SIZE+1, 1, LOOP_TRIANGLE_SIZE-1,
// 					theme->col_loop);
// 				drawPixel(loop_end_pos-LOOP_TRIANGLE_SIZE, 1, theme->col_outline);

// 				for(u8 i=0; i<LOOP_TRIANGLE_SIZE-2; ++i)
// 				{
// 					drawHLine(loop_end_pos-LOOP_TRIANGLE_SIZE+i+1, 2+i, LOOP_TRIANGLE_SIZE-i-1, theme->col_loop);
// 					drawPixel(loop_end_pos-1-LOOP_TRIANGLE_SIZE+i+1, 2+i, theme->col_outline);
// 				}

// 				drawHLine(loop_end_pos-2, LOOP_TRIANGLE_SIZE, 2, theme->col_outline);
// 			}

// 			// Right Triangle
// 			if(loop_end_pos < width-1-LOOP_TRIANGLE_SIZE)
// 			{
// 				drawHLine(loop_end_pos+1, 1, LOOP_TRIANGLE_SIZE-1, theme->col_loop);
// 				drawPixel(loop_end_pos+LOOP_TRIANGLE_SIZE, 1, theme->col_outline);

// 				for(u8 i=0; i<LOOP_TRIANGLE_SIZE-2; ++i)
// 				{
// 					drawHLine(loop_end_pos+1, 2+i, LOOP_TRIANGLE_SIZE-i-1, theme->col_loop);
// 					drawPixel(loop_end_pos+LOOP_TRIANGLE_SIZE-i, 2+i, theme->col_outline);
// 				}

// 				drawHLine(loop_end_pos+1, LOOP_TRIANGLE_SIZE, 2, theme->col_outline);
// 			}
// 		}
// 	}

// 	//
// 	// Zoom buttons
// 	//

// 	if(!draw_mode) {
// 		// Outlines
// 		drawHLine(2, 1, 7, theme->col_light_bg);
// 		drawHLine(10, 1, 7, theme->col_light_bg);

// 		drawHLine(2, 9, 7, theme->col_light_bg);
// 		drawHLine(10, 9, 7, theme->col_light_bg);

// 		drawVLine(1, 2, 7, theme->col_light_bg);
// 		drawVLine(9, 2, 7, theme->col_light_bg);
// 		drawVLine(17, 2, 7, theme->col_light_bg);

// 		// +
// 		if(pen_on_zoom_in) {
// 			drawFullBox(2, 2, 7, 7, theme->col_light_bg);
// 			drawHLine(3, 5, 5, theme->col_smp_bg);
// 			drawVLine(5, 3, 5, theme->col_smp_bg);
// 		} else {
// 			drawHLine(3, 5, 5, theme->col_light_bg);
// 			drawVLine(5, 3, 5, theme->col_light_bg);
// 		}

// 		// -
// 		if(pen_on_zoom_out) {
// 			drawFullBox(10, 2, 7, 7, theme->col_light_bg);
// 			drawHLine(11, 5, 5, theme->col_smp_bg);
// 		} else {
// 			drawHLine(11, 5, 5, theme->col_light_bg);
// 		}
// 	}
// }

function drawCell(cellx, celly, px, py, dark, ctx_main) {
  const notecol = dark ? stringToRGB15(colours.col_pv_notes_dark) :
                         stringToRGB15(colours.col_pv_notes);
  const instrcol = dark ? stringToRGB15(colours.col_pv_instr_dark) :
                          stringToRGB15(colours.col_pv_instr);
  const volumecol = dark ? stringToRGB15(colours.col_pv_volume_dark) :
                           stringToRGB15(colours.col_pv_volume);

  const realx = pv_border_w + 1 + px * pv_cellw;
  const realy = 2 + py * pv_char_h;

  const note = Math.floor(Math.random() * 96);
  const instr = Math.floor(Math.random() * 128);
  const vol = Math.floor(Math.random() * 128);
  const notes_chars = [12, 12, 13, 13, 14, 15, 15, 16, 16, 10, 10, 17];
  const notes_signs = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0];
  const MINUS = 37;
  const SHARP = 38;

  if (Math.random() > 0.3) {
    drawMiniChar(notes_chars[note % 12], realx, realy, notecol, ctx_main);
    if (notes_signs[note % 12]) {
      drawMiniChar(SHARP, realx + pv_char_w, realy, notecol, ctx_main);
    } else {
      drawMiniChar(MINUS, realx + pv_char_w, realy, notecol, ctx_main);
    }
    drawMiniChar(
        Math.floor(note / 12), realx + 2 * pv_char_w, realy, notecol, ctx_main);
  }

  if (Math.random() > 0.5) {
    drawHexByte(
        instr + 1, realx + 3 * pv_char_w + 1, realy, instrcol, ctx_main);
  }

  if (Math.random() > 0.5) {
    drawHexByte(vol, realx + 5 * pv_char_w + 2, realy, volumecol, ctx_main);
  }
}

// NitrousTracker logo
function drawGradientIcon(x, y, w, h, img, __canvas__) {
  if (!logo_loaded) return;
  const c1 = stringToRGB15(colours.col_light_ctrl);
  const c2 = stringToRGB15(colours.col_dark_ctrl);
  const outline = stringToRGB15(colours.col_outline);

  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, img.width, img.height).data;

  for (let j = 0; j < h && j < img.height; j++) {
    const alpha = Math.floor((j / h) * 4096);
    const col = interpolateColor(c1, c2, alpha);
    for (let i = 0; i < w && i < img.width; i++) {
      const idx = (j * img.width + i) * 4;
      const r = data[idx], g = data[idx + 1], b = data[idx + 2];
      if (r > 128 && g < 128 && b > 128) continue;
      if (r < 128 && g < 128 && b < 128) {
        drawPixel(x + i, y + j, outline, __canvas__);
      } else {
        drawPixel(x + i, y + j, col, __canvas__);
      }
    }
  }
}

// just draw the piano as a bitmap since
// it can't be themed anyway
function drawPiano(x, y, w, h, __canvas__) {
  if (!piano_loaded) return;
  const canvas = document.createElement('canvas');
  canvas.width = piano_img.width;
  canvas.height = piano_img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(piano_img, 0, 0);
  const data = ctx.getImageData(0, 0, piano_img.width, piano_img.height).data;

  for (let j = 0; j < h && j < piano_img.height; j++) {
    for (let i = 0; i < w && i < piano_img.width; i++) {
      const idx = (j * piano_img.width + i) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const col = ((b >> 3) << 10) | ((g >> 3) << 5) | (r >> 3) | 0x8000;
      drawPixel(x + i, y + j, col, __canvas__);
    }
  }
}

function drawButton(x, y, w, h, caption, down, __canvas__) {
  const c1 = stringToRGB15(colours.col_light_ctrl);
  const c2 = stringToRGB15(colours.col_dark_ctrl);
  const outline = stringToRGB15(colours.col_outline);
  const text = stringToRGB15(colours.col_text_bt);

  if (down)
    drawGradient(x + 1, y + 1, w - 2, h - 2, c1, c2, __canvas__);
  else
    drawGradient(x + 1, y + 1, w - 2, h - 2, c2, c1, __canvas__);

  drawBorder(x, y, w, h, outline, __canvas__);

  let tw = 0;
  for (let c of caption) {
    const code = c.charCodeAt(0);
    const idx = font_index[code];
    tw += font_widths[idx] + 1;
  }
  tw -= 1;
  drawString(
      caption, x + (w - tw) / 2 | 0, y + h / 2 - 5 | 0, text, 255, 255,
      __canvas__);
}

function drawBitButton(x, y, w, h, im, down, bh, bw, bx, by, __canvas__) {
  const c1 = stringToRGB15(colours.col_light_ctrl);
  const c2 = stringToRGB15(colours.col_dark_ctrl);
  const c1d = stringToRGB15(colours.col_light_ctrl_disabled);
  const c2d = stringToRGB15(colours.col_dark_ctrl_disabled);
  const outline = stringToRGB15(colours.col_outline);
  const icon_col = stringToRGB15(colours.col_icon);

  if (Math.random() <= 0.5) {
    if (down)
      drawGradient(x + 1, y + 1, w - 2, h - 2, c1, c2, __canvas__);
    else
      drawGradient(x + 1, y + 1, w - 2, h - 2, c2, c1, __canvas__);

  } else {
    drawGradient(x + 1, y + 1, w - 2, h - 2, c2d, c1d, __canvas__);
  }
  drawBorder(x, y, w, h, outline, __canvas__);
  drawMonochromeIcon(x + bx, y + by, bw, bh, im, icon_col, __canvas__);
}

function drawCheckbox(x, y, w, h, caption, checked, albino, __canvas__) {
  const c1 = stringToRGB15(colours.col_light_ctrl);
  const c2 = stringToRGB15(colours.col_dark_ctrl);
  const outline = stringToRGB15(colours.col_outline);
  const text = stringToRGB15(colours.col_text);
  const check_col = stringToRGB15(colours.col_checkmark);

  if (!albino) {
    drawFullBox(x, y, 11, 1, stringToRGB15(colours.col_light_bg), __canvas__);
  } else {
    drawFullBox(x, y, 11, 3, stringToRGB15(colours.col_bg), __canvas__);
  }

  drawBorder(x + 1, y + 3, 9, 9, outline, __canvas__);
  drawGradient(x + 2, y + 4, 7, 7, c1, c2, __canvas__);
  if (checked) {
    drawMonochromeIcon(x + 1, y, 10, 10, 'haken', check_col, __canvas__);
  }

  let tw = 0;
  for (let c of caption) {
    const code = c.charCodeAt(0);
    const idx = font_index[code];
    tw += font_widths[idx] + 1;
  }
  tw -= 1;

  if (!albino) {
    drawString(caption, 13 + x, 2 + y, text, 255, 255, __canvas__);
  } else {
    drawString(
        caption, 13 + x, 2 + y, stringToRGB15(colours.col_text_light), 255, 255,
        __canvas__);
  }
}

function drawTogglebutton(x, y, w, h, caption, on, bmp, __canvas__) {
  const bg = stringToRGB15(colours.col_tb_bg);
  const outline = stringToRGB15(colours.col_outline);
  const col_on = stringToRGB15(colours.col_tb_fg_on);
  const col_off = stringToRGB15(colours.col_tb_fg_off);
  const sig_off = stringToRGB15(colours.col_signal_off);

  drawFullBox(x + 1, y + 1, w - 2, h - 2, bg, __canvas__);
  drawBorder(x, y, w, h, outline, __canvas__);

  const col = on ? col_on : (bmp ? sig_off : col_off);

  if (bmp) {
    drawMonochromeIcon(x + 2, y + 2, 12, 12, bmp, col, __canvas__);
  } else {
    let tw = 0;
    for (let c of caption) {
      const code = c.charCodeAt(0);
      const idx = font_index[code];
      tw += font_widths[idx] + 1;
    }
    if (tw > 0) tw -= 1;
    drawString(
        caption, x + Math.max(2, ((w - tw) / 2) | 0), y + h / 2 - 5 | 0, col,
        255, 255, __canvas__);
  }
}

function drawLabel(x, y, w, h, caption, albino, __canvas__) {
  const text = albino ? stringToRGB15(colours.col_text_light) :
                        stringToRGB15(colours.col_text);
  drawString(caption, x, y + h / 2 - 5 | 0, text, 255, 255, __canvas__);
}

function drawNumberBox(x, y, w, h, value, __canvas__, thin) {
  const light_ctrl = stringToRGB15(colours.col_light_ctrl);
  const dark_ctrl = stringToRGB15(colours.col_dark_ctrl);
  const outline = stringToRGB15(colours.col_outline);
  const icon = stringToRGB15(colours.col_icon);
  const lighter_bg = stringToRGB15(colours.col_lighter_bg);
  const text = stringToRGB15(colours.col_text_value);

  drawGradient(x + 1, y + 1, 8, 8, light_ctrl, dark_ctrl, __canvas__);
  for (let j = 0; j < 3; j++) {
    for (let i = -j; i <= j; i++) {
      drawPixel(x + 4 + i, y + j + 3, icon, __canvas__);
    }
  }
  drawBorder(x, y, 9, 9, outline, __canvas__);

  drawGradient(x + 1, y + 8, 8, 8, light_ctrl, dark_ctrl, __canvas__);
  for (let j = 2; j >= 0; j--) {
    for (let i = -j; i <= j; i++) {
      drawPixel(x + 4 + i, y - j + 13, icon, __canvas__);
    }
  }
  drawBorder(x, y + 8, 9, 9, outline, __canvas__);

  drawFullBox(x + 9, y + 1, w - 9, h - 1, lighter_bg, __canvas__);
  if (thin == true) {
    drawString(
      String(value).padStart(2, ' '), x + 6, y + 5, text, 255, 255, __canvas__);
  } else {
    drawString(
      String(value).padStart(2, ' '), x + 10, y + 5, text, 255, 255,
      __canvas__);
  }
  
  drawBorder(x, y, w, h, outline, __canvas__);
}


function drawNumberSlider(x, y, w, h, value, is_hex, __canvas__) {
  const light_ctrl = stringToRGB15(colours.col_light_ctrl);
  const dark_ctrl = stringToRGB15(colours.col_dark_ctrl);
  const outline = stringToRGB15(colours.col_outline);
  const icon = stringToRGB15(colours.col_icon);
  const lighter_bg = stringToRGB15(colours.col_lighter_bg);
  const text = stringToRGB15(colours.col_text_value);

  drawGradient(x + 1, y + 1, 8, 15, light_ctrl, dark_ctrl, __canvas__);
  for (let j = 0; j < 3; j++) {
    for (let i = -j; i <= j; i++) {
      drawPixel(x + 4 + i, y + j + 3, icon, __canvas__);
    }
  }
  drawVLine(x + 4, y + 6, 5, outline, __canvas__);
  for (let j = 2; j >= 0; j--) {
    for (let i = -j; i <= j; i++) {
      drawPixel(x + 4 + i, y - j + 13, icon, __canvas__);
    }
  }
  drawBorder(x, y, 9, 17, outline, __canvas__);

  drawFullBox(x + 9, y + 1, w - 10, h - 2, lighter_bg, __canvas__);
  const valstr = is_hex ? value.toString(16).padStart(2, ' ') :
                          String(value).padStart(3, ' ');
  drawString(valstr, x + 10, y + 5, text, 255, 255, __canvas__);
  drawBorder(x, y, w, h, outline, __canvas__);
}

function drawMemoryIndicator(x, y, w, h, __canvas__) {
  const outline = stringToRGB15(colours.col_outline);
  const light_bg = stringToRGB15(colours.col_light_bg);
  const ok = stringToRGB15(colours.col_mem_ok);
  const warn = stringToRGB15(colours.col_mem_warn);
  const alert = stringToRGB15(colours.col_mem_alert);

  const boxw = Math.floor((w - 2) * mem_use / 100);

  let col;
  if (mem_use < 62)
    col = ok;
  else if (mem_use < 78)
    col = interpolateColor(warn, ok, (mem_use - 62) << 8);
  else if (mem_use < 94)
    col = interpolateColor(alert, warn, (mem_use - 78) << 8);
  else
    col = alert;

  drawBorder(x, y, w, h, outline, __canvas__);
  drawFullBox(x + 1, y + 1, w - 2, h - 2, light_bg, __canvas__);
  drawFullBox(x + 1, y + 1, boxw, h - 2, col, __canvas__);
}

function drawListBox(x, y, w, h, show_numbers, __canvas__, mini) {
  const row_h = 11;
  const sb_w = 9;
  const rows = Math.floor((h - 1) / row_h);
  const outline = stringToRGB15(colours.col_outline);
  const sepline = stringToRGB15(colours.col_sepline);
  const vsepline = stringToRGB15(colours.col_list_sep_vertical);
  const med_bg = stringToRGB15(colours.col_list_1);
  const light_bg = stringToRGB15(colours.col_list_2);
  const hl1 = stringToRGB15(colours.col_list_highlight1);
  const hl2 = stringToRGB15(colours.col_list_highlight2);
  const lighter_bg = stringToRGB15(colours.col_lighter_bg);
  const light_ctrl = stringToRGB15(colours.col_scrollbar_arr_bg2);
  const dark_ctrl = stringToRGB15(colours.col_scrollbar_arr_bg1);
  const text = stringToRGB15(colours.col_text_lb);
  const text_2 = stringToRGB15(colours.col_text_lb_highlight);

  for (let i = 0; i < rows - 1; i++) {
    drawHLine(x + 1, y + row_h * (i + 1), w - sb_w - 1, sepline, __canvas__);
  }

  for (let i = 0; i < rows; i++) {
    let c_bot = med_bg;
    let c_top = light_bg;
    if (i == 0) {
      c_bot = hl1;
      c_top = hl2;
    } else if (i == 1) {
      c_bot = light_bg;
      c_top = lighter_bg;
    }
    drawGradient(
        x + 1, y + row_h * i + 1, w - sb_w - 1, row_h - 1, c_bot, c_top,
        __canvas__);
  }

  if (show_numbers) {
    drawVLine(x + 17, y + 1, h - 2, vsepline, __canvas__);
  }

  drawGradient(
      x + w - sb_w + 1, y + 1, 8, 8, light_ctrl, dark_ctrl, __canvas__);
  for (let j = 0; j < 3; j++) {
    for (let p = -j; p <= j; p++) {
      drawPixel(x + w - sb_w + 4 + p, y + j + 3, outline, __canvas__);
    }
  }
  drawBorder(x + w - sb_w, y, 9, 9, outline, __canvas__);

  drawGradient(
      x + w - sb_w + 1, y + h - 9, 8, 8, light_ctrl, dark_ctrl, __canvas__);
  for (let j = 2; j >= 0; j--) {
    for (let p = -j; p <= j; p++) {
      drawPixel(x + w - sb_w + 4 + p, y - j + h - 4, outline, __canvas__);
    }
  }
  drawBorder(x + w - sb_w, y + h - 9, 9, 9, outline, __canvas__);

  drawBorder(x + w - sb_w, y, sb_w, h, outline, __canvas__);
  drawGradient(
      x + w - sb_w + 1, y + 9, sb_w - 2, h - 18,
      stringToRGB15(colours.col_scrollbar_bg1),
      stringToRGB15(colours.col_scrollbar_bg2), __canvas__);

  const st_h = 20;
  const st_pos = 0;
  // draw the scrollbar
  if (mini !== true) { // don't bother with the sample listbox
    drawFullBox(
      x + w - sb_w + 1, y + 9 + st_pos, sb_w - 2, st_h,
      stringToRGB15(colours.col_scrollbar_inactive), __canvas__);
  drawBorder(x + w - sb_w, y + 9 + st_pos, sb_w, st_h, outline, __canvas__);
  }
    

  // in case we add the file picker to the preview
  if (show_numbers) {
    for (let i = 0; i < Math.min(rows, 8); i++) {
      if (i == 0) {
        drawString(
            ' ' + (i + 1).toString(16), x + 2, y + row_h * i + 2, text_2, 255,
            255, __canvas__);
      } else {
        drawString(
            ' ' + (i + 1).toString(16), x + 2, y + row_h * i + 2, text, 255,
            255, __canvas__);
      }
    }
    drawString(
        'Text : D', x + 19, y + 2, text_2, w - 19 - 2 - sb_w - 2, h - 6,
        __canvas__);
  }

  drawBorder(x, y, w, h, outline, __canvas__);
}

function drawTabbox(x, y, w, h, __canvas__) {
  const icon_sz = 16;
  const sz_border = icon_sz + 2;
  const outline = stringToRGB15(colours.col_tab_outline);
  const bg = stringToRGB15(colours.col_bg);
  const sel_tab = stringToRGB15(colours.col_selected_tab);
  const light_bg = stringToRGB15(colours.col_light_bg);
  const med_bg = stringToRGB15(colours.col_unselected_tab);
  const icon_col = stringToRGB15(colours.col_icon_tab);

  drawFullBox(
      x + 1, y + sz_border + 1, w - 2, h - (sz_border + 2), light_bg,
      __canvas__);
  drawBorder(x, y + sz_border, w, h - sz_border, outline, __canvas__);

  drawFullBox(x, y, 3 + sz_border * 5, 3, bg, __canvas__);

  const tab_icons =
      ['icon_song', 'icon_disk', 'icon_sample', 'icon_trumpet', 'icon_wrench'];
  for (let i = 0; i < 5; i++) {
    const sel = i == 0;
    const off = sel ? 0 : 3;
    drawFullBox(
        x + 3 + sz_border * i, y + 1 + off, sz_border, sz_border - off,
        sel ? sel_tab : med_bg, __canvas__);
    drawVLine(
        x + 2 + sz_border * i, y + 1 + off, sz_border - off, outline,
        __canvas__);
    drawHLine(x + 3 + sz_border * i, y + off, sz_border, outline, __canvas__);
    drawVLine(
        x + 2 + sz_border * (i + 1), y + 1 + off, sz_border - off, outline,
        __canvas__);
    drawMonochromeIcon(
        x + 4 + sz_border * i, y + 2 + off, icon_sz, icon_sz - off,
        tab_icons[i], icon_col, __canvas__);
  }
}

function drawSubSamp() {
  const bg = stringToRGB15(colours.col_bg);
  drawFullBox(0, 0, 256, 192, bg, fb_sub_samped);
  drawFullBox(0, 0, 256, 192, bg, fb_sub_samped);

  drawTabbox(1, 1, 139, 151, fb_sub_samped);

  drawListBox(4, 21, 50, 78, true, fb_sub_samped);
  drawButton(70, 47, 14, 12, '>', false, fb_sub_samped);
  drawButton(55, 47, 14, 12, '<', false, fb_sub_samped);
  drawButton(55, 21, 29, 12, 'ins', false, fb_sub_samped);
  drawButton(55, 60, 29, 12, 'del', false, fb_sub_samped);
  drawButton(55, 34, 29, 12, 'cln', false, fb_sub_samped);

  drawGradientIcon(98, 1, 80, 17, logo_img, fb_sub_samped);

  drawBitButton(180, 3, 23, 15, 'icon_play', false, 12, 12, 5, 0, fb_sub_samped);
  drawBitButton(204, 3, 23, 15, 'icon_stop', true, 12, 12, 5, 0, fb_sub_samped);
  drawBitButton(236, 1, 19, 19, 'icon_flp', false, 15, 15, 2, 2, fb_sub_samped);

  drawTogglebutton(55, 74, 29, 12, 'lock', true, null, fb_sub_samped);
  drawTogglebutton(55, 87, 29, 12, 'loop', false, null, fb_sub_samped);
  drawTogglebutton(141, 136, 16, 16, '', false, 'icon_record', fb_sub_samped);
  drawTogglebutton(165, 20, 10, 10, '+', false, null, fb_sub_samped);

  drawCheckbox(179, 18, 30, 12, 'scr lock', true, true, fb_sub_samped);

  drawLabel(87, 48, 50, 12, 'ptn len:', false, fb_sub_samped);
  drawNumberSlider(105, 60, 32, 17, 16, true, fb_sub_samped);

  drawLabel(87, 22, 48, 12, 'chn:  4', false, fb_sub_samped);
  drawButton(112, 34, 12, 12, '-', false, fb_sub_samped);
  drawButton(125, 34, 12, 12, '+', false, fb_sub_samped);

  drawLabel(4, 103, 32, 12, 'tmp', false, fb_sub_samped);
  drawLabel(38, 103, 32, 12, 'bpm', false, fb_sub_samped);
  drawLabel(72, 103, 46, 12, 'restart', false, fb_sub_samped);
  drawNumberBox(4, 115, 32, 17, 6, fb_sub_samped);
  drawLabel(182, 126, 22, 12, 'add', true, fb_sub_samped);
  drawLabel(206, 126, 25, 12, 'oct', true, fb_sub_samped);
  drawNumberBox(185, 135, 18, 17, 6, fb_sub_samped, true);
  drawNumberBox(206, 135, 18, 17, 4, fb_sub_samped, true);
  drawNumberSlider(38, 115, 32, 17, 120, false, fb_sub_samped);
  drawNumberSlider(72, 115, 32, 17, 0, true, fb_sub_samped);
}
function drawSub() {
  const bg = stringToRGB15(colours.col_bg);
  drawFullBox(0, 0, 256, 192, bg, fb_sub);

  drawTabbox(1, 1, 139, 151, fb_sub);

  drawListBox(4, 21, 50, 78, true, fb_sub);
  drawButton(70, 47, 14, 12, '>', false, fb_sub);
  drawButton(55, 47, 14, 12, '<', false, fb_sub);
  drawButton(55, 21, 29, 12, 'ins', false, fb_sub);
  drawButton(55, 60, 29, 12, 'del', false, fb_sub);
  drawButton(55, 34, 29, 12, 'cln', false, fb_sub);

  drawGradientIcon(98, 1, 80, 17, logo_img, fb_sub);

  drawBitButton(180, 3, 23, 15, 'icon_play', false, 12, 12, 5, 0, fb_sub);
  drawBitButton(204, 3, 23, 15, 'icon_stop', true, 12, 12, 5, 0, fb_sub);
  drawBitButton(236, 1, 19, 19, 'icon_flp', false, 15, 15, 2, 2, fb_sub);

  drawTogglebutton(55, 74, 29, 12, 'lock', true, null, fb_sub);
  drawTogglebutton(55, 87, 29, 12, 'loop', false, null, fb_sub);
  drawTogglebutton(141, 136, 16, 16, '', false, 'icon_record', fb_sub);
  drawTogglebutton(165, 20, 10, 10, '+', false, null, fb_sub);

  drawCheckbox(179, 18, 30, 12, 'scr lock', true, true, fb_sub);

  drawLabel(87, 48, 50, 12, 'ptn len:', false, fb_sub);
  drawNumberSlider(105, 60, 32, 17, 16, true, fb_sub);

  drawLabel(87, 22, 48, 12, 'chn:  4', false, fb_sub);
  drawButton(112, 34, 12, 12, '-', false, fb_sub);
  drawButton(125, 34, 12, 12, '+', false, fb_sub);

  drawLabel(4, 103, 32, 12, 'tmp', false, fb_sub);
  drawLabel(38, 103, 32, 12, 'bpm', false, fb_sub);
  drawLabel(72, 103, 46, 12, 'restart', false, fb_sub);
  drawNumberBox(4, 115, 32, 17, 6, fb_sub);
  drawLabel(182, 126, 22, 12, 'add', true, fb_sub);
  drawLabel(206, 126, 25, 12, 'oct', true, fb_sub);
  drawNumberBox(185, 135, 18, 17, 6, fb_sub, true);
  drawNumberBox(206, 135, 18, 17, 4, fb_sub, true);
  drawNumberSlider(38, 115, 32, 17, 120, false, fb_sub);
  drawNumberSlider(72, 115, 32, 17, 0, true, fb_sub);

  drawLabel(4, 134, 113, 14, 'unnamed', false, fb_sub);
  drawButton(118, 134, 20, 14, '...', false, fb_sub);
  drawButton(141, 19, 23, 12, 'ren', false, fb_sub);
  drawButton(107, 116, 30, 14, 'zap!', false, fb_sub);

  drawLabel(87, 78, 52, 12, 'ram use', false, fb_sub);
  drawMemoryIndicator(87, 90, 50, 8, fb_sub);

  drawListBox(141, 32, 114, 89, true, fb_sub);

  drawBitButton(225, 127, 14, 12, 'icon_undo', false, 8, 8, 3, 2, fb_sub);
  drawBitButton(241, 127, 14, 12, 'icon_redo', false, 8, 8, 3, 2, fb_sub);
  drawButton(225, 140, 30, 12, 'ins', false, fb_sub);
  drawButton(225, 153, 30, 12, 'del', false, fb_sub);
  drawButton(225, 166, 30, 12, 'clr', false, fb_sub);
  drawButton(225, 179, 30, 12, '--', false, fb_sub);

  drawPiano(0, 152, 224, 40, fb_sub);
}
function drawMain() {
  if (!font_loaded || !font_3x5_loaded) return;

  

  const bg = stringToRGB15(colours.col_pv_bg);
  const r = (bg & 0x1f) * 255 / 31;
  const g = ((bg >> 5) & 0x1f) * 255 / 31;
  const b = ((bg >> 10) & 0x1f) * 255 / 31;
  fb_main.fillStyle = `rgb(${r},${g},${b})`;
  fb_main.fillRect(0, 0, 256 * scalexy, 192 * scalexy);

  const linescol = stringToRGB15(colours.col_pv_lines);
  const outline = stringToRGB15(colours.col_pv_pb);
  const cell_outline = stringToRGB15(colours.col_pv_pb_cell);
  const left_nums = stringToRGB15(colours.col_pv_left_numbers);
  const left_nums2 = stringToRGB15(colours.col_pv_left_numbers_highlight);
  const chn_text = stringToRGB15(colours.col_pv_chn);

  
  
  


  if (!(sel_sx1 >= effective_width || sel_sx2 <= 0 || sel_sy1 >= 192 ||
        sel_sy2 <= 0)) {
    const clamped_x1 = Math.max(sel_sx1, 0);
    const clamped_x2 = Math.min(sel_sx2, effective_width);
    const clamped_y1 = Math.max(sel_sy1, 0);
    const clamped_y2 = Math.min(sel_sy2, 192);

    drawFullBox(
        clamped_x1, clamped_y1, clamped_x2 - clamped_x1,
        clamped_y2 - clamped_y1 + 1,
        stringToRGB15(colours.col_pv_cb_sel_highlight), fb_main);
  }

  for (let i = 0; i <= vis_rows; i++) {
    const realrow = i - cursor_pos + 5;
    if (realrow >= 0 && realrow <= pv_rows) {
      if (realrow % 4 == 0) {
        drawHLine(
            0, pv_cell_h * i, pv_border_w + pv_cols * pv_cellw, linescol,
            fb_main);
      } else {
        drawHLine(
            pv_border_w, pv_cell_h * i, pv_cols * pv_cellw,
            stringToRGB15(colours.col_pv_sublines), fb_main);
      }
    }
  }

  for (let i = 0; i <= pv_cols; i++) {
    drawVLine(pv_border_w - 1 + i * pv_cellw, 0, 192, linescol, fb_main);
  }

  drawGradient(
      0, pv_cursorbar_y, pv_border_w + pv_cols * pv_cellw, pv_cell_h,
      stringToRGB15(colours.col_pv_cb_col1),
      stringToRGB15(colours.col_pv_cb_col2), fb_main);
  drawBorder(0, pv_cursorbar_y, pv_border_w + pv_cols * pv_cellw, pv_cell_h + 1, outline, fb_main);

  if (sel_sy1 <= pv_cursorbar_y + 1 &&
      sel_sy2 >= pv_cursorbar_y + 1 + pv_cell_h - 1 &&
      sel_sx1 <= pv_border_w + pv_cols * pv_cellw && sel_sx2 >= pv_border_w) {
    const cursor_highlight_x1 = Math.max(sel_sx1, pv_border_w + 1);
    drawFullBox(
        cursor_highlight_x1, pv_cursorbar_y + 1,
        sel_sx2 - cursor_highlight_x1 - 1, pv_cell_h - 1,
        stringToRGB15(colours.col_pv_cb_sel_highlight), fb_main);
  }

  drawFullBox(
      pv_border_w - 1, pv_cursorbar_y, pv_cellw + 1, pv_cell_h + 1,
      cell_outline, fb_main);
  drawGradient(
      pv_border_w, pv_cursorbar_y + 1, pv_cellw - 1, pv_cell_h - 1,
      stringToRGB15(colours.col_pv_cb_col1_highlight),
      stringToRGB15(colours.col_pv_cb_col2_highlight), fb_main);

  for (let ip = 5 - cursor_pos; ip <= 5 + cursor_pos + 1; ip++) {
    if (ip >= 0 && ip < pv_rows) {
      if (ip % 4 == 0)
        drawHexByte(
            ip, 1, 2 + (ip + cursor_pos - 5) * pv_char_h, left_nums2,
            fb_main);
      else
        drawHexByte(
            ip, 1, 2 + (ip + cursor_pos - 5) * pv_char_h, left_nums,
            fb_main);
    }
  }

  const highlight_row = cursor_pos;

  for (let i = 0; i < pv_cols; i++) {
    for (let j = 0; j < vis_rows; j++) {
      if (firstrow + j >= 0 && firstrow + j < pv_rows) {
        drawCell(i, firstrow + j, i, j, j == highlight_row, fb_main);
      }
    }
  }

  for (let i = 0; i < pv_cols; i++) {
    drawFullBox(
        pv_border_w + i * pv_cellw + 1, 1, pv_cellw - 2, 11, bg, fb_main);
    const hex = i.toString(16).padStart(2, '0');
    drawString(
        hex, pv_border_w + i * pv_cellw + 1, 1, chn_text, 255, 255,
        fb_main);
  }

  const mutesolo_text = stringToRGB15(colours.col_pv_mutesolo_text);
  const mute_y = 1;
  const mute_w = 10;
  const mute_h = 9;
  const mute_rel_x = 9;
  const solo_rel_x = 20;

  for (let i = 0; i < pv_cols; i++) {
    const muted = i == 1;
    const soloed = i == 2;

    const mute_col1 = muted ?
        stringToRGB15(colours.col_pv_mutesolo_col1_highlight) :
        stringToRGB15(colours.col_pv_mutesolo_col1);
    const mute_col2 = muted ?
        stringToRGB15(colours.col_pv_mutesolo_col2_highlight) :
        stringToRGB15(colours.col_pv_mutesolo_col2);

    drawGradient(
        pv_border_w + i * pv_cellw + mute_rel_x, mute_y, mute_w, mute_h,
        mute_col1, mute_col2, fb_main);
    drawString(
        'm', pv_border_w + i * pv_cellw + mute_rel_x + 1, 0, mutesolo_text, 255,
        255, fb_main);

    const solo_col1 = soloed ?
        stringToRGB15(colours.col_pv_mutesolo_col1_highlight) :
        stringToRGB15(colours.col_pv_mutesolo_col1);
    const solo_col2 = soloed ?
        stringToRGB15(colours.col_pv_mutesolo_col2_highlight) :
        stringToRGB15(colours.col_pv_mutesolo_col2);

    drawGradient(
        pv_border_w + i * pv_cellw + solo_rel_x, mute_y, mute_w, mute_h,
        solo_col1, solo_col2, fb_main);
    drawString(
        's', pv_border_w + i * pv_cellw + solo_rel_x + 2, 0, mutesolo_text, 255,
        255, fb_main);
  }

  drawBitButton(236, 1, 19, 19, 'icon_flp', false, 15, 15, 2, 2, fb_main);
  drawButton(225, 22, 30, 12, '-m/s', false, fb_main);
  drawLabel(230, 34, 25, 9, 'vol', true, fb_main);
  drawNumberSlider(225, 45, 30, 17, 127, true, fb_main);
  drawButton(225, 61, 30, 12, 'set', false, fb_main);
  drawButton(225, 74, 14, 12, '-', false, fb_main);
  drawButton(241, 74, 14, 12, '+', false, fb_main);
  drawButton(225, 88, 30, 12, 'cut', false, fb_main);
  drawButton(225, 101, 30, 12, 'cp', false, fb_main);
  drawButton(225, 114, 30, 12, 'pst', false, fb_main);
  drawButton(225, 127, 30, 12, 'sel', false, fb_main);
  drawButton(225, 140, 30, 12, 'ins', false, fb_main);
  drawButton(225, 153, 30, 12, 'del', false, fb_main);
  drawButton(225, 166, 30, 12, 'clr', false, fb_main);
  drawButton(225, 179, 30, 12, '--', false, fb_main);
}

function redraw() {
  drawSub();
  // drawSubSamp();
  drawMain();
}

function save_theme() {
  const name = document.getElementById('theme-name').value || 'theme';
  const content = cols_ordered
                      .map(
                          key => cols_ordered.indexOf(key) + '=' +
                              colours[key] + ' ; ' + colscheme[key].name)
                      .join('\n');
  const blob = new Blob([content], {type: 'text/plain'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  if (!name.endsWith('.nttheme'))
    a.download = name + '.nttheme';
  else
    a.download = name;
  a.click();
}


function select_swatch(key) {
  active = key;
  document.querySelectorAll('.swatch').forEach((el, idx) => {
    el.classList.toggle('active', cols_ordered[idx] == key);
  });
  if (colours[key]) {
    color_to_pos(tinycolor('#' + colours[key]));
  }
}

function update_input() {
  inp.value = cols_ordered
                  .map(
                      key => cols_ordered.indexOf(key) + '=' + colours[key] +
                          ' ; ' + colscheme[key].name)
                  .join('\n');
}

function update_swatch(idx) {
  const item = swatch_list.children[idx * 2];
  const key = cols_ordered[idx];
  item.querySelector('.swatchcol').style.backgroundColor =
      '#' + colours[key];
}

function parse_theme(text) {
  const lines = text.split('\n');
  const parsed = {};
  let line_num = 0;

  for (let line of lines) {
    line_num++;
    const l = line.trim();
    if (!l) continue;

    const hexmatch = l.match(/^(\d+)=([0-9a-fA-F]{6})/);
    if (!hexmatch) {
      parseres.textContent = `!!line ${line_num}`;
      return null;
    }

    const index = parseInt(hexmatch[1], 10);
    const hex = hexmatch[2].toLowerCase();

    if (index < 0 || index >= cols_ordered.length) {
      parseres.textContent = `!!line ${line_num} key ${
          index} out of bounds (max ${cols_ordered.length - 1})`;
      return null;
    }

    const key = cols_ordered[index];
    if (key) {
      parsed[key] = hex;
    }
  }

  for (const key of cols_ordered) {
    if (!parsed[key]) parsed[key] = '000000';
  }

  return parsed;
}

function loadDefCols() {
  if (Object.keys(colours).length > 0 &&
      !confirm('lose progress and use default skin?'))
    return;
  colours = {};
  base_colours = {};
  for (const key of cols_ordered) {
    colours[key] = colscheme[key].hex;
    base_colours[key] = colscheme[key].hex;
  }
  update_input();
  inp.disabled = false;
  load_btn.disabled = false;
  parseres.textContent = '';
  for (let i = 0; i < cols_ordered.length; i++) update_swatch(i);
  redraw();
}

function loadTheme() {
  const parsed = parse_theme(inp.value);
  if (!parsed) return;
  colours = parsed;
  base_colours = {};
  for (const key in parsed) {
    base_colours[key] = parsed[key];
  }
  inp.disabled = false;
  load_btn.disabled = false;
  parseres.textContent = '';
  for (let i = 0; i < cols_ordered.length; i++) update_swatch(i);
  redraw();
}

// most of this colour spectrum stuff is stolen from someones codepen
function draw_spectrum(colour) {
  spec_ctx.clearRect(0, 0, spec_canvas.width, spec_canvas.height);
  if (!colour) colour = '#f00';
  spec_ctx.fillStyle = colour;
  spec_ctx.fillRect(0, 0, spec_canvas.width, spec_canvas.height);
  const white_grad = spec_ctx.createLinearGradient(0, 0, spec_canvas.width, 0);
  white_grad.addColorStop(0, '#fff');
  white_grad.addColorStop(1, 'transparent');
  spec_ctx.fillStyle = white_grad;
  spec_ctx.fillRect(0, 0, spec_canvas.width, spec_canvas.height);
  const black_grad = spec_ctx.createLinearGradient(0, 0, 0, spec_canvas.height);
  black_grad.addColorStop(0, 'transparent');
  black_grad.addColorStop(1, '#000');
  spec_ctx.fillStyle = black_grad;
  spec_ctx.fillRect(0, 0, spec_canvas.width, spec_canvas.height);
}



function color_to_pos(colour) {
  const hsl = colour.toHsl();
  hue = hsl.h;
  const hsv = colour.toHsv();
  const x = spec_canvas.width * hsv.s;
  const y = spec_canvas.height * (1 - hsv.v);
  const hue_x = (hue / 360) * hue_canvas.width;
  spec_cursor.style.left = x + 'px';
  spec_cursor.style.top = y + 'px';
  hue_cursor.style.left = hue_x + 'px';
  spec_cursor.style.backgroundColor = colour.toHexString();
  hue_cursor.style.backgroundColor = 'hsl(' + hue + ',100%,50%)';
  draw_spectrum('hsl(' + hue + ',100%,50%)');
}

function get_spec_color(e) {
  e.preventDefault();
  const rect = spec_canvas.getBoundingClientRect();
  let x = e.pageX - rect.left;
  let y = e.pageY - rect.top;
  x = Math.max(0, Math.min(rect.width, x));
  y = Math.max(0, Math.min(rect.height, y));
  const x_ratio = x / rect.width;
  const y_ratio = y / rect.height;
  const hsv_v = 1 - y_ratio;
  const hsv_s = x_ratio;
  lit = (hsv_v / 2) * (2 - hsv_s);
  sat = (hsv_v * hsv_s) / (1 - Math.abs(2 * lit - 1));
  const colour = tinycolor('hsl ' + hue + ' ' + sat + ' ' + lit);
  spec_cursor.style.left = x + 'px';
  spec_cursor.style.top = y + 'px';
  spec_cursor.style.backgroundColor = colour.toHexString();
  if (active) {
    colours[active] = colour.toHex();
    base_colours[active] = colour.toHex();
    updateColsFrom(active);
    const idx = cols_ordered.indexOf(active);
    if (idx >= 0) update_swatch(idx);
    update_input();
    redraw();
  }
}

function get_hue_colour(e) {
  e.preventDefault();
  const rect = hue_canvas.getBoundingClientRect();
  let x = e.pageX - rect.left;
  x = Math.max(0, Math.min(rect.width, x));
  hue = (x / rect.width) * 360;
  const hue_colour = 'hsl(' + hue + ',100%,50%)';
  draw_spectrum(hue_colour);
  hue_cursor.style.left = x + 'px';
  hue_cursor.style.backgroundColor = hue_colour;
  const colour = tinycolor('hsl ' + hue + ' ' + sat + ' ' + lit);
  spec_cursor.style.backgroundColor = colour.toHexString();
  if (active) {
    colours[active] = colour.toHex();
    base_colours[active] = colour.toHex();
    updateColsFrom(active);
    const idx = cols_ordered.indexOf(active);
    if (idx >= 0) update_swatch(idx);
    update_input();
    redraw();
  }
}

spec_canvas.addEventListener('mousedown', function(e) {
  get_spec_color(e);
  spec_cursor.classList.add('dragging');
  const move = (e) => get_spec_color(e);
  const up = () => {
    spec_cursor.classList.remove('dragging');
    window.removeEventListener('mousemove', move);
    window.removeEventListener('mouseup', up);
  };
  window.addEventListener('mousemove', move);
  window.addEventListener('mouseup', up);
});

hue_canvas.addEventListener('mousedown', function(e) {
  get_hue_colour(e);
  hue_cursor.classList.add('dragging');
  const move = (e) => get_hue_colour(e);
  const up = () => {
    hue_cursor.classList.remove('dragging');
    window.removeEventListener('mousemove', move);
    window.removeEventListener('mouseup', up);
  };
  window.addEventListener('mousemove', move);
  window.addEventListener('mouseup', up);
});
// ---------- end colour picker stuff ------------

// copy pasted from
// https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
function rgbToHsl(r,g,b) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  // Calculate hue
  // No difference
  if (delta === 0)
    h = 0;
  // Red is max
  else if (cmax === r)
    h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax === g)
    h = (b - r) / delta + 2;
  // Blue is max
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);
    
  // Make negative hues positive behind 360°
  if (h < 0)
      h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l];
}


// copy pasted from
// https://gist.github.com/vahidk/05184faf3d92a0aa1b46aeaa93b07786?permalink_comment_id=4095278#gistcomment-4095278
const hslToRgb = (h, s, l) => {

  // IMPORTANT if s and l between 0,1 remove the next two lines:
  s /= 100
  l /= 100

  const k = (n) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))]
}


function stringToHsl(hex) {
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return rgbToHsl(r, g, b);
}

function hslToString(h, s, l) {
  const [r, g, b] = hslToRgb(h, s, l);
  return ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

function hueshift(hex, shift) {
  const [h, s, l] = stringToHsl(hex);
  return hslToString((h + shift) % 360, s, l);
}


// generate a completely random colour for everything
function randcols() {
  for (const key of cols_ordered) {
    // random 24 bit int
    colours[key] =
        Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
    base_colours[key] = colours[key];
    const idx = cols_ordered.indexOf(key);
    if (idx >= 0) update_swatch(idx);
  }
  update_input();
  redraw();
}

// listen for hue slider
document.getElementById('hueshifter').addEventListener('input', evt => {
  const shift = parseInt(evt.target.value, 10);
  for (const key of cols_ordered) {
    colours[key] = hueshift(base_colours[key], shift);
    const idx = cols_ordered.indexOf(key);
    if (idx >= 0) update_swatch(idx);
  }
  update_input();
  redraw();
});

// init swatchs
swatch_list.innerHTML = '';
for (let i = 0; i < cols_ordered.length; i++) {
  const key = cols_ordered[i];
  const item = document.createElement('div');
  item.className = 'swatch';
  const colour_div = document.createElement('div');
  colour_div.className = 'swatchcol';
  const label = document.createElement('span');
  label.className = 'swatchlb';
  label.textContent = colscheme[key].name;
  const line = document.createElement('hr');
  line.className = 'swatchhr';
  
  item.appendChild(colour_div);
  item.appendChild(label);
  item.onclick = () => select_swatch(key);
  swatch_list.appendChild(item);
  swatch_list.appendChild(line);

}

const grad = hue_ctx.createLinearGradient(0, 0, hue_canvas.width, 0);
grad.addColorStop(0, 'hsl(0,100%,50%)');
grad.addColorStop(0.17, 'hsl(61.2,100%,50%)');
grad.addColorStop(0.33, 'hsl(118.8,100%,50%)');
grad.addColorStop(0.50, 'hsl(180,100%,50%)');
grad.addColorStop(0.67, 'hsl(241.2,100%,50%)');
grad.addColorStop(0.83, 'hsl(298.8,100%,50%)');
grad.addColorStop(1, 'hsl(360,100%,50%)');
hue_ctx.fillStyle = grad;
hue_ctx.fillRect(0, 0, hue_canvas.width, hue_canvas.height);
draw_spectrum();
loadDefCols();



// if the 'lck' checkbox is checked, then constrain
// certain colours to others to make editing easier
// for instance, list item gradients to
// one of the background colours, etc
document.getElementById('cb_lock').addEventListener('change', evt => {
  lockcols = evt.target.checked;
});
