/**
 * Folks-0.6
 */

import type * as Gjs from './Gjs';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as Gee from './Gee-0.8';

export enum Gender {
    UNSPECIFIED,
    MALE,
    FEMALE,
}
export enum TrustLevel {
    NONE,
    PERSONAS,
}
export enum PersonaStoreTrust {
    NONE,
    PARTIAL,
    FULL,
}
export enum PersonaDetail {
    INVALID,
    ALIAS,
    AVATAR,
    BIRTHDAY,
    EMAIL_ADDRESSES,
    FULL_NAME,
    GENDER,
    IM_ADDRESSES,
    IS_FAVOURITE,
    LOCAL_IDS,
    LOCATION,
    NICKNAME,
    NOTES,
    PHONE_NUMBERS,
    POSTAL_ADDRESSES,
    ROLES,
    STRUCTURED_NAME,
    URLS,
    WEB_SERVICE_ADDRESSES,
    GROUPS,
    IM_INTERACTION_COUNT,
    LAST_IM_INTERACTION_DATETIME,
    CALL_INTERACTION_COUNT,
    LAST_CALL_INTERACTION_DATETIME,
    ANTI_LINKS,
    EXTENDED_INFO,
}
export enum MatchResult {
    NONE,
    VERY_LOW,
    LOW,
    MEDIUM,
    HIGH,
    VERY_HIGH,
    MIN,
    MAX,
}
export enum PresenceType {
    UNSET,
    OFFLINE,
    AVAILABLE,
    AWAY,
    EXTENDED_AWAY,
    HIDDEN,
    BUSY,
    UNKNOWN,
    ERROR,
}
export enum MaybeBool {
    UNSET,
    FALSE,
    TRUE,
}
export enum ImDetailsError {
    INVALID_IM_ADDRESS,
}
export enum IndividualAggregatorError {
    ADD_FAILED,
    NO_WRITEABLE_STORE,
    STORE_OFFLINE,
    PROPERTY_NOT_WRITEABLE,
    NO_PRIMARY_STORE,
}
export enum PersonaStoreError {
    INVALID_ARGUMENT,
    CREATE_FAILED,
    UNSUPPORTED_ON_USER,
    STORE_OFFLINE,
    READ_ONLY,
    PERMISSION_DENIED,
    REMOVE_FAILED,
    UNSUPPORTED_ON_NON_USER,
}
export enum PropertyError {
    NOT_WRITEABLE,
    INVALID_VALUE,
    UNKNOWN_ERROR,
    UNAVAILABLE,
}
export enum GroupDetailsChangeReason {
    NONE,
    OFFLINE,
    KICKED,
    BUSY,
    INVITED,
    BANNED,
    ERROR,
    INVALID_MEMBER,
    NO_ANSWER,
    RENAMED,
    PERMISSION_DENIED,
    SEPARATED,
}
export interface AliasDetails_ConstructProps extends GObject.Object_ConstructProps {
    alias?: string
}
export class AliasDetails {
    /* Properties of Folks.AliasDetails */
    alias: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.AliasDetails */
    change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback | null): void
    change_alias_finish(_res_: Gio.AsyncResult): void
    get_alias(): string
    set_alias(value: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.AliasDetails */
    vfunc_change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_alias_finish(_res_: Gio.AsyncResult): void
    vfunc_get_alias(): string
    vfunc_set_alias(value: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AliasDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AliasDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alias", callback: (($obj: AliasDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alias", callback: (($obj: AliasDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AliasDetails_ConstructProps)
    _init (config?: AliasDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AntiLinkable_ConstructProps extends Persona_ConstructProps {
    anti_links?: Gee.Set
}
export class AntiLinkable {
    /* Properties of Folks.AntiLinkable */
    anti_links: Gee.Set
    /* Properties of Folks.Persona */
    individual: Individual
    readonly linkable_properties: string[]
    readonly writeable_properties: string[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.AntiLinkable */
    change_anti_links(anti_links: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_anti_links_finish(_res_: Gio.AsyncResult): void
    has_anti_link_with_persona(other_persona: Persona): boolean
    add_anti_links(other_personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    add_anti_links_finish(_res_: Gio.AsyncResult): void
    remove_anti_links(other_personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_anti_links_finish(_res_: Gio.AsyncResult): void
    add_global_anti_link(_callback_?: Gio.AsyncReadyCallback | null): void
    add_global_anti_link_finish(_res_: Gio.AsyncResult): void
    remove_global_anti_link(_callback_?: Gio.AsyncReadyCallback | null): void
    remove_global_anti_link_finish(_res_: Gio.AsyncResult): void
    has_global_anti_link(): boolean
    get_anti_links(): Gee.Set
    set_anti_links(value: Gee.Set): void
    /* Methods of Folks.Persona */
    linkable_property_to_links(prop_name: string, callback: any): void
    get_iid(): string
    get_uid(): string
    get_display_id(): string
    get_is_user(): boolean
    get_store(): PersonaStore
    get_individual(): Individual | null
    get_linkable_properties(): string[]
    get_writeable_properties(): string[]
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.AntiLinkable */
    vfunc_change_anti_links(anti_links: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_anti_links_finish(_res_: Gio.AsyncResult): void
    vfunc_get_anti_links(): Gee.Set
    vfunc_set_anti_links(value: Gee.Set): void
    /* Virtual methods of Folks.Persona */
    vfunc_linkable_property_to_links(prop_name: string, callback: any): void
    vfunc_get_linkable_properties(): string[]
    vfunc_get_writeable_properties(): string[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::anti-links", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anti-links", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::individual", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individual", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::linkable-properties", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linkable-properties", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writeable-properties", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writeable-properties", callback: (($obj: AntiLinkable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AntiLinkable_ConstructProps)
    _init (config?: AntiLinkable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AvatarDetails_ConstructProps extends GObject.Object_ConstructProps {
    avatar?: Gio.LoadableIcon
}
export class AvatarDetails {
    /* Properties of Folks.AvatarDetails */
    avatar: Gio.LoadableIcon
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.AvatarDetails */
    change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_avatar_finish(_res_: Gio.AsyncResult): void
    get_avatar(): Gio.LoadableIcon | null
    set_avatar(value?: Gio.LoadableIcon | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.AvatarDetails */
    vfunc_change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_avatar_finish(_res_: Gio.AsyncResult): void
    vfunc_get_avatar(): Gio.LoadableIcon | null
    vfunc_set_avatar(value?: Gio.LoadableIcon | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AvatarDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AvatarDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::avatar", callback: (($obj: AvatarDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: AvatarDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AvatarDetails_ConstructProps)
    _init (config?: AvatarDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BirthdayDetails_ConstructProps extends GObject.Object_ConstructProps {
    birthday?: GLib.DateTime
    calendar_event_id?: string
}
export class BirthdayDetails {
    /* Properties of Folks.BirthdayDetails */
    birthday: GLib.DateTime
    calendar_event_id: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.BirthdayDetails */
    change_birthday(birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_birthday_finish(_res_: Gio.AsyncResult): void
    change_calendar_event_id(event_id?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_calendar_event_id_finish(_res_: Gio.AsyncResult): void
    get_birthday(): GLib.DateTime | null
    set_birthday(value?: GLib.DateTime | null): void
    get_calendar_event_id(): string | null
    set_calendar_event_id(value?: string | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.BirthdayDetails */
    vfunc_change_birthday(birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_birthday_finish(_res_: Gio.AsyncResult): void
    vfunc_change_calendar_event_id(event_id?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_calendar_event_id_finish(_res_: Gio.AsyncResult): void
    vfunc_get_birthday(): GLib.DateTime | null
    vfunc_set_birthday(value?: GLib.DateTime | null): void
    vfunc_get_calendar_event_id(): string | null
    vfunc_set_calendar_event_id(value?: string | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BirthdayDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BirthdayDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::birthday", callback: (($obj: BirthdayDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birthday", callback: (($obj: BirthdayDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::calendar-event-id", callback: (($obj: BirthdayDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-event-id", callback: (($obj: BirthdayDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BirthdayDetails_ConstructProps)
    _init (config?: BirthdayDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface EmailDetails_ConstructProps extends GObject.Object_ConstructProps {
    email_addresses?: Gee.Set
}
export class EmailDetails {
    /* Properties of Folks.EmailDetails */
    email_addresses: Gee.Set
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.EmailDetails */
    change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_email_addresses_finish(_res_: Gio.AsyncResult): void
    get_email_addresses(): Gee.Set
    set_email_addresses(value: Gee.Set): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.EmailDetails */
    vfunc_change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_email_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_email_addresses(): Gee.Set
    vfunc_set_email_addresses(value: Gee.Set): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EmailDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EmailDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::email-addresses", callback: (($obj: EmailDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-addresses", callback: (($obj: EmailDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EmailDetails_ConstructProps)
    _init (config?: EmailDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ExtendedInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class ExtendedInfo {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.ExtendedInfo */
    get_extended_field(name: string): ExtendedFieldDetails | null
    change_extended_field(name: string, value: ExtendedFieldDetails, _callback_?: Gio.AsyncReadyCallback | null): void
    change_extended_field_finish(_res_: Gio.AsyncResult): void
    remove_extended_field(name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_extended_field_finish(_res_: Gio.AsyncResult): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.ExtendedInfo */
    vfunc_get_extended_field(name: string): ExtendedFieldDetails | null
    vfunc_change_extended_field(name: string, value: ExtendedFieldDetails, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_extended_field_finish(_res_: Gio.AsyncResult): void
    vfunc_remove_extended_field(name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_extended_field_finish(_res_: Gio.AsyncResult): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExtendedInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExtendedInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ExtendedInfo_ConstructProps)
    _init (config?: ExtendedInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FavouriteDetails_ConstructProps extends GObject.Object_ConstructProps {
    is_favourite?: boolean
}
export class FavouriteDetails {
    /* Properties of Folks.FavouriteDetails */
    is_favourite: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.FavouriteDetails */
    change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    change_is_favourite_finish(_res_: Gio.AsyncResult): void
    get_is_favourite(): boolean
    set_is_favourite(value: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.FavouriteDetails */
    vfunc_change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_is_favourite_finish(_res_: Gio.AsyncResult): void
    vfunc_get_is_favourite(): boolean
    vfunc_set_is_favourite(value: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FavouriteDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FavouriteDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-favourite", callback: (($obj: FavouriteDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-favourite", callback: (($obj: FavouriteDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FavouriteDetails_ConstructProps)
    _init (config?: FavouriteDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GenderDetails_ConstructProps extends GObject.Object_ConstructProps {
    gender?: Gender
}
export class GenderDetails {
    /* Properties of Folks.GenderDetails */
    gender: Gender
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.GenderDetails */
    change_gender(gender: Gender, _callback_?: Gio.AsyncReadyCallback | null): void
    change_gender_finish(_res_: Gio.AsyncResult): void
    get_gender(): Gender
    set_gender(value: Gender): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.GenderDetails */
    vfunc_change_gender(gender: Gender, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_gender_finish(_res_: Gio.AsyncResult): void
    vfunc_get_gender(): Gender
    vfunc_set_gender(value: Gender): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GenderDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GenderDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::gender", callback: (($obj: GenderDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gender", callback: (($obj: GenderDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GenderDetails_ConstructProps)
    _init (config?: GenderDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GroupDetails_ConstructProps extends GObject.Object_ConstructProps {
    groups?: Gee.Set
}
export class GroupDetails {
    /* Properties of Folks.GroupDetails */
    groups: Gee.Set
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.GroupDetails */
    change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    change_group_finish(_res_: Gio.AsyncResult): void
    change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_groups_finish(_res_: Gio.AsyncResult): void
    get_groups(): Gee.Set
    set_groups(value: Gee.Set): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.GroupDetails */
    vfunc_change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_group_finish(_res_: Gio.AsyncResult): void
    vfunc_change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_groups_finish(_res_: Gio.AsyncResult): void
    vfunc_get_groups(): Gee.Set
    vfunc_set_groups(value: Gee.Set): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.GroupDetails */
    connect(sigName: "group-changed", callback: (($obj: GroupDetails, group: string, is_member: boolean) => void)): number
    connect_after(sigName: "group-changed", callback: (($obj: GroupDetails, group: string, is_member: boolean) => void)): number
    emit(sigName: "group-changed", group: string, is_member: boolean): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GroupDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GroupDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::groups", callback: (($obj: GroupDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: (($obj: GroupDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GroupDetails_ConstructProps)
    _init (config?: GroupDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ImDetails_ConstructProps extends GObject.Object_ConstructProps {
    im_addresses?: Gee.MultiMap
}
export class ImDetails {
    /* Properties of Folks.ImDetails */
    im_addresses: Gee.MultiMap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.ImDetails */
    change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null): void
    change_im_addresses_finish(_res_: Gio.AsyncResult): void
    get_im_addresses(): Gee.MultiMap
    set_im_addresses(value: Gee.MultiMap): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.ImDetails */
    vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_im_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_im_addresses(): Gee.MultiMap
    vfunc_set_im_addresses(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ImDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ImDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::im-addresses", callback: (($obj: ImDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-addresses", callback: (($obj: ImDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ImDetails_ConstructProps)
    _init (config?: ImDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static normalise_im_address(im_address: string, protocol: string): string
    static $gtype: GObject.Type
}
export interface InteractionDetails_ConstructProps extends GObject.Object_ConstructProps {
}
export class InteractionDetails {
    /* Properties of Folks.InteractionDetails */
    readonly im_interaction_count: number
    readonly last_im_interaction_datetime: GLib.DateTime
    readonly call_interaction_count: number
    readonly last_call_interaction_datetime: GLib.DateTime
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.InteractionDetails */
    get_im_interaction_count(): number
    get_last_im_interaction_datetime(): GLib.DateTime | null
    get_call_interaction_count(): number
    get_last_call_interaction_datetime(): GLib.DateTime | null
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.InteractionDetails */
    vfunc_get_im_interaction_count(): number
    vfunc_get_last_im_interaction_datetime(): GLib.DateTime | null
    vfunc_get_call_interaction_count(): number
    vfunc_get_last_call_interaction_datetime(): GLib.DateTime | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::im-interaction-count", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-interaction-count", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-im-interaction-datetime", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-im-interaction-datetime", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::call-interaction-count", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::call-interaction-count", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-call-interaction-datetime", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-call-interaction-datetime", callback: (($obj: InteractionDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InteractionDetails_ConstructProps)
    _init (config?: InteractionDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface LocalIdDetails_ConstructProps extends GObject.Object_ConstructProps {
    local_ids?: Gee.Set
}
export class LocalIdDetails {
    /* Properties of Folks.LocalIdDetails */
    local_ids: Gee.Set
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.LocalIdDetails */
    change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_local_ids_finish(_res_: Gio.AsyncResult): void
    get_local_ids(): Gee.Set
    set_local_ids(value: Gee.Set): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.LocalIdDetails */
    vfunc_change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_local_ids_finish(_res_: Gio.AsyncResult): void
    vfunc_get_local_ids(): Gee.Set
    vfunc_set_local_ids(value: Gee.Set): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LocalIdDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocalIdDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::local-ids", callback: (($obj: LocalIdDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-ids", callback: (($obj: LocalIdDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LocalIdDetails_ConstructProps)
    _init (config?: LocalIdDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface LocationDetails_ConstructProps extends GObject.Object_ConstructProps {
    location?: Location
}
export class LocationDetails {
    /* Properties of Folks.LocationDetails */
    location: Location
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.LocationDetails */
    change_location(location?: Location | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_location_finish(_res_: Gio.AsyncResult): void
    get_location(): Location | null
    set_location(value?: Location | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.LocationDetails */
    vfunc_change_location(location?: Location | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_location_finish(_res_: Gio.AsyncResult): void
    vfunc_get_location(): Location | null
    vfunc_set_location(value?: Location | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: LocationDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocationDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::location", callback: (($obj: LocationDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: LocationDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LocationDetails_ConstructProps)
    _init (config?: LocationDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NameDetails_ConstructProps extends GObject.Object_ConstructProps {
    structured_name?: StructuredName
    full_name?: string
    nickname?: string
}
export class NameDetails {
    /* Properties of Folks.NameDetails */
    structured_name: StructuredName
    full_name: string
    nickname: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.NameDetails */
    change_structured_name(name?: StructuredName | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_structured_name_finish(_res_: Gio.AsyncResult): void
    change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    change_full_name_finish(_res_: Gio.AsyncResult): void
    change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback | null): void
    change_nickname_finish(_res_: Gio.AsyncResult): void
    get_structured_name(): StructuredName | null
    set_structured_name(value?: StructuredName | null): void
    get_full_name(): string
    set_full_name(value: string): void
    get_nickname(): string
    set_nickname(value: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.NameDetails */
    vfunc_change_structured_name(name?: StructuredName | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_structured_name_finish(_res_: Gio.AsyncResult): void
    vfunc_change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_full_name_finish(_res_: Gio.AsyncResult): void
    vfunc_change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_nickname_finish(_res_: Gio.AsyncResult): void
    vfunc_get_structured_name(): StructuredName | null
    vfunc_set_structured_name(value?: StructuredName | null): void
    vfunc_get_full_name(): string
    vfunc_set_full_name(value: string): void
    vfunc_get_nickname(): string
    vfunc_set_nickname(value: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::structured-name", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structured-name", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-name", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nickname", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: NameDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NameDetails_ConstructProps)
    _init (config?: NameDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NoteDetails_ConstructProps extends GObject.Object_ConstructProps {
    notes?: Gee.Set
}
export class NoteDetails {
    /* Properties of Folks.NoteDetails */
    notes: Gee.Set
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.NoteDetails */
    change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_notes_finish(_res_: Gio.AsyncResult): void
    get_notes(): Gee.Set
    set_notes(value: Gee.Set): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.NoteDetails */
    vfunc_change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_notes_finish(_res_: Gio.AsyncResult): void
    vfunc_get_notes(): Gee.Set
    vfunc_set_notes(value: Gee.Set): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NoteDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NoteDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::notes", callback: (($obj: NoteDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notes", callback: (($obj: NoteDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NoteDetails_ConstructProps)
    _init (config?: NoteDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PhoneDetails_ConstructProps extends GObject.Object_ConstructProps {
    phone_numbers?: Gee.Set
}
export class PhoneDetails {
    /* Properties of Folks.PhoneDetails */
    phone_numbers: Gee.Set
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.PhoneDetails */
    change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_phone_numbers_finish(_res_: Gio.AsyncResult): void
    get_phone_numbers(): Gee.Set
    set_phone_numbers(value: Gee.Set): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.PhoneDetails */
    vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void
    vfunc_get_phone_numbers(): Gee.Set
    vfunc_set_phone_numbers(value: Gee.Set): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PhoneDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PhoneDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::phone-numbers", callback: (($obj: PhoneDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone-numbers", callback: (($obj: PhoneDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PhoneDetails_ConstructProps)
    _init (config?: PhoneDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PostalAddressDetails_ConstructProps extends GObject.Object_ConstructProps {
    postal_addresses?: Gee.Set
}
export class PostalAddressDetails {
    /* Properties of Folks.PostalAddressDetails */
    postal_addresses: Gee.Set
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.PostalAddressDetails */
    change_postal_addresses(postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_postal_addresses_finish(_res_: Gio.AsyncResult): void
    get_postal_addresses(): Gee.Set
    set_postal_addresses(value: Gee.Set): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.PostalAddressDetails */
    vfunc_change_postal_addresses(postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_postal_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_postal_addresses(): Gee.Set
    vfunc_set_postal_addresses(value: Gee.Set): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PostalAddressDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PostalAddressDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::postal-addresses", callback: (($obj: PostalAddressDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-addresses", callback: (($obj: PostalAddressDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PostalAddressDetails_ConstructProps)
    _init (config?: PostalAddressDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PresenceDetails_ConstructProps extends GObject.Object_ConstructProps {
    presence_type?: PresenceType
    presence_message?: string
    client_types?: string[]
    presence_status?: string
}
export class PresenceDetails {
    /* Properties of Folks.PresenceDetails */
    presence_type: PresenceType
    presence_message: string
    client_types: string[]
    presence_status: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.PresenceDetails */
    is_online(): boolean
    get_presence_type(): PresenceType
    set_presence_type(value: PresenceType): void
    get_presence_message(): string
    set_presence_message(value: string): void
    get_client_types(): string[]
    set_client_types(value: string[]): void
    get_presence_status(): string
    set_presence_status(value: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.PresenceDetails */
    vfunc_get_presence_type(): PresenceType
    vfunc_set_presence_type(value: PresenceType): void
    vfunc_get_presence_message(): string
    vfunc_set_presence_message(value: string): void
    vfunc_get_client_types(): string[]
    vfunc_set_client_types(value: string[]): void
    vfunc_get_presence_status(): string
    vfunc_set_presence_status(value: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::presence-type", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-type", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::presence-message", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-message", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-types", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-types", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::presence-status", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-status", callback: (($obj: PresenceDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PresenceDetails_ConstructProps)
    _init (config?: PresenceDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default_message_from_type(type: PresenceType): string
    static typecmp(type_a: PresenceType, type_b: PresenceType): number
    static $gtype: GObject.Type
}
export interface RoleDetails_ConstructProps extends GObject.Object_ConstructProps {
    roles?: Gee.Set
}
export class RoleDetails {
    /* Properties of Folks.RoleDetails */
    roles: Gee.Set
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.RoleDetails */
    change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_roles_finish(_res_: Gio.AsyncResult): void
    get_roles(): Gee.Set
    set_roles(value: Gee.Set): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.RoleDetails */
    vfunc_change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_roles_finish(_res_: Gio.AsyncResult): void
    vfunc_get_roles(): Gee.Set
    vfunc_set_roles(value: Gee.Set): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RoleDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RoleDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::roles", callback: (($obj: RoleDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::roles", callback: (($obj: RoleDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RoleDetails_ConstructProps)
    _init (config?: RoleDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UrlDetails_ConstructProps extends GObject.Object_ConstructProps {
    urls?: Gee.Set
}
export class UrlDetails {
    /* Properties of Folks.UrlDetails */
    urls: Gee.Set
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.UrlDetails */
    change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_urls_finish(_res_: Gio.AsyncResult): void
    get_urls(): Gee.Set
    set_urls(value: Gee.Set): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.UrlDetails */
    vfunc_change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_urls_finish(_res_: Gio.AsyncResult): void
    vfunc_get_urls(): Gee.Set
    vfunc_set_urls(value: Gee.Set): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UrlDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UrlDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::urls", callback: (($obj: UrlDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: UrlDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UrlDetails_ConstructProps)
    _init (config?: UrlDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebServiceDetails_ConstructProps extends GObject.Object_ConstructProps {
    web_service_addresses?: Gee.MultiMap
}
export class WebServiceDetails {
    /* Properties of Folks.WebServiceDetails */
    web_service_addresses: Gee.MultiMap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.WebServiceDetails */
    change_web_service_addresses(web_service_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null): void
    change_web_service_addresses_finish(_res_: Gio.AsyncResult): void
    get_web_service_addresses(): Gee.MultiMap
    set_web_service_addresses(value: Gee.MultiMap): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.WebServiceDetails */
    vfunc_change_web_service_addresses(web_service_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_web_service_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_web_service_addresses(): Gee.MultiMap
    vfunc_set_web_service_addresses(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebServiceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebServiceDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::web-service-addresses", callback: (($obj: WebServiceDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-service-addresses", callback: (($obj: WebServiceDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebServiceDetails_ConstructProps)
    _init (config?: WebServiceDetails_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AbstractFieldDetails_ConstructProps extends GObject.Object_ConstructProps {
    t_type?: GObject.Type
    t_dup_func?: GObject.BoxedCopyFunc
    t_destroy_func?: GLib.DestroyNotify
    value?: object
    id?: string
    parameters?: Gee.MultiMap
}
export class AbstractFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly value_type: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.AbstractFieldDetails */
    get_parameter_values(parameter_name: string): Gee.Collection | null
    add_parameter(parameter_name: string, parameter_value: string): void
    set_parameter(parameter_name: string, parameter_value: string): void
    extend_parameters(additional: Gee.MultiMap): void
    remove_parameter_all(parameter_name: string): void
    equal(that: AbstractFieldDetails): boolean
    parameters_equal(that: AbstractFieldDetails): boolean
    values_equal(that: AbstractFieldDetails): boolean
    hash(): number
    get_value(): object | null
    set_value(value?: object | null): void
    get_value_type(): GObject.Type
    get_id(): string
    set_id(value: string): void
    get_parameters(): Gee.MultiMap
    set_parameters(value: Gee.MultiMap): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfunc_equal(that: AbstractFieldDetails): boolean
    vfunc_parameters_equal(that: AbstractFieldDetails): boolean
    vfunc_values_equal(that: AbstractFieldDetails): boolean
    vfunc_hash(): number
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_parameters(): Gee.MultiMap
    vfunc_set_parameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::value", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-type", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parameters", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: AbstractFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractFieldDetails_ConstructProps)
    _init (config?: AbstractFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static equal_static(left: AbstractFieldDetails, right: AbstractFieldDetails): boolean
    static hash_static(value: AbstractFieldDetails): number
    static $gtype: GObject.Type
}
export interface AvatarCache_ConstructProps extends GObject.Object_ConstructProps {
}
export class AvatarCache {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.AvatarCache */
    load_avatar(id: string, _callback_?: Gio.AsyncReadyCallback | null): void
    load_avatar_finish(_res_: Gio.AsyncResult): Gio.LoadableIcon | null
    store_avatar(id: string, avatar: Gio.LoadableIcon, _callback_?: Gio.AsyncReadyCallback | null): void
    store_avatar_finish(_res_: Gio.AsyncResult): string
    remove_avatar(id: string, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_avatar_finish(_res_: Gio.AsyncResult): void
    build_uri_for_avatar(id: string): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AvatarCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AvatarCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AvatarCache_ConstructProps)
    _init (config?: AvatarCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static dup(): AvatarCache
    static $gtype: GObject.Type
}
export interface BackendStore_ConstructProps extends GObject.Object_ConstructProps {
    enabled_backends?: Gee.Map
    is_prepared?: boolean
}
export class BackendStore {
    /* Properties of Folks.BackendStore */
    enabled_backends: Gee.Map
    is_prepared: boolean
    /* Fields of Folks.BackendStore */
    folks_backend_store_KEY_FILE_GROUP_ALL_OTHERS: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.BackendStore */
    prepare(_callback_?: Gio.AsyncReadyCallback | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    load_backends(_callback_?: Gio.AsyncReadyCallback | null): void
    load_backends_finish(_res_: Gio.AsyncResult): void
    add_backend(backend: Backend): void
    dup_backend_by_name(name: string): Backend | null
    list_backends(): Gee.Collection
    enable_backend(name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    enable_backend_finish(_res_: Gio.AsyncResult): void
    disable_backend(name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    disable_backend_finish(_res_: Gio.AsyncResult): void
    get_enabled_backends(): Gee.Map
    get_is_prepared(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.BackendStore */
    connect(sigName: "backend-available", callback: (($obj: BackendStore, backend: Backend) => void)): number
    connect_after(sigName: "backend-available", callback: (($obj: BackendStore, backend: Backend) => void)): number
    emit(sigName: "backend-available", backend: Backend): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackendStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackendStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enabled-backends", callback: (($obj: BackendStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled-backends", callback: (($obj: BackendStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-prepared", callback: (($obj: BackendStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: BackendStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BackendStore_ConstructProps)
    _init (config?: BackendStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static dup(): BackendStore
    static $gtype: GObject.Type
}
export interface Backend_ConstructProps extends GObject.Object_ConstructProps {
}
export class Backend {
    /* Properties of Folks.Backend */
    readonly is_prepared: boolean
    readonly is_quiescent: boolean
    readonly name: string
    readonly persona_stores: Gee.Map
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.Backend */
    disable_persona_store(store: PersonaStore): void
    enable_persona_store(store: PersonaStore): void
    set_persona_stores(storeids?: Gee.Set | null): void
    prepare(_callback_?: Gio.AsyncReadyCallback | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    unprepare(_callback_?: Gio.AsyncReadyCallback | null): void
    unprepare_finish(_res_: Gio.AsyncResult): void
    get_is_prepared(): boolean
    get_is_quiescent(): boolean
    get_name(): string
    get_persona_stores(): Gee.Map
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.Backend */
    vfunc_disable_persona_store(store: PersonaStore): void
    vfunc_enable_persona_store(store: PersonaStore): void
    vfunc_set_persona_stores(storeids?: Gee.Set | null): void
    vfunc_prepare(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_prepare_finish(_res_: Gio.AsyncResult): void
    vfunc_unprepare(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_unprepare_finish(_res_: Gio.AsyncResult): void
    vfunc_get_is_prepared(): boolean
    vfunc_get_is_quiescent(): boolean
    vfunc_get_name(): string
    vfunc_get_persona_stores(): Gee.Map
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.Backend */
    connect(sigName: "persona-store-added", callback: (($obj: Backend, store: PersonaStore) => void)): number
    connect_after(sigName: "persona-store-added", callback: (($obj: Backend, store: PersonaStore) => void)): number
    emit(sigName: "persona-store-added", store: PersonaStore): void
    connect(sigName: "persona-store-removed", callback: (($obj: Backend, store: PersonaStore) => void)): number
    connect_after(sigName: "persona-store-removed", callback: (($obj: Backend, store: PersonaStore) => void)): number
    emit(sigName: "persona-store-removed", store: PersonaStore): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-prepared", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-quiescent", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quiescent", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::persona-stores", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::persona-stores", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Backend_ConstructProps)
    _init (config?: Backend_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Debug_ConstructProps extends GObject.Object_ConstructProps {
    colour_enabled?: boolean
    debug_output_enabled?: boolean
}
export class Debug {
    /* Properties of Folks.Debug */
    colour_enabled: boolean
    debug_output_enabled: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.Debug */
    emit_print_status(): void
    indent(): void
    unindent(): void
    get_colour_enabled(): boolean
    set_colour_enabled(value: boolean): void
    get_debug_output_enabled(): boolean
    set_debug_output_enabled(value: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.Debug */
    connect(sigName: "print-status", callback: (($obj: Debug) => void)): number
    connect_after(sigName: "print-status", callback: (($obj: Debug) => void)): number
    emit(sigName: "print-status"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Debug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Debug, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::colour-enabled", callback: (($obj: Debug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::colour-enabled", callback: (($obj: Debug, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::debug-output-enabled", callback: (($obj: Debug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug-output-enabled", callback: (($obj: Debug, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Debug_ConstructProps)
    _init (config?: Debug_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static dup(): Debug
    static dup_with_flags(debug_flags: string | null, colour_enabled: boolean): Debug
    static $gtype: GObject.Type
}
export interface EmailFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
}
export class EmailFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly value_type: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.AbstractFieldDetails */
    get_parameter_values(parameter_name: string): Gee.Collection | null
    add_parameter(parameter_name: string, parameter_value: string): void
    set_parameter(parameter_name: string, parameter_value: string): void
    extend_parameters(additional: Gee.MultiMap): void
    remove_parameter_all(parameter_name: string): void
    equal(that: AbstractFieldDetails): boolean
    parameters_equal(that: AbstractFieldDetails): boolean
    values_equal(that: AbstractFieldDetails): boolean
    hash(): number
    get_value(): object | null
    set_value(value?: object | null): void
    get_value_type(): GObject.Type
    get_id(): string
    set_id(value: string): void
    get_parameters(): Gee.MultiMap
    set_parameters(value: Gee.MultiMap): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfunc_equal(that: AbstractFieldDetails): boolean
    vfunc_parameters_equal(that: AbstractFieldDetails): boolean
    vfunc_values_equal(that: AbstractFieldDetails): boolean
    vfunc_hash(): number
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_parameters(): Gee.MultiMap
    vfunc_set_parameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::value", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-type", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parameters", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: EmailFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EmailFieldDetails_ConstructProps)
    _init (config?: EmailFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, parameters?: Gee.MultiMap | null): EmailFieldDetails
    static $gtype: GObject.Type
}
export interface ExtendedFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
}
export class ExtendedFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly value_type: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.AbstractFieldDetails */
    get_parameter_values(parameter_name: string): Gee.Collection | null
    add_parameter(parameter_name: string, parameter_value: string): void
    set_parameter(parameter_name: string, parameter_value: string): void
    extend_parameters(additional: Gee.MultiMap): void
    remove_parameter_all(parameter_name: string): void
    equal(that: AbstractFieldDetails): boolean
    parameters_equal(that: AbstractFieldDetails): boolean
    values_equal(that: AbstractFieldDetails): boolean
    hash(): number
    get_value(): object | null
    set_value(value?: object | null): void
    get_value_type(): GObject.Type
    get_id(): string
    set_id(value: string): void
    get_parameters(): Gee.MultiMap
    set_parameters(value: Gee.MultiMap): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfunc_equal(that: AbstractFieldDetails): boolean
    vfunc_parameters_equal(that: AbstractFieldDetails): boolean
    vfunc_values_equal(that: AbstractFieldDetails): boolean
    vfunc_hash(): number
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_parameters(): Gee.MultiMap
    vfunc_set_parameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::value", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-type", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parameters", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: ExtendedFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ExtendedFieldDetails_ConstructProps)
    _init (config?: ExtendedFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, parameters?: Gee.MultiMap | null): ExtendedFieldDetails
    static $gtype: GObject.Type
}
export interface ImFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
}
export class ImFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly value_type: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.AbstractFieldDetails */
    get_parameter_values(parameter_name: string): Gee.Collection | null
    add_parameter(parameter_name: string, parameter_value: string): void
    set_parameter(parameter_name: string, parameter_value: string): void
    extend_parameters(additional: Gee.MultiMap): void
    remove_parameter_all(parameter_name: string): void
    equal(that: AbstractFieldDetails): boolean
    parameters_equal(that: AbstractFieldDetails): boolean
    values_equal(that: AbstractFieldDetails): boolean
    hash(): number
    get_value(): object | null
    set_value(value?: object | null): void
    get_value_type(): GObject.Type
    get_id(): string
    set_id(value: string): void
    get_parameters(): Gee.MultiMap
    set_parameters(value: Gee.MultiMap): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfunc_equal(that: AbstractFieldDetails): boolean
    vfunc_parameters_equal(that: AbstractFieldDetails): boolean
    vfunc_values_equal(that: AbstractFieldDetails): boolean
    vfunc_hash(): number
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_parameters(): Gee.MultiMap
    vfunc_set_parameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::value", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-type", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parameters", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: ImFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ImFieldDetails_ConstructProps)
    _init (config?: ImFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, parameters?: Gee.MultiMap | null): ImFieldDetails
    static $gtype: GObject.Type
}
export interface IndividualAggregator_ConstructProps extends GObject.Object_ConstructProps {
    backend_store?: BackendStore
    individuals?: Gee.Map
    user?: Individual
}
export class IndividualAggregator {
    /* Properties of Folks.IndividualAggregator */
    readonly is_prepared: boolean
    readonly is_quiescent: boolean
    readonly primary_store: PersonaStore
    individuals: Gee.Map
    user: Individual
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.IndividualAggregator */
    prepare(_callback_?: Gio.AsyncReadyCallback | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    unprepare(_callback_?: Gio.AsyncReadyCallback | null): void
    unprepare_finish(_res_: Gio.AsyncResult): void
    get_potential_matches(matchee: Individual, min_threshold: MatchResult): Gee.Map
    get_all_potential_matches(min_threshold: MatchResult): Gee.Map
    add_persona_from_details(parent: Individual | null, persona_store: PersonaStore, details: GLib.HashTable, _callback_?: Gio.AsyncReadyCallback | null): void
    add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona | null
    remove_individual(individual: Individual, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_individual_finish(_res_: Gio.AsyncResult): void
    remove_persona(persona: Persona, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_persona_finish(_res_: Gio.AsyncResult): void
    link_personas(personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    link_personas_finish(_res_: Gio.AsyncResult): void
    unlink_individual(individual: Individual, _callback_?: Gio.AsyncReadyCallback | null): void
    unlink_individual_finish(_res_: Gio.AsyncResult): void
    ensure_individual_property_writeable(individual: Individual, property_name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    ensure_individual_property_writeable_finish(_res_: Gio.AsyncResult): Persona
    look_up_individual(id: string, _callback_?: Gio.AsyncReadyCallback | null): void
    look_up_individual_finish(_res_: Gio.AsyncResult): Individual | null
    get_is_prepared(): boolean
    get_is_quiescent(): boolean
    get_primary_store(): PersonaStore | null
    get_backend_store(): BackendStore
    get_individuals(): Gee.Map
    get_user(): Individual | null
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.IndividualAggregator */
    connect(sigName: "individuals-changed", callback: (($obj: IndividualAggregator, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason) => void)): number
    connect_after(sigName: "individuals-changed", callback: (($obj: IndividualAggregator, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason) => void)): number
    emit(sigName: "individuals-changed", added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    connect(sigName: "individuals-changed-detailed", callback: (($obj: IndividualAggregator, changes: Gee.MultiMap) => void)): number
    connect_after(sigName: "individuals-changed-detailed", callback: (($obj: IndividualAggregator, changes: Gee.MultiMap) => void)): number
    emit(sigName: "individuals-changed-detailed", changes: Gee.MultiMap): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-prepared", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-quiescent", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quiescent", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-store", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-store", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::individuals", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individuals", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: IndividualAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IndividualAggregator_ConstructProps)
    _init (config?: IndividualAggregator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IndividualAggregator
    static with_backend_store(store: BackendStore): IndividualAggregator
    static dup(): IndividualAggregator
    static dup_with_backend_store(store: BackendStore): IndividualAggregator | null
    static $gtype: GObject.Type
}
export interface Individual_ConstructProps extends GObject.Object_ConstructProps {
    trust_level?: TrustLevel
    is_user?: boolean
    id?: string
    personas?: Gee.Set
    alias?: string
    avatar?: Gio.LoadableIcon
    birthday?: GLib.DateTime
    calendar_event_id?: string
    email_addresses?: Gee.Set
    is_favourite?: boolean
    gender?: Gender
    groups?: Gee.Set
    im_addresses?: Gee.MultiMap
    local_ids?: Gee.Set
    location?: Location
    structured_name?: StructuredName
    full_name?: string
    nickname?: string
    notes?: Gee.Set
    presence_type?: PresenceType
    presence_message?: string
    client_types?: string[]
    presence_status?: string
    phone_numbers?: Gee.Set
    postal_addresses?: Gee.Set
    roles?: Gee.Set
    urls?: Gee.Set
    web_service_addresses?: Gee.MultiMap
}
export class Individual {
    /* Properties of Folks.Individual */
    trust_level: TrustLevel
    is_user: boolean
    id: string
    readonly display_name: string
    personas: Gee.Set
    /* Properties of Folks.AliasDetails */
    alias: string
    /* Properties of Folks.AvatarDetails */
    avatar: Gio.LoadableIcon
    /* Properties of Folks.BirthdayDetails */
    birthday: GLib.DateTime
    calendar_event_id: string
    /* Properties of Folks.EmailDetails */
    email_addresses: Gee.Set
    /* Properties of Folks.FavouriteDetails */
    is_favourite: boolean
    /* Properties of Folks.GenderDetails */
    gender: Gender
    /* Properties of Folks.GroupDetails */
    groups: Gee.Set
    /* Properties of Folks.ImDetails */
    im_addresses: Gee.MultiMap
    /* Properties of Folks.InteractionDetails */
    readonly im_interaction_count: number
    readonly last_im_interaction_datetime: GLib.DateTime
    readonly call_interaction_count: number
    readonly last_call_interaction_datetime: GLib.DateTime
    /* Properties of Folks.LocalIdDetails */
    local_ids: Gee.Set
    /* Properties of Folks.LocationDetails */
    location: Location
    /* Properties of Folks.NameDetails */
    structured_name: StructuredName
    full_name: string
    nickname: string
    /* Properties of Folks.NoteDetails */
    notes: Gee.Set
    /* Properties of Folks.PresenceDetails */
    presence_type: PresenceType
    presence_message: string
    client_types: string[]
    presence_status: string
    /* Properties of Folks.PhoneDetails */
    phone_numbers: Gee.Set
    /* Properties of Folks.PostalAddressDetails */
    postal_addresses: Gee.Set
    /* Properties of Folks.RoleDetails */
    roles: Gee.Set
    /* Properties of Folks.UrlDetails */
    urls: Gee.Set
    /* Properties of Folks.WebServiceDetails */
    web_service_addresses: Gee.MultiMap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.Individual */
    has_anti_link_with_persona(p: Persona): boolean
    has_anti_link_with_individual(i: Individual): boolean
    get_trust_level(): TrustLevel
    get_is_user(): boolean
    get_id(): string
    get_display_name(): string
    get_personas(): Gee.Set
    set_personas(value: Gee.Set): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Folks.AliasDetails */
    change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback | null): void
    change_alias_finish(_res_: Gio.AsyncResult): void
    get_alias(): string
    set_alias(value: string): void
    /* Methods of Folks.AvatarDetails */
    change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_avatar_finish(_res_: Gio.AsyncResult): void
    get_avatar(): Gio.LoadableIcon | null
    set_avatar(value?: Gio.LoadableIcon | null): void
    /* Methods of Folks.BirthdayDetails */
    change_birthday(birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_birthday_finish(_res_: Gio.AsyncResult): void
    change_calendar_event_id(event_id?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_calendar_event_id_finish(_res_: Gio.AsyncResult): void
    get_birthday(): GLib.DateTime | null
    set_birthday(value?: GLib.DateTime | null): void
    get_calendar_event_id(): string | null
    set_calendar_event_id(value?: string | null): void
    /* Methods of Folks.EmailDetails */
    change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_email_addresses_finish(_res_: Gio.AsyncResult): void
    get_email_addresses(): Gee.Set
    set_email_addresses(value: Gee.Set): void
    /* Methods of Folks.ExtendedInfo */
    get_extended_field(name: string): ExtendedFieldDetails | null
    change_extended_field(name: string, value: ExtendedFieldDetails, _callback_?: Gio.AsyncReadyCallback | null): void
    change_extended_field_finish(_res_: Gio.AsyncResult): void
    remove_extended_field(name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_extended_field_finish(_res_: Gio.AsyncResult): void
    /* Methods of Folks.FavouriteDetails */
    change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    change_is_favourite_finish(_res_: Gio.AsyncResult): void
    get_is_favourite(): boolean
    set_is_favourite(value: boolean): void
    /* Methods of Folks.GenderDetails */
    change_gender(gender: Gender, _callback_?: Gio.AsyncReadyCallback | null): void
    change_gender_finish(_res_: Gio.AsyncResult): void
    get_gender(): Gender
    set_gender(value: Gender): void
    /* Methods of Folks.GroupDetails */
    change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    change_group_finish(_res_: Gio.AsyncResult): void
    change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_groups_finish(_res_: Gio.AsyncResult): void
    get_groups(): Gee.Set
    set_groups(value: Gee.Set): void
    /* Methods of Folks.ImDetails */
    change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null): void
    change_im_addresses_finish(_res_: Gio.AsyncResult): void
    get_im_addresses(): Gee.MultiMap
    set_im_addresses(value: Gee.MultiMap): void
    /* Methods of Folks.InteractionDetails */
    get_im_interaction_count(): number
    get_last_im_interaction_datetime(): GLib.DateTime | null
    get_call_interaction_count(): number
    get_last_call_interaction_datetime(): GLib.DateTime | null
    /* Methods of Folks.LocalIdDetails */
    change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_local_ids_finish(_res_: Gio.AsyncResult): void
    get_local_ids(): Gee.Set
    set_local_ids(value: Gee.Set): void
    /* Methods of Folks.LocationDetails */
    change_location(location?: Location | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_location_finish(_res_: Gio.AsyncResult): void
    get_location(): Location | null
    set_location(value?: Location | null): void
    /* Methods of Folks.NameDetails */
    change_structured_name(name?: StructuredName | null, _callback_?: Gio.AsyncReadyCallback | null): void
    change_structured_name_finish(_res_: Gio.AsyncResult): void
    change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    change_full_name_finish(_res_: Gio.AsyncResult): void
    change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback | null): void
    change_nickname_finish(_res_: Gio.AsyncResult): void
    get_structured_name(): StructuredName | null
    set_structured_name(value?: StructuredName | null): void
    get_full_name(): string
    set_full_name(value: string): void
    get_nickname(): string
    set_nickname(value: string): void
    /* Methods of Folks.NoteDetails */
    change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_notes_finish(_res_: Gio.AsyncResult): void
    get_notes(): Gee.Set
    set_notes(value: Gee.Set): void
    /* Methods of Folks.PresenceDetails */
    is_online(): boolean
    get_presence_type(): PresenceType
    set_presence_type(value: PresenceType): void
    get_presence_message(): string
    set_presence_message(value: string): void
    get_client_types(): string[]
    set_client_types(value: string[]): void
    get_presence_status(): string
    set_presence_status(value: string): void
    /* Methods of Folks.PhoneDetails */
    change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_phone_numbers_finish(_res_: Gio.AsyncResult): void
    get_phone_numbers(): Gee.Set
    set_phone_numbers(value: Gee.Set): void
    /* Methods of Folks.PostalAddressDetails */
    change_postal_addresses(postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_postal_addresses_finish(_res_: Gio.AsyncResult): void
    get_postal_addresses(): Gee.Set
    set_postal_addresses(value: Gee.Set): void
    /* Methods of Folks.RoleDetails */
    change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_roles_finish(_res_: Gio.AsyncResult): void
    get_roles(): Gee.Set
    set_roles(value: Gee.Set): void
    /* Methods of Folks.UrlDetails */
    change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    change_urls_finish(_res_: Gio.AsyncResult): void
    get_urls(): Gee.Set
    set_urls(value: Gee.Set): void
    /* Methods of Folks.WebServiceDetails */
    change_web_service_addresses(web_service_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null): void
    change_web_service_addresses_finish(_res_: Gio.AsyncResult): void
    get_web_service_addresses(): Gee.MultiMap
    set_web_service_addresses(value: Gee.MultiMap): void
    /* Virtual methods of Folks.Individual */
    vfunc_change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_alias_finish(_res_: Gio.AsyncResult): void
    vfunc_get_alias(): string
    vfunc_set_alias(value: string): void
    vfunc_change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_avatar_finish(_res_: Gio.AsyncResult): void
    vfunc_get_avatar(): Gio.LoadableIcon | null
    vfunc_set_avatar(value?: Gio.LoadableIcon | null): void
    vfunc_change_birthday(birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_birthday_finish(_res_: Gio.AsyncResult): void
    vfunc_change_calendar_event_id(event_id?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_calendar_event_id_finish(_res_: Gio.AsyncResult): void
    vfunc_get_birthday(): GLib.DateTime | null
    vfunc_set_birthday(value?: GLib.DateTime | null): void
    vfunc_get_calendar_event_id(): string | null
    vfunc_set_calendar_event_id(value?: string | null): void
    vfunc_change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_email_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_email_addresses(): Gee.Set
    vfunc_set_email_addresses(value: Gee.Set): void
    vfunc_get_extended_field(name: string): ExtendedFieldDetails | null
    vfunc_change_extended_field(name: string, value: ExtendedFieldDetails, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_extended_field_finish(_res_: Gio.AsyncResult): void
    vfunc_remove_extended_field(name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_extended_field_finish(_res_: Gio.AsyncResult): void
    vfunc_change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_is_favourite_finish(_res_: Gio.AsyncResult): void
    vfunc_get_is_favourite(): boolean
    vfunc_set_is_favourite(value: boolean): void
    vfunc_change_gender(gender: Gender, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_gender_finish(_res_: Gio.AsyncResult): void
    vfunc_get_gender(): Gender
    vfunc_set_gender(value: Gender): void
    vfunc_change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_group_finish(_res_: Gio.AsyncResult): void
    vfunc_change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_groups_finish(_res_: Gio.AsyncResult): void
    vfunc_get_groups(): Gee.Set
    vfunc_set_groups(value: Gee.Set): void
    vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_im_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_im_addresses(): Gee.MultiMap
    vfunc_set_im_addresses(value: Gee.MultiMap): void
    vfunc_get_im_interaction_count(): number
    vfunc_get_last_im_interaction_datetime(): GLib.DateTime | null
    vfunc_get_call_interaction_count(): number
    vfunc_get_last_call_interaction_datetime(): GLib.DateTime | null
    vfunc_change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_local_ids_finish(_res_: Gio.AsyncResult): void
    vfunc_get_local_ids(): Gee.Set
    vfunc_set_local_ids(value: Gee.Set): void
    vfunc_change_location(location?: Location | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_location_finish(_res_: Gio.AsyncResult): void
    vfunc_get_location(): Location | null
    vfunc_set_location(value?: Location | null): void
    vfunc_change_structured_name(name?: StructuredName | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_structured_name_finish(_res_: Gio.AsyncResult): void
    vfunc_change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_full_name_finish(_res_: Gio.AsyncResult): void
    vfunc_change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_nickname_finish(_res_: Gio.AsyncResult): void
    vfunc_get_structured_name(): StructuredName | null
    vfunc_set_structured_name(value?: StructuredName | null): void
    vfunc_get_full_name(): string
    vfunc_set_full_name(value: string): void
    vfunc_get_nickname(): string
    vfunc_set_nickname(value: string): void
    vfunc_change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_notes_finish(_res_: Gio.AsyncResult): void
    vfunc_get_notes(): Gee.Set
    vfunc_set_notes(value: Gee.Set): void
    vfunc_get_presence_type(): PresenceType
    vfunc_set_presence_type(value: PresenceType): void
    vfunc_get_presence_message(): string
    vfunc_set_presence_message(value: string): void
    vfunc_get_client_types(): string[]
    vfunc_set_client_types(value: string[]): void
    vfunc_get_presence_status(): string
    vfunc_set_presence_status(value: string): void
    vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void
    vfunc_get_phone_numbers(): Gee.Set
    vfunc_set_phone_numbers(value: Gee.Set): void
    vfunc_change_postal_addresses(postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_postal_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_postal_addresses(): Gee.Set
    vfunc_set_postal_addresses(value: Gee.Set): void
    vfunc_change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_roles_finish(_res_: Gio.AsyncResult): void
    vfunc_get_roles(): Gee.Set
    vfunc_set_roles(value: Gee.Set): void
    vfunc_change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_urls_finish(_res_: Gio.AsyncResult): void
    vfunc_get_urls(): Gee.Set
    vfunc_set_urls(value: Gee.Set): void
    vfunc_change_web_service_addresses(web_service_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_change_web_service_addresses_finish(_res_: Gio.AsyncResult): void
    vfunc_get_web_service_addresses(): Gee.MultiMap
    vfunc_set_web_service_addresses(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.Individual */
    connect(sigName: "removed", callback: (($obj: Individual, replacement_individual?: Individual | null) => void)): number
    connect_after(sigName: "removed", callback: (($obj: Individual, replacement_individual?: Individual | null) => void)): number
    emit(sigName: "removed", replacement_individual?: Individual | null): void
    connect(sigName: "personas-changed", callback: (($obj: Individual, added: Gee.Set, removed: Gee.Set) => void)): number
    connect_after(sigName: "personas-changed", callback: (($obj: Individual, added: Gee.Set, removed: Gee.Set) => void)): number
    emit(sigName: "personas-changed", added: Gee.Set, removed: Gee.Set): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Folks.GroupDetails */
    connect(sigName: "group-changed", callback: (($obj: Individual, group: string, is_member: boolean) => void)): number
    connect_after(sigName: "group-changed", callback: (($obj: Individual, group: string, is_member: boolean) => void)): number
    emit(sigName: "group-changed", group: string, is_member: boolean): void
    connect(sigName: "notify::trust-level", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trust-level", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-user", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-user", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::personas", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::personas", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::alias", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alias", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::avatar", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::birthday", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::birthday", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::calendar-event-id", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-event-id", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::email-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-favourite", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-favourite", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gender", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gender", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::groups", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::groups", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::im-interaction-count", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-interaction-count", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-im-interaction-datetime", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-im-interaction-datetime", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::call-interaction-count", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::call-interaction-count", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-call-interaction-datetime", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-call-interaction-datetime", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-ids", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-ids", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::structured-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structured-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nickname", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::notes", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notes", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::presence-type", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-type", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::presence-message", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-message", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-types", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-types", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::presence-status", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presence-status", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phone-numbers", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phone-numbers", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::postal-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::roles", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::roles", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urls", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::web-service-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-service-addresses", callback: (($obj: Individual, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Individual_ConstructProps)
    _init (config?: Individual_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(personas?: Gee.Set | null): Individual
    static normalise_im_address(im_address: string, protocol: string): string
    static get_default_message_from_type(type: PresenceType): string
    static typecmp(type_a: PresenceType, type_b: PresenceType): number
    static $gtype: GObject.Type
}
export interface Location_ConstructProps extends GObject.Object_ConstructProps {
}
export class Location {
    /* Fields of Folks.Location */
    latitude: number
    longitude: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.Location */
    equal(other: Location): boolean
    equal_coordinates(latitude: number, longitude: number): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Location_ConstructProps)
    _init (config?: Location_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(latitude: number, longitude: number): Location
    static $gtype: GObject.Type
}
export interface StructuredName_ConstructProps extends GObject.Object_ConstructProps {
    family_name?: string
    given_name?: string
    additional_names?: string
    prefixes?: string
    suffixes?: string
}
export class StructuredName {
    /* Properties of Folks.StructuredName */
    family_name: string
    given_name: string
    additional_names: string
    prefixes: string
    suffixes: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.StructuredName */
    is_empty(): boolean
    equal(other: StructuredName): boolean
    to_string(): string
    to_string_with_format(name_fmt: string): string
    get_family_name(): string
    set_family_name(value: string): void
    get_given_name(): string
    set_given_name(value: string): void
    get_additional_names(): string
    set_additional_names(value: string): void
    get_prefixes(): string
    set_prefixes(value: string): void
    get_suffixes(): string
    set_suffixes(value: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::family-name", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-name", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::given-name", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::given-name", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::additional-names", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::additional-names", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefixes", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefixes", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suffixes", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suffixes", callback: (($obj: StructuredName, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StructuredName_ConstructProps)
    _init (config?: StructuredName_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(family_name?: string | null, given_name?: string | null, additional_names?: string | null, prefixes?: string | null, suffixes?: string | null): StructuredName
    static simple(family_name?: string | null, given_name?: string | null): StructuredName
    static $gtype: GObject.Type
}
export interface NoteFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
    uid?: string
}
export class NoteFieldDetails {
    /* Properties of Folks.NoteFieldDetails */
    uid: string
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly value_type: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.NoteFieldDetails */
    get_uid(): string
    set_uid(value: string): void
    /* Methods of Folks.AbstractFieldDetails */
    get_parameter_values(parameter_name: string): Gee.Collection | null
    add_parameter(parameter_name: string, parameter_value: string): void
    set_parameter(parameter_name: string, parameter_value: string): void
    extend_parameters(additional: Gee.MultiMap): void
    remove_parameter_all(parameter_name: string): void
    equal(that: AbstractFieldDetails): boolean
    parameters_equal(that: AbstractFieldDetails): boolean
    values_equal(that: AbstractFieldDetails): boolean
    hash(): number
    get_value(): object | null
    set_value(value?: object | null): void
    get_value_type(): GObject.Type
    get_id(): string
    set_id(value: string): void
    get_parameters(): Gee.MultiMap
    set_parameters(value: Gee.MultiMap): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfunc_equal(that: AbstractFieldDetails): boolean
    vfunc_parameters_equal(that: AbstractFieldDetails): boolean
    vfunc_values_equal(that: AbstractFieldDetails): boolean
    vfunc_hash(): number
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_parameters(): Gee.MultiMap
    vfunc_set_parameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uid", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-type", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parameters", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: NoteFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NoteFieldDetails_ConstructProps)
    _init (config?: NoteFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, parameters?: Gee.MultiMap | null, uid?: string | null): NoteFieldDetails
    static $gtype: GObject.Type
}
export interface ObjectCache_ConstructProps extends GObject.Object_ConstructProps {
    t_type?: GObject.Type
    t_dup_func?: GObject.BoxedCopyFunc
    t_destroy_func?: GLib.DestroyNotify
    type_id?: string
    id?: string
}
export class ObjectCache {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.ObjectCache */
    get_serialised_object_type(object_version: number): GLib.VariantType | null
    get_serialised_object_version(): number
    serialise_object(object?: object | null): GLib.Variant
    deserialise_object(variant: GLib.Variant, object_version: number): object | null
    load_objects(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    load_objects_finish(_res_: Gio.AsyncResult): Gee.Set | null
    store_objects(objects: Gee.Set, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
    store_objects_finish(_res_: Gio.AsyncResult): void
    clear_cache(_callback_?: Gio.AsyncReadyCallback | null): void
    clear_cache_finish(_res_: Gio.AsyncResult): void
    get_type_id(): string
    get_id(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.ObjectCache */
    vfunc_get_serialised_object_type(object_version: number): GLib.VariantType | null
    vfunc_get_serialised_object_version(): number
    vfunc_serialise_object(object?: object | null): GLib.Variant
    vfunc_deserialise_object(variant: GLib.Variant, object_version: number): object | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ObjectCache_ConstructProps)
    _init (config?: ObjectCache_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PersonaStore_ConstructProps extends GObject.Object_ConstructProps {
    display_name?: string
    id?: string
    is_writeable?: boolean
    trust_level?: PersonaStoreTrust
    is_primary_store?: boolean
    is_user_set_default?: boolean
}
export class PersonaStore {
    /* Properties of Folks.PersonaStore */
    readonly type_id: string
    readonly personas: Gee.Map
    readonly can_add_personas: MaybeBool
    readonly can_alias_personas: MaybeBool
    readonly can_group_personas: MaybeBool
    readonly can_remove_personas: MaybeBool
    readonly is_prepared: boolean
    readonly is_quiescent: boolean
    is_writeable: boolean
    trust_level: PersonaStoreTrust
    readonly always_writeable_properties: string[]
    is_primary_store: boolean
    is_user_set_default: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.PersonaStore */
    _emit_personas_changed(added: Gee.Set | null, removed: Gee.Set | null, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    prepare(_callback_?: Gio.AsyncReadyCallback | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    flush(_callback_?: Gio.AsyncReadyCallback | null): void
    flush_finish(_res_: Gio.AsyncResult): void
    add_persona_from_details(details: GLib.HashTable, _callback_?: Gio.AsyncReadyCallback | null): void
    add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona | null
    remove_persona(persona: Persona, _callback_?: Gio.AsyncReadyCallback | null): void
    remove_persona_finish(_res_: Gio.AsyncResult): void
    get_type_id(): string
    get_display_name(): string
    get_id(): string
    get_personas(): Gee.Map
    get_can_add_personas(): MaybeBool
    get_can_alias_personas(): MaybeBool
    get_can_group_personas(): MaybeBool
    get_can_remove_personas(): MaybeBool
    get_is_prepared(): boolean
    get_is_quiescent(): boolean
    get_is_writeable(): boolean
    set_is_writeable(value: boolean): void
    get_trust_level(): PersonaStoreTrust
    set_trust_level(value: PersonaStoreTrust): void
    get_always_writeable_properties(): string[]
    get_is_primary_store(): boolean
    get_is_user_set_default(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.PersonaStore */
    vfunc_prepare(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_prepare_finish(_res_: Gio.AsyncResult): void
    vfunc_flush(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_flush_finish(_res_: Gio.AsyncResult): void
    vfunc_add_persona_from_details(details: GLib.HashTable, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona | null
    vfunc_remove_persona(persona: Persona, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_persona_finish(_res_: Gio.AsyncResult): void
    vfunc_get_type_id(): string
    vfunc_get_personas(): Gee.Map
    vfunc_get_can_add_personas(): MaybeBool
    vfunc_get_can_alias_personas(): MaybeBool
    vfunc_get_can_group_personas(): MaybeBool
    vfunc_get_can_remove_personas(): MaybeBool
    vfunc_get_is_prepared(): boolean
    vfunc_get_is_quiescent(): boolean
    vfunc_get_always_writeable_properties(): string[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.PersonaStore */
    connect(sigName: "personas-changed", callback: (($obj: PersonaStore, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason) => void)): number
    connect_after(sigName: "personas-changed", callback: (($obj: PersonaStore, added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason) => void)): number
    emit(sigName: "personas-changed", added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    connect(sigName: "removed", callback: (($obj: PersonaStore) => void)): number
    connect_after(sigName: "removed", callback: (($obj: PersonaStore) => void)): number
    emit(sigName: "removed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::type-id", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-id", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-add-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-add-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-alias-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-alias-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-group-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-group-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-remove-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-remove-personas", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-prepared", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-quiescent", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quiescent", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-writeable", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-writeable", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::trust-level", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trust-level", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::always-writeable-properties", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-writeable-properties", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-primary-store", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary-store", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-user-set-default", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-user-set-default", callback: (($obj: PersonaStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PersonaStore_ConstructProps)
    _init (config?: PersonaStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static detail_key(detail: PersonaDetail): string | null
    static $gtype: GObject.Type
}
export interface Persona_ConstructProps extends GObject.Object_ConstructProps {
    iid?: string
    uid?: string
    display_id?: string
    is_user?: boolean
    store?: PersonaStore
    individual?: Individual
}
export class Persona {
    /* Properties of Folks.Persona */
    individual: Individual
    readonly linkable_properties: string[]
    readonly writeable_properties: string[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.Persona */
    linkable_property_to_links(prop_name: string, callback: any): void
    get_iid(): string
    get_uid(): string
    get_display_id(): string
    get_is_user(): boolean
    get_store(): PersonaStore
    get_individual(): Individual | null
    get_linkable_properties(): string[]
    get_writeable_properties(): string[]
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.Persona */
    vfunc_linkable_property_to_links(prop_name: string, callback: any): void
    vfunc_get_linkable_properties(): string[]
    vfunc_get_writeable_properties(): string[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::individual", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individual", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::linkable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linkable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writeable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writeable-properties", callback: (($obj: Persona, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Persona_ConstructProps)
    _init (config?: Persona_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static build_uid(backend_name: string, persona_store_id: string, persona_id: string): string
    static split_uid(uid: string): [ /* backend_name */ string, /* persona_store_id */ string, /* persona_id */ string ]
    static $gtype: GObject.Type
}
export interface PhoneFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
}
export class PhoneFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly value_type: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.PhoneFieldDetails */
    get_normalised(): string
    /* Methods of Folks.AbstractFieldDetails */
    get_parameter_values(parameter_name: string): Gee.Collection | null
    add_parameter(parameter_name: string, parameter_value: string): void
    set_parameter(parameter_name: string, parameter_value: string): void
    extend_parameters(additional: Gee.MultiMap): void
    remove_parameter_all(parameter_name: string): void
    equal(that: AbstractFieldDetails): boolean
    parameters_equal(that: AbstractFieldDetails): boolean
    values_equal(that: AbstractFieldDetails): boolean
    hash(): number
    get_value(): object | null
    set_value(value?: object | null): void
    get_value_type(): GObject.Type
    get_id(): string
    set_id(value: string): void
    get_parameters(): Gee.MultiMap
    set_parameters(value: Gee.MultiMap): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfunc_equal(that: AbstractFieldDetails): boolean
    vfunc_parameters_equal(that: AbstractFieldDetails): boolean
    vfunc_values_equal(that: AbstractFieldDetails): boolean
    vfunc_hash(): number
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_parameters(): Gee.MultiMap
    vfunc_set_parameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::value", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-type", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parameters", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: PhoneFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PhoneFieldDetails_ConstructProps)
    _init (config?: PhoneFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, parameters?: Gee.MultiMap | null): PhoneFieldDetails
    static $gtype: GObject.Type
}
export interface PostalAddress_ConstructProps extends GObject.Object_ConstructProps {
    po_box?: string
    extension?: string
    street?: string
    locality?: string
    region?: string
    postal_code?: string
    country?: string
    address_format?: string
    uid?: string
}
export class PostalAddress {
    /* Properties of Folks.PostalAddress */
    po_box: string
    extension: string
    street: string
    locality: string
    region: string
    postal_code: string
    country: string
    address_format: string
    uid: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.PostalAddress */
    is_empty(): boolean
    equal(with_: PostalAddress): boolean
    to_string(): string
    get_po_box(): string
    set_po_box(value: string): void
    get_extension(): string
    set_extension(value: string): void
    get_street(): string
    set_street(value: string): void
    get_locality(): string
    set_locality(value: string): void
    get_region(): string
    set_region(value: string): void
    get_postal_code(): string
    set_postal_code(value: string): void
    get_country(): string
    set_country(value: string): void
    get_address_format(): string
    set_address_format(value: string): void
    get_uid(): string
    set_uid(value: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::po-box", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::po-box", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::extension", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::street", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locality", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locality", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::region", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::region", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::postal-code", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-code", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::country", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::address-format", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address-format", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uid", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: PostalAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PostalAddress_ConstructProps)
    _init (config?: PostalAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(po_box?: string | null, extension?: string | null, street?: string | null, locality?: string | null, region?: string | null, postal_code?: string | null, country?: string | null, address_format?: string | null, uid?: string | null): PostalAddress
    static $gtype: GObject.Type
}
export interface PostalAddressFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
}
export class PostalAddressFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly value_type: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.AbstractFieldDetails */
    get_parameter_values(parameter_name: string): Gee.Collection | null
    add_parameter(parameter_name: string, parameter_value: string): void
    set_parameter(parameter_name: string, parameter_value: string): void
    extend_parameters(additional: Gee.MultiMap): void
    remove_parameter_all(parameter_name: string): void
    equal(that: AbstractFieldDetails): boolean
    parameters_equal(that: AbstractFieldDetails): boolean
    values_equal(that: AbstractFieldDetails): boolean
    hash(): number
    get_value(): object | null
    set_value(value?: object | null): void
    get_value_type(): GObject.Type
    get_id(): string
    set_id(value: string): void
    get_parameters(): Gee.MultiMap
    set_parameters(value: Gee.MultiMap): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfunc_equal(that: AbstractFieldDetails): boolean
    vfunc_parameters_equal(that: AbstractFieldDetails): boolean
    vfunc_values_equal(that: AbstractFieldDetails): boolean
    vfunc_hash(): number
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_parameters(): Gee.MultiMap
    vfunc_set_parameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::value", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-type", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parameters", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: PostalAddressFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PostalAddressFieldDetails_ConstructProps)
    _init (config?: PostalAddressFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: PostalAddress, parameters?: Gee.MultiMap | null): PostalAddressFieldDetails
    static $gtype: GObject.Type
}
export interface PotentialMatch_ConstructProps extends GObject.Object_ConstructProps {
}
export class PotentialMatch {
    /* Fields of Folks.PotentialMatch */
    folks_potential_match_known_email_aliases: Gee.Set
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.PotentialMatch */
    potential_match(a: Individual, b: Individual): MatchResult
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PotentialMatch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PotentialMatch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PotentialMatch_ConstructProps)
    _init (config?: PotentialMatch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PotentialMatch
    static $gtype: GObject.Type
}
export interface Query_ConstructProps extends GObject.Object_ConstructProps {
    match_fields?: string[]
}
export class Query {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.Query */
    is_match(individual: Individual): number
    get_match_fields(): string[]
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.Query */
    vfunc_is_match(individual: Individual): number
    vfunc_get_match_fields(): string[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Query, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Query_ConstructProps)
    _init (config?: Query_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Role_ConstructProps extends GObject.Object_ConstructProps {
    organisation_name?: string
    title?: string
    role?: string
    uid?: string
}
export class Role {
    /* Properties of Folks.Role */
    organisation_name: string
    title: string
    role: string
    uid: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.Role */
    is_empty(): boolean
    to_string(): string
    get_organisation_name(): string
    set_organisation_name(value: string): void
    get_title(): string
    set_title(value: string): void
    get_role(): string
    set_role(value: string): void
    get_uid(): string
    set_uid(value: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::organisation-name", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::organisation-name", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uid", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: Role, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Role_ConstructProps)
    _init (config?: Role_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title?: string | null, organisation_name?: string | null, uid?: string | null): Role
    static equal(a: Role, b: Role): boolean
    static hash(r: Role): number
    static $gtype: GObject.Type
}
export interface RoleFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
}
export class RoleFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly value_type: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.AbstractFieldDetails */
    get_parameter_values(parameter_name: string): Gee.Collection | null
    add_parameter(parameter_name: string, parameter_value: string): void
    set_parameter(parameter_name: string, parameter_value: string): void
    extend_parameters(additional: Gee.MultiMap): void
    remove_parameter_all(parameter_name: string): void
    equal(that: AbstractFieldDetails): boolean
    parameters_equal(that: AbstractFieldDetails): boolean
    values_equal(that: AbstractFieldDetails): boolean
    hash(): number
    get_value(): object | null
    set_value(value?: object | null): void
    get_value_type(): GObject.Type
    get_id(): string
    set_id(value: string): void
    get_parameters(): Gee.MultiMap
    set_parameters(value: Gee.MultiMap): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfunc_equal(that: AbstractFieldDetails): boolean
    vfunc_parameters_equal(that: AbstractFieldDetails): boolean
    vfunc_values_equal(that: AbstractFieldDetails): boolean
    vfunc_hash(): number
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_parameters(): Gee.MultiMap
    vfunc_set_parameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::value", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-type", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parameters", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: RoleFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RoleFieldDetails_ConstructProps)
    _init (config?: RoleFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: Role, parameters?: Gee.MultiMap | null): RoleFieldDetails
    static $gtype: GObject.Type
}
export interface SearchView_ConstructProps extends GObject.Object_ConstructProps {
    query?: Query
}
export class SearchView {
    /* Properties of Folks.SearchView */
    readonly aggregator: IndividualAggregator
    query: Query
    readonly individuals: Gee.SortedSet
    readonly is_prepared: boolean
    readonly is_quiescent: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.SearchView */
    prepare(_callback_?: Gio.AsyncReadyCallback | null): void
    prepare_finish(_res_: Gio.AsyncResult): void
    unprepare(_callback_?: Gio.AsyncReadyCallback | null): void
    unprepare_finish(_res_: Gio.AsyncResult): void
    refresh(_callback_?: Gio.AsyncReadyCallback | null): void
    refresh_finish(_res_: Gio.AsyncResult): void
    get_aggregator(): IndividualAggregator
    get_query(): Query
    set_query(value: Query): void
    get_individuals(): Gee.SortedSet
    get_is_prepared(): boolean
    get_is_quiescent(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Folks.SearchView */
    connect(sigName: "individuals-changed-detailed", callback: (($obj: SearchView, added: Gee.SortedSet, removed: Gee.SortedSet) => void)): number
    connect_after(sigName: "individuals-changed-detailed", callback: (($obj: SearchView, added: Gee.SortedSet, removed: Gee.SortedSet) => void)): number
    emit(sigName: "individuals-changed-detailed", added: Gee.SortedSet, removed: Gee.SortedSet): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::aggregator", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aggregator", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::query", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::query", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::individuals", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::individuals", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-prepared", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-prepared", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-quiescent", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quiescent", callback: (($obj: SearchView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SearchView_ConstructProps)
    _init (config?: SearchView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(aggregator: IndividualAggregator, query: Query): SearchView
    static $gtype: GObject.Type
}
export interface SimpleQuery_ConstructProps extends Query_ConstructProps {
    query_string?: string
    query_locale?: string
}
export class SimpleQuery {
    /* Properties of Folks.SimpleQuery */
    query_string: string
    query_locale: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.SimpleQuery */
    get_query_string(): string
    set_query_string(value: string): void
    get_query_locale(): string | null
    set_query_locale(value?: string | null): void
    /* Methods of Folks.Query */
    is_match(individual: Individual): number
    get_match_fields(): string[]
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.Query */
    vfunc_is_match(individual: Individual): number
    vfunc_get_match_fields(): string[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::query-string", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::query-string", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::query-locale", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::query-locale", callback: (($obj: SimpleQuery, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleQuery_ConstructProps)
    _init (config?: SimpleQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(query_string: string, match_fields: string[]): SimpleQuery
    static $gtype: GObject.Type
}
export interface UrlFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
}
export class UrlFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly value_type: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.AbstractFieldDetails */
    get_parameter_values(parameter_name: string): Gee.Collection | null
    add_parameter(parameter_name: string, parameter_value: string): void
    set_parameter(parameter_name: string, parameter_value: string): void
    extend_parameters(additional: Gee.MultiMap): void
    remove_parameter_all(parameter_name: string): void
    equal(that: AbstractFieldDetails): boolean
    parameters_equal(that: AbstractFieldDetails): boolean
    values_equal(that: AbstractFieldDetails): boolean
    hash(): number
    get_value(): object | null
    set_value(value?: object | null): void
    get_value_type(): GObject.Type
    get_id(): string
    set_id(value: string): void
    get_parameters(): Gee.MultiMap
    set_parameters(value: Gee.MultiMap): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfunc_equal(that: AbstractFieldDetails): boolean
    vfunc_parameters_equal(that: AbstractFieldDetails): boolean
    vfunc_values_equal(that: AbstractFieldDetails): boolean
    vfunc_hash(): number
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_parameters(): Gee.MultiMap
    vfunc_set_parameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::value", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-type", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parameters", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: UrlFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UrlFieldDetails_ConstructProps)
    _init (config?: UrlFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, parameters?: Gee.MultiMap | null): UrlFieldDetails
    static $gtype: GObject.Type
}
export interface Utils_ConstructProps extends GObject.Object_ConstructProps {
}
export class Utils {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Utils, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Utils, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Utils_ConstructProps)
    _init (config?: Utils_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Utils
    static multi_map_str_str_equal(a: Gee.MultiMap, b: Gee.MultiMap): boolean
    static multi_map_str_afd_equal(a: Gee.MultiMap, b: Gee.MultiMap): boolean
    static set_afd_equal(a: Gee.Set, b: Gee.Set): boolean
    static set_string_afd_equal(a: Gee.Set, b: Gee.Set): boolean
    static $gtype: GObject.Type
}
export interface WebServiceFieldDetails_ConstructProps extends AbstractFieldDetails_ConstructProps {
}
export class WebServiceFieldDetails {
    /* Properties of Folks.AbstractFieldDetails */
    value: object
    readonly value_type: GObject.Type
    id: string
    parameters: Gee.MultiMap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Folks.AbstractFieldDetails */
    get_parameter_values(parameter_name: string): Gee.Collection | null
    add_parameter(parameter_name: string, parameter_value: string): void
    set_parameter(parameter_name: string, parameter_value: string): void
    extend_parameters(additional: Gee.MultiMap): void
    remove_parameter_all(parameter_name: string): void
    equal(that: AbstractFieldDetails): boolean
    parameters_equal(that: AbstractFieldDetails): boolean
    values_equal(that: AbstractFieldDetails): boolean
    hash(): number
    get_value(): object | null
    set_value(value?: object | null): void
    get_value_type(): GObject.Type
    get_id(): string
    set_id(value: string): void
    get_parameters(): Gee.MultiMap
    set_parameters(value: Gee.MultiMap): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Folks.AbstractFieldDetails */
    vfunc_equal(that: AbstractFieldDetails): boolean
    vfunc_parameters_equal(that: AbstractFieldDetails): boolean
    vfunc_values_equal(that: AbstractFieldDetails): boolean
    vfunc_hash(): number
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_parameters(): Gee.MultiMap
    vfunc_set_parameters(value: Gee.MultiMap): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::value", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-type", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parameters", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: WebServiceFieldDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebServiceFieldDetails_ConstructProps)
    _init (config?: WebServiceFieldDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, parameters?: Gee.MultiMap | null): WebServiceFieldDetails
    static $gtype: GObject.Type
}
export abstract class AbstractFieldDetailsClass {
    /* Fields of Folks.AbstractFieldDetailsClass */
    equal: (self: AbstractFieldDetails, that: AbstractFieldDetails) => boolean
    parameters_equal: (self: AbstractFieldDetails, that: AbstractFieldDetails) => boolean
    values_equal: (self: AbstractFieldDetails, that: AbstractFieldDetails) => boolean
    hash: (self: AbstractFieldDetails) => number
    static name: string
}
export class AbstractFieldDetailsPrivate {
    static name: string
}
export abstract class AvatarCacheClass {
    static name: string
}
export class AvatarCachePrivate {
    static name: string
}
export abstract class BackendStoreClass {
    static name: string
}
export class BackendStorePrivate {
    static name: string
}
export abstract class BackendClass {
    /* Fields of Folks.BackendClass */
    disable_persona_store: (self: Backend, store: PersonaStore) => void
    enable_persona_store: (self: Backend, store: PersonaStore) => void
    set_persona_stores: (self: Backend, storeids?: Gee.Set | null) => void
    prepare: (self: Backend, _callback_?: Gio.AsyncReadyCallback | null) => void
    prepare_finish: (self: Backend, _res_: Gio.AsyncResult) => void
    unprepare: (self: Backend, _callback_?: Gio.AsyncReadyCallback | null) => void
    unprepare_finish: (self: Backend, _res_: Gio.AsyncResult) => void
    static name: string
}
export class BackendPrivate {
    static name: string
}
export abstract class DebugClass {
    static name: string
}
export class DebugPrivate {
    static name: string
}
export abstract class EmailFieldDetailsClass {
    static name: string
}
export class EmailFieldDetailsPrivate {
    static name: string
}
export abstract class ExtendedFieldDetailsClass {
    static name: string
}
export class ExtendedFieldDetailsPrivate {
    static name: string
}
export abstract class ImFieldDetailsClass {
    static name: string
}
export class ImFieldDetailsPrivate {
    static name: string
}
export abstract class IndividualAggregatorClass {
    static name: string
}
export class IndividualAggregatorPrivate {
    static name: string
}
export abstract class IndividualClass {
    static name: string
}
export class IndividualPrivate {
    static name: string
}
export abstract class LocationClass {
    static name: string
}
export class LocationPrivate {
    static name: string
}
export abstract class StructuredNameClass {
    static name: string
}
export class StructuredNamePrivate {
    static name: string
}
export abstract class NoteFieldDetailsClass {
    static name: string
}
export class NoteFieldDetailsPrivate {
    static name: string
}
export abstract class ObjectCacheClass {
    /* Fields of Folks.ObjectCacheClass */
    get_serialised_object_type: (self: ObjectCache, object_version: number) => GLib.VariantType | null
    get_serialised_object_version: (self: ObjectCache) => number
    serialise_object: (self: ObjectCache, object?: object | null) => GLib.Variant
    deserialise_object: (self: ObjectCache, variant: GLib.Variant, object_version: number) => object | null
    static name: string
}
export class ObjectCachePrivate {
    static name: string
}
export abstract class PersonaStoreClass {
    /* Fields of Folks.PersonaStoreClass */
    prepare: (self: PersonaStore, _callback_?: Gio.AsyncReadyCallback | null) => void
    prepare_finish: (self: PersonaStore, _res_: Gio.AsyncResult) => void
    flush: (self: PersonaStore, _callback_?: Gio.AsyncReadyCallback | null) => void
    flush_finish: (self: PersonaStore, _res_: Gio.AsyncResult) => void
    add_persona_from_details: (self: PersonaStore, details: GLib.HashTable, _callback_?: Gio.AsyncReadyCallback | null) => void
    add_persona_from_details_finish: (self: PersonaStore, _res_: Gio.AsyncResult) => Persona | null
    remove_persona: (self: PersonaStore, persona: Persona, _callback_?: Gio.AsyncReadyCallback | null) => void
    remove_persona_finish: (self: PersonaStore, _res_: Gio.AsyncResult) => void
    static name: string
}
export class PersonaStorePrivate {
    static name: string
}
export abstract class PersonaClass {
    /* Fields of Folks.PersonaClass */
    linkable_property_to_links: (self: Persona, prop_name: string, callback: any) => void
    static name: string
}
export class PersonaPrivate {
    static name: string
}
export abstract class PhoneFieldDetailsClass {
    static name: string
}
export class PhoneFieldDetailsPrivate {
    static name: string
}
export abstract class PostalAddressClass {
    static name: string
}
export class PostalAddressPrivate {
    static name: string
}
export abstract class PostalAddressFieldDetailsClass {
    static name: string
}
export class PostalAddressFieldDetailsPrivate {
    static name: string
}
export abstract class PotentialMatchClass {
    static name: string
}
export class PotentialMatchPrivate {
    static name: string
}
export abstract class QueryClass {
    /* Fields of Folks.QueryClass */
    is_match: (self: Query, individual: Individual) => number
    static name: string
}
export class QueryPrivate {
    static name: string
}
export abstract class RoleClass {
    static name: string
}
export class RolePrivate {
    static name: string
}
export abstract class RoleFieldDetailsClass {
    static name: string
}
export class RoleFieldDetailsPrivate {
    static name: string
}
export abstract class SearchViewClass {
    static name: string
}
export class SearchViewPrivate {
    static name: string
}
export abstract class SimpleQueryClass {
    static name: string
}
export class SimpleQueryPrivate {
    static name: string
}
export abstract class UrlFieldDetailsClass {
    static name: string
}
export class UrlFieldDetailsPrivate {
    static name: string
}
export abstract class UtilsClass {
    static name: string
}
export class UtilsPrivate {
    static name: string
}
export abstract class WebServiceFieldDetailsClass {
    static name: string
}
export class WebServiceFieldDetailsPrivate {
    static name: string
}
export abstract class AliasDetailsIface {
    /* Fields of Folks.AliasDetailsIface */
    change_alias: (self: AliasDetails, alias: string, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_alias_finish: (self: AliasDetails, _res_: Gio.AsyncResult) => void
    get_alias: (self: AliasDetails) => string
    set_alias: (self: AliasDetails, value: string) => void
    static name: string
}
export abstract class AntiLinkableIface {
    /* Fields of Folks.AntiLinkableIface */
    change_anti_links: (self: AntiLinkable, anti_links: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_anti_links_finish: (self: AntiLinkable, _res_: Gio.AsyncResult) => void
    get_anti_links: (self: AntiLinkable) => Gee.Set
    set_anti_links: (self: AntiLinkable, value: Gee.Set) => void
    static name: string
}
export abstract class AvatarDetailsIface {
    /* Fields of Folks.AvatarDetailsIface */
    change_avatar: (self: AvatarDetails, avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_avatar_finish: (self: AvatarDetails, _res_: Gio.AsyncResult) => void
    get_avatar: (self: AvatarDetails) => Gio.LoadableIcon | null
    set_avatar: (self: AvatarDetails, value?: Gio.LoadableIcon | null) => void
    static name: string
}
export abstract class BirthdayDetailsIface {
    /* Fields of Folks.BirthdayDetailsIface */
    change_birthday: (self: BirthdayDetails, birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_birthday_finish: (self: BirthdayDetails, _res_: Gio.AsyncResult) => void
    change_calendar_event_id: (self: BirthdayDetails, event_id?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_calendar_event_id_finish: (self: BirthdayDetails, _res_: Gio.AsyncResult) => void
    get_birthday: (self: BirthdayDetails) => GLib.DateTime | null
    set_birthday: (self: BirthdayDetails, value?: GLib.DateTime | null) => void
    get_calendar_event_id: (self: BirthdayDetails) => string | null
    set_calendar_event_id: (self: BirthdayDetails, value?: string | null) => void
    static name: string
}
export abstract class EmailDetailsIface {
    /* Fields of Folks.EmailDetailsIface */
    change_email_addresses: (self: EmailDetails, email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_email_addresses_finish: (self: EmailDetails, _res_: Gio.AsyncResult) => void
    get_email_addresses: (self: EmailDetails) => Gee.Set
    set_email_addresses: (self: EmailDetails, value: Gee.Set) => void
    static name: string
}
export abstract class ExtendedInfoIface {
    /* Fields of Folks.ExtendedInfoIface */
    get_extended_field: (self: ExtendedInfo, name: string) => ExtendedFieldDetails | null
    change_extended_field: (self: ExtendedInfo, name: string, value: ExtendedFieldDetails, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_extended_field_finish: (self: ExtendedInfo, _res_: Gio.AsyncResult) => void
    remove_extended_field: (self: ExtendedInfo, name: string, _callback_?: Gio.AsyncReadyCallback | null) => void
    remove_extended_field_finish: (self: ExtendedInfo, _res_: Gio.AsyncResult) => void
    static name: string
}
export abstract class FavouriteDetailsIface {
    /* Fields of Folks.FavouriteDetailsIface */
    change_is_favourite: (self: FavouriteDetails, is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_is_favourite_finish: (self: FavouriteDetails, _res_: Gio.AsyncResult) => void
    get_is_favourite: (self: FavouriteDetails) => boolean
    set_is_favourite: (self: FavouriteDetails, value: boolean) => void
    static name: string
}
export abstract class GenderDetailsIface {
    /* Fields of Folks.GenderDetailsIface */
    change_gender: (self: GenderDetails, gender: Gender, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_gender_finish: (self: GenderDetails, _res_: Gio.AsyncResult) => void
    get_gender: (self: GenderDetails) => Gender
    set_gender: (self: GenderDetails, value: Gender) => void
    static name: string
}
export abstract class GroupDetailsIface {
    /* Fields of Folks.GroupDetailsIface */
    change_group: (self: GroupDetails, group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_group_finish: (self: GroupDetails, _res_: Gio.AsyncResult) => void
    change_groups: (self: GroupDetails, groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_groups_finish: (self: GroupDetails, _res_: Gio.AsyncResult) => void
    get_groups: (self: GroupDetails) => Gee.Set
    set_groups: (self: GroupDetails, value: Gee.Set) => void
    static name: string
}
export abstract class ImDetailsIface {
    /* Fields of Folks.ImDetailsIface */
    change_im_addresses: (self: ImDetails, im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_im_addresses_finish: (self: ImDetails, _res_: Gio.AsyncResult) => void
    get_im_addresses: (self: ImDetails) => Gee.MultiMap
    set_im_addresses: (self: ImDetails, value: Gee.MultiMap) => void
    static name: string
}
export abstract class InteractionDetailsIface {
    /* Fields of Folks.InteractionDetailsIface */
    get_im_interaction_count: (self: InteractionDetails) => number
    get_last_im_interaction_datetime: (self: InteractionDetails) => GLib.DateTime | null
    get_call_interaction_count: (self: InteractionDetails) => number
    get_last_call_interaction_datetime: (self: InteractionDetails) => GLib.DateTime | null
    static name: string
}
export abstract class LocalIdDetailsIface {
    /* Fields of Folks.LocalIdDetailsIface */
    change_local_ids: (self: LocalIdDetails, local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_local_ids_finish: (self: LocalIdDetails, _res_: Gio.AsyncResult) => void
    get_local_ids: (self: LocalIdDetails) => Gee.Set
    set_local_ids: (self: LocalIdDetails, value: Gee.Set) => void
    static name: string
}
export abstract class LocationDetailsIface {
    /* Fields of Folks.LocationDetailsIface */
    change_location: (self: LocationDetails, location?: Location | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_location_finish: (self: LocationDetails, _res_: Gio.AsyncResult) => void
    get_location: (self: LocationDetails) => Location | null
    set_location: (self: LocationDetails, value?: Location | null) => void
    static name: string
}
export abstract class NameDetailsIface {
    /* Fields of Folks.NameDetailsIface */
    change_structured_name: (self: NameDetails, name?: StructuredName | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_structured_name_finish: (self: NameDetails, _res_: Gio.AsyncResult) => void
    change_full_name: (self: NameDetails, full_name: string, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_full_name_finish: (self: NameDetails, _res_: Gio.AsyncResult) => void
    change_nickname: (self: NameDetails, nickname: string, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_nickname_finish: (self: NameDetails, _res_: Gio.AsyncResult) => void
    get_structured_name: (self: NameDetails) => StructuredName | null
    set_structured_name: (self: NameDetails, value?: StructuredName | null) => void
    get_full_name: (self: NameDetails) => string
    set_full_name: (self: NameDetails, value: string) => void
    get_nickname: (self: NameDetails) => string
    set_nickname: (self: NameDetails, value: string) => void
    static name: string
}
export abstract class NoteDetailsIface {
    /* Fields of Folks.NoteDetailsIface */
    change_notes: (self: NoteDetails, notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_notes_finish: (self: NoteDetails, _res_: Gio.AsyncResult) => void
    get_notes: (self: NoteDetails) => Gee.Set
    set_notes: (self: NoteDetails, value: Gee.Set) => void
    static name: string
}
export abstract class PhoneDetailsIface {
    /* Fields of Folks.PhoneDetailsIface */
    change_phone_numbers: (self: PhoneDetails, phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_phone_numbers_finish: (self: PhoneDetails, _res_: Gio.AsyncResult) => void
    get_phone_numbers: (self: PhoneDetails) => Gee.Set
    set_phone_numbers: (self: PhoneDetails, value: Gee.Set) => void
    static name: string
}
export abstract class PostalAddressDetailsIface {
    /* Fields of Folks.PostalAddressDetailsIface */
    change_postal_addresses: (self: PostalAddressDetails, postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_postal_addresses_finish: (self: PostalAddressDetails, _res_: Gio.AsyncResult) => void
    get_postal_addresses: (self: PostalAddressDetails) => Gee.Set
    set_postal_addresses: (self: PostalAddressDetails, value: Gee.Set) => void
    static name: string
}
export abstract class PresenceDetailsIface {
    /* Fields of Folks.PresenceDetailsIface */
    get_presence_type: (self: PresenceDetails) => PresenceType
    set_presence_type: (self: PresenceDetails, value: PresenceType) => void
    get_presence_message: (self: PresenceDetails) => string
    set_presence_message: (self: PresenceDetails, value: string) => void
    get_client_types: (self: PresenceDetails) => string[]
    set_client_types: (self: PresenceDetails, value: string[]) => void
    get_presence_status: (self: PresenceDetails) => string
    set_presence_status: (self: PresenceDetails, value: string) => void
    static name: string
}
export abstract class RoleDetailsIface {
    /* Fields of Folks.RoleDetailsIface */
    change_roles: (self: RoleDetails, roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_roles_finish: (self: RoleDetails, _res_: Gio.AsyncResult) => void
    get_roles: (self: RoleDetails) => Gee.Set
    set_roles: (self: RoleDetails, value: Gee.Set) => void
    static name: string
}
export abstract class UrlDetailsIface {
    /* Fields of Folks.UrlDetailsIface */
    change_urls: (self: UrlDetails, urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_urls_finish: (self: UrlDetails, _res_: Gio.AsyncResult) => void
    get_urls: (self: UrlDetails) => Gee.Set
    set_urls: (self: UrlDetails, value: Gee.Set) => void
    static name: string
}
export abstract class WebServiceDetailsIface {
    /* Fields of Folks.WebServiceDetailsIface */
    change_web_service_addresses: (self: WebServiceDetails, web_service_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback | null) => void
    change_web_service_addresses_finish: (self: WebServiceDetails, _res_: Gio.AsyncResult) => void
    get_web_service_addresses: (self: WebServiceDetails) => Gee.MultiMap
    set_web_service_addresses: (self: WebServiceDetails, value: Gee.MultiMap) => void
    static name: string
}