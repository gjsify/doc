/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ColorHug-1.0
 */

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
function colorSelectToString(colorSelect: ColorSelect): string
function commandToString(cmd: Cmd): string
function deviceCheckFirmware(device: GUsb.Device, data: number, dataLen: number): boolean
function deviceClose(device: GUsb.Device): boolean
function deviceErrorQuark(): GLib.Quark
function deviceGetAdcCalibrationNeg(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
function deviceGetAdcCalibrationPos(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
function deviceGetCcdCalibration(device: GUsb.Device, nmStart: number, c0: number, c1: number, c2: number, cancellable?: Gio.Cancellable | null): boolean
function deviceGetError(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* status */ Error, /* cmd */ Cmd ]
function deviceGetGuid(device: GUsb.Device): string
function deviceGetIlluminants(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ Illuminant ]
function deviceGetIntegralTime(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
function deviceGetLeds(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ StatusLed ]
function deviceGetMode(device: GUsb.Device): DeviceMode
function deviceGetPcbErrata(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ PcbErrata ]
function deviceGetRuncodeAddress(device: GUsb.Device): number
function deviceGetSerialNumber(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
function deviceGetSpectrum(device: GUsb.Device, cancellable?: Gio.Cancellable | null): Colord.Spectrum
function deviceGetSpectrumFull(device: GUsb.Device, kind: SpectrumKind, cancellable?: Gio.Cancellable | null): Colord.Spectrum
function deviceGetTemperature(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
function deviceIsColorhug(device: GUsb.Device): boolean
function deviceLoadSram(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
function deviceModeFromFirmware(data: number, dataLen: number): DeviceMode
function deviceModeToString(deviceMode: DeviceMode): string
function deviceOpen(device: GUsb.Device): boolean
function deviceOpenFull(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
function deviceReadSram(device: GUsb.Device, addr: number, len: number, cancellable?: Gio.Cancellable | null): any
function deviceSaveSram(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
function deviceSelfTest(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
function deviceSetCcdCalibration(device: GUsb.Device, nmStart: number, c0: number, c1: number, c2: number, cancellable?: Gio.Cancellable | null): boolean
function deviceSetCryptoKey(device: GUsb.Device, keys: number, cancellable?: Gio.Cancellable | null): boolean
function deviceSetIlluminants(device: GUsb.Device, value: Illuminant, cancellable?: Gio.Cancellable | null): boolean
function deviceSetIntegralTime(device: GUsb.Device, value: number, cancellable?: Gio.Cancellable | null): boolean
function deviceSetLeds(device: GUsb.Device, value: StatusLed, cancellable?: Gio.Cancellable | null): boolean
function deviceSetPcbErrata(device: GUsb.Device, value: PcbErrata, cancellable?: Gio.Cancellable | null): boolean
function deviceSetSerialNumber(device: GUsb.Device, value: number, cancellable?: Gio.Cancellable | null): boolean
function deviceSetSpectrumFull(device: GUsb.Device, kind: SpectrumKind, sp: Colord.Spectrum, cancellable?: Gio.Cancellable | null): boolean
function deviceTakeReadingSpectral(device: GUsb.Device, value: SpectrumKind, cancellable?: Gio.Cancellable | null): boolean
function deviceTakeReadingXyz(device: GUsb.Device, calibrationIdx: number, cancellable?: Gio.Cancellable | null): Colord.ColorXYZ
function deviceWriteCommand(device: GUsb.Device, cmd: number, bufferIn: number, bufferInLen: number, bufferOut: number, bufferOutLen: number, cancellable?: Gio.Cancellable | null): boolean
function deviceWriteCommandAsync(device: GUsb.Device, cmd: number, bufferIn: number, bufferInLen: number, bufferOut: number, bufferOutLen: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function deviceWriteCommandFinish(device: GUsb.Device, res: Gio.AsyncResult): boolean
function deviceWriteSram(device: GUsb.Device, addr: number, data: any, cancellable?: Gio.Cancellable | null): boolean
function measureModeToString(measureMode: MeasureMode): string
function multiplierToString(multiplier: FreqScale): string
function sha1Parse(value: string, sha1: Sha1): boolean
function strerror(errorEnum: Error): string
interface DeviceQueue_ConstructProps extends GObject.Object_ConstructProps {
}
class DeviceQueue {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ColorHug-1.0.ColorHug.DeviceQueue */
    add(device: GUsb.Device, cmd: number, bufferIn: number, bufferInLen: number, bufferOut: number, bufferOutLen: number): void
    bootFlash(device: GUsb.Device): void
    clearCalibration(device: GUsb.Device, calibrationIndex: number): void
    eraseFlash(device: GUsb.Device, address: number, len: number): void
    getAdcVrefNeg(device: GUsb.Device, vref: number): void
    getAdcVrefPos(device: GUsb.Device, vref: number): void
    getCalibration(device: GUsb.Device, calibrationIndex: number, calibration: Colord.Mat3x3, types: number, description: string): void
    getCalibrationMap(device: GUsb.Device, calibrationMap: number): void
    getCcdCalibration(device: GUsb.Device, indexes: number): void
    getColorSelect(device: GUsb.Device, colorSelect: ColorSelect): void
    getDacValue(device: GUsb.Device, dacValue: number): void
    getDarkOffsets(device: GUsb.Device, value: Colord.ColorRGB): void
    getFirmwareVer(device: GUsb.Device, major: number, minor: number, micro: number): void
    getHardwareVersion(device: GUsb.Device, hwVersion: number): void
    getIntegralTime(device: GUsb.Device, integralTime: number): void
    getLeds(device: GUsb.Device, leds: number): void
    getMeasureMode(device: GUsb.Device, measureMode: MeasureMode): void
    getMultiplier(device: GUsb.Device, multiplier: FreqScale): void
    getOwnerEmail(device: GUsb.Device, email: string): void
    getOwnerName(device: GUsb.Device, name: string): void
    getPcbErrata(device: GUsb.Device, pcbErrata: number): void
    getPostScale(device: GUsb.Device, postScale: number): void
    getPreScale(device: GUsb.Device, preScale: number): void
    getRemoteHash(device: GUsb.Device, remoteHash: Sha1): void
    getSerialNumber(device: GUsb.Device, serialNumber: number): void
    getTemperature(device: GUsb.Device, temperature: number): void
    process(processFlags: DeviceQueueProcessFlags, cancellable?: Gio.Cancellable | null): boolean
    processAsync(processFlags: DeviceQueueProcessFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    processFinish(res: Gio.AsyncResult): boolean
    readFirmware(device: GUsb.Device, data: number, len: number): void
    readFlash(device: GUsb.Device, address: number, data: number, len: number): void
    readSram(device: GUsb.Device, address: number, data: number, len: number): void
    reset(device: GUsb.Device): void
    selfTest(device: GUsb.Device): void
    setCalibration(device: GUsb.Device, calibrationIndex: number, calibration: Colord.Mat3x3, types: number, description: string): void
    setCalibrationCcmx(device: GUsb.Device, calibrationIndex: number, ccmx: Colord.It8): boolean
    setCalibrationMap(device: GUsb.Device, calibrationMap: number): void
    setCcdCalibration(device: GUsb.Device, indexes: number): void
    setColorSelect(device: GUsb.Device, colorSelect: ColorSelect): void
    setDacValue(device: GUsb.Device, dacValue: number): void
    setDarkOffsets(device: GUsb.Device, value: Colord.ColorRGB): void
    setFlashSuccess(device: GUsb.Device, value: number): void
    setIntegralTime(device: GUsb.Device, integralTime: number): void
    setLeds(device: GUsb.Device, leds: number, repeat: number, onTime: number, offTime: number): void
    setMeasureMode(device: GUsb.Device, measureMode: MeasureMode): void
    setMultiplier(device: GUsb.Device, multiplier: FreqScale): void
    setOwnerEmail(device: GUsb.Device, email: string): void
    setOwnerName(device: GUsb.Device, name: string): void
    setPcbErrata(device: GUsb.Device, pcbErrata: number): void
    setPostScale(device: GUsb.Device, postScale: number): void
    setPreScale(device: GUsb.Device, preScale: number): void
    setRemoteHash(device: GUsb.Device, remoteHash: Sha1): void
    setSerialNumber(device: GUsb.Device, serialNumber: number): void
    takeReadingArray(device: GUsb.Device, readingArray: number): void
    takeReadingRaw(device: GUsb.Device, takeReading: number): void
    takeReadingSpectral(device: GUsb.Device, sramAddr: number): void
    takeReadings(device: GUsb.Device, value: Colord.ColorRGB): void
    takeReadingsXyz(device: GUsb.Device, calibrationIndex: number, value: Colord.ColorXYZ): void
    verifyFirmware(device: GUsb.Device, data: number, len: number): void
    verifyFlash(device: GUsb.Device, address: number, data: number, len: number): void
    writeEeprom(device: GUsb.Device, magic: string): void
    writeFirmware(device: GUsb.Device, data: number, len: number): void
    writeFlash(device: GUsb.Device, address: number, data: number, len: number): void
    writeSram(device: GUsb.Device, address: number, data: number, len: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of ColorHug-1.0.ColorHug.DeviceQueue */
    connect(sigName: "device-failed", callback: ((object: GObject.Object, p0: string) => void)): number
    on(sigName: "device-failed", callback: (object: GObject.Object, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-failed", callback: (object: GObject.Object, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-failed", callback: (object: GObject.Object, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "device-failed", object: GObject.Object, p0: string): void
    connect(sigName: "progress-changed", callback: ((object: number) => void)): number
    on(sigName: "progress-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress-changed", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress-changed", object: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceQueue_ConstructProps)
    _init (config?: DeviceQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceQueue
    static $gtype: GObject.Type
}
abstract class DeviceQueueClass {
    /* Fields of ColorHug-1.0.ColorHug.DeviceQueueClass */
    readonly parentClass: GObject.ObjectClass
    readonly deviceFailed: (deviceQueue: DeviceQueue, device: GUsb.Device, errorMessage: string) => void
    readonly progressChanged: (deviceQueue: DeviceQueue, percentage: number) => void
    static name: string
}
class Sha1 {
    /* Fields of ColorHug-1.0.ColorHug.Sha1 */
    readonly bytes: Uint8Array
    /* Methods of ColorHug-1.0.ColorHug.Sha1 */
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static parse(value: string, sha1: Sha1): boolean
}
    type Cmd = number
}
export default ColorHug;