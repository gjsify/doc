/**
 * AppStream-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum AgreementKind {
    UNKNOWN,
    GENERIC,
    EULA,
    PRIVACY,
}
export enum ArtifactKind {
    UNKNOWN,
    SOURCE,
    BINARY,
}
export enum BundleKind {
    UNKNOWN,
    PACKAGE,
    LIMBA,
    FLATPAK,
    APPIMAGE,
    SNAP,
    TARBALL,
}
export enum ChecksumKind {
    NONE,
    SHA1,
    SHA256,
}
export enum ComponentKind {
    UNKNOWN,
    GENERIC,
    DESKTOP_APP,
    CONSOLE_APP,
    WEB_APP,
    ADDON,
    FONT,
    CODEC,
    INPUTMETHOD,
    FIRMWARE,
    DRIVER,
    LOCALIZATION,
    SERVICE,
    REPOSITORY,
    OPERATING_SYSTEM,
    ICON_THEME,
}
export enum ComponentScope {
    UNKNOWN,
    SYSTEM,
    USER,
}
export enum ContentRatingValue {
    UNKNOWN,
    NONE,
    MILD,
    MODERATE,
    INTENSE,
}
export enum FormatKind {
    UNKNOWN,
    XML,
    YAML,
    DESKTOP_ENTRY,
}
export enum FormatStyle {
    UNKNOWN,
    METAINFO,
    COLLECTION,
}
export enum FormatVersion {
    V0_6,
    V0_7,
    V0_8,
    V0_9,
    V0_10,
    V0_11,
    V0_12,
}
export enum IconKind {
    UNKNOWN,
    CACHED,
    STOCK,
    LOCAL,
    REMOTE,
}
export enum ImageKind {
    UNKNOWN,
    SOURCE,
    THUMBNAIL,
}
export enum IssueKind {
    UNKNOWN,
    GENERIC,
    CVE,
}
export enum IssueSeverity {
    UNKNOWN,
    ERROR,
    WARNING,
    INFO,
    PEDANTIC,
}
export enum LaunchableKind {
    UNKNOWN,
    DESKTOP_ID,
    SERVICE,
    COCKPIT_MANIFEST,
    URL,
}
export enum MergeKind {
    NONE,
    REPLACE,
    APPEND,
    REMOVE_COMPONENT,
}
export enum MetadataError {
    FAILED,
    PARSE,
    FORMAT_UNEXPECTED,
    NO_COMPONENT,
    VALUE_MISSING,
}
export enum PoolError {
    FAILED,
    TARGET_NOT_WRITABLE,
    INCOMPLETE,
    COLLISION,
    OLD_CACHE,
}
export enum ProvidedKind {
    UNKNOWN,
    LIBRARY,
    BINARY,
    MEDIATYPE,
    FONT,
    MODALIAS,
    PYTHON_2,
    PYTHON,
    DBUS_SYSTEM,
    DBUS_USER,
    FIRMWARE_RUNTIME,
    FIRMWARE_FLASHED,
    ID,
}
export enum RelationCompare {
    UNKNOWN,
    EQ,
    NE,
    LT,
    GT,
    LE,
    GE,
}
export enum RelationItemKind {
    UNKNOWN,
    ID,
    MODALIAS,
    KERNEL,
    MEMORY,
    FIRMWARE,
}
export enum RelationKind {
    UNKNOWN,
    REQUIRES,
    RECOMMENDS,
}
export enum ReleaseKind {
    UNKNOWN,
    STABLE,
    DEVELOPMENT,
}
export enum ReleaseUrlKind {
    UNKNOWN,
    DETAILS,
}
export enum ScreenshotKind {
    UNKNOWN,
    DEFAULT,
    EXTRA,
}
export enum ScreenshotMediaKind {
    UNKNOWN,
    IMAGE,
    VIDEO,
}
export enum SizeKind {
    UNKNOWN,
    DOWNLOAD,
    INSTALLED,
}
export enum SuggestedKind {
    UNKNOWN,
    UPSTREAM,
    HEURISTIC,
}
export enum TranslationKind {
    UNKNOWN,
    GETTEXT,
    QT,
}
export enum UrgencyKind {
    UNKNOWN,
    LOW,
    MEDIUM,
    HIGH,
    CRITICAL,
}
export enum UrlKind {
    UNKNOWN,
    HOMEPAGE,
    BUGTRACKER,
    FAQ,
    HELP,
    DONATION,
    TRANSLATE,
    CONTACT,
}
export enum VideoCodecKind {
    UNKNOWN,
    VP9,
    AV1,
}
export enum VideoContainerKind {
    UNKNOWN,
    MKV,
    WEBM,
}
export enum CacheFlags {
    NONE,
    USE_USER,
    USE_SYSTEM,
    NO_CLEAR,
}
export enum ParseFlags {
    NONE,
    IGNORE_MEDIABASEURL,
}
export enum PoolFlags {
    NONE,
    READ_COLLECTION,
    READ_METAINFO,
    READ_DESKTOP_FILES,
}
export enum ValueFlags {
    NONE,
    DUPLICATE_CHECK,
    NO_TRANSLATION_FALLBACK,
}
export function component_kind_from_string(kind_str: string): ComponentKind
export function component_kind_to_string(kind: ComponentKind): string
export function format_kind_from_string(kind_str: string): FormatKind
export function format_kind_to_string(kind: FormatKind): string
export function format_version_from_string(version_str: string): FormatVersion
export function format_version_to_string(version: FormatVersion): string
export function get_appstream_version(): string
export function get_current_distro_component_id(): string
export function get_default_categories(with_special: boolean): Category[]
export function get_license_url(license: string): string
export function is_spdx_license_expression(license: string): boolean
export function is_spdx_license_id(license_id: string): boolean
export function license_is_metadata_license(license: string): boolean
export function license_to_spdx_id(license: string): string
export function markup_convert_simple(markup: string): string
export function merge_kind_from_string(kind_str: string): MergeKind
export function merge_kind_to_string(kind: MergeKind): string
export function size_kind_from_string(size_kind: string): SizeKind
export function size_kind_to_string(size_kind: SizeKind): string
export function spdx_license_detokenize(license_tokens: string): string | null
export function spdx_license_tokenize(license: string): string[] | null
export function urgency_kind_from_string(urgency_kind: string): UrgencyKind
export function urgency_kind_to_string(urgency_kind: UrgencyKind): string
export function url_kind_from_string(url_kind: string): UrlKind
export function url_kind_to_string(url_kind: UrlKind): string
export function utils_compare_versions(a: string, b: string): number
export function utils_is_category_name(category_name: string): boolean
export function utils_is_desktop_environment(desktop: string): boolean
export function utils_is_tld(tld: string): boolean
export function utils_locale_is_compatible(locale1: string, locale2: string): boolean
export function utils_sort_components_into_categories(cpts: Component[], categories: Category[], check_duplicates: boolean): void
export interface Agreement_ConstructProps extends GObject.Object_ConstructProps {
}
export class Agreement {
    /* Fields of AppStream.Agreement */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Agreement */
    add_section(agreement_section: AgreementSection): void
    get_kind(): AgreementKind
    get_section_default(): AgreementSection | null
    get_sections(): AgreementSection[]
    get_version_id(): string
    set_kind(kind: AgreementKind): void
    set_version_id(version_id: string): void
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
    connect(sigName: "notify", callback: (($obj: Agreement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Agreement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Agreement_ConstructProps)
    _init (config?: Agreement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Agreement
    static kind_from_string(value: string): AgreementKind
    static kind_to_string(value: AgreementKind): string
    static $gtype: GObject.Type
}
export interface AgreementSection_ConstructProps extends GObject.Object_ConstructProps {
}
export class AgreementSection {
    /* Fields of AppStream.AgreementSection */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.AgreementSection */
    get_active_locale(): string
    get_description(): string
    get_kind(): string
    get_name(): string
    set_active_locale(locale: string): void
    set_description(desc: string, locale?: string | null): void
    set_kind(kind: string): void
    set_name(name: string, locale?: string | null): void
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
    connect(sigName: "notify", callback: (($obj: AgreementSection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AgreementSection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AgreementSection_ConstructProps)
    _init (config?: AgreementSection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AgreementSection
    static $gtype: GObject.Type
}
export interface Artifact_ConstructProps extends GObject.Object_ConstructProps {
}
export class Artifact {
    /* Fields of AppStream.Artifact */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Artifact */
    add_checksum(cs: Checksum): void
    add_location(location: string): void
    get_bundle_kind(): BundleKind
    get_checksum(kind: ChecksumKind): Checksum | null
    get_checksums(): Checksum[]
    get_kind(): ArtifactKind
    get_locations(): string[]
    get_platform(): string
    get_size(kind: SizeKind): number
    set_bundle_kind(kind: BundleKind): void
    set_kind(kind: ArtifactKind): void
    set_platform(platform: string): void
    set_size(size: number, kind: SizeKind): void
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
    connect(sigName: "notify", callback: (($obj: Artifact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Artifact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Artifact_ConstructProps)
    _init (config?: Artifact_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Artifact
    static kind_from_string(kind: string): ArtifactKind
    static kind_to_string(kind: ArtifactKind): string
    static $gtype: GObject.Type
}
export interface Bundle_ConstructProps extends GObject.Object_ConstructProps {
}
export class Bundle {
    /* Fields of AppStream.Bundle */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Bundle */
    get_id(): string
    get_kind(): BundleKind
    set_id(id: string): void
    set_kind(kind: BundleKind): void
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
    connect(sigName: "notify", callback: (($obj: Bundle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Bundle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Bundle_ConstructProps)
    _init (config?: Bundle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Bundle
    static kind_from_string(bundle_str: string): BundleKind
    static kind_to_string(kind: BundleKind): string
    static $gtype: GObject.Type
}
export interface Category_ConstructProps extends GObject.Object_ConstructProps {
    icon?: string
    id?: string
    name?: string
}
export class Category {
    /* Properties of AppStream.Category */
    readonly children: object
    icon: string
    id: string
    name: string
    readonly summary: string
    /* Fields of AppStream.Category */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Category */
    add_child(subcat: Category): void
    add_component(cpt: Component): void
    add_desktop_group(group_name: string): void
    get_children(): Category[]
    get_components(): Component[]
    get_desktop_groups(): string[]
    get_icon(): string
    get_id(): string
    get_name(): string
    get_summary(): string
    has_children(): boolean
    has_component(cpt: Component): boolean
    remove_child(subcat: Category): void
    set_icon(value: string): void
    set_id(id: string): void
    set_name(value: string): void
    set_summary(value: string): void
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
    connect(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::children", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Category_ConstructProps)
    _init (config?: Category_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Category
    static $gtype: GObject.Type
}
export interface Checksum_ConstructProps extends GObject.Object_ConstructProps {
}
export class Checksum {
    /* Fields of AppStream.Checksum */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Checksum */
    get_kind(): ChecksumKind
    get_value(): string
    set_kind(kind: ChecksumKind): void
    set_value(value: string): void
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
    connect(sigName: "notify", callback: (($obj: Checksum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Checksum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Checksum_ConstructProps)
    _init (config?: Checksum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Checksum
    static kind_from_string(kind_str: string): ChecksumKind
    static kind_to_string(kind: ChecksumKind): string
    static $gtype: GObject.Type
}
export interface Component_ConstructProps extends GObject.Object_ConstructProps {
    description?: string
    developer_name?: string
    id?: string
    keywords?: string[]
    kind?: ComponentKind
    name?: string
    pkgnames?: string[]
    project_group?: string
    project_license?: string
    summary?: string
}
export class Component {
    /* Properties of AppStream.Component */
    readonly categories: object[]
    description: string
    developer_name: string
    readonly icons: Icon[]
    id: string
    keywords: string[]
    kind: ComponentKind
    name: string
    pkgnames: string[]
    project_group: string
    project_license: string
    readonly screenshots: Screenshot[]
    summary: string
    readonly urls: GLib.HashTable
    /* Fields of AppStream.Component */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Component */
    add_addon(addon: Component): void
    add_agreement(agreement: Agreement): void
    add_bundle(bundle: Bundle): void
    add_category(category: string): void
    add_content_rating(content_rating: ContentRating): void
    add_extends(cpt_id: string): void
    add_icon(icon: Icon): void
    add_language(locale: string | null, percentage: number): void
    add_launchable(launchable: Launchable): void
    add_provided(prov: Provided): void
    add_relation(relation: Relation): void
    add_release(release: Release): void
    add_screenshot(sshot: Screenshot): void
    add_suggested(suggested: Suggested): void
    add_translation(tr: Translation): void
    add_url(url_kind: UrlKind, url: string): void
    get_active_locale(): string
    get_addons(): Component[]
    get_agreement_by_kind(kind: AgreementKind): Agreement | null
    get_bundle(bundle_kind: BundleKind): Bundle | null
    get_bundles(): Bundle[]
    get_categories(): string[]
    get_compulsory_for_desktops(): string[]
    get_content_rating(kind: string): ContentRating | null
    get_content_ratings(): ContentRating[]
    get_custom(): GLib.HashTable
    get_custom_value(key: string): string
    get_data_id(): string
    get_description(): string
    get_desktop_id(): string
    get_developer_name(): string
    get_extends(): string[] | null
    get_icon_by_size(width: number, height: number): Icon | null
    get_icons(): Icon[]
    get_id(): string
    get_keywords(): string[]
    get_keywords_table(): GLib.HashTable
    get_kind(): ComponentKind
    get_language(locale?: string | null): number
    get_languages(): string[]
    get_launchable(kind: LaunchableKind): Launchable | null
    get_launchables(): Launchable[]
    get_merge_kind(): MergeKind
    get_metadata_license(): string
    get_name(): string
    get_name_table(): GLib.HashTable
    get_origin(): string
    get_pkgname(): string
    get_pkgnames(): string[]
    get_project_group(): string
    get_project_license(): string
    get_provided(): Provided[]
    get_provided_for_kind(kind: ProvidedKind): Provided | null
    get_recommends(): Relation[]
    get_releases(): Release[]
    get_requires(): Relation[]
    get_scope(): ComponentScope
    get_screenshots(): Screenshot[]
    get_search_tokens(): string[]
    get_source_pkgname(): string
    get_suggested(): Suggested[]
    get_summary(): string
    get_summary_table(): GLib.HashTable
    get_translations(): Translation[]
    get_url(url_kind: UrlKind): string | null
    get_value_flags(): ValueFlags
    has_bundle(): boolean
    has_category(category: string): boolean
    insert_custom_value(key: string, value: string): boolean
    is_compulsory_for_desktop(desktop: string): boolean
    is_ignored(): boolean
    is_member_of_category(category: Category): boolean
    is_valid(): boolean
    search_matches(term: string): number
    search_matches_all(terms: string): number
    set_active_locale(locale?: string | null): void
    set_compulsory_for_desktop(desktop: string): void
    set_data_id(value: string): void
    set_description(value: string, locale?: string | null): void
    set_developer_name(value: string, locale?: string | null): void
    set_id(value: string): void
    set_keywords(value: string[], locale?: string | null): void
    set_kind(value: ComponentKind): void
    set_merge_kind(kind: MergeKind): void
    set_metadata_license(value: string): void
    set_name(value: string, locale?: string | null): void
    set_origin(origin: string): void
    set_pkgnames(packages: string[]): void
    set_project_group(value: string): void
    set_project_license(value: string): void
    set_scope(scope: ComponentScope): void
    set_source_pkgname(spkgname: string): void
    set_summary(value: string, locale?: string | null): void
    set_value_flags(flags: ValueFlags): void
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::categories", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::developer-name", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::developer-name", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icons", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icons", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keywords", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keywords", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::kind", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pkgnames", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pkgnames", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::project-group", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::project-group", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::project-license", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::project-license", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::screenshots", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screenshots", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urls", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Component_ConstructProps)
    _init (config?: Component_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Component
    static scope_from_string(scope_str: string): MergeKind
    static scope_to_string(scope: ComponentScope): string
    static $gtype: GObject.Type
}
export interface ContentRating_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContentRating {
    /* Fields of AppStream.ContentRating */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.ContentRating */
    get_kind(): string
    get_minimum_age(): number
    get_value(id: string): ContentRatingValue
    set_kind(kind: string): void
    set_value(id: string, value: ContentRatingValue): void
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
    connect(sigName: "notify", callback: (($obj: ContentRating, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentRating, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContentRating_ConstructProps)
    _init (config?: ContentRating_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContentRating
    static value_from_string(value: string): ContentRatingValue
    static value_to_string(value: ContentRatingValue): string
    static $gtype: GObject.Type
}
export interface DistroDetails_ConstructProps extends GObject.Object_ConstructProps {
}
export class DistroDetails {
    /* Properties of AppStream.DistroDetails */
    readonly homepage: string
    readonly id: string
    readonly name: string
    readonly version: string
    /* Fields of AppStream.DistroDetails */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.DistroDetails */
    get_bool(key: string, default_val: boolean): boolean
    get_cid(): string
    get_homepage(): string
    get_id(): string
    get_name(): string
    get_str(key: string): string
    get_version(): string
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
    connect(sigName: "notify", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::homepage", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homepage", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: DistroDetails, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DistroDetails_ConstructProps)
    _init (config?: DistroDetails_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DistroDetails
    static $gtype: GObject.Type
}
export interface Icon_ConstructProps extends GObject.Object_ConstructProps {
}
export class Icon {
    /* Fields of AppStream.Icon */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Icon */
    get_filename(): string
    get_height(): number
    get_kind(): IconKind
    get_name(): string
    get_scale(): number
    get_url(): string
    get_width(): number
    set_filename(filename: string): void
    set_height(height: number): void
    set_kind(kind: IconKind): void
    set_name(name: string): void
    set_scale(scale: number): void
    set_url(url: string): void
    set_width(width: number): void
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
    connect(sigName: "notify", callback: (($obj: Icon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Icon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Icon_ConstructProps)
    _init (config?: Icon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Icon
    static kind_from_string(kind_str: string): IconKind
    static kind_to_string(kind: IconKind): string
    static $gtype: GObject.Type
}
export interface Image_ConstructProps extends GObject.Object_ConstructProps {
}
export class Image {
    /* Fields of AppStream.Image */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Image */
    get_height(): number
    get_kind(): ImageKind
    get_locale(): string
    get_url(): string
    get_width(): number
    set_height(height: number): void
    set_kind(kind: ImageKind): void
    set_locale(locale: string): void
    set_url(url: string): void
    set_width(width: number): void
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
    static new(): Image
    static kind_from_string(kind: string): ImageKind
    static kind_to_string(kind: ImageKind): string
    static $gtype: GObject.Type
}
export interface Issue_ConstructProps extends GObject.Object_ConstructProps {
}
export class Issue {
    /* Fields of AppStream.Issue */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Issue */
    get_id(): string
    get_kind(): IssueKind
    get_url(): string
    set_id(id: string): void
    set_kind(kind: IssueKind): void
    set_url(url: string): void
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
    connect(sigName: "notify", callback: (($obj: Issue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Issue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Issue_ConstructProps)
    _init (config?: Issue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Issue
    static kind_from_string(kind_str: string): IssueKind
    static kind_to_string(kind: IssueKind): string
    static severity_from_string(str: string): IssueSeverity
    static severity_to_string(severity: IssueSeverity): string
    static $gtype: GObject.Type
}
export interface Launchable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Launchable {
    /* Fields of AppStream.Launchable */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Launchable */
    add_entry(entry: string): void
    get_entries(): string[]
    get_kind(): LaunchableKind
    set_kind(kind: LaunchableKind): void
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
    connect(sigName: "notify", callback: (($obj: Launchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Launchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Launchable_ConstructProps)
    _init (config?: Launchable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Launchable
    static kind_from_string(kind_str: string): LaunchableKind
    static kind_to_string(kind: LaunchableKind): string
    static $gtype: GObject.Type
}
export interface Metadata_ConstructProps extends GObject.Object_ConstructProps {
}
export class Metadata {
    /* Fields of AppStream.Metadata */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Metadata */
    add_component(cpt: Component): void
    clear_components(): void
    component_to_metainfo(format: FormatKind): string
    components_to_collection(format: FormatKind): string
    get_architecture(): string
    get_component(): Component | null
    get_components(): Component[]
    get_format_style(): FormatStyle
    get_format_version(): FormatVersion
    get_locale(): string
    get_origin(): string
    get_parse_flags(): ParseFlags
    get_update_existing(): boolean
    get_write_header(): boolean
    parse(data: string, format: FormatKind): void
    parse_desktop_data(data: string, cid: string): void
    parse_file(file: Gio.File, format: FormatKind): void
    save_collection(fname: string, format: FormatKind): void
    save_metainfo(fname: string, format: FormatKind): void
    set_architecture(arch: string): void
    set_format_style(mode: FormatStyle): void
    set_format_version(version: FormatVersion): void
    set_locale(locale: string): void
    set_origin(origin: string): void
    set_parse_flags(flags: ParseFlags): void
    set_update_existing(update: boolean): void
    set_write_header(wheader: boolean): void
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
    connect(sigName: "notify", callback: (($obj: Metadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Metadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Metadata_ConstructProps)
    _init (config?: Metadata_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Metadata
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Pool_ConstructProps extends GObject.Object_ConstructProps {
}
export class Pool {
    /* Fields of AppStream.Pool */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Pool */
    add_component(cpt: Component): boolean
    add_metadata_location(directory: string): void
    clear(): void
    clear2(): boolean
    clear_metadata_locations(): void
    get_cache_flags(): CacheFlags
    get_cache_location(): string
    get_components(): Component[]
    get_components_by_categories(categories: string): Component[]
    get_components_by_id(cid: string): Component[]
    get_components_by_kind(kind: ComponentKind): Component[]
    get_components_by_launchable(kind: LaunchableKind, id: string): Component[]
    get_components_by_provided_item(kind: ProvidedKind, item: string): Component[]
    get_flags(): PoolFlags
    get_locale(): string
    load(cancellable?: Gio.Cancellable | null): boolean
    load_cache_file(fname: string): boolean
    refresh_cache(force: boolean): boolean
    save_cache_file(fname: string): boolean
    search(search: string): Component[]
    set_cache_flags(flags: CacheFlags): void
    set_cache_location(fname: string): void
    set_flags(flags: PoolFlags): void
    set_locale(locale: string): void
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
    connect(sigName: "notify", callback: (($obj: Pool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pool_ConstructProps)
    _init (config?: Pool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Pool
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Provided_ConstructProps extends GObject.Object_ConstructProps {
}
export class Provided {
    /* Fields of AppStream.Provided */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Provided */
    add_item(item: string): void
    get_items(): string[]
    get_kind(): ProvidedKind
    has_item(item: string): boolean
    set_kind(kind: ProvidedKind): void
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
    connect(sigName: "notify", callback: (($obj: Provided, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Provided, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Provided_ConstructProps)
    _init (config?: Provided_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Provided
    static kind_from_string(kind_str: string): ProvidedKind
    static kind_to_l10n_string(kind: ProvidedKind): string
    static kind_to_string(kind: ProvidedKind): string
    static $gtype: GObject.Type
}
export interface Relation_ConstructProps extends GObject.Object_ConstructProps {
}
export class Relation {
    /* Fields of AppStream.Relation */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Relation */
    get_compare(): RelationCompare
    get_item_kind(): RelationItemKind
    get_kind(): RelationKind
    get_value(): string
    get_value_int(): number
    get_version(): string
    set_compare(compare: RelationCompare): void
    set_item_kind(kind: RelationItemKind): void
    set_kind(kind: RelationKind): void
    set_value(value: string): void
    set_version(version: string): void
    version_compare(version: string): boolean
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
    connect(sigName: "notify", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Relation_ConstructProps)
    _init (config?: Relation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Relation
    static compare_from_string(compare_str: string): RelationCompare
    static compare_to_string(compare: RelationCompare): string
    static compare_to_symbols_string(compare: RelationCompare): string
    static item_kind_from_string(kind_str: string): RelationItemKind
    static item_kind_to_string(kind: RelationItemKind): string
    static kind_from_string(kind_str: string): RelationKind
    static kind_to_string(kind: RelationKind): string
    static $gtype: GObject.Type
}
export interface Release_ConstructProps extends GObject.Object_ConstructProps {
}
export class Release {
    /* Fields of AppStream.Release */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Release */
    add_artifact(artifact: Artifact): void
    add_checksum(cs: Checksum): void
    add_issue(issue: Issue): void
    add_location(location: string): void
    get_active_locale(): string
    get_artifacts(): Artifact[]
    get_checksum(kind: ChecksumKind): Checksum | null
    get_checksums(): Checksum[]
    get_date(): string
    get_date_eol(): string
    get_description(): string | null
    get_issues(): Issue[]
    get_kind(): ReleaseKind
    get_locations(): string[]
    get_size(kind: SizeKind): number
    get_timestamp(): number
    get_timestamp_eol(): number
    get_urgency(): UrgencyKind
    get_url(url_kind: ReleaseUrlKind): string | null
    get_version(): string | null
    set_active_locale(locale: string): void
    set_date(date: string): void
    set_date_eol(date: string): void
    set_description(description: string, locale: string): void
    set_kind(kind: ReleaseKind): void
    set_size(size: number, kind: SizeKind): void
    set_timestamp(timestamp: number): void
    set_timestamp_eol(timestamp: number): void
    set_urgency(urgency: UrgencyKind): void
    set_url(url_kind: ReleaseUrlKind, url: string): void
    set_version(version: string): void
    vercmp(rel2: Release): number
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
    connect(sigName: "notify", callback: (($obj: Release, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Release, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Release_ConstructProps)
    _init (config?: Release_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Release
    static kind_from_string(kind_str: string): ReleaseKind
    static kind_to_string(kind: ReleaseKind): string
    static url_kind_from_string(kind_str: string): ReleaseUrlKind
    static url_kind_to_string(kind: ReleaseUrlKind): string
    static $gtype: GObject.Type
}
export interface Screenshot_ConstructProps extends GObject.Object_ConstructProps {
}
export class Screenshot {
    /* Fields of AppStream.Screenshot */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Screenshot */
    add_image(image: Image): void
    add_video(video: Video): void
    get_active_locale(): string
    get_caption(): string
    get_images(): Image[]
    get_images_all(): Image[]
    get_kind(): ScreenshotKind
    get_media_kind(): ScreenshotMediaKind
    get_videos(): Video[]
    is_valid(): boolean
    set_active_locale(locale: string): void
    set_caption(caption: string, locale: string): void
    set_kind(kind: ScreenshotKind): void
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
    connect(sigName: "notify", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Screenshot_ConstructProps)
    _init (config?: Screenshot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Screenshot
    static kind_from_string(kind: string): ScreenshotKind
    static kind_to_string(kind: ScreenshotKind): string
    static $gtype: GObject.Type
}
export interface Suggested_ConstructProps extends GObject.Object_ConstructProps {
}
export class Suggested {
    /* Fields of AppStream.Suggested */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Suggested */
    add_id(cid: string): void
    get_ids(): string[]
    get_kind(): SuggestedKind
    is_valid(): boolean
    set_kind(kind: SuggestedKind): void
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
    connect(sigName: "notify", callback: (($obj: Suggested, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Suggested, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Suggested_ConstructProps)
    _init (config?: Suggested_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Suggested
    static kind_from_string(kind_str: string): SuggestedKind
    static kind_to_string(kind: SuggestedKind): string
    static $gtype: GObject.Type
}
export interface Translation_ConstructProps extends GObject.Object_ConstructProps {
}
export class Translation {
    /* Fields of AppStream.Translation */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Translation */
    get_id(): string
    get_kind(): TranslationKind
    set_id(id: string): void
    set_kind(kind: TranslationKind): void
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
    connect(sigName: "notify", callback: (($obj: Translation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Translation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Translation_ConstructProps)
    _init (config?: Translation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Translation
    static kind_from_string(kind_str: string): TranslationKind
    static kind_to_string(kind: TranslationKind): string
    static $gtype: GObject.Type
}
export interface Validator_ConstructProps extends GObject.Object_ConstructProps {
}
export class Validator {
    /* Fields of AppStream.Validator */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Validator */
    clear_issues(): void
    get_check_urls(): boolean
    get_issues(): ValidatorIssue[]
    get_issues_per_file(): GLib.HashTable
    get_report_yaml(yaml_report: string): boolean
    get_tag_explanation(tag: string): string
    get_tag_severity(tag: string): IssueSeverity
    get_tags(): string[]
    set_check_urls(value: boolean): void
    validate_data(metadata: string): boolean
    validate_file(metadata_file: Gio.File): boolean
    validate_tree(root_dir: string): boolean
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
    connect(sigName: "notify", callback: (($obj: Validator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Validator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Validator_ConstructProps)
    _init (config?: Validator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Validator
    static $gtype: GObject.Type
}
export interface ValidatorIssue_ConstructProps extends GObject.Object_ConstructProps {
}
export class ValidatorIssue {
    /* Fields of AppStream.ValidatorIssue */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.ValidatorIssue */
    get_cid(): string
    get_explanation(): string
    get_filename(): string
    get_hint(): string
    get_importance(): IssueSeverity
    get_line(): number
    get_location(): string
    get_message(): string
    get_severity(): IssueSeverity
    get_tag(): string
    set_cid(cid: string): void
    set_explanation(explanation: string): void
    set_filename(fname: string): void
    set_hint(hint: string): void
    set_importance(importance: IssueSeverity): void
    set_line(line: number): void
    set_message(message: string): void
    set_severity(severity: IssueSeverity): void
    set_tag(tag: string): void
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
    connect(sigName: "notify", callback: (($obj: ValidatorIssue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ValidatorIssue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ValidatorIssue_ConstructProps)
    _init (config?: ValidatorIssue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ValidatorIssue
    static $gtype: GObject.Type
}
export interface Video_ConstructProps extends GObject.Object_ConstructProps {
}
export class Video {
    /* Fields of AppStream.Video */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Video */
    get_codec_kind(): VideoCodecKind
    get_container_kind(): VideoContainerKind
    get_height(): number
    get_locale(): string
    get_url(): string
    get_width(): number
    set_codec_kind(kind: VideoCodecKind): void
    set_container_kind(kind: VideoContainerKind): void
    set_height(height: number): void
    set_locale(locale: string): void
    set_url(url: string): void
    set_width(width: number): void
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
    connect(sigName: "notify", callback: (($obj: Video, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Video, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Video_ConstructProps)
    _init (config?: Video_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Video
    static codec_kind_from_string(str: string): VideoCodecKind
    static codec_kind_to_string(kind: VideoCodecKind): string
    static container_kind_from_string(str: string): VideoContainerKind
    static container_kind_to_string(kind: VideoContainerKind): string
    static $gtype: GObject.Type
}
export abstract class AgreementClass {
    /* Fields of AppStream.AgreementClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class AgreementSectionClass {
    /* Fields of AppStream.AgreementSectionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ArtifactClass {
    /* Fields of AppStream.ArtifactClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class BundleClass {
    /* Fields of AppStream.BundleClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CategoryClass {
    /* Fields of AppStream.CategoryClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ChecksumClass {
    /* Fields of AppStream.ChecksumClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ComponentClass {
    /* Fields of AppStream.ComponentClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ContentRatingClass {
    /* Fields of AppStream.ContentRatingClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DistroDetailsClass {
    /* Fields of AppStream.DistroDetailsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class IconClass {
    /* Fields of AppStream.IconClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ImageClass {
    /* Fields of AppStream.ImageClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class IssueClass {
    /* Fields of AppStream.IssueClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class LaunchableClass {
    /* Fields of AppStream.LaunchableClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class MetadataClass {
    /* Fields of AppStream.MetadataClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class PoolClass {
    /* Fields of AppStream.PoolClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ProvidedClass {
    /* Fields of AppStream.ProvidedClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RelationClass {
    /* Fields of AppStream.RelationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ReleaseClass {
    /* Fields of AppStream.ReleaseClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ScreenshotClass {
    /* Fields of AppStream.ScreenshotClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SuggestedClass {
    /* Fields of AppStream.SuggestedClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class TranslationClass {
    /* Fields of AppStream.TranslationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ValidatorClass {
    /* Fields of AppStream.ValidatorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ValidatorIssueClass {
    /* Fields of AppStream.ValidatorIssueClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class VideoClass {
    /* Fields of AppStream.VideoClass */
    parent_class: GObject.ObjectClass
    static name: string
}