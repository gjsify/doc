/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gdk-4.0
 */

import type * as Gjs from './Gjs';
import type cairo from './cairo-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace Gdk {

enum AxisUse {
    IGNORE,
    X,
    Y,
    DELTA_X,
    DELTA_Y,
    PRESSURE,
    XTILT,
    YTILT,
    WHEEL,
    DISTANCE,
    ROTATION,
    SLIDER,
    LAST,
}
enum CrossingMode {
    NORMAL,
    GRAB,
    UNGRAB,
    GTK_GRAB,
    GTK_UNGRAB,
    STATE_CHANGED,
    TOUCH_BEGIN,
    TOUCH_END,
    DEVICE_SWITCH,
}
enum DevicePadFeature {
    BUTTON,
    RING,
    STRIP,
}
enum DeviceToolType {
    UNKNOWN,
    PEN,
    ERASER,
    BRUSH,
    PENCIL,
    AIRBRUSH,
    MOUSE,
    LENS,
}
enum DragCancelReason {
    NO_TARGET,
    USER_CANCELLED,
    ERROR,
}
enum EventType {
    DELETE,
    MOTION_NOTIFY,
    BUTTON_PRESS,
    BUTTON_RELEASE,
    KEY_PRESS,
    KEY_RELEASE,
    ENTER_NOTIFY,
    LEAVE_NOTIFY,
    FOCUS_CHANGE,
    PROXIMITY_IN,
    PROXIMITY_OUT,
    DRAG_ENTER,
    DRAG_LEAVE,
    DRAG_MOTION,
    DROP_START,
    SCROLL,
    GRAB_BROKEN,
    TOUCH_BEGIN,
    TOUCH_UPDATE,
    TOUCH_END,
    TOUCH_CANCEL,
    TOUCHPAD_SWIPE,
    TOUCHPAD_PINCH,
    PAD_BUTTON_PRESS,
    PAD_BUTTON_RELEASE,
    PAD_RING,
    PAD_STRIP,
    PAD_GROUP_MODE,
    EVENT_LAST,
}
enum FullscreenMode {
    CURRENT_MONITOR,
    ALL_MONITORS,
}
enum GLError {
    NOT_AVAILABLE,
    UNSUPPORTED_FORMAT,
    UNSUPPORTED_PROFILE,
    COMPILATION_FAILED,
    LINK_FAILED,
}
enum Gravity {
    NORTH_WEST,
    NORTH,
    NORTH_EAST,
    WEST,
    CENTER,
    EAST,
    SOUTH_WEST,
    SOUTH,
    SOUTH_EAST,
    STATIC,
}
enum InputSource {
    MOUSE,
    PEN,
    KEYBOARD,
    TOUCHSCREEN,
    TOUCHPAD,
    TRACKPOINT,
    TABLET_PAD,
}
enum KeyMatch {
    NONE,
    PARTIAL,
    EXACT,
}
enum MemoryFormat {
    B8G8R8A8_PREMULTIPLIED,
    A8R8G8B8_PREMULTIPLIED,
    R8G8B8A8_PREMULTIPLIED,
    B8G8R8A8,
    A8R8G8B8,
    R8G8B8A8,
    A8B8G8R8,
    R8G8B8,
    B8G8R8,
    R16G16B16,
    R16G16B16A16_PREMULTIPLIED,
    R16G16B16A16,
    R16G16B16_FLOAT,
    R16G16B16A16_FLOAT_PREMULTIPLIED,
    R16G16B16A16_FLOAT,
    R32G32B32_FLOAT,
    R32G32B32A32_FLOAT_PREMULTIPLIED,
    R32G32B32A32_FLOAT,
    N_FORMATS,
}
enum NotifyType {
    ANCESTOR,
    VIRTUAL,
    INFERIOR,
    NONLINEAR,
    NONLINEAR_VIRTUAL,
    UNKNOWN,
}
enum ScrollDirection {
    UP,
    DOWN,
    LEFT,
    RIGHT,
    SMOOTH,
}
enum SubpixelLayout {
    UNKNOWN,
    NONE,
    HORIZONTAL_RGB,
    HORIZONTAL_BGR,
    VERTICAL_RGB,
    VERTICAL_BGR,
}
enum SurfaceEdge {
    NORTH_WEST,
    NORTH,
    NORTH_EAST,
    WEST,
    EAST,
    SOUTH_WEST,
    SOUTH,
    SOUTH_EAST,
}
enum TextureError {
    TOO_LARGE,
    CORRUPT_IMAGE,
    UNSUPPORTED_CONTENT,
    UNSUPPORTED_FORMAT,
}
enum TitlebarGesture {
    DOUBLE_CLICK,
    RIGHT_CLICK,
    MIDDLE_CLICK,
}
enum TouchpadGesturePhase {
    BEGIN,
    UPDATE,
    END,
    CANCEL,
}
enum VulkanError {
    UNSUPPORTED,
    NOT_AVAILABLE,
}
enum AnchorHints {
    FLIP_X,
    FLIP_Y,
    SLIDE_X,
    SLIDE_Y,
    RESIZE_X,
    RESIZE_Y,
    FLIP,
    SLIDE,
    RESIZE,
}
enum AxisFlags {
    X,
    Y,
    DELTA_X,
    DELTA_Y,
    PRESSURE,
    XTILT,
    YTILT,
    WHEEL,
    DISTANCE,
    ROTATION,
    SLIDER,
}
enum DragAction {
    COPY,
    MOVE,
    LINK,
    ASK,
}
enum FrameClockPhase {
    NONE,
    FLUSH_EVENTS,
    BEFORE_PAINT,
    UPDATE,
    LAYOUT,
    PAINT,
    RESUME_EVENTS,
    AFTER_PAINT,
}
enum GLAPI {
    GL,
    GLES,
}
enum ModifierType {
    SHIFT_MASK,
    LOCK_MASK,
    CONTROL_MASK,
    ALT_MASK,
    BUTTON1_MASK,
    BUTTON2_MASK,
    BUTTON3_MASK,
    BUTTON4_MASK,
    BUTTON5_MASK,
    SUPER_MASK,
    HYPER_MASK,
    META_MASK,
}
enum PaintableFlags {
    SIZE,
    CONTENTS,
}
enum SeatCapabilities {
    NONE,
    POINTER,
    TOUCH,
    TABLET_STYLUS,
    KEYBOARD,
    TABLET_PAD,
    ALL_POINTING,
    ALL,
}
enum ToplevelState {
    MINIMIZED,
    MAXIMIZED,
    STICKY,
    FULLSCREEN,
    ABOVE,
    BELOW,
    FOCUSED,
    TILED,
    TOP_TILED,
    TOP_RESIZABLE,
    RIGHT_TILED,
    RIGHT_RESIZABLE,
    BOTTOM_TILED,
    BOTTOM_RESIZABLE,
    LEFT_TILED,
    LEFT_RESIZABLE,
}
const ACTION_ALL: number
const BUTTON_MIDDLE: number
const BUTTON_PRIMARY: number
const BUTTON_SECONDARY: number
const CURRENT_TIME: number
const EVENT_PROPAGATE: boolean
const EVENT_STOP: boolean
const KEY_0: number
const KEY_1: number
const KEY_2: number
const KEY_3: number
const KEY_3270_AltCursor: number
const KEY_3270_Attn: number
const KEY_3270_BackTab: number
const KEY_3270_ChangeScreen: number
const KEY_3270_Copy: number
const KEY_3270_CursorBlink: number
const KEY_3270_CursorSelect: number
const KEY_3270_DeleteWord: number
const KEY_3270_Duplicate: number
const KEY_3270_Enter: number
const KEY_3270_EraseEOF: number
const KEY_3270_EraseInput: number
const KEY_3270_ExSelect: number
const KEY_3270_FieldMark: number
const KEY_3270_Ident: number
const KEY_3270_Jump: number
const KEY_3270_KeyClick: number
const KEY_3270_Left2: number
const KEY_3270_PA1: number
const KEY_3270_PA2: number
const KEY_3270_PA3: number
const KEY_3270_Play: number
const KEY_3270_PrintScreen: number
const KEY_3270_Quit: number
const KEY_3270_Record: number
const KEY_3270_Reset: number
const KEY_3270_Right2: number
const KEY_3270_Rule: number
const KEY_3270_Setup: number
const KEY_3270_Test: number
const KEY_4: number
const KEY_5: number
const KEY_6: number
const KEY_7: number
const KEY_8: number
const KEY_9: number
const KEY_A: number
const KEY_AE: number
const KEY_Aacute: number
const KEY_Abelowdot: number
const KEY_Abreve: number
const KEY_Abreveacute: number
const KEY_Abrevebelowdot: number
const KEY_Abrevegrave: number
const KEY_Abrevehook: number
const KEY_Abrevetilde: number
const KEY_AccessX_Enable: number
const KEY_AccessX_Feedback_Enable: number
const KEY_Acircumflex: number
const KEY_Acircumflexacute: number
const KEY_Acircumflexbelowdot: number
const KEY_Acircumflexgrave: number
const KEY_Acircumflexhook: number
const KEY_Acircumflextilde: number
const KEY_AddFavorite: number
const KEY_Adiaeresis: number
const KEY_Agrave: number
const KEY_Ahook: number
const KEY_Alt_L: number
const KEY_Alt_R: number
const KEY_Amacron: number
const KEY_Aogonek: number
const KEY_ApplicationLeft: number
const KEY_ApplicationRight: number
const KEY_Arabic_0: number
const KEY_Arabic_1: number
const KEY_Arabic_2: number
const KEY_Arabic_3: number
const KEY_Arabic_4: number
const KEY_Arabic_5: number
const KEY_Arabic_6: number
const KEY_Arabic_7: number
const KEY_Arabic_8: number
const KEY_Arabic_9: number
const KEY_Arabic_ain: number
const KEY_Arabic_alef: number
const KEY_Arabic_alefmaksura: number
const KEY_Arabic_beh: number
const KEY_Arabic_comma: number
const KEY_Arabic_dad: number
const KEY_Arabic_dal: number
const KEY_Arabic_damma: number
const KEY_Arabic_dammatan: number
const KEY_Arabic_ddal: number
const KEY_Arabic_farsi_yeh: number
const KEY_Arabic_fatha: number
const KEY_Arabic_fathatan: number
const KEY_Arabic_feh: number
const KEY_Arabic_fullstop: number
const KEY_Arabic_gaf: number
const KEY_Arabic_ghain: number
const KEY_Arabic_ha: number
const KEY_Arabic_hah: number
const KEY_Arabic_hamza: number
const KEY_Arabic_hamza_above: number
const KEY_Arabic_hamza_below: number
const KEY_Arabic_hamzaonalef: number
const KEY_Arabic_hamzaonwaw: number
const KEY_Arabic_hamzaonyeh: number
const KEY_Arabic_hamzaunderalef: number
const KEY_Arabic_heh: number
const KEY_Arabic_heh_doachashmee: number
const KEY_Arabic_heh_goal: number
const KEY_Arabic_jeem: number
const KEY_Arabic_jeh: number
const KEY_Arabic_kaf: number
const KEY_Arabic_kasra: number
const KEY_Arabic_kasratan: number
const KEY_Arabic_keheh: number
const KEY_Arabic_khah: number
const KEY_Arabic_lam: number
const KEY_Arabic_madda_above: number
const KEY_Arabic_maddaonalef: number
const KEY_Arabic_meem: number
const KEY_Arabic_noon: number
const KEY_Arabic_noon_ghunna: number
const KEY_Arabic_peh: number
const KEY_Arabic_percent: number
const KEY_Arabic_qaf: number
const KEY_Arabic_question_mark: number
const KEY_Arabic_ra: number
const KEY_Arabic_rreh: number
const KEY_Arabic_sad: number
const KEY_Arabic_seen: number
const KEY_Arabic_semicolon: number
const KEY_Arabic_shadda: number
const KEY_Arabic_sheen: number
const KEY_Arabic_sukun: number
const KEY_Arabic_superscript_alef: number
const KEY_Arabic_switch: number
const KEY_Arabic_tah: number
const KEY_Arabic_tatweel: number
const KEY_Arabic_tcheh: number
const KEY_Arabic_teh: number
const KEY_Arabic_tehmarbuta: number
const KEY_Arabic_thal: number
const KEY_Arabic_theh: number
const KEY_Arabic_tteh: number
const KEY_Arabic_veh: number
const KEY_Arabic_waw: number
const KEY_Arabic_yeh: number
const KEY_Arabic_yeh_baree: number
const KEY_Arabic_zah: number
const KEY_Arabic_zain: number
const KEY_Aring: number
const KEY_Armenian_AT: number
const KEY_Armenian_AYB: number
const KEY_Armenian_BEN: number
const KEY_Armenian_CHA: number
const KEY_Armenian_DA: number
const KEY_Armenian_DZA: number
const KEY_Armenian_E: number
const KEY_Armenian_FE: number
const KEY_Armenian_GHAT: number
const KEY_Armenian_GIM: number
const KEY_Armenian_HI: number
const KEY_Armenian_HO: number
const KEY_Armenian_INI: number
const KEY_Armenian_JE: number
const KEY_Armenian_KE: number
const KEY_Armenian_KEN: number
const KEY_Armenian_KHE: number
const KEY_Armenian_LYUN: number
const KEY_Armenian_MEN: number
const KEY_Armenian_NU: number
const KEY_Armenian_O: number
const KEY_Armenian_PE: number
const KEY_Armenian_PYUR: number
const KEY_Armenian_RA: number
const KEY_Armenian_RE: number
const KEY_Armenian_SE: number
const KEY_Armenian_SHA: number
const KEY_Armenian_TCHE: number
const KEY_Armenian_TO: number
const KEY_Armenian_TSA: number
const KEY_Armenian_TSO: number
const KEY_Armenian_TYUN: number
const KEY_Armenian_VEV: number
const KEY_Armenian_VO: number
const KEY_Armenian_VYUN: number
const KEY_Armenian_YECH: number
const KEY_Armenian_ZA: number
const KEY_Armenian_ZHE: number
const KEY_Armenian_accent: number
const KEY_Armenian_amanak: number
const KEY_Armenian_apostrophe: number
const KEY_Armenian_at: number
const KEY_Armenian_ayb: number
const KEY_Armenian_ben: number
const KEY_Armenian_but: number
const KEY_Armenian_cha: number
const KEY_Armenian_da: number
const KEY_Armenian_dza: number
const KEY_Armenian_e: number
const KEY_Armenian_exclam: number
const KEY_Armenian_fe: number
const KEY_Armenian_full_stop: number
const KEY_Armenian_ghat: number
const KEY_Armenian_gim: number
const KEY_Armenian_hi: number
const KEY_Armenian_ho: number
const KEY_Armenian_hyphen: number
const KEY_Armenian_ini: number
const KEY_Armenian_je: number
const KEY_Armenian_ke: number
const KEY_Armenian_ken: number
const KEY_Armenian_khe: number
const KEY_Armenian_ligature_ew: number
const KEY_Armenian_lyun: number
const KEY_Armenian_men: number
const KEY_Armenian_nu: number
const KEY_Armenian_o: number
const KEY_Armenian_paruyk: number
const KEY_Armenian_pe: number
const KEY_Armenian_pyur: number
const KEY_Armenian_question: number
const KEY_Armenian_ra: number
const KEY_Armenian_re: number
const KEY_Armenian_se: number
const KEY_Armenian_separation_mark: number
const KEY_Armenian_sha: number
const KEY_Armenian_shesht: number
const KEY_Armenian_tche: number
const KEY_Armenian_to: number
const KEY_Armenian_tsa: number
const KEY_Armenian_tso: number
const KEY_Armenian_tyun: number
const KEY_Armenian_verjaket: number
const KEY_Armenian_vev: number
const KEY_Armenian_vo: number
const KEY_Armenian_vyun: number
const KEY_Armenian_yech: number
const KEY_Armenian_yentamna: number
const KEY_Armenian_za: number
const KEY_Armenian_zhe: number
const KEY_Atilde: number
const KEY_AudibleBell_Enable: number
const KEY_AudioCycleTrack: number
const KEY_AudioForward: number
const KEY_AudioLowerVolume: number
const KEY_AudioMedia: number
const KEY_AudioMicMute: number
const KEY_AudioMute: number
const KEY_AudioNext: number
const KEY_AudioPause: number
const KEY_AudioPlay: number
const KEY_AudioPreset: number
const KEY_AudioPrev: number
const KEY_AudioRaiseVolume: number
const KEY_AudioRandomPlay: number
const KEY_AudioRecord: number
const KEY_AudioRepeat: number
const KEY_AudioRewind: number
const KEY_AudioStop: number
const KEY_Away: number
const KEY_B: number
const KEY_Babovedot: number
const KEY_Back: number
const KEY_BackForward: number
const KEY_BackSpace: number
const KEY_Battery: number
const KEY_Begin: number
const KEY_Blue: number
const KEY_Bluetooth: number
const KEY_Book: number
const KEY_BounceKeys_Enable: number
const KEY_Break: number
const KEY_BrightnessAdjust: number
const KEY_Byelorussian_SHORTU: number
const KEY_Byelorussian_shortu: number
const KEY_C: number
const KEY_CD: number
const KEY_CH: number
const KEY_C_H: number
const KEY_C_h: number
const KEY_Cabovedot: number
const KEY_Cacute: number
const KEY_Calculator: number
const KEY_Calendar: number
const KEY_Cancel: number
const KEY_Caps_Lock: number
const KEY_Ccaron: number
const KEY_Ccedilla: number
const KEY_Ccircumflex: number
const KEY_Ch: number
const KEY_Clear: number
const KEY_ClearGrab: number
const KEY_Close: number
const KEY_Codeinput: number
const KEY_ColonSign: number
const KEY_Community: number
const KEY_ContrastAdjust: number
const KEY_Control_L: number
const KEY_Control_R: number
const KEY_Copy: number
const KEY_CruzeiroSign: number
const KEY_Cut: number
const KEY_CycleAngle: number
const KEY_Cyrillic_A: number
const KEY_Cyrillic_BE: number
const KEY_Cyrillic_CHE: number
const KEY_Cyrillic_CHE_descender: number
const KEY_Cyrillic_CHE_vertstroke: number
const KEY_Cyrillic_DE: number
const KEY_Cyrillic_DZHE: number
const KEY_Cyrillic_E: number
const KEY_Cyrillic_EF: number
const KEY_Cyrillic_EL: number
const KEY_Cyrillic_EM: number
const KEY_Cyrillic_EN: number
const KEY_Cyrillic_EN_descender: number
const KEY_Cyrillic_ER: number
const KEY_Cyrillic_ES: number
const KEY_Cyrillic_GHE: number
const KEY_Cyrillic_GHE_bar: number
const KEY_Cyrillic_HA: number
const KEY_Cyrillic_HARDSIGN: number
const KEY_Cyrillic_HA_descender: number
const KEY_Cyrillic_I: number
const KEY_Cyrillic_IE: number
const KEY_Cyrillic_IO: number
const KEY_Cyrillic_I_macron: number
const KEY_Cyrillic_JE: number
const KEY_Cyrillic_KA: number
const KEY_Cyrillic_KA_descender: number
const KEY_Cyrillic_KA_vertstroke: number
const KEY_Cyrillic_LJE: number
const KEY_Cyrillic_NJE: number
const KEY_Cyrillic_O: number
const KEY_Cyrillic_O_bar: number
const KEY_Cyrillic_PE: number
const KEY_Cyrillic_SCHWA: number
const KEY_Cyrillic_SHA: number
const KEY_Cyrillic_SHCHA: number
const KEY_Cyrillic_SHHA: number
const KEY_Cyrillic_SHORTI: number
const KEY_Cyrillic_SOFTSIGN: number
const KEY_Cyrillic_TE: number
const KEY_Cyrillic_TSE: number
const KEY_Cyrillic_U: number
const KEY_Cyrillic_U_macron: number
const KEY_Cyrillic_U_straight: number
const KEY_Cyrillic_U_straight_bar: number
const KEY_Cyrillic_VE: number
const KEY_Cyrillic_YA: number
const KEY_Cyrillic_YERU: number
const KEY_Cyrillic_YU: number
const KEY_Cyrillic_ZE: number
const KEY_Cyrillic_ZHE: number
const KEY_Cyrillic_ZHE_descender: number
const KEY_Cyrillic_a: number
const KEY_Cyrillic_be: number
const KEY_Cyrillic_che: number
const KEY_Cyrillic_che_descender: number
const KEY_Cyrillic_che_vertstroke: number
const KEY_Cyrillic_de: number
const KEY_Cyrillic_dzhe: number
const KEY_Cyrillic_e: number
const KEY_Cyrillic_ef: number
const KEY_Cyrillic_el: number
const KEY_Cyrillic_em: number
const KEY_Cyrillic_en: number
const KEY_Cyrillic_en_descender: number
const KEY_Cyrillic_er: number
const KEY_Cyrillic_es: number
const KEY_Cyrillic_ghe: number
const KEY_Cyrillic_ghe_bar: number
const KEY_Cyrillic_ha: number
const KEY_Cyrillic_ha_descender: number
const KEY_Cyrillic_hardsign: number
const KEY_Cyrillic_i: number
const KEY_Cyrillic_i_macron: number
const KEY_Cyrillic_ie: number
const KEY_Cyrillic_io: number
const KEY_Cyrillic_je: number
const KEY_Cyrillic_ka: number
const KEY_Cyrillic_ka_descender: number
const KEY_Cyrillic_ka_vertstroke: number
const KEY_Cyrillic_lje: number
const KEY_Cyrillic_nje: number
const KEY_Cyrillic_o: number
const KEY_Cyrillic_o_bar: number
const KEY_Cyrillic_pe: number
const KEY_Cyrillic_schwa: number
const KEY_Cyrillic_sha: number
const KEY_Cyrillic_shcha: number
const KEY_Cyrillic_shha: number
const KEY_Cyrillic_shorti: number
const KEY_Cyrillic_softsign: number
const KEY_Cyrillic_te: number
const KEY_Cyrillic_tse: number
const KEY_Cyrillic_u: number
const KEY_Cyrillic_u_macron: number
const KEY_Cyrillic_u_straight: number
const KEY_Cyrillic_u_straight_bar: number
const KEY_Cyrillic_ve: number
const KEY_Cyrillic_ya: number
const KEY_Cyrillic_yeru: number
const KEY_Cyrillic_yu: number
const KEY_Cyrillic_ze: number
const KEY_Cyrillic_zhe: number
const KEY_Cyrillic_zhe_descender: number
const KEY_D: number
const KEY_DOS: number
const KEY_Dabovedot: number
const KEY_Dcaron: number
const KEY_Delete: number
const KEY_Display: number
const KEY_Documents: number
const KEY_DongSign: number
const KEY_Down: number
const KEY_Dstroke: number
const KEY_E: number
const KEY_ENG: number
const KEY_ETH: number
const KEY_EZH: number
const KEY_Eabovedot: number
const KEY_Eacute: number
const KEY_Ebelowdot: number
const KEY_Ecaron: number
const KEY_Ecircumflex: number
const KEY_Ecircumflexacute: number
const KEY_Ecircumflexbelowdot: number
const KEY_Ecircumflexgrave: number
const KEY_Ecircumflexhook: number
const KEY_Ecircumflextilde: number
const KEY_EcuSign: number
const KEY_Ediaeresis: number
const KEY_Egrave: number
const KEY_Ehook: number
const KEY_Eisu_Shift: number
const KEY_Eisu_toggle: number
const KEY_Eject: number
const KEY_Emacron: number
const KEY_End: number
const KEY_Eogonek: number
const KEY_Escape: number
const KEY_Eth: number
const KEY_Etilde: number
const KEY_EuroSign: number
const KEY_Excel: number
const KEY_Execute: number
const KEY_Explorer: number
const KEY_F: number
const KEY_F1: number
const KEY_F10: number
const KEY_F11: number
const KEY_F12: number
const KEY_F13: number
const KEY_F14: number
const KEY_F15: number
const KEY_F16: number
const KEY_F17: number
const KEY_F18: number
const KEY_F19: number
const KEY_F2: number
const KEY_F20: number
const KEY_F21: number
const KEY_F22: number
const KEY_F23: number
const KEY_F24: number
const KEY_F25: number
const KEY_F26: number
const KEY_F27: number
const KEY_F28: number
const KEY_F29: number
const KEY_F3: number
const KEY_F30: number
const KEY_F31: number
const KEY_F32: number
const KEY_F33: number
const KEY_F34: number
const KEY_F35: number
const KEY_F4: number
const KEY_F5: number
const KEY_F6: number
const KEY_F7: number
const KEY_F8: number
const KEY_F9: number
const KEY_FFrancSign: number
const KEY_Fabovedot: number
const KEY_Farsi_0: number
const KEY_Farsi_1: number
const KEY_Farsi_2: number
const KEY_Farsi_3: number
const KEY_Farsi_4: number
const KEY_Farsi_5: number
const KEY_Farsi_6: number
const KEY_Farsi_7: number
const KEY_Farsi_8: number
const KEY_Farsi_9: number
const KEY_Farsi_yeh: number
const KEY_Favorites: number
const KEY_Finance: number
const KEY_Find: number
const KEY_First_Virtual_Screen: number
const KEY_Forward: number
const KEY_FrameBack: number
const KEY_FrameForward: number
const KEY_G: number
const KEY_Gabovedot: number
const KEY_Game: number
const KEY_Gbreve: number
const KEY_Gcaron: number
const KEY_Gcedilla: number
const KEY_Gcircumflex: number
const KEY_Georgian_an: number
const KEY_Georgian_ban: number
const KEY_Georgian_can: number
const KEY_Georgian_char: number
const KEY_Georgian_chin: number
const KEY_Georgian_cil: number
const KEY_Georgian_don: number
const KEY_Georgian_en: number
const KEY_Georgian_fi: number
const KEY_Georgian_gan: number
const KEY_Georgian_ghan: number
const KEY_Georgian_hae: number
const KEY_Georgian_har: number
const KEY_Georgian_he: number
const KEY_Georgian_hie: number
const KEY_Georgian_hoe: number
const KEY_Georgian_in: number
const KEY_Georgian_jhan: number
const KEY_Georgian_jil: number
const KEY_Georgian_kan: number
const KEY_Georgian_khar: number
const KEY_Georgian_las: number
const KEY_Georgian_man: number
const KEY_Georgian_nar: number
const KEY_Georgian_on: number
const KEY_Georgian_par: number
const KEY_Georgian_phar: number
const KEY_Georgian_qar: number
const KEY_Georgian_rae: number
const KEY_Georgian_san: number
const KEY_Georgian_shin: number
const KEY_Georgian_tan: number
const KEY_Georgian_tar: number
const KEY_Georgian_un: number
const KEY_Georgian_vin: number
const KEY_Georgian_we: number
const KEY_Georgian_xan: number
const KEY_Georgian_zen: number
const KEY_Georgian_zhar: number
const KEY_Go: number
const KEY_Greek_ALPHA: number
const KEY_Greek_ALPHAaccent: number
const KEY_Greek_BETA: number
const KEY_Greek_CHI: number
const KEY_Greek_DELTA: number
const KEY_Greek_EPSILON: number
const KEY_Greek_EPSILONaccent: number
const KEY_Greek_ETA: number
const KEY_Greek_ETAaccent: number
const KEY_Greek_GAMMA: number
const KEY_Greek_IOTA: number
const KEY_Greek_IOTAaccent: number
const KEY_Greek_IOTAdiaeresis: number
const KEY_Greek_IOTAdieresis: number
const KEY_Greek_KAPPA: number
const KEY_Greek_LAMBDA: number
const KEY_Greek_LAMDA: number
const KEY_Greek_MU: number
const KEY_Greek_NU: number
const KEY_Greek_OMEGA: number
const KEY_Greek_OMEGAaccent: number
const KEY_Greek_OMICRON: number
const KEY_Greek_OMICRONaccent: number
const KEY_Greek_PHI: number
const KEY_Greek_PI: number
const KEY_Greek_PSI: number
const KEY_Greek_RHO: number
const KEY_Greek_SIGMA: number
const KEY_Greek_TAU: number
const KEY_Greek_THETA: number
const KEY_Greek_UPSILON: number
const KEY_Greek_UPSILONaccent: number
const KEY_Greek_UPSILONdieresis: number
const KEY_Greek_XI: number
const KEY_Greek_ZETA: number
const KEY_Greek_accentdieresis: number
const KEY_Greek_alpha: number
const KEY_Greek_alphaaccent: number
const KEY_Greek_beta: number
const KEY_Greek_chi: number
const KEY_Greek_delta: number
const KEY_Greek_epsilon: number
const KEY_Greek_epsilonaccent: number
const KEY_Greek_eta: number
const KEY_Greek_etaaccent: number
const KEY_Greek_finalsmallsigma: number
const KEY_Greek_gamma: number
const KEY_Greek_horizbar: number
const KEY_Greek_iota: number
const KEY_Greek_iotaaccent: number
const KEY_Greek_iotaaccentdieresis: number
const KEY_Greek_iotadieresis: number
const KEY_Greek_kappa: number
const KEY_Greek_lambda: number
const KEY_Greek_lamda: number
const KEY_Greek_mu: number
const KEY_Greek_nu: number
const KEY_Greek_omega: number
const KEY_Greek_omegaaccent: number
const KEY_Greek_omicron: number
const KEY_Greek_omicronaccent: number
const KEY_Greek_phi: number
const KEY_Greek_pi: number
const KEY_Greek_psi: number
const KEY_Greek_rho: number
const KEY_Greek_sigma: number
const KEY_Greek_switch: number
const KEY_Greek_tau: number
const KEY_Greek_theta: number
const KEY_Greek_upsilon: number
const KEY_Greek_upsilonaccent: number
const KEY_Greek_upsilonaccentdieresis: number
const KEY_Greek_upsilondieresis: number
const KEY_Greek_xi: number
const KEY_Greek_zeta: number
const KEY_Green: number
const KEY_H: number
const KEY_Hangul: number
const KEY_Hangul_A: number
const KEY_Hangul_AE: number
const KEY_Hangul_AraeA: number
const KEY_Hangul_AraeAE: number
const KEY_Hangul_Banja: number
const KEY_Hangul_Cieuc: number
const KEY_Hangul_Codeinput: number
const KEY_Hangul_Dikeud: number
const KEY_Hangul_E: number
const KEY_Hangul_EO: number
const KEY_Hangul_EU: number
const KEY_Hangul_End: number
const KEY_Hangul_Hanja: number
const KEY_Hangul_Hieuh: number
const KEY_Hangul_I: number
const KEY_Hangul_Ieung: number
const KEY_Hangul_J_Cieuc: number
const KEY_Hangul_J_Dikeud: number
const KEY_Hangul_J_Hieuh: number
const KEY_Hangul_J_Ieung: number
const KEY_Hangul_J_Jieuj: number
const KEY_Hangul_J_Khieuq: number
const KEY_Hangul_J_Kiyeog: number
const KEY_Hangul_J_KiyeogSios: number
const KEY_Hangul_J_KkogjiDalrinIeung: number
const KEY_Hangul_J_Mieum: number
const KEY_Hangul_J_Nieun: number
const KEY_Hangul_J_NieunHieuh: number
const KEY_Hangul_J_NieunJieuj: number
const KEY_Hangul_J_PanSios: number
const KEY_Hangul_J_Phieuf: number
const KEY_Hangul_J_Pieub: number
const KEY_Hangul_J_PieubSios: number
const KEY_Hangul_J_Rieul: number
const KEY_Hangul_J_RieulHieuh: number
const KEY_Hangul_J_RieulKiyeog: number
const KEY_Hangul_J_RieulMieum: number
const KEY_Hangul_J_RieulPhieuf: number
const KEY_Hangul_J_RieulPieub: number
const KEY_Hangul_J_RieulSios: number
const KEY_Hangul_J_RieulTieut: number
const KEY_Hangul_J_Sios: number
const KEY_Hangul_J_SsangKiyeog: number
const KEY_Hangul_J_SsangSios: number
const KEY_Hangul_J_Tieut: number
const KEY_Hangul_J_YeorinHieuh: number
const KEY_Hangul_Jamo: number
const KEY_Hangul_Jeonja: number
const KEY_Hangul_Jieuj: number
const KEY_Hangul_Khieuq: number
const KEY_Hangul_Kiyeog: number
const KEY_Hangul_KiyeogSios: number
const KEY_Hangul_KkogjiDalrinIeung: number
const KEY_Hangul_Mieum: number
const KEY_Hangul_MultipleCandidate: number
const KEY_Hangul_Nieun: number
const KEY_Hangul_NieunHieuh: number
const KEY_Hangul_NieunJieuj: number
const KEY_Hangul_O: number
const KEY_Hangul_OE: number
const KEY_Hangul_PanSios: number
const KEY_Hangul_Phieuf: number
const KEY_Hangul_Pieub: number
const KEY_Hangul_PieubSios: number
const KEY_Hangul_PostHanja: number
const KEY_Hangul_PreHanja: number
const KEY_Hangul_PreviousCandidate: number
const KEY_Hangul_Rieul: number
const KEY_Hangul_RieulHieuh: number
const KEY_Hangul_RieulKiyeog: number
const KEY_Hangul_RieulMieum: number
const KEY_Hangul_RieulPhieuf: number
const KEY_Hangul_RieulPieub: number
const KEY_Hangul_RieulSios: number
const KEY_Hangul_RieulTieut: number
const KEY_Hangul_RieulYeorinHieuh: number
const KEY_Hangul_Romaja: number
const KEY_Hangul_SingleCandidate: number
const KEY_Hangul_Sios: number
const KEY_Hangul_Special: number
const KEY_Hangul_SsangDikeud: number
const KEY_Hangul_SsangJieuj: number
const KEY_Hangul_SsangKiyeog: number
const KEY_Hangul_SsangPieub: number
const KEY_Hangul_SsangSios: number
const KEY_Hangul_Start: number
const KEY_Hangul_SunkyeongeumMieum: number
const KEY_Hangul_SunkyeongeumPhieuf: number
const KEY_Hangul_SunkyeongeumPieub: number
const KEY_Hangul_Tieut: number
const KEY_Hangul_U: number
const KEY_Hangul_WA: number
const KEY_Hangul_WAE: number
const KEY_Hangul_WE: number
const KEY_Hangul_WEO: number
const KEY_Hangul_WI: number
const KEY_Hangul_YA: number
const KEY_Hangul_YAE: number
const KEY_Hangul_YE: number
const KEY_Hangul_YEO: number
const KEY_Hangul_YI: number
const KEY_Hangul_YO: number
const KEY_Hangul_YU: number
const KEY_Hangul_YeorinHieuh: number
const KEY_Hangul_switch: number
const KEY_Hankaku: number
const KEY_Hcircumflex: number
const KEY_Hebrew_switch: number
const KEY_Help: number
const KEY_Henkan: number
const KEY_Henkan_Mode: number
const KEY_Hibernate: number
const KEY_Hiragana: number
const KEY_Hiragana_Katakana: number
const KEY_History: number
const KEY_Home: number
const KEY_HomePage: number
const KEY_HotLinks: number
const KEY_Hstroke: number
const KEY_Hyper_L: number
const KEY_Hyper_R: number
const KEY_I: number
const KEY_ISO_Center_Object: number
const KEY_ISO_Continuous_Underline: number
const KEY_ISO_Discontinuous_Underline: number
const KEY_ISO_Emphasize: number
const KEY_ISO_Enter: number
const KEY_ISO_Fast_Cursor_Down: number
const KEY_ISO_Fast_Cursor_Left: number
const KEY_ISO_Fast_Cursor_Right: number
const KEY_ISO_Fast_Cursor_Up: number
const KEY_ISO_First_Group: number
const KEY_ISO_First_Group_Lock: number
const KEY_ISO_Group_Latch: number
const KEY_ISO_Group_Lock: number
const KEY_ISO_Group_Shift: number
const KEY_ISO_Last_Group: number
const KEY_ISO_Last_Group_Lock: number
const KEY_ISO_Left_Tab: number
const KEY_ISO_Level2_Latch: number
const KEY_ISO_Level3_Latch: number
const KEY_ISO_Level3_Lock: number
const KEY_ISO_Level3_Shift: number
const KEY_ISO_Level5_Latch: number
const KEY_ISO_Level5_Lock: number
const KEY_ISO_Level5_Shift: number
const KEY_ISO_Lock: number
const KEY_ISO_Move_Line_Down: number
const KEY_ISO_Move_Line_Up: number
const KEY_ISO_Next_Group: number
const KEY_ISO_Next_Group_Lock: number
const KEY_ISO_Partial_Line_Down: number
const KEY_ISO_Partial_Line_Up: number
const KEY_ISO_Partial_Space_Left: number
const KEY_ISO_Partial_Space_Right: number
const KEY_ISO_Prev_Group: number
const KEY_ISO_Prev_Group_Lock: number
const KEY_ISO_Release_Both_Margins: number
const KEY_ISO_Release_Margin_Left: number
const KEY_ISO_Release_Margin_Right: number
const KEY_ISO_Set_Margin_Left: number
const KEY_ISO_Set_Margin_Right: number
const KEY_Iabovedot: number
const KEY_Iacute: number
const KEY_Ibelowdot: number
const KEY_Ibreve: number
const KEY_Icircumflex: number
const KEY_Idiaeresis: number
const KEY_Igrave: number
const KEY_Ihook: number
const KEY_Imacron: number
const KEY_Insert: number
const KEY_Iogonek: number
const KEY_Itilde: number
const KEY_J: number
const KEY_Jcircumflex: number
const KEY_K: number
const KEY_KP_0: number
const KEY_KP_1: number
const KEY_KP_2: number
const KEY_KP_3: number
const KEY_KP_4: number
const KEY_KP_5: number
const KEY_KP_6: number
const KEY_KP_7: number
const KEY_KP_8: number
const KEY_KP_9: number
const KEY_KP_Add: number
const KEY_KP_Begin: number
const KEY_KP_Decimal: number
const KEY_KP_Delete: number
const KEY_KP_Divide: number
const KEY_KP_Down: number
const KEY_KP_End: number
const KEY_KP_Enter: number
const KEY_KP_Equal: number
const KEY_KP_F1: number
const KEY_KP_F2: number
const KEY_KP_F3: number
const KEY_KP_F4: number
const KEY_KP_Home: number
const KEY_KP_Insert: number
const KEY_KP_Left: number
const KEY_KP_Multiply: number
const KEY_KP_Next: number
const KEY_KP_Page_Down: number
const KEY_KP_Page_Up: number
const KEY_KP_Prior: number
const KEY_KP_Right: number
const KEY_KP_Separator: number
const KEY_KP_Space: number
const KEY_KP_Subtract: number
const KEY_KP_Tab: number
const KEY_KP_Up: number
const KEY_Kana_Lock: number
const KEY_Kana_Shift: number
const KEY_Kanji: number
const KEY_Kanji_Bangou: number
const KEY_Katakana: number
const KEY_KbdBrightnessDown: number
const KEY_KbdBrightnessUp: number
const KEY_KbdLightOnOff: number
const KEY_Kcedilla: number
const KEY_Keyboard: number
const KEY_Korean_Won: number
const KEY_L: number
const KEY_L1: number
const KEY_L10: number
const KEY_L2: number
const KEY_L3: number
const KEY_L4: number
const KEY_L5: number
const KEY_L6: number
const KEY_L7: number
const KEY_L8: number
const KEY_L9: number
const KEY_Lacute: number
const KEY_Last_Virtual_Screen: number
const KEY_Launch0: number
const KEY_Launch1: number
const KEY_Launch2: number
const KEY_Launch3: number
const KEY_Launch4: number
const KEY_Launch5: number
const KEY_Launch6: number
const KEY_Launch7: number
const KEY_Launch8: number
const KEY_Launch9: number
const KEY_LaunchA: number
const KEY_LaunchB: number
const KEY_LaunchC: number
const KEY_LaunchD: number
const KEY_LaunchE: number
const KEY_LaunchF: number
const KEY_Lbelowdot: number
const KEY_Lcaron: number
const KEY_Lcedilla: number
const KEY_Left: number
const KEY_LightBulb: number
const KEY_Linefeed: number
const KEY_LiraSign: number
const KEY_LogGrabInfo: number
const KEY_LogOff: number
const KEY_LogWindowTree: number
const KEY_Lstroke: number
const KEY_M: number
const KEY_Mabovedot: number
const KEY_Macedonia_DSE: number
const KEY_Macedonia_GJE: number
const KEY_Macedonia_KJE: number
const KEY_Macedonia_dse: number
const KEY_Macedonia_gje: number
const KEY_Macedonia_kje: number
const KEY_Mae_Koho: number
const KEY_Mail: number
const KEY_MailForward: number
const KEY_Market: number
const KEY_Massyo: number
const KEY_Meeting: number
const KEY_Memo: number
const KEY_Menu: number
const KEY_MenuKB: number
const KEY_MenuPB: number
const KEY_Messenger: number
const KEY_Meta_L: number
const KEY_Meta_R: number
const KEY_MillSign: number
const KEY_ModeLock: number
const KEY_Mode_switch: number
const KEY_MonBrightnessDown: number
const KEY_MonBrightnessUp: number
const KEY_MouseKeys_Accel_Enable: number
const KEY_MouseKeys_Enable: number
const KEY_Muhenkan: number
const KEY_Multi_key: number
const KEY_MultipleCandidate: number
const KEY_Music: number
const KEY_MyComputer: number
const KEY_MySites: number
const KEY_N: number
const KEY_Nacute: number
const KEY_NairaSign: number
const KEY_Ncaron: number
const KEY_Ncedilla: number
const KEY_New: number
const KEY_NewSheqelSign: number
const KEY_News: number
const KEY_Next: number
const KEY_Next_VMode: number
const KEY_Next_Virtual_Screen: number
const KEY_Ntilde: number
const KEY_Num_Lock: number
const KEY_O: number
const KEY_OE: number
const KEY_Oacute: number
const KEY_Obarred: number
const KEY_Obelowdot: number
const KEY_Ocaron: number
const KEY_Ocircumflex: number
const KEY_Ocircumflexacute: number
const KEY_Ocircumflexbelowdot: number
const KEY_Ocircumflexgrave: number
const KEY_Ocircumflexhook: number
const KEY_Ocircumflextilde: number
const KEY_Odiaeresis: number
const KEY_Odoubleacute: number
const KEY_OfficeHome: number
const KEY_Ograve: number
const KEY_Ohook: number
const KEY_Ohorn: number
const KEY_Ohornacute: number
const KEY_Ohornbelowdot: number
const KEY_Ohorngrave: number
const KEY_Ohornhook: number
const KEY_Ohorntilde: number
const KEY_Omacron: number
const KEY_Ooblique: number
const KEY_Open: number
const KEY_OpenURL: number
const KEY_Option: number
const KEY_Oslash: number
const KEY_Otilde: number
const KEY_Overlay1_Enable: number
const KEY_Overlay2_Enable: number
const KEY_P: number
const KEY_Pabovedot: number
const KEY_Page_Down: number
const KEY_Page_Up: number
const KEY_Paste: number
const KEY_Pause: number
const KEY_PesetaSign: number
const KEY_Phone: number
const KEY_Pictures: number
const KEY_Pointer_Accelerate: number
const KEY_Pointer_Button1: number
const KEY_Pointer_Button2: number
const KEY_Pointer_Button3: number
const KEY_Pointer_Button4: number
const KEY_Pointer_Button5: number
const KEY_Pointer_Button_Dflt: number
const KEY_Pointer_DblClick1: number
const KEY_Pointer_DblClick2: number
const KEY_Pointer_DblClick3: number
const KEY_Pointer_DblClick4: number
const KEY_Pointer_DblClick5: number
const KEY_Pointer_DblClick_Dflt: number
const KEY_Pointer_DfltBtnNext: number
const KEY_Pointer_DfltBtnPrev: number
const KEY_Pointer_Down: number
const KEY_Pointer_DownLeft: number
const KEY_Pointer_DownRight: number
const KEY_Pointer_Drag1: number
const KEY_Pointer_Drag2: number
const KEY_Pointer_Drag3: number
const KEY_Pointer_Drag4: number
const KEY_Pointer_Drag5: number
const KEY_Pointer_Drag_Dflt: number
const KEY_Pointer_EnableKeys: number
const KEY_Pointer_Left: number
const KEY_Pointer_Right: number
const KEY_Pointer_Up: number
const KEY_Pointer_UpLeft: number
const KEY_Pointer_UpRight: number
const KEY_PowerDown: number
const KEY_PowerOff: number
const KEY_Prev_VMode: number
const KEY_Prev_Virtual_Screen: number
const KEY_PreviousCandidate: number
const KEY_Print: number
const KEY_Prior: number
const KEY_Q: number
const KEY_R: number
const KEY_R1: number
const KEY_R10: number
const KEY_R11: number
const KEY_R12: number
const KEY_R13: number
const KEY_R14: number
const KEY_R15: number
const KEY_R2: number
const KEY_R3: number
const KEY_R4: number
const KEY_R5: number
const KEY_R6: number
const KEY_R7: number
const KEY_R8: number
const KEY_R9: number
const KEY_RFKill: number
const KEY_Racute: number
const KEY_Rcaron: number
const KEY_Rcedilla: number
const KEY_Red: number
const KEY_Redo: number
const KEY_Refresh: number
const KEY_Reload: number
const KEY_RepeatKeys_Enable: number
const KEY_Reply: number
const KEY_Return: number
const KEY_Right: number
const KEY_RockerDown: number
const KEY_RockerEnter: number
const KEY_RockerUp: number
const KEY_Romaji: number
const KEY_RotateWindows: number
const KEY_RotationKB: number
const KEY_RotationPB: number
const KEY_RupeeSign: number
const KEY_S: number
const KEY_SCHWA: number
const KEY_Sabovedot: number
const KEY_Sacute: number
const KEY_Save: number
const KEY_Scaron: number
const KEY_Scedilla: number
const KEY_Scircumflex: number
const KEY_ScreenSaver: number
const KEY_ScrollClick: number
const KEY_ScrollDown: number
const KEY_ScrollUp: number
const KEY_Scroll_Lock: number
const KEY_Search: number
const KEY_Select: number
const KEY_SelectButton: number
const KEY_Send: number
const KEY_Serbian_DJE: number
const KEY_Serbian_DZE: number
const KEY_Serbian_JE: number
const KEY_Serbian_LJE: number
const KEY_Serbian_NJE: number
const KEY_Serbian_TSHE: number
const KEY_Serbian_dje: number
const KEY_Serbian_dze: number
const KEY_Serbian_je: number
const KEY_Serbian_lje: number
const KEY_Serbian_nje: number
const KEY_Serbian_tshe: number
const KEY_Shift_L: number
const KEY_Shift_Lock: number
const KEY_Shift_R: number
const KEY_Shop: number
const KEY_SingleCandidate: number
const KEY_Sinh_a: number
const KEY_Sinh_aa: number
const KEY_Sinh_aa2: number
const KEY_Sinh_ae: number
const KEY_Sinh_ae2: number
const KEY_Sinh_aee: number
const KEY_Sinh_aee2: number
const KEY_Sinh_ai: number
const KEY_Sinh_ai2: number
const KEY_Sinh_al: number
const KEY_Sinh_au: number
const KEY_Sinh_au2: number
const KEY_Sinh_ba: number
const KEY_Sinh_bha: number
const KEY_Sinh_ca: number
const KEY_Sinh_cha: number
const KEY_Sinh_dda: number
const KEY_Sinh_ddha: number
const KEY_Sinh_dha: number
const KEY_Sinh_dhha: number
const KEY_Sinh_e: number
const KEY_Sinh_e2: number
const KEY_Sinh_ee: number
const KEY_Sinh_ee2: number
const KEY_Sinh_fa: number
const KEY_Sinh_ga: number
const KEY_Sinh_gha: number
const KEY_Sinh_h2: number
const KEY_Sinh_ha: number
const KEY_Sinh_i: number
const KEY_Sinh_i2: number
const KEY_Sinh_ii: number
const KEY_Sinh_ii2: number
const KEY_Sinh_ja: number
const KEY_Sinh_jha: number
const KEY_Sinh_jnya: number
const KEY_Sinh_ka: number
const KEY_Sinh_kha: number
const KEY_Sinh_kunddaliya: number
const KEY_Sinh_la: number
const KEY_Sinh_lla: number
const KEY_Sinh_lu: number
const KEY_Sinh_lu2: number
const KEY_Sinh_luu: number
const KEY_Sinh_luu2: number
const KEY_Sinh_ma: number
const KEY_Sinh_mba: number
const KEY_Sinh_na: number
const KEY_Sinh_ndda: number
const KEY_Sinh_ndha: number
const KEY_Sinh_ng: number
const KEY_Sinh_ng2: number
const KEY_Sinh_nga: number
const KEY_Sinh_nja: number
const KEY_Sinh_nna: number
const KEY_Sinh_nya: number
const KEY_Sinh_o: number
const KEY_Sinh_o2: number
const KEY_Sinh_oo: number
const KEY_Sinh_oo2: number
const KEY_Sinh_pa: number
const KEY_Sinh_pha: number
const KEY_Sinh_ra: number
const KEY_Sinh_ri: number
const KEY_Sinh_rii: number
const KEY_Sinh_ru2: number
const KEY_Sinh_ruu2: number
const KEY_Sinh_sa: number
const KEY_Sinh_sha: number
const KEY_Sinh_ssha: number
const KEY_Sinh_tha: number
const KEY_Sinh_thha: number
const KEY_Sinh_tta: number
const KEY_Sinh_ttha: number
const KEY_Sinh_u: number
const KEY_Sinh_u2: number
const KEY_Sinh_uu: number
const KEY_Sinh_uu2: number
const KEY_Sinh_va: number
const KEY_Sinh_ya: number
const KEY_Sleep: number
const KEY_SlowKeys_Enable: number
const KEY_Spell: number
const KEY_SplitScreen: number
const KEY_Standby: number
const KEY_Start: number
const KEY_StickyKeys_Enable: number
const KEY_Stop: number
const KEY_Subtitle: number
const KEY_Super_L: number
const KEY_Super_R: number
const KEY_Support: number
const KEY_Suspend: number
const KEY_Switch_VT_1: number
const KEY_Switch_VT_10: number
const KEY_Switch_VT_11: number
const KEY_Switch_VT_12: number
const KEY_Switch_VT_2: number
const KEY_Switch_VT_3: number
const KEY_Switch_VT_4: number
const KEY_Switch_VT_5: number
const KEY_Switch_VT_6: number
const KEY_Switch_VT_7: number
const KEY_Switch_VT_8: number
const KEY_Switch_VT_9: number
const KEY_Sys_Req: number
const KEY_T: number
const KEY_THORN: number
const KEY_Tab: number
const KEY_Tabovedot: number
const KEY_TaskPane: number
const KEY_Tcaron: number
const KEY_Tcedilla: number
const KEY_Terminal: number
const KEY_Terminate_Server: number
const KEY_Thai_baht: number
const KEY_Thai_bobaimai: number
const KEY_Thai_chochan: number
const KEY_Thai_chochang: number
const KEY_Thai_choching: number
const KEY_Thai_chochoe: number
const KEY_Thai_dochada: number
const KEY_Thai_dodek: number
const KEY_Thai_fofa: number
const KEY_Thai_fofan: number
const KEY_Thai_hohip: number
const KEY_Thai_honokhuk: number
const KEY_Thai_khokhai: number
const KEY_Thai_khokhon: number
const KEY_Thai_khokhuat: number
const KEY_Thai_khokhwai: number
const KEY_Thai_khorakhang: number
const KEY_Thai_kokai: number
const KEY_Thai_lakkhangyao: number
const KEY_Thai_lekchet: number
const KEY_Thai_lekha: number
const KEY_Thai_lekhok: number
const KEY_Thai_lekkao: number
const KEY_Thai_leknung: number
const KEY_Thai_lekpaet: number
const KEY_Thai_leksam: number
const KEY_Thai_leksi: number
const KEY_Thai_leksong: number
const KEY_Thai_leksun: number
const KEY_Thai_lochula: number
const KEY_Thai_loling: number
const KEY_Thai_lu: number
const KEY_Thai_maichattawa: number
const KEY_Thai_maiek: number
const KEY_Thai_maihanakat: number
const KEY_Thai_maihanakat_maitho: number
const KEY_Thai_maitaikhu: number
const KEY_Thai_maitho: number
const KEY_Thai_maitri: number
const KEY_Thai_maiyamok: number
const KEY_Thai_moma: number
const KEY_Thai_ngongu: number
const KEY_Thai_nikhahit: number
const KEY_Thai_nonen: number
const KEY_Thai_nonu: number
const KEY_Thai_oang: number
const KEY_Thai_paiyannoi: number
const KEY_Thai_phinthu: number
const KEY_Thai_phophan: number
const KEY_Thai_phophung: number
const KEY_Thai_phosamphao: number
const KEY_Thai_popla: number
const KEY_Thai_rorua: number
const KEY_Thai_ru: number
const KEY_Thai_saraa: number
const KEY_Thai_saraaa: number
const KEY_Thai_saraae: number
const KEY_Thai_saraaimaimalai: number
const KEY_Thai_saraaimaimuan: number
const KEY_Thai_saraam: number
const KEY_Thai_sarae: number
const KEY_Thai_sarai: number
const KEY_Thai_saraii: number
const KEY_Thai_sarao: number
const KEY_Thai_sarau: number
const KEY_Thai_saraue: number
const KEY_Thai_sarauee: number
const KEY_Thai_sarauu: number
const KEY_Thai_sorusi: number
const KEY_Thai_sosala: number
const KEY_Thai_soso: number
const KEY_Thai_sosua: number
const KEY_Thai_thanthakhat: number
const KEY_Thai_thonangmontho: number
const KEY_Thai_thophuthao: number
const KEY_Thai_thothahan: number
const KEY_Thai_thothan: number
const KEY_Thai_thothong: number
const KEY_Thai_thothung: number
const KEY_Thai_topatak: number
const KEY_Thai_totao: number
const KEY_Thai_wowaen: number
const KEY_Thai_yoyak: number
const KEY_Thai_yoying: number
const KEY_Thorn: number
const KEY_Time: number
const KEY_ToDoList: number
const KEY_Tools: number
const KEY_TopMenu: number
const KEY_TouchpadOff: number
const KEY_TouchpadOn: number
const KEY_TouchpadToggle: number
const KEY_Touroku: number
const KEY_Travel: number
const KEY_Tslash: number
const KEY_U: number
const KEY_UWB: number
const KEY_Uacute: number
const KEY_Ubelowdot: number
const KEY_Ubreve: number
const KEY_Ucircumflex: number
const KEY_Udiaeresis: number
const KEY_Udoubleacute: number
const KEY_Ugrave: number
const KEY_Uhook: number
const KEY_Uhorn: number
const KEY_Uhornacute: number
const KEY_Uhornbelowdot: number
const KEY_Uhorngrave: number
const KEY_Uhornhook: number
const KEY_Uhorntilde: number
const KEY_Ukrainian_GHE_WITH_UPTURN: number
const KEY_Ukrainian_I: number
const KEY_Ukrainian_IE: number
const KEY_Ukrainian_YI: number
const KEY_Ukrainian_ghe_with_upturn: number
const KEY_Ukrainian_i: number
const KEY_Ukrainian_ie: number
const KEY_Ukrainian_yi: number
const KEY_Ukranian_I: number
const KEY_Ukranian_JE: number
const KEY_Ukranian_YI: number
const KEY_Ukranian_i: number
const KEY_Ukranian_je: number
const KEY_Ukranian_yi: number
const KEY_Umacron: number
const KEY_Undo: number
const KEY_Ungrab: number
const KEY_Uogonek: number
const KEY_Up: number
const KEY_Uring: number
const KEY_User1KB: number
const KEY_User2KB: number
const KEY_UserPB: number
const KEY_Utilde: number
const KEY_V: number
const KEY_VendorHome: number
const KEY_Video: number
const KEY_View: number
const KEY_VoidSymbol: number
const KEY_W: number
const KEY_WLAN: number
const KEY_WWAN: number
const KEY_WWW: number
const KEY_Wacute: number
const KEY_WakeUp: number
const KEY_Wcircumflex: number
const KEY_Wdiaeresis: number
const KEY_WebCam: number
const KEY_Wgrave: number
const KEY_WheelButton: number
const KEY_WindowClear: number
const KEY_WonSign: number
const KEY_Word: number
const KEY_X: number
const KEY_Xabovedot: number
const KEY_Xfer: number
const KEY_Y: number
const KEY_Yacute: number
const KEY_Ybelowdot: number
const KEY_Ycircumflex: number
const KEY_Ydiaeresis: number
const KEY_Yellow: number
const KEY_Ygrave: number
const KEY_Yhook: number
const KEY_Ytilde: number
const KEY_Z: number
const KEY_Zabovedot: number
const KEY_Zacute: number
const KEY_Zcaron: number
const KEY_Zen_Koho: number
const KEY_Zenkaku: number
const KEY_Zenkaku_Hankaku: number
const KEY_ZoomIn: number
const KEY_ZoomOut: number
const KEY_Zstroke: number
const KEY_a: number
const KEY_aacute: number
const KEY_abelowdot: number
const KEY_abovedot: number
const KEY_abreve: number
const KEY_abreveacute: number
const KEY_abrevebelowdot: number
const KEY_abrevegrave: number
const KEY_abrevehook: number
const KEY_abrevetilde: number
const KEY_acircumflex: number
const KEY_acircumflexacute: number
const KEY_acircumflexbelowdot: number
const KEY_acircumflexgrave: number
const KEY_acircumflexhook: number
const KEY_acircumflextilde: number
const KEY_acute: number
const KEY_adiaeresis: number
const KEY_ae: number
const KEY_agrave: number
const KEY_ahook: number
const KEY_amacron: number
const KEY_ampersand: number
const KEY_aogonek: number
const KEY_apostrophe: number
const KEY_approxeq: number
const KEY_approximate: number
const KEY_aring: number
const KEY_asciicircum: number
const KEY_asciitilde: number
const KEY_asterisk: number
const KEY_at: number
const KEY_atilde: number
const KEY_b: number
const KEY_babovedot: number
const KEY_backslash: number
const KEY_ballotcross: number
const KEY_bar: number
const KEY_because: number
const KEY_blank: number
const KEY_botintegral: number
const KEY_botleftparens: number
const KEY_botleftsqbracket: number
const KEY_botleftsummation: number
const KEY_botrightparens: number
const KEY_botrightsqbracket: number
const KEY_botrightsummation: number
const KEY_bott: number
const KEY_botvertsummationconnector: number
const KEY_braceleft: number
const KEY_braceright: number
const KEY_bracketleft: number
const KEY_bracketright: number
const KEY_braille_blank: number
const KEY_braille_dot_1: number
const KEY_braille_dot_10: number
const KEY_braille_dot_2: number
const KEY_braille_dot_3: number
const KEY_braille_dot_4: number
const KEY_braille_dot_5: number
const KEY_braille_dot_6: number
const KEY_braille_dot_7: number
const KEY_braille_dot_8: number
const KEY_braille_dot_9: number
const KEY_braille_dots_1: number
const KEY_braille_dots_12: number
const KEY_braille_dots_123: number
const KEY_braille_dots_1234: number
const KEY_braille_dots_12345: number
const KEY_braille_dots_123456: number
const KEY_braille_dots_1234567: number
const KEY_braille_dots_12345678: number
const KEY_braille_dots_1234568: number
const KEY_braille_dots_123457: number
const KEY_braille_dots_1234578: number
const KEY_braille_dots_123458: number
const KEY_braille_dots_12346: number
const KEY_braille_dots_123467: number
const KEY_braille_dots_1234678: number
const KEY_braille_dots_123468: number
const KEY_braille_dots_12347: number
const KEY_braille_dots_123478: number
const KEY_braille_dots_12348: number
const KEY_braille_dots_1235: number
const KEY_braille_dots_12356: number
const KEY_braille_dots_123567: number
const KEY_braille_dots_1235678: number
const KEY_braille_dots_123568: number
const KEY_braille_dots_12357: number
const KEY_braille_dots_123578: number
const KEY_braille_dots_12358: number
const KEY_braille_dots_1236: number
const KEY_braille_dots_12367: number
const KEY_braille_dots_123678: number
const KEY_braille_dots_12368: number
const KEY_braille_dots_1237: number
const KEY_braille_dots_12378: number
const KEY_braille_dots_1238: number
const KEY_braille_dots_124: number
const KEY_braille_dots_1245: number
const KEY_braille_dots_12456: number
const KEY_braille_dots_124567: number
const KEY_braille_dots_1245678: number
const KEY_braille_dots_124568: number
const KEY_braille_dots_12457: number
const KEY_braille_dots_124578: number
const KEY_braille_dots_12458: number
const KEY_braille_dots_1246: number
const KEY_braille_dots_12467: number
const KEY_braille_dots_124678: number
const KEY_braille_dots_12468: number
const KEY_braille_dots_1247: number
const KEY_braille_dots_12478: number
const KEY_braille_dots_1248: number
const KEY_braille_dots_125: number
const KEY_braille_dots_1256: number
const KEY_braille_dots_12567: number
const KEY_braille_dots_125678: number
const KEY_braille_dots_12568: number
const KEY_braille_dots_1257: number
const KEY_braille_dots_12578: number
const KEY_braille_dots_1258: number
const KEY_braille_dots_126: number
const KEY_braille_dots_1267: number
const KEY_braille_dots_12678: number
const KEY_braille_dots_1268: number
const KEY_braille_dots_127: number
const KEY_braille_dots_1278: number
const KEY_braille_dots_128: number
const KEY_braille_dots_13: number
const KEY_braille_dots_134: number
const KEY_braille_dots_1345: number
const KEY_braille_dots_13456: number
const KEY_braille_dots_134567: number
const KEY_braille_dots_1345678: number
const KEY_braille_dots_134568: number
const KEY_braille_dots_13457: number
const KEY_braille_dots_134578: number
const KEY_braille_dots_13458: number
const KEY_braille_dots_1346: number
const KEY_braille_dots_13467: number
const KEY_braille_dots_134678: number
const KEY_braille_dots_13468: number
const KEY_braille_dots_1347: number
const KEY_braille_dots_13478: number
const KEY_braille_dots_1348: number
const KEY_braille_dots_135: number
const KEY_braille_dots_1356: number
const KEY_braille_dots_13567: number
const KEY_braille_dots_135678: number
const KEY_braille_dots_13568: number
const KEY_braille_dots_1357: number
const KEY_braille_dots_13578: number
const KEY_braille_dots_1358: number
const KEY_braille_dots_136: number
const KEY_braille_dots_1367: number
const KEY_braille_dots_13678: number
const KEY_braille_dots_1368: number
const KEY_braille_dots_137: number
const KEY_braille_dots_1378: number
const KEY_braille_dots_138: number
const KEY_braille_dots_14: number
const KEY_braille_dots_145: number
const KEY_braille_dots_1456: number
const KEY_braille_dots_14567: number
const KEY_braille_dots_145678: number
const KEY_braille_dots_14568: number
const KEY_braille_dots_1457: number
const KEY_braille_dots_14578: number
const KEY_braille_dots_1458: number
const KEY_braille_dots_146: number
const KEY_braille_dots_1467: number
const KEY_braille_dots_14678: number
const KEY_braille_dots_1468: number
const KEY_braille_dots_147: number
const KEY_braille_dots_1478: number
const KEY_braille_dots_148: number
const KEY_braille_dots_15: number
const KEY_braille_dots_156: number
const KEY_braille_dots_1567: number
const KEY_braille_dots_15678: number
const KEY_braille_dots_1568: number
const KEY_braille_dots_157: number
const KEY_braille_dots_1578: number
const KEY_braille_dots_158: number
const KEY_braille_dots_16: number
const KEY_braille_dots_167: number
const KEY_braille_dots_1678: number
const KEY_braille_dots_168: number
const KEY_braille_dots_17: number
const KEY_braille_dots_178: number
const KEY_braille_dots_18: number
const KEY_braille_dots_2: number
const KEY_braille_dots_23: number
const KEY_braille_dots_234: number
const KEY_braille_dots_2345: number
const KEY_braille_dots_23456: number
const KEY_braille_dots_234567: number
const KEY_braille_dots_2345678: number
const KEY_braille_dots_234568: number
const KEY_braille_dots_23457: number
const KEY_braille_dots_234578: number
const KEY_braille_dots_23458: number
const KEY_braille_dots_2346: number
const KEY_braille_dots_23467: number
const KEY_braille_dots_234678: number
const KEY_braille_dots_23468: number
const KEY_braille_dots_2347: number
const KEY_braille_dots_23478: number
const KEY_braille_dots_2348: number
const KEY_braille_dots_235: number
const KEY_braille_dots_2356: number
const KEY_braille_dots_23567: number
const KEY_braille_dots_235678: number
const KEY_braille_dots_23568: number
const KEY_braille_dots_2357: number
const KEY_braille_dots_23578: number
const KEY_braille_dots_2358: number
const KEY_braille_dots_236: number
const KEY_braille_dots_2367: number
const KEY_braille_dots_23678: number
const KEY_braille_dots_2368: number
const KEY_braille_dots_237: number
const KEY_braille_dots_2378: number
const KEY_braille_dots_238: number
const KEY_braille_dots_24: number
const KEY_braille_dots_245: number
const KEY_braille_dots_2456: number
const KEY_braille_dots_24567: number
const KEY_braille_dots_245678: number
const KEY_braille_dots_24568: number
const KEY_braille_dots_2457: number
const KEY_braille_dots_24578: number
const KEY_braille_dots_2458: number
const KEY_braille_dots_246: number
const KEY_braille_dots_2467: number
const KEY_braille_dots_24678: number
const KEY_braille_dots_2468: number
const KEY_braille_dots_247: number
const KEY_braille_dots_2478: number
const KEY_braille_dots_248: number
const KEY_braille_dots_25: number
const KEY_braille_dots_256: number
const KEY_braille_dots_2567: number
const KEY_braille_dots_25678: number
const KEY_braille_dots_2568: number
const KEY_braille_dots_257: number
const KEY_braille_dots_2578: number
const KEY_braille_dots_258: number
const KEY_braille_dots_26: number
const KEY_braille_dots_267: number
const KEY_braille_dots_2678: number
const KEY_braille_dots_268: number
const KEY_braille_dots_27: number
const KEY_braille_dots_278: number
const KEY_braille_dots_28: number
const KEY_braille_dots_3: number
const KEY_braille_dots_34: number
const KEY_braille_dots_345: number
const KEY_braille_dots_3456: number
const KEY_braille_dots_34567: number
const KEY_braille_dots_345678: number
const KEY_braille_dots_34568: number
const KEY_braille_dots_3457: number
const KEY_braille_dots_34578: number
const KEY_braille_dots_3458: number
const KEY_braille_dots_346: number
const KEY_braille_dots_3467: number
const KEY_braille_dots_34678: number
const KEY_braille_dots_3468: number
const KEY_braille_dots_347: number
const KEY_braille_dots_3478: number
const KEY_braille_dots_348: number
const KEY_braille_dots_35: number
const KEY_braille_dots_356: number
const KEY_braille_dots_3567: number
const KEY_braille_dots_35678: number
const KEY_braille_dots_3568: number
const KEY_braille_dots_357: number
const KEY_braille_dots_3578: number
const KEY_braille_dots_358: number
const KEY_braille_dots_36: number
const KEY_braille_dots_367: number
const KEY_braille_dots_3678: number
const KEY_braille_dots_368: number
const KEY_braille_dots_37: number
const KEY_braille_dots_378: number
const KEY_braille_dots_38: number
const KEY_braille_dots_4: number
const KEY_braille_dots_45: number
const KEY_braille_dots_456: number
const KEY_braille_dots_4567: number
const KEY_braille_dots_45678: number
const KEY_braille_dots_4568: number
const KEY_braille_dots_457: number
const KEY_braille_dots_4578: number
const KEY_braille_dots_458: number
const KEY_braille_dots_46: number
const KEY_braille_dots_467: number
const KEY_braille_dots_4678: number
const KEY_braille_dots_468: number
const KEY_braille_dots_47: number
const KEY_braille_dots_478: number
const KEY_braille_dots_48: number
const KEY_braille_dots_5: number
const KEY_braille_dots_56: number
const KEY_braille_dots_567: number
const KEY_braille_dots_5678: number
const KEY_braille_dots_568: number
const KEY_braille_dots_57: number
const KEY_braille_dots_578: number
const KEY_braille_dots_58: number
const KEY_braille_dots_6: number
const KEY_braille_dots_67: number
const KEY_braille_dots_678: number
const KEY_braille_dots_68: number
const KEY_braille_dots_7: number
const KEY_braille_dots_78: number
const KEY_braille_dots_8: number
const KEY_breve: number
const KEY_brokenbar: number
const KEY_c: number
const KEY_c_h: number
const KEY_cabovedot: number
const KEY_cacute: number
const KEY_careof: number
const KEY_caret: number
const KEY_caron: number
const KEY_ccaron: number
const KEY_ccedilla: number
const KEY_ccircumflex: number
const KEY_cedilla: number
const KEY_cent: number
const KEY_ch: number
const KEY_checkerboard: number
const KEY_checkmark: number
const KEY_circle: number
const KEY_club: number
const KEY_colon: number
const KEY_comma: number
const KEY_containsas: number
const KEY_copyright: number
const KEY_cr: number
const KEY_crossinglines: number
const KEY_cuberoot: number
const KEY_currency: number
const KEY_cursor: number
const KEY_d: number
const KEY_dabovedot: number
const KEY_dagger: number
const KEY_dcaron: number
const KEY_dead_A: number
const KEY_dead_E: number
const KEY_dead_I: number
const KEY_dead_O: number
const KEY_dead_U: number
const KEY_dead_a: number
const KEY_dead_abovecomma: number
const KEY_dead_abovedot: number
const KEY_dead_abovereversedcomma: number
const KEY_dead_abovering: number
const KEY_dead_aboveverticalline: number
const KEY_dead_acute: number
const KEY_dead_belowbreve: number
const KEY_dead_belowcircumflex: number
const KEY_dead_belowcomma: number
const KEY_dead_belowdiaeresis: number
const KEY_dead_belowdot: number
const KEY_dead_belowmacron: number
const KEY_dead_belowring: number
const KEY_dead_belowtilde: number
const KEY_dead_belowverticalline: number
const KEY_dead_breve: number
const KEY_dead_capital_schwa: number
const KEY_dead_caron: number
const KEY_dead_cedilla: number
const KEY_dead_circumflex: number
const KEY_dead_currency: number
const KEY_dead_dasia: number
const KEY_dead_diaeresis: number
const KEY_dead_doubleacute: number
const KEY_dead_doublegrave: number
const KEY_dead_e: number
const KEY_dead_grave: number
const KEY_dead_greek: number
const KEY_dead_hook: number
const KEY_dead_horn: number
const KEY_dead_i: number
const KEY_dead_invertedbreve: number
const KEY_dead_iota: number
const KEY_dead_longsolidusoverlay: number
const KEY_dead_lowline: number
const KEY_dead_macron: number
const KEY_dead_o: number
const KEY_dead_ogonek: number
const KEY_dead_perispomeni: number
const KEY_dead_psili: number
const KEY_dead_semivoiced_sound: number
const KEY_dead_small_schwa: number
const KEY_dead_stroke: number
const KEY_dead_tilde: number
const KEY_dead_u: number
const KEY_dead_voiced_sound: number
const KEY_decimalpoint: number
const KEY_degree: number
const KEY_diaeresis: number
const KEY_diamond: number
const KEY_digitspace: number
const KEY_dintegral: number
const KEY_division: number
const KEY_dollar: number
const KEY_doubbaselinedot: number
const KEY_doubleacute: number
const KEY_doubledagger: number
const KEY_doublelowquotemark: number
const KEY_downarrow: number
const KEY_downcaret: number
const KEY_downshoe: number
const KEY_downstile: number
const KEY_downtack: number
const KEY_dstroke: number
const KEY_e: number
const KEY_eabovedot: number
const KEY_eacute: number
const KEY_ebelowdot: number
const KEY_ecaron: number
const KEY_ecircumflex: number
const KEY_ecircumflexacute: number
const KEY_ecircumflexbelowdot: number
const KEY_ecircumflexgrave: number
const KEY_ecircumflexhook: number
const KEY_ecircumflextilde: number
const KEY_ediaeresis: number
const KEY_egrave: number
const KEY_ehook: number
const KEY_eightsubscript: number
const KEY_eightsuperior: number
const KEY_elementof: number
const KEY_ellipsis: number
const KEY_em3space: number
const KEY_em4space: number
const KEY_emacron: number
const KEY_emdash: number
const KEY_emfilledcircle: number
const KEY_emfilledrect: number
const KEY_emopencircle: number
const KEY_emopenrectangle: number
const KEY_emptyset: number
const KEY_emspace: number
const KEY_endash: number
const KEY_enfilledcircbullet: number
const KEY_enfilledsqbullet: number
const KEY_eng: number
const KEY_enopencircbullet: number
const KEY_enopensquarebullet: number
const KEY_enspace: number
const KEY_eogonek: number
const KEY_equal: number
const KEY_eth: number
const KEY_etilde: number
const KEY_exclam: number
const KEY_exclamdown: number
const KEY_ezh: number
const KEY_f: number
const KEY_fabovedot: number
const KEY_femalesymbol: number
const KEY_ff: number
const KEY_figdash: number
const KEY_filledlefttribullet: number
const KEY_filledrectbullet: number
const KEY_filledrighttribullet: number
const KEY_filledtribulletdown: number
const KEY_filledtribulletup: number
const KEY_fiveeighths: number
const KEY_fivesixths: number
const KEY_fivesubscript: number
const KEY_fivesuperior: number
const KEY_fourfifths: number
const KEY_foursubscript: number
const KEY_foursuperior: number
const KEY_fourthroot: number
const KEY_function: number
const KEY_g: number
const KEY_gabovedot: number
const KEY_gbreve: number
const KEY_gcaron: number
const KEY_gcedilla: number
const KEY_gcircumflex: number
const KEY_grave: number
const KEY_greater: number
const KEY_greaterthanequal: number
const KEY_guillemotleft: number
const KEY_guillemotright: number
const KEY_h: number
const KEY_hairspace: number
const KEY_hcircumflex: number
const KEY_heart: number
const KEY_hebrew_aleph: number
const KEY_hebrew_ayin: number
const KEY_hebrew_bet: number
const KEY_hebrew_beth: number
const KEY_hebrew_chet: number
const KEY_hebrew_dalet: number
const KEY_hebrew_daleth: number
const KEY_hebrew_doublelowline: number
const KEY_hebrew_finalkaph: number
const KEY_hebrew_finalmem: number
const KEY_hebrew_finalnun: number
const KEY_hebrew_finalpe: number
const KEY_hebrew_finalzade: number
const KEY_hebrew_finalzadi: number
const KEY_hebrew_gimel: number
const KEY_hebrew_gimmel: number
const KEY_hebrew_he: number
const KEY_hebrew_het: number
const KEY_hebrew_kaph: number
const KEY_hebrew_kuf: number
const KEY_hebrew_lamed: number
const KEY_hebrew_mem: number
const KEY_hebrew_nun: number
const KEY_hebrew_pe: number
const KEY_hebrew_qoph: number
const KEY_hebrew_resh: number
const KEY_hebrew_samech: number
const KEY_hebrew_samekh: number
const KEY_hebrew_shin: number
const KEY_hebrew_taf: number
const KEY_hebrew_taw: number
const KEY_hebrew_tet: number
const KEY_hebrew_teth: number
const KEY_hebrew_waw: number
const KEY_hebrew_yod: number
const KEY_hebrew_zade: number
const KEY_hebrew_zadi: number
const KEY_hebrew_zain: number
const KEY_hebrew_zayin: number
const KEY_hexagram: number
const KEY_horizconnector: number
const KEY_horizlinescan1: number
const KEY_horizlinescan3: number
const KEY_horizlinescan5: number
const KEY_horizlinescan7: number
const KEY_horizlinescan9: number
const KEY_hstroke: number
const KEY_ht: number
const KEY_hyphen: number
const KEY_i: number
const KEY_iTouch: number
const KEY_iacute: number
const KEY_ibelowdot: number
const KEY_ibreve: number
const KEY_icircumflex: number
const KEY_identical: number
const KEY_idiaeresis: number
const KEY_idotless: number
const KEY_ifonlyif: number
const KEY_igrave: number
const KEY_ihook: number
const KEY_imacron: number
const KEY_implies: number
const KEY_includedin: number
const KEY_includes: number
const KEY_infinity: number
const KEY_integral: number
const KEY_intersection: number
const KEY_iogonek: number
const KEY_itilde: number
const KEY_j: number
const KEY_jcircumflex: number
const KEY_jot: number
const KEY_k: number
const KEY_kana_A: number
const KEY_kana_CHI: number
const KEY_kana_E: number
const KEY_kana_FU: number
const KEY_kana_HA: number
const KEY_kana_HE: number
const KEY_kana_HI: number
const KEY_kana_HO: number
const KEY_kana_HU: number
const KEY_kana_I: number
const KEY_kana_KA: number
const KEY_kana_KE: number
const KEY_kana_KI: number
const KEY_kana_KO: number
const KEY_kana_KU: number
const KEY_kana_MA: number
const KEY_kana_ME: number
const KEY_kana_MI: number
const KEY_kana_MO: number
const KEY_kana_MU: number
const KEY_kana_N: number
const KEY_kana_NA: number
const KEY_kana_NE: number
const KEY_kana_NI: number
const KEY_kana_NO: number
const KEY_kana_NU: number
const KEY_kana_O: number
const KEY_kana_RA: number
const KEY_kana_RE: number
const KEY_kana_RI: number
const KEY_kana_RO: number
const KEY_kana_RU: number
const KEY_kana_SA: number
const KEY_kana_SE: number
const KEY_kana_SHI: number
const KEY_kana_SO: number
const KEY_kana_SU: number
const KEY_kana_TA: number
const KEY_kana_TE: number
const KEY_kana_TI: number
const KEY_kana_TO: number
const KEY_kana_TSU: number
const KEY_kana_TU: number
const KEY_kana_U: number
const KEY_kana_WA: number
const KEY_kana_WO: number
const KEY_kana_YA: number
const KEY_kana_YO: number
const KEY_kana_YU: number
const KEY_kana_a: number
const KEY_kana_closingbracket: number
const KEY_kana_comma: number
const KEY_kana_conjunctive: number
const KEY_kana_e: number
const KEY_kana_fullstop: number
const KEY_kana_i: number
const KEY_kana_middledot: number
const KEY_kana_o: number
const KEY_kana_openingbracket: number
const KEY_kana_switch: number
const KEY_kana_tsu: number
const KEY_kana_tu: number
const KEY_kana_u: number
const KEY_kana_ya: number
const KEY_kana_yo: number
const KEY_kana_yu: number
const KEY_kappa: number
const KEY_kcedilla: number
const KEY_kra: number
const KEY_l: number
const KEY_lacute: number
const KEY_latincross: number
const KEY_lbelowdot: number
const KEY_lcaron: number
const KEY_lcedilla: number
const KEY_leftanglebracket: number
const KEY_leftarrow: number
const KEY_leftcaret: number
const KEY_leftdoublequotemark: number
const KEY_leftmiddlecurlybrace: number
const KEY_leftopentriangle: number
const KEY_leftpointer: number
const KEY_leftradical: number
const KEY_leftshoe: number
const KEY_leftsinglequotemark: number
const KEY_leftt: number
const KEY_lefttack: number
const KEY_less: number
const KEY_lessthanequal: number
const KEY_lf: number
const KEY_logicaland: number
const KEY_logicalor: number
const KEY_lowleftcorner: number
const KEY_lowrightcorner: number
const KEY_lstroke: number
const KEY_m: number
const KEY_mabovedot: number
const KEY_macron: number
const KEY_malesymbol: number
const KEY_maltesecross: number
const KEY_marker: number
const KEY_masculine: number
const KEY_minus: number
const KEY_minutes: number
const KEY_mu: number
const KEY_multiply: number
const KEY_musicalflat: number
const KEY_musicalsharp: number
const KEY_n: number
const KEY_nabla: number
const KEY_nacute: number
const KEY_ncaron: number
const KEY_ncedilla: number
const KEY_ninesubscript: number
const KEY_ninesuperior: number
const KEY_nl: number
const KEY_nobreakspace: number
const KEY_notapproxeq: number
const KEY_notelementof: number
const KEY_notequal: number
const KEY_notidentical: number
const KEY_notsign: number
const KEY_ntilde: number
const KEY_numbersign: number
const KEY_numerosign: number
const KEY_o: number
const KEY_oacute: number
const KEY_obarred: number
const KEY_obelowdot: number
const KEY_ocaron: number
const KEY_ocircumflex: number
const KEY_ocircumflexacute: number
const KEY_ocircumflexbelowdot: number
const KEY_ocircumflexgrave: number
const KEY_ocircumflexhook: number
const KEY_ocircumflextilde: number
const KEY_odiaeresis: number
const KEY_odoubleacute: number
const KEY_oe: number
const KEY_ogonek: number
const KEY_ograve: number
const KEY_ohook: number
const KEY_ohorn: number
const KEY_ohornacute: number
const KEY_ohornbelowdot: number
const KEY_ohorngrave: number
const KEY_ohornhook: number
const KEY_ohorntilde: number
const KEY_omacron: number
const KEY_oneeighth: number
const KEY_onefifth: number
const KEY_onehalf: number
const KEY_onequarter: number
const KEY_onesixth: number
const KEY_onesubscript: number
const KEY_onesuperior: number
const KEY_onethird: number
const KEY_ooblique: number
const KEY_openrectbullet: number
const KEY_openstar: number
const KEY_opentribulletdown: number
const KEY_opentribulletup: number
const KEY_ordfeminine: number
const KEY_oslash: number
const KEY_otilde: number
const KEY_overbar: number
const KEY_overline: number
const KEY_p: number
const KEY_pabovedot: number
const KEY_paragraph: number
const KEY_parenleft: number
const KEY_parenright: number
const KEY_partdifferential: number
const KEY_partialderivative: number
const KEY_percent: number
const KEY_period: number
const KEY_periodcentered: number
const KEY_permille: number
const KEY_phonographcopyright: number
const KEY_plus: number
const KEY_plusminus: number
const KEY_prescription: number
const KEY_prolongedsound: number
const KEY_punctspace: number
const KEY_q: number
const KEY_quad: number
const KEY_question: number
const KEY_questiondown: number
const KEY_quotedbl: number
const KEY_quoteleft: number
const KEY_quoteright: number
const KEY_r: number
const KEY_racute: number
const KEY_radical: number
const KEY_rcaron: number
const KEY_rcedilla: number
const KEY_registered: number
const KEY_rightanglebracket: number
const KEY_rightarrow: number
const KEY_rightcaret: number
const KEY_rightdoublequotemark: number
const KEY_rightmiddlecurlybrace: number
const KEY_rightmiddlesummation: number
const KEY_rightopentriangle: number
const KEY_rightpointer: number
const KEY_rightshoe: number
const KEY_rightsinglequotemark: number
const KEY_rightt: number
const KEY_righttack: number
const KEY_s: number
const KEY_sabovedot: number
const KEY_sacute: number
const KEY_scaron: number
const KEY_scedilla: number
const KEY_schwa: number
const KEY_scircumflex: number
const KEY_script_switch: number
const KEY_seconds: number
const KEY_section: number
const KEY_semicolon: number
const KEY_semivoicedsound: number
const KEY_seveneighths: number
const KEY_sevensubscript: number
const KEY_sevensuperior: number
const KEY_signaturemark: number
const KEY_signifblank: number
const KEY_similarequal: number
const KEY_singlelowquotemark: number
const KEY_sixsubscript: number
const KEY_sixsuperior: number
const KEY_slash: number
const KEY_soliddiamond: number
const KEY_space: number
const KEY_squareroot: number
const KEY_ssharp: number
const KEY_sterling: number
const KEY_stricteq: number
const KEY_t: number
const KEY_tabovedot: number
const KEY_tcaron: number
const KEY_tcedilla: number
const KEY_telephone: number
const KEY_telephonerecorder: number
const KEY_therefore: number
const KEY_thinspace: number
const KEY_thorn: number
const KEY_threeeighths: number
const KEY_threefifths: number
const KEY_threequarters: number
const KEY_threesubscript: number
const KEY_threesuperior: number
const KEY_tintegral: number
const KEY_topintegral: number
const KEY_topleftparens: number
const KEY_topleftradical: number
const KEY_topleftsqbracket: number
const KEY_topleftsummation: number
const KEY_toprightparens: number
const KEY_toprightsqbracket: number
const KEY_toprightsummation: number
const KEY_topt: number
const KEY_topvertsummationconnector: number
const KEY_trademark: number
const KEY_trademarkincircle: number
const KEY_tslash: number
const KEY_twofifths: number
const KEY_twosubscript: number
const KEY_twosuperior: number
const KEY_twothirds: number
const KEY_u: number
const KEY_uacute: number
const KEY_ubelowdot: number
const KEY_ubreve: number
const KEY_ucircumflex: number
const KEY_udiaeresis: number
const KEY_udoubleacute: number
const KEY_ugrave: number
const KEY_uhook: number
const KEY_uhorn: number
const KEY_uhornacute: number
const KEY_uhornbelowdot: number
const KEY_uhorngrave: number
const KEY_uhornhook: number
const KEY_uhorntilde: number
const KEY_umacron: number
const KEY_underbar: number
const KEY_underscore: number
const KEY_union: number
const KEY_uogonek: number
const KEY_uparrow: number
const KEY_upcaret: number
const KEY_upleftcorner: number
const KEY_uprightcorner: number
const KEY_upshoe: number
const KEY_upstile: number
const KEY_uptack: number
const KEY_uring: number
const KEY_utilde: number
const KEY_v: number
const KEY_variation: number
const KEY_vertbar: number
const KEY_vertconnector: number
const KEY_voicedsound: number
const KEY_vt: number
const KEY_w: number
const KEY_wacute: number
const KEY_wcircumflex: number
const KEY_wdiaeresis: number
const KEY_wgrave: number
const KEY_x: number
const KEY_xabovedot: number
const KEY_y: number
const KEY_yacute: number
const KEY_ybelowdot: number
const KEY_ycircumflex: number
const KEY_ydiaeresis: number
const KEY_yen: number
const KEY_ygrave: number
const KEY_yhook: number
const KEY_ytilde: number
const KEY_z: number
const KEY_zabovedot: number
const KEY_zacute: number
const KEY_zcaron: number
const KEY_zerosubscript: number
const KEY_zerosuperior: number
const KEY_zstroke: number
const MODIFIER_MASK: number
const PRIORITY_REDRAW: number
function cairo_draw_from_gl(cr: cairo.Context, surface: Surface, source: number, source_type: number, buffer_scale: number, x: number, y: number, width: number, height: number): void
function cairo_rectangle(cr: cairo.Context, rectangle: Rectangle): void
function cairo_region(cr: cairo.Context, region: cairo.Region): void
function cairo_region_create_from_surface(surface: cairo.Surface): cairo.Region
function cairo_set_source_pixbuf(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, pixbuf_x: number, pixbuf_y: number): void
function cairo_set_source_rgba(cr: cairo.Context, rgba: RGBA): void
function content_deserialize_async(stream: Gio.InputStream, mime_type: string, type: GObject.Type, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function content_deserialize_finish(result: Gio.AsyncResult, value: any): boolean
function content_formats_parse(string: string): ContentFormats | null
function content_register_deserializer(mime_type: string, type: GObject.Type, deserialize: ContentDeserializeFunc): void
function content_register_serializer(type: GObject.Type, mime_type: string, serialize: ContentSerializeFunc): void
function content_serialize_async(stream: Gio.OutputStream, mime_type: string, value: any, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function content_serialize_finish(result: Gio.AsyncResult): boolean
function drag_action_is_unique(action: DragAction): boolean
function events_get_angle(event1: Event, event2: Event): [ /* returnType */ boolean, /* angle */ number ]
function events_get_center(event1: Event, event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
function events_get_distance(event1: Event, event2: Event): [ /* returnType */ boolean, /* distance */ number ]
function gl_error_quark(): GLib.Quark
function intern_mime_type(string: string): string | null
function keyval_convert_case(symbol: number): [ /* lower */ number, /* upper */ number ]
function keyval_from_name(keyval_name: string): number
function keyval_is_lower(keyval: number): boolean
function keyval_is_upper(keyval: number): boolean
function keyval_name(keyval: number): string | null
function keyval_to_lower(keyval: number): number
function keyval_to_unicode(keyval: number): number
function keyval_to_upper(keyval: number): number
function paintable_new_empty(intrinsic_width: number, intrinsic_height: number): Paintable
function pixbuf_get_from_surface(surface: cairo.Surface, src_x: number, src_y: number, width: number, height: number): GdkPixbuf.Pixbuf | null
function pixbuf_get_from_texture(texture: Texture): GdkPixbuf.Pixbuf | null
function set_allowed_backends(backends: string): void
function texture_error_quark(): GLib.Quark
function toplevel_size_get_type(): GObject.Type
function unicode_to_keyval(wc: number): number
function vulkan_error_quark(): GLib.Quark
interface ContentDeserializeFunc {
    (deserializer: ContentDeserializer): void
}
interface ContentSerializeFunc {
    (serializer: ContentSerializer): void
}
interface DevicePad_ConstructProps extends Device_ConstructProps {
}
class DevicePad {
    /* Properties of Gdk-4.0.Gdk.Device */
    readonly caps_lock_state: boolean
    readonly direction: Pango.Direction
    readonly has_bidi_layouts: boolean
    readonly modifier_state: ModifierType
    readonly n_axes: number
    readonly num_lock_state: boolean
    readonly scroll_lock_state: boolean
    seat: Seat
    readonly tool: DeviceTool
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.DevicePad */
    get_feature_group(feature: DevicePadFeature, feature_idx: number): number
    get_group_n_modes(group_idx: number): number
    get_n_features(feature: DevicePadFeature): number
    get_n_groups(): number
    /* Methods of Gdk-4.0.Gdk.Device */
    get_caps_lock_state(): boolean
    get_device_tool(): DeviceTool
    get_direction(): Pango.Direction
    get_display(): Display
    get_has_cursor(): boolean
    get_modifier_state(): ModifierType
    get_name(): string
    get_num_lock_state(): boolean
    get_num_touches(): number
    get_product_id(): string | null
    get_scroll_lock_state(): boolean
    get_seat(): Seat
    get_source(): InputSource
    get_surface_at_position(): [ /* returnType */ Surface | null, /* win_x */ number | null, /* win_y */ number | null ]
    get_timestamp(): number
    get_vendor_id(): string | null
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Device */
    connect(sigName: "changed", callback: (($obj: DevicePad) => void)): number
    connect_after(sigName: "changed", callback: (($obj: DevicePad) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "tool-changed", callback: (($obj: DevicePad, tool: DeviceTool) => void)): number
    connect_after(sigName: "tool-changed", callback: (($obj: DevicePad, tool: DeviceTool) => void)): number
    emit(sigName: "tool-changed", tool: DeviceTool): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps-lock-state", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-state", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-bidi-layouts", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-bidi-layouts", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modifier-state", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifier-state", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-axes", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-lock-state", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-lock-state", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scroll-lock-state", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-lock-state", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seat", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tool", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DevicePad_ConstructProps)
    _init (config?: DevicePad_ConstructProps): void
    static $gtype: GObject.Type
}
interface DragSurface_ConstructProps extends Surface_ConstructProps {
}
class DragSurface {
    /* Properties of Gdk-4.0.Gdk.Surface */
    cursor: Cursor
    readonly height: number
    readonly mapped: boolean
    readonly scale_factor: number
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.DragSurface */
    present(width: number, height: number): boolean
    /* Methods of Gdk-4.0.Gdk.Surface */
    beep(): void
    create_cairo_context(): CairoContext
    create_gl_context(): GLContext
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    create_vulkan_context(): VulkanContext
    destroy(): void
    get_cursor(): Cursor | null
    get_device_cursor(device: Device): Cursor | null
    get_device_position(device: Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    get_display(): Display
    get_frame_clock(): FrameClock
    get_height(): number
    get_mapped(): boolean
    get_scale_factor(): number
    get_width(): number
    hide(): void
    is_destroyed(): boolean
    queue_render(): void
    request_layout(): void
    set_cursor(cursor?: Cursor | null): void
    set_device_cursor(device: Device, cursor: Cursor): void
    set_input_region(region: cairo.Region): void
    set_opaque_region(region?: cairo.Region | null): void
    translate_coordinates(to: Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Surface */
    connect(sigName: "enter-monitor", callback: (($obj: DragSurface, monitor: Monitor) => void)): number
    connect_after(sigName: "enter-monitor", callback: (($obj: DragSurface, monitor: Monitor) => void)): number
    emit(sigName: "enter-monitor", monitor: Monitor): void
    connect(sigName: "event", callback: (($obj: DragSurface, event: Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: DragSurface, event: Event) => boolean)): number
    emit(sigName: "event", event: Event): void
    connect(sigName: "layout", callback: (($obj: DragSurface, width: number, height: number) => void)): number
    connect_after(sigName: "layout", callback: (($obj: DragSurface, width: number, height: number) => void)): number
    emit(sigName: "layout", width: number, height: number): void
    connect(sigName: "leave-monitor", callback: (($obj: DragSurface, monitor: Monitor) => void)): number
    connect_after(sigName: "leave-monitor", callback: (($obj: DragSurface, monitor: Monitor) => void)): number
    emit(sigName: "leave-monitor", monitor: Monitor): void
    connect(sigName: "render", callback: (($obj: DragSurface, region: cairo.Region) => boolean)): number
    connect_after(sigName: "render", callback: (($obj: DragSurface, region: cairo.Region) => boolean)): number
    emit(sigName: "render", region: cairo.Region): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DragSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DragSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: DragSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: DragSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: DragSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: DragSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: DragSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: DragSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: DragSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DragSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: DragSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: DragSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DragSurface_ConstructProps)
    _init (config?: DragSurface_ConstructProps): void
    static $gtype: GObject.Type
}
class Paintable {
    /* Methods of Gdk-4.0.Gdk.Paintable */
    compute_concrete_size(specified_width: number, specified_height: number, default_width: number, default_height: number): [ /* concrete_width */ number, /* concrete_height */ number ]
    get_current_image(): Paintable
    get_flags(): PaintableFlags
    get_intrinsic_aspect_ratio(): number
    get_intrinsic_height(): number
    get_intrinsic_width(): number
    invalidate_contents(): void
    invalidate_size(): void
    snapshot(snapshot: Snapshot, width: number, height: number): void
    /* Virtual methods of Gdk-4.0.Gdk.Paintable */
    vfunc_get_current_image(): Paintable
    vfunc_get_flags(): PaintableFlags
    vfunc_get_intrinsic_aspect_ratio(): number
    vfunc_get_intrinsic_height(): number
    vfunc_get_intrinsic_width(): number
    vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void
    /* Signals of Gdk-4.0.Gdk.Paintable */
    connect(sigName: "invalidate-contents", callback: (($obj: Paintable) => void)): number
    connect_after(sigName: "invalidate-contents", callback: (($obj: Paintable) => void)): number
    emit(sigName: "invalidate-contents"): void
    connect(sigName: "invalidate-size", callback: (($obj: Paintable) => void)): number
    connect_after(sigName: "invalidate-size", callback: (($obj: Paintable) => void)): number
    emit(sigName: "invalidate-size"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_empty(intrinsic_width: number, intrinsic_height: number): Paintable
}
interface Popup_ConstructProps extends Surface_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Popup */
    autohide?: boolean
    parent?: Surface
}
class Popup {
    /* Properties of Gdk-4.0.Gdk.Surface */
    cursor: Cursor
    readonly height: number
    readonly mapped: boolean
    readonly scale_factor: number
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Popup */
    get_autohide(): boolean
    get_parent(): Surface | null
    get_position_x(): number
    get_position_y(): number
    get_rect_anchor(): Gravity
    get_surface_anchor(): Gravity
    present(width: number, height: number, layout: PopupLayout): boolean
    /* Methods of Gdk-4.0.Gdk.Surface */
    beep(): void
    create_cairo_context(): CairoContext
    create_gl_context(): GLContext
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    create_vulkan_context(): VulkanContext
    destroy(): void
    get_cursor(): Cursor | null
    get_device_cursor(device: Device): Cursor | null
    get_device_position(device: Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    get_display(): Display
    get_frame_clock(): FrameClock
    get_height(): number
    get_mapped(): boolean
    get_scale_factor(): number
    get_width(): number
    hide(): void
    is_destroyed(): boolean
    queue_render(): void
    request_layout(): void
    set_cursor(cursor?: Cursor | null): void
    set_device_cursor(device: Device, cursor: Cursor): void
    set_input_region(region: cairo.Region): void
    set_opaque_region(region?: cairo.Region | null): void
    translate_coordinates(to: Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Surface */
    connect(sigName: "enter-monitor", callback: (($obj: Popup, monitor: Monitor) => void)): number
    connect_after(sigName: "enter-monitor", callback: (($obj: Popup, monitor: Monitor) => void)): number
    emit(sigName: "enter-monitor", monitor: Monitor): void
    connect(sigName: "event", callback: (($obj: Popup, event: Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Popup, event: Event) => boolean)): number
    emit(sigName: "event", event: Event): void
    connect(sigName: "layout", callback: (($obj: Popup, width: number, height: number) => void)): number
    connect_after(sigName: "layout", callback: (($obj: Popup, width: number, height: number) => void)): number
    emit(sigName: "layout", width: number, height: number): void
    connect(sigName: "leave-monitor", callback: (($obj: Popup, monitor: Monitor) => void)): number
    connect_after(sigName: "leave-monitor", callback: (($obj: Popup, monitor: Monitor) => void)): number
    emit(sigName: "leave-monitor", monitor: Monitor): void
    connect(sigName: "render", callback: (($obj: Popup, region: cairo.Region) => boolean)): number
    connect_after(sigName: "render", callback: (($obj: Popup, region: cairo.Region) => boolean)): number
    emit(sigName: "render", region: cairo.Region): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Popup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Popup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: Popup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Popup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Popup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Popup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Popup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Popup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Popup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Popup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Popup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Popup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Popup_ConstructProps)
    _init (config?: Popup_ConstructProps): void
    static $gtype: GObject.Type
}
interface Toplevel_ConstructProps extends Surface_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Toplevel */
    decorated?: boolean
    deletable?: boolean
    fullscreen_mode?: FullscreenMode
    icon_list?: object
    modal?: boolean
    startup_id?: string
    title?: string
    transient_for?: Surface
}
class Toplevel {
    /* Properties of Gdk-4.0.Gdk.Toplevel */
    decorated: boolean
    deletable: boolean
    fullscreen_mode: FullscreenMode
    icon_list: object
    modal: boolean
    readonly shortcuts_inhibited: boolean
    startup_id: string
    readonly state: ToplevelState
    title: string
    transient_for: Surface
    /* Properties of Gdk-4.0.Gdk.Surface */
    cursor: Cursor
    readonly height: number
    readonly mapped: boolean
    readonly scale_factor: number
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Toplevel */
    begin_move(device: Device, button: number, x: number, y: number, timestamp: number): void
    begin_resize(edge: SurfaceEdge, device: Device | null, button: number, x: number, y: number, timestamp: number): void
    focus(timestamp: number): void
    get_state(): ToplevelState
    inhibit_system_shortcuts(event?: Event | null): void
    lower(): boolean
    minimize(): boolean
    present(layout: ToplevelLayout): void
    restore_system_shortcuts(): void
    set_decorated(decorated: boolean): void
    set_deletable(deletable: boolean): void
    set_icon_list(surfaces: Texture[]): void
    set_modal(modal: boolean): void
    set_startup_id(startup_id: string): void
    set_title(title: string): void
    set_transient_for(parent: Surface): void
    show_window_menu(event: Event): boolean
    supports_edge_constraints(): boolean
    titlebar_gesture(gesture: TitlebarGesture): boolean
    /* Methods of Gdk-4.0.Gdk.Surface */
    beep(): void
    create_cairo_context(): CairoContext
    create_gl_context(): GLContext
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    create_vulkan_context(): VulkanContext
    destroy(): void
    get_cursor(): Cursor | null
    get_device_cursor(device: Device): Cursor | null
    get_device_position(device: Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    get_display(): Display
    get_frame_clock(): FrameClock
    get_height(): number
    get_mapped(): boolean
    get_scale_factor(): number
    get_width(): number
    hide(): void
    is_destroyed(): boolean
    queue_render(): void
    request_layout(): void
    set_cursor(cursor?: Cursor | null): void
    set_device_cursor(device: Device, cursor: Cursor): void
    set_input_region(region: cairo.Region): void
    set_opaque_region(region?: cairo.Region | null): void
    translate_coordinates(to: Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Toplevel */
    connect(sigName: "compute-size", callback: (($obj: Toplevel) => void)): number
    connect_after(sigName: "compute-size", callback: (($obj: Toplevel) => void)): number
    emit(sigName: "compute-size"): void
    /* Signals of Gdk-4.0.Gdk.Surface */
    connect(sigName: "enter-monitor", callback: (($obj: Toplevel, monitor: Monitor) => void)): number
    connect_after(sigName: "enter-monitor", callback: (($obj: Toplevel, monitor: Monitor) => void)): number
    emit(sigName: "enter-monitor", monitor: Monitor): void
    connect(sigName: "event", callback: (($obj: Toplevel, event: Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Toplevel, event: Event) => boolean)): number
    emit(sigName: "event", event: Event): void
    connect(sigName: "layout", callback: (($obj: Toplevel, width: number, height: number) => void)): number
    connect_after(sigName: "layout", callback: (($obj: Toplevel, width: number, height: number) => void)): number
    emit(sigName: "layout", width: number, height: number): void
    connect(sigName: "leave-monitor", callback: (($obj: Toplevel, monitor: Monitor) => void)): number
    connect_after(sigName: "leave-monitor", callback: (($obj: Toplevel, monitor: Monitor) => void)): number
    emit(sigName: "leave-monitor", monitor: Monitor): void
    connect(sigName: "render", callback: (($obj: Toplevel, region: cairo.Region) => boolean)): number
    connect_after(sigName: "render", callback: (($obj: Toplevel, region: cairo.Region) => boolean)): number
    emit(sigName: "render", region: cairo.Region): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::decorated", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletable", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fullscreen-mode", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen-mode", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-list", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-list", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modal", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shortcuts-inhibited", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shortcuts-inhibited", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::startup-id", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transient-for", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Toplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Toplevel_ConstructProps)
    _init (config?: Toplevel_ConstructProps): void
    static $gtype: GObject.Type
}
interface AppLaunchContext_ConstructProps extends Gio.AppLaunchContext_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.AppLaunchContext */
    display?: Display
}
class AppLaunchContext {
    /* Fields of Gio-2.0.Gio.AppLaunchContext */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.AppLaunchContext */
    get_display(): Display
    set_desktop(desktop: number): void
    set_icon(icon?: Gio.Icon | null): void
    set_icon_name(icon_name?: string | null): void
    set_timestamp(timestamp: number): void
    /* Methods of Gio-2.0.Gio.AppLaunchContext */
    get_display(info: Gio.AppInfo, files: Gio.File[]): string | null
    get_environment(): string[]
    get_startup_notify_id(info: Gio.AppInfo, files: Gio.File[]): string | null
    launch_failed(startup_notify_id: string): void
    setenv(variable: string, value: string): void
    unsetenv(variable: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gio-2.0.Gio.AppLaunchContext */
    vfunc_get_display(info: Gio.AppInfo, files: Gio.File[]): string | null
    vfunc_get_startup_notify_id(info: Gio.AppInfo, files: Gio.File[]): string | null
    vfunc_launch_failed(startup_notify_id: string): void
    vfunc_launch_started(info: Gio.AppInfo, platform_data: GLib.Variant): void
    vfunc_launched(info: Gio.AppInfo, platform_data: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.AppLaunchContext */
    connect(sigName: "launch-failed", callback: (($obj: AppLaunchContext, startup_notify_id: string) => void)): number
    connect_after(sigName: "launch-failed", callback: (($obj: AppLaunchContext, startup_notify_id: string) => void)): number
    emit(sigName: "launch-failed", startup_notify_id: string): void
    connect(sigName: "launch-started", callback: (($obj: AppLaunchContext, info: Gio.AppInfo, platform_data?: GLib.Variant | null) => void)): number
    connect_after(sigName: "launch-started", callback: (($obj: AppLaunchContext, info: Gio.AppInfo, platform_data?: GLib.Variant | null) => void)): number
    emit(sigName: "launch-started", info: Gio.AppInfo, platform_data?: GLib.Variant | null): void
    connect(sigName: "launched", callback: (($obj: AppLaunchContext, info: Gio.AppInfo, platform_data: GLib.Variant) => void)): number
    connect_after(sigName: "launched", callback: (($obj: AppLaunchContext, info: Gio.AppInfo, platform_data: GLib.Variant) => void)): number
    emit(sigName: "launched", info: Gio.AppInfo, platform_data: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AppLaunchContext_ConstructProps)
    _init (config?: AppLaunchContext_ConstructProps): void
    static $gtype: GObject.Type
}
class ButtonEvent {
    /* Methods of Gdk-4.0.Gdk.ButtonEvent */
    get_button(): number
    /* Methods of Gdk-4.0.Gdk.Event */
    _get_angle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    _get_center(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    _get_distance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    get_axes(): [ /* returnType */ boolean, /* axes */ number[] ]
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    get_device(): Device | null
    get_device_tool(): DeviceTool | null
    get_display(): Display | null
    get_event_sequence(): EventSequence
    get_event_type(): EventType
    get_history(): TimeCoord[] | null
    get_modifier_state(): ModifierType
    get_pointer_emulated(): boolean
    get_position(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    get_seat(): Seat | null
    get_surface(): Surface | null
    get_time(): number
    ref(): Event
    triggers_context_menu(): boolean
    unref(): void
    static name: string
}
interface CairoContext_ConstructProps extends DrawContext_ConstructProps {
}
class CairoContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.CairoContext */
    cairo_create(): cairo.Context | null
    /* Methods of Gdk-4.0.Gdk.DrawContext */
    begin_frame(region: cairo.Region): void
    end_frame(): void
    get_display(): Display | null
    get_frame_region(): cairo.Region | null
    get_surface(): Surface | null
    is_in_frame(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CairoContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CairoContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CairoContext_ConstructProps)
    _init (config?: CairoContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface Clipboard_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Clipboard */
    display?: Display
}
class Clipboard {
    /* Properties of Gdk-4.0.Gdk.Clipboard */
    readonly content: ContentProvider
    readonly formats: ContentFormats
    readonly local: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Clipboard */
    get_content(): ContentProvider | null
    get_display(): Display
    get_formats(): ContentFormats
    is_local(): boolean
    read_async(mime_types: string[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_finish(result: Gio.AsyncResult): [ /* returnType */ Gio.InputStream | null, /* out_mime_type */ string | null ]
    read_text_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_text_finish(result: Gio.AsyncResult): string | null
    read_texture_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_texture_finish(result: Gio.AsyncResult): Texture | null
    read_value_async(type: GObject.Type, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_value_finish(result: Gio.AsyncResult): any
    set_content(provider?: ContentProvider | null): boolean
    set(value: any): void
    store_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    store_finish(result: Gio.AsyncResult): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Clipboard */
    connect(sigName: "changed", callback: (($obj: Clipboard) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Clipboard) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Clipboard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Clipboard, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: Clipboard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Clipboard, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::formats", callback: (($obj: Clipboard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::formats", callback: (($obj: Clipboard, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local", callback: (($obj: Clipboard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local", callback: (($obj: Clipboard, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Clipboard_ConstructProps)
    _init (config?: Clipboard_ConstructProps): void
    static $gtype: GObject.Type
}
interface ContentDeserializer_ConstructProps extends GObject.Object_ConstructProps {
}
class ContentDeserializer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.ContentDeserializer */
    get_cancellable(): Gio.Cancellable | null
    get_gtype(): GObject.Type
    get_input_stream(): Gio.InputStream
    get_mime_type(): string
    get_priority(): number
    get_task_data(): object | null
    get_user_data(): object | null
    get_value(): any
    return_error(error: GLib.Error): void
    return_success(): void
    set_task_data(data: object | null, notify: GLib.DestroyNotify): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.AsyncResult */
    get_source_object(): GObject.Object | null
    is_tagged(source_tag?: object | null): boolean
    legacy_propagate_error(): boolean
    /* Virtual methods of Gdk-4.0.Gdk.ContentDeserializer */
    vfunc_get_source_object(): GObject.Object | null
    vfunc_get_user_data(): object | null
    vfunc_is_tagged(source_tag?: object | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContentDeserializer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentDeserializer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContentDeserializer_ConstructProps)
    _init (config?: ContentDeserializer_ConstructProps): void
    static $gtype: GObject.Type
}
interface ContentProvider_ConstructProps extends GObject.Object_ConstructProps {
}
class ContentProvider {
    /* Properties of Gdk-4.0.Gdk.ContentProvider */
    readonly formats: ContentFormats
    readonly storable_formats: ContentFormats
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.ContentProvider */
    content_changed(): void
    get_value(): [ /* returnType */ boolean, /* value */ any ]
    ref_formats(): ContentFormats
    ref_storable_formats(): ContentFormats
    write_mime_type_async(mime_type: string, stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_mime_type_finish(result: Gio.AsyncResult): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of Gdk-4.0.Gdk.ContentProvider */
    vfunc_attach_clipboard(clipboard: Clipboard): void
    vfunc_content_changed(): void
    vfunc_detach_clipboard(clipboard: Clipboard): void
    vfunc_get_value(): [ /* returnType */ boolean, /* value */ any ]
    vfunc_ref_formats(): ContentFormats
    vfunc_ref_storable_formats(): ContentFormats
    vfunc_write_mime_type_async(mime_type: string, stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_write_mime_type_finish(result: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.ContentProvider */
    connect(sigName: "content-changed", callback: (($obj: ContentProvider) => void)): number
    connect_after(sigName: "content-changed", callback: (($obj: ContentProvider) => void)): number
    emit(sigName: "content-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContentProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::formats", callback: (($obj: ContentProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::formats", callback: (($obj: ContentProvider, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::storable-formats", callback: (($obj: ContentProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storable-formats", callback: (($obj: ContentProvider, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContentProvider_ConstructProps)
    _init (config?: ContentProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bytes(mime_type: string, bytes: GLib.Bytes): ContentProvider
    static new_for_value(value: any): ContentProvider
    static new_union(providers: ContentProvider[] | null): ContentProvider
    static $gtype: GObject.Type
}
interface ContentSerializer_ConstructProps extends GObject.Object_ConstructProps {
}
class ContentSerializer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.ContentSerializer */
    get_cancellable(): Gio.Cancellable | null
    get_gtype(): GObject.Type
    get_mime_type(): string
    get_output_stream(): Gio.OutputStream
    get_priority(): number
    get_task_data(): object | null
    get_user_data(): object | null
    get_value(): any
    return_error(error: GLib.Error): void
    return_success(): void
    set_task_data(data: object | null, notify: GLib.DestroyNotify): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.AsyncResult */
    get_source_object(): GObject.Object | null
    is_tagged(source_tag?: object | null): boolean
    legacy_propagate_error(): boolean
    /* Virtual methods of Gdk-4.0.Gdk.ContentSerializer */
    vfunc_get_source_object(): GObject.Object | null
    vfunc_get_user_data(): object | null
    vfunc_is_tagged(source_tag?: object | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContentSerializer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentSerializer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContentSerializer_ConstructProps)
    _init (config?: ContentSerializer_ConstructProps): void
    static $gtype: GObject.Type
}
class CrossingEvent {
    /* Methods of Gdk-4.0.Gdk.CrossingEvent */
    get_detail(): NotifyType
    get_focus(): boolean
    get_mode(): CrossingMode
    /* Methods of Gdk-4.0.Gdk.Event */
    _get_angle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    _get_center(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    _get_distance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    get_axes(): [ /* returnType */ boolean, /* axes */ number[] ]
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    get_device(): Device | null
    get_device_tool(): DeviceTool | null
    get_display(): Display | null
    get_event_sequence(): EventSequence
    get_event_type(): EventType
    get_history(): TimeCoord[] | null
    get_modifier_state(): ModifierType
    get_pointer_emulated(): boolean
    get_position(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    get_seat(): Seat | null
    get_surface(): Surface | null
    get_time(): number
    ref(): Event
    triggers_context_menu(): boolean
    unref(): void
    static name: string
}
interface Cursor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Cursor */
    fallback?: Cursor
    hotspot_x?: number
    hotspot_y?: number
    name?: string
    texture?: Texture
}
class Cursor {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Cursor */
    get_fallback(): Cursor | null
    get_hotspot_x(): number
    get_hotspot_y(): number
    get_name(): string | null
    get_texture(): Texture | null
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Cursor_ConstructProps)
    _init (config?: Cursor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_name(name: string, fallback?: Cursor | null): Cursor
    static new_from_texture(texture: Texture, hotspot_x: number, hotspot_y: number, fallback?: Cursor | null): Cursor
    static $gtype: GObject.Type
}
class DNDEvent {
    /* Methods of Gdk-4.0.Gdk.DNDEvent */
    get_drop(): Drop | null
    /* Methods of Gdk-4.0.Gdk.Event */
    _get_angle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    _get_center(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    _get_distance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    get_axes(): [ /* returnType */ boolean, /* axes */ number[] ]
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    get_device(): Device | null
    get_device_tool(): DeviceTool | null
    get_display(): Display | null
    get_event_sequence(): EventSequence
    get_event_type(): EventType
    get_history(): TimeCoord[] | null
    get_modifier_state(): ModifierType
    get_pointer_emulated(): boolean
    get_position(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    get_seat(): Seat | null
    get_surface(): Surface | null
    get_time(): number
    ref(): Event
    triggers_context_menu(): boolean
    unref(): void
    static name: string
}
class DeleteEvent {
    /* Methods of Gdk-4.0.Gdk.Event */
    _get_angle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    _get_center(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    _get_distance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    get_axes(): [ /* returnType */ boolean, /* axes */ number[] ]
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    get_device(): Device | null
    get_device_tool(): DeviceTool | null
    get_display(): Display | null
    get_event_sequence(): EventSequence
    get_event_type(): EventType
    get_history(): TimeCoord[] | null
    get_modifier_state(): ModifierType
    get_pointer_emulated(): boolean
    get_position(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    get_seat(): Seat | null
    get_surface(): Surface | null
    get_time(): number
    ref(): Event
    triggers_context_menu(): boolean
    unref(): void
    static name: string
}
interface Device_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Device */
    display?: Display
    has_cursor?: boolean
    name?: string
    num_touches?: number
    product_id?: string
    seat?: Seat
    source?: InputSource
    vendor_id?: string
}
class Device {
    /* Properties of Gdk-4.0.Gdk.Device */
    readonly caps_lock_state: boolean
    readonly direction: Pango.Direction
    readonly has_bidi_layouts: boolean
    readonly modifier_state: ModifierType
    readonly n_axes: number
    readonly num_lock_state: boolean
    readonly scroll_lock_state: boolean
    seat: Seat
    readonly tool: DeviceTool
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Device */
    get_caps_lock_state(): boolean
    get_device_tool(): DeviceTool
    get_direction(): Pango.Direction
    get_display(): Display
    get_has_cursor(): boolean
    get_modifier_state(): ModifierType
    get_name(): string
    get_num_lock_state(): boolean
    get_num_touches(): number
    get_product_id(): string | null
    get_scroll_lock_state(): boolean
    get_seat(): Seat
    get_source(): InputSource
    get_surface_at_position(): [ /* returnType */ Surface | null, /* win_x */ number | null, /* win_y */ number | null ]
    get_timestamp(): number
    get_vendor_id(): string | null
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Device */
    connect(sigName: "changed", callback: (($obj: Device) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Device) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "tool-changed", callback: (($obj: Device, tool: DeviceTool) => void)): number
    connect_after(sigName: "tool-changed", callback: (($obj: Device, tool: DeviceTool) => void)): number
    emit(sigName: "tool-changed", tool: DeviceTool): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps-lock-state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-bidi-layouts", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-bidi-layouts", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modifier-state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifier-state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-axes", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-lock-state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-lock-state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scroll-lock-state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-lock-state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seat", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tool", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    static $gtype: GObject.Type
}
interface DeviceTool_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.DeviceTool */
    axes?: AxisFlags
    hardware_id?: number
    serial?: number
    tool_type?: DeviceToolType
}
class DeviceTool {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.DeviceTool */
    get_axes(): AxisFlags
    get_hardware_id(): number
    get_serial(): number
    get_tool_type(): DeviceToolType
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceTool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceTool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceTool_ConstructProps)
    _init (config?: DeviceTool_ConstructProps): void
    static $gtype: GObject.Type
}
interface Display_ConstructProps extends GObject.Object_ConstructProps {
}
class Display {
    /* Properties of Gdk-4.0.Gdk.Display */
    readonly composited: boolean
    readonly input_shapes: boolean
    readonly rgba: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Display */
    beep(): void
    close(): void
    create_gl_context(): GLContext
    device_is_grabbed(device: Device): boolean
    flush(): void
    get_app_launch_context(): AppLaunchContext
    get_clipboard(): Clipboard
    get_default_seat(): Seat | null
    get_monitor_at_surface(surface: Surface): Monitor
    get_monitors(): Gio.ListModel
    get_name(): string
    get_primary_clipboard(): Clipboard
    get_setting(name: string, value: any): boolean
    get_startup_notification_id(): string | null
    is_closed(): boolean
    is_composited(): boolean
    is_rgba(): boolean
    list_seats(): Seat[]
    map_keycode(keycode: number): [ /* returnType */ boolean, /* keys */ KeymapKey[] | null, /* keyvals */ number[] | null ]
    map_keyval(keyval: number): [ /* returnType */ boolean, /* keys */ KeymapKey[] ]
    notify_startup_complete(startup_id: string): void
    prepare_gl(): boolean
    put_event(event: Event): void
    supports_input_shapes(): boolean
    sync(): void
    translate_key(keycode: number, state: ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number | null, /* effective_group */ number | null, /* level */ number | null, /* consumed */ ModifierType | null ]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Display */
    connect(sigName: "closed", callback: (($obj: Display, is_error: boolean) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Display, is_error: boolean) => void)): number
    emit(sigName: "closed", is_error: boolean): void
    connect(sigName: "opened", callback: (($obj: Display) => void)): number
    connect_after(sigName: "opened", callback: (($obj: Display) => void)): number
    emit(sigName: "opened"): void
    connect(sigName: "seat-added", callback: (($obj: Display, seat: Seat) => void)): number
    connect_after(sigName: "seat-added", callback: (($obj: Display, seat: Seat) => void)): number
    emit(sigName: "seat-added", seat: Seat): void
    connect(sigName: "seat-removed", callback: (($obj: Display, seat: Seat) => void)): number
    connect_after(sigName: "seat-removed", callback: (($obj: Display, seat: Seat) => void)): number
    emit(sigName: "seat-removed", seat: Seat): void
    connect(sigName: "setting-changed", callback: (($obj: Display, setting: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: Display, setting: string) => void)): number
    emit(sigName: "setting-changed", setting: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::composited", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composited", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-shapes", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-shapes", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rgba", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Display_ConstructProps)
    _init (config?: Display_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Display | null
    static open(display_name: string): Display | null
    static $gtype: GObject.Type
}
interface DisplayManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.DisplayManager */
    default_display?: Display
}
class DisplayManager {
    /* Properties of Gdk-4.0.Gdk.DisplayManager */
    default_display: Display
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.DisplayManager */
    get_default_display(): Display | null
    list_displays(): Display[]
    open_display(name: string): Display | null
    set_default_display(display: Display): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.DisplayManager */
    connect(sigName: "display-opened", callback: (($obj: DisplayManager, display: Display) => void)): number
    connect_after(sigName: "display-opened", callback: (($obj: DisplayManager, display: Display) => void)): number
    emit(sigName: "display-opened", display: Display): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DisplayManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-display", callback: (($obj: DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-display", callback: (($obj: DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DisplayManager_ConstructProps)
    _init (config?: DisplayManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(): DisplayManager
    static $gtype: GObject.Type
}
interface Drag_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Drag */
    actions?: DragAction
    content?: ContentProvider
    device?: Device
    formats?: ContentFormats
    selected_action?: DragAction
    surface?: Surface
}
class Drag {
    /* Properties of Gdk-4.0.Gdk.Drag */
    actions: DragAction
    readonly display: Display
    selected_action: DragAction
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Drag */
    drop_done(success: boolean): void
    get_actions(): DragAction
    get_content(): ContentProvider
    get_device(): Device
    get_display(): Display
    get_drag_surface(): Surface | null
    get_formats(): ContentFormats
    get_selected_action(): DragAction
    get_surface(): Surface
    set_hotspot(hot_x: number, hot_y: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Drag */
    connect(sigName: "cancel", callback: (($obj: Drag, reason: DragCancelReason) => void)): number
    connect_after(sigName: "cancel", callback: (($obj: Drag, reason: DragCancelReason) => void)): number
    emit(sigName: "cancel", reason: DragCancelReason): void
    connect(sigName: "dnd-finished", callback: (($obj: Drag) => void)): number
    connect_after(sigName: "dnd-finished", callback: (($obj: Drag) => void)): number
    emit(sigName: "dnd-finished"): void
    connect(sigName: "drop-performed", callback: (($obj: Drag) => void)): number
    connect_after(sigName: "drop-performed", callback: (($obj: Drag) => void)): number
    emit(sigName: "drop-performed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Drag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actions", callback: (($obj: Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Drag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Drag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected-action", callback: (($obj: Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-action", callback: (($obj: Drag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Drag_ConstructProps)
    _init (config?: Drag_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static begin(surface: Surface, device: Device, content: ContentProvider, actions: DragAction, dx: number, dy: number): Drag | null
    static $gtype: GObject.Type
}
interface DrawContext_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.DrawContext */
    display?: Display
    surface?: Surface
}
class DrawContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.DrawContext */
    begin_frame(region: cairo.Region): void
    end_frame(): void
    get_display(): Display | null
    get_frame_region(): cairo.Region | null
    get_surface(): Surface | null
    is_in_frame(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DrawContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DrawContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DrawContext_ConstructProps)
    _init (config?: DrawContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface Drop_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Drop */
    actions?: DragAction
    device?: Device
    drag?: Drag
    formats?: ContentFormats
    surface?: Surface
}
class Drop {
    /* Properties of Gdk-4.0.Gdk.Drop */
    readonly display: Display
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Drop */
    finish(action: DragAction): void
    get_actions(): DragAction
    get_device(): Device
    get_display(): Display
    get_drag(): Drag | null
    get_formats(): ContentFormats
    get_surface(): Surface
    read_async(mime_types: string[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_finish(result: Gio.AsyncResult): [ /* returnType */ Gio.InputStream | null, /* out_mime_type */ string ]
    read_value_async(type: GObject.Type, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_value_finish(result: Gio.AsyncResult): any
    status(actions: DragAction, preferred: DragAction): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Drop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Drop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display", callback: (($obj: Drop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Drop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Drop_ConstructProps)
    _init (config?: Drop_ConstructProps): void
    static $gtype: GObject.Type
}
class Event {
    /* Methods of Gdk-4.0.Gdk.Event */
    _get_angle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    _get_center(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    _get_distance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    get_axes(): [ /* returnType */ boolean, /* axes */ number[] ]
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    get_device(): Device | null
    get_device_tool(): DeviceTool | null
    get_display(): Display | null
    get_event_sequence(): EventSequence
    get_event_type(): EventType
    get_history(): TimeCoord[] | null
    get_modifier_state(): ModifierType
    get_pointer_emulated(): boolean
    get_position(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    get_seat(): Seat | null
    get_surface(): Surface | null
    get_time(): number
    ref(): Event
    triggers_context_menu(): boolean
    unref(): void
    static name: string
}
class FocusEvent {
    /* Methods of Gdk-4.0.Gdk.FocusEvent */
    get_in(): boolean
    /* Methods of Gdk-4.0.Gdk.Event */
    _get_angle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    _get_center(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    _get_distance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    get_axes(): [ /* returnType */ boolean, /* axes */ number[] ]
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    get_device(): Device | null
    get_device_tool(): DeviceTool | null
    get_display(): Display | null
    get_event_sequence(): EventSequence
    get_event_type(): EventType
    get_history(): TimeCoord[] | null
    get_modifier_state(): ModifierType
    get_pointer_emulated(): boolean
    get_position(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    get_seat(): Seat | null
    get_surface(): Surface | null
    get_time(): number
    ref(): Event
    triggers_context_menu(): boolean
    unref(): void
    static name: string
}
interface FrameClock_ConstructProps extends GObject.Object_ConstructProps {
}
class FrameClock {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.FrameClock */
    begin_updating(): void
    end_updating(): void
    get_current_timings(): FrameTimings | null
    get_fps(): number
    get_frame_counter(): number
    get_frame_time(): number
    get_history_start(): number
    get_refresh_info(base_time: number): [ /* refresh_interval_return */ number | null, /* presentation_time_return */ number ]
    get_timings(frame_counter: number): FrameTimings | null
    request_phase(phase: FrameClockPhase): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.FrameClock */
    connect(sigName: "after-paint", callback: (($obj: FrameClock) => void)): number
    connect_after(sigName: "after-paint", callback: (($obj: FrameClock) => void)): number
    emit(sigName: "after-paint"): void
    connect(sigName: "before-paint", callback: (($obj: FrameClock) => void)): number
    connect_after(sigName: "before-paint", callback: (($obj: FrameClock) => void)): number
    emit(sigName: "before-paint"): void
    connect(sigName: "flush-events", callback: (($obj: FrameClock) => void)): number
    connect_after(sigName: "flush-events", callback: (($obj: FrameClock) => void)): number
    emit(sigName: "flush-events"): void
    connect(sigName: "layout", callback: (($obj: FrameClock) => void)): number
    connect_after(sigName: "layout", callback: (($obj: FrameClock) => void)): number
    emit(sigName: "layout"): void
    connect(sigName: "paint", callback: (($obj: FrameClock) => void)): number
    connect_after(sigName: "paint", callback: (($obj: FrameClock) => void)): number
    emit(sigName: "paint"): void
    connect(sigName: "resume-events", callback: (($obj: FrameClock) => void)): number
    connect_after(sigName: "resume-events", callback: (($obj: FrameClock) => void)): number
    emit(sigName: "resume-events"): void
    connect(sigName: "update", callback: (($obj: FrameClock) => void)): number
    connect_after(sigName: "update", callback: (($obj: FrameClock) => void)): number
    emit(sigName: "update"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FrameClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FrameClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FrameClock_ConstructProps)
    _init (config?: FrameClock_ConstructProps): void
    static $gtype: GObject.Type
}
interface GLContext_ConstructProps extends DrawContext_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.GLContext */
    allowed_apis?: GLAPI
    shared_context?: GLContext
}
class GLContext {
    /* Properties of Gdk-4.0.Gdk.GLContext */
    allowed_apis: GLAPI
    readonly api: GLAPI
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.GLContext */
    get_allowed_apis(): GLAPI
    get_api(): GLAPI
    get_debug_enabled(): boolean
    get_display(): Display | null
    get_forward_compatible(): boolean
    get_required_version(): [ /* major */ number | null, /* minor */ number | null ]
    get_shared_context(): GLContext | null
    get_surface(): Surface | null
    get_use_es(): boolean
    get_version(): [ /* major */ number, /* minor */ number ]
    is_legacy(): boolean
    is_shared(other: GLContext): boolean
    make_current(): void
    realize(): boolean
    set_allowed_apis(apis: GLAPI): void
    set_debug_enabled(enabled: boolean): void
    set_forward_compatible(compatible: boolean): void
    set_required_version(major: number, minor: number): void
    set_use_es(use_es: number): void
    /* Methods of Gdk-4.0.Gdk.DrawContext */
    begin_frame(region: cairo.Region): void
    end_frame(): void
    get_frame_region(): cairo.Region | null
    is_in_frame(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed-apis", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-apis", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::api", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::api", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLContext_ConstructProps)
    _init (config?: GLContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static clear_current(): void
    static get_current(): GLContext | null
    static $gtype: GObject.Type
}
interface GLTexture_ConstructProps extends Texture_ConstructProps {
}
class GLTexture {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.GLTexture */
    release(): void
    /* Methods of Gdk-4.0.Gdk.Texture */
    download(data: Uint8Array, stride: number): void
    get_height(): number
    get_width(): number
    save_to_png(filename: string): boolean
    save_to_png_bytes(): GLib.Bytes
    save_to_tiff(filename: string): boolean
    save_to_tiff_bytes(): GLib.Bytes
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gdk-4.0.Gdk.Paintable */
    compute_concrete_size(specified_width: number, specified_height: number, default_width: number, default_height: number): [ /* concrete_width */ number, /* concrete_height */ number ]
    get_current_image(): Paintable
    get_flags(): PaintableFlags
    get_intrinsic_aspect_ratio(): number
    get_intrinsic_height(): number
    get_intrinsic_width(): number
    invalidate_contents(): void
    invalidate_size(): void
    snapshot(snapshot: Snapshot, width: number, height: number): void
    /* Methods of Gio-2.0.Gio.Icon */
    equal(icon2?: Gio.Icon | null): boolean
    serialize(): GLib.Variant | null
    to_string(): string | null
    /* Methods of Gio-2.0.Gio.LoadableIcon */
    load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    load_async(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_finish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of Gdk-4.0.Gdk.GLTexture */
    vfunc_get_current_image(): Paintable
    vfunc_get_flags(): PaintableFlags
    vfunc_get_intrinsic_aspect_ratio(): number
    vfunc_get_intrinsic_height(): number
    vfunc_get_intrinsic_width(): number
    vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void
    vfunc_equal(icon2?: Gio.Icon | null): boolean
    vfunc_hash(): number
    vfunc_serialize(): GLib.Variant | null
    vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    vfunc_load_async(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_load_finish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of Gdk-4.0.Gdk.Texture */
    vfunc_get_current_image(): Paintable
    vfunc_get_flags(): PaintableFlags
    vfunc_get_intrinsic_aspect_ratio(): number
    vfunc_get_intrinsic_height(): number
    vfunc_get_intrinsic_width(): number
    vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void
    vfunc_equal(icon2?: Gio.Icon | null): boolean
    vfunc_hash(): number
    vfunc_serialize(): GLib.Variant | null
    vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    vfunc_load_async(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_load_finish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Paintable */
    connect(sigName: "invalidate-contents", callback: (($obj: GLTexture) => void)): number
    connect_after(sigName: "invalidate-contents", callback: (($obj: GLTexture) => void)): number
    emit(sigName: "invalidate-contents"): void
    connect(sigName: "invalidate-size", callback: (($obj: GLTexture) => void)): number
    connect_after(sigName: "invalidate-size", callback: (($obj: GLTexture) => void)): number
    emit(sigName: "invalidate-size"): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLTexture_ConstructProps)
    _init (config?: GLTexture_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext, id: number, width: number, height: number, destroy: GLib.DestroyNotify, data?: object | null): GLTexture
    static new_empty(intrinsic_width: number, intrinsic_height: number): Paintable
    static deserialize(value: GLib.Variant): Gio.Icon | null
    static hash(icon: object): number
    static new_for_string(str: string): Gio.Icon
    static $gtype: GObject.Type
}
class GrabBrokenEvent {
    /* Methods of Gdk-4.0.Gdk.GrabBrokenEvent */
    get_grab_surface(): Surface
    get_implicit(): boolean
    /* Methods of Gdk-4.0.Gdk.Event */
    _get_angle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    _get_center(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    _get_distance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    get_axes(): [ /* returnType */ boolean, /* axes */ number[] ]
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    get_device(): Device | null
    get_device_tool(): DeviceTool | null
    get_display(): Display | null
    get_event_sequence(): EventSequence
    get_event_type(): EventType
    get_history(): TimeCoord[] | null
    get_modifier_state(): ModifierType
    get_pointer_emulated(): boolean
    get_position(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    get_seat(): Seat | null
    get_surface(): Surface | null
    get_time(): number
    ref(): Event
    triggers_context_menu(): boolean
    unref(): void
    static name: string
}
class KeyEvent {
    /* Methods of Gdk-4.0.Gdk.KeyEvent */
    get_consumed_modifiers(): ModifierType
    get_keycode(): number
    get_keyval(): number
    get_layout(): number
    get_level(): number
    get_match(): [ /* returnType */ boolean, /* keyval */ number, /* modifiers */ ModifierType ]
    is_modifier(): boolean
    matches(keyval: number, modifiers: ModifierType): KeyMatch
    /* Methods of Gdk-4.0.Gdk.Event */
    _get_angle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    _get_center(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    _get_distance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    get_axes(): [ /* returnType */ boolean, /* axes */ number[] ]
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    get_device(): Device | null
    get_device_tool(): DeviceTool | null
    get_display(): Display | null
    get_event_sequence(): EventSequence
    get_event_type(): EventType
    get_history(): TimeCoord[] | null
    get_modifier_state(): ModifierType
    get_pointer_emulated(): boolean
    get_position(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    get_seat(): Seat | null
    get_surface(): Surface | null
    get_time(): number
    ref(): Event
    triggers_context_menu(): boolean
    unref(): void
    static name: string
}
interface MemoryTexture_ConstructProps extends Texture_ConstructProps {
}
class MemoryTexture {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Texture */
    download(data: Uint8Array, stride: number): void
    get_height(): number
    get_width(): number
    save_to_png(filename: string): boolean
    save_to_png_bytes(): GLib.Bytes
    save_to_tiff(filename: string): boolean
    save_to_tiff_bytes(): GLib.Bytes
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gdk-4.0.Gdk.Paintable */
    compute_concrete_size(specified_width: number, specified_height: number, default_width: number, default_height: number): [ /* concrete_width */ number, /* concrete_height */ number ]
    get_current_image(): Paintable
    get_flags(): PaintableFlags
    get_intrinsic_aspect_ratio(): number
    get_intrinsic_height(): number
    get_intrinsic_width(): number
    invalidate_contents(): void
    invalidate_size(): void
    snapshot(snapshot: Snapshot, width: number, height: number): void
    /* Methods of Gio-2.0.Gio.Icon */
    equal(icon2?: Gio.Icon | null): boolean
    serialize(): GLib.Variant | null
    to_string(): string | null
    /* Methods of Gio-2.0.Gio.LoadableIcon */
    load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    load_async(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_finish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of Gdk-4.0.Gdk.MemoryTexture */
    vfunc_get_current_image(): Paintable
    vfunc_get_flags(): PaintableFlags
    vfunc_get_intrinsic_aspect_ratio(): number
    vfunc_get_intrinsic_height(): number
    vfunc_get_intrinsic_width(): number
    vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void
    vfunc_equal(icon2?: Gio.Icon | null): boolean
    vfunc_hash(): number
    vfunc_serialize(): GLib.Variant | null
    vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    vfunc_load_async(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_load_finish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of Gdk-4.0.Gdk.Texture */
    vfunc_get_current_image(): Paintable
    vfunc_get_flags(): PaintableFlags
    vfunc_get_intrinsic_aspect_ratio(): number
    vfunc_get_intrinsic_height(): number
    vfunc_get_intrinsic_width(): number
    vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void
    vfunc_equal(icon2?: Gio.Icon | null): boolean
    vfunc_hash(): number
    vfunc_serialize(): GLib.Variant | null
    vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    vfunc_load_async(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_load_finish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MemoryTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MemoryTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Paintable */
    connect(sigName: "invalidate-contents", callback: (($obj: MemoryTexture) => void)): number
    connect_after(sigName: "invalidate-contents", callback: (($obj: MemoryTexture) => void)): number
    emit(sigName: "invalidate-contents"): void
    connect(sigName: "invalidate-size", callback: (($obj: MemoryTexture) => void)): number
    connect_after(sigName: "invalidate-size", callback: (($obj: MemoryTexture) => void)): number
    emit(sigName: "invalidate-size"): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MemoryTexture_ConstructProps)
    _init (config?: MemoryTexture_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(width: number, height: number, format: MemoryFormat, bytes: GLib.Bytes, stride: number): MemoryTexture
    static new_empty(intrinsic_width: number, intrinsic_height: number): Paintable
    static deserialize(value: GLib.Variant): Gio.Icon | null
    static hash(icon: object): number
    static new_for_string(str: string): Gio.Icon
    static $gtype: GObject.Type
}
interface Monitor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Monitor */
    display?: Display
}
class Monitor {
    /* Properties of Gdk-4.0.Gdk.Monitor */
    readonly connector: string
    readonly geometry: Rectangle
    readonly height_mm: number
    readonly manufacturer: string
    readonly model: string
    readonly refresh_rate: number
    readonly scale_factor: number
    readonly subpixel_layout: SubpixelLayout
    readonly valid: boolean
    readonly width_mm: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Monitor */
    get_connector(): string | null
    get_display(): Display
    get_geometry(): /* geometry */ Rectangle
    get_height_mm(): number
    get_manufacturer(): string | null
    get_model(): string | null
    get_refresh_rate(): number
    get_scale_factor(): number
    get_subpixel_layout(): SubpixelLayout
    get_width_mm(): number
    is_valid(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Monitor */
    connect(sigName: "invalidate", callback: (($obj: Monitor) => void)): number
    connect_after(sigName: "invalidate", callback: (($obj: Monitor) => void)): number
    emit(sigName: "invalidate"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connector", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connector", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::geometry", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geometry", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-mm", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-mm", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manufacturer", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refresh-rate", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-rate", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subpixel-layout", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpixel-layout", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valid", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-mm", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Monitor_ConstructProps)
    _init (config?: Monitor_ConstructProps): void
    static $gtype: GObject.Type
}
class MotionEvent {
    /* Methods of Gdk-4.0.Gdk.Event */
    _get_angle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    _get_center(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    _get_distance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    get_axes(): [ /* returnType */ boolean, /* axes */ number[] ]
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    get_device(): Device | null
    get_device_tool(): DeviceTool | null
    get_display(): Display | null
    get_event_sequence(): EventSequence
    get_event_type(): EventType
    get_history(): TimeCoord[] | null
    get_modifier_state(): ModifierType
    get_pointer_emulated(): boolean
    get_position(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    get_seat(): Seat | null
    get_surface(): Surface | null
    get_time(): number
    ref(): Event
    triggers_context_menu(): boolean
    unref(): void
    static name: string
}
class PadEvent {
    /* Methods of Gdk-4.0.Gdk.PadEvent */
    get_axis_value(): [ /* index */ number, /* value */ number ]
    get_button(): number
    get_group_mode(): [ /* group */ number, /* mode */ number ]
    /* Methods of Gdk-4.0.Gdk.Event */
    _get_angle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    _get_center(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    _get_distance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    get_axes(): [ /* returnType */ boolean, /* axes */ number[] ]
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    get_device(): Device | null
    get_device_tool(): DeviceTool | null
    get_display(): Display | null
    get_event_sequence(): EventSequence
    get_event_type(): EventType
    get_history(): TimeCoord[] | null
    get_modifier_state(): ModifierType
    get_pointer_emulated(): boolean
    get_position(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    get_seat(): Seat | null
    get_surface(): Surface | null
    get_time(): number
    ref(): Event
    triggers_context_menu(): boolean
    unref(): void
    static name: string
}
class ProximityEvent {
    /* Methods of Gdk-4.0.Gdk.Event */
    _get_angle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    _get_center(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    _get_distance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    get_axes(): [ /* returnType */ boolean, /* axes */ number[] ]
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    get_device(): Device | null
    get_device_tool(): DeviceTool | null
    get_display(): Display | null
    get_event_sequence(): EventSequence
    get_event_type(): EventType
    get_history(): TimeCoord[] | null
    get_modifier_state(): ModifierType
    get_pointer_emulated(): boolean
    get_position(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    get_seat(): Seat | null
    get_surface(): Surface | null
    get_time(): number
    ref(): Event
    triggers_context_menu(): boolean
    unref(): void
    static name: string
}
class ScrollEvent {
    /* Methods of Gdk-4.0.Gdk.ScrollEvent */
    get_deltas(): [ /* delta_x */ number, /* delta_y */ number ]
    get_direction(): ScrollDirection
    is_stop(): boolean
    /* Methods of Gdk-4.0.Gdk.Event */
    _get_angle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    _get_center(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    _get_distance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    get_axes(): [ /* returnType */ boolean, /* axes */ number[] ]
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    get_device(): Device | null
    get_device_tool(): DeviceTool | null
    get_display(): Display | null
    get_event_sequence(): EventSequence
    get_event_type(): EventType
    get_history(): TimeCoord[] | null
    get_modifier_state(): ModifierType
    get_pointer_emulated(): boolean
    get_position(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    get_seat(): Seat | null
    get_surface(): Surface | null
    get_time(): number
    ref(): Event
    triggers_context_menu(): boolean
    unref(): void
    static name: string
}
interface Seat_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Seat */
    display?: Display
}
class Seat {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Seat */
    get_capabilities(): SeatCapabilities
    get_devices(capabilities: SeatCapabilities): Device[]
    get_display(): Display
    get_keyboard(): Device | null
    get_pointer(): Device | null
    get_tools(): DeviceTool[]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Seat */
    connect(sigName: "device-added", callback: (($obj: Seat, device: Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: Seat, device: Device) => void)): number
    emit(sigName: "device-added", device: Device): void
    connect(sigName: "device-removed", callback: (($obj: Seat, device: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Seat, device: Device) => void)): number
    emit(sigName: "device-removed", device: Device): void
    connect(sigName: "tool-added", callback: (($obj: Seat, tool: DeviceTool) => void)): number
    connect_after(sigName: "tool-added", callback: (($obj: Seat, tool: DeviceTool) => void)): number
    emit(sigName: "tool-added", tool: DeviceTool): void
    connect(sigName: "tool-removed", callback: (($obj: Seat, tool: DeviceTool) => void)): number
    connect_after(sigName: "tool-removed", callback: (($obj: Seat, tool: DeviceTool) => void)): number
    emit(sigName: "tool-removed", tool: DeviceTool): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Seat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Seat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Seat_ConstructProps)
    _init (config?: Seat_ConstructProps): void
    static $gtype: GObject.Type
}
interface Snapshot_ConstructProps extends GObject.Object_ConstructProps {
}
class Snapshot {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Snapshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Snapshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Snapshot_ConstructProps)
    _init (config?: Snapshot_ConstructProps): void
    static $gtype: GObject.Type
}
interface Surface_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Surface */
    cursor?: Cursor
    display?: Display
    frame_clock?: FrameClock
}
class Surface {
    /* Properties of Gdk-4.0.Gdk.Surface */
    cursor: Cursor
    readonly height: number
    readonly mapped: boolean
    readonly scale_factor: number
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Surface */
    beep(): void
    create_cairo_context(): CairoContext
    create_gl_context(): GLContext
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    create_vulkan_context(): VulkanContext
    destroy(): void
    get_cursor(): Cursor | null
    get_device_cursor(device: Device): Cursor | null
    get_device_position(device: Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    get_display(): Display
    get_frame_clock(): FrameClock
    get_height(): number
    get_mapped(): boolean
    get_scale_factor(): number
    get_width(): number
    hide(): void
    is_destroyed(): boolean
    queue_render(): void
    request_layout(): void
    set_cursor(cursor?: Cursor | null): void
    set_device_cursor(device: Device, cursor: Cursor): void
    set_input_region(region: cairo.Region): void
    set_opaque_region(region?: cairo.Region | null): void
    translate_coordinates(to: Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Surface */
    connect(sigName: "enter-monitor", callback: (($obj: Surface, monitor: Monitor) => void)): number
    connect_after(sigName: "enter-monitor", callback: (($obj: Surface, monitor: Monitor) => void)): number
    emit(sigName: "enter-monitor", monitor: Monitor): void
    connect(sigName: "event", callback: (($obj: Surface, event: Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Surface, event: Event) => boolean)): number
    emit(sigName: "event", event: Event): void
    connect(sigName: "layout", callback: (($obj: Surface, width: number, height: number) => void)): number
    connect_after(sigName: "layout", callback: (($obj: Surface, width: number, height: number) => void)): number
    emit(sigName: "layout", width: number, height: number): void
    connect(sigName: "leave-monitor", callback: (($obj: Surface, monitor: Monitor) => void)): number
    connect_after(sigName: "leave-monitor", callback: (($obj: Surface, monitor: Monitor) => void)): number
    emit(sigName: "leave-monitor", monitor: Monitor): void
    connect(sigName: "render", callback: (($obj: Surface, region: cairo.Region) => boolean)): number
    connect_after(sigName: "render", callback: (($obj: Surface, region: cairo.Region) => boolean)): number
    emit(sigName: "render", region: cairo.Region): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Surface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Surface_ConstructProps)
    _init (config?: Surface_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_popup(parent: Surface, autohide: boolean): Surface
    static new_toplevel(display: Display): Surface
    static $gtype: GObject.Type
}
interface Texture_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Texture */
    height?: number
    width?: number
}
class Texture {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Texture */
    download(data: Uint8Array, stride: number): void
    get_height(): number
    get_width(): number
    save_to_png(filename: string): boolean
    save_to_png_bytes(): GLib.Bytes
    save_to_tiff(filename: string): boolean
    save_to_tiff_bytes(): GLib.Bytes
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gdk-4.0.Gdk.Paintable */
    compute_concrete_size(specified_width: number, specified_height: number, default_width: number, default_height: number): [ /* concrete_width */ number, /* concrete_height */ number ]
    get_current_image(): Paintable
    get_flags(): PaintableFlags
    get_intrinsic_aspect_ratio(): number
    get_intrinsic_height(): number
    get_intrinsic_width(): number
    invalidate_contents(): void
    invalidate_size(): void
    snapshot(snapshot: Snapshot, width: number, height: number): void
    /* Methods of Gio-2.0.Gio.Icon */
    equal(icon2?: Gio.Icon | null): boolean
    serialize(): GLib.Variant | null
    to_string(): string | null
    /* Methods of Gio-2.0.Gio.LoadableIcon */
    load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    load_async(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_finish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of Gdk-4.0.Gdk.Texture */
    vfunc_get_current_image(): Paintable
    vfunc_get_flags(): PaintableFlags
    vfunc_get_intrinsic_aspect_ratio(): number
    vfunc_get_intrinsic_height(): number
    vfunc_get_intrinsic_width(): number
    vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void
    vfunc_equal(icon2?: Gio.Icon | null): boolean
    vfunc_hash(): number
    vfunc_serialize(): GLib.Variant | null
    vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    vfunc_load_async(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_load_finish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Texture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Paintable */
    connect(sigName: "invalidate-contents", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "invalidate-contents", callback: (($obj: Texture) => void)): number
    emit(sigName: "invalidate-contents"): void
    connect(sigName: "invalidate-size", callback: (($obj: Texture) => void)): number
    connect_after(sigName: "invalidate-size", callback: (($obj: Texture) => void)): number
    emit(sigName: "invalidate-size"): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Texture_ConstructProps)
    _init (config?: Texture_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Texture
    static new_from_bytes(bytes: GLib.Bytes): Texture
    static new_from_file(file: Gio.File): Texture
    static new_from_filename(path: string): Texture
    static new_from_resource(resource_path: string): Texture
    static new_empty(intrinsic_width: number, intrinsic_height: number): Paintable
    static deserialize(value: GLib.Variant): Gio.Icon | null
    static hash(icon: object): number
    static new_for_string(str: string): Gio.Icon
    static $gtype: GObject.Type
}
class TouchEvent {
    /* Methods of Gdk-4.0.Gdk.TouchEvent */
    get_emulating_pointer(): boolean
    /* Methods of Gdk-4.0.Gdk.Event */
    _get_angle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    _get_center(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    _get_distance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    get_axes(): [ /* returnType */ boolean, /* axes */ number[] ]
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    get_device(): Device | null
    get_device_tool(): DeviceTool | null
    get_display(): Display | null
    get_event_sequence(): EventSequence
    get_event_type(): EventType
    get_history(): TimeCoord[] | null
    get_modifier_state(): ModifierType
    get_pointer_emulated(): boolean
    get_position(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    get_seat(): Seat | null
    get_surface(): Surface | null
    get_time(): number
    ref(): Event
    triggers_context_menu(): boolean
    unref(): void
    static name: string
}
class TouchpadEvent {
    /* Methods of Gdk-4.0.Gdk.TouchpadEvent */
    get_deltas(): [ /* dx */ number, /* dy */ number ]
    get_gesture_phase(): TouchpadGesturePhase
    get_n_fingers(): number
    get_pinch_angle_delta(): number
    get_pinch_scale(): number
    /* Methods of Gdk-4.0.Gdk.Event */
    _get_angle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    _get_center(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    _get_distance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    get_axes(): [ /* returnType */ boolean, /* axes */ number[] ]
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    get_device(): Device | null
    get_device_tool(): DeviceTool | null
    get_display(): Display | null
    get_event_sequence(): EventSequence
    get_event_type(): EventType
    get_history(): TimeCoord[] | null
    get_modifier_state(): ModifierType
    get_pointer_emulated(): boolean
    get_position(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    get_seat(): Seat | null
    get_surface(): Surface | null
    get_time(): number
    ref(): Event
    triggers_context_menu(): boolean
    unref(): void
    static name: string
}
interface VulkanContext_ConstructProps extends DrawContext_ConstructProps {
}
class VulkanContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.DrawContext */
    begin_frame(region: cairo.Region): void
    end_frame(): void
    get_display(): Display | null
    get_frame_region(): cairo.Region | null
    get_surface(): Surface | null
    is_in_frame(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gdk-4.0.Gdk.VulkanContext */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.VulkanContext */
    connect(sigName: "images-updated", callback: (($obj: VulkanContext) => void)): number
    connect_after(sigName: "images-updated", callback: (($obj: VulkanContext) => void)): number
    emit(sigName: "images-updated"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanContext_ConstructProps)
    _init (config?: VulkanContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
class ContentFormats {
    /* Methods of Gdk-4.0.Gdk.ContentFormats */
    contain_gtype(type: GObject.Type): boolean
    contain_mime_type(mime_type: string): boolean
    get_gtypes(): GObject.Type[] | null
    get_mime_types(): string[] | null
    match(second: ContentFormats): boolean
    match_gtype(second: ContentFormats): GObject.Type
    match_mime_type(second: ContentFormats): string | null
    print(string: GLib.String): void
    ref(): ContentFormats
    to_string(): string
    union(second: ContentFormats): ContentFormats
    union_deserialize_gtypes(): ContentFormats
    union_deserialize_mime_types(): ContentFormats
    union_serialize_gtypes(): ContentFormats
    union_serialize_mime_types(): ContentFormats
    unref(): void
    static name: string
    static new(mime_types: string[] | null): ContentFormats
    constructor(mime_types: string[] | null)
    /* Static methods and pseudo-constructors */
    static new(mime_types: string[] | null): ContentFormats
    static new_for_gtype(type: GObject.Type): ContentFormats
    static parse(string: string): ContentFormats | null
}
class ContentFormatsBuilder {
    /* Methods of Gdk-4.0.Gdk.ContentFormatsBuilder */
    add_formats(formats: ContentFormats): void
    add_gtype(type: GObject.Type): void
    add_mime_type(mime_type: string): void
    ref(): ContentFormatsBuilder
    to_formats(): ContentFormats
    unref(): void
    static name: string
    static new(): ContentFormatsBuilder
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContentFormatsBuilder
}
abstract class ContentProviderClass {
    /* Fields of Gdk-4.0.Gdk.ContentProviderClass */
    readonly parent_class: GObject.ObjectClass
    readonly content_changed: (provider: ContentProvider) => void
    readonly attach_clipboard: (provider: ContentProvider, clipboard: Clipboard) => void
    readonly detach_clipboard: (provider: ContentProvider, clipboard: Clipboard) => void
    readonly ref_formats: (provider: ContentProvider) => ContentFormats
    readonly ref_storable_formats: (provider: ContentProvider) => ContentFormats
    readonly write_mime_type_async: (provider: ContentProvider, mime_type: string, stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly write_mime_type_finish: (provider: ContentProvider, result: Gio.AsyncResult) => boolean
    readonly get_value: (provider: ContentProvider) => [ /* returnType */ boolean, /* value */ any ]
    static name: string
}
abstract class DevicePadInterface {
    static name: string
}
abstract class DragSurfaceInterface {
    static name: string
}
class EventSequence {
    static name: string
}
class FileList {
    /* Methods of Gdk-4.0.Gdk.FileList */
    get_files(): Gio.File[]
    static name: string
}
abstract class FrameClockClass {
    static name: string
}
class FrameClockPrivate {
    static name: string
}
class FrameTimings {
    /* Methods of Gdk-4.0.Gdk.FrameTimings */
    get_complete(): boolean
    get_frame_counter(): number
    get_frame_time(): number
    get_predicted_presentation_time(): number
    get_presentation_time(): number
    get_refresh_interval(): number
    ref(): FrameTimings
    unref(): void
    static name: string
}
abstract class GLTextureClass {
    static name: string
}
class KeymapKey {
    /* Fields of Gdk-4.0.Gdk.KeymapKey */
    readonly keycode: number
    readonly group: number
    readonly level: number
    static name: string
}
abstract class MemoryTextureClass {
    static name: string
}
abstract class MonitorClass {
    static name: string
}
abstract class PaintableInterface {
    /* Fields of Gdk-4.0.Gdk.PaintableInterface */
    readonly snapshot: (paintable: Paintable, snapshot: Snapshot, width: number, height: number) => void
    readonly get_current_image: (paintable: Paintable) => Paintable
    readonly get_flags: (paintable: Paintable) => PaintableFlags
    readonly get_intrinsic_width: (paintable: Paintable) => number
    readonly get_intrinsic_height: (paintable: Paintable) => number
    readonly get_intrinsic_aspect_ratio: (paintable: Paintable) => number
    static name: string
}
abstract class PopupInterface {
    static name: string
}
class PopupLayout {
    /* Methods of Gdk-4.0.Gdk.PopupLayout */
    copy(): PopupLayout
    equal(other: PopupLayout): boolean
    get_anchor_hints(): AnchorHints
    get_anchor_rect(): Rectangle
    get_offset(): [ /* dx */ number, /* dy */ number ]
    get_rect_anchor(): Gravity
    get_shadow_width(): [ /* left */ number, /* right */ number, /* top */ number, /* bottom */ number ]
    get_surface_anchor(): Gravity
    ref(): PopupLayout
    set_anchor_hints(anchor_hints: AnchorHints): void
    set_anchor_rect(anchor_rect: Rectangle): void
    set_offset(dx: number, dy: number): void
    set_rect_anchor(anchor: Gravity): void
    set_shadow_width(left: number, right: number, top: number, bottom: number): void
    set_surface_anchor(anchor: Gravity): void
    unref(): void
    static name: string
    static new(anchor_rect: Rectangle, rect_anchor: Gravity, surface_anchor: Gravity): PopupLayout
    constructor(anchor_rect: Rectangle, rect_anchor: Gravity, surface_anchor: Gravity)
    /* Static methods and pseudo-constructors */
    static new(anchor_rect: Rectangle, rect_anchor: Gravity, surface_anchor: Gravity): PopupLayout
}
class RGBA {
    /* Fields of Gdk-4.0.Gdk.RGBA */
    readonly red: number
    readonly green: number
    readonly blue: number
    readonly alpha: number
    /* Methods of Gdk-4.0.Gdk.RGBA */
    copy(): RGBA
    equal(p2: RGBA): boolean
    free(): void
    hash(): number
    is_clear(): boolean
    is_opaque(): boolean
    parse(spec: string): boolean
    to_string(): string
    static name: string
}
class Rectangle {
    /* Fields of Gdk-4.0.Gdk.Rectangle */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    /* Methods of Gdk-4.0.Gdk.Rectangle */
    contains_point(x: number, y: number): boolean
    equal(rect2: Rectangle): boolean
    intersect(src2: Rectangle): [ /* returnType */ boolean, /* dest */ Rectangle | null ]
    union(src2: Rectangle): /* dest */ Rectangle
    static name: string
}
abstract class SnapshotClass {
    static name: string
}
abstract class SurfaceClass {
    static name: string
}
abstract class TextureClass {
    static name: string
}
class TimeCoord {
    /* Fields of Gdk-4.0.Gdk.TimeCoord */
    readonly time: number
    readonly flags: AxisFlags
    readonly axes: number[]
    static name: string
}
abstract class ToplevelInterface {
    static name: string
}
class ToplevelLayout {
    /* Methods of Gdk-4.0.Gdk.ToplevelLayout */
    copy(): ToplevelLayout
    equal(other: ToplevelLayout): boolean
    get_fullscreen(): [ /* returnType */ boolean, /* fullscreen */ boolean ]
    get_fullscreen_monitor(): Monitor | null
    get_maximized(): [ /* returnType */ boolean, /* maximized */ boolean ]
    get_resizable(): boolean
    ref(): ToplevelLayout
    set_fullscreen(fullscreen: boolean, monitor?: Monitor | null): void
    set_maximized(maximized: boolean): void
    set_resizable(resizable: boolean): void
    unref(): void
    static name: string
    static new(): ToplevelLayout
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ToplevelLayout
}
class ToplevelSize {
    /* Methods of Gdk-4.0.Gdk.ToplevelSize */
    get_bounds(): [ /* bounds_width */ number, /* bounds_height */ number ]
    set_min_size(min_width: number, min_height: number): void
    set_shadow_width(left: number, right: number, top: number, bottom: number): void
    set_size(width: number, height: number): void
    static name: string
}
}
export default Gdk;