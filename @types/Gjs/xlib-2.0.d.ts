/**
 * xlib-2.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';

export namespace xlib {

function open_display(): void
class Display {
    static name: string
}
class Screen {
    static name: string
}
class Visual {
    static name: string
}
class XConfigureEvent {
    static name: string
}
class XImage {
    static name: string
}
class XFontStruct {
    static name: string
}
class XTrapezoid {
    static name: string
}
class XVisualInfo {
    static name: string
}
class XWindowAttributes {
    static name: string
}
class XEvent {
    static name: string
}
type Atom = number
type Colormap = number
type Cursor = number
type Drawable = number
type GC = object
type KeyCode = number
type KeySym = number
type Picture = number
type Time = number
type VisualID = number
type Window = number
type XID = number
type Pixmap = number
}
export default xlib;