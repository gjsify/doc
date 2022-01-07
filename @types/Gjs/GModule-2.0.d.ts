/**
 * GModule-2.0
 */

import type * as Gjs from './Gjs';
import type GLib from './GLib-2.0';
import type GObject from './GObject-2.0';

export namespace GModule {

enum ModuleError {
    FAILED,
    CHECK_FAILED,
}
enum ModuleFlags {
    LAZY,
    LOCAL,
    MASK,
}
function module_build_path(directory: string | null, module_name: string): string
function module_error(): string
function module_error_quark(): GLib.Quark
function module_supported(): boolean
interface ModuleCheckInit {
    (module: Module): string
}
interface ModuleUnload {
    (module: Module): void
}
class Module {
    /* Methods of GModule-2.0.GModule.Module */
    close(): boolean
    make_resident(): void
    name(): string
    symbol(symbol_name: string): [ /* returnType */ boolean, /* symbol */ object | null ]
    static name: string
    /* Static methods and pseudo-constructors */
    static build_path(directory: string | null, module_name: string): string
    static error(): string
    static error_quark(): GLib.Quark
    static supported(): boolean
}
}
export default GModule;