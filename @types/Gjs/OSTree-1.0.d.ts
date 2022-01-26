/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * OSTree-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace OSTree {

enum DeploymentUnlockedState {
    NONE,
    DEVELOPMENT,
    HOTFIX,
}
enum GpgSignatureAttr {
    VALID,
    SIG_EXPIRED,
    KEY_EXPIRED,
    KEY_REVOKED,
    KEY_MISSING,
    FINGERPRINT,
    TIMESTAMP,
    EXP_TIMESTAMP,
    PUBKEY_ALGO_NAME,
    HASH_ALGO_NAME,
    USER_NAME,
    USER_EMAIL,
}
enum GpgSignatureFormatFlags {
    GPG_SIGNATURE_FORMAT_DEFAULT,
}
enum ObjectType {
    FILE,
    DIR_TREE,
    DIR_META,
    COMMIT,
    TOMBSTONE_COMMIT,
    COMMIT_META,
}
enum RepoCheckoutMode {
    NONE,
    USER,
}
enum RepoCheckoutOverwriteMode {
    NONE,
    UNION_FILES,
}
enum RepoCommitFilterResult {
    ALLOW,
    SKIP,
}
enum RepoCommitIterResult {
    ERROR,
    END,
    FILE,
    DIR,
}
enum RepoListRefsExtFlags {
    REPO_LIST_REFS_EXT_NONE,
}
enum RepoMode {
    BARE,
    ARCHIVE_Z2,
    BARE_USER,
}
enum RepoPruneFlags {
    NONE,
    NO_PRUNE,
    REFS_ONLY,
}
enum RepoRemoteChange {
    ADD,
    ADD_IF_NOT_EXISTS,
    DELETE,
    DELETE_IF_EXISTS,
}
enum RepoResolveRevExtFlags {
    REPO_RESOLVE_REV_EXT_NONE,
}
enum StaticDeltaGenerateOpt {
    LOWLATENCY,
    MAJOR,
}
enum DiffFlags {
    NONE,
    IGNORE_XATTRS,
}
enum RepoCommitModifierFlags {
    NONE,
    SKIP_XATTRS,
    GENERATE_SIZES,
}
enum RepoCommitState {
    REPO_COMMIT_STATE_PARTIAL,
}
enum RepoCommitTraverseFlags {
    REPO_COMMIT_TRAVERSE_FLAG_NONE,
}
enum RepoListObjectsFlags {
    LOOSE,
    PACKED,
    ALL,
    NO_PARENTS,
}
enum RepoPullFlags {
    NONE,
    MIRROR,
    COMMIT_ONLY,
    UNTRUSTED,
}
enum SePolicyRestoreconFlags {
    NONE,
    ALLOW_NOLABEL,
    KEEP_EXISTING,
}
enum SysrootSimpleWriteDeploymentFlags {
    NONE,
    RETAIN,
    NOT_DEFAULT,
    NO_CLEAN,
}
enum SysrootUpgraderFlags {
    IGNORE_UNCONFIGURED,
}
enum SysrootUpgraderPullFlags {
    NONE,
    ALLOW_OLDER,
}
const COMMIT_GVARIANT_STRING: string
const DIRMETA_GVARIANT_STRING: string
const FILEMETA_GVARIANT_STRING: string
const MAX_METADATA_SIZE: number
const MAX_METADATA_WARN_SIZE: number
const MAX_RECURSION: number
const SHA256_DIGEST_LEN: number
const SHA256_STRING_LEN: number
const SUMMARY_GVARIANT_STRING: string
const SUMMARY_SIG_GVARIANT_STRING: string
const TIMESTAMP: number
const TREE_GVARIANT_STRING: string
const WITH_AUTOCLEANUPS: number
function checksum_b64_from_bytes(csum: Uint8Array): string
function checksum_b64_to_bytes(checksum: string): Uint8Array
function checksum_bytes_peek(bytes: GLib.Variant): Uint8Array
function checksum_bytes_peek_validate(bytes: GLib.Variant): Uint8Array
function checksum_file(f: Gio.File, objtype: ObjectType, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_csum */ Uint8Array ]
function checksum_file_async(f: Gio.File, objtype: ObjectType, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function checksum_file_async_finish(f: Gio.File, result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_csum */ Uint8Array ]
function checksum_file_from_input(file_info: Gio.FileInfo, xattrs: GLib.Variant | null, in_: Gio.InputStream | null, objtype: ObjectType, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_csum */ Uint8Array ]
function checksum_from_bytes(csum: Uint8Array): string
function checksum_from_bytes_v(csum_v: GLib.Variant): string
function checksum_inplace_to_bytes(checksum: string, buf: number): void
function checksum_to_bytes(checksum: string): Uint8Array
function checksum_to_bytes_v(checksum: string): GLib.Variant
function cmd__private__(): CmdPrivateVTable
function cmp_checksum_bytes(a: number, b: number): number
function commit_get_parent(commit_variant: GLib.Variant): string
function commit_get_timestamp(commit_variant: GLib.Variant): number
function content_file_parse(compressed: boolean, content_path: Gio.File, trusted: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream, /* out_file_info */ Gio.FileInfo, /* out_xattrs */ GLib.Variant ]
function content_file_parse_at(compressed: boolean, parent_dfd: number, path: string, trusted: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream, /* out_file_info */ Gio.FileInfo, /* out_xattrs */ GLib.Variant ]
function content_stream_parse(compressed: boolean, input: Gio.InputStream, input_length: number, trusted: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream, /* out_file_info */ Gio.FileInfo, /* out_xattrs */ GLib.Variant ]
function create_directory_metadata(dir_info: Gio.FileInfo, xattrs?: GLib.Variant | null): GLib.Variant
function diff_dirs(flags: DiffFlags, a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[], cancellable?: Gio.Cancellable | null): boolean
function diff_print(a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[]): void
function hash_object_name(a?: object | null): number
function metadata_variant_type(objtype: ObjectType): GLib.VariantType
function object_from_string(str: string): [ /* out_checksum */ string, /* out_objtype */ ObjectType ]
function object_name_deserialize(variant: GLib.Variant): [ /* out_checksum */ string, /* out_objtype */ ObjectType ]
function object_name_serialize(checksum: string, objtype: ObjectType): GLib.Variant
function object_to_string(checksum: string, objtype: ObjectType): string
function object_type_from_string(str: string): ObjectType
function object_type_to_string(objtype: ObjectType): string
function parse_refspec(refspec: string): [ /* returnType */ boolean, /* out_remote */ string | null, /* out_ref */ string | null ]
function raw_file_to_archive_z2_stream(input: Gio.InputStream, file_info: Gio.FileInfo, xattrs?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream ]
function raw_file_to_content_stream(input: Gio.InputStream, file_info: Gio.FileInfo, xattrs?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream, /* out_length */ number ]
function repo_commit_traverse_iter_cleanup(p?: object | null): void
function validate_checksum_string(sha256: string): boolean
function validate_rev(rev: string): boolean
function validate_structureof_checksum_string(checksum: string): boolean
function validate_structureof_commit(commit: GLib.Variant): boolean
function validate_structureof_csum_v(checksum: GLib.Variant): boolean
function validate_structureof_dirmeta(dirmeta: GLib.Variant): boolean
function validate_structureof_dirtree(dirtree: GLib.Variant): boolean
function validate_structureof_file_mode(mode: number): boolean
function validate_structureof_objtype(objtype: number): boolean
interface RepoCommitFilter {
    (repo: Repo, path: string, file_info: Gio.FileInfo): RepoCommitFilterResult
}
interface RepoCommitModifierXattrCallback {
    (repo: Repo, path: string, file_info: Gio.FileInfo): GLib.Variant
}
interface AsyncProgress_ConstructProps extends GObject.Object_ConstructProps {
}
class AsyncProgress {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.AsyncProgress */
    finish(): void
    get_status(): string
    get_uint(key: string): number
    get_uint64(key: string): number
    set_status(status: string): void
    set_uint(key: string, value: number): void
    set_uint64(key: string, value: number): void
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
    /* Virtual methods of OSTree-1.0.OSTree.AsyncProgress */
    vfunc_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of OSTree-1.0.OSTree.AsyncProgress */
    connect(sigName: "changed", callback: (($obj: AsyncProgress) => void)): number
    connect_after(sigName: "changed", callback: (($obj: AsyncProgress) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AsyncProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AsyncProgress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AsyncProgress_ConstructProps)
    _init (config?: AsyncProgress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AsyncProgress
    static new_and_connect(changed?: object | null, user_data?: object | null): AsyncProgress
    static $gtype: GObject.Type
}
interface BootconfigParser_ConstructProps extends GObject.Object_ConstructProps {
}
class BootconfigParser {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.BootconfigParser */
    clone(): BootconfigParser
    get(key: string): string
    parse(path: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    parse_at(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
    set(key: string, value: string): void
    write(output: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    write_at(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: (($obj: BootconfigParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BootconfigParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BootconfigParser_ConstructProps)
    _init (config?: BootconfigParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BootconfigParser
    static $gtype: GObject.Type
}
interface ChecksumInputStream_ConstructProps extends Gio.FilterInputStream_ConstructProps {
    /* Constructor properties of OSTree-1.0.OSTree.ChecksumInputStream */
    checksum?: object
}
class ChecksumInputStream {
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    close_base_stream: boolean
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    readonly parent_instance: Gio.InputStream
    readonly base_stream: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    get_base_stream(): Gio.InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio-2.0.Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    read_finish(result: Gio.AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skip_finish(result: Gio.AsyncResult): number
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
    /* Virtual methods of Gio-2.0.Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array | null
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-base-stream", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChecksumInputStream_ConstructProps)
    _init (config?: ChecksumInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: Gio.InputStream, checksum: GLib.Checksum): ChecksumInputStream
    static $gtype: GObject.Type
}
interface Deployment_ConstructProps extends GObject.Object_ConstructProps {
}
class Deployment {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.Deployment */
    clone(): Deployment
    equal(bp: Deployment): boolean
    get_bootconfig(): BootconfigParser
    get_bootcsum(): string
    get_bootserial(): number
    get_csum(): string
    get_deployserial(): number
    get_index(): number
    get_origin(): GLib.KeyFile
    get_origin_relpath(): string
    get_osname(): string
    get_unlocked(): DeploymentUnlockedState
    set_bootconfig(bootconfig: BootconfigParser): void
    set_bootserial(index: number): void
    set_index(index: number): void
    set_origin(origin: GLib.KeyFile): void
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
    connect(sigName: "notify", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Deployment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Deployment_ConstructProps)
    _init (config?: Deployment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(index: number, osname: string, csum: string, deployserial: number, bootcsum: string, bootserial: number): Deployment
    static hash(v?: object | null): number
    static unlocked_state_to_string(state: DeploymentUnlockedState): string
    static $gtype: GObject.Type
}
interface GpgVerifyResult_ConstructProps extends GObject.Object_ConstructProps {
}
class GpgVerifyResult {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.GpgVerifyResult */
    count_all(): number
    count_valid(): number
    describe(signature_index: number, output_buffer: GLib.String, line_prefix: string | null, flags: GpgSignatureFormatFlags): void
    get(signature_index: number, attrs: GpgSignatureAttr[]): GLib.Variant
    get_all(signature_index: number): GLib.Variant
    lookup(key_id: string): [ /* returnType */ boolean, /* out_signature_index */ number ]
    require_valid_signature(): boolean
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
    /* Virtual methods of OSTree-1.0.OSTree.GpgVerifyResult */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GpgVerifyResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GpgVerifyResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GpgVerifyResult_ConstructProps)
    _init (config?: GpgVerifyResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static describe_variant(variant: GLib.Variant, output_buffer: GLib.String, line_prefix: string | null, flags: GpgSignatureFormatFlags): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface MutableTree_ConstructProps extends GObject.Object_ConstructProps {
}
class MutableTree {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.MutableTree */
    ensure_dir(name: string, out_subdir: MutableTree): boolean
    ensure_parent_dirs(split_path: string[], metadata_checksum: string): [ /* returnType */ boolean, /* out_parent */ MutableTree ]
    get_contents_checksum(): string
    get_files(): GLib.HashTable
    get_metadata_checksum(): string
    get_subdirs(): GLib.HashTable
    lookup(name: string, out_file_checksum: string, out_subdir: MutableTree): boolean
    replace_file(name: string, checksum: string): boolean
    set_contents_checksum(checksum: string): void
    set_metadata_checksum(checksum: string): void
    walk(split_path: string[], start: number): [ /* returnType */ boolean, /* out_subdir */ MutableTree ]
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
    connect(sigName: "notify", callback: (($obj: MutableTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MutableTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MutableTree_ConstructProps)
    _init (config?: MutableTree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MutableTree
    static $gtype: GObject.Type
}
interface Repo_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of OSTree-1.0.OSTree.Repo */
    path?: Gio.File
    remotes_config_dir?: string
    sysroot_path?: Gio.File
}
class Repo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.Repo */
    abort_transaction(cancellable?: Gio.Cancellable | null): boolean
    add_gpg_signature_summary(key_id: string[], homedir?: string | null, cancellable?: Gio.Cancellable | null): boolean
    append_gpg_signature(commit_checksum: string, signature_bytes: GLib.Bytes, cancellable?: Gio.Cancellable | null): boolean
    checkout_at(options: RepoCheckoutAtOptions | null, destination_dfd: number, destination_path: string, commit: string, cancellable?: Gio.Cancellable | null): boolean
    checkout_gc(cancellable?: Gio.Cancellable | null): boolean
    checkout_tree(mode: RepoCheckoutMode, overwrite_mode: RepoCheckoutOverwriteMode, destination: Gio.File, source: RepoFile, source_info: Gio.FileInfo, cancellable?: Gio.Cancellable | null): boolean
    commit_transaction(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_stats */ RepoTransactionStats | null ]
    copy_config(): GLib.KeyFile
    create(mode: RepoMode, cancellable?: Gio.Cancellable | null): boolean
    delete_object(objtype: ObjectType, sha256: string, cancellable?: Gio.Cancellable | null): boolean
    get_config(): GLib.KeyFile
    get_dfd(): number
    get_disable_fsync(): boolean
    get_mode(): RepoMode
    get_parent(): Repo
    get_path(): Gio.File
    get_remote_boolean_option(remote_name: string, option_name: string, default_value: boolean): [ /* returnType */ boolean, /* out_value */ boolean ]
    get_remote_list_option(remote_name: string, option_name: string): [ /* returnType */ boolean, /* out_value */ string[] ]
    get_remote_option(remote_name: string, option_name: string, default_value?: string | null): [ /* returnType */ boolean, /* out_value */ string ]
    gpg_verify_data(remote_name: string | null, data: GLib.Bytes, signatures: GLib.Bytes, keyringdir?: Gio.File | null, extra_keyring?: Gio.File | null, cancellable?: Gio.Cancellable | null): GpgVerifyResult
    has_object(objtype: ObjectType, checksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_have_object */ boolean ]
    import_object_from(source: Repo, objtype: ObjectType, checksum: string, cancellable?: Gio.Cancellable | null): boolean
    import_object_from_with_trust(source: Repo, objtype: ObjectType, checksum: string, trusted: boolean, cancellable?: Gio.Cancellable | null): boolean
    is_system(): boolean
    is_writable(): boolean
    list_commit_objects_starting_with(start: string, out_commits: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    list_objects(flags: RepoListObjectsFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_objects */ GLib.HashTable ]
    list_refs(refspec_prefix?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_all_refs */ GLib.HashTable ]
    list_refs_ext(refspec_prefix: string | null, flags: RepoListRefsExtFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_all_refs */ GLib.HashTable ]
    list_static_delta_names(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_deltas */ string[] ]
    load_commit(checksum: string): [ /* returnType */ boolean, /* out_commit */ GLib.Variant | null, /* out_state */ RepoCommitState | null ]
    load_file(checksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream | null, /* out_file_info */ Gio.FileInfo | null, /* out_xattrs */ GLib.Variant | null ]
    load_object_stream(objtype: ObjectType, checksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream, /* out_size */ number ]
    load_variant(objtype: ObjectType, sha256: string): [ /* returnType */ boolean, /* out_variant */ GLib.Variant ]
    load_variant_if_exists(objtype: ObjectType, sha256: string): [ /* returnType */ boolean, /* out_variant */ GLib.Variant ]
    open(cancellable?: Gio.Cancellable | null): boolean
    prepare_transaction(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_transaction_resume */ boolean | null ]
    prune(flags: RepoPruneFlags, depth: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_objects_total */ number, /* out_objects_pruned */ number, /* out_pruned_object_size_total */ number ]
    prune_static_deltas(commit?: string | null, cancellable?: Gio.Cancellable | null): boolean
    pull(remote_name: string, refs_to_fetch: string[] | null, flags: RepoPullFlags, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): boolean
    pull_one_dir(remote_name: string, dir_to_pull: string, refs_to_fetch: string[] | null, flags: RepoPullFlags, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): boolean
    pull_with_options(remote_name_or_baseurl: string, options: GLib.Variant, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): boolean
    query_object_storage_size(objtype: ObjectType, sha256: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_size */ number ]
    read_commit(ref: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_root */ Gio.File, /* out_commit */ string ]
    read_commit_detached_metadata(checksum: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_metadata */ GLib.Variant ]
    regenerate_summary(additional_metadata?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    remote_add(name: string, url: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    remote_change(sysroot: Gio.File | null, changeop: RepoRemoteChange, name: string, url: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    remote_delete(name: string, cancellable?: Gio.Cancellable | null): boolean
    remote_fetch_summary(name: string, out_summary?: GLib.Bytes | null, out_signatures?: GLib.Bytes | null, cancellable?: Gio.Cancellable | null): boolean
    remote_fetch_summary_with_options(name: string, options?: GLib.Variant | null, out_summary?: GLib.Bytes | null, out_signatures?: GLib.Bytes | null, cancellable?: Gio.Cancellable | null): boolean
    remote_get_gpg_verify(name: string): [ /* returnType */ boolean, /* out_gpg_verify */ boolean | null ]
    remote_get_gpg_verify_summary(name: string): [ /* returnType */ boolean, /* out_gpg_verify_summary */ boolean | null ]
    remote_get_url(name: string): [ /* returnType */ boolean, /* out_url */ string | null ]
    remote_gpg_import(name: string, source_stream?: Gio.InputStream | null, key_ids?: string[] | null, out_imported?: number | null, cancellable?: Gio.Cancellable | null): boolean
    remote_list(): string[]
    remote_list_refs(remote_name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_all_refs */ GLib.HashTable ]
    resolve_rev(refspec: string, allow_noent: boolean): [ /* returnType */ boolean, /* out_rev */ string ]
    resolve_rev_ext(refspec: string, allow_noent: boolean, flags: RepoResolveRevExtFlags): [ /* returnType */ boolean, /* out_rev */ string ]
    scan_hardlinks(cancellable?: Gio.Cancellable | null): boolean
    set_cache_dir(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean
    set_disable_fsync(disable_fsync: boolean): void
    set_ref_immediate(remote: string | null, ref: string, checksum?: string | null, cancellable?: Gio.Cancellable | null): boolean
    sign_commit(commit_checksum: string, key_id: string, homedir?: string | null, cancellable?: Gio.Cancellable | null): boolean
    sign_delta(from_commit: string, to_commit: string, key_id: string, homedir: string, cancellable?: Gio.Cancellable | null): boolean
    static_delta_execute_offline(dir_or_file: Gio.File, skip_validation: boolean, cancellable?: Gio.Cancellable | null): boolean
    static_delta_generate(opt: StaticDeltaGenerateOpt, from: string, to: string, metadata?: GLib.Variant | null, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    transaction_set_ref(remote: string | null, ref: string, checksum: string): void
    transaction_set_refspec(refspec: string, checksum: string): void
    traverse_commit(commit_checksum: string, maxdepth: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_reachable */ GLib.HashTable ]
    verify_commit(commit_checksum: string, keyringdir?: Gio.File | null, extra_keyring?: Gio.File | null, cancellable?: Gio.Cancellable | null): boolean
    verify_commit_ext(commit_checksum: string, keyringdir?: Gio.File | null, extra_keyring?: Gio.File | null, cancellable?: Gio.Cancellable | null): GpgVerifyResult
    verify_summary(remote_name: string, summary: GLib.Bytes, signatures: GLib.Bytes, cancellable?: Gio.Cancellable | null): GpgVerifyResult
    write_archive_to_mtree(archive: Gio.File, mtree: MutableTree, modifier: RepoCommitModifier | null, autocreate_parents: boolean, cancellable?: Gio.Cancellable | null): boolean
    write_commit(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_commit */ string ]
    write_commit_detached_metadata(checksum: string, metadata?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    write_commit_with_time(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, time: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_commit */ string ]
    write_config(new_config: GLib.KeyFile): boolean
    write_content(expected_checksum: string | null, object_input: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_csum */ Uint8Array | null ]
    write_content_async(expected_checksum: string | null, object: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_content_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_csum */ number ]
    write_content_trusted(checksum: string, object_input: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null): boolean
    write_dfd_to_mtree(dfd: number, path: string, mtree: MutableTree, modifier?: RepoCommitModifier | null, cancellable?: Gio.Cancellable | null): boolean
    write_directory_to_mtree(dir: Gio.File, mtree: MutableTree, modifier?: RepoCommitModifier | null, cancellable?: Gio.Cancellable | null): boolean
    write_metadata(objtype: ObjectType, expected_checksum: string | null, object: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_csum */ Uint8Array | null ]
    write_metadata_async(objtype: ObjectType, expected_checksum: string | null, object: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_metadata_finish(result: Gio.AsyncResult, out_csum: number): boolean
    write_metadata_stream_trusted(objtype: ObjectType, checksum: string, object_input: Gio.InputStream, length: number, cancellable?: Gio.Cancellable | null): boolean
    write_metadata_trusted(objtype: ObjectType, checksum: string, variant: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    write_mtree(mtree: MutableTree, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_file */ Gio.File ]
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
    /* Signals of OSTree-1.0.OSTree.Repo */
    connect(sigName: "gpg-verify-result", callback: (($obj: Repo, checksum: string, result: GpgVerifyResult) => void)): number
    connect_after(sigName: "gpg-verify-result", callback: (($obj: Repo, checksum: string, result: GpgVerifyResult) => void)): number
    emit(sigName: "gpg-verify-result", checksum: string, result: GpgVerifyResult): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Repo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Repo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Repo_ConstructProps)
    _init (config?: Repo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: Gio.File): Repo
    static new_default(): Repo
    static new_for_sysroot_path(repo_path: Gio.File, sysroot_path: Gio.File): Repo
    static mode_from_string(mode: string, out_mode: RepoMode): boolean
    static pull_default_console_progress_changed(progress: AsyncProgress, user_data?: object | null): void
    static traverse_new_reachable(): GLib.HashTable
    static $gtype: GObject.Type
}
interface RepoFile_ConstructProps extends GObject.Object_ConstructProps {
}
class RepoFile {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.RepoFile */
    ensure_resolved(): boolean
    get_checksum(): string
    get_repo(): Repo
    get_root(): RepoFile
    get_xattrs(out_xattrs: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    tree_find_child(name: string, is_dir: boolean, out_container: GLib.Variant): number
    tree_get_contents(): GLib.Variant
    tree_get_contents_checksum(): string
    tree_get_metadata(): GLib.Variant
    tree_get_metadata_checksum(): string
    tree_query_child(n: number, attributes: string, flags: Gio.FileQueryInfoFlags, out_info: Gio.FileInfo, cancellable?: Gio.Cancellable | null): boolean
    tree_set_metadata(checksum: string, metadata: GLib.Variant): void
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
    /* Methods of Gio-2.0.Gio.File */
    append_to(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    append_to_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    append_to_finish(res: Gio.AsyncResult): Gio.FileOutputStream
    build_attribute_list_for_copy(flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null): string
    copy(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null): boolean
    copy_async(destination: Gio.File, flags: Gio.FileCopyFlags, io_priority: number, cancellable?: Gio.Cancellable | null): void
    copy_attributes(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null): boolean
    copy_finish(res: Gio.AsyncResult): boolean
    create(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    create_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_finish(res: Gio.AsyncResult): Gio.FileOutputStream
    create_readwrite(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    create_readwrite_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream
    delete(cancellable?: Gio.Cancellable | null): boolean
    delete_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_finish(result: Gio.AsyncResult): boolean
    dup(): Gio.File
    eject_mountable(flags: Gio.MountUnmountFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    eject_mountable_finish(result: Gio.AsyncResult): boolean
    eject_mountable_with_operation(flags: Gio.MountUnmountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    eject_mountable_with_operation_finish(result: Gio.AsyncResult): boolean
    enumerate_children(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileEnumerator
    enumerate_children_async(attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    enumerate_children_finish(res: Gio.AsyncResult): Gio.FileEnumerator
    equal(file2: Gio.File): boolean
    find_enclosing_mount(cancellable?: Gio.Cancellable | null): Gio.Mount
    find_enclosing_mount_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    find_enclosing_mount_finish(res: Gio.AsyncResult): Gio.Mount
    get_basename(): string | null
    get_child(name: string): Gio.File
    get_child_for_display_name(display_name: string): Gio.File
    get_parent(): Gio.File | null
    get_parse_name(): string
    get_path(): string | null
    get_relative_path(descendant: Gio.File): string | null
    get_uri(): string
    get_uri_scheme(): string | null
    has_parent(parent?: Gio.File | null): boolean
    has_prefix(prefix: Gio.File): boolean
    has_uri_scheme(uri_scheme: string): boolean
    hash(): number
    is_native(): boolean
    load_bytes(cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Bytes, /* etag_out */ string | null ]
    load_bytes_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_bytes_finish(result: Gio.AsyncResult): [ /* returnType */ GLib.Bytes, /* etag_out */ string | null ]
    load_contents(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* contents */ Uint8Array, /* etag_out */ string | null ]
    load_contents_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_contents_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* contents */ Uint8Array, /* etag_out */ string | null ]
    load_partial_contents_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* contents */ Uint8Array, /* etag_out */ string | null ]
    make_directory(cancellable?: Gio.Cancellable | null): boolean
    make_directory_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    make_directory_finish(result: Gio.AsyncResult): boolean
    make_directory_with_parents(cancellable?: Gio.Cancellable | null): boolean
    make_symbolic_link(symlink_value: string, cancellable?: Gio.Cancellable | null): boolean
    measure_disk_usage_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* disk_usage */ number | null, /* num_dirs */ number | null, /* num_files */ number | null ]
    monitor(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    monitor_directory(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    monitor_file(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    mount_enclosing_volume(flags: Gio.MountMountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mount_enclosing_volume_finish(result: Gio.AsyncResult): boolean
    mount_mountable(flags: Gio.MountMountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mount_mountable_finish(result: Gio.AsyncResult): Gio.File
    move(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null): boolean
    open_readwrite(cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    open_readwrite_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream
    peek_path(): string | null
    poll_mountable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    poll_mountable_finish(result: Gio.AsyncResult): boolean
    query_default_handler(cancellable?: Gio.Cancellable | null): Gio.AppInfo
    query_default_handler_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_default_handler_finish(result: Gio.AsyncResult): Gio.AppInfo
    query_exists(cancellable?: Gio.Cancellable | null): boolean
    query_file_type(flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileType
    query_filesystem_info(attributes: string, cancellable?: Gio.Cancellable | null): Gio.FileInfo
    query_filesystem_info_async(attributes: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_filesystem_info_finish(res: Gio.AsyncResult): Gio.FileInfo
    query_info(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileInfo
    query_info_async(attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_info_finish(res: Gio.AsyncResult): Gio.FileInfo
    query_settable_attributes(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList
    query_writable_namespaces(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList
    read(cancellable?: Gio.Cancellable | null): Gio.FileInputStream
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_finish(res: Gio.AsyncResult): Gio.FileInputStream
    replace(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    replace_async(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    replace_contents(contents: Uint8Array, etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* new_etag */ string | null ]
    replace_contents_async(contents: Uint8Array, etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    replace_contents_bytes_async(contents: GLib.Bytes, etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    replace_contents_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* new_etag */ string | null ]
    replace_finish(res: Gio.AsyncResult): Gio.FileOutputStream
    replace_readwrite(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    replace_readwrite_async(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    replace_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream
    resolve_relative_path(relative_path: string): Gio.File | null
    set_attribute(attribute: string, type: Gio.FileAttributeType, value_p: object | null, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    set_attribute_byte_string(attribute: string, value: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    set_attribute_int32(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    set_attribute_int64(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    set_attribute_string(attribute: string, value: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    set_attribute_uint32(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    set_attribute_uint64(attribute: string, value: number, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    set_attributes_async(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_attributes_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* info */ Gio.FileInfo ]
    set_attributes_from_info(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    set_display_name(display_name: string, cancellable?: Gio.Cancellable | null): Gio.File
    set_display_name_async(display_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_display_name_finish(res: Gio.AsyncResult): Gio.File
    start_mountable(flags: Gio.DriveStartFlags, start_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    start_mountable_finish(result: Gio.AsyncResult): boolean
    stop_mountable(flags: Gio.MountUnmountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    stop_mountable_finish(result: Gio.AsyncResult): boolean
    supports_thread_contexts(): boolean
    trash(cancellable?: Gio.Cancellable | null): boolean
    trash_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    trash_finish(result: Gio.AsyncResult): boolean
    unmount_mountable(flags: Gio.MountUnmountFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unmount_mountable_finish(result: Gio.AsyncResult): boolean
    unmount_mountable_with_operation(flags: Gio.MountUnmountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unmount_mountable_with_operation_finish(result: Gio.AsyncResult): boolean
    /* Virtual methods of OSTree-1.0.OSTree.RepoFile */
    vfunc_append_to(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    vfunc_append_to_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_append_to_finish(res: Gio.AsyncResult): Gio.FileOutputStream
    vfunc_copy(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null): boolean
    vfunc_copy_async(destination: Gio.File, flags: Gio.FileCopyFlags, io_priority: number, cancellable?: Gio.Cancellable | null): void
    vfunc_copy_finish(res: Gio.AsyncResult): boolean
    vfunc_create(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    vfunc_create_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_create_finish(res: Gio.AsyncResult): Gio.FileOutputStream
    vfunc_create_readwrite(flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    vfunc_create_readwrite_async(flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_create_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream
    vfunc_delete_file(cancellable?: Gio.Cancellable | null): boolean
    vfunc_delete_file_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_delete_file_finish(result: Gio.AsyncResult): boolean
    vfunc_dup(): Gio.File
    vfunc_eject_mountable(flags: Gio.MountUnmountFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_eject_mountable_finish(result: Gio.AsyncResult): boolean
    vfunc_eject_mountable_with_operation(flags: Gio.MountUnmountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_eject_mountable_with_operation_finish(result: Gio.AsyncResult): boolean
    vfunc_enumerate_children(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileEnumerator
    vfunc_enumerate_children_async(attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_enumerate_children_finish(res: Gio.AsyncResult): Gio.FileEnumerator
    vfunc_equal(file2: Gio.File): boolean
    vfunc_find_enclosing_mount(cancellable?: Gio.Cancellable | null): Gio.Mount
    vfunc_find_enclosing_mount_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_find_enclosing_mount_finish(res: Gio.AsyncResult): Gio.Mount
    vfunc_get_basename(): string | null
    vfunc_get_child_for_display_name(display_name: string): Gio.File
    vfunc_get_parent(): Gio.File | null
    vfunc_get_parse_name(): string
    vfunc_get_path(): string | null
    vfunc_get_relative_path(descendant: Gio.File): string | null
    vfunc_get_uri(): string
    vfunc_get_uri_scheme(): string | null
    vfunc_has_uri_scheme(uri_scheme: string): boolean
    vfunc_hash(): number
    vfunc_is_native(): boolean
    vfunc_make_directory(cancellable?: Gio.Cancellable | null): boolean
    vfunc_make_directory_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_make_directory_finish(result: Gio.AsyncResult): boolean
    vfunc_make_symbolic_link(symlink_value: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_measure_disk_usage_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* disk_usage */ number | null, /* num_dirs */ number | null, /* num_files */ number | null ]
    vfunc_monitor_dir(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    vfunc_monitor_file(flags: Gio.FileMonitorFlags, cancellable?: Gio.Cancellable | null): Gio.FileMonitor
    vfunc_mount_enclosing_volume(flags: Gio.MountMountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_mount_enclosing_volume_finish(result: Gio.AsyncResult): boolean
    vfunc_mount_mountable(flags: Gio.MountMountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_mount_mountable_finish(result: Gio.AsyncResult): Gio.File
    vfunc_move(destination: Gio.File, flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null): boolean
    vfunc_open_readwrite(cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    vfunc_open_readwrite_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_open_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream
    vfunc_poll_mountable(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_poll_mountable_finish(result: Gio.AsyncResult): boolean
    vfunc_prefix_matches(file: Gio.File): boolean
    vfunc_query_filesystem_info(attributes: string, cancellable?: Gio.Cancellable | null): Gio.FileInfo
    vfunc_query_filesystem_info_async(attributes: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_query_filesystem_info_finish(res: Gio.AsyncResult): Gio.FileInfo
    vfunc_query_info(attributes: string, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): Gio.FileInfo
    vfunc_query_info_async(attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_query_info_finish(res: Gio.AsyncResult): Gio.FileInfo
    vfunc_query_settable_attributes(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList
    vfunc_query_writable_namespaces(cancellable?: Gio.Cancellable | null): Gio.FileAttributeInfoList
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_read_finish(res: Gio.AsyncResult): Gio.FileInputStream
    vfunc_read_fn(cancellable?: Gio.Cancellable | null): Gio.FileInputStream
    vfunc_replace(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileOutputStream
    vfunc_replace_async(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_replace_finish(res: Gio.AsyncResult): Gio.FileOutputStream
    vfunc_replace_readwrite(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, cancellable?: Gio.Cancellable | null): Gio.FileIOStream
    vfunc_replace_readwrite_async(etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_replace_readwrite_finish(res: Gio.AsyncResult): Gio.FileIOStream
    vfunc_resolve_relative_path(relative_path: string): Gio.File | null
    vfunc_set_attribute(attribute: string, type: Gio.FileAttributeType, value_p: object | null, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    vfunc_set_attributes_async(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_set_attributes_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* info */ Gio.FileInfo ]
    vfunc_set_attributes_from_info(info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, cancellable?: Gio.Cancellable | null): boolean
    vfunc_set_display_name(display_name: string, cancellable?: Gio.Cancellable | null): Gio.File
    vfunc_set_display_name_async(display_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_set_display_name_finish(res: Gio.AsyncResult): Gio.File
    vfunc_start_mountable(flags: Gio.DriveStartFlags, start_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_start_mountable_finish(result: Gio.AsyncResult): boolean
    vfunc_stop_mountable(flags: Gio.MountUnmountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_stop_mountable_finish(result: Gio.AsyncResult): boolean
    vfunc_trash(cancellable?: Gio.Cancellable | null): boolean
    vfunc_trash_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_trash_finish(result: Gio.AsyncResult): boolean
    vfunc_unmount_mountable(flags: Gio.MountUnmountFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_unmount_mountable_finish(result: Gio.AsyncResult): boolean
    vfunc_unmount_mountable_with_operation(flags: Gio.MountUnmountFlags, mount_operation?: Gio.MountOperation | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_unmount_mountable_with_operation_finish(result: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RepoFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RepoFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RepoFile_ConstructProps)
    _init (config?: RepoFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_commandline_arg(arg: string): Gio.File
    static new_for_commandline_arg_and_cwd(arg: string, cwd: string): Gio.File
    static new_for_path(path: string): Gio.File
    static new_for_uri(uri: string): Gio.File
    static new_tmp(tmpl?: string | null): [ /* returnType */ Gio.File, /* iostream */ Gio.FileIOStream ]
    static parse_name(parse_name: string): Gio.File
    static $gtype: GObject.Type
}
interface SePolicy_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of OSTree-1.0.OSTree.SePolicy */
    path?: Gio.File
}
class SePolicy {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.SePolicy */
    get_csum(): string
    get_label(relpath: string, unix_mode: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_label */ string | null ]
    get_name(): string
    get_path(): Gio.File
    restorecon(path: string, info: Gio.FileInfo | null, target: Gio.File, flags: SePolicyRestoreconFlags, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_label */ string | null ]
    setfscreatecon(path: string, mode: number): boolean
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
    /* Virtual methods of OSTree-1.0.OSTree.SePolicy */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SePolicy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SePolicy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SePolicy_ConstructProps)
    _init (config?: SePolicy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: Gio.File, cancellable?: Gio.Cancellable | null): SePolicy
    static fscreatecon_cleanup(unused?: object | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Sysroot_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of OSTree-1.0.OSTree.Sysroot */
    path?: Gio.File
}
class Sysroot {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.Sysroot */
    cleanup(cancellable?: Gio.Cancellable | null): boolean
    deploy_tree(osname: string | null, revision: string, origin?: GLib.KeyFile | null, provided_merge_deployment?: Deployment | null, override_kernel_argv?: string[] | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_deployment */ Deployment ]
    deployment_set_kargs(deployment: Deployment, new_kargs: string[], cancellable?: Gio.Cancellable | null): boolean
    deployment_set_mutable(deployment: Deployment, is_mutable: boolean, cancellable?: Gio.Cancellable | null): boolean
    deployment_unlock(deployment: Deployment, unlocked_state: DeploymentUnlockedState, cancellable?: Gio.Cancellable | null): boolean
    ensure_initialized(cancellable?: Gio.Cancellable | null): boolean
    get_booted_deployment(): Deployment
    get_bootversion(): number
    get_deployment_directory(deployment: Deployment): Gio.File
    get_deployment_dirpath(deployment: Deployment): string
    get_deployments(): Deployment[]
    get_fd(): number
    get_merge_deployment(osname?: string | null): Deployment
    get_path(): Gio.File
    get_repo(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_repo */ Repo ]
    get_subbootversion(): number
    init_osname(osname: string, cancellable?: Gio.Cancellable | null): boolean
    load(cancellable?: Gio.Cancellable | null): boolean
    load_if_changed(out_changed: boolean, cancellable?: Gio.Cancellable | null): boolean
    lock(): boolean
    lock_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lock_finish(result: Gio.AsyncResult): boolean
    origin_new_from_refspec(refspec: string): GLib.KeyFile
    prepare_cleanup(cancellable?: Gio.Cancellable | null): boolean
    simple_write_deployment(osname: string | null, new_deployment: Deployment, merge_deployment: Deployment | null, flags: SysrootSimpleWriteDeploymentFlags, cancellable?: Gio.Cancellable | null): boolean
    try_lock(): [ /* returnType */ boolean, /* out_acquired */ boolean ]
    unload(): void
    unlock(): void
    write_deployments(new_deployments: Deployment[], cancellable?: Gio.Cancellable | null): boolean
    write_origin_file(deployment: Deployment, new_origin?: GLib.KeyFile | null, cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: (($obj: Sysroot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Sysroot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Sysroot_ConstructProps)
    _init (config?: Sysroot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path?: Gio.File | null): Sysroot
    static new_default(): Sysroot
    static get_deployment_origin_path(deployment_path: Gio.File): Gio.File
    static $gtype: GObject.Type
}
interface SysrootUpgrader_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of OSTree-1.0.OSTree.SysrootUpgrader */
    flags?: SysrootUpgraderFlags
    osname?: string
    sysroot?: Sysroot
}
class SysrootUpgrader {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of OSTree-1.0.OSTree.SysrootUpgrader */
    deploy(cancellable?: Gio.Cancellable | null): boolean
    dup_origin(): GLib.KeyFile
    get_origin(): GLib.KeyFile
    get_origin_description(): string
    pull(flags: RepoPullFlags, upgrader_flags: SysrootUpgraderPullFlags, progress?: AsyncProgress | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_changed */ boolean ]
    pull_one_dir(dir_to_pull: string, flags: RepoPullFlags, upgrader_flags: SysrootUpgraderPullFlags, progress: AsyncProgress, out_changed: boolean, cancellable?: Gio.Cancellable | null): boolean
    set_origin(origin?: GLib.KeyFile | null, cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of OSTree-1.0.OSTree.SysrootUpgrader */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SysrootUpgrader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SysrootUpgrader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SysrootUpgrader_ConstructProps)
    _init (config?: SysrootUpgrader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sysroot: Sysroot, cancellable?: Gio.Cancellable | null): SysrootUpgrader
    static new_for_os(sysroot: Sysroot, osname?: string | null, cancellable?: Gio.Cancellable | null): SysrootUpgrader
    static new_for_os_with_flags(sysroot: Sysroot, osname: string | null, flags: SysrootUpgraderFlags, cancellable?: Gio.Cancellable | null): SysrootUpgrader
    static check_timestamps(repo: Repo, from_rev: string, to_rev: string): boolean
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class AsyncProgressClass {
    /* Fields of OSTree-1.0.OSTree.AsyncProgressClass */
    readonly parent_class: GObject.ObjectClass
    readonly changed: (self: AsyncProgress) => void
    static name: string
}
class Bootloader {
    static name: string
}
class BootloaderGrub2 {
    static name: string
}
class BootloaderInterface {
    /* Fields of OSTree-1.0.OSTree.BootloaderInterface */
    readonly g_iface: GObject.TypeInterface
    readonly query: (bootloader: Bootloader, out_is_active: boolean, cancellable: Gio.Cancellable) => boolean
    readonly get_name: (self: Bootloader) => string
    readonly write_config: (self: Bootloader, bootversion: number, cancellable: Gio.Cancellable) => boolean
    readonly is_atomic: (self: Bootloader) => boolean
    static name: string
}
class BootloaderSyslinux {
    static name: string
}
class BootloaderUboot {
    static name: string
}
abstract class ChecksumInputStreamClass {
    /* Fields of OSTree-1.0.OSTree.ChecksumInputStreamClass */
    readonly parent_class: Gio.FilterInputStreamClass
    static name: string
}
class ChecksumInputStreamPrivate {
    static name: string
}
class CmdPrivateVTable {
    /* Fields of OSTree-1.0.OSTree.CmdPrivateVTable */
    readonly ostree_generate_grub2_config: (sysroot: Sysroot, bootversion: number, target_fd: number, cancellable: Gio.Cancellable) => boolean
    readonly ostree_static_delta_dump: (repo: Repo, delta_id: string, cancellable: Gio.Cancellable) => boolean
    readonly ostree_static_delta_query_exists: (repo: Repo, delta_id: string, out_exists: boolean, cancellable: Gio.Cancellable) => boolean
    readonly ostree_static_delta_delete: (repo: Repo, delta_id: string, cancellable: Gio.Cancellable) => boolean
    static name: string
}
class DiffItem {
    /* Fields of OSTree-1.0.OSTree.DiffItem */
    readonly refcount: number
    readonly src: Gio.File
    readonly target: Gio.File
    readonly src_info: Gio.FileInfo
    readonly target_info: Gio.FileInfo
    readonly src_checksum: string
    readonly target_checksum: string
    /* Methods of OSTree-1.0.OSTree.DiffItem */
    ref(): DiffItem
    unref(): void
    static name: string
}
class GpgVerifier {
    static name: string
}
class LibarchiveInputStream {
    /* Fields of OSTree-1.0.OSTree.LibarchiveInputStream */
    readonly parent_instance: Gio.InputStream
    static name: string
}
class LibarchiveInputStreamClass {
    /* Fields of OSTree-1.0.OSTree.LibarchiveInputStreamClass */
    readonly parent_class: Gio.InputStreamClass
    static name: string
}
class LibarchiveInputStreamPrivate {
    static name: string
}
class LzmaCompressor {
    static name: string
}
class LzmaCompressorClass {
    /* Fields of OSTree-1.0.OSTree.LzmaCompressorClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class LzmaDecompressor {
    static name: string
}
class LzmaDecompressorClass {
    /* Fields of OSTree-1.0.OSTree.LzmaDecompressorClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class MutableTreeClass {
    /* Fields of OSTree-1.0.OSTree.MutableTreeClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class MutableTreeIter {
    /* Fields of OSTree-1.0.OSTree.MutableTreeIter */
    readonly in_files: boolean
    readonly iter: GLib.HashTableIter
    static name: string
}
class RepoCheckoutAtOptions {
    /* Fields of OSTree-1.0.OSTree.RepoCheckoutAtOptions */
    readonly mode: RepoCheckoutMode
    readonly overwrite_mode: RepoCheckoutOverwriteMode
    readonly enable_uncompressed_cache: boolean
    readonly enable_fsync: boolean
    readonly process_whiteouts: boolean
    readonly no_copy_fallback: boolean
    readonly unused_bools: boolean[]
    readonly subpath: string
    readonly devino_to_csum_cache: RepoDevInoCache
    readonly unused_ints: number[]
    readonly unused_ptrs: object[]
    static name: string
}
class RepoCheckoutOptions {
    /* Fields of OSTree-1.0.OSTree.RepoCheckoutOptions */
    readonly mode: RepoCheckoutMode
    readonly overwrite_mode: RepoCheckoutOverwriteMode
    readonly enable_uncompressed_cache: number
    readonly disable_fsync: number
    readonly process_whiteouts: number
    readonly no_copy_fallback: number
    readonly reserved: number
    readonly subpath: string
    readonly devino_to_csum_cache: RepoDevInoCache
    readonly unused_uints: number[]
    readonly unused_ptrs: object[]
    static name: string
}
class RepoCommitModifier {
    /* Methods of OSTree-1.0.OSTree.RepoCommitModifier */
    ref(): RepoCommitModifier
    set_devino_cache(cache: RepoDevInoCache): void
    set_sepolicy(sepolicy?: SePolicy | null): void
    set_xattr_callback(callback: RepoCommitModifierXattrCallback): void
    unref(): void
    static name: string
    static new(flags: RepoCommitModifierFlags, commit_filter: RepoCommitFilter | null): RepoCommitModifier
    constructor(flags: RepoCommitModifierFlags, commit_filter: RepoCommitFilter | null)
    /* Static methods and pseudo-constructors */
    static new(flags: RepoCommitModifierFlags, commit_filter: RepoCommitFilter | null): RepoCommitModifier
}
class RepoCommitTraverseIter {
    /* Fields of OSTree-1.0.OSTree.RepoCommitTraverseIter */
    readonly initialized: boolean
    readonly dummy: object[]
    readonly dummy_checksum_data: number[]
    /* Methods of OSTree-1.0.OSTree.RepoCommitTraverseIter */
    clear(): void
    get_dir(): [ /* out_name */ string, /* out_content_checksum */ string, /* out_meta_checksum */ string ]
    get_file(): [ /* out_name */ string, /* out_checksum */ string ]
    init_commit(repo: Repo, commit: GLib.Variant, flags: RepoCommitTraverseFlags): boolean
    init_dirtree(repo: Repo, dirtree: GLib.Variant, flags: RepoCommitTraverseFlags): boolean
    next(cancellable?: Gio.Cancellable | null): RepoCommitIterResult
    static name: string
    /* Static methods and pseudo-constructors */
    static cleanup(p?: object | null): void
}
class RepoDevInoCache {
    /* Methods of OSTree-1.0.OSTree.RepoDevInoCache */
    ref(): RepoDevInoCache
    unref(): void
    static name: string
    static new(): RepoDevInoCache
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): RepoDevInoCache
}
class RepoExportArchiveOptions {
    /* Fields of OSTree-1.0.OSTree.RepoExportArchiveOptions */
    readonly disable_xattrs: number
    readonly reserved: number
    readonly timestamp_secs: number
    readonly unused_uint: number[]
    readonly path_prefix: string
    readonly unused_ptrs: object[]
    static name: string
}
abstract class RepoFileClass {
    /* Fields of OSTree-1.0.OSTree.RepoFileClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class RepoFileEnumerator {
    static name: string
}
class RepoFileEnumeratorClass {
    /* Fields of OSTree-1.0.OSTree.RepoFileEnumeratorClass */
    readonly parent_class: Gio.FileEnumeratorClass
    static name: string
}
class RepoImportArchiveOptions {
    /* Fields of OSTree-1.0.OSTree.RepoImportArchiveOptions */
    readonly ignore_unsupported_content: number
    readonly autocreate_parents: number
    readonly use_ostree_convention: number
    readonly callback_with_entry_pathname: number
    readonly reserved: number
    readonly unused_uint: number[]
    readonly unused_ptrs: object[]
    static name: string
}
class RepoTransactionStats {
    /* Fields of OSTree-1.0.OSTree.RepoTransactionStats */
    readonly metadata_objects_total: number
    readonly metadata_objects_written: number
    readonly content_objects_total: number
    readonly content_objects_written: number
    readonly content_bytes_written: number
    readonly padding1: number
    readonly padding2: number
    readonly padding3: number
    readonly padding4: number
    static name: string
}
class RollsumMatches {
    /* Fields of OSTree-1.0.OSTree.RollsumMatches */
    readonly from_rollsums: GLib.HashTable
    readonly to_rollsums: GLib.HashTable
    readonly crcmatches: number
    readonly bufmatches: number
    readonly total: number
    readonly match_size: number
    readonly matches: object[]
    static name: string
}
class TlsCertInteraction {
    static name: string
}
class TlsCertInteractionClass {
    static name: string
}
}
export default OSTree;