/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUPnPDLNA-2.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GUPnPDLNA {

enum ValueState {
    SET,
    UNSET,
    UNSUPPORTED,
}
interface AudioInformation_ConstructProps extends GObject.Object_ConstructProps {
}
class AudioInformation {
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
    connect(sigName: "notify", callback: (($obj: AudioInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioInformation_ConstructProps)
    _init (config?: AudioInformation_ConstructProps): void
    static $gtype: GObject.Type
}
interface ContainerInformation_ConstructProps extends GObject.Object_ConstructProps {
}
class ContainerInformation {
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
    connect(sigName: "notify", callback: (($obj: ContainerInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContainerInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContainerInformation_ConstructProps)
    _init (config?: ContainerInformation_ConstructProps): void
    static $gtype: GObject.Type
}
interface ImageInformation_ConstructProps extends GObject.Object_ConstructProps {
}
class ImageInformation {
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
    connect(sigName: "notify", callback: (($obj: ImageInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ImageInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ImageInformation_ConstructProps)
    _init (config?: ImageInformation_ConstructProps): void
    static $gtype: GObject.Type
}
interface Information_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnPDLNA-2.0.GUPnPDLNA.Information */
    uri?: string
}
class Information {
    /* Properties of GUPnPDLNA-2.0.GUPnPDLNA.Information */
    readonly audio_information: AudioInformation
    readonly container_information: ContainerInformation
    readonly image_information: ImageInformation
    readonly video_information: VideoInformation
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.Information */
    get_audio_information(): AudioInformation
    get_container_information(): ContainerInformation
    get_image_information(): ImageInformation
    get_profile_name(): string
    get_uri(): string
    get_video_information(): VideoInformation
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
    /* Virtual methods of GUPnPDLNA-2.0.GUPnPDLNA.Information */
    vfunc_get_audio_information(): AudioInformation
    vfunc_get_container_information(): ContainerInformation
    vfunc_get_image_information(): ImageInformation
    vfunc_get_profile_name(): string
    vfunc_get_video_information(): VideoInformation
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::audio-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::container-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::video-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-information", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Information_ConstructProps)
    _init (config?: Information_ConstructProps): void
    static $gtype: GObject.Type
}
interface Profile_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnPDLNA-2.0.GUPnPDLNA.Profile */
    audio_restrictions?: object
    container_restrictions?: object
    extended?: boolean
    image_restrictions?: object
    mime?: string
    name?: string
    video_restrictions?: object
}
class Profile {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.Profile */
    get_audio_restrictions(): Restriction[]
    get_container_restrictions(): Restriction[]
    get_extended(): boolean
    get_image_restrictions(): Restriction[]
    get_mime(): string
    get_name(): string
    get_video_restrictions(): Restriction[]
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
    connect(sigName: "notify", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Profile_ConstructProps)
    _init (config?: Profile_ConstructProps): void
    static $gtype: GObject.Type
}
interface ProfileGuesser_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser */
    extended_mode?: boolean
    relaxed_mode?: boolean
}
class ProfileGuesser {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser */
    get_extended_mode(): boolean
    get_profile(name: string): Profile
    get_relaxed_mode(): boolean
    guess_profile_async(uri: string, timeout_in_ms: number): boolean
    guess_profile_from_info(info: Information): Profile
    guess_profile_sync(uri: string, timeout_in_ms: number): [ /* returnType */ Profile, /* dlna_info */ Information | null ]
    list_profiles(): Profile[]
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
    /* Signals of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser */
    connect(sigName: "done", callback: (($obj: ProfileGuesser, info: Information, dlna?: Profile | null, error?: GLib.Error | null) => void)): number
    connect_after(sigName: "done", callback: (($obj: ProfileGuesser, info: Information, dlna?: Profile | null, error?: GLib.Error | null) => void)): number
    emit(sigName: "done", info: Information, dlna?: Profile | null, error?: GLib.Error | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProfileGuesser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProfileGuesser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProfileGuesser_ConstructProps)
    _init (config?: ProfileGuesser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(relaxed_mode: boolean, extended_mode: boolean): ProfileGuesser
    static cleanup(): void
    static $gtype: GObject.Type
}
interface VideoInformation_ConstructProps extends GObject.Object_ConstructProps {
}
class VideoInformation {
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
    connect(sigName: "notify", callback: (($obj: VideoInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoInformation_ConstructProps)
    _init (config?: VideoInformation_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AudioInformationClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformationClass */
    readonly parent_class: GObject.ObjectClass
    readonly _reserved: object[]
    static name: string
}
class BoolValue {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.BoolValue */
    readonly value: boolean
    readonly state: ValueState
    static name: string
}
abstract class ContainerInformationClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformationClass */
    readonly parent_class: GObject.ObjectClass
    readonly _reserved: object[]
    static name: string
}
class Fraction {
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.Fraction */
    copy(): Fraction
    free(): void
    get_denominator(): number
    get_numerator(): number
    static name: string
}
class FractionRange {
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.FractionRange */
    copy(): FractionRange
    free(): void
    get_max(): Fraction
    get_min(): Fraction
    static name: string
}
class FractionValue {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.FractionValue */
    readonly numerator: number
    readonly denominator: number
    readonly state: ValueState
    static name: string
}
abstract class ImageInformationClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformationClass */
    readonly parent_class: GObject.ObjectClass
    readonly _reserved: object[]
    static name: string
}
abstract class InformationClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.InformationClass */
    readonly parent_class: GObject.ObjectClass
    readonly get_audio_information: (info: Information) => AudioInformation
    readonly get_container_information: (info: Information) => ContainerInformation
    readonly get_image_information: (info: Information) => ImageInformation
    readonly get_video_information: (info: Information) => VideoInformation
    readonly get_profile_name: (info: Information) => string
    readonly _reserved: object[]
    static name: string
}
class IntRange {
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.IntRange */
    copy(): IntRange
    free(): void
    get_max(): number
    get_min(): number
    static name: string
}
class IntValue {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.IntValue */
    readonly value: number
    readonly state: ValueState
    static name: string
}
abstract class ProfileClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.ProfileClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ProfileGuesserClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesserClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class Restriction {
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.Restriction */
    copy(): Restriction
    free(): void
    get_entries(): GLib.HashTable
    get_mime(): string
    is_empty(): boolean
    to_string(): string
    static name: string
}
class StringValue {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.StringValue */
    readonly value: string
    readonly state: ValueState
    static name: string
}
class ValueList {
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.ValueList */
    copy(): ValueList
    free(): void
    get_g_values(): any[]
    is_empty(): boolean
    to_string(): string
    static name: string
}
abstract class VideoInformationClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformationClass */
    readonly parent_class: GObject.ObjectClass
    readonly _reserved: object[]
    static name: string
}
}
export default GUPnPDLNA;