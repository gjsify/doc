/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ColorHug-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GUsb from './GUsb-1.0';
import type Colord from './Colord-1.0';

export namespace ColorHug {

enum ColorSelect {
    RED,
    WHITE,
    BLUE,
    GREEN,
}
enum DeviceMode {
    UNKNOWN,
    LEGACY,
    BOOTLOADER,
    FIRMWARE,
    BOOTLOADER_PLUS,
    FIRMWARE_PLUS,
    FIRMWARE2,
    BOOTLOADER2,
    BOOTLOADER_ALS,
    FIRMWARE_ALS,
}
enum Error {
    NONE,
    UNKNOWN_CMD,
    WRONG_UNLOCK_CODE,
    NOT_IMPLEMENTED,
    UNDERFLOW_SENSOR,
    NO_SERIAL,
    WATCHDOG,
    INVALID_ADDRESS,
    INVALID_LENGTH,
    INVALID_CHECKSUM,
    INVALID_VALUE,
    UNKNOWN_CMD_FOR_BOOTLOADER,
    NO_CALIBRATION,
    OVERFLOW_MULTIPLY,
    OVERFLOW_ADDITION,
    OVERFLOW_SENSOR,
    OVERFLOW_STACK,
    DEVICE_DEACTIVATED,
    INCOMPLETE_REQUEST,
    SELF_TEST_SENSOR,
    SELF_TEST_RED,
    SELF_TEST_GREEN,
    SELF_TEST_BLUE,
    SELF_TEST_COLOR_SELECT,
    SELF_TEST_MULTIPLIER,
    INVALID_CALIBRATION,
    SRAM_FAILED,
    OUT_OF_MEMORY,
    SELF_TEST_TEMPERATURE,
    SELF_TEST_I2C,
    SELF_TEST_ADC_VDD,
    SELF_TEST_ADC_VSS,
    SELF_TEST_ADC_VREF,
    I2C_SLAVE_ADDRESS,
    I2C_SLAVE_CONFIG,
    SELF_TEST_EEPROM,
}
enum FreqScale {
    TODO_0,
    TODO_20,
    TODO_2,
    TODO_100,
}
enum MeasureMode {
    FREQUENCY,
    DURATION,
}
enum SpectrumKind {
    RAW,
    DARK_CAL,
    TEMP_CAL,
    IRRADIANCE_CAL,
    LAST,
}
enum DeviceQueueProcessFlags {
    NONE,
    CONTINUE_ERRORS,
    NONFATAL_ERRORS,
}
enum Illuminant {
    NONE,
    A,
    UV,
}
enum PcbErrata {
    NONE,
    SWAPPED_LEDS,
    NO_WELCOME,
}
enum StatusLed {
    GREEN,
    RED,
    BLUE,
}
const BUFFER_INPUT_CMD: number
const BUFFER_INPUT_DATA: number
const BUFFER_OUTPUT_CMD: number
const BUFFER_OUTPUT_DATA: number
const BUFFER_OUTPUT_RETVAL: number
const CALIBRATION_DESCRIPTION_LEN: number
const CALIBRATION_INDEX_CRT: number
const CALIBRATION_INDEX_FACTORY_ONLY: number
const CALIBRATION_INDEX_LCD: number
const CALIBRATION_INDEX_LED: number
const CALIBRATION_INDEX_MAX: number
const CALIBRATION_INDEX_PROJECTOR: number
const CALIBRATION_MAX: number
const CALIBRATION_SPECTRAL: number
const CALIBRATION_TYPE_ALL: number
const CALIBRATION_TYPE_CRT: number
const CALIBRATION_TYPE_LCD: number
const CALIBRATION_TYPE_LED: number
const CALIBRATION_TYPE_PROJECTOR: number
const CCD_SPECTRAL_RESOLUTION: number
const CMD_BOOT_FLASH: number
const CMD_CLEAR_ERROR: number
const CMD_ERASE_FLASH: number
const CMD_GET_ADC_CALIBRATION_NEG: number
const CMD_GET_ADC_CALIBRATION_POS: number
const CMD_GET_CALIBRATION: number
const CMD_GET_CALIBRATION_MAP: number
const CMD_GET_CCD_CALIBRATION: number
const CMD_GET_COLOR_SELECT: number
const CMD_GET_DAC_VALUE: number
const CMD_GET_DARK_OFFSETS: number
const CMD_GET_ERROR: number
const CMD_GET_FIRMWARE_VERSION: number
const CMD_GET_HARDWARE_VERSION: number
const CMD_GET_ILLUMINANTS: number
const CMD_GET_INTEGRAL_TIME: number
const CMD_GET_LEDS: number
const CMD_GET_MEASURE_MODE: number
const CMD_GET_MULTIPLIER: number
const CMD_GET_OWNER_EMAIL: number
const CMD_GET_OWNER_NAME: number
const CMD_GET_PCB_ERRATA: number
const CMD_GET_POST_SCALE: number
const CMD_GET_PRE_SCALE: number
const CMD_GET_REMOTE_HASH: number
const CMD_GET_SERIAL_NUMBER: number
const CMD_GET_TEMPERATURE: number
const CMD_LOAD_SRAM: number
const CMD_READ_FLASH: number
const CMD_READ_SRAM: number
const CMD_RESET: number
const CMD_SAVE_SRAM: number
const CMD_SELF_TEST: number
const CMD_SET_CALIBRATION: number
const CMD_SET_CALIBRATION_MAP: number
const CMD_SET_CCD_CALIBRATION: number
const CMD_SET_COLOR_SELECT: number
const CMD_SET_CRYPTO_KEY: number
const CMD_SET_DAC_VALUE: number
const CMD_SET_DARK_OFFSETS: number
const CMD_SET_FLASH_SUCCESS: number
const CMD_SET_ILLUMINANTS: number
const CMD_SET_INTEGRAL_TIME: number
const CMD_SET_LEDS: number
const CMD_SET_MEASURE_MODE: number
const CMD_SET_MULTIPLIER: number
const CMD_SET_OWNER_EMAIL: number
const CMD_SET_OWNER_NAME: number
const CMD_SET_PCB_ERRATA: number
const CMD_SET_POST_SCALE: number
const CMD_SET_PRE_SCALE: number
const CMD_SET_REMOTE_HASH: number
const CMD_SET_SERIAL_NUMBER: number
const CMD_TAKE_READINGS: number
const CMD_TAKE_READING_ARRAY: number
const CMD_TAKE_READING_RAW: number
const CMD_TAKE_READING_SPECTRAL: number
const CMD_TAKE_READING_XYZ: number
const CMD_WRITE_EEPROM: number
const CMD_WRITE_FLASH: number
const CMD_WRITE_SRAM: number
const DEVICE_GUID_COLORHUG: string
const DEVICE_GUID_COLORHUG2: string
const DEVICE_GUID_COLORHUG_ALS: string
const DEVICE_GUID_COLORHUG_PLUS: string
const DEVICE_USB_TIMEOUT: number
const EEPROM_ADDR_RUNCODE: number
const EEPROM_ADDR_RUNCODE_ALS: number
const EP0_TRANSFER_SIZE: number
const EP0_TRANSFER_SIZE_V2: number
const FIRMWARE_ID_TOKEN1: string
const FIRMWARE_ID_TOKEN2: string
const FIRMWARE_ID_TOKEN_ALS: string
const FIRMWARE_ID_TOKEN_PLUS: string
const FLASH_ERASE_BLOCK_SIZE: number
const FLASH_RECONNECT_TIMEOUT: number
const FLASH_TRANSFER_BLOCK_SIZE: number
const FLASH_WRITE_BLOCK_SIZE: number
const INTEGRAL_TIME_VALUE_100MS: number
const INTEGRAL_TIME_VALUE_200MS: number
const INTEGRAL_TIME_VALUE_50MS: number
const INTEGRAL_TIME_VALUE_5MS: number
const INTEGRAL_TIME_VALUE_MAX: number
const OWNER_LENGTH_MAX: number
const USB_CONFIG: number
const USB_HID_EP: number
const USB_HID_EP_IN: number
const USB_HID_EP_OUT: number
const USB_HID_EP_SIZE: number
const USB_INTERFACE: number
const USB_PID_BOOTLOADER: number
const USB_PID_BOOTLOADER2: number
const USB_PID_BOOTLOADER_ALS: number
const USB_PID_BOOTLOADER_PLUS: number
const USB_PID_FIRMWARE: number
const USB_PID_FIRMWARE2: number
const USB_PID_FIRMWARE_ALS: number
const USB_PID_FIRMWARE_ALS_SENSOR_HID: number
const USB_PID_FIRMWARE_PLUS: number
const USB_PID_LEGACY: number
const USB_VID: number
const USB_VID_LEGACY: number
const WRITE_EEPROM_MAGIC: string
function color_select_to_string(color_select: ColorSelect): string
function command_to_string(cmd: Cmd): string
function device_check_firmware(device: GUsb.Device, data: number, data_len: number): boolean
function device_close(device: GUsb.Device): boolean
function device_error_quark(): GLib.Quark
function device_get_adc_calibration_neg(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
function device_get_adc_calibration_pos(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
function device_get_ccd_calibration(device: GUsb.Device, nm_start: number, c0: number, c1: number, c2: number, cancellable?: Gio.Cancellable | null): boolean
function device_get_error(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* status */ Error, /* cmd */ Cmd ]
function device_get_guid(device: GUsb.Device): string
function device_get_illuminants(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ Illuminant ]
function device_get_integral_time(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
function device_get_leds(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ StatusLed ]
function device_get_mode(device: GUsb.Device): DeviceMode
function device_get_pcb_errata(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ PcbErrata ]
function device_get_runcode_address(device: GUsb.Device): number
function device_get_serial_number(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
function device_get_spectrum(device: GUsb.Device, cancellable?: Gio.Cancellable | null): Colord.Spectrum
function device_get_spectrum_full(device: GUsb.Device, kind: SpectrumKind, cancellable?: Gio.Cancellable | null): Colord.Spectrum
function device_get_temperature(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
function device_is_colorhug(device: GUsb.Device): boolean
function device_load_sram(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
function device_mode_from_firmware(data: number, data_len: number): DeviceMode
function device_mode_to_string(device_mode: DeviceMode): string
function device_open(device: GUsb.Device): boolean
function device_open_full(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
function device_read_sram(device: GUsb.Device, addr: number, len: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
function device_save_sram(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
function device_self_test(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
function device_set_ccd_calibration(device: GUsb.Device, nm_start: number, c0: number, c1: number, c2: number, cancellable?: Gio.Cancellable | null): boolean
function device_set_crypto_key(device: GUsb.Device, keys: number, cancellable?: Gio.Cancellable | null): boolean
function device_set_illuminants(device: GUsb.Device, value: Illuminant, cancellable?: Gio.Cancellable | null): boolean
function device_set_integral_time(device: GUsb.Device, value: number, cancellable?: Gio.Cancellable | null): boolean
function device_set_leds(device: GUsb.Device, value: StatusLed, cancellable?: Gio.Cancellable | null): boolean
function device_set_pcb_errata(device: GUsb.Device, value: PcbErrata, cancellable?: Gio.Cancellable | null): boolean
function device_set_serial_number(device: GUsb.Device, value: number, cancellable?: Gio.Cancellable | null): boolean
function device_set_spectrum_full(device: GUsb.Device, kind: SpectrumKind, sp: Colord.Spectrum, cancellable?: Gio.Cancellable | null): boolean
function device_take_reading_spectral(device: GUsb.Device, value: SpectrumKind, cancellable?: Gio.Cancellable | null): boolean
function device_take_reading_xyz(device: GUsb.Device, calibration_idx: number, cancellable?: Gio.Cancellable | null): Colord.ColorXYZ
function device_write_command(device: GUsb.Device, cmd: number, buffer_in: number, buffer_in_len: number, buffer_out: number, buffer_out_len: number, cancellable?: Gio.Cancellable | null): boolean
function device_write_command_async(device: GUsb.Device, cmd: number, buffer_in: number, buffer_in_len: number, buffer_out: number, buffer_out_len: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function device_write_command_finish(device: GUsb.Device, res: Gio.AsyncResult): boolean
function device_write_sram(device: GUsb.Device, addr: number, data: GLib.Bytes, cancellable?: Gio.Cancellable | null): boolean
function measure_mode_to_string(measure_mode: MeasureMode): string
function multiplier_to_string(multiplier: FreqScale): string
function sha1_parse(value: string, sha1: Sha1): boolean
function strerror(error_enum: Error): string
interface DeviceQueue_ConstructProps extends GObject.Object_ConstructProps {
}
class DeviceQueue {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of ColorHug-1.0.ColorHug.DeviceQueue */
    add(device: GUsb.Device, cmd: number, buffer_in: number, buffer_in_len: number, buffer_out: number, buffer_out_len: number): void
    boot_flash(device: GUsb.Device): void
    clear_calibration(device: GUsb.Device, calibration_index: number): void
    erase_flash(device: GUsb.Device, address: number, len: number): void
    get_adc_vref_neg(device: GUsb.Device, vref: number): void
    get_adc_vref_pos(device: GUsb.Device, vref: number): void
    get_calibration(device: GUsb.Device, calibration_index: number, calibration: Colord.Mat3x3, types: number, description: string): void
    get_calibration_map(device: GUsb.Device, calibration_map: number): void
    get_ccd_calibration(device: GUsb.Device, indexes: number): void
    get_color_select(device: GUsb.Device, color_select: ColorSelect): void
    get_dac_value(device: GUsb.Device, dac_value: number): void
    get_dark_offsets(device: GUsb.Device, value: Colord.ColorRGB): void
    get_firmware_ver(device: GUsb.Device, major: number, minor: number, micro: number): void
    get_hardware_version(device: GUsb.Device, hw_version: number): void
    get_integral_time(device: GUsb.Device, integral_time: number): void
    get_leds(device: GUsb.Device, leds: number): void
    get_measure_mode(device: GUsb.Device, measure_mode: MeasureMode): void
    get_multiplier(device: GUsb.Device, multiplier: FreqScale): void
    get_owner_email(device: GUsb.Device, email: string): void
    get_owner_name(device: GUsb.Device, name: string): void
    get_pcb_errata(device: GUsb.Device, pcb_errata: number): void
    get_post_scale(device: GUsb.Device, post_scale: number): void
    get_pre_scale(device: GUsb.Device, pre_scale: number): void
    get_remote_hash(device: GUsb.Device, remote_hash: Sha1): void
    get_serial_number(device: GUsb.Device, serial_number: number): void
    get_temperature(device: GUsb.Device, temperature: number): void
    process(process_flags: DeviceQueueProcessFlags, cancellable?: Gio.Cancellable | null): boolean
    process_async(process_flags: DeviceQueueProcessFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    process_finish(res: Gio.AsyncResult): boolean
    read_firmware(device: GUsb.Device, data: number, len: number): void
    read_flash(device: GUsb.Device, address: number, data: number, len: number): void
    read_sram(device: GUsb.Device, address: number, data: number, len: number): void
    reset(device: GUsb.Device): void
    self_test(device: GUsb.Device): void
    set_calibration(device: GUsb.Device, calibration_index: number, calibration: Colord.Mat3x3, types: number, description: string): void
    set_calibration_ccmx(device: GUsb.Device, calibration_index: number, ccmx: Colord.It8): boolean
    set_calibration_map(device: GUsb.Device, calibration_map: number): void
    set_ccd_calibration(device: GUsb.Device, indexes: number): void
    set_color_select(device: GUsb.Device, color_select: ColorSelect): void
    set_dac_value(device: GUsb.Device, dac_value: number): void
    set_dark_offsets(device: GUsb.Device, value: Colord.ColorRGB): void
    set_flash_success(device: GUsb.Device, value: number): void
    set_integral_time(device: GUsb.Device, integral_time: number): void
    set_leds(device: GUsb.Device, leds: number, repeat: number, on_time: number, off_time: number): void
    set_measure_mode(device: GUsb.Device, measure_mode: MeasureMode): void
    set_multiplier(device: GUsb.Device, multiplier: FreqScale): void
    set_owner_email(device: GUsb.Device, email: string): void
    set_owner_name(device: GUsb.Device, name: string): void
    set_pcb_errata(device: GUsb.Device, pcb_errata: number): void
    set_post_scale(device: GUsb.Device, post_scale: number): void
    set_pre_scale(device: GUsb.Device, pre_scale: number): void
    set_remote_hash(device: GUsb.Device, remote_hash: Sha1): void
    set_serial_number(device: GUsb.Device, serial_number: number): void
    take_reading_array(device: GUsb.Device, reading_array: number): void
    take_reading_raw(device: GUsb.Device, take_reading: number): void
    take_reading_spectral(device: GUsb.Device, sram_addr: number): void
    take_readings(device: GUsb.Device, value: Colord.ColorRGB): void
    take_readings_xyz(device: GUsb.Device, calibration_index: number, value: Colord.ColorXYZ): void
    verify_firmware(device: GUsb.Device, data: number, len: number): void
    verify_flash(device: GUsb.Device, address: number, data: number, len: number): void
    write_eeprom(device: GUsb.Device, magic: string): void
    write_firmware(device: GUsb.Device, data: number, len: number): void
    write_flash(device: GUsb.Device, address: number, data: number, len: number): void
    write_sram(device: GUsb.Device, address: number, data: number, len: number): void
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
    /* Virtual methods of ColorHug-1.0.ColorHug.DeviceQueue */
    vfunc_device_failed(device: GUsb.Device, error_message: string): void
    vfunc_progress_changed(percentage: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ColorHug-1.0.ColorHug.DeviceQueue */
    connect(sigName: "device-failed", callback: (($obj: DeviceQueue, object: GObject.Object, p0: string) => void)): number
    connect_after(sigName: "device-failed", callback: (($obj: DeviceQueue, object: GObject.Object, p0: string) => void)): number
    emit(sigName: "device-failed", object: GObject.Object, p0: string): void
    connect(sigName: "progress-changed", callback: (($obj: DeviceQueue, object: number) => void)): number
    connect_after(sigName: "progress-changed", callback: (($obj: DeviceQueue, object: number) => void)): number
    emit(sigName: "progress-changed", object: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceQueue_ConstructProps)
    _init (config?: DeviceQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceQueue
    static $gtype: GObject.Type
}
abstract class DeviceQueueClass {
    /* Fields of ColorHug-1.0.ColorHug.DeviceQueueClass */
    readonly parent_class: GObject.ObjectClass
    readonly device_failed: (device_queue: DeviceQueue, device: GUsb.Device, error_message: string) => void
    readonly progress_changed: (device_queue: DeviceQueue, percentage: number) => void
    static name: string
}
class Sha1 {
    /* Fields of ColorHug-1.0.ColorHug.Sha1 */
    readonly bytes: Uint8Array
    /* Methods of ColorHug-1.0.ColorHug.Sha1 */
    to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static parse(value: string, sha1: Sha1): boolean
}
    type Cmd = number
}
export default ColorHug;