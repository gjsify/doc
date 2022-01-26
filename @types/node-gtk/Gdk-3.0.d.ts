/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gdk-3.0
 */

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
    DISTANCE,
    ROTATION,
    SLIDER,
    LAST,
}
enum ByteOrder {
    LSB_FIRST,
    MSB_FIRST,
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
enum DeviceType {
    MASTER,
    SLAVE,
    FLOATING,
}
enum DragCancelReason {
    NO_TARGET,
    USER_CANCELLED,
    ERROR,
}
enum DragProtocol {
    NONE,
    MOTIF,
    XDND,
    ROOTWIN,
    WIN32_DROPFILES,
    OLE2,
    LOCAL,
    WAYLAND,
}
enum EventType {
    NOTHING,
    DELETE,
    DESTROY,
    EXPOSE,
    MOTION_NOTIFY,
    BUTTON_PRESS,
    TODO_2BUTTON_PRESS,
    DOUBLE_BUTTON_PRESS,
    TODO_3BUTTON_PRESS,
    TRIPLE_BUTTON_PRESS,
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
    SCROLL,
    WINDOW_STATE,
    SETTING,
    OWNER_CHANGE,
    GRAB_BROKEN,
    DAMAGE,
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
enum FilterReturn {
    CONTINUE,
    TRANSLATE,
    REMOVE,
}
enum FullscreenMode {
    CURRENT_MONITOR,
    ALL_MONITORS,
}
enum GLError {
    NOT_AVAILABLE,
    UNSUPPORTED_FORMAT,
    UNSUPPORTED_PROFILE,
}
enum GrabOwnership {
    NONE,
    WINDOW,
    APPLICATION,
}
enum GrabStatus {
    SUCCESS,
    ALREADY_GRABBED,
    INVALID_TIME,
    NOT_VIEWABLE,
    FROZEN,
    FAILED,
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
    KEYBOARD,
    TOUCHSCREEN,
    TOUCHPAD,
    TRACKPOINT,
    TABLET_PAD,
}
enum ModifierIntent {
    PRIMARY_ACCELERATOR,
    CONTEXT_MENU,
    EXTEND_SELECTION,
    MODIFY_SELECTION,
    NO_TEXT_INPUT,
    SHIFT_GROUP,
    DEFAULT_MOD_MASK,
}
enum NotifyType {
    ANCESTOR,
    VIRTUAL,
    INFERIOR,
    NONLINEAR,
    NONLINEAR_VIRTUAL,
    UNKNOWN,
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
enum ScrollDirection {
    UP,
    DOWN,
    LEFT,
    RIGHT,
    SMOOTH,
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
enum SubpixelLayout {
    UNKNOWN,
    NONE,
    HORIZONTAL_RGB,
    HORIZONTAL_BGR,
    VERTICAL_RGB,
    VERTICAL_BGR,
}
enum TouchpadGesturePhase {
    BEGIN,
    UPDATE,
    END,
    CANCEL,
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
    TEMP,
    FOREIGN,
    OFFSCREEN,
    SUBSURFACE,
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
enum WindowWindowClass {
    INPUT_OUTPUT,
    INPUT_ONLY,
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
    PRESSURE,
    XTILT,
    YTILT,
    WHEEL,
    DISTANCE,
    ROTATION,
    SLIDER,
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
    TOUCH_MASK,
    SMOOTH_SCROLL_MASK,
    TOUCHPAD_GESTURE_MASK,
    TABLET_PAD_MASK,
    ALL_EVENTS_MASK,
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
    MODIFIER_RESERVED_13_MASK,
    MODIFIER_RESERVED_14_MASK,
    MODIFIER_RESERVED_15_MASK,
    MODIFIER_RESERVED_16_MASK,
    MODIFIER_RESERVED_17_MASK,
    MODIFIER_RESERVED_18_MASK,
    MODIFIER_RESERVED_19_MASK,
    MODIFIER_RESERVED_20_MASK,
    MODIFIER_RESERVED_21_MASK,
    MODIFIER_RESERVED_22_MASK,
    MODIFIER_RESERVED_23_MASK,
    MODIFIER_RESERVED_24_MASK,
    MODIFIER_RESERVED_25_MASK,
    SUPER_MASK,
    HYPER_MASK,
    META_MASK,
    MODIFIER_RESERVED_29_MASK,
    RELEASE_MASK,
    MODIFIER_MASK,
}
enum SeatCapabilities {
    NONE,
    POINTER,
    TOUCH,
    TABLET_STYLUS,
    KEYBOARD,
    ALL_POINTING,
    ALL,
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
const MAJOR_VERSION: number
const MAX_TIMECOORD_AXES: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const PARENT_RELATIVE: number
const PRIORITY_REDRAW: number
function addOptionEntriesLibgtkOnly(group: GLib.OptionGroup): void
function atomIntern(atomName: string, onlyIfExists: boolean): Atom
function atomInternStaticString(atomName: string): Atom
function beep(): void
function cairoCreate(window: Window): cairo.Context
function cairoDrawFromGl(cr: cairo.Context, window: Window, source: number, sourceType: number, bufferScale: number, x: number, y: number, width: number, height: number): void
function cairoGetClipRectangle(cr: cairo.Context): [ /* returnType */ boolean, /* rect */ Rectangle | null ]
function cairoGetDrawingContext(cr: cairo.Context): DrawingContext | null
function cairoRectangle(cr: cairo.Context, rectangle: Rectangle): void
function cairoRegion(cr: cairo.Context, region: cairo.Region): void
function cairoRegionCreateFromSurface(surface: cairo.Surface): cairo.Region
function cairoSetSourceColor(cr: cairo.Context, color: Color): void
function cairoSetSourcePixbuf(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, pixbufX: number, pixbufY: number): void
function cairoSetSourceRgba(cr: cairo.Context, rgba: RGBA): void
function cairoSetSourceWindow(cr: cairo.Context, window: Window, x: number, y: number): void
function cairoSurfaceCreateFromPixbuf(pixbuf: GdkPixbuf.Pixbuf, scale: number, forWindow?: Window | null): cairo.Surface
function colorParse(spec: string): [ /* returnType */ boolean, /* color */ Color ]
function disableMultidevice(): void
function dragAbort(context: DragContext, time: number): void
function dragBegin(window: Window, targets: Atom[]): DragContext
function dragBeginForDevice(window: Window, device: Device, targets: Atom[]): DragContext
function dragBeginFromPoint(window: Window, device: Device, targets: Atom[], xRoot: number, yRoot: number): DragContext
function dragDrop(context: DragContext, time: number): void
function dragDropDone(context: DragContext, success: boolean): void
function dragDropSucceeded(context: DragContext): boolean
function dragFindWindowForScreen(context: DragContext, dragWindow: Window, screen: Screen, xRoot: number, yRoot: number): [ /* destWindow */ Window, /* protocol */ DragProtocol ]
function dragGetSelection(context: DragContext): Atom
function dragMotion(context: DragContext, destWindow: Window, protocol: DragProtocol, xRoot: number, yRoot: number, suggestedAction: DragAction, possibleActions: DragAction, time: number): boolean
function dragStatus(context: DragContext, action: DragAction, time: number): void
function dropFinish(context: DragContext, success: boolean, time: number): void
function dropReply(context: DragContext, accepted: boolean, time: number): void
function errorTrapPop(): number
function errorTrapPopIgnored(): void
function errorTrapPush(): void
function eventGet(): Event | null
function eventHandlerSet(func: EventFunc): void
function eventPeek(): Event | null
function eventRequestMotions(event: EventMotion): void
function eventsGetAngle(event1: Event, event2: Event): [ /* returnType */ boolean, /* angle */ number ]
function eventsGetCenter(event1: Event, event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
function eventsGetDistance(event1: Event, event2: Event): [ /* returnType */ boolean, /* distance */ number ]
function eventsPending(): boolean
function flush(): void
function getDefaultRootWindow(): Window
function getDisplay(): string
function getDisplayArgName(): string | null
function getProgramClass(): string
function getShowEvents(): boolean
function glErrorQuark(): GLib.Quark
function init(argv: string[]): /* argv */ string[]
function initCheck(argv: string[]): [ /* returnType */ boolean, /* argv */ string[] ]
function keyboardGrab(window: Window, ownerEvents: boolean, time: number): GrabStatus
function keyboardUngrab(time: number): void
function keyvalConvertCase(symbol: number): [ /* lower */ number, /* upper */ number ]
function keyvalFromName(keyvalName: string): number
function keyvalIsLower(keyval: number): boolean
function keyvalIsUpper(keyval: number): boolean
function keyvalName(keyval: number): string | null
function keyvalToLower(keyval: number): number
function keyvalToUnicode(keyval: number): number
function keyvalToUpper(keyval: number): number
function listVisuals(): Visual[]
function notifyStartupComplete(): void
function notifyStartupCompleteWithId(startupId: string): void
function offscreenWindowGetEmbedder(window: Window): Window | null
function offscreenWindowGetSurface(window: Window): cairo.Surface | null
function offscreenWindowSetEmbedder(window: Window, embedder: Window): void
function pangoContextGet(): Pango.Context
function pangoContextGetForDisplay(display: Display): Pango.Context
function pangoContextGetForScreen(screen: Screen): Pango.Context
function parseArgs(argv: string[]): /* argv */ string[]
function pixbufGetFromSurface(surface: cairo.Surface, srcX: number, srcY: number, width: number, height: number): GdkPixbuf.Pixbuf | null
function pixbufGetFromWindow(window: Window, srcX: number, srcY: number, width: number, height: number): GdkPixbuf.Pixbuf | null
function pointerGrab(window: Window, ownerEvents: boolean, eventMask: EventMask, confineTo: Window | null, cursor: Cursor | null, time: number): GrabStatus
function pointerIsGrabbed(): boolean
function pointerUngrab(time: number): void
function preParseLibgtkOnly(): void
function propertyDelete(window: Window, property: Atom): void
function propertyGet(window: Window, property: Atom, type: Atom, offset: number, length: number, pdelete: number): [ /* returnType */ boolean, /* actualPropertyType */ Atom, /* actualFormat */ number, /* data */ Uint8Array ]
function queryDepths(): /* depths */ number[]
function queryVisualTypes(): /* visualTypes */ VisualType[]
function selectionConvert(requestor: Window, selection: Atom, target: Atom, time: number): void
function selectionOwnerGet(selection: Atom): Window | null
function selectionOwnerGetForDisplay(display: Display, selection: Atom): Window | null
function selectionOwnerSet(owner: Window | null, selection: Atom, time: number, sendEvent: boolean): boolean
function selectionOwnerSetForDisplay(display: Display, owner: Window | null, selection: Atom, time: number, sendEvent: boolean): boolean
function selectionSendNotify(requestor: Window, selection: Atom, target: Atom, property: Atom, time: number): void
function selectionSendNotifyForDisplay(display: Display, requestor: Window, selection: Atom, target: Atom, property: Atom, time: number): void
function setAllowedBackends(backends: string): void
function setDoubleClickTime(msec: number): void
function setProgramClass(programClass: string): void
function setShowEvents(showEvents: boolean): void
function settingGet(name: string, value: any): boolean
function synthesizeWindowState(window: Window, unsetFlags: WindowState, setFlags: WindowState): void
function testRenderSync(window: Window): void
function testSimulateButton(window: Window, x: number, y: number, button: number, modifiers: ModifierType, buttonPressrelease: EventType): boolean
function testSimulateKey(window: Window, x: number, y: number, keyval: number, modifiers: ModifierType, keyPressrelease: EventType): boolean
function textPropertyToUtf8ListForDisplay(display: Display, encoding: Atom, format: number, text: Uint8Array): [ /* returnType */ number, /* list */ string[] ]
function threadsAddIdle(priority: number, function_: GLib.SourceFunc): number
function threadsAddTimeout(priority: number, interval: number, function_: GLib.SourceFunc): number
function threadsAddTimeoutSeconds(priority: number, interval: number, function_: GLib.SourceFunc): number
function threadsEnter(): void
function threadsInit(): void
function threadsLeave(): void
function unicodeToKeyval(wc: number): number
function utf8ToStringTarget(str: string): string | null
interface EventFunc {
    (event: Event): void
}
interface FilterFunc {
    (xevent: XEvent, event: Event): FilterReturn
}
interface SeatGrabPrepareFunc {
    (seat: Seat, window: Window): void
}
interface WindowChildFunc {
    (window: Window): boolean
}
interface WindowInvalidateHandlerFunc {
    (window: Window, region: cairo.Region): void
}
interface DevicePad_ConstructProps extends Device_ConstructProps {
}
class DevicePad {
    /* Properties of Gdk-3.0.Gdk.Device */
    readonly associatedDevice: Device
    readonly axes: AxisFlags
    inputMode: InputMode
    readonly nAxes: number
    seat: Seat
    readonly tool: DeviceTool
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DevicePad */
    getFeatureGroup(feature: DevicePadFeature, featureIdx: number): number
    getGroupNModes(groupIdx: number): number
    getNFeatures(feature: DevicePadFeature): number
    getNGroups(): number
    /* Methods of Gdk-3.0.Gdk.Device */
    getAssociatedDevice(): Device | null
    getAxes(): AxisFlags
    getAxisUse(index: number): AxisUse
    getDeviceType(): DeviceType
    getDisplay(): Display
    getHasCursor(): boolean
    getKey(index: number): [ /* returnType */ boolean, /* keyval */ number, /* modifiers */ ModifierType ]
    getLastEventWindow(): Window | null
    getMode(): InputMode
    getNAxes(): number
    getNKeys(): number
    getName(): string
    getPosition(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null ]
    getPositionDouble(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null ]
    getProductId(): string | null
    getSeat(): Seat
    getSource(): InputSource
    getVendorId(): string | null
    getWindowAtPosition(): [ /* returnType */ Window | null, /* winX */ number | null, /* winY */ number | null ]
    getWindowAtPositionDouble(): [ /* returnType */ Window | null, /* winX */ number | null, /* winY */ number | null ]
    grab(window: Window, grabOwnership: GrabOwnership, ownerEvents: boolean, eventMask: EventMask, cursor: Cursor | null, time: number): GrabStatus
    listAxes(): Atom[]
    listSlaveDevices(): Device[] | null
    setAxisUse(index: number, use: AxisUse): void
    setKey(index: number, keyval: number, modifiers: ModifierType): void
    setMode(mode: InputMode): boolean
    ungrab(time: number): void
    warp(screen: Screen, x: number, y: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gdk-3.0.Gdk.Device */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "tool-changed", callback: ((tool: DeviceTool) => void)): number
    on(sigName: "tool-changed", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tool-changed", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tool-changed", callback: (tool: DeviceTool) => void): NodeJS.EventEmitter
    emit(sigName: "tool-changed", tool: DeviceTool): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::associated-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::associated-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tool", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DevicePad_ConstructProps)
    _init (config?: DevicePad_ConstructProps): void
    static $gtype: GObject.Type
}
interface AppLaunchContext_ConstructProps extends Gio.AppLaunchContext_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.AppLaunchContext */
    display?: Display
}
class AppLaunchContext {
    /* Fields of Gio-2.0.Gio.AppLaunchContext */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.AppLaunchContext */
    setDesktop(desktop: number): void
    setDisplay(display: Display): void
    setIcon(icon?: Gio.Icon | null): void
    setIconName(iconName?: string | null): void
    setScreen(screen: Screen): void
    setTimestamp(timestamp: number): void
    /* Methods of Gio-2.0.Gio.AppLaunchContext */
    getDisplay(info: Gio.AppInfo, files: Gio.File[]): string | null
    getEnvironment(): string[]
    getStartupNotifyId(info: Gio.AppInfo, files: Gio.File[]): string | null
    launchFailed(startupNotifyId: string): void
    setenv(variable: string, value: string): void
    unsetenv(variable: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gio-2.0.Gio.AppLaunchContext */
    connect(sigName: "launch-failed", callback: ((startupNotifyId: string) => void)): number
    on(sigName: "launch-failed", callback: (startupNotifyId: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "launch-failed", callback: (startupNotifyId: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "launch-failed", callback: (startupNotifyId: string) => void): NodeJS.EventEmitter
    emit(sigName: "launch-failed", startupNotifyId: string): void
    connect(sigName: "launch-started", callback: ((info: Gio.AppInfo, platformData?: GLib.Variant | null) => void)): number
    on(sigName: "launch-started", callback: (info: Gio.AppInfo, platformData?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "launch-started", callback: (info: Gio.AppInfo, platformData?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "launch-started", callback: (info: Gio.AppInfo, platformData?: GLib.Variant | null) => void): NodeJS.EventEmitter
    emit(sigName: "launch-started", info: Gio.AppInfo, platformData?: GLib.Variant | null): void
    connect(sigName: "launched", callback: ((info: Gio.AppInfo, platformData: GLib.Variant) => void)): number
    on(sigName: "launched", callback: (info: Gio.AppInfo, platformData: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "launched", callback: (info: Gio.AppInfo, platformData: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "launched", callback: (info: Gio.AppInfo, platformData: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "launched", info: Gio.AppInfo, platformData: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AppLaunchContext_ConstructProps)
    _init (config?: AppLaunchContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AppLaunchContext
    /* Function overloads */
    static new(): AppLaunchContext
    static $gtype: GObject.Type
}
interface Cursor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Cursor */
    cursorType?: CursorType
    display?: Display
}
class Cursor {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Cursor */
    getCursorType(): CursorType
    getDisplay(): Display
    getImage(): GdkPixbuf.Pixbuf | null
    getSurface(): [ /* returnType */ cairo.Surface | null, /* xHot */ number | null, /* yHot */ number | null ]
    ref(): Cursor
    unref(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Cursor_ConstructProps)
    _init (config?: Cursor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cursorType: CursorType): Cursor
    static newForDisplay(display: Display, cursorType: CursorType): Cursor
    static newFromName(display: Display, name: string): Cursor
    static newFromPixbuf(display: Display, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number): Cursor
    static newFromSurface(display: Display, surface: cairo.Surface, x: number, y: number): Cursor
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Device */
    deviceManager?: DeviceManager
    display?: Display
    hasCursor?: boolean
    inputMode?: InputMode
    inputSource?: InputSource
    name?: string
    numTouches?: number
    productId?: string
    seat?: Seat
    type?: DeviceType
    vendorId?: string
}
class Device {
    /* Properties of Gdk-3.0.Gdk.Device */
    readonly associatedDevice: Device
    readonly axes: AxisFlags
    inputMode: InputMode
    readonly nAxes: number
    seat: Seat
    readonly tool: DeviceTool
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Device */
    getAssociatedDevice(): Device | null
    getAxes(): AxisFlags
    getAxisUse(index: number): AxisUse
    getDeviceType(): DeviceType
    getDisplay(): Display
    getHasCursor(): boolean
    getKey(index: number): [ /* returnType */ boolean, /* keyval */ number, /* modifiers */ ModifierType ]
    getLastEventWindow(): Window | null
    getMode(): InputMode
    getNAxes(): number
    getNKeys(): number
    getName(): string
    getPosition(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null ]
    getPositionDouble(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null ]
    getProductId(): string | null
    getSeat(): Seat
    getSource(): InputSource
    getVendorId(): string | null
    getWindowAtPosition(): [ /* returnType */ Window | null, /* winX */ number | null, /* winY */ number | null ]
    getWindowAtPositionDouble(): [ /* returnType */ Window | null, /* winX */ number | null, /* winY */ number | null ]
    grab(window: Window, grabOwnership: GrabOwnership, ownerEvents: boolean, eventMask: EventMask, cursor: Cursor | null, time: number): GrabStatus
    listAxes(): Atom[]
    listSlaveDevices(): Device[] | null
    setAxisUse(index: number, use: AxisUse): void
    setKey(index: number, keyval: number, modifiers: ModifierType): void
    setMode(mode: InputMode): boolean
    ungrab(time: number): void
    warp(screen: Screen, x: number, y: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gdk-3.0.Gdk.Device */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "tool-changed", callback: ((tool: DeviceTool) => void)): number
    on(sigName: "tool-changed", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tool-changed", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tool-changed", callback: (tool: DeviceTool) => void): NodeJS.EventEmitter
    emit(sigName: "tool-changed", tool: DeviceTool): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::associated-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::associated-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tool", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static grabInfoLibgtkOnly(display: Display, device: Device): [ /* returnType */ boolean, /* grabWindow */ Window, /* ownerEvents */ boolean ]
    static $gtype: GObject.Type
}
interface DeviceManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.DeviceManager */
    display?: Display
}
class DeviceManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DeviceManager */
    getClientPointer(): Device
    getDisplay(): Display | null
    listDevices(type: DeviceType): Device[]
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gdk-3.0.Gdk.DeviceManager */
    connect(sigName: "device-added", callback: ((device: Device) => void)): number
    on(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-added", device: Device): void
    connect(sigName: "device-changed", callback: ((device: Device) => void)): number
    on(sigName: "device-changed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-changed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-changed", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-changed", device: Device): void
    connect(sigName: "device-removed", callback: ((device: Device) => void)): number
    on(sigName: "device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-removed", device: Device): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceManager_ConstructProps)
    _init (config?: DeviceManager_ConstructProps): void
    static $gtype: GObject.Type
}
interface DeviceTool_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.DeviceTool */
    axes?: AxisFlags
    hardwareId?: number
    serial?: number
    toolType?: DeviceToolType
}
class DeviceTool {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DeviceTool */
    getHardwareId(): number
    getSerial(): number
    getToolType(): DeviceToolType
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceTool_ConstructProps)
    _init (config?: DeviceTool_ConstructProps): void
    static $gtype: GObject.Type
}
interface Display_ConstructProps extends GObject.Object_ConstructProps {
}
class Display {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Display */
    beep(): void
    close(): void
    deviceIsGrabbed(device: Device): boolean
    flush(): void
    getAppLaunchContext(): AppLaunchContext
    getDefaultCursorSize(): number
    getDefaultGroup(): Window
    getDefaultScreen(): Screen
    getDefaultSeat(): Seat
    getDeviceManager(): DeviceManager | null
    getEvent(): Event | null
    getMaximalCursorSize(): [ /* width */ number, /* height */ number ]
    getMonitor(monitorNum: number): Monitor | null
    getMonitorAtPoint(x: number, y: number): Monitor
    getMonitorAtWindow(window: Window): Monitor
    getNMonitors(): number
    getNScreens(): number
    getName(): string
    getPointer(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    getPrimaryMonitor(): Monitor | null
    getScreen(screenNum: number): Screen
    getWindowAtPointer(): [ /* returnType */ Window | null, /* winX */ number | null, /* winY */ number | null ]
    hasPending(): boolean
    isClosed(): boolean
    keyboardUngrab(time: number): void
    listDevices(): Device[]
    listSeats(): Seat[]
    notifyStartupComplete(startupId: string): void
    peekEvent(): Event | null
    pointerIsGrabbed(): boolean
    pointerUngrab(time: number): void
    putEvent(event: Event): void
    requestSelectionNotification(selection: Atom): boolean
    setDoubleClickDistance(distance: number): void
    setDoubleClickTime(msec: number): void
    storeClipboard(clipboardWindow: Window, time: number, targets: Atom[] | null): void
    supportsClipboardPersistence(): boolean
    supportsComposite(): boolean
    supportsCursorAlpha(): boolean
    supportsCursorColor(): boolean
    supportsInputShapes(): boolean
    supportsSelectionNotification(): boolean
    supportsShapes(): boolean
    sync(): void
    warpPointer(screen: Screen, x: number, y: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gdk-3.0.Gdk.Display */
    connect(sigName: "closed", callback: ((isError: boolean) => void)): number
    on(sigName: "closed", callback: (isError: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: (isError: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: (isError: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "closed", isError: boolean): void
    connect(sigName: "monitor-added", callback: ((monitor: Monitor) => void)): number
    on(sigName: "monitor-added", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "monitor-added", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "monitor-added", callback: (monitor: Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "monitor-added", monitor: Monitor): void
    connect(sigName: "monitor-removed", callback: ((monitor: Monitor) => void)): number
    on(sigName: "monitor-removed", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "monitor-removed", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "monitor-removed", callback: (monitor: Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "monitor-removed", monitor: Monitor): void
    connect(sigName: "opened", callback: (() => void)): number
    on(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "opened"): void
    connect(sigName: "seat-added", callback: ((seat: Seat) => void)): number
    on(sigName: "seat-added", callback: (seat: Seat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seat-added", callback: (seat: Seat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seat-added", callback: (seat: Seat) => void): NodeJS.EventEmitter
    emit(sigName: "seat-added", seat: Seat): void
    connect(sigName: "seat-removed", callback: ((seat: Seat) => void)): number
    on(sigName: "seat-removed", callback: (seat: Seat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seat-removed", callback: (seat: Seat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seat-removed", callback: (seat: Seat) => void): NodeJS.EventEmitter
    emit(sigName: "seat-removed", seat: Seat): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Display_ConstructProps)
    _init (config?: Display_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Display | null
    static open(displayName: string): Display | null
    static openDefaultLibgtkOnly(): Display | null
    static $gtype: GObject.Type
}
interface DisplayManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.DisplayManager */
    defaultDisplay?: Display
}
class DisplayManager {
    /* Properties of Gdk-3.0.Gdk.DisplayManager */
    defaultDisplay: Display
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DisplayManager */
    getDefaultDisplay(): Display | null
    listDisplays(): Display[]
    openDisplay(name: string): Display | null
    setDefaultDisplay(display: Display): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gdk-3.0.Gdk.DisplayManager */
    connect(sigName: "display-opened", callback: ((display: Display) => void)): number
    on(sigName: "display-opened", callback: (display: Display) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "display-opened", callback: (display: Display) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "display-opened", callback: (display: Display) => void): NodeJS.EventEmitter
    emit(sigName: "display-opened", display: Display): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-display", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-display", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DragContext */
    getActions(): DragAction
    getDestWindow(): Window
    getDevice(): Device
    getDragWindow(): Window | null
    getProtocol(): DragProtocol
    getSelectedAction(): DragAction
    getSourceWindow(): Window
    getSuggestedAction(): DragAction
    listTargets(): Atom[]
    manageDnd(ipcWindow: Window, actions: DragAction): boolean
    setDevice(device: Device): void
    setHotspot(hotX: number, hotY: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gdk-3.0.Gdk.DragContext */
    connect(sigName: "action-changed", callback: ((action: DragAction) => void)): number
    on(sigName: "action-changed", callback: (action: DragAction) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-changed", callback: (action: DragAction) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-changed", callback: (action: DragAction) => void): NodeJS.EventEmitter
    emit(sigName: "action-changed", action: DragAction): void
    connect(sigName: "cancel", callback: ((reason: DragCancelReason) => void)): number
    on(sigName: "cancel", callback: (reason: DragCancelReason) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancel", callback: (reason: DragCancelReason) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancel", callback: (reason: DragCancelReason) => void): NodeJS.EventEmitter
    emit(sigName: "cancel", reason: DragCancelReason): void
    connect(sigName: "dnd-finished", callback: (() => void)): number
    on(sigName: "dnd-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dnd-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dnd-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "dnd-finished"): void
    connect(sigName: "drop-performed", callback: ((time: number) => void)): number
    on(sigName: "drop-performed", callback: (time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drop-performed", callback: (time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drop-performed", callback: (time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drop-performed", time: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DragContext_ConstructProps)
    _init (config?: DragContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface DrawingContext_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.DrawingContext */
    clip?: cairo.Region
    window?: Window
}
class DrawingContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DrawingContext */
    getCairoContext(): cairo.Context
    getClip(): cairo.Region | null
    getWindow(): Window
    isValid(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DrawingContext_ConstructProps)
    _init (config?: DrawingContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface FrameClock_ConstructProps extends GObject.Object_ConstructProps {
}
class FrameClock {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.FrameClock */
    beginUpdating(): void
    endUpdating(): void
    getCurrentTimings(): FrameTimings | null
    getFrameCounter(): number
    getFrameTime(): number
    getHistoryStart(): number
    getRefreshInfo(baseTime: number): [ /* refreshIntervalReturn */ number | null, /* presentationTimeReturn */ number ]
    getTimings(frameCounter: number): FrameTimings | null
    requestPhase(phase: FrameClockPhase): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gdk-3.0.Gdk.FrameClock */
    connect(sigName: "after-paint", callback: (() => void)): number
    on(sigName: "after-paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "after-paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "after-paint", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "after-paint"): void
    connect(sigName: "before-paint", callback: (() => void)): number
    on(sigName: "before-paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "before-paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "before-paint", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "before-paint"): void
    connect(sigName: "flush-events", callback: (() => void)): number
    on(sigName: "flush-events", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "flush-events", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "flush-events", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "flush-events"): void
    connect(sigName: "layout", callback: (() => void)): number
    on(sigName: "layout", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layout", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layout", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "layout"): void
    connect(sigName: "paint", callback: (() => void)): number
    on(sigName: "paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paint", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paint"): void
    connect(sigName: "resume-events", callback: (() => void)): number
    on(sigName: "resume-events", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resume-events", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resume-events", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resume-events"): void
    connect(sigName: "update", callback: (() => void)): number
    on(sigName: "update", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "update"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FrameClock_ConstructProps)
    _init (config?: FrameClock_ConstructProps): void
    static $gtype: GObject.Type
}
interface GLContext_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.GLContext */
    display?: Display
    sharedContext?: GLContext
    window?: Window
}
class GLContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.GLContext */
    getDebugEnabled(): boolean
    getDisplay(): Display | null
    getForwardCompatible(): boolean
    getRequiredVersion(): [ /* major */ number | null, /* minor */ number | null ]
    getSharedContext(): GLContext | null
    getUseEs(): boolean
    getVersion(): [ /* major */ number, /* minor */ number ]
    getWindow(): Window | null
    isLegacy(): boolean
    makeCurrent(): void
    realize(): boolean
    setDebugEnabled(enabled: boolean): void
    setForwardCompatible(compatible: boolean): void
    setRequiredVersion(major: number, minor: number): void
    setUseEs(useEs: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GLContext_ConstructProps)
    _init (config?: GLContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static clearCurrent(): void
    static getCurrent(): GLContext | null
    static $gtype: GObject.Type
}
interface Keymap_ConstructProps extends GObject.Object_ConstructProps {
}
class Keymap {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Keymap */
    addVirtualModifiers(state: ModifierType): /* state */ ModifierType
    getCapsLockState(): boolean
    getDirection(): Pango.Direction
    getEntriesForKeycode(hardwareKeycode: number): [ /* returnType */ boolean, /* keys */ KeymapKey[] | null, /* keyvals */ number[] | null ]
    getEntriesForKeyval(keyval: number): [ /* returnType */ boolean, /* keys */ KeymapKey[] ]
    getModifierMask(intent: ModifierIntent): ModifierType
    getModifierState(): number
    getNumLockState(): boolean
    getScrollLockState(): boolean
    haveBidiLayouts(): boolean
    lookupKey(key: KeymapKey): number
    mapVirtualModifiers(state: ModifierType): [ /* returnType */ boolean, /* state */ ModifierType ]
    translateKeyboardState(hardwareKeycode: number, state: ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number | null, /* effectiveGroup */ number | null, /* level */ number | null, /* consumedModifiers */ ModifierType | null ]
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gdk-3.0.Gdk.Keymap */
    connect(sigName: "direction-changed", callback: (() => void)): number
    on(sigName: "direction-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed"): void
    connect(sigName: "keys-changed", callback: (() => void)): number
    on(sigName: "keys-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keys-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keys-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "keys-changed"): void
    connect(sigName: "state-changed", callback: (() => void)): number
    on(sigName: "state-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "state-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Keymap_ConstructProps)
    _init (config?: Keymap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Keymap
    static getForDisplay(display: Display): Keymap
    static $gtype: GObject.Type
}
interface Monitor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Monitor */
    display?: Display
}
class Monitor {
    /* Properties of Gdk-3.0.Gdk.Monitor */
    readonly geometry: Rectangle
    readonly heightMm: number
    readonly manufacturer: string
    readonly model: string
    readonly refreshRate: number
    readonly scaleFactor: number
    readonly subpixelLayout: SubpixelLayout
    readonly widthMm: number
    readonly workarea: Rectangle
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Monitor */
    getDisplay(): Display
    getGeometry(): /* geometry */ Rectangle
    getHeightMm(): number
    getManufacturer(): string | null
    getModel(): string | null
    getRefreshRate(): number
    getScaleFactor(): number
    getSubpixelLayout(): SubpixelLayout
    getWidthMm(): number
    getWorkarea(): /* workarea */ Rectangle
    isPrimary(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gdk-3.0.Gdk.Monitor */
    connect(sigName: "invalidate", callback: (() => void)): number
    on(sigName: "invalidate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "invalidate"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::geometry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geometry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manufacturer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refresh-rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subpixel-layout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpixel-layout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::workarea", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workarea", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::workarea", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::workarea", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::workarea", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Monitor_ConstructProps)
    _init (config?: Monitor_ConstructProps): void
    static $gtype: GObject.Type
}
interface Screen_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Screen */
    fontOptions?: object
    resolution?: number
}
class Screen {
    /* Properties of Gdk-3.0.Gdk.Screen */
    fontOptions: object
    resolution: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Screen */
    getActiveWindow(): Window | null
    getDisplay(): Display
    getFontOptions(): cairo.FontOptions | null
    getHeight(): number
    getHeightMm(): number
    getMonitorAtPoint(x: number, y: number): number
    getMonitorAtWindow(window: Window): number
    getMonitorGeometry(monitorNum: number): /* dest */ Rectangle | null
    getMonitorHeightMm(monitorNum: number): number
    getMonitorPlugName(monitorNum: number): string | null
    getMonitorScaleFactor(monitorNum: number): number
    getMonitorWidthMm(monitorNum: number): number
    getMonitorWorkarea(monitorNum: number): /* dest */ Rectangle | null
    getNMonitors(): number
    getNumber(): number
    getPrimaryMonitor(): number
    getResolution(): number
    getRgbaVisual(): Visual | null
    getRootWindow(): Window
    getSetting(name: string, value: any): boolean
    getSystemVisual(): Visual
    getToplevelWindows(): Window[]
    getWidth(): number
    getWidthMm(): number
    getWindowStack(): Window[] | null
    isComposited(): boolean
    listVisuals(): Visual[]
    makeDisplayName(): string
    setFontOptions(options?: cairo.FontOptions | null): void
    setResolution(dpi: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gdk-3.0.Gdk.Screen */
    connect(sigName: "composited-changed", callback: (() => void)): number
    on(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "composited-changed"): void
    connect(sigName: "monitors-changed", callback: (() => void)): number
    on(sigName: "monitors-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "monitors-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "monitors-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "monitors-changed"): void
    connect(sigName: "size-changed", callback: (() => void)): number
    on(sigName: "size-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "size-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::font-options", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-options", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Screen_ConstructProps)
    _init (config?: Screen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Screen | null
    static height(): number
    static heightMm(): number
    static width(): number
    static widthMm(): number
    static $gtype: GObject.Type
}
interface Seat_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Seat */
    display?: Display
}
class Seat {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Seat */
    getCapabilities(): SeatCapabilities
    getDisplay(): Display
    getKeyboard(): Device | null
    getPointer(): Device | null
    getSlaves(capabilities: SeatCapabilities): Device[]
    grab(window: Window, capabilities: SeatCapabilities, ownerEvents: boolean, cursor?: Cursor | null, event?: Event | null, prepareFunc?: SeatGrabPrepareFunc | null): GrabStatus
    ungrab(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gdk-3.0.Gdk.Seat */
    connect(sigName: "device-added", callback: ((device: Device) => void)): number
    on(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-added", device: Device): void
    connect(sigName: "device-removed", callback: ((device: Device) => void)): number
    on(sigName: "device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-removed", device: Device): void
    connect(sigName: "tool-added", callback: ((tool: DeviceTool) => void)): number
    on(sigName: "tool-added", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tool-added", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tool-added", callback: (tool: DeviceTool) => void): NodeJS.EventEmitter
    emit(sigName: "tool-added", tool: DeviceTool): void
    connect(sigName: "tool-removed", callback: ((tool: DeviceTool) => void)): number
    on(sigName: "tool-removed", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tool-removed", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tool-removed", callback: (tool: DeviceTool) => void): NodeJS.EventEmitter
    emit(sigName: "tool-removed", tool: DeviceTool): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Seat_ConstructProps)
    _init (config?: Seat_ConstructProps): void
    static $gtype: GObject.Type
}
interface Visual_ConstructProps extends GObject.Object_ConstructProps {
}
class Visual {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Visual */
    getBitsPerRgb(): number
    getBluePixelDetails(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    getByteOrder(): ByteOrder
    getColormapSize(): number
    getDepth(): number
    getGreenPixelDetails(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    getRedPixelDetails(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    getScreen(): Screen
    getVisualType(): VisualType
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Visual_ConstructProps)
    _init (config?: Visual_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getBest(): Visual
    static getBestDepth(): number
    static getBestType(): VisualType
    static getBestWithBoth(depth: number, visualType: VisualType): Visual | null
    static getBestWithDepth(depth: number): Visual
    static getBestWithType(visualType: VisualType): Visual
    static getSystem(): Visual
    static $gtype: GObject.Type
}
interface Window_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Window */
    cursor?: Cursor
}
class Window {
    /* Properties of Gdk-3.0.Gdk.Window */
    cursor: Cursor
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Window */
    beep(): void
    beginDrawFrame(region: cairo.Region): DrawingContext
    beginMoveDrag(button: number, rootX: number, rootY: number, timestamp: number): void
    beginMoveDragForDevice(device: Device, button: number, rootX: number, rootY: number, timestamp: number): void
    beginPaintRect(rectangle: Rectangle): void
    beginPaintRegion(region: cairo.Region): void
    beginResizeDrag(edge: WindowEdge, button: number, rootX: number, rootY: number, timestamp: number): void
    beginResizeDragForDevice(edge: WindowEdge, device: Device, button: number, rootX: number, rootY: number, timestamp: number): void
    configureFinished(): void
    coordsFromParent(parentX: number, parentY: number): [ /* x */ number | null, /* y */ number | null ]
    coordsToParent(x: number, y: number): [ /* parentX */ number | null, /* parentY */ number | null ]
    createGlContext(): GLContext
    createSimilarImageSurface(format: cairo.Format, width: number, height: number, scale: number): cairo.Surface
    createSimilarSurface(content: cairo.Content, width: number, height: number): cairo.Surface
    deiconify(): void
    destroy(): void
    destroyNotify(): void
    enableSynchronizedConfigure(): void
    endDrawFrame(context: DrawingContext): void
    endPaint(): void
    ensureNative(): boolean
    flush(): void
    focus(timestamp: number): void
    freezeToplevelUpdatesLibgtkOnly(): void
    freezeUpdates(): void
    fullscreen(): void
    fullscreenOnMonitor(monitor: number): void
    geometryChanged(): void
    getAcceptFocus(): boolean
    getBackgroundPattern(): cairo.Pattern | null
    getChildren(): Window[]
    getChildrenWithUserData(userData?: object | null): Window[]
    getClipRegion(): cairo.Region
    getComposited(): boolean
    getCursor(): Cursor | null
    getDecorations(): [ /* returnType */ boolean, /* decorations */ WMDecoration ]
    getDeviceCursor(device: Device): Cursor | null
    getDeviceEvents(device: Device): EventMask
    getDevicePosition(device: Device): [ /* returnType */ Window | null, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    getDevicePositionDouble(device: Device): [ /* returnType */ Window | null, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    getDisplay(): Display
    getDragProtocol(): [ /* returnType */ DragProtocol, /* target */ Window | null ]
    getEffectiveParent(): Window
    getEffectiveToplevel(): Window
    getEventCompression(): boolean
    getEvents(): EventMask
    getFocusOnMap(): boolean
    getFrameClock(): FrameClock
    getFrameExtents(): /* rect */ Rectangle
    getFullscreenMode(): FullscreenMode
    getGeometry(): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getGroup(): Window
    getHeight(): number
    getModalHint(): boolean
    getOrigin(): [ /* returnType */ number, /* x */ number | null, /* y */ number | null ]
    getParent(): Window
    getPassThrough(): boolean
    getPointer(): [ /* returnType */ Window | null, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    getPosition(): [ /* x */ number | null, /* y */ number | null ]
    getRootCoords(x: number, y: number): [ /* rootX */ number, /* rootY */ number ]
    getRootOrigin(): [ /* x */ number, /* y */ number ]
    getScaleFactor(): number
    getScreen(): Screen
    getSourceEvents(source: InputSource): EventMask
    getState(): WindowState
    getSupportMultidevice(): boolean
    getToplevel(): Window
    getTypeHint(): WindowTypeHint
    getUpdateArea(): cairo.Region
    getUserData(): /* data */ object | null
    getVisibleRegion(): cairo.Region
    getVisual(): Visual
    getWidth(): number
    getWindowType(): WindowType
    hasNative(): boolean
    hide(): void
    iconify(): void
    inputShapeCombineRegion(shapeRegion: cairo.Region, offsetX: number, offsetY: number): void
    invalidateMaybeRecurse(region: cairo.Region, childFunc?: WindowChildFunc | null): void
    invalidateRect(rect: Rectangle | null, invalidateChildren: boolean): void
    invalidateRegion(region: cairo.Region, invalidateChildren: boolean): void
    isDestroyed(): boolean
    isInputOnly(): boolean
    isShaped(): boolean
    isViewable(): boolean
    isVisible(): boolean
    lower(): void
    markPaintFromClip(cr: cairo.Context): void
    maximize(): void
    mergeChildInputShapes(): void
    mergeChildShapes(): void
    move(x: number, y: number): void
    moveRegion(region: cairo.Region, dx: number, dy: number): void
    moveResize(x: number, y: number, width: number, height: number): void
    moveToRect(rect: Rectangle, rectAnchor: Gravity, windowAnchor: Gravity, anchorHints: AnchorHints, rectAnchorDx: number, rectAnchorDy: number): void
    peekChildren(): Window[]
    processUpdates(updateChildren: boolean): void
    raise(): void
    registerDnd(): void
    reparent(newParent: Window, x: number, y: number): void
    resize(width: number, height: number): void
    restack(sibling: Window | null, above: boolean): void
    scroll(dx: number, dy: number): void
    setAcceptFocus(acceptFocus: boolean): void
    setBackground(color: Color): void
    setBackgroundPattern(pattern?: cairo.Pattern | null): void
    setBackgroundRgba(rgba: RGBA): void
    setChildInputShapes(): void
    setChildShapes(): void
    setComposited(composited: boolean): void
    setCursor(cursor?: Cursor | null): void
    setDecorations(decorations: WMDecoration): void
    setDeviceCursor(device: Device, cursor: Cursor): void
    setDeviceEvents(device: Device, eventMask: EventMask): void
    setEventCompression(eventCompression: boolean): void
    setEvents(eventMask: EventMask): void
    setFocusOnMap(focusOnMap: boolean): void
    setFullscreenMode(mode: FullscreenMode): void
    setFunctions(functions: WMFunction): void
    setGeometryHints(geometry: Geometry, geomMask: WindowHints): void
    setGroup(leader?: Window | null): void
    setIconList(pixbufs: GdkPixbuf.Pixbuf[]): void
    setIconName(name?: string | null): void
    setKeepAbove(setting: boolean): void
    setKeepBelow(setting: boolean): void
    setModalHint(modal: boolean): void
    setOpacity(opacity: number): void
    setOpaqueRegion(region?: cairo.Region | null): void
    setOverrideRedirect(overrideRedirect: boolean): void
    setPassThrough(passThrough: boolean): void
    setRole(role: string): void
    setShadowWidth(left: number, right: number, top: number, bottom: number): void
    setSkipPagerHint(skipsPager: boolean): void
    setSkipTaskbarHint(skipsTaskbar: boolean): void
    setSourceEvents(source: InputSource, eventMask: EventMask): void
    setStartupId(startupId: string): void
    setStaticGravities(useStatic: boolean): boolean
    setSupportMultidevice(supportMultidevice: boolean): void
    setTitle(title: string): void
    setTransientFor(parent: Window): void
    setTypeHint(hint: WindowTypeHint): void
    setUrgencyHint(urgent: boolean): void
    setUserData(userData?: GObject.Object | null): void
    shapeCombineRegion(shapeRegion: cairo.Region | null, offsetX: number, offsetY: number): void
    show(): void
    showUnraised(): void
    showWindowMenu(event: Event): boolean
    stick(): void
    thawToplevelUpdatesLibgtkOnly(): void
    thawUpdates(): void
    unfullscreen(): void
    unmaximize(): void
    unstick(): void
    withdraw(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gdk-3.0.Gdk.Window */
    connect(sigName: "create-surface", callback: ((width: number, height: number) => cairo.Surface)): number
    on(sigName: "create-surface", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create-surface", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create-surface", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "create-surface", width: number, height: number): void
    connect(sigName: "from-embedder", callback: ((embedderX: number, embedderY: number) => void)): number
    on(sigName: "from-embedder", callback: (embedderX: number, embedderY: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "from-embedder", callback: (embedderX: number, embedderY: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "from-embedder", callback: (embedderX: number, embedderY: number) => void): NodeJS.EventEmitter
    emit(sigName: "from-embedder", embedderX: number, embedderY: number): void
    connect(sigName: "moved-to-rect", callback: ((flippedRect: object | null, finalRect: object | null, flippedX: boolean, flippedY: boolean) => void)): number
    on(sigName: "moved-to-rect", callback: (flippedRect: object | null, finalRect: object | null, flippedX: boolean, flippedY: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "moved-to-rect", callback: (flippedRect: object | null, finalRect: object | null, flippedX: boolean, flippedY: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "moved-to-rect", callback: (flippedRect: object | null, finalRect: object | null, flippedX: boolean, flippedY: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "moved-to-rect", flippedRect: object | null, finalRect: object | null, flippedX: boolean, flippedY: boolean): void
    connect(sigName: "pick-embedded-child", callback: ((x: number, y: number) => Window | null)): number
    on(sigName: "pick-embedded-child", callback: (x: number, y: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pick-embedded-child", callback: (x: number, y: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pick-embedded-child", callback: (x: number, y: number) => void): NodeJS.EventEmitter
    emit(sigName: "pick-embedded-child", x: number, y: number): void
    connect(sigName: "to-embedder", callback: ((offscreenX: number, offscreenY: number) => void)): number
    on(sigName: "to-embedder", callback: (offscreenX: number, offscreenY: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "to-embedder", callback: (offscreenX: number, offscreenY: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "to-embedder", callback: (offscreenX: number, offscreenY: number) => void): NodeJS.EventEmitter
    emit(sigName: "to-embedder", offscreenX: number, offscreenY: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(parent: Window | null, attributes: WindowAttr, attributesMask: WindowAttributesType): Window
    static atPointer(): [ /* returnType */ Window, /* winX */ number | null, /* winY */ number | null ]
    static constrainSize(geometry: Geometry, flags: WindowHints, width: number, height: number): [ /* newWidth */ number, /* newHeight */ number ]
    static processAllUpdates(): void
    static setDebugUpdates(setting: boolean): void
    static $gtype: GObject.Type
}
class Atom {
    /* Methods of Gdk-3.0.Gdk.Atom */
    name(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static intern(atomName: string, onlyIfExists: boolean): Atom
    static internStaticString(atomName: string): Atom
}
class Color {
    /* Fields of Gdk-3.0.Gdk.Color */
    readonly pixel: number
    readonly red: number
    readonly green: number
    readonly blue: number
    /* Methods of Gdk-3.0.Gdk.Color */
    copy(): Color
    equal(colorb: Color): boolean
    free(): void
    hash(): number
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static parse(spec: string): [ /* returnType */ boolean, /* color */ Color ]
}
abstract class DevicePadInterface {
    static name: string
}
abstract class DrawingContextClass {
    static name: string
}
class EventAny {
    /* Fields of Gdk-3.0.Gdk.EventAny */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    static name: string
}
class EventButton {
    /* Fields of Gdk-3.0.Gdk.EventButton */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly time: number
    readonly x: number
    readonly y: number
    readonly axes: number
    readonly state: ModifierType
    readonly button: number
    readonly device: Device
    readonly xRoot: number
    readonly yRoot: number
    static name: string
}
class EventConfigure {
    /* Fields of Gdk-3.0.Gdk.EventConfigure */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    static name: string
}
class EventCrossing {
    /* Fields of Gdk-3.0.Gdk.EventCrossing */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly subwindow: Window
    readonly time: number
    readonly x: number
    readonly y: number
    readonly xRoot: number
    readonly yRoot: number
    readonly mode: CrossingMode
    readonly detail: NotifyType
    readonly focus: boolean
    readonly state: ModifierType
    static name: string
}
class EventDND {
    /* Fields of Gdk-3.0.Gdk.EventDND */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly context: DragContext
    readonly time: number
    readonly xRoot: number
    readonly yRoot: number
    static name: string
}
class EventExpose {
    /* Fields of Gdk-3.0.Gdk.EventExpose */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly area: Rectangle
    readonly region: cairo.Region
    readonly count: number
    static name: string
}
class EventFocus {
    /* Fields of Gdk-3.0.Gdk.EventFocus */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly in_: number
    static name: string
}
class EventGrabBroken {
    /* Fields of Gdk-3.0.Gdk.EventGrabBroken */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly keyboard: boolean
    readonly implicit: boolean
    readonly grabWindow: Window
    static name: string
}
class EventKey {
    /* Fields of Gdk-3.0.Gdk.EventKey */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly time: number
    readonly state: ModifierType
    readonly keyval: number
    readonly length: number
    readonly string: string
    readonly hardwareKeycode: number
    readonly group: number
    readonly isModifier: number
    static name: string
}
class EventMotion {
    /* Fields of Gdk-3.0.Gdk.EventMotion */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly time: number
    readonly x: number
    readonly y: number
    readonly axes: number
    readonly state: ModifierType
    readonly isHint: number
    readonly device: Device
    readonly xRoot: number
    readonly yRoot: number
    static name: string
}
class EventOwnerChange {
    /* Fields of Gdk-3.0.Gdk.EventOwnerChange */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly owner: Window
    readonly reason: OwnerChange
    readonly selection: Atom
    readonly time: number
    readonly selectionTime: number
    static name: string
}
class EventPadAxis {
    /* Fields of Gdk-3.0.Gdk.EventPadAxis */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly time: number
    readonly group: number
    readonly index: number
    readonly mode: number
    readonly value: number
    static name: string
}
class EventPadButton {
    /* Fields of Gdk-3.0.Gdk.EventPadButton */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly time: number
    readonly group: number
    readonly button: number
    readonly mode: number
    static name: string
}
class EventPadGroupMode {
    /* Fields of Gdk-3.0.Gdk.EventPadGroupMode */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly time: number
    readonly group: number
    readonly mode: number
    static name: string
}
class EventProperty {
    /* Fields of Gdk-3.0.Gdk.EventProperty */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly atom: Atom
    readonly time: number
    readonly state: PropertyState
    static name: string
}
class EventProximity {
    /* Fields of Gdk-3.0.Gdk.EventProximity */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly time: number
    readonly device: Device
    static name: string
}
class EventScroll {
    /* Fields of Gdk-3.0.Gdk.EventScroll */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly time: number
    readonly x: number
    readonly y: number
    readonly state: ModifierType
    readonly direction: ScrollDirection
    readonly device: Device
    readonly xRoot: number
    readonly yRoot: number
    readonly deltaX: number
    readonly deltaY: number
    readonly isStop: number
    static name: string
}
class EventSelection {
    /* Fields of Gdk-3.0.Gdk.EventSelection */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly selection: Atom
    readonly target: Atom
    readonly property: Atom
    readonly time: number
    readonly requestor: Window
    static name: string
}
class EventSequence {
    static name: string
}
class EventSetting {
    /* Fields of Gdk-3.0.Gdk.EventSetting */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly action: SettingAction
    readonly name: string
    static name: string
}
class EventTouch {
    /* Fields of Gdk-3.0.Gdk.EventTouch */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly time: number
    readonly x: number
    readonly y: number
    readonly axes: number
    readonly state: ModifierType
    readonly sequence: EventSequence
    readonly emulatingPointer: boolean
    readonly device: Device
    readonly xRoot: number
    readonly yRoot: number
    static name: string
}
class EventTouchpadPinch {
    /* Fields of Gdk-3.0.Gdk.EventTouchpadPinch */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly phase: number
    readonly nFingers: number
    readonly time: number
    readonly x: number
    readonly y: number
    readonly dx: number
    readonly dy: number
    readonly angleDelta: number
    readonly scale: number
    readonly xRoot: number
    readonly yRoot: number
    readonly state: ModifierType
    static name: string
}
class EventTouchpadSwipe {
    /* Fields of Gdk-3.0.Gdk.EventTouchpadSwipe */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly phase: number
    readonly nFingers: number
    readonly time: number
    readonly x: number
    readonly y: number
    readonly dx: number
    readonly dy: number
    readonly xRoot: number
    readonly yRoot: number
    readonly state: ModifierType
    static name: string
}
class EventVisibility {
    /* Fields of Gdk-3.0.Gdk.EventVisibility */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly state: VisibilityState
    static name: string
}
class EventWindowState {
    /* Fields of Gdk-3.0.Gdk.EventWindowState */
    readonly type: EventType
    readonly window: Window
    readonly sendEvent: number
    readonly changedMask: WindowState
    readonly newWindowState: WindowState
    static name: string
}
abstract class FrameClockClass {
    static name: string
}
class FrameClockPrivate {
    static name: string
}
class FrameTimings {
    /* Methods of Gdk-3.0.Gdk.FrameTimings */
    getComplete(): boolean
    getFrameCounter(): number
    getFrameTime(): number
    getPredictedPresentationTime(): number
    getPresentationTime(): number
    getRefreshInterval(): number
    ref(): FrameTimings
    unref(): void
    static name: string
}
class Geometry {
    /* Fields of Gdk-3.0.Gdk.Geometry */
    readonly minWidth: number
    readonly minHeight: number
    readonly maxWidth: number
    readonly maxHeight: number
    readonly baseWidth: number
    readonly baseHeight: number
    readonly widthInc: number
    readonly heightInc: number
    readonly minAspect: number
    readonly maxAspect: number
    readonly winGravity: Gravity
    static name: string
}
class KeymapKey {
    /* Fields of Gdk-3.0.Gdk.KeymapKey */
    readonly keycode: number
    readonly group: number
    readonly level: number
    static name: string
}
abstract class MonitorClass {
    static name: string
}
class Point {
    /* Fields of Gdk-3.0.Gdk.Point */
    readonly x: number
    readonly y: number
    static name: string
}
class RGBA {
    /* Fields of Gdk-3.0.Gdk.RGBA */
    readonly red: number
    readonly green: number
    readonly blue: number
    readonly alpha: number
    /* Methods of Gdk-3.0.Gdk.RGBA */
    copy(): RGBA
    equal(p2: RGBA): boolean
    free(): void
    hash(): number
    parse(spec: string): boolean
    toString(): string
    static name: string
}
class Rectangle {
    /* Fields of Gdk-3.0.Gdk.Rectangle */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    /* Methods of Gdk-3.0.Gdk.Rectangle */
    equal(rect2: Rectangle): boolean
    intersect(src2: Rectangle): [ /* returnType */ boolean, /* dest */ Rectangle | null ]
    union(src2: Rectangle): /* dest */ Rectangle
    static name: string
}
class TimeCoord {
    /* Fields of Gdk-3.0.Gdk.TimeCoord */
    readonly time: number
    readonly axes: number[]
    static name: string
}
class WindowAttr {
    /* Fields of Gdk-3.0.Gdk.WindowAttr */
    readonly title: string
    readonly eventMask: number
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    readonly wclass: WindowWindowClass
    readonly visual: Visual
    readonly windowType: WindowType
    readonly cursor: Cursor
    readonly wmclassName: string
    readonly wmclassClass: string
    readonly overrideRedirect: boolean
    readonly typeHint: WindowTypeHint
    static name: string
}
abstract class WindowClass {
    /* Fields of Gdk-3.0.Gdk.WindowClass */
    readonly parentClass: GObject.ObjectClass
    readonly toEmbedder: (window: Window, offscreenX: number, offscreenY: number, embedderX: number, embedderY: number) => void
    readonly fromEmbedder: (window: Window, embedderX: number, embedderY: number, offscreenX: number, offscreenY: number) => void
    readonly createSurface: (window: Window, width: number, height: number) => cairo.Surface
    static name: string
}
class WindowRedirect {
    static name: string
}
class Event {
    /* Methods of Gdk-3.0.Gdk.Event */
    getAngle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    getCenter(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    getDistance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    copy(): Event
    free(): void
    getAxis(axisUse: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    getButton(): [ /* returnType */ boolean, /* button */ number ]
    getClickCount(): [ /* returnType */ boolean, /* clickCount */ number ]
    getCoords(): [ /* returnType */ boolean, /* xWin */ number | null, /* yWin */ number | null ]
    getDevice(): Device | null
    getDeviceTool(): DeviceTool
    getEventSequence(): EventSequence
    getEventType(): EventType
    getKeycode(): [ /* returnType */ boolean, /* keycode */ number ]
    getKeyval(): [ /* returnType */ boolean, /* keyval */ number ]
    getPointerEmulated(): boolean
    getRootCoords(): [ /* returnType */ boolean, /* xRoot */ number | null, /* yRoot */ number | null ]
    getScancode(): number
    getScreen(): Screen
    getScrollDeltas(): [ /* returnType */ boolean, /* deltaX */ number, /* deltaY */ number ]
    getScrollDirection(): [ /* returnType */ boolean, /* direction */ ScrollDirection ]
    getSeat(): Seat
    getSourceDevice(): Device | null
    getState(): [ /* returnType */ boolean, /* state */ ModifierType ]
    getTime(): number
    getWindow(): Window
    isScrollStopEvent(): boolean
    put(): void
    setDevice(device: Device): void
    setDeviceTool(tool?: DeviceTool | null): void
    setScreen(screen: Screen): void
    setSourceDevice(device: Device): void
    triggersContextMenu(): boolean
    static name: string
    static new(type: EventType): Event
    constructor(type: EventType)
    /* Static methods and pseudo-constructors */
    static new(type: EventType): Event
    static get(): Event | null
    static handlerSet(func: EventFunc): void
    static peek(): Event | null
    static requestMotions(event: EventMotion): void
}
    type XEvent = void
}
export default Gdk;