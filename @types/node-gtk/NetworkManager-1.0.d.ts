/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * NetworkManager-1.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type DBusGLib from './DBusGLib-1.0';

export namespace NetworkManager {

enum TODO_80211Mode {
    UNKNOWN,
    ADHOC,
    INFRA,
    AP,
}
enum ActiveConnectionState {
    UNKNOWN,
    ACTIVATING,
    ACTIVATED,
    DEACTIVATING,
    DEACTIVATED,
}
enum ConnectionError {
    UNKNOWNERROR,
    CONNECTIONSETTINGNOTFOUND,
    CONNECTIONTYPEINVALID,
    SETTINGNOTFOUND,
    INVALIDSETTING,
}
enum ConnectivityState {
    UNKNOWN,
    NONE,
    PORTAL,
    LIMITED,
    FULL,
}
enum DeviceState {
    UNKNOWN,
    UNMANAGED,
    UNAVAILABLE,
    DISCONNECTED,
    PREPARE,
    CONFIG,
    NEED_AUTH,
    IP_CONFIG,
    IP_CHECK,
    SECONDARIES,
    ACTIVATED,
    DEACTIVATING,
    FAILED,
}
enum DeviceStateReason {
    NONE,
    UNKNOWN,
    NOW_MANAGED,
    NOW_UNMANAGED,
    CONFIG_FAILED,
    IP_CONFIG_UNAVAILABLE,
    IP_CONFIG_EXPIRED,
    NO_SECRETS,
    SUPPLICANT_DISCONNECT,
    SUPPLICANT_CONFIG_FAILED,
    SUPPLICANT_FAILED,
    SUPPLICANT_TIMEOUT,
    PPP_START_FAILED,
    PPP_DISCONNECT,
    PPP_FAILED,
    DHCP_START_FAILED,
    DHCP_ERROR,
    DHCP_FAILED,
    SHARED_START_FAILED,
    SHARED_FAILED,
    AUTOIP_START_FAILED,
    AUTOIP_ERROR,
    AUTOIP_FAILED,
    MODEM_BUSY,
    MODEM_NO_DIAL_TONE,
    MODEM_NO_CARRIER,
    MODEM_DIAL_TIMEOUT,
    MODEM_DIAL_FAILED,
    MODEM_INIT_FAILED,
    GSM_APN_FAILED,
    GSM_REGISTRATION_NOT_SEARCHING,
    GSM_REGISTRATION_DENIED,
    GSM_REGISTRATION_TIMEOUT,
    GSM_REGISTRATION_FAILED,
    GSM_PIN_CHECK_FAILED,
    FIRMWARE_MISSING,
    REMOVED,
    SLEEPING,
    CONNECTION_REMOVED,
    USER_REQUESTED,
    CARRIER,
    CONNECTION_ASSUMED,
    SUPPLICANT_AVAILABLE,
    MODEM_NOT_FOUND,
    BT_FAILED,
    GSM_SIM_NOT_INSERTED,
    GSM_SIM_PIN_REQUIRED,
    GSM_SIM_PUK_REQUIRED,
    GSM_SIM_WRONG,
    INFINIBAND_MODE,
    DEPENDENCY_FAILED,
    BR2684_FAILED,
    MODEM_MANAGER_UNAVAILABLE,
    SSID_NOT_FOUND,
    SECONDARY_CONNECTION_FAILED,
    DCB_FCOE_FAILED,
    TEAMD_CONTROL_FAILED,
    MODEM_FAILED,
    MODEM_AVAILABLE,
    SIM_PIN_INCORRECT,
    NEW_ACTIVATION,
    PARENT_CHANGED,
    PARENT_MANAGED_CHANGED,
    LAST,
}
enum DeviceType {
    UNKNOWN,
    ETHERNET,
    WIFI,
    UNUSED1,
    UNUSED2,
    BT,
    OLPC_MESH,
    WIMAX,
    MODEM,
    INFINIBAND,
    BOND,
    VLAN,
    ADSL,
    BRIDGE,
    GENERIC,
    TEAM,
    TUN,
    IP_TUNNEL,
    MACVLAN,
    VXLAN,
    VETH,
}
enum Setting8021xCKFormat {
    UNKNOWN,
    X509,
    RAW_KEY,
    PKCS12,
}
enum Setting8021xCKScheme {
    UNKNOWN,
    BLOB,
    PATH,
}
enum Setting8021xError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingAdslError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingBluetoothError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    TYPESETTINGNOTFOUND,
}
enum SettingBondError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    INVALIDOPTION,
    MISSINGOPTION,
}
enum SettingBridgeError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingBridgePortError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingCdmaError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSINGSERIALSETTING,
}
enum SettingCompareFlags {
    EXACT,
    FUZZY,
    IGNORE_ID,
    IGNORE_SECRETS,
    IGNORE_AGENT_OWNED_SECRETS,
    IGNORE_NOT_SAVED_SECRETS,
    DIFF_RESULT_WITH_DEFAULT,
    DIFF_RESULT_NO_DEFAULT,
}
enum SettingConnectionError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    TYPESETTINGNOTFOUND,
    IPCONFIGNOTALLOWED,
}
enum SettingDcbError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingDcbFlags {
    NONE,
    ENABLE,
    ADVERTISE,
    WILLING,
}
enum SettingDiffResult {
    UNKNOWN,
    IN_A,
    IN_B,
    IN_A_DEFAULT,
    IN_B_DEFAULT,
}
enum SettingError {
    UNKNOWNERROR,
    PROPERTYNOTFOUND,
    PROPERTYNOTSECRET,
    PROPERTYTYPEMISMATCH,
}
enum SettingGenericError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingGsmError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSINGSERIALSETTING,
}
enum SettingGsmNetworkBand {
    UNKNOWN,
    ANY,
    EGSM,
    DCS,
    PCS,
    G850,
    U2100,
    U1800,
    U17IV,
    U800,
    U850,
    U900,
    U17IX,
    U1900,
    U2600,
}
enum SettingGsmNetworkType {
    ANY,
    UMTS_HSPA,
    GPRS_EDGE,
    PREFER_UMTS_HSPA,
    PREFER_GPRS_EDGE,
    PREFER_4G,
    TODO_4G,
}
enum SettingHashFlags {
    ALL,
    NO_SECRETS,
    ONLY_SECRETS,
}
enum SettingIP4ConfigError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    NOTALLOWEDFORMETHOD,
}
enum SettingIP6ConfigError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    NOTALLOWEDFORMETHOD,
}
enum SettingIP6ConfigPrivacy {
    UNKNOWN,
    DISABLED,
    PREFER_PUBLIC_ADDR,
    PREFER_TEMP_ADDR,
}
enum SettingInfinibandError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingOlpcMeshError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingPPPError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    REQUIREMPPENOTALLOWED,
}
enum SettingPPPOEError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSINGPPPSETTING,
}
enum SettingSecretFlags {
    NONE,
    AGENT_OWNED,
    NOT_SAVED,
    NOT_REQUIRED,
}
enum SettingSerialError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSINGPPPSETTING,
}
enum SettingTeamError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingTeamPortError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingVlanError {
    UNKNOWN,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    INVALIDPARENT,
}
enum SettingVpnError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingWimaxError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingWiredError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
}
enum SettingWirelessError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSINGSECURITYSETTING,
    CHANNELREQUIRESBAND,
}
enum SettingWirelessSecurityError {
    UNKNOWNERROR,
    INVALIDPROPERTY,
    MISSINGPROPERTY,
    MISSING8021XSETTING,
    LEAPREQUIRES8021X,
    LEAPREQUIRESUSERNAME,
    SHAREDKEYREQUIRESWEP,
}
enum State {
    UNKNOWN,
    ASLEEP,
    DISCONNECTED,
    DISCONNECTING,
    CONNECTING,
    CONNECTED_LOCAL,
    CONNECTED_SITE,
    CONNECTED_GLOBAL,
}
enum UtilsSecurityType {
    INVALID,
    NONE,
    STATIC_WEP,
    LEAP,
    DYNAMIC_WEP,
    WPA_PSK,
    WPA_ENTERPRISE,
    WPA2_PSK,
    WPA2_ENTERPRISE,
}
enum VPNConnectionState {
    UNKNOWN,
    PREPARE,
    NEED_AUTH,
    CONNECT,
    IP_CONFIG_GET,
    ACTIVATED,
    FAILED,
    DISCONNECTED,
}
enum VPNConnectionStateReason {
    UNKNOWN,
    NONE,
    USER_DISCONNECTED,
    DEVICE_DISCONNECTED,
    SERVICE_STOPPED,
    IP_CONFIG_INVALID,
    CONNECT_TIMEOUT,
    SERVICE_START_TIMEOUT,
    SERVICE_START_FAILED,
    NO_SECRETS,
    LOGIN_FAILED,
    CONNECTION_REMOVED,
}
enum VPNPluginFailure {
    LOGIN_FAILED,
    CONNECT_FAILED,
    BAD_IP_CONFIG,
}
enum VPNServiceState {
    UNKNOWN,
    INIT,
    SHUTDOWN,
    STARTING,
    STARTED,
    STOPPING,
    STOPPED,
}
enum VlanFlags {
    REORDER_HEADERS,
    GVRP,
    LOOSE_BINDING,
    MVRP,
}
enum VlanPriorityMap {
    INGRESS_MAP,
    EGRESS_MAP,
}
enum WepKeyType {
    UNKNOWN,
    KEY,
    PASSPHRASE,
    LAST,
}
enum TODO_80211ApFlags {
    NONE,
    PRIVACY,
}
enum TODO_80211ApSecurityFlags {
    NONE,
    PAIR_WEP40,
    PAIR_WEP104,
    PAIR_TKIP,
    PAIR_CCMP,
    GROUP_WEP40,
    GROUP_WEP104,
    GROUP_TKIP,
    GROUP_CCMP,
    KEY_MGMT_PSK,
    KEY_MGMT_802_1X,
}
enum BluetoothCapabilities {
    NONE,
    DUN,
    NAP,
}
enum DeviceCapabilities {
    NONE,
    NM_SUPPORTED,
    CARRIER_DETECT,
    IS_SOFTWARE,
}
enum DeviceModemCapabilities {
    NONE,
    POTS,
    CDMA_EVDO,
    GSM_UMTS,
    LTE,
}
enum DeviceWifiCapabilities {
    NONE,
    CIPHER_WEP40,
    CIPHER_WEP104,
    CIPHER_TKIP,
    CIPHER_CCMP,
    WPA,
    RSN,
    AP,
    ADHOC,
    FREQ_VALID,
    FREQ_2GHZ,
    FREQ_5GHZ,
}
const CONNECTION_CHANGED: string
const CONNECTION_NORMALIZE_PARAM_IP6_CONFIG_METHOD: string
const CONNECTION_PATH: string
const CONNECTION_SECRETS_CLEARED: string
const CONNECTION_SECRETS_UPDATED: string
const DBUS_IFACE_SETTINGS: string
const DBUS_IFACE_SETTINGS_CONNECTION: string
const DBUS_IFACE_SETTINGS_CONNECTION_SECRETS: string
const DBUS_INTERFACE: string
const DBUS_INTERFACE_VPN: string
const DBUS_INTERFACE_VPN_CONNECTION: string
const DBUS_INVALID_VPN_CONNECTION: string
const DBUS_NO_ACTIVE_VPN_CONNECTION: string
const DBUS_NO_VPN_CONNECTIONS: string
const DBUS_PATH: string
const DBUS_PATH_AGENT_MANAGER: string
const DBUS_PATH_SECRET_AGENT: string
const DBUS_PATH_SETTINGS: string
const DBUS_PATH_SETTINGS_CONNECTION: string
const DBUS_PATH_VPN: string
const DBUS_PATH_VPN_CONNECTION: string
const DBUS_SERVICE: string
const DBUS_VPN_ALREADY_STARTED: string
const DBUS_VPN_ALREADY_STOPPED: string
const DBUS_VPN_BAD_ARGUMENTS: string
const DBUS_VPN_ERROR_PREFIX: string
const DBUS_VPN_INTERACTIVE_NOT_SUPPORTED: string
const DBUS_VPN_SIGNAL_CONNECT_FAILED: string
const DBUS_VPN_SIGNAL_IP4_CONFIG: string
const DBUS_VPN_SIGNAL_IP_CONFIG_BAD: string
const DBUS_VPN_SIGNAL_LAUNCH_FAILED: string
const DBUS_VPN_SIGNAL_LOGIN_BANNER: string
const DBUS_VPN_SIGNAL_LOGIN_FAILED: string
const DBUS_VPN_SIGNAL_STATE_CHANGE: string
const DBUS_VPN_SIGNAL_VPN_CONFIG_BAD: string
const DBUS_VPN_STARTING_IN_PROGRESS: string
const DBUS_VPN_STOPPING_IN_PROGRESS: string
const DBUS_VPN_WRONG_STATE: string
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const SETTING_802_1X_ALTSUBJECT_MATCHES: string
const SETTING_802_1X_ANONYMOUS_IDENTITY: string
const SETTING_802_1X_CA_CERT: string
const SETTING_802_1X_CA_PATH: string
const SETTING_802_1X_CLIENT_CERT: string
const SETTING_802_1X_EAP: string
const SETTING_802_1X_IDENTITY: string
const SETTING_802_1X_PAC_FILE: string
const SETTING_802_1X_PASSWORD: string
const SETTING_802_1X_PASSWORD_FLAGS: string
const SETTING_802_1X_PASSWORD_RAW: string
const SETTING_802_1X_PASSWORD_RAW_FLAGS: string
const SETTING_802_1X_PHASE1_FAST_PROVISIONING: string
const SETTING_802_1X_PHASE1_PEAPLABEL: string
const SETTING_802_1X_PHASE1_PEAPVER: string
const SETTING_802_1X_PHASE2_ALTSUBJECT_MATCHES: string
const SETTING_802_1X_PHASE2_AUTH: string
const SETTING_802_1X_PHASE2_AUTHEAP: string
const SETTING_802_1X_PHASE2_CA_CERT: string
const SETTING_802_1X_PHASE2_CA_PATH: string
const SETTING_802_1X_PHASE2_CLIENT_CERT: string
const SETTING_802_1X_PHASE2_PRIVATE_KEY: string
const SETTING_802_1X_PHASE2_PRIVATE_KEY_PASSWORD: string
const SETTING_802_1X_PHASE2_PRIVATE_KEY_PASSWORD_FLAGS: string
const SETTING_802_1X_PHASE2_SUBJECT_MATCH: string
const SETTING_802_1X_PIN: string
const SETTING_802_1X_PIN_FLAGS: string
const SETTING_802_1X_PRIVATE_KEY: string
const SETTING_802_1X_PRIVATE_KEY_PASSWORD: string
const SETTING_802_1X_PRIVATE_KEY_PASSWORD_FLAGS: string
const SETTING_802_1X_SETTING_NAME: string
const SETTING_802_1X_SUBJECT_MATCH: string
const SETTING_802_1X_SYSTEM_CA_CERTS: string
const SETTING_ADSL_ENCAPSULATION: string
const SETTING_ADSL_ENCAPSULATION_LLC: string
const SETTING_ADSL_ENCAPSULATION_VCMUX: string
const SETTING_ADSL_PASSWORD: string
const SETTING_ADSL_PASSWORD_FLAGS: string
const SETTING_ADSL_PROTOCOL: string
const SETTING_ADSL_PROTOCOL_IPOATM: string
const SETTING_ADSL_PROTOCOL_PPPOA: string
const SETTING_ADSL_PROTOCOL_PPPOE: string
const SETTING_ADSL_SETTING_NAME: string
const SETTING_ADSL_USERNAME: string
const SETTING_ADSL_VCI: string
const SETTING_ADSL_VPI: string
const SETTING_BLUETOOTH_BDADDR: string
const SETTING_BLUETOOTH_SETTING_NAME: string
const SETTING_BLUETOOTH_TYPE: string
const SETTING_BLUETOOTH_TYPE_DUN: string
const SETTING_BLUETOOTH_TYPE_PANU: string
const SETTING_BOND_INTERFACE_NAME: string
const SETTING_BOND_OPTIONS: string
const SETTING_BOND_OPTION_AD_SELECT: string
const SETTING_BOND_OPTION_ARP_INTERVAL: string
const SETTING_BOND_OPTION_ARP_IP_TARGET: string
const SETTING_BOND_OPTION_ARP_VALIDATE: string
const SETTING_BOND_OPTION_DOWNDELAY: string
const SETTING_BOND_OPTION_FAIL_OVER_MAC: string
const SETTING_BOND_OPTION_LACP_RATE: string
const SETTING_BOND_OPTION_MIIMON: string
const SETTING_BOND_OPTION_MODE: string
const SETTING_BOND_OPTION_PRIMARY: string
const SETTING_BOND_OPTION_PRIMARY_RESELECT: string
const SETTING_BOND_OPTION_RESEND_IGMP: string
const SETTING_BOND_OPTION_UPDELAY: string
const SETTING_BOND_OPTION_USE_CARRIER: string
const SETTING_BOND_OPTION_XMIT_HASH_POLICY: string
const SETTING_BOND_SETTING_NAME: string
const SETTING_BRIDGE_AGEING_TIME: string
const SETTING_BRIDGE_FORWARD_DELAY: string
const SETTING_BRIDGE_HELLO_TIME: string
const SETTING_BRIDGE_INTERFACE_NAME: string
const SETTING_BRIDGE_MAC_ADDRESS: string
const SETTING_BRIDGE_MAX_AGE: string
const SETTING_BRIDGE_PORT_HAIRPIN_MODE: string
const SETTING_BRIDGE_PORT_PATH_COST: string
const SETTING_BRIDGE_PORT_PRIORITY: string
const SETTING_BRIDGE_PORT_SETTING_NAME: string
const SETTING_BRIDGE_PRIORITY: string
const SETTING_BRIDGE_SETTING_NAME: string
const SETTING_BRIDGE_STP: string
const SETTING_CDMA_NUMBER: string
const SETTING_CDMA_PASSWORD: string
const SETTING_CDMA_PASSWORD_FLAGS: string
const SETTING_CDMA_SETTING_NAME: string
const SETTING_CDMA_USERNAME: string
const SETTING_CONNECTION_AUTOCONNECT: string
const SETTING_CONNECTION_GATEWAY_PING_TIMEOUT: string
const SETTING_CONNECTION_ID: string
const SETTING_CONNECTION_INTERFACE_NAME: string
const SETTING_CONNECTION_MASTER: string
const SETTING_CONNECTION_PERMISSIONS: string
const SETTING_CONNECTION_READ_ONLY: string
const SETTING_CONNECTION_SECONDARIES: string
const SETTING_CONNECTION_SETTING_NAME: string
const SETTING_CONNECTION_SLAVE_TYPE: string
const SETTING_CONNECTION_TIMESTAMP: string
const SETTING_CONNECTION_TYPE: string
const SETTING_CONNECTION_UUID: string
const SETTING_CONNECTION_ZONE: string
const SETTING_DCB_APP_FCOE_FLAGS: string
const SETTING_DCB_APP_FCOE_MODE: string
const SETTING_DCB_APP_FCOE_PRIORITY: string
const SETTING_DCB_APP_FIP_FLAGS: string
const SETTING_DCB_APP_FIP_PRIORITY: string
const SETTING_DCB_APP_ISCSI_FLAGS: string
const SETTING_DCB_APP_ISCSI_PRIORITY: string
const SETTING_DCB_FCOE_MODE_FABRIC: string
const SETTING_DCB_FCOE_MODE_VN2VN: string
const SETTING_DCB_PRIORITY_BANDWIDTH: string
const SETTING_DCB_PRIORITY_FLOW_CONTROL: string
const SETTING_DCB_PRIORITY_FLOW_CONTROL_FLAGS: string
const SETTING_DCB_PRIORITY_GROUP_BANDWIDTH: string
const SETTING_DCB_PRIORITY_GROUP_FLAGS: string
const SETTING_DCB_PRIORITY_GROUP_ID: string
const SETTING_DCB_PRIORITY_STRICT_BANDWIDTH: string
const SETTING_DCB_PRIORITY_TRAFFIC_CLASS: string
const SETTING_DCB_SETTING_NAME: string
const SETTING_GENERIC_SETTING_NAME: string
const SETTING_GSM_ALLOWED_BANDS: string
const SETTING_GSM_APN: string
const SETTING_GSM_BANDS_MAX: number
const SETTING_GSM_HOME_ONLY: string
const SETTING_GSM_NETWORK_ID: string
const SETTING_GSM_NETWORK_TYPE: string
const SETTING_GSM_NUMBER: string
const SETTING_GSM_PASSWORD: string
const SETTING_GSM_PASSWORD_FLAGS: string
const SETTING_GSM_PIN: string
const SETTING_GSM_PIN_FLAGS: string
const SETTING_GSM_SETTING_NAME: string
const SETTING_GSM_USERNAME: string
const SETTING_INFINIBAND_MAC_ADDRESS: string
const SETTING_INFINIBAND_MTU: string
const SETTING_INFINIBAND_PARENT: string
const SETTING_INFINIBAND_P_KEY: string
const SETTING_INFINIBAND_SETTING_NAME: string
const SETTING_INFINIBAND_TRANSPORT_MODE: string
const SETTING_IP4_CONFIG_ADDRESSES: string
const SETTING_IP4_CONFIG_DHCP_CLIENT_ID: string
const SETTING_IP4_CONFIG_DHCP_HOSTNAME: string
const SETTING_IP4_CONFIG_DHCP_SEND_HOSTNAME: string
const SETTING_IP4_CONFIG_DHCP_TIMEOUT: string
const SETTING_IP4_CONFIG_DNS: string
const SETTING_IP4_CONFIG_DNS_SEARCH: string
const SETTING_IP4_CONFIG_IGNORE_AUTO_DNS: string
const SETTING_IP4_CONFIG_IGNORE_AUTO_ROUTES: string
const SETTING_IP4_CONFIG_MAY_FAIL: string
const SETTING_IP4_CONFIG_METHOD: string
const SETTING_IP4_CONFIG_METHOD_AUTO: string
const SETTING_IP4_CONFIG_METHOD_DISABLED: string
const SETTING_IP4_CONFIG_METHOD_LINK_LOCAL: string
const SETTING_IP4_CONFIG_METHOD_MANUAL: string
const SETTING_IP4_CONFIG_METHOD_SHARED: string
const SETTING_IP4_CONFIG_NEVER_DEFAULT: string
const SETTING_IP4_CONFIG_ROUTES: string
const SETTING_IP4_CONFIG_ROUTE_METRIC: string
const SETTING_IP4_CONFIG_SETTING_NAME: string
const SETTING_IP6_CONFIG_ADDRESSES: string
const SETTING_IP6_CONFIG_DHCP_HOSTNAME: string
const SETTING_IP6_CONFIG_DNS: string
const SETTING_IP6_CONFIG_DNS_SEARCH: string
const SETTING_IP6_CONFIG_IGNORE_AUTO_DNS: string
const SETTING_IP6_CONFIG_IGNORE_AUTO_ROUTES: string
const SETTING_IP6_CONFIG_IP6_PRIVACY: string
const SETTING_IP6_CONFIG_MAY_FAIL: string
const SETTING_IP6_CONFIG_METHOD: string
const SETTING_IP6_CONFIG_METHOD_AUTO: string
const SETTING_IP6_CONFIG_METHOD_DHCP: string
const SETTING_IP6_CONFIG_METHOD_IGNORE: string
const SETTING_IP6_CONFIG_METHOD_LINK_LOCAL: string
const SETTING_IP6_CONFIG_METHOD_MANUAL: string
const SETTING_IP6_CONFIG_METHOD_SHARED: string
const SETTING_IP6_CONFIG_NEVER_DEFAULT: string
const SETTING_IP6_CONFIG_ROUTES: string
const SETTING_IP6_CONFIG_ROUTE_METRIC: string
const SETTING_IP6_CONFIG_SETTING_NAME: string
const SETTING_NAME: string
const SETTING_OLPC_MESH_CHANNEL: string
const SETTING_OLPC_MESH_DHCP_ANYCAST_ADDRESS: string
const SETTING_OLPC_MESH_SETTING_NAME: string
const SETTING_OLPC_MESH_SSID: string
const SETTING_PARAM_FUZZY_IGNORE: number
const SETTING_PARAM_REQUIRED: number
const SETTING_PARAM_SECRET: number
const SETTING_PARAM_SERIALIZE: number
const SETTING_PPPOE_PASSWORD: string
const SETTING_PPPOE_PASSWORD_FLAGS: string
const SETTING_PPPOE_SERVICE: string
const SETTING_PPPOE_SETTING_NAME: string
const SETTING_PPPOE_USERNAME: string
const SETTING_PPP_BAUD: string
const SETTING_PPP_CRTSCTS: string
const SETTING_PPP_LCP_ECHO_FAILURE: string
const SETTING_PPP_LCP_ECHO_INTERVAL: string
const SETTING_PPP_MPPE_STATEFUL: string
const SETTING_PPP_MRU: string
const SETTING_PPP_MTU: string
const SETTING_PPP_NOAUTH: string
const SETTING_PPP_NOBSDCOMP: string
const SETTING_PPP_NODEFLATE: string
const SETTING_PPP_NO_VJ_COMP: string
const SETTING_PPP_REFUSE_CHAP: string
const SETTING_PPP_REFUSE_EAP: string
const SETTING_PPP_REFUSE_MSCHAP: string
const SETTING_PPP_REFUSE_MSCHAPV2: string
const SETTING_PPP_REFUSE_PAP: string
const SETTING_PPP_REQUIRE_MPPE: string
const SETTING_PPP_REQUIRE_MPPE_128: string
const SETTING_PPP_SETTING_NAME: string
const SETTING_SERIAL_BAUD: string
const SETTING_SERIAL_BITS: string
const SETTING_SERIAL_PARITY: string
const SETTING_SERIAL_SEND_DELAY: string
const SETTING_SERIAL_SETTING_NAME: string
const SETTING_SERIAL_STOPBITS: string
const SETTING_TEAM_CONFIG: string
const SETTING_TEAM_INTERFACE_NAME: string
const SETTING_TEAM_PORT_CONFIG: string
const SETTING_TEAM_PORT_SETTING_NAME: string
const SETTING_TEAM_SETTING_NAME: string
const SETTING_VLAN_EGRESS_PRIORITY_MAP: string
const SETTING_VLAN_FLAGS: string
const SETTING_VLAN_ID: string
const SETTING_VLAN_INGRESS_PRIORITY_MAP: string
const SETTING_VLAN_INTERFACE_NAME: string
const SETTING_VLAN_PARENT: string
const SETTING_VLAN_SETTING_NAME: string
const SETTING_VPN_DATA: string
const SETTING_VPN_PERSISTENT: string
const SETTING_VPN_SECRETS: string
const SETTING_VPN_SERVICE_TYPE: string
const SETTING_VPN_SETTING_NAME: string
const SETTING_VPN_USER_NAME: string
const SETTING_WIMAX_MAC_ADDRESS: string
const SETTING_WIMAX_NETWORK_NAME: string
const SETTING_WIMAX_SETTING_NAME: string
const SETTING_WIRED_AUTO_NEGOTIATE: string
const SETTING_WIRED_CLONED_MAC_ADDRESS: string
const SETTING_WIRED_DUPLEX: string
const SETTING_WIRED_MAC_ADDRESS: string
const SETTING_WIRED_MAC_ADDRESS_BLACKLIST: string
const SETTING_WIRED_MTU: string
const SETTING_WIRED_PORT: string
const SETTING_WIRED_S390_NETTYPE: string
const SETTING_WIRED_S390_OPTIONS: string
const SETTING_WIRED_S390_SUBCHANNELS: string
const SETTING_WIRED_SETTING_NAME: string
const SETTING_WIRED_SPEED: string
const SETTING_WIRELESS_BAND: string
const SETTING_WIRELESS_BSSID: string
const SETTING_WIRELESS_CHANNEL: string
const SETTING_WIRELESS_CLONED_MAC_ADDRESS: string
const SETTING_WIRELESS_HIDDEN: string
const SETTING_WIRELESS_MAC_ADDRESS: string
const SETTING_WIRELESS_MAC_ADDRESS_BLACKLIST: string
const SETTING_WIRELESS_MODE: string
const SETTING_WIRELESS_MODE_ADHOC: string
const SETTING_WIRELESS_MODE_AP: string
const SETTING_WIRELESS_MODE_INFRA: string
const SETTING_WIRELESS_MTU: string
const SETTING_WIRELESS_POWERSAVE: string
const SETTING_WIRELESS_RATE: string
const SETTING_WIRELESS_SEC: string
const SETTING_WIRELESS_SECURITY_AUTH_ALG: string
const SETTING_WIRELESS_SECURITY_GROUP: string
const SETTING_WIRELESS_SECURITY_KEY_MGMT: string
const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD: string
const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD_FLAGS: string
const SETTING_WIRELESS_SECURITY_LEAP_USERNAME: string
const SETTING_WIRELESS_SECURITY_PAIRWISE: string
const SETTING_WIRELESS_SECURITY_PROTO: string
const SETTING_WIRELESS_SECURITY_PSK: string
const SETTING_WIRELESS_SECURITY_PSK_FLAGS: string
const SETTING_WIRELESS_SECURITY_SETTING_NAME: string
const SETTING_WIRELESS_SECURITY_WEP_KEY0: string
const SETTING_WIRELESS_SECURITY_WEP_KEY1: string
const SETTING_WIRELESS_SECURITY_WEP_KEY2: string
const SETTING_WIRELESS_SECURITY_WEP_KEY3: string
const SETTING_WIRELESS_SECURITY_WEP_KEY_FLAGS: string
const SETTING_WIRELESS_SECURITY_WEP_KEY_TYPE: string
const SETTING_WIRELESS_SECURITY_WEP_TX_KEYIDX: string
const SETTING_WIRELESS_SEEN_BSSIDS: string
const SETTING_WIRELESS_SETTING_NAME: string
const SETTING_WIRELESS_SSID: string
const SETTING_WIRELESS_TX_POWER: string
const UTILS_HWADDR_LEN_MAX: number
const VLAN_FLAGS_ALL: number
const VPN_DBUS_PLUGIN_INTERFACE: string
const VPN_DBUS_PLUGIN_PATH: string
const VPN_PLUGIN_CAN_PERSIST: string
const VPN_PLUGIN_CONFIG_BANNER: string
const VPN_PLUGIN_CONFIG_EXT_GATEWAY: string
const VPN_PLUGIN_CONFIG_HAS_IP4: string
const VPN_PLUGIN_CONFIG_HAS_IP6: string
const VPN_PLUGIN_CONFIG_MTU: string
const VPN_PLUGIN_CONFIG_TUNDEV: string
const VPN_PLUGIN_IP4_CONFIG_ADDRESS: string
const VPN_PLUGIN_IP4_CONFIG_DNS: string
const VPN_PLUGIN_IP4_CONFIG_DOMAIN: string
const VPN_PLUGIN_IP4_CONFIG_DOMAINS: string
const VPN_PLUGIN_IP4_CONFIG_INT_GATEWAY: string
const VPN_PLUGIN_IP4_CONFIG_MSS: string
const VPN_PLUGIN_IP4_CONFIG_NBNS: string
const VPN_PLUGIN_IP4_CONFIG_NEVER_DEFAULT: string
const VPN_PLUGIN_IP4_CONFIG_PREFIX: string
const VPN_PLUGIN_IP4_CONFIG_PTP: string
const VPN_PLUGIN_IP4_CONFIG_ROUTES: string
const VPN_PLUGIN_IP6_CONFIG_ADDRESS: string
const VPN_PLUGIN_IP6_CONFIG_DNS: string
const VPN_PLUGIN_IP6_CONFIG_DOMAIN: string
const VPN_PLUGIN_IP6_CONFIG_DOMAINS: string
const VPN_PLUGIN_IP6_CONFIG_INT_GATEWAY: string
const VPN_PLUGIN_IP6_CONFIG_MSS: string
const VPN_PLUGIN_IP6_CONFIG_NEVER_DEFAULT: string
const VPN_PLUGIN_IP6_CONFIG_PREFIX: string
const VPN_PLUGIN_IP6_CONFIG_PTP: string
const VPN_PLUGIN_IP6_CONFIG_ROUTES: string
function connectionErrorQuark(): GLib.Quark
function setting8021xErrorQuark(): GLib.Quark
function settingAdslErrorQuark(): GLib.Quark
function settingBluetoothErrorQuark(): GLib.Quark
function settingBondErrorQuark(): GLib.Quark
function settingBridgeErrorQuark(): GLib.Quark
function settingBridgePortErrorQuark(): GLib.Quark
function settingCdmaErrorQuark(): GLib.Quark
function settingConnectionErrorQuark(): GLib.Quark
function settingDcbErrorQuark(): GLib.Quark
function settingErrorQuark(): GLib.Quark
function settingGenericErrorQuark(): GLib.Quark
function settingGsmErrorQuark(): GLib.Quark
function settingInfinibandErrorQuark(): GLib.Quark
function settingIp4ConfigErrorQuark(): GLib.Quark
function settingIp6ConfigErrorQuark(): GLib.Quark
function settingOlpcMeshErrorQuark(): GLib.Quark
function settingPppErrorQuark(): GLib.Quark
function settingPppoeErrorQuark(): GLib.Quark
function settingSerialErrorQuark(): GLib.Quark
function settingTeamErrorQuark(): GLib.Quark
function settingTeamPortErrorQuark(): GLib.Quark
function settingVlanErrorQuark(): GLib.Quark
function settingVpnErrorQuark(): GLib.Quark
function settingWimaxErrorQuark(): GLib.Quark
function settingWiredErrorQuark(): GLib.Quark
function settingWirelessErrorQuark(): GLib.Quark
function settingWirelessSecurityErrorQuark(): GLib.Quark
function utilsApModeSecurityValid(type: UtilsSecurityType, wifiCaps: DeviceWifiCapabilities): boolean
function utilsBin2hexstr(bytes: string, len: number, finalLen: number): string
function utilsCheckVirtualDeviceCompatibility(virtualType: GObject.Type, otherType: GObject.Type): boolean
function utilsDeinit(): void
function utilsEscapeSsid(ssid: number, len: number): string
function utilsFileIsPkcs12(filename: string): boolean
function utilsFileSearchInPaths(progname: string, tryFirst: string | null, paths: string | null, fileTestFlags: GLib.FileTest, predicate: UtilsFileSearchInPathsPredicate): string
function utilsGvalueHashDup(hash: GLib.HashTable): GLib.HashTable
function utilsHex2byte(hex: string): number
function utilsHexstr2bin(hex: string, len: number): string
function utilsHwaddrAtoba(asc: string, type: number): Uint8Array
function utilsHwaddrAton(asc: string, type: number, buffer?: object | null): number
function utilsHwaddrAtonLen(asc: string, buffer: object | null, length: number): number
function utilsHwaddrLen(type: number): number
function utilsHwaddrNtoa(addr: object | null, type: number): string
function utilsHwaddrNtoaLen(addr: object | null, length: number): string
function utilsHwaddrType(len: number): number
function utilsHwaddrValid(asc: string): boolean
function utilsIfaceValidName(name: string): boolean
function utilsInit(): boolean
function utilsIp4AddressesFromGvalue(value: any): IP4Address[]
function utilsIp4AddressesToGvalue(list: IP4Address[], value: any): void
function utilsIp4GetDefaultPrefix(ip: number): number
function utilsIp4NetmaskToPrefix(netmask: number): number
function utilsIp4PrefixToNetmask(prefix: number): number
function utilsIp4RoutesFromGvalue(value: any): IP4Route[]
function utilsIp4RoutesToGvalue(list: IP4Route[], value: any): void
function utilsIp6AddressesFromGvalue(value: any): IP6Address[]
function utilsIp6AddressesToGvalue(list: IP6Address[], value: any): void
function utilsIp6RoutesFromGvalue(value: any): IP6Route[]
function utilsIp6RoutesToGvalue(list: IP6Route[], value: any): void
function utilsIsEmptySsid(ssid: number, len: number): boolean
function utilsIsUuid(str: string): boolean
function utilsRsaKeyEncrypt(data: Uint8Array, inPassword?: string | null): [ /* returnType */ Uint8Array, /* outPassword */ string | null ]
function utilsRsaKeyEncryptAes(data: Uint8Array, inPassword?: string | null): [ /* returnType */ Uint8Array, /* outPassword */ string | null ]
function utilsSameSsid(ssid1: Uint8Array, ssid2: Uint8Array, ignoreTrailingNull: boolean): boolean
function utilsSecurityValid(type: UtilsSecurityType, wifiCaps: DeviceWifiCapabilities, haveAp: boolean, adhoc: boolean, apFlags: TODO_80211ApFlags, apWpa: TODO_80211ApSecurityFlags, apRsn: TODO_80211ApSecurityFlags): boolean
function utilsSsidToUtf8(ssid: Uint8Array): string
function utilsUuidGenerate(): string
function utilsUuidGenerateFromString(s: string): string
function utilsWepKeyValid(key: string, wepType: WepKeyType): boolean
function utilsWifiChannelToFreq(channel: number, band: string): number
function utilsWifiFindNextChannel(channel: number, direction: number, band: string): number
function utilsWifiFreqToChannel(freq: number): number
function utilsWifiIsChannelValid(channel: number, band: string): boolean
function utilsWpaPskValid(psk: string): boolean
interface SettingClearSecretsWithFlagsFn {
    (setting: Setting, secret: string, flags: SettingSecretFlags): boolean
}
interface SettingValueIterFn {
    (setting: Setting, key: string, value: any, flags: GObject.ParamFlags): void
}
interface UtilsFileSearchInPathsPredicate {
    (filename: string): boolean
}
interface VPNIterFunc {
    (key: string, value: string): void
}
interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.Connection */
    path?: string
}
class Connection {
    /* Properties of NetworkManager-1.0.NetworkManager.Connection */
    path: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.Connection */
    addSetting(setting: Setting): void
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Connection, flags: SettingCompareFlags): boolean
    diff(b: Connection, flags: SettingCompareFlags, outSettings: GLib.HashTable): boolean
    dump(): void
    duplicate(): Connection
    forEachSettingValue(func: SettingValueIterFn): void
    getConnectionType(): string
    getId(): string
    getInterfaceName(): string
    getPath(): string
    getSetting(settingType: GObject.Type): Setting
    getSetting8021x(): Setting8021x
    getSettingAdsl(): SettingAdsl
    getSettingBluetooth(): SettingBluetooth
    getSettingBond(): SettingBond
    getSettingBridge(): SettingBridge
    getSettingBridgePort(): SettingBridgePort
    getSettingByName(name: string): Setting
    getSettingCdma(): SettingCdma
    getSettingConnection(): SettingConnection
    getSettingDcb(): SettingDcb
    getSettingGeneric(): SettingGeneric
    getSettingGsm(): SettingGsm
    getSettingInfiniband(): SettingInfiniband
    getSettingIp4Config(): SettingIP4Config
    getSettingIp6Config(): SettingIP6Config
    getSettingOlpcMesh(): SettingOlpcMesh
    getSettingPpp(): SettingPPP
    getSettingPppoe(): SettingPPPOE
    getSettingSerial(): SettingSerial
    getSettingTeam(): SettingTeam
    getSettingTeamPort(): SettingTeamPort
    getSettingVlan(): SettingVlan
    getSettingVpn(): SettingVPN
    getSettingWimax(): SettingWimax
    getSettingWired(): SettingWired
    getSettingWireless(): SettingWireless
    getSettingWirelessSecurity(): SettingWirelessSecurity
    getUuid(): string
    getVirtualDeviceDescription(): string
    getVirtualIfaceName(): string
    isType(type: string): boolean
    needSecrets(): [ /* returnType */ string, /* hints */ string[] | null ]
    normalize(parameters?: GLib.HashTable | null): [ /* returnType */ boolean, /* modified */ boolean | null ]
    removeSetting(settingType: GObject.Type): void
    replaceSettings(newSettings: GLib.HashTable): boolean
    replaceSettingsFromConnection(newConnection: Connection): boolean
    setPath(path: string): void
    toHash(flags: SettingHashFlags): GLib.HashTable
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
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Connection
    static newFromHash(hash: GLib.HashTable): Connection
    static createSetting(name: string): Setting
    static lookupSettingType(name: string): GObject.Type
    static lookupSettingTypeByQuark(errorQuark: GLib.Quark): GObject.Type
    static $gtype: GObject.Type
}
interface Setting_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.Setting */
    name?: string
}
class Setting {
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Setting_ConstructProps)
    _init (config?: Setting_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromHash(settingType: GObject.Type, hash: GLib.HashTable): Setting
    static $gtype: GObject.Type
}
interface Setting8021x_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.Setting8021x */
    anonymousIdentity?: string
    caPath?: string
    identity?: string
    pacFile?: string
    password?: string
    passwordFlags?: number
    passwordRawFlags?: number
    phase1FastProvisioning?: string
    phase1Peaplabel?: string
    phase1Peapver?: string
    phase2Auth?: string
    phase2Autheap?: string
    phase2CaPath?: string
    phase2PrivateKeyPassword?: string
    phase2PrivateKeyPasswordFlags?: number
    phase2SubjectMatch?: string
    pin?: string
    pinFlags?: number
    privateKeyPassword?: string
    privateKeyPasswordFlags?: number
    subjectMatch?: string
    systemCaCerts?: boolean
}
class Setting8021x {
    /* Properties of NetworkManager-1.0.NetworkManager.Setting8021x */
    anonymousIdentity: string
    caPath: string
    identity: string
    pacFile: string
    password: string
    passwordFlags: number
    passwordRawFlags: number
    phase1FastProvisioning: string
    phase1Peaplabel: string
    phase1Peapver: string
    phase2Auth: string
    phase2Autheap: string
    phase2CaPath: string
    phase2PrivateKeyPassword: string
    phase2PrivateKeyPasswordFlags: number
    phase2SubjectMatch: string
    pin: string
    pinFlags: number
    privateKeyPassword: string
    privateKeyPasswordFlags: number
    subjectMatch: string
    systemCaCerts: boolean
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.Setting8021x */
    addAltsubjectMatch(altsubjectMatch: string): boolean
    addEapMethod(eap: string): boolean
    addPhase2AltsubjectMatch(phase2AltsubjectMatch: string): boolean
    clearAltsubjectMatches(): void
    clearEapMethods(): void
    clearPhase2AltsubjectMatches(): void
    getAltsubjectMatch(i: number): string
    getAnonymousIdentity(): string
    getCaCertBlob(): Uint8Array
    getCaCertPath(): string
    getCaCertScheme(): Setting8021xCKScheme
    getCaPath(): string
    getClientCertBlob(): Uint8Array
    getClientCertPath(): string
    getClientCertScheme(): Setting8021xCKScheme
    getEapMethod(i: number): string
    getIdentity(): string
    getNumAltsubjectMatches(): number
    getNumEapMethods(): number
    getNumPhase2AltsubjectMatches(): number
    getPacFile(): string
    getPassword(): string
    getPasswordFlags(): SettingSecretFlags
    getPasswordRaw(): Uint8Array
    getPasswordRawFlags(): SettingSecretFlags
    getPhase1FastProvisioning(): string
    getPhase1Peaplabel(): string
    getPhase1Peapver(): string
    getPhase2AltsubjectMatch(i: number): string
    getPhase2Auth(): string
    getPhase2Autheap(): string
    getPhase2CaCertBlob(): Uint8Array
    getPhase2CaCertPath(): string
    getPhase2CaCertScheme(): Setting8021xCKScheme
    getPhase2CaPath(): string
    getPhase2ClientCertBlob(): Uint8Array
    getPhase2ClientCertPath(): string
    getPhase2ClientCertScheme(): Setting8021xCKScheme
    getPhase2PrivateKeyBlob(): Uint8Array
    getPhase2PrivateKeyFormat(): Setting8021xCKFormat
    getPhase2PrivateKeyPassword(): string
    getPhase2PrivateKeyPasswordFlags(): SettingSecretFlags
    getPhase2PrivateKeyPath(): string
    getPhase2PrivateKeyScheme(): Setting8021xCKScheme
    getPhase2SubjectMatch(): string
    getPin(): string
    getPinFlags(): SettingSecretFlags
    getPrivateKeyBlob(): Uint8Array
    getPrivateKeyFormat(): Setting8021xCKFormat
    getPrivateKeyPassword(): string
    getPrivateKeyPasswordFlags(): SettingSecretFlags
    getPrivateKeyPath(): string
    getPrivateKeyScheme(): Setting8021xCKScheme
    getSubjectMatch(): string
    getSystemCaCerts(): boolean
    removeAltsubjectMatch(i: number): void
    removeAltsubjectMatchByValue(altsubjectMatch: string): boolean
    removeEapMethod(i: number): void
    removeEapMethodByValue(eap: string): boolean
    removePhase2AltsubjectMatch(i: number): void
    removePhase2AltsubjectMatchByValue(phase2AltsubjectMatch: string): boolean
    setCaCert(certPath: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    setClientCert(certPath: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    setPhase2CaCert(certPath: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    setPhase2ClientCert(certPath: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    setPhase2PrivateKey(keyPath: string, password: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    setPrivateKey(keyPath: string, password: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::anonymous-identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anonymous-identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anonymous-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anonymous-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anonymous-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ca-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ca-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pac-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pac-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pac-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pac-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pac-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-raw-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-raw-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-raw-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-raw-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-raw-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase1-fast-provisioning", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase1-fast-provisioning", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase1-fast-provisioning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase1-fast-provisioning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase1-fast-provisioning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase1-peaplabel", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase1-peaplabel", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase1-peaplabel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase1-peaplabel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase1-peaplabel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase1-peapver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase1-peapver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase1-peapver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase1-peapver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase1-peapver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-auth", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-auth", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-autheap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-autheap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-autheap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-autheap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-autheap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-ca-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-ca-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-private-key-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-private-key-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-private-key-password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-private-key-password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-subject-match", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-subject-match", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pin-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::private-key-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::private-key-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::private-key-password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::private-key-password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subject-match", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject-match", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::system-ca-certs", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-ca-certs", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::system-ca-certs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::system-ca-certs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::system-ca-certs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Setting8021x_ConstructProps)
    _init (config?: Setting8021x_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Setting8021x
    static $gtype: GObject.Type
}
interface SettingAdsl_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingAdsl */
    encapsulation?: string
    password?: string
    passwordFlags?: number
    protocol?: string
    username?: string
    vci?: number
    vpi?: number
}
class SettingAdsl {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingAdsl */
    encapsulation: string
    password: string
    passwordFlags: number
    protocol: string
    username: string
    vci: number
    vpi: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingAdsl */
    getEncapsulation(): string
    getPassword(): string
    getPasswordFlags(): SettingSecretFlags
    getProtocol(): string
    getUsername(): string
    getVci(): number
    getVpi(): number
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::encapsulation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encapsulation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encapsulation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encapsulation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encapsulation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vci", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vci", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vci", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vci", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vci", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vpi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vpi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vpi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vpi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingAdsl_ConstructProps)
    _init (config?: SettingAdsl_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingAdsl
    static $gtype: GObject.Type
}
interface SettingBluetooth_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingBluetooth */
    type?: string
}
class SettingBluetooth {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingBluetooth */
    type: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingBluetooth */
    getBdaddr(): Uint8Array
    getConnectionType(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingBluetooth_ConstructProps)
    _init (config?: SettingBluetooth_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBluetooth
    static $gtype: GObject.Type
}
interface SettingBond_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingBond */
    interfaceName?: string
}
class SettingBond {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingBond */
    interfaceName: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingBond */
    addOption(name: string, value: string): boolean
    getInterfaceName(): string
    getNumOptions(): number
    getOption(idx: number): [ /* returnType */ boolean, /* outName */ string, /* outValue */ string ]
    getOptionByName(name: string): string
    getOptionDefault(name: string): string
    getValidOptions(): string[]
    removeOption(name: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingBond_ConstructProps)
    _init (config?: SettingBond_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBond
    static validateOption(name: string, value: string): boolean
    static $gtype: GObject.Type
}
interface SettingBridge_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingBridge */
    ageingTime?: number
    forwardDelay?: number
    helloTime?: number
    interfaceName?: string
    maxAge?: number
    priority?: number
    stp?: boolean
}
class SettingBridge {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingBridge */
    ageingTime: number
    forwardDelay: number
    helloTime: number
    interfaceName: string
    maxAge: number
    priority: number
    stp: boolean
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingBridge */
    getAgeingTime(): number
    getForwardDelay(): number
    getHelloTime(): number
    getInterfaceName(): string
    getMacAddress(): Uint8Array
    getMaxAge(): number
    getPriority(): number
    getStp(): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ageing-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ageing-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ageing-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ageing-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ageing-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::forward-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forward-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::forward-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::forward-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::forward-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hello-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hello-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hello-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hello-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hello-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-age", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-age", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingBridge_ConstructProps)
    _init (config?: SettingBridge_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBridge
    static $gtype: GObject.Type
}
interface SettingBridgePort_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingBridgePort */
    hairpinMode?: boolean
    pathCost?: number
    priority?: number
}
class SettingBridgePort {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingBridgePort */
    hairpinMode: boolean
    pathCost: number
    priority: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingBridgePort */
    getHairpinMode(): boolean
    getPathCost(): number
    getPriority(): number
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::hairpin-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hairpin-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hairpin-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hairpin-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hairpin-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path-cost", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path-cost", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path-cost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path-cost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path-cost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingBridgePort_ConstructProps)
    _init (config?: SettingBridgePort_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBridgePort
    static $gtype: GObject.Type
}
interface SettingCdma_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingCdma */
    number?: string
    password?: string
    passwordFlags?: number
    username?: string
}
class SettingCdma {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingCdma */
    number: string
    password: string
    passwordFlags: number
    username: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingCdma */
    getNumber(): string
    getPassword(): string
    getPasswordFlags(): SettingSecretFlags
    getUsername(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::number", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingCdma_ConstructProps)
    _init (config?: SettingCdma_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingCdma
    static $gtype: GObject.Type
}
interface SettingConnection_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingConnection */
    autoconnect?: boolean
    gatewayPingTimeout?: number
    id?: string
    interfaceName?: string
    master?: string
    readOnly?: boolean
    slaveType?: string
    timestamp?: number
    type?: string
    uuid?: string
    zone?: string
}
class SettingConnection {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingConnection */
    autoconnect: boolean
    gatewayPingTimeout: number
    id: string
    interfaceName: string
    master: string
    readOnly: boolean
    slaveType: string
    timestamp: number
    type: string
    uuid: string
    zone: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingConnection */
    addPermission(ptype: string, pitem: string, detail?: string | null): boolean
    addSecondary(secUuid: string): boolean
    getAutoconnect(): boolean
    getConnectionType(): string
    getGatewayPingTimeout(): number
    getId(): string
    getInterfaceName(): string
    getMaster(): string
    getNumPermissions(): number
    getNumSecondaries(): number
    getPermission(idx: number, outPtype: string, outPitem: string, outDetail: string): boolean
    getReadOnly(): boolean
    getSecondary(idx: number): string
    getSlaveType(): string
    getTimestamp(): number
    getUuid(): string
    getZone(): string
    isSlaveType(type: string): boolean
    permissionsUserAllowed(uname: string): boolean
    removePermission(idx: number): void
    removePermissionByValue(ptype: string, pitem: string, detail?: string | null): boolean
    removeSecondary(idx: number): void
    removeSecondaryByValue(secUuid: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gateway-ping-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gateway-ping-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gateway-ping-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gateway-ping-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gateway-ping-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::master", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::slave-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slave-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slave-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slave-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::zone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingConnection_ConstructProps)
    _init (config?: SettingConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingConnection
    static $gtype: GObject.Type
}
interface SettingDcb_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingDcb */
    appFcoeFlags?: number
    appFcoeMode?: string
    appFcoePriority?: number
    appFipFlags?: number
    appFipPriority?: number
    appIscsiFlags?: number
    appIscsiPriority?: number
    priorityFlowControlFlags?: number
    priorityGroupFlags?: number
}
class SettingDcb {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingDcb */
    appFcoeFlags: number
    appFcoeMode: string
    appFcoePriority: number
    appFipFlags: number
    appFipPriority: number
    appIscsiFlags: number
    appIscsiPriority: number
    priorityFlowControlFlags: number
    priorityGroupFlags: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingDcb */
    getAppFcoeFlags(): SettingDcbFlags
    getAppFcoeMode(): string
    getAppFcoePriority(): number
    getAppFipFlags(): SettingDcbFlags
    getAppFipPriority(): number
    getAppIscsiFlags(): SettingDcbFlags
    getAppIscsiPriority(): number
    getPriorityBandwidth(userPriority: number): number
    getPriorityFlowControl(userPriority: number): boolean
    getPriorityFlowControlFlags(): SettingDcbFlags
    getPriorityGroupBandwidth(groupId: number): number
    getPriorityGroupFlags(): SettingDcbFlags
    getPriorityGroupId(userPriority: number): number
    getPriorityStrictBandwidth(userPriority: number): boolean
    getPriorityTrafficClass(userPriority: number): number
    setPriorityBandwidth(userPriority: number, bandwidthPercent: number): void
    setPriorityFlowControl(userPriority: number, enabled: boolean): void
    setPriorityGroupBandwidth(groupId: number, bandwidthPercent: number): void
    setPriorityGroupId(userPriority: number, groupId: number): void
    setPriorityStrictBandwidth(userPriority: number, strict: boolean): void
    setPriorityTrafficClass(userPriority: number, trafficClass: number): void
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-fcoe-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fcoe-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-fcoe-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-fcoe-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-fcoe-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-fcoe-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fcoe-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-fcoe-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-fcoe-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-fcoe-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-fcoe-priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fcoe-priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-fcoe-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-fcoe-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-fcoe-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-fip-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fip-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-fip-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-fip-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-fip-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-fip-priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fip-priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-fip-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-fip-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-fip-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-iscsi-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-iscsi-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-iscsi-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-iscsi-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-iscsi-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-iscsi-priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-iscsi-priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-iscsi-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-iscsi-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-iscsi-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority-flow-control-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-flow-control-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority-flow-control-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority-flow-control-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority-flow-control-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority-group-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-group-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority-group-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority-group-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority-group-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingDcb_ConstructProps)
    _init (config?: SettingDcb_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingDcb
    static $gtype: GObject.Type
}
interface SettingGeneric_ConstructProps extends Setting_ConstructProps {
}
class SettingGeneric {
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingGeneric_ConstructProps)
    _init (config?: SettingGeneric_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingGeneric
    static $gtype: GObject.Type
}
interface SettingGsm_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingGsm */
    allowedBands?: number
    apn?: string
    homeOnly?: boolean
    networkId?: string
    networkType?: number
    number?: string
    password?: string
    passwordFlags?: number
    pin?: string
    pinFlags?: number
    username?: string
}
class SettingGsm {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingGsm */
    allowedBands: number
    apn: string
    homeOnly: boolean
    networkId: string
    networkType: number
    number: string
    password: string
    passwordFlags: number
    pin: string
    pinFlags: number
    username: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingGsm */
    getAllowedBands(): number
    getApn(): string
    getHomeOnly(): boolean
    getNetworkId(): string
    getNetworkType(): number
    getNumber(): string
    getPassword(): string
    getPasswordFlags(): SettingSecretFlags
    getPin(): string
    getPinFlags(): SettingSecretFlags
    getUsername(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed-bands", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-bands", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowed-bands", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowed-bands", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowed-bands", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::apn", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apn", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::apn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::apn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::apn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::home-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::home-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::home-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::home-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::number", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pin-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingGsm_ConstructProps)
    _init (config?: SettingGsm_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingGsm
    static $gtype: GObject.Type
}
interface SettingIP4Config_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingIP4Config */
    dhcpClientId?: string
    dhcpHostname?: string
    dhcpSendHostname?: boolean
    dhcpTimeout?: number
    ignoreAutoDns?: boolean
    ignoreAutoRoutes?: boolean
    mayFail?: boolean
    method?: string
    neverDefault?: boolean
    routeMetric?: number
}
class SettingIP4Config {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingIP4Config */
    dhcpClientId: string
    dhcpHostname: string
    dhcpSendHostname: boolean
    dhcpTimeout: number
    ignoreAutoDns: boolean
    ignoreAutoRoutes: boolean
    mayFail: boolean
    method: string
    neverDefault: boolean
    routeMetric: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingIP4Config */
    addAddress(address: IP4Address): boolean
    addDns(dns: number): boolean
    addDnsSearch(dnsSearch: string): boolean
    addRoute(route: IP4Route): boolean
    clearAddresses(): void
    clearDns(): void
    clearDnsSearches(): void
    clearRoutes(): void
    getAddress(i: number): IP4Address
    getDhcpClientId(): string
    getDhcpHostname(): string
    getDhcpSendHostname(): boolean
    getDhcpTimeout(): number
    getDns(i: number): number
    getDnsSearch(i: number): string
    getIgnoreAutoDns(): boolean
    getIgnoreAutoRoutes(): boolean
    getMayFail(): boolean
    getMethod(): string
    getNeverDefault(): boolean
    getNumAddresses(): number
    getNumDns(): number
    getNumDnsSearches(): number
    getNumRoutes(): number
    getRoute(i: number): IP4Route
    getRouteMetric(): number
    removeAddress(i: number): void
    removeAddressByValue(address: IP4Address): boolean
    removeDns(i: number): void
    removeDnsByValue(dns: number): boolean
    removeDnsSearch(i: number): void
    removeDnsSearchByValue(dnsSearch: string): boolean
    removeRoute(i: number): void
    removeRouteByValue(route: IP4Route): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dhcp-client-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-client-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp-client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp-hostname", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-hostname", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp-send-hostname", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-send-hostname", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp-send-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-send-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-send-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-auto-dns", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-dns", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-auto-routes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-routes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::may-fail", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::may-fail", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::never-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::never-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::route-metric", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::route-metric", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingIP4Config_ConstructProps)
    _init (config?: SettingIP4Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingIP4Config
    static $gtype: GObject.Type
}
interface SettingIP6Config_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingIP6Config */
    dhcpHostname?: string
    ignoreAutoDns?: boolean
    ignoreAutoRoutes?: boolean
    ip6Privacy?: number
    mayFail?: boolean
    method?: string
    neverDefault?: boolean
    routeMetric?: number
}
class SettingIP6Config {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingIP6Config */
    dhcpHostname: string
    ignoreAutoDns: boolean
    ignoreAutoRoutes: boolean
    ip6Privacy: number
    mayFail: boolean
    method: string
    neverDefault: boolean
    routeMetric: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingIP6Config */
    addAddress(address: IP6Address): boolean
    addDns(dns?: object | null): boolean
    addDnsSearch(dnsSearch: string): boolean
    addRoute(route: IP6Route): boolean
    clearAddresses(): void
    clearDns(): void
    clearDnsSearches(): void
    clearRoutes(): void
    getAddress(i: number): IP6Address
    getDhcpHostname(): string
    getDns(i: number): object | null
    getDnsSearch(i: number): string
    getIgnoreAutoDns(): boolean
    getIgnoreAutoRoutes(): boolean
    getIp6Privacy(): SettingIP6ConfigPrivacy
    getMayFail(): boolean
    getMethod(): string
    getNeverDefault(): boolean
    getNumAddresses(): number
    getNumDns(): number
    getNumDnsSearches(): number
    getNumRoutes(): number
    getRoute(i: number): IP6Route
    getRouteMetric(): number
    removeAddress(i: number): void
    removeAddressByValue(address: IP6Address): boolean
    removeDns(i: number): void
    removeDnsByValue(dns?: object | null): boolean
    removeDnsSearch(i: number): void
    removeDnsSearchByValue(dnsSearch: string): boolean
    removeRoute(i: number): void
    removeRouteByValue(route: IP6Route): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dhcp-hostname", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-hostname", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-auto-dns", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-dns", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-auto-routes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-routes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-privacy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-privacy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-privacy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-privacy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-privacy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::may-fail", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::may-fail", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::never-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::never-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::route-metric", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::route-metric", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingIP6Config_ConstructProps)
    _init (config?: SettingIP6Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingIP6Config
    static $gtype: GObject.Type
}
interface SettingInfiniband_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingInfiniband */
    mtu?: number
    pKey?: number
    parent?: string
    transportMode?: string
}
class SettingInfiniband {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingInfiniband */
    mtu: number
    pKey: number
    parent: string
    transportMode: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingInfiniband */
    getMacAddress(): Uint8Array
    getMtu(): number
    getPKey(): number
    getParent(): string
    getTransportMode(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::p-key", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::p-key", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::p-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::p-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::p-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transport-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingInfiniband_ConstructProps)
    _init (config?: SettingInfiniband_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingInfiniband
    static $gtype: GObject.Type
}
interface SettingOlpcMesh_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingOlpcMesh */
    channel?: number
}
class SettingOlpcMesh {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingOlpcMesh */
    channel: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingOlpcMesh */
    getChannel(): number
    getDhcpAnycastAddress(): Uint8Array
    getSsid(): Uint8Array
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::channel", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingOlpcMesh_ConstructProps)
    _init (config?: SettingOlpcMesh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingOlpcMesh
    static $gtype: GObject.Type
}
interface SettingPPP_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingPPP */
    baud?: number
    crtscts?: boolean
    lcpEchoFailure?: number
    lcpEchoInterval?: number
    mppeStateful?: boolean
    mru?: number
    mtu?: number
    noVjComp?: boolean
    noauth?: boolean
    nobsdcomp?: boolean
    nodeflate?: boolean
    refuseChap?: boolean
    refuseEap?: boolean
    refuseMschap?: boolean
    refuseMschapv2?: boolean
    refusePap?: boolean
    requireMppe?: boolean
    requireMppe128?: boolean
}
class SettingPPP {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingPPP */
    baud: number
    crtscts: boolean
    lcpEchoFailure: number
    lcpEchoInterval: number
    mppeStateful: boolean
    mru: number
    mtu: number
    noVjComp: boolean
    noauth: boolean
    nobsdcomp: boolean
    nodeflate: boolean
    refuseChap: boolean
    refuseEap: boolean
    refuseMschap: boolean
    refuseMschapv2: boolean
    refusePap: boolean
    requireMppe: boolean
    requireMppe128: boolean
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingPPP */
    getBaud(): number
    getCrtscts(): boolean
    getLcpEchoFailure(): number
    getLcpEchoInterval(): number
    getMppeStateful(): boolean
    getMru(): number
    getMtu(): number
    getNoVjComp(): boolean
    getNoauth(): boolean
    getNobsdcomp(): boolean
    getNodeflate(): boolean
    getRefuseChap(): boolean
    getRefuseEap(): boolean
    getRefuseMschap(): boolean
    getRefuseMschapv2(): boolean
    getRefusePap(): boolean
    getRequireMppe(): boolean
    getRequireMppe128(): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::baud", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baud", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::crtscts", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::crtscts", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::crtscts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::crtscts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::crtscts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lcp-echo-failure", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lcp-echo-failure", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lcp-echo-failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lcp-echo-failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lcp-echo-failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lcp-echo-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lcp-echo-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lcp-echo-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lcp-echo-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lcp-echo-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mppe-stateful", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mppe-stateful", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mppe-stateful", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mppe-stateful", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mppe-stateful", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mru", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mru", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mru", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mru", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mru", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-vj-comp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-vj-comp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-vj-comp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-vj-comp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-vj-comp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::noauth", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::noauth", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::noauth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::noauth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::noauth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nobsdcomp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nobsdcomp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nobsdcomp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nobsdcomp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nobsdcomp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nodeflate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodeflate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nodeflate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nodeflate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nodeflate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refuse-chap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-chap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refuse-chap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refuse-chap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refuse-chap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refuse-eap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-eap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refuse-eap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refuse-eap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refuse-eap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refuse-mschap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-mschap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refuse-mschap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refuse-mschap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refuse-mschap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refuse-mschapv2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-mschapv2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refuse-mschapv2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refuse-mschapv2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refuse-mschapv2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refuse-pap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-pap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refuse-pap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refuse-pap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refuse-pap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::require-mppe", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-mppe", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::require-mppe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::require-mppe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::require-mppe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::require-mppe-128", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-mppe-128", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::require-mppe-128", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::require-mppe-128", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::require-mppe-128", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingPPP_ConstructProps)
    _init (config?: SettingPPP_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingPPP
    static $gtype: GObject.Type
}
interface SettingPPPOE_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingPPPOE */
    password?: string
    passwordFlags?: number
    service?: string
    username?: string
}
class SettingPPPOE {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingPPPOE */
    password: string
    passwordFlags: number
    service: string
    username: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingPPPOE */
    getPassword(): string
    getPasswordFlags(): SettingSecretFlags
    getService(): string
    getUsername(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingPPPOE_ConstructProps)
    _init (config?: SettingPPPOE_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingPPPOE
    static $gtype: GObject.Type
}
interface SettingSerial_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingSerial */
    baud?: number
    bits?: number
    parity?: number
    sendDelay?: number
    stopbits?: number
}
class SettingSerial {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingSerial */
    baud: number
    bits: number
    parity: number
    sendDelay: number
    stopbits: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingSerial */
    getBaud(): number
    getBits(): number
    getParity(): number
    getSendDelay(): number
    getStopbits(): number
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::baud", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baud", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bits", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::send-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::send-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::send-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::send-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::send-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stopbits", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stopbits", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stopbits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stopbits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stopbits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingSerial_ConstructProps)
    _init (config?: SettingSerial_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingSerial
    static $gtype: GObject.Type
}
interface SettingTeam_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingTeam */
    config?: string
    interfaceName?: string
}
class SettingTeam {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingTeam */
    config: string
    interfaceName: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingTeam */
    getConfig(): string
    getInterfaceName(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingTeam_ConstructProps)
    _init (config?: SettingTeam_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingTeam
    static $gtype: GObject.Type
}
interface SettingTeamPort_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingTeamPort */
    config?: string
}
class SettingTeamPort {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingTeamPort */
    config: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingTeamPort */
    getConfig(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingTeamPort_ConstructProps)
    _init (config?: SettingTeamPort_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingTeamPort
    static $gtype: GObject.Type
}
interface SettingVPN_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingVPN */
    persistent?: boolean
    serviceType?: string
    userName?: string
}
class SettingVPN {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingVPN */
    persistent: boolean
    serviceType: string
    userName: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingVPN */
    addDataItem(key: string, item: string): void
    addSecret(key: string, secret: string): void
    foreachDataItem(func: VPNIterFunc): void
    foreachSecret(func: VPNIterFunc): void
    getDataItem(key: string): string
    getNumDataItems(): number
    getNumSecrets(): number
    getPersistent(): boolean
    getSecret(key: string): string
    getServiceType(): string
    getUserName(): string
    removeDataItem(key: string): boolean
    removeSecret(key: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::persistent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::persistent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingVPN_ConstructProps)
    _init (config?: SettingVPN_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingVPN
    static $gtype: GObject.Type
}
interface SettingVlan_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingVlan */
    flags?: number
    id?: number
    interfaceName?: string
    parent?: string
}
class SettingVlan {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingVlan */
    flags: number
    id: number
    interfaceName: string
    parent: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingVlan */
    addPriority(map: VlanPriorityMap, from: number, to: number): boolean
    addPriorityStr(map: VlanPriorityMap, str: string): boolean
    clearPriorities(map: VlanPriorityMap): void
    getFlags(): number
    getId(): number
    getInterfaceName(): string
    getNumPriorities(map: VlanPriorityMap): number
    getParent(): string
    getPriority(map: VlanPriorityMap, idx: number): [ /* returnType */ boolean, /* outFrom */ number, /* outTo */ number ]
    removePriority(map: VlanPriorityMap, idx: number): void
    removePriorityByValue(map: VlanPriorityMap, from: number, to: number): boolean
    removePriorityStrByValue(map: VlanPriorityMap, str: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingVlan_ConstructProps)
    _init (config?: SettingVlan_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingVlan
    static $gtype: GObject.Type
}
interface SettingWimax_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingWimax */
    networkName?: string
}
class SettingWimax {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingWimax */
    networkName: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingWimax */
    getMacAddress(): Uint8Array
    getNetworkName(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::network-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingWimax_ConstructProps)
    _init (config?: SettingWimax_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingWimax
    static $gtype: GObject.Type
}
interface SettingWired_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingWired */
    autoNegotiate?: boolean
    duplex?: string
    mtu?: number
    port?: string
    s390Nettype?: string
    speed?: number
}
class SettingWired {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingWired */
    autoNegotiate: boolean
    duplex: string
    mtu: number
    port: string
    s390Nettype: string
    speed: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingWired */
    addMacBlacklistItem(mac: string): boolean
    addS390Option(key: string, value: string): boolean
    clearMacBlacklistItems(): void
    getAutoNegotiate(): boolean
    getClonedMacAddress(): Uint8Array
    getDuplex(): string
    getMacAddress(): Uint8Array
    getMacAddressBlacklist(): any[]
    getMacBlacklistItem(idx: number): string
    getMtu(): number
    getNumMacBlacklistItems(): number
    getNumS390Options(): number
    getPort(): string
    getS390Nettype(): string
    getS390Option(idx: number): [ /* returnType */ boolean, /* outKey */ string, /* outValue */ string ]
    getS390OptionByKey(key: string): string
    getS390Subchannels(): string[]
    getSpeed(): number
    getValidS390Options(): string[]
    removeMacBlacklistItem(idx: number): void
    removeMacBlacklistItemByValue(mac: string): boolean
    removeS390Option(key: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-negotiate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-negotiate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-negotiate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-negotiate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-negotiate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duplex", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duplex", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::s390-nettype", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::s390-nettype", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::s390-nettype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::s390-nettype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::s390-nettype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::speed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingWired_ConstructProps)
    _init (config?: SettingWired_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingWired
    static $gtype: GObject.Type
}
interface SettingWireless_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingWireless */
    band?: string
    channel?: number
    hidden?: boolean
    mode?: string
    mtu?: number
    powersave?: number
    rate?: number
    security?: string
    txPower?: number
}
class SettingWireless {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingWireless */
    band: string
    channel: number
    hidden: boolean
    mode: string
    mtu: number
    powersave: number
    rate: number
    security: string
    txPower: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingWireless */
    addMacBlacklistItem(mac: string): boolean
    addSeenBssid(bssid: string): boolean
    apSecurityCompatible(sWirelessSec: SettingWirelessSecurity, apFlags: TODO_80211ApFlags, apWpa: TODO_80211ApSecurityFlags, apRsn: TODO_80211ApSecurityFlags, apMode: TODO_80211Mode): boolean
    clearMacBlacklistItems(): void
    getBand(): string
    getBssid(): Uint8Array
    getChannel(): number
    getClonedMacAddress(): Uint8Array
    getHidden(): boolean
    getMacAddress(): Uint8Array
    getMacAddressBlacklist(): any[]
    getMacBlacklistItem(idx: number): string
    getMode(): string
    getMtu(): number
    getNumMacBlacklistItems(): number
    getNumSeenBssids(): number
    getPowersave(): number
    getRate(): number
    getSecurity(): string
    getSeenBssid(i: number): string
    getSsid(): Uint8Array
    getTxPower(): number
    removeMacBlacklistItem(idx: number): void
    removeMacBlacklistItemByValue(mac: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::band", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::band", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::band", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::band", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::band", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::channel", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hidden", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hidden", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::powersave", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::powersave", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::powersave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::powersave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::powersave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::security", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::security", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::security", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::security", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tx-power", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tx-power", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tx-power", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tx-power", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tx-power", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingWireless_ConstructProps)
    _init (config?: SettingWireless_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingWireless
    static $gtype: GObject.Type
}
interface SettingWirelessSecurity_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity */
    authAlg?: string
    keyMgmt?: string
    leapPassword?: string
    leapPasswordFlags?: number
    leapUsername?: string
    psk?: string
    pskFlags?: number
    wepKeyFlags?: number
    wepKeyType?: number
    wepKey0?: string
    wepKey1?: string
    wepKey2?: string
    wepKey3?: string
    wepTxKeyidx?: number
}
class SettingWirelessSecurity {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity */
    authAlg: string
    keyMgmt: string
    leapPassword: string
    leapPasswordFlags: number
    leapUsername: string
    psk: string
    pskFlags: number
    wepKeyFlags: number
    wepKeyType: number
    wepKey0: string
    wepKey1: string
    wepKey2: string
    wepKey3: string
    wepTxKeyidx: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity */
    addGroup(group: string): boolean
    addPairwise(pairwise: string): boolean
    addProto(proto: string): boolean
    clearGroups(): void
    clearPairwise(): void
    clearProtos(): void
    getAuthAlg(): string
    getGroup(i: number): string
    getKeyMgmt(): string
    getLeapPassword(): string
    getLeapPasswordFlags(): SettingSecretFlags
    getLeapUsername(): string
    getNumGroups(): number
    getNumPairwise(): number
    getNumProtos(): number
    getPairwise(i: number): string
    getProto(i: number): string
    getPsk(): string
    getPskFlags(): SettingSecretFlags
    getWepKey(idx: number): string
    getWepKeyFlags(): SettingSecretFlags
    getWepKeyType(): WepKeyType
    getWepTxKeyidx(): number
    removeGroup(i: number): void
    removeGroupByValue(group: string): boolean
    removePairwise(i: number): void
    removePairwiseByValue(pairwise: string): boolean
    removeProto(i: number): void
    removeProtoByValue(proto: string): boolean
    setWepKey(idx: number, key: string): void
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    clearSecrets(): void
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    compare(b: Setting, flags: SettingCompareFlags): boolean
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    duplicate(): Setting
    enumerateValues(func: SettingValueIterFn): void
    getName(): string
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    getVirtualIfaceName(): string
    needSecrets(): string[]
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    toHash(flags: SettingHashFlags): GLib.HashTable
    toString(): string
    updateSecrets(secrets: GLib.HashTable): boolean
    verify(allSettings: Setting[]): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-alg", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-alg", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-alg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-alg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-alg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-mgmt", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-mgmt", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-mgmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-mgmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-mgmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::leap-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leap-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::leap-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::leap-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::leap-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::leap-password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leap-password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::leap-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::leap-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::leap-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::leap-username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leap-username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::leap-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::leap-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::leap-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::psk", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::psk", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::psk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::psk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::psk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::psk-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::psk-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::psk-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::psk-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::psk-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key0", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key0", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-tx-keyidx", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-tx-keyidx", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-tx-keyidx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-tx-keyidx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-tx-keyidx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingWirelessSecurity_ConstructProps)
    _init (config?: SettingWirelessSecurity_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingWirelessSecurity
    static $gtype: GObject.Type
}
abstract class ConnectionClass {
    /* Fields of NetworkManager-1.0.NetworkManager.ConnectionClass */
    readonly parent: GObject.ObjectClass
    readonly secretsUpdated: (connection: Connection, setting: string) => void
    static name: string
}
class IP4Address {
    /* Methods of NetworkManager-1.0.NetworkManager.IP4Address */
    compare(other: IP4Address): boolean
    dup(): IP4Address
    getAddress(): number
    getGateway(): number
    getPrefix(): number
    ref(): void
    setAddress(addr: number): void
    setGateway(gateway: number): void
    setPrefix(prefix: number): void
    unref(): void
    static name: string
    static new(): IP4Address
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IP4Address
}
class IP4Route {
    /* Methods of NetworkManager-1.0.NetworkManager.IP4Route */
    compare(other: IP4Route): boolean
    dup(): IP4Route
    getDest(): number
    getMetric(): number
    getNextHop(): number
    getPrefix(): number
    ref(): void
    setDest(dest: number): void
    setMetric(metric: number): void
    setNextHop(nextHop: number): void
    setPrefix(prefix: number): void
    unref(): void
    static name: string
    static new(): IP4Route
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IP4Route
}
class IP6Address {
    /* Methods of NetworkManager-1.0.NetworkManager.IP6Address */
    compare(other: IP6Address): boolean
    dup(): IP6Address
    getAddress(): Uint8Array
    getGateway(): Uint8Array
    getPrefix(): number
    ref(): void
    setAddress(addr?: object | null): void
    setGateway(gateway?: object | null): void
    setPrefix(prefix: number): void
    unref(): void
    static name: string
    static new(): IP6Address
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IP6Address
}
class IP6Route {
    /* Methods of NetworkManager-1.0.NetworkManager.IP6Route */
    compare(other: IP6Route): boolean
    dup(): IP6Route
    getDest(): Uint8Array
    getMetric(): number
    getNextHop(): Uint8Array
    getPrefix(): number
    ref(): void
    setDest(dest?: object | null): void
    setMetric(metric: number): void
    setNextHop(nextHop?: object | null): void
    setPrefix(prefix: number): void
    unref(): void
    static name: string
    static new(): IP6Route
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IP6Route
}
abstract class Setting8021xClass {
    /* Fields of NetworkManager-1.0.NetworkManager.Setting8021xClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingAdslClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingAdslClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingBluetoothClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBluetoothClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingBondClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBondClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingBridgeClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBridgeClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingBridgePortClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBridgePortClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingCdmaClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingCdmaClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingClass */
    readonly parent: GObject.ObjectClass
    readonly needSecrets: (setting: Setting) => string[]
    readonly updateOneSecret: (setting: Setting, key: string, value: any) => number
    readonly getSecretFlags: (setting: Setting, secretName: string, verifySecret: boolean, outFlags: SettingSecretFlags) => boolean
    readonly setSecretFlags: (setting: Setting, secretName: string, verifySecret: boolean, flags: SettingSecretFlags) => boolean
    readonly compareProperty: (setting: Setting, other: Setting, propSpec: GObject.ParamSpec, flags: SettingCompareFlags) => boolean
    readonly getVirtualIfaceName: (setting: Setting) => string
    static name: string
}
abstract class SettingConnectionClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingConnectionClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingDcbClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingDcbClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingGenericClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingGenericClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingGsmClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingGsmClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingIP4ConfigClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingIP4ConfigClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingIP6ConfigClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingIP6ConfigClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingInfinibandClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingInfinibandClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingOlpcMeshClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingOlpcMeshClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingPPPClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingPPPClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingPPPOEClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingPPPOEClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingSerialClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingSerialClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingTeamClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingTeamClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingTeamPortClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingTeamPortClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingVPNClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingVPNClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingVlanClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingVlanClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingWimaxClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWimaxClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingWiredClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWiredClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingWirelessClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWirelessClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingWirelessSecurityClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWirelessSecurityClass */
    readonly parent: SettingClass
    static name: string
}
}
export default NetworkManager;