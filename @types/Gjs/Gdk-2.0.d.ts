/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gdk-2.0
 */

import type * as Gjs from './Gjs';
import type cairo from './cairo-1.0';
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
    PRESSURE,
    XTILT,
    YTILT,
    WHEEL,
    LAST,
}
enum ByteOrder {
    LSB_FIRST,
    MSB_FIRST,
}
enum CapStyle {
    NOT_LAST,
    BUTT,
    ROUND,
    PROJECTING,
}
enum CrossingMode {
    NORMAL,
    GRAB,
    UNGRAB,
    GTK_GRAB,
    GTK_UNGRAB,
    STATE_CHANGED,
}
enum CursorType {
    X_CURSOR,
    ARROW,
    BASED_ARROW_DOWN,
    BASED_ARROW_UP,
    BOAT,
    BOGOSITY,
    BOTTOM_LEFT_CORNER,
    BOTTOM_RIGHT_CORNER,
    BOTTOM_SIDE,
    BOTTOM_TEE,
    BOX_SPIRAL,
    CENTER_PTR,
    CIRCLE,
    CLOCK,
    COFFEE_MUG,
    CROSS,
    CROSS_REVERSE,
    CROSSHAIR,
    DIAMOND_CROSS,
    DOT,
    DOTBOX,
    DOUBLE_ARROW,
    DRAFT_LARGE,
    DRAFT_SMALL,
    DRAPED_BOX,
    EXCHANGE,
    FLEUR,
    GOBBLER,
    GUMBY,
    HAND1,
    HAND2,
    HEART,
    ICON,
    IRON_CROSS,
    LEFT_PTR,
    LEFT_SIDE,
    LEFT_TEE,
    LEFTBUTTON,
    LL_ANGLE,
    LR_ANGLE,
    MAN,
    MIDDLEBUTTON,
    MOUSE,
    PENCIL,
    PIRATE,
    PLUS,
    QUESTION_ARROW,
    RIGHT_PTR,
    RIGHT_SIDE,
    RIGHT_TEE,
    RIGHTBUTTON,
    RTL_LOGO,
    SAILBOAT,
    SB_DOWN_ARROW,
    SB_H_DOUBLE_ARROW,
    SB_LEFT_ARROW,
    SB_RIGHT_ARROW,
    SB_UP_ARROW,
    SB_V_DOUBLE_ARROW,
    SHUTTLE,
    SIZING,
    SPIDER,
    SPRAYCAN,
    STAR,
    TARGET,
    TCROSS,
    TOP_LEFT_ARROW,
    TOP_LEFT_CORNER,
    TOP_RIGHT_CORNER,
    TOP_SIDE,
    TOP_TEE,
    TREK,
    UL_ANGLE,
    UMBRELLA,
    UR_ANGLE,
    WATCH,
    XTERM,
    LAST_CURSOR,
    BLANK_CURSOR,
    CURSOR_IS_PIXMAP,
}
enum DragProtocol {
    MOTIF,
    XDND,
    ROOTWIN,
    NONE,
    WIN32_DROPFILES,
    OLE2,
    LOCAL,
}
enum EventType {
    NOTHING,
    DELETE,
    DESTROY,
    EXPOSE,
    MOTION_NOTIFY,
    BUTTON_PRESS,
    TODO_2BUTTON_PRESS,
    TODO_3BUTTON_PRESS,
    BUTTON_RELEASE,
    KEY_PRESS,
    KEY_RELEASE,
    ENTER_NOTIFY,
    LEAVE_NOTIFY,
    FOCUS_CHANGE,
    CONFIGURE,
    MAP,
    UNMAP,
    PROPERTY_NOTIFY,
    SELECTION_CLEAR,
    SELECTION_REQUEST,
    SELECTION_NOTIFY,
    PROXIMITY_IN,
    PROXIMITY_OUT,
    DRAG_ENTER,
    DRAG_LEAVE,
    DRAG_MOTION,
    DRAG_STATUS,
    DROP_START,
    DROP_FINISHED,
    CLIENT_EVENT,
    VISIBILITY_NOTIFY,
    NO_EXPOSE,
    SCROLL,
    WINDOW_STATE,
    SETTING,
    OWNER_CHANGE,
    GRAB_BROKEN,
    DAMAGE,
    EVENT_LAST,
}
enum ExtensionMode {
    NONE,
    ALL,
    CURSOR,
}
enum Fill {
    SOLID,
    TILED,
    STIPPLED,
    OPAQUE_STIPPLED,
}
enum FillRule {
    EVEN_ODD_RULE,
    WINDING_RULE,
}
enum FilterReturn {
    CONTINUE,
    TRANSLATE,
    REMOVE,
}
enum FontType {
    FONT,
    FONTSET,
}
enum Function {
    COPY,
    INVERT,
    XOR,
    CLEAR,
    AND,
    AND_REVERSE,
    AND_INVERT,
    NOOP,
    OR,
    EQUIV,
    OR_REVERSE,
    COPY_INVERT,
    OR_INVERT,
    NAND,
    NOR,
    SET,
}
enum GrabStatus {
    SUCCESS,
    ALREADY_GRABBED,
    INVALID_TIME,
    NOT_VIEWABLE,
    FROZEN,
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
enum ImageType {
    NORMAL,
    SHARED,
    FASTEST,
}
enum InputMode {
    DISABLED,
    SCREEN,
    WINDOW,
}
enum InputSource {
    MOUSE,
    PEN,
    ERASER,
    CURSOR,
}
enum JoinStyle {
    MITER,
    ROUND,
    BEVEL,
}
enum LineStyle {
    SOLID,
    ON_OFF_DASH,
    DOUBLE_DASH,
}
enum NotifyType {
    ANCESTOR,
    VIRTUAL,
    INFERIOR,
    NONLINEAR,
    NONLINEAR_VIRTUAL,
    UNKNOWN,
}
enum OverlapType {
    IN,
    OUT,
    PART,
}
enum OwnerChange {
    NEW_OWNER,
    DESTROY,
    CLOSE,
}
enum PropMode {
    REPLACE,
    PREPEND,
    APPEND,
}
enum PropertyState {
    NEW_VALUE,
    DELETE,
}
enum RgbDither {
    NONE,
    NORMAL,
    MAX,
}
enum ScrollDirection {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
enum SettingAction {
    NEW,
    CHANGED,
    DELETED,
}
enum Status {
    OK,
    ERROR,
    ERROR_PARAM,
    ERROR_FILE,
    ERROR_MEM,
}
enum SubwindowMode {
    CLIP_BY_CHILDREN,
    INCLUDE_INFERIORS,
}
enum VisibilityState {
    UNOBSCURED,
    PARTIAL,
    FULLY_OBSCURED,
}
enum VisualType {
    STATIC_GRAY,
    GRAYSCALE,
    STATIC_COLOR,
    PSEUDO_COLOR,
    TRUE_COLOR,
    DIRECT_COLOR,
}
enum WindowClass {
    OUTPUT,
    ONLY,
}
enum WindowEdge {
    NORTH_WEST,
    NORTH,
    NORTH_EAST,
    WEST,
    EAST,
    SOUTH_WEST,
    SOUTH,
    SOUTH_EAST,
}
enum WindowType {
    ROOT,
    TOPLEVEL,
    CHILD,
    DIALOG,
    TEMP,
    FOREIGN,
    OFFSCREEN,
}
enum WindowTypeHint {
    NORMAL,
    DIALOG,
    MENU,
    TOOLBAR,
    SPLASHSCREEN,
    UTILITY,
    DOCK,
    DESKTOP,
    DROPDOWN_MENU,
    POPUP_MENU,
    TOOLTIP,
    NOTIFICATION,
    COMBO,
    DND,
}
enum DragAction {
    DEFAULT,
    COPY,
    MOVE,
    LINK,
    PRIVATE,
    ASK,
}
enum EventMask {
    EXPOSURE_MASK,
    POINTER_MOTION_MASK,
    POINTER_MOTION_HINT_MASK,
    BUTTON_MOTION_MASK,
    BUTTON1_MOTION_MASK,
    BUTTON2_MOTION_MASK,
    BUTTON3_MOTION_MASK,
    BUTTON_PRESS_MASK,
    BUTTON_RELEASE_MASK,
    KEY_PRESS_MASK,
    KEY_RELEASE_MASK,
    ENTER_NOTIFY_MASK,
    LEAVE_NOTIFY_MASK,
    FOCUS_CHANGE_MASK,
    STRUCTURE_MASK,
    PROPERTY_CHANGE_MASK,
    VISIBILITY_NOTIFY_MASK,
    PROXIMITY_IN_MASK,
    PROXIMITY_OUT_MASK,
    SUBSTRUCTURE_MASK,
    SCROLL_MASK,
    ALL_EVENTS_MASK,
}
enum GCValuesMask {
    FOREGROUND,
    BACKGROUND,
    FONT,
    FUNCTION,
    FILL,
    TILE,
    STIPPLE,
    CLIP_MASK,
    SUBWINDOW,
    TS_X_ORIGIN,
    TS_Y_ORIGIN,
    CLIP_X_ORIGIN,
    CLIP_Y_ORIGIN,
    EXPOSURES,
    LINE_WIDTH,
    LINE_STYLE,
    CAP_STYLE,
    JOIN_STYLE,
}
enum InputCondition {
    READ,
    WRITE,
    EXCEPTION,
}
enum ModifierType {
    SHIFT_MASK,
    LOCK_MASK,
    CONTROL_MASK,
    MOD1_MASK,
    MOD2_MASK,
    MOD3_MASK,
    MOD4_MASK,
    MOD5_MASK,
    BUTTON1_MASK,
    BUTTON2_MASK,
    BUTTON3_MASK,
    BUTTON4_MASK,
    BUTTON5_MASK,
    SUPER_MASK,
    HYPER_MASK,
    META_MASK,
    RELEASE_MASK,
    MODIFIER_MASK,
}
enum WMDecoration {
    ALL,
    BORDER,
    RESIZEH,
    TITLE,
    MENU,
    MINIMIZE,
    MAXIMIZE,
}
enum WMFunction {
    ALL,
    RESIZE,
    MOVE,
    MINIMIZE,
    MAXIMIZE,
    CLOSE,
}
enum WindowAttributesType {
    TITLE,
    X,
    Y,
    CURSOR,
    COLORMAP,
    VISUAL,
    WMCLASS,
    NOREDIR,
    TYPE_HINT,
}
enum WindowHints {
    POS,
    MIN_SIZE,
    MAX_SIZE,
    BASE_SIZE,
    ASPECT,
    RESIZE_INC,
    WIN_GRAVITY,
    USER_POS,
    USER_SIZE,
}
enum WindowState {
    WITHDRAWN,
    ICONIFIED,
    MAXIMIZED,
    STICKY,
    FULLSCREEN,
    ABOVE,
    BELOW,
}
const CURRENT_TIME: number
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
const KEY_AudioMute: number
const KEY_AudioNext: number
const KEY_AudioPause: number
const KEY_AudioPlay: number
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
const KEY_Cabovedot: number
const KEY_Cacute: number
const KEY_Calculator: number
const KEY_Calendar: number
const KEY_Cancel: number
const KEY_Caps_Lock: number
const KEY_Ccaron: number
const KEY_Ccedilla: number
const KEY_Ccircumflex: number
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
const KEY_LogOff: number
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
const KEY_dead_acute: number
const KEY_dead_belowbreve: number
const KEY_dead_belowcircumflex: number
const KEY_dead_belowcomma: number
const KEY_dead_belowdiaeresis: number
const KEY_dead_belowdot: number
const KEY_dead_belowmacron: number
const KEY_dead_belowring: number
const KEY_dead_belowtilde: number
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
const KEY_dead_hook: number
const KEY_dead_horn: number
const KEY_dead_i: number
const KEY_dead_invertedbreve: number
const KEY_dead_iota: number
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
const MAX_TIMECOORD_AXES: number
const NO_BG: Pixmap
const PARENT_RELATIVE: number
const PARENT_RELATIVE_BG: Pixmap
const PRIORITY_REDRAW: number
function add_option_entries_libgtk_only(group: GLib.OptionGroup): void
function beep(): void
function cairo_create(drawable: Drawable): cairo.Context
function cairo_rectangle(cr: cairo.Context, rectangle: Rectangle): void
function cairo_region(cr: cairo.Context, region: Region): void
function cairo_reset_clip(cr: cairo.Context, drawable: Drawable): void
function cairo_set_source_color(cr: cairo.Context, color: Color): void
function cairo_set_source_pixbuf(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, pixbuf_x: number, pixbuf_y: number): void
function cairo_set_source_pixmap(cr: cairo.Context, pixmap: Pixmap, pixmap_x: number, pixmap_y: number): void
function cairo_set_source_window(cr: cairo.Context, window: Window, x: number, y: number): void
function char_height(font: Font, character: number): number
function char_measure(font: Font, character: number): number
function char_width(font: Font, character: number): number
function char_width_wc(font: Font, character: WChar): number
function color_alloc(colormap: Colormap, color: Color): number
function color_black(colormap: Colormap, color: Color): number
function color_change(colormap: Colormap, color: Color): number
function color_parse(spec: string): [ /* returnType */ boolean, /* color */ Color ]
function color_white(colormap: Colormap, color: Color): number
function colors_alloc(colormap: Colormap, contiguous: boolean, planes: number, nplanes: number, pixels: number, npixels: number): number
function colors_free(colormap: Colormap, pixels: number, npixels: number, planes: number): void
function colors_store(colormap: Colormap, colors: Color, ncolors: number): void
function devices_list(): Device[]
function drag_abort(context: DragContext, time_: number): void
function drag_drop(context: DragContext, time_: number): void
function drag_drop_succeeded(context: DragContext): boolean
function drag_find_window(context: DragContext, drag_window: Window, x_root: number, y_root: number): [ /* dest_window */ Window, /* protocol */ DragProtocol ]
function drag_find_window_for_screen(context: DragContext, drag_window: Window, screen: Screen, x_root: number, y_root: number): [ /* dest_window */ Window, /* protocol */ DragProtocol ]
function drag_get_protocol(xid: NativeWindow, protocol: DragProtocol): NativeWindow
function drag_get_protocol_for_display(display: Display, xid: NativeWindow, protocol: DragProtocol): NativeWindow
function drag_motion(context: DragContext, dest_window: Window, protocol: DragProtocol, x_root: number, y_root: number, suggested_action: DragAction, possible_actions: DragAction, time_: number): boolean
function drag_status(context: DragContext, action: DragAction, time_: number): void
function draw_arc(drawable: Drawable, gc: GC, filled: boolean, x: number, y: number, width: number, height: number, angle1: number, angle2: number): void
function draw_drawable(drawable: Drawable, gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
function draw_glyphs(drawable: Drawable, gc: GC, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
function draw_glyphs_transformed(drawable: Drawable, gc: GC, matrix: Pango.Matrix | null, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
function draw_gray_image(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, buf: number, rowstride: number): void
function draw_image(drawable: Drawable, gc: GC, image: Image, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
function draw_indexed_image(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, buf: number, rowstride: number, cmap: RgbCmap): void
function draw_layout(drawable: Drawable, gc: GC, x: number, y: number, layout: Pango.Layout): void
function draw_layout_line(drawable: Drawable, gc: GC, x: number, y: number, line: Pango.LayoutLine): void
function draw_layout_line_with_colors(drawable: Drawable, gc: GC, x: number, y: number, line: Pango.LayoutLine, foreground?: Color | null, background?: Color | null): void
function draw_layout_with_colors(drawable: Drawable, gc: GC, x: number, y: number, layout: Pango.Layout, foreground?: Color | null, background?: Color | null): void
function draw_line(drawable: Drawable, gc: GC, x1_: number, y1_: number, x2_: number, y2_: number): void
function draw_lines(drawable: Drawable, gc: GC, points: Point, n_points: number): void
function draw_pixbuf(drawable: Drawable, gc: GC | null, pixbuf: GdkPixbuf.Pixbuf, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number): void
function draw_point(drawable: Drawable, gc: GC, x: number, y: number): void
function draw_points(drawable: Drawable, gc: GC, points: Point, n_points: number): void
function draw_polygon(drawable: Drawable, gc: GC, filled: boolean, points: Point, n_points: number): void
function draw_rectangle(drawable: Drawable, gc: GC, filled: boolean, x: number, y: number, width: number, height: number): void
function draw_rgb_32_image(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, buf: number, rowstride: number): void
function draw_rgb_32_image_dithalign(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, buf: number, rowstride: number, xdith: number, ydith: number): void
function draw_rgb_image(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, rgb_buf: number, rowstride: number): void
function draw_rgb_image_dithalign(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, rgb_buf: number, rowstride: number, xdith: number, ydith: number): void
function draw_segments(drawable: Drawable, gc: GC, segs: Segment, n_segs: number): void
function draw_string(drawable: Drawable, font: Font, gc: GC, x: number, y: number, string: string): void
function draw_text(drawable: Drawable, font: Font, gc: GC, x: number, y: number, text: string, text_length: number): void
function draw_text_wc(drawable: Drawable, font: Font, gc: GC, x: number, y: number, text: WChar, text_length: number): void
function draw_trapezoids(drawable: Drawable, gc: GC, trapezoids: Trapezoid, n_trapezoids: number): void
function drop_finish(context: DragContext, success: boolean, time_: number): void
function drop_reply(context: DragContext, ok: boolean, time_: number): void
function error_trap_pop(): number
function error_trap_push(): void
function event_get(): Event
function event_get_graphics_expose(window: Window): Event
function event_handler_set(func: EventFunc): void
function event_peek(): Event
function event_request_motions(event: EventMotion): void
function event_send_client_message_for_display(display: Display, event: Event, winid: NativeWindow): boolean
function events_pending(): boolean
function exit(error_code: number): void
function flush(): void
function font_from_description(font_desc: Pango.FontDescription): Font
function font_from_description_for_display(display: Display, font_desc: Pango.FontDescription): Font
function font_load(font_name: string): Font
function font_load_for_display(display: Display, font_name: string): Font
function fontset_load(fontset_name: string): Font
function fontset_load_for_display(display: Display, fontset_name: string): Font
function free_compound_text(ctext: number): void
function free_text_list(list: string): void
function get_display(): string
function get_display_arg_name(): string
function get_program_class(): string
function get_show_events(): boolean
function get_use_xshm(): boolean
function init(argv: string[]): /* argv */ string[]
function init_check(argv: string[]): [ /* returnType */ boolean, /* argv */ string[] ]
function input_add_full(source: number, condition: InputCondition, function_: InputFunction): number
function input_remove(tag: number): void
function input_set_extension_events(window: Window, mask: number, mode: ExtensionMode): void
function keyboard_grab(window: Window, owner_events: boolean, time_: number): GrabStatus
function keyboard_grab_info_libgtk_only(display: Display, grab_window: Window, owner_events: boolean): boolean
function keyboard_ungrab(time_: number): void
function keyval_convert_case(symbol: number): [ /* lower */ number, /* upper */ number ]
function keyval_from_name(keyval_name: string): number
function keyval_is_lower(keyval: number): boolean
function keyval_is_upper(keyval: number): boolean
function keyval_name(keyval: number): string
function keyval_to_lower(keyval: number): number
function keyval_to_unicode(keyval: number): number
function keyval_to_upper(keyval: number): number
function list_visuals(): Visual[]
function mbstowcs(dest: WChar, src: string, dest_max: number): number
function notify_startup_complete(): void
function notify_startup_complete_with_id(startup_id: string): void
function offscreen_window_set_embedder(window: Window, embedder: Window): void
function pango_attr_emboss_color_new(color: Color): Pango.Attribute
function pango_attr_embossed_new(embossed: boolean): Pango.Attribute
function pango_attr_stipple_new(stipple: Bitmap): Pango.Attribute
function pango_context_set_colormap(context: Pango.Context, colormap: Colormap): void
function parse_args(argv: string[]): /* argv */ string[]
function pixbuf_render_pixmap_and_mask(pixbuf: GdkPixbuf.Pixbuf, pixmap_return: Pixmap, mask_return: Bitmap, alpha_threshold: number): void
function pixbuf_render_pixmap_and_mask_for_colormap(pixbuf: GdkPixbuf.Pixbuf, colormap: Colormap, pixmap_return: Pixmap, mask_return: Bitmap, alpha_threshold: number): void
function pixbuf_render_threshold_alpha(pixbuf: GdkPixbuf.Pixbuf, bitmap: Bitmap, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, alpha_threshold: number): void
function pixbuf_render_to_drawable(pixbuf: GdkPixbuf.Pixbuf, drawable: Drawable, gc: GC, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number): void
function pixbuf_render_to_drawable_alpha(pixbuf: GdkPixbuf.Pixbuf, drawable: Drawable, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, alpha_mode: GdkPixbuf.PixbufAlphaMode, alpha_threshold: number, dither: RgbDither, x_dither: number, y_dither: number): void
function pointer_grab(window: Window, owner_events: boolean, event_mask: EventMask, confine_to: Window, cursor: Cursor, time_: number): GrabStatus
function pointer_grab_info_libgtk_only(display: Display, grab_window: Window, owner_events: boolean): boolean
function pointer_is_grabbed(): boolean
function pointer_ungrab(time_: number): void
function pre_parse_libgtk_only(): void
function property_change(window: Window, property: Atom, type: Atom, format: number, mode: PropMode, data: number, nelements: number): void
function property_delete(window: Window, property: Atom): void
function property_get(window: Window, property: Atom, type: Atom, offset: number, length: number, pdelete: number, actual_property_type: Atom, actual_format: number, actual_length: number, data: number): boolean
function query_depths(): [ /* depths */ number[], /* count */ number ]
function query_visual_types(visual_types: VisualType, count: number): void
function rgb_colormap_ditherable(cmap: Colormap): boolean
function rgb_ditherable(): boolean
function rgb_find_color(colormap: Colormap, color: Color): void
function rgb_gc_set_background(gc: GC, rgb: number): void
function rgb_gc_set_foreground(gc: GC, rgb: number): void
function rgb_get_colormap(): Colormap
function rgb_get_visual(): Visual
function rgb_init(): void
function rgb_set_install(install: boolean): void
function rgb_set_min_colors(min_colors: number): void
function rgb_set_verbose(verbose: boolean): void
function rgb_xpixel_from_rgb(rgb: number): number
function selection_convert(requestor: Window, selection: Atom, target: Atom, time_: number): void
function selection_owner_set(owner: Window, selection: Atom, time_: number, send_event: boolean): boolean
function selection_owner_set_for_display(display: Display, owner: Window, selection: Atom, time_: number, send_event: boolean): boolean
function selection_property_get(requestor: Window, data: number, prop_type: Atom, prop_format: number): number
function selection_send_notify(requestor: NativeWindow, selection: Atom, target: Atom, property: Atom, time_: number): void
function selection_send_notify_for_display(display: Display, requestor: NativeWindow, selection: Atom, target: Atom, property: Atom, time_: number): void
function set_double_click_time(msec: number): void
function set_locale(): string
function set_program_class(program_class: string): void
function set_show_events(show_events: boolean): void
function set_sm_client_id(sm_client_id: string): void
function set_use_xshm(use_xshm: boolean): void
function setting_get(name: string, value: any): boolean
function spawn_command_line_on_screen(screen: Screen, command_line: string): boolean
function string_extents(font: Font, string: string, lbearing: number, rbearing: number, width: number, ascent: number, descent: number): void
function string_height(font: Font, string: string): number
function string_measure(font: Font, string: string): number
function string_to_compound_text(str: string, encoding: Atom, format: number, ctext: number, length: number): number
function string_to_compound_text_for_display(display: Display, str: string, encoding: Atom, format: number, ctext: number, length: number): number
function string_width(font: Font, string: string): number
function synthesize_window_state(window: Window, unset_flags: WindowState, set_flags: WindowState): void
function test_render_sync(window: Window): void
function test_simulate_button(window: Window, x: number, y: number, button: number, modifiers: ModifierType, button_pressrelease: EventType): boolean
function test_simulate_key(window: Window, x: number, y: number, keyval: number, modifiers: ModifierType, key_pressrelease: EventType): boolean
function text_extents(font: Font, text: string, text_length: number, lbearing: number, rbearing: number, width: number, ascent: number, descent: number): void
function text_extents_wc(font: Font, text: WChar, text_length: number, lbearing: number, rbearing: number, width: number, ascent: number, descent: number): void
function text_height(font: Font, text: string, text_length: number): number
function text_measure(font: Font, text: string, text_length: number): number
function text_property_to_text_list(encoding: Atom, format: number, text: number, length: number, list: string): number
function text_property_to_text_list_for_display(display: Display, encoding: Atom, format: number, text: number, length: number, list: string): number
function text_property_to_utf8_list(encoding: Atom, format: number, text: number, length: number, list?: string | null): number
function text_property_to_utf8_list_for_display(display: Display, encoding: Atom, format: number, text: number, length: number, list: string): number
function text_width(font: Font, text: string, text_length: number): number
function text_width_wc(font: Font, text: WChar, text_length: number): number
function threads_add_idle_full(priority: number, function_: GLib.SourceFunc): number
function threads_add_timeout_full(priority: number, interval: number, function_: GLib.SourceFunc): number
function threads_add_timeout_seconds_full(priority: number, interval: number, function_: GLib.SourceFunc): number
function threads_enter(): void
function threads_init(): void
function threads_leave(): void
function unicode_to_keyval(wc: number): number
function utf8_to_compound_text(str: string, encoding: Atom, format: number, ctext: number, length: number): boolean
function utf8_to_compound_text_for_display(display: Display, str: string, encoding: Atom, format: number, ctext: number, length: number): boolean
function utf8_to_string_target(str: string): string
function wcstombs(src: WChar): string
function window_at_pointer(): [ /* returnType */ Window, /* win_x */ number | null, /* win_y */ number | null ]
function window_constrain_size(geometry: Geometry, flags: number, width: number, height: number): [ /* new_width */ number, /* new_height */ number ]
function window_process_all_updates(): void
function window_set_debug_updates(setting: boolean): void
interface DestroyNotify {
    (data?: object | null): void
}
interface EventFunc {
    (event: Event, data?: object | null): void
}
interface FilterFunc {
    (xevent: XEvent, event: Event, data?: object | null): FilterReturn
}
interface InputFunction {
    (data: object | null, source: number, condition: InputCondition): void
}
interface SpanFunc {
    (span: Span, data?: object | null): void
}
interface AppLaunchContext_ConstructProps extends Gio.AppLaunchContext_ConstructProps {
}
class AppLaunchContext {
    /* Fields of Gio-2.0.Gio.AppLaunchContext */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-2.0.Gdk.AppLaunchContext */
    set_desktop(desktop: number): void
    set_display(display: Display): void
    set_icon(icon?: Gio.Icon | null): void
    set_icon_name(icon_name?: string | null): void
    set_screen(screen: Screen): void
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
    /* Static methods and pseudo-constructors */
    static new(): AppLaunchContext
    /* Function overloads */
    static new(): AppLaunchContext
    static $gtype: GObject.Type
}
interface Colormap_ConstructProps extends GObject.Object_ConstructProps {
}
class Colormap {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-2.0.Gdk.Colormap */
    alloc_color(color: Color, writeable: boolean, best_match: boolean): boolean
    alloc_colors(colors: Color, n_colors: number, writeable: boolean, best_match: boolean, success: boolean): number
    change(ncolors: number): void
    free_colors(colors: Color, n_colors: number): void
    query_color(pixel: number, result: Color): void
    unref(): void
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
    connect(sigName: "notify", callback: (($obj: Colormap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Colormap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Colormap_ConstructProps)
    _init (config?: Colormap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(visual: Visual, allocate: boolean): Colormap
    static get_system_size(): number
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends GObject.Object_ConstructProps {
}
class Device {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-2.0.Gdk.Device */
    get_axis(axes: number, use: AxisUse, value: number): boolean
    get_axis_use(index: number): AxisUse
    get_has_cursor(): boolean
    get_history(window: Window, start: number, stop: number): [ /* returnType */ boolean, /* events */ TimeCoord[] ]
    get_key(index: number, keyval: number, modifiers: ModifierType): void
    get_mode(): InputMode
    get_n_axes(): number
    get_n_keys(): number
    get_name(): string
    get_source(): InputSource
    get_state(window: Window, axes: number, mask: ModifierType): void
    set_axis_use(index_: number, use: AxisUse): void
    set_key(index_: number, keyval: number, modifiers: ModifierType): void
    set_mode(mode: InputMode): boolean
    set_source(source: InputSource): void
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
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static free_history(events: TimeCoord, n_events: number): /* events */ TimeCoord
    static $gtype: GObject.Type
}
interface Display_ConstructProps extends GObject.Object_ConstructProps {
}
class Display {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-2.0.Gdk.Display */
    beep(): void
    close(): void
    flush(): void
    get_default_cursor_size(): number
    get_event(): Event
    get_maximal_cursor_size(): [ /* width */ number, /* height */ number ]
    get_n_screens(): number
    get_name(): string
    get_pointer(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    get_window_at_pointer(): [ /* returnType */ Window, /* win_x */ number | null, /* win_y */ number | null ]
    is_closed(): boolean
    keyboard_ungrab(time_: number): void
    peek_event(): Event
    pointer_is_grabbed(): boolean
    pointer_ungrab(time_: number): void
    put_event(event: Event): void
    request_selection_notification(selection: Atom): boolean
    set_double_click_distance(distance: number): void
    set_double_click_time(msec: number): void
    store_clipboard(clipboard_window: Window, time_: number, targets: Atom, n_targets: number): void
    supports_clipboard_persistence(): boolean
    supports_composite(): boolean
    supports_cursor_alpha(): boolean
    supports_cursor_color(): boolean
    supports_input_shapes(): boolean
    supports_selection_notification(): boolean
    supports_shapes(): boolean
    sync(): void
    warp_pointer(screen: Screen, x: number, y: number): void
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
    /* Virtual methods of Gdk-2.0.Gdk.Display */
    vfunc_closed(is_error: boolean): void
    vfunc_get_display_name(): string
    vfunc_get_n_screens(): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-2.0.Gdk.Display */
    connect(sigName: "closed", callback: (($obj: Display, is_error: boolean) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Display, is_error: boolean) => void)): number
    emit(sigName: "closed", is_error: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Display_ConstructProps)
    _init (config?: Display_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Display
    static $gtype: GObject.Type
}
interface DisplayManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-2.0.Gdk.DisplayManager */
    default_display?: Display
}
class DisplayManager {
    /* Properties of Gdk-2.0.Gdk.DisplayManager */
    default_display: Display
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-2.0.Gdk.DisplayManager */
    get_default_display(): Display
    list_displays(): Display[]
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
    /* Virtual methods of Gdk-2.0.Gdk.DisplayManager */
    vfunc_display_opened(display: Display): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-2.0.Gdk.DisplayManager */
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
interface DragContext_ConstructProps extends GObject.Object_ConstructProps {
}
class DragContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-2.0.Gdk.DragContext */
    get_actions(): DragAction
    get_dest_window(): Window
    get_protocol(): DragProtocol
    get_selected_action(): DragAction
    get_source_window(): Window
    get_suggested_action(): DragAction
    list_targets(): Atom[]
    ref(): void
    unref(): void
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
    connect(sigName: "notify", callback: (($obj: DragContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DragContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DragContext_ConstructProps)
    _init (config?: DragContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DragContext
    static $gtype: GObject.Type
}
interface Drawable_ConstructProps extends GObject.Object_ConstructProps {
}
class Drawable {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-2.0.Gdk.Drawable */
    get_data(key: string): object | null
    get_depth(): number
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    set_colormap(colormap: Colormap): void
    set_data(key: string, data?: object | null, destroy_func?: GLib.DestroyNotify | null): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gdk-2.0.Gdk.Drawable */
    vfunc_create_cairo_surface(width: number, height: number): cairo.Surface
    vfunc_draw_arc(gc: GC, filled: boolean, x: number, y: number, width: number, height: number, angle1: number, angle2: number): void
    vfunc_draw_drawable(gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
    vfunc_draw_drawable_with_src(gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number, original_src: Drawable): void
    vfunc_draw_glyphs(gc: GC, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
    vfunc_draw_glyphs_transformed(gc: GC, matrix: Pango.Matrix, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
    vfunc_draw_image(gc: GC, image: Image, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
    vfunc_draw_lines(gc: GC, points: Point, npoints: number): void
    vfunc_draw_pixbuf(gc: GC, pixbuf: GdkPixbuf.Pixbuf, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number): void
    vfunc_draw_points(gc: GC, points: Point, npoints: number): void
    vfunc_draw_polygon(gc: GC, filled: boolean, points: Point, npoints: number): void
    vfunc_draw_rectangle(gc: GC, filled: boolean, x: number, y: number, width: number, height: number): void
    vfunc_draw_segments(gc: GC, segs: Segment, nsegs: number): void
    vfunc_draw_text(font: Font, gc: GC, x: number, y: number, text: string, text_length: number): void
    vfunc_draw_text_wc(font: Font, gc: GC, x: number, y: number, text: WChar, text_length: number): void
    vfunc_draw_trapezoids(gc: GC, trapezoids: Trapezoid, n_trapezoids: number): void
    vfunc_get_depth(): number
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_ref_cairo_surface(): cairo.Surface
    vfunc_set_cairo_clip(cr: cairo.Context): void
    vfunc_set_colormap(cmap: Colormap): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Drawable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Drawable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Drawable_ConstructProps)
    _init (config?: Drawable_ConstructProps): void
    static $gtype: GObject.Type
}
interface GC_ConstructProps extends GObject.Object_ConstructProps {
}
class GC {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-2.0.Gdk.GC */
    copy(src_gc: GC): void
    get_values(values: GCValues): void
    offset(x_offset: number, y_offset: number): void
    set_background(color: Color): void
    set_clip_mask(mask: Bitmap): void
    set_clip_origin(x: number, y: number): void
    set_clip_rectangle(rectangle: Rectangle): void
    set_clip_region(region: Region): void
    set_colormap(colormap: Colormap): void
    set_dashes(dash_offset: number, dash_list: number, n: number): void
    set_exposures(exposures: boolean): void
    set_fill(fill: Fill): void
    set_font(font: Font): void
    set_foreground(color: Color): void
    set_function(function_: Function): void
    set_line_attributes(line_width: number, line_style: LineStyle, cap_style: CapStyle, join_style: JoinStyle): void
    set_rgb_bg_color(color: Color): void
    set_rgb_fg_color(color: Color): void
    set_stipple(stipple: Pixmap): void
    set_subwindow(mode: SubwindowMode): void
    set_tile(tile: Pixmap): void
    set_ts_origin(x: number, y: number): void
    set_values(values: GCValues, values_mask: GCValuesMask): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gdk-2.0.Gdk.GC */
    vfunc_get_values(values: GCValues): void
    vfunc_set_dashes(dash_offset: number, dash_list: number, n: number): void
    vfunc_set_values(values: GCValues, mask: GCValuesMask): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GC, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GC, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GC_ConstructProps)
    _init (config?: GC_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(drawable: Drawable): GC
    static new_with_values(drawable: Drawable, values: GCValues, values_mask: GCValuesMask): GC
    static $gtype: GObject.Type
}
interface Image_ConstructProps extends GObject.Object_ConstructProps {
}
class Image {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-2.0.Gdk.Image */
    get_bits_per_pixel(): number
    get_byte_order(): ByteOrder
    get_bytes_per_line(): number
    get_bytes_per_pixel(): number
    get_depth(): number
    get_height(): number
    get_image_type(): ImageType
    get_pixel(x: number, y: number): number
    get_pixels(): object | null
    get_width(): number
    put_pixel(x: number, y: number, pixel: number): void
    set_colormap(colormap: Colormap): void
    unref(): void
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
    connect(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Image_ConstructProps)
    _init (config?: Image_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: ImageType, visual: Visual, width: number, height: number): Image
    static $gtype: GObject.Type
}
interface Keymap_ConstructProps extends GObject.Object_ConstructProps {
}
class Keymap {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-2.0.Gdk.Keymap */
    add_virtual_modifiers(state: ModifierType): void
    get_caps_lock_state(): boolean
    get_direction(): Pango.Direction
    get_entries_for_keycode(hardware_keycode: number, n_entries: number): [ /* returnType */ boolean, /* keys */ KeymapKey, /* keyvals */ number ]
    get_entries_for_keyval(keyval: number): [ /* returnType */ boolean, /* keys */ KeymapKey, /* n_keys */ number ]
    have_bidi_layouts(): boolean
    lookup_key(key: KeymapKey): number
    map_virtual_modifiers(state: ModifierType): boolean
    translate_keyboard_state(hardware_keycode: number, state: ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number | null, /* effective_group */ number | null, /* level */ number | null, /* consumed_modifiers */ ModifierType | null ]
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
    /* Virtual methods of Gdk-2.0.Gdk.Keymap */
    vfunc_direction_changed(): void
    vfunc_keys_changed(): void
    vfunc_state_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-2.0.Gdk.Keymap */
    connect(sigName: "direction-changed", callback: (($obj: Keymap) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Keymap) => void)): number
    emit(sigName: "direction-changed"): void
    connect(sigName: "keys-changed", callback: (($obj: Keymap) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: Keymap) => void)): number
    emit(sigName: "keys-changed"): void
    connect(sigName: "state-changed", callback: (($obj: Keymap) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Keymap) => void)): number
    emit(sigName: "state-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Keymap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Keymap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Keymap_ConstructProps)
    _init (config?: Keymap_ConstructProps): void
    static $gtype: GObject.Type
}
interface PangoRenderer_ConstructProps extends Pango.Renderer_ConstructProps {
    /* Constructor properties of Gdk-2.0.Gdk.PangoRenderer */
    screen?: Screen
}
class PangoRenderer {
    /* Fields of Pango-1.0.Pango.Renderer */
    readonly matrix: Pango.Matrix
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-2.0.Gdk.PangoRenderer */
    set_drawable(drawable?: Drawable | null): void
    set_gc(gc?: GC | null): void
    set_override_color(part: Pango.RenderPart, color?: Color | null): void
    set_stipple(part: Pango.RenderPart, stipple: Bitmap): void
    /* Methods of Pango-1.0.Pango.Renderer */
    activate(): void
    deactivate(): void
    draw_error_underline(x: number, y: number, width: number, height: number): void
    draw_glyph(font: Pango.Font, glyph: Pango.Glyph, x: number, y: number): void
    draw_glyph_item(text: string | null, glyph_item: Pango.GlyphItem, x: number, y: number): void
    draw_glyphs(font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
    draw_layout(layout: Pango.Layout, x: number, y: number): void
    draw_layout_line(line: Pango.LayoutLine, x: number, y: number): void
    draw_rectangle(part: Pango.RenderPart, x: number, y: number, width: number, height: number): void
    draw_trapezoid(part: Pango.RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    get_alpha(part: Pango.RenderPart): number
    get_color(part: Pango.RenderPart): Pango.Color | null
    get_layout(): Pango.Layout | null
    get_layout_line(): Pango.LayoutLine | null
    get_matrix(): Pango.Matrix | null
    part_changed(part: Pango.RenderPart): void
    set_alpha(part: Pango.RenderPart, alpha: number): void
    set_color(part: Pango.RenderPart, color?: Pango.Color | null): void
    set_matrix(matrix?: Pango.Matrix | null): void
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
    /* Virtual methods of Pango-1.0.Pango.Renderer */
    vfunc_begin(): void
    vfunc_draw_error_underline(x: number, y: number, width: number, height: number): void
    vfunc_draw_glyph(font: Pango.Font, glyph: Pango.Glyph, x: number, y: number): void
    vfunc_draw_glyph_item(text: string | null, glyph_item: Pango.GlyphItem, x: number, y: number): void
    vfunc_draw_glyphs(font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
    vfunc_draw_rectangle(part: Pango.RenderPart, x: number, y: number, width: number, height: number): void
    vfunc_draw_shape(attr: Pango.AttrShape, x: number, y: number): void
    vfunc_draw_trapezoid(part: Pango.RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    vfunc_end(): void
    vfunc_part_changed(part: Pango.RenderPart): void
    vfunc_prepare_run(run: Pango.LayoutRun): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PangoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PangoRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PangoRenderer_ConstructProps)
    _init (config?: PangoRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(screen: Screen): PangoRenderer
    static $gtype: GObject.Type
}
interface Pixmap_ConstructProps extends Drawable_ConstructProps {
}
class Pixmap {
    /* Fields of Gdk-2.0.Gdk.Drawable */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-2.0.Gdk.Pixmap */
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    /* Methods of Gdk-2.0.Gdk.Drawable */
    get_data(key: string): object | null
    get_depth(): number
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    set_colormap(colormap: Colormap): void
    set_data(key: string, data?: object | null, destroy_func?: GLib.DestroyNotify | null): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gdk-2.0.Gdk.Drawable */
    vfunc_create_cairo_surface(width: number, height: number): cairo.Surface
    vfunc_draw_arc(gc: GC, filled: boolean, x: number, y: number, width: number, height: number, angle1: number, angle2: number): void
    vfunc_draw_drawable(gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
    vfunc_draw_drawable_with_src(gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number, original_src: Drawable): void
    vfunc_draw_glyphs(gc: GC, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
    vfunc_draw_glyphs_transformed(gc: GC, matrix: Pango.Matrix, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
    vfunc_draw_image(gc: GC, image: Image, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
    vfunc_draw_lines(gc: GC, points: Point, npoints: number): void
    vfunc_draw_pixbuf(gc: GC, pixbuf: GdkPixbuf.Pixbuf, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number): void
    vfunc_draw_points(gc: GC, points: Point, npoints: number): void
    vfunc_draw_polygon(gc: GC, filled: boolean, points: Point, npoints: number): void
    vfunc_draw_rectangle(gc: GC, filled: boolean, x: number, y: number, width: number, height: number): void
    vfunc_draw_segments(gc: GC, segs: Segment, nsegs: number): void
    vfunc_draw_text(font: Font, gc: GC, x: number, y: number, text: string, text_length: number): void
    vfunc_draw_text_wc(font: Font, gc: GC, x: number, y: number, text: WChar, text_length: number): void
    vfunc_draw_trapezoids(gc: GC, trapezoids: Trapezoid, n_trapezoids: number): void
    vfunc_get_depth(): number
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_ref_cairo_surface(): cairo.Surface
    vfunc_set_cairo_clip(cr: cairo.Context): void
    vfunc_set_colormap(cmap: Colormap): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pixmap_ConstructProps)
    _init (config?: Pixmap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static foreign_new(anid: NativeWindow): Pixmap
    static foreign_new_for_display(display: Display, anid: NativeWindow): Pixmap
    static foreign_new_for_screen(screen: Screen, anid: NativeWindow, width: number, height: number, depth: number): Pixmap
    static new(drawable: Drawable, width: number, height: number, depth: number): Pixmap
    static colormap_create_from_xpm(drawable: Drawable, colormap: Colormap, mask: Bitmap, transparent_color: Color, filename: string): Pixmap
    static colormap_create_from_xpm_d(drawable: Drawable, colormap: Colormap, mask: Bitmap, transparent_color: Color, data: string): Pixmap
    static create_from_xpm(drawable: Drawable, transparent_color: Color, filename: string): [ /* returnType */ Pixmap, /* mask */ Bitmap ]
    static create_from_xpm_d(drawable: Drawable, transparent_color: Color, data: string): [ /* returnType */ Pixmap, /* mask */ Bitmap ]
    static $gtype: GObject.Type
}
interface Screen_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-2.0.Gdk.Screen */
    font_options?: object
    resolution?: number
}
class Screen {
    /* Properties of Gdk-2.0.Gdk.Screen */
    font_options: object
    resolution: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-2.0.Gdk.Screen */
    broadcast_client_message(event: Event): void
    get_default_colormap(): Colormap
    get_font_options(): cairo.FontOptions
    get_height(): number
    get_height_mm(): number
    get_monitor_at_point(x: number, y: number): number
    get_monitor_at_window(window: Window): number
    get_monitor_geometry(monitor_num: number, dest: Rectangle): void
    get_monitor_height_mm(monitor_num: number): number
    get_monitor_plug_name(monitor_num: number): string
    get_monitor_width_mm(monitor_num: number): number
    get_n_monitors(): number
    get_number(): number
    get_primary_monitor(): number
    get_resolution(): number
    get_rgb_colormap(): Colormap
    get_rgb_visual(): Visual
    get_rgba_colormap(): Colormap
    get_rgba_visual(): Visual
    get_root_window(): Window
    get_setting(name: string, value: any): boolean
    get_system_colormap(): Colormap
    get_system_visual(): Visual
    get_toplevel_windows(): Window[]
    get_width(): number
    get_width_mm(): number
    get_window_stack(): Window[]
    is_composited(): boolean
    list_visuals(): Visual[]
    make_display_name(): string
    set_default_colormap(colormap: Colormap): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_resolution(dpi: number): void
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
    /* Virtual methods of Gdk-2.0.Gdk.Screen */
    vfunc_composited_changed(): void
    vfunc_monitors_changed(): void
    vfunc_size_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-2.0.Gdk.Screen */
    connect(sigName: "composited-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "composited-changed"): void
    connect(sigName: "monitors-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "monitors-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "monitors-changed"): void
    connect(sigName: "size-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "size-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "size-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::font-options", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-options", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resolution", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Screen_ConstructProps)
    _init (config?: Screen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Screen
    static height(): number
    static height_mm(): number
    static width(): number
    static width_mm(): number
    static $gtype: GObject.Type
}
interface Visual_ConstructProps extends GObject.Object_ConstructProps {
}
class Visual {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-2.0.Gdk.Visual */
    get_bits_per_rgb(): number
    get_blue_pixel_details(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    get_byte_order(): ByteOrder
    get_colormap_size(): number
    get_depth(): number
    get_green_pixel_details(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    get_red_pixel_details(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    get_screen(): Screen
    get_visual_type(): VisualType
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
    connect(sigName: "notify", callback: (($obj: Visual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Visual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Visual_ConstructProps)
    _init (config?: Visual_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_best(): Visual
    static get_best_depth(): number
    static get_best_type(): VisualType
    static get_best_with_both(depth: number, visual_type: VisualType): Visual
    static get_best_with_depth(depth: number): Visual
    static get_best_with_type(visual_type: VisualType): Visual
    static get_system(): Visual
    static $gtype: GObject.Type
}
interface Window_ConstructProps extends Drawable_ConstructProps {
    /* Constructor properties of Gdk-2.0.Gdk.Window */
    cursor?: Cursor
}
class Window {
    /* Properties of Gdk-2.0.Gdk.Window */
    cursor: Cursor
    /* Fields of Gdk-2.0.Gdk.Drawable */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-2.0.Gdk.Window */
    beep(): void
    begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void
    begin_paint_rect(rectangle: Rectangle): void
    begin_paint_region(region: Region): void
    begin_resize_drag(edge: WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void
    clear(): void
    clear_area(x: number, y: number, width: number, height: number): void
    clear_area_e(x: number, y: number, width: number, height: number): void
    configure_finished(): void
    coords_from_parent(parent_x: number, parent_y: number): [ /* x */ number | null, /* y */ number | null ]
    coords_to_parent(x: number, y: number): [ /* parent_x */ number | null, /* parent_y */ number | null ]
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    deiconify(): void
    destroy(): void
    destroy_notify(): void
    enable_synchronized_configure(): void
    end_paint(): void
    ensure_native(): boolean
    flush(): void
    focus(timestamp: number): void
    freeze_toplevel_updates_libgtk_only(): void
    freeze_updates(): void
    fullscreen(): void
    geometry_changed(): void
    get_accept_focus(): boolean
    get_background_pattern(): cairo.Pattern
    get_children(): Window[]
    get_composited(): boolean
    get_cursor(): Cursor
    get_decorations(decorations: WMDecoration): boolean
    get_deskrelative_origin(x: number, y: number): boolean
    get_events(): EventMask
    get_focus_on_map(): boolean
    get_frame_extents(rect: Rectangle): void
    get_geometry(x: number, y: number, width: number, height: number, depth: number): void
    get_height(): number
    get_internal_paint_info(): [ /* real_drawable */ Drawable, /* x_offset */ number, /* y_offset */ number ]
    get_modal_hint(): boolean
    get_origin(x: number, y: number): number
    get_pointer(): [ /* returnType */ Window, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_root_coords(x: number, y: number): [ /* root_x */ number, /* root_y */ number ]
    get_root_origin(x: number, y: number): void
    get_state(): WindowState
    get_type_hint(): WindowTypeHint
    get_user_data(): /* data */ object | null
    get_width(): number
    get_window_type(): WindowType
    has_native(): boolean
    hide(): void
    iconify(): void
    input_shape_combine_mask(mask: Bitmap | null, x: number, y: number): void
    input_shape_combine_region(shape_region: Region, offset_x: number, offset_y: number): void
    invalidate_maybe_recurse(region: Region, child_func?: object | null, user_data?: object | null): void
    invalidate_rect(rect: Rectangle | null, invalidate_children: boolean): void
    invalidate_region(region: Region, invalidate_children: boolean): void
    is_destroyed(): boolean
    is_input_only(): boolean
    is_shaped(): boolean
    is_viewable(): boolean
    is_visible(): boolean
    lower(): void
    maximize(): void
    merge_child_input_shapes(): void
    merge_child_shapes(): void
    move(x: number, y: number): void
    move_region(region: Region, dx: number, dy: number): void
    move_resize(x: number, y: number, width: number, height: number): void
    new(attributes: WindowAttr, attributes_mask: number): Window
    peek_children(): Window[]
    process_updates(update_children: boolean): void
    raise(): void
    redirect_to_drawable(drawable: Drawable, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number): void
    register_dnd(): void
    remove_redirection(): void
    reparent(new_parent: Window, x: number, y: number): void
    resize(width: number, height: number): void
    restack(sibling: Window | null, above: boolean): void
    scroll(dx: number, dy: number): void
    set_accept_focus(accept_focus: boolean): void
    set_back_pixmap(pixmap: Pixmap | null, parent_relative: boolean): void
    set_background(color: Color): void
    set_child_input_shapes(): void
    set_child_shapes(): void
    set_composited(composited: boolean): void
    set_cursor(cursor?: Cursor | null): void
    set_decorations(decorations: WMDecoration): void
    set_events(event_mask: EventMask): void
    set_focus_on_map(focus_on_map: boolean): void
    set_functions(functions: WMFunction): void
    set_geometry_hints(geometry: Geometry, geom_mask: WindowHints): void
    set_group(leader: Window): void
    set_hints(x: number, y: number, min_width: number, min_height: number, max_width: number, max_height: number, flags: number): void
    set_icon(icon_window: Window, pixmap: Pixmap, mask: Bitmap): void
    set_icon_list(pixbufs: GdkPixbuf.Pixbuf[]): void
    set_icon_name(name: string): void
    set_keep_above(setting: boolean): void
    set_keep_below(setting: boolean): void
    set_modal_hint(modal: boolean): void
    set_opacity(opacity: number): void
    set_override_redirect(override_redirect: boolean): void
    set_role(role: string): void
    set_skip_pager_hint(skips_pager: boolean): void
    set_skip_taskbar_hint(skips_taskbar: boolean): void
    set_startup_id(startup_id: string): void
    set_static_gravities(use_static: boolean): boolean
    set_title(title: string): void
    set_transient_for(parent: Window): void
    set_type_hint(hint: WindowTypeHint): void
    set_urgency_hint(urgent: boolean): void
    set_user_data(user_data?: object | null): void
    shape_combine_mask(mask: Bitmap, x: number, y: number): void
    shape_combine_region(shape_region: Region, offset_x: number, offset_y: number): void
    show(): void
    show_unraised(): void
    stick(): void
    thaw_toplevel_updates_libgtk_only(): void
    thaw_updates(): void
    unfullscreen(): void
    unmaximize(): void
    unstick(): void
    withdraw(): void
    /* Methods of Gdk-2.0.Gdk.Drawable */
    get_data(key: string): object | null
    get_depth(): number
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    set_colormap(colormap: Colormap): void
    set_data(key: string, data?: object | null, destroy_func?: GLib.DestroyNotify | null): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gdk-2.0.Gdk.Drawable */
    vfunc_create_cairo_surface(width: number, height: number): cairo.Surface
    vfunc_draw_arc(gc: GC, filled: boolean, x: number, y: number, width: number, height: number, angle1: number, angle2: number): void
    vfunc_draw_drawable(gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
    vfunc_draw_drawable_with_src(gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number, original_src: Drawable): void
    vfunc_draw_glyphs(gc: GC, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
    vfunc_draw_glyphs_transformed(gc: GC, matrix: Pango.Matrix, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
    vfunc_draw_image(gc: GC, image: Image, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
    vfunc_draw_lines(gc: GC, points: Point, npoints: number): void
    vfunc_draw_pixbuf(gc: GC, pixbuf: GdkPixbuf.Pixbuf, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number): void
    vfunc_draw_points(gc: GC, points: Point, npoints: number): void
    vfunc_draw_polygon(gc: GC, filled: boolean, points: Point, npoints: number): void
    vfunc_draw_rectangle(gc: GC, filled: boolean, x: number, y: number, width: number, height: number): void
    vfunc_draw_segments(gc: GC, segs: Segment, nsegs: number): void
    vfunc_draw_text(font: Font, gc: GC, x: number, y: number, text: string, text_length: number): void
    vfunc_draw_text_wc(font: Font, gc: GC, x: number, y: number, text: WChar, text_length: number): void
    vfunc_draw_trapezoids(gc: GC, trapezoids: Trapezoid, n_trapezoids: number): void
    vfunc_get_depth(): number
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_ref_cairo_surface(): cairo.Surface
    vfunc_set_cairo_clip(cr: cairo.Context): void
    vfunc_set_colormap(cmap: Colormap): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-2.0.Gdk.Window */
    connect(sigName: "from-embedder", callback: (($obj: Window, embedder_x: number, embedder_y: number) => void)): number
    connect_after(sigName: "from-embedder", callback: (($obj: Window, embedder_x: number, embedder_y: number) => void)): number
    emit(sigName: "from-embedder", embedder_x: number, embedder_y: number): void
    connect(sigName: "pick-embedded-child", callback: (($obj: Window, x: number, y: number) => Window)): number
    connect_after(sigName: "pick-embedded-child", callback: (($obj: Window, x: number, y: number) => Window)): number
    emit(sigName: "pick-embedded-child", x: number, y: number): void
    connect(sigName: "to-embedder", callback: (($obj: Window, offscreen_x: number, offscreen_y: number) => void)): number
    connect_after(sigName: "to-embedder", callback: (($obj: Window, offscreen_x: number, offscreen_y: number) => void)): number
    emit(sigName: "to-embedder", offscreen_x: number, offscreen_y: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AppLaunchContextClass {
    /* Fields of Gdk-2.0.Gdk.AppLaunchContextClass */
    readonly parent_class: Gio.AppLaunchContextClass
    static name: string
}
class AppLaunchContextPrivate {
    static name: string
}
class Atom {
    /* Methods of Gdk-2.0.Gdk.Atom */
    name(): string
    static name: string
}
class Bitmap {
    /* Fields of Gdk-2.0.Gdk.Bitmap */
    readonly parent_instance: GObject.Object
    static name: string
}
class Color {
    /* Fields of Gdk-2.0.Gdk.Color */
    readonly pixel: number
    readonly red: number
    readonly green: number
    readonly blue: number
    /* Methods of Gdk-2.0.Gdk.Color */
    copy(): Color
    equal(colorb: Color): boolean
    free(): void
    hash(): number
    to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(colormap: Colormap, color: Color): number
    static black(colormap: Colormap, color: Color): number
    static change(colormap: Colormap, color: Color): number
    static parse(spec: string): [ /* returnType */ boolean, /* color */ Color ]
    static white(colormap: Colormap, color: Color): number
}
abstract class ColormapClass {
    /* Fields of Gdk-2.0.Gdk.ColormapClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class Cursor {
    /* Fields of Gdk-2.0.Gdk.Cursor */
    readonly type: CursorType
    /* Methods of Gdk-2.0.Gdk.Cursor */
    get_cursor_type(): CursorType
    ref(): Cursor
    unref(): void
    static name: string
    static new(cursor_type: CursorType): Cursor
    constructor(cursor_type: CursorType)
    /* Static methods and pseudo-constructors */
    static new(cursor_type: CursorType): Cursor
    static new_for_display(display: Display, cursor_type: CursorType): Cursor
    static new_from_name(display: Display, name: string): Cursor
    static new_from_pixbuf(display: Display, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number): Cursor
    static new_from_pixmap(source: Pixmap, mask: Pixmap, fg: Color, bg: Color, x: number, y: number): Cursor
}
class DeviceAxis {
    /* Fields of Gdk-2.0.Gdk.DeviceAxis */
    readonly use: AxisUse
    readonly min: number
    readonly max: number
    static name: string
}
abstract class DeviceClass {
    static name: string
}
class DeviceKey {
    /* Fields of Gdk-2.0.Gdk.DeviceKey */
    readonly keyval: number
    readonly modifiers: ModifierType
    static name: string
}
abstract class DisplayClass {
    /* Fields of Gdk-2.0.Gdk.DisplayClass */
    readonly parent_class: GObject.ObjectClass
    readonly get_display_name: (display: Display) => string
    readonly get_n_screens: (display: Display) => number
    readonly closed: (display: Display, is_error: boolean) => void
    static name: string
}
abstract class DisplayManagerClass {
    /* Fields of Gdk-2.0.Gdk.DisplayManagerClass */
    readonly parent_class: GObject.ObjectClass
    readonly display_opened: (display_manager: DisplayManager, display: Display) => void
    static name: string
}
class DisplayPointerHooks {
    /* Fields of Gdk-2.0.Gdk.DisplayPointerHooks */
    readonly get_pointer: (display: Display, screen: Screen, x: number, y: number, mask: ModifierType) => void
    static name: string
}
abstract class DragContextClass {
    /* Fields of Gdk-2.0.Gdk.DragContextClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class DrawableClass {
    /* Fields of Gdk-2.0.Gdk.DrawableClass */
    readonly parent_class: GObject.ObjectClass
    readonly draw_rectangle: (drawable: Drawable, gc: GC, filled: boolean, x: number, y: number, width: number, height: number) => void
    readonly draw_arc: (drawable: Drawable, gc: GC, filled: boolean, x: number, y: number, width: number, height: number, angle1: number, angle2: number) => void
    readonly draw_polygon: (drawable: Drawable, gc: GC, filled: boolean, points: Point, npoints: number) => void
    readonly draw_text: (drawable: Drawable, font: Font, gc: GC, x: number, y: number, text: string, text_length: number) => void
    readonly draw_text_wc: (drawable: Drawable, font: Font, gc: GC, x: number, y: number, text: WChar, text_length: number) => void
    readonly draw_drawable: (drawable: Drawable, gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number) => void
    readonly draw_points: (drawable: Drawable, gc: GC, points: Point, npoints: number) => void
    readonly draw_segments: (drawable: Drawable, gc: GC, segs: Segment, nsegs: number) => void
    readonly draw_lines: (drawable: Drawable, gc: GC, points: Point, npoints: number) => void
    readonly draw_glyphs: (drawable: Drawable, gc: GC, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString) => void
    readonly draw_image: (drawable: Drawable, gc: GC, image: Image, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number) => void
    readonly get_depth: (drawable: Drawable) => number
    readonly get_size: (drawable: Drawable) => [ /* width */ number | null, /* height */ number | null ]
    readonly set_colormap: (drawable: Drawable, cmap: Colormap) => void
    readonly draw_pixbuf: (drawable: Drawable, gc: GC, pixbuf: GdkPixbuf.Pixbuf, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number) => void
    readonly draw_glyphs_transformed: (drawable: Drawable, gc: GC, matrix: Pango.Matrix, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString) => void
    readonly draw_trapezoids: (drawable: Drawable, gc: GC, trapezoids: Trapezoid, n_trapezoids: number) => void
    readonly ref_cairo_surface: (drawable: Drawable) => cairo.Surface
    readonly set_cairo_clip: (drawable: Drawable, cr: cairo.Context) => void
    readonly create_cairo_surface: (drawable: Drawable, width: number, height: number) => cairo.Surface
    readonly draw_drawable_with_src: (drawable: Drawable, gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number, original_src: Drawable) => void
    static name: string
}
class EventAny {
    /* Fields of Gdk-2.0.Gdk.EventAny */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    static name: string
}
class EventButton {
    /* Fields of Gdk-2.0.Gdk.EventButton */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly time: number
    readonly x: number
    readonly y: number
    readonly axes: number
    readonly state: number
    readonly button: number
    readonly device: Device
    readonly x_root: number
    readonly y_root: number
    static name: string
}
class EventClient {
    /* Fields of Gdk-2.0.Gdk.EventClient */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly message_type: Atom
    readonly data_format: number
    static name: string
}
class EventConfigure {
    /* Fields of Gdk-2.0.Gdk.EventConfigure */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    static name: string
}
class EventCrossing {
    /* Fields of Gdk-2.0.Gdk.EventCrossing */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly subwindow: Window
    readonly time: number
    readonly x: number
    readonly y: number
    readonly x_root: number
    readonly y_root: number
    readonly mode: CrossingMode
    readonly detail: NotifyType
    readonly focus: boolean
    readonly state: number
    static name: string
}
class EventDND {
    /* Fields of Gdk-2.0.Gdk.EventDND */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly context: DragContext
    readonly time: number
    readonly x_root: number
    readonly y_root: number
    static name: string
}
class EventExpose {
    /* Fields of Gdk-2.0.Gdk.EventExpose */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly area: Rectangle
    readonly region: Region
    readonly count: number
    static name: string
}
class EventFocus {
    /* Fields of Gdk-2.0.Gdk.EventFocus */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly in_: number
    static name: string
}
class EventGrabBroken {
    /* Fields of Gdk-2.0.Gdk.EventGrabBroken */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly keyboard: boolean
    readonly implicit: boolean
    readonly grab_window: Window
    static name: string
}
class EventKey {
    /* Fields of Gdk-2.0.Gdk.EventKey */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly time: number
    readonly state: number
    readonly keyval: number
    readonly length: number
    readonly string: string
    readonly hardware_keycode: number
    readonly group: number
    readonly is_modifier: number
    static name: string
}
class EventMotion {
    /* Fields of Gdk-2.0.Gdk.EventMotion */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly time: number
    readonly x: number
    readonly y: number
    readonly axes: number
    readonly state: number
    readonly is_hint: number
    readonly device: Device
    readonly x_root: number
    readonly y_root: number
    static name: string
}
class EventNoExpose {
    /* Fields of Gdk-2.0.Gdk.EventNoExpose */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    static name: string
}
class EventOwnerChange {
    /* Fields of Gdk-2.0.Gdk.EventOwnerChange */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly owner: NativeWindow
    readonly reason: OwnerChange
    readonly selection: Atom
    readonly time: number
    readonly selection_time: number
    static name: string
}
class EventProperty {
    /* Fields of Gdk-2.0.Gdk.EventProperty */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly atom: Atom
    readonly time: number
    readonly state: number
    static name: string
}
class EventProximity {
    /* Fields of Gdk-2.0.Gdk.EventProximity */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly time: number
    readonly device: Device
    static name: string
}
class EventScroll {
    /* Fields of Gdk-2.0.Gdk.EventScroll */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly time: number
    readonly x: number
    readonly y: number
    readonly state: number
    readonly direction: ScrollDirection
    readonly device: Device
    readonly x_root: number
    readonly y_root: number
    static name: string
}
class EventSelection {
    /* Fields of Gdk-2.0.Gdk.EventSelection */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly selection: Atom
    readonly target: Atom
    readonly property: Atom
    readonly time: number
    readonly requestor: NativeWindow
    static name: string
}
class EventSetting {
    /* Fields of Gdk-2.0.Gdk.EventSetting */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly action: SettingAction
    readonly name: string
    static name: string
}
class EventVisibility {
    /* Fields of Gdk-2.0.Gdk.EventVisibility */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly state: VisibilityState
    static name: string
}
class EventWindowState {
    /* Fields of Gdk-2.0.Gdk.EventWindowState */
    readonly type: EventType
    readonly window: Window
    readonly send_event: number
    readonly changed_mask: WindowState
    readonly new_window_state: WindowState
    static name: string
}
class Font {
    /* Fields of Gdk-2.0.Gdk.Font */
    readonly type: FontType
    readonly ascent: number
    readonly descent: number
    /* Methods of Gdk-2.0.Gdk.Font */
    equal(fontb: Font): boolean
    id(): number
    ref(): Font
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static from_description(font_desc: Pango.FontDescription): Font
    static from_description_for_display(display: Display, font_desc: Pango.FontDescription): Font
    static load(font_name: string): Font
    static load_for_display(display: Display, font_name: string): Font
}
abstract class GCClass {
    /* Fields of Gdk-2.0.Gdk.GCClass */
    readonly parent_class: GObject.ObjectClass
    readonly get_values: (gc: GC, values: GCValues) => void
    readonly set_values: (gc: GC, values: GCValues, mask: GCValuesMask) => void
    readonly set_dashes: (gc: GC, dash_offset: number, dash_list: number, n: number) => void
    static name: string
}
class GCValues {
    /* Fields of Gdk-2.0.Gdk.GCValues */
    readonly foreground: Color
    readonly background: Color
    readonly font: Font
    readonly function_: Function
    readonly fill: Fill
    readonly tile: Pixmap
    readonly stipple: Pixmap
    readonly clip_mask: Pixmap
    readonly subwindow_mode: SubwindowMode
    readonly ts_x_origin: number
    readonly ts_y_origin: number
    readonly clip_x_origin: number
    readonly clip_y_origin: number
    readonly graphics_exposures: number
    readonly line_width: number
    readonly line_style: LineStyle
    readonly cap_style: CapStyle
    readonly join_style: JoinStyle
    static name: string
}
class Geometry {
    /* Fields of Gdk-2.0.Gdk.Geometry */
    readonly min_width: number
    readonly min_height: number
    readonly max_width: number
    readonly max_height: number
    readonly base_width: number
    readonly base_height: number
    readonly width_inc: number
    readonly height_inc: number
    readonly min_aspect: number
    readonly max_aspect: number
    readonly win_gravity: Gravity
    static name: string
}
abstract class ImageClass {
    /* Fields of Gdk-2.0.Gdk.ImageClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class KeyboardGrabInfo {
    /* Fields of Gdk-2.0.Gdk.KeyboardGrabInfo */
    readonly window: Window
    readonly native_window: Window
    readonly serial: number
    readonly owner_events: boolean
    readonly time: number
    static name: string
    /* Static methods and pseudo-constructors */
    static libgtk_only(display: Display, grab_window: Window, owner_events: boolean): boolean
}
abstract class KeymapClass {
    /* Fields of Gdk-2.0.Gdk.KeymapClass */
    readonly parent_class: GObject.ObjectClass
    readonly direction_changed: (keymap: Keymap) => void
    readonly keys_changed: (keymap: Keymap) => void
    readonly state_changed: (keymap: Keymap) => void
    static name: string
}
class KeymapKey {
    /* Fields of Gdk-2.0.Gdk.KeymapKey */
    readonly keycode: number
    readonly group: number
    readonly level: number
    static name: string
}
class PangoAttrEmbossColor {
    /* Fields of Gdk-2.0.Gdk.PangoAttrEmbossColor */
    readonly attr: Pango.Attribute
    readonly color: Pango.Color
    static name: string
}
class PangoAttrEmbossed {
    /* Fields of Gdk-2.0.Gdk.PangoAttrEmbossed */
    readonly attr: Pango.Attribute
    readonly embossed: boolean
    static name: string
}
class PangoAttrStipple {
    /* Fields of Gdk-2.0.Gdk.PangoAttrStipple */
    readonly attr: Pango.Attribute
    readonly stipple: Bitmap
    static name: string
}
abstract class PangoRendererClass {
    static name: string
}
class PangoRendererPrivate {
    static name: string
}
class PixmapObject {
    /* Fields of Gdk-2.0.Gdk.PixmapObject */
    readonly parent_instance: Drawable
    readonly impl: Drawable
    readonly depth: number
    static name: string
}
class PixmapObjectClass {
    /* Fields of Gdk-2.0.Gdk.PixmapObjectClass */
    readonly parent_class: DrawableClass
    static name: string
}
class Point {
    /* Fields of Gdk-2.0.Gdk.Point */
    readonly x: number
    readonly y: number
    static name: string
}
class PointerHooks {
    static name: string
}
class PointerWindowInfo {
    /* Fields of Gdk-2.0.Gdk.PointerWindowInfo */
    readonly toplevel_under_pointer: Window
    readonly window_under_pointer: Window
    readonly toplevel_x: number
    readonly toplevel_y: number
    readonly state: number
    readonly button: number
    readonly motion_hint_serial: number
    static name: string
}
class Rectangle {
    /* Fields of Gdk-2.0.Gdk.Rectangle */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    /* Methods of Gdk-2.0.Gdk.Rectangle */
    intersect(src2: Rectangle): [ /* returnType */ boolean, /* dest */ Rectangle | null ]
    union(src2: Rectangle): /* dest */ Rectangle
    static name: string
}
class Region {
    /* Methods of Gdk-2.0.Gdk.Region */
    destroy(): void
    empty(): boolean
    equal(region2: Region): boolean
    get_clipbox(rectangle: Rectangle): void
    get_rectangles(rectangles: Rectangle[]): void
    intersect(source2: Region): void
    offset(dx: number, dy: number): void
    point_in(x: number, y: number): boolean
    rect_equal(rectangle: Rectangle): boolean
    rect_in(rectangle: Rectangle): OverlapType
    shrink(dx: number, dy: number): void
    subtract(source2: Region): void
    union(source2: Region): void
    union_with_rect(rect: Rectangle): void
    xor(source2: Region): void
    static name: string
}
class RgbCmap {
    /* Fields of Gdk-2.0.Gdk.RgbCmap */
    readonly colors: number[]
    readonly n_colors: number
    /* Methods of Gdk-2.0.Gdk.RgbCmap */
    free(): void
    static name: string
}
abstract class ScreenClass {
    /* Fields of Gdk-2.0.Gdk.ScreenClass */
    readonly parent_class: GObject.ObjectClass
    readonly size_changed: (screen: Screen) => void
    readonly composited_changed: (screen: Screen) => void
    readonly monitors_changed: (screen: Screen) => void
    static name: string
}
class Segment {
    /* Fields of Gdk-2.0.Gdk.Segment */
    readonly x1: number
    readonly y1: number
    readonly x2: number
    readonly y2: number
    static name: string
}
class Span {
    /* Fields of Gdk-2.0.Gdk.Span */
    readonly x: number
    readonly y: number
    readonly width: number
    static name: string
}
class TimeCoord {
    /* Fields of Gdk-2.0.Gdk.TimeCoord */
    readonly time: number
    readonly axes: number[]
    static name: string
}
class Trapezoid {
    /* Fields of Gdk-2.0.Gdk.Trapezoid */
    readonly y1: number
    readonly x11: number
    readonly x21: number
    readonly y2: number
    readonly x12: number
    readonly x22: number
    static name: string
}
abstract class VisualClass {
    static name: string
}
class WindowAttr {
    /* Fields of Gdk-2.0.Gdk.WindowAttr */
    readonly title: string
    readonly event_mask: number
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    readonly wclass: WindowClass
    readonly visual: Visual
    readonly colormap: Colormap
    readonly window_type: WindowType
    readonly cursor: Cursor
    readonly wmclass_name: string
    readonly wmclass_class: string
    readonly override_redirect: boolean
    readonly type_hint: WindowTypeHint
    static name: string
}
class WindowObject {
    static name: string
}
class WindowObjectClass {
    /* Fields of Gdk-2.0.Gdk.WindowObjectClass */
    readonly parent_class: DrawableClass
    static name: string
}
class WindowRedirect {
    static name: string
}
class Event {
    /* Methods of Gdk-2.0.Gdk.Event */
    copy(): Event
    free(): void
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    get_coords(): [ /* returnType */ boolean, /* x_win */ number, /* y_win */ number ]
    get_root_coords(): [ /* returnType */ boolean, /* x_root */ number, /* y_root */ number ]
    get_state(): [ /* returnType */ boolean, /* state */ ModifierType ]
    get_time(): number
    put(): void
    send_client_message(winid: NativeWindow): boolean
    send_clientmessage_toall(): void
    set_screen(screen: Screen): void
    static name: string
    static new(type: EventType): Event
    constructor(type: EventType)
    /* Static methods and pseudo-constructors */
    static new(type: EventType): Event
    static get(): Event
    static get_graphics_expose(window: Window): Event
    static handler_set(func: EventFunc): void
    static peek(): Event
    static request_motions(event: EventMotion): void
    static send_client_message_for_display(display: Display, event: Event, winid: NativeWindow): boolean
}
    type NativeWindow = number
    type Selection = Atom
    type SelectionType = Atom
    type Target = Atom
    type WChar = number
    type XEvent = void
}
export default Gdk;