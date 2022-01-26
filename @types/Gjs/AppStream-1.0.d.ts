/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * AppStream-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace AppStream {

enum AgreementKind {
    UNKNOWN,
    GENERIC,
    EULA,
    PRIVACY,
}
enum ArtifactKind {
    UNKNOWN,
    SOURCE,
    BINARY,
}
enum BundleKind {
    UNKNOWN,
    PACKAGE,
    LIMBA,
    FLATPAK,
    APPIMAGE,
    SNAP,
    TARBALL,
    CABINET,
}
enum ChecksumKind {
    NONE,
    SHA1,
    SHA256,
    BLAKE2B,
    BLAKE2S,
}
enum ComponentKind {
    UNKNOWN,
    GENERIC,
    DESKTOP_APP,
    CONSOLE_APP,
    WEB_APP,
    ADDON,
    FONT,
    CODEC,
    INPUT_METHOD,
    FIRMWARE,
    DRIVER,
    LOCALIZATION,
    SERVICE,
    REPOSITORY,
    OPERATING_SYSTEM,
    ICON_THEME,
    RUNTIME,
}
enum ComponentScope {
    UNKNOWN,
    SYSTEM,
    USER,
}
enum ContentRatingSystem {
    UNKNOWN,
    INCAA,
    ACB,
    DJCTQ,
    GSRR,
    PEGI,
    KAVI,
    USK,
    ESRA,
    CERO,
    OFLCNZ,
    RUSSIA,
    MDA,
    GRAC,
    ESRB,
    IARC,
}
enum ContentRatingValue {
    UNKNOWN,
    NONE,
    MILD,
    MODERATE,
    INTENSE,
}
enum ControlKind {
    UNKNOWN,
    POINTING,
    KEYBOARD,
    CONSOLE,
    TOUCH,
    GAMEPAD,
    VOICE,
    VISION,
    TV_REMOTE,
    TABLET,
}
enum DisplayLengthKind {
    UNKNOWN,
    XSMALL,
    SMALL,
    MEDIUM,
    LARGE,
    XLARGE,
}
enum DisplaySideKind {
    UNKNOWN,
    SHORTEST,
    LONGEST,
}
enum FormatKind {
    UNKNOWN,
    XML,
    YAML,
    DESKTOP_ENTRY,
}
enum FormatStyle {
    UNKNOWN,
    METAINFO,
    COLLECTION,
}
enum FormatVersion {
    V0_6,
    V0_7,
    V0_8,
    V0_9,
    V0_10,
    V0_11,
    V0_12,
    V0_13,
    V0_14,
    UNKNOWN,
}
enum IconKind {
    UNKNOWN,
    CACHED,
    STOCK,
    LOCAL,
    REMOTE,
}
enum ImageKind {
    UNKNOWN,
    SOURCE,
    THUMBNAIL,
}
enum IssueKind {
    UNKNOWN,
    GENERIC,
    CVE,
}
enum IssueSeverity {
    UNKNOWN,
    ERROR,
    WARNING,
    INFO,
    PEDANTIC,
}
enum LaunchableKind {
    UNKNOWN,
    DESKTOP_ID,
    SERVICE,
    COCKPIT_MANIFEST,
    URL,
}
enum MergeKind {
    NONE,
    REPLACE,
    APPEND,
    REMOVE_COMPONENT,
}
enum MetadataError {
    FAILED,
    PARSE,
    FORMAT_UNEXPECTED,
    NO_COMPONENT,
    VALUE_MISSING,
}
enum MetadataLocation {
    SHARED,
    STATE,
    CACHE,
    USER,
}
enum PoolError {
    FAILED,
    TARGET_NOT_WRITABLE,
    INCOMPLETE,
    COLLISION,
    OLD_CACHE,
}
enum ProvidedKind {
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
enum RelationCompare {
    UNKNOWN,
    EQ,
    NE,
    LT,
    GT,
    LE,
    GE,
}
enum RelationItemKind {
    UNKNOWN,
    ID,
    MODALIAS,
    KERNEL,
    MEMORY,
    FIRMWARE,
    CONTROL,
    DISPLAY_LENGTH,
    HARDWARE,
}
enum RelationKind {
    UNKNOWN,
    REQUIRES,
    RECOMMENDS,
    SUPPORTS,
}
enum ReleaseKind {
    UNKNOWN,
    STABLE,
    DEVELOPMENT,
}
enum ReleaseUrlKind {
    UNKNOWN,
    DETAILS,
}
enum ScreenshotKind {
    UNKNOWN,
    DEFAULT,
    EXTRA,
}
enum ScreenshotMediaKind {
    UNKNOWN,
    IMAGE,
    VIDEO,
}
enum SizeKind {
    UNKNOWN,
    DOWNLOAD,
    INSTALLED,
}
enum SuggestedKind {
    UNKNOWN,
    UPSTREAM,
    HEURISTIC,
}
enum TranslationKind {
    UNKNOWN,
    GETTEXT,
    QT,
}
enum UrgencyKind {
    UNKNOWN,
    LOW,
    MEDIUM,
    HIGH,
    CRITICAL,
}
enum UrlKind {
    UNKNOWN,
    HOMEPAGE,
    BUGTRACKER,
    FAQ,
    HELP,
    DONATION,
    TRANSLATE,
    CONTACT,
}
enum UtilsError {
    FAILED,
}
enum VideoCodecKind {
    UNKNOWN,
    VP9,
    AV1,
}
enum VideoContainerKind {
    UNKNOWN,
    MKV,
    WEBM,
}
enum CacheFlags {
    NONE,
    USE_USER,
    USE_SYSTEM,
    NO_CLEAR,
    REFRESH_SYSTEM,
}
enum DataIdMatchFlags {
    NONE,
    SCOPE,
    BUNDLE_KIND,
    ORIGIN,
    ID,
    BRANCH,
}
enum ParseFlags {
    NONE,
    IGNORE_MEDIABASEURL,
}
enum PoolFlags {
    NONE,
    LOAD_OS_COLLECTION,
    LOAD_OS_METAINFO,
    LOAD_OS_DESKTOP_FILES,
    LOAD_FLATPAK,
    IGNORE_CACHE_AGE,
    RESOLVE_ADDONS,
    PREFER_OS_METAINFO,
    MONITOR,
}
enum ReviewFlags {
    NONE,
    SELF,
    VOTED,
}
enum SearchTokenMatch {
    NONE,
    MEDIATYPE,
    PKGNAME,
    ORIGIN,
    DESCRIPTION,
    SUMMARY,
    KEYWORD,
    NAME,
    ID,
}
enum ValueFlags {
    NONE,
    DUPLICATE_CHECK,
    NO_TRANSLATION_FALLBACK,
}
enum VercmpFlags {
    NONE,
    IGNORE_EPOCH,
}
const IMAGE_LARGE_HEIGHT: number
const IMAGE_LARGE_WIDTH: number
const IMAGE_NORMAL_HEIGHT: number
const IMAGE_NORMAL_WIDTH: number
const IMAGE_THUMBNAIL_HEIGHT: number
const IMAGE_THUMBNAIL_WIDTH: number
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
function agreement_kind_from_string(value: string): AgreementKind
function agreement_kind_to_string(value: AgreementKind): string
function artifact_kind_from_string(kind: string): ArtifactKind
function artifact_kind_to_string(kind: ArtifactKind): string
function bundle_kind_from_string(bundle_str: string): BundleKind
function bundle_kind_to_string(kind: BundleKind): string
function checksum_kind_from_string(kind_str: string): ChecksumKind
function checksum_kind_to_string(kind: ChecksumKind): string
function component_kind_from_string(kind_str: string): ComponentKind
function component_kind_to_string(kind: ComponentKind): string
function component_scope_from_string(scope_str: string): ComponentScope
function component_scope_to_string(scope: ComponentScope): string
function content_rating_system_format_age(system: ContentRatingSystem, age: number): string | null
function content_rating_system_from_locale(locale: string): ContentRatingSystem
function content_rating_system_get_csm_ages(system: ContentRatingSystem): number[]
function content_rating_system_get_formatted_ages(system: ContentRatingSystem): string[]
function content_rating_system_to_string(system: ContentRatingSystem): string | null
function content_rating_value_from_string(value: string): ContentRatingValue
function content_rating_value_to_string(value: ContentRatingValue): string
function control_kind_from_string(kind_str: string): ControlKind
function control_kind_to_string(kind: ControlKind): string
function display_length_kind_from_string(kind_str: string): DisplayLengthKind
function display_length_kind_to_string(kind: DisplayLengthKind): string
function display_side_kind_from_string(kind_str: string): DisplaySideKind
function display_side_kind_to_string(kind: DisplaySideKind): string
function format_kind_from_string(kind_str: string): FormatKind
function format_kind_to_string(kind: FormatKind): string
function format_version_from_string(version_str: string): FormatVersion
function format_version_to_string(version: FormatVersion): string
function get_appstream_version(): string
function get_current_distro_component_id(): string
function get_default_categories(with_special: boolean): Category[]
function get_license_url(license: string): string
function gstring_replace(string: GLib.String, find: string, replace: string): number
function gstring_replace2(string: GLib.String, find: string, replace: string, limit: number): number
function icon_kind_from_string(kind_str: string): IconKind
function icon_kind_to_string(kind: IconKind): string
function image_kind_from_string(kind: string): ImageKind
function image_kind_to_string(kind: ImageKind): string
function is_spdx_license_exception_id(exception_id: string): boolean
function is_spdx_license_expression(license: string): boolean
function is_spdx_license_id(license_id: string): boolean
function issue_kind_from_string(kind_str: string): IssueKind
function issue_kind_to_string(kind: IssueKind): string
function issue_severity_from_string(str: string): IssueSeverity
function issue_severity_to_string(severity: IssueSeverity): string
function launchable_kind_from_string(kind_str: string): LaunchableKind
function launchable_kind_to_string(kind: LaunchableKind): string
function license_is_free_license(license: string): boolean
function license_is_metadata_license(license: string): boolean
function license_is_metadata_license_id(license_id: string): boolean
function license_to_spdx_id(license: string): string
function markup_convert_simple(markup: string): string
function markup_strsplit_words(text: string, line_len: number): string[]
function merge_kind_from_string(kind_str: string): MergeKind
function merge_kind_to_string(kind: MergeKind): string
function metadata_error_quark(): GLib.Quark
function pool_error_quark(): GLib.Quark
function provided_kind_from_string(kind_str: string): ProvidedKind
function provided_kind_to_l10n_string(kind: ProvidedKind): string
function provided_kind_to_string(kind: ProvidedKind): string
function relation_compare_from_string(compare_str: string): RelationCompare
function relation_compare_to_string(compare: RelationCompare): string
function relation_compare_to_symbols_string(compare: RelationCompare): string
function relation_item_kind_from_string(kind_str: string): RelationItemKind
function relation_item_kind_to_string(kind: RelationItemKind): string
function relation_kind_from_string(kind_str: string): RelationKind
function relation_kind_to_string(kind: RelationKind): string
function release_kind_from_string(kind_str: string): ReleaseKind
function release_kind_to_string(kind: ReleaseKind): string
function release_url_kind_from_string(kind_str: string): ReleaseUrlKind
function release_url_kind_to_string(kind: ReleaseUrlKind): string
function screenshot_kind_from_string(kind: string): ScreenshotKind
function screenshot_kind_to_string(kind: ScreenshotKind): string
function size_kind_from_string(size_kind: string): SizeKind
function size_kind_to_string(size_kind: SizeKind): string
function spdx_license_detokenize(license_tokens: string): string | null
function spdx_license_tokenize(license: string): string[] | null
function suggested_kind_from_string(kind_str: string): SuggestedKind
function suggested_kind_to_string(kind: SuggestedKind): string
function translation_kind_from_string(kind_str: string): TranslationKind
function translation_kind_to_string(kind: TranslationKind): string
function urgency_kind_from_string(urgency_kind: string): UrgencyKind
function urgency_kind_to_string(urgency_kind: UrgencyKind): string
function url_kind_from_string(url_kind: string): UrlKind
function url_kind_to_string(url_kind: UrlKind): string
function utils_build_data_id(scope: ComponentScope, bundle_kind: BundleKind, origin: string, cid: string, branch: string): string
function utils_compare_versions(a: string, b: string): number
function utils_data_id_equal(data_id1: string, data_id2: string): boolean
function utils_data_id_get_cid(data_id: string): string
function utils_data_id_hash(data_id: string): number
function utils_data_id_match(data_id1: string, data_id2: string, match_flags: DataIdMatchFlags): boolean
function utils_data_id_valid(data_id: string): boolean
function utils_error_quark(): GLib.Quark
function utils_guess_scope_from_path(path: string): ComponentScope
function utils_install_metadata_file(location: MetadataLocation, filename: string, origin: string, destdir: string): boolean
function utils_is_category_name(category_name: string): boolean
function utils_is_desktop_environment(desktop: string): boolean
function utils_is_platform_triplet(triplet: string): boolean
function utils_is_tld(tld: string): boolean
function utils_locale_is_compatible(locale1: string, locale2: string): boolean
function utils_sort_components_into_categories(cpts: Component[], categories: Category[], check_duplicates: boolean): void
function vercmp(a: string, b: string, flags: VercmpFlags): number
function vercmp_simple(a: string, b: string): number
function version_string(): string
function video_codec_kind_from_string(str: string): VideoCodecKind
function video_codec_kind_to_string(kind: VideoCodecKind): string
function video_container_kind_from_string(str: string): VideoContainerKind
function video_container_kind_to_string(kind: VideoContainerKind): string
interface Agreement_ConstructProps extends GObject.Object_ConstructProps {
}
class Agreement {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Agreement */
    add_section(agreement_section: AgreementSection): void
    get_kind(): AgreementKind
    get_section_default(): AgreementSection | null
    get_sections(): AgreementSection[]
    get_version_id(): string
    set_kind(kind: AgreementKind): void
    set_version_id(version_id: string): void
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
    static $gtype: GObject.Type
}
interface AgreementSection_ConstructProps extends GObject.Object_ConstructProps {
}
class AgreementSection {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.AgreementSection */
    get_active_locale(): string
    get_description(): string
    get_kind(): string
    get_name(): string
    set_active_locale(locale: string): void
    set_description(desc: string, locale?: string | null): void
    set_kind(kind: string): void
    set_name(name: string, locale?: string | null): void
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
interface Artifact_ConstructProps extends GObject.Object_ConstructProps {
}
class Artifact {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Artifact */
    add_checksum(cs: Checksum): void
    add_location(location: string): void
    get_bundle_kind(): BundleKind
    get_checksum(kind: ChecksumKind): Checksum | null
    get_checksums(): Checksum[]
    get_filename(): string
    get_kind(): ArtifactKind
    get_locations(): string[]
    get_platform(): string
    get_size(kind: SizeKind): number
    set_bundle_kind(kind: BundleKind): void
    set_filename(filename: string): void
    set_kind(kind: ArtifactKind): void
    set_platform(platform: string): void
    set_size(size: number, kind: SizeKind): void
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
    static $gtype: GObject.Type
}
interface Bundle_ConstructProps extends GObject.Object_ConstructProps {
}
class Bundle {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Bundle */
    get_id(): string
    get_kind(): BundleKind
    set_id(id: string): void
    set_kind(kind: BundleKind): void
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
    static $gtype: GObject.Type
}
interface Category_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of AppStream-1.0.AppStream.Category */
    icon?: string
    id?: string
    name?: string
}
class Category {
    /* Properties of AppStream-1.0.AppStream.Category */
    readonly children: object
    icon: string
    id: string
    name: string
    readonly summary: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Category */
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
interface Checksum_ConstructProps extends GObject.Object_ConstructProps {
}
class Checksum {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Checksum */
    get_kind(): ChecksumKind
    get_value(): string
    set_kind(kind: ChecksumKind): void
    set_value(value: string): void
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
    static new_for_kind_value(kind: ChecksumKind, value: string): Checksum
    static $gtype: GObject.Type
}
interface Component_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of AppStream-1.0.AppStream.Component */
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
class Component {
    /* Properties of AppStream-1.0.AppStream.Component */
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
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Component */
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
    add_provided_item(kind: ProvidedKind, item: string): void
    add_relation(relation: Relation): void
    add_release(release: Release): void
    add_review(review: Review): void
    add_screenshot(sshot: Screenshot): void
    add_suggested(suggested: Suggested): void
    add_tag(ns: string, tag: string): boolean
    add_translation(tr: Translation): void
    add_url(url_kind: UrlKind, url: string): void
    clear_languages(): void
    clear_tags(): void
    get_active_locale(): string
    get_addons(): Component[]
    get_agreement_by_kind(kind: AgreementKind): Agreement | null
    get_agreements(): Agreement[]
    get_branch(): string
    get_bundle(bundle_kind: BundleKind): Bundle | null
    get_bundles(): Bundle[]
    get_categories(): string[]
    get_compulsory_for_desktops(): string[]
    get_content_rating(kind: string): ContentRating | null
    get_content_ratings(): ContentRating[]
    get_context(): Context | null
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
    get_name_variant_suffix(): string
    get_origin(): string
    get_pkgname(): string
    get_pkgnames(): string[]
    get_priority(): number
    get_project_group(): string
    get_project_license(): string
    get_provided(): Provided[]
    get_provided_for_kind(kind: ProvidedKind): Provided | null
    get_recommends(): Relation[]
    get_releases(): Release[]
    get_requires(): Relation[]
    get_reviews(): Review[]
    get_scope(): ComponentScope
    get_screenshots(): Screenshot[]
    get_search_tokens(): string[]
    get_sort_score(): number
    get_source_pkgname(): string
    get_suggested(): Suggested[]
    get_summary(): string
    get_summary_table(): GLib.HashTable
    get_supports(): Relation[]
    get_translations(): Translation[]
    get_url(url_kind: UrlKind): string | null
    get_value_flags(): ValueFlags
    has_bundle(): boolean
    has_category(category: string): boolean
    has_tag(ns: string, tag: string): boolean
    insert_custom_value(key: string, value: string): boolean
    is_compulsory_for_desktop(desktop: string): boolean
    is_ignored(): boolean
    is_member_of_category(category: Category): boolean
    is_valid(): boolean
    load_from_bytes(context: Context, format: FormatKind, bytes: GLib.Bytes): boolean
    load_from_xml_data(context: Context, data: string): boolean
    remove_tag(ns: string, tag: string): boolean
    search_matches(term: string): number
    search_matches_all(terms: string): number
    set_active_locale(locale?: string | null): void
    set_branch(branch: string): void
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
    set_name_variant_suffix(value: string, locale?: string | null): void
    set_origin(origin: string): void
    set_pkgname(pkgname: string): void
    set_pkgnames(packages: string[]): void
    set_priority(priority: number): void
    set_project_group(value: string): void
    set_project_license(value: string): void
    set_scope(scope: ComponentScope): void
    set_sort_score(score: number): void
    set_source_pkgname(spkgname: string): void
    set_summary(value: string, locale?: string | null): void
    set_value_flags(flags: ValueFlags): void
    to_string(): string
    to_xml_data(context: Context): string
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
    static $gtype: GObject.Type
}
interface ContentRating_ConstructProps extends GObject.Object_ConstructProps {
}
class ContentRating {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.ContentRating */
    add_attribute(id: string, value: ContentRatingValue): void
    get_kind(): string
    get_minimum_age(): number
    get_rating_ids(): string[]
    get_value(id: string): ContentRatingValue
    set_kind(kind: string): void
    set_value(id: string, value: ContentRatingValue): void
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
    static attribute_from_csm_age(id: string, age: number): ContentRatingValue
    static attribute_get_description(id: string, value: ContentRatingValue): string
    static attribute_to_csm_age(id: string, value: ContentRatingValue): number
    static get_all_rating_ids(): string[]
    static $gtype: GObject.Type
}
interface Context_ConstructProps extends GObject.Object_ConstructProps {
}
class Context {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Context */
    get_filename(): string
    get_format_version(): FormatVersion
    get_locale(): string
    get_locale_all_enabled(): boolean
    get_media_baseurl(): string
    get_origin(): string
    get_priority(): number
    get_style(): FormatStyle
    has_media_baseurl(): boolean
    set_filename(fname: string): void
    set_format_version(ver: FormatVersion): void
    set_locale(value: string): void
    set_media_baseurl(value: string): void
    set_origin(value: string): void
    set_priority(priority: number): void
    set_style(style: FormatStyle): void
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
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Context
    static $gtype: GObject.Type
}
interface DistroDetails_ConstructProps extends GObject.Object_ConstructProps {
}
class DistroDetails {
    /* Properties of AppStream-1.0.AppStream.DistroDetails */
    readonly homepage: string
    readonly id: string
    readonly name: string
    readonly version: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.DistroDetails */
    get_bool(key: string, default_val: boolean): boolean
    get_cid(): string
    get_homepage(): string
    get_id(): string
    get_name(): string
    get_str(key: string): string
    get_version(): string
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
interface Icon_ConstructProps extends GObject.Object_ConstructProps {
}
class Icon {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Icon */
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
    static $gtype: GObject.Type
}
interface Image_ConstructProps extends GObject.Object_ConstructProps {
}
class Image {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Image */
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
    static $gtype: GObject.Type
}
interface Issue_ConstructProps extends GObject.Object_ConstructProps {
}
class Issue {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Issue */
    get_id(): string
    get_kind(): IssueKind
    get_url(): string
    set_id(id: string): void
    set_kind(kind: IssueKind): void
    set_url(url: string): void
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
    static $gtype: GObject.Type
}
interface Launchable_ConstructProps extends GObject.Object_ConstructProps {
}
class Launchable {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Launchable */
    add_entry(entry: string): void
    get_entries(): string[]
    get_kind(): LaunchableKind
    set_kind(kind: LaunchableKind): void
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
    static $gtype: GObject.Type
}
interface Metadata_ConstructProps extends GObject.Object_ConstructProps {
}
class Metadata {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Metadata */
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
    get_media_baseurl(): string
    get_origin(): string
    get_parse_flags(): ParseFlags
    get_update_existing(): boolean
    get_write_header(): boolean
    parse(data: string, format: FormatKind): boolean
    parse_bytes(bytes: GLib.Bytes, format: FormatKind): boolean
    parse_desktop_data(data: string, cid: string): boolean
    parse_file(file: Gio.File, format: FormatKind): boolean
    save_collection(fname: string, format: FormatKind): boolean
    save_metainfo(fname: string, format: FormatKind): boolean
    set_architecture(arch: string): void
    set_format_style(mode: FormatStyle): void
    set_format_version(version: FormatVersion): void
    set_locale(locale: string): void
    set_media_baseurl(url: string): void
    set_origin(origin: string): void
    set_parse_flags(flags: ParseFlags): void
    set_update_existing(update: boolean): void
    set_write_header(wheader: boolean): void
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
    static file_guess_style(filename: string): FormatStyle
    static $gtype: GObject.Type
}
interface Pool_ConstructProps extends GObject.Object_ConstructProps {
}
class Pool {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Pool */
    add_component(cpt: Component): boolean
    add_components(cpts: Component[]): boolean
    add_extra_data_location(directory: string, format_style: FormatStyle): void
    add_flags(flags: PoolFlags): void
    add_metadata_location(directory: string): void
    build_search_tokens(search: string): string[]
    clear(): void
    clear2(): boolean
    clear_metadata_locations(): void
    get_cache_flags(): CacheFlags
    get_cache_location(): string
    get_components(): Component[]
    get_components_by_categories(categories: string): Component[]
    get_components_by_extends(extended_id: string): Component[]
    get_components_by_id(cid: string): Component[]
    get_components_by_kind(kind: ComponentKind): Component[]
    get_components_by_launchable(kind: LaunchableKind, id: string): Component[]
    get_components_by_provided_item(kind: ProvidedKind, item: string): Component[]
    get_flags(): PoolFlags
    get_locale(): string
    load(cancellable?: Gio.Cancellable | null): boolean
    load_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_cache_file(fname: string): boolean
    load_finish(result: Gio.AsyncResult): boolean
    refresh_cache(force: boolean): boolean
    remove_flags(flags: PoolFlags): void
    reset_extra_data_locations(): void
    save_cache_file(fname: string): boolean
    search(search: string): Component[]
    set_cache_flags(flags: CacheFlags): void
    set_cache_location(fname: string): void
    set_flags(flags: PoolFlags): void
    set_load_std_data_locations(enabled: boolean): void
    set_locale(locale: string): void
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
    /* Virtual methods of AppStream-1.0.AppStream.Pool */
    vfunc_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of AppStream-1.0.AppStream.Pool */
    connect(sigName: "changed", callback: (($obj: Pool) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Pool) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
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
    static $gtype: GObject.Type
}
interface Provided_ConstructProps extends GObject.Object_ConstructProps {
}
class Provided {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Provided */
    add_item(item: string): void
    get_items(): string[]
    get_kind(): ProvidedKind
    has_item(item: string): boolean
    set_kind(kind: ProvidedKind): void
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
    static $gtype: GObject.Type
}
interface Relation_ConstructProps extends GObject.Object_ConstructProps {
}
class Relation {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Relation */
    get_compare(): RelationCompare
    get_display_side_kind(): DisplaySideKind
    get_item_kind(): RelationItemKind
    get_kind(): RelationKind
    get_value(): string
    get_value_control_kind(): ControlKind
    get_value_display_length_kind(): DisplayLengthKind
    get_value_int(): number
    get_value_px(): number
    get_value_str(): string
    get_version(): string
    set_compare(compare: RelationCompare): void
    set_display_side_kind(kind: DisplaySideKind): void
    set_item_kind(kind: RelationItemKind): void
    set_kind(kind: RelationKind): void
    set_value(value: string): void
    set_value_control_kind(kind: ControlKind): void
    set_value_display_length_kind(kind: DisplayLengthKind): void
    set_value_int(value: number): void
    set_value_px(logical_px: number): void
    set_value_str(value: string): void
    set_version(version: string): void
    version_compare(version: string): boolean
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
    static $gtype: GObject.Type
}
interface Release_ConstructProps extends GObject.Object_ConstructProps {
}
class Release {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Release */
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
    static $gtype: GObject.Type
}
interface Review_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of AppStream-1.0.AppStream.Review */
    date?: Review
    description?: string
    flags?: number
    id?: string
    locale?: string
    rating?: number
    reviewer_id?: string
    reviewer_name?: string
    summary?: string
    version?: string
}
class Review {
    /* Properties of AppStream-1.0.AppStream.Review */
    date: Review
    description: string
    flags: number
    id: string
    locale: string
    rating: number
    reviewer_id: string
    reviewer_name: string
    summary: string
    version: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Review */
    add_flags(flags: ReviewFlags): void
    add_metadata(key: string, value: string): void
    equal(review2: Review): boolean
    get_date(): GLib.DateTime
    get_description(): string
    get_flags(): ReviewFlags
    get_id(): string
    get_locale(): string
    get_metadata_item(key: string): string
    get_priority(): number
    get_rating(): number
    get_reviewer_id(): string
    get_reviewer_name(): string
    get_summary(): string
    get_version(): string
    set_date(date: GLib.DateTime): void
    set_description(description: string): void
    set_flags(flags: ReviewFlags): void
    set_id(id: string): void
    set_locale(locale: string): void
    set_priority(priority: number): void
    set_rating(rating: number): void
    set_reviewer_id(reviewer_id: string): void
    set_reviewer_name(reviewer_name: string): void
    set_summary(summary: string): void
    set_version(version: string): void
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
    connect(sigName: "notify", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::date", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locale", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rating", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rating", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reviewer-id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reviewer-id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reviewer-name", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reviewer-name", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Review_ConstructProps)
    _init (config?: Review_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Review
    static $gtype: GObject.Type
}
interface Screenshot_ConstructProps extends GObject.Object_ConstructProps {
}
class Screenshot {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Screenshot */
    add_image(image: Image): void
    add_video(video: Video): void
    get_active_locale(): string
    get_caption(): string
    get_image(width: number, height: number): Image
    get_images(): Image[]
    get_images_all(): Image[]
    get_kind(): ScreenshotKind
    get_media_kind(): ScreenshotMediaKind
    get_videos(): Video[]
    is_valid(): boolean
    set_active_locale(locale: string): void
    set_caption(caption: string, locale: string): void
    set_kind(kind: ScreenshotKind): void
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
    static $gtype: GObject.Type
}
interface Suggested_ConstructProps extends GObject.Object_ConstructProps {
}
class Suggested {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Suggested */
    add_id(cid: string): void
    get_ids(): string[]
    get_kind(): SuggestedKind
    is_valid(): boolean
    set_kind(kind: SuggestedKind): void
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
    static $gtype: GObject.Type
}
interface Translation_ConstructProps extends GObject.Object_ConstructProps {
}
class Translation {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Translation */
    get_id(): string
    get_kind(): TranslationKind
    get_source_locale(): string
    set_id(id: string): void
    set_kind(kind: TranslationKind): void
    set_source_locale(locale?: string | null): void
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
    static $gtype: GObject.Type
}
interface Validator_ConstructProps extends GObject.Object_ConstructProps {
}
class Validator {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Validator */
    clear_issues(): void
    get_check_urls(): boolean
    get_issues(): ValidatorIssue[]
    get_issues_per_file(): GLib.HashTable
    get_report_yaml(yaml_report: string): boolean
    get_tag_explanation(tag: string): string
    get_tag_severity(tag: string): IssueSeverity
    get_tags(): string[]
    set_check_urls(value: boolean): void
    validate_bytes(metadata: GLib.Bytes): boolean
    validate_data(metadata: string): boolean
    validate_file(metadata_file: Gio.File): boolean
    validate_tree(root_dir: string): boolean
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
interface ValidatorIssue_ConstructProps extends GObject.Object_ConstructProps {
}
class ValidatorIssue {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.ValidatorIssue */
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
interface Video_ConstructProps extends GObject.Object_ConstructProps {
}
class Video {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of AppStream-1.0.AppStream.Video */
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
    static $gtype: GObject.Type
}
abstract class AgreementClass {
    /* Fields of AppStream-1.0.AppStream.AgreementClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class AgreementSectionClass {
    /* Fields of AppStream-1.0.AppStream.AgreementSectionClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ArtifactClass {
    /* Fields of AppStream-1.0.AppStream.ArtifactClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class BundleClass {
    /* Fields of AppStream-1.0.AppStream.BundleClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class CategoryClass {
    /* Fields of AppStream-1.0.AppStream.CategoryClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ChecksumClass {
    /* Fields of AppStream-1.0.AppStream.ChecksumClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ComponentClass {
    /* Fields of AppStream-1.0.AppStream.ComponentClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ContentRatingClass {
    /* Fields of AppStream-1.0.AppStream.ContentRatingClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ContextClass {
    /* Fields of AppStream-1.0.AppStream.ContextClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class DistroDetailsClass {
    /* Fields of AppStream-1.0.AppStream.DistroDetailsClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class IconClass {
    /* Fields of AppStream-1.0.AppStream.IconClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ImageClass {
    /* Fields of AppStream-1.0.AppStream.ImageClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class IssueClass {
    /* Fields of AppStream-1.0.AppStream.IssueClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class LaunchableClass {
    /* Fields of AppStream-1.0.AppStream.LaunchableClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class MetadataClass {
    /* Fields of AppStream-1.0.AppStream.MetadataClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class PoolClass {
    /* Fields of AppStream-1.0.AppStream.PoolClass */
    readonly parent_class: GObject.ObjectClass
    readonly changed: (pool: Pool) => void
    static name: string
}
abstract class ProvidedClass {
    /* Fields of AppStream-1.0.AppStream.ProvidedClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class RelationClass {
    /* Fields of AppStream-1.0.AppStream.RelationClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ReleaseClass {
    /* Fields of AppStream-1.0.AppStream.ReleaseClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ReviewClass {
    /* Fields of AppStream-1.0.AppStream.ReviewClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ScreenshotClass {
    /* Fields of AppStream-1.0.AppStream.ScreenshotClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class SuggestedClass {
    /* Fields of AppStream-1.0.AppStream.SuggestedClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class TranslationClass {
    /* Fields of AppStream-1.0.AppStream.TranslationClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ValidatorClass {
    /* Fields of AppStream-1.0.AppStream.ValidatorClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ValidatorIssueClass {
    /* Fields of AppStream-1.0.AppStream.ValidatorIssueClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class VideoClass {
    /* Fields of AppStream-1.0.AppStream.VideoClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
}
export default AppStream;