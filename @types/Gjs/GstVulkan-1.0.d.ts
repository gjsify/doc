/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstVulkan-1.0
 */

import type * as Gjs from './Gjs';
import type Vulkan from './Vulkan-1.0';
import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstVulkan {

enum VulkanBarrierFlags {
    NONE,
}
enum VulkanBarrierType {
    NONE,
    TYPE_MEMORY,
    TYPE_BUFFER,
    TYPE_IMAGE,
}
enum VulkanError {
    FAILED,
}
enum VulkanFormatScaling {
    UNORM,
    SNORM,
    USCALED,
    SSCALED,
    UINT,
    SINT,
    SRGB,
}
enum VulkanHandleType {
    DESCRIPTOR_SET_LAYOUT,
    PIPELINE_LAYOUT,
    PIPELINE,
    RENDER_PASS,
    SAMPLER,
    FRAMEBUFFER,
    SHADER,
}
enum VulkanWindowError {
    FAILED,
    OLD_LIBS,
    RESOURCE_UNAVAILABLE,
}
enum VulkanDisplayType {
    NONE,
    XCB,
    WAYLAND,
    COCOA,
    IOS,
    WIN32,
    ANDROID,
    ANY,
}
enum VulkanFormatFlags {
    YUV,
    RGB,
    ALPHA,
    LE,
    COMPLEX,
}
const CAPS_FEATURE_MEMORY_VULKAN_BUFFER: string
const CAPS_FEATURE_MEMORY_VULKAN_IMAGE: string
const VULKAN_BUFFER_MEMORY_ALLOCATOR_NAME: string
const VULKAN_DEVICE_CONTEXT_TYPE_STR: string
const VULKAN_DISPLAY_CONTEXT_TYPE_STR: string
const VULKAN_IMAGE_MEMORY_ALLOCATOR_NAME: string
const VULKAN_INSTANCE_CONTEXT_TYPE_STR: string
const VULKAN_MAX_COMPONENTS: number
const VULKAN_MEMORY_ALLOCATOR_NAME: string
const VULKAN_NON_DISPATCHABLE_HANDLE_FORMAT: string
const VULKAN_QUEUE_CONTEXT_TYPE_STR: string
const VULKAN_SWAPPER_VIDEO_FORMATS: string
function context_get_vulkan_device(context: Gst.Context, device: VulkanDevice): boolean
function context_get_vulkan_display(context: Gst.Context, display: VulkanDisplay): boolean
function context_get_vulkan_instance(context: Gst.Context, instance: VulkanInstance): boolean
function context_get_vulkan_queue(context: Gst.Context, queue: VulkanQueue): boolean
function context_set_vulkan_device(context: Gst.Context, device: VulkanDevice): void
function context_set_vulkan_display(context: Gst.Context, display: VulkanDisplay): void
function context_set_vulkan_instance(context: Gst.Context, instance: VulkanInstance): void
function context_set_vulkan_queue(context: Gst.Context, queue: VulkanQueue): void
function is_vulkan_buffer_memory(mem: Gst.Memory): boolean
function is_vulkan_image_memory(mem: Gst.Memory): boolean
function is_vulkan_memory(mem: Gst.Memory): boolean
function vulkan_buffer_memory_alloc(device: VulkanDevice, size: number, usage: Vulkan.BufferUsageFlags, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory
function vulkan_buffer_memory_init_once(): void
function vulkan_buffer_memory_wrapped(device: VulkanDevice, buffer: Vulkan.Buffer, usage: Vulkan.BufferUsageFlags, user_data?: object | null, notify?: GLib.DestroyNotify | null): Gst.Memory
function vulkan_create_shader(device: VulkanDevice, code: string, size: number): VulkanHandle
function vulkan_display_type_to_extension_string(type: VulkanDisplayType): string
function vulkan_ensure_element_data(element: Gst.Element, display_ptr: VulkanDisplay | null, instance_ptr: VulkanInstance): [ /* returnType */ boolean, /* display_ptr */ VulkanDisplay | null, /* instance_ptr */ VulkanInstance ]
function vulkan_error_quark(): GLib.Quark
function vulkan_format_get_info(format: Vulkan.Format): VulkanFormatInfo
function vulkan_get_or_create_image_view(image: VulkanImageMemory): VulkanImageView
function vulkan_global_context_query(element: Gst.Element, context_type: string): void
function vulkan_handle_context_query(element: Gst.Element, query: Gst.Query, display?: VulkanDisplay | null, instance?: VulkanInstance | null, device?: VulkanDevice | null): boolean
function vulkan_handle_set_context(element: Gst.Element, context: Gst.Context, display: VulkanDisplay | null, instance: VulkanInstance): [ /* returnType */ boolean, /* display */ VulkanDisplay | null, /* instance */ VulkanInstance ]
function vulkan_image_memory_alloc(device: VulkanDevice, format: Vulkan.Format, width: number, height: number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory
function vulkan_image_memory_init_once(): void
function vulkan_image_memory_wrapped(device: VulkanDevice, image: Vulkan.Image, format: Vulkan.Format, width: number, height: number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, user_data: object | null, notify: GLib.DestroyNotify): Gst.Memory
function vulkan_local_context_query(element: Gst.Element, context_type: string): Gst.Query
function vulkan_memory_alloc(device: VulkanDevice, memory_type_index: number, params: Gst.AllocationParams, size: number, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory
function vulkan_memory_find_memory_type_index_with_type_properties(device: VulkanDevice, type_bits: number, properties: Vulkan.MemoryPropertyFlags, type_index: number): boolean
function vulkan_memory_heap_flags_to_string(prop_bits: Vulkan.MemoryHeapFlags): string
function vulkan_memory_init_once(): void
function vulkan_memory_property_flags_to_string(prop_bits: Vulkan.MemoryPropertyFlags): string
function vulkan_run_query(element: Gst.Element, query: Gst.Query, direction: Gst.PadDirection): boolean
function vulkan_sample_count_flags_to_string(sample_count_bits: Vulkan.SampleCountFlags): string
function vulkan_trash_mini_object_unref(device: VulkanDevice, user_data?: object | null): void
function vulkan_trash_object_unref(device: VulkanDevice, user_data?: object | null): void
function vulkan_window_error_quark(): GLib.Quark
interface VulkanDeviceForEachQueueFunc {
    (device: VulkanDevice, queue: VulkanQueue): boolean
}
interface VulkanHandleDestroyNotify {
    (handle: VulkanHandle): void
}
interface VulkanImageMemoryFindViewFunc {
    (view: VulkanImageView): boolean
}
interface VulkanTrashListAdd {
    (trash_list: VulkanTrashList, trash: VulkanTrash): boolean
}
interface VulkanTrashListGC {
    (trash_list: VulkanTrashList): void
}
interface VulkanTrashListWait {
    (trash_list: VulkanTrashList, timeout: number): boolean
}
interface VulkanTrashNotify {
    (device: VulkanDevice): void
}
interface VulkanBufferMemoryAllocator_ConstructProps extends Gst.Allocator_ConstructProps {
}
class VulkanBufferMemoryAllocator {
    /* Fields of Gst-1.0.Gst.Allocator */
    readonly object: Gst.Object
    readonly mem_type: string
    readonly mem_map: Gst.MemoryMapFunction
    readonly mem_unmap: Gst.MemoryUnmapFunction
    readonly mem_copy: Gst.MemoryCopyFunction
    readonly mem_share: Gst.MemoryShareFunction
    readonly mem_is_span: Gst.MemoryIsSpanFunction
    readonly mem_map_full: Gst.MemoryMapFullFunction
    readonly mem_unmap_full: Gst.MemoryUnmapFullFunction
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    set_default(): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Allocator */
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfunc_free(memory: Gst.Memory): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanBufferMemoryAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanBufferMemoryAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanBufferMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanBufferMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanBufferMemoryAllocator_ConstructProps)
    _init (config?: VulkanBufferMemoryAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
interface VulkanBufferPool_ConstructProps extends Gst.BufferPool_ConstructProps {
}
class VulkanBufferPool {
    /* Fields of Gst-1.0.Gst.BufferPool */
    readonly object: Gst.Object
    readonly flushing: number
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.BufferPool */
    acquire_buffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    get_config(): Gst.Structure
    get_options(): string[]
    has_option(option: string): boolean
    is_active(): boolean
    release_buffer(buffer: Gst.Buffer): void
    set_active(active: boolean): boolean
    set_config(config: Gst.Structure): boolean
    set_flushing(flushing: boolean): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.BufferPool */
    vfunc_acquire_buffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    vfunc_alloc_buffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    vfunc_flush_start(): void
    vfunc_flush_stop(): void
    vfunc_free_buffer(buffer: Gst.Buffer): void
    vfunc_get_options(): string[]
    vfunc_release_buffer(buffer: Gst.Buffer): void
    vfunc_reset_buffer(buffer: Gst.Buffer): void
    vfunc_set_config(config: Gst.Structure): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanBufferPool, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanBufferPool, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanBufferPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanBufferPool_ConstructProps)
    _init (config?: VulkanBufferPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(device: VulkanDevice): VulkanBufferPool
    /* Function overloads */
    static new(): VulkanBufferPool
    static $gtype: GObject.Type
}
interface VulkanCommandPool_ConstructProps extends Gst.Object_ConstructProps {
}
class VulkanCommandPool {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanCommandPool */
    create(): VulkanCommandBuffer
    get_queue(): VulkanQueue
    lock(): void
    unlock(): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanCommandPool, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanCommandPool, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanCommandPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanCommandPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanCommandPool_ConstructProps)
    _init (config?: VulkanCommandPool_ConstructProps): void
    static $gtype: GObject.Type
}
interface VulkanDescriptorCache_ConstructProps extends VulkanHandlePool_ConstructProps {
}
class VulkanDescriptorCache {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanHandlePool */
    readonly parent: Gst.Object
    readonly device: VulkanDevice
    readonly outstanding: object[]
    readonly available: object[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanDescriptorCache */
    acquire(): VulkanDescriptorSet
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanHandlePool */
    acquire(): object | null
    alloc(): object | null
    release(handle?: object | null): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GstVulkan-1.0.GstVulkan.VulkanHandlePool */
    vfunc_acquire(): object | null
    vfunc_alloc(): object | null
    vfunc_free(handle?: object | null): void
    vfunc_release(handle?: object | null): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanDescriptorCache, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanDescriptorCache, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanDescriptorCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanDescriptorCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanDescriptorCache_ConstructProps)
    _init (config?: VulkanDescriptorCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(pool: VulkanDescriptorPool, n_layouts: number, layouts: VulkanHandle): VulkanDescriptorCache
    static $gtype: GObject.Type
}
interface VulkanDescriptorPool_ConstructProps extends Gst.Object_ConstructProps {
}
class VulkanDescriptorPool {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanDescriptorPool */
    create(n_layouts: number, layouts: VulkanHandle): VulkanDescriptorSet
    get_device(): VulkanDevice
    get_max_sets(): number
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanDescriptorPool, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanDescriptorPool, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanDescriptorPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanDescriptorPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanDescriptorPool_ConstructProps)
    _init (config?: VulkanDescriptorPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_wrapped(device: VulkanDevice, pool: Vulkan.DescriptorPool, max_sets: number): VulkanDescriptorPool
    static $gtype: GObject.Type
}
interface VulkanDevice_ConstructProps extends Gst.Object_ConstructProps {
    /* Constructor properties of GstVulkan-1.0.GstVulkan.VulkanDevice */
    physical_device?: VulkanPhysicalDevice
}
class VulkanDevice {
    /* Properties of GstVulkan-1.0.GstVulkan.VulkanDevice */
    readonly instance: VulkanInstance
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanDevice */
    create_fence(): VulkanFence
    foreach_queue(): void
    get_instance(): VulkanInstance
    get_proc_address(name: string): object | null
    get_queue(queue_family: number, queue_i: number): VulkanQueue
    open(): boolean
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanDevice, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanDevice, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::instance", callback: (($obj: VulkanDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::instance", callback: (($obj: VulkanDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanDevice_ConstructProps)
    _init (config?: VulkanDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(physical_device: VulkanPhysicalDevice): VulkanDevice
    static new_with_index(instance: VulkanInstance, device_index: number): VulkanDevice
    static handle_context_query(element: Gst.Element, query: Gst.Query, device: VulkanDevice): boolean
    static run_context_query(element: Gst.Element, device: VulkanDevice): [ /* returnType */ boolean, /* device */ VulkanDevice ]
    static $gtype: GObject.Type
}
interface VulkanDisplay_ConstructProps extends Gst.Object_ConstructProps {
}
class VulkanDisplay {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanDisplay */
    create_window(): VulkanWindow
    find_window(data: object | null, compare_func: GLib.CompareFunc): VulkanWindow
    get_handle(): object | null
    get_handle_type(): VulkanDisplayType
    remove_window(window: VulkanWindow): boolean
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GstVulkan-1.0.GstVulkan.VulkanDisplay */
    vfunc_create_window(): VulkanWindow
    vfunc_get_handle(): object | null
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanDisplay, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanDisplay, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanDisplay_ConstructProps)
    _init (config?: VulkanDisplay_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(instance: VulkanInstance): VulkanDisplay
    static new_with_type(instance: VulkanInstance, type: VulkanDisplayType): VulkanDisplay
    static choose_type(instance: VulkanInstance): VulkanDisplayType
    static handle_context_query(element: Gst.Element, query: Gst.Query, display?: VulkanDisplay | null): boolean
    static run_context_query(element: Gst.Element, display: VulkanDisplay): [ /* returnType */ boolean, /* display */ VulkanDisplay ]
    static $gtype: GObject.Type
}
interface VulkanFenceCache_ConstructProps extends VulkanHandlePool_ConstructProps {
}
class VulkanFenceCache {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanHandlePool */
    readonly parent: Gst.Object
    readonly device: VulkanDevice
    readonly outstanding: object[]
    readonly available: object[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanHandlePool */
    acquire(): object | null
    alloc(): object | null
    release(handle?: object | null): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GstVulkan-1.0.GstVulkan.VulkanHandlePool */
    vfunc_acquire(): object | null
    vfunc_alloc(): object | null
    vfunc_free(handle?: object | null): void
    vfunc_release(handle?: object | null): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanFenceCache, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanFenceCache, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanFenceCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanFenceCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanFenceCache_ConstructProps)
    _init (config?: VulkanFenceCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(device: VulkanDevice): VulkanFenceCache
    static $gtype: GObject.Type
}
interface VulkanFullScreenQuad_ConstructProps extends Gst.Object_ConstructProps {
}
class VulkanFullScreenQuad {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuad */
    draw(): boolean
    fill_command_buffer(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean
    get_last_fence(): VulkanFence
    prepare_draw(fence: VulkanFence): boolean
    set_index_buffer(indices: Gst.Memory, n_indices: number): boolean
    set_info(in_info: GstVideo.VideoInfo, out_info: GstVideo.VideoInfo): boolean
    set_input_buffer(buffer: Gst.Buffer): boolean
    set_output_buffer(buffer: Gst.Buffer): boolean
    set_shaders(vert: VulkanHandle, frag: VulkanHandle): boolean
    set_uniform_buffer(uniforms: Gst.Memory): boolean
    set_vertex_buffer(vertices: Gst.Memory): boolean
    submit(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanFullScreenQuad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanFullScreenQuad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanFullScreenQuad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanFullScreenQuad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanFullScreenQuad_ConstructProps)
    _init (config?: VulkanFullScreenQuad_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(queue: VulkanQueue): VulkanFullScreenQuad
    static $gtype: GObject.Type
}
interface VulkanHandlePool_ConstructProps extends Gst.Object_ConstructProps {
}
class VulkanHandlePool {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanHandlePool */
    acquire(): object | null
    alloc(): object | null
    release(handle?: object | null): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GstVulkan-1.0.GstVulkan.VulkanHandlePool */
    vfunc_acquire(): object | null
    vfunc_alloc(): object | null
    vfunc_free(handle?: object | null): void
    vfunc_release(handle?: object | null): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanHandlePool, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanHandlePool, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanHandlePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanHandlePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanHandlePool_ConstructProps)
    _init (config?: VulkanHandlePool_ConstructProps): void
    static $gtype: GObject.Type
}
interface VulkanImageBufferPool_ConstructProps extends Gst.BufferPool_ConstructProps {
}
class VulkanImageBufferPool {
    /* Fields of Gst-1.0.Gst.BufferPool */
    readonly object: Gst.Object
    readonly flushing: number
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.BufferPool */
    acquire_buffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    get_config(): Gst.Structure
    get_options(): string[]
    has_option(option: string): boolean
    is_active(): boolean
    release_buffer(buffer: Gst.Buffer): void
    set_active(active: boolean): boolean
    set_config(config: Gst.Structure): boolean
    set_flushing(flushing: boolean): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.BufferPool */
    vfunc_acquire_buffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    vfunc_alloc_buffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    vfunc_flush_start(): void
    vfunc_flush_stop(): void
    vfunc_free_buffer(buffer: Gst.Buffer): void
    vfunc_get_options(): string[]
    vfunc_release_buffer(buffer: Gst.Buffer): void
    vfunc_reset_buffer(buffer: Gst.Buffer): void
    vfunc_set_config(config: Gst.Structure): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanImageBufferPool, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanImageBufferPool, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanImageBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanImageBufferPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanImageBufferPool_ConstructProps)
    _init (config?: VulkanImageBufferPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(device: VulkanDevice): VulkanImageBufferPool
    /* Function overloads */
    static new(): VulkanImageBufferPool
    static $gtype: GObject.Type
}
interface VulkanImageMemoryAllocator_ConstructProps extends Gst.Allocator_ConstructProps {
}
class VulkanImageMemoryAllocator {
    /* Fields of Gst-1.0.Gst.Allocator */
    readonly object: Gst.Object
    readonly mem_type: string
    readonly mem_map: Gst.MemoryMapFunction
    readonly mem_unmap: Gst.MemoryUnmapFunction
    readonly mem_copy: Gst.MemoryCopyFunction
    readonly mem_share: Gst.MemoryShareFunction
    readonly mem_is_span: Gst.MemoryIsSpanFunction
    readonly mem_map_full: Gst.MemoryMapFullFunction
    readonly mem_unmap_full: Gst.MemoryUnmapFullFunction
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    set_default(): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Allocator */
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfunc_free(memory: Gst.Memory): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanImageMemoryAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanImageMemoryAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanImageMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanImageMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanImageMemoryAllocator_ConstructProps)
    _init (config?: VulkanImageMemoryAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
interface VulkanInstance_ConstructProps extends Gst.Object_ConstructProps {
}
class VulkanInstance {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanInstance */
    create_device(): VulkanDevice
    get_proc_address(name: string): object | null
    open(): boolean
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstVulkan-1.0.GstVulkan.VulkanInstance */
    connect(sigName: "create-device", callback: (($obj: VulkanInstance) => VulkanDevice)): number
    connect_after(sigName: "create-device", callback: (($obj: VulkanInstance) => VulkanDevice)): number
    emit(sigName: "create-device"): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanInstance, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanInstance, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanInstance, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanInstance, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanInstance_ConstructProps)
    _init (config?: VulkanInstance_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VulkanInstance
    static handle_context_query(element: Gst.Element, query: Gst.Query, instance?: VulkanInstance | null): boolean
    static run_context_query(element: Gst.Element, instance: VulkanInstance): [ /* returnType */ boolean, /* instance */ VulkanInstance ]
    static $gtype: GObject.Type
}
interface VulkanMemoryAllocator_ConstructProps extends Gst.Allocator_ConstructProps {
}
class VulkanMemoryAllocator {
    /* Fields of Gst-1.0.Gst.Allocator */
    readonly object: Gst.Object
    readonly mem_type: string
    readonly mem_map: Gst.MemoryMapFunction
    readonly mem_unmap: Gst.MemoryUnmapFunction
    readonly mem_copy: Gst.MemoryCopyFunction
    readonly mem_share: Gst.MemoryShareFunction
    readonly mem_is_span: Gst.MemoryIsSpanFunction
    readonly mem_map_full: Gst.MemoryMapFullFunction
    readonly mem_unmap_full: Gst.MemoryUnmapFullFunction
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    set_default(): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Allocator */
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfunc_free(memory: Gst.Memory): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanMemoryAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanMemoryAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanMemoryAllocator_ConstructProps)
    _init (config?: VulkanMemoryAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
interface VulkanPhysicalDevice_ConstructProps extends Gst.Object_ConstructProps {
    /* Constructor properties of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice */
    device_index?: number
    instance?: VulkanInstance
}
class VulkanPhysicalDevice {
    /* Properties of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice */
    readonly name: string
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice */
    get_instance(): VulkanInstance
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanPhysicalDevice, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanPhysicalDevice, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanPhysicalDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanPhysicalDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: VulkanPhysicalDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VulkanPhysicalDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanPhysicalDevice_ConstructProps)
    _init (config?: VulkanPhysicalDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(instance: VulkanInstance, device_index: number): VulkanPhysicalDevice
    static type_to_string(type: Vulkan.PhysicalDeviceType): string
    static $gtype: GObject.Type
}
interface VulkanQueue_ConstructProps extends Gst.Object_ConstructProps {
}
class VulkanQueue {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanQueue */
    create_command_pool(): VulkanCommandPool
    get_device(): VulkanDevice
    submit_lock(): void
    submit_unlock(): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanQueue, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanQueue, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanQueue_ConstructProps)
    _init (config?: VulkanQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static flags_to_string(queue_bits: Vulkan.QueueFlags): string
    static handle_context_query(element: Gst.Element, query: Gst.Query, queue?: VulkanQueue | null): boolean
    static run_context_query(element: Gst.Element, queue: VulkanQueue): [ /* returnType */ boolean, /* queue */ VulkanQueue ]
    static $gtype: GObject.Type
}
interface VulkanSwapper_ConstructProps extends Gst.Object_ConstructProps {
    /* Constructor properties of GstVulkan-1.0.GstVulkan.VulkanSwapper */
    force_aspect_ratio?: boolean
    pixel_aspect_ratio?: Gst.Fraction
}
class VulkanSwapper {
    /* Properties of GstVulkan-1.0.GstVulkan.VulkanSwapper */
    force_aspect_ratio: boolean
    pixel_aspect_ratio: Gst.Fraction
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanSwapper */
    choose_queue(available_queue: VulkanQueue): boolean
    get_supported_caps(): Gst.Caps
    get_surface_rectangles(): [ /* input_image */ GstVideo.VideoRectangle | null, /* surface_location */ GstVideo.VideoRectangle | null, /* display_rect */ GstVideo.VideoRectangle | null ]
    render_buffer(buffer: Gst.Buffer): boolean
    set_caps(caps: Gst.Caps): boolean
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanSwapper, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanSwapper, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanSwapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanSwapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::force-aspect-ratio", callback: (($obj: VulkanSwapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force-aspect-ratio", callback: (($obj: VulkanSwapper, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixel-aspect-ratio", callback: (($obj: VulkanSwapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-aspect-ratio", callback: (($obj: VulkanSwapper, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanSwapper_ConstructProps)
    _init (config?: VulkanSwapper_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(device: VulkanDevice, window: VulkanWindow): VulkanSwapper
    static $gtype: GObject.Type
}
interface VulkanTrashFenceList_ConstructProps extends VulkanTrashList_ConstructProps {
}
class VulkanTrashFenceList {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanTrashList */
    readonly parent: VulkanHandlePool
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanHandlePool */
    readonly device: VulkanDevice
    readonly outstanding: object[]
    readonly available: object[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanTrashList */
    acquire(fence: VulkanFence, notify: VulkanTrashNotify): VulkanTrash
    add(trash: VulkanTrash): boolean
    gc(): void
    wait(timeout: number): boolean
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanHandlePool */
    acquire(): object | null
    alloc(): object | null
    release(handle?: object | null): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GstVulkan-1.0.GstVulkan.VulkanTrashList */
    vfunc_add_func(trash: VulkanTrash): boolean
    vfunc_gc_func(): void
    vfunc_wait_func(timeout: number): boolean
    /* Virtual methods of GstVulkan-1.0.GstVulkan.VulkanHandlePool */
    vfunc_acquire(): object | null
    vfunc_alloc(): object | null
    vfunc_free(handle?: object | null): void
    vfunc_release(handle?: object | null): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanTrashFenceList, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanTrashFenceList, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanTrashFenceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanTrashFenceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanTrashFenceList_ConstructProps)
    _init (config?: VulkanTrashFenceList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VulkanTrashFenceList
    static $gtype: GObject.Type
}
interface VulkanTrashList_ConstructProps extends VulkanHandlePool_ConstructProps {
}
class VulkanTrashList {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanHandlePool */
    readonly parent: Gst.Object
    readonly device: VulkanDevice
    readonly outstanding: object[]
    readonly available: object[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanTrashList */
    acquire(fence: VulkanFence, notify: VulkanTrashNotify): VulkanTrash
    add(trash: VulkanTrash): boolean
    gc(): void
    wait(timeout: number): boolean
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanHandlePool */
    acquire(): object | null
    alloc(): object | null
    release(handle?: object | null): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GstVulkan-1.0.GstVulkan.VulkanTrashList */
    vfunc_add_func(trash: VulkanTrash): boolean
    vfunc_gc_func(): void
    vfunc_wait_func(timeout: number): boolean
    /* Virtual methods of GstVulkan-1.0.GstVulkan.VulkanHandlePool */
    vfunc_acquire(): object | null
    vfunc_alloc(): object | null
    vfunc_free(handle?: object | null): void
    vfunc_release(handle?: object | null): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanTrashList, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanTrashList, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanTrashList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanTrashList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanTrashList_ConstructProps)
    _init (config?: VulkanTrashList_ConstructProps): void
    static $gtype: GObject.Type
}
interface VulkanVideoFilter_ConstructProps extends GstBase.BaseTransform_ConstructProps {
}
class VulkanVideoFilter {
    /* Properties of GstBase-1.0.GstBase.BaseTransform */
    qos: boolean
    /* Fields of GstBase-1.0.GstBase.BaseTransform */
    readonly element: Gst.Element
    readonly sinkpad: Gst.Pad
    readonly srcpad: Gst.Pad
    readonly have_segment: boolean
    readonly segment: Gst.Segment
    readonly queued_buf: Gst.Buffer
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    readonly state_lock: GLib.RecMutex
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly target_state: Gst.State
    readonly current_state: Gst.State
    readonly next_state: Gst.State
    readonly pending_state: Gst.State
    readonly last_return: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly base_time: Gst.ClockTimeDiff
    readonly start_time: Gst.ClockTime
    readonly numpads: number
    readonly pads: Gst.Pad[]
    readonly numsrcpads: number
    readonly srcpads: Gst.Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Gst.Pad[]
    readonly pads_cookie: number
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.BaseTransform */
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool | null
    is_in_place(): boolean
    is_passthrough(): boolean
    is_qos_enabled(): boolean
    reconfigure(): boolean
    reconfigure_sink(): void
    reconfigure_src(): void
    set_gap_aware(gap_aware: boolean): void
    set_in_place(in_place: boolean): void
    set_passthrough(passthrough: boolean): void
    set_prefer_passthrough(prefer_passthrough: boolean): void
    set_qos_enabled(enabled: boolean): void
    update_qos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void
    update_src_caps(updated_caps: Gst.Caps): boolean
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    request_pad_simple(name: string): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GstVulkan-1.0.GstVulkan.VulkanVideoFilter */
    vfunc_query(direction: Gst.PadDirection, query: Gst.Query): boolean
    /* Function overloads */
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of GstBase-1.0.GstBase.BaseTransform */
    vfunc_accept_caps(direction: Gst.PadDirection, caps: Gst.Caps): boolean
    vfunc_before_transform(buffer: Gst.Buffer): void
    vfunc_copy_metadata(input: Gst.Buffer, outbuf: Gst.Buffer): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_filter_meta(query: Gst.Query, api: GObject.Type, params: Gst.Structure): boolean
    vfunc_fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps
    vfunc_generate_output(): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfunc_get_unit_size(caps: Gst.Caps): [ /* returnType */ boolean, /* size */ number ]
    vfunc_prepare_output_buffer(input: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfunc_propose_allocation(decide_query: Gst.Query, query: Gst.Query): boolean
    vfunc_query(direction: Gst.PadDirection, query: Gst.Query): boolean
    /* Function overloads */
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_submit_input_buffer(is_discont: boolean, input: Gst.Buffer): Gst.FlowReturn
    vfunc_transform(inbuf: Gst.Buffer, outbuf: Gst.Buffer): Gst.FlowReturn
    vfunc_transform_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
    vfunc_transform_ip(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean
    vfunc_transform_size(direction: Gst.PadDirection, caps: Gst.Caps, size: number, othercaps: Gst.Caps): [ /* returnType */ boolean, /* othersize */ number ]
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VulkanVideoFilter) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VulkanVideoFilter) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VulkanVideoFilter, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VulkanVideoFilter, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VulkanVideoFilter, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VulkanVideoFilter, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanVideoFilter, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanVideoFilter, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanVideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanVideoFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qos", callback: (($obj: VulkanVideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VulkanVideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanVideoFilter_ConstructProps)
    _init (config?: VulkanVideoFilter_ConstructProps): void
    static $gtype: GObject.Type
}
interface VulkanWindow_ConstructProps extends Gst.Object_ConstructProps {
}
class VulkanWindow {
    /* Properties of GstVulkan-1.0.GstVulkan.VulkanWindow */
    readonly display: VulkanDisplay
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanWindow */
    close(): void
    get_display(): VulkanDisplay
    get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean
    get_surface_dimensions(width: number, height: number): void
    handle_events(handle_events: boolean): void
    open(): boolean
    redraw(): void
    resize(width: number, height: number): void
    send_key_event(event_type: string, key_str: string): void
    send_mouse_event(event_type: string, button: number, posx: number, posy: number): void
    set_window_handle(handle: number): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GstVulkan-1.0.GstVulkan.VulkanWindow */
    vfunc_close(): void
    vfunc_get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean
    vfunc_get_surface_dimensions(width: number, height: number): void
    vfunc_handle_events(handle_events: boolean): void
    vfunc_open(): boolean
    vfunc_set_window_handle(handle: number): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstVulkan-1.0.GstVulkan.VulkanWindow */
    connect(sigName: "close", callback: (($obj: VulkanWindow) => boolean)): number
    connect_after(sigName: "close", callback: (($obj: VulkanWindow) => boolean)): number
    emit(sigName: "close"): void
    connect(sigName: "draw", callback: (($obj: VulkanWindow) => void)): number
    connect_after(sigName: "draw", callback: (($obj: VulkanWindow) => void)): number
    emit(sigName: "draw"): void
    connect(sigName: "key-event", callback: (($obj: VulkanWindow, id: string, key: string) => void)): number
    connect_after(sigName: "key-event", callback: (($obj: VulkanWindow, id: string, key: string) => void)): number
    emit(sigName: "key-event", id: string, key: string): void
    connect(sigName: "mouse-event", callback: (($obj: VulkanWindow, id: string, button: number, x: number, y: number) => void)): number
    connect_after(sigName: "mouse-event", callback: (($obj: VulkanWindow, id: string, button: number, x: number, y: number) => void)): number
    emit(sigName: "mouse-event", id: string, button: number, x: number, y: number): void
    connect(sigName: "resize", callback: (($obj: VulkanWindow, object: number, p0: number) => void)): number
    connect_after(sigName: "resize", callback: (($obj: VulkanWindow, object: number, p0: number) => void)): number
    emit(sigName: "resize", object: number, p0: number): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VulkanWindow, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VulkanWindow, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VulkanWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display", callback: (($obj: VulkanWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: VulkanWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanWindow_ConstructProps)
    _init (config?: VulkanWindow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: VulkanDisplay): VulkanWindow
    static $gtype: GObject.Type
}
class VulkanBarrierBufferInfo {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanBarrierBufferInfo */
    readonly parent: VulkanBarrierMemoryInfo
    readonly offset: Vulkan.DeviceSize
    readonly size: Vulkan.DeviceSize
    static name: string
}
class VulkanBarrierImageInfo {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanBarrierImageInfo */
    readonly parent: VulkanBarrierMemoryInfo
    readonly image_layout: Vulkan.ImageLayout
    readonly subresource_range: Vulkan.ImageSubresourceRange
    static name: string
}
class VulkanBarrierMemoryInfo {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanBarrierMemoryInfo */
    readonly type: VulkanBarrierType
    readonly flags: VulkanBarrierFlags
    readonly queue: VulkanQueue
    readonly pipeline_stages: Vulkan.PipelineStageFlags
    readonly access_flags: Vulkan.AccessFlags
    static name: string
}
class VulkanBufferMemory {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanBufferMemory */
    readonly parent: Gst.Memory
    readonly device: VulkanDevice
    readonly buffer: Vulkan.Buffer
    readonly vk_mem: VulkanMemory
    readonly requirements: Vulkan.MemoryRequirements
    readonly usage: Vulkan.BufferUsageFlags
    readonly barrier: VulkanBarrierBufferInfo
    readonly lock: GLib.Mutex
    readonly wrapped: boolean
    readonly notify: GLib.DestroyNotify
    readonly user_data: object
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(device: VulkanDevice, size: number, usage: Vulkan.BufferUsageFlags, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory
    static init_once(): void
    static wrapped(device: VulkanDevice, buffer: Vulkan.Buffer, usage: Vulkan.BufferUsageFlags, user_data?: object | null, notify?: GLib.DestroyNotify | null): Gst.Memory
}
abstract class VulkanBufferMemoryAllocatorClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanBufferMemoryAllocatorClass */
    readonly parent_class: Gst.AllocatorClass
    static name: string
}
abstract class VulkanBufferPoolClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanBufferPoolClass */
    readonly parent_class: Gst.BufferPoolClass
    static name: string
}
class VulkanBufferPoolPrivate {
    static name: string
}
class VulkanCommandBuffer {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanCommandBuffer */
    readonly parent: Gst.MiniObject
    readonly cmd: Vulkan.CommandBuffer
    readonly pool: VulkanCommandPool
    readonly level: Vulkan.CommandBufferLevel
    readonly lock: GLib.Mutex
    static name: string
    /* Static methods and pseudo-constructors */
    static new_wrapped(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel): VulkanCommandBuffer
}
abstract class VulkanCommandPoolClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanCommandPoolClass */
    readonly parent_class: Gst.ObjectClass
    static name: string
}
class VulkanCommandPoolPrivate {
    static name: string
}
abstract class VulkanDescriptorCacheClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanDescriptorCacheClass */
    readonly parent_class: VulkanHandlePoolClass
    static name: string
}
class VulkanDescriptorCachePrivate {
    static name: string
}
abstract class VulkanDescriptorPoolClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanDescriptorPoolClass */
    readonly parent_class: Gst.ObjectClass
    static name: string
}
class VulkanDescriptorPoolPrivate {
    static name: string
}
class VulkanDescriptorSet {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanDescriptorSet */
    readonly parent: Gst.MiniObject
    readonly set: Vulkan.DescriptorSet
    readonly pool: VulkanDescriptorPool
    readonly cache: VulkanDescriptorCache
    readonly n_layouts: number
    readonly layouts: VulkanHandle
    readonly lock: GLib.Mutex
    static name: string
    /* Static methods and pseudo-constructors */
    static new_wrapped(pool: VulkanDescriptorPool, set: Vulkan.DescriptorSet, n_layouts: number, layouts: VulkanHandle): VulkanDescriptorSet
}
class VulkanDescriptorSetClass {
    static name: string
}
class VulkanDescriptorSetPrivate {
    static name: string
}
abstract class VulkanDeviceClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanDeviceClass */
    readonly parent_class: Gst.ObjectClass
    static name: string
}
class VulkanDevicePrivate {
    static name: string
}
abstract class VulkanDisplayClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanDisplayClass */
    readonly object_class: Gst.ObjectClass
    readonly get_handle: (display: VulkanDisplay) => object | null
    readonly create_window: (display: VulkanDisplay) => VulkanWindow
    static name: string
}
class VulkanDisplayPrivate {
    static name: string
}
class VulkanFence {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanFence */
    readonly parent: Gst.MiniObject
    readonly device: VulkanDevice
    readonly cache: VulkanFenceCache
    readonly fence: Vulkan.Fence
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanFence */
    is_signaled(): boolean
    reset(): void
    static name: string
    static new(device: VulkanDevice): VulkanFence
    constructor(device: VulkanDevice)
    /* Static methods and pseudo-constructors */
    static new(device: VulkanDevice): VulkanFence
    static new_always_signalled(device: VulkanDevice): VulkanFence
}
abstract class VulkanFenceCacheClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanFenceCacheClass */
    readonly parent_class: VulkanHandlePoolClass
    static name: string
}
class VulkanFormatInfo {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanFormatInfo */
    readonly format: Vulkan.Format
    readonly name: string
    readonly scaling: VulkanFormatScaling
    readonly flags: VulkanFormatFlags
    readonly bits: number
    readonly n_components: number
    readonly shift: Uint8Array
    readonly depth: Uint8Array
    readonly pixel_stride: Uint8Array
    readonly n_planes: number
    readonly plane: Uint8Array
    readonly poffset: Uint8Array
    readonly w_sub: Uint8Array
    readonly h_sub: Uint8Array
    static name: string
}
abstract class VulkanFullScreenQuadClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuadClass */
    readonly parent_class: Gst.ObjectClass
    static name: string
}
class VulkanFullScreenQuadPrivate {
    static name: string
}
class VulkanHandle {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanHandle */
    readonly parent: Gst.MiniObject
    readonly device: VulkanDevice
    readonly type: VulkanHandleType
    readonly handle: VulkanHandleTypedef
    readonly notify: VulkanHandleDestroyNotify
    readonly user_data: object
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanHandle */
    free_descriptor_set_layout(user_data?: object | null): void
    free_framebuffer(user_data?: object | null): void
    free_pipeline(user_data?: object | null): void
    free_pipeline_layout(user_data?: object | null): void
    free_render_pass(user_data?: object | null): void
    free_sampler(user_data?: object | null): void
    free_shader(user_data?: object | null): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_wrapped(device: VulkanDevice, type: VulkanHandleType, handle: VulkanHandleTypedef, notify: VulkanHandleDestroyNotify): VulkanHandle
    static context_query(element: Gst.Element, query: Gst.Query, display?: VulkanDisplay | null, instance?: VulkanInstance | null, device?: VulkanDevice | null): boolean
    static set_context(element: Gst.Element, context: Gst.Context, display: VulkanDisplay | null, instance: VulkanInstance): [ /* returnType */ boolean, /* display */ VulkanDisplay | null, /* instance */ VulkanInstance ]
}
abstract class VulkanHandlePoolClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanHandlePoolClass */
    readonly parent: Gst.ObjectClass
    readonly alloc: (pool: VulkanHandlePool) => object | null
    readonly acquire: (pool: VulkanHandlePool) => object | null
    readonly release: (pool: VulkanHandlePool, handle?: object | null) => void
    readonly free: (pool: VulkanHandlePool, handle?: object | null) => void
    static name: string
}
class VulkanHandleTypedef {
    static name: string
}
abstract class VulkanImageBufferPoolClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanImageBufferPoolClass */
    readonly parent_class: Gst.BufferPoolClass
    static name: string
}
class VulkanImageBufferPoolPrivate {
    static name: string
}
class VulkanImageMemory {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanImageMemory */
    readonly parent: Gst.Memory
    readonly device: VulkanDevice
    readonly image: Vulkan.Image
    readonly vk_mem: VulkanMemory
    readonly create_info: Vulkan.ImageCreateInfo
    readonly requirements: Vulkan.MemoryRequirements
    readonly format_properties: Vulkan.ImageFormatProperties
    readonly usage: Vulkan.ImageUsageFlags
    readonly barrier: VulkanBarrierImageInfo
    readonly lock: GLib.Mutex
    readonly wrapped: boolean
    readonly notify: GLib.DestroyNotify
    readonly user_data: object
    readonly views: object[]
    readonly outstanding_views: object[]
    readonly _padding: object[]
    /* Methods of GstVulkan-1.0.GstVulkan.VulkanImageMemory */
    add_view(view: VulkanImageView): void
    find_view(find_func: VulkanImageMemoryFindViewFunc): VulkanImageView
    get_height(): number
    get_width(): number
    init(allocator: Gst.Allocator, parent: Gst.Memory, device: VulkanDevice, usage: Vulkan.ImageUsageFlags, params: Gst.AllocationParams, size: number, user_data: object | null, notify: GLib.DestroyNotify): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(device: VulkanDevice, format: Vulkan.Format, width: number, height: number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory
    static init_once(): void
    static wrapped(device: VulkanDevice, image: Vulkan.Image, format: Vulkan.Format, width: number, height: number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, user_data: object | null, notify: GLib.DestroyNotify): Gst.Memory
}
abstract class VulkanImageMemoryAllocatorClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanImageMemoryAllocatorClass */
    readonly parent_class: Gst.AllocatorClass
    static name: string
}
class VulkanImageView {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanImageView */
    readonly parent: Gst.MiniObject
    readonly device: VulkanDevice
    readonly image: VulkanImageMemory
    readonly view: Vulkan.ImageView
    readonly create_info: Vulkan.ImageViewCreateInfo
    static name: string
    static new(image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo): VulkanImageView
    constructor(image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo)
    /* Static methods and pseudo-constructors */
    static new(image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo): VulkanImageView
}
abstract class VulkanInstanceClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanInstanceClass */
    readonly parent_class: Gst.ObjectClass
    static name: string
}
class VulkanInstancePrivate {
    static name: string
}
class VulkanMemory {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanMemory */
    readonly mem: Gst.Memory
    readonly device: VulkanDevice
    readonly mem_ptr: Vulkan.DeviceMemory
    readonly lock: GLib.Mutex
    readonly map_count: number
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(device: VulkanDevice, memory_type_index: number, params: Gst.AllocationParams, size: number, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory
    static find_memory_type_index_with_type_properties(device: VulkanDevice, type_bits: number, properties: Vulkan.MemoryPropertyFlags, type_index: number): boolean
    static heap_flags_to_string(prop_bits: Vulkan.MemoryHeapFlags): string
    static init_once(): void
    static property_flags_to_string(prop_bits: Vulkan.MemoryPropertyFlags): string
}
abstract class VulkanMemoryAllocatorClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanMemoryAllocatorClass */
    readonly parent_class: Gst.AllocatorClass
    static name: string
}
abstract class VulkanPhysicalDeviceClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanPhysicalDeviceClass */
    readonly parent_class: Gst.ObjectClass
    static name: string
}
class VulkanPhysicalDevicePrivate {
    static name: string
}
abstract class VulkanQueueClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanQueueClass */
    readonly parent_class: Gst.ObjectClass
    static name: string
}
class VulkanQueuePrivate {
    static name: string
}
abstract class VulkanSwapperClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanSwapperClass */
    readonly parent_class: Gst.ObjectClass
    static name: string
}
class VulkanSwapperPrivate {
    static name: string
}
class VulkanTrash {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanTrash */
    readonly parent: Gst.MiniObject
    readonly cache: VulkanTrashList
    readonly fence: VulkanFence
    readonly notify: VulkanTrashNotify
    readonly user_data: object
    static name: string
    static new(fence: VulkanFence): VulkanTrash
    constructor(fence: VulkanFence)
    /* Static methods and pseudo-constructors */
    static new(fence: VulkanFence): VulkanTrash
    static new_free_semaphore(fence: VulkanFence, semaphore: Vulkan.Semaphore): VulkanTrash
    static mini_object_unref(device: VulkanDevice, user_data?: object | null): void
    static object_unref(device: VulkanDevice, user_data?: object | null): void
}
abstract class VulkanTrashFenceListClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanTrashFenceListClass */
    readonly parent_class: VulkanTrashListClass
    static name: string
}
abstract class VulkanTrashListClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanTrashListClass */
    readonly parent_class: VulkanHandlePoolClass
    readonly add_func: VulkanTrashListAdd
    readonly gc_func: VulkanTrashListGC
    readonly wait_func: VulkanTrashListWait
    readonly _padding: object[]
    static name: string
}
abstract class VulkanVideoFilterClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanVideoFilterClass */
    readonly video_sink_class: GstBase.BaseTransformClass
    static name: string
}
abstract class VulkanWindowClass {
    /* Fields of GstVulkan-1.0.GstVulkan.VulkanWindowClass */
    readonly parent_class: Gst.ObjectClass
    readonly open: (window: VulkanWindow) => boolean
    readonly close: (window: VulkanWindow) => void
    readonly get_presentation_support: (window: VulkanWindow, device: VulkanDevice, queue_family_idx: number) => boolean
    readonly set_window_handle: (window: VulkanWindow, handle: number) => void
    readonly get_surface_dimensions: (window: VulkanWindow, width: number, height: number) => void
    readonly handle_events: (window: VulkanWindow, handle_events: boolean) => void
    static name: string
}
class VulkanWindowPrivate {
    static name: string
}
}
export default GstVulkan;