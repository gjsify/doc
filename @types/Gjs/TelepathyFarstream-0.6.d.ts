/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * TelepathyFarstream-0.6
 */

import type * as Gjs from './Gjs';
import type TelepathyGLib from './TelepathyGLib-0.12';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gst from './Gst-1.0';
import type GModule from './GModule-2.0';
import type Farstream from './Farstream-0.2';

export namespace TelepathyFarstream {

interface Channel_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of TelepathyFarstream-0.6.TelepathyFarstream.Channel */
    channel?: TelepathyGLib.Channel
}
class Channel {
    /* Properties of TelepathyFarstream-0.6.TelepathyFarstream.Channel */
    readonly fs_conferences: object[]
    readonly object_path: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of TelepathyFarstream-0.6.TelepathyFarstream.Channel */
    bus_message(message: Gst.Message): boolean
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Virtual methods of TelepathyFarstream-0.6.TelepathyFarstream.Channel */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TelepathyFarstream-0.6.TelepathyFarstream.Channel */
    connect(sigName: "closed", callback: (($obj: Channel) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Channel) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "content-added", callback: (($obj: Channel, content: Content) => void)): number
    connect_after(sigName: "content-added", callback: (($obj: Channel, content: Content) => void)): number
    emit(sigName: "content-added", content: Content): void
    connect(sigName: "content-removed", callback: (($obj: Channel, content: Content) => void)): number
    connect_after(sigName: "content-removed", callback: (($obj: Channel, content: Content) => void)): number
    emit(sigName: "content-removed", content: Content): void
    connect(sigName: "fs-conference-added", callback: (($obj: Channel, conf: Farstream.Conference) => void)): number
    connect_after(sigName: "fs-conference-added", callback: (($obj: Channel, conf: Farstream.Conference) => void)): number
    emit(sigName: "fs-conference-added", conf: Farstream.Conference): void
    connect(sigName: "fs-conference-removed", callback: (($obj: Channel, conf: Farstream.Conference) => void)): number
    connect_after(sigName: "fs-conference-removed", callback: (($obj: Channel, conf: Farstream.Conference) => void)): number
    emit(sigName: "fs-conference-removed", conf: Farstream.Conference): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::fs-conferences", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fs-conferences", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-path", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Channel_ConstructProps)
    _init (config?: Channel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(object: GObject.Object, result: Gio.AsyncResult): Channel
    static new_async(channel_proxy: TelepathyGLib.Channel, callback: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
interface Content_ConstructProps extends GObject.Object_ConstructProps {
}
class Content {
    /* Properties of TelepathyFarstream-0.6.TelepathyFarstream.Content */
    readonly fs_conference: Farstream.Conference
    readonly fs_session: Farstream.Session
    readonly media_type: Farstream.MediaType
    readonly object_path: string
    readonly sink_pad: Gst.Pad
    readonly tf_channel: Channel
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of TelepathyFarstream-0.6.TelepathyFarstream.Content */
    error(message: string): void
    iterate_src_pads(handles: number, handle_count: number): Gst.Iterator
    receiving_failed(handles: number, handle_count: number, message: string): void
    sending_failed(message: string): void
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
    /* Signals of TelepathyFarstream-0.6.TelepathyFarstream.Content */
    connect(sigName: "restart-source", callback: (($obj: Content) => void)): number
    connect_after(sigName: "restart-source", callback: (($obj: Content) => void)): number
    emit(sigName: "restart-source"): void
    connect(sigName: "src-pad-added", callback: (($obj: Content, handle: number, stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec) => void)): number
    connect_after(sigName: "src-pad-added", callback: (($obj: Content, handle: number, stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec) => void)): number
    emit(sigName: "src-pad-added", handle: number, stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec): void
    connect(sigName: "start-receiving", callback: (($obj: Content, handles: object, handle_count: number) => boolean)): number
    connect_after(sigName: "start-receiving", callback: (($obj: Content, handles: object, handle_count: number) => boolean)): number
    emit(sigName: "start-receiving", handles: object, handle_count: number): void
    connect(sigName: "start-sending", callback: (($obj: Content) => boolean)): number
    connect_after(sigName: "start-sending", callback: (($obj: Content) => boolean)): number
    emit(sigName: "start-sending"): void
    connect(sigName: "stop-receiving", callback: (($obj: Content, handles: object, handle_count: number) => void)): number
    connect_after(sigName: "stop-receiving", callback: (($obj: Content, handles: object, handle_count: number) => void)): number
    emit(sigName: "stop-receiving", handles: object, handle_count: number): void
    connect(sigName: "stop-sending", callback: (($obj: Content) => void)): number
    connect_after(sigName: "stop-sending", callback: (($obj: Content) => void)): number
    emit(sigName: "stop-sending"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::fs-conference", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fs-conference", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fs-session", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fs-session", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-type", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-type", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::object-path", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sink-pad", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink-pad", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tf-channel", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tf-channel", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Content_ConstructProps)
    _init (config?: Content_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ChannelClass {
    static name: string
}
class ChannelPrivate {
    static name: string
}
abstract class ContentClass {
    static name: string
}
class ContentPrivate {
    static name: string
}
}
export default TelepathyFarstream;