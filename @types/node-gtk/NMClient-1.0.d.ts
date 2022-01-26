/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * NMClient-1.0
 */

import type NetworkManager from './NetworkManager-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type DBusGLib from './DBusGLib-1.0';
import type Gio from './Gio-2.0';

export namespace NMClient {

enum ClientError {
    UNKNOWNERROR,
    MANAGERNOTRUNNING,
}
enum ClientPermission {
    NONE,
    ENABLE_DISABLE_NETWORK,
    ENABLE_DISABLE_WIFI,
    ENABLE_DISABLE_WWAN,
    ENABLE_DISABLE_WIMAX,
    SLEEP_WAKE,
    NETWORK_CONTROL,
    WIFI_SHARE_PROTECTED,
    WIFI_SHARE_OPEN,
    SETTINGS_MODIFY_SYSTEM,
    SETTINGS_MODIFY_OWN,
    SETTINGS_MODIFY_HOSTNAME,
    SETTINGS_MODIFY_GLOBAL_DNS,
    RELOAD,
    CHECKPOINT_ROLLBACK,
    ENABLE_DISABLE_STATISTICS,
    LAST,
}
enum ClientPermissionResult {
    UNKNOWN,
    YES,
    AUTH,
    NO,
}
enum DeviceAdslError {
    UNKNOWNERROR,
    NOTADSLCONNECTION,
    INVALIDADSLCONNECTION,
}
enum DeviceBondError {
    UNKNOWNERROR,
    NOTBONDCONNECTION,
    INVALIDBONDCONNECTION,
    INTERFACEMISMATCH,
}
enum DeviceBridgeError {
    UNKNOWNERROR,
    NOTBRIDGECONNECTION,
    INVALIDBRIDGECONNECTION,
    INTERFACEMISMATCH,
}
enum DeviceBtError {
    UNKNOWNERROR,
    NOTBTCONNECTION,
    INVALIDBTCONNECTION,
    INVALIDDEVICEMAC,
    MACMISMATCH,
    MISSINGDEVICECAPS,
}
enum DeviceError {
    UNKNOWNERROR,
    INTERFACEMISMATCH,
}
enum DeviceEthernetError {
    UNKNOWNERROR,
    NOTETHERNETCONNECTION,
    INVALIDETHERNETCONNECTION,
    INVALIDDEVICEMAC,
    MACMISMATCH,
}
enum DeviceGenericError {
    UNKNOWNERROR,
    NOTGENERICCONNECTION,
    MISSINGINTERFACENAME,
}
enum DeviceInfinibandError {
    UNKNOWNERROR,
    NOTINFINIBANDCONNECTION,
    INVALIDINFINIBANDCONNECTION,
    INVALIDDEVICEMAC,
    MACMISMATCH,
}
enum DeviceModemError {
    UNKNOWNERROR,
    NOTMODEMCONNECTION,
    INVALIDMODEMCONNECTION,
    MISSINGDEVICECAPS,
}
enum DeviceOlpcMeshError {
    UNKNOWNERROR,
    NOTOLPCMESHCONNECTION,
    INVALIDOLPCMESHCONNECTION,
}
enum DeviceTeamError {
    UNKNOWNERROR,
    NOTTEAMCONNECTION,
    INVALIDTEAMCONNECTION,
    INTERFACEMISMATCH,
}
enum DeviceVlanError {
    UNKNOWNERROR,
    NOTVLANCONNECTION,
    INVALIDVLANCONNECTION,
    IDMISMATCH,
    INTERFACEMISMATCH,
    MACMISMATCH,
}
enum DeviceWifiError {
    UNKNOWNERROR,
    NOTWIFICONNECTION,
    INVALIDWIFICONNECTION,
    INVALIDDEVICEMAC,
    MACMISMATCH,
    MISSINGDEVICEWPACAPS,
    MISSINGDEVICERSNCAPS,
}
enum DeviceWimaxError {
    UNKNOWNERROR,
    NOTWIMAXCONNECTION,
    INVALIDWIMAXCONNECTION,
    INVALIDDEVICEMAC,
    MACMISMATCH,
}
enum ObjectError {
    UNKNOWN,
    OBJECT_CREATION_FAILURE,
}
enum RemoteConnectionError {
    UNKNOWNERROR,
    DISCONNECTED,
}
enum RemoteSettingsError {
    UNKNOWNERROR,
    CONNECTIONREMOVED,
    CONNECTIONUNAVAILABLE,
    SERVICEUNAVAILABLE,
}
enum SecretAgentError {
    NOTAUTHORIZED,
    INVALIDCONNECTION,
    USERCANCELED,
    AGENTCANCELED,
    INTERNALERROR,
    NOSECRETS,
}
enum WimaxNspNetworkType {
    UNKNOWN,
    HOME,
    PARTNER,
    ROAMING_PARTNER,
}
enum SecretAgentCapabilities {
    NONE,
    VPN_HINTS,
    LAST,
}
enum SecretAgentGetSecretsFlags {
    NONE,
    ALLOW_INTERACTION,
    REQUEST_NEW,
    USER_REQUESTED,
}
const ACCESS_POINT_BSSID: string
const ACCESS_POINT_FLAGS: string
const ACCESS_POINT_FREQUENCY: string
const ACCESS_POINT_HW_ADDRESS: string
const ACCESS_POINT_LAST_SEEN: string
const ACCESS_POINT_MAX_BITRATE: string
const ACCESS_POINT_MODE: string
const ACCESS_POINT_RSN_FLAGS: string
const ACCESS_POINT_SSID: string
const ACCESS_POINT_STRENGTH: string
const ACCESS_POINT_WPA_FLAGS: string
const ACTIVE_CONNECTION_CONNECTION: string
const ACTIVE_CONNECTION_DEFAULT: string
const ACTIVE_CONNECTION_DEFAULT6: string
const ACTIVE_CONNECTION_DEVICES: string
const ACTIVE_CONNECTION_DHCP4_CONFIG: string
const ACTIVE_CONNECTION_DHCP6_CONFIG: string
const ACTIVE_CONNECTION_ID: string
const ACTIVE_CONNECTION_IP4_CONFIG: string
const ACTIVE_CONNECTION_IP6_CONFIG: string
const ACTIVE_CONNECTION_MASTER: string
const ACTIVE_CONNECTION_SPECIFIC_OBJECT: string
const ACTIVE_CONNECTION_STATE: string
const ACTIVE_CONNECTION_TYPE: string
const ACTIVE_CONNECTION_UUID: string
const ACTIVE_CONNECTION_VPN: string
const CLIENT_ACTIVATING_CONNECTION: string
const CLIENT_ACTIVE_CONNECTIONS: string
const CLIENT_ALL_DEVICES: string
const CLIENT_CONNECTIVITY: string
const CLIENT_DEVICES: string
const CLIENT_MANAGER_RUNNING: string
const CLIENT_NETWORKING_ENABLED: string
const CLIENT_PRIMARY_CONNECTION: string
const CLIENT_STARTUP: string
const CLIENT_STATE: string
const CLIENT_VERSION: string
const CLIENT_WIMAX_ENABLED: string
const CLIENT_WIMAX_HARDWARE_ENABLED: string
const CLIENT_WIRELESS_ENABLED: string
const CLIENT_WIRELESS_HARDWARE_ENABLED: string
const CLIENT_WWAN_ENABLED: string
const CLIENT_WWAN_HARDWARE_ENABLED: string
const DEVICE_ACTIVE_CONNECTION: string
const DEVICE_ADSL_CARRIER: string
const DEVICE_AUTOCONNECT: string
const DEVICE_AVAILABLE_CONNECTIONS: string
const DEVICE_BOND_CARRIER: string
const DEVICE_BOND_HW_ADDRESS: string
const DEVICE_BOND_SLAVES: string
const DEVICE_BRIDGE_CARRIER: string
const DEVICE_BRIDGE_HW_ADDRESS: string
const DEVICE_BRIDGE_SLAVES: string
const DEVICE_BT_CAPABILITIES: string
const DEVICE_BT_HW_ADDRESS: string
const DEVICE_BT_NAME: string
const DEVICE_CAPABILITIES: string
const DEVICE_DEVICE_TYPE: string
const DEVICE_DHCP4_CONFIG: string
const DEVICE_DHCP6_CONFIG: string
const DEVICE_DRIVER: string
const DEVICE_DRIVER_VERSION: string
const DEVICE_ETHERNET_CARRIER: string
const DEVICE_ETHERNET_HW_ADDRESS: string
const DEVICE_ETHERNET_PERMANENT_HW_ADDRESS: string
const DEVICE_ETHERNET_SPEED: string
const DEVICE_FIRMWARE_MISSING: string
const DEVICE_FIRMWARE_VERSION: string
const DEVICE_GENERIC_HW_ADDRESS: string
const DEVICE_GENERIC_TYPE_DESCRIPTION: string
const DEVICE_INFINIBAND_CARRIER: string
const DEVICE_INFINIBAND_HW_ADDRESS: string
const DEVICE_INTERFACE: string
const DEVICE_IP4_CONFIG: string
const DEVICE_IP6_CONFIG: string
const DEVICE_IP_INTERFACE: string
const DEVICE_MANAGED: string
const DEVICE_MODEM_CURRENT_CAPABILITIES: string
const DEVICE_MODEM_MODEM_CAPABILITIES: string
const DEVICE_MTU: string
const DEVICE_OLPC_MESH_ACTIVE_CHANNEL: string
const DEVICE_OLPC_MESH_COMPANION: string
const DEVICE_OLPC_MESH_HW_ADDRESS: string
const DEVICE_PHYSICAL_PORT_ID: string
const DEVICE_PRODUCT: string
const DEVICE_REAL: string
const DEVICE_STATE: string
const DEVICE_STATE_REASON: string
const DEVICE_TEAM_CARRIER: string
const DEVICE_TEAM_HW_ADDRESS: string
const DEVICE_TEAM_SLAVES: string
const DEVICE_UDI: string
const DEVICE_VENDOR: string
const DEVICE_VLAN_CARRIER: string
const DEVICE_VLAN_HW_ADDRESS: string
const DEVICE_VLAN_PARENT: string
const DEVICE_VLAN_VLAN_ID: string
const DEVICE_WIFI_ACCESS_POINTS: string
const DEVICE_WIFI_ACTIVE_ACCESS_POINT: string
const DEVICE_WIFI_BITRATE: string
const DEVICE_WIFI_CAPABILITIES: string
const DEVICE_WIFI_HW_ADDRESS: string
const DEVICE_WIFI_MODE: string
const DEVICE_WIFI_PERMANENT_HW_ADDRESS: string
const DEVICE_WIMAX_ACTIVE_NSP: string
const DEVICE_WIMAX_BSID: string
const DEVICE_WIMAX_CENTER_FREQUENCY: string
const DEVICE_WIMAX_CINR: string
const DEVICE_WIMAX_HW_ADDRESS: string
const DEVICE_WIMAX_NSPS: string
const DEVICE_WIMAX_RSSI: string
const DEVICE_WIMAX_TX_POWER: string
const DHCP4_CONFIG_OPTIONS: string
const DHCP6_CONFIG_OPTIONS: string
const IP4_CONFIG_ADDRESSES: string
const IP4_CONFIG_DOMAINS: string
const IP4_CONFIG_GATEWAY: string
const IP4_CONFIG_NAMESERVERS: string
const IP4_CONFIG_ROUTES: string
const IP4_CONFIG_SEARCHES: string
const IP4_CONFIG_WINS_SERVERS: string
const IP6_CONFIG_ADDRESSES: string
const IP6_CONFIG_DOMAINS: string
const IP6_CONFIG_GATEWAY: string
const IP6_CONFIG_NAMESERVERS: string
const IP6_CONFIG_ROUTES: string
const IP6_CONFIG_SEARCHES: string
const OBJECT_DBUS_CONNECTION: string
const OBJECT_DBUS_PATH: string
const REMOTE_CONNECTION_REMOVED: string
const REMOTE_CONNECTION_UNSAVED: string
const REMOTE_CONNECTION_UPDATED: string
const REMOTE_SETTINGS_BUS: string
const REMOTE_SETTINGS_CAN_MODIFY: string
const REMOTE_SETTINGS_CONNECTIONS_READ: string
const REMOTE_SETTINGS_HOSTNAME: string
const REMOTE_SETTINGS_NEW_CONNECTION: string
const REMOTE_SETTINGS_SERVICE_RUNNING: string
const SECRET_AGENT_AUTO_REGISTER: string
const SECRET_AGENT_CAPABILITIES: string
const SECRET_AGENT_IDENTIFIER: string
const SECRET_AGENT_REGISTERED: string
const SECRET_AGENT_REGISTRATION_RESULT: string
const VPN_CONNECTION_BANNER: string
const VPN_CONNECTION_VPN_STATE: string
const WIMAX_NSP_NAME: string
const WIMAX_NSP_NETWORK_TYPE: string
const WIMAX_NSP_SIGNAL_QUALITY: string
function clientErrorQuark(): GLib.Quark
function deviceAdslErrorQuark(): GLib.Quark
function deviceBondErrorQuark(): GLib.Quark
function deviceBridgeErrorQuark(): GLib.Quark
function deviceBtErrorQuark(): GLib.Quark
function deviceErrorQuark(): GLib.Quark
function deviceEthernetErrorQuark(): GLib.Quark
function deviceGenericErrorQuark(): GLib.Quark
function deviceInfinibandErrorQuark(): GLib.Quark
function deviceModemErrorQuark(): GLib.Quark
function deviceOlpcMeshErrorQuark(): GLib.Quark
function deviceTeamErrorQuark(): GLib.Quark
function deviceVlanErrorQuark(): GLib.Quark
function deviceWifiErrorQuark(): GLib.Quark
function deviceWimaxErrorQuark(): GLib.Quark
function objectErrorQuark(): GLib.Quark
function remoteConnectionErrorQuark(): GLib.Quark
function remoteSettingsErrorQuark(): GLib.Quark
function secretAgentErrorQuark(): GLib.Quark
interface ClientActivateFn {
    (client: Client, activeConnection: ActiveConnection, error: GLib.Error): void
}
interface ClientAddActivateFn {
    (client: Client, connection: ActiveConnection, newConnectionPath: string, error: GLib.Error): void
}
interface DeviceCallbackFn {
    (device: Device, error: GLib.Error): void
}
interface DeviceDeactivateFn {
    (device: Device, error: GLib.Error): void
}
interface DeviceWifiRequestScanFn {
    (device: DeviceWifi, error: GLib.Error): void
}
interface RemoteConnectionGetSecretsFunc {
    (connection: RemoteConnection, secrets: GLib.HashTable, error: GLib.Error): void
}
interface RemoteConnectionResultFunc {
    (connection: RemoteConnection, error: GLib.Error): void
}
interface RemoteSettingsAddConnectionFunc {
    (settings: RemoteSettings, connection: RemoteConnection, error: GLib.Error): void
}
interface RemoteSettingsLoadConnectionsFunc {
    (settings: RemoteSettings, failures: string, error: GLib.Error): void
}
interface RemoteSettingsSaveHostnameFunc {
    (settings: RemoteSettings, error: GLib.Error): void
}
interface SecretAgentDeleteSecretsFunc {
    (agent: SecretAgent, connection: NetworkManager.Connection, error: GLib.Error): void
}
interface SecretAgentGetSecretsFunc {
    (agent: SecretAgent, connection: NetworkManager.Connection, secrets: GLib.HashTable, error: GLib.Error): void
}
interface SecretAgentSaveSecretsFunc {
    (agent: SecretAgent, connection: NetworkManager.Connection, error: GLib.Error): void
}
interface AccessPoint_ConstructProps extends Object_ConstructProps {
}
class AccessPoint {
    /* Properties of NMClient-1.0.NMClient.AccessPoint */
    readonly bssid: string
    readonly flags: number
    readonly frequency: number
    readonly hwAddress: string
    readonly lastSeen: number
    readonly maxBitrate: number
    readonly mode: number
    readonly rsnFlags: number
    readonly ssid: any
    readonly strength: number
    readonly wpaFlags: number
    /* Fields of NMClient-1.0.NMClient.Object */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.AccessPoint */
    connectionValid(connection: NetworkManager.Connection): boolean
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getBssid(): string
    getFlags(): NetworkManager.TODO_80211ApFlags
    getFrequency(): number
    getHwAddress(): string
    getLastSeen(): number
    getMaxBitrate(): number
    getMode(): NetworkManager.TODO_80211Mode
    getRsnFlags(): NetworkManager.TODO_80211ApSecurityFlags
    getSsid(): Uint8Array
    getStrength(): number
    getWpaFlags(): NetworkManager.TODO_80211ApSecurityFlags
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bssid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bssid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bssid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bssid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bssid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::frequency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frequency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-seen", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-seen", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-seen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-seen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-seen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-bitrate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rsn-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rsn-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rsn-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rsn-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rsn-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::strength", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strength", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strength", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::strength", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::strength", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wpa-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wpa-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wpa-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wpa-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wpa-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AccessPoint_ConstructProps)
    _init (config?: AccessPoint_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): AccessPoint
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface ActiveConnection_ConstructProps extends Object_ConstructProps {
}
class ActiveConnection {
    /* Properties of NMClient-1.0.NMClient.ActiveConnection */
    readonly connection: string
    readonly "default": boolean
    readonly default6: boolean
    readonly devices: any
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly id: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly master: string
    readonly specificObject: string
    readonly state: number
    readonly type: string
    readonly uuid: string
    readonly vpn: boolean
    /* Fields of NMClient-1.0.NMClient.Object */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.ActiveConnection */
    getConnection(): string
    getConnectionType(): string
    getDefault(): boolean
    getDefault6(): boolean
    getDevices(): Device[]
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getId(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getMaster(): string
    getSpecificObject(): string
    getState(): NetworkManager.ActiveConnectionState
    getUuid(): string
    getVpn(): boolean
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default6", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default6", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::devices", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::devices", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::master", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::specific-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::specific-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::specific-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::specific-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::specific-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vpn", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpn", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vpn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vpn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vpn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ActiveConnection_ConstructProps)
    _init (config?: ActiveConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): ActiveConnection
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Client_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of NMClient-1.0.NMClient.Client */
    networkingEnabled?: boolean
    wimaxEnabled?: boolean
    wirelessEnabled?: boolean
    wwanEnabled?: boolean
}
class Client {
    /* Properties of NMClient-1.0.NMClient.Client */
    readonly activatingConnection: ActiveConnection
    readonly activeConnections: object[]
    readonly allDevices: any
    readonly connectivity: number
    readonly devices: any
    readonly managerRunning: boolean
    networkingEnabled: boolean
    readonly primaryConnection: ActiveConnection
    readonly startup: boolean
    readonly state: number
    readonly version: string
    wimaxEnabled: boolean
    readonly wimaxHardwareEnabled: boolean
    wirelessEnabled: boolean
    readonly wirelessHardwareEnabled: boolean
    wwanEnabled: boolean
    readonly wwanHardwareEnabled: boolean
    /* Fields of NMClient-1.0.NMClient.Object */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.Client */
    activateConnection(connection?: NetworkManager.Connection | null, device?: Device | null, specificObject?: string | null, callback?: ClientActivateFn | null): void
    addAndActivateConnection(partial: NetworkManager.Connection | null, device: Device, specificObject?: string | null, callback?: ClientAddActivateFn | null): void
    checkConnectivity(cancellable?: Gio.Cancellable | null): NetworkManager.ConnectivityState
    checkConnectivityAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    checkConnectivityFinish(result: Gio.AsyncResult): NetworkManager.ConnectivityState
    deactivateConnection(active: ActiveConnection): void
    getActivatingConnection(): ActiveConnection
    getActiveConnections(): ActiveConnection[]
    getAllDevices(): Device[]
    getConnectivity(): NetworkManager.ConnectivityState
    getDeviceByIface(iface: string): Device
    getDeviceByPath(objectPath: string): Device
    getDevices(): Device[]
    getLogging(level?: string | null, domains?: string | null): boolean
    getManagerRunning(): boolean
    getPermissionResult(permission: ClientPermission): ClientPermissionResult
    getPrimaryConnection(): ActiveConnection
    getStartup(): boolean
    getState(): NetworkManager.State
    getVersion(): string
    networkingGetEnabled(): boolean
    networkingSetEnabled(enabled: boolean): void
    setLogging(level?: string | null, domains?: string | null): boolean
    sleep(sleep: boolean): void
    wimaxGetEnabled(): boolean
    wimaxHardwareGetEnabled(): boolean
    wimaxSetEnabled(enabled: boolean): void
    wirelessGetEnabled(): boolean
    wirelessHardwareGetEnabled(): boolean
    wirelessSetEnabled(enabled: boolean): void
    wwanGetEnabled(): boolean
    wwanHardwareGetEnabled(): boolean
    wwanSetEnabled(enabled: boolean): void
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Client */
    connect(sigName: "any-device-added", callback: ((device: Device) => void)): number
    on(sigName: "any-device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "any-device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "any-device-added", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "any-device-added", device: Device): void
    connect(sigName: "any-device-removed", callback: ((device: Device) => void)): number
    on(sigName: "any-device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "any-device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "any-device-removed", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "any-device-removed", device: Device): void
    connect(sigName: "device-added", callback: ((device: Device) => void)): number
    on(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-added", device: Device): void
    connect(sigName: "device-removed", callback: ((device: Device) => void)): number
    on(sigName: "device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-removed", device: Device): void
    connect(sigName: "permission-changed", callback: ((permission: number, result: number) => void)): number
    on(sigName: "permission-changed", callback: (permission: number, result: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "permission-changed", callback: (permission: number, result: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "permission-changed", callback: (permission: number, result: number) => void): NodeJS.EventEmitter
    emit(sigName: "permission-changed", permission: number, result: number): void
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::activating-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activating-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::activating-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::activating-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::activating-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::all-devices", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all-devices", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::all-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::all-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::all-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connectivity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectivity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connectivity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connectivity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connectivity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::devices", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::devices", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manager-running", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager-running", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manager-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manager-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manager-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::networking-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::networking-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::networking-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::networking-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::networking-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::primary-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::primary-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::primary-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::primary-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::startup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::startup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::startup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::startup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wimax-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wimax-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wimax-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wimax-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wimax-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wimax-hardware-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wimax-hardware-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wimax-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wimax-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wimax-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wireless-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wireless-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wireless-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wireless-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wireless-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wireless-hardware-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wireless-hardware-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wireless-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wireless-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wireless-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wwan-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wwan-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wwan-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wwan-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wwan-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wwan-hardware-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wwan-hardware-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wwan-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wwan-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wwan-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Client
    static newFinish(result: Gio.AsyncResult): Client
    static newAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DHCP4Config_ConstructProps extends Object_ConstructProps {
}
class DHCP4Config {
    /* Properties of NMClient-1.0.NMClient.DHCP4Config */
    readonly options: GLib.HashTable
    /* Fields of NMClient-1.0.NMClient.Object */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.DHCP4Config */
    getOneOption(option: string): string
    getOptions(): GLib.HashTable
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::options", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DHCP4Config_ConstructProps)
    _init (config?: DHCP4Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, objectPath: string): DHCP4Config
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DHCP6Config_ConstructProps extends Object_ConstructProps {
}
class DHCP6Config {
    /* Properties of NMClient-1.0.NMClient.DHCP6Config */
    readonly options: GLib.HashTable
    /* Fields of NMClient-1.0.NMClient.Object */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.DHCP6Config */
    getOneOption(option: string): string
    getOptions(): GLib.HashTable
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::options", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DHCP6Config_ConstructProps)
    _init (config?: DHCP6Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, objectPath: string): DHCP6Config
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of NMClient-1.0.NMClient.Device */
    autoconnect?: boolean
}
class Device {
    /* Properties of NMClient-1.0.NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient-1.0.NMClient.Object */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getHwAddress(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Device */
    connect(sigName: "state-changed", callback: ((newState: number, oldState: number, reason: number) => void)): number
    on(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): Device
    static disambiguateNames(devices: Device[]): string[]
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DeviceAdsl_ConstructProps extends Device_ConstructProps {
}
class DeviceAdsl {
    /* Properties of NMClient-1.0.NMClient.DeviceAdsl */
    readonly carrier: boolean
    /* Properties of NMClient-1.0.NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient-1.0.NMClient.Device */
    readonly parent: Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.DeviceAdsl */
    getCarrier(): boolean
    /* Methods of NMClient-1.0.NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getHwAddress(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Device */
    connect(sigName: "state-changed", callback: ((newState: number, oldState: number, reason: number) => void)): number
    on(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::carrier", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceAdsl_ConstructProps)
    _init (config?: DeviceAdsl_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceAdsl
    /* Function overloads */
    static new(connection: DBusGLib.Connection, path: string): DeviceAdsl
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DeviceBond_ConstructProps extends Device_ConstructProps {
}
class DeviceBond {
    /* Properties of NMClient-1.0.NMClient.DeviceBond */
    readonly carrier: boolean
    readonly hwAddress: string
    readonly slaves: any
    /* Properties of NMClient-1.0.NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient-1.0.NMClient.Device */
    readonly parent: Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.DeviceBond */
    getCarrier(): boolean
    getHwAddress(): string
    getSlaves(): Device[]
    /* Methods of NMClient-1.0.NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Device */
    connect(sigName: "state-changed", callback: ((newState: number, oldState: number, reason: number) => void)): number
    on(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::carrier", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::slaves", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slaves", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceBond_ConstructProps)
    _init (config?: DeviceBond_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceBond
    /* Function overloads */
    static new(connection: DBusGLib.Connection, path: string): DeviceBond
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DeviceBridge_ConstructProps extends Device_ConstructProps {
}
class DeviceBridge {
    /* Properties of NMClient-1.0.NMClient.DeviceBridge */
    readonly carrier: boolean
    readonly hwAddress: string
    readonly slaves: any
    /* Properties of NMClient-1.0.NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient-1.0.NMClient.Device */
    readonly parent: Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.DeviceBridge */
    getCarrier(): boolean
    getHwAddress(): string
    getSlaves(): Device[]
    /* Methods of NMClient-1.0.NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Device */
    connect(sigName: "state-changed", callback: ((newState: number, oldState: number, reason: number) => void)): number
    on(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::carrier", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::slaves", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slaves", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceBridge_ConstructProps)
    _init (config?: DeviceBridge_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceBridge
    /* Function overloads */
    static new(connection: DBusGLib.Connection, path: string): DeviceBridge
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DeviceBt_ConstructProps extends Device_ConstructProps {
}
class DeviceBt {
    /* Properties of NMClient-1.0.NMClient.DeviceBt */
    readonly btCapabilities: number
    readonly hwAddress: string
    readonly name: string
    /* Properties of NMClient-1.0.NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient-1.0.NMClient.Device */
    readonly parent: Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.DeviceBt */
    getCapabilities(): NetworkManager.BluetoothCapabilities
    getHwAddress(): string
    getName(): string
    /* Methods of NMClient-1.0.NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Device */
    connect(sigName: "state-changed", callback: ((newState: number, oldState: number, reason: number) => void)): number
    on(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bt-capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bt-capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bt-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bt-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bt-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceBt_ConstructProps)
    _init (config?: DeviceBt_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceBt
    /* Function overloads */
    static new(connection: DBusGLib.Connection, path: string): DeviceBt
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DeviceEthernet_ConstructProps extends Device_ConstructProps {
}
class DeviceEthernet {
    /* Properties of NMClient-1.0.NMClient.DeviceEthernet */
    readonly carrier: boolean
    readonly hwAddress: string
    readonly permHwAddress: string
    readonly speed: number
    /* Properties of NMClient-1.0.NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient-1.0.NMClient.Device */
    readonly parent: Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.DeviceEthernet */
    getCarrier(): boolean
    getHwAddress(): string
    getPermanentHwAddress(): string
    getSpeed(): number
    /* Methods of NMClient-1.0.NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Device */
    connect(sigName: "state-changed", callback: ((newState: number, oldState: number, reason: number) => void)): number
    on(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::carrier", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::perm-hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perm-hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::speed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceEthernet_ConstructProps)
    _init (config?: DeviceEthernet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceEthernet
    /* Function overloads */
    static new(connection: DBusGLib.Connection, path: string): DeviceEthernet
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DeviceGeneric_ConstructProps extends Device_ConstructProps {
}
class DeviceGeneric {
    /* Properties of NMClient-1.0.NMClient.DeviceGeneric */
    readonly hwAddress: string
    readonly typeDescription: string
    /* Properties of NMClient-1.0.NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient-1.0.NMClient.Device */
    readonly parent: Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.DeviceGeneric */
    getHwAddress(): string
    /* Methods of NMClient-1.0.NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Device */
    connect(sigName: "state-changed", callback: ((newState: number, oldState: number, reason: number) => void)): number
    on(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceGeneric_ConstructProps)
    _init (config?: DeviceGeneric_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceGeneric
    /* Function overloads */
    static new(connection: DBusGLib.Connection, path: string): DeviceGeneric
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DeviceInfiniband_ConstructProps extends Device_ConstructProps {
}
class DeviceInfiniband {
    /* Properties of NMClient-1.0.NMClient.DeviceInfiniband */
    readonly carrier: boolean
    readonly hwAddress: string
    /* Properties of NMClient-1.0.NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient-1.0.NMClient.Device */
    readonly parent: Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.DeviceInfiniband */
    getCarrier(): boolean
    getHwAddress(): string
    /* Methods of NMClient-1.0.NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Device */
    connect(sigName: "state-changed", callback: ((newState: number, oldState: number, reason: number) => void)): number
    on(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::carrier", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceInfiniband_ConstructProps)
    _init (config?: DeviceInfiniband_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceInfiniband
    /* Function overloads */
    static new(connection: DBusGLib.Connection, path: string): DeviceInfiniband
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DeviceModem_ConstructProps extends Device_ConstructProps {
}
class DeviceModem {
    /* Properties of NMClient-1.0.NMClient.DeviceModem */
    readonly currentCapabilities: number
    readonly modemCapabilities: number
    /* Properties of NMClient-1.0.NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient-1.0.NMClient.Device */
    readonly parent: Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.DeviceModem */
    getCurrentCapabilities(): NetworkManager.DeviceModemCapabilities
    getModemCapabilities(): NetworkManager.DeviceModemCapabilities
    /* Methods of NMClient-1.0.NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getHwAddress(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Device */
    connect(sigName: "state-changed", callback: ((newState: number, oldState: number, reason: number) => void)): number
    on(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modem-capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modem-capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modem-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modem-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modem-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceModem_ConstructProps)
    _init (config?: DeviceModem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DeviceOlpcMesh_ConstructProps extends Device_ConstructProps {
}
class DeviceOlpcMesh {
    /* Properties of NMClient-1.0.NMClient.DeviceOlpcMesh */
    readonly activeChannel: number
    readonly companion: DeviceWifi
    readonly hwAddress: string
    /* Properties of NMClient-1.0.NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient-1.0.NMClient.Device */
    readonly parent: Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.DeviceOlpcMesh */
    getActiveChannel(): number
    getCompanion(): DeviceWifi
    getHwAddress(): string
    /* Methods of NMClient-1.0.NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Device */
    connect(sigName: "state-changed", callback: ((newState: number, oldState: number, reason: number) => void)): number
    on(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active-channel", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-channel", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::companion", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::companion", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::companion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::companion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::companion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceOlpcMesh_ConstructProps)
    _init (config?: DeviceOlpcMesh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceOlpcMesh
    /* Function overloads */
    static new(connection: DBusGLib.Connection, path: string): DeviceOlpcMesh
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DeviceTeam_ConstructProps extends Device_ConstructProps {
}
class DeviceTeam {
    /* Properties of NMClient-1.0.NMClient.DeviceTeam */
    readonly carrier: boolean
    readonly hwAddress: string
    readonly slaves: any
    /* Properties of NMClient-1.0.NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient-1.0.NMClient.Device */
    readonly parent: Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.DeviceTeam */
    getCarrier(): boolean
    getHwAddress(): string
    getSlaves(): Device[]
    /* Methods of NMClient-1.0.NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Device */
    connect(sigName: "state-changed", callback: ((newState: number, oldState: number, reason: number) => void)): number
    on(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::carrier", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::slaves", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slaves", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceTeam_ConstructProps)
    _init (config?: DeviceTeam_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceTeam
    /* Function overloads */
    static new(connection: DBusGLib.Connection, path: string): DeviceTeam
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DeviceVlan_ConstructProps extends Device_ConstructProps {
}
class DeviceVlan {
    /* Properties of NMClient-1.0.NMClient.DeviceVlan */
    readonly carrier: boolean
    readonly hwAddress: string
    readonly parent: Device
    readonly vlanId: number
    /* Properties of NMClient-1.0.NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.DeviceVlan */
    getCarrier(): boolean
    getHwAddress(): string
    getParent(): Device
    getVlanId(): number
    /* Methods of NMClient-1.0.NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Device */
    connect(sigName: "state-changed", callback: ((newState: number, oldState: number, reason: number) => void)): number
    on(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::carrier", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::carrier", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vlan-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vlan-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vlan-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vlan-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vlan-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceVlan_ConstructProps)
    _init (config?: DeviceVlan_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceVlan
    /* Function overloads */
    static new(connection: DBusGLib.Connection, path: string): DeviceVlan
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DeviceWifi_ConstructProps extends Device_ConstructProps {
}
class DeviceWifi {
    /* Properties of NMClient-1.0.NMClient.DeviceWifi */
    readonly accessPoints: any
    readonly activeAccessPoint: AccessPoint
    readonly bitrate: number
    readonly hwAddress: string
    readonly mode: number
    readonly permHwAddress: string
    readonly wirelessCapabilities: number
    /* Properties of NMClient-1.0.NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient-1.0.NMClient.Device */
    readonly parent: Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.DeviceWifi */
    getAccessPointByPath(path: string): AccessPoint
    getAccessPoints(): AccessPoint[]
    getActiveAccessPoint(): AccessPoint
    getBitrate(): number
    getCapabilities(): NetworkManager.DeviceWifiCapabilities
    getHwAddress(): string
    getMode(): NetworkManager.TODO_80211Mode
    getPermanentHwAddress(): string
    requestScanSimple(callback?: DeviceWifiRequestScanFn | null): void
    /* Methods of NMClient-1.0.NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.DeviceWifi */
    connect(sigName: "access-point-added", callback: ((ap: GObject.Object) => void)): number
    on(sigName: "access-point-added", callback: (ap: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-point-added", callback: (ap: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-point-added", callback: (ap: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "access-point-added", ap: GObject.Object): void
    connect(sigName: "access-point-removed", callback: ((ap: GObject.Object) => void)): number
    on(sigName: "access-point-removed", callback: (ap: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-point-removed", callback: (ap: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-point-removed", callback: (ap: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "access-point-removed", ap: GObject.Object): void
    /* Signals of NMClient-1.0.NMClient.Device */
    connect(sigName: "state-changed", callback: ((newState: number, oldState: number, reason: number) => void)): number
    on(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::access-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::access-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::access-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::access-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-access-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-access-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-access-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-access-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-access-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bitrate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::perm-hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perm-hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wireless-capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wireless-capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wireless-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wireless-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wireless-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceWifi_ConstructProps)
    _init (config?: DeviceWifi_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceWifi
    /* Function overloads */
    static new(connection: DBusGLib.Connection, path: string): DeviceWifi
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DeviceWimax_ConstructProps extends Device_ConstructProps {
}
class DeviceWimax {
    /* Properties of NMClient-1.0.NMClient.DeviceWimax */
    readonly activeNsp: WimaxNsp
    readonly bsid: string
    readonly centerFrequency: number
    readonly cinr: number
    readonly hwAddress: string
    readonly nsps: any
    readonly rssi: number
    readonly txPower: number
    /* Properties of NMClient-1.0.NMClient.Device */
    readonly activeConnection: ActiveConnection
    autoconnect: boolean
    readonly availableConnections: any
    readonly capabilities: number
    readonly deviceType: number
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly driver: string
    readonly driverVersion: string
    readonly firmwareMissing: boolean
    readonly firmwareVersion: string
    readonly interface: string
    readonly ipInterface: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly managed: boolean
    readonly mtu: number
    readonly physicalPortId: string
    readonly product: string
    readonly real: boolean
    readonly state: number
    readonly udi: string
    readonly vendor: string
    /* Fields of NMClient-1.0.NMClient.Device */
    readonly parent: Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.DeviceWimax */
    getActiveNsp(): WimaxNsp
    getBsid(): string
    getCenterFrequency(): number
    getCinr(): number
    getHwAddress(): string
    getNspByPath(path: string): WimaxNsp
    getNsps(): WimaxNsp[]
    getRssi(): number
    getTxPower(): number
    /* Methods of NMClient-1.0.NMClient.Device */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    connectionValid(connection: NetworkManager.Connection): boolean
    delete(callback?: DeviceCallbackFn | null): void
    disconnect(callback?: DeviceCallbackFn | null): void
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getActiveConnection(): ActiveConnection
    getAutoconnect(): boolean
    getAvailableConnections(): RemoteConnection[]
    getCapabilities(): NetworkManager.DeviceCapabilities
    getDescription(): string
    getDeviceType(): NetworkManager.DeviceType
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getDriver(): string
    getDriverVersion(): string
    getFirmwareMissing(): boolean
    getFirmwareVersion(): string
    getIface(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getIpIface(): string
    getManaged(): boolean
    getMtu(): number
    getPhysicalPortId(): string
    getProduct(): string
    getSettingType(): GObject.Type
    getState(): NetworkManager.DeviceState
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason | null ]
    getTypeDescription(): string
    getUdi(): string
    getVendor(): string
    isReal(): boolean
    isSoftware(): boolean
    setAutoconnect(autoconnect: boolean): void
    setManaged(managed: boolean): void
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.DeviceWimax */
    connect(sigName: "nsp-added", callback: ((nsp: GObject.Object) => void)): number
    on(sigName: "nsp-added", callback: (nsp: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "nsp-added", callback: (nsp: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "nsp-added", callback: (nsp: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "nsp-added", nsp: GObject.Object): void
    connect(sigName: "nsp-removed", callback: ((nsp: GObject.Object) => void)): number
    on(sigName: "nsp-removed", callback: (nsp: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "nsp-removed", callback: (nsp: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "nsp-removed", callback: (nsp: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "nsp-removed", nsp: GObject.Object): void
    /* Signals of NMClient-1.0.NMClient.Device */
    connect(sigName: "state-changed", callback: ((newState: number, oldState: number, reason: number) => void)): number
    on(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (newState: number, oldState: number, reason: number) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", newState: number, oldState: number, reason: number): void
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active-nsp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-nsp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-nsp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-nsp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-nsp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bsid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bsid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bsid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bsid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bsid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::center-frequency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-frequency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::center-frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::center-frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::center-frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cinr", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cinr", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cinr", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cinr", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cinr", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hw-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nsps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nsps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nsps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nsps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nsps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rssi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rssi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rssi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rssi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rssi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tx-power", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tx-power", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tx-power", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tx-power", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tx-power", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-connections", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::driver-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-missing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::firmware-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical-port-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::real", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceWimax_ConstructProps)
    _init (config?: DeviceWimax_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): DeviceWimax
    /* Function overloads */
    static new(connection: DBusGLib.Connection, path: string): DeviceWimax
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface IP4Config_ConstructProps extends Object_ConstructProps {
}
class IP4Config {
    /* Properties of NMClient-1.0.NMClient.IP4Config */
    readonly addresses: object
    readonly domains: any
    readonly gateway: string
    readonly nameservers: any
    readonly routes: object
    readonly searches: any
    readonly winsServers: any
    /* Fields of NMClient-1.0.NMClient.Object */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.IP4Config */
    getAddresses(): NetworkManager.IP4Address[]
    getDomains(): string[]
    getGateway(): string
    getNameservers(): number[]
    getRoutes(): NetworkManager.IP4Route[]
    getSearches(): string[]
    getWinsServers(): number[]
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::addresses", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::addresses", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::domains", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domains", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::domains", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::domains", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::domains", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gateway", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gateway", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gateway", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gateway", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gateway", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nameservers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nameservers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nameservers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nameservers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nameservers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::routes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::routes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::searches", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::searches", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::searches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::searches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::searches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wins-servers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wins-servers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wins-servers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wins-servers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wins-servers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IP4Config_ConstructProps)
    _init (config?: IP4Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, objectPath: string): IP4Config
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface IP6Config_ConstructProps extends Object_ConstructProps {
}
class IP6Config {
    /* Properties of NMClient-1.0.NMClient.IP6Config */
    readonly addresses: any
    readonly domains: any
    readonly gateway: string
    readonly nameservers: any
    readonly routes: any
    readonly searches: any
    /* Fields of NMClient-1.0.NMClient.Object */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.IP6Config */
    getAddresses(): NetworkManager.IP6Address[]
    getDomains(): string[]
    getGateway(): string
    getNameserver(idx: number): Uint8Array
    getNumNameservers(): number
    getRoutes(): NetworkManager.IP6Route[]
    getSearches(): string[]
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::addresses", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::addresses", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::domains", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domains", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::domains", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::domains", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::domains", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gateway", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gateway", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gateway", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gateway", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gateway", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nameservers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nameservers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nameservers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nameservers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nameservers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::routes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::routes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::searches", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::searches", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::searches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::searches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::searches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IP6Config_ConstructProps)
    _init (config?: IP6Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, objectPath: string): IP6Config
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Object_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of NMClient-1.0.NMClient.Object */
    dbusPath?: string
}
class Object {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
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
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface RemoteConnection_ConstructProps extends NetworkManager.Connection_ConstructProps {
    /* Constructor properties of NMClient-1.0.NMClient.RemoteConnection */
    dbusPath?: string
}
class RemoteConnection {
    /* Properties of NMClient-1.0.NMClient.RemoteConnection */
    readonly unsaved: boolean
    /* Properties of NetworkManager-1.0.NetworkManager.Connection */
    path: string
    /* Fields of NetworkManager-1.0.NetworkManager.Connection */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.RemoteConnection */
    commitChanges(callback?: RemoteConnectionResultFunc | null): void
    commitChangesUnsaved(callback?: RemoteConnectionResultFunc | null): void
    delete(callback?: RemoteConnectionResultFunc | null): void
    getSecrets(settingName: string, callback: RemoteConnectionGetSecretsFunc): void
    getUnsaved(): boolean
    save(callback?: RemoteConnectionResultFunc | null): void
    /* Methods of NetworkManager-1.0.NetworkManager.Connection */
    addSetting(setting: NetworkManager.Setting): void
    clearSecrets(): void
    clearSecretsWithFlags(func: NetworkManager.SettingClearSecretsWithFlagsFn): void
    compare(b: NetworkManager.Connection, flags: NetworkManager.SettingCompareFlags): boolean
    diff(b: NetworkManager.Connection, flags: NetworkManager.SettingCompareFlags, outSettings: GLib.HashTable): boolean
    dump(): void
    duplicate(): NetworkManager.Connection
    forEachSettingValue(func: NetworkManager.SettingValueIterFn): void
    getConnectionType(): string
    getId(): string
    getInterfaceName(): string
    getPath(): string
    getSetting(settingType: GObject.Type): NetworkManager.Setting
    getSetting8021x(): NetworkManager.Setting8021x
    getSettingAdsl(): NetworkManager.SettingAdsl
    getSettingBluetooth(): NetworkManager.SettingBluetooth
    getSettingBond(): NetworkManager.SettingBond
    getSettingBridge(): NetworkManager.SettingBridge
    getSettingBridgePort(): NetworkManager.SettingBridgePort
    getSettingByName(name: string): NetworkManager.Setting
    getSettingCdma(): NetworkManager.SettingCdma
    getSettingConnection(): NetworkManager.SettingConnection
    getSettingDcb(): NetworkManager.SettingDcb
    getSettingGeneric(): NetworkManager.SettingGeneric
    getSettingGsm(): NetworkManager.SettingGsm
    getSettingInfiniband(): NetworkManager.SettingInfiniband
    getSettingIp4Config(): NetworkManager.SettingIP4Config
    getSettingIp6Config(): NetworkManager.SettingIP6Config
    getSettingOlpcMesh(): NetworkManager.SettingOlpcMesh
    getSettingPpp(): NetworkManager.SettingPPP
    getSettingPppoe(): NetworkManager.SettingPPPOE
    getSettingSerial(): NetworkManager.SettingSerial
    getSettingTeam(): NetworkManager.SettingTeam
    getSettingTeamPort(): NetworkManager.SettingTeamPort
    getSettingVlan(): NetworkManager.SettingVlan
    getSettingVpn(): NetworkManager.SettingVPN
    getSettingWimax(): NetworkManager.SettingWimax
    getSettingWired(): NetworkManager.SettingWired
    getSettingWireless(): NetworkManager.SettingWireless
    getSettingWirelessSecurity(): NetworkManager.SettingWirelessSecurity
    getUuid(): string
    getVirtualDeviceDescription(): string
    getVirtualIfaceName(): string
    isType(type: string): boolean
    needSecrets(): [ /* returnType */ string, /* hints */ string[] | null ]
    normalize(parameters?: GLib.HashTable | null): [ /* returnType */ boolean, /* modified */ boolean | null ]
    removeSetting(settingType: GObject.Type): void
    replaceSettings(newSettings: GLib.HashTable): boolean
    replaceSettingsFromConnection(newConnection: NetworkManager.Connection): boolean
    setPath(path: string): void
    toHash(flags: NetworkManager.SettingHashFlags): GLib.HashTable
    updateSecrets(settingName: string, secrets: GLib.HashTable): boolean
    verify(): boolean
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.RemoteConnection */
    connect(sigName: "removed", callback: (() => void)): number
    on(sigName: "removed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "removed"): void
    connect(sigName: "updated", callback: (() => void)): number
    on(sigName: "updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "updated"): void
    connect(sigName: "visible", callback: ((object: boolean) => void)): number
    on(sigName: "visible", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "visible", object: boolean): void
    /* Signals of NetworkManager-1.0.NetworkManager.Connection */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "secrets-cleared", callback: (() => void)): number
    on(sigName: "secrets-cleared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "secrets-cleared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "secrets-cleared", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "secrets-cleared"): void
    connect(sigName: "secrets-updated", callback: ((settingName: string) => void)): number
    on(sigName: "secrets-updated", callback: (settingName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "secrets-updated", callback: (settingName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "secrets-updated", callback: (settingName: string) => void): NodeJS.EventEmitter
    emit(sigName: "secrets-updated", settingName: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::unsaved", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unsaved", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unsaved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unsaved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unsaved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RemoteConnection_ConstructProps)
    _init (config?: RemoteConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bus: DBusGLib.Connection, path: string): RemoteConnection
    /* Function overloads */
    static new(): RemoteConnection
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface RemoteSettings_ConstructProps extends GObject.Object_ConstructProps {
}
class RemoteSettings {
    /* Properties of NMClient-1.0.NMClient.RemoteSettings */
    readonly canModify: boolean
    readonly hostname: string
    readonly serviceRunning: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.RemoteSettings */
    addConnection(connection: NetworkManager.Connection, callback: RemoteSettingsAddConnectionFunc): boolean
    addConnectionUnsaved(connection: NetworkManager.Connection, callback: RemoteSettingsAddConnectionFunc): boolean
    getConnectionById(id: string): RemoteConnection
    getConnectionByPath(path: string): RemoteConnection
    getConnectionByUuid(uuid: string): RemoteConnection
    listConnections(): RemoteConnection[]
    loadConnections(filenames: string): [ /* returnType */ boolean, /* failures */ string ]
    reloadConnections(): boolean
    saveHostname(hostname: string, callback?: RemoteSettingsSaveHostnameFunc | null): boolean
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.RemoteSettings */
    connect(sigName: "connections-read", callback: (() => void)): number
    on(sigName: "connections-read", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connections-read", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connections-read", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "connections-read"): void
    connect(sigName: "new-connection", callback: ((object: GObject.Object) => void)): number
    on(sigName: "new-connection", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-connection", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-connection", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "new-connection", object: GObject.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-modify", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-modify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-modify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-modify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-modify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hostname", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hostname", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service-running", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-running", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RemoteSettings_ConstructProps)
    _init (config?: RemoteSettings_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bus?: DBusGLib.Connection | null): RemoteSettings
    static newFinish(result: Gio.AsyncResult): RemoteSettings
    static newAsync(bus?: DBusGLib.Connection | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface SecretAgent_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of NMClient-1.0.NMClient.SecretAgent */
    autoRegister?: boolean
    capabilities?: SecretAgentCapabilities
    identifier?: string
}
class SecretAgent {
    /* Properties of NMClient-1.0.NMClient.SecretAgent */
    autoRegister: boolean
    capabilities: SecretAgentCapabilities
    readonly registered: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.SecretAgent */
    deleteSecrets(connection: NetworkManager.Connection, callback: SecretAgentDeleteSecretsFunc): void
    getRegistered(): boolean
    getSecrets(connection: NetworkManager.Connection, settingName: string, hints: string[], flags: SecretAgentGetSecretsFlags, callback: SecretAgentGetSecretsFunc): void
    register(): boolean
    saveSecrets(connection: NetworkManager.Connection, callback: SecretAgentSaveSecretsFunc): void
    unregister(): boolean
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
    /* Signals of NMClient-1.0.NMClient.SecretAgent */
    connect(sigName: "registration-result", callback: ((error?: object | null) => void)): number
    on(sigName: "registration-result", callback: (error?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "registration-result", callback: (error?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "registration-result", callback: (error?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "registration-result", error?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-register", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-register", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-register", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-register", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-register", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::registered", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registered", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SecretAgent_ConstructProps)
    _init (config?: SecretAgent_ConstructProps): void
    static $gtype: GObject.Type
}
interface VPNConnection_ConstructProps extends ActiveConnection_ConstructProps {
}
class VPNConnection {
    /* Properties of NMClient-1.0.NMClient.VPNConnection */
    readonly banner: string
    readonly vpnState: number
    /* Properties of NMClient-1.0.NMClient.ActiveConnection */
    readonly connection: string
    readonly "default": boolean
    readonly default6: boolean
    readonly devices: any
    readonly dhcp4Config: DHCP4Config
    readonly dhcp6Config: DHCP6Config
    readonly id: string
    readonly ip4Config: IP4Config
    readonly ip6Config: IP6Config
    readonly master: string
    readonly specificObject: string
    readonly state: number
    readonly type: string
    readonly uuid: string
    readonly vpn: boolean
    /* Fields of NMClient-1.0.NMClient.ActiveConnection */
    readonly parent: Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.VPNConnection */
    getBanner(): string
    getVpnState(): NetworkManager.VPNConnectionState
    /* Methods of NMClient-1.0.NMClient.ActiveConnection */
    getConnection(): string
    getConnectionType(): string
    getDefault(): boolean
    getDefault6(): boolean
    getDevices(): Device[]
    getDhcp4Config(): DHCP4Config
    getDhcp6Config(): DHCP6Config
    getId(): string
    getIp4Config(): IP4Config
    getIp6Config(): IP6Config
    getMaster(): string
    getSpecificObject(): string
    getState(): NetworkManager.ActiveConnectionState
    getUuid(): string
    getVpn(): boolean
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.VPNConnection */
    connect(sigName: "vpn-state-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "vpn-state-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vpn-state-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vpn-state-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "vpn-state-changed", object: number, p0: number): void
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::banner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::banner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::banner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::banner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::banner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vpn-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpn-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vpn-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vpn-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vpn-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default6", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default6", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::devices", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::devices", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip4-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::master", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::specific-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::specific-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::specific-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::specific-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::specific-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vpn", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpn", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vpn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vpn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vpn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VPNConnection_ConstructProps)
    _init (config?: VPNConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): VPNConnection
    /* Function overloads */
    static new(connection: DBusGLib.Connection, path: string): VPNConnection
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface WimaxNsp_ConstructProps extends Object_ConstructProps {
}
class WimaxNsp {
    /* Properties of NMClient-1.0.NMClient.WimaxNsp */
    readonly name: string
    readonly networkType: number
    readonly signalQuality: number
    /* Fields of NMClient-1.0.NMClient.Object */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NMClient-1.0.NMClient.WimaxNsp */
    connectionValid(connection: NetworkManager.Connection): boolean
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    getName(): string
    getNetworkType(): WimaxNspNetworkType
    getSignalQuality(): number
    /* Methods of NMClient-1.0.NMClient.Object */
    getConnection(): DBusGLib.Connection
    getPath(): string
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of NMClient-1.0.NMClient.Object */
    connect(sigName: "object-creation-failed", callback: ((error?: object | null, failedPath?: object | null) => void)): number
    on(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: (error?: object | null, failedPath?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", error?: object | null, failedPath?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::signal-quality", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signal-quality", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::signal-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::signal-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::signal-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WimaxNsp_ConstructProps)
    _init (config?: WimaxNsp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusGLib.Connection, path: string): WimaxNsp
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class AccessPointClass {
    /* Fields of NMClient-1.0.NMClient.AccessPointClass */
    readonly parent: ObjectClass
    static name: string
}
abstract class ActiveConnectionClass {
    /* Fields of NMClient-1.0.NMClient.ActiveConnectionClass */
    readonly parent: ObjectClass
    static name: string
}
abstract class ClientClass {
    /* Fields of NMClient-1.0.NMClient.ClientClass */
    readonly parent: ObjectClass
    readonly deviceAdded: (client: Client, device: Device) => void
    readonly deviceRemoved: (client: Client, device: Device) => void
    readonly permissionChanged: (client: Client, permission: ClientPermission, result: ClientPermissionResult) => void
    static name: string
}
abstract class DHCP4ConfigClass {
    /* Fields of NMClient-1.0.NMClient.DHCP4ConfigClass */
    readonly parent: ObjectClass
    static name: string
}
abstract class DHCP6ConfigClass {
    /* Fields of NMClient-1.0.NMClient.DHCP6ConfigClass */
    readonly parent: ObjectClass
    static name: string
}
abstract class DeviceAdslClass {
    /* Fields of NMClient-1.0.NMClient.DeviceAdslClass */
    readonly parent: DeviceClass
    static name: string
}
abstract class DeviceBondClass {
    /* Fields of NMClient-1.0.NMClient.DeviceBondClass */
    readonly parent: DeviceClass
    static name: string
}
abstract class DeviceBridgeClass {
    /* Fields of NMClient-1.0.NMClient.DeviceBridgeClass */
    readonly parent: DeviceClass
    static name: string
}
abstract class DeviceBtClass {
    /* Fields of NMClient-1.0.NMClient.DeviceBtClass */
    readonly parent: DeviceClass
    static name: string
}
abstract class DeviceClass {
    /* Fields of NMClient-1.0.NMClient.DeviceClass */
    readonly parent: ObjectClass
    readonly stateChanged: (device: Device, newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason) => void
    readonly connectionCompatible: (device: Device, connection: NetworkManager.Connection) => boolean
    readonly getTypeDescription: (device: Device) => string
    readonly getHwAddress: (device: Device) => string
    readonly getSettingType: (device: Device) => GObject.Type
    static name: string
}
abstract class DeviceEthernetClass {
    /* Fields of NMClient-1.0.NMClient.DeviceEthernetClass */
    readonly parent: DeviceClass
    static name: string
}
abstract class DeviceGenericClass {
    /* Fields of NMClient-1.0.NMClient.DeviceGenericClass */
    readonly parent: DeviceClass
    static name: string
}
abstract class DeviceInfinibandClass {
    /* Fields of NMClient-1.0.NMClient.DeviceInfinibandClass */
    readonly parent: DeviceClass
    static name: string
}
abstract class DeviceModemClass {
    /* Fields of NMClient-1.0.NMClient.DeviceModemClass */
    readonly parent: DeviceClass
    static name: string
}
abstract class DeviceOlpcMeshClass {
    /* Fields of NMClient-1.0.NMClient.DeviceOlpcMeshClass */
    readonly parent: DeviceClass
    static name: string
}
abstract class DeviceTeamClass {
    /* Fields of NMClient-1.0.NMClient.DeviceTeamClass */
    readonly parent: DeviceClass
    static name: string
}
abstract class DeviceVlanClass {
    /* Fields of NMClient-1.0.NMClient.DeviceVlanClass */
    readonly parent: DeviceClass
    static name: string
}
abstract class DeviceWifiClass {
    /* Fields of NMClient-1.0.NMClient.DeviceWifiClass */
    readonly parent: DeviceClass
    readonly accessPointAdded: (device: DeviceWifi, ap: AccessPoint) => void
    readonly accessPointRemoved: (device: DeviceWifi, ap: AccessPoint) => void
    static name: string
}
abstract class DeviceWimaxClass {
    /* Fields of NMClient-1.0.NMClient.DeviceWimaxClass */
    readonly parent: DeviceClass
    readonly nspAdded: (self: DeviceWimax, nsp: WimaxNsp) => void
    readonly nspRemoved: (self: DeviceWimax, nsp: WimaxNsp) => void
    static name: string
}
abstract class IP4ConfigClass {
    /* Fields of NMClient-1.0.NMClient.IP4ConfigClass */
    readonly parent: ObjectClass
    static name: string
}
abstract class IP6ConfigClass {
    /* Fields of NMClient-1.0.NMClient.IP6ConfigClass */
    readonly parent: ObjectClass
    static name: string
}
abstract class ObjectClass {
    /* Fields of NMClient-1.0.NMClient.ObjectClass */
    readonly parent: GObject.ObjectClass
    readonly objectCreationFailed: (masterObject: Object, error: GLib.Error, failedPath: string) => void
    static name: string
}
abstract class RemoteConnectionClass {
    /* Fields of NMClient-1.0.NMClient.RemoteConnectionClass */
    readonly parentClass: NetworkManager.ConnectionClass
    readonly updated: (connection: RemoteConnection, newSettings: GLib.HashTable) => void
    readonly removed: (connection: RemoteConnection) => void
    static name: string
}
abstract class RemoteSettingsClass {
    /* Fields of NMClient-1.0.NMClient.RemoteSettingsClass */
    readonly parent: GObject.ObjectClass
    readonly newConnection: (settings: RemoteSettings, connection: RemoteConnection) => void
    readonly connectionsRead: (settings: RemoteSettings) => void
    static name: string
}
abstract class SecretAgentClass {
    /* Fields of NMClient-1.0.NMClient.SecretAgentClass */
    readonly parent: GObject.ObjectClass
    readonly getSecrets: (self: SecretAgent, connection: NetworkManager.Connection, connectionPath: string, settingName: string, hints: string[], flags: SecretAgentGetSecretsFlags, callback: SecretAgentGetSecretsFunc) => void
    readonly cancelGetSecrets: (self: SecretAgent, connectionPath: string, settingName: string) => void
    readonly saveSecrets: (self: SecretAgent, connection: NetworkManager.Connection, connectionPath: string, callback: SecretAgentSaveSecretsFunc) => void
    readonly deleteSecrets: (self: SecretAgent, connection: NetworkManager.Connection, connectionPath: string, callback: SecretAgentDeleteSecretsFunc) => void
    readonly registrationResult: (agent: SecretAgent, error: GLib.Error) => void
    static name: string
}
abstract class VPNConnectionClass {
    /* Fields of NMClient-1.0.NMClient.VPNConnectionClass */
    readonly parent: ActiveConnectionClass
    readonly vpnStateChanged: (connection: VPNConnection, state: NetworkManager.VPNConnectionState, reason: NetworkManager.VPNConnectionStateReason) => void
    static name: string
}
abstract class WimaxNspClass {
    /* Fields of NMClient-1.0.NMClient.WimaxNspClass */
    readonly parent: ObjectClass
    static name: string
}
    type RemoteConnectionCommitFunc = RemoteConnectionResultFunc
    type RemoteConnectionDeleteFunc = RemoteConnectionResultFunc
}
export default NMClient;