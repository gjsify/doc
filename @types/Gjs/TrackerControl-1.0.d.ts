/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * TrackerControl-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace TrackerControl {

enum MinerManagerError {
    NOT_AVAILABLE,
    NOENT,
}
interface MinerManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of TrackerControl-1.0.TrackerControl.MinerManager */
    auto_start?: boolean
}
class MinerManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of TrackerControl-1.0.TrackerControl.MinerManager */
    get_available(): string[] | null
    get_description(miner: string): string
    get_display_name(miner: string): string
    get_running(): string[] | null
    get_status(miner: string): [ /* returnType */ boolean, /* status */ string | null, /* progress */ number | null, /* remaining_time */ number | null ]
    ignore_next_update(miner: string, urls: string): boolean
    index_file(file: Gio.File): boolean
    index_file_async(file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    index_file_finish(result: Gio.AsyncResult): boolean
    index_file_for_process(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    index_file_for_process_async(file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    index_file_for_process_finish(result: Gio.AsyncResult): boolean
    is_active(miner: string): boolean
    is_paused(miner: string): [ /* returnType */ boolean, /* applications */ string[] | null, /* reasons */ string[] | null ]
    pause(miner: string, reason: string): [ /* returnType */ boolean, /* cookie */ number | null ]
    pause_for_process(miner: string, reason: string): [ /* returnType */ boolean, /* cookie */ number | null ]
    reindex_by_mimetype(mimetypes: string[]): boolean
    resume(miner: string, cookie: number): boolean
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
    /* Virtual methods of TrackerControl-1.0.TrackerControl.MinerManager */
    vfunc_miner_activated(miner_name: string): void
    vfunc_miner_deactivated(miner_name: string): void
    vfunc_miner_paused(miner_name: string): void
    vfunc_miner_progress(miner_name: string, status: string, progress: number): void
    vfunc_miner_resumed(miner_name: string): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerControl-1.0.TrackerControl.MinerManager */
    connect(sigName: "miner-activated", callback: (($obj: MinerManager, miner: string) => void)): number
    connect_after(sigName: "miner-activated", callback: (($obj: MinerManager, miner: string) => void)): number
    emit(sigName: "miner-activated", miner: string): void
    connect(sigName: "miner-deactivated", callback: (($obj: MinerManager, miner: string) => void)): number
    connect_after(sigName: "miner-deactivated", callback: (($obj: MinerManager, miner: string) => void)): number
    emit(sigName: "miner-deactivated", miner: string): void
    connect(sigName: "miner-paused", callback: (($obj: MinerManager, miner: string) => void)): number
    connect_after(sigName: "miner-paused", callback: (($obj: MinerManager, miner: string) => void)): number
    emit(sigName: "miner-paused", miner: string): void
    connect(sigName: "miner-progress", callback: (($obj: MinerManager, miner: string, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "miner-progress", callback: (($obj: MinerManager, miner: string, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "miner-progress", miner: string, status: string, progress: number, remaining_time: number): void
    connect(sigName: "miner-resumed", callback: (($obj: MinerManager, miner: string) => void)): number
    connect_after(sigName: "miner-resumed", callback: (($obj: MinerManager, miner: string) => void)): number
    emit(sigName: "miner-resumed", miner: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MinerManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MinerManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MinerManager_ConstructProps)
    _init (config?: MinerManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MinerManager
    static new_full(auto_start: boolean): MinerManager
    static error_quark(): GLib.Quark
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class MinerManagerClass {
    /* Fields of TrackerControl-1.0.TrackerControl.MinerManagerClass */
    readonly parent_class: GObject.ObjectClass
    readonly miner_progress: (manager: MinerManager, miner_name: string, status: string, progress: number) => void
    readonly miner_paused: (manager: MinerManager, miner_name: string) => void
    readonly miner_resumed: (manager: MinerManager, miner_name: string) => void
    readonly miner_activated: (manager: MinerManager, miner_name: string) => void
    readonly miner_deactivated: (manager: MinerManager, miner_name: string) => void
    static name: string
}
}
export default TrackerControl;