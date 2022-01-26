/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GModule-2.0
 */

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
function moduleBuildPath(directory: string | null, moduleName: string): string
function moduleError(): string
function moduleErrorQuark(): GLib.Quark
function moduleSupported(): boolean
interface ModuleCheckInit {
    (module: Module): string
}
interface ModuleUnload {
    (module: Module): void
}
class Module {
    /* Methods of GModule-2.0.GModule.Module */
    close(): boolean
    makeResident(): void
    name(): string
    symbol(symbolName: string): [ /* returnType */ boolean, /* symbol */ object | null ]
    static name: string
    /* Static methods and pseudo-constructors */
    static buildPath(directory: string | null, moduleName: string): string
    static error(): string
    static errorQuark(): GLib.Quark
    static supported(): boolean
}
}
export default GModule;