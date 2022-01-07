/**
 * Qmi-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Qmi {

enum CoreError {
    FAILED,
    WRONGSTATE,
    TIMEOUT,
    INVALIDARGS,
    INVALIDMESSAGE,
    TLVNOTFOUND,
    TLVTOOLONG,
    UNSUPPORTED,
    TLVEMPTY,
    UNEXPECTEDMESSAGE,
    INVALIDDATA,
}
enum CtlDataFormat {
    ABSENT,
    PRESENT,
}
enum CtlDataLinkProtocol {
    UNKNOWN,
    /* 802_3 (invalid, starts with a number) */
    RAW_IP,
}
enum DataEndpointType {
    UNKNOWN,
    HSIC,
    HSUSB,
    PCIE,
    EMBEDDED,
    BAM_DMUX,
    UNDEFINED,
}
enum DeviceExpectedDataFormat {
    UNKNOWN,
    /* 802_3 (invalid, starts with a number) */
    RAW_IP,
    QMAP_PASS_THROUGH,
}
enum DmsActivationState {
    NOT_ACTIVATED,
    ACTIVATED,
    CONNECTING,
    CONNECTED,
    OTASP_AUTHENTICATED,
    OTASP_NAM,
    OTASP_MDN,
    OTASP_IMSI,
    OTASP_PRL,
    OTASP_SPC,
    OTASP_COMMITED,
}
enum DmsBootImageDownloadMode {
    NORMAL,
    BOOT_AND_RECOVERY,
}
enum DmsDataServiceCapability {
    NONE,
    CS,
    PS,
    SIMULTANEOUS_CS_PS,
    NON_SIMULTANEOUS_CS_PS,
}
enum DmsFirmwareImageType {
    MODEM,
    PRI,
}
enum DmsFoxconnDeviceMode {
    UNKNOWN,
    FASTBOOT_ONLINE,
    FASTBOOT_OTA,
}
enum DmsFoxconnFirmwareVersionType {
    FIRMWARE_MCFG,
    FIRMWARE_MCFG_APPS,
    APPS,
}
enum DmsHpDeviceMode {
    FASTBOOT,
}
enum DmsMacType {
    WLAN,
    BT,
}
enum DmsOperatingMode {
    ONLINE,
    LOW_POWER,
    FACTORY_TEST,
    OFFLINE,
    RESET,
    SHUTTING_DOWN,
    PERSISTENT_LOW_POWER,
    MODE_ONLY_LOW_POWER,
    UNKNOWN,
}
enum DmsRadioInterface {
    CDMA20001X,
    EVDO,
    GSM,
    UMTS,
    LTE,
    TDS,
    /* 5GNR (invalid, starts with a number) */
}
enum DmsSimCapability {
    NOT_SUPPORTED,
    SUPPORTED,
}
enum DmsSwiUsbComposition {
    UNKNOWN,
    /* 0 (invalid, starts with a number) */
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    /* 4 (invalid, starts with a number) */
    /* 5 (invalid, starts with a number) */
    /* 6 (invalid, starts with a number) */
    /* 7 (invalid, starts with a number) */
    /* 8 (invalid, starts with a number) */
    /* 9 (invalid, starts with a number) */
    /* 10 (invalid, starts with a number) */
    /* 11 (invalid, starts with a number) */
    /* 12 (invalid, starts with a number) */
    /* 13 (invalid, starts with a number) */
    /* 14 (invalid, starts with a number) */
    /* 15 (invalid, starts with a number) */
    /* 16 (invalid, starts with a number) */
    /* 17 (invalid, starts with a number) */
    /* 18 (invalid, starts with a number) */
    /* 19 (invalid, starts with a number) */
    /* 20 (invalid, starts with a number) */
    /* 21 (invalid, starts with a number) */
    /* 22 (invalid, starts with a number) */
}
enum DmsTimeReferenceType {
    USER,
}
enum DmsTimeSource {
    DEVICE,
    CDMA_NETWORK,
    HDR_NETWORK,
}
enum DmsUimFacility {
    PN,
    PU,
    PP,
    PC,
    PF,
}
enum DmsUimFacilityState {
    DEACTIVATED,
    ACTIVATED,
    BLOCKED,
}
enum DmsUimPinId {
    PIN,
    PIN2,
}
enum DmsUimPinStatus {
    NOT_INITIALIZED,
    ENABLED_NOT_VERIFIED,
    ENABLED_VERIFIED,
    DISABLED,
    BLOCKED,
    PERMANENTLY_BLOCKED,
    UNBLOCKED,
    CHANGED,
}
enum DmsUimState {
    INITIALIZATION_COMPLETED,
    LOCKED_OR_FAILED,
    NOT_PRESENT,
    RESERVED,
    UNKNOWN,
}
enum DsdApnType {
    DEFAULT,
    IMS,
    MMS,
    DUN,
    SUPL,
    HIPRI,
    FOTA,
    CBS,
    IA,
    EMERGENCY,
}
enum Endian {
    LITTLE,
    BIG,
}
enum GasFirmwareListingMode {
    ACTIVE_FIRMWARE,
    ALL_FIRMWARE,
    SPECIFIC_FIRMWARE,
}
enum GasUsbCompositionEndpointType {
    HSUSB,
    HSIC,
}
enum LocEngineState {
    ON,
    OFF,
}
enum LocFixRecurrenceType {
    PERIODIC_FIXES,
    SINGLE_FIX,
}
enum LocHealthStatus {
    UNHEALTHY,
    HEALTHY,
}
enum LocIndicationStatus {
    SUCCESS,
    GENERAL_FAILURE,
    UNSUPPORTED,
    INVALID_PARAMETER,
    ENGINE_BUSY,
    PHONE_OFFLINE,
    TIMEOUT,
}
enum LocIntermediateReportState {
    UNKNOWN,
    ENABLE,
    DISABLE,
}
enum LocLockType {
    NONE,
    MI,
    MT,
    ALL,
}
enum LocNavigationData {
    EPHEMERIS,
    ALMANAC,
}
enum LocOperationMode {
    DEFAULT,
    MSB,
    MSA,
    STANDALONE,
    CELLID,
    WWAN,
}
enum LocPredictedOrbitsDataFormat {
    XTRA,
}
enum LocReliability {
    NOT_SET,
    VERY_LOW,
    LOW,
    MEDIUM,
    HIGH,
}
enum LocSatelliteStatus {
    IDLE,
    SEARCHING,
    TRACKING,
}
enum LocServerType {
    UNKNOWN,
    CDMA_PDE,
    CDMA_MPC,
    UMTS_SLP,
    CUSTOM_PDE,
}
enum LocSessionStatus {
    SUCCESS,
    IN_PROGRESS,
    GENERAL_FAILURE,
    TIMEOUT,
    USER_ENDED,
    BAD_PARAMETER,
    PHONE_OFFLINE,
    ENGINE_LOCKED,
}
enum LocSystem {
    GPS,
    GALILEO,
    SBAS,
    COMPASS,
    GLONASS,
}
enum LocTimeSource {
    INVALID,
    NETWORK_TIME_TRANSFER,
    NETWORK_TIME_TAGGING,
    EXTERNAL_INPUT,
    TOW_DECODE,
    TOW_CONFIRMED,
    TOW_AND_WEEK_CONFIRMED,
    NAVIGATION_SOLUTION,
    SOLVE_FOR_TIME,
    GLO_TOW_DECODE,
    TIME_TRANSFORM,
    WCDMA_SLEEP_TIME_TAG,
    GSM_SLEEP_TIME_TAG,
    UNKNOWN,
    SYSTEM_TIMETICK,
    QZSS_TOW_DECODE,
    BDS_TOW_DECODE,
}
enum NasActiveBand {
    BC_0,
    BC_1,
    BC_2,
    BC_3,
    BC_4,
    BC_5,
    BC_6,
    BC_7,
    BC_8,
    BC_9,
    BC_10,
    BC_11,
    BC_12,
    BC_13,
    BC_14,
    BC_15,
    BC_16,
    BC_17,
    BC_18,
    BC_19,
    GSM_450,
    GSM_480,
    GSM_750,
    GSM_850,
    GSM_900_EXTENDED,
    GSM_900_PRIMARY,
    GSM_900_RAILWAYS,
    GSM_DCS_1800,
    GSM_PCS_1900,
    WCDMA_2100,
    WCDMA_PCS_1900,
    WCDMA_DCS_1800,
    WCDMA_1700_US,
    WCDMA_850,
    WCDMA_800,
    WCDMA_2600,
    WCDMA_900,
    WCDMA_1700_JAPAN,
    WCDMA_1500_JAPAN,
    WCDMA_850_JAPAN,
    EUTRAN_1,
    EUTRAN_2,
    EUTRAN_3,
    EUTRAN_4,
    EUTRAN_5,
    EUTRAN_6,
    EUTRAN_7,
    EUTRAN_8,
    EUTRAN_9,
    EUTRAN_10,
    EUTRAN_11,
    EUTRAN_12,
    EUTRAN_13,
    EUTRAN_14,
    EUTRAN_17,
    EUTRAN_18,
    EUTRAN_19,
    EUTRAN_20,
    EUTRAN_21,
    EUTRAN_23,
    EUTRAN_24,
    EUTRAN_25,
    EUTRAN_26,
    EUTRAN_27,
    EUTRAN_28,
    EUTRAN_29,
    EUTRAN_30,
    EUTRAN_31,
    EUTRAN_32,
    EUTRAN_33,
    EUTRAN_34,
    EUTRAN_35,
    EUTRAN_36,
    EUTRAN_37,
    EUTRAN_38,
    EUTRAN_39,
    EUTRAN_40,
    EUTRAN_41,
    EUTRAN_42,
    EUTRAN_43,
    EUTRAN_46,
    EUTRAN_47,
    EUTRAN_48,
    EUTRAN_66,
    EUTRAN_71,
    EUTRAN_125,
    EUTRAN_126,
    EUTRAN_127,
    EUTRAN_250,
    TDSCDMA_A,
    TDSCDMA_B,
    TDSCDMA_C,
    TDSCDMA_D,
    TDSCDMA_E,
    TDSCDMA_F,
}
enum NasAttachState {
    UNKNOWN,
    ATTACHED,
    DETACHED,
}
enum NasBoolean {
    FALSE,
    TRUE,
    UNKNOWN,
}
enum NasCallBarringStatus {
    NORMAL_ONLY,
    EMERGENCY_ONLY,
    NO_CALLS,
    ALL_CALLS,
    UNKNOWN,
}
enum NasCdmaPilotType {
    ACTIVE,
    NEIGHBOR,
}
enum NasCdmaPrlPreference {
    A_SIDE_ONLY,
    B_SIDE_ONLY,
    ANY,
}
enum NasCellBroadcastCapability {
    UNKNOWN,
    OFF,
    ON,
}
enum NasChangeDuration {
    POWER_CYCLE,
    PERMANENT,
}
enum NasDLBandwidth {
    /* 1_4 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    /* 5 (invalid, starts with a number) */
    /* 10 (invalid, starts with a number) */
    /* 15 (invalid, starts with a number) */
    /* 20 (invalid, starts with a number) */
    INVALID,
    UNKNOWN,
}
enum NasDataCapability {
    NONE,
    GPRS,
    EDGE,
    HSDPA,
    HSUPA,
    WCDMA,
    CDMA,
    EVDO_REV_0,
    EVDO_REV_A,
    GSM,
    EVDO_REV_B,
    LTE,
    HSDPA_PLUS,
    DC_HSDPA_PLUS,
}
enum NasDayOfWeek {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
}
enum NasDaylightSavingsAdjustment {
    NONE,
    ONE_HOUR,
    TWO_HOURS,
}
enum NasDrx {
    UNKNOWN,
    CN6_T32,
    CN7_T64,
    CN8_T128,
    CN9_T256,
}
enum NasEvdoSinrLevel {
    /* 0 (invalid, starts with a number) */
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    /* 4 (invalid, starts with a number) */
    /* 5 (invalid, starts with a number) */
    /* 6 (invalid, starts with a number) */
    /* 7 (invalid, starts with a number) */
    /* 8 (invalid, starts with a number) */
}
enum NasGsmWcdmaAcquisitionOrderPreference {
    AUTOMATIC,
    GSM,
    WCDMA,
}
enum NasHdrPersonality {
    UNKNOWN,
    HRPD,
    EHRPD,
}
enum NasHdrProtocolRevision {
    NONE,
    REL_0,
    REL_A,
    REL_B,
}
enum NasLteCellAccessStatus {
    NORMAL_ONLY,
    EMERGENCY_ONLY,
    NO_CALLS,
    ALL_CALLS,
    UNKNOWN,
}
enum NasLteRegistrationDomain {
    NOT_APPLICABLE,
    CS_ONLY,
    PS_ONLY,
    CS_PS,
    LIMITED_SERVICE,
}
enum NasLteVoiceDomain {
    NONE,
    IMS,
    /* 1X (invalid, starts with a number) */
    /* 3GPP (invalid, starts with a number) */
}
enum NasNetworkDescriptionDisplay {
    NO,
    YES,
    UNKNOWN,
}
enum NasNetworkDescriptionEncoding {
    UNSPECIFIED,
    ASCII7,
    UNICODE,
    GSM,
}
enum NasNetworkNameSource {
    UNKNOWN,
    OPERATOR_PLMN_LIST_AND_PLMN_NETWORK_NAME,
    COMMON_PCN_HANDSET_SPECIFICATION_AND_OPERATOR_NAME_STRING,
    NITZ,
    SE13,
    MCC_MNC,
    SERVICE_PROVIDER_NAME,
}
enum NasNetworkRegisterType {
    AUTOMATIC,
    MANUAL,
}
enum NasNetworkScanResult {
    SUCCESS,
    ABORT,
    RADIO_LINK_FAILURE,
}
enum NasNetworkSelectionPreference {
    AUTOMATIC,
    MANUAL,
}
enum NasNetworkSelectionRegistrationRestriction {
    UNRESTRICTED,
    CAMPED_ONLY,
    LIMITED,
}
enum NasNetworkServiceDomain {
    NONE,
    CS,
    PS,
    CS_PS,
    UNKNOWN,
}
enum NasNetworkType {
    UNKNOWN,
    /* 3GPP2 (invalid, starts with a number) */
    /* 3GPP (invalid, starts with a number) */
}
enum NasPlmnEncodingScheme {
    GSM,
    UCS2LE,
}
enum NasPlmnLanguageId {
    UNKNOWN,
    ZH_TRAD,
    ZH_SIMP,
}
enum NasPlmnNameCountryInitials {
    INITIALS_DO_NOT_ADD,
    INIITALS_ADD,
    INIITALS_UNSPECIFIED,
}
enum NasPlmnNameSpareBits {
    UNKNOWN,
    BIT_8,
    BITS_78,
    BITS_68,
    BITS_58,
    BITS_48,
    BITS_38,
    BITS_28,
}
enum NasPreferenceDuration {
    PERMANENT,
    POWER_CYCLE,
    ONE_CALL,
    ONE_CALL_OR_TIME,
    INTERNAL_ONE_CALL_1,
    INTERNAL_ONE_CALL_2,
    INTERNAL_ONE_CALL_3,
}
enum NasPsAttachAction {
    ATTACH,
    DETACH,
}
enum NasRadioInterface {
    UNKNOWN,
    NONE,
    CDMA_1X,
    CDMA_1XEVDO,
    AMPS,
    GSM,
    UMTS,
    LTE,
    TD_SCDMA,
    /* 5GNR (invalid, starts with a number) */
}
enum NasRegistrationState {
    NOT_REGISTERED,
    REGISTERED,
    NOT_REGISTERED_SEARCHING,
    REGISTRATION_DENIED,
    UNKNOWN,
}
enum NasRejectCause {
    NONE,
    IMSI_UNKNOWN_IN_HLR,
    ILLEGAL_UE,
    IMSI_UNKNOWN_IN_VLR,
    IMEI_NOT_ACCEPTED,
    ILLEGAL_ME,
    PS_SERVICES_NOT_ALLOWED,
    PS_AND_NON_PS_SERVICES_NOT_ALLOWED,
    UE_IDENTITY_NOT_DERIVED_BY_NETWORK,
    IMPLICITLY_DETACHED,
    PLMN_NOT_ALLOWED,
    LOCATION_AREA_NOT_ALLOWED,
    ROAMING_IN_LOCATION_AREA_NOT_ALLOWED,
    PS_SERVICES_IN_LOCATION_AREA_NOT_ALLOWED,
    NO_SUITABLE_CELLS_IN_LOCATION_AREA,
    MSC_TEMPORARILY_NOT_REACHABLE,
    NETWORK_FAILURE,
    CS_DOMAIN_NOT_AVAILABLE,
    ESM_FAILURE,
    MAC_FAILURE,
    SYNCH_FAILURE,
    CONGESTION,
    UE_SECURITY_CAPABILITIES_MISMATCH,
    SECURITY_MODE_REJECTED_UNSPECIFIED,
    CSG_NOT_AUTHORIZED,
    NON_EPS_AUTHENTICATION_UNACCEPTABLE,
    SMS_PROVIDED_BY_GPRS_IN_ROUTING_AREA,
    REDIRECTION_TO_5GCN_REQUIRED,
    SERVICE_OPTION_NOT_SUPPORTED,
    REQUESTED_SERVICE_OPTION_NOT_SUBSCRIBED,
    SERVICE_OPTION_TEMPORARILY_OUT_OF_ORDER,
    REQUESTED_SERVICE_OPTION_NOT_AUTHORIZED,
    CALL_CANNOT_BE_IDENTIFIED,
    CS_SERVICE_TEMPORARILY_NOT_AVAILABLE,
    NO_EPS_BEARER_CONTEXT_ACTIVATED,
    SEVERE_NETWORK_FAILURE,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_0,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_1,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_2,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_3,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_4,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_5,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_6,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_7,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_8,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_9,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_10,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_11,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_12,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_13,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_14,
    RETRY_UPON_ENTRY_INTO_NEW_CELL_15,
    SEMANTICALLY_INCORRECT_MESSAGE,
    INVALID_MANDATORY_INFORMATION,
    MESSAGE_TYPE_NON_EXISTENT,
    MESSAGE_TYPE_NOT_COMPATIBLE,
    INFORMATION_ELEMENT_NON_EXISTENT,
    CONDITIONAL_INFORMATION_ELEMENT_ERROR,
    MESSAGE_NOT_COMPATIBLE,
    UNSPECIFIED_PROTOCOL_ERROR,
}
enum NasRoamingIndicatorStatus {
    ON,
    OFF,
}
enum NasRoamingPreference {
    OFF,
    NOT_OFF,
    NOT_FLASHING,
    ANY,
}
enum NasRoamingStatus {
    OFF,
    ON,
    BLINK,
    OUT_OF_NEIGHBORHOOD,
    OUT_OF_BUILDING,
    PREFERRED_SYSTEM,
    AVAILABLE_SYSTEM,
    ALLIANCE_PARTNER,
    PREMIUM_PARTNER,
    FULL_SERVICE,
    PARTIAL_SERVICE,
    BANNER_ON,
    BANNER_OFF,
}
enum NasScellState {
    DECONFIGURED,
    DEACTIVATED,
    ACTIVATED,
}
enum NasServiceDomainPreference {
    CS_ONLY,
    PS_ONLY,
    CS_PS,
    PS_ATTACH,
    PS_DETACH,
}
enum NasServiceStatus {
    NONE,
    LIMITED,
    AVAILABLE,
    LIMITED_REGIONAL,
    POWER_SAVE,
}
enum NasSimRejectState {
    UNAVAILABLE,
    AVAILABLE,
    CS_INVALID,
    PS_INVALID,
    CS_PS_INVALID,
}
enum NasSwiEmmConnectionState {
    RRC_IDLE,
    WAITING_RRC_CFM,
    RRC_CONNECTING,
    RRC_RELEASING,
    UNKNOWN,
}
enum NasSwiEmmState {
    DEREGISTERED,
    REG_INITIATED,
    REGISTERED,
    TAU_INITIATED,
    SR_INITIATED,
    DEREG_INITIATED,
    INVALID,
    UNKNOWN,
}
enum NasSwiImsRegState {
    NO_SRV,
    IN_PROG,
    FAILED,
    LIMITED,
    FULL_SRV,
    _UNKNOWN,
}
enum NasSwiModemMode {
    POWERING_OFF,
    FACTORY_TEST,
    OFFLINE,
    OFFLINE_AMPS,
    OFFLINE_CDMA,
    ONLINE,
    LOW_POWER,
    RESETTING,
    NETWORK_TEST,
    OFFLINE_REQUEST,
    PSEUDO_ONLINE,
    RESETTING_MODEM,
    UNKNOWN,
}
enum NasSwiPsState {
    ATTACHED,
    DETACHED,
    UNKNOWN,
}
enum NasSwiSystemMode {
    NO_SERVICE,
    AMPS,
    CDMA,
    GSM,
    HDR,
    WCDMA,
    GPS,
    WLAN,
    LTE,
    UNKNOWN,
}
enum NasUsagePreference {
    UNKNOWN,
    VOICE_CENTRIC,
    DATA_CENTRIC,
}
enum NasVoiceDomainPreference {
    CS_ONLY,
    PS_ONLY,
    CS_PREFERRED,
    PS_PREFERRED,
}
enum NasWcdmaHsService {
    HSDPA_HSUPA_UNSUPPORTED,
    HSDPA_SUPPORTED,
    HSUPA_SUPPORTED,
    HSDPA_HSUPA_SUPPORTED,
    HSDPA_PLUS_SUPPORTED,
    HSDPA_PLUS_HSUPA_SUPPORTED,
    DC_HSDPA_PLUS_SUPPORTED,
    DC_HSDPA_PLUS_HSUPA_SUPPORTED,
}
enum NasWcdmaRrcState {
    DISCONNECTED,
    CELL_PCH,
    URA_PCH,
    CELL_FACH,
    CELL_DCH,
}
enum OmaHfaFeatureDoneState {
    NONE,
    SUCCEEDED,
    FAILED,
}
enum OmaSessionFailedReason {
    UNKNOWN,
    NETWORK_UNAVAILABLE,
    SERVER_UNAVAILABLE,
    AUTHENTICATION_FAILED,
    MAX_RETRY_EXCEEDED,
    SESSION_CANCELLED,
}
enum OmaSessionState {
    COMPLETE_INFORMATION_UPDATED,
    COMPLETE_UPDATED_INFORMATION_UNAVAILABLE,
    FAILED,
    RETRYING,
    CONNECTING,
    CONNECTED,
    AUTHENTICATED,
    MDN_DOWNLOADED,
    MSID_DOWNLOADED,
    PRL_DOWNLOADED,
    MIP_PROFILE_DOWNLOADED,
}
enum OmaSessionType {
    CLIENT_INITIATED_DEVICE_CONFIGURE,
    CLIENT_INITIATED_PRL_UPDATE,
    CLIENT_INITIATED_HANDS_FREE_ACTIVATION,
    DEVICE_INITIATED_HANDS_FREE_ACTIVATION,
    NETWORK_INITIATED_PRL_UPDATE,
    NETWORK_INITIATED_DEVICE_CONFIGURE,
    DEVICE_INITIATED_PRL_UPDATE,
}
enum PbmSessionType {
    GW_PRIMARY,
    /* 1X_PRIMARY (invalid, starts with a number) */
    GW_SECONDARY,
    /* 1X_SECONDARY (invalid, starts with a number) */
    NONPROVISIONING_SLOT_1,
    NONPROVISIONING_SLOT_2,
    GLOBAL_PHONEBOOK_SLOT_1,
    GLOBAL_PHONEBOOK_SLOT_2,
}
enum PdcConfigurationType {
    PLATFORM,
    SOFTWARE,
}
enum PdcRefreshEventType {
    START,
    COMPLETE,
    CLIENT_REFRESH,
}
enum PdsNetworkMode {
    UMTS,
    CDMA,
}
enum PdsOperatingMode {
    STANDALONE,
    MS_BASED,
    MS_ASSISTED,
}
enum PdsOperationMode {
    UNKNOWN,
    STANDALONE,
    MS_BASED,
    MS_ASSISTED,
}
enum PdsPositionSessionStatus {
    SUCCESS,
    IN_PROGRESS,
    GENERAL_FAILURE,
    TIMEOUT,
    USER_ENDED_SESSION,
    BAD_PARAMETER,
    PHONE_OFFLINE,
    ENGINE_LOCKED,
    E911_SESSION_IN_PROGRESS,
}
enum PdsTrackingSessionState {
    UNKNOWN,
    INACTIVE,
    ACTIVE,
}
enum ProtocolError {
    NONE,
    MALFORMEDMESSAGE,
    NOMEMORY,
    INTERNAL,
    ABORTED,
    CLIENTIDSEXHAUSTED,
    UNABORTABLETRANSACTION,
    INVALIDCLIENTID,
    NOTHRESHOLDSPROVIDED,
    INVALIDHANDLE,
    INVALIDPROFILE,
    INVALIDPINID,
    INCORRECTPIN,
    NONETWORKFOUND,
    CALLFAILED,
    OUTOFCALL,
    NOTPROVISIONED,
    MISSINGARGUMENT,
    ARGUMENTTOOLONG,
    INVALIDTRANSACTIONID,
    DEVICEINUSE,
    NETWORKUNSUPPORTED,
    DEVICEUNSUPPORTED,
    NOEFFECT,
    NOFREEPROFILE,
    INVALIDPDPTYPE,
    INVALIDTECHNOLOGYPREFERENCE,
    INVALIDPROFILETYPE,
    INVALIDSERVICETYPE,
    INVALIDREGISTERACTION,
    INVALIDPSATTACHACTION,
    AUTHENTICATIONFAILED,
    PINBLOCKED,
    PINALWAYSBLOCKED,
    UIMUNINITIALIZED,
    MAXIMUMQOSREQUESTSINUSE,
    INCORRECTFLOWFILTER,
    NETWORKQOSUNAWARE,
    INVALIDQOSID,
    REQUESTEDNUMBERUNSUPPORTED,
    INTERFACENOTFOUND,
    FLOWSUSPENDED,
    INVALIDDATAFORMAT,
    GENERALERROR,
    UNKNOWNERROR,
    INVALIDARGUMENT,
    INVALIDINDEX,
    NOENTRY,
    DEVICESTORAGEFULL,
    DEVICENOTREADY,
    NETWORKNOTREADY,
    WMSCAUSECODE,
    WMSMESSAGENOTSENT,
    WMSMESSAGEDELIVERYFAILURE,
    WMSINVALIDMESSAGEID,
    WMSENCODING,
    AUTHENTICATIONLOCK,
    INVALIDTRANSITION,
    NOTMCASTINTERFACE,
    MAXIMUMMCASTREQUESTSINUSE,
    INVALIDMCASTHANDLE,
    INVALIDIPFAMILYPREFERENCE,
    SESSIONINACTIVE,
    SESSIONINVALID,
    SESSIONOWNERSHIP,
    INSUFFICIENTRESOURCES,
    DISABLED,
    INVALIDOPERATION,
    INVALIDQMICOMMAND,
    WMSTPDUTYPE,
    WMSSMSCADDRESS,
    INFORMATIONUNAVAILABLE,
    SEGMENTTOOLONG,
    SEGMENTORDER,
    BUNDLINGNOTSUPPORTED,
    OPERATIONPARTIALFAILURE,
    POLICYMISMATCH,
    SIMFILENOTFOUND,
    EXTENDEDINTERNAL,
    ACCESSDENIED,
    HARDWARERESTRICTED,
    ACKNOTSENT,
    INJECTTIMEOUT,
    INCOMPATIBLESTATE,
    FDNRESTRICT,
    SUPSFAILURECASE,
    NORADIO,
    NOTSUPPORTED,
    NOSUBSCRIPTION,
    CARDCALLCONTROLFAILED,
    NETWORKABORTED,
    MSGBLOCKED,
    INVALIDSESSIONTYPE,
    INVALIDPBTYPE,
    NOSIM,
    PBNOTREADY,
    PINRESTRICTION,
    PIN1RESTRICTION,
    PUKRESTRICTION,
    PUK2RESTRICTION,
    PBACCESSRESTRICTED,
    PBDELETEINPROGRESS,
    PBTEXTTOOLONG,
    PBNUMBERTOOLONG,
    PBHIDDENKEYRESTRICTION,
    PBNOTAVAILABLE,
    DEVICEMEMORYERROR,
    NOPERMISSION,
    TOOSOON,
    TIMENOTACQUIRED,
    OPERATIONINPROGRESS,
    FWWRITEFAILED,
    FWINFOREADFAILED,
    FWFILENOTFOUND,
    FWDIRNOTFOUND,
    FWALREADYACTIVATED,
    FWCANNOTGENERICIMAGE,
    FWFILEOPENFAILED,
    FWUPDATEDISCONTINUOUSFRAME,
    FWUPDATEFAILED,
    CATEVENTREGISTRATIONFAILED,
    CATINVALIDTERMINALRESPONSE,
    CATINVALIDENVELOPECOMMAND,
    CATENVELOPECOMMANDBUSY,
    CATENVELOPECOMMANDFAILED,
}
enum QosEvent {
    UNKNOWN,
    ACTIVATED,
    SUSPENDED,
    GONE,
    MODIFY_ACCEPTED,
    MODIFY_REJECTED,
    INFO_CODE_UPDATED,
}
enum QosStatus {
    UNKNOWN,
    ACTIVATED,
    SUSPENDED,
    GONE,
}
enum SarRfState {
    /* 0 (invalid, starts with a number) */
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    /* 4 (invalid, starts with a number) */
    /* 5 (invalid, starts with a number) */
    /* 6 (invalid, starts with a number) */
    /* 7 (invalid, starts with a number) */
    /* 8 (invalid, starts with a number) */
    /* 9 (invalid, starts with a number) */
    /* 10 (invalid, starts with a number) */
    /* 11 (invalid, starts with a number) */
    /* 12 (invalid, starts with a number) */
    /* 13 (invalid, starts with a number) */
    /* 14 (invalid, starts with a number) */
    /* 15 (invalid, starts with a number) */
    /* 16 (invalid, starts with a number) */
    /* 17 (invalid, starts with a number) */
    /* 18 (invalid, starts with a number) */
    /* 19 (invalid, starts with a number) */
    /* 20 (invalid, starts with a number) */
}
enum Service {
    UNKNOWN,
    CTL,
    WDS,
    DMS,
    NAS,
    QOS,
    WMS,
    PDS,
    AUTH,
    AT,
    VOICE,
    CAT2,
    UIM,
    PBM,
    QCHAT,
    RMTFS,
    TEST,
    LOC,
    SAR,
    IMS,
    ADC,
    CSD,
    MFS,
    TIME,
    TS,
    TMD,
    SAP,
    WDA,
    TSYNC,
    RFSA,
    CSVT,
    QCMAP,
    IMSP,
    IMSVT,
    IMSA,
    COEX,
    PDC,
    STX,
    BIT,
    IMSRTP,
    RFRPE,
    DSD,
    SSCTL,
    DPM,
    CAT,
    RMS,
    OMA,
    FOTA,
    GMS,
    GAS,
}
enum SioPort {
    NONE,
    A2_MUX_RMNET0,
    A2_MUX_RMNET1,
    A2_MUX_RMNET2,
    A2_MUX_RMNET3,
    A2_MUX_RMNET4,
    A2_MUX_RMNET5,
    A2_MUX_RMNET6,
    A2_MUX_RMNET7,
}
enum UimCardApplicationPersonalizationFeature {
    GW_NETWORK,
    GW_NETWORK_SUBSET,
    GW_SERVICE_PROVIDER,
    GW_CORPORATE,
    GW_UIM,
    /* 1X_NETWORK_TYPE_1 (invalid, starts with a number) */
    /* 1X_NETWORK_TYPE_2 (invalid, starts with a number) */
    /* 1X_HRPD (invalid, starts with a number) */
    /* 1X_SERVICE_PROVIDER (invalid, starts with a number) */
    /* 1X_CORPORATE (invalid, starts with a number) */
    /* 1X_RUIM (invalid, starts with a number) */
    UNKNOWN,
}
enum UimCardApplicationPersonalizationState {
    UNKNOWN,
    IN_PROGRESS,
    READY,
    CODE_REQUIRED,
    PUK_CODE_REQUIRED,
    PERMANENTLY_BLOCKED,
}
enum UimCardApplicationState {
    UNKNOWN,
    DETECTED,
    PIN1_OR_UPIN_PIN_REQUIRED,
    PUK1_OR_UPIN_PUK_REQUIRED,
    CHECK_PERSONALIZATION_STATE,
    PIN1_BLOCKED,
    ILLEGAL,
    READY,
}
enum UimCardApplicationType {
    UNKNOWN,
    SIM,
    USIM,
    RUIM,
    CSIM,
    ISIM,
}
enum UimCardError {
    UNKNOWN,
    POWER_DOWN,
    POLL,
    NO_ATR_RECEIVED,
    VOLTAGE_MISMATCH,
    PARITY,
    POSSIBLY_REMOVED,
    TECHNICAL,
}
enum UimCardProtocol {
    UNKNOWN,
    ICC,
    UICC,
}
enum UimCardState {
    ABSENT,
    PRESENT,
    ERROR,
}
enum UimDepersonalizationOperation {
    DEACTIVATE,
    UNBLOCK,
}
enum UimFileType {
    TRANSPARENT,
    CYCLIC,
    LINEAR_FIXED,
    DEDICATED_FILE,
    MASTER_FILE,
}
enum UimPhysicalCardState {
    UNKNOWN,
    ABSENT,
    PRESENT,
}
enum UimPinId {
    UNKNOWN,
    PIN1,
    PIN2,
    UPIN,
    HIDDEN_KEY,
}
enum UimPinState {
    NOT_INITIALIZED,
    ENABLED_NOT_VERIFIED,
    ENABLED_VERIFIED,
    DISABLED,
    BLOCKED,
    PERMANENTLY_BLOCKED,
}
enum UimRefreshMode {
    RESET,
    INIT,
    INIT_FCN,
    FCN,
    INIT_FULL_FCN,
    APP_RESET,
    /* 3G_RESET (invalid, starts with a number) */
}
enum UimRefreshStage {
    WAIT_FOR_OK,
    START,
    END_WITH_SUCCESS,
    END_WITH_FAILURE,
}
enum UimSecurityAttributeLogic {
    ALWAYS,
    NEVER,
    AND,
    OR,
    SINGLE,
}
enum UimSessionType {
    PRIMARY_GW_PROVISIONING,
    PRIMARY_1X_PROVISIONING,
    SECONDARY_GW_PROVISIONING,
    SECONDARY_1X_PROVISIONING,
    NONPROVISIONING_SLOT_1,
    NONPROVISIONING_SLOT_2,
    CARD_SLOT_1,
    CARD_SLOT_2,
    LOGICAL_CHANNEL_SLOT_1,
    LOGICAL_CHANNEL_SLOT_2,
    TERTIARY_GW_PROVISIONING,
    TERTIARY_1X_PROVISIONING,
    QUATERNARY_GW_PROVISIONING,
    QUATERNARY_1X_PROVISIONING,
    QUINARY_GW_PROVISIONING,
    QUINARY_1X_PROVISIONING,
    NONPROVISIONING_SLOT_3,
    NONPROVISIONING_SLOT_4,
    NONPROVISIONING_SLOT_5,
    CARD_SLOT_3,
    CARD_SLOT_4,
    CARD_SLOT_5,
    LOGICAL_CHANNEL_SLOT_3,
    LOGICAL_CHANNEL_SLOT_4,
    LOGICAL_CHANNEL_SLOT_5,
}
enum UimSlotState {
    INACTIVE,
    ACTIVE,
}
enum VoiceAlphaDataCodingScheme {
    GSM,
    UCS2,
}
enum VoiceAls {
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
}
enum VoiceCallControlResultType {
    VOICE,
    SUPS,
    USSD,
}
enum VoiceCallControlSupplementaryServiceType {
    ACTIVATE,
    DEACTIVATE,
    REGISTER,
    ERASE,
    INTERROGATE,
    REGISTER_PASSWORD,
    USSD,
}
enum VoiceCallDirection {
    UNKNOWN,
    MO,
    MT,
}
enum VoiceCallEndReason {
    OFFLINE,
    CDMA_LOCK,
    NO_SERVICE,
    FADE,
    INTERCEPT,
    REORDER,
    RELEASE_NORMAL,
    RELEASE_SO_REJECT,
    INCOMING_CALL,
    ALERT_STOP,
    CLIENT_END,
    ACTIVATION,
    MC_ABORT,
    MAX_ACCESS_PROBE,
    PSIST_N,
    UIM_NOT_PRESENT,
    ACCESS_ATTEMPT_IN_PROGRESS,
    ACCESS_FAILURE,
    ACCESS_RETRY_ORDER,
    CCS_NOT_SUPPORTED_BY_BS,
    NO_RESPONSE_FROM_BS,
    REJECTED_BY_BS,
    INCOMPATIBLE,
    ACCESS_BLOCK,
    ALREADY_IN_TC,
    EMERGENCY_FLASHED,
    USER_CALL_ORIGINATED_DURING_GPS,
    USER_CALL_ORIGINATED_DURING_SMS,
    USER_CALL_ORIGINATED_DURING_DATA,
    REDIRECTION_OR_HANDOFF,
    ACCESS_BLOCK_ALL,
    OTASP_SPC_ERR,
    IS707B_MAX_ACCESS_PROBES,
    ACCESS_FAILURE_REJECT_ORDER,
    ACCESS_FAILURE_RETRY_ORDER,
    TIMEOUT_T42,
    TIMEOUT_T40,
    SERVICE_INIT_FAILURE,
    TIMEOUT_T50,
    TIMEOUT_T51,
    RL_ACK_TIMEOUT,
    BAD_FORWARD_LINK,
    TRM_REQUEST_FAILED,
    TIMEOUT_T41,
    INCOMING_REJECTED,
    SETUP_REJECTED,
    NETWORK_END,
    NO_FUNDS,
    NO_GW_SERVICE,
    NO_CDMA_SERVICE,
    NO_FULL_SERVICE,
    MAX_PS_CALLS,
    UNKNOWN_SUBSCRIBER,
    ILLEGAL_SUBSCRIBER,
    BEARER_SERVICE_NOT_PROVISIONED,
    TELE_SERVICE_NOT_PROVISIONED,
    ILLEGAL_EQUIPMENT,
    CALL_BARRED,
    ILLEGAL_SS_OPERATION,
    SS_ERROR_STATUS,
    SS_NOT_AVAILABLE,
    SS_SUBSCRIPTION_VIOLATION,
    SS_INCOMPATIBILITY,
    FACILITY_NOT_SUPPORTED,
    ABSENT_SUBSCRIBER,
    SHORT_TERM_DENIAL,
    LONG_TERM_DENIAL,
    SYSTEM_FAILURE,
    DATA_MISSING,
    UNEXPECTED_DATA_VALUE,
    PASSWORD_REGISTRATION_FAILURE,
    NEGATIVE_PASSWORD_CHECK,
    NUM_OF_PASSWORD_ATTEMPTS_VIOLATION,
    POSITION_METHOD_FAILURE,
    UNKNOWN_ALPHABET,
    USSD_BUSY,
    REJECTED_BY_USER,
    REJECTED_BY_NETWORK,
    DEFLECTION_TO_SERVED_SUBSCRIBER,
    SPECIAL_SERVICE_CODE,
    INVALID_DEFLECTED_TO_NUMBER,
    MULTIPARTY_PARTICIPANTS_EXCEEDED,
    RESOURCES_NOT_AVAILABLE,
    UNASSIGNED_NUMBER,
    NO_ROUTE_TO_DESTINATION,
    CHANNEL_UNACCEPTABLE,
    OPERATOR_DETERMINED_BARRING,
    NORMAL_CALL_CLEARING,
    USER_BUSY,
    NO_USER_RESPONDING,
    USER_ALERTING_NO_ANSWER,
    CALL_REJECTED,
    NUMBER_CHANGED,
    PREEMPTION,
    DESTINATION_OUT_OF_ORDER,
    INVALID_NUMBER_FORMAT,
    FACILITY_REJECTED,
    RESPONSE_TO_STATUS_ENQUIRY,
    NORMAL_UNSPECIFIED,
    NO_CIRCUIT_OR_CHANNEL_AVAILABLE,
    NETWORK_OUT_OF_ORDER,
    TEMPORARY_FAILURE,
    SWITCHING_EQUIPMENT_CONGESTION,
    ACCESS_INFORMATION_DISCARDED,
    REQUESTED_CIRCUIT_OR_CHANNEL_NOT_AVAILABLE,
    RESOURCES_UNAVAILABLE_OR_UNSPECIFIED,
    QOS_UNAVAILABLE,
    REQUESTED_FACILITY_NOT_SUBSCRIBED,
    INCOMING_CALLS_BARRED_WITHIN_CUG,
    BEARER_CAPABILITY_NOT_AUTH,
    BEARER_CAPABILITY_UNAVAILABLE,
    SERVICE_OPTION_NOT_AVAILABLE,
    ACM_LIMIT_EXCEEDED,
    BEARER_SERVICE_NOT_IMPLEMENTED,
    REQUESTED_FACILITY_NOT_IMPLEMENTED,
    ONLY_DIGITAL_INFORMATION_BEARER_AVAILABLE,
    SERVICE_OR_OPTION_NOT_IMPLEMENTED,
    INVALID_TRANSACTION_IDENTIFIER,
    USER_NOT_MEMBER_OF_CUG,
    INCOMPATIBLE_DESTINATION,
    INVALID_TRANSIT_NETWORK_SELECTION,
    SEMANTICALLY_INCORRECT_MESSAGE,
    INVALID_MANDATORY_INFORMATION,
    MESSAGE_TYPE_NOT_IMPLEMENTED,
    MESSAGE_TYPE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE,
    INFORMATION_ELEMENT_NON_EXISTENT,
    CONDITIONAL_IE_ERROR,
    MESSAGE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE,
    RECOVERY_ON_TIMER_EXPIRED,
    PROTOCOL_ERROR_UNSPECIFIED,
    INTERWORKING_UNSPECIFIED,
    OUTGOING_CALLS_BARRED_WITHIN_CUG,
    NO_CUG_SELECTION,
    UNKNOWN_CUG_INDEX,
    CUG_INDEX_INCOMPATIBLE,
    CUG_CALL_FAILURE_UNSPECIFIED,
    CLIR_NOT_SUBSCRIBED,
    CCBS_POSSIBLE,
    CCBS_NOT_POSSIBLE,
    IMSI_UNKNOWN_IN_HLR,
    ILLEGAL_MS,
    IMSI_UNKNOWN_IN_VLR,
    IMEI_NOT_ACCEPTED,
    ILLEGAL_ME,
    PLMN_NOT_ALLOWED,
    LOCATION_AREA_NOT_ALLOWED,
    ROAMING_NOT_ALLOWED_IN_THIS_LOCATION_AREA,
    NO_SUITABLE_CELLS_IN_LOCATION_AREA,
    NETWORK_FAILURE,
    MAC_FAILURE,
    SYNCH_FAILURE,
    NETWORK_CONGESTION,
    GSM_AUTHENTICATION_UNACCEPTABLE,
    SERVICE_NOT_SUBSCRIBED,
    SERVICE_TEMPORARILY_OUT_OF_ORDER,
    CALL_CANNOT_BE_IDENTIFIED,
    INCORRECT_SEMANTICS_IN_MESSAGE,
    MANDATORY_INFORMATION_INVALID,
    ACCESS_STRATUM_FAILURE,
    INVALID_SIM,
    WRONG_STATE,
    ACCESS_CLASS_BLOCKED,
    NO_RESOURCES,
    INVALID_USER_DATA,
    TIMER_T3230_EXPIRED,
    NO_CELL_AVAILABLE,
    ABORT_MESSAGE_RECEIVED,
    RADIO_LINK_LOST,
    TIMER_T303_EXPIRED,
    CNM_MM_RELEASE_PENDING,
    ACCESS_STRATUM_REJECT_RR_RELEASE_INDICATION,
    ACCESS_STRATUM_REJECT_RR_RANDOM_ACCESS_FAILURE,
    ACCESS_STRATUM_REJECT_RRC_RELEASE_INDICATION,
    ACCESS_STRATUM_REJECT_RRC_CLOSE_SESSION_INDICATION,
    ACCESS_STRATUM_REJECT_RRC_OPEN_SESSION_FAILURE,
    ACCESS_STRATUM_REJECT_LOW_LEVEL_FAILURE,
    ACCESS_STRATUM_REJECT_LOW_LEVEL_FAILURE_REDIAL_NOT_ALLOWED,
    ACCESS_STRATUM_REJECT_LOW_LEVEL_IMMEDIATE_RETRY,
    ACCESS_STRATUM_REJECT_ABORT_RADIO_UNAVAILABLE,
    SERVICE_OPTION_NOT_SUPPORTED,
    BAD_REQUEST_WAIT_INVITE,
    BAD_REQUEST_WAIT_REINVITE,
    INVALID_REMOTE_URI,
    REMOTE_UNSUPPORTED_MEDIA_TYPE,
    PEER_NOT_REACHABLE,
    NETWORK_NO_RESPONSE_TIMEOUT,
    NETWORK_NO_RESPONSE_HOLD_FAILURE,
    DATA_CONNECTION_LOST,
    UPGRADE_DOWNGRADE_REJECTED,
    SIP_403_FORBIDDEN,
    NO_NETWORK_RESPONSE,
    UPGRADE_DOWNGRADE_FAILED,
    UPGRADE_DOWNGRADE_CANCELLED,
    SSAC_REJECT,
    THERMAL_EMERGENCY,
    /* 1XCSFB_SOFT_FAILURE (invalid, starts with a number) */
    /* 1XCSFB_HARD_FAILURE (invalid, starts with a number) */
}
enum VoiceCallMode {
    UNKNOWN,
    CDMA,
    GSM,
    UMTS,
    LTE,
}
enum VoiceCallState {
    UNKNOWN,
    ORIGINATION,
    INCOMING,
    CONVERSATION,
    CC_IN_PROGRESS,
    ALERTING,
    HOLD,
    WAITING,
    DISCONNECTING,
    END,
    SETUP,
}
enum VoiceCallType {
    VOICE,
    VOICE_IP,
    OTAPA,
    NON_STD_OTASP,
    EMERGENCY,
    SUPS,
}
enum VoiceDomain {
    CS_ONLY,
    PS_ONLY,
    CS_PREFERRED,
    PS_PREFERRED,
}
enum VoicePresentation {
    ALLOWED,
    RESTRICTED,
    UNAVAILABLE,
    PAYPHONE,
}
enum VoicePrivacy {
    STANDARD,
    ENHANCED,
}
enum VoiceServiceOption {
    WILD,
    IS_96A,
    EVRC,
    /* 13K_IS733 (invalid, starts with a number) */
    SELECTABLE_MODE_VOCODER,
    /* 4GV_NARROW_BAND (invalid, starts with a number) */
    /* 4GV_WIDE_BAND (invalid, starts with a number) */
    /* 13K (invalid, starts with a number) */
    IS_96,
    WVRC,
}
enum VoiceSupplementaryServiceAction {
    ACTIVATE,
    DEACTIVATE,
    REGISTER,
    ERASE,
}
enum VoiceSupplementaryServiceNotificationType {
    OUTGOING_CALL_IS_FORWARDED,
    OUTGOING_CALL_IS_WAITING,
    OUTGOING_CUG_CALL,
    OUTGOING_CALLS_BARRED,
    OUTGOING_CALL_IS_DEFLECTED,
    INCOMING_CUG_CALL,
    INCOMING_CALLS_BARRED,
    INCOMING_FORWARDED_CALL,
    INCOMING_DEFLECTED_CALL,
    INCOMING_CALL_IS_FORWARDED,
    UNCONDITIONAL_CALL_FORWARD_ACTIVE,
    CONDITIONAL_CALL_FORWARD_ACTIVE,
    CLIR_SUPPRESSION_REJECTED,
    CALL_IS_ON_HOLD,
    CALL_IS_RETRIEVED,
    CALL_IS_IN_MULTIPARTY,
    INCOMING_CALL_IS_ECT,
}
enum VoiceSupplementaryServiceReason {
    FORWARD_UNCONDITIONAL,
    FORWARD_MOBILE_BUSY,
    FORWARD_NO_REPLY,
    FORWARD_UNREACHABLE,
    FORWARD_ALL,
    FORWARD_ALL_CONDITIONAL,
    ALL_OUTGOING,
    OUTGOING_INTERNAL,
    OUTGOING_INTERNAL_EXTERNAL_TO_HOME,
    ALL_INCOMING,
    INCOMING_ROAMING,
    BAR_ALL,
    BAR_ALL_OUTGOING,
    BAR_ALL_INCOMING,
    CALL_WAITING,
}
enum VoiceSupplementaryServiceType {
    RELEASE_HELD_OR_WAITING,
    RELEASE_ACTIVE_ACCEPT_HELD_OR_WAITING,
    HOLD_ACTIVE_ACCEPT_WAITING_OR_HELD,
    HOLD_ALL_EXCEPT_SPECIFIED_CALL,
    MAKE_CONFERENCE_CALL,
    EXPLICIT_CALL_TRANSFER,
    CCBS_ACTIVATION,
    END_ALL_CALLS,
    RELEASE_SPECIFIED_CALL,
    LOCAL_HOLD,
    LOCAL_UNHOLD,
}
enum VoiceTtyMode {
    FULL,
    VCO,
    HCO,
    OFF,
}
enum VoiceUserAction {
    UNKNOWN,
    NOT_REQUIRED,
    REQUIRED,
}
enum VoiceUssDataCodingScheme {
    UNKNOWN,
    ASCII,
    /* 8BIT (invalid, starts with a number) */
    UCS2,
}
enum WdaDataAggregationProtocol {
    DISABLED,
    TLP,
    QC_NCM,
    MBIM,
    RNDIS,
    QMAP,
    QMAPV2,
    QMAPV3,
    QMAPV4,
    QMAPV5,
}
enum WdaLinkLayerProtocol {
    UNKNOWN,
    /* 802_3 (invalid, starts with a number) */
    RAW_IP,
}
enum WdsAttachPdnListAction {
    NONE,
    DETACH_OR_PDN_DISCONNECT,
}
enum WdsAutoconnectSetting {
    DISABLED,
    ENABLED,
    PAUSED,
}
enum WdsAutoconnectSettingRoaming {
    ALLOWED,
    HOME_ONLY,
}
enum WdsCallEndReason {
    GENERIC_UNSPECIFIED,
    GENERIC_CLIENT_END,
    GENERIC_NO_SERVICE,
    GENERIC_FADE,
    GENERIC_RELEASE_NORMAL,
    GENERIC_ACCESS_ATTEMPT_IN_PROGRESS,
    GENERIC_ACCESS_FAILURE,
    GENERIC_REDIRECTION_OR_HANDOFF,
    GENERIC_CLOSE_IN_PROGRESS,
    GENERIC_AUTHENTICATION_FAILED,
    GENERIC_INTERNAL_ERROR,
    CDMA_LOCK,
    CDMA_INTERCEPT,
    CDMA_REORDER,
    CDMA_RELEASE_SO_REJECT,
    CDMA_INCOMING_CALL,
    CDMA_ALERT_STOP,
    CDMA_ACTIVATION,
    CDMA_MAX_ACCESS_PROBES,
    CDMA_CCS_NOT_SUPPORTED_BY_BS,
    CDMA_NO_RESPONSE_FROM_BS,
    CDMA_REJECTED_BY_BS,
    CDMA_INCOMPATIBLE,
    CDMA_ALREADY_IN_TC,
    CDMA_USER_CALL_ORIGINATED_DURING_GPS,
    CDMA_USER_CALL_ORIGINATED_DURING_SMS,
    CDMA_NO_SERVICE,
    GSM_WCDMA_CONFERENCE_FAILED,
    GSM_WCDMA_INCOMING_REJECTED,
    GSM_WCDMA_NO_SERVICE,
    GSM_WCDMA_NETWORK_END,
    GSM_WCDMA_LLC_SNDCP_FAILURE,
    GSM_WCDMA_INSUFFICIENT_RESOURCES,
    GSM_WCDMA_OPTION_TEMPORARILY_OUT_OF_ORDER,
    GSM_WCDMA_NSAPI_ALREADY_USED,
    GSM_WCDMA_REGULAR_DEACTIVATION,
    GSM_WCDMA_NETWORK_FAILURE,
    GSM_WCDMA_REATTACH_REQUIRED,
    GSM_WCDMA_PROTOCOL_ERROR,
    GSM_WCDMA_OPERATOR_DETERMINED_BARRING,
    GSM_WCDMA_UNKNOWN_APN,
    GSM_WCDMA_UNKNOWN_PDP,
    GSM_WCDMA_GGSN_REJECT,
    GSM_WCDMA_ACTIVATION_REJECT,
    GSM_WCDMA_OPTION_NOT_SUPPORTED,
    GSM_WCDMA_OPTION_UNSUBSCRIBED,
    GSM_WCDMA_QOS_NOT_ACCEPTED,
    GSM_WCDMA_TFT_SEMANTIC_ERROR,
    GSM_WCDMA_TFT_SYNTAX_ERROR,
    GSM_WCDMA_UNKNOWN_PDP_CONTEXT,
    GSM_WCDMA_FILTER_SEMANTIC_ERROR,
    GSM_WCDMA_FILTER_SYNTAX_ERROR,
    GSM_WCDMA_PDP_WITHOUT_ACTIVE_TFT,
    GSM_WCDMA_INVALID_TRANSACTION_ID,
    GSM_WCDMA_MESSAGE_INCORRECT_SEMANTIC,
    GSM_WCDMA_INVALID_MANDATORY_INFO,
    GSM_WCDMA_MESSAGE_TYPE_UNSUPPORTED,
    GSM_WCDMA_MESSAGE_TYPE_NONCOMPATIBLE_STATE,
    GSM_WCDMA_UNKNOWN_INFO_ELEMENT,
    GSM_WCDMA_CONDITIONAL_IE_ERROR,
    GSM_WCDMA_MESSAGE_AND_PROTOCOL_STATE_UNCOMPATIBLE,
    GSM_WCDMA_APN_TYPE_CONFLICT,
    GSM_WCDMA_NO_GPRS_CONTEXT,
    GSM_WCDMA_FEATURE_NOT_SUPPORTED,
    EVDO_CONNECTION_DENY_GENERAL_OR_BUSY,
    EVDO_CONNECTION_DENY_BILLING_OR_AUTHENTICATION_FAILURE,
    EVDO_HDR_CHANGE,
    EVDO_HDR_EXIT,
    EVDO_HDR_NO_SESSION,
    EVDO_HDR_ORIGINATION_DURING_GPS_FIX,
    EVDO_HDR_CONNECTION_SETUP_TIMEOUT,
    EVDO_HDR_RELEASED_BY_CM,
}
enum WdsCallType {
    LAPTOP,
    EMBEDDED,
}
enum WdsClientType {
    TETHERED,
    UNDEFINED,
}
enum WdsConnectionStatus {
    UNKNOWN,
    DISCONNECTED,
    CONNECTED,
    SUSPENDED,
    AUTHENTICATING,
}
enum WdsDataBearerTechnology {
    UNKNOWN,
    CDMA20001X,
    /* 1XEVDO (invalid, starts with a number) */
    GSM,
    UMTS,
    /* 1XEVDO_REVA (invalid, starts with a number) */
    EDGE,
    HSDPA,
    HSUPA,
    HSDPA_HSUPDA,
    LTE,
    EHRPD,
    HSDPAPLUS,
    HSDPAPLUS_HSUPA,
    DCHSDPAPLUS,
    DCHSDPAPLUS_HSUPA,
    HSDPAPLUS_PLUS_64QAM,
    HSDPAPLUS_PLUS_64QAM_HSUPA,
    TDSCDMA,
    TDSCDMA_HSDPA,
    TDSCDMA_HSUPA,
}
enum WdsDataCallStatus {
    UNKNOWN,
    ACTIVATED,
    TERMINATED,
}
enum WdsDataCallType {
    UNKNOWN,
    EMBEDDED,
    TETHERED,
    MODEM_EMBEDDED,
}
enum WdsDataSystem {
    UNKNOWN,
    CDMA1X,
    CDMA1X_EVDO,
    GPRS,
    WCDMA,
    LTE,
    TDSCDMA,
}
enum WdsDataSystemNetworkType {
    /* 3GPP (invalid, starts with a number) */
    /* 3GPP2 (invalid, starts with a number) */
}
enum WdsDeliveryOrder {
    SUBSCRIBE,
    ON,
    OFF,
}
enum WdsDormancyStatus {
    UNKNOWN,
    TRAFFIC_CHANNEL_DORMANT,
    TRAFFIC_CHANNEL_ACTIVE,
}
enum WdsDsProfileError {
    UNKNOWN,
    FAIL,
    INVALID_HANDLE,
    INVALID_OPERATION,
    INVALID_PROFILE_TYPE,
    INVALID_PROFILE_NUMBER,
    INVALID_PROFILE_ID,
    INVALID_ARGUMENT,
    REGISTRY_NOT_INITIALIZED,
    INVALID_PARAMETER_LENGTH,
    LIST_END,
    INVALID_SUBSCRIPTION_ID,
    INVALID_PROFILE_FAMILY,
    /* 3GPP_INVALID_PROFILE_FAMILY (invalid, starts with a number) */
    /* 3GPP_ACCESS_ERROR (invalid, starts with a number) */
    /* 3GPP_CONTEXT_NOT_DEFINED (invalid, starts with a number) */
    /* 3GPP_VALID_FLAG_NOT_SET (invalid, starts with a number) */
    /* 3GPP_READ_ONLY_FLAG_SET (invalid, starts with a number) */
    /* 3GPP_OUT_OF_PROFILES (invalid, starts with a number) */
    /* 3GPP2_INVALID_PROFILE_ID (invalid, starts with a number) */
}
enum WdsExtendedTechnologyPreference {
    CDMA,
    UMTS,
    EPC,
    EMBMS,
    MODEM_LINK_LOCAL,
}
enum WdsIpFamily {
    UNKNOWN,
    IPV4,
    IPV6,
    UNSPECIFIED,
}
enum WdsIpSupportType {
    IPV4,
    IPV6,
    IPV4V6,
}
enum WdsNetworkType {
    UNKNOWN,
    /* 3GPP2 (invalid, starts with a number) */
    /* 3GPP (invalid, starts with a number) */
}
enum WdsPdpDataCompressionType {
    OFF,
    MANUFACTURER_PREFERRED,
    V42BIS,
    V44,
}
enum WdsPdpHeaderCompressionType {
    OFF,
    MANUFACTURER_PREFERRED,
    RFC1144,
    RFC2507,
    RFC3095,
}
enum WdsPdpType {
    IPV4,
    PPP,
    IPV6,
    IPV4_OR_IPV6,
}
enum WdsProfileFamily {
    EMBEDDED,
    TETHERED,
}
enum WdsProfileType {
    /* 3GPP (invalid, starts with a number) */
    /* 3GPP2 (invalid, starts with a number) */
}
enum WdsQosClassIdentifier {
    NETWORK_ASSIGN,
    GUARANTEED_BITRATE1,
    GUARANTEED_BITRATE2,
    GUARANTEED_BITRATE3,
    GUARANTEED_BITRATE4,
    NON_GUARANTEED_BITRATE5,
    NON_GUARANTEED_BITRATE6,
    NON_GUARANTEED_BITRATE7,
    NON_GUARANTEED_BITRATE8,
}
enum WdsRadioAccessTechnology {
    NULL_BEARER,
    /* 3GPP_WCDMA (invalid, starts with a number) */
    /* 3GPP_GERAN (invalid, starts with a number) */
    /* 3GPP_LTE (invalid, starts with a number) */
    /* 3GPP_TDSCDMA (invalid, starts with a number) */
    /* 3GPP_WLAN (invalid, starts with a number) */
    /* 3GPP_MAXIMUM (invalid, starts with a number) */
    /* 3GPP2_1X (invalid, starts with a number) */
    /* 3GPP2_HRPD (invalid, starts with a number) */
    /* 3GPP2_EHRPD (invalid, starts with a number) */
    /* 3GPP2_WLAN (invalid, starts with a number) */
    /* 3GPP2_MAXIMUM (invalid, starts with a number) */
}
enum WdsSduErroneousDelivery {
    SUBSCRIBE,
    NO_DETECTION,
    ENABLED,
    DISABLED,
}
enum WdsSduErrorRatio {
    SUBSCRIBE,
    /* 1E2 (invalid, starts with a number) */
    /* 7E3 (invalid, starts with a number) */
    /* 1E3 (invalid, starts with a number) */
    /* 1E4 (invalid, starts with a number) */
    /* 1E5 (invalid, starts with a number) */
    /* 1E6 (invalid, starts with a number) */
    /* 1E1 (invalid, starts with a number) */
}
enum WdsSduResidualBitErrorRatio {
    SUBSCRIBE,
    /* 5E2 (invalid, starts with a number) */
    /* 1E2 (invalid, starts with a number) */
    /* 5E3 (invalid, starts with a number) */
    /* 4E3 (invalid, starts with a number) */
    /* 1E3 (invalid, starts with a number) */
    /* 1E4 (invalid, starts with a number) */
    /* 1E5 (invalid, starts with a number) */
    /* 1E6 (invalid, starts with a number) */
    /* 6E8 (invalid, starts with a number) */
}
enum WdsTetheredCallType {
    NON_TETHERED,
    RMNET,
    DUN,
}
enum WdsTrafficClass {
    SUBSCRIBED,
    CONVERSATIONAL,
    STREAMING,
    INTERACTIVE,
    BACKGROUND,
}
enum WdsVerboseCallEndReason3gpp {
    OPERATOR_DETERMINED_BARRING,
    LLC_SNDCP_FAILURE,
    INSUFFICIENT_RESOURCES,
    UNKNOWN_APN,
    UNKNOWN_PDP,
    AUTHENTICATION_FAILED,
    GGSN_REJECT,
    ACTIVATION_REJECT,
    OPTION_NOT_SUPPORTED,
    OPTION_UNSUBSCRIBED,
    OPTION_TEMPORARILY_OUT_OF_ORDER,
    NSAPI_ALREADY_USED,
    REGULAR_DEACTIVATION,
    QOS_NOT_ACCEPTED,
    NETWORK_FAILURE,
    REATTACH_REQUIRED,
    FEATURE_NOT_SUPPORTED,
    TFT_SEMANTIC_ERROR,
    TFT_SYNTAX_ERROR,
    UNKNOWN_PDP_CONTEXT,
    FILTER_SEMANTIC_ERROR,
    FILTER_SYNTAX_ERROR,
    PDP_WITHOUT_ACTIVE_TFT,
    IPV4_ONLY_ALLOWED,
    IPV6_ONLY_ALLOWED,
    SINGLE_ADDRESS_BEARER_ONLY,
    ESM_INFO_NOT_RECEIVED,
    PDN_CONNECTION_DOES_NOT_EXIST,
    MULTIPLE_CONNECTION_TO_SAME_PDN_NOT_ALLOWED,
    INVALID_TRANSACTION_ID,
    MESSAGE_INCORRECT_SEMANTIC,
    INVALID_MANDATORY_INFO,
    MESSAGE_TYPE_UNSUPPORTED,
    MESSAGE_TYPE_NONCOMPATIBLE_STATE,
    UNKNOWN_INFO_ELEMENT,
    CONDITIONAL_IE_ERROR,
    MESSAGE_AND_PROTOCOL_STATE_UNCOMPATIBLE,
    PROTOCOL_ERROR,
    APN_TYPE_CONFLICT,
    INVALID_PROXY_CALL_SESSION_CONTROL_FUNCTION_ADDRESS,
}
enum WdsVerboseCallEndReasonCm {
    CDMA_LOCK,
    INTERCEPT,
    REORDER,
    RELEASE_SO_REJECT,
    INCOMING_CALL,
    ALERT_STOP,
    ACTIVATION,
    MAX_ACCESS_PROBES,
    CCS_NOT_SUPPORTED_BY_BS,
    NO_RESPONSE_FROM_BS,
    REJECTED_BY_BS,
    INCOMPATIBLE,
    ALREADY_IN_TC,
    USER_CALL_ORIGINATED_DURING_GPS,
    USER_CALL_ORIGINATED_DURING_SMS,
    NO_CDMA_SERVICE,
    MC_ABORT,
    PSIST_NG,
    UIM_NOT_PRESENT,
    RETRY_ORDER,
    ACCESS_BLOCK,
    ACCESS_BLOCK_ALL,
    IS707B_MAX_ACCESS_PROBES,
    THERMAL_EMERGENCY,
    CALL_ORIGINATION_THROTTLED,
    USER_CALL_ORIGINATED,
    CONFERENCE_FAILED,
    INCOMING_REJECTED,
    NO_GATEWAY_SERVICE,
    NO_GPRS_CONTEXT,
    ILLEGAL_MS,
    ILLEGAL_ME,
    GPRS_AND_NON_GPRS_SERVICES_NOT_ALLOWED,
    GPRS_SERVICES_NOT_ALLOWED,
    MS_IDENTITY_NOT_DERIVED_BY_THE_NETWORK,
    IMPLICITLY_DETACHED,
    PLMN_NOT_ALLOWED,
    LA_NOT_ALLOWED,
    GPRS_SERVICES_NOT_ALLOWED_IN_PLMN,
    PDP_DUPLICATE,
    UE_RAT_CHANGE,
    CONGESTION,
    NO_PDP_CONTEXT_ACTIVATED,
    ACCESS_CLASS_DSAC_REJECTION,
    PDP_ACTIVATE_MAX_RETRY_FAILED,
    RAB_FAILURE,
    EPS_SERVICE_NOT_ALLOWED,
    TRACKING_AREA_NOT_ALLOWED,
    ROAMING_NOT_ALLOWED_IN_TRACKING_AREA,
    NO_SUITABLE_CELLS_IN_TRACKING_AREA,
    NOT_AUTHORIZED_CLOSED_SUBSCRIBER_GROUP,
    ESM_UNKNOWN_EPS_BEARER_CONTEXT,
    DRB_RELEASED_AT_RRC,
    NAS_SIGNAL_CONNECTION_RELEASED,
    EMM_DETACHED,
    EMM_ATTACH_FAILED,
    EMM_ATTACH_STARTED,
    LTE_NAS_SERVICE_REQUEST_FAILED,
    ESM_ACTIVE_DEDICATED_BEARER_REACTIVATED_BY_NW,
    ESM_LOWER_LAYER_FAILURE,
    ESM_SYNC_UP_WITH_NW,
    ESM_NW_ACTIVATED_DEDICATED_BEARER_WITH_ID_OF_DEFAULT_BEARER,
    ESM_BAD_OTA_MESSAGE,
    ESM_DS_REJECTED_CALL,
    ESM_CONTEXT_TRANSFERRED_DUE_TO_IRAT,
    DS_EXPLICIT_DEACT,
    ESM_LOCAL_CAUSE_NONE,
    LTE_NAS_SERVICE_REQUEST_FAILED_NO_THROTTLE,
    ACL_FAILURE,
    LTE_NAS_SERVICE_REQUEST_FAILED_DS_DISALLOW,
    EMM_T3417_EXPIRED,
    EMM_T3417_EXT_EXPIRED,
    LRRC_UL_DATA_CONFIRMATION_FAILURE_TXN,
    LRRC_UL_DATA_CONFIRMATION_FAILURE_HANDOVER,
    LRRC_UL_DATA_CONFIRMATION_FAILURE_CONN_REL,
    LRRC_UL_DATA_CONFIRMATION_FAILURE_RLF,
    LRRC_UL_DATA_CONFIRMATION_FAILURE_CTRL_NOT_CONN,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_ABORTED,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_ACCESS_BARRED,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_CELL_RESELECTION,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_CONFIG_FAILURE,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_TIMER_EXPIRED,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_LINK_FAILURE,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_NOT_CAMPED,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_SI_FAILURE,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_REJECTED,
    LRRC_CONNECTION_RELEASE_NORMAL,
    LRRC_CONNECTION_RELEASE_RLF,
    LRRC_CONNECTION_RELEASE_CRE_FAILURE,
    LRRC_CONNECTION_RELEASE_OOS_DURING_CRE,
    LRRC_CONNECTION_RELEASE_ABORTED,
    LRRC_CONNECTION_RELEASE_SIB_READ_ERROR,
    DETACH_WITH_REATTACH_LTE_NW_DETACH,
    DETACH_WITHOUT_REATTACH_LTE_NW_DETACH,
    ESM_PROC_TIMEOUT,
    MESSAGE_EXCEED_MAX_L2_LIMIT,
    CONNECTION_DENY_GENERAL_OR_BUSY,
    CONNECTION_DENY_BILLING_OR_AUTHENTICATION_FAILURE,
    HDR_CHANGE,
    HDR_EXIT,
    HDR_NO_SESSION,
    HDR_ORIGINATION_DURING_GPS_FIX,
    HDR_CONNECTION_SETUP_TIMEOUT,
    HDR_RELEASED_BY_CM,
    HDR_COLLOCATED_ACQUISITION_FAILED,
    OTASP_COMMIT_IN_PROGRESS,
    HDR_NO_HYBRID_SERVICE,
    HDR_NO_LOCK_GRANTED,
    HOLD_OTHER_IN_PROGRESS,
    HDR_FADE,
    HDR_ACCESS_FAILURE,
    CLIENT_END,
    NO_SERVICE,
    FADE,
    RELEASE_NORMAL,
    ACCESS_ATTEMPT_IN_PROGRESS,
    ACCESS_FAILURE,
    REDIRECTION_OR_HANDOFF,
    OFFLINE,
    EMERGENCY_MODE,
    PHONE_IN_USE,
    INVALID_MODE,
    INVALID_SIM_STATE,
    NO_COLLOCATED_HDR,
    CALL_CONTROL_REJECTED,
}
enum WdsVerboseCallEndReasonEhrpd {
    SUBSCRIPTION_LIMITED_TO_IPV4,
    SUBSCRIPTION_LIMITED_TO_IPV6,
    VSNCP_TIMEOUT,
    VSNCP_FAILURE,
    VSNCP_3GPP2_GENERAL_ERROR,
    VSNCP_3GPP2_UNAUTHENTICATED_APN,
    VSNCP_3GPP2_PDN_LIMIT_EXCEEDED,
    VSNCP_3GPP2_NO_PDN_GATEWAY,
    VSNCP_3GPP2_PDN_GATEWAY_UNREACHABLE,
    VSNCP_3GPP2_PDN_GATEWAY_REJECTED,
    VSNCP_3GPP2_INSUFFICIENT_PARAMETERS,
    VSNCP_3GPP2_RESOURCE_UNAVAILABLE,
    VSNCP_3GPP2_ADMINISTRATIVELY_PROHIBITED,
    VSNCP_3GPP2_PDN_ID_IN_USE,
    VSNCP_3GPP2_SUBSCRIPTION_LIMITATION,
    VSNCP_3GPP2_PDN_EXISTS_FOR_THIS_APN,
}
enum WdsVerboseCallEndReasonInternal {
    ERROR,
    CALL_ENDED,
    UNKNOWN_INTERNAL_CAUSE,
    UNKNOWN_CAUSE,
    CLOSE_IN_PROGRESS,
    NETWORK_INITIATED_TERMINATION,
    APP_PREEMPTED,
    PDN_IPV4_CALL_DISALLOWED,
    PDN_IPV4_CALL_THROTTLED,
    PDN_IPV6_CALL_DISALLOWED,
    PDN_IPV6_CALL_THROTTLED,
    MODEM_RESTART,
    PDP_PPP_NOT_SUPPORTED,
    UNPREFERRED_RAT,
    PHYSICAL_LINK_CLOSE_IN_PROGRESS,
    APN_PENDING_HANDOVER,
    PROFILE_BEARER_INCOMPATIBLE,
    MMGDSI_CARD_EVENT,
    LPM_OR_POWER_DOWN,
    APN_DISABLED,
    MPIT_EXPIRED,
    IPV6_ADDRESS_TRANSFER_FAILED,
    TRAT_SWAP_FAILED,
    EHRPD_TO_HRPD_FALLBACK,
    MANDATORY_APN_DISABLED,
    MIP_CONFIG_FAILURE,
    PDN_INACTIVITY_TIMER_EXPIRED,
    MAX_V4_CONNECTIONS,
    MAX_V6_CONNECTIONS,
    APN_MISMATCH,
    IP_VERSION_MISMATCH,
    DUN_CALL_DISALLOWED,
    INVALID_PROFILE,
    EPC_NONEPC_TRANSITION,
    INVALID_PROFILE_ID,
    CALL_ALREADY_PRESENT,
    INTERFACE_IN_USE,
    IP_PDP_MISMATCH,
    APN_DISALLOWED_ON_ROAMING,
    APN_PARAMETER_CHANGE,
    INTERFACE_IN_USE_CONFIG_MATCH,
    NULL_APN_DISALLOWED,
    THERMAL_MITIGATION,
    SUBS_ID_MISMATCH,
    DATA_SETTINGS_DISABLED,
    DATA_ROAMING_SETTINGS_DISABLED,
    APN_FORMAT_INVALID,
    DDS_CALL_ABORT,
    VALIDATION_FAILURE,
}
enum WdsVerboseCallEndReasonIpv6 {
    PREFIX_UNAVAILABLE,
    HRPD_IPV6_DISABLED,
    DISABLED,
}
enum WdsVerboseCallEndReasonMip {
    ERROR_REASON_UNKNOWN,
    FA_ERROR_REASON_UNSPECIFIED,
    FA_ERROR_ADMINISTRATIVELY_PROHIBITED,
    FA_ERROR_INSUFFICIENT_RESOURCES,
    FA_ERROR_MOBILE_NODE_AUTHENTICATION_FAILURE,
    FA_ERROR_HA_AUTHENTICATION_FAILURE,
    FA_ERROR_REQUESTED_LIFETIME_TOO_LONG,
    FA_ERROR_MALFORMED_REQUEST,
    FA_ERROR_MALFORMED_REPLY,
    FA_ERROR_ENCAPSULATION_UNAVAILABLE,
    FA_ERROR_VJHC_UNAVAILABLE,
    FA_ERROR_REVERSE_TUNNEL_UNAVAILABLE,
    FA_ERROR_REVERSE_TUNNEL_MANDATORY_AND_T_BIT_NOT_SET,
    FA_ERROR_DELIVERY_STYLE_NOT_SUPPORTED,
    FA_ERROR_MISSING_NAI,
    FA_ERROR_MISSING_HA,
    FA_ERROR_MISSING_HOME_ADDRESS,
    FA_ERROR_UNKNOWN_CHALLENGE,
    FA_ERROR_MISSING_CHALLENGE,
    FA_ERROR_STALE_CHALLENGE,
    HA_ERROR_REASON_UNSPECIFIED,
    HA_ERROR_ADMINISTRATIVELY_PROHIBITED,
    HA_ERROR_INSUFFICIENT_RESOURCES,
    HA_ERROR_MOBILE_NODE_AUTHENTICATION_FAILURE,
    HA_ERROR_FA_AUTHENTICATION_FAILURE,
    HA_ERROR_REGISTRATION_ID_MISMATCH,
    HA_ERROR_MALFORMED_REQUEST,
    HA_ERROR_UNKNOWN_HA_ADDRESS,
    HA_ERROR_REVERSE_TUNNEL_UNAVAILABLE,
    HA_ERROR_REVERSE_TUNNEL_MANDATORY_AND_T_BIT_NOT_SET,
    HA_ERROR_ENCAPSULATION_UNAVAILABLE,
}
enum WdsVerboseCallEndReasonPpp {
    UNKNOWN,
    TIMEOUT,
    AUTHENTICATION_FAILURE,
    OPTION_MISMATCH,
    PAP_FAILURE,
    CHAP_FAILURE,
    CLOSE_IN_PROGRESS,
}
enum WdsVerboseCallEndReasonType {
    MIP,
    INTERNAL,
    CM,
    /* 3GPP (invalid, starts with a number) */
    PPP,
    EHRPD,
    IPV6,
}
enum WmsAckFailureCause {
    NO_NETWORK_RESPONSE,
    NETWORK_RELEASED_LINK,
    NOT_SENT,
}
enum WmsAckIndicator {
    SEND,
    DO_NOT_SEND,
}
enum WmsCdmaCauseCode {
    NETWORK_ADDRESS_VACANT,
    NETWORK_ADDRESS_TRANSLATION_FAILURE,
    NETWORK_RESOURCE_SHORTAGE,
    NETWORK_FAILURE,
    NETWORK_INVALID_TELESERVICE_ID,
    NETWORK_OTHER,
    DESTINATION_NO_PAGE_RESPONSE,
    DESTINATION_BUSY,
    DESTINATION_NO_ACK,
    DESTINATION_RESOURCE_SHORTAGE,
    DESTINATION_SMS_DELIVERY_POSTPONED,
    DESTINATION_OUT_OF_SERVICE,
    DESTINATION_NOT_AT_ADDRESS,
    DESTINATION_OTHER,
    RADIO_INTERFACE_RESOURCE_SHORTAGE,
    RADIO_INTERFACE_INCOMPATIBILITY,
    RADIO_INTERFACE_OTHER,
    GENERAL_ENCODING,
    GENERAL_SMS_ORIGIN_DENIED,
    GENERAL_SMS_DESTINATION_DENIED,
    GENERAL_SUPPLEMENTARY_SERVICE_NOT_SUPPORTED,
    GENERAL_SMS_NOT_SUPPORTED,
    GENERAL_MISSING_EXPECTED_PARAMETER,
    GENERAL_MISSING_MANDATORY_PARAMETER,
    GENERAL_UNRECOGNIZED_PARAMETER_VALUE,
    GENERAL_UNEXPECTED_PARAMETER_VALUE,
    GENERAL_USER_DATA_SIZE_ERROR,
    GENERAL_OTHER,
}
enum WmsCdmaErrorClass {
    TEMPORARY,
    PERMANENT,
    TEMPORARY_DEVICE,
    PERMANENT_DEVICE,
}
enum WmsCdmaServiceOption {
    AUTO,
    /* 6 (invalid, starts with a number) */
    /* 14 (invalid, starts with a number) */
}
enum WmsGsmUmtsRpCause {
    UNASSIGNED_NUMBER,
    OPERATOR_DETERMINED_BARRING,
    CALL_BARRED,
    RESERVED,
    SMS_TRANSFER_REJECTED,
    MEMORY_CAPACITY_EXCEEDED,
    DESTINATION_OUT_OF_ORDER,
    UNIDENTIFIED_SUBSCRIBER,
    FACILITY_REJECTED,
    UNKNOWN_SUBSCRIBER,
    NETWORK_OUF_OF_ORDER,
    TEMPORARY_FAILURE,
    CONGESTION,
    RESOURCES_UNAVAILABLE,
    FACILITY_NOT_SUBSCRIBED,
    FACILITY_NOT_IMPLEMENTED,
    INVALID_SMS_TRANSFER_REFERENCE_VALUE,
    SEMANTICALLY_INCORRECT_MESSAGE,
    INVALID_MANDATORY_INFO,
    MESSAGE_TYPE_NOT_IMPLEMENTED,
    MESSAGE_NOT_COMPATIBLE_WITH_SMS,
    INFORMATION_ELEMENT_NOT_IMPLEMENTED,
    PROTOCOL_ERROR,
    INTERWORKING,
}
enum WmsGsmUmtsTpCause {
    TELE_INTERWORKING_NOT_SUPPORTED,
    SHORT_MESSAGE_TYPE_0_NOT_SUPPORTED,
    SHORT_MESSAGE_CANNOT_BE_REPLACED,
    UNSPECIFIED_PID_ERROR,
    DCS_NOT_SUPPORTED,
    MESSAGE_CLASS_NOT_SUPPORTED,
    UNSPECIFIED_DCS_ERROR,
    COMMAND_CANNOT_BE_ACTIONED,
    COMMAND_UNSUPPORTED,
    UNSPECIFIED_COMMAND_ERROR,
    TPDU_NOT_SUPPORTED,
    SC_BUSY,
    NO_SC_SUBSCRIPTION,
    SC_SYSTEM_FAILURE,
    INVALID_SME_ADDRESS,
    DESTINATION_SME_BARRED,
    SM_REJECTED_OR_DUPLICATE,
    VPF_NOT_SUPPORTED,
    VP_NOT_SUPPORTED,
    SIM_SMS_STORAGE_FULL,
    NO_SMS_STORAGE_CAPABILITY_IN_SIM,
    MS_ERROR,
    MEMORY_CAPACITY_EXCEEDED,
    SIM_APPLICATION_TOOLKIT_BUSY,
    SIM_DATA_DOWNLOAD_ERROR,
    UNSPECIFIED_ERROR,
}
enum WmsMessageClass {
    /* 0 (invalid, starts with a number) */
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    NONE,
    CDMA,
}
enum WmsMessageDeliveryFailureType {
    TEMPORARY,
    PERMANENT,
}
enum WmsMessageFormat {
    CDMA,
    GSM_WCDMA_POINT_TO_POINT,
    GSM_WCDMA_BROADCAST,
    MWI,
}
enum WmsMessageMode {
    CDMA,
    GSM_WCDMA,
}
enum WmsMessageProtocol {
    CDMA,
    WCDMA,
}
enum WmsMessageTagType {
    MT_READ,
    MT_NOT_READ,
    MO_SENT,
    MO_NOT_SENT,
}
enum WmsMessageType {
    POINT,
}
enum WmsNotificationType {
    PRIMARY,
    SECONDARY_GSM,
    SECONDARY_UMTS,
}
enum WmsReceiptAction {
    DISCARD,
    STORE_AND_NOTIFY,
    TRANSFER_ONLY,
    TRANSFER_AND_ACK,
    UNKNOWN,
}
enum WmsStorageType {
    UIM,
    NV,
    NONE,
}
enum WmsTransferIndication {
    CLIENT,
}
enum CtlFlag {
    NONE,
    RESPONSE,
    INDICATION,
}
enum DeviceAddLinkFlags {
    NONE,
    INGRESS_MAP_CKSUMV4,
    EGRESS_MAP_CKSUMV4,
    INGRESS_MAP_CKSUMV5,
    EGRESS_MAP_CKSUMV5,
}
enum DeviceOpenFlags {
    NONE,
    VERSION_INFO,
    SYNC,
    NET_802_3,
    NET_RAW_IP,
    NET_QOS_HEADER,
    NET_NO_QOS_HEADER,
    PROXY,
    MBIM,
    AUTO,
    EXPECT_INDICATIONS,
}
enum DeviceReleaseClientFlags {
    NONE,
    RELEASE_CID,
}
enum DmsBandCapability {
    BC_0_A_SYSTEM,
    BC_0_B_SYSTEM,
    BC_1_ALL_BLOCKS,
    BC_2,
    BC_3_A_SYSTEM,
    BC_4_ALL_BLOCKS,
    BC_5_ALL_BLOCKS,
    GSM_DCS_1800,
    GSM_900_EXTENDED,
    GSM_900_PRIMARY,
    BC_6,
    BC_7,
    BC_8,
    BC_9,
    BC_10,
    BC_11,
    GSM_450,
    GSM_480,
    GSM_750,
    GSM_850,
    GSM_900_RAILWAYS,
    GSM_PCS_1900,
    WCDMA_2100,
    WCDMA_PCS_1900,
    WCDMA_DCS_1800,
    WCDMA_1700_US,
    WCDMA_850_US,
    WCDMA_800,
    BC_12,
    BC_14,
    BC_15,
    WCDMA_2600,
    WCDMA_900,
    WCDMA_1700_JAPAN,
    BC_16,
    BC_17,
    BC_18,
    BC_19,
    WCDMA_850_JAPAN,
    WCDMA_1500,
}
enum DmsLteBandCapability {
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    /* 4 (invalid, starts with a number) */
    /* 5 (invalid, starts with a number) */
    /* 6 (invalid, starts with a number) */
    /* 7 (invalid, starts with a number) */
    /* 8 (invalid, starts with a number) */
    /* 9 (invalid, starts with a number) */
    /* 10 (invalid, starts with a number) */
    /* 11 (invalid, starts with a number) */
    /* 12 (invalid, starts with a number) */
    /* 13 (invalid, starts with a number) */
    /* 14 (invalid, starts with a number) */
    /* 17 (invalid, starts with a number) */
    /* 18 (invalid, starts with a number) */
    /* 19 (invalid, starts with a number) */
    /* 20 (invalid, starts with a number) */
    /* 21 (invalid, starts with a number) */
    /* 24 (invalid, starts with a number) */
    /* 25 (invalid, starts with a number) */
    /* 26 (invalid, starts with a number) */
    /* 27 (invalid, starts with a number) */
    /* 28 (invalid, starts with a number) */
    /* 29 (invalid, starts with a number) */
    /* 30 (invalid, starts with a number) */
    /* 31 (invalid, starts with a number) */
    /* 32 (invalid, starts with a number) */
    /* 33 (invalid, starts with a number) */
    /* 34 (invalid, starts with a number) */
    /* 35 (invalid, starts with a number) */
    /* 36 (invalid, starts with a number) */
    /* 37 (invalid, starts with a number) */
    /* 38 (invalid, starts with a number) */
    /* 39 (invalid, starts with a number) */
    /* 40 (invalid, starts with a number) */
    /* 41 (invalid, starts with a number) */
    /* 42 (invalid, starts with a number) */
    /* 43 (invalid, starts with a number) */
}
enum DmsOfflineReason {
    HOST_IMAGE_MISCONFIGURATION,
    PRI_IMAGE_MISCONFIGURATION,
    PRI_VERSION_INCOMPATIBLE,
    DEVICE_MEMORY_FULL,
}
enum DmsPowerState {
    EXTERNAL_SOURCE,
    BATTERY_CONNECTED,
    BATTERY_CHARGING,
    FAULT,
}
enum DsdApnTypePreference {
    DEFAULT,
    IMS,
    MMS,
    DUN,
    SUPL,
    HIPRI,
    FOTA,
    CBS,
    IA,
    EMERGENCY,
}
enum LocDeleteCellDatabase {
    POS,
    LATEST_GPS_POS,
    OTA_POS,
    EXT_REF_POS,
    TIMETAG,
    CELLID,
    CACHED_CELLID,
    LAST_SRV_CELL,
    CUR_SRV_CELL,
    NEIGHBOR_INFO,
}
enum LocDeleteClockInfo {
    TIME_EST,
    FREQ_EST,
    WEEK_NUMBER,
    RTC_TIME,
    TIME_TRANSFER,
    GPS_TIME_EST,
    GLO_TIME_EST,
    GLO_DAY_NUMBER,
    GLO_YEAR_NUMBER,
    GLO_RF_GRP_DELAY,
    DISABLE_TT,
}
enum LocDeleteGnssData {
    GPS_SVDIR,
    GPS_SVSTEER,
    GPS_TIME,
    GPS_ALM_CORR,
    GLO_SVDIR,
    GLO_SVSTEER,
    GLO_TIME,
    GLO_ALM_CORR,
    SBAS_SVDIR,
    SBAS_SVSTEER,
    POSITION,
    TIME,
    IONO,
    UTC,
    HEALTH,
    SADATA,
    RTI,
    SV_NO_EXIST,
    FREQ_BIAS_EST,
}
enum LocDeleteSvInfo {
    EPHEMERIS,
    ALMANAC,
}
enum LocEventRegistrationFlag {
    POSITION_REPORT,
    GNSS_SATELLITE_INFO,
    NMEA,
    NI_NOTIFY_VERIFY_REQUEST,
    INJECT_TIME_REQUEST,
    INJECT_PREDICTED_ORBITS_REQUEST,
    INJECT_POSITION_REQUEST,
    ENGINE_STATE,
    FIX_SESSION_STATE,
    WIFI_REQUEST,
    SENSOR_STREAMING_READY_STATUS,
    TIME_SYNC_REQUEST,
    SET_SPI_STREAMING_REPORT,
    LOCATION_SERVER_CONNECTION_REQUEST,
    NI_GEOFENCE_NOTIFICATION,
    GEOFENCE_GENERAL_ALERT,
    GEOFENCE_BREACH_NOTIFICATION,
    PEDOMETER_CONTROL,
    MOTION_DATA_CONTROL,
}
enum LocNmeaType {
    GGA,
    RMC,
    GSV,
    GSA,
    VTG,
    PQXFI,
    PSTIS,
    ALL,
}
enum LocSatelliteValidInformation {
    SYSTEM,
    GNSS_SATELLITE_ID,
    HEALTH_STATUS,
    PROCESS_STATUS,
    SATELLITE_INFO_MASK,
    ELEVATION,
    AZIMUTH,
    SIGNAL_TO_NOISE_RATIO,
}
enum LocSensorDataUsage {
    ACCELEROMETER_USED,
    GYRO_USED,
    AIDED_HEADING,
    AIDED_SPEED,
    AIDED_POSITION,
    AIDED_VELOCITY,
}
enum LocServerAddressType {
    NONE,
    IPV4,
    IPV6,
    URL,
}
enum LocTechnologyUsed {
    SATELLITE,
    CELLULAR,
    WIFI,
    SENSORS,
    REFERENCE_LOCATION,
    INJECTED_POSITION,
    AFLT,
    HYBRID,
}
enum NasBandPreference {
    BC_0_A_SYSTEM,
    BC_0_B_SYSTEM,
    BC_1_ALL_BLOCKS,
    BC_2,
    BC_3_A_SYSTEM,
    BC_4_ALL_BLOCKS,
    BC_5_ALL_BLOCKS,
    GSM_DCS_1800,
    GSM_900_EXTENDED,
    GSM_900_PRIMARY,
    BC_6,
    BC_7,
    BC_8,
    BC_9,
    BC_10,
    BC_11,
    GSM_450,
    GSM_480,
    GSM_750,
    GSM_850,
    GSM_900_RAILWAYS,
    GSM_PCS_1900,
    WCDMA_2100,
    WCDMA_PCS_1900,
    WCDMA_DCS_1800,
    WCDMA_1700_US,
    WCDMA_850_US,
    WCDMA_800,
    BC_12,
    BC_14,
    BC_15,
    WCDMA_2600,
    WCDMA_900,
    WCDMA_1700_JAPAN,
    BC_16,
    BC_17,
    BC_18,
    BC_19,
    WCDMA_850_JAPAN,
    WCDMA_1500,
}
enum NasLteBandPreference {
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    /* 4 (invalid, starts with a number) */
    /* 5 (invalid, starts with a number) */
    /* 6 (invalid, starts with a number) */
    /* 7 (invalid, starts with a number) */
    /* 8 (invalid, starts with a number) */
    /* 9 (invalid, starts with a number) */
    /* 10 (invalid, starts with a number) */
    /* 11 (invalid, starts with a number) */
    /* 12 (invalid, starts with a number) */
    /* 13 (invalid, starts with a number) */
    /* 14 (invalid, starts with a number) */
    /* 17 (invalid, starts with a number) */
    /* 18 (invalid, starts with a number) */
    /* 19 (invalid, starts with a number) */
    /* 20 (invalid, starts with a number) */
    /* 21 (invalid, starts with a number) */
    /* 24 (invalid, starts with a number) */
    /* 25 (invalid, starts with a number) */
    /* 26 (invalid, starts with a number) */
    /* 27 (invalid, starts with a number) */
    /* 28 (invalid, starts with a number) */
    /* 29 (invalid, starts with a number) */
    /* 30 (invalid, starts with a number) */
    /* 31 (invalid, starts with a number) */
    /* 32 (invalid, starts with a number) */
    /* 33 (invalid, starts with a number) */
    /* 34 (invalid, starts with a number) */
    /* 35 (invalid, starts with a number) */
    /* 36 (invalid, starts with a number) */
    /* 37 (invalid, starts with a number) */
    /* 38 (invalid, starts with a number) */
    /* 39 (invalid, starts with a number) */
    /* 40 (invalid, starts with a number) */
    /* 41 (invalid, starts with a number) */
    /* 42 (invalid, starts with a number) */
    /* 43 (invalid, starts with a number) */
}
enum NasNetworkNameDisplayCondition {
    REGISTERED_PLMN_IF_KNOWN_NETWORK,
    SPN_NOT_REQUIRED_IF_UNKNOWN_NETWORK,
}
enum NasNetworkScanType {
    GSM,
    UMTS,
    LTE,
    TD_SCDMA,
}
enum NasNetworkStatus {
    CURRENT_SERVING,
    AVAILABLE,
    HOME,
    ROAMING,
    FORBIDDEN,
    NOT_FORBIDDEN,
    PREFERRED,
    NOT_PREFERRED,
}
enum NasPlmnAccessTechnologyIdentifier {
    UNSPECIFIED,
    GSM_COMPACT,
    GSM,
    NGRAN,
    EUTRAN,
    UTRAN,
    ALL,
}
enum NasRadioTechnologyPreference {
    AUTO,
    /* 3GPP2 (invalid, starts with a number) */
    /* 3GPP (invalid, starts with a number) */
    AMPS_OR_GSM,
    CDMA_OR_WCDMA,
    HDR,
    LTE,
}
enum NasRatModePreference {
    CDMA_1X,
    CDMA_1XEVDO,
    GSM,
    UMTS,
    LTE,
    TD_SCDMA,
    /* 5GNR (invalid, starts with a number) */
}
enum NasSignalStrengthRequest {
    NONE,
    RSSI,
    ECIO,
    IO,
    SINR,
    ERROR_RATE,
    RSRQ,
    LTE_SNR,
    LTE_RSRP,
}
enum NasTdScdmaBandPreference {
    A,
    B,
    C,
    D,
    E,
    F,
}
enum PbmEventRegistrationFlag {
    RECORD_UPDATE,
    PHONEBOOK_READY,
    EMERGENCY_NUMBER_LIST,
    HIDDEN_RECORD_STATUS,
    AAS_UPDATE,
    GAS_UPDATE,
}
enum PbmPhonebookType {
    ADN,
    FDN,
    MSISDN,
    MBDN,
    SDN,
    BDN,
    LND,
    MBN,
}
enum PdsDataValid {
    TIMESTAMP_CALENDAR,
    TIMESTAMP_UTC,
    LEAP_SECONDS,
    TIME_UNCERTAINTY,
    LATITUDE,
    LONGITUDE,
    ELLIPSOID_ALTITUDE,
    MEAN_SEA_LEVEL_ALTITUDE,
    HORIZONTAL_SPEED,
    VERTICAL_SPEED,
    HEADING,
    HORIZONTAL_UNCERTAINTY_CIRCULAR,
    HORIZONTAL_UNCERTAINTY_ELLIPSE_SEMI_MAJOR,
    HORIZONTAL_UNCERTAINTY_ELLIPSE_SEMI_MINOR,
    HORIZONTAL_UNCERTAINTY_ELLIPSE_ORIENT_AZIMUTH,
    VERTICAL_UNCERTAINTY,
    HORIZONTAL_VELOCITY_UNCERTAINTY,
    VERTICAL_VELOCITY_UNCERTAINTY,
    HORIZONTAL_CONFIDENCE,
    POSITION_DOP,
    HORIZONTAL_DOP,
    VERTICAL_DOP,
    OPERATING_MODE,
}
enum ServiceFlag {
    NONE,
    COMPOUND,
    RESPONSE,
    INDICATION,
}
enum UimConfiguration {
    AUTOMATIC_SELECTION,
    PERSONALIZATION_STATUS,
    HALT_SUBSCRIPTION,
}
enum UimEventRegistrationFlag {
    CARD_STATUS,
    SAP_CONNECTION,
    EXTENDED_CARD_STATUS,
    PHYSICAL_SLOT_STATUS,
}
enum UimSecurityAttribute {
    PIN1,
    PIN2,
    UPIN,
    ADM,
}
enum VoiceWcdmaAmrStatus {
    NOT_SUPPORTED,
    WCDMA_AMR_WB,
    GSM_HR_AMR,
    GSM_AMR_WB,
    GSM_AMR_NB,
}
enum WdsApnTypeMask {
    DEFAULT,
    IMS,
    MMS,
    FOTA,
    IA,
    EMERGENCY,
}
enum WdsAuthentication {
    NONE,
    PAP,
    CHAP,
}
enum WdsExtendedDataBearerTechnology3gpp {
    UNKNOWN,
    WCDMA,
    HSDPA,
    HSUPA,
    HSDPA_PLUS,
    DC_HSDPA_PLUS,
    /* 64QAM (invalid, starts with a number) */
    HSPA,
    GPRS,
    EDGE,
    GSM,
    S2B,
    LTE_LIMITED_SERVICE,
    LTE_FDD,
    LTE_TDD,
}
enum WdsExtendedDataBearerTechnology3gpp2 {
    UNKNOWN,
    RESERVED,
    CDMA1X_IS95,
    CDMA1X_IS2000,
    CDMA1X_IS2000_REL_A,
    HDR_REV_0_DPA,
    HDR_REV_A_DPA,
    HDR_REV_B_DPA,
    HDR_REV_A_MPA,
    HDR_REV_B_MPA,
    HDR_REV_A_EMPA,
    HDR_REV_B_EMPA,
    HDR_REV_B_MMPA,
    HDR_EVDO_FMC,
}
enum WdsGetCurrentSettingsRequestedSettings {
    NONE,
    PROFILE_ID,
    PROFILE_NAME,
    PDP_TYPE,
    APN_NAME,
    DNS_ADDRESS,
    GRANTED_QOS,
    USERNAME,
    AUTH_PROTOCOL,
    IP_ADDRESS,
    GATEWAY_INFO,
    PCSCF_ADDRESS,
    PCSCF_SERVER_ADDRESS_LIST,
    PCSCF_DOMAIN_NAME_LIST,
    MTU,
    DOMAIN_NAME_LIST,
    IP_FAMILY,
    IMCN_FLAG,
    EXTENDED_TECHNOLOGY,
}
enum WdsPacketStatisticsMaskFlag {
    TX_PACKETS_OK,
    RX_PACKETS_OK,
    TX_PACKETS_ERROR,
    RX_PACKETS_ERROR,
    TX_OVERFLOWS,
    RX_OVERFLOWS,
    TX_BYTES_OK,
    RX_BYTES_OK,
    TX_PACKETS_DROPPED,
    RX_PACKETS_DROPPED,
}
enum WdsRat3gpp {
    NONE,
    WCDMA,
    GPRS,
    HSDPA,
    HSUPA,
    EDGE,
    LTE,
    HSDPAPLUS,
    DCHSDPAPLUS,
    /* 64QAM (invalid, starts with a number) */
    TDSCDMA,
    NULL_BEARER,
}
enum WdsRat3gpp2 {
    NONE,
    CDMA1X,
    EVDO_REV0,
    EVDO_REVA,
    EVDO_REVB,
    EHRPD,
    FMC,
    NULL_BEARER,
}
enum WdsSetEventReportTransferStatistics {
    TX_PACKETS_OK,
    RX_PACKETS_OK,
    TX_PACKETS_ERROR,
    RX_PACKETS_ERROR,
    TX_OVERFLOWS,
    RX_OVERFLOWS,
    TX_BYTES_OK,
    RX_BYTES_OK,
    TX_PACKETS_DROPPED,
    RX_PACKETS_DROPPED,
}
enum WdsSoCdma1x {
    NONE,
    IS95,
    IS2000,
    IS2000_REL_A,
}
enum WdsSoEvdoRev0 {
    NONE,
    DPA,
}
enum WdsSoEvdoRevA {
    NONE,
    DPA,
    MFPA,
    EMPA,
    EMPA_EHRPD,
}
enum WdsSoEvdoRevB {
    NONE,
    DPA,
    MFPA,
    EMPA,
    EMPA_EHRPD,
    MMPA,
    MMPA_EHRPD,
}
enum WdsTechnologyPreference {
    /* 3GPP (invalid, starts with a number) */
    /* 3GPP2 (invalid, starts with a number) */
}
export const CID_BROADCAST: number
export const CID_NONE: number
export const CLIENT_CID: string
export const CLIENT_DEVICE: string
export const CLIENT_SERVICE: string
export const CLIENT_VALID: string
export const CLIENT_VERSION_MAJOR: string
export const CLIENT_VERSION_MINOR: string
export const DBUS_ERROR_PREFIX: string
export const DEVICE_FILE: string
export const DEVICE_MUX_ID_MAX: number
export const DEVICE_MUX_ID_MIN: number
export const DEVICE_MUX_ID_UNBOUND: number
export const DEVICE_NODE: string
export const DEVICE_NO_FILE_CHECK: string
export const DEVICE_PROXY_PATH: string
export const DEVICE_SIGNAL_INDICATION: string
export const DEVICE_SIGNAL_REMOVED: string
export const DEVICE_WWAN_IFACE: string
export const MESSAGE_QMUX_MARKER: number
export const MESSAGE_VENDOR_GENERIC: number
export const PROXY_N_CLIENTS: string
export const PROXY_SOCKET_PATH: string
export const WDS_RATE_UNAVAILABLE: number
function core_error_get_string(val: CoreError): string
function core_error_quark(): GLib.Quark
function ctl_data_format_get_string(val: CtlDataFormat): string
function ctl_data_link_protocol_get_string(val: CtlDataLinkProtocol): string
function ctl_flag_build_string_from_mask(mask: CtlFlag): string
function data_endpoint_type_get_string(val: DataEndpointType): string
function device_add_link_flags_build_string_from_mask(mask: DeviceAddLinkFlags): string
function device_expected_data_format_get_string(val: DeviceExpectedDataFormat): string
function device_open_flags_build_string_from_mask(mask: DeviceOpenFlags): string
function device_release_client_flags_build_string_from_mask(mask: DeviceReleaseClientFlags): string
function dms_activation_state_get_string(val: DmsActivationState): string
function dms_band_capability_build_string_from_mask(mask: DmsBandCapability): string
function dms_boot_image_download_mode_get_string(val: DmsBootImageDownloadMode): string
function dms_data_service_capability_get_string(val: DmsDataServiceCapability): string
function dms_firmware_image_type_get_string(val: DmsFirmwareImageType): string
function dms_foxconn_device_mode_get_string(val: DmsFoxconnDeviceMode): string
function dms_foxconn_firmware_version_type_get_string(val: DmsFoxconnFirmwareVersionType): string
function dms_hp_device_mode_get_string(val: DmsHpDeviceMode): string
function dms_lte_band_capability_build_string_from_mask(mask: DmsLteBandCapability): string
function dms_mac_type_get_string(val: DmsMacType): string
function dms_offline_reason_build_string_from_mask(mask: DmsOfflineReason): string
function dms_operating_mode_get_string(val: DmsOperatingMode): string
function dms_power_state_build_string_from_mask(mask: DmsPowerState): string
function dms_radio_interface_get_string(val: DmsRadioInterface): string
function dms_sim_capability_get_string(val: DmsSimCapability): string
function dms_swi_usb_composition_get_description(value: DmsSwiUsbComposition): string
function dms_swi_usb_composition_get_string(val: DmsSwiUsbComposition): string
function dms_time_reference_type_get_string(val: DmsTimeReferenceType): string
function dms_time_source_get_string(val: DmsTimeSource): string
function dms_uim_facility_get_string(val: DmsUimFacility): string
function dms_uim_facility_state_get_string(val: DmsUimFacilityState): string
function dms_uim_pin_id_get_string(val: DmsUimPinId): string
function dms_uim_pin_status_get_string(val: DmsUimPinStatus): string
function dms_uim_state_get_string(val: DmsUimState): string
function dsd_apn_type_get_string(val: DsdApnType): string
function dsd_apn_type_preference_build_string_from_mask(mask: DsdApnTypePreference): string
function endian_get_string(val: Endian): string
function gas_firmware_listing_mode_get_string(val: GasFirmwareListingMode): string
function gas_usb_composition_endpoint_type_get_string(val: GasUsbCompositionEndpointType): string
function loc_delete_cell_database_build_string_from_mask(mask: LocDeleteCellDatabase): string
function loc_delete_clock_info_build_string_from_mask(mask: LocDeleteClockInfo): string
function loc_delete_gnss_data_build_string_from_mask(mask: LocDeleteGnssData): string
function loc_delete_sv_info_build_string_from_mask(mask: LocDeleteSvInfo): string
function loc_engine_state_get_string(val: LocEngineState): string
function loc_event_registration_flag_build_string_from_mask(mask: LocEventRegistrationFlag): string
function loc_fix_recurrence_type_get_string(val: LocFixRecurrenceType): string
function loc_health_status_get_string(val: LocHealthStatus): string
function loc_indication_status_get_string(val: LocIndicationStatus): string
function loc_intermediate_report_state_get_string(val: LocIntermediateReportState): string
function loc_lock_type_get_string(val: LocLockType): string
function loc_navigation_data_get_string(val: LocNavigationData): string
function loc_nmea_type_build_string_from_mask(mask: LocNmeaType): string
function loc_operation_mode_get_string(val: LocOperationMode): string
function loc_predicted_orbits_data_format_get_string(val: LocPredictedOrbitsDataFormat): string
function loc_reliability_get_string(val: LocReliability): string
function loc_satellite_status_get_string(val: LocSatelliteStatus): string
function loc_satellite_valid_information_build_string_from_mask(mask: LocSatelliteValidInformation): string
function loc_sensor_data_usage_build_string_from_mask(mask: LocSensorDataUsage): string
function loc_server_address_type_build_string_from_mask(mask: LocServerAddressType): string
function loc_server_type_get_string(val: LocServerType): string
function loc_session_status_get_string(val: LocSessionStatus): string
function loc_system_get_string(val: LocSystem): string
function loc_technology_used_build_string_from_mask(mask: LocTechnologyUsed): string
function loc_time_source_get_string(val: LocTimeSource): string
function message_add_raw_tlv(self: Message, type: number, raw: number, length: number): boolean
function message_foreach_raw_tlv(self: Message): void
function message_get_client_id(self: Message): number
function message_get_data(self: Message): [ /* returnType */ number, /* length */ number ]
function message_get_length(self: Message): number
function message_get_message_id(self: Message): number
function message_get_printable_full(self: Message, context: MessageContext, line_prefix: string): string
function message_get_raw(self: Message): [ /* returnType */ number, /* length */ number ]
function message_get_raw_tlv(self: Message, type: number): [ /* returnType */ number, /* length */ number ]
function message_get_service(self: Message): Service
function message_get_tlv_printable(self: Message, line_prefix: string, type: number, raw: number, raw_length: number): string
function message_get_transaction_id(self: Message): number
function message_is_indication(self: Message): boolean
function message_is_request(self: Message): boolean
function message_is_response(self: Message): boolean
function message_new(service: Service, client_id: number, transaction_id: number, message_id: number): Message
function message_new_from_data(service: Service, client_id: number, qmi_data: Uint8Array[]): [ /* returnType */ Message, /* qmi_data */ Uint8Array[] ]
function message_new_from_raw(raw: Uint8Array[]): [ /* returnType */ Message, /* raw */ Uint8Array[] ]
function message_ref(self: Message): Message
function message_response_new(request: Message, error: ProtocolError): Message
function message_set_transaction_id(self: Message, transaction_id: number): void
function message_tlv_read_fixed_size_string(self: Message, tlv_offset: number, offset: number, string_length: number): [ /* returnType */ boolean, /* offset */ number, /* out */ string ]
function message_tlv_read_gdouble(self: Message, tlv_offset: number, offset: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
function message_tlv_read_gfloat_endian(self: Message, tlv_offset: number, offset: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
function message_tlv_read_gint16(self: Message, tlv_offset: number, offset: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
function message_tlv_read_gint32(self: Message, tlv_offset: number, offset: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
function message_tlv_read_gint64(self: Message, tlv_offset: number, offset: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
function message_tlv_read_gint8(self: Message, tlv_offset: number, offset: number): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
function message_tlv_read_guint16(self: Message, tlv_offset: number, offset: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
function message_tlv_read_guint32(self: Message, tlv_offset: number, offset: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
function message_tlv_read_guint64(self: Message, tlv_offset: number, offset: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
function message_tlv_read_guint8(self: Message, tlv_offset: number, offset: number): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
function message_tlv_read_init(self: Message, type: number): [ /* returnType */ number, /* out_tlv_length */ number ]
function message_tlv_read_remaining_size(self: Message, tlv_offset: number, offset: number): number
function message_tlv_read_sized_guint(self: Message, tlv_offset: number, offset: number, n_bytes: number, endian: Endian): [ /* returnType */ boolean, /* offset */ number, /* out */ number ]
function message_tlv_read_string(self: Message, tlv_offset: number, offset: number, n_size_prefix_bytes: number, max_size: number): [ /* returnType */ boolean, /* offset */ number, /* out */ string ]
function message_tlv_write_complete(self: Message, tlv_offset: number): boolean
function message_tlv_write_gint16(self: Message, endian: Endian, in_: number): boolean
function message_tlv_write_gint32(self: Message, endian: Endian, in_: number): boolean
function message_tlv_write_gint64(self: Message, endian: Endian, in_: number): boolean
function message_tlv_write_gint8(self: Message, in_: number): boolean
function message_tlv_write_guint16(self: Message, endian: Endian, in_: number): boolean
function message_tlv_write_guint32(self: Message, endian: Endian, in_: number): boolean
function message_tlv_write_guint64(self: Message, endian: Endian, in_: number): boolean
function message_tlv_write_guint8(self: Message, in_: number): boolean
function message_tlv_write_init(self: Message, type: number): number
function message_tlv_write_reset(self: Message, tlv_offset: number): void
function message_tlv_write_sized_guint(self: Message, n_bytes: number, endian: Endian, in_: number): boolean
function message_tlv_write_string(self: Message, n_size_prefix_bytes: number, in_: string, in_length: number): boolean
function message_unref(self: Message): void
function nas_active_band_get_string(val: NasActiveBand): string
function nas_attach_state_get_string(val: NasAttachState): string
function nas_band_preference_build_string_from_mask(mask: NasBandPreference): string
function nas_boolean_get_string(val: NasBoolean): string
function nas_call_barring_status_get_string(val: NasCallBarringStatus): string
function nas_cdma_pilot_type_get_string(val: NasCdmaPilotType): string
function nas_cdma_prl_preference_get_string(val: NasCdmaPrlPreference): string
function nas_cell_broadcast_capability_get_string(val: NasCellBroadcastCapability): string
function nas_change_duration_get_string(val: NasChangeDuration): string
function nas_data_capability_get_string(val: NasDataCapability): string
function nas_day_of_week_get_string(val: NasDayOfWeek): string
function nas_daylight_savings_adjustment_get_string(val: NasDaylightSavingsAdjustment): string
function nas_dl_bandwidth_get_string(val: NasDLBandwidth): string
function nas_drx_get_string(val: NasDrx): string
function nas_evdo_sinr_level_get_string(val: NasEvdoSinrLevel): string
function nas_gsm_wcdma_acquisition_order_preference_get_string(val: NasGsmWcdmaAcquisitionOrderPreference): string
function nas_hdr_personality_get_string(val: NasHdrPersonality): string
function nas_hdr_protocol_revision_get_string(val: NasHdrProtocolRevision): string
function nas_lte_band_preference_build_string_from_mask(mask: NasLteBandPreference): string
function nas_lte_cell_access_status_get_string(val: NasLteCellAccessStatus): string
function nas_lte_registration_domain_get_string(val: NasLteRegistrationDomain): string
function nas_lte_voice_domain_get_string(val: NasLteVoiceDomain): string
function nas_network_description_display_get_string(val: NasNetworkDescriptionDisplay): string
function nas_network_description_encoding_get_string(val: NasNetworkDescriptionEncoding): string
function nas_network_name_display_condition_build_string_from_mask(mask: NasNetworkNameDisplayCondition): string
function nas_network_name_source_get_string(val: NasNetworkNameSource): string
function nas_network_register_type_get_string(val: NasNetworkRegisterType): string
function nas_network_scan_result_get_string(val: NasNetworkScanResult): string
function nas_network_scan_type_build_string_from_mask(mask: NasNetworkScanType): string
function nas_network_selection_preference_get_string(val: NasNetworkSelectionPreference): string
function nas_network_selection_registration_restriction_get_string(val: NasNetworkSelectionRegistrationRestriction): string
function nas_network_service_domain_get_string(val: NasNetworkServiceDomain): string
function nas_network_status_build_string_from_mask(mask: NasNetworkStatus): string
function nas_network_type_get_string(val: NasNetworkType): string
function nas_plmn_access_technology_identifier_build_string_from_mask(mask: NasPlmnAccessTechnologyIdentifier): string
function nas_plmn_encoding_scheme_get_string(val: NasPlmnEncodingScheme): string
function nas_plmn_language_id_get_string(val: NasPlmnLanguageId): string
function nas_plmn_name_country_initials_get_string(val: NasPlmnNameCountryInitials): string
function nas_plmn_name_spare_bits_get_string(val: NasPlmnNameSpareBits): string
function nas_preference_duration_get_string(val: NasPreferenceDuration): string
function nas_ps_attach_action_get_string(val: NasPsAttachAction): string
function nas_radio_interface_get_string(val: NasRadioInterface): string
function nas_radio_technology_preference_build_string_from_mask(mask: NasRadioTechnologyPreference): string
function nas_rat_mode_preference_build_string_from_mask(mask: NasRatModePreference): string
function nas_read_string_from_network_description_encoded_array(encoding: NasNetworkDescriptionEncoding, array: Uint8Array[]): string
function nas_read_string_from_plmn_encoded_array(encoding: NasPlmnEncodingScheme, array: Uint8Array[]): string
function nas_registration_state_get_string(val: NasRegistrationState): string
function nas_reject_cause_get_string(val: NasRejectCause): string
function nas_roaming_indicator_status_get_string(val: NasRoamingIndicatorStatus): string
function nas_roaming_preference_get_string(val: NasRoamingPreference): string
function nas_roaming_status_get_string(val: NasRoamingStatus): string
function nas_scell_state_get_string(val: NasScellState): string
function nas_service_domain_preference_get_string(val: NasServiceDomainPreference): string
function nas_service_status_get_string(val: NasServiceStatus): string
function nas_signal_strength_request_build_string_from_mask(mask: NasSignalStrengthRequest): string
function nas_sim_reject_state_get_string(val: NasSimRejectState): string
function nas_swi_emm_connection_state_get_string(val: NasSwiEmmConnectionState): string
function nas_swi_emm_state_get_string(val: NasSwiEmmState): string
function nas_swi_ims_reg_state_get_string(val: NasSwiImsRegState): string
function nas_swi_modem_mode_get_string(val: NasSwiModemMode): string
function nas_swi_ps_state_get_string(val: NasSwiPsState): string
function nas_swi_system_mode_get_string(val: NasSwiSystemMode): string
function nas_td_scdma_band_preference_build_string_from_mask(mask: NasTdScdmaBandPreference): string
function nas_usage_preference_get_string(val: NasUsagePreference): string
function nas_voice_domain_preference_get_string(val: NasVoiceDomainPreference): string
function nas_wcdma_hs_service_get_string(val: NasWcdmaHsService): string
function nas_wcdma_rrc_state_get_string(val: NasWcdmaRrcState): string
function oma_hfa_feature_done_state_get_string(val: OmaHfaFeatureDoneState): string
function oma_session_failed_reason_get_string(val: OmaSessionFailedReason): string
function oma_session_state_get_string(val: OmaSessionState): string
function oma_session_type_get_string(val: OmaSessionType): string
function pbm_event_registration_flag_build_string_from_mask(mask: PbmEventRegistrationFlag): string
function pbm_phonebook_type_build_string_from_mask(mask: PbmPhonebookType): string
function pbm_session_type_get_string(val: PbmSessionType): string
function pdc_configuration_type_get_string(val: PdcConfigurationType): string
function pdc_refresh_event_type_get_string(val: PdcRefreshEventType): string
function pds_data_valid_build_string_from_mask(mask: PdsDataValid): string
function pds_network_mode_get_string(val: PdsNetworkMode): string
function pds_operating_mode_get_string(val: PdsOperatingMode): string
function pds_operation_mode_get_string(val: PdsOperationMode): string
function pds_position_session_status_get_string(val: PdsPositionSessionStatus): string
function pds_tracking_session_state_get_string(val: PdsTrackingSessionState): string
function protocol_error_get_string(val: ProtocolError): string
function protocol_error_quark(): GLib.Quark
function qos_event_get_string(val: QosEvent): string
function qos_status_get_string(val: QosStatus): string
function sar_rf_state_get_string(val: SarRfState): string
function service_flag_build_string_from_mask(mask: ServiceFlag): string
function service_get_string(val: Service): string
function sio_port_get_string(val: SioPort): string
function uim_card_application_personalization_feature_get_string(val: UimCardApplicationPersonalizationFeature): string
function uim_card_application_personalization_state_get_string(val: UimCardApplicationPersonalizationState): string
function uim_card_application_state_get_string(val: UimCardApplicationState): string
function uim_card_application_type_get_string(val: UimCardApplicationType): string
function uim_card_error_get_string(val: UimCardError): string
function uim_card_protocol_get_string(val: UimCardProtocol): string
function uim_card_state_get_string(val: UimCardState): string
function uim_configuration_build_string_from_mask(mask: UimConfiguration): string
function uim_depersonalization_operation_get_string(val: UimDepersonalizationOperation): string
function uim_event_registration_flag_build_string_from_mask(mask: UimEventRegistrationFlag): string
function uim_file_type_get_string(val: UimFileType): string
function uim_physical_card_state_get_string(val: UimPhysicalCardState): string
function uim_pin_id_get_string(val: UimPinId): string
function uim_pin_state_get_string(val: UimPinState): string
function uim_refresh_mode_get_string(val: UimRefreshMode): string
function uim_refresh_stage_get_string(val: UimRefreshStage): string
function uim_security_attribute_build_string_from_mask(mask: UimSecurityAttribute): string
function uim_security_attribute_logic_get_string(val: UimSecurityAttributeLogic): string
function uim_session_type_get_string(val: UimSessionType): string
function uim_slot_state_get_string(val: UimSlotState): string
function utils_get_traces_enabled(): boolean
function utils_set_traces_enabled(enabled: boolean): void
function voice_alpha_data_coding_scheme_get_string(val: VoiceAlphaDataCodingScheme): string
function voice_als_get_string(val: VoiceAls): string
function voice_call_control_result_type_get_string(val: VoiceCallControlResultType): string
function voice_call_control_supplementary_service_type_get_string(val: VoiceCallControlSupplementaryServiceType): string
function voice_call_direction_get_string(val: VoiceCallDirection): string
function voice_call_end_reason_get_string(val: VoiceCallEndReason): string
function voice_call_mode_get_string(val: VoiceCallMode): string
function voice_call_state_get_string(val: VoiceCallState): string
function voice_call_type_get_string(val: VoiceCallType): string
function voice_domain_get_string(val: VoiceDomain): string
function voice_presentation_get_string(val: VoicePresentation): string
function voice_privacy_get_string(val: VoicePrivacy): string
function voice_service_option_get_string(val: VoiceServiceOption): string
function voice_supplementary_service_action_get_string(val: VoiceSupplementaryServiceAction): string
function voice_supplementary_service_notification_type_get_string(val: VoiceSupplementaryServiceNotificationType): string
function voice_supplementary_service_reason_get_string(val: VoiceSupplementaryServiceReason): string
function voice_supplementary_service_type_get_string(val: VoiceSupplementaryServiceType): string
function voice_tty_mode_get_string(val: VoiceTtyMode): string
function voice_user_action_get_string(val: VoiceUserAction): string
function voice_uss_data_coding_scheme_get_string(val: VoiceUssDataCodingScheme): string
function voice_wcdma_amr_status_build_string_from_mask(mask: VoiceWcdmaAmrStatus): string
function wda_data_aggregation_protocol_get_string(val: WdaDataAggregationProtocol): string
function wda_link_layer_protocol_get_string(val: WdaLinkLayerProtocol): string
function wds_apn_type_mask_build_string_from_mask(mask: WdsApnTypeMask): string
function wds_attach_pdn_list_action_get_string(val: WdsAttachPdnListAction): string
function wds_authentication_build_string_from_mask(mask: WdsAuthentication): string
function wds_autoconnect_setting_get_string(val: WdsAutoconnectSetting): string
function wds_autoconnect_setting_roaming_get_string(val: WdsAutoconnectSettingRoaming): string
function wds_call_end_reason_get_string(val: WdsCallEndReason): string
function wds_call_type_get_string(val: WdsCallType): string
function wds_client_type_get_string(val: WdsClientType): string
function wds_connection_status_get_string(val: WdsConnectionStatus): string
function wds_data_bearer_technology_get_string(val: WdsDataBearerTechnology): string
function wds_data_call_status_get_string(val: WdsDataCallStatus): string
function wds_data_call_type_get_string(val: WdsDataCallType): string
function wds_data_system_get_string(val: WdsDataSystem): string
function wds_data_system_network_type_get_string(val: WdsDataSystemNetworkType): string
function wds_delivery_order_get_string(val: WdsDeliveryOrder): string
function wds_dormancy_status_get_string(val: WdsDormancyStatus): string
function wds_ds_profile_error_get_string(val: WdsDsProfileError): string
function wds_extended_data_bearer_technology_3gpp2_build_string_from_mask(mask: WdsExtendedDataBearerTechnology3gpp2): string
function wds_extended_data_bearer_technology_3gpp_build_string_from_mask(mask: WdsExtendedDataBearerTechnology3gpp): string
function wds_extended_technology_preference_get_string(val: WdsExtendedTechnologyPreference): string
function wds_get_current_settings_requested_settings_build_string_from_mask(mask: WdsGetCurrentSettingsRequestedSettings): string
function wds_ip_family_get_string(val: WdsIpFamily): string
function wds_ip_support_type_get_string(val: WdsIpSupportType): string
function wds_network_type_get_string(val: WdsNetworkType): string
function wds_packet_statistics_mask_flag_build_string_from_mask(mask: WdsPacketStatisticsMaskFlag): string
function wds_pdp_data_compression_type_get_string(val: WdsPdpDataCompressionType): string
function wds_pdp_header_compression_type_get_string(val: WdsPdpHeaderCompressionType): string
function wds_pdp_type_get_string(val: WdsPdpType): string
function wds_profile_family_get_string(val: WdsProfileFamily): string
function wds_profile_type_get_string(val: WdsProfileType): string
function wds_qos_class_identifier_get_string(val: WdsQosClassIdentifier): string
function wds_radio_access_technology_get_string(val: WdsRadioAccessTechnology): string
function wds_rat_3gpp2_build_string_from_mask(mask: WdsRat3gpp2): string
function wds_rat_3gpp_build_string_from_mask(mask: WdsRat3gpp): string
function wds_sdu_erroneous_delivery_get_string(val: WdsSduErroneousDelivery): string
function wds_sdu_error_ratio_get_string(val: WdsSduErrorRatio): string
function wds_sdu_residual_bit_error_ratio_get_string(val: WdsSduResidualBitErrorRatio): string
function wds_set_event_report_transfer_statistics_build_string_from_mask(mask: WdsSetEventReportTransferStatistics): string
function wds_so_cdma1x_build_string_from_mask(mask: WdsSoCdma1x): string
function wds_so_evdo_rev0_build_string_from_mask(mask: WdsSoEvdoRev0): string
function wds_so_evdo_reva_build_string_from_mask(mask: WdsSoEvdoRevA): string
function wds_so_evdo_revb_build_string_from_mask(mask: WdsSoEvdoRevB): string
function wds_technology_preference_build_string_from_mask(mask: WdsTechnologyPreference): string
function wds_tethered_call_type_get_string(val: WdsTetheredCallType): string
function wds_traffic_class_get_string(val: WdsTrafficClass): string
function wds_verbose_call_end_reason_3gpp_get_string(val: WdsVerboseCallEndReason3gpp): string
function wds_verbose_call_end_reason_cm_get_string(val: WdsVerboseCallEndReasonCm): string
function wds_verbose_call_end_reason_ehrpd_get_string(val: WdsVerboseCallEndReasonEhrpd): string
function wds_verbose_call_end_reason_get_string(type: WdsVerboseCallEndReasonType, reason: number): string
function wds_verbose_call_end_reason_internal_get_string(val: WdsVerboseCallEndReasonInternal): string
function wds_verbose_call_end_reason_ipv6_get_string(val: WdsVerboseCallEndReasonIpv6): string
function wds_verbose_call_end_reason_mip_get_string(val: WdsVerboseCallEndReasonMip): string
function wds_verbose_call_end_reason_ppp_get_string(val: WdsVerboseCallEndReasonPpp): string
function wds_verbose_call_end_reason_type_get_string(val: WdsVerboseCallEndReasonType): string
function wms_ack_failure_cause_get_string(val: WmsAckFailureCause): string
function wms_ack_indicator_get_string(val: WmsAckIndicator): string
function wms_cdma_cause_code_get_string(val: WmsCdmaCauseCode): string
function wms_cdma_error_class_get_string(val: WmsCdmaErrorClass): string
function wms_cdma_service_option_get_string(val: WmsCdmaServiceOption): string
function wms_gsm_umts_rp_cause_get_string(val: WmsGsmUmtsRpCause): string
function wms_gsm_umts_tp_cause_get_string(val: WmsGsmUmtsTpCause): string
function wms_message_class_get_string(val: WmsMessageClass): string
function wms_message_delivery_failure_type_get_string(val: WmsMessageDeliveryFailureType): string
function wms_message_format_get_string(val: WmsMessageFormat): string
function wms_message_mode_get_string(val: WmsMessageMode): string
function wms_message_protocol_get_string(val: WmsMessageProtocol): string
function wms_message_tag_type_get_string(val: WmsMessageTagType): string
function wms_message_type_get_string(val: WmsMessageType): string
function wms_notification_type_get_string(val: WmsNotificationType): string
function wms_receipt_action_get_string(val: WmsReceiptAction): string
function wms_storage_type_get_string(val: WmsStorageType): string
function wms_transfer_indication_get_string(val: WmsTransferIndication): string
interface DeviceCommandAbortableParseResponseFn {
    (self: Device, abort_response: Message): boolean
}
interface MessageForeachRawTlvFn {
    (type: number, value: number, length: number): void
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
    client_cid?: number
    client_device?: Device
    client_service?: Service
    client_version_major?: number
    client_version_minor?: number
}
class Client {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientCtl_ConstructProps extends Client_ConstructProps {
}
class ClientCtl {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientCtl */
    allocate_cid(input: MessageCtlAllocateCidInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    allocate_cid_finish(res: Gio.AsyncResult): MessageCtlAllocateCidOutput
    get_version_info(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_version_info_finish(res: Gio.AsyncResult): MessageCtlGetVersionInfoOutput
    internal_proxy_open(input: MessageCtlInternalProxyOpenInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    internal_proxy_open_finish(res: Gio.AsyncResult): MessageCtlInternalProxyOpenOutput
    release_cid(input: MessageCtlReleaseCidInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    release_cid_finish(res: Gio.AsyncResult): MessageCtlReleaseCidOutput
    set_data_format(input: MessageCtlSetDataFormatInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_data_format_finish(res: Gio.AsyncResult): MessageCtlSetDataFormatOutput
    set_instance_id(input: MessageCtlSetInstanceIdInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_instance_id_finish(res: Gio.AsyncResult): MessageCtlSetInstanceIdOutput
    sync(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sync_finish(res: Gio.AsyncResult): MessageCtlSyncOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Qmi-1.0.Qmi.ClientCtl */
    connect(sigName: "sync", callback: (($obj: ClientCtl) => void)): number
    connect_after(sigName: "sync", callback: (($obj: ClientCtl) => void)): number
    emit(sigName: "sync"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientCtl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientCtl_ConstructProps)
    _init (config?: ClientCtl_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientDms_ConstructProps extends Client_ConstructProps {
}
class ClientDms {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientDms */
    activate_automatic(input: MessageDmsActivateAutomaticInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    activate_automatic_finish(res: Gio.AsyncResult): MessageDmsActivateAutomaticOutput
    activate_manual(input: MessageDmsActivateManualInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    activate_manual_finish(res: Gio.AsyncResult): MessageDmsActivateManualOutput
    delete_stored_image(input: MessageDmsDeleteStoredImageInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_stored_image_finish(res: Gio.AsyncResult): MessageDmsDeleteStoredImageOutput
    foxconn_change_device_mode(input: MessageDmsFoxconnChangeDeviceModeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    foxconn_change_device_mode_finish(res: Gio.AsyncResult): MessageDmsFoxconnChangeDeviceModeOutput
    foxconn_get_firmware_version(input: MessageDmsFoxconnGetFirmwareVersionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    foxconn_get_firmware_version_finish(res: Gio.AsyncResult): MessageDmsFoxconnGetFirmwareVersionOutput
    foxconn_set_fcc_authentication(input: MessageDmsFoxconnSetFccAuthenticationInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    foxconn_set_fcc_authentication_finish(res: Gio.AsyncResult): MessageDmsFoxconnSetFccAuthenticationOutput
    get_activation_state(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_activation_state_finish(res: Gio.AsyncResult): MessageDmsGetActivationStateOutput
    get_alt_net_config(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_alt_net_config_finish(res: Gio.AsyncResult): MessageDmsGetAltNetConfigOutput
    get_band_capabilities(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_band_capabilities_finish(res: Gio.AsyncResult): MessageDmsGetBandCapabilitiesOutput
    get_boot_image_download_mode(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_boot_image_download_mode_finish(res: Gio.AsyncResult): MessageDmsGetBootImageDownloadModeOutput
    get_capabilities(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_capabilities_finish(res: Gio.AsyncResult): MessageDmsGetCapabilitiesOutput
    get_factory_sku(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_factory_sku_finish(res: Gio.AsyncResult): MessageDmsGetFactorySkuOutput
    get_firmware_preference(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_firmware_preference_finish(res: Gio.AsyncResult): MessageDmsGetFirmwarePreferenceOutput
    get_hardware_revision(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_hardware_revision_finish(res: Gio.AsyncResult): MessageDmsGetHardwareRevisionOutput
    get_ids(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_ids_finish(res: Gio.AsyncResult): MessageDmsGetIdsOutput
    get_mac_address(input: MessageDmsGetMacAddressInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_mac_address_finish(res: Gio.AsyncResult): MessageDmsGetMacAddressOutput
    get_manufacturer(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_manufacturer_finish(res: Gio.AsyncResult): MessageDmsGetManufacturerOutput
    get_model(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_model_finish(res: Gio.AsyncResult): MessageDmsGetModelOutput
    get_msisdn(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_msisdn_finish(res: Gio.AsyncResult): MessageDmsGetMsisdnOutput
    get_operating_mode(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_operating_mode_finish(res: Gio.AsyncResult): MessageDmsGetOperatingModeOutput
    get_power_state(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_power_state_finish(res: Gio.AsyncResult): MessageDmsGetPowerStateOutput
    get_prl_version(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_prl_version_finish(res: Gio.AsyncResult): MessageDmsGetPrlVersionOutput
    get_revision(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_revision_finish(res: Gio.AsyncResult): MessageDmsGetRevisionOutput
    get_software_version(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_software_version_finish(res: Gio.AsyncResult): MessageDmsGetSoftwareVersionOutput
    get_stored_image_info(input: MessageDmsGetStoredImageInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_stored_image_info_finish(res: Gio.AsyncResult): MessageDmsGetStoredImageInfoOutput
    get_supported_messages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_supported_messages_finish(res: Gio.AsyncResult): MessageDmsGetSupportedMessagesOutput
    get_time(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_time_finish(res: Gio.AsyncResult): MessageDmsGetTimeOutput
    get_user_lock_state(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_user_lock_state_finish(res: Gio.AsyncResult): MessageDmsGetUserLockStateOutput
    hp_change_device_mode(input: MessageDmsHpChangeDeviceModeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    hp_change_device_mode_finish(res: Gio.AsyncResult): MessageDmsHpChangeDeviceModeOutput
    list_stored_images(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    list_stored_images_finish(res: Gio.AsyncResult): MessageDmsListStoredImagesOutput
    read_eri_file(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_eri_file_finish(res: Gio.AsyncResult): MessageDmsReadEriFileOutput
    read_user_data(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_user_data_finish(res: Gio.AsyncResult): MessageDmsReadUserDataOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessageDmsResetOutput
    restore_factory_defaults(input: MessageDmsRestoreFactoryDefaultsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    restore_factory_defaults_finish(res: Gio.AsyncResult): MessageDmsRestoreFactoryDefaultsOutput
    set_alt_net_config(input: MessageDmsSetAltNetConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_alt_net_config_finish(res: Gio.AsyncResult): MessageDmsSetAltNetConfigOutput
    set_boot_image_download_mode(input: MessageDmsSetBootImageDownloadModeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_boot_image_download_mode_finish(res: Gio.AsyncResult): MessageDmsSetBootImageDownloadModeOutput
    set_event_report(input: MessageDmsSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_event_report_finish(res: Gio.AsyncResult): MessageDmsSetEventReportOutput
    set_fcc_authentication(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_fcc_authentication_finish(res: Gio.AsyncResult): MessageDmsSetFccAuthenticationOutput
    set_firmware_id(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_firmware_id_finish(res: Gio.AsyncResult): MessageDmsSetFirmwareIdOutput
    set_firmware_preference(input: MessageDmsSetFirmwarePreferenceInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_firmware_preference_finish(res: Gio.AsyncResult): MessageDmsSetFirmwarePreferenceOutput
    set_operating_mode(input: MessageDmsSetOperatingModeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_operating_mode_finish(res: Gio.AsyncResult): MessageDmsSetOperatingModeOutput
    set_service_programming_code(input: MessageDmsSetServiceProgrammingCodeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_service_programming_code_finish(res: Gio.AsyncResult): MessageDmsSetServiceProgrammingCodeOutput
    set_time(input: MessageDmsSetTimeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_time_finish(res: Gio.AsyncResult): MessageDmsSetTimeOutput
    set_user_lock_code(input: MessageDmsSetUserLockCodeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_user_lock_code_finish(res: Gio.AsyncResult): MessageDmsSetUserLockCodeOutput
    set_user_lock_state(input: MessageDmsSetUserLockStateInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_user_lock_state_finish(res: Gio.AsyncResult): MessageDmsSetUserLockStateOutput
    swi_get_current_firmware(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swi_get_current_firmware_finish(res: Gio.AsyncResult): MessageDmsSwiGetCurrentFirmwareOutput
    swi_get_usb_composition(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swi_get_usb_composition_finish(res: Gio.AsyncResult): MessageDmsSwiGetUsbCompositionOutput
    swi_set_usb_composition(input: MessageDmsSwiSetUsbCompositionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swi_set_usb_composition_finish(res: Gio.AsyncResult): MessageDmsSwiSetUsbCompositionOutput
    uim_change_pin(input: MessageDmsUimChangePinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_change_pin_finish(res: Gio.AsyncResult): MessageDmsUimChangePinOutput
    uim_get_ck_status(input: MessageDmsUimGetCkStatusInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_get_ck_status_finish(res: Gio.AsyncResult): MessageDmsUimGetCkStatusOutput
    uim_get_iccid(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_get_iccid_finish(res: Gio.AsyncResult): MessageDmsUimGetIccidOutput
    uim_get_imsi(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_get_imsi_finish(res: Gio.AsyncResult): MessageDmsUimGetImsiOutput
    uim_get_pin_status(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_get_pin_status_finish(res: Gio.AsyncResult): MessageDmsUimGetPinStatusOutput
    uim_get_state(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_get_state_finish(res: Gio.AsyncResult): MessageDmsUimGetStateOutput
    uim_set_ck_protection(input: MessageDmsUimSetCkProtectionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_set_ck_protection_finish(res: Gio.AsyncResult): MessageDmsUimSetCkProtectionOutput
    uim_set_pin_protection(input: MessageDmsUimSetPinProtectionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_set_pin_protection_finish(res: Gio.AsyncResult): MessageDmsUimSetPinProtectionOutput
    uim_unblock_ck(input: MessageDmsUimUnblockCkInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_unblock_ck_finish(res: Gio.AsyncResult): MessageDmsUimUnblockCkOutput
    uim_unblock_pin(input: MessageDmsUimUnblockPinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_unblock_pin_finish(res: Gio.AsyncResult): MessageDmsUimUnblockPinOutput
    uim_verify_pin(input: MessageDmsUimVerifyPinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    uim_verify_pin_finish(res: Gio.AsyncResult): MessageDmsUimVerifyPinOutput
    validate_service_programming_code(input: MessageDmsValidateServiceProgrammingCodeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    validate_service_programming_code_finish(res: Gio.AsyncResult): MessageDmsValidateServiceProgrammingCodeOutput
    write_user_data(input: MessageDmsWriteUserDataInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_user_data_finish(res: Gio.AsyncResult): MessageDmsWriteUserDataOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Qmi-1.0.Qmi.ClientDms */
    connect(sigName: "event-report", callback: (($obj: ClientDms, output: IndicationDmsEventReportOutput) => void)): number
    connect_after(sigName: "event-report", callback: (($obj: ClientDms, output: IndicationDmsEventReportOutput) => void)): number
    emit(sigName: "event-report", output: IndicationDmsEventReportOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientDms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientDms_ConstructProps)
    _init (config?: ClientDms_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientDpm_ConstructProps extends Client_ConstructProps {
}
class ClientDpm {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientDpm */
    close_port(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_port_finish(res: Gio.AsyncResult): MessageDpmClosePortOutput
    open_port(input: MessageDpmOpenPortInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_port_finish(res: Gio.AsyncResult): MessageDpmOpenPortOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientDpm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientDpm_ConstructProps)
    _init (config?: ClientDpm_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientDsd_ConstructProps extends Client_ConstructProps {
}
class ClientDsd {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientDsd */
    get_apn_info(input: MessageDsdGetApnInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_apn_info_finish(res: Gio.AsyncResult): MessageDsdGetApnInfoOutput
    set_apn_type(input: MessageDsdSetApnTypeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_apn_type_finish(res: Gio.AsyncResult): MessageDsdSetApnTypeOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientDsd, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientDsd_ConstructProps)
    _init (config?: ClientDsd_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientGas_ConstructProps extends Client_ConstructProps {
}
class ClientGas {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientGas */
    dms_get_firmware_list(input: MessageGasDmsGetFirmwareListInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dms_get_firmware_list_finish(res: Gio.AsyncResult): MessageGasDmsGetFirmwareListOutput
    dms_get_usb_composition(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dms_get_usb_composition_finish(res: Gio.AsyncResult): MessageGasDmsGetUsbCompositionOutput
    dms_set_active_firmware(input: MessageGasDmsSetActiveFirmwareInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dms_set_active_firmware_finish(res: Gio.AsyncResult): MessageGasDmsSetActiveFirmwareOutput
    dms_set_usb_composition(input: MessageGasDmsSetUsbCompositionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dms_set_usb_composition_finish(res: Gio.AsyncResult): MessageGasDmsSetUsbCompositionOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientGas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientGas_ConstructProps)
    _init (config?: ClientGas_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientGms_ConstructProps extends Client_ConstructProps {
}
class ClientGms {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientGms */
    test_get_value(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    test_get_value_finish(res: Gio.AsyncResult): MessageGmsTestGetValueOutput
    test_set_value(input: MessageGmsTestSetValueInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    test_set_value_finish(res: Gio.AsyncResult): MessageGmsTestSetValueOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientGms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientGms_ConstructProps)
    _init (config?: ClientGms_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientLoc_ConstructProps extends Client_ConstructProps {
}
class ClientLoc {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientLoc */
    delete_assistance_data(input: MessageLocDeleteAssistanceDataInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_assistance_data_finish(res: Gio.AsyncResult): MessageLocDeleteAssistanceDataOutput
    get_engine_lock(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_engine_lock_finish(res: Gio.AsyncResult): MessageLocGetEngineLockOutput
    get_nmea_types(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_nmea_types_finish(res: Gio.AsyncResult): MessageLocGetNmeaTypesOutput
    get_operation_mode(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_operation_mode_finish(res: Gio.AsyncResult): MessageLocGetOperationModeOutput
    get_predicted_orbits_data_source(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_predicted_orbits_data_source_finish(res: Gio.AsyncResult): MessageLocGetPredictedOrbitsDataSourceOutput
    get_server(input: MessageLocGetServerInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_server_finish(res: Gio.AsyncResult): MessageLocGetServerOutput
    inject_predicted_orbits_data(input: MessageLocInjectPredictedOrbitsDataInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    inject_predicted_orbits_data_finish(res: Gio.AsyncResult): MessageLocInjectPredictedOrbitsDataOutput
    inject_xtra_data(input: MessageLocInjectXtraDataInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    inject_xtra_data_finish(res: Gio.AsyncResult): MessageLocInjectXtraDataOutput
    register_events(input: MessageLocRegisterEventsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    register_events_finish(res: Gio.AsyncResult): MessageLocRegisterEventsOutput
    set_engine_lock(input: MessageLocSetEngineLockInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_engine_lock_finish(res: Gio.AsyncResult): MessageLocSetEngineLockOutput
    set_nmea_types(input: MessageLocSetNmeaTypesInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_nmea_types_finish(res: Gio.AsyncResult): MessageLocSetNmeaTypesOutput
    set_operation_mode(input: MessageLocSetOperationModeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_operation_mode_finish(res: Gio.AsyncResult): MessageLocSetOperationModeOutput
    set_server(input: MessageLocSetServerInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_server_finish(res: Gio.AsyncResult): MessageLocSetServerOutput
    start(input: MessageLocStartInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    start_finish(res: Gio.AsyncResult): MessageLocStartOutput
    stop(input: MessageLocStopInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    stop_finish(res: Gio.AsyncResult): MessageLocStopOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Qmi-1.0.Qmi.ClientLoc */
    connect(sigName: "delete-assistance-data", callback: (($obj: ClientLoc, output: IndicationLocDeleteAssistanceDataOutput) => void)): number
    connect_after(sigName: "delete-assistance-data", callback: (($obj: ClientLoc, output: IndicationLocDeleteAssistanceDataOutput) => void)): number
    emit(sigName: "delete-assistance-data", output: IndicationLocDeleteAssistanceDataOutput): void
    connect(sigName: "engine-state", callback: (($obj: ClientLoc, output: IndicationLocEngineStateOutput) => void)): number
    connect_after(sigName: "engine-state", callback: (($obj: ClientLoc, output: IndicationLocEngineStateOutput) => void)): number
    emit(sigName: "engine-state", output: IndicationLocEngineStateOutput): void
    connect(sigName: "fix-recurrence-type", callback: (($obj: ClientLoc, output: IndicationLocFixRecurrenceTypeOutput) => void)): number
    connect_after(sigName: "fix-recurrence-type", callback: (($obj: ClientLoc, output: IndicationLocFixRecurrenceTypeOutput) => void)): number
    emit(sigName: "fix-recurrence-type", output: IndicationLocFixRecurrenceTypeOutput): void
    connect(sigName: "get-engine-lock", callback: (($obj: ClientLoc, output: IndicationLocGetEngineLockOutput) => void)): number
    connect_after(sigName: "get-engine-lock", callback: (($obj: ClientLoc, output: IndicationLocGetEngineLockOutput) => void)): number
    emit(sigName: "get-engine-lock", output: IndicationLocGetEngineLockOutput): void
    connect(sigName: "get-nmea-types", callback: (($obj: ClientLoc, output: IndicationLocGetNmeaTypesOutput) => void)): number
    connect_after(sigName: "get-nmea-types", callback: (($obj: ClientLoc, output: IndicationLocGetNmeaTypesOutput) => void)): number
    emit(sigName: "get-nmea-types", output: IndicationLocGetNmeaTypesOutput): void
    connect(sigName: "get-operation-mode", callback: (($obj: ClientLoc, output: IndicationLocGetOperationModeOutput) => void)): number
    connect_after(sigName: "get-operation-mode", callback: (($obj: ClientLoc, output: IndicationLocGetOperationModeOutput) => void)): number
    emit(sigName: "get-operation-mode", output: IndicationLocGetOperationModeOutput): void
    connect(sigName: "get-predicted-orbits-data-source", callback: (($obj: ClientLoc, output: IndicationLocGetPredictedOrbitsDataSourceOutput) => void)): number
    connect_after(sigName: "get-predicted-orbits-data-source", callback: (($obj: ClientLoc, output: IndicationLocGetPredictedOrbitsDataSourceOutput) => void)): number
    emit(sigName: "get-predicted-orbits-data-source", output: IndicationLocGetPredictedOrbitsDataSourceOutput): void
    connect(sigName: "get-server", callback: (($obj: ClientLoc, output: IndicationLocGetServerOutput) => void)): number
    connect_after(sigName: "get-server", callback: (($obj: ClientLoc, output: IndicationLocGetServerOutput) => void)): number
    emit(sigName: "get-server", output: IndicationLocGetServerOutput): void
    connect(sigName: "gnss-sv-info", callback: (($obj: ClientLoc, output: IndicationLocGnssSvInfoOutput) => void)): number
    connect_after(sigName: "gnss-sv-info", callback: (($obj: ClientLoc, output: IndicationLocGnssSvInfoOutput) => void)): number
    emit(sigName: "gnss-sv-info", output: IndicationLocGnssSvInfoOutput): void
    connect(sigName: "inject-predicted-orbits-data", callback: (($obj: ClientLoc, output: IndicationLocInjectPredictedOrbitsDataOutput) => void)): number
    connect_after(sigName: "inject-predicted-orbits-data", callback: (($obj: ClientLoc, output: IndicationLocInjectPredictedOrbitsDataOutput) => void)): number
    emit(sigName: "inject-predicted-orbits-data", output: IndicationLocInjectPredictedOrbitsDataOutput): void
    connect(sigName: "inject-xtra-data", callback: (($obj: ClientLoc, output: IndicationLocInjectXtraDataOutput) => void)): number
    connect_after(sigName: "inject-xtra-data", callback: (($obj: ClientLoc, output: IndicationLocInjectXtraDataOutput) => void)): number
    emit(sigName: "inject-xtra-data", output: IndicationLocInjectXtraDataOutput): void
    connect(sigName: "nmea", callback: (($obj: ClientLoc, output: IndicationLocNmeaOutput) => void)): number
    connect_after(sigName: "nmea", callback: (($obj: ClientLoc, output: IndicationLocNmeaOutput) => void)): number
    emit(sigName: "nmea", output: IndicationLocNmeaOutput): void
    connect(sigName: "position-report", callback: (($obj: ClientLoc, output: IndicationLocPositionReportOutput) => void)): number
    connect_after(sigName: "position-report", callback: (($obj: ClientLoc, output: IndicationLocPositionReportOutput) => void)): number
    emit(sigName: "position-report", output: IndicationLocPositionReportOutput): void
    connect(sigName: "set-engine-lock", callback: (($obj: ClientLoc, output: IndicationLocSetEngineLockOutput) => void)): number
    connect_after(sigName: "set-engine-lock", callback: (($obj: ClientLoc, output: IndicationLocSetEngineLockOutput) => void)): number
    emit(sigName: "set-engine-lock", output: IndicationLocSetEngineLockOutput): void
    connect(sigName: "set-nmea-types", callback: (($obj: ClientLoc, output: IndicationLocSetNmeaTypesOutput) => void)): number
    connect_after(sigName: "set-nmea-types", callback: (($obj: ClientLoc, output: IndicationLocSetNmeaTypesOutput) => void)): number
    emit(sigName: "set-nmea-types", output: IndicationLocSetNmeaTypesOutput): void
    connect(sigName: "set-operation-mode", callback: (($obj: ClientLoc, output: IndicationLocSetOperationModeOutput) => void)): number
    connect_after(sigName: "set-operation-mode", callback: (($obj: ClientLoc, output: IndicationLocSetOperationModeOutput) => void)): number
    emit(sigName: "set-operation-mode", output: IndicationLocSetOperationModeOutput): void
    connect(sigName: "set-server", callback: (($obj: ClientLoc, output: IndicationLocSetServerOutput) => void)): number
    connect_after(sigName: "set-server", callback: (($obj: ClientLoc, output: IndicationLocSetServerOutput) => void)): number
    emit(sigName: "set-server", output: IndicationLocSetServerOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientLoc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientLoc_ConstructProps)
    _init (config?: ClientLoc_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientNas_ConstructProps extends Client_ConstructProps {
}
class ClientNas {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientNas */
    attach_detach(input: MessageNasAttachDetachInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    attach_detach_finish(res: Gio.AsyncResult): MessageNasAttachDetachOutput
    config_signal_info(input: MessageNasConfigSignalInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    config_signal_info_finish(res: Gio.AsyncResult): MessageNasConfigSignalInfoOutput
    force_network_search(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    force_network_search_finish(res: Gio.AsyncResult): MessageNasForceNetworkSearchOutput
    get_cdma_position_info(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_cdma_position_info_finish(res: Gio.AsyncResult): MessageNasGetCdmaPositionInfoOutput
    get_cell_location_info(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_cell_location_info_finish(res: Gio.AsyncResult): MessageNasGetCellLocationInfoOutput
    get_drx(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_drx_finish(res: Gio.AsyncResult): MessageNasGetDrxOutput
    get_home_network(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_home_network_finish(res: Gio.AsyncResult): MessageNasGetHomeNetworkOutput
    get_lte_cphy_ca_info(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_lte_cphy_ca_info_finish(res: Gio.AsyncResult): MessageNasGetLteCphyCaInfoOutput
    get_operator_name(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_operator_name_finish(res: Gio.AsyncResult): MessageNasGetOperatorNameOutput
    get_plmn_name(input: MessageNasGetPlmnNameInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_plmn_name_finish(res: Gio.AsyncResult): MessageNasGetPlmnNameOutput
    get_preferred_networks(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_preferred_networks_finish(res: Gio.AsyncResult): MessageNasGetPreferredNetworksOutput
    get_rf_band_information(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_rf_band_information_finish(res: Gio.AsyncResult): MessageNasGetRfBandInformationOutput
    get_serving_system(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_serving_system_finish(res: Gio.AsyncResult): MessageNasGetServingSystemOutput
    get_signal_info(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_signal_info_finish(res: Gio.AsyncResult): MessageNasGetSignalInfoOutput
    get_signal_strength(input: MessageNasGetSignalStrengthInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_signal_strength_finish(res: Gio.AsyncResult): MessageNasGetSignalStrengthOutput
    get_supported_messages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_supported_messages_finish(res: Gio.AsyncResult): MessageNasGetSupportedMessagesOutput
    get_system_info(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_system_info_finish(res: Gio.AsyncResult): MessageNasGetSystemInfoOutput
    get_system_selection_preference(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_system_selection_preference_finish(res: Gio.AsyncResult): MessageNasGetSystemSelectionPreferenceOutput
    get_technology_preference(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_technology_preference_finish(res: Gio.AsyncResult): MessageNasGetTechnologyPreferenceOutput
    get_tx_rx_info(input: MessageNasGetTxRxInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_tx_rx_info_finish(res: Gio.AsyncResult): MessageNasGetTxRxInfoOutput
    initiate_network_register(input: MessageNasInitiateNetworkRegisterInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initiate_network_register_finish(res: Gio.AsyncResult): MessageNasInitiateNetworkRegisterOutput
    network_scan(input: MessageNasNetworkScanInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    network_scan_finish(res: Gio.AsyncResult): MessageNasNetworkScanOutput
    register_indications(input: MessageNasRegisterIndicationsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    register_indications_finish(res: Gio.AsyncResult): MessageNasRegisterIndicationsOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessageNasResetOutput
    set_event_report(input: MessageNasSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_event_report_finish(res: Gio.AsyncResult): MessageNasSetEventReportOutput
    set_preferred_networks(input: MessageNasSetPreferredNetworksInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_preferred_networks_finish(res: Gio.AsyncResult): MessageNasSetPreferredNetworksOutput
    set_system_selection_preference(input: MessageNasSetSystemSelectionPreferenceInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_system_selection_preference_finish(res: Gio.AsyncResult): MessageNasSetSystemSelectionPreferenceOutput
    set_technology_preference(input: MessageNasSetTechnologyPreferenceInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_technology_preference_finish(res: Gio.AsyncResult): MessageNasSetTechnologyPreferenceOutput
    swi_get_status(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swi_get_status_finish(res: Gio.AsyncResult): MessageNasSwiGetStatusOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Qmi-1.0.Qmi.ClientNas */
    connect(sigName: "event-report", callback: (($obj: ClientNas, output: IndicationNasEventReportOutput) => void)): number
    connect_after(sigName: "event-report", callback: (($obj: ClientNas, output: IndicationNasEventReportOutput) => void)): number
    emit(sigName: "event-report", output: IndicationNasEventReportOutput): void
    connect(sigName: "network-reject", callback: (($obj: ClientNas, output: IndicationNasNetworkRejectOutput) => void)): number
    connect_after(sigName: "network-reject", callback: (($obj: ClientNas, output: IndicationNasNetworkRejectOutput) => void)): number
    emit(sigName: "network-reject", output: IndicationNasNetworkRejectOutput): void
    connect(sigName: "network-time", callback: (($obj: ClientNas, output: IndicationNasNetworkTimeOutput) => void)): number
    connect_after(sigName: "network-time", callback: (($obj: ClientNas, output: IndicationNasNetworkTimeOutput) => void)): number
    emit(sigName: "network-time", output: IndicationNasNetworkTimeOutput): void
    connect(sigName: "operator-name", callback: (($obj: ClientNas, output: IndicationNasOperatorNameOutput) => void)): number
    connect_after(sigName: "operator-name", callback: (($obj: ClientNas, output: IndicationNasOperatorNameOutput) => void)): number
    emit(sigName: "operator-name", output: IndicationNasOperatorNameOutput): void
    connect(sigName: "serving-system", callback: (($obj: ClientNas, output: IndicationNasServingSystemOutput) => void)): number
    connect_after(sigName: "serving-system", callback: (($obj: ClientNas, output: IndicationNasServingSystemOutput) => void)): number
    emit(sigName: "serving-system", output: IndicationNasServingSystemOutput): void
    connect(sigName: "signal-info", callback: (($obj: ClientNas, output: IndicationNasSignalInfoOutput) => void)): number
    connect_after(sigName: "signal-info", callback: (($obj: ClientNas, output: IndicationNasSignalInfoOutput) => void)): number
    emit(sigName: "signal-info", output: IndicationNasSignalInfoOutput): void
    connect(sigName: "system-info", callback: (($obj: ClientNas, output: IndicationNasSystemInfoOutput) => void)): number
    connect_after(sigName: "system-info", callback: (($obj: ClientNas, output: IndicationNasSystemInfoOutput) => void)): number
    emit(sigName: "system-info", output: IndicationNasSystemInfoOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientNas, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientNas_ConstructProps)
    _init (config?: ClientNas_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientOma_ConstructProps extends Client_ConstructProps {
}
class ClientOma {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientOma */
    cancel_session(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cancel_session_finish(res: Gio.AsyncResult): MessageOmaCancelSessionOutput
    get_feature_setting(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_feature_setting_finish(res: Gio.AsyncResult): MessageOmaGetFeatureSettingOutput
    get_session_info(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_session_info_finish(res: Gio.AsyncResult): MessageOmaGetSessionInfoOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessageOmaResetOutput
    send_selection(input: MessageOmaSendSelectionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_selection_finish(res: Gio.AsyncResult): MessageOmaSendSelectionOutput
    set_event_report(input: MessageOmaSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_event_report_finish(res: Gio.AsyncResult): MessageOmaSetEventReportOutput
    set_feature_setting(input: MessageOmaSetFeatureSettingInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_feature_setting_finish(res: Gio.AsyncResult): MessageOmaSetFeatureSettingOutput
    start_session(input: MessageOmaStartSessionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    start_session_finish(res: Gio.AsyncResult): MessageOmaStartSessionOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Qmi-1.0.Qmi.ClientOma */
    connect(sigName: "event-report", callback: (($obj: ClientOma, output: IndicationOmaEventReportOutput) => void)): number
    connect_after(sigName: "event-report", callback: (($obj: ClientOma, output: IndicationOmaEventReportOutput) => void)): number
    emit(sigName: "event-report", output: IndicationOmaEventReportOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientOma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientOma_ConstructProps)
    _init (config?: ClientOma_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientPbm_ConstructProps extends Client_ConstructProps {
}
class ClientPbm {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientPbm */
    get_all_capabilities(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_all_capabilities_finish(res: Gio.AsyncResult): MessagePbmGetAllCapabilitiesOutput
    get_capabilities(input: MessagePbmGetCapabilitiesInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_capabilities_finish(res: Gio.AsyncResult): MessagePbmGetCapabilitiesOutput
    indication_register(input: MessagePbmIndicationRegisterInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    indication_register_finish(res: Gio.AsyncResult): MessagePbmIndicationRegisterOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientPbm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientPbm_ConstructProps)
    _init (config?: ClientPbm_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientPdc_ConstructProps extends Client_ConstructProps {
}
class ClientPdc {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientPdc */
    activate_config(input: MessagePdcActivateConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    activate_config_finish(res: Gio.AsyncResult): MessagePdcActivateConfigOutput
    config_change(input: MessagePdcConfigChangeInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    config_change_finish(res: Gio.AsyncResult): MessagePdcConfigChangeOutput
    deactivate_config(input: MessagePdcDeactivateConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deactivate_config_finish(res: Gio.AsyncResult): MessagePdcDeactivateConfigOutput
    delete_config(input: MessagePdcDeleteConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_config_finish(res: Gio.AsyncResult): MessagePdcDeleteConfigOutput
    get_config_info(input: MessagePdcGetConfigInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_config_info_finish(res: Gio.AsyncResult): MessagePdcGetConfigInfoOutput
    get_config_limits(input: MessagePdcGetConfigLimitsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_config_limits_finish(res: Gio.AsyncResult): MessagePdcGetConfigLimitsOutput
    get_default_config_info(input: MessagePdcGetDefaultConfigInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_default_config_info_finish(res: Gio.AsyncResult): MessagePdcGetDefaultConfigInfoOutput
    get_selected_config(input: MessagePdcGetSelectedConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_selected_config_finish(res: Gio.AsyncResult): MessagePdcGetSelectedConfigOutput
    list_configs(input: MessagePdcListConfigsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    list_configs_finish(res: Gio.AsyncResult): MessagePdcListConfigsOutput
    load_config(input: MessagePdcLoadConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_config_finish(res: Gio.AsyncResult): MessagePdcLoadConfigOutput
    register(input: MessagePdcRegisterInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    register_finish(res: Gio.AsyncResult): MessagePdcRegisterOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessagePdcResetOutput
    set_selected_config(input: MessagePdcSetSelectedConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_selected_config_finish(res: Gio.AsyncResult): MessagePdcSetSelectedConfigOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Qmi-1.0.Qmi.ClientPdc */
    connect(sigName: "activate-config", callback: (($obj: ClientPdc, output: IndicationPdcActivateConfigOutput) => void)): number
    connect_after(sigName: "activate-config", callback: (($obj: ClientPdc, output: IndicationPdcActivateConfigOutput) => void)): number
    emit(sigName: "activate-config", output: IndicationPdcActivateConfigOutput): void
    connect(sigName: "deactivate-config", callback: (($obj: ClientPdc, output: IndicationPdcDeactivateConfigOutput) => void)): number
    connect_after(sigName: "deactivate-config", callback: (($obj: ClientPdc, output: IndicationPdcDeactivateConfigOutput) => void)): number
    emit(sigName: "deactivate-config", output: IndicationPdcDeactivateConfigOutput): void
    connect(sigName: "get-config-info", callback: (($obj: ClientPdc, output: IndicationPdcGetConfigInfoOutput) => void)): number
    connect_after(sigName: "get-config-info", callback: (($obj: ClientPdc, output: IndicationPdcGetConfigInfoOutput) => void)): number
    emit(sigName: "get-config-info", output: IndicationPdcGetConfigInfoOutput): void
    connect(sigName: "get-selected-config", callback: (($obj: ClientPdc, output: IndicationPdcGetSelectedConfigOutput) => void)): number
    connect_after(sigName: "get-selected-config", callback: (($obj: ClientPdc, output: IndicationPdcGetSelectedConfigOutput) => void)): number
    emit(sigName: "get-selected-config", output: IndicationPdcGetSelectedConfigOutput): void
    connect(sigName: "list-configs", callback: (($obj: ClientPdc, output: IndicationPdcListConfigsOutput) => void)): number
    connect_after(sigName: "list-configs", callback: (($obj: ClientPdc, output: IndicationPdcListConfigsOutput) => void)): number
    emit(sigName: "list-configs", output: IndicationPdcListConfigsOutput): void
    connect(sigName: "load-config", callback: (($obj: ClientPdc, output: IndicationPdcLoadConfigOutput) => void)): number
    connect_after(sigName: "load-config", callback: (($obj: ClientPdc, output: IndicationPdcLoadConfigOutput) => void)): number
    emit(sigName: "load-config", output: IndicationPdcLoadConfigOutput): void
    connect(sigName: "refresh", callback: (($obj: ClientPdc, output: IndicationPdcRefreshOutput) => void)): number
    connect_after(sigName: "refresh", callback: (($obj: ClientPdc, output: IndicationPdcRefreshOutput) => void)): number
    emit(sigName: "refresh", output: IndicationPdcRefreshOutput): void
    connect(sigName: "set-selected-config", callback: (($obj: ClientPdc, output: IndicationPdcSetSelectedConfigOutput) => void)): number
    connect_after(sigName: "set-selected-config", callback: (($obj: ClientPdc, output: IndicationPdcSetSelectedConfigOutput) => void)): number
    emit(sigName: "set-selected-config", output: IndicationPdcSetSelectedConfigOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientPdc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientPdc_ConstructProps)
    _init (config?: ClientPdc_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientPds_ConstructProps extends Client_ConstructProps {
}
class ClientPds {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientPds */
    get_agps_config(input: MessagePdsGetAgpsConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_agps_config_finish(res: Gio.AsyncResult): MessagePdsGetAgpsConfigOutput
    get_auto_tracking_state(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_auto_tracking_state_finish(res: Gio.AsyncResult): MessagePdsGetAutoTrackingStateOutput
    get_default_tracking_session(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_default_tracking_session_finish(res: Gio.AsyncResult): MessagePdsGetDefaultTrackingSessionOutput
    get_gps_service_state(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_gps_service_state_finish(res: Gio.AsyncResult): MessagePdsGetGpsServiceStateOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessagePdsResetOutput
    set_agps_config(input: MessagePdsSetAgpsConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_agps_config_finish(res: Gio.AsyncResult): MessagePdsSetAgpsConfigOutput
    set_auto_tracking_state(input: MessagePdsSetAutoTrackingStateInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_auto_tracking_state_finish(res: Gio.AsyncResult): MessagePdsSetAutoTrackingStateOutput
    set_default_tracking_session(input: MessagePdsSetDefaultTrackingSessionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_default_tracking_session_finish(res: Gio.AsyncResult): MessagePdsSetDefaultTrackingSessionOutput
    set_event_report(input: MessagePdsSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_event_report_finish(res: Gio.AsyncResult): MessagePdsSetEventReportOutput
    set_gps_service_state(input: MessagePdsSetGpsServiceStateInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_gps_service_state_finish(res: Gio.AsyncResult): MessagePdsSetGpsServiceStateOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Qmi-1.0.Qmi.ClientPds */
    connect(sigName: "event-report", callback: (($obj: ClientPds, output: IndicationPdsEventReportOutput) => void)): number
    connect_after(sigName: "event-report", callback: (($obj: ClientPds, output: IndicationPdsEventReportOutput) => void)): number
    emit(sigName: "event-report", output: IndicationPdsEventReportOutput): void
    connect(sigName: "gps-ready", callback: (($obj: ClientPds) => void)): number
    connect_after(sigName: "gps-ready", callback: (($obj: ClientPds) => void)): number
    emit(sigName: "gps-ready"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientPds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientPds_ConstructProps)
    _init (config?: ClientPds_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientQos_ConstructProps extends Client_ConstructProps {
}
class ClientQos {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientQos */
    get_flow_status(input: MessageQosGetFlowStatusInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_flow_status_finish(res: Gio.AsyncResult): MessageQosGetFlowStatusOutput
    get_network_status(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_network_status_finish(res: Gio.AsyncResult): MessageQosGetNetworkStatusOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessageQosResetOutput
    swi_read_data_stats(input: MessageQosSwiReadDataStatsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swi_read_data_stats_finish(res: Gio.AsyncResult): MessageQosSwiReadDataStatsOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Qmi-1.0.Qmi.ClientQos */
    connect(sigName: "flow-status", callback: (($obj: ClientQos, output: IndicationQosFlowStatusOutput) => void)): number
    connect_after(sigName: "flow-status", callback: (($obj: ClientQos, output: IndicationQosFlowStatusOutput) => void)): number
    emit(sigName: "flow-status", output: IndicationQosFlowStatusOutput): void
    connect(sigName: "network-status", callback: (($obj: ClientQos, output: IndicationQosNetworkStatusOutput) => void)): number
    connect_after(sigName: "network-status", callback: (($obj: ClientQos, output: IndicationQosNetworkStatusOutput) => void)): number
    emit(sigName: "network-status", output: IndicationQosNetworkStatusOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientQos, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientQos_ConstructProps)
    _init (config?: ClientQos_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientSar_ConstructProps extends Client_ConstructProps {
}
class ClientSar {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientSar */
    rf_get_state(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rf_get_state_finish(res: Gio.AsyncResult): MessageSarRfGetStateOutput
    rf_set_state(input: MessageSarRfSetStateInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rf_set_state_finish(res: Gio.AsyncResult): MessageSarRfSetStateOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientSar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientSar_ConstructProps)
    _init (config?: ClientSar_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientUim_ConstructProps extends Client_ConstructProps {
}
class ClientUim {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientUim */
    change_pin(input: MessageUimChangePinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    change_pin_finish(res: Gio.AsyncResult): MessageUimChangePinOutput
    change_provisioning_session(input: MessageUimChangeProvisioningSessionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    change_provisioning_session_finish(res: Gio.AsyncResult): MessageUimChangeProvisioningSessionOutput
    depersonalization(input: MessageUimDepersonalizationInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    depersonalization_finish(res: Gio.AsyncResult): MessageUimDepersonalizationOutput
    get_card_status(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_card_status_finish(res: Gio.AsyncResult): MessageUimGetCardStatusOutput
    get_configuration(input: MessageUimGetConfigurationInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_configuration_finish(res: Gio.AsyncResult): MessageUimGetConfigurationOutput
    get_file_attributes(input: MessageUimGetFileAttributesInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_file_attributes_finish(res: Gio.AsyncResult): MessageUimGetFileAttributesOutput
    get_slot_status(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_slot_status_finish(res: Gio.AsyncResult): MessageUimGetSlotStatusOutput
    get_supported_messages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_supported_messages_finish(res: Gio.AsyncResult): MessageUimGetSupportedMessagesOutput
    power_off_sim(input: MessageUimPowerOffSimInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    power_off_sim_finish(res: Gio.AsyncResult): MessageUimPowerOffSimOutput
    power_on_sim(input: MessageUimPowerOnSimInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    power_on_sim_finish(res: Gio.AsyncResult): MessageUimPowerOnSimOutput
    read_record(input: MessageUimReadRecordInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_record_finish(res: Gio.AsyncResult): MessageUimReadRecordOutput
    read_transparent(input: MessageUimReadTransparentInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_transparent_finish(res: Gio.AsyncResult): MessageUimReadTransparentOutput
    refresh_complete(input: MessageUimRefreshCompleteInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_complete_finish(res: Gio.AsyncResult): MessageUimRefreshCompleteOutput
    refresh_register(input: MessageUimRefreshRegisterInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_register_all(input: MessageUimRefreshRegisterAllInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_register_all_finish(res: Gio.AsyncResult): MessageUimRefreshRegisterAllOutput
    refresh_register_finish(res: Gio.AsyncResult): MessageUimRefreshRegisterOutput
    register_events(input: MessageUimRegisterEventsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    register_events_finish(res: Gio.AsyncResult): MessageUimRegisterEventsOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessageUimResetOutput
    set_pin_protection(input: MessageUimSetPinProtectionInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_pin_protection_finish(res: Gio.AsyncResult): MessageUimSetPinProtectionOutput
    switch_slot(input: MessageUimSwitchSlotInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    switch_slot_finish(res: Gio.AsyncResult): MessageUimSwitchSlotOutput
    unblock_pin(input: MessageUimUnblockPinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unblock_pin_finish(res: Gio.AsyncResult): MessageUimUnblockPinOutput
    verify_pin(input: MessageUimVerifyPinInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verify_pin_finish(res: Gio.AsyncResult): MessageUimVerifyPinOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Qmi-1.0.Qmi.ClientUim */
    connect(sigName: "card-status", callback: (($obj: ClientUim, output: IndicationUimCardStatusOutput) => void)): number
    connect_after(sigName: "card-status", callback: (($obj: ClientUim, output: IndicationUimCardStatusOutput) => void)): number
    emit(sigName: "card-status", output: IndicationUimCardStatusOutput): void
    connect(sigName: "refresh", callback: (($obj: ClientUim, output: IndicationUimRefreshOutput) => void)): number
    connect_after(sigName: "refresh", callback: (($obj: ClientUim, output: IndicationUimRefreshOutput) => void)): number
    emit(sigName: "refresh", output: IndicationUimRefreshOutput): void
    connect(sigName: "slot-status", callback: (($obj: ClientUim, output: IndicationUimSlotStatusOutput) => void)): number
    connect_after(sigName: "slot-status", callback: (($obj: ClientUim, output: IndicationUimSlotStatusOutput) => void)): number
    emit(sigName: "slot-status", output: IndicationUimSlotStatusOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientUim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientUim_ConstructProps)
    _init (config?: ClientUim_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientVoice_ConstructProps extends Client_ConstructProps {
}
class ClientVoice {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientVoice */
    answer_call(input: MessageVoiceAnswerCallInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    answer_call_finish(res: Gio.AsyncResult): MessageVoiceAnswerCallOutput
    answer_ussd(input: MessageVoiceAnswerUssdInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    answer_ussd_finish(res: Gio.AsyncResult): MessageVoiceAnswerUssdOutput
    cancel_ussd(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cancel_ussd_finish(res: Gio.AsyncResult): MessageVoiceCancelUssdOutput
    dial_call(input: MessageVoiceDialCallInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    dial_call_finish(res: Gio.AsyncResult): MessageVoiceDialCallOutput
    end_call(input: MessageVoiceEndCallInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    end_call_finish(res: Gio.AsyncResult): MessageVoiceEndCallOutput
    get_all_call_info(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_all_call_info_finish(res: Gio.AsyncResult): MessageVoiceGetAllCallInfoOutput
    get_call_waiting(input: MessageVoiceGetCallWaitingInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_call_waiting_finish(res: Gio.AsyncResult): MessageVoiceGetCallWaitingOutput
    get_config(input: MessageVoiceGetConfigInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_config_finish(res: Gio.AsyncResult): MessageVoiceGetConfigOutput
    get_supported_messages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_supported_messages_finish(res: Gio.AsyncResult): MessageVoiceGetSupportedMessagesOutput
    indication_register(input: MessageVoiceIndicationRegisterInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    indication_register_finish(res: Gio.AsyncResult): MessageVoiceIndicationRegisterOutput
    manage_calls(input: MessageVoiceManageCallsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    manage_calls_finish(res: Gio.AsyncResult): MessageVoiceManageCallsOutput
    originate_ussd(input: MessageVoiceOriginateUssdInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    originate_ussd_finish(res: Gio.AsyncResult): MessageVoiceOriginateUssdOutput
    originate_ussd_no_wait(input: MessageVoiceOriginateUssdNoWaitInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    originate_ussd_no_wait_finish(res: Gio.AsyncResult): MessageVoiceOriginateUssdNoWaitOutput
    set_supplementary_service(input: MessageVoiceSetSupplementaryServiceInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_supplementary_service_finish(res: Gio.AsyncResult): MessageVoiceSetSupplementaryServiceOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Qmi-1.0.Qmi.ClientVoice */
    connect(sigName: "all-call-status", callback: (($obj: ClientVoice, output: IndicationVoiceAllCallStatusOutput) => void)): number
    connect_after(sigName: "all-call-status", callback: (($obj: ClientVoice, output: IndicationVoiceAllCallStatusOutput) => void)): number
    emit(sigName: "all-call-status", output: IndicationVoiceAllCallStatusOutput): void
    connect(sigName: "originate-ussd-no-wait", callback: (($obj: ClientVoice, output: IndicationVoiceOriginateUssdNoWaitOutput) => void)): number
    connect_after(sigName: "originate-ussd-no-wait", callback: (($obj: ClientVoice, output: IndicationVoiceOriginateUssdNoWaitOutput) => void)): number
    emit(sigName: "originate-ussd-no-wait", output: IndicationVoiceOriginateUssdNoWaitOutput): void
    connect(sigName: "release-ussd", callback: (($obj: ClientVoice) => void)): number
    connect_after(sigName: "release-ussd", callback: (($obj: ClientVoice) => void)): number
    emit(sigName: "release-ussd"): void
    connect(sigName: "supplementary-service", callback: (($obj: ClientVoice, output: IndicationVoiceSupplementaryServiceOutput) => void)): number
    connect_after(sigName: "supplementary-service", callback: (($obj: ClientVoice, output: IndicationVoiceSupplementaryServiceOutput) => void)): number
    emit(sigName: "supplementary-service", output: IndicationVoiceSupplementaryServiceOutput): void
    connect(sigName: "ussd", callback: (($obj: ClientVoice, output: IndicationVoiceUssdOutput) => void)): number
    connect_after(sigName: "ussd", callback: (($obj: ClientVoice, output: IndicationVoiceUssdOutput) => void)): number
    emit(sigName: "ussd", output: IndicationVoiceUssdOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientVoice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientVoice_ConstructProps)
    _init (config?: ClientVoice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientWda_ConstructProps extends Client_ConstructProps {
}
class ClientWda {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientWda */
    get_data_format(input: MessageWdaGetDataFormatInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_data_format_finish(res: Gio.AsyncResult): MessageWdaGetDataFormatOutput
    get_supported_messages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_supported_messages_finish(res: Gio.AsyncResult): MessageWdaGetSupportedMessagesOutput
    set_data_format(input: MessageWdaSetDataFormatInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_data_format_finish(res: Gio.AsyncResult): MessageWdaSetDataFormatOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientWda, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientWda_ConstructProps)
    _init (config?: ClientWda_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientWds_ConstructProps extends Client_ConstructProps {
}
class ClientWds {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientWds */
    bind_data_port(input: MessageWdsBindDataPortInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    bind_data_port_finish(res: Gio.AsyncResult): MessageWdsBindDataPortOutput
    bind_mux_data_port(input: MessageWdsBindMuxDataPortInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    bind_mux_data_port_finish(res: Gio.AsyncResult): MessageWdsBindMuxDataPortOutput
    create_profile(input: MessageWdsCreateProfileInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_profile_finish(res: Gio.AsyncResult): MessageWdsCreateProfileOutput
    delete_profile(input: MessageWdsDeleteProfileInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_profile_finish(res: Gio.AsyncResult): MessageWdsDeleteProfileOutput
    get_autoconnect_settings(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_autoconnect_settings_finish(res: Gio.AsyncResult): MessageWdsGetAutoconnectSettingsOutput
    get_channel_rates(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_channel_rates_finish(res: Gio.AsyncResult): MessageWdsGetChannelRatesOutput
    get_current_data_bearer_technology(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_current_data_bearer_technology_finish(res: Gio.AsyncResult): MessageWdsGetCurrentDataBearerTechnologyOutput
    get_current_settings(input: MessageWdsGetCurrentSettingsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_current_settings_finish(res: Gio.AsyncResult): MessageWdsGetCurrentSettingsOutput
    get_data_bearer_technology(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_data_bearer_technology_finish(res: Gio.AsyncResult): MessageWdsGetDataBearerTechnologyOutput
    get_default_profile_number(input: MessageWdsGetDefaultProfileNumberInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_default_profile_number_finish(res: Gio.AsyncResult): MessageWdsGetDefaultProfileNumberOutput
    get_default_settings(input: MessageWdsGetDefaultSettingsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_default_settings_finish(res: Gio.AsyncResult): MessageWdsGetDefaultSettingsOutput
    get_dormancy_status(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_dormancy_status_finish(res: Gio.AsyncResult): MessageWdsGetDormancyStatusOutput
    get_lte_attach_parameters(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_lte_attach_parameters_finish(res: Gio.AsyncResult): MessageWdsGetLteAttachParametersOutput
    get_lte_attach_pdn_list(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_lte_attach_pdn_list_finish(res: Gio.AsyncResult): MessageWdsGetLteAttachPdnListOutput
    get_max_lte_attach_pdn_number(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_max_lte_attach_pdn_number_finish(res: Gio.AsyncResult): MessageWdsGetMaxLteAttachPdnNumberOutput
    get_packet_service_status(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_packet_service_status_finish(res: Gio.AsyncResult): MessageWdsGetPacketServiceStatusOutput
    get_packet_statistics(input: MessageWdsGetPacketStatisticsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_packet_statistics_finish(res: Gio.AsyncResult): MessageWdsGetPacketStatisticsOutput
    get_pdn_throttle_info(input: MessageWdsGetPdnThrottleInfoInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_pdn_throttle_info_finish(res: Gio.AsyncResult): MessageWdsGetPdnThrottleInfoOutput
    get_profile_list(input: MessageWdsGetProfileListInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_profile_list_finish(res: Gio.AsyncResult): MessageWdsGetProfileListOutput
    get_profile_settings(input: MessageWdsGetProfileSettingsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_profile_settings_finish(res: Gio.AsyncResult): MessageWdsGetProfileSettingsOutput
    get_supported_messages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_supported_messages_finish(res: Gio.AsyncResult): MessageWdsGetSupportedMessagesOutput
    go_active(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    go_active_finish(res: Gio.AsyncResult): MessageWdsGoActiveOutput
    go_dormant(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    go_dormant_finish(res: Gio.AsyncResult): MessageWdsGoDormantOutput
    modify_profile(input: MessageWdsModifyProfileInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_profile_finish(res: Gio.AsyncResult): MessageWdsModifyProfileOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessageWdsResetOutput
    set_autoconnect_settings(input: MessageWdsSetAutoconnectSettingsInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_autoconnect_settings_finish(res: Gio.AsyncResult): MessageWdsSetAutoconnectSettingsOutput
    set_default_profile_number(input: MessageWdsSetDefaultProfileNumberInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_default_profile_number_finish(res: Gio.AsyncResult): MessageWdsSetDefaultProfileNumberOutput
    set_event_report(input: MessageWdsSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_event_report_finish(res: Gio.AsyncResult): MessageWdsSetEventReportOutput
    set_ip_family(input: MessageWdsSetIpFamilyInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_ip_family_finish(res: Gio.AsyncResult): MessageWdsSetIpFamilyOutput
    set_lte_attach_pdn_list(input: MessageWdsSetLteAttachPdnListInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_lte_attach_pdn_list_finish(res: Gio.AsyncResult): MessageWdsSetLteAttachPdnListOutput
    start_network(input: MessageWdsStartNetworkInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    start_network_finish(res: Gio.AsyncResult): MessageWdsStartNetworkOutput
    stop_network(input: MessageWdsStopNetworkInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    stop_network_finish(res: Gio.AsyncResult): MessageWdsStopNetworkOutput
    swi_create_profile_indexed(input: MessageWdsSwiCreateProfileIndexedInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    swi_create_profile_indexed_finish(res: Gio.AsyncResult): MessageWdsSwiCreateProfileIndexedOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Qmi-1.0.Qmi.ClientWds */
    connect(sigName: "event-report", callback: (($obj: ClientWds, output: IndicationWdsEventReportOutput) => void)): number
    connect_after(sigName: "event-report", callback: (($obj: ClientWds, output: IndicationWdsEventReportOutput) => void)): number
    emit(sigName: "event-report", output: IndicationWdsEventReportOutput): void
    connect(sigName: "packet-service-status", callback: (($obj: ClientWds, output: IndicationWdsPacketServiceStatusOutput) => void)): number
    connect_after(sigName: "packet-service-status", callback: (($obj: ClientWds, output: IndicationWdsPacketServiceStatusOutput) => void)): number
    emit(sigName: "packet-service-status", output: IndicationWdsPacketServiceStatusOutput): void
    connect(sigName: "set-lte-attach-pdn-list", callback: (($obj: ClientWds, output: IndicationWdsSetLteAttachPdnListOutput) => void)): number
    connect_after(sigName: "set-lte-attach-pdn-list", callback: (($obj: ClientWds, output: IndicationWdsSetLteAttachPdnListOutput) => void)): number
    emit(sigName: "set-lte-attach-pdn-list", output: IndicationWdsSetLteAttachPdnListOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientWds, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientWds_ConstructProps)
    _init (config?: ClientWds_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ClientWms_ConstructProps extends Client_ConstructProps {
}
class ClientWms {
    /* Properties of Qmi-1.0.Qmi.Client */
    client_cid: number
    client_device: Device
    client_service: Service
    readonly client_valid: boolean
    client_version_major: number
    client_version_minor: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.ClientWms */
    delete(input: MessageWmsDeleteInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_finish(res: Gio.AsyncResult): MessageWmsDeleteOutput
    get_message_protocol(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_message_protocol_finish(res: Gio.AsyncResult): MessageWmsGetMessageProtocolOutput
    get_routes(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_routes_finish(res: Gio.AsyncResult): MessageWmsGetRoutesOutput
    get_supported_messages(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_supported_messages_finish(res: Gio.AsyncResult): MessageWmsGetSupportedMessagesOutput
    list_messages(input: MessageWmsListMessagesInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    list_messages_finish(res: Gio.AsyncResult): MessageWmsListMessagesOutput
    modify_tag(input: MessageWmsModifyTagInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    modify_tag_finish(res: Gio.AsyncResult): MessageWmsModifyTagOutput
    raw_read(input: MessageWmsRawReadInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    raw_read_finish(res: Gio.AsyncResult): MessageWmsRawReadOutput
    raw_send(input: MessageWmsRawSendInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    raw_send_finish(res: Gio.AsyncResult): MessageWmsRawSendOutput
    raw_write(input: MessageWmsRawWriteInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    raw_write_finish(res: Gio.AsyncResult): MessageWmsRawWriteOutput
    reset(unused: object | null, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reset_finish(res: Gio.AsyncResult): MessageWmsResetOutput
    send_ack(input: MessageWmsSendAckInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_ack_finish(res: Gio.AsyncResult): MessageWmsSendAckOutput
    send_from_memory_storage(input: MessageWmsSendFromMemoryStorageInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_from_memory_storage_finish(res: Gio.AsyncResult): MessageWmsSendFromMemoryStorageOutput
    set_event_report(input: MessageWmsSetEventReportInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_event_report_finish(res: Gio.AsyncResult): MessageWmsSetEventReportOutput
    set_routes(input: MessageWmsSetRoutesInput, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_routes_finish(res: Gio.AsyncResult): MessageWmsSetRoutesOutput
    /* Methods of Qmi-1.0.Qmi.Client */
    check_version(major: number, minor: number): boolean
    get_cid(): number
    get_device(): GObject.Object
    get_next_transaction_id(): number
    get_service(): Service
    get_version(major: number, minor: number): boolean
    is_valid(): boolean
    peek_device(): GObject.Object
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
    /* Virtual methods of Qmi-1.0.Qmi.Client */
    vfunc_process_indication(message: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Qmi-1.0.Qmi.ClientWms */
    connect(sigName: "event-report", callback: (($obj: ClientWms, output: IndicationWmsEventReportOutput) => void)): number
    connect_after(sigName: "event-report", callback: (($obj: ClientWms, output: IndicationWmsEventReportOutput) => void)): number
    emit(sigName: "event-report", output: IndicationWmsEventReportOutput): void
    connect(sigName: "smsc-address", callback: (($obj: ClientWms, output: IndicationWmsSmscAddressOutput) => void)): number
    connect_after(sigName: "smsc-address", callback: (($obj: ClientWms, output: IndicationWmsSmscAddressOutput) => void)): number
    emit(sigName: "smsc-address", output: IndicationWmsSmscAddressOutput): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::client-cid", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-cid", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-device", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-device", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-service", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-service", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-valid", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-valid", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-major", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-major", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-version-minor", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-version-minor", callback: (($obj: ClientWms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientWms_ConstructProps)
    _init (config?: ClientWms_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
    device_file?: Gio.File
    device_no_file_check?: boolean
    device_proxy_path?: string
}
class Device {
    /* Properties of Qmi-1.0.Qmi.Device */
    readonly device_wwan_iface: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.Device */
    add_link(mux_id: number, base_ifname: string, ifname_prefix: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    add_link_finish(res: Gio.AsyncResult, mux_id: number): string
    add_link_with_flags(mux_id: number, base_ifname: string, ifname_prefix: string, flags: DeviceAddLinkFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    add_link_with_flags_finish(res: Gio.AsyncResult, mux_id: number): string
    allocate_client(service: Service, cid: number, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    allocate_client_finish(res: Gio.AsyncResult): Client
    check_expected_data_format_supported(format: DeviceExpectedDataFormat): boolean
    check_link_supported(): boolean
    close_async(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(res: Gio.AsyncResult): boolean
    command_abortable_finish(res: Gio.AsyncResult): Message
    command_full(message: Message, message_context: MessageContext, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    command_full_finish(res: Gio.AsyncResult): Message
    delete_all_links(base_ifname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_all_links_finish(res: Gio.AsyncResult): boolean
    delete_link(ifname: string, mux_id: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_link_finish(res: Gio.AsyncResult): boolean
    get_expected_data_format(): DeviceExpectedDataFormat
    get_file(): Gio.File
    get_path(): string
    get_path_display(): string
    get_service_version_info(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_service_version_info_finish(res: Gio.AsyncResult): DeviceServiceVersionInfo[]
    get_wwan_iface(): string
    is_open(): boolean
    list_links(base_ifname: string): [ /* returnType */ boolean, /* out_links */ string[] ]
    open(flags: DeviceOpenFlags, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_finish(res: Gio.AsyncResult): boolean
    peek_file(): Gio.File
    release_client(client: Client, flags: DeviceReleaseClientFlags, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    release_client_finish(res: Gio.AsyncResult): boolean
    set_expected_data_format(format: DeviceExpectedDataFormat): boolean
    set_instance_id(instance_id: number, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_instance_id_finish(res: Gio.AsyncResult, link_id: number): boolean
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Virtual methods of Qmi-1.0.Qmi.Device */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Qmi-1.0.Qmi.Device */
    connect(sigName: "device-removed", callback: (($obj: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Device) => void)): number
    emit(sigName: "device-removed"): void
    connect(sigName: "indication", callback: (($obj: Device, output: Uint8Array[]) => void)): number
    connect_after(sigName: "indication", callback: (($obj: Device, output: Uint8Array[]) => void)): number
    emit(sigName: "indication", output: Uint8Array[]): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device-wwan-iface", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-wwan-iface", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): Device
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface Proxy_ConstructProps extends GObject.Object_ConstructProps {
}
class Proxy {
    /* Properties of Qmi-1.0.Qmi.Proxy */
    readonly qmi_proxy_n_clients: number
    /* Fields of Qmi-1.0.Qmi.Proxy */
    parent: GObject.Object
    priv: ProxyPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Qmi-1.0.Qmi.Proxy */
    get_n_clients(): number
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
    connect(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qmi-proxy-n-clients", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qmi-proxy-n-clients", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Proxy_ConstructProps)
    _init (config?: Proxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Proxy
    static $gtype: GObject.Type
}
abstract class ClientClass {
    /* Fields of Qmi-1.0.Qmi.ClientClass */
    process_indication: (self: Client, message: Message) => void
    static name: string
}
abstract class ClientCtlClass {
    static name: string
}
abstract class ClientDmsClass {
    static name: string
}
abstract class ClientDpmClass {
    static name: string
}
abstract class ClientDsdClass {
    static name: string
}
abstract class ClientGasClass {
    static name: string
}
abstract class ClientGmsClass {
    static name: string
}
abstract class ClientLocClass {
    static name: string
}
abstract class ClientNasClass {
    static name: string
}
abstract class ClientOmaClass {
    static name: string
}
abstract class ClientPbmClass {
    static name: string
}
abstract class ClientPdcClass {
    static name: string
}
abstract class ClientPdsClass {
    static name: string
}
class ClientPrivate {
    static name: string
}
abstract class ClientQosClass {
    static name: string
}
abstract class ClientSarClass {
    static name: string
}
abstract class ClientUimClass {
    static name: string
}
abstract class ClientVoiceClass {
    static name: string
}
abstract class ClientWdaClass {
    static name: string
}
abstract class ClientWdsClass {
    static name: string
}
abstract class ClientWmsClass {
    static name: string
}
class ConfigTypeAndId {
    /* Fields of Qmi-1.0.Qmi.ConfigTypeAndId */
    config_type: PdcConfigurationType
    id: object[]
    static name: string
}
abstract class DeviceClass {
    static name: string
}
class DevicePrivate {
    static name: string
}
class DeviceServiceVersionInfo {
    /* Fields of Qmi-1.0.Qmi.DeviceServiceVersionInfo */
    service: Service
    major_version: number
    minor_version: number
    static name: string
}
class IndicationDmsEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationDmsEventReportOutput */
    get_activation_state(): [ /* returnType */ boolean, /* value_activation_state */ DmsActivationState | null ]
    get_operating_mode(): [ /* returnType */ boolean, /* value_operating_mode */ DmsOperatingMode | null ]
    get_pin1_status(): [ /* returnType */ boolean, /* value_pin1_status_current_status */ DmsUimPinStatus | null, /* value_pin1_status_verify_retries_left */ number | null, /* value_pin1_status_unblock_retries_left */ number | null ]
    get_pin2_status(): [ /* returnType */ boolean, /* value_pin2_status_current_status */ DmsUimPinStatus | null, /* value_pin2_status_verify_retries_left */ number | null, /* value_pin2_status_unblock_retries_left */ number | null ]
    get_power_state(): [ /* returnType */ boolean, /* value_power_state_power_state_flags */ number | null, /* value_power_state_battery_level */ number | null ]
    get_prl_init_notification(): [ /* returnType */ boolean, /* value_prl_init_notification */ boolean | null ]
    get_uim_state(): [ /* returnType */ boolean, /* value_uim_state */ DmsUimState | null ]
    get_wireless_disable_state(): [ /* returnType */ boolean, /* value_wireless_disable_state */ boolean | null ]
    ref(): IndicationDmsEventReportOutput
    unref(): void
    static name: string
}
class IndicationLocDeleteAssistanceDataOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocDeleteAssistanceDataOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus | null ]
    ref(): IndicationLocDeleteAssistanceDataOutput
    unref(): void
    static name: string
}
class IndicationLocEngineStateOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocEngineStateOutput */
    get_engine_state(): [ /* returnType */ boolean, /* value_engine_state */ LocEngineState | null ]
    ref(): IndicationLocEngineStateOutput
    unref(): void
    static name: string
}
class IndicationLocFixRecurrenceTypeOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocFixRecurrenceTypeOutput */
    get_fix_recurrence_type(): [ /* returnType */ boolean, /* value_fix_recurrence_type */ LocFixRecurrenceType | null ]
    ref(): IndicationLocFixRecurrenceTypeOutput
    unref(): void
    static name: string
}
class IndicationLocGetEngineLockOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGetEngineLockOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus | null ]
    get_lock_type(): [ /* returnType */ boolean, /* value_lock_type */ LocLockType | null ]
    ref(): IndicationLocGetEngineLockOutput
    unref(): void
    static name: string
}
class IndicationLocGetNmeaTypesOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGetNmeaTypesOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus | null ]
    get_nmea_types(): [ /* returnType */ boolean, /* value_nmea_types */ LocNmeaType | null ]
    ref(): IndicationLocGetNmeaTypesOutput
    unref(): void
    static name: string
}
class IndicationLocGetOperationModeOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGetOperationModeOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus | null ]
    get_operation_mode(): [ /* returnType */ boolean, /* value_operation_mode */ LocOperationMode | null ]
    ref(): IndicationLocGetOperationModeOutput
    unref(): void
    static name: string
}
class IndicationLocGetPredictedOrbitsDataSourceOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGetPredictedOrbitsDataSourceOutput */
    get_allowed_sizes(): [ /* returnType */ boolean, /* value_allowed_sizes_max_file_size */ number | null, /* value_allowed_sizes_max_part_size */ number | null ]
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus | null ]
    get_server_list(): [ /* returnType */ boolean, /* value_server_list */ string[] | null ]
    ref(): IndicationLocGetPredictedOrbitsDataSourceOutput
    unref(): void
    static name: string
}
class IndicationLocGetServerOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGetServerOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus | null ]
    get_ipv4(): [ /* returnType */ boolean, /* value_ipv4_ipv4_address */ number | null, /* value_ipv4_ipv4_port */ number | null ]
    get_ipv6(): [ /* returnType */ boolean, /* value_ipv6_ipv6_address */ number[] | null, /* value_ipv6_ipv6_port */ number | null ]
    get_server_type(): [ /* returnType */ boolean, /* value_server_type */ LocServerType | null ]
    get_url(): [ /* returnType */ boolean, /* value_url */ string | null ]
    ref(): IndicationLocGetServerOutput
    unref(): void
    static name: string
}
class IndicationLocGnssSvInfoOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocGnssSvInfoOutput */
    get_altitude_assumed(): [ /* returnType */ boolean, /* value_altitude_assumed */ boolean | null ]
    get_list(): [ /* returnType */ boolean, /* value_list */ IndicationLocGnssSvInfoOutputListElement[] | null ]
    ref(): IndicationLocGnssSvInfoOutput
    unref(): void
    static name: string
}
class IndicationLocGnssSvInfoOutputListElement {
    /* Fields of Qmi-1.0.Qmi.IndicationLocGnssSvInfoOutputListElement */
    valid_information: LocSatelliteValidInformation
    system: LocSystem
    gnss_satellite_id: number
    health_status: LocHealthStatus
    satellite_status: LocSatelliteStatus
    navigation_data: LocNavigationData
    elevation_degrees: number
    azimuth_degrees: number
    signal_to_noise_ratio_bhz: number
    static name: string
}
class IndicationLocInjectPredictedOrbitsDataOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocInjectPredictedOrbitsDataOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus | null ]
    get_part_number(): [ /* returnType */ boolean, /* value_part_number */ number | null ]
    ref(): IndicationLocInjectPredictedOrbitsDataOutput
    unref(): void
    static name: string
}
class IndicationLocInjectXtraDataOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocInjectXtraDataOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus | null ]
    get_part_number(): [ /* returnType */ boolean, /* value_part_number */ number | null ]
    ref(): IndicationLocInjectXtraDataOutput
    unref(): void
    static name: string
}
class IndicationLocNmeaOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocNmeaOutput */
    get_nmea_string(): [ /* returnType */ boolean, /* value_nmea_string */ string | null ]
    ref(): IndicationLocNmeaOutput
    unref(): void
    static name: string
}
class IndicationLocPositionReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocPositionReportOutput */
    get_altitude_assumed(): [ /* returnType */ boolean, /* value_altitude_assumed */ boolean | null ]
    get_altitude_from_ellipsoid(): [ /* returnType */ boolean, /* value_altitude_from_ellipsoid */ number | null ]
    get_altitude_from_sealevel(): [ /* returnType */ boolean, /* value_altitude_from_sealevel */ number | null ]
    get_dilution_of_precision(): [ /* returnType */ boolean, /* value_dilution_of_precision */ IndicationLocPositionReportOutputDilutionOfPrecision | null ]
    get_gps_time(): [ /* returnType */ boolean, /* value_gps_time */ IndicationLocPositionReportOutputGpsTime | null ]
    get_heading(): [ /* returnType */ boolean, /* value_heading */ number | null ]
    get_heading_uncertainty(): [ /* returnType */ boolean, /* value_heading_uncertainty */ number | null ]
    get_horizontal_confidence(): [ /* returnType */ boolean, /* value_horizontal_confidence */ number | null ]
    get_horizontal_reliability(): [ /* returnType */ boolean, /* value_horizontal_reliability */ LocReliability | null ]
    get_horizontal_speed(): [ /* returnType */ boolean, /* value_horizontal_speed */ number | null ]
    get_horizontal_uncertainty_circular(): [ /* returnType */ boolean, /* value_horizontal_uncertainty_circular */ number | null ]
    get_horizontal_uncertainty_elliptical_azimuth(): [ /* returnType */ boolean, /* value_horizontal_uncertainty_elliptical_azimuth */ number | null ]
    get_horizontal_uncertainty_elliptical_major(): [ /* returnType */ boolean, /* value_horizontal_uncertainty_elliptical_major */ number | null ]
    get_horizontal_uncertainty_elliptical_minor(): [ /* returnType */ boolean, /* value_horizontal_uncertainty_elliptical_minor */ number | null ]
    get_latitude(): [ /* returnType */ boolean, /* value_latitude */ number | null ]
    get_leap_seconds(): [ /* returnType */ boolean, /* value_leap_seconds */ number | null ]
    get_longitude(): [ /* returnType */ boolean, /* value_longitude */ number | null ]
    get_magnetic_deviation(): [ /* returnType */ boolean, /* value_magnetic_deviation */ number | null ]
    get_satellites_used(): [ /* returnType */ boolean, /* value_satellites_used */ number[] | null ]
    get_sensor_data_usage(): [ /* returnType */ boolean, /* value_sensor_data_usage */ LocSensorDataUsage | null ]
    get_session_fix_count(): [ /* returnType */ boolean, /* value_session_fix_count */ number | null ]
    get_session_id(): [ /* returnType */ boolean, /* value_session_id */ number | null ]
    get_session_status(): [ /* returnType */ boolean, /* value_session_status */ LocSessionStatus | null ]
    get_speed_uncertainty(): [ /* returnType */ boolean, /* value_speed_uncertainty */ number | null ]
    get_technology_used(): [ /* returnType */ boolean, /* value_technology_used */ LocTechnologyUsed | null ]
    get_time_source(): [ /* returnType */ boolean, /* value_time_source */ LocTimeSource | null ]
    get_time_uncertainty(): [ /* returnType */ boolean, /* value_time_uncertainty */ number | null ]
    get_utc_timestamp(): [ /* returnType */ boolean, /* value_utc_timestamp */ number | null ]
    get_vertical_confidence(): [ /* returnType */ boolean, /* value_vertical_confidence */ number | null ]
    get_vertical_reliability(): [ /* returnType */ boolean, /* value_vertical_reliability */ number | null ]
    get_vertical_speed(): [ /* returnType */ boolean, /* value_vertical_speed */ number | null ]
    get_vertical_uncertainty(): [ /* returnType */ boolean, /* value_vertical_uncertainty */ number | null ]
    ref(): IndicationLocPositionReportOutput
    unref(): void
    static name: string
}
class IndicationLocPositionReportOutputDilutionOfPrecision {
    /* Fields of Qmi-1.0.Qmi.IndicationLocPositionReportOutputDilutionOfPrecision */
    position_dilution_of_precision: number
    horizontal_dilution_of_precision: number
    vertical_dilution_of_precision: number
    static name: string
}
class IndicationLocPositionReportOutputGpsTime {
    /* Fields of Qmi-1.0.Qmi.IndicationLocPositionReportOutputGpsTime */
    gps_weeks: number
    gps_time_of_week_milliseconds: number
    static name: string
}
class IndicationLocSetEngineLockOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocSetEngineLockOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus | null ]
    ref(): IndicationLocSetEngineLockOutput
    unref(): void
    static name: string
}
class IndicationLocSetNmeaTypesOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocSetNmeaTypesOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus | null ]
    ref(): IndicationLocSetNmeaTypesOutput
    unref(): void
    static name: string
}
class IndicationLocSetOperationModeOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocSetOperationModeOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus | null ]
    ref(): IndicationLocSetOperationModeOutput
    unref(): void
    static name: string
}
class IndicationLocSetServerOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationLocSetServerOutput */
    get_indication_status(): [ /* returnType */ boolean, /* value_indication_status */ LocIndicationStatus | null ]
    ref(): IndicationLocSetServerOutput
    unref(): void
    static name: string
}
class IndicationNasEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasEventReportOutput */
    get_ecio(): [ /* returnType */ boolean, /* value_ecio_ecio */ number | null, /* value_ecio_radio_interface */ NasRadioInterface | null ]
    get_error_rate(): [ /* returnType */ boolean, /* value_error_rate_rate */ number | null, /* value_error_rate_radio_interface */ NasRadioInterface | null ]
    get_io(): [ /* returnType */ boolean, /* value_io */ number | null ]
    get_lte_rsrp(): [ /* returnType */ boolean, /* value_lte_rsrp */ number | null ]
    get_lte_snr(): [ /* returnType */ boolean, /* value_lte_snr */ number | null ]
    get_registration_reject_reason(): [ /* returnType */ boolean, /* value_registration_reject_reason_service_domain */ NasNetworkServiceDomain | null, /* value_registration_reject_reason_reject_cause */ number | null ]
    get_rf_band_information(): [ /* returnType */ boolean, /* value_rf_band_information */ IndicationNasEventReportOutputRfBandInformationElement[] | null ]
    get_rsrq(): [ /* returnType */ boolean, /* value_rsrq_rsrq */ number | null, /* value_rsrq_radio_interface */ NasRadioInterface | null ]
    get_rssi(): [ /* returnType */ boolean, /* value_rssi_rssi */ number | null, /* value_rssi_radio_interface */ NasRadioInterface | null ]
    get_signal_strength(): [ /* returnType */ boolean, /* value_signal_strength_strength */ number | null, /* value_signal_strength_radio_interface */ NasRadioInterface | null ]
    get_sinr(): [ /* returnType */ boolean, /* value_sinr */ NasEvdoSinrLevel | null ]
    ref(): IndicationNasEventReportOutput
    unref(): void
    static name: string
}
class IndicationNasEventReportOutputRfBandInformationElement {
    /* Fields of Qmi-1.0.Qmi.IndicationNasEventReportOutputRfBandInformationElement */
    radio_interface: NasRadioInterface
    active_band_class: NasActiveBand
    active_channel: number
    static name: string
}
class IndicationNasNetworkRejectOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasNetworkRejectOutput */
    get_closed_subscriber_group(): [ /* returnType */ boolean, /* value_closed_subscriber_group */ number | null ]
    get_plmn(): [ /* returnType */ boolean, /* value_plmn_mcc */ number | null, /* value_plmn_mnc */ number | null, /* value_plmn_includes_pcs_digit */ boolean | null ]
    get_radio_interface(): [ /* returnType */ boolean, /* value_radio_interface */ NasRadioInterface | null ]
    get_reject_cause(): [ /* returnType */ boolean, /* value_reject_cause */ NasRejectCause | null ]
    get_service_domain(): [ /* returnType */ boolean, /* value_service_domain */ NasNetworkServiceDomain | null ]
    ref(): IndicationNasNetworkRejectOutput
    unref(): void
    static name: string
}
class IndicationNasNetworkTimeOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasNetworkTimeOutput */
    get_daylight_savings_adjustment(): [ /* returnType */ boolean, /* value_daylight_savings_adjustment */ NasDaylightSavingsAdjustment | null ]
    get_radio_interface(): [ /* returnType */ boolean, /* value_radio_interface */ NasRadioInterface | null ]
    get_timezone_offset(): [ /* returnType */ boolean, /* value_timezone_offset */ number | null ]
    get_universal_time(): [ /* returnType */ boolean, /* value_universal_time_year */ number | null, /* value_universal_time_month */ number | null, /* value_universal_time_day */ number | null, /* value_universal_time_hour */ number | null, /* value_universal_time_minute */ number | null, /* value_universal_time_second */ number | null, /* value_universal_time_day_of_week */ NasDayOfWeek | null ]
    ref(): IndicationNasNetworkTimeOutput
    unref(): void
    static name: string
}
class IndicationNasOperatorNameOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasOperatorNameOutput */
    get_nitz_information(): [ /* returnType */ boolean, /* value_nitz_information_name_encoding */ NasPlmnEncodingScheme | null, /* value_nitz_information_short_country_initials */ NasPlmnNameCountryInitials | null, /* value_nitz_information_long_name_spare_bits */ NasPlmnNameSpareBits | null, /* value_nitz_information_short_name_spare_bits */ NasPlmnNameSpareBits | null, /* value_nitz_information_long_name */ Uint8Array[] | null, /* value_nitz_information_short_name */ Uint8Array[] | null ]
    get_operator_plmn_list(): [ /* returnType */ boolean, /* value_operator_plmn_list */ IndicationNasOperatorNameOutputOperatorPlmnListElement[] | null ]
    get_operator_plmn_name(): [ /* returnType */ boolean, /* value_operator_plmn_name */ IndicationNasOperatorNameOutputOperatorPlmnNameElement[] | null ]
    get_operator_string_name(): [ /* returnType */ boolean, /* value_operator_string_name */ string | null ]
    get_service_provider_name(): [ /* returnType */ boolean, /* value_service_provider_name_name_display_condition */ NasNetworkNameDisplayCondition | null, /* value_service_provider_name_name */ string | null ]
    ref(): IndicationNasOperatorNameOutput
    unref(): void
    static name: string
}
class IndicationNasOperatorNameOutputOperatorPlmnListElement {
    /* Fields of Qmi-1.0.Qmi.IndicationNasOperatorNameOutputOperatorPlmnListElement */
    mcc: string
    mnc: string
    lac1: number
    lac2: number
    plmn_name_record_identifier: number
    static name: string
}
class IndicationNasOperatorNameOutputOperatorPlmnNameElement {
    /* Fields of Qmi-1.0.Qmi.IndicationNasOperatorNameOutputOperatorPlmnNameElement */
    name_encoding: NasPlmnEncodingScheme
    short_country_initials: NasPlmnNameCountryInitials
    long_name_spare_bits: NasPlmnNameSpareBits
    short_name_spare_bits: NasPlmnNameSpareBits
    long_name: object[]
    short_name: object[]
    static name: string
}
class IndicationNasServingSystemOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasServingSystemOutput */
    get_call_barring_status(): [ /* returnType */ boolean, /* value_call_barring_status_cs_status */ NasCallBarringStatus | null, /* value_call_barring_status_ps_status */ NasCallBarringStatus | null ]
    get_cdma_base_station_info(): [ /* returnType */ boolean, /* value_cdma_base_station_info_base_station_id */ number | null, /* value_cdma_base_station_info_base_station_latitude */ number | null, /* value_cdma_base_station_info_base_station_longitude */ number | null ]
    get_cdma_p_rev(): [ /* returnType */ boolean, /* value_cdma_p_rev */ number | null ]
    get_cdma_system_id(): [ /* returnType */ boolean, /* value_cdma_system_id_sid */ number | null, /* value_cdma_system_id_nid */ number | null ]
    get_cdma_system_info(): [ /* returnType */ boolean, /* value_cdma_system_info_mcc */ number | null, /* value_cdma_system_info_imsi_11_12 */ number | null ]
    get_cid_3gpp(): [ /* returnType */ boolean, /* value_cid_3gpp */ number | null ]
    get_concurrent_service_info_3gpp2(): [ /* returnType */ boolean, /* value_concurrent_service_info_3gpp2 */ boolean | null ]
    get_current_plmn(): [ /* returnType */ boolean, /* value_current_plmn_mcc */ number | null, /* value_current_plmn_mnc */ number | null, /* value_current_plmn_description */ string | null ]
    get_data_service_capability(): [ /* returnType */ boolean, /* value_data_service_capability */ NasDataCapability[] | null ]
    get_daylight_saving_time_adjustment_3gpp(): [ /* returnType */ boolean, /* value_daylight_saving_time_adjustment_3gpp */ number | null ]
    get_default_roaming_indicator(): [ /* returnType */ boolean, /* value_default_roaming_indicator */ NasRoamingIndicatorStatus | null ]
    get_detailed_service_status(): [ /* returnType */ boolean, /* value_detailed_service_status_status */ NasServiceStatus | null, /* value_detailed_service_status_capability */ NasNetworkServiceDomain | null, /* value_detailed_service_status_hdr_status */ NasServiceStatus | null, /* value_detailed_service_status_hdr_hybrid */ boolean | null, /* value_detailed_service_status_forbidden */ boolean | null ]
    get_dtm_support(): [ /* returnType */ boolean, /* value_dtm_support */ boolean | null ]
    get_hdr_personality(): [ /* returnType */ boolean, /* value_hdr_personality */ NasHdrPersonality | null ]
    get_lac_3gpp(): [ /* returnType */ boolean, /* value_lac_3gpp */ number | null ]
    get_lte_tac(): [ /* returnType */ boolean, /* value_lte_tac */ number | null ]
    get_mnc_pcs_digit_include_status(): [ /* returnType */ boolean, /* value_mnc_pcs_digit_include_status_mcc */ number | null, /* value_mnc_pcs_digit_include_status_mnc */ number | null, /* value_mnc_pcs_digit_include_status_includes_pcs_digit */ boolean | null ]
    get_network_name_source(): [ /* returnType */ boolean, /* value_network_name_source */ NasNetworkNameSource | null ]
    get_plmn_name_flag_3gpp(): [ /* returnType */ boolean, /* value_plmn_name_flag_3gpp */ boolean | null ]
    get_plmn_not_changed_indication(): [ /* returnType */ boolean, /* value_plmn_not_changed_indication */ boolean | null ]
    get_prl_indicator_3gpp2(): [ /* returnType */ boolean, /* value_prl_indicator_3gpp2 */ boolean | null ]
    get_roaming_indicator(): [ /* returnType */ boolean, /* value_roaming_indicator */ NasRoamingIndicatorStatus | null ]
    get_roaming_indicator_list(): [ /* returnType */ boolean, /* value_roaming_indicator_list */ IndicationNasServingSystemOutputRoamingIndicatorListElement[] | null ]
    get_serving_system(): [ /* returnType */ boolean, /* value_serving_system_registration_state */ NasRegistrationState | null, /* value_serving_system_cs_attach_state */ NasAttachState | null, /* value_serving_system_ps_attach_state */ NasAttachState | null, /* value_serving_system_selected_network */ NasNetworkType | null, /* value_serving_system_radio_interfaces */ NasRadioInterface[] | null ]
    get_time_zone_3gpp(): [ /* returnType */ boolean, /* value_time_zone_3gpp */ number | null ]
    get_time_zone_3gpp2(): [ /* returnType */ boolean, /* value_time_zone_3gpp2_leap_seconds */ number | null, /* value_time_zone_3gpp2_local_time_offset */ number | null, /* value_time_zone_3gpp2_daylight_saving_time */ boolean | null ]
    get_umts_primary_scrambling_code(): [ /* returnType */ boolean, /* value_umts_primary_scrambling_code */ number | null ]
    get_universal_time_and_local_time_zone_3gpp(): [ /* returnType */ boolean, /* value_universal_time_and_local_time_zone_3gpp_year */ number | null, /* value_universal_time_and_local_time_zone_3gpp_month */ number | null, /* value_universal_time_and_local_time_zone_3gpp_day */ number | null, /* value_universal_time_and_local_time_zone_3gpp_hour */ number | null, /* value_universal_time_and_local_time_zone_3gpp_minute */ number | null, /* value_universal_time_and_local_time_zone_3gpp_second */ number | null, /* value_universal_time_and_local_time_zone_3gpp_time_zone */ number | null ]
    ref(): IndicationNasServingSystemOutput
    unref(): void
    static name: string
}
class IndicationNasServingSystemOutputRoamingIndicatorListElement {
    /* Fields of Qmi-1.0.Qmi.IndicationNasServingSystemOutputRoamingIndicatorListElement */
    radio_interface: NasRadioInterface
    roaming_indicator: NasRoamingIndicatorStatus
    static name: string
}
class IndicationNasSignalInfoOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasSignalInfoOutput */
    get_5g_signal_strength(): [ /* returnType */ boolean, /* value_5g_signal_strength_rsrp */ number | null, /* value_5g_signal_strength_snr */ number | null ]
    get_5g_signal_strength_extended(): [ /* returnType */ boolean, /* value_5g_signal_strength_extended */ number | null ]
    get_cdma_signal_strength(): [ /* returnType */ boolean, /* value_cdma_signal_strength_rssi */ number | null, /* value_cdma_signal_strength_ecio */ number | null ]
    get_gsm_signal_strength(): [ /* returnType */ boolean, /* value_gsm_signal_strength */ number | null ]
    get_hdr_signal_strength(): [ /* returnType */ boolean, /* value_hdr_signal_strength_rssi */ number | null, /* value_hdr_signal_strength_ecio */ number | null, /* value_hdr_signal_strength_sinr */ NasEvdoSinrLevel | null, /* value_hdr_signal_strength_io */ number | null ]
    get_lte_signal_strength(): [ /* returnType */ boolean, /* value_lte_signal_strength_rssi */ number | null, /* value_lte_signal_strength_rsrq */ number | null, /* value_lte_signal_strength_rsrp */ number | null, /* value_lte_signal_strength_snr */ number | null ]
    get_tdma_signal_strength(): [ /* returnType */ boolean, /* value_tdma_signal_strength */ number | null ]
    get_wcdma_signal_strength(): [ /* returnType */ boolean, /* value_wcdma_signal_strength_rssi */ number | null, /* value_wcdma_signal_strength_ecio */ number | null ]
    ref(): IndicationNasSignalInfoOutput
    unref(): void
    static name: string
}
class IndicationNasSystemInfoOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationNasSystemInfoOutput */
    get_additional_cdma_system_info(): [ /* returnType */ boolean, /* value_additional_cdma_system_info_geo_system_index */ number | null, /* value_additional_cdma_system_info_registration_period */ number | null ]
    get_additional_gsm_system_info(): [ /* returnType */ boolean, /* value_additional_gsm_system_info_geo_system_index */ number | null, /* value_additional_gsm_system_info_cell_broadcast_support */ NasCellBroadcastCapability | null ]
    get_additional_hdr_system_info(): [ /* returnType */ boolean, /* value_additional_hdr_system_info_geo_system_index */ number | null ]
    get_additional_lte_system_info(): [ /* returnType */ boolean, /* value_additional_lte_system_info_geo_system_index */ number | null ]
    get_additional_wcdma_system_info(): [ /* returnType */ boolean, /* value_additional_wcdma_system_info_geo_system_index */ number | null, /* value_additional_wcdma_system_info_cell_broadcast_support */ NasCellBroadcastCapability | null ]
    get_cdma_service_status(): [ /* returnType */ boolean, /* value_cdma_service_status_service_status */ NasServiceStatus | null, /* value_cdma_service_status_preferred_data_path */ boolean | null ]
    get_cdma_system_info(): [ /* returnType */ boolean, /* value_cdma_system_info_domain_valid */ boolean | null, /* value_cdma_system_info_domain */ NasNetworkServiceDomain | null, /* value_cdma_system_info_service_capability_valid */ boolean | null, /* value_cdma_system_info_service_capability */ NasNetworkServiceDomain | null, /* value_cdma_system_info_roaming_status_valid */ boolean | null, /* value_cdma_system_info_roaming_status */ NasRoamingStatus | null, /* value_cdma_system_info_forbidden_valid */ boolean | null, /* value_cdma_system_info_forbidden */ boolean | null, /* value_cdma_system_info_prl_match_valid */ boolean | null, /* value_cdma_system_info_prl_match */ boolean | null, /* value_cdma_system_info_p_rev_valid */ boolean | null, /* value_cdma_system_info_p_rev */ number | null, /* value_cdma_system_info_base_station_p_rev_valid */ boolean | null, /* value_cdma_system_info_base_station_p_rev */ number | null, /* value_cdma_system_info_concurrent_service_support_valid */ boolean | null, /* value_cdma_system_info_concurrent_service_support */ boolean | null, /* value_cdma_system_info_cdma_system_id_valid */ boolean | null, /* value_cdma_system_info_sid */ number | null, /* value_cdma_system_info_nid */ number | null, /* value_cdma_system_info_base_station_info_valid */ boolean | null, /* value_cdma_system_info_base_station_id */ number | null, /* value_cdma_system_info_base_station_latitude */ number | null, /* value_cdma_system_info_base_station_longitude */ number | null, /* value_cdma_system_info_packet_zone_valid */ boolean | null, /* value_cdma_system_info_packet_zone */ number | null, /* value_cdma_system_info_network_id_valid */ boolean | null, /* value_cdma_system_info_mcc */ string | null, /* value_cdma_system_info_mnc */ string | null ]
    get_dcnr_restriction_info(): [ /* returnType */ boolean, /* value_dcnr_restriction_info */ boolean | null ]
    get_eutra_with_nr5g_availability(): [ /* returnType */ boolean, /* value_eutra_with_nr5g_availability */ boolean | null ]
    get_gsm_call_barring_status(): [ /* returnType */ boolean, /* value_gsm_call_barring_status_cs_status */ NasCallBarringStatus | null, /* value_gsm_call_barring_status_ps_status */ NasCallBarringStatus | null ]
    get_gsm_cipher_domain(): [ /* returnType */ boolean, /* value_gsm_cipher_domain */ NasNetworkServiceDomain | null ]
    get_gsm_service_status(): [ /* returnType */ boolean, /* value_gsm_service_status_service_status */ NasServiceStatus | null, /* value_gsm_service_status_true_service_status */ NasServiceStatus | null, /* value_gsm_service_status_preferred_data_path */ boolean | null ]
    get_gsm_system_info_v2(): [ /* returnType */ boolean, /* value_gsm_system_info_v2_domain_valid */ boolean | null, /* value_gsm_system_info_v2_domain */ NasNetworkServiceDomain | null, /* value_gsm_system_info_v2_service_capability_valid */ boolean | null, /* value_gsm_system_info_v2_service_capability */ NasNetworkServiceDomain | null, /* value_gsm_system_info_v2_roaming_status_valid */ boolean | null, /* value_gsm_system_info_v2_roaming_status */ NasRoamingStatus | null, /* value_gsm_system_info_v2_forbidden_valid */ boolean | null, /* value_gsm_system_info_v2_forbidden */ boolean | null, /* value_gsm_system_info_v2_lac_valid */ boolean | null, /* value_gsm_system_info_v2_lac */ number | null, /* value_gsm_system_info_v2_cid_valid */ boolean | null, /* value_gsm_system_info_v2_cid */ number | null, /* value_gsm_system_info_v2_registration_reject_info_valid */ boolean | null, /* value_gsm_system_info_v2_registration_reject_domain */ NasNetworkServiceDomain | null, /* value_gsm_system_info_v2_registration_reject_cause */ NasRejectCause | null, /* value_gsm_system_info_v2_network_id_valid */ boolean | null, /* value_gsm_system_info_v2_mcc */ string | null, /* value_gsm_system_info_v2_mnc */ string | null, /* value_gsm_system_info_v2_egprs_support_valid */ boolean | null, /* value_gsm_system_info_v2_egprs_support */ boolean | null, /* value_gsm_system_info_v2_dtm_support_valid */ boolean | null, /* value_gsm_system_info_v2_dtm_support */ boolean | null ]
    get_hdr_service_status(): [ /* returnType */ boolean, /* value_hdr_service_status_service_status */ NasServiceStatus | null, /* value_hdr_service_status_preferred_data_path */ boolean | null ]
    get_hdr_system_info(): [ /* returnType */ boolean, /* value_hdr_system_info_domain_valid */ boolean | null, /* value_hdr_system_info_domain */ NasNetworkServiceDomain | null, /* value_hdr_system_info_service_capability_valid */ boolean | null, /* value_hdr_system_info_service_capability */ NasNetworkServiceDomain | null, /* value_hdr_system_info_roaming_status_valid */ boolean | null, /* value_hdr_system_info_roaming_status */ NasRoamingStatus | null, /* value_hdr_system_info_forbidden_valid */ boolean | null, /* value_hdr_system_info_forbidden */ boolean | null, /* value_hdr_system_info_prl_match_valid */ boolean | null, /* value_hdr_system_info_prl_match */ boolean | null, /* value_hdr_system_info_personality_valid */ boolean | null, /* value_hdr_system_info_personality */ NasHdrPersonality | null, /* value_hdr_system_info_protocol_revision_valid */ boolean | null, /* value_hdr_system_info_protocol_revision */ NasHdrProtocolRevision | null, /* value_hdr_system_info_is_856_system_id_valid */ boolean | null, /* value_hdr_system_info_is_856_system_id */ string | null ]
    get_lte_embms_coverage_info_support(): [ /* returnType */ boolean, /* value_lte_embms_coverage_info_support */ boolean | null ]
    get_lte_service_status(): [ /* returnType */ boolean, /* value_lte_service_status_service_status */ NasServiceStatus | null, /* value_lte_service_status_true_service_status */ NasServiceStatus | null, /* value_lte_service_status_preferred_data_path */ boolean | null ]
    get_lte_system_info_v2(): [ /* returnType */ boolean, /* value_lte_system_info_v2_domain_valid */ boolean | null, /* value_lte_system_info_v2_domain */ NasNetworkServiceDomain | null, /* value_lte_system_info_v2_service_capability_valid */ boolean | null, /* value_lte_system_info_v2_service_capability */ NasNetworkServiceDomain | null, /* value_lte_system_info_v2_roaming_status_valid */ boolean | null, /* value_lte_system_info_v2_roaming_status */ NasRoamingStatus | null, /* value_lte_system_info_v2_forbidden_valid */ boolean | null, /* value_lte_system_info_v2_forbidden */ boolean | null, /* value_lte_system_info_v2_lac_valid */ boolean | null, /* value_lte_system_info_v2_lac */ number | null, /* value_lte_system_info_v2_cid_valid */ boolean | null, /* value_lte_system_info_v2_cid */ number | null, /* value_lte_system_info_v2_registration_reject_info_valid */ boolean | null, /* value_lte_system_info_v2_registration_reject_domain */ NasNetworkServiceDomain | null, /* value_lte_system_info_v2_registration_reject_cause */ NasRejectCause | null, /* value_lte_system_info_v2_network_id_valid */ boolean | null, /* value_lte_system_info_v2_mcc */ string | null, /* value_lte_system_info_v2_mnc */ string | null, /* value_lte_system_info_v2_tac_valid */ boolean | null, /* value_lte_system_info_v2_tac */ number | null ]
    get_lte_voice_support(): [ /* returnType */ boolean, /* value_lte_voice_support */ boolean | null ]
    get_nr5g_service_status_info(): [ /* returnType */ boolean, /* value_nr5g_service_status_info_service_status */ NasServiceStatus | null, /* value_nr5g_service_status_info_true_service_status */ NasServiceStatus | null, /* value_nr5g_service_status_info_preferred_data_path */ boolean | null ]
    get_nr5g_system_info(): [ /* returnType */ boolean, /* value_nr5g_system_info_domain_valid */ boolean | null, /* value_nr5g_system_info_domain */ NasNetworkServiceDomain | null, /* value_nr5g_system_info_service_capability_valid */ boolean | null, /* value_nr5g_system_info_service_capability */ NasNetworkServiceDomain | null, /* value_nr5g_system_info_roaming_status_valid */ boolean | null, /* value_nr5g_system_info_roaming_status */ NasRoamingStatus | null, /* value_nr5g_system_info_forbidden_valid */ boolean | null, /* value_nr5g_system_info_forbidden */ boolean | null, /* value_nr5g_system_info_lac_valid */ boolean | null, /* value_nr5g_system_info_lac */ number | null, /* value_nr5g_system_info_cid_valid */ boolean | null, /* value_nr5g_system_info_cid */ number | null, /* value_nr5g_system_info_registration_reject_info_valid */ boolean | null, /* value_nr5g_system_info_registration_reject_domain */ NasNetworkServiceDomain | null, /* value_nr5g_system_info_registration_reject_cause */ number | null, /* value_nr5g_system_info_network_id_valid */ boolean | null, /* value_nr5g_system_info_mcc */ string | null, /* value_nr5g_system_info_mnc */ string | null, /* value_nr5g_system_info_tac_valid */ boolean | null, /* value_nr5g_system_info_tac */ number | null ]
    get_nr5g_tracking_area_code(): [ /* returnType */ boolean, /* value_nr5g_tracking_area_code */ Uint8Array[] | null ]
    get_plmn_not_changed_indication(): [ /* returnType */ boolean, /* value_plmn_not_changed_indication */ boolean | null ]
    get_sim_reject_info(): [ /* returnType */ boolean, /* value_sim_reject_info */ NasSimRejectState | null ]
    get_td_scdma_service_status(): [ /* returnType */ boolean, /* value_td_scdma_service_status_service_status */ NasServiceStatus | null, /* value_td_scdma_service_status_true_service_status */ NasServiceStatus | null, /* value_td_scdma_service_status_preferred_data_path */ boolean | null ]
    get_td_scma_system_info_v2(): [ /* returnType */ boolean, /* value_td_scma_system_info_v2_domain_valid */ boolean | null, /* value_td_scma_system_info_v2_domain */ NasNetworkServiceDomain | null, /* value_td_scma_system_info_v2_service_capability_valid */ boolean | null, /* value_td_scma_system_info_v2_service_capability */ NasNetworkServiceDomain | null, /* value_td_scma_system_info_v2_roaming_status_valid */ boolean | null, /* value_td_scma_system_info_v2_roaming_status */ NasRoamingStatus | null, /* value_td_scma_system_info_v2_forbidden_valid */ boolean | null, /* value_td_scma_system_info_v2_forbidden */ boolean | null, /* value_td_scma_system_info_v2_lac_valid */ boolean | null, /* value_td_scma_system_info_v2_lac */ number | null, /* value_td_scma_system_info_v2_cid_valid */ boolean | null, /* value_td_scma_system_info_v2_cid */ number | null, /* value_td_scma_system_info_v2_registration_reject_info_valid */ boolean | null, /* value_td_scma_system_info_v2_registration_reject_domain */ NasNetworkServiceDomain | null, /* value_td_scma_system_info_v2_registration_reject_cause */ NasRejectCause | null, /* value_td_scma_system_info_v2_network_id_valid */ boolean | null, /* value_td_scma_system_info_v2_mcc */ string | null, /* value_td_scma_system_info_v2_mnc */ string | null, /* value_td_scma_system_info_v2_hs_call_status_valid */ boolean | null, /* value_td_scma_system_info_v2_hs_call_status */ NasWcdmaHsService | null, /* value_td_scma_system_info_v2_hs_service_valid */ boolean | null, /* value_td_scma_system_info_v2_hs_service */ NasWcdmaHsService | null, /* value_td_scma_system_info_v2_cell_parameter_id_valid */ boolean | null, /* value_td_scma_system_info_v2_cell_parameter_id */ number | null, /* value_td_scma_system_info_v2_cell_broadcast_support_valid */ boolean | null, /* value_td_scma_system_info_v2_cell_broadcast_support */ NasCellBroadcastCapability | null, /* value_td_scma_system_info_v2_cs_call_barring_status_valid */ boolean | null, /* value_td_scma_system_info_v2_cs_call_barring_status */ NasCallBarringStatus | null, /* value_td_scma_system_info_v2_ps_call_barring_status_valid */ boolean | null, /* value_td_scma_system_info_v2_ps_call_barring_status */ NasCallBarringStatus | null, /* value_td_scma_system_info_v2_cipher_domain_valid */ boolean | null, /* value_td_scma_system_info_v2_cipher_domain */ NasNetworkServiceDomain | null ]
    get_wcdma_call_barring_status(): [ /* returnType */ boolean, /* value_wcdma_call_barring_status_cs_status */ NasCallBarringStatus | null, /* value_wcdma_call_barring_status_ps_status */ NasCallBarringStatus | null ]
    get_wcdma_cipher_domain(): [ /* returnType */ boolean, /* value_wcdma_cipher_domain */ NasNetworkServiceDomain | null ]
    get_wcdma_service_status(): [ /* returnType */ boolean, /* value_wcdma_service_status_service_status */ NasServiceStatus | null, /* value_wcdma_service_status_true_service_status */ NasServiceStatus | null, /* value_wcdma_service_status_preferred_data_path */ boolean | null ]
    get_wcdma_system_info_v2(): [ /* returnType */ boolean, /* value_wcdma_system_info_v2_domain_valid */ boolean | null, /* value_wcdma_system_info_v2_domain */ NasNetworkServiceDomain | null, /* value_wcdma_system_info_v2_service_capability_valid */ boolean | null, /* value_wcdma_system_info_v2_service_capability */ NasNetworkServiceDomain | null, /* value_wcdma_system_info_v2_roaming_status_valid */ boolean | null, /* value_wcdma_system_info_v2_roaming_status */ NasRoamingStatus | null, /* value_wcdma_system_info_v2_forbidden_valid */ boolean | null, /* value_wcdma_system_info_v2_forbidden */ boolean | null, /* value_wcdma_system_info_v2_lac_valid */ boolean | null, /* value_wcdma_system_info_v2_lac */ number | null, /* value_wcdma_system_info_v2_cid_valid */ boolean | null, /* value_wcdma_system_info_v2_cid */ number | null, /* value_wcdma_system_info_v2_registration_reject_info_valid */ boolean | null, /* value_wcdma_system_info_v2_registration_reject_domain */ NasNetworkServiceDomain | null, /* value_wcdma_system_info_v2_registration_reject_cause */ NasRejectCause | null, /* value_wcdma_system_info_v2_network_id_valid */ boolean | null, /* value_wcdma_system_info_v2_mcc */ string | null, /* value_wcdma_system_info_v2_mnc */ string | null, /* value_wcdma_system_info_v2_hs_call_status_valid */ boolean | null, /* value_wcdma_system_info_v2_hs_call_status */ NasWcdmaHsService | null, /* value_wcdma_system_info_v2_hs_service_valid */ boolean | null, /* value_wcdma_system_info_v2_hs_service */ NasWcdmaHsService | null, /* value_wcdma_system_info_v2_primary_scrambling_code_valid */ boolean | null, /* value_wcdma_system_info_v2_primary_scrambling_code */ number | null ]
    ref(): IndicationNasSystemInfoOutput
    unref(): void
    static name: string
}
class IndicationOmaEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationOmaEventReportOutput */
    get_network_initiated_alert(): [ /* returnType */ boolean, /* value_network_initiated_alert_session_type */ OmaSessionType | null, /* value_network_initiated_alert_session_id */ number | null ]
    get_session_fail_reason(): [ /* returnType */ boolean, /* value_session_fail_reason */ OmaSessionFailedReason | null ]
    get_session_state(): [ /* returnType */ boolean, /* value_session_state */ OmaSessionState | null ]
    ref(): IndicationOmaEventReportOutput
    unref(): void
    static name: string
}
class IndicationPdcActivateConfigOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcActivateConfigOutput */
    get_indication_result(): [ /* returnType */ boolean, /* value_indication_result */ number | null ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): IndicationPdcActivateConfigOutput
    unref(): void
    static name: string
}
class IndicationPdcDeactivateConfigOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcDeactivateConfigOutput */
    get_indication_result(): [ /* returnType */ boolean, /* value_indication_result */ number | null ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): IndicationPdcDeactivateConfigOutput
    unref(): void
    static name: string
}
class IndicationPdcGetConfigInfoOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcGetConfigInfoOutput */
    get_description(): [ /* returnType */ boolean, /* value_description */ string | null ]
    get_indication_result(): [ /* returnType */ boolean, /* value_indication_result */ number | null ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    get_total_size(): [ /* returnType */ boolean, /* value_total_size */ number | null ]
    get_version(): [ /* returnType */ boolean, /* value_version */ number | null ]
    ref(): IndicationPdcGetConfigInfoOutput
    unref(): void
    static name: string
}
class IndicationPdcGetSelectedConfigOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcGetSelectedConfigOutput */
    get_active_id(): [ /* returnType */ boolean, /* value_active_id */ Uint8Array[] | null ]
    get_indication_result(): [ /* returnType */ boolean, /* value_indication_result */ number | null ]
    get_pending_id(): [ /* returnType */ boolean, /* value_pending_id */ Uint8Array[] | null ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): IndicationPdcGetSelectedConfigOutput
    unref(): void
    static name: string
}
class IndicationPdcListConfigsOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcListConfigsOutput */
    get_configs(): [ /* returnType */ boolean, /* value_configs */ IndicationPdcListConfigsOutputConfigsElement[] | null ]
    get_indication_result(): [ /* returnType */ boolean, /* value_indication_result */ number | null ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): IndicationPdcListConfigsOutput
    unref(): void
    static name: string
}
class IndicationPdcListConfigsOutputConfigsElement {
    /* Fields of Qmi-1.0.Qmi.IndicationPdcListConfigsOutputConfigsElement */
    config_type: PdcConfigurationType
    id: object[]
    static name: string
}
class IndicationPdcLoadConfigOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcLoadConfigOutput */
    get_frame_reset(): [ /* returnType */ boolean, /* value_frame_reset */ boolean | null ]
    get_indication_result(): [ /* returnType */ boolean, /* value_indication_result */ number | null ]
    get_received(): [ /* returnType */ boolean, /* value_received */ number | null ]
    get_remaining_size(): [ /* returnType */ boolean, /* value_remaining_size */ number | null ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): IndicationPdcLoadConfigOutput
    unref(): void
    static name: string
}
class IndicationPdcRefreshOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcRefreshOutput */
    get_refresh_event(): [ /* returnType */ boolean, /* value_refresh_event */ PdcRefreshEventType | null ]
    get_slot_id(): [ /* returnType */ boolean, /* value_slot_id */ number | null ]
    get_subscription_id(): [ /* returnType */ boolean, /* value_subscription_id */ number | null ]
    ref(): IndicationPdcRefreshOutput
    unref(): void
    static name: string
}
class IndicationPdcSetSelectedConfigOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdcSetSelectedConfigOutput */
    get_indication_result(): [ /* returnType */ boolean, /* value_indication_result */ number | null ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): IndicationPdcSetSelectedConfigOutput
    unref(): void
    static name: string
}
class IndicationPdsEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationPdsEventReportOutput */
    get_extended_nmea_position(): [ /* returnType */ boolean, /* value_extended_nmea_position_operation_mode */ PdsOperationMode | null, /* value_extended_nmea_position_nmea */ string | null ]
    get_nmea_position(): [ /* returnType */ boolean, /* value_nmea_position */ string | null ]
    get_position_session_status(): [ /* returnType */ boolean, /* value_position_session_status */ PdsPositionSessionStatus | null ]
    ref(): IndicationPdsEventReportOutput
    unref(): void
    static name: string
}
class IndicationQosFlowStatusOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationQosFlowStatusOutput */
    get_value(): [ /* returnType */ boolean, /* value_value_qos_id */ number | null, /* value_value_status */ QosStatus | null, /* value_value_event */ QosEvent | null ]
    ref(): IndicationQosFlowStatusOutput
    unref(): void
    static name: string
}
class IndicationQosNetworkStatusOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationQosNetworkStatusOutput */
    get_qos_supported(): [ /* returnType */ boolean, /* value_qos_supported */ boolean | null ]
    ref(): IndicationQosNetworkStatusOutput
    unref(): void
    static name: string
}
class IndicationUimCardStatusOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationUimCardStatusOutput */
    get_card_status(): [ /* returnType */ boolean, /* value_card_status_index_gw_primary */ number | null, /* value_card_status_index_1x_primary */ number | null, /* value_card_status_index_gw_secondary */ number | null, /* value_card_status_index_1x_secondary */ number | null, /* value_card_status_cards */ IndicationUimCardStatusOutputCardStatusCardsElement[] | null ]
    ref(): IndicationUimCardStatusOutput
    unref(): void
    static name: string
}
class IndicationUimCardStatusOutputCardStatusCardsElement {
    /* Fields of Qmi-1.0.Qmi.IndicationUimCardStatusOutputCardStatusCardsElement */
    card_state: UimCardState
    upin_state: UimPinState
    upin_retries: number
    upuk_retries: number
    error_code: UimCardError
    applications: object[]
    static name: string
}
class IndicationUimCardStatusOutputCardStatusCardsElementApplicationsElement {
    /* Fields of Qmi-1.0.Qmi.IndicationUimCardStatusOutputCardStatusCardsElementApplicationsElement */
    type: UimCardApplicationType
    state: UimCardApplicationState
    personalization_state: UimCardApplicationPersonalizationState
    personalization_feature: UimCardApplicationPersonalizationFeature
    personalization_retries: number
    personalization_unblock_retries: number
    application_identifier_value: object[]
    upin_replaces_pin1: boolean
    pin1_state: UimPinState
    pin1_retries: number
    puk1_retries: number
    pin2_state: UimPinState
    pin2_retries: number
    puk2_retries: number
    static name: string
}
class IndicationUimRefreshOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationUimRefreshOutput */
    get_event(): [ /* returnType */ boolean, /* value_event_stage */ UimRefreshStage | null, /* value_event_mode */ UimRefreshMode | null, /* value_event_session_type */ UimSessionType | null, /* value_event_application_identifier */ Uint8Array[] | null, /* value_event_files */ IndicationUimRefreshOutputEventFilesElement[] | null ]
    ref(): IndicationUimRefreshOutput
    unref(): void
    static name: string
}
class IndicationUimRefreshOutputEventFilesElement {
    /* Fields of Qmi-1.0.Qmi.IndicationUimRefreshOutputEventFilesElement */
    file_id: number
    path: object[]
    static name: string
}
class IndicationUimSlotStatusOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationUimSlotStatusOutput */
    get_physical_slot_information(): [ /* returnType */ boolean, /* value_physical_slot_information */ PhysicalSlotInformationSlot[] | null ]
    get_physical_slot_status(): [ /* returnType */ boolean, /* value_physical_slot_status */ PhysicalSlotStatusSlot[] | null ]
    get_slot_eid_information(): [ /* returnType */ boolean, /* value_slot_eid_information */ any[] | null ]
    ref(): IndicationUimSlotStatusOutput
    unref(): void
    static name: string
}
class IndicationVoiceAllCallStatusOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationVoiceAllCallStatusOutput */
    get_call_information(): [ /* returnType */ boolean, /* value_call_information */ IndicationVoiceAllCallStatusOutputCallInformationCall[] | null ]
    get_remote_party_number(): [ /* returnType */ boolean, /* value_remote_party_number */ IndicationVoiceAllCallStatusOutputRemotePartyNumberCall[] | null ]
    ref(): IndicationVoiceAllCallStatusOutput
    unref(): void
    static name: string
}
class IndicationVoiceAllCallStatusOutputCallInformationCall {
    /* Fields of Qmi-1.0.Qmi.IndicationVoiceAllCallStatusOutputCallInformationCall */
    id: number
    state: VoiceCallState
    type: VoiceCallType
    direction: VoiceCallDirection
    mode: VoiceCallMode
    multipart_indicator: boolean
    als: VoiceAls
    static name: string
}
class IndicationVoiceAllCallStatusOutputRemotePartyNumberCall {
    /* Fields of Qmi-1.0.Qmi.IndicationVoiceAllCallStatusOutputRemotePartyNumberCall */
    id: number
    presentation_indicator: VoicePresentation
    type: string
    static name: string
}
class IndicationVoiceOriginateUssdNoWaitOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationVoiceOriginateUssdNoWaitOutput */
    get_alpha_identifier(): [ /* returnType */ boolean, /* value_alpha_identifier_data_coding_scheme */ VoiceAlphaDataCodingScheme | null, /* value_alpha_identifier_alpha */ Uint8Array[] | null ]
    get_error_code(): [ /* returnType */ boolean, /* value_error_code */ number | null ]
    get_failure_cause(): [ /* returnType */ boolean, /* value_failure_cause */ VoiceCallEndReason | null ]
    get_uss_data(): [ /* returnType */ boolean, /* value_uss_data_data_coding_scheme */ VoiceUssDataCodingScheme | null, /* value_uss_data_data */ Uint8Array[] | null ]
    get_uss_data_utf16(): [ /* returnType */ boolean, /* value_uss_data_utf16 */ number[] | null ]
    ref(): IndicationVoiceOriginateUssdNoWaitOutput
    unref(): void
    static name: string
}
class IndicationVoiceSupplementaryServiceOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationVoiceSupplementaryServiceOutput */
    get_info(): [ /* returnType */ boolean, /* value_info_call_id */ number | null, /* value_info_notification_type */ VoiceSupplementaryServiceNotificationType | null ]
    ref(): IndicationVoiceSupplementaryServiceOutput
    unref(): void
    static name: string
}
class IndicationVoiceUssdOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationVoiceUssdOutput */
    get_user_action(): [ /* returnType */ boolean, /* value_user_action */ VoiceUserAction | null ]
    get_uss_data(): [ /* returnType */ boolean, /* value_uss_data_data_coding_scheme */ VoiceUssDataCodingScheme | null, /* value_uss_data_data */ Uint8Array[] | null ]
    get_uss_data_utf16(): [ /* returnType */ boolean, /* value_uss_data_utf16 */ number[] | null ]
    ref(): IndicationVoiceUssdOutput
    unref(): void
    static name: string
}
class IndicationWdsEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationWdsEventReportOutput */
    get_channel_rates(): [ /* returnType */ boolean, /* value_channel_rates_tx_rate_bps */ number | null, /* value_channel_rates_rx_rate_bps */ number | null ]
    get_current_data_bearer_technology(): [ /* returnType */ boolean, /* value_current_data_bearer_technology_network_type */ WdsNetworkType | null, /* value_current_data_bearer_technology_rat_mask */ number | null, /* value_current_data_bearer_technology_so_mask */ number | null ]
    get_data_bearer_technology(): [ /* returnType */ boolean, /* value_data_bearer_technology */ WdsDataBearerTechnology | null ]
    get_data_call_address_family(): [ /* returnType */ boolean, /* value_data_call_address_family */ WdsIpFamily | null ]
    get_data_call_status(): [ /* returnType */ boolean, /* value_data_call_status */ WdsDataCallStatus | null ]
    get_data_call_type(): [ /* returnType */ boolean, /* value_data_call_type_data_call_type */ WdsDataCallType | null, /* value_data_call_type_tethered_call_type */ WdsTetheredCallType | null ]
    get_data_systems(): [ /* returnType */ boolean, /* value_data_systems_preferred_network_type */ WdsDataSystemNetworkType | null, /* value_data_systems_networks */ IndicationWdsEventReportOutputDataSystemsNetworksNetwork[] | null ]
    get_dormancy_status(): [ /* returnType */ boolean, /* value_dormancy_status */ WdsDormancyStatus | null ]
    get_evdo_page_monitor_period_change(): [ /* returnType */ boolean, /* value_evdo_page_monitor_period_change_period_change */ number | null, /* value_evdo_page_monitor_period_change_force_long_sleep */ boolean | null ]
    get_extended_data_bearer_technology(): [ /* returnType */ boolean, /* value_extended_data_bearer_technology_data_bearer_technology */ WdsDataSystemNetworkType | null, /* value_extended_data_bearer_technology_radio_access_technology */ WdsRadioAccessTechnology | null, /* value_extended_data_bearer_technology_extended_data_bearer_technology_3gpp */ WdsExtendedDataBearerTechnology3gpp | null, /* value_extended_data_bearer_technology_extended_data_bearer_technology_3gpp2 */ WdsExtendedDataBearerTechnology3gpp2 | null ]
    get_mip_status(): [ /* returnType */ boolean, /* value_mip_status */ boolean | null ]
    get_pdn_filters_removed(): [ /* returnType */ boolean, /* value_pdn_filters_removed_pdn_filter_handler */ number[] | null ]
    get_preferred_data_system(): [ /* returnType */ boolean, /* value_preferred_data_system */ WdsDataSystem | null ]
    get_rx_bytes_ok(): [ /* returnType */ boolean, /* value_rx_bytes_ok */ number | null ]
    get_rx_overflows(): [ /* returnType */ boolean, /* value_rx_overflows */ number | null ]
    get_rx_packets_dropped(): [ /* returnType */ boolean, /* value_rx_packets_dropped */ number | null ]
    get_rx_packets_error(): [ /* returnType */ boolean, /* value_rx_packets_error */ number | null ]
    get_rx_packets_ok(): [ /* returnType */ boolean, /* value_rx_packets_ok */ number | null ]
    get_tx_bytes_ok(): [ /* returnType */ boolean, /* value_tx_bytes_ok */ number | null ]
    get_tx_overflows(): [ /* returnType */ boolean, /* value_tx_overflows */ number | null ]
    get_tx_packets_dropped(): [ /* returnType */ boolean, /* value_tx_packets_dropped */ number | null ]
    get_tx_packets_error(): [ /* returnType */ boolean, /* value_tx_packets_error */ number | null ]
    get_tx_packets_ok(): [ /* returnType */ boolean, /* value_tx_packets_ok */ number | null ]
    get_uplink_flow_control_enabled(): [ /* returnType */ boolean, /* value_uplink_flow_control_enabled */ boolean | null ]
    ref(): IndicationWdsEventReportOutput
    unref(): void
    static name: string
}
class IndicationWdsEventReportOutputDataSystemsNetworksNetwork {
    /* Fields of Qmi-1.0.Qmi.IndicationWdsEventReportOutputDataSystemsNetworksNetwork */
    network_type: WdsDataSystemNetworkType
    rat_mask: number
    so_mask: number
    static name: string
}
class IndicationWdsPacketServiceStatusOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationWdsPacketServiceStatusOutput */
    get_call_end_reason(): [ /* returnType */ boolean, /* value_call_end_reason */ WdsCallEndReason | null ]
    get_connection_status(): [ /* returnType */ boolean, /* value_connection_status_status */ WdsConnectionStatus | null, /* value_connection_status_reconfiguration_required */ boolean | null ]
    get_extended_technology_preference(): [ /* returnType */ boolean, /* value_extended_technology_preference */ WdsExtendedTechnologyPreference | null ]
    get_ip_family(): [ /* returnType */ boolean, /* value_ip_family */ WdsIpFamily | null ]
    get_verbose_call_end_reason(): [ /* returnType */ boolean, /* value_verbose_call_end_reason_type */ WdsVerboseCallEndReasonType | null, /* value_verbose_call_end_reason_reason */ number | null ]
    ref(): IndicationWdsPacketServiceStatusOutput
    unref(): void
    static name: string
}
class IndicationWdsSetLteAttachPdnListOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationWdsSetLteAttachPdnListOutput */
    get_action_result(): [ /* returnType */ boolean, /* value_action_result */ boolean | null ]
    get_result(): boolean
    ref(): IndicationWdsSetLteAttachPdnListOutput
    unref(): void
    static name: string
}
class IndicationWmsEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationWmsEventReportOutput */
    get_etws_message(): [ /* returnType */ boolean, /* value_etws_message_notification_type */ WmsNotificationType | null, /* value_etws_message_raw_data */ Uint8Array[] | null ]
    get_etws_plmn_information(): [ /* returnType */ boolean, /* value_etws_plmn_information_mcc */ number | null, /* value_etws_plmn_information_mnc */ number | null ]
    get_message_mode(): [ /* returnType */ boolean, /* value_message_mode */ WmsMessageMode | null ]
    get_mt_message(): [ /* returnType */ boolean, /* value_mt_message_storage_type */ WmsStorageType | null, /* value_mt_message_memory_index */ number | null ]
    get_sms_on_ims(): [ /* returnType */ boolean, /* value_sms_on_ims */ boolean | null ]
    get_smsc_address(): [ /* returnType */ boolean, /* value_smsc_address */ string | null ]
    get_transfer_route_mt_message(): [ /* returnType */ boolean, /* value_transfer_route_mt_message_ack_indicator */ WmsAckIndicator | null, /* value_transfer_route_mt_message_transaction_id */ number | null, /* value_transfer_route_mt_message_format */ WmsMessageFormat | null, /* value_transfer_route_mt_message_raw_data */ Uint8Array[] | null ]
    ref(): IndicationWmsEventReportOutput
    unref(): void
    static name: string
}
class IndicationWmsSmscAddressOutput {
    /* Methods of Qmi-1.0.Qmi.IndicationWmsSmscAddressOutput */
    get_address(): [ /* returnType */ boolean, /* value_address_type */ string | null, /* value_address_digits */ string | null ]
    ref(): IndicationWmsSmscAddressOutput
    unref(): void
    static name: string
}
class MessageContext {
    /* Methods of Qmi-1.0.Qmi.MessageContext */
    get_vendor_id(): number
    ref(): MessageContext
    set_vendor_id(vendor_id: number): void
    unref(): void
    static name: string
    static new(): MessageContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageContext
}
class MessageCtlAllocateCidInput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlAllocateCidInput */
    get_service(): [ /* returnType */ boolean, /* value_service */ Service | null ]
    ref(): MessageCtlAllocateCidInput
    set_service(value_service: Service): boolean
    unref(): void
    static name: string
    static new(): MessageCtlAllocateCidInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageCtlAllocateCidInput
}
class MessageCtlAllocateCidOutput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlAllocateCidOutput */
    get_allocation_info(): [ /* returnType */ boolean, /* value_allocation_info_service */ Service | null, /* value_allocation_info_cid */ number | null ]
    get_result(): boolean
    ref(): MessageCtlAllocateCidOutput
    unref(): void
    static name: string
}
class MessageCtlGetVersionInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlGetVersionInfoOutput */
    get_result(): boolean
    get_service_list(): [ /* returnType */ boolean, /* value_service_list */ MessageCtlGetVersionInfoOutputServiceListService[] | null ]
    ref(): MessageCtlGetVersionInfoOutput
    unref(): void
    static name: string
}
class MessageCtlGetVersionInfoOutputServiceListService {
    /* Fields of Qmi-1.0.Qmi.MessageCtlGetVersionInfoOutputServiceListService */
    service: Service
    major_version: number
    minor_version: number
    static name: string
}
class MessageCtlInternalProxyOpenInput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlInternalProxyOpenInput */
    get_device_path(): [ /* returnType */ boolean, /* value_device_path */ string | null ]
    ref(): MessageCtlInternalProxyOpenInput
    set_device_path(value_device_path: string): boolean
    unref(): void
    static name: string
    static new(): MessageCtlInternalProxyOpenInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageCtlInternalProxyOpenInput
}
class MessageCtlInternalProxyOpenOutput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlInternalProxyOpenOutput */
    get_result(): boolean
    ref(): MessageCtlInternalProxyOpenOutput
    unref(): void
    static name: string
}
class MessageCtlReleaseCidInput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlReleaseCidInput */
    get_release_info(): [ /* returnType */ boolean, /* value_release_info_service */ Service | null, /* value_release_info_cid */ number | null ]
    ref(): MessageCtlReleaseCidInput
    set_release_info(value_release_info_service: Service, value_release_info_cid: number): boolean
    unref(): void
    static name: string
    static new(): MessageCtlReleaseCidInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageCtlReleaseCidInput
}
class MessageCtlReleaseCidOutput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlReleaseCidOutput */
    get_release_info(): [ /* returnType */ boolean, /* value_release_info_service */ Service | null, /* value_release_info_cid */ number | null ]
    get_result(): boolean
    ref(): MessageCtlReleaseCidOutput
    unref(): void
    static name: string
}
class MessageCtlSetDataFormatInput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlSetDataFormatInput */
    get_format(): [ /* returnType */ boolean, /* value_format */ CtlDataFormat | null ]
    get_protocol(): [ /* returnType */ boolean, /* value_protocol */ CtlDataLinkProtocol | null ]
    ref(): MessageCtlSetDataFormatInput
    set_format(value_format: CtlDataFormat): boolean
    set_protocol(value_protocol: CtlDataLinkProtocol): boolean
    unref(): void
    static name: string
    static new(): MessageCtlSetDataFormatInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageCtlSetDataFormatInput
}
class MessageCtlSetDataFormatOutput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlSetDataFormatOutput */
    get_protocol(): [ /* returnType */ boolean, /* value_protocol */ CtlDataLinkProtocol | null ]
    get_result(): boolean
    ref(): MessageCtlSetDataFormatOutput
    unref(): void
    static name: string
}
class MessageCtlSetInstanceIdInput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlSetInstanceIdInput */
    get_id(): [ /* returnType */ boolean, /* value_id */ number | null ]
    ref(): MessageCtlSetInstanceIdInput
    set_id(value_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageCtlSetInstanceIdInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageCtlSetInstanceIdInput
}
class MessageCtlSetInstanceIdOutput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlSetInstanceIdOutput */
    get_link_id(): [ /* returnType */ boolean, /* value_link_id */ number | null ]
    get_result(): boolean
    ref(): MessageCtlSetInstanceIdOutput
    unref(): void
    static name: string
}
class MessageCtlSyncOutput {
    /* Methods of Qmi-1.0.Qmi.MessageCtlSyncOutput */
    get_result(): boolean
    ref(): MessageCtlSyncOutput
    unref(): void
    static name: string
}
class MessageDmsActivateAutomaticInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsActivateAutomaticInput */
    get_activation_code(): [ /* returnType */ boolean, /* value_activation_code */ string | null ]
    ref(): MessageDmsActivateAutomaticInput
    set_activation_code(value_activation_code: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsActivateAutomaticInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsActivateAutomaticInput
}
class MessageDmsActivateAutomaticOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsActivateAutomaticOutput */
    get_result(): boolean
    ref(): MessageDmsActivateAutomaticOutput
    unref(): void
    static name: string
}
class MessageDmsActivateManualInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsActivateManualInput */
    get_info(): [ /* returnType */ boolean, /* value_info_service_programming_code */ string | null, /* value_info_system_identification_number */ number | null, /* value_info_mobile_directory_number */ string | null, /* value_info_mobile_identification_number */ string | null ]
    get_mn_aaa_key(): [ /* returnType */ boolean, /* value_mn_aaa_key */ string | null ]
    get_mn_ha_key(): [ /* returnType */ boolean, /* value_mn_ha_key */ string | null ]
    get_prl(): [ /* returnType */ boolean, /* value_prl_prl_total_length */ number | null, /* value_prl_prl_segment_sequence */ number | null, /* value_prl_prl_segment */ Uint8Array[] | null ]
    ref(): MessageDmsActivateManualInput
    set_info(value_info_service_programming_code: string, value_info_system_identification_number: number, value_info_mobile_directory_number: string, value_info_mobile_identification_number: string): boolean
    set_mn_aaa_key(value_mn_aaa_key: string): boolean
    set_mn_ha_key(value_mn_ha_key: string): boolean
    set_prl(value_prl_prl_total_length: number, value_prl_prl_segment_sequence: number, value_prl_prl_segment: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageDmsActivateManualInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsActivateManualInput
}
class MessageDmsActivateManualOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsActivateManualOutput */
    get_result(): boolean
    ref(): MessageDmsActivateManualOutput
    unref(): void
    static name: string
}
class MessageDmsDeleteStoredImageInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsDeleteStoredImageInput */
    get_image(): [ /* returnType */ boolean, /* value_image */ MessageDmsDeleteStoredImageInputImage | null ]
    ref(): MessageDmsDeleteStoredImageInput
    set_image(value_image: MessageDmsDeleteStoredImageInputImage): boolean
    unref(): void
    static name: string
    static new(): MessageDmsDeleteStoredImageInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsDeleteStoredImageInput
}
class MessageDmsDeleteStoredImageInputImage {
    /* Fields of Qmi-1.0.Qmi.MessageDmsDeleteStoredImageInputImage */
    type: DmsFirmwareImageType
    unique_id: object[]
    build_id: string
    static name: string
}
class MessageDmsDeleteStoredImageOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsDeleteStoredImageOutput */
    get_result(): boolean
    ref(): MessageDmsDeleteStoredImageOutput
    unref(): void
    static name: string
}
class MessageDmsFoxconnChangeDeviceModeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsFoxconnChangeDeviceModeInput */
    get_mode(): [ /* returnType */ boolean, /* value_mode */ DmsFoxconnDeviceMode | null ]
    ref(): MessageDmsFoxconnChangeDeviceModeInput
    set_mode(value_mode: DmsFoxconnDeviceMode): boolean
    unref(): void
    static name: string
    static new(): MessageDmsFoxconnChangeDeviceModeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsFoxconnChangeDeviceModeInput
}
class MessageDmsFoxconnChangeDeviceModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsFoxconnChangeDeviceModeOutput */
    get_result(): boolean
    ref(): MessageDmsFoxconnChangeDeviceModeOutput
    unref(): void
    static name: string
}
class MessageDmsFoxconnGetFirmwareVersionInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsFoxconnGetFirmwareVersionInput */
    get_version_type(): [ /* returnType */ boolean, /* value_version_type */ DmsFoxconnFirmwareVersionType | null ]
    ref(): MessageDmsFoxconnGetFirmwareVersionInput
    set_version_type(value_version_type: DmsFoxconnFirmwareVersionType): boolean
    unref(): void
    static name: string
    static new(): MessageDmsFoxconnGetFirmwareVersionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsFoxconnGetFirmwareVersionInput
}
class MessageDmsFoxconnGetFirmwareVersionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsFoxconnGetFirmwareVersionOutput */
    get_result(): boolean
    get_version(): [ /* returnType */ boolean, /* value_version */ string | null ]
    ref(): MessageDmsFoxconnGetFirmwareVersionOutput
    unref(): void
    static name: string
}
class MessageDmsFoxconnSetFccAuthenticationInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsFoxconnSetFccAuthenticationInput */
    get_value(): [ /* returnType */ boolean, /* value_value */ number | null ]
    ref(): MessageDmsFoxconnSetFccAuthenticationInput
    set_value(value_value: number): boolean
    unref(): void
    static name: string
    static new(): MessageDmsFoxconnSetFccAuthenticationInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsFoxconnSetFccAuthenticationInput
}
class MessageDmsFoxconnSetFccAuthenticationOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsFoxconnSetFccAuthenticationOutput */
    get_result(): boolean
    ref(): MessageDmsFoxconnSetFccAuthenticationOutput
    unref(): void
    static name: string
}
class MessageDmsGetActivationStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetActivationStateOutput */
    get_info(): [ /* returnType */ boolean, /* value_info */ DmsActivationState | null ]
    get_result(): boolean
    ref(): MessageDmsGetActivationStateOutput
    unref(): void
    static name: string
}
class MessageDmsGetAltNetConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetAltNetConfigOutput */
    get_config(): [ /* returnType */ boolean, /* value_config */ boolean | null ]
    get_result(): boolean
    ref(): MessageDmsGetAltNetConfigOutput
    unref(): void
    static name: string
}
class MessageDmsGetBandCapabilitiesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetBandCapabilitiesOutput */
    get_band_capability(): [ /* returnType */ boolean, /* value_band_capability */ DmsBandCapability | null ]
    get_extended_lte_band_capability(): [ /* returnType */ boolean, /* value_extended_lte_band_capability */ number[] | null ]
    get_lte_band_capability(): [ /* returnType */ boolean, /* value_lte_band_capability */ DmsLteBandCapability | null ]
    get_nr5g_band_capability(): [ /* returnType */ boolean, /* value_nr5g_band_capability */ number[] | null ]
    get_result(): boolean
    ref(): MessageDmsGetBandCapabilitiesOutput
    unref(): void
    static name: string
}
class MessageDmsGetBootImageDownloadModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetBootImageDownloadModeOutput */
    get_mode(): [ /* returnType */ boolean, /* value_mode */ DmsBootImageDownloadMode | null ]
    get_result(): boolean
    ref(): MessageDmsGetBootImageDownloadModeOutput
    unref(): void
    static name: string
}
class MessageDmsGetCapabilitiesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetCapabilitiesOutput */
    get_info(): [ /* returnType */ boolean, /* value_info_max_tx_channel_rate */ number | null, /* value_info_max_rx_channel_rate */ number | null, /* value_info_data_service_capability */ DmsDataServiceCapability | null, /* value_info_sim_capability */ DmsSimCapability | null, /* value_info_radio_interface_list */ DmsRadioInterface[] | null ]
    get_result(): boolean
    ref(): MessageDmsGetCapabilitiesOutput
    unref(): void
    static name: string
}
class MessageDmsGetFactorySkuOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetFactorySkuOutput */
    get_result(): boolean
    get_sku(): [ /* returnType */ boolean, /* value_sku */ string | null ]
    ref(): MessageDmsGetFactorySkuOutput
    unref(): void
    static name: string
}
class MessageDmsGetFirmwarePreferenceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetFirmwarePreferenceOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ MessageDmsGetFirmwarePreferenceOutputListImage[] | null ]
    get_result(): boolean
    ref(): MessageDmsGetFirmwarePreferenceOutput
    unref(): void
    static name: string
}
class MessageDmsGetFirmwarePreferenceOutputListImage {
    /* Fields of Qmi-1.0.Qmi.MessageDmsGetFirmwarePreferenceOutputListImage */
    type: DmsFirmwareImageType
    unique_id: object[]
    build_id: string
    static name: string
}
class MessageDmsGetHardwareRevisionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetHardwareRevisionOutput */
    get_result(): boolean
    get_revision(): [ /* returnType */ boolean, /* value_revision */ string | null ]
    ref(): MessageDmsGetHardwareRevisionOutput
    unref(): void
    static name: string
}
class MessageDmsGetIdsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetIdsOutput */
    get_esn(): [ /* returnType */ boolean, /* value_esn */ string | null ]
    get_imei(): [ /* returnType */ boolean, /* value_imei */ string | null ]
    get_imei_software_version(): [ /* returnType */ boolean, /* value_imei_software_version */ string | null ]
    get_meid(): [ /* returnType */ boolean, /* value_meid */ string | null ]
    get_result(): boolean
    ref(): MessageDmsGetIdsOutput
    unref(): void
    static name: string
}
class MessageDmsGetMacAddressInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetMacAddressInput */
    get_device(): [ /* returnType */ boolean, /* value_device */ DmsMacType | null ]
    ref(): MessageDmsGetMacAddressInput
    set_device(value_device: DmsMacType): boolean
    unref(): void
    static name: string
    static new(): MessageDmsGetMacAddressInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsGetMacAddressInput
}
class MessageDmsGetMacAddressOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetMacAddressOutput */
    get_mac_address(): [ /* returnType */ boolean, /* value_mac_address */ Uint8Array[] | null ]
    get_result(): boolean
    ref(): MessageDmsGetMacAddressOutput
    unref(): void
    static name: string
}
class MessageDmsGetManufacturerOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetManufacturerOutput */
    get_manufacturer(): [ /* returnType */ boolean, /* value_manufacturer */ string | null ]
    get_result(): boolean
    ref(): MessageDmsGetManufacturerOutput
    unref(): void
    static name: string
}
class MessageDmsGetModelOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetModelOutput */
    get_model(): [ /* returnType */ boolean, /* value_model */ string | null ]
    get_result(): boolean
    ref(): MessageDmsGetModelOutput
    unref(): void
    static name: string
}
class MessageDmsGetMsisdnOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetMsisdnOutput */
    get_msisdn(): [ /* returnType */ boolean, /* value_msisdn */ string | null ]
    get_result(): boolean
    ref(): MessageDmsGetMsisdnOutput
    unref(): void
    static name: string
}
class MessageDmsGetOperatingModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetOperatingModeOutput */
    get_hardware_restricted_mode(): [ /* returnType */ boolean, /* value_hardware_restricted_mode */ boolean | null ]
    get_mode(): [ /* returnType */ boolean, /* value_mode */ DmsOperatingMode | null ]
    get_offline_reason(): [ /* returnType */ boolean, /* value_offline_reason */ DmsOfflineReason | null ]
    get_result(): boolean
    ref(): MessageDmsGetOperatingModeOutput
    unref(): void
    static name: string
}
class MessageDmsGetPowerStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetPowerStateOutput */
    get_info(): [ /* returnType */ boolean, /* value_info_power_state_flags */ number | null, /* value_info_battery_level */ number | null ]
    get_result(): boolean
    ref(): MessageDmsGetPowerStateOutput
    unref(): void
    static name: string
}
class MessageDmsGetPrlVersionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetPrlVersionOutput */
    get_prl_only_preference(): [ /* returnType */ boolean, /* value_prl_only_preference */ boolean | null ]
    get_result(): boolean
    get_version(): [ /* returnType */ boolean, /* value_version */ number | null ]
    ref(): MessageDmsGetPrlVersionOutput
    unref(): void
    static name: string
}
class MessageDmsGetRevisionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetRevisionOutput */
    get_result(): boolean
    get_revision(): [ /* returnType */ boolean, /* value_revision */ string | null ]
    ref(): MessageDmsGetRevisionOutput
    unref(): void
    static name: string
}
class MessageDmsGetSoftwareVersionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetSoftwareVersionOutput */
    get_result(): boolean
    get_version(): [ /* returnType */ boolean, /* value_version */ string | null ]
    ref(): MessageDmsGetSoftwareVersionOutput
    unref(): void
    static name: string
}
class MessageDmsGetStoredImageInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetStoredImageInfoInput */
    get_image(): [ /* returnType */ boolean, /* value_image */ MessageDmsGetStoredImageInfoInputImage | null ]
    ref(): MessageDmsGetStoredImageInfoInput
    set_image(value_image: MessageDmsGetStoredImageInfoInputImage): boolean
    unref(): void
    static name: string
    static new(): MessageDmsGetStoredImageInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsGetStoredImageInfoInput
}
class MessageDmsGetStoredImageInfoInputImage {
    /* Fields of Qmi-1.0.Qmi.MessageDmsGetStoredImageInfoInputImage */
    type: DmsFirmwareImageType
    unique_id: object[]
    build_id: string
    static name: string
}
class MessageDmsGetStoredImageInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetStoredImageInfoOutput */
    get_boot_version(): [ /* returnType */ boolean, /* value_boot_version_major_version */ number | null, /* value_boot_version_minor_version */ number | null ]
    get_oem_lock_id(): [ /* returnType */ boolean, /* value_oem_lock_id */ number | null ]
    get_pri_version(): [ /* returnType */ boolean, /* value_pri_version_pri_version */ number | null, /* value_pri_version_pri_info */ string | null ]
    get_result(): boolean
    ref(): MessageDmsGetStoredImageInfoOutput
    unref(): void
    static name: string
}
class MessageDmsGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetSupportedMessagesOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ Uint8Array[] | null ]
    get_result(): boolean
    ref(): MessageDmsGetSupportedMessagesOutput
    unref(): void
    static name: string
}
class MessageDmsGetTimeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetTimeOutput */
    get_device_time(): [ /* returnType */ boolean, /* value_device_time_time_count */ number | null, /* value_device_time_time_source */ DmsTimeSource | null ]
    get_result(): boolean
    get_system_time(): [ /* returnType */ boolean, /* value_system_time */ number | null ]
    get_user_time(): [ /* returnType */ boolean, /* value_user_time */ number | null ]
    ref(): MessageDmsGetTimeOutput
    unref(): void
    static name: string
}
class MessageDmsGetUserLockStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsGetUserLockStateOutput */
    get_enabled(): [ /* returnType */ boolean, /* value_enabled */ boolean | null ]
    get_result(): boolean
    ref(): MessageDmsGetUserLockStateOutput
    unref(): void
    static name: string
}
class MessageDmsHpChangeDeviceModeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsHpChangeDeviceModeInput */
    get_mode(): [ /* returnType */ boolean, /* value_mode */ DmsHpDeviceMode | null ]
    ref(): MessageDmsHpChangeDeviceModeInput
    set_mode(value_mode: DmsHpDeviceMode): boolean
    unref(): void
    static name: string
    static new(): MessageDmsHpChangeDeviceModeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsHpChangeDeviceModeInput
}
class MessageDmsHpChangeDeviceModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsHpChangeDeviceModeOutput */
    get_result(): boolean
    ref(): MessageDmsHpChangeDeviceModeOutput
    unref(): void
    static name: string
}
class MessageDmsListStoredImagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsListStoredImagesOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ MessageDmsListStoredImagesOutputListImage[] | null ]
    get_result(): boolean
    ref(): MessageDmsListStoredImagesOutput
    unref(): void
    static name: string
}
class MessageDmsListStoredImagesOutputListImage {
    /* Fields of Qmi-1.0.Qmi.MessageDmsListStoredImagesOutputListImage */
    type: DmsFirmwareImageType
    maximum_images: number
    index_of_running_image: number
    sublist: object[]
    static name: string
}
class MessageDmsListStoredImagesOutputListImageSublistSublistElement {
    /* Fields of Qmi-1.0.Qmi.MessageDmsListStoredImagesOutputListImageSublistSublistElement */
    storage_index: number
    failure_count: number
    unique_id: object[]
    build_id: string
    static name: string
}
class MessageDmsReadEriFileOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsReadEriFileOutput */
    get_eri_file(): [ /* returnType */ boolean, /* value_eri_file */ Uint8Array[] | null ]
    get_result(): boolean
    ref(): MessageDmsReadEriFileOutput
    unref(): void
    static name: string
}
class MessageDmsReadUserDataOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsReadUserDataOutput */
    get_result(): boolean
    get_user_data(): [ /* returnType */ boolean, /* value_user_data */ Uint8Array[] | null ]
    ref(): MessageDmsReadUserDataOutput
    unref(): void
    static name: string
}
class MessageDmsResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsResetOutput */
    get_result(): boolean
    ref(): MessageDmsResetOutput
    unref(): void
    static name: string
}
class MessageDmsRestoreFactoryDefaultsInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsRestoreFactoryDefaultsInput */
    get_service_programming_code(): [ /* returnType */ boolean, /* value_service_programming_code */ string | null ]
    ref(): MessageDmsRestoreFactoryDefaultsInput
    set_service_programming_code(value_service_programming_code: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsRestoreFactoryDefaultsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsRestoreFactoryDefaultsInput
}
class MessageDmsRestoreFactoryDefaultsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsRestoreFactoryDefaultsOutput */
    get_result(): boolean
    ref(): MessageDmsRestoreFactoryDefaultsOutput
    unref(): void
    static name: string
}
class MessageDmsSetAltNetConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetAltNetConfigInput */
    get_config(): [ /* returnType */ boolean, /* value_config */ boolean | null ]
    ref(): MessageDmsSetAltNetConfigInput
    set_config(value_config: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetAltNetConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetAltNetConfigInput
}
class MessageDmsSetAltNetConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetAltNetConfigOutput */
    get_result(): boolean
    ref(): MessageDmsSetAltNetConfigOutput
    unref(): void
    static name: string
}
class MessageDmsSetBootImageDownloadModeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetBootImageDownloadModeInput */
    get_mode(): [ /* returnType */ boolean, /* value_mode */ DmsBootImageDownloadMode | null ]
    ref(): MessageDmsSetBootImageDownloadModeInput
    set_mode(value_mode: DmsBootImageDownloadMode): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetBootImageDownloadModeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetBootImageDownloadModeInput
}
class MessageDmsSetBootImageDownloadModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetBootImageDownloadModeOutput */
    get_result(): boolean
    ref(): MessageDmsSetBootImageDownloadModeOutput
    unref(): void
    static name: string
}
class MessageDmsSetEventReportInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetEventReportInput */
    get_activation_state_reporting(): [ /* returnType */ boolean, /* value_activation_state_reporting */ boolean | null ]
    get_battery_level_report_limits(): [ /* returnType */ boolean, /* value_battery_level_report_limits_lower_limit */ number | null, /* value_battery_level_report_limits_upper_limit */ number | null ]
    get_operating_mode_reporting(): [ /* returnType */ boolean, /* value_operating_mode_reporting */ boolean | null ]
    get_pin_state_reporting(): [ /* returnType */ boolean, /* value_pin_state_reporting */ boolean | null ]
    get_power_state_reporting(): [ /* returnType */ boolean, /* value_power_state_reporting */ boolean | null ]
    get_prl_init_reporting(): [ /* returnType */ boolean, /* value_prl_init_reporting */ boolean | null ]
    get_uim_state_reporting(): [ /* returnType */ boolean, /* value_uim_state_reporting */ boolean | null ]
    get_wireless_disable_state_reporting(): [ /* returnType */ boolean, /* value_wireless_disable_state_reporting */ boolean | null ]
    ref(): MessageDmsSetEventReportInput
    set_activation_state_reporting(value_activation_state_reporting: boolean): boolean
    set_battery_level_report_limits(value_battery_level_report_limits_lower_limit: number, value_battery_level_report_limits_upper_limit: number): boolean
    set_operating_mode_reporting(value_operating_mode_reporting: boolean): boolean
    set_pin_state_reporting(value_pin_state_reporting: boolean): boolean
    set_power_state_reporting(value_power_state_reporting: boolean): boolean
    set_prl_init_reporting(value_prl_init_reporting: boolean): boolean
    set_uim_state_reporting(value_uim_state_reporting: boolean): boolean
    set_wireless_disable_state_reporting(value_wireless_disable_state_reporting: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetEventReportInput
}
class MessageDmsSetEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetEventReportOutput */
    get_result(): boolean
    ref(): MessageDmsSetEventReportOutput
    unref(): void
    static name: string
}
class MessageDmsSetFccAuthenticationOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetFccAuthenticationOutput */
    get_result(): boolean
    ref(): MessageDmsSetFccAuthenticationOutput
    unref(): void
    static name: string
}
class MessageDmsSetFirmwareIdOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetFirmwareIdOutput */
    get_result(): boolean
    ref(): MessageDmsSetFirmwareIdOutput
    unref(): void
    static name: string
}
class MessageDmsSetFirmwarePreferenceInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetFirmwarePreferenceInput */
    get_download_override(): [ /* returnType */ boolean, /* value_download_override */ boolean | null ]
    get_list(): [ /* returnType */ boolean, /* value_list */ MessageDmsSetFirmwarePreferenceInputListImage[] | null ]
    get_modem_storage_index(): [ /* returnType */ boolean, /* value_modem_storage_index */ number | null ]
    ref(): MessageDmsSetFirmwarePreferenceInput
    set_download_override(value_download_override: boolean): boolean
    set_list(value_list: MessageDmsSetFirmwarePreferenceInputListImage[]): boolean
    set_modem_storage_index(value_modem_storage_index: number): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetFirmwarePreferenceInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetFirmwarePreferenceInput
}
class MessageDmsSetFirmwarePreferenceInputListImage {
    /* Fields of Qmi-1.0.Qmi.MessageDmsSetFirmwarePreferenceInputListImage */
    type: DmsFirmwareImageType
    unique_id: object[]
    build_id: string
    static name: string
}
class MessageDmsSetFirmwarePreferenceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetFirmwarePreferenceOutput */
    get_image_download_list(): [ /* returnType */ boolean, /* value_image_download_list */ DmsFirmwareImageType[] | null ]
    get_result(): boolean
    ref(): MessageDmsSetFirmwarePreferenceOutput
    unref(): void
    static name: string
}
class MessageDmsSetOperatingModeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetOperatingModeInput */
    get_mode(): [ /* returnType */ boolean, /* value_mode */ DmsOperatingMode | null ]
    ref(): MessageDmsSetOperatingModeInput
    set_mode(value_mode: DmsOperatingMode): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetOperatingModeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetOperatingModeInput
}
class MessageDmsSetOperatingModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetOperatingModeOutput */
    get_result(): boolean
    ref(): MessageDmsSetOperatingModeOutput
    unref(): void
    static name: string
}
class MessageDmsSetServiceProgrammingCodeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetServiceProgrammingCodeInput */
    get_current_code(): [ /* returnType */ boolean, /* value_current_code */ string | null ]
    get_new_code(): [ /* returnType */ boolean, /* value_new_code */ string | null ]
    ref(): MessageDmsSetServiceProgrammingCodeInput
    set_current_code(value_current_code: string): boolean
    set_new_code(value_new_code: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetServiceProgrammingCodeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetServiceProgrammingCodeInput
}
class MessageDmsSetServiceProgrammingCodeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetServiceProgrammingCodeOutput */
    get_result(): boolean
    ref(): MessageDmsSetServiceProgrammingCodeOutput
    unref(): void
    static name: string
}
class MessageDmsSetTimeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetTimeInput */
    get_time_reference_type(): [ /* returnType */ boolean, /* value_time_reference_type */ DmsTimeReferenceType | null ]
    get_time_value(): [ /* returnType */ boolean, /* value_time_value */ number | null ]
    ref(): MessageDmsSetTimeInput
    set_time_reference_type(value_time_reference_type: DmsTimeReferenceType): boolean
    set_time_value(value_time_value: number): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetTimeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetTimeInput
}
class MessageDmsSetTimeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetTimeOutput */
    get_result(): boolean
    ref(): MessageDmsSetTimeOutput
    unref(): void
    static name: string
}
class MessageDmsSetUserLockCodeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetUserLockCodeInput */
    get_info(): [ /* returnType */ boolean, /* value_info_old_code */ string | null, /* value_info_new_code */ string | null ]
    ref(): MessageDmsSetUserLockCodeInput
    set_info(value_info_old_code: string, value_info_new_code: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetUserLockCodeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetUserLockCodeInput
}
class MessageDmsSetUserLockCodeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetUserLockCodeOutput */
    get_result(): boolean
    ref(): MessageDmsSetUserLockCodeOutput
    unref(): void
    static name: string
}
class MessageDmsSetUserLockStateInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetUserLockStateInput */
    get_info(): [ /* returnType */ boolean, /* value_info_enabled */ boolean | null, /* value_info_lock_code */ string | null ]
    ref(): MessageDmsSetUserLockStateInput
    set_info(value_info_enabled: boolean, value_info_lock_code: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSetUserLockStateInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSetUserLockStateInput
}
class MessageDmsSetUserLockStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSetUserLockStateOutput */
    get_result(): boolean
    ref(): MessageDmsSetUserLockStateOutput
    unref(): void
    static name: string
}
class MessageDmsSwiGetCurrentFirmwareOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSwiGetCurrentFirmwareOutput */
    get_amss_version(): [ /* returnType */ boolean, /* value_amss_version */ string | null ]
    get_boot_version(): [ /* returnType */ boolean, /* value_boot_version */ string | null ]
    get_carrier(): [ /* returnType */ boolean, /* value_carrier */ string | null ]
    get_carrier_id(): [ /* returnType */ boolean, /* value_carrier_id */ string | null ]
    get_config_version(): [ /* returnType */ boolean, /* value_config_version */ string | null ]
    get_model(): [ /* returnType */ boolean, /* value_model */ string | null ]
    get_package_id(): [ /* returnType */ boolean, /* value_package_id */ string | null ]
    get_pri_version(): [ /* returnType */ boolean, /* value_pri_version */ string | null ]
    get_result(): boolean
    get_sku_id(): [ /* returnType */ boolean, /* value_sku_id */ string | null ]
    ref(): MessageDmsSwiGetCurrentFirmwareOutput
    unref(): void
    static name: string
}
class MessageDmsSwiGetUsbCompositionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSwiGetUsbCompositionOutput */
    get_current(): [ /* returnType */ boolean, /* value_current */ DmsSwiUsbComposition | null ]
    get_result(): boolean
    get_supported(): [ /* returnType */ boolean, /* value_supported */ DmsSwiUsbComposition[] | null ]
    ref(): MessageDmsSwiGetUsbCompositionOutput
    unref(): void
    static name: string
}
class MessageDmsSwiSetUsbCompositionInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSwiSetUsbCompositionInput */
    get_current(): [ /* returnType */ boolean, /* value_current */ DmsSwiUsbComposition | null ]
    ref(): MessageDmsSwiSetUsbCompositionInput
    set_current(value_current: DmsSwiUsbComposition): boolean
    unref(): void
    static name: string
    static new(): MessageDmsSwiSetUsbCompositionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsSwiSetUsbCompositionInput
}
class MessageDmsSwiSetUsbCompositionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsSwiSetUsbCompositionOutput */
    get_result(): boolean
    ref(): MessageDmsSwiSetUsbCompositionOutput
    unref(): void
    static name: string
}
class MessageDmsUimChangePinInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimChangePinInput */
    get_info(): [ /* returnType */ boolean, /* value_info_pin_id */ DmsUimPinId | null, /* value_info_old_pin */ string | null, /* value_info_new_pin */ string | null ]
    ref(): MessageDmsUimChangePinInput
    set_info(value_info_pin_id: DmsUimPinId, value_info_old_pin: string, value_info_new_pin: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimChangePinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimChangePinInput
}
class MessageDmsUimChangePinOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimChangePinOutput */
    get_pin_retries_status(): [ /* returnType */ boolean, /* value_pin_retries_status_verify_retries_left */ number | null, /* value_pin_retries_status_unblock_retries_left */ number | null ]
    get_result(): boolean
    ref(): MessageDmsUimChangePinOutput
    unref(): void
    static name: string
}
class MessageDmsUimGetCkStatusInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetCkStatusInput */
    get_facility(): [ /* returnType */ boolean, /* value_facility */ DmsUimFacility | null ]
    ref(): MessageDmsUimGetCkStatusInput
    set_facility(value_facility: DmsUimFacility): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimGetCkStatusInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimGetCkStatusInput
}
class MessageDmsUimGetCkStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetCkStatusOutput */
    get_ck_status(): [ /* returnType */ boolean, /* value_ck_status_facility_state */ DmsUimFacilityState | null, /* value_ck_status_verify_retries_left */ number | null, /* value_ck_status_unblock_retries_left */ number | null ]
    get_operation_blocking_facility(): [ /* returnType */ boolean, /* value_operation_blocking_facility */ boolean | null ]
    get_result(): boolean
    ref(): MessageDmsUimGetCkStatusOutput
    unref(): void
    static name: string
}
class MessageDmsUimGetIccidOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetIccidOutput */
    get_iccid(): [ /* returnType */ boolean, /* value_iccid */ string | null ]
    get_result(): boolean
    ref(): MessageDmsUimGetIccidOutput
    unref(): void
    static name: string
}
class MessageDmsUimGetImsiOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetImsiOutput */
    get_imsi(): [ /* returnType */ boolean, /* value_imsi */ string | null ]
    get_result(): boolean
    ref(): MessageDmsUimGetImsiOutput
    unref(): void
    static name: string
}
class MessageDmsUimGetPinStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetPinStatusOutput */
    get_pin1_status(): [ /* returnType */ boolean, /* value_pin1_status_current_status */ DmsUimPinStatus | null, /* value_pin1_status_verify_retries_left */ number | null, /* value_pin1_status_unblock_retries_left */ number | null ]
    get_pin2_status(): [ /* returnType */ boolean, /* value_pin2_status_current_status */ DmsUimPinStatus | null, /* value_pin2_status_verify_retries_left */ number | null, /* value_pin2_status_unblock_retries_left */ number | null ]
    get_result(): boolean
    ref(): MessageDmsUimGetPinStatusOutput
    unref(): void
    static name: string
}
class MessageDmsUimGetStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimGetStateOutput */
    get_result(): boolean
    get_state(): [ /* returnType */ boolean, /* value_state */ DmsUimState | null ]
    ref(): MessageDmsUimGetStateOutput
    unref(): void
    static name: string
}
class MessageDmsUimSetCkProtectionInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimSetCkProtectionInput */
    get_facility(): [ /* returnType */ boolean, /* value_facility_facility */ DmsUimFacility | null, /* value_facility_facility_state */ DmsUimFacilityState | null, /* value_facility_facility_depersonalization_control_key */ string | null ]
    ref(): MessageDmsUimSetCkProtectionInput
    set_facility(value_facility_facility: DmsUimFacility, value_facility_facility_state: DmsUimFacilityState, value_facility_facility_depersonalization_control_key: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimSetCkProtectionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimSetCkProtectionInput
}
class MessageDmsUimSetCkProtectionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimSetCkProtectionOutput */
    get_result(): boolean
    get_verify_retries_left(): [ /* returnType */ boolean, /* value_verify_retries_left */ number | null ]
    ref(): MessageDmsUimSetCkProtectionOutput
    unref(): void
    static name: string
}
class MessageDmsUimSetPinProtectionInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimSetPinProtectionInput */
    get_info(): [ /* returnType */ boolean, /* value_info_pin_id */ DmsUimPinId | null, /* value_info_protection_enabled */ boolean | null, /* value_info_pin */ string | null ]
    ref(): MessageDmsUimSetPinProtectionInput
    set_info(value_info_pin_id: DmsUimPinId, value_info_protection_enabled: boolean, value_info_pin: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimSetPinProtectionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimSetPinProtectionInput
}
class MessageDmsUimSetPinProtectionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimSetPinProtectionOutput */
    get_pin_retries_status(): [ /* returnType */ boolean, /* value_pin_retries_status_verify_retries_left */ number | null, /* value_pin_retries_status_unblock_retries_left */ number | null ]
    get_result(): boolean
    ref(): MessageDmsUimSetPinProtectionOutput
    unref(): void
    static name: string
}
class MessageDmsUimUnblockCkInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimUnblockCkInput */
    get_facility(): [ /* returnType */ boolean, /* value_facility_facility */ DmsUimFacility | null, /* value_facility_facility_control_key */ string | null ]
    ref(): MessageDmsUimUnblockCkInput
    set_facility(value_facility_facility: DmsUimFacility, value_facility_facility_control_key: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimUnblockCkInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimUnblockCkInput
}
class MessageDmsUimUnblockCkOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimUnblockCkOutput */
    get_result(): boolean
    get_unblock_retries_left(): [ /* returnType */ boolean, /* value_unblock_retries_left */ number | null ]
    ref(): MessageDmsUimUnblockCkOutput
    unref(): void
    static name: string
}
class MessageDmsUimUnblockPinInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimUnblockPinInput */
    get_info(): [ /* returnType */ boolean, /* value_info_pin_id */ DmsUimPinId | null, /* value_info_puk */ string | null, /* value_info_new_pin */ string | null ]
    ref(): MessageDmsUimUnblockPinInput
    set_info(value_info_pin_id: DmsUimPinId, value_info_puk: string, value_info_new_pin: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimUnblockPinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimUnblockPinInput
}
class MessageDmsUimUnblockPinOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimUnblockPinOutput */
    get_pin_retries_status(): [ /* returnType */ boolean, /* value_pin_retries_status_verify_retries_left */ number | null, /* value_pin_retries_status_unblock_retries_left */ number | null ]
    get_result(): boolean
    ref(): MessageDmsUimUnblockPinOutput
    unref(): void
    static name: string
}
class MessageDmsUimVerifyPinInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimVerifyPinInput */
    get_info(): [ /* returnType */ boolean, /* value_info_pin_id */ DmsUimPinId | null, /* value_info_pin */ string | null ]
    ref(): MessageDmsUimVerifyPinInput
    set_info(value_info_pin_id: DmsUimPinId, value_info_pin: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsUimVerifyPinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsUimVerifyPinInput
}
class MessageDmsUimVerifyPinOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsUimVerifyPinOutput */
    get_pin_retries_status(): [ /* returnType */ boolean, /* value_pin_retries_status_verify_retries_left */ number | null, /* value_pin_retries_status_unblock_retries_left */ number | null ]
    get_result(): boolean
    ref(): MessageDmsUimVerifyPinOutput
    unref(): void
    static name: string
}
class MessageDmsValidateServiceProgrammingCodeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsValidateServiceProgrammingCodeInput */
    get_service_programming_code(): [ /* returnType */ boolean, /* value_service_programming_code */ string | null ]
    ref(): MessageDmsValidateServiceProgrammingCodeInput
    set_service_programming_code(value_service_programming_code: string): boolean
    unref(): void
    static name: string
    static new(): MessageDmsValidateServiceProgrammingCodeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsValidateServiceProgrammingCodeInput
}
class MessageDmsValidateServiceProgrammingCodeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsValidateServiceProgrammingCodeOutput */
    get_result(): boolean
    ref(): MessageDmsValidateServiceProgrammingCodeOutput
    unref(): void
    static name: string
}
class MessageDmsWriteUserDataInput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsWriteUserDataInput */
    get_user_data(): [ /* returnType */ boolean, /* value_user_data */ Uint8Array[] | null ]
    ref(): MessageDmsWriteUserDataInput
    set_user_data(value_user_data: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageDmsWriteUserDataInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDmsWriteUserDataInput
}
class MessageDmsWriteUserDataOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDmsWriteUserDataOutput */
    get_result(): boolean
    ref(): MessageDmsWriteUserDataOutput
    unref(): void
    static name: string
}
class MessageDpmClosePortOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDpmClosePortOutput */
    get_result(): boolean
    ref(): MessageDpmClosePortOutput
    unref(): void
    static name: string
}
class MessageDpmOpenPortInput {
    /* Methods of Qmi-1.0.Qmi.MessageDpmOpenPortInput */
    get_control_ports(): [ /* returnType */ boolean, /* value_control_ports */ MessageDpmOpenPortInputControlPortsElement[] | null ]
    get_hardware_data_ports(): [ /* returnType */ boolean, /* value_hardware_data_ports */ MessageDpmOpenPortInputHardwareDataPortsElement[] | null ]
    get_software_data_ports(): [ /* returnType */ boolean, /* value_software_data_ports */ MessageDpmOpenPortInputSoftwareDataPortsElement[] | null ]
    ref(): MessageDpmOpenPortInput
    set_control_ports(value_control_ports: MessageDpmOpenPortInputControlPortsElement[]): boolean
    set_hardware_data_ports(value_hardware_data_ports: MessageDpmOpenPortInputHardwareDataPortsElement[]): boolean
    set_software_data_ports(value_software_data_ports: MessageDpmOpenPortInputSoftwareDataPortsElement[]): boolean
    unref(): void
    static name: string
    static new(): MessageDpmOpenPortInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDpmOpenPortInput
}
class MessageDpmOpenPortInputControlPortsElement {
    /* Fields of Qmi-1.0.Qmi.MessageDpmOpenPortInputControlPortsElement */
    port_name: string
    endpoint_type: DataEndpointType
    interface_number: number
    static name: string
}
class MessageDpmOpenPortInputHardwareDataPortsElement {
    /* Fields of Qmi-1.0.Qmi.MessageDpmOpenPortInputHardwareDataPortsElement */
    endpoint_type: DataEndpointType
    interface_number: number
    rx_endpoint_number: number
    tx_endpoint_number: number
    static name: string
}
class MessageDpmOpenPortInputSoftwareDataPortsElement {
    /* Fields of Qmi-1.0.Qmi.MessageDpmOpenPortInputSoftwareDataPortsElement */
    endpoint_type: DataEndpointType
    interface_number: number
    port_name: string
    static name: string
}
class MessageDpmOpenPortOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDpmOpenPortOutput */
    get_result(): boolean
    ref(): MessageDpmOpenPortOutput
    unref(): void
    static name: string
}
class MessageDsdGetApnInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessageDsdGetApnInfoInput */
    get_apn_type(): [ /* returnType */ boolean, /* value_apn_type */ DsdApnType | null ]
    ref(): MessageDsdGetApnInfoInput
    set_apn_type(value_apn_type: DsdApnType): boolean
    unref(): void
    static name: string
    static new(): MessageDsdGetApnInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDsdGetApnInfoInput
}
class MessageDsdGetApnInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDsdGetApnInfoOutput */
    get_apn_name(): [ /* returnType */ boolean, /* value_apn_name */ string | null ]
    get_result(): boolean
    ref(): MessageDsdGetApnInfoOutput
    unref(): void
    static name: string
}
class MessageDsdSetApnTypeInput {
    /* Methods of Qmi-1.0.Qmi.MessageDsdSetApnTypeInput */
    get_apn_type(): [ /* returnType */ boolean, /* value_apn_type_name */ string | null, /* value_apn_type_type */ DsdApnTypePreference | null ]
    get_apn_type_preference_mask(): [ /* returnType */ boolean, /* value_apn_type_preference_mask */ DsdApnTypePreference | null ]
    ref(): MessageDsdSetApnTypeInput
    set_apn_type(value_apn_type_name: string, value_apn_type_type: DsdApnTypePreference): boolean
    set_apn_type_preference_mask(value_apn_type_preference_mask: DsdApnTypePreference): boolean
    unref(): void
    static name: string
    static new(): MessageDsdSetApnTypeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageDsdSetApnTypeInput
}
class MessageDsdSetApnTypeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageDsdSetApnTypeOutput */
    get_result(): boolean
    ref(): MessageDsdSetApnTypeOutput
    unref(): void
    static name: string
}
class MessageGasDmsGetFirmwareListInput {
    /* Methods of Qmi-1.0.Qmi.MessageGasDmsGetFirmwareListInput */
    get_mode(): [ /* returnType */ boolean, /* value_mode */ GasFirmwareListingMode | null ]
    get_name(): [ /* returnType */ boolean, /* value_name */ string | null ]
    get_slot_index(): [ /* returnType */ boolean, /* value_slot_index */ number | null ]
    get_version(): [ /* returnType */ boolean, /* value_version */ string | null ]
    ref(): MessageGasDmsGetFirmwareListInput
    set_mode(value_mode: GasFirmwareListingMode): boolean
    set_name(value_name: string): boolean
    set_slot_index(value_slot_index: number): boolean
    set_version(value_version: string): boolean
    unref(): void
    static name: string
    static new(): MessageGasDmsGetFirmwareListInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageGasDmsGetFirmwareListInput
}
class MessageGasDmsGetFirmwareListOutput {
    /* Methods of Qmi-1.0.Qmi.MessageGasDmsGetFirmwareListOutput */
    get_mode(): [ /* returnType */ boolean, /* value_mode */ GasFirmwareListingMode | null ]
    get_result(): boolean
    get_stored_firmware_1(): [ /* returnType */ boolean, /* value_stored_firmware_1_index */ number | null, /* value_stored_firmware_1_name */ string | null, /* value_stored_firmware_1_version */ string | null, /* value_stored_firmware_1_pri_revision */ string | null ]
    get_stored_firmware_2(): [ /* returnType */ boolean, /* value_stored_firmware_2_index */ number | null, /* value_stored_firmware_2_name */ string | null, /* value_stored_firmware_2_version */ string | null, /* value_stored_firmware_2_pri_revision */ string | null ]
    get_stored_firmware_3(): [ /* returnType */ boolean, /* value_stored_firmware_3_index */ number | null, /* value_stored_firmware_3_name */ string | null, /* value_stored_firmware_3_version */ string | null, /* value_stored_firmware_3_pri_revision */ string | null ]
    get_stored_firmware_4(): [ /* returnType */ boolean, /* value_stored_firmware_4_index */ number | null, /* value_stored_firmware_4_name */ string | null, /* value_stored_firmware_4_version */ string | null, /* value_stored_firmware_4_pri_revision */ string | null ]
    ref(): MessageGasDmsGetFirmwareListOutput
    unref(): void
    static name: string
}
class MessageGasDmsGetUsbCompositionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageGasDmsGetUsbCompositionOutput */
    get_composition_persistence(): [ /* returnType */ boolean, /* value_composition_persistence */ boolean | null ]
    get_endpoint_type(): [ /* returnType */ boolean, /* value_endpoint_type */ GasUsbCompositionEndpointType | null ]
    get_immediate_setting(): [ /* returnType */ boolean, /* value_immediate_setting */ boolean | null ]
    get_reboot_after_setting(): [ /* returnType */ boolean, /* value_reboot_after_setting */ boolean | null ]
    get_result(): boolean
    get_usb_composition(): [ /* returnType */ boolean, /* value_usb_composition */ number | null ]
    ref(): MessageGasDmsGetUsbCompositionOutput
    unref(): void
    static name: string
}
class MessageGasDmsSetActiveFirmwareInput {
    /* Methods of Qmi-1.0.Qmi.MessageGasDmsSetActiveFirmwareInput */
    get_carrier_name(): [ /* returnType */ boolean, /* value_carrier_name */ string | null ]
    get_slot_index(): [ /* returnType */ boolean, /* value_slot_index */ number | null ]
    get_version(): [ /* returnType */ boolean, /* value_version */ string | null ]
    ref(): MessageGasDmsSetActiveFirmwareInput
    set_carrier_name(value_carrier_name: string): boolean
    set_slot_index(value_slot_index: number): boolean
    set_version(value_version: string): boolean
    unref(): void
    static name: string
    static new(): MessageGasDmsSetActiveFirmwareInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageGasDmsSetActiveFirmwareInput
}
class MessageGasDmsSetActiveFirmwareOutput {
    /* Methods of Qmi-1.0.Qmi.MessageGasDmsSetActiveFirmwareOutput */
    get_result(): boolean
    ref(): MessageGasDmsSetActiveFirmwareOutput
    unref(): void
    static name: string
}
class MessageGasDmsSetUsbCompositionInput {
    /* Methods of Qmi-1.0.Qmi.MessageGasDmsSetUsbCompositionInput */
    get_composition_persistence(): [ /* returnType */ boolean, /* value_composition_persistence */ boolean | null ]
    get_endpoint_type(): [ /* returnType */ boolean, /* value_endpoint_type */ GasUsbCompositionEndpointType | null ]
    get_immediate_setting(): [ /* returnType */ boolean, /* value_immediate_setting */ boolean | null ]
    get_reboot_after_setting(): [ /* returnType */ boolean, /* value_reboot_after_setting */ boolean | null ]
    get_usb_composition(): [ /* returnType */ boolean, /* value_usb_composition */ number | null ]
    ref(): MessageGasDmsSetUsbCompositionInput
    set_composition_persistence(value_composition_persistence: boolean): boolean
    set_endpoint_type(value_endpoint_type: GasUsbCompositionEndpointType): boolean
    set_immediate_setting(value_immediate_setting: boolean): boolean
    set_reboot_after_setting(value_reboot_after_setting: boolean): boolean
    set_usb_composition(value_usb_composition: number): boolean
    unref(): void
    static name: string
    static new(): MessageGasDmsSetUsbCompositionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageGasDmsSetUsbCompositionInput
}
class MessageGasDmsSetUsbCompositionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageGasDmsSetUsbCompositionOutput */
    get_result(): boolean
    ref(): MessageGasDmsSetUsbCompositionOutput
    unref(): void
    static name: string
}
class MessageGmsTestGetValueOutput {
    /* Methods of Qmi-1.0.Qmi.MessageGmsTestGetValueOutput */
    get_result(): boolean
    get_test_mandatory_value(): [ /* returnType */ boolean, /* value_test_mandatory_value */ number | null ]
    get_test_optional_value(): [ /* returnType */ boolean, /* value_test_optional_value */ number | null ]
    ref(): MessageGmsTestGetValueOutput
    unref(): void
    static name: string
}
class MessageGmsTestSetValueInput {
    /* Methods of Qmi-1.0.Qmi.MessageGmsTestSetValueInput */
    get_test_mandatory_value(): [ /* returnType */ boolean, /* value_test_mandatory_value */ number | null ]
    get_test_optional_value(): [ /* returnType */ boolean, /* value_test_optional_value */ number | null ]
    ref(): MessageGmsTestSetValueInput
    set_test_mandatory_value(value_test_mandatory_value: number): boolean
    set_test_optional_value(value_test_optional_value: number): boolean
    unref(): void
    static name: string
    static new(): MessageGmsTestSetValueInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageGmsTestSetValueInput
}
class MessageGmsTestSetValueOutput {
    /* Methods of Qmi-1.0.Qmi.MessageGmsTestSetValueOutput */
    get_result(): boolean
    ref(): MessageGmsTestSetValueOutput
    unref(): void
    static name: string
}
class MessageLocDeleteAssistanceDataInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocDeleteAssistanceDataInput */
    get_delete_all(): [ /* returnType */ boolean, /* value_delete_all */ boolean | null ]
    get_delete_cell_database_mask(): [ /* returnType */ boolean, /* value_delete_cell_database_mask */ LocDeleteCellDatabase | null ]
    get_delete_clock_info_mask(): [ /* returnType */ boolean, /* value_delete_clock_info_mask */ LocDeleteClockInfo | null ]
    get_delete_gnss_data_mask(): [ /* returnType */ boolean, /* value_delete_gnss_data_mask */ LocDeleteGnssData | null ]
    get_delete_sv_info(): [ /* returnType */ boolean, /* value_delete_sv_info */ MessageLocDeleteAssistanceDataInputDeleteSvInfoElement[] | null ]
    ref(): MessageLocDeleteAssistanceDataInput
    set_delete_all(value_delete_all: boolean): boolean
    set_delete_cell_database_mask(value_delete_cell_database_mask: LocDeleteCellDatabase): boolean
    set_delete_clock_info_mask(value_delete_clock_info_mask: LocDeleteClockInfo): boolean
    set_delete_gnss_data_mask(value_delete_gnss_data_mask: LocDeleteGnssData): boolean
    set_delete_sv_info(value_delete_sv_info: MessageLocDeleteAssistanceDataInputDeleteSvInfoElement[]): boolean
    unref(): void
    static name: string
    static new(): MessageLocDeleteAssistanceDataInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocDeleteAssistanceDataInput
}
class MessageLocDeleteAssistanceDataInputDeleteSvInfoElement {
    /* Fields of Qmi-1.0.Qmi.MessageLocDeleteAssistanceDataInputDeleteSvInfoElement */
    gnss_sv_id: number
    system: LocSystem
    delete_sv_info_mask: LocDeleteSvInfo
    static name: string
}
class MessageLocDeleteAssistanceDataOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocDeleteAssistanceDataOutput */
    get_result(): boolean
    ref(): MessageLocDeleteAssistanceDataOutput
    unref(): void
    static name: string
}
class MessageLocGetEngineLockOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocGetEngineLockOutput */
    get_result(): boolean
    ref(): MessageLocGetEngineLockOutput
    unref(): void
    static name: string
}
class MessageLocGetNmeaTypesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocGetNmeaTypesOutput */
    get_result(): boolean
    ref(): MessageLocGetNmeaTypesOutput
    unref(): void
    static name: string
}
class MessageLocGetOperationModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocGetOperationModeOutput */
    get_result(): boolean
    ref(): MessageLocGetOperationModeOutput
    unref(): void
    static name: string
}
class MessageLocGetPredictedOrbitsDataSourceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocGetPredictedOrbitsDataSourceOutput */
    get_result(): boolean
    ref(): MessageLocGetPredictedOrbitsDataSourceOutput
    unref(): void
    static name: string
}
class MessageLocGetServerInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocGetServerInput */
    get_server_address_type(): [ /* returnType */ boolean, /* value_server_address_type */ LocServerAddressType | null ]
    get_server_type(): [ /* returnType */ boolean, /* value_server_type */ LocServerType | null ]
    ref(): MessageLocGetServerInput
    set_server_address_type(value_server_address_type: LocServerAddressType): boolean
    set_server_type(value_server_type: LocServerType): boolean
    unref(): void
    static name: string
    static new(): MessageLocGetServerInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocGetServerInput
}
class MessageLocGetServerOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocGetServerOutput */
    get_result(): boolean
    ref(): MessageLocGetServerOutput
    unref(): void
    static name: string
}
class MessageLocInjectPredictedOrbitsDataInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocInjectPredictedOrbitsDataInput */
    get_format_type(): [ /* returnType */ boolean, /* value_format_type */ LocPredictedOrbitsDataFormat | null ]
    get_part_data(): [ /* returnType */ boolean, /* value_part_data */ Uint8Array[] | null ]
    get_part_number(): [ /* returnType */ boolean, /* value_part_number */ number | null ]
    get_total_parts(): [ /* returnType */ boolean, /* value_total_parts */ number | null ]
    get_total_size(): [ /* returnType */ boolean, /* value_total_size */ number | null ]
    ref(): MessageLocInjectPredictedOrbitsDataInput
    set_format_type(value_format_type: LocPredictedOrbitsDataFormat): boolean
    set_part_data(value_part_data: Uint8Array[]): boolean
    set_part_number(value_part_number: number): boolean
    set_total_parts(value_total_parts: number): boolean
    set_total_size(value_total_size: number): boolean
    unref(): void
    static name: string
    static new(): MessageLocInjectPredictedOrbitsDataInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocInjectPredictedOrbitsDataInput
}
class MessageLocInjectPredictedOrbitsDataOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocInjectPredictedOrbitsDataOutput */
    get_result(): boolean
    ref(): MessageLocInjectPredictedOrbitsDataOutput
    unref(): void
    static name: string
}
class MessageLocInjectXtraDataInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocInjectXtraDataInput */
    get_part_data(): [ /* returnType */ boolean, /* value_part_data */ Uint8Array[] | null ]
    get_part_number(): [ /* returnType */ boolean, /* value_part_number */ number | null ]
    get_total_parts(): [ /* returnType */ boolean, /* value_total_parts */ number | null ]
    get_total_size(): [ /* returnType */ boolean, /* value_total_size */ number | null ]
    ref(): MessageLocInjectXtraDataInput
    set_part_data(value_part_data: Uint8Array[]): boolean
    set_part_number(value_part_number: number): boolean
    set_total_parts(value_total_parts: number): boolean
    set_total_size(value_total_size: number): boolean
    unref(): void
    static name: string
    static new(): MessageLocInjectXtraDataInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocInjectXtraDataInput
}
class MessageLocInjectXtraDataOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocInjectXtraDataOutput */
    get_result(): boolean
    ref(): MessageLocInjectXtraDataOutput
    unref(): void
    static name: string
}
class MessageLocRegisterEventsInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocRegisterEventsInput */
    get_event_registration_mask(): [ /* returnType */ boolean, /* value_event_registration_mask */ LocEventRegistrationFlag | null ]
    ref(): MessageLocRegisterEventsInput
    set_event_registration_mask(value_event_registration_mask: LocEventRegistrationFlag): boolean
    unref(): void
    static name: string
    static new(): MessageLocRegisterEventsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocRegisterEventsInput
}
class MessageLocRegisterEventsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocRegisterEventsOutput */
    get_result(): boolean
    ref(): MessageLocRegisterEventsOutput
    unref(): void
    static name: string
}
class MessageLocSetEngineLockInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocSetEngineLockInput */
    get_lock_type(): [ /* returnType */ boolean, /* value_lock_type */ LocLockType | null ]
    ref(): MessageLocSetEngineLockInput
    set_lock_type(value_lock_type: LocLockType): boolean
    unref(): void
    static name: string
    static new(): MessageLocSetEngineLockInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocSetEngineLockInput
}
class MessageLocSetEngineLockOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocSetEngineLockOutput */
    get_result(): boolean
    ref(): MessageLocSetEngineLockOutput
    unref(): void
    static name: string
}
class MessageLocSetNmeaTypesInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocSetNmeaTypesInput */
    get_nmea_types(): [ /* returnType */ boolean, /* value_nmea_types */ LocNmeaType | null ]
    ref(): MessageLocSetNmeaTypesInput
    set_nmea_types(value_nmea_types: LocNmeaType): boolean
    unref(): void
    static name: string
    static new(): MessageLocSetNmeaTypesInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocSetNmeaTypesInput
}
class MessageLocSetNmeaTypesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocSetNmeaTypesOutput */
    get_result(): boolean
    ref(): MessageLocSetNmeaTypesOutput
    unref(): void
    static name: string
}
class MessageLocSetOperationModeInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocSetOperationModeInput */
    get_operation_mode(): [ /* returnType */ boolean, /* value_operation_mode */ LocOperationMode | null ]
    ref(): MessageLocSetOperationModeInput
    set_operation_mode(value_operation_mode: LocOperationMode): boolean
    unref(): void
    static name: string
    static new(): MessageLocSetOperationModeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocSetOperationModeInput
}
class MessageLocSetOperationModeOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocSetOperationModeOutput */
    get_result(): boolean
    ref(): MessageLocSetOperationModeOutput
    unref(): void
    static name: string
}
class MessageLocSetServerInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocSetServerInput */
    get_ipv4(): [ /* returnType */ boolean, /* value_ipv4_ipv4_address */ number | null, /* value_ipv4_ipv4_port */ number | null ]
    get_ipv6(): [ /* returnType */ boolean, /* value_ipv6_ipv6_address */ number[] | null, /* value_ipv6_ipv6_port */ number | null ]
    get_server_type(): [ /* returnType */ boolean, /* value_server_type */ LocServerType | null ]
    get_url(): [ /* returnType */ boolean, /* value_url */ string | null ]
    ref(): MessageLocSetServerInput
    set_ipv4(value_ipv4_ipv4_address: number, value_ipv4_ipv4_port: number): boolean
    set_ipv6(value_ipv6_ipv6_address: number[], value_ipv6_ipv6_port: number): boolean
    set_server_type(value_server_type: LocServerType): boolean
    set_url(value_url: string): boolean
    unref(): void
    static name: string
    static new(): MessageLocSetServerInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocSetServerInput
}
class MessageLocSetServerOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocSetServerOutput */
    get_result(): boolean
    ref(): MessageLocSetServerOutput
    unref(): void
    static name: string
}
class MessageLocStartInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocStartInput */
    get_fix_recurrence_type(): [ /* returnType */ boolean, /* value_fix_recurrence_type */ LocFixRecurrenceType | null ]
    get_intermediate_report_state(): [ /* returnType */ boolean, /* value_intermediate_report_state */ LocIntermediateReportState | null ]
    get_minimum_interval_between_position_reports(): [ /* returnType */ boolean, /* value_minimum_interval_between_position_reports */ number | null ]
    get_session_id(): [ /* returnType */ boolean, /* value_session_id */ number | null ]
    ref(): MessageLocStartInput
    set_fix_recurrence_type(value_fix_recurrence_type: LocFixRecurrenceType): boolean
    set_intermediate_report_state(value_intermediate_report_state: LocIntermediateReportState): boolean
    set_minimum_interval_between_position_reports(value_minimum_interval_between_position_reports: number): boolean
    set_session_id(value_session_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageLocStartInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocStartInput
}
class MessageLocStartOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocStartOutput */
    get_result(): boolean
    ref(): MessageLocStartOutput
    unref(): void
    static name: string
}
class MessageLocStopInput {
    /* Methods of Qmi-1.0.Qmi.MessageLocStopInput */
    get_session_id(): [ /* returnType */ boolean, /* value_session_id */ number | null ]
    ref(): MessageLocStopInput
    set_session_id(value_session_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageLocStopInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageLocStopInput
}
class MessageLocStopOutput {
    /* Methods of Qmi-1.0.Qmi.MessageLocStopOutput */
    get_result(): boolean
    ref(): MessageLocStopOutput
    unref(): void
    static name: string
}
class MessageNasAttachDetachInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasAttachDetachInput */
    get_action(): [ /* returnType */ boolean, /* value_action */ NasPsAttachAction | null ]
    ref(): MessageNasAttachDetachInput
    set_action(value_action: NasPsAttachAction): boolean
    unref(): void
    static name: string
    static new(): MessageNasAttachDetachInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasAttachDetachInput
}
class MessageNasAttachDetachOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasAttachDetachOutput */
    get_result(): boolean
    ref(): MessageNasAttachDetachOutput
    unref(): void
    static name: string
}
class MessageNasConfigSignalInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasConfigSignalInfoInput */
    get_ecio_threshold(): [ /* returnType */ boolean, /* value_ecio_threshold */ number[] | null ]
    get_io_threshold(): [ /* returnType */ boolean, /* value_io_threshold */ number[] | null ]
    get_lte_report(): [ /* returnType */ boolean, /* value_lte_report_rate */ number | null, /* value_lte_report_average_period */ number | null ]
    get_lte_snr_threshold(): [ /* returnType */ boolean, /* value_lte_snr_threshold */ number[] | null ]
    get_rscp_threshold(): [ /* returnType */ boolean, /* value_rscp_threshold */ Uint8Array[] | null ]
    get_rsrp_threshold(): [ /* returnType */ boolean, /* value_rsrp_threshold */ number[] | null ]
    get_rsrq_threshold(): [ /* returnType */ boolean, /* value_rsrq_threshold */ Uint8Array[] | null ]
    get_rssi_threshold(): [ /* returnType */ boolean, /* value_rssi_threshold */ Uint8Array[] | null ]
    get_sinr_threshold(): [ /* returnType */ boolean, /* value_sinr_threshold */ Uint8Array[] | null ]
    ref(): MessageNasConfigSignalInfoInput
    set_ecio_threshold(value_ecio_threshold: number[]): boolean
    set_io_threshold(value_io_threshold: number[]): boolean
    set_lte_report(value_lte_report_rate: number, value_lte_report_average_period: number): boolean
    set_lte_snr_threshold(value_lte_snr_threshold: number[]): boolean
    set_rscp_threshold(value_rscp_threshold: Uint8Array[]): boolean
    set_rsrp_threshold(value_rsrp_threshold: number[]): boolean
    set_rsrq_threshold(value_rsrq_threshold: Uint8Array[]): boolean
    set_rssi_threshold(value_rssi_threshold: Uint8Array[]): boolean
    set_sinr_threshold(value_sinr_threshold: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageNasConfigSignalInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasConfigSignalInfoInput
}
class MessageNasConfigSignalInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasConfigSignalInfoOutput */
    get_result(): boolean
    ref(): MessageNasConfigSignalInfoOutput
    unref(): void
    static name: string
}
class MessageNasForceNetworkSearchOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasForceNetworkSearchOutput */
    get_result(): boolean
    ref(): MessageNasForceNetworkSearchOutput
    unref(): void
    static name: string
}
class MessageNasGetCdmaPositionInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetCdmaPositionInfoOutput */
    get_cdma_position_info(): [ /* returnType */ boolean, /* value_cdma_position_info_ui_in_idle_mode */ number | null, /* value_cdma_position_info_basestations */ MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation[] | null ]
    get_result(): boolean
    ref(): MessageNasGetCdmaPositionInfoOutput
    unref(): void
    static name: string
}
class MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation */
    pilot_type: NasCdmaPilotType
    system_id: number
    network_id: number
    base_station_id: number
    pilot_pn: number
    pilot_strength: number
    latitude: number
    longitude: number
    gps_time_in_milliseconds: number
    static name: string
}
class MessageNasGetCellLocationInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutput */
    get_cdma_info(): [ /* returnType */ boolean, /* value_cdma_info_system_id */ number | null, /* value_cdma_info_network_id */ number | null, /* value_cdma_info_base_station_id */ number | null, /* value_cdma_info_reference_pn */ number | null, /* value_cdma_info_latitude */ number | null, /* value_cdma_info_longitude */ number | null ]
    get_geran_info_v2(): [ /* returnType */ boolean, /* value_geran_info_v2_cell_id */ number | null, /* value_geran_info_v2_plmn */ Uint8Array[] | null, /* value_geran_info_v2_lac */ number | null, /* value_geran_info_v2_geran_absolute_rf_channel_number */ number | null, /* value_geran_info_v2_base_station_identity_code */ number | null, /* value_geran_info_v2_timing_advance */ number | null, /* value_geran_info_v2_rx_level */ number | null, /* value_geran_info_v2_cell */ MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement[] | null ]
    get_interfrequency_lte_info(): [ /* returnType */ boolean, /* value_interfrequency_lte_info_ue_in_idle */ boolean | null, /* value_interfrequency_lte_info_frequency */ MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElement[] | null ]
    get_intrafrequency_lte_info_v2(): [ /* returnType */ boolean, /* value_intrafrequency_lte_info_v2_ue_in_idle */ boolean | null, /* value_intrafrequency_lte_info_v2_plmn */ Uint8Array[] | null, /* value_intrafrequency_lte_info_v2_tracking_area_code */ number | null, /* value_intrafrequency_lte_info_v2_global_cell_id */ number | null, /* value_intrafrequency_lte_info_v2_eutra_absolute_rf_channel_number */ number | null, /* value_intrafrequency_lte_info_v2_serving_cell_id */ number | null, /* value_intrafrequency_lte_info_v2_cell_reselection_priority */ number | null, /* value_intrafrequency_lte_info_v2_s_non_intra_search_threshold */ number | null, /* value_intrafrequency_lte_info_v2_serving_cell_low_threshold */ number | null, /* value_intrafrequency_lte_info_v2_s_intra_search_threshold */ number | null, /* value_intrafrequency_lte_info_v2_cell */ MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement[] | null ]
    get_lte_info_neighboring_gsm(): [ /* returnType */ boolean, /* value_lte_info_neighboring_gsm_ue_in_idle */ boolean | null, /* value_lte_info_neighboring_gsm_frequency */ MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElement[] | null ]
    get_lte_info_neighboring_wcdma(): [ /* returnType */ boolean, /* value_lte_info_neighboring_wcdma_ue_in_idle */ boolean | null, /* value_lte_info_neighboring_wcdma_frequency */ MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElement[] | null ]
    get_lte_info_timing_advance(): [ /* returnType */ boolean, /* value_lte_info_timing_advance */ number | null ]
    get_nr5g_arfcn(): [ /* returnType */ boolean, /* value_nr5g_arfcn */ number | null ]
    get_nr5g_cell_information(): [ /* returnType */ boolean, /* value_nr5g_cell_information_plmn */ Uint8Array[] | null, /* value_nr5g_cell_information_tracking_area_code */ Uint8Array[] | null, /* value_nr5g_cell_information_global_cell_id */ number | null, /* value_nr5g_cell_information_physical_cell_id */ number | null, /* value_nr5g_cell_information_rsrq */ number | null, /* value_nr5g_cell_information_rsrp */ number | null, /* value_nr5g_cell_information_snr */ number | null ]
    get_result(): boolean
    get_umts_cell_id(): [ /* returnType */ boolean, /* value_umts_cell_id */ number | null ]
    get_umts_info_neighboring_lte(): [ /* returnType */ boolean, /* value_umts_info_neighboring_lte_rrc_state */ NasWcdmaRrcState | null, /* value_umts_info_neighboring_lte_frequency */ MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement[] | null ]
    get_umts_info_v2(): [ /* returnType */ boolean, /* value_umts_info_v2_cell_id */ number | null, /* value_umts_info_v2_plmn */ Uint8Array[] | null, /* value_umts_info_v2_lac */ number | null, /* value_umts_info_v2_utra_absolute_rf_channel_number */ number | null, /* value_umts_info_v2_primary_scrambling_code */ number | null, /* value_umts_info_v2_rscp */ number | null, /* value_umts_info_v2_ecio */ number | null, /* value_umts_info_v2_cell */ MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement[] | null, /* value_umts_info_v2_neighboring_geran */ MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement[] | null ]
    ref(): MessageNasGetCellLocationInfoOutput
    unref(): void
    static name: string
}
class MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement */
    cell_id: number
    plmn: object[]
    lac: number
    geran_absolute_rf_channel_number: number
    base_station_identity_code: number
    rx_level: number
    static name: string
}
class MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElement */
    eutra_absolute_rf_channel_number: number
    cell_selection_rx_level_low_threshold: number
    cell_selection_rx_level_high_threshold: number
    cell_reselection_priority: number
    cell: object[]
    static name: string
}
class MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElementCellElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElementCellElement */
    physical_cell_id: number
    rsrq: number
    rsrp: number
    rssi: number
    cell_selection_rx_level: number
    static name: string
}
class MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement */
    physical_cell_id: number
    rsrq: number
    rsrp: number
    rssi: number
    cell_selection_rx_level: number
    static name: string
}
class MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElement */
    cell_reselection_priority: number
    cell_reselection_high_threshold: number
    cell_reselection_low_threshold: number
    ncc_permitted: number
    cell: object[]
    static name: string
}
class MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElementCellElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElementCellElement */
    geran_absolute_rf_channel_number: number
    band_is_1900: boolean
    cell_id_valid: boolean
    base_station_identity_code: number
    rssi: number
    cell_selection_rx_level: number
    static name: string
}
class MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElement */
    utra_absolute_rf_channel_number: number
    cell_reselection_priority: number
    cell_reselection_high_threshold: number
    cell_reselection_low_threshold: number
    cell: object[]
    static name: string
}
class MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElementCellElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElementCellElement */
    primary_scrambling_code: number
    cpich_rscp: number
    cpich_ecno: number
    cell_selection_rx_level: number
    static name: string
}
class MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement */
    eutra_absolute_rf_channel_number: number
    physical_cell_id: number
    rsrp: number
    rsrq: number
    cell_selection_rx_level: number
    is_tdd: boolean
    static name: string
}
class MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement */
    utra_absolute_rf_channel_number: number
    primary_scrambling_code: number
    rscp: number
    ecio: number
    static name: string
}
class MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement */
    geran_absolute_rf_channel_number: number
    network_color_code: number
    base_station_color_code: number
    rssi: number
    static name: string
}
class MessageNasGetDrxOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetDrxOutput */
    get_info(): [ /* returnType */ boolean, /* value_info */ NasDrx | null ]
    get_result(): boolean
    ref(): MessageNasGetDrxOutput
    unref(): void
    static name: string
}
class MessageNasGetHomeNetworkOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetHomeNetworkOutput */
    get_home_network(): [ /* returnType */ boolean, /* value_home_network_mcc */ number | null, /* value_home_network_mnc */ number | null, /* value_home_network_description */ string | null ]
    get_home_network_3gpp2_ext(): [ /* returnType */ boolean, /* value_home_network_3gpp2_ext_mcc */ number | null, /* value_home_network_3gpp2_ext_mnc */ number | null, /* value_home_network_3gpp2_ext_display_description */ NasNetworkDescriptionDisplay | null, /* value_home_network_3gpp2_ext_description_encoding */ NasNetworkDescriptionEncoding | null, /* value_home_network_3gpp2_ext_description */ Uint8Array[] | null ]
    get_home_network_3gpp_mnc(): [ /* returnType */ boolean, /* value_home_network_3gpp_mnc_is_3gpp */ boolean | null, /* value_home_network_3gpp_mnc_includes_pcs_digit */ boolean | null ]
    get_home_system_id(): [ /* returnType */ boolean, /* value_home_system_id_sid */ number | null, /* value_home_system_id_nid */ number | null ]
    get_network_name_source(): [ /* returnType */ boolean, /* value_network_name_source */ NasNetworkNameSource | null ]
    get_result(): boolean
    ref(): MessageNasGetHomeNetworkOutput
    unref(): void
    static name: string
}
class MessageNasGetLteCphyCaInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetLteCphyCaInfoOutput */
    get_dl_bandwidth(): [ /* returnType */ boolean, /* value_dl_bandwidth */ NasDLBandwidth | null ]
    get_phy_ca_agg_pcell_info(): [ /* returnType */ boolean, /* value_phy_ca_agg_pcell_info_physical_cell_id */ number | null, /* value_phy_ca_agg_pcell_info_rx_channel */ number | null, /* value_phy_ca_agg_pcell_info_dl_bandwidth */ NasDLBandwidth | null, /* value_phy_ca_agg_pcell_info_lte_band */ NasActiveBand | null ]
    get_phy_ca_agg_scell_info(): [ /* returnType */ boolean, /* value_phy_ca_agg_scell_info_physical_cell_id */ number | null, /* value_phy_ca_agg_scell_info_rx_channel */ number | null, /* value_phy_ca_agg_scell_info_dl_bandwidth */ NasDLBandwidth | null, /* value_phy_ca_agg_scell_info_lte_band */ NasActiveBand | null, /* value_phy_ca_agg_scell_info_state */ NasScellState | null ]
    get_phy_ca_agg_secondary_cells(): [ /* returnType */ boolean, /* value_phy_ca_agg_secondary_cells */ MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc[] | null ]
    get_result(): boolean
    get_scell_index(): [ /* returnType */ boolean, /* value_scell_index */ number | null ]
    ref(): MessageNasGetLteCphyCaInfoOutput
    unref(): void
    static name: string
}
class MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc */
    physical_cell_id: number
    rx_channel: number
    dl_bandwidth: NasDLBandwidth
    lte_band: NasActiveBand
    state: NasScellState
    cell_index: number
    static name: string
}
class MessageNasGetOperatorNameOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetOperatorNameOutput */
    get_nitz_information(): [ /* returnType */ boolean, /* value_nitz_information_name_encoding */ NasPlmnEncodingScheme | null, /* value_nitz_information_short_country_initials */ NasPlmnNameCountryInitials | null, /* value_nitz_information_long_name_spare_bits */ NasPlmnNameSpareBits | null, /* value_nitz_information_short_name_spare_bits */ NasPlmnNameSpareBits | null, /* value_nitz_information_long_name */ Uint8Array[] | null, /* value_nitz_information_short_name */ Uint8Array[] | null ]
    get_operator_plmn_list(): [ /* returnType */ boolean, /* value_operator_plmn_list */ MessageNasGetOperatorNameOutputOperatorPlmnListElement[] | null ]
    get_operator_plmn_name(): [ /* returnType */ boolean, /* value_operator_plmn_name */ MessageNasGetOperatorNameOutputOperatorPlmnNameElement[] | null ]
    get_operator_string_name(): [ /* returnType */ boolean, /* value_operator_string_name */ string | null ]
    get_result(): boolean
    get_service_provider_name(): [ /* returnType */ boolean, /* value_service_provider_name_name_display_condition */ NasNetworkNameDisplayCondition | null, /* value_service_provider_name_name */ string | null ]
    ref(): MessageNasGetOperatorNameOutput
    unref(): void
    static name: string
}
class MessageNasGetOperatorNameOutputOperatorPlmnListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetOperatorNameOutputOperatorPlmnListElement */
    mcc: string
    mnc: string
    lac1: number
    lac2: number
    plmn_name_record_identifier: number
    static name: string
}
class MessageNasGetOperatorNameOutputOperatorPlmnNameElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetOperatorNameOutputOperatorPlmnNameElement */
    name_encoding: NasPlmnEncodingScheme
    short_country_initials: NasPlmnNameCountryInitials
    long_name_spare_bits: NasPlmnNameSpareBits
    short_name_spare_bits: NasPlmnNameSpareBits
    long_name: object[]
    short_name: object[]
    static name: string
}
class MessageNasGetPlmnNameInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetPlmnNameInput */
    get_always_send_plmn_name(): [ /* returnType */ boolean, /* value_always_send_plmn_name */ boolean | null ]
    get_csg_id(): [ /* returnType */ boolean, /* value_csg_id */ number | null ]
    get_mnc_pcs_digit_include_status(): [ /* returnType */ boolean, /* value_mnc_pcs_digit_include_status */ boolean | null ]
    get_plmn(): [ /* returnType */ boolean, /* value_plmn_mcc */ number | null, /* value_plmn_mnc */ number | null ]
    get_radio_access_technology(): [ /* returnType */ boolean, /* value_radio_access_technology */ NasRadioInterface | null ]
    get_send_all_information(): [ /* returnType */ boolean, /* value_send_all_information */ boolean | null ]
    get_suppress_sim_error(): [ /* returnType */ boolean, /* value_suppress_sim_error */ boolean | null ]
    get_use_static_table_only(): [ /* returnType */ boolean, /* value_use_static_table_only */ boolean | null ]
    ref(): MessageNasGetPlmnNameInput
    set_always_send_plmn_name(value_always_send_plmn_name: boolean): boolean
    set_csg_id(value_csg_id: number): boolean
    set_mnc_pcs_digit_include_status(value_mnc_pcs_digit_include_status: boolean): boolean
    set_plmn(value_plmn_mcc: number, value_plmn_mnc: number): boolean
    set_radio_access_technology(value_radio_access_technology: NasRadioInterface): boolean
    set_send_all_information(value_send_all_information: boolean): boolean
    set_suppress_sim_error(value_suppress_sim_error: boolean): boolean
    set_use_static_table_only(value_use_static_table_only: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageNasGetPlmnNameInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasGetPlmnNameInput
}
class MessageNasGetPlmnNameOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetPlmnNameOutput */
    get_3gpp_eons_plmn_name(): [ /* returnType */ boolean, /* value_3gpp_eons_plmn_name_service_provider_name_encoding */ NasNetworkDescriptionEncoding | null, /* value_3gpp_eons_plmn_name_service_provider_name */ Uint8Array[] | null, /* value_3gpp_eons_plmn_name_short_name_encoding */ NasNetworkDescriptionEncoding | null, /* value_3gpp_eons_plmn_name_short_name_country_initials */ NasPlmnNameCountryInitials | null, /* value_3gpp_eons_plmn_name_short_name_spare_bits */ NasPlmnNameSpareBits | null, /* value_3gpp_eons_plmn_name_short_name */ Uint8Array[] | null, /* value_3gpp_eons_plmn_name_long_name_encoding */ NasNetworkDescriptionEncoding | null, /* value_3gpp_eons_plmn_name_long_name_country_initials */ NasPlmnNameCountryInitials | null, /* value_3gpp_eons_plmn_name_long_name_spare_bits */ NasPlmnNameSpareBits | null, /* value_3gpp_eons_plmn_name_long_name */ Uint8Array[] | null ]
    get_additional_information(): [ /* returnType */ boolean, /* value_additional_information */ number[] | null ]
    get_display_bit_information(): [ /* returnType */ boolean, /* value_display_bit_information_service_provider_name_set */ NasBoolean | null, /* value_display_bit_information_plmn_name_set */ NasBoolean | null ]
    get_network_information(): [ /* returnType */ boolean, /* value_network_information */ NasBoolean | null ]
    get_network_name_source(): [ /* returnType */ boolean, /* value_network_name_source */ NasNetworkNameSource | null ]
    get_plmn_name_with_language_id(): [ /* returnType */ boolean, /* value_plmn_name_with_language_id */ MessageNasGetPlmnNameOutputPlmnNameWithLanguageIdElement[] | null ]
    get_result(): boolean
    ref(): MessageNasGetPlmnNameOutput
    unref(): void
    static name: string
}
class MessageNasGetPlmnNameOutputPlmnNameWithLanguageIdElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetPlmnNameOutputPlmnNameWithLanguageIdElement */
    long_name: object[]
    short_name: object[]
    language_id: NasPlmnLanguageId
    static name: string
}
class MessageNasGetPreferredNetworksOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetPreferredNetworksOutput */
    get_mnc_pcs_digit_include_status(): [ /* returnType */ boolean, /* value_mnc_pcs_digit_include_status */ MessageNasGetPreferredNetworksOutputMncPcsDigitIncludeStatusElement[] | null ]
    get_preferred_networks(): [ /* returnType */ boolean, /* value_preferred_networks */ MessageNasGetPreferredNetworksOutputPreferredNetworksElement[] | null ]
    get_result(): boolean
    ref(): MessageNasGetPreferredNetworksOutput
    unref(): void
    static name: string
}
class MessageNasGetPreferredNetworksOutputMncPcsDigitIncludeStatusElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetPreferredNetworksOutputMncPcsDigitIncludeStatusElement */
    mcc: number
    mnc: number
    includes_pcs_digit: boolean
    static name: string
}
class MessageNasGetPreferredNetworksOutputPreferredNetworksElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetPreferredNetworksOutputPreferredNetworksElement */
    mcc: number
    mnc: number
    radio_access_technology: NasPlmnAccessTechnologyIdentifier
    static name: string
}
class MessageNasGetRfBandInformationOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetRfBandInformationOutput */
    get_bandwidth_list(): [ /* returnType */ boolean, /* value_bandwidth_list */ MessageNasGetRfBandInformationOutputBandwidthListElement[] | null ]
    get_extended_list(): [ /* returnType */ boolean, /* value_extended_list */ MessageNasGetRfBandInformationOutputExtendedListElement[] | null ]
    get_list(): [ /* returnType */ boolean, /* value_list */ MessageNasGetRfBandInformationOutputListElement[] | null ]
    get_result(): boolean
    ref(): MessageNasGetRfBandInformationOutput
    unref(): void
    static name: string
}
class MessageNasGetRfBandInformationOutputBandwidthListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetRfBandInformationOutputBandwidthListElement */
    radio_interface: NasRadioInterface
    bandwidth: NasDLBandwidth
    static name: string
}
class MessageNasGetRfBandInformationOutputExtendedListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetRfBandInformationOutputExtendedListElement */
    radio_interface: NasRadioInterface
    active_band_class: NasActiveBand
    active_channel: number
    static name: string
}
class MessageNasGetRfBandInformationOutputListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetRfBandInformationOutputListElement */
    radio_interface: NasRadioInterface
    active_band_class: NasActiveBand
    active_channel: number
    static name: string
}
class MessageNasGetServingSystemOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetServingSystemOutput */
    get_call_barring_status(): [ /* returnType */ boolean, /* value_call_barring_status_cs_status */ NasCallBarringStatus | null, /* value_call_barring_status_ps_status */ NasCallBarringStatus | null ]
    get_cdma_base_station_info(): [ /* returnType */ boolean, /* value_cdma_base_station_info_base_station_id */ number | null, /* value_cdma_base_station_info_base_station_latitude */ number | null, /* value_cdma_base_station_info_base_station_longitude */ number | null ]
    get_cdma_p_rev(): [ /* returnType */ boolean, /* value_cdma_p_rev */ number | null ]
    get_cdma_system_id(): [ /* returnType */ boolean, /* value_cdma_system_id_sid */ number | null, /* value_cdma_system_id_nid */ number | null ]
    get_cdma_system_info(): [ /* returnType */ boolean, /* value_cdma_system_info_mcc */ number | null, /* value_cdma_system_info_imsi_11_12 */ number | null ]
    get_cid_3gpp(): [ /* returnType */ boolean, /* value_cid_3gpp */ number | null ]
    get_concurrent_service_info_3gpp2(): [ /* returnType */ boolean, /* value_concurrent_service_info_3gpp2 */ boolean | null ]
    get_current_plmn(): [ /* returnType */ boolean, /* value_current_plmn_mcc */ number | null, /* value_current_plmn_mnc */ number | null, /* value_current_plmn_description */ string | null ]
    get_data_service_capability(): [ /* returnType */ boolean, /* value_data_service_capability */ NasDataCapability[] | null ]
    get_daylight_saving_time_adjustment_3gpp(): [ /* returnType */ boolean, /* value_daylight_saving_time_adjustment_3gpp */ number | null ]
    get_default_roaming_indicator(): [ /* returnType */ boolean, /* value_default_roaming_indicator */ NasRoamingIndicatorStatus | null ]
    get_detailed_service_status(): [ /* returnType */ boolean, /* value_detailed_service_status_status */ NasServiceStatus | null, /* value_detailed_service_status_capability */ NasNetworkServiceDomain | null, /* value_detailed_service_status_hdr_status */ NasServiceStatus | null, /* value_detailed_service_status_hdr_hybrid */ boolean | null, /* value_detailed_service_status_forbidden */ boolean | null ]
    get_dtm_support(): [ /* returnType */ boolean, /* value_dtm_support */ boolean | null ]
    get_hdr_personality(): [ /* returnType */ boolean, /* value_hdr_personality */ NasHdrPersonality | null ]
    get_lac_3gpp(): [ /* returnType */ boolean, /* value_lac_3gpp */ number | null ]
    get_lte_tac(): [ /* returnType */ boolean, /* value_lte_tac */ number | null ]
    get_mnc_pcs_digit_include_status(): [ /* returnType */ boolean, /* value_mnc_pcs_digit_include_status_mcc */ number | null, /* value_mnc_pcs_digit_include_status_mnc */ number | null, /* value_mnc_pcs_digit_include_status_includes_pcs_digit */ boolean | null ]
    get_network_name_source(): [ /* returnType */ boolean, /* value_network_name_source */ NasNetworkNameSource | null ]
    get_prl_indicator_3gpp2(): [ /* returnType */ boolean, /* value_prl_indicator_3gpp2 */ boolean | null ]
    get_result(): boolean
    get_roaming_indicator(): [ /* returnType */ boolean, /* value_roaming_indicator */ NasRoamingIndicatorStatus | null ]
    get_roaming_indicator_list(): [ /* returnType */ boolean, /* value_roaming_indicator_list */ MessageNasGetServingSystemOutputRoamingIndicatorListElement[] | null ]
    get_serving_system(): [ /* returnType */ boolean, /* value_serving_system_registration_state */ NasRegistrationState | null, /* value_serving_system_cs_attach_state */ NasAttachState | null, /* value_serving_system_ps_attach_state */ NasAttachState | null, /* value_serving_system_selected_network */ NasNetworkType | null, /* value_serving_system_radio_interfaces */ NasRadioInterface[] | null ]
    get_time_zone_3gpp(): [ /* returnType */ boolean, /* value_time_zone_3gpp */ number | null ]
    get_time_zone_3gpp2(): [ /* returnType */ boolean, /* value_time_zone_3gpp2_leap_seconds */ number | null, /* value_time_zone_3gpp2_local_time_offset */ number | null, /* value_time_zone_3gpp2_daylight_saving_time */ boolean | null ]
    get_umts_primary_scrambling_code(): [ /* returnType */ boolean, /* value_umts_primary_scrambling_code */ number | null ]
    ref(): MessageNasGetServingSystemOutput
    unref(): void
    static name: string
}
class MessageNasGetServingSystemOutputRoamingIndicatorListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetServingSystemOutputRoamingIndicatorListElement */
    radio_interface: NasRadioInterface
    roaming_indicator: NasRoamingIndicatorStatus
    static name: string
}
class MessageNasGetSignalInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetSignalInfoOutput */
    get_5g_signal_strength(): [ /* returnType */ boolean, /* value_5g_signal_strength_rsrp */ number | null, /* value_5g_signal_strength_snr */ number | null ]
    get_5g_signal_strength_extended(): [ /* returnType */ boolean, /* value_5g_signal_strength_extended */ number | null ]
    get_cdma_signal_strength(): [ /* returnType */ boolean, /* value_cdma_signal_strength_rssi */ number | null, /* value_cdma_signal_strength_ecio */ number | null ]
    get_gsm_signal_strength(): [ /* returnType */ boolean, /* value_gsm_signal_strength */ number | null ]
    get_hdr_signal_strength(): [ /* returnType */ boolean, /* value_hdr_signal_strength_rssi */ number | null, /* value_hdr_signal_strength_ecio */ number | null, /* value_hdr_signal_strength_sinr */ NasEvdoSinrLevel | null, /* value_hdr_signal_strength_io */ number | null ]
    get_lte_signal_strength(): [ /* returnType */ boolean, /* value_lte_signal_strength_rssi */ number | null, /* value_lte_signal_strength_rsrq */ number | null, /* value_lte_signal_strength_rsrp */ number | null, /* value_lte_signal_strength_snr */ number | null ]
    get_result(): boolean
    get_tdma_signal_strength(): [ /* returnType */ boolean, /* value_tdma_signal_strength */ number | null ]
    get_tdma_signal_strength_extended(): [ /* returnType */ boolean, /* value_tdma_signal_strength_extended_rssi */ number | null, /* value_tdma_signal_strength_extended_rscp */ number | null, /* value_tdma_signal_strength_extended_ecio */ number | null, /* value_tdma_signal_strength_extended_sinr */ number | null ]
    get_wcdma_signal_strength(): [ /* returnType */ boolean, /* value_wcdma_signal_strength_rssi */ number | null, /* value_wcdma_signal_strength_ecio */ number | null ]
    ref(): MessageNasGetSignalInfoOutput
    unref(): void
    static name: string
}
class MessageNasGetSignalStrengthInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetSignalStrengthInput */
    get_request_mask(): [ /* returnType */ boolean, /* value_request_mask */ NasSignalStrengthRequest | null ]
    ref(): MessageNasGetSignalStrengthInput
    set_request_mask(value_request_mask: NasSignalStrengthRequest): boolean
    unref(): void
    static name: string
    static new(): MessageNasGetSignalStrengthInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasGetSignalStrengthInput
}
class MessageNasGetSignalStrengthOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetSignalStrengthOutput */
    get_ecio_list(): [ /* returnType */ boolean, /* value_ecio_list */ MessageNasGetSignalStrengthOutputEcioListElement[] | null ]
    get_error_rate_list(): [ /* returnType */ boolean, /* value_error_rate_list */ MessageNasGetSignalStrengthOutputErrorRateListElement[] | null ]
    get_io(): [ /* returnType */ boolean, /* value_io */ number | null ]
    get_lte_rsrp(): [ /* returnType */ boolean, /* value_lte_rsrp */ number | null ]
    get_lte_snr(): [ /* returnType */ boolean, /* value_lte_snr */ number | null ]
    get_result(): boolean
    get_rsrq(): [ /* returnType */ boolean, /* value_rsrq_rsrq */ number | null, /* value_rsrq_radio_interface */ NasRadioInterface | null ]
    get_rssi_list(): [ /* returnType */ boolean, /* value_rssi_list */ MessageNasGetSignalStrengthOutputRssiListElement[] | null ]
    get_signal_strength(): [ /* returnType */ boolean, /* value_signal_strength_strength */ number | null, /* value_signal_strength_radio_interface */ NasRadioInterface | null ]
    get_sinr(): [ /* returnType */ boolean, /* value_sinr */ NasEvdoSinrLevel | null ]
    get_strength_list(): [ /* returnType */ boolean, /* value_strength_list */ MessageNasGetSignalStrengthOutputStrengthListElement[] | null ]
    ref(): MessageNasGetSignalStrengthOutput
    unref(): void
    static name: string
}
class MessageNasGetSignalStrengthOutputEcioListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetSignalStrengthOutputEcioListElement */
    ecio: number
    radio_interface: NasRadioInterface
    static name: string
}
class MessageNasGetSignalStrengthOutputErrorRateListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetSignalStrengthOutputErrorRateListElement */
    rate: number
    radio_interface: NasRadioInterface
    static name: string
}
class MessageNasGetSignalStrengthOutputRssiListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetSignalStrengthOutputRssiListElement */
    rssi: number
    radio_interface: NasRadioInterface
    static name: string
}
class MessageNasGetSignalStrengthOutputStrengthListElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasGetSignalStrengthOutputStrengthListElement */
    strength: number
    radio_interface: NasRadioInterface
    static name: string
}
class MessageNasGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetSupportedMessagesOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ Uint8Array[] | null ]
    get_result(): boolean
    ref(): MessageNasGetSupportedMessagesOutput
    unref(): void
    static name: string
}
class MessageNasGetSystemInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetSystemInfoOutput */
    get_additional_cdma_system_info(): [ /* returnType */ boolean, /* value_additional_cdma_system_info_geo_system_index */ number | null, /* value_additional_cdma_system_info_registration_period */ number | null ]
    get_additional_gsm_system_info(): [ /* returnType */ boolean, /* value_additional_gsm_system_info_geo_system_index */ number | null, /* value_additional_gsm_system_info_cell_broadcast_support */ NasCellBroadcastCapability | null ]
    get_additional_hdr_system_info(): [ /* returnType */ boolean, /* value_additional_hdr_system_info_geo_system_index */ number | null ]
    get_additional_lte_system_info(): [ /* returnType */ boolean, /* value_additional_lte_system_info_geo_system_index */ number | null ]
    get_additional_wcdma_system_info(): [ /* returnType */ boolean, /* value_additional_wcdma_system_info_geo_system_index */ number | null, /* value_additional_wcdma_system_info_cell_broadcast_support */ NasCellBroadcastCapability | null ]
    get_cdma_registration_zone_id(): [ /* returnType */ boolean, /* value_cdma_registration_zone_id */ number | null ]
    get_cdma_resolved_mcc(): [ /* returnType */ boolean, /* value_cdma_resolved_mcc */ number | null ]
    get_cdma_service_status(): [ /* returnType */ boolean, /* value_cdma_service_status_service_status */ NasServiceStatus | null, /* value_cdma_service_status_preferred_data_path */ boolean | null ]
    get_cdma_system_info(): [ /* returnType */ boolean, /* value_cdma_system_info_domain_valid */ boolean | null, /* value_cdma_system_info_domain */ NasNetworkServiceDomain | null, /* value_cdma_system_info_service_capability_valid */ boolean | null, /* value_cdma_system_info_service_capability */ NasNetworkServiceDomain | null, /* value_cdma_system_info_roaming_status_valid */ boolean | null, /* value_cdma_system_info_roaming_status */ NasRoamingStatus | null, /* value_cdma_system_info_forbidden_valid */ boolean | null, /* value_cdma_system_info_forbidden */ boolean | null, /* value_cdma_system_info_prl_match_valid */ boolean | null, /* value_cdma_system_info_prl_match */ boolean | null, /* value_cdma_system_info_p_rev_valid */ boolean | null, /* value_cdma_system_info_p_rev */ number | null, /* value_cdma_system_info_base_station_p_rev_valid */ boolean | null, /* value_cdma_system_info_base_station_p_rev */ number | null, /* value_cdma_system_info_concurrent_service_support_valid */ boolean | null, /* value_cdma_system_info_concurrent_service_support */ boolean | null, /* value_cdma_system_info_cdma_system_id_valid */ boolean | null, /* value_cdma_system_info_sid */ number | null, /* value_cdma_system_info_nid */ number | null, /* value_cdma_system_info_base_station_info_valid */ boolean | null, /* value_cdma_system_info_base_station_id */ number | null, /* value_cdma_system_info_base_station_latitude */ number | null, /* value_cdma_system_info_base_station_longitude */ number | null, /* value_cdma_system_info_packet_zone_valid */ boolean | null, /* value_cdma_system_info_packet_zone */ number | null, /* value_cdma_system_info_network_id_valid */ boolean | null, /* value_cdma_system_info_mcc */ string | null, /* value_cdma_system_info_mnc */ string | null ]
    get_dcnr_restriction_info(): [ /* returnType */ boolean, /* value_dcnr_restriction_info */ boolean | null ]
    get_eutra_with_nr5g_availability(): [ /* returnType */ boolean, /* value_eutra_with_nr5g_availability */ boolean | null ]
    get_gsm_call_barring_status(): [ /* returnType */ boolean, /* value_gsm_call_barring_status_cs_status */ NasCallBarringStatus | null, /* value_gsm_call_barring_status_ps_status */ NasCallBarringStatus | null ]
    get_gsm_cipher_domain(): [ /* returnType */ boolean, /* value_gsm_cipher_domain */ NasNetworkServiceDomain | null ]
    get_gsm_routing_area_code(): [ /* returnType */ boolean, /* value_gsm_routing_area_code */ number | null ]
    get_gsm_service_status(): [ /* returnType */ boolean, /* value_gsm_service_status_service_status */ NasServiceStatus | null, /* value_gsm_service_status_true_service_status */ NasServiceStatus | null, /* value_gsm_service_status_preferred_data_path */ boolean | null ]
    get_gsm_system_info_v2(): [ /* returnType */ boolean, /* value_gsm_system_info_v2_domain_valid */ boolean | null, /* value_gsm_system_info_v2_domain */ NasNetworkServiceDomain | null, /* value_gsm_system_info_v2_service_capability_valid */ boolean | null, /* value_gsm_system_info_v2_service_capability */ NasNetworkServiceDomain | null, /* value_gsm_system_info_v2_roaming_status_valid */ boolean | null, /* value_gsm_system_info_v2_roaming_status */ NasRoamingStatus | null, /* value_gsm_system_info_v2_forbidden_valid */ boolean | null, /* value_gsm_system_info_v2_forbidden */ boolean | null, /* value_gsm_system_info_v2_lac_valid */ boolean | null, /* value_gsm_system_info_v2_lac */ number | null, /* value_gsm_system_info_v2_cid_valid */ boolean | null, /* value_gsm_system_info_v2_cid */ number | null, /* value_gsm_system_info_v2_registration_reject_info_valid */ boolean | null, /* value_gsm_system_info_v2_registration_reject_domain */ NasNetworkServiceDomain | null, /* value_gsm_system_info_v2_registration_reject_cause */ NasRejectCause | null, /* value_gsm_system_info_v2_network_id_valid */ boolean | null, /* value_gsm_system_info_v2_mcc */ string | null, /* value_gsm_system_info_v2_mnc */ string | null, /* value_gsm_system_info_v2_egprs_support_valid */ boolean | null, /* value_gsm_system_info_v2_egprs_support */ boolean | null, /* value_gsm_system_info_v2_dtm_support_valid */ boolean | null, /* value_gsm_system_info_v2_dtm_support */ boolean | null ]
    get_hdr_service_status(): [ /* returnType */ boolean, /* value_hdr_service_status_service_status */ NasServiceStatus | null, /* value_hdr_service_status_preferred_data_path */ boolean | null ]
    get_hdr_system_info(): [ /* returnType */ boolean, /* value_hdr_system_info_domain_valid */ boolean | null, /* value_hdr_system_info_domain */ NasNetworkServiceDomain | null, /* value_hdr_system_info_service_capability_valid */ boolean | null, /* value_hdr_system_info_service_capability */ NasNetworkServiceDomain | null, /* value_hdr_system_info_roaming_status_valid */ boolean | null, /* value_hdr_system_info_roaming_status */ NasRoamingStatus | null, /* value_hdr_system_info_forbidden_valid */ boolean | null, /* value_hdr_system_info_forbidden */ boolean | null, /* value_hdr_system_info_prl_match_valid */ boolean | null, /* value_hdr_system_info_prl_match */ boolean | null, /* value_hdr_system_info_personality_valid */ boolean | null, /* value_hdr_system_info_personality */ NasHdrPersonality | null, /* value_hdr_system_info_protocol_revision_valid */ boolean | null, /* value_hdr_system_info_protocol_revision */ NasHdrProtocolRevision | null, /* value_hdr_system_info_is_856_system_id_valid */ boolean | null, /* value_hdr_system_info_is_856_system_id */ string | null ]
    get_ims_voice_support(): [ /* returnType */ boolean, /* value_ims_voice_support */ boolean | null ]
    get_lte_cell_access_status(): [ /* returnType */ boolean, /* value_lte_cell_access_status */ NasLteCellAccessStatus | null ]
    get_lte_embms_coverage_info_support(): [ /* returnType */ boolean, /* value_lte_embms_coverage_info_support */ boolean | null ]
    get_lte_embms_coverage_info_trace_id(): [ /* returnType */ boolean, /* value_lte_embms_coverage_info_trace_id */ number | null ]
    get_lte_registration_domain(): [ /* returnType */ boolean, /* value_lte_registration_domain */ NasLteRegistrationDomain | null ]
    get_lte_service_status(): [ /* returnType */ boolean, /* value_lte_service_status_service_status */ NasServiceStatus | null, /* value_lte_service_status_true_service_status */ NasServiceStatus | null, /* value_lte_service_status_preferred_data_path */ boolean | null ]
    get_lte_system_info_v2(): [ /* returnType */ boolean, /* value_lte_system_info_v2_domain_valid */ boolean | null, /* value_lte_system_info_v2_domain */ NasNetworkServiceDomain | null, /* value_lte_system_info_v2_service_capability_valid */ boolean | null, /* value_lte_system_info_v2_service_capability */ NasNetworkServiceDomain | null, /* value_lte_system_info_v2_roaming_status_valid */ boolean | null, /* value_lte_system_info_v2_roaming_status */ NasRoamingStatus | null, /* value_lte_system_info_v2_forbidden_valid */ boolean | null, /* value_lte_system_info_v2_forbidden */ boolean | null, /* value_lte_system_info_v2_lac_valid */ boolean | null, /* value_lte_system_info_v2_lac */ number | null, /* value_lte_system_info_v2_cid_valid */ boolean | null, /* value_lte_system_info_v2_cid */ number | null, /* value_lte_system_info_v2_registration_reject_info_valid */ boolean | null, /* value_lte_system_info_v2_registration_reject_domain */ NasNetworkServiceDomain | null, /* value_lte_system_info_v2_registration_reject_cause */ NasRejectCause | null, /* value_lte_system_info_v2_network_id_valid */ boolean | null, /* value_lte_system_info_v2_mcc */ string | null, /* value_lte_system_info_v2_mnc */ string | null, /* value_lte_system_info_v2_tac_valid */ boolean | null, /* value_lte_system_info_v2_tac */ number | null ]
    get_lte_voice_domain(): [ /* returnType */ boolean, /* value_lte_voice_domain */ NasLteVoiceDomain | null ]
    get_lte_voice_support(): [ /* returnType */ boolean, /* value_lte_voice_support */ boolean | null ]
    get_network_selection_registration_restriction(): [ /* returnType */ boolean, /* value_network_selection_registration_restriction */ NasNetworkSelectionRegistrationRestriction | null ]
    get_nr5g_service_status_info(): [ /* returnType */ boolean, /* value_nr5g_service_status_info_service_status */ NasServiceStatus | null, /* value_nr5g_service_status_info_true_service_status */ NasServiceStatus | null, /* value_nr5g_service_status_info_preferred_data_path */ boolean | null ]
    get_nr5g_system_info(): [ /* returnType */ boolean, /* value_nr5g_system_info_domain_valid */ boolean | null, /* value_nr5g_system_info_domain */ NasNetworkServiceDomain | null, /* value_nr5g_system_info_service_capability_valid */ boolean | null, /* value_nr5g_system_info_service_capability */ NasNetworkServiceDomain | null, /* value_nr5g_system_info_roaming_status_valid */ boolean | null, /* value_nr5g_system_info_roaming_status */ NasRoamingStatus | null, /* value_nr5g_system_info_forbidden_valid */ boolean | null, /* value_nr5g_system_info_forbidden */ boolean | null, /* value_nr5g_system_info_lac_valid */ boolean | null, /* value_nr5g_system_info_lac */ number | null, /* value_nr5g_system_info_cid_valid */ boolean | null, /* value_nr5g_system_info_cid */ number | null, /* value_nr5g_system_info_registration_reject_info_valid */ boolean | null, /* value_nr5g_system_info_registration_reject_domain */ NasNetworkServiceDomain | null, /* value_nr5g_system_info_registration_reject_cause */ number | null, /* value_nr5g_system_info_network_id_valid */ boolean | null, /* value_nr5g_system_info_mcc */ string | null, /* value_nr5g_system_info_mnc */ string | null, /* value_nr5g_system_info_tac_valid */ boolean | null, /* value_nr5g_system_info_tac */ number | null ]
    get_nr5g_tracking_area_code(): [ /* returnType */ boolean, /* value_nr5g_tracking_area_code */ Uint8Array[] | null ]
    get_result(): boolean
    get_sim_reject_info(): [ /* returnType */ boolean, /* value_sim_reject_info */ NasSimRejectState | null ]
    get_td_scdma_service_status(): [ /* returnType */ boolean, /* value_td_scdma_service_status_service_status */ NasServiceStatus | null, /* value_td_scdma_service_status_true_service_status */ NasServiceStatus | null, /* value_td_scdma_service_status_preferred_data_path */ boolean | null ]
    get_td_scdma_system_info_v2(): [ /* returnType */ boolean, /* value_td_scdma_system_info_v2_domain_valid */ boolean | null, /* value_td_scdma_system_info_v2_domain */ NasNetworkServiceDomain | null, /* value_td_scdma_system_info_v2_service_capability_valid */ boolean | null, /* value_td_scdma_system_info_v2_service_capability */ NasNetworkServiceDomain | null, /* value_td_scdma_system_info_v2_roaming_status_valid */ boolean | null, /* value_td_scdma_system_info_v2_roaming_status */ NasRoamingStatus | null, /* value_td_scdma_system_info_v2_forbidden_valid */ boolean | null, /* value_td_scdma_system_info_v2_forbidden */ boolean | null, /* value_td_scdma_system_info_v2_lac_valid */ boolean | null, /* value_td_scdma_system_info_v2_lac */ number | null, /* value_td_scdma_system_info_v2_cid_valid */ boolean | null, /* value_td_scdma_system_info_v2_cid */ number | null, /* value_td_scdma_system_info_v2_registration_reject_info_valid */ boolean | null, /* value_td_scdma_system_info_v2_registration_reject_domain */ NasNetworkServiceDomain | null, /* value_td_scdma_system_info_v2_registration_reject_cause */ NasRejectCause | null, /* value_td_scdma_system_info_v2_network_id_valid */ boolean | null, /* value_td_scdma_system_info_v2_mcc */ string | null, /* value_td_scdma_system_info_v2_mnc */ string | null, /* value_td_scdma_system_info_v2_hs_call_status_valid */ boolean | null, /* value_td_scdma_system_info_v2_hs_call_status */ NasWcdmaHsService | null, /* value_td_scdma_system_info_v2_hs_service_valid */ boolean | null, /* value_td_scdma_system_info_v2_hs_service */ NasWcdmaHsService | null, /* value_td_scdma_system_info_v2_cell_parameter_id_valid */ boolean | null, /* value_td_scdma_system_info_v2_cell_parameter_id */ number | null, /* value_td_scdma_system_info_v2_cell_broadcast_support_valid */ boolean | null, /* value_td_scdma_system_info_v2_cell_broadcast_support */ NasCellBroadcastCapability | null, /* value_td_scdma_system_info_v2_cs_call_barring_status_valid */ boolean | null, /* value_td_scdma_system_info_v2_cs_call_barring_status */ NasCallBarringStatus | null, /* value_td_scdma_system_info_v2_ps_call_barring_status_valid */ boolean | null, /* value_td_scdma_system_info_v2_ps_call_barring_status */ NasCallBarringStatus | null, /* value_td_scdma_system_info_v2_cipher_domain_valid */ boolean | null, /* value_td_scdma_system_info_v2_cipher_domain */ NasNetworkServiceDomain | null ]
    get_wcdma_call_barring_status(): [ /* returnType */ boolean, /* value_wcdma_call_barring_status_cs_status */ NasCallBarringStatus | null, /* value_wcdma_call_barring_status_ps_status */ NasCallBarringStatus | null ]
    get_wcdma_cipher_domain(): [ /* returnType */ boolean, /* value_wcdma_cipher_domain */ NasNetworkServiceDomain | null ]
    get_wcdma_routing_area_code(): [ /* returnType */ boolean, /* value_wcdma_routing_area_code */ number | null ]
    get_wcdma_service_status(): [ /* returnType */ boolean, /* value_wcdma_service_status_service_status */ NasServiceStatus | null, /* value_wcdma_service_status_true_service_status */ NasServiceStatus | null, /* value_wcdma_service_status_preferred_data_path */ boolean | null ]
    get_wcdma_system_info_v2(): [ /* returnType */ boolean, /* value_wcdma_system_info_v2_domain_valid */ boolean | null, /* value_wcdma_system_info_v2_domain */ NasNetworkServiceDomain | null, /* value_wcdma_system_info_v2_service_capability_valid */ boolean | null, /* value_wcdma_system_info_v2_service_capability */ NasNetworkServiceDomain | null, /* value_wcdma_system_info_v2_roaming_status_valid */ boolean | null, /* value_wcdma_system_info_v2_roaming_status */ NasRoamingStatus | null, /* value_wcdma_system_info_v2_forbidden_valid */ boolean | null, /* value_wcdma_system_info_v2_forbidden */ boolean | null, /* value_wcdma_system_info_v2_lac_valid */ boolean | null, /* value_wcdma_system_info_v2_lac */ number | null, /* value_wcdma_system_info_v2_cid_valid */ boolean | null, /* value_wcdma_system_info_v2_cid */ number | null, /* value_wcdma_system_info_v2_registration_reject_info_valid */ boolean | null, /* value_wcdma_system_info_v2_registration_reject_domain */ NasNetworkServiceDomain | null, /* value_wcdma_system_info_v2_registration_reject_cause */ NasRejectCause | null, /* value_wcdma_system_info_v2_network_id_valid */ boolean | null, /* value_wcdma_system_info_v2_mcc */ string | null, /* value_wcdma_system_info_v2_mnc */ string | null, /* value_wcdma_system_info_v2_hs_call_status_valid */ boolean | null, /* value_wcdma_system_info_v2_hs_call_status */ NasWcdmaHsService | null, /* value_wcdma_system_info_v2_hs_service_valid */ boolean | null, /* value_wcdma_system_info_v2_hs_service */ NasWcdmaHsService | null, /* value_wcdma_system_info_v2_primary_scrambling_code_valid */ boolean | null, /* value_wcdma_system_info_v2_primary_scrambling_code */ number | null ]
    ref(): MessageNasGetSystemInfoOutput
    unref(): void
    static name: string
}
class MessageNasGetSystemSelectionPreferenceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetSystemSelectionPreferenceOutput */
    get_acquisition_order_preference(): [ /* returnType */ boolean, /* value_acquisition_order_preference */ NasRadioInterface[] | null ]
    get_band_preference(): [ /* returnType */ boolean, /* value_band_preference */ NasBandPreference | null ]
    get_cdma_prl_preference(): [ /* returnType */ boolean, /* value_cdma_prl_preference */ NasCdmaPrlPreference | null ]
    get_disabled_modes(): [ /* returnType */ boolean, /* value_disabled_modes */ NasRatModePreference | null ]
    get_emergency_mode(): [ /* returnType */ boolean, /* value_emergency_mode */ boolean | null ]
    get_extended_lte_band_preference(): [ /* returnType */ boolean, /* value_extended_lte_band_preference_mask_low */ number | null, /* value_extended_lte_band_preference_mask_mid_low */ number | null, /* value_extended_lte_band_preference_mask_mid_high */ number | null, /* value_extended_lte_band_preference_mask_high */ number | null ]
    get_gsm_wcdma_acquisition_order_preference(): [ /* returnType */ boolean, /* value_gsm_wcdma_acquisition_order_preference */ NasGsmWcdmaAcquisitionOrderPreference | null ]
    get_lte_band_preference(): [ /* returnType */ boolean, /* value_lte_band_preference */ NasLteBandPreference | null ]
    get_manual_network_selection(): [ /* returnType */ boolean, /* value_manual_network_selection_mcc */ number | null, /* value_manual_network_selection_mnc */ number | null, /* value_manual_network_selection_includes_pcs_digit */ boolean | null ]
    get_mode_preference(): [ /* returnType */ boolean, /* value_mode_preference */ NasRatModePreference | null ]
    get_network_selection_preference(): [ /* returnType */ boolean, /* value_network_selection_preference */ NasNetworkSelectionPreference | null ]
    get_network_selection_registration_restriction(): [ /* returnType */ boolean, /* value_network_selection_registration_restriction */ NasNetworkSelectionRegistrationRestriction | null ]
    get_nr5g_nsa_band_preference(): [ /* returnType */ boolean, /* value_nr5g_nsa_band_preference_mask_0 */ number | null, /* value_nr5g_nsa_band_preference_mask_1 */ number | null, /* value_nr5g_nsa_band_preference_mask_2 */ number | null, /* value_nr5g_nsa_band_preference_mask_3 */ number | null, /* value_nr5g_nsa_band_preference_mask_4 */ number | null, /* value_nr5g_nsa_band_preference_mask_5 */ number | null, /* value_nr5g_nsa_band_preference_mask_6 */ number | null, /* value_nr5g_nsa_band_preference_mask_7 */ number | null ]
    get_nr5g_sa_band_preference(): [ /* returnType */ boolean, /* value_nr5g_sa_band_preference_mask_0 */ number | null, /* value_nr5g_sa_band_preference_mask_1 */ number | null, /* value_nr5g_sa_band_preference_mask_2 */ number | null, /* value_nr5g_sa_band_preference_mask_3 */ number | null, /* value_nr5g_sa_band_preference_mask_4 */ number | null, /* value_nr5g_sa_band_preference_mask_5 */ number | null, /* value_nr5g_sa_band_preference_mask_6 */ number | null, /* value_nr5g_sa_band_preference_mask_7 */ number | null ]
    get_result(): boolean
    get_roaming_preference(): [ /* returnType */ boolean, /* value_roaming_preference */ NasRoamingPreference | null ]
    get_service_domain_preference(): [ /* returnType */ boolean, /* value_service_domain_preference */ NasServiceDomainPreference | null ]
    get_td_scdma_band_preference(): [ /* returnType */ boolean, /* value_td_scdma_band_preference */ NasTdScdmaBandPreference | null ]
    get_usage_preference(): [ /* returnType */ boolean, /* value_usage_preference */ NasUsagePreference | null ]
    get_voice_domain_preference(): [ /* returnType */ boolean, /* value_voice_domain_preference */ NasVoiceDomainPreference | null ]
    ref(): MessageNasGetSystemSelectionPreferenceOutput
    unref(): void
    static name: string
}
class MessageNasGetTechnologyPreferenceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetTechnologyPreferenceOutput */
    get_active(): [ /* returnType */ boolean, /* value_active_technology_preference */ NasRadioTechnologyPreference | null, /* value_active_technology_preference_duration */ NasPreferenceDuration | null ]
    get_persistent(): [ /* returnType */ boolean, /* value_persistent */ NasRadioTechnologyPreference | null ]
    get_result(): boolean
    ref(): MessageNasGetTechnologyPreferenceOutput
    unref(): void
    static name: string
}
class MessageNasGetTxRxInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetTxRxInfoInput */
    get_radio_interface(): [ /* returnType */ boolean, /* value_radio_interface */ NasRadioInterface | null ]
    ref(): MessageNasGetTxRxInfoInput
    set_radio_interface(value_radio_interface: NasRadioInterface): boolean
    unref(): void
    static name: string
    static new(): MessageNasGetTxRxInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasGetTxRxInfoInput
}
class MessageNasGetTxRxInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasGetTxRxInfoOutput */
    get_result(): boolean
    get_rx_chain_0_info(): [ /* returnType */ boolean, /* value_rx_chain_0_info_is_radio_tuned */ boolean | null, /* value_rx_chain_0_info_rx_power */ number | null, /* value_rx_chain_0_info_ecio */ number | null, /* value_rx_chain_0_info_rscp */ number | null, /* value_rx_chain_0_info_rsrp */ number | null, /* value_rx_chain_0_info_phase */ number | null ]
    get_rx_chain_1_info(): [ /* returnType */ boolean, /* value_rx_chain_1_info_is_radio_tuned */ boolean | null, /* value_rx_chain_1_info_rx_power */ number | null, /* value_rx_chain_1_info_ecio */ number | null, /* value_rx_chain_1_info_rscp */ number | null, /* value_rx_chain_1_info_rsrp */ number | null, /* value_rx_chain_1_info_phase */ number | null ]
    get_rx_chain_2_info(): [ /* returnType */ boolean, /* value_rx_chain_2_info_is_radio_tuned */ boolean | null, /* value_rx_chain_2_info_rx_power */ number | null, /* value_rx_chain_2_info_ecio */ number | null, /* value_rx_chain_2_info_rscp */ number | null, /* value_rx_chain_2_info_rsrp */ number | null, /* value_rx_chain_2_info_phase */ number | null ]
    get_rx_chain_3_info(): [ /* returnType */ boolean, /* value_rx_chain_3_info_is_radio_tuned */ boolean | null, /* value_rx_chain_3_info_rx_power */ number | null, /* value_rx_chain_3_info_ecio */ number | null, /* value_rx_chain_3_info_rscp */ number | null, /* value_rx_chain_3_info_rsrp */ number | null, /* value_rx_chain_3_info_phase */ number | null ]
    get_tx_info(): [ /* returnType */ boolean, /* value_tx_info_is_in_traffic */ boolean | null, /* value_tx_info_tx_power */ number | null ]
    ref(): MessageNasGetTxRxInfoOutput
    unref(): void
    static name: string
}
class MessageNasInitiateNetworkRegisterInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasInitiateNetworkRegisterInput */
    get_action(): [ /* returnType */ boolean, /* value_action */ NasNetworkRegisterType | null ]
    get_change_duration(): [ /* returnType */ boolean, /* value_change_duration */ NasChangeDuration | null ]
    get_manual_registration_info_3gpp(): [ /* returnType */ boolean, /* value_manual_registration_info_3gpp_mcc */ number | null, /* value_manual_registration_info_3gpp_mnc */ number | null, /* value_manual_registration_info_3gpp_radio_interface */ NasRadioInterface | null ]
    get_mnc_pcs_digit_include_status(): [ /* returnType */ boolean, /* value_mnc_pcs_digit_include_status */ boolean | null ]
    ref(): MessageNasInitiateNetworkRegisterInput
    set_action(value_action: NasNetworkRegisterType): boolean
    set_change_duration(value_change_duration: NasChangeDuration): boolean
    set_manual_registration_info_3gpp(value_manual_registration_info_3gpp_mcc: number, value_manual_registration_info_3gpp_mnc: number, value_manual_registration_info_3gpp_radio_interface: NasRadioInterface): boolean
    set_mnc_pcs_digit_include_status(value_mnc_pcs_digit_include_status: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageNasInitiateNetworkRegisterInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasInitiateNetworkRegisterInput
}
class MessageNasInitiateNetworkRegisterOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasInitiateNetworkRegisterOutput */
    get_result(): boolean
    ref(): MessageNasInitiateNetworkRegisterOutput
    unref(): void
    static name: string
}
class MessageNasNetworkScanInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasNetworkScanInput */
    get_network_type(): [ /* returnType */ boolean, /* value_network_type */ NasNetworkScanType | null ]
    ref(): MessageNasNetworkScanInput
    set_network_type(value_network_type: NasNetworkScanType): boolean
    unref(): void
    static name: string
    static new(): MessageNasNetworkScanInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasNetworkScanInput
}
class MessageNasNetworkScanOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasNetworkScanOutput */
    get_mnc_pcs_digit_include_status(): [ /* returnType */ boolean, /* value_mnc_pcs_digit_include_status */ MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement[] | null ]
    get_network_information(): [ /* returnType */ boolean, /* value_network_information */ MessageNasNetworkScanOutputNetworkInformationElement[] | null ]
    get_network_scan_result(): [ /* returnType */ boolean, /* value_network_scan_result */ NasNetworkScanResult | null ]
    get_radio_access_technology(): [ /* returnType */ boolean, /* value_radio_access_technology */ MessageNasNetworkScanOutputRadioAccessTechnologyElement[] | null ]
    get_result(): boolean
    ref(): MessageNasNetworkScanOutput
    unref(): void
    static name: string
}
class MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement */
    mcc: number
    mnc: number
    includes_pcs_digit: boolean
    static name: string
}
class MessageNasNetworkScanOutputNetworkInformationElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasNetworkScanOutputNetworkInformationElement */
    mcc: number
    mnc: number
    network_status: NasNetworkStatus
    description: string
    static name: string
}
class MessageNasNetworkScanOutputRadioAccessTechnologyElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasNetworkScanOutputRadioAccessTechnologyElement */
    mcc: number
    mnc: number
    radio_interface: NasRadioInterface
    static name: string
}
class MessageNasRegisterIndicationsInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasRegisterIndicationsInput */
    get_current_plmn_name(): [ /* returnType */ boolean, /* value_current_plmn_name */ boolean | null ]
    get_ddtm_events(): [ /* returnType */ boolean, /* value_ddtm_events */ boolean | null ]
    get_dual_standby_preference(): [ /* returnType */ boolean, /* value_dual_standby_preference */ boolean | null ]
    get_embms_status(): [ /* returnType */ boolean, /* value_embms_status */ boolean | null ]
    get_error_rate(): [ /* returnType */ boolean, /* value_error_rate */ boolean | null ]
    get_hdr_new_uati_assigned(): [ /* returnType */ boolean, /* value_hdr_new_uati_assigned */ boolean | null ]
    get_hdr_session_closed(): [ /* returnType */ boolean, /* value_hdr_session_closed */ boolean | null ]
    get_managed_roaming(): [ /* returnType */ boolean, /* value_managed_roaming */ boolean | null ]
    get_network_reject_information(): [ /* returnType */ boolean, /* value_network_reject_information_enable_network_reject_indications */ boolean | null, /* value_network_reject_information_supress_system_info_indications */ boolean | null ]
    get_network_time(): [ /* returnType */ boolean, /* value_network_time */ boolean | null ]
    get_rf_band_information(): [ /* returnType */ boolean, /* value_rf_band_information */ boolean | null ]
    get_serving_system_events(): [ /* returnType */ boolean, /* value_serving_system_events */ boolean | null ]
    get_signal_info(): [ /* returnType */ boolean, /* value_signal_info */ boolean | null ]
    get_subscription_info(): [ /* returnType */ boolean, /* value_subscription_info */ boolean | null ]
    get_system_info(): [ /* returnType */ boolean, /* value_system_info */ boolean | null ]
    get_system_selection_preference(): [ /* returnType */ boolean, /* value_system_selection_preference */ boolean | null ]
    ref(): MessageNasRegisterIndicationsInput
    set_current_plmn_name(value_current_plmn_name: boolean): boolean
    set_ddtm_events(value_ddtm_events: boolean): boolean
    set_dual_standby_preference(value_dual_standby_preference: boolean): boolean
    set_embms_status(value_embms_status: boolean): boolean
    set_error_rate(value_error_rate: boolean): boolean
    set_hdr_new_uati_assigned(value_hdr_new_uati_assigned: boolean): boolean
    set_hdr_session_closed(value_hdr_session_closed: boolean): boolean
    set_managed_roaming(value_managed_roaming: boolean): boolean
    set_network_reject_information(value_network_reject_information_enable_network_reject_indications: boolean, value_network_reject_information_supress_system_info_indications: boolean): boolean
    set_network_time(value_network_time: boolean): boolean
    set_rf_band_information(value_rf_band_information: boolean): boolean
    set_serving_system_events(value_serving_system_events: boolean): boolean
    set_signal_info(value_signal_info: boolean): boolean
    set_subscription_info(value_subscription_info: boolean): boolean
    set_system_info(value_system_info: boolean): boolean
    set_system_selection_preference(value_system_selection_preference: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageNasRegisterIndicationsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasRegisterIndicationsInput
}
class MessageNasRegisterIndicationsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasRegisterIndicationsOutput */
    get_result(): boolean
    ref(): MessageNasRegisterIndicationsOutput
    unref(): void
    static name: string
}
class MessageNasResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasResetOutput */
    get_result(): boolean
    ref(): MessageNasResetOutput
    unref(): void
    static name: string
}
class MessageNasSetEventReportInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetEventReportInput */
    get_ecio_indicator(): [ /* returnType */ boolean, /* value_ecio_indicator_report */ boolean | null, /* value_ecio_indicator_ecio_delta */ number | null ]
    get_ecio_threshold(): [ /* returnType */ boolean, /* value_ecio_threshold_report */ boolean | null, /* value_ecio_threshold_thresholds */ number[] | null ]
    get_error_rate_indicator(): [ /* returnType */ boolean, /* value_error_rate_indicator */ boolean | null ]
    get_io_indicator(): [ /* returnType */ boolean, /* value_io_indicator_report */ boolean | null, /* value_io_indicator_io_delta */ number | null ]
    get_lte_rsrp_delta(): [ /* returnType */ boolean, /* value_lte_rsrp_delta_report */ boolean | null, /* value_lte_rsrp_delta_rsrp_delta */ number | null ]
    get_lte_snr_delta(): [ /* returnType */ boolean, /* value_lte_snr_delta_report */ boolean | null, /* value_lte_snr_delta_snr_delta */ number | null ]
    get_registration_reject_reason(): [ /* returnType */ boolean, /* value_registration_reject_reason */ boolean | null ]
    get_rf_band_information(): [ /* returnType */ boolean, /* value_rf_band_information */ boolean | null ]
    get_rssi_indicator(): [ /* returnType */ boolean, /* value_rssi_indicator_report */ boolean | null, /* value_rssi_indicator_rssi_delta */ number | null ]
    get_signal_strength_indicator(): [ /* returnType */ boolean, /* value_signal_strength_indicator_report */ boolean | null, /* value_signal_strength_indicator_thresholds */ Uint8Array[] | null ]
    get_sinr_indicator(): [ /* returnType */ boolean, /* value_sinr_indicator_report */ boolean | null, /* value_sinr_indicator_sinr_delta */ number | null ]
    get_sinr_threshold(): [ /* returnType */ boolean, /* value_sinr_threshold_report */ boolean | null, /* value_sinr_threshold_thresholds */ Uint8Array[] | null ]
    ref(): MessageNasSetEventReportInput
    set_ecio_indicator(value_ecio_indicator_report: boolean, value_ecio_indicator_ecio_delta: number): boolean
    set_ecio_threshold(value_ecio_threshold_report: boolean, value_ecio_threshold_thresholds: number[]): boolean
    set_error_rate_indicator(value_error_rate_indicator: boolean): boolean
    set_io_indicator(value_io_indicator_report: boolean, value_io_indicator_io_delta: number): boolean
    set_lte_rsrp_delta(value_lte_rsrp_delta_report: boolean, value_lte_rsrp_delta_rsrp_delta: number): boolean
    set_lte_snr_delta(value_lte_snr_delta_report: boolean, value_lte_snr_delta_snr_delta: number): boolean
    set_registration_reject_reason(value_registration_reject_reason: boolean): boolean
    set_rf_band_information(value_rf_band_information: boolean): boolean
    set_rssi_indicator(value_rssi_indicator_report: boolean, value_rssi_indicator_rssi_delta: number): boolean
    set_signal_strength_indicator(value_signal_strength_indicator_report: boolean, value_signal_strength_indicator_thresholds: Uint8Array[]): boolean
    set_sinr_indicator(value_sinr_indicator_report: boolean, value_sinr_indicator_sinr_delta: number): boolean
    set_sinr_threshold(value_sinr_threshold_report: boolean, value_sinr_threshold_thresholds: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageNasSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasSetEventReportInput
}
class MessageNasSetEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetEventReportOutput */
    get_result(): boolean
    ref(): MessageNasSetEventReportOutput
    unref(): void
    static name: string
}
class MessageNasSetPreferredNetworksInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetPreferredNetworksInput */
    get_clear_previous_preferred_networks(): [ /* returnType */ boolean, /* value_clear_previous_preferred_networks */ boolean | null ]
    get_mnc_pcs_digit_include_status(): [ /* returnType */ boolean, /* value_mnc_pcs_digit_include_status */ MessageNasSetPreferredNetworksInputMncPcsDigitIncludeStatusElement[] | null ]
    get_preferred_networks(): [ /* returnType */ boolean, /* value_preferred_networks */ MessageNasSetPreferredNetworksInputPreferredNetworksElement[] | null ]
    ref(): MessageNasSetPreferredNetworksInput
    set_clear_previous_preferred_networks(value_clear_previous_preferred_networks: boolean): boolean
    set_mnc_pcs_digit_include_status(value_mnc_pcs_digit_include_status: MessageNasSetPreferredNetworksInputMncPcsDigitIncludeStatusElement[]): boolean
    set_preferred_networks(value_preferred_networks: MessageNasSetPreferredNetworksInputPreferredNetworksElement[]): boolean
    unref(): void
    static name: string
    static new(): MessageNasSetPreferredNetworksInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasSetPreferredNetworksInput
}
class MessageNasSetPreferredNetworksInputMncPcsDigitIncludeStatusElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasSetPreferredNetworksInputMncPcsDigitIncludeStatusElement */
    mcc: number
    mnc: number
    includes_pcs_digit: boolean
    static name: string
}
class MessageNasSetPreferredNetworksInputPreferredNetworksElement {
    /* Fields of Qmi-1.0.Qmi.MessageNasSetPreferredNetworksInputPreferredNetworksElement */
    mcc: number
    mnc: number
    radio_access_technology: NasPlmnAccessTechnologyIdentifier
    static name: string
}
class MessageNasSetPreferredNetworksOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetPreferredNetworksOutput */
    get_result(): boolean
    ref(): MessageNasSetPreferredNetworksOutput
    unref(): void
    static name: string
}
class MessageNasSetSystemSelectionPreferenceInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetSystemSelectionPreferenceInput */
    get_acquisition_order_preference(): [ /* returnType */ boolean, /* value_acquisition_order_preference */ NasRadioInterface[] | null ]
    get_band_preference(): [ /* returnType */ boolean, /* value_band_preference */ NasBandPreference | null ]
    get_cdma_prl_preference(): [ /* returnType */ boolean, /* value_cdma_prl_preference */ NasCdmaPrlPreference | null ]
    get_change_duration(): [ /* returnType */ boolean, /* value_change_duration */ NasChangeDuration | null ]
    get_emergency_mode(): [ /* returnType */ boolean, /* value_emergency_mode */ boolean | null ]
    get_extended_lte_band_preference(): [ /* returnType */ boolean, /* value_extended_lte_band_preference_mask_low */ number | null, /* value_extended_lte_band_preference_mask_mid_low */ number | null, /* value_extended_lte_band_preference_mask_mid_high */ number | null, /* value_extended_lte_band_preference_mask_high */ number | null ]
    get_gsm_wcdma_acquisition_order_preference(): [ /* returnType */ boolean, /* value_gsm_wcdma_acquisition_order_preference */ NasGsmWcdmaAcquisitionOrderPreference | null ]
    get_lte_band_preference(): [ /* returnType */ boolean, /* value_lte_band_preference */ NasLteBandPreference | null ]
    get_mnc_pcs_digit_include_status(): [ /* returnType */ boolean, /* value_mnc_pcs_digit_include_status */ boolean | null ]
    get_mode_preference(): [ /* returnType */ boolean, /* value_mode_preference */ NasRatModePreference | null ]
    get_network_selection_preference(): [ /* returnType */ boolean, /* value_network_selection_preference_mode */ NasNetworkSelectionPreference | null, /* value_network_selection_preference_mcc */ number | null, /* value_network_selection_preference_mnc */ number | null ]
    get_network_selection_registration_restriction(): [ /* returnType */ boolean, /* value_network_selection_registration_restriction */ NasNetworkSelectionRegistrationRestriction | null ]
    get_nr5g_nsa_band_preference(): [ /* returnType */ boolean, /* value_nr5g_nsa_band_preference_mask_0 */ number | null, /* value_nr5g_nsa_band_preference_mask_1 */ number | null, /* value_nr5g_nsa_band_preference_mask_2 */ number | null, /* value_nr5g_nsa_band_preference_mask_3 */ number | null, /* value_nr5g_nsa_band_preference_mask_4 */ number | null, /* value_nr5g_nsa_band_preference_mask_5 */ number | null, /* value_nr5g_nsa_band_preference_mask_6 */ number | null, /* value_nr5g_nsa_band_preference_mask_7 */ number | null ]
    get_nr5g_sa_band_preference(): [ /* returnType */ boolean, /* value_nr5g_sa_band_preference_mask_0 */ number | null, /* value_nr5g_sa_band_preference_mask_1 */ number | null, /* value_nr5g_sa_band_preference_mask_2 */ number | null, /* value_nr5g_sa_band_preference_mask_3 */ number | null, /* value_nr5g_sa_band_preference_mask_4 */ number | null, /* value_nr5g_sa_band_preference_mask_5 */ number | null, /* value_nr5g_sa_band_preference_mask_6 */ number | null, /* value_nr5g_sa_band_preference_mask_7 */ number | null ]
    get_roaming_preference(): [ /* returnType */ boolean, /* value_roaming_preference */ NasRoamingPreference | null ]
    get_service_domain_preference(): [ /* returnType */ boolean, /* value_service_domain_preference */ NasServiceDomainPreference | null ]
    get_td_scdma_band_preference(): [ /* returnType */ boolean, /* value_td_scdma_band_preference */ NasTdScdmaBandPreference | null ]
    get_usage_preference(): [ /* returnType */ boolean, /* value_usage_preference */ NasUsagePreference | null ]
    get_voice_domain_preference(): [ /* returnType */ boolean, /* value_voice_domain_preference */ NasVoiceDomainPreference | null ]
    ref(): MessageNasSetSystemSelectionPreferenceInput
    set_acquisition_order_preference(value_acquisition_order_preference: NasRadioInterface[]): boolean
    set_band_preference(value_band_preference: NasBandPreference): boolean
    set_cdma_prl_preference(value_cdma_prl_preference: NasCdmaPrlPreference): boolean
    set_change_duration(value_change_duration: NasChangeDuration): boolean
    set_emergency_mode(value_emergency_mode: boolean): boolean
    set_extended_lte_band_preference(value_extended_lte_band_preference_mask_low: number, value_extended_lte_band_preference_mask_mid_low: number, value_extended_lte_band_preference_mask_mid_high: number, value_extended_lte_band_preference_mask_high: number): boolean
    set_gsm_wcdma_acquisition_order_preference(value_gsm_wcdma_acquisition_order_preference: NasGsmWcdmaAcquisitionOrderPreference): boolean
    set_lte_band_preference(value_lte_band_preference: NasLteBandPreference): boolean
    set_mnc_pcs_digit_include_status(value_mnc_pcs_digit_include_status: boolean): boolean
    set_mode_preference(value_mode_preference: NasRatModePreference): boolean
    set_network_selection_preference(value_network_selection_preference_mode: NasNetworkSelectionPreference, value_network_selection_preference_mcc: number, value_network_selection_preference_mnc: number): boolean
    set_network_selection_registration_restriction(value_network_selection_registration_restriction: NasNetworkSelectionRegistrationRestriction): boolean
    set_nr5g_nsa_band_preference(value_nr5g_nsa_band_preference_mask_0: number, value_nr5g_nsa_band_preference_mask_1: number, value_nr5g_nsa_band_preference_mask_2: number, value_nr5g_nsa_band_preference_mask_3: number, value_nr5g_nsa_band_preference_mask_4: number, value_nr5g_nsa_band_preference_mask_5: number, value_nr5g_nsa_band_preference_mask_6: number, value_nr5g_nsa_band_preference_mask_7: number): boolean
    set_nr5g_sa_band_preference(value_nr5g_sa_band_preference_mask_0: number, value_nr5g_sa_band_preference_mask_1: number, value_nr5g_sa_band_preference_mask_2: number, value_nr5g_sa_band_preference_mask_3: number, value_nr5g_sa_band_preference_mask_4: number, value_nr5g_sa_band_preference_mask_5: number, value_nr5g_sa_band_preference_mask_6: number, value_nr5g_sa_band_preference_mask_7: number): boolean
    set_roaming_preference(value_roaming_preference: NasRoamingPreference): boolean
    set_service_domain_preference(value_service_domain_preference: NasServiceDomainPreference): boolean
    set_td_scdma_band_preference(value_td_scdma_band_preference: NasTdScdmaBandPreference): boolean
    set_usage_preference(value_usage_preference: NasUsagePreference): boolean
    set_voice_domain_preference(value_voice_domain_preference: NasVoiceDomainPreference): boolean
    unref(): void
    static name: string
    static new(): MessageNasSetSystemSelectionPreferenceInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasSetSystemSelectionPreferenceInput
}
class MessageNasSetSystemSelectionPreferenceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetSystemSelectionPreferenceOutput */
    get_result(): boolean
    ref(): MessageNasSetSystemSelectionPreferenceOutput
    unref(): void
    static name: string
}
class MessageNasSetTechnologyPreferenceInput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetTechnologyPreferenceInput */
    get_current(): [ /* returnType */ boolean, /* value_current_technology_preference */ NasRadioTechnologyPreference | null, /* value_current_technology_preference_duration */ NasPreferenceDuration | null ]
    ref(): MessageNasSetTechnologyPreferenceInput
    set_current(value_current_technology_preference: NasRadioTechnologyPreference, value_current_technology_preference_duration: NasPreferenceDuration): boolean
    unref(): void
    static name: string
    static new(): MessageNasSetTechnologyPreferenceInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageNasSetTechnologyPreferenceInput
}
class MessageNasSetTechnologyPreferenceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSetTechnologyPreferenceOutput */
    get_result(): boolean
    ref(): MessageNasSetTechnologyPreferenceOutput
    unref(): void
    static name: string
}
class MessageNasSwiGetStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageNasSwiGetStatusOutput */
    get_common_info_v2(): [ /* returnType */ boolean, /* value_common_info_v2_temperature */ number | null, /* value_common_info_v2_modem_mode */ NasSwiModemMode | null, /* value_common_info_v2_system_mode */ NasSwiSystemMode | null, /* value_common_info_v2_ims_registration_state */ NasSwiImsRegState | null, /* value_common_info_v2_packet_service_state */ NasSwiPsState | null ]
    get_lte_info(): [ /* returnType */ boolean, /* value_lte_info_band */ NasActiveBand | null, /* value_lte_info_bandwidth */ NasDLBandwidth | null, /* value_lte_info_rx_channel */ number | null, /* value_lte_info_tx_channel */ number | null, /* value_lte_info_emm_state */ NasSwiEmmState | null, /* value_lte_info_emm_sub_state */ number | null, /* value_lte_info_emm_connection_state */ NasSwiEmmConnectionState | null ]
    get_result(): boolean
    ref(): MessageNasSwiGetStatusOutput
    unref(): void
    static name: string
}
class MessageOmaCancelSessionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaCancelSessionOutput */
    get_result(): boolean
    ref(): MessageOmaCancelSessionOutput
    unref(): void
    static name: string
}
class MessageOmaGetFeatureSettingOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaGetFeatureSettingOutput */
    get_device_provisioning_service_update_config(): [ /* returnType */ boolean, /* value_device_provisioning_service_update_config */ boolean | null ]
    get_hfa_feature_config(): [ /* returnType */ boolean, /* value_hfa_feature_config */ boolean | null ]
    get_hfa_feature_done_state(): [ /* returnType */ boolean, /* value_hfa_feature_done_state */ OmaHfaFeatureDoneState | null ]
    get_prl_update_service_config(): [ /* returnType */ boolean, /* value_prl_update_service_config */ boolean | null ]
    get_result(): boolean
    ref(): MessageOmaGetFeatureSettingOutput
    unref(): void
    static name: string
}
class MessageOmaGetSessionInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaGetSessionInfoOutput */
    get_network_initiated_alert(): [ /* returnType */ boolean, /* value_network_initiated_alert_session_type */ OmaSessionType | null, /* value_network_initiated_alert_session_id */ number | null ]
    get_result(): boolean
    get_retry_info(): [ /* returnType */ boolean, /* value_retry_info_retry_count */ number | null, /* value_retry_info_retry_pause_timer */ number | null, /* value_retry_info_retry_pause_timer_remaining */ number | null ]
    get_session_failed_reason(): [ /* returnType */ boolean, /* value_session_failed_reason */ OmaSessionFailedReason | null ]
    get_session_info(): [ /* returnType */ boolean, /* value_session_info_session_state */ OmaSessionState | null, /* value_session_info_session_type */ OmaSessionType | null ]
    ref(): MessageOmaGetSessionInfoOutput
    unref(): void
    static name: string
}
class MessageOmaResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaResetOutput */
    get_result(): boolean
    ref(): MessageOmaResetOutput
    unref(): void
    static name: string
}
class MessageOmaSendSelectionInput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaSendSelectionInput */
    get_network_initiated_alert_selection(): [ /* returnType */ boolean, /* value_network_initiated_alert_selection_control_point_selection_accept */ boolean | null, /* value_network_initiated_alert_selection_session_id */ number | null ]
    ref(): MessageOmaSendSelectionInput
    set_network_initiated_alert_selection(value_network_initiated_alert_selection_control_point_selection_accept: boolean, value_network_initiated_alert_selection_session_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageOmaSendSelectionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageOmaSendSelectionInput
}
class MessageOmaSendSelectionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaSendSelectionOutput */
    get_result(): boolean
    ref(): MessageOmaSendSelectionOutput
    unref(): void
    static name: string
}
class MessageOmaSetEventReportInput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaSetEventReportInput */
    get_network_initiated_alert_reporting(): [ /* returnType */ boolean, /* value_network_initiated_alert_reporting */ boolean | null ]
    get_session_state_reporting(): [ /* returnType */ boolean, /* value_session_state_reporting */ boolean | null ]
    ref(): MessageOmaSetEventReportInput
    set_network_initiated_alert_reporting(value_network_initiated_alert_reporting: boolean): boolean
    set_session_state_reporting(value_session_state_reporting: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageOmaSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageOmaSetEventReportInput
}
class MessageOmaSetEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaSetEventReportOutput */
    get_result(): boolean
    ref(): MessageOmaSetEventReportOutput
    unref(): void
    static name: string
}
class MessageOmaSetFeatureSettingInput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaSetFeatureSettingInput */
    get_device_provisioning_service_update_config(): [ /* returnType */ boolean, /* value_device_provisioning_service_update_config */ boolean | null ]
    get_hfa_feature_config(): [ /* returnType */ boolean, /* value_hfa_feature_config */ boolean | null ]
    get_prl_update_service_config(): [ /* returnType */ boolean, /* value_prl_update_service_config */ boolean | null ]
    ref(): MessageOmaSetFeatureSettingInput
    set_device_provisioning_service_update_config(value_device_provisioning_service_update_config: boolean): boolean
    set_hfa_feature_config(value_hfa_feature_config: boolean): boolean
    set_prl_update_service_config(value_prl_update_service_config: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageOmaSetFeatureSettingInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageOmaSetFeatureSettingInput
}
class MessageOmaSetFeatureSettingOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaSetFeatureSettingOutput */
    get_result(): boolean
    ref(): MessageOmaSetFeatureSettingOutput
    unref(): void
    static name: string
}
class MessageOmaStartSessionInput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaStartSessionInput */
    get_session_type(): [ /* returnType */ boolean, /* value_session_type */ OmaSessionType | null ]
    ref(): MessageOmaStartSessionInput
    set_session_type(value_session_type: OmaSessionType): boolean
    unref(): void
    static name: string
    static new(): MessageOmaStartSessionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageOmaStartSessionInput
}
class MessageOmaStartSessionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageOmaStartSessionOutput */
    get_result(): boolean
    ref(): MessageOmaStartSessionOutput
    unref(): void
    static name: string
}
class MessagePbmGetAllCapabilitiesOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutput */
    get_additional_number_alpha_string_capability(): [ /* returnType */ boolean, /* value_additional_number_alpha_string_capability */ MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement[] | null ]
    get_additional_number_capability(): [ /* returnType */ boolean, /* value_additional_number_capability */ MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement[] | null ]
    get_capability_basic_information(): [ /* returnType */ boolean, /* value_capability_basic_information */ MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElement[] | null ]
    get_email_capability(): [ /* returnType */ boolean, /* value_email_capability */ MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement[] | null ]
    get_group_capability(): [ /* returnType */ boolean, /* value_group_capability */ MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement[] | null ]
    get_grouping_information_alpha_string_capability(): [ /* returnType */ boolean, /* value_grouping_information_alpha_string_capability */ MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement[] | null ]
    get_hidden_records_capability(): [ /* returnType */ boolean, /* value_hidden_records_capability */ MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement[] | null ]
    get_result(): boolean
    get_second_name_capability(): [ /* returnType */ boolean, /* value_second_name_capability */ MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement[] | null ]
    ref(): MessagePbmGetAllCapabilitiesOutput
    unref(): void
    static name: string
}
class MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement */
    session_type: PbmSessionType
    maximum_records: number
    used_records: number
    maximum_string_length: number
    static name: string
}
class MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement */
    session_type: PbmSessionType
    maximum_additional_numbers: number
    maximum_additional_number_length: number
    maximum_additional_number_tag_length: number
    static name: string
}
class MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElement */
    session_type: PbmSessionType
    phonebooks: object[]
    static name: string
}
class MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElementPhonebooksElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElementPhonebooksElement */
    phonebook_type: PbmPhonebookType
    used_records: number
    maximum_records: number
    maximum_number_length: number
    maximum_name_length: number
    static name: string
}
class MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement */
    session_type: PbmSessionType
    maximum_emails: number
    maximum_email_address_length: number
    static name: string
}
class MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement */
    session_type: PbmSessionType
    maximum_groups: number
    maximum_group_tag_length: number
    static name: string
}
class MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement */
    session_type: PbmSessionType
    maximum_records: number
    used_records: number
    maximum_string_length: number
    static name: string
}
class MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement */
    session_type: PbmSessionType
    supported: boolean
    static name: string
}
class MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement {
    /* Fields of Qmi-1.0.Qmi.MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement */
    session_type: PbmSessionType
    maximum_second_name_length: number
    static name: string
}
class MessagePbmGetCapabilitiesInput {
    /* Methods of Qmi-1.0.Qmi.MessagePbmGetCapabilitiesInput */
    get_phonebook_information(): [ /* returnType */ boolean, /* value_phonebook_information_session_type */ PbmSessionType | null, /* value_phonebook_information_phonebook_type */ PbmPhonebookType | null ]
    ref(): MessagePbmGetCapabilitiesInput
    set_phonebook_information(value_phonebook_information_session_type: PbmSessionType, value_phonebook_information_phonebook_type: PbmPhonebookType): boolean
    unref(): void
    static name: string
    static new(): MessagePbmGetCapabilitiesInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePbmGetCapabilitiesInput
}
class MessagePbmGetCapabilitiesOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePbmGetCapabilitiesOutput */
    get_additional_number_alpha_string_capability(): [ /* returnType */ boolean, /* value_additional_number_alpha_string_capability_maximum_records */ number | null, /* value_additional_number_alpha_string_capability_used_records */ number | null, /* value_additional_number_alpha_string_capability_maximum_string_length */ number | null ]
    get_additional_number_capability(): [ /* returnType */ boolean, /* value_additional_number_capability_maximum_additional_numbers */ number | null, /* value_additional_number_capability_maximum_additional_number_length */ number | null, /* value_additional_number_capability_maximum_additional_number_tag_length */ number | null ]
    get_capability_basic_information(): [ /* returnType */ boolean, /* value_capability_basic_information_session_type */ PbmSessionType | null, /* value_capability_basic_information_phonebook_type */ PbmPhonebookType | null, /* value_capability_basic_information_used_records */ number | null, /* value_capability_basic_information_maximum_records */ number | null, /* value_capability_basic_information_maximum_number_length */ number | null, /* value_capability_basic_information_maximum_name_length */ number | null ]
    get_email_capability(): [ /* returnType */ boolean, /* value_email_capability_maximum_emails */ number | null, /* value_email_capability_maximum_email_address_length */ number | null ]
    get_group_capability(): [ /* returnType */ boolean, /* value_group_capability_maximum_groups */ number | null, /* value_group_capability_maximum_group_tag_length */ number | null ]
    get_grouping_information_alpha_string_capability(): [ /* returnType */ boolean, /* value_grouping_information_alpha_string_capability_maximum_records */ number | null, /* value_grouping_information_alpha_string_capability_used_records */ number | null, /* value_grouping_information_alpha_string_capability_maximum_string_length */ number | null ]
    get_hidden_records_capability(): [ /* returnType */ boolean, /* value_hidden_records_capability_supported */ boolean | null ]
    get_result(): boolean
    get_second_name_capability(): [ /* returnType */ boolean, /* value_second_name_capability_maximum_second_name_length */ number | null ]
    ref(): MessagePbmGetCapabilitiesOutput
    unref(): void
    static name: string
}
class MessagePbmIndicationRegisterInput {
    /* Methods of Qmi-1.0.Qmi.MessagePbmIndicationRegisterInput */
    get_event_registration_mask(): [ /* returnType */ boolean, /* value_event_registration_mask */ PbmEventRegistrationFlag | null ]
    ref(): MessagePbmIndicationRegisterInput
    set_event_registration_mask(value_event_registration_mask: PbmEventRegistrationFlag): boolean
    unref(): void
    static name: string
    static new(): MessagePbmIndicationRegisterInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePbmIndicationRegisterInput
}
class MessagePbmIndicationRegisterOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePbmIndicationRegisterOutput */
    get_event_registration_mask(): [ /* returnType */ boolean, /* value_event_registration_mask */ PbmEventRegistrationFlag | null ]
    get_result(): boolean
    ref(): MessagePbmIndicationRegisterOutput
    unref(): void
    static name: string
}
class MessagePdcActivateConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcActivateConfigInput */
    get_config_type(): [ /* returnType */ boolean, /* value_config_type */ PdcConfigurationType | null ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): MessagePdcActivateConfigInput
    set_config_type(value_config_type: PdcConfigurationType): boolean
    set_token(value_token: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcActivateConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcActivateConfigInput
}
class MessagePdcActivateConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcActivateConfigOutput */
    get_result(): boolean
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): MessagePdcActivateConfigOutput
    unref(): void
    static name: string
}
class MessagePdcConfigChangeInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcConfigChangeInput */
    get_type_with_id(): [ /* returnType */ boolean, /* value_type_with_id */ ConfigTypeAndId | null ]
    ref(): MessagePdcConfigChangeInput
    set_type_with_id(value_type_with_id: ConfigTypeAndId): boolean
    unref(): void
    static name: string
    static new(): MessagePdcConfigChangeInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcConfigChangeInput
}
class MessagePdcConfigChangeOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcConfigChangeOutput */
    get_result(): boolean
    get_type_with_id(): [ /* returnType */ boolean, /* value_type_with_id */ ConfigTypeAndId | null ]
    ref(): MessagePdcConfigChangeOutput
    unref(): void
    static name: string
}
class MessagePdcDeactivateConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcDeactivateConfigInput */
    get_config_type(): [ /* returnType */ boolean, /* value_config_type */ PdcConfigurationType | null ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): MessagePdcDeactivateConfigInput
    set_config_type(value_config_type: PdcConfigurationType): boolean
    set_token(value_token: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcDeactivateConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcDeactivateConfigInput
}
class MessagePdcDeactivateConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcDeactivateConfigOutput */
    get_result(): boolean
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): MessagePdcDeactivateConfigOutput
    unref(): void
    static name: string
}
class MessagePdcDeleteConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcDeleteConfigInput */
    get_config_type(): [ /* returnType */ boolean, /* value_config_type */ PdcConfigurationType | null ]
    get_id(): [ /* returnType */ boolean, /* value_id */ Uint8Array[] | null ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): MessagePdcDeleteConfigInput
    set_config_type(value_config_type: PdcConfigurationType): boolean
    set_id(value_id: Uint8Array[]): boolean
    set_token(value_token: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcDeleteConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcDeleteConfigInput
}
class MessagePdcDeleteConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcDeleteConfigOutput */
    get_result(): boolean
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): MessagePdcDeleteConfigOutput
    unref(): void
    static name: string
}
class MessagePdcGetConfigInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetConfigInfoInput */
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    get_type_with_id(): [ /* returnType */ boolean, /* value_type_with_id */ ConfigTypeAndId | null ]
    ref(): MessagePdcGetConfigInfoInput
    set_token(value_token: number): boolean
    set_type_with_id(value_type_with_id: ConfigTypeAndId): boolean
    unref(): void
    static name: string
    static new(): MessagePdcGetConfigInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcGetConfigInfoInput
}
class MessagePdcGetConfigInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetConfigInfoOutput */
    get_result(): boolean
    ref(): MessagePdcGetConfigInfoOutput
    unref(): void
    static name: string
}
class MessagePdcGetConfigLimitsInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetConfigLimitsInput */
    get_config_type(): [ /* returnType */ boolean, /* value_config_type */ PdcConfigurationType | null ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): MessagePdcGetConfigLimitsInput
    set_config_type(value_config_type: PdcConfigurationType): boolean
    set_token(value_token: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcGetConfigLimitsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcGetConfigLimitsInput
}
class MessagePdcGetConfigLimitsOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetConfigLimitsOutput */
    get_current_size(): [ /* returnType */ boolean, /* value_current_size */ number | null ]
    get_maximum_size(): [ /* returnType */ boolean, /* value_maximum_size */ number | null ]
    get_result(): boolean
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): MessagePdcGetConfigLimitsOutput
    unref(): void
    static name: string
}
class MessagePdcGetDefaultConfigInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetDefaultConfigInfoInput */
    get_config_type(): [ /* returnType */ boolean, /* value_config_type */ PdcConfigurationType | null ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): MessagePdcGetDefaultConfigInfoInput
    set_config_type(value_config_type: PdcConfigurationType): boolean
    set_token(value_token: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcGetDefaultConfigInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcGetDefaultConfigInfoInput
}
class MessagePdcGetDefaultConfigInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetDefaultConfigInfoOutput */
    get_description(): [ /* returnType */ boolean, /* value_description */ string | null ]
    get_result(): boolean
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    get_total_size(): [ /* returnType */ boolean, /* value_total_size */ number | null ]
    get_version(): [ /* returnType */ boolean, /* value_version */ number | null ]
    ref(): MessagePdcGetDefaultConfigInfoOutput
    unref(): void
    static name: string
}
class MessagePdcGetSelectedConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetSelectedConfigInput */
    get_config_type(): [ /* returnType */ boolean, /* value_config_type */ PdcConfigurationType | null ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): MessagePdcGetSelectedConfigInput
    set_config_type(value_config_type: PdcConfigurationType): boolean
    set_token(value_token: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcGetSelectedConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcGetSelectedConfigInput
}
class MessagePdcGetSelectedConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcGetSelectedConfigOutput */
    get_result(): boolean
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): MessagePdcGetSelectedConfigOutput
    unref(): void
    static name: string
}
class MessagePdcListConfigsInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcListConfigsInput */
    get_config_type(): [ /* returnType */ boolean, /* value_config_type */ PdcConfigurationType | null ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): MessagePdcListConfigsInput
    set_config_type(value_config_type: PdcConfigurationType): boolean
    set_token(value_token: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcListConfigsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcListConfigsInput
}
class MessagePdcListConfigsOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcListConfigsOutput */
    get_result(): boolean
    ref(): MessagePdcListConfigsOutput
    unref(): void
    static name: string
}
class MessagePdcLoadConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcLoadConfigInput */
    get_config_chunk(): [ /* returnType */ boolean, /* value_config_chunk_type */ PdcConfigurationType | null, /* value_config_chunk_id */ Uint8Array[] | null, /* value_config_chunk_total_size */ number | null, /* value_config_chunk_chunk */ Uint8Array[] | null ]
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): MessagePdcLoadConfigInput
    set_config_chunk(value_config_chunk_type: PdcConfigurationType, value_config_chunk_id: Uint8Array[], value_config_chunk_total_size: number, value_config_chunk_chunk: Uint8Array[]): boolean
    set_token(value_token: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdcLoadConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcLoadConfigInput
}
class MessagePdcLoadConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcLoadConfigOutput */
    get_result(): boolean
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): MessagePdcLoadConfigOutput
    unref(): void
    static name: string
}
class MessagePdcRegisterInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcRegisterInput */
    get_enable_refresh(): [ /* returnType */ boolean, /* value_enable_refresh */ boolean | null ]
    get_enable_reporting(): [ /* returnType */ boolean, /* value_enable_reporting */ boolean | null ]
    ref(): MessagePdcRegisterInput
    set_enable_refresh(value_enable_refresh: boolean): boolean
    set_enable_reporting(value_enable_reporting: boolean): boolean
    unref(): void
    static name: string
    static new(): MessagePdcRegisterInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcRegisterInput
}
class MessagePdcRegisterOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcRegisterOutput */
    get_result(): boolean
    ref(): MessagePdcRegisterOutput
    unref(): void
    static name: string
}
class MessagePdcResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcResetOutput */
    get_result(): boolean
    ref(): MessagePdcResetOutput
    unref(): void
    static name: string
}
class MessagePdcSetSelectedConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcSetSelectedConfigInput */
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    get_type_with_id(): [ /* returnType */ boolean, /* value_type_with_id */ ConfigTypeAndId | null ]
    ref(): MessagePdcSetSelectedConfigInput
    set_token(value_token: number): boolean
    set_type_with_id(value_type_with_id: ConfigTypeAndId): boolean
    unref(): void
    static name: string
    static new(): MessagePdcSetSelectedConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdcSetSelectedConfigInput
}
class MessagePdcSetSelectedConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdcSetSelectedConfigOutput */
    get_result(): boolean
    get_token(): [ /* returnType */ boolean, /* value_token */ number | null ]
    ref(): MessagePdcSetSelectedConfigOutput
    unref(): void
    static name: string
}
class MessagePdsGetAgpsConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsGetAgpsConfigInput */
    get_network_mode(): [ /* returnType */ boolean, /* value_network_mode */ PdsNetworkMode | null ]
    ref(): MessagePdsGetAgpsConfigInput
    set_network_mode(value_network_mode: PdsNetworkMode): boolean
    unref(): void
    static name: string
    static new(): MessagePdsGetAgpsConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsGetAgpsConfigInput
}
class MessagePdsGetAgpsConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsGetAgpsConfigOutput */
    get_location_server_address(): [ /* returnType */ boolean, /* value_location_server_address_ip */ number | null, /* value_location_server_address_port */ number | null ]
    get_location_server_url(): [ /* returnType */ boolean, /* value_location_server_url */ Uint8Array[] | null ]
    get_result(): boolean
    ref(): MessagePdsGetAgpsConfigOutput
    unref(): void
    static name: string
}
class MessagePdsGetAutoTrackingStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsGetAutoTrackingStateOutput */
    get_result(): boolean
    get_state(): [ /* returnType */ boolean, /* value_state_auto_tracking_state */ boolean | null ]
    ref(): MessagePdsGetAutoTrackingStateOutput
    unref(): void
    static name: string
}
class MessagePdsGetDefaultTrackingSessionOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsGetDefaultTrackingSessionOutput */
    get_info(): [ /* returnType */ boolean, /* value_info_session_operation */ PdsOperatingMode | null, /* value_info_position_data_timeout */ number | null, /* value_info_interval */ number | null, /* value_info_accuracy_threshold */ number | null ]
    get_result(): boolean
    ref(): MessagePdsGetDefaultTrackingSessionOutput
    unref(): void
    static name: string
}
class MessagePdsGetGpsServiceStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsGetGpsServiceStateOutput */
    get_result(): boolean
    get_state(): [ /* returnType */ boolean, /* value_state_gps_service_state */ boolean | null, /* value_state_tracking_session_state */ PdsTrackingSessionState | null ]
    ref(): MessagePdsGetGpsServiceStateOutput
    unref(): void
    static name: string
}
class MessagePdsResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsResetOutput */
    get_result(): boolean
    ref(): MessagePdsResetOutput
    unref(): void
    static name: string
}
class MessagePdsSetAgpsConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetAgpsConfigInput */
    get_location_server_address(): [ /* returnType */ boolean, /* value_location_server_address_ip */ number | null, /* value_location_server_address_port */ number | null ]
    get_location_server_url(): [ /* returnType */ boolean, /* value_location_server_url */ Uint8Array[] | null ]
    get_network_mode(): [ /* returnType */ boolean, /* value_network_mode */ PdsNetworkMode | null ]
    ref(): MessagePdsSetAgpsConfigInput
    set_location_server_address(value_location_server_address_ip: number, value_location_server_address_port: number): boolean
    set_location_server_url(value_location_server_url: Uint8Array[]): boolean
    set_network_mode(value_network_mode: PdsNetworkMode): boolean
    unref(): void
    static name: string
    static new(): MessagePdsSetAgpsConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsSetAgpsConfigInput
}
class MessagePdsSetAgpsConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetAgpsConfigOutput */
    get_result(): boolean
    ref(): MessagePdsSetAgpsConfigOutput
    unref(): void
    static name: string
}
class MessagePdsSetAutoTrackingStateInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetAutoTrackingStateInput */
    get_state(): [ /* returnType */ boolean, /* value_state_auto_tracking_state */ boolean | null ]
    ref(): MessagePdsSetAutoTrackingStateInput
    set_state(value_state_auto_tracking_state: boolean): boolean
    unref(): void
    static name: string
    static new(): MessagePdsSetAutoTrackingStateInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsSetAutoTrackingStateInput
}
class MessagePdsSetAutoTrackingStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetAutoTrackingStateOutput */
    get_result(): boolean
    ref(): MessagePdsSetAutoTrackingStateOutput
    unref(): void
    static name: string
}
class MessagePdsSetDefaultTrackingSessionInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetDefaultTrackingSessionInput */
    get_info(): [ /* returnType */ boolean, /* value_info_session_operation */ PdsOperatingMode | null, /* value_info_position_data_timeout */ number | null, /* value_info_interval */ number | null, /* value_info_accuracy_threshold */ number | null ]
    ref(): MessagePdsSetDefaultTrackingSessionInput
    set_info(value_info_session_operation: PdsOperatingMode, value_info_position_data_timeout: number, value_info_interval: number, value_info_accuracy_threshold: number): boolean
    unref(): void
    static name: string
    static new(): MessagePdsSetDefaultTrackingSessionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsSetDefaultTrackingSessionInput
}
class MessagePdsSetDefaultTrackingSessionOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetDefaultTrackingSessionOutput */
    get_result(): boolean
    ref(): MessagePdsSetDefaultTrackingSessionOutput
    unref(): void
    static name: string
}
class MessagePdsSetEventReportInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetEventReportInput */
    get_accelerometer_data_streaming_ready_reporting(): [ /* returnType */ boolean, /* value_accelerometer_data_streaming_ready_reporting */ boolean | null ]
    get_extended_external_xtra_data_request_reporting(): [ /* returnType */ boolean, /* value_extended_external_xtra_data_request_reporting */ boolean | null ]
    get_extended_nmea_position_reporting(): [ /* returnType */ boolean, /* value_extended_nmea_position_reporting */ boolean | null ]
    get_external_time_injection_request_reporting(): [ /* returnType */ boolean, /* value_external_time_injection_request_reporting */ boolean | null ]
    get_external_wifi_position_request_reporting(): [ /* returnType */ boolean, /* value_external_wifi_position_request_reporting */ boolean | null ]
    get_external_xtra_data_request_reporting(): [ /* returnType */ boolean, /* value_external_xtra_data_request_reporting */ boolean | null ]
    get_gyro_data_streaming_ready_reporting(): [ /* returnType */ boolean, /* value_gyro_data_streaming_ready_reporting */ boolean | null ]
    get_heading_uncertainty_reporting(): [ /* returnType */ boolean, /* value_heading_uncertainty_reporting */ boolean | null ]
    get_nmea_debug_strings_reporting(): [ /* returnType */ boolean, /* value_nmea_debug_strings_reporting */ boolean | null ]
    get_nmea_position_reporting(): [ /* returnType */ boolean, /* value_nmea_position_reporting */ boolean | null ]
    get_parsed_position_reporting(): [ /* returnType */ boolean, /* value_parsed_position_reporting */ boolean | null ]
    get_pds_comm_event_reporting(): [ /* returnType */ boolean, /* value_pds_comm_event_reporting */ boolean | null ]
    get_position_reliability_indicator_reporting(): [ /* returnType */ boolean, /* value_position_reliability_indicator_reporting */ boolean | null ]
    get_satellite_information_reporting(): [ /* returnType */ boolean, /* value_satellite_information_reporting */ boolean | null ]
    get_sensor_data_usage_indicator_reporting(): [ /* returnType */ boolean, /* value_sensor_data_usage_indicator_reporting */ boolean | null ]
    get_supl_network_initiated_prompt_reporting(): [ /* returnType */ boolean, /* value_supl_network_initiated_prompt_reporting */ boolean | null ]
    get_time_source_information_reporting(): [ /* returnType */ boolean, /* value_time_source_information_reporting */ boolean | null ]
    get_time_sync_request_reporting(): [ /* returnType */ boolean, /* value_time_sync_request_reporting */ boolean | null ]
    get_umts_cp_network_initiated_prompt_reporting(): [ /* returnType */ boolean, /* value_umts_cp_network_initiated_prompt_reporting */ boolean | null ]
    get_vx_network_initiated_request_reporting(): [ /* returnType */ boolean, /* value_vx_network_initiated_request_reporting */ boolean | null ]
    ref(): MessagePdsSetEventReportInput
    set_accelerometer_data_streaming_ready_reporting(value_accelerometer_data_streaming_ready_reporting: boolean): boolean
    set_extended_external_xtra_data_request_reporting(value_extended_external_xtra_data_request_reporting: boolean): boolean
    set_extended_nmea_position_reporting(value_extended_nmea_position_reporting: boolean): boolean
    set_external_time_injection_request_reporting(value_external_time_injection_request_reporting: boolean): boolean
    set_external_wifi_position_request_reporting(value_external_wifi_position_request_reporting: boolean): boolean
    set_external_xtra_data_request_reporting(value_external_xtra_data_request_reporting: boolean): boolean
    set_gyro_data_streaming_ready_reporting(value_gyro_data_streaming_ready_reporting: boolean): boolean
    set_heading_uncertainty_reporting(value_heading_uncertainty_reporting: boolean): boolean
    set_nmea_debug_strings_reporting(value_nmea_debug_strings_reporting: boolean): boolean
    set_nmea_position_reporting(value_nmea_position_reporting: boolean): boolean
    set_parsed_position_reporting(value_parsed_position_reporting: boolean): boolean
    set_pds_comm_event_reporting(value_pds_comm_event_reporting: boolean): boolean
    set_position_reliability_indicator_reporting(value_position_reliability_indicator_reporting: boolean): boolean
    set_satellite_information_reporting(value_satellite_information_reporting: boolean): boolean
    set_sensor_data_usage_indicator_reporting(value_sensor_data_usage_indicator_reporting: boolean): boolean
    set_supl_network_initiated_prompt_reporting(value_supl_network_initiated_prompt_reporting: boolean): boolean
    set_time_source_information_reporting(value_time_source_information_reporting: boolean): boolean
    set_time_sync_request_reporting(value_time_sync_request_reporting: boolean): boolean
    set_umts_cp_network_initiated_prompt_reporting(value_umts_cp_network_initiated_prompt_reporting: boolean): boolean
    set_vx_network_initiated_request_reporting(value_vx_network_initiated_request_reporting: boolean): boolean
    unref(): void
    static name: string
    static new(): MessagePdsSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsSetEventReportInput
}
class MessagePdsSetEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetEventReportOutput */
    get_result(): boolean
    ref(): MessagePdsSetEventReportOutput
    unref(): void
    static name: string
}
class MessagePdsSetGpsServiceStateInput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetGpsServiceStateInput */
    get_state(): [ /* returnType */ boolean, /* value_state_gps_service_state */ boolean | null ]
    ref(): MessagePdsSetGpsServiceStateInput
    set_state(value_state_gps_service_state: boolean): boolean
    unref(): void
    static name: string
    static new(): MessagePdsSetGpsServiceStateInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessagePdsSetGpsServiceStateInput
}
class MessagePdsSetGpsServiceStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessagePdsSetGpsServiceStateOutput */
    get_result(): boolean
    ref(): MessagePdsSetGpsServiceStateOutput
    unref(): void
    static name: string
}
class MessageQosGetFlowStatusInput {
    /* Methods of Qmi-1.0.Qmi.MessageQosGetFlowStatusInput */
    get_qos_id(): [ /* returnType */ boolean, /* value_qos_id */ number | null ]
    ref(): MessageQosGetFlowStatusInput
    set_qos_id(value_qos_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageQosGetFlowStatusInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageQosGetFlowStatusInput
}
class MessageQosGetFlowStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageQosGetFlowStatusOutput */
    get_result(): boolean
    get_value(): [ /* returnType */ boolean, /* value_value */ QosStatus | null ]
    ref(): MessageQosGetFlowStatusOutput
    unref(): void
    static name: string
}
class MessageQosGetNetworkStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageQosGetNetworkStatusOutput */
    get_qos_supported(): [ /* returnType */ boolean, /* value_qos_supported */ boolean | null ]
    get_result(): boolean
    ref(): MessageQosGetNetworkStatusOutput
    unref(): void
    static name: string
}
class MessageQosResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessageQosResetOutput */
    get_result(): boolean
    ref(): MessageQosResetOutput
    unref(): void
    static name: string
}
class MessageQosSwiReadDataStatsInput {
    /* Methods of Qmi-1.0.Qmi.MessageQosSwiReadDataStatsInput */
    get_apn_id(): [ /* returnType */ boolean, /* value_apn_id */ number | null ]
    ref(): MessageQosSwiReadDataStatsInput
    set_apn_id(value_apn_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageQosSwiReadDataStatsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageQosSwiReadDataStatsInput
}
class MessageQosSwiReadDataStatsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageQosSwiReadDataStatsOutput */
    get_apn(): [ /* returnType */ boolean, /* value_apn_apn_id */ number | null, /* value_apn_tx_packets */ number | null, /* value_apn_tx_packets_dropped */ number | null, /* value_apn_rx_packets */ number | null, /* value_apn_tx_bytes */ number | null, /* value_apn_tx_bytes_dropped */ number | null, /* value_apn_rx_bytes */ number | null ]
    get_flow(): [ /* returnType */ boolean, /* value_flow */ MessageQosSwiReadDataStatsOutputFlowElement[] | null ]
    get_result(): boolean
    ref(): MessageQosSwiReadDataStatsOutput
    unref(): void
    static name: string
}
class MessageQosSwiReadDataStatsOutputFlowElement {
    /* Fields of Qmi-1.0.Qmi.MessageQosSwiReadDataStatsOutputFlowElement */
    bearer_id: number
    tx_packets: number
    tx_packets_dropped: number
    tx_bytes: number
    tx_bytes_dropped: number
    static name: string
}
class MessageSarRfGetStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageSarRfGetStateOutput */
    get_result(): boolean
    get_state(): [ /* returnType */ boolean, /* value_state */ SarRfState | null ]
    ref(): MessageSarRfGetStateOutput
    unref(): void
    static name: string
}
class MessageSarRfSetStateInput {
    /* Methods of Qmi-1.0.Qmi.MessageSarRfSetStateInput */
    get_state(): [ /* returnType */ boolean, /* value_state */ SarRfState | null ]
    ref(): MessageSarRfSetStateInput
    set_state(value_state: SarRfState): boolean
    unref(): void
    static name: string
    static new(): MessageSarRfSetStateInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageSarRfSetStateInput
}
class MessageSarRfSetStateOutput {
    /* Methods of Qmi-1.0.Qmi.MessageSarRfSetStateOutput */
    get_result(): boolean
    ref(): MessageSarRfSetStateOutput
    unref(): void
    static name: string
}
class MessageUimChangePinInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimChangePinInput */
    get_info(): [ /* returnType */ boolean, /* value_info_pin_id */ UimPinId | null, /* value_info_old_pin */ string | null, /* value_info_new_pin */ string | null ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number | null ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType | null, /* value_session_application_identifier */ Uint8Array[] | null ]
    ref(): MessageUimChangePinInput
    set_info(value_info_pin_id: UimPinId, value_info_old_pin: string, value_info_new_pin: string): boolean
    set_response_in_indication_token(value_response_in_indication_token: number): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimChangePinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimChangePinInput
}
class MessageUimChangePinOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimChangePinOutput */
    get_card_result(): [ /* returnType */ boolean, /* value_card_result_sw1 */ number | null, /* value_card_result_sw2 */ number | null ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number | null ]
    get_result(): boolean
    get_retries_remaining(): [ /* returnType */ boolean, /* value_retries_remaining_verify_retries_left */ number | null, /* value_retries_remaining_unblock_retries_left */ number | null ]
    ref(): MessageUimChangePinOutput
    unref(): void
    static name: string
}
class MessageUimChangeProvisioningSessionInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimChangeProvisioningSessionInput */
    get_application_information(): [ /* returnType */ boolean, /* value_application_information_slot */ number | null, /* value_application_information_application_identifier */ Uint8Array[] | null ]
    get_session_change(): [ /* returnType */ boolean, /* value_session_change_session_type */ UimSessionType | null, /* value_session_change_activate */ boolean | null ]
    ref(): MessageUimChangeProvisioningSessionInput
    set_application_information(value_application_information_slot: number, value_application_information_application_identifier: Uint8Array[]): boolean
    set_session_change(value_session_change_session_type: UimSessionType, value_session_change_activate: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageUimChangeProvisioningSessionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimChangeProvisioningSessionInput
}
class MessageUimChangeProvisioningSessionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimChangeProvisioningSessionOutput */
    get_result(): boolean
    ref(): MessageUimChangeProvisioningSessionOutput
    unref(): void
    static name: string
}
class MessageUimDepersonalizationInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimDepersonalizationInput */
    get_info(): [ /* returnType */ boolean, /* value_info_feature */ UimCardApplicationPersonalizationFeature | null, /* value_info_operation */ UimDepersonalizationOperation | null, /* value_info_control_key */ string | null ]
    get_slot(): [ /* returnType */ boolean, /* value_slot */ number | null ]
    ref(): MessageUimDepersonalizationInput
    set_info(value_info_feature: UimCardApplicationPersonalizationFeature, value_info_operation: UimDepersonalizationOperation, value_info_control_key: string): boolean
    set_slot(value_slot: number): boolean
    unref(): void
    static name: string
    static new(): MessageUimDepersonalizationInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimDepersonalizationInput
}
class MessageUimDepersonalizationOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimDepersonalizationOutput */
    get_result(): boolean
    get_retries_remaining(): [ /* returnType */ boolean, /* value_retries_remaining_verify_left */ number | null, /* value_retries_remaining_unblock_left */ number | null ]
    ref(): MessageUimDepersonalizationOutput
    unref(): void
    static name: string
}
class MessageUimGetCardStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetCardStatusOutput */
    get_card_status(): [ /* returnType */ boolean, /* value_card_status_index_gw_primary */ number | null, /* value_card_status_index_1x_primary */ number | null, /* value_card_status_index_gw_secondary */ number | null, /* value_card_status_index_1x_secondary */ number | null, /* value_card_status_cards */ MessageUimGetCardStatusOutputCardStatusCardsElement[] | null ]
    get_result(): boolean
    ref(): MessageUimGetCardStatusOutput
    unref(): void
    static name: string
}
class MessageUimGetCardStatusOutputCardStatusCardsElement {
    /* Fields of Qmi-1.0.Qmi.MessageUimGetCardStatusOutputCardStatusCardsElement */
    card_state: UimCardState
    upin_state: UimPinState
    upin_retries: number
    upuk_retries: number
    error_code: UimCardError
    applications: object[]
    static name: string
}
class MessageUimGetCardStatusOutputCardStatusCardsElementApplicationsElement {
    /* Fields of Qmi-1.0.Qmi.MessageUimGetCardStatusOutputCardStatusCardsElementApplicationsElement */
    type: UimCardApplicationType
    state: UimCardApplicationState
    personalization_state: UimCardApplicationPersonalizationState
    personalization_feature: UimCardApplicationPersonalizationFeature
    personalization_retries: number
    personalization_unblock_retries: number
    application_identifier_value: object[]
    upin_replaces_pin1: boolean
    pin1_state: UimPinState
    pin1_retries: number
    puk1_retries: number
    pin2_state: UimPinState
    pin2_retries: number
    puk2_retries: number
    static name: string
}
class MessageUimGetConfigurationInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetConfigurationInput */
    get_configuration_mask(): [ /* returnType */ boolean, /* value_configuration_mask */ UimConfiguration | null ]
    ref(): MessageUimGetConfigurationInput
    set_configuration_mask(value_configuration_mask: UimConfiguration): boolean
    unref(): void
    static name: string
    static new(): MessageUimGetConfigurationInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimGetConfigurationInput
}
class MessageUimGetConfigurationOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetConfigurationOutput */
    get_automatic_selection(): [ /* returnType */ boolean, /* value_automatic_selection */ boolean | null ]
    get_halt_subscription(): [ /* returnType */ boolean, /* value_halt_subscription */ boolean | null ]
    get_personalization_status(): [ /* returnType */ boolean, /* value_personalization_status */ MessageUimGetConfigurationOutputPersonalizationStatusElement[] | null ]
    get_personalization_status_other_slots(): [ /* returnType */ boolean, /* value_personalization_status_other_slots */ any[] | null ]
    get_result(): boolean
    ref(): MessageUimGetConfigurationOutput
    unref(): void
    static name: string
}
class MessageUimGetConfigurationOutputPersonalizationStatusElement {
    /* Fields of Qmi-1.0.Qmi.MessageUimGetConfigurationOutputPersonalizationStatusElement */
    feature: UimCardApplicationPersonalizationFeature
    verify_left: number
    unblock_left: number
    static name: string
}
class MessageUimGetConfigurationOutputPersonalizationStatusOtherSlotsSlotsElement {
    /* Fields of Qmi-1.0.Qmi.MessageUimGetConfigurationOutputPersonalizationStatusOtherSlotsSlotsElement */
    feature: UimCardApplicationPersonalizationFeature
    verify_left: number
    unblock_left: number
    static name: string
}
class MessageUimGetFileAttributesInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetFileAttributesInput */
    get_file(): [ /* returnType */ boolean, /* value_file_file_id */ number | null, /* value_file_file_path */ Uint8Array[] | null ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number | null ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType | null, /* value_session_application_identifier */ Uint8Array[] | null ]
    ref(): MessageUimGetFileAttributesInput
    set_file(value_file_file_id: number, value_file_file_path: Uint8Array[]): boolean
    set_response_in_indication_token(value_response_in_indication_token: number): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimGetFileAttributesInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimGetFileAttributesInput
}
class MessageUimGetFileAttributesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetFileAttributesOutput */
    get_card_result(): [ /* returnType */ boolean, /* value_card_result_sw1 */ number | null, /* value_card_result_sw2 */ number | null ]
    get_file_attributes(): [ /* returnType */ boolean, /* value_file_attributes_file_size */ number | null, /* value_file_attributes_file_id */ number | null, /* value_file_attributes_file_type */ UimFileType | null, /* value_file_attributes_record_size */ number | null, /* value_file_attributes_record_count */ number | null, /* value_file_attributes_read_security_attributes_logic */ UimSecurityAttributeLogic | null, /* value_file_attributes_read_security_attributes */ UimSecurityAttribute | null, /* value_file_attributes_write_security_attributes_logic */ UimSecurityAttributeLogic | null, /* value_file_attributes_write_security_attributes */ UimSecurityAttribute | null, /* value_file_attributes_increase_security_attributes_logic */ UimSecurityAttributeLogic | null, /* value_file_attributes_increase_security_attributes */ UimSecurityAttribute | null, /* value_file_attributes_deactivate_security_attributes_logic */ UimSecurityAttributeLogic | null, /* value_file_attributes_deactivate_security_attributes */ UimSecurityAttribute | null, /* value_file_attributes_activate_security_attributes_logic */ UimSecurityAttributeLogic | null, /* value_file_attributes_activate_security_attributes */ UimSecurityAttribute | null, /* value_file_attributes_raw_data */ Uint8Array[] | null ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number | null ]
    get_result(): boolean
    ref(): MessageUimGetFileAttributesOutput
    unref(): void
    static name: string
}
class MessageUimGetSlotStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetSlotStatusOutput */
    get_physical_slot_information(): [ /* returnType */ boolean, /* value_physical_slot_information */ PhysicalSlotInformationSlot[] | null ]
    get_physical_slot_status(): [ /* returnType */ boolean, /* value_physical_slot_status */ PhysicalSlotStatusSlot[] | null ]
    get_result(): boolean
    get_slot_eid_information(): [ /* returnType */ boolean, /* value_slot_eid_information */ any[] | null ]
    ref(): MessageUimGetSlotStatusOutput
    unref(): void
    static name: string
}
class MessageUimGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimGetSupportedMessagesOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ Uint8Array[] | null ]
    get_result(): boolean
    ref(): MessageUimGetSupportedMessagesOutput
    unref(): void
    static name: string
}
class MessageUimPowerOffSimInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimPowerOffSimInput */
    get_slot(): [ /* returnType */ boolean, /* value_slot */ number | null ]
    ref(): MessageUimPowerOffSimInput
    set_slot(value_slot: number): boolean
    unref(): void
    static name: string
    static new(): MessageUimPowerOffSimInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimPowerOffSimInput
}
class MessageUimPowerOffSimOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimPowerOffSimOutput */
    get_result(): boolean
    ref(): MessageUimPowerOffSimOutput
    unref(): void
    static name: string
}
class MessageUimPowerOnSimInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimPowerOnSimInput */
    get_slot(): [ /* returnType */ boolean, /* value_slot */ number | null ]
    ref(): MessageUimPowerOnSimInput
    set_slot(value_slot: number): boolean
    unref(): void
    static name: string
    static new(): MessageUimPowerOnSimInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimPowerOnSimInput
}
class MessageUimPowerOnSimOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimPowerOnSimOutput */
    get_result(): boolean
    ref(): MessageUimPowerOnSimOutput
    unref(): void
    static name: string
}
class MessageUimReadRecordInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimReadRecordInput */
    get_file(): [ /* returnType */ boolean, /* value_file_file_id */ number | null, /* value_file_file_path */ Uint8Array[] | null ]
    get_last_record(): [ /* returnType */ boolean, /* value_last_record */ number | null ]
    get_record(): [ /* returnType */ boolean, /* value_record_record_number */ number | null, /* value_record_record_length */ number | null ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number | null ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType | null, /* value_session_application_identifier */ Uint8Array[] | null ]
    ref(): MessageUimReadRecordInput
    set_file(value_file_file_id: number, value_file_file_path: Uint8Array[]): boolean
    set_last_record(value_last_record: number): boolean
    set_record(value_record_record_number: number, value_record_record_length: number): boolean
    set_response_in_indication_token(value_response_in_indication_token: number): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimReadRecordInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimReadRecordInput
}
class MessageUimReadRecordOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimReadRecordOutput */
    get_additional_read_result(): [ /* returnType */ boolean, /* value_additional_read_result */ Uint8Array[] | null ]
    get_card_result(): [ /* returnType */ boolean, /* value_card_result_sw1 */ number | null, /* value_card_result_sw2 */ number | null ]
    get_read_result(): [ /* returnType */ boolean, /* value_read_result */ Uint8Array[] | null ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number | null ]
    get_result(): boolean
    ref(): MessageUimReadRecordOutput
    unref(): void
    static name: string
}
class MessageUimReadTransparentInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimReadTransparentInput */
    get_encrypt_data(): [ /* returnType */ boolean, /* value_encrypt_data */ boolean | null ]
    get_file(): [ /* returnType */ boolean, /* value_file_file_id */ number | null, /* value_file_file_path */ Uint8Array[] | null ]
    get_read_information(): [ /* returnType */ boolean, /* value_read_information_offset */ number | null, /* value_read_information_length */ number | null ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number | null ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType | null, /* value_session_application_identifier */ Uint8Array[] | null ]
    ref(): MessageUimReadTransparentInput
    set_encrypt_data(value_encrypt_data: boolean): boolean
    set_file(value_file_file_id: number, value_file_file_path: Uint8Array[]): boolean
    set_read_information(value_read_information_offset: number, value_read_information_length: number): boolean
    set_response_in_indication_token(value_response_in_indication_token: number): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimReadTransparentInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimReadTransparentInput
}
class MessageUimReadTransparentOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimReadTransparentOutput */
    get_card_result(): [ /* returnType */ boolean, /* value_card_result_sw1 */ number | null, /* value_card_result_sw2 */ number | null ]
    get_encrypted_data(): [ /* returnType */ boolean, /* value_encrypted_data */ boolean | null ]
    get_read_result(): [ /* returnType */ boolean, /* value_read_result */ Uint8Array[] | null ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number | null ]
    get_result(): boolean
    ref(): MessageUimReadTransparentOutput
    unref(): void
    static name: string
}
class MessageUimRefreshCompleteInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRefreshCompleteInput */
    get_info(): [ /* returnType */ boolean, /* value_info_refresh_success */ boolean | null ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType | null, /* value_session_application_identifier */ Uint8Array[] | null ]
    ref(): MessageUimRefreshCompleteInput
    set_info(value_info_refresh_success: boolean): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimRefreshCompleteInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimRefreshCompleteInput
}
class MessageUimRefreshCompleteOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRefreshCompleteOutput */
    get_result(): boolean
    ref(): MessageUimRefreshCompleteOutput
    unref(): void
    static name: string
}
class MessageUimRefreshRegisterAllInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRefreshRegisterAllInput */
    get_info(): [ /* returnType */ boolean, /* value_info_register_flag */ boolean | null ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType | null, /* value_session_application_identifier */ Uint8Array[] | null ]
    ref(): MessageUimRefreshRegisterAllInput
    set_info(value_info_register_flag: boolean): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimRefreshRegisterAllInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimRefreshRegisterAllInput
}
class MessageUimRefreshRegisterAllOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRefreshRegisterAllOutput */
    get_result(): boolean
    ref(): MessageUimRefreshRegisterAllOutput
    unref(): void
    static name: string
}
class MessageUimRefreshRegisterInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRefreshRegisterInput */
    get_info(): [ /* returnType */ boolean, /* value_info_register_flag */ boolean | null, /* value_info_vote_for_init */ boolean | null, /* value_info_files */ MessageUimRefreshRegisterInputInfoFilesElement[] | null ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType | null, /* value_session_application_identifier */ Uint8Array[] | null ]
    ref(): MessageUimRefreshRegisterInput
    set_info(value_info_register_flag: boolean, value_info_vote_for_init: boolean, value_info_files: MessageUimRefreshRegisterInputInfoFilesElement[]): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimRefreshRegisterInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimRefreshRegisterInput
}
class MessageUimRefreshRegisterInputInfoFilesElement {
    /* Fields of Qmi-1.0.Qmi.MessageUimRefreshRegisterInputInfoFilesElement */
    file_id: number
    path: object[]
    static name: string
}
class MessageUimRefreshRegisterOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRefreshRegisterOutput */
    get_result(): boolean
    ref(): MessageUimRefreshRegisterOutput
    unref(): void
    static name: string
}
class MessageUimRegisterEventsInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRegisterEventsInput */
    get_event_registration_mask(): [ /* returnType */ boolean, /* value_event_registration_mask */ UimEventRegistrationFlag | null ]
    ref(): MessageUimRegisterEventsInput
    set_event_registration_mask(value_event_registration_mask: UimEventRegistrationFlag): boolean
    unref(): void
    static name: string
    static new(): MessageUimRegisterEventsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimRegisterEventsInput
}
class MessageUimRegisterEventsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimRegisterEventsOutput */
    get_event_registration_mask(): [ /* returnType */ boolean, /* value_event_registration_mask */ UimEventRegistrationFlag | null ]
    get_result(): boolean
    ref(): MessageUimRegisterEventsOutput
    unref(): void
    static name: string
}
class MessageUimResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimResetOutput */
    get_result(): boolean
    ref(): MessageUimResetOutput
    unref(): void
    static name: string
}
class MessageUimSetPinProtectionInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimSetPinProtectionInput */
    get_info(): [ /* returnType */ boolean, /* value_info_pin_id */ UimPinId | null, /* value_info_pin_enabled */ boolean | null, /* value_info_pin_value */ string | null ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number | null ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType | null, /* value_session_application_identifier */ Uint8Array[] | null ]
    ref(): MessageUimSetPinProtectionInput
    set_info(value_info_pin_id: UimPinId, value_info_pin_enabled: boolean, value_info_pin_value: string): boolean
    set_response_in_indication_token(value_response_in_indication_token: number): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimSetPinProtectionInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimSetPinProtectionInput
}
class MessageUimSetPinProtectionOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimSetPinProtectionOutput */
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number | null ]
    get_result(): boolean
    get_retries_remaining(): [ /* returnType */ boolean, /* value_retries_remaining_verify_retries_left */ number | null, /* value_retries_remaining_unblock_retries_left */ number | null ]
    ref(): MessageUimSetPinProtectionOutput
    unref(): void
    static name: string
}
class MessageUimSwitchSlotInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimSwitchSlotInput */
    get_logical_slot(): [ /* returnType */ boolean, /* value_logical_slot */ number | null ]
    get_physical_slot(): [ /* returnType */ boolean, /* value_physical_slot */ number | null ]
    ref(): MessageUimSwitchSlotInput
    set_logical_slot(value_logical_slot: number): boolean
    set_physical_slot(value_physical_slot: number): boolean
    unref(): void
    static name: string
    static new(): MessageUimSwitchSlotInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimSwitchSlotInput
}
class MessageUimSwitchSlotOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimSwitchSlotOutput */
    get_result(): boolean
    ref(): MessageUimSwitchSlotOutput
    unref(): void
    static name: string
}
class MessageUimUnblockPinInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimUnblockPinInput */
    get_info(): [ /* returnType */ boolean, /* value_info_pin_id */ UimPinId | null, /* value_info_puk */ string | null, /* value_info_new_pin */ string | null ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number | null ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType | null, /* value_session_application_identifier */ Uint8Array[] | null ]
    ref(): MessageUimUnblockPinInput
    set_info(value_info_pin_id: UimPinId, value_info_puk: string, value_info_new_pin: string): boolean
    set_response_in_indication_token(value_response_in_indication_token: number): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimUnblockPinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimUnblockPinInput
}
class MessageUimUnblockPinOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimUnblockPinOutput */
    get_card_result(): [ /* returnType */ boolean, /* value_card_result_sw1 */ number | null, /* value_card_result_sw2 */ number | null ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number | null ]
    get_result(): boolean
    get_retries_remaining(): [ /* returnType */ boolean, /* value_retries_remaining_verify_retries_left */ number | null, /* value_retries_remaining_unblock_retries_left */ number | null ]
    ref(): MessageUimUnblockPinOutput
    unref(): void
    static name: string
}
class MessageUimVerifyPinInput {
    /* Methods of Qmi-1.0.Qmi.MessageUimVerifyPinInput */
    get_info(): [ /* returnType */ boolean, /* value_info_pin_id */ UimPinId | null, /* value_info_pin_value */ string | null ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number | null ]
    get_session(): [ /* returnType */ boolean, /* value_session_session_type */ UimSessionType | null, /* value_session_application_identifier */ Uint8Array[] | null ]
    ref(): MessageUimVerifyPinInput
    set_info(value_info_pin_id: UimPinId, value_info_pin_value: string): boolean
    set_response_in_indication_token(value_response_in_indication_token: number): boolean
    set_session(value_session_session_type: UimSessionType, value_session_application_identifier: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageUimVerifyPinInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageUimVerifyPinInput
}
class MessageUimVerifyPinOutput {
    /* Methods of Qmi-1.0.Qmi.MessageUimVerifyPinOutput */
    get_card_result(): [ /* returnType */ boolean, /* value_card_result_sw1 */ number | null, /* value_card_result_sw2 */ number | null ]
    get_response_in_indication_token(): [ /* returnType */ boolean, /* value_response_in_indication_token */ number | null ]
    get_result(): boolean
    get_retries_remaining(): [ /* returnType */ boolean, /* value_retries_remaining_verify_retries_left */ number | null, /* value_retries_remaining_unblock_retries_left */ number | null ]
    ref(): MessageUimVerifyPinOutput
    unref(): void
    static name: string
}
class MessageVoiceAnswerCallInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceAnswerCallInput */
    get_call_id(): [ /* returnType */ boolean, /* value_call_id */ number | null ]
    ref(): MessageVoiceAnswerCallInput
    set_call_id(value_call_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceAnswerCallInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceAnswerCallInput
}
class MessageVoiceAnswerCallOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceAnswerCallOutput */
    get_call_id(): [ /* returnType */ boolean, /* value_call_id */ number | null ]
    get_result(): boolean
    ref(): MessageVoiceAnswerCallOutput
    unref(): void
    static name: string
}
class MessageVoiceAnswerUssdInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceAnswerUssdInput */
    get_uss_data(): [ /* returnType */ boolean, /* value_uss_data_data_coding_scheme */ VoiceUssDataCodingScheme | null, /* value_uss_data_data */ Uint8Array[] | null ]
    ref(): MessageVoiceAnswerUssdInput
    set_uss_data(value_uss_data_data_coding_scheme: VoiceUssDataCodingScheme, value_uss_data_data: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceAnswerUssdInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceAnswerUssdInput
}
class MessageVoiceAnswerUssdOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceAnswerUssdOutput */
    get_result(): boolean
    ref(): MessageVoiceAnswerUssdOutput
    unref(): void
    static name: string
}
class MessageVoiceCancelUssdOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceCancelUssdOutput */
    get_result(): boolean
    ref(): MessageVoiceCancelUssdOutput
    unref(): void
    static name: string
}
class MessageVoiceDialCallInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceDialCallInput */
    get_calling_number(): [ /* returnType */ boolean, /* value_calling_number */ string | null ]
    ref(): MessageVoiceDialCallInput
    set_calling_number(value_calling_number: string): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceDialCallInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceDialCallInput
}
class MessageVoiceDialCallOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceDialCallOutput */
    get_call_id(): [ /* returnType */ boolean, /* value_call_id */ number | null ]
    get_result(): boolean
    ref(): MessageVoiceDialCallOutput
    unref(): void
    static name: string
}
class MessageVoiceEndCallInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceEndCallInput */
    get_call_id(): [ /* returnType */ boolean, /* value_call_id */ number | null ]
    ref(): MessageVoiceEndCallInput
    set_call_id(value_call_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceEndCallInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceEndCallInput
}
class MessageVoiceEndCallOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceEndCallOutput */
    get_call_id(): [ /* returnType */ boolean, /* value_call_id */ number | null ]
    get_result(): boolean
    ref(): MessageVoiceEndCallOutput
    unref(): void
    static name: string
}
class MessageVoiceGetAllCallInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceGetAllCallInfoOutput */
    get_call_information(): [ /* returnType */ boolean, /* value_call_information */ MessageVoiceGetAllCallInfoOutputCallInformationCall[] | null ]
    get_remote_party_number(): [ /* returnType */ boolean, /* value_remote_party_number */ MessageVoiceGetAllCallInfoOutputRemotePartyNumberCall[] | null ]
    get_result(): boolean
    ref(): MessageVoiceGetAllCallInfoOutput
    unref(): void
    static name: string
}
class MessageVoiceGetAllCallInfoOutputCallInformationCall {
    /* Fields of Qmi-1.0.Qmi.MessageVoiceGetAllCallInfoOutputCallInformationCall */
    id: number
    state: VoiceCallState
    type: VoiceCallType
    direction: VoiceCallDirection
    mode: VoiceCallMode
    multipart_indicator: boolean
    als: VoiceAls
    static name: string
}
class MessageVoiceGetAllCallInfoOutputRemotePartyNumberCall {
    /* Fields of Qmi-1.0.Qmi.MessageVoiceGetAllCallInfoOutputRemotePartyNumberCall */
    id: number
    presentation_indicator: VoicePresentation
    type: string
    static name: string
}
class MessageVoiceGetCallWaitingInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceGetCallWaitingInput */
    get_service_class(): [ /* returnType */ boolean, /* value_service_class */ number | null ]
    ref(): MessageVoiceGetCallWaitingInput
    set_service_class(value_service_class: number): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceGetCallWaitingInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceGetCallWaitingInput
}
class MessageVoiceGetCallWaitingOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceGetCallWaitingOutput */
    get_result(): boolean
    get_service_class(): [ /* returnType */ boolean, /* value_service_class */ number | null ]
    ref(): MessageVoiceGetCallWaitingOutput
    unref(): void
    static name: string
}
class MessageVoiceGetConfigInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceGetConfigInput */
    get_air_timer(): [ /* returnType */ boolean, /* value_air_timer */ boolean | null ]
    get_amr_status(): [ /* returnType */ boolean, /* value_amr_status */ boolean | null ]
    get_auto_answer(): [ /* returnType */ boolean, /* value_auto_answer */ boolean | null ]
    get_nam_index(): [ /* returnType */ boolean, /* value_nam_index */ boolean | null ]
    get_preferred_voice_privacy(): [ /* returnType */ boolean, /* value_preferred_voice_privacy */ boolean | null ]
    get_preferred_voice_service_option(): [ /* returnType */ boolean, /* value_preferred_voice_service_option */ boolean | null ]
    get_roam_timer(): [ /* returnType */ boolean, /* value_roam_timer */ boolean | null ]
    get_tty_mode(): [ /* returnType */ boolean, /* value_tty_mode */ boolean | null ]
    get_voice_domain_preference(): [ /* returnType */ boolean, /* value_voice_domain_preference */ boolean | null ]
    ref(): MessageVoiceGetConfigInput
    set_air_timer(value_air_timer: boolean): boolean
    set_amr_status(value_amr_status: boolean): boolean
    set_auto_answer(value_auto_answer: boolean): boolean
    set_nam_index(value_nam_index: boolean): boolean
    set_preferred_voice_privacy(value_preferred_voice_privacy: boolean): boolean
    set_preferred_voice_service_option(value_preferred_voice_service_option: boolean): boolean
    set_roam_timer(value_roam_timer: boolean): boolean
    set_tty_mode(value_tty_mode: boolean): boolean
    set_voice_domain_preference(value_voice_domain_preference: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceGetConfigInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceGetConfigInput
}
class MessageVoiceGetConfigOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceGetConfigOutput */
    get_air_timer_count(): [ /* returnType */ boolean, /* value_air_timer_count_nam_id */ number | null, /* value_air_timer_count_air_timer */ number | null ]
    get_auto_answer_status(): [ /* returnType */ boolean, /* value_auto_answer_status */ boolean | null ]
    get_current_amr_status(): [ /* returnType */ boolean, /* value_current_amr_status_gsm */ boolean | null, /* value_current_amr_status_wcdma */ VoiceWcdmaAmrStatus | null ]
    get_current_preferred_voice_so(): [ /* returnType */ boolean, /* value_current_preferred_voice_so_nam_id */ number | null, /* value_current_preferred_voice_so_evrc_capability */ boolean | null, /* value_current_preferred_voice_so_home_page_voice_service_option */ VoiceServiceOption | null, /* value_current_preferred_voice_so_home_origination_voice_service_option */ VoiceServiceOption | null, /* value_current_preferred_voice_so_roaming_origination_voice_service_option */ VoiceServiceOption | null ]
    get_current_tty_mode(): [ /* returnType */ boolean, /* value_current_tty_mode */ VoiceTtyMode | null ]
    get_current_voice_domain_preference(): [ /* returnType */ boolean, /* value_current_voice_domain_preference */ VoiceDomain | null ]
    get_current_voice_privacy_preference(): [ /* returnType */ boolean, /* value_current_voice_privacy_preference */ VoicePrivacy | null ]
    get_result(): boolean
    get_roam_timer_count(): [ /* returnType */ boolean, /* value_roam_timer_count_nam_id */ number | null, /* value_roam_timer_count_roam_timer */ number | null ]
    ref(): MessageVoiceGetConfigOutput
    unref(): void
    static name: string
}
class MessageVoiceGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceGetSupportedMessagesOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ Uint8Array[] | null ]
    get_result(): boolean
    ref(): MessageVoiceGetSupportedMessagesOutput
    unref(): void
    static name: string
}
class MessageVoiceIndicationRegisterInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceIndicationRegisterInput */
    get_aoc_events(): [ /* returnType */ boolean, /* value_aoc_events */ boolean | null ]
    get_call_notification_events(): [ /* returnType */ boolean, /* value_call_notification_events */ boolean | null ]
    get_conference_events(): [ /* returnType */ boolean, /* value_conference_events */ boolean | null ]
    get_dtmf_events(): [ /* returnType */ boolean, /* value_dtmf_events */ boolean | null ]
    get_extended_burst_type_international_information_events(): [ /* returnType */ boolean, /* value_extended_burst_type_international_information_events */ boolean | null ]
    get_handover_events(): [ /* returnType */ boolean, /* value_handover_events */ boolean | null ]
    get_modification_events(): [ /* returnType */ boolean, /* value_modification_events */ boolean | null ]
    get_mt_page_miss_information_events(): [ /* returnType */ boolean, /* value_mt_page_miss_information_events */ boolean | null ]
    get_speech_codec_events(): [ /* returnType */ boolean, /* value_speech_codec_events */ boolean | null ]
    get_supplementary_service_notification_events(): [ /* returnType */ boolean, /* value_supplementary_service_notification_events */ boolean | null ]
    get_ussd_notification_events(): [ /* returnType */ boolean, /* value_ussd_notification_events */ boolean | null ]
    get_uus_events(): [ /* returnType */ boolean, /* value_uus_events */ boolean | null ]
    get_voice_privacy_events(): [ /* returnType */ boolean, /* value_voice_privacy_events */ boolean | null ]
    ref(): MessageVoiceIndicationRegisterInput
    set_aoc_events(value_aoc_events: boolean): boolean
    set_call_notification_events(value_call_notification_events: boolean): boolean
    set_conference_events(value_conference_events: boolean): boolean
    set_dtmf_events(value_dtmf_events: boolean): boolean
    set_extended_burst_type_international_information_events(value_extended_burst_type_international_information_events: boolean): boolean
    set_handover_events(value_handover_events: boolean): boolean
    set_modification_events(value_modification_events: boolean): boolean
    set_mt_page_miss_information_events(value_mt_page_miss_information_events: boolean): boolean
    set_speech_codec_events(value_speech_codec_events: boolean): boolean
    set_supplementary_service_notification_events(value_supplementary_service_notification_events: boolean): boolean
    set_ussd_notification_events(value_ussd_notification_events: boolean): boolean
    set_uus_events(value_uus_events: boolean): boolean
    set_voice_privacy_events(value_voice_privacy_events: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceIndicationRegisterInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceIndicationRegisterInput
}
class MessageVoiceIndicationRegisterOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceIndicationRegisterOutput */
    get_result(): boolean
    ref(): MessageVoiceIndicationRegisterOutput
    unref(): void
    static name: string
}
class MessageVoiceManageCallsInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceManageCallsInput */
    get_call_id(): [ /* returnType */ boolean, /* value_call_id */ number | null ]
    get_service_type(): [ /* returnType */ boolean, /* value_service_type */ VoiceSupplementaryServiceType | null ]
    ref(): MessageVoiceManageCallsInput
    set_call_id(value_call_id: number): boolean
    set_service_type(value_service_type: VoiceSupplementaryServiceType): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceManageCallsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceManageCallsInput
}
class MessageVoiceManageCallsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceManageCallsOutput */
    get_result(): boolean
    ref(): MessageVoiceManageCallsOutput
    unref(): void
    static name: string
}
class MessageVoiceOriginateUssdInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceOriginateUssdInput */
    get_uss_data(): [ /* returnType */ boolean, /* value_uss_data_data_coding_scheme */ VoiceUssDataCodingScheme | null, /* value_uss_data_data */ Uint8Array[] | null ]
    ref(): MessageVoiceOriginateUssdInput
    set_uss_data(value_uss_data_data_coding_scheme: VoiceUssDataCodingScheme, value_uss_data_data: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceOriginateUssdInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceOriginateUssdInput
}
class MessageVoiceOriginateUssdNoWaitInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceOriginateUssdNoWaitInput */
    get_uss_data(): [ /* returnType */ boolean, /* value_uss_data_data_coding_scheme */ VoiceUssDataCodingScheme | null, /* value_uss_data_data */ Uint8Array[] | null ]
    ref(): MessageVoiceOriginateUssdNoWaitInput
    set_uss_data(value_uss_data_data_coding_scheme: VoiceUssDataCodingScheme, value_uss_data_data: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceOriginateUssdNoWaitInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceOriginateUssdNoWaitInput
}
class MessageVoiceOriginateUssdNoWaitOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceOriginateUssdNoWaitOutput */
    get_result(): boolean
    ref(): MessageVoiceOriginateUssdNoWaitOutput
    unref(): void
    static name: string
}
class MessageVoiceOriginateUssdOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceOriginateUssdOutput */
    get_alpha_identifier(): [ /* returnType */ boolean, /* value_alpha_identifier_data_coding_scheme */ VoiceAlphaDataCodingScheme | null, /* value_alpha_identifier_alpha */ Uint8Array[] | null ]
    get_call_control_result_type(): [ /* returnType */ boolean, /* value_call_control_result_type */ VoiceCallControlResultType | null ]
    get_call_control_supplementary_service_type(): [ /* returnType */ boolean, /* value_call_control_supplementary_service_type */ VoiceCallControlSupplementaryServiceType | null ]
    get_call_id(): [ /* returnType */ boolean, /* value_call_id */ number | null ]
    get_failure_cause(): [ /* returnType */ boolean, /* value_failure_cause */ VoiceCallEndReason | null ]
    get_result(): boolean
    get_uss_data(): [ /* returnType */ boolean, /* value_uss_data_data_coding_scheme */ VoiceUssDataCodingScheme | null, /* value_uss_data_data */ Uint8Array[] | null ]
    get_uss_data_utf16(): [ /* returnType */ boolean, /* value_uss_data_utf16 */ number[] | null ]
    ref(): MessageVoiceOriginateUssdOutput
    unref(): void
    static name: string
}
class MessageVoiceSetSupplementaryServiceInput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceSetSupplementaryServiceInput */
    get_supplementary_service_information(): [ /* returnType */ boolean, /* value_supplementary_service_information_supplementary_service_action */ VoiceSupplementaryServiceAction | null, /* value_supplementary_service_information_supplementary_service_reason */ VoiceSupplementaryServiceReason | null ]
    ref(): MessageVoiceSetSupplementaryServiceInput
    set_supplementary_service_information(value_supplementary_service_information_supplementary_service_action: VoiceSupplementaryServiceAction, value_supplementary_service_information_supplementary_service_reason: VoiceSupplementaryServiceReason): boolean
    unref(): void
    static name: string
    static new(): MessageVoiceSetSupplementaryServiceInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageVoiceSetSupplementaryServiceInput
}
class MessageVoiceSetSupplementaryServiceOutput {
    /* Methods of Qmi-1.0.Qmi.MessageVoiceSetSupplementaryServiceOutput */
    get_result(): boolean
    get_service_status(): [ /* returnType */ boolean, /* value_service_status_active */ boolean | null, /* value_service_status_provisioned */ boolean | null ]
    ref(): MessageVoiceSetSupplementaryServiceOutput
    unref(): void
    static name: string
}
class MessageWdaGetDataFormatInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdaGetDataFormatInput */
    get_endpoint_info(): [ /* returnType */ boolean, /* value_endpoint_info_endpoint_type */ DataEndpointType | null, /* value_endpoint_info_interface_number */ number | null ]
    ref(): MessageWdaGetDataFormatInput
    set_endpoint_info(value_endpoint_info_endpoint_type: DataEndpointType, value_endpoint_info_interface_number: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdaGetDataFormatInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdaGetDataFormatInput
}
class MessageWdaGetDataFormatOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdaGetDataFormatOutput */
    get_downlink_data_aggregation_max_datagrams(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_max_datagrams */ number | null ]
    get_downlink_data_aggregation_max_size(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_max_size */ number | null ]
    get_downlink_data_aggregation_protocol(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_protocol */ WdaDataAggregationProtocol | null ]
    get_download_minimum_padding(): [ /* returnType */ boolean, /* value_download_minimum_padding */ number | null ]
    get_flow_control(): [ /* returnType */ boolean, /* value_flow_control */ number | null ]
    get_link_layer_protocol(): [ /* returnType */ boolean, /* value_link_layer_protocol */ WdaLinkLayerProtocol | null ]
    get_ndp_signature(): [ /* returnType */ boolean, /* value_ndp_signature */ number | null ]
    get_qos_format(): [ /* returnType */ boolean, /* value_qos_format */ boolean | null ]
    get_result(): boolean
    get_uplink_data_aggregation_max_datagrams(): [ /* returnType */ boolean, /* value_uplink_data_aggregation_max_datagrams */ number | null ]
    get_uplink_data_aggregation_max_size(): [ /* returnType */ boolean, /* value_uplink_data_aggregation_max_size */ number | null ]
    get_uplink_data_aggregation_protocol(): [ /* returnType */ boolean, /* value_uplink_data_aggregation_protocol */ WdaDataAggregationProtocol | null ]
    ref(): MessageWdaGetDataFormatOutput
    unref(): void
    static name: string
}
class MessageWdaGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdaGetSupportedMessagesOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ Uint8Array[] | null ]
    get_result(): boolean
    ref(): MessageWdaGetSupportedMessagesOutput
    unref(): void
    static name: string
}
class MessageWdaSetDataFormatInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdaSetDataFormatInput */
    get_downlink_data_aggregation_max_datagrams(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_max_datagrams */ number | null ]
    get_downlink_data_aggregation_max_size(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_max_size */ number | null ]
    get_downlink_data_aggregation_protocol(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_protocol */ WdaDataAggregationProtocol | null ]
    get_endpoint_info(): [ /* returnType */ boolean, /* value_endpoint_info_endpoint_type */ DataEndpointType | null, /* value_endpoint_info_interface_number */ number | null ]
    get_link_layer_protocol(): [ /* returnType */ boolean, /* value_link_layer_protocol */ WdaLinkLayerProtocol | null ]
    get_ndp_signature(): [ /* returnType */ boolean, /* value_ndp_signature */ number | null ]
    get_qos_format(): [ /* returnType */ boolean, /* value_qos_format */ boolean | null ]
    get_uplink_data_aggregation_protocol(): [ /* returnType */ boolean, /* value_uplink_data_aggregation_protocol */ WdaDataAggregationProtocol | null ]
    ref(): MessageWdaSetDataFormatInput
    set_downlink_data_aggregation_max_datagrams(value_downlink_data_aggregation_max_datagrams: number): boolean
    set_downlink_data_aggregation_max_size(value_downlink_data_aggregation_max_size: number): boolean
    set_downlink_data_aggregation_protocol(value_downlink_data_aggregation_protocol: WdaDataAggregationProtocol): boolean
    set_endpoint_info(value_endpoint_info_endpoint_type: DataEndpointType, value_endpoint_info_interface_number: number): boolean
    set_link_layer_protocol(value_link_layer_protocol: WdaLinkLayerProtocol): boolean
    set_ndp_signature(value_ndp_signature: number): boolean
    set_qos_format(value_qos_format: boolean): boolean
    set_uplink_data_aggregation_protocol(value_uplink_data_aggregation_protocol: WdaDataAggregationProtocol): boolean
    unref(): void
    static name: string
    static new(): MessageWdaSetDataFormatInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdaSetDataFormatInput
}
class MessageWdaSetDataFormatOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdaSetDataFormatOutput */
    get_downlink_data_aggregation_max_datagrams(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_max_datagrams */ number | null ]
    get_downlink_data_aggregation_max_size(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_max_size */ number | null ]
    get_downlink_data_aggregation_protocol(): [ /* returnType */ boolean, /* value_downlink_data_aggregation_protocol */ WdaDataAggregationProtocol | null ]
    get_download_minimum_padding(): [ /* returnType */ boolean, /* value_download_minimum_padding */ number | null ]
    get_flow_control(): [ /* returnType */ boolean, /* value_flow_control */ number | null ]
    get_link_layer_protocol(): [ /* returnType */ boolean, /* value_link_layer_protocol */ WdaLinkLayerProtocol | null ]
    get_ndp_signature(): [ /* returnType */ boolean, /* value_ndp_signature */ number | null ]
    get_qos_format(): [ /* returnType */ boolean, /* value_qos_format */ boolean | null ]
    get_result(): boolean
    get_uplink_data_aggregation_max_datagrams(): [ /* returnType */ boolean, /* value_uplink_data_aggregation_max_datagrams */ number | null ]
    get_uplink_data_aggregation_max_size(): [ /* returnType */ boolean, /* value_uplink_data_aggregation_max_size */ number | null ]
    get_uplink_data_aggregation_protocol(): [ /* returnType */ boolean, /* value_uplink_data_aggregation_protocol */ WdaDataAggregationProtocol | null ]
    ref(): MessageWdaSetDataFormatOutput
    unref(): void
    static name: string
}
class MessageWdsBindDataPortInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsBindDataPortInput */
    get_data_port(): [ /* returnType */ boolean, /* value_data_port */ SioPort | null ]
    ref(): MessageWdsBindDataPortInput
    set_data_port(value_data_port: SioPort): boolean
    unref(): void
    static name: string
    static new(): MessageWdsBindDataPortInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsBindDataPortInput
}
class MessageWdsBindDataPortOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsBindDataPortOutput */
    get_result(): boolean
    ref(): MessageWdsBindDataPortOutput
    unref(): void
    static name: string
}
class MessageWdsBindMuxDataPortInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsBindMuxDataPortInput */
    get_client_type(): [ /* returnType */ boolean, /* value_client_type */ WdsClientType | null ]
    get_endpoint_info(): [ /* returnType */ boolean, /* value_endpoint_info_endpoint_type */ DataEndpointType | null, /* value_endpoint_info_interface_number */ number | null ]
    get_mux_id(): [ /* returnType */ boolean, /* value_mux_id */ number | null ]
    ref(): MessageWdsBindMuxDataPortInput
    set_client_type(value_client_type: WdsClientType): boolean
    set_endpoint_info(value_endpoint_info_endpoint_type: DataEndpointType, value_endpoint_info_interface_number: number): boolean
    set_mux_id(value_mux_id: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdsBindMuxDataPortInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsBindMuxDataPortInput
}
class MessageWdsBindMuxDataPortOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsBindMuxDataPortOutput */
    get_result(): boolean
    ref(): MessageWdsBindMuxDataPortOutput
    unref(): void
    static name: string
}
class MessageWdsCreateProfileInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsCreateProfileInput */
    get_apn_disabled_flag(): [ /* returnType */ boolean, /* value_apn_disabled_flag */ boolean | null ]
    get_apn_name(): [ /* returnType */ boolean, /* value_apn_name */ string | null ]
    get_apn_type_mask(): [ /* returnType */ boolean, /* value_apn_type_mask */ WdsApnTypeMask | null ]
    get_authentication(): [ /* returnType */ boolean, /* value_authentication */ WdsAuthentication | null ]
    get_gprs_minimum_qos(): [ /* returnType */ boolean, /* value_gprs_minimum_qos_precedence_class */ number | null, /* value_gprs_minimum_qos_delay_class */ number | null, /* value_gprs_minimum_qos_reliability_class */ number | null, /* value_gprs_minimum_qos_peak_throughput_class */ number | null, /* value_gprs_minimum_qos_mean_throughput_class */ number | null ]
    get_gprs_requested_qos(): [ /* returnType */ boolean, /* value_gprs_requested_qos_precedence_class */ number | null, /* value_gprs_requested_qos_delay_class */ number | null, /* value_gprs_requested_qos_reliability_class */ number | null, /* value_gprs_requested_qos_peak_throughput_class */ number | null, /* value_gprs_requested_qos_mean_throughput_class */ number | null ]
    get_imcn_flag(): [ /* returnType */ boolean, /* value_imcn_flag */ boolean | null ]
    get_ipv4_address_preference(): [ /* returnType */ boolean, /* value_ipv4_address_preference */ number | null ]
    get_ipv6_address_preference(): [ /* returnType */ boolean, /* value_ipv6_address_preference_address */ number[] | null ]
    get_ipv6_primary_dns_address_preference(): [ /* returnType */ boolean, /* value_ipv6_primary_dns_address_preference */ number[] | null ]
    get_ipv6_secondary_dns_address_preference(): [ /* returnType */ boolean, /* value_ipv6_secondary_dns_address_preference */ number[] | null ]
    get_lte_qos_parameters(): [ /* returnType */ boolean, /* value_lte_qos_parameters_qos_class_identifier */ WdsQosClassIdentifier | null, /* value_lte_qos_parameters_guaranteed_downlink_bitrate */ number | null, /* value_lte_qos_parameters_max_downlink_bitrate */ number | null, /* value_lte_qos_parameters_guaranteed_uplink_bitrate */ number | null, /* value_lte_qos_parameters_max_uplink_bitrate */ number | null ]
    get_password(): [ /* returnType */ boolean, /* value_password */ string | null ]
    get_pcscf_address_using_dhcp(): [ /* returnType */ boolean, /* value_pcscf_address_using_dhcp */ boolean | null ]
    get_pcscf_address_using_pco(): [ /* returnType */ boolean, /* value_pcscf_address_using_pco */ boolean | null ]
    get_pdp_context_number(): [ /* returnType */ boolean, /* value_pdp_context_number */ number | null ]
    get_pdp_context_primary_id(): [ /* returnType */ boolean, /* value_pdp_context_primary_id */ number | null ]
    get_pdp_context_secondary_flag(): [ /* returnType */ boolean, /* value_pdp_context_secondary_flag */ boolean | null ]
    get_pdp_data_compression_type(): [ /* returnType */ boolean, /* value_pdp_data_compression_type */ WdsPdpDataCompressionType | null ]
    get_pdp_header_compression_type(): [ /* returnType */ boolean, /* value_pdp_header_compression_type */ WdsPdpHeaderCompressionType | null ]
    get_pdp_type(): [ /* returnType */ boolean, /* value_pdp_type */ WdsPdpType | null ]
    get_primary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_primary_ipv4_dns_address */ number | null ]
    get_profile_name(): [ /* returnType */ boolean, /* value_profile_name */ string | null ]
    get_profile_type(): [ /* returnType */ boolean, /* value_profile_type */ WdsProfileType | null ]
    get_roaming_disallowed_flag(): [ /* returnType */ boolean, /* value_roaming_disallowed_flag */ boolean | null ]
    get_secondary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_secondary_ipv4_dns_address */ number | null ]
    get_umts_minimum_qos(): [ /* returnType */ boolean, /* value_umts_minimum_qos_traffic_class */ WdsTrafficClass | null, /* value_umts_minimum_qos_max_uplink_bitrate */ number | null, /* value_umts_minimum_qos_max_downlink_bitrate */ number | null, /* value_umts_minimum_qos_guaranteed_uplink_bitrate */ number | null, /* value_umts_minimum_qos_guaranteed_downlink_bitrate */ number | null, /* value_umts_minimum_qos_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_minimum_qos_maximum_sdu_size */ number | null, /* value_umts_minimum_qos_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_minimum_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_minimum_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_minimum_qos_transfer_delay */ number | null, /* value_umts_minimum_qos_traffic_handling_priority */ number | null ]
    get_umts_minimum_qos_with_signaling_indication_flag(): [ /* returnType */ boolean, /* value_umts_minimum_qos_with_signaling_indication_flag_traffic_class */ WdsTrafficClass | null, /* value_umts_minimum_qos_with_signaling_indication_flag_max_uplink_bitrate */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_max_downlink_bitrate */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_minimum_qos_with_signaling_indication_flag_maximum_sdu_size */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_minimum_qos_with_signaling_indication_flag_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_minimum_qos_with_signaling_indication_flag_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_minimum_qos_with_signaling_indication_flag_transfer_delay */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_traffic_handling_priority */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_signaling_indication */ number | null ]
    get_umts_requested_qos(): [ /* returnType */ boolean, /* value_umts_requested_qos_traffic_class */ WdsTrafficClass | null, /* value_umts_requested_qos_max_uplink_bitrate */ number | null, /* value_umts_requested_qos_max_downlink_bitrate */ number | null, /* value_umts_requested_qos_guaranteed_uplink_bitrate */ number | null, /* value_umts_requested_qos_guaranteed_downlink_bitrate */ number | null, /* value_umts_requested_qos_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_requested_qos_maximum_sdu_size */ number | null, /* value_umts_requested_qos_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_requested_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_requested_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_requested_qos_transfer_delay */ number | null, /* value_umts_requested_qos_traffic_handling_priority */ number | null ]
    get_umts_requested_qos_with_signaling_indication_flag(): [ /* returnType */ boolean, /* value_umts_requested_qos_with_signaling_indication_flag_traffic_class */ WdsTrafficClass | null, /* value_umts_requested_qos_with_signaling_indication_flag_max_uplink_bitrate */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_max_downlink_bitrate */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_requested_qos_with_signaling_indication_flag_maximum_sdu_size */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_requested_qos_with_signaling_indication_flag_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_requested_qos_with_signaling_indication_flag_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_requested_qos_with_signaling_indication_flag_transfer_delay */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_traffic_handling_priority */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_signaling_indication */ number | null ]
    get_username(): [ /* returnType */ boolean, /* value_username */ string | null ]
    ref(): MessageWdsCreateProfileInput
    set_apn_disabled_flag(value_apn_disabled_flag: boolean): boolean
    set_apn_name(value_apn_name: string): boolean
    set_apn_type_mask(value_apn_type_mask: WdsApnTypeMask): boolean
    set_authentication(value_authentication: WdsAuthentication): boolean
    set_gprs_minimum_qos(value_gprs_minimum_qos_precedence_class: number, value_gprs_minimum_qos_delay_class: number, value_gprs_minimum_qos_reliability_class: number, value_gprs_minimum_qos_peak_throughput_class: number, value_gprs_minimum_qos_mean_throughput_class: number): boolean
    set_gprs_requested_qos(value_gprs_requested_qos_precedence_class: number, value_gprs_requested_qos_delay_class: number, value_gprs_requested_qos_reliability_class: number, value_gprs_requested_qos_peak_throughput_class: number, value_gprs_requested_qos_mean_throughput_class: number): boolean
    set_imcn_flag(value_imcn_flag: boolean): boolean
    set_ipv4_address_preference(value_ipv4_address_preference: number): boolean
    set_ipv6_address_preference(value_ipv6_address_preference_address: number[]): boolean
    set_ipv6_primary_dns_address_preference(value_ipv6_primary_dns_address_preference: number[]): boolean
    set_ipv6_secondary_dns_address_preference(value_ipv6_secondary_dns_address_preference: number[]): boolean
    set_lte_qos_parameters(value_lte_qos_parameters_qos_class_identifier: WdsQosClassIdentifier, value_lte_qos_parameters_guaranteed_downlink_bitrate: number, value_lte_qos_parameters_max_downlink_bitrate: number, value_lte_qos_parameters_guaranteed_uplink_bitrate: number, value_lte_qos_parameters_max_uplink_bitrate: number): boolean
    set_password(value_password: string): boolean
    set_pcscf_address_using_dhcp(value_pcscf_address_using_dhcp: boolean): boolean
    set_pcscf_address_using_pco(value_pcscf_address_using_pco: boolean): boolean
    set_pdp_context_number(value_pdp_context_number: number): boolean
    set_pdp_context_primary_id(value_pdp_context_primary_id: number): boolean
    set_pdp_context_secondary_flag(value_pdp_context_secondary_flag: boolean): boolean
    set_pdp_data_compression_type(value_pdp_data_compression_type: WdsPdpDataCompressionType): boolean
    set_pdp_header_compression_type(value_pdp_header_compression_type: WdsPdpHeaderCompressionType): boolean
    set_pdp_type(value_pdp_type: WdsPdpType): boolean
    set_primary_ipv4_dns_address(value_primary_ipv4_dns_address: number): boolean
    set_profile_name(value_profile_name: string): boolean
    set_profile_type(value_profile_type: WdsProfileType): boolean
    set_roaming_disallowed_flag(value_roaming_disallowed_flag: boolean): boolean
    set_secondary_ipv4_dns_address(value_secondary_ipv4_dns_address: number): boolean
    set_umts_minimum_qos(value_umts_minimum_qos_traffic_class: WdsTrafficClass, value_umts_minimum_qos_max_uplink_bitrate: number, value_umts_minimum_qos_max_downlink_bitrate: number, value_umts_minimum_qos_guaranteed_uplink_bitrate: number, value_umts_minimum_qos_guaranteed_downlink_bitrate: number, value_umts_minimum_qos_qos_delivery_order: WdsDeliveryOrder, value_umts_minimum_qos_maximum_sdu_size: number, value_umts_minimum_qos_sdu_error_ratio: WdsSduErrorRatio, value_umts_minimum_qos_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_minimum_qos_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_minimum_qos_transfer_delay: number, value_umts_minimum_qos_traffic_handling_priority: number): boolean
    set_umts_minimum_qos_with_signaling_indication_flag(value_umts_minimum_qos_with_signaling_indication_flag_traffic_class: WdsTrafficClass, value_umts_minimum_qos_with_signaling_indication_flag_max_uplink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_max_downlink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_qos_delivery_order: WdsDeliveryOrder, value_umts_minimum_qos_with_signaling_indication_flag_maximum_sdu_size: number, value_umts_minimum_qos_with_signaling_indication_flag_sdu_error_ratio: WdsSduErrorRatio, value_umts_minimum_qos_with_signaling_indication_flag_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_minimum_qos_with_signaling_indication_flag_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_minimum_qos_with_signaling_indication_flag_transfer_delay: number, value_umts_minimum_qos_with_signaling_indication_flag_traffic_handling_priority: number, value_umts_minimum_qos_with_signaling_indication_flag_signaling_indication: number): boolean
    set_umts_requested_qos(value_umts_requested_qos_traffic_class: WdsTrafficClass, value_umts_requested_qos_max_uplink_bitrate: number, value_umts_requested_qos_max_downlink_bitrate: number, value_umts_requested_qos_guaranteed_uplink_bitrate: number, value_umts_requested_qos_guaranteed_downlink_bitrate: number, value_umts_requested_qos_qos_delivery_order: WdsDeliveryOrder, value_umts_requested_qos_maximum_sdu_size: number, value_umts_requested_qos_sdu_error_ratio: WdsSduErrorRatio, value_umts_requested_qos_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_requested_qos_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_requested_qos_transfer_delay: number, value_umts_requested_qos_traffic_handling_priority: number): boolean
    set_umts_requested_qos_with_signaling_indication_flag(value_umts_requested_qos_with_signaling_indication_flag_traffic_class: WdsTrafficClass, value_umts_requested_qos_with_signaling_indication_flag_max_uplink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_max_downlink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_qos_delivery_order: WdsDeliveryOrder, value_umts_requested_qos_with_signaling_indication_flag_maximum_sdu_size: number, value_umts_requested_qos_with_signaling_indication_flag_sdu_error_ratio: WdsSduErrorRatio, value_umts_requested_qos_with_signaling_indication_flag_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_requested_qos_with_signaling_indication_flag_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_requested_qos_with_signaling_indication_flag_transfer_delay: number, value_umts_requested_qos_with_signaling_indication_flag_traffic_handling_priority: number, value_umts_requested_qos_with_signaling_indication_flag_signaling_indication: number): boolean
    set_username(value_username: string): boolean
    unref(): void
    static name: string
    static new(): MessageWdsCreateProfileInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsCreateProfileInput
}
class MessageWdsCreateProfileOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsCreateProfileOutput */
    get_extended_error_code(): [ /* returnType */ boolean, /* value_extended_error_code */ WdsDsProfileError | null ]
    get_profile_identifier(): [ /* returnType */ boolean, /* value_profile_identifier_profile_type */ WdsProfileType | null, /* value_profile_identifier_profile_index */ number | null ]
    get_result(): boolean
    ref(): MessageWdsCreateProfileOutput
    unref(): void
    static name: string
}
class MessageWdsDeleteProfileInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsDeleteProfileInput */
    get_profile_identifier(): [ /* returnType */ boolean, /* value_profile_identifier_profile_type */ WdsProfileType | null, /* value_profile_identifier_profile_index */ number | null ]
    ref(): MessageWdsDeleteProfileInput
    set_profile_identifier(value_profile_identifier_profile_type: WdsProfileType, value_profile_identifier_profile_index: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdsDeleteProfileInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsDeleteProfileInput
}
class MessageWdsDeleteProfileOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsDeleteProfileOutput */
    get_extended_error_code(): [ /* returnType */ boolean, /* value_extended_error_code */ WdsDsProfileError | null ]
    get_result(): boolean
    ref(): MessageWdsDeleteProfileOutput
    unref(): void
    static name: string
}
class MessageWdsGetAutoconnectSettingsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetAutoconnectSettingsOutput */
    get_result(): boolean
    get_roaming(): [ /* returnType */ boolean, /* value_roaming */ WdsAutoconnectSettingRoaming | null ]
    get_status(): [ /* returnType */ boolean, /* value_status */ WdsAutoconnectSetting | null ]
    ref(): MessageWdsGetAutoconnectSettingsOutput
    unref(): void
    static name: string
}
class MessageWdsGetChannelRatesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetChannelRatesOutput */
    get_channel_rates(): [ /* returnType */ boolean, /* value_channel_rates_channel_tx_rate_bps */ number | null, /* value_channel_rates_channel_rx_rate_bps */ number | null, /* value_channel_rates_max_channel_tx_rate_bps */ number | null, /* value_channel_rates_max_channel_rx_rate_bps */ number | null ]
    get_result(): boolean
    ref(): MessageWdsGetChannelRatesOutput
    unref(): void
    static name: string
}
class MessageWdsGetCurrentDataBearerTechnologyOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetCurrentDataBearerTechnologyOutput */
    get_current(): [ /* returnType */ boolean, /* value_current_network_type */ WdsNetworkType | null, /* value_current_rat_mask */ number | null, /* value_current_so_mask */ number | null ]
    get_last(): [ /* returnType */ boolean, /* value_last_network_type */ WdsNetworkType | null, /* value_last_rat_mask */ number | null, /* value_last_so_mask */ number | null ]
    get_result(): boolean
    ref(): MessageWdsGetCurrentDataBearerTechnologyOutput
    unref(): void
    static name: string
}
class MessageWdsGetCurrentSettingsInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetCurrentSettingsInput */
    get_requested_settings(): [ /* returnType */ boolean, /* value_requested_settings */ WdsGetCurrentSettingsRequestedSettings | null ]
    ref(): MessageWdsGetCurrentSettingsInput
    set_requested_settings(value_requested_settings: WdsGetCurrentSettingsRequestedSettings): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetCurrentSettingsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetCurrentSettingsInput
}
class MessageWdsGetCurrentSettingsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetCurrentSettingsOutput */
    get_apn_name(): [ /* returnType */ boolean, /* value_apn_name */ string | null ]
    get_authentication(): [ /* returnType */ boolean, /* value_authentication */ WdsAuthentication | null ]
    get_domain_name_list(): [ /* returnType */ boolean, /* value_domain_name_list */ string[] | null ]
    get_extended_technology_preference(): [ /* returnType */ boolean, /* value_extended_technology_preference */ WdsExtendedTechnologyPreference | null ]
    get_gprs_granted_qos(): [ /* returnType */ boolean, /* value_gprs_granted_qos_precedence_class */ number | null, /* value_gprs_granted_qos_delay_class */ number | null, /* value_gprs_granted_qos_reliability_class */ number | null, /* value_gprs_granted_qos_peak_throughput_class */ number | null, /* value_gprs_granted_qos_mean_throughput_class */ number | null ]
    get_imcn_flag(): [ /* returnType */ boolean, /* value_imcn_flag */ number | null ]
    get_ip_family(): [ /* returnType */ boolean, /* value_ip_family */ WdsIpFamily | null ]
    get_ipv4_address(): [ /* returnType */ boolean, /* value_ipv4_address */ number | null ]
    get_ipv4_gateway_address(): [ /* returnType */ boolean, /* value_ipv4_gateway_address */ number | null ]
    get_ipv4_gateway_subnet_mask(): [ /* returnType */ boolean, /* value_ipv4_gateway_subnet_mask */ number | null ]
    get_ipv6_address(): [ /* returnType */ boolean, /* value_ipv6_address_address */ number[] | null, /* value_ipv6_address_prefix_length */ number | null ]
    get_ipv6_gateway_address(): [ /* returnType */ boolean, /* value_ipv6_gateway_address_address */ number[] | null, /* value_ipv6_gateway_address_prefix_length */ number | null ]
    get_ipv6_primary_dns_address(): [ /* returnType */ boolean, /* value_ipv6_primary_dns_address */ number[] | null ]
    get_ipv6_secondary_dns_address(): [ /* returnType */ boolean, /* value_ipv6_secondary_dns_address */ number[] | null ]
    get_mtu(): [ /* returnType */ boolean, /* value_mtu */ number | null ]
    get_pcscf_address_using_pco(): [ /* returnType */ boolean, /* value_pcscf_address_using_pco */ number | null ]
    get_pcscf_domain_name_list(): [ /* returnType */ boolean, /* value_pcscf_domain_name_list */ string[] | null ]
    get_pcscf_server_address_list(): [ /* returnType */ boolean, /* value_pcscf_server_address_list */ number[] | null ]
    get_pdp_type(): [ /* returnType */ boolean, /* value_pdp_type */ WdsPdpType | null ]
    get_primary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_primary_ipv4_dns_address */ number | null ]
    get_profile_id(): [ /* returnType */ boolean, /* value_profile_id_profile_type */ WdsProfileType | null, /* value_profile_id_profile_index */ number | null ]
    get_profile_name(): [ /* returnType */ boolean, /* value_profile_name */ string | null ]
    get_result(): boolean
    get_secondary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_secondary_ipv4_dns_address */ number | null ]
    get_umts_granted_qos(): [ /* returnType */ boolean, /* value_umts_granted_qos_traffic_class */ WdsTrafficClass | null, /* value_umts_granted_qos_max_uplink_bitrate */ number | null, /* value_umts_granted_qos_max_downlink_bitrate */ number | null, /* value_umts_granted_qos_guaranteed_uplink_bitrate */ number | null, /* value_umts_granted_qos_guaranteed_downlink_bitrate */ number | null, /* value_umts_granted_qos_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_granted_qos_maximum_sdu_size */ number | null, /* value_umts_granted_qos_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_granted_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_granted_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_granted_qos_transfer_delay */ number | null, /* value_umts_granted_qos_traffic_handling_priority */ number | null ]
    get_username(): [ /* returnType */ boolean, /* value_username */ string | null ]
    ref(): MessageWdsGetCurrentSettingsOutput
    unref(): void
    static name: string
}
class MessageWdsGetDataBearerTechnologyOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetDataBearerTechnologyOutput */
    get_current(): [ /* returnType */ boolean, /* value_current */ WdsDataBearerTechnology | null ]
    get_last(): [ /* returnType */ boolean, /* value_last */ WdsDataBearerTechnology | null ]
    get_result(): boolean
    ref(): MessageWdsGetDataBearerTechnologyOutput
    unref(): void
    static name: string
}
class MessageWdsGetDefaultProfileNumberInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetDefaultProfileNumberInput */
    get_profile_type(): [ /* returnType */ boolean, /* value_profile_type_type */ WdsProfileType | null, /* value_profile_type_family */ WdsProfileFamily | null ]
    ref(): MessageWdsGetDefaultProfileNumberInput
    set_profile_type(value_profile_type_type: WdsProfileType, value_profile_type_family: WdsProfileFamily): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetDefaultProfileNumberInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetDefaultProfileNumberInput
}
class MessageWdsGetDefaultProfileNumberOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetDefaultProfileNumberOutput */
    get_extended_error_code(): [ /* returnType */ boolean, /* value_extended_error_code */ WdsDsProfileError | null ]
    get_index(): [ /* returnType */ boolean, /* value_index */ number | null ]
    get_result(): boolean
    ref(): MessageWdsGetDefaultProfileNumberOutput
    unref(): void
    static name: string
}
class MessageWdsGetDefaultSettingsInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetDefaultSettingsInput */
    get_profile_type(): [ /* returnType */ boolean, /* value_profile_type */ WdsProfileType | null ]
    ref(): MessageWdsGetDefaultSettingsInput
    set_profile_type(value_profile_type: WdsProfileType): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetDefaultSettingsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetDefaultSettingsInput
}
class MessageWdsGetDefaultSettingsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetDefaultSettingsOutput */
    get_apn_name(): [ /* returnType */ boolean, /* value_apn_name */ string | null ]
    get_authentication(): [ /* returnType */ boolean, /* value_authentication */ WdsAuthentication | null ]
    get_extended_error_code(): [ /* returnType */ boolean, /* value_extended_error_code */ WdsDsProfileError | null ]
    get_gprs_minimum_qos(): [ /* returnType */ boolean, /* value_gprs_minimum_qos_precedence_class */ number | null, /* value_gprs_minimum_qos_delay_class */ number | null, /* value_gprs_minimum_qos_reliability_class */ number | null, /* value_gprs_minimum_qos_peak_throughput_class */ number | null, /* value_gprs_minimum_qos_mean_throughput_class */ number | null ]
    get_gprs_requested_qos(): [ /* returnType */ boolean, /* value_gprs_requested_qos_precedence_class */ number | null, /* value_gprs_requested_qos_delay_class */ number | null, /* value_gprs_requested_qos_reliability_class */ number | null, /* value_gprs_requested_qos_peak_throughput_class */ number | null, /* value_gprs_requested_qos_mean_throughput_class */ number | null ]
    get_imcn_flag(): [ /* returnType */ boolean, /* value_imcn_flag */ boolean | null ]
    get_ipv4_address_preference(): [ /* returnType */ boolean, /* value_ipv4_address_preference */ number | null ]
    get_ipv6_address_preference(): [ /* returnType */ boolean, /* value_ipv6_address_preference_address */ number[] | null ]
    get_ipv6_primary_dns_address_preference(): [ /* returnType */ boolean, /* value_ipv6_primary_dns_address_preference */ number[] | null ]
    get_ipv6_secondary_dns_address_preference(): [ /* returnType */ boolean, /* value_ipv6_secondary_dns_address_preference */ number[] | null ]
    get_lte_qos_parameters(): [ /* returnType */ boolean, /* value_lte_qos_parameters_qos_class_identifier */ WdsQosClassIdentifier | null, /* value_lte_qos_parameters_guaranteed_downlink_bitrate */ number | null, /* value_lte_qos_parameters_max_downlink_bitrate */ number | null, /* value_lte_qos_parameters_guaranteed_uplink_bitrate */ number | null, /* value_lte_qos_parameters_max_uplink_bitrate */ number | null ]
    get_password(): [ /* returnType */ boolean, /* value_password */ string | null ]
    get_pcscf_address_using_dhcp(): [ /* returnType */ boolean, /* value_pcscf_address_using_dhcp */ boolean | null ]
    get_pcscf_address_using_pco(): [ /* returnType */ boolean, /* value_pcscf_address_using_pco */ boolean | null ]
    get_pdp_context_number(): [ /* returnType */ boolean, /* value_pdp_context_number */ number | null ]
    get_pdp_context_primary_id(): [ /* returnType */ boolean, /* value_pdp_context_primary_id */ number | null ]
    get_pdp_context_secondary_flag(): [ /* returnType */ boolean, /* value_pdp_context_secondary_flag */ boolean | null ]
    get_pdp_data_compression_type(): [ /* returnType */ boolean, /* value_pdp_data_compression_type */ WdsPdpDataCompressionType | null ]
    get_pdp_header_compression_type(): [ /* returnType */ boolean, /* value_pdp_header_compression_type */ WdsPdpHeaderCompressionType | null ]
    get_pdp_type(): [ /* returnType */ boolean, /* value_pdp_type */ WdsPdpType | null ]
    get_primary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_primary_ipv4_dns_address */ number | null ]
    get_profile_name(): [ /* returnType */ boolean, /* value_profile_name */ string | null ]
    get_result(): boolean
    get_secondary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_secondary_ipv4_dns_address */ number | null ]
    get_umts_minimum_qos(): [ /* returnType */ boolean, /* value_umts_minimum_qos_traffic_class */ WdsTrafficClass | null, /* value_umts_minimum_qos_max_uplink_bitrate */ number | null, /* value_umts_minimum_qos_max_downlink_bitrate */ number | null, /* value_umts_minimum_qos_guaranteed_uplink_bitrate */ number | null, /* value_umts_minimum_qos_guaranteed_downlink_bitrate */ number | null, /* value_umts_minimum_qos_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_minimum_qos_maximum_sdu_size */ number | null, /* value_umts_minimum_qos_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_minimum_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_minimum_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_minimum_qos_transfer_delay */ number | null, /* value_umts_minimum_qos_traffic_handling_priority */ number | null ]
    get_umts_minimum_qos_with_signaling_indication_flag(): [ /* returnType */ boolean, /* value_umts_minimum_qos_with_signaling_indication_flag_traffic_class */ WdsTrafficClass | null, /* value_umts_minimum_qos_with_signaling_indication_flag_max_uplink_bitrate */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_max_downlink_bitrate */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_minimum_qos_with_signaling_indication_flag_maximum_sdu_size */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_minimum_qos_with_signaling_indication_flag_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_minimum_qos_with_signaling_indication_flag_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_minimum_qos_with_signaling_indication_flag_transfer_delay */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_traffic_handling_priority */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_signaling_indication */ number | null ]
    get_umts_requested_qos(): [ /* returnType */ boolean, /* value_umts_requested_qos_traffic_class */ WdsTrafficClass | null, /* value_umts_requested_qos_max_uplink_bitrate */ number | null, /* value_umts_requested_qos_max_downlink_bitrate */ number | null, /* value_umts_requested_qos_guaranteed_uplink_bitrate */ number | null, /* value_umts_requested_qos_guaranteed_downlink_bitrate */ number | null, /* value_umts_requested_qos_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_requested_qos_maximum_sdu_size */ number | null, /* value_umts_requested_qos_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_requested_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_requested_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_requested_qos_transfer_delay */ number | null, /* value_umts_requested_qos_traffic_handling_priority */ number | null ]
    get_umts_requested_qos_with_signaling_indication_flag(): [ /* returnType */ boolean, /* value_umts_requested_qos_with_signaling_indication_flag_traffic_class */ WdsTrafficClass | null, /* value_umts_requested_qos_with_signaling_indication_flag_max_uplink_bitrate */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_max_downlink_bitrate */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_requested_qos_with_signaling_indication_flag_maximum_sdu_size */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_requested_qos_with_signaling_indication_flag_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_requested_qos_with_signaling_indication_flag_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_requested_qos_with_signaling_indication_flag_transfer_delay */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_traffic_handling_priority */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_signaling_indication */ number | null ]
    get_username(): [ /* returnType */ boolean, /* value_username */ string | null ]
    ref(): MessageWdsGetDefaultSettingsOutput
    unref(): void
    static name: string
}
class MessageWdsGetDormancyStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetDormancyStatusOutput */
    get_dormancy_status(): [ /* returnType */ boolean, /* value_dormancy_status */ WdsDormancyStatus | null ]
    get_result(): boolean
    ref(): MessageWdsGetDormancyStatusOutput
    unref(): void
    static name: string
}
class MessageWdsGetLteAttachParametersOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetLteAttachParametersOutput */
    get_apn(): [ /* returnType */ boolean, /* value_apn */ string | null ]
    get_ip_support_type(): [ /* returnType */ boolean, /* value_ip_support_type */ WdsIpSupportType | null ]
    get_ota_attach_performed(): [ /* returnType */ boolean, /* value_ota_attach_performed */ boolean | null ]
    get_result(): boolean
    ref(): MessageWdsGetLteAttachParametersOutput
    unref(): void
    static name: string
}
class MessageWdsGetLteAttachPdnListOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetLteAttachPdnListOutput */
    get_current_list(): [ /* returnType */ boolean, /* value_current_list */ number[] | null ]
    get_pending_list(): [ /* returnType */ boolean, /* value_pending_list */ number[] | null ]
    get_result(): boolean
    ref(): MessageWdsGetLteAttachPdnListOutput
    unref(): void
    static name: string
}
class MessageWdsGetMaxLteAttachPdnNumberOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetMaxLteAttachPdnNumberOutput */
    get_info(): [ /* returnType */ boolean, /* value_info */ number | null ]
    get_result(): boolean
    ref(): MessageWdsGetMaxLteAttachPdnNumberOutput
    unref(): void
    static name: string
}
class MessageWdsGetPacketServiceStatusOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetPacketServiceStatusOutput */
    get_connection_status(): [ /* returnType */ boolean, /* value_connection_status */ WdsConnectionStatus | null ]
    get_result(): boolean
    ref(): MessageWdsGetPacketServiceStatusOutput
    unref(): void
    static name: string
}
class MessageWdsGetPacketStatisticsInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetPacketStatisticsInput */
    get_mask(): [ /* returnType */ boolean, /* value_mask */ WdsPacketStatisticsMaskFlag | null ]
    ref(): MessageWdsGetPacketStatisticsInput
    set_mask(value_mask: WdsPacketStatisticsMaskFlag): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetPacketStatisticsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetPacketStatisticsInput
}
class MessageWdsGetPacketStatisticsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetPacketStatisticsOutput */
    get_last_call_rx_bytes_ok(): [ /* returnType */ boolean, /* value_last_call_rx_bytes_ok */ number | null ]
    get_last_call_tx_bytes_ok(): [ /* returnType */ boolean, /* value_last_call_tx_bytes_ok */ number | null ]
    get_result(): boolean
    get_rx_bytes_ok(): [ /* returnType */ boolean, /* value_rx_bytes_ok */ number | null ]
    get_rx_overflows(): [ /* returnType */ boolean, /* value_rx_overflows */ number | null ]
    get_rx_packets_dropped(): [ /* returnType */ boolean, /* value_rx_packets_dropped */ number | null ]
    get_rx_packets_error(): [ /* returnType */ boolean, /* value_rx_packets_error */ number | null ]
    get_rx_packets_ok(): [ /* returnType */ boolean, /* value_rx_packets_ok */ number | null ]
    get_tx_bytes_ok(): [ /* returnType */ boolean, /* value_tx_bytes_ok */ number | null ]
    get_tx_overflows(): [ /* returnType */ boolean, /* value_tx_overflows */ number | null ]
    get_tx_packets_dropped(): [ /* returnType */ boolean, /* value_tx_packets_dropped */ number | null ]
    get_tx_packets_error(): [ /* returnType */ boolean, /* value_tx_packets_error */ number | null ]
    get_tx_packets_ok(): [ /* returnType */ boolean, /* value_tx_packets_ok */ number | null ]
    ref(): MessageWdsGetPacketStatisticsOutput
    unref(): void
    static name: string
}
class MessageWdsGetPdnThrottleInfoInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetPdnThrottleInfoInput */
    get_network_type(): [ /* returnType */ boolean, /* value_network_type */ WdsDataSystemNetworkType | null ]
    ref(): MessageWdsGetPdnThrottleInfoInput
    set_network_type(value_network_type: WdsDataSystemNetworkType): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetPdnThrottleInfoInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetPdnThrottleInfoInput
}
class MessageWdsGetPdnThrottleInfoOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetPdnThrottleInfoOutput */
    get_info(): [ /* returnType */ boolean, /* value_info */ MessageWdsGetPdnThrottleInfoOutputInfoElement[] | null ]
    get_result(): boolean
    ref(): MessageWdsGetPdnThrottleInfoOutput
    unref(): void
    static name: string
}
class MessageWdsGetPdnThrottleInfoOutputInfoElement {
    /* Fields of Qmi-1.0.Qmi.MessageWdsGetPdnThrottleInfoOutputInfoElement */
    ipv4_throttled: boolean
    ipv6_throttled: boolean
    ipv4_throttle_time_left_ms: number
    ipv6_throttle_time_left_ms: number
    apn: string
    static name: string
}
class MessageWdsGetProfileListInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetProfileListInput */
    get_profile_type(): [ /* returnType */ boolean, /* value_profile_type */ WdsProfileType | null ]
    ref(): MessageWdsGetProfileListInput
    set_profile_type(value_profile_type: WdsProfileType): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetProfileListInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetProfileListInput
}
class MessageWdsGetProfileListOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetProfileListOutput */
    get_extended_error_code(): [ /* returnType */ boolean, /* value_extended_error_code */ WdsDsProfileError | null ]
    get_profile_list(): [ /* returnType */ boolean, /* value_profile_list */ MessageWdsGetProfileListOutputProfileListProfile[] | null ]
    get_result(): boolean
    ref(): MessageWdsGetProfileListOutput
    unref(): void
    static name: string
}
class MessageWdsGetProfileListOutputProfileListProfile {
    /* Fields of Qmi-1.0.Qmi.MessageWdsGetProfileListOutputProfileListProfile */
    profile_type: WdsProfileType
    profile_index: number
    profile_name: string
    static name: string
}
class MessageWdsGetProfileSettingsInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetProfileSettingsInput */
    get_profile_id(): [ /* returnType */ boolean, /* value_profile_id_profile_type */ WdsProfileType | null, /* value_profile_id_profile_index */ number | null ]
    ref(): MessageWdsGetProfileSettingsInput
    set_profile_id(value_profile_id_profile_type: WdsProfileType, value_profile_id_profile_index: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdsGetProfileSettingsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsGetProfileSettingsInput
}
class MessageWdsGetProfileSettingsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetProfileSettingsOutput */
    get_apn_disabled_flag(): [ /* returnType */ boolean, /* value_apn_disabled_flag */ boolean | null ]
    get_apn_name(): [ /* returnType */ boolean, /* value_apn_name */ string | null ]
    get_apn_type_mask(): [ /* returnType */ boolean, /* value_apn_type_mask */ WdsApnTypeMask | null ]
    get_authentication(): [ /* returnType */ boolean, /* value_authentication */ WdsAuthentication | null ]
    get_extended_error_code(): [ /* returnType */ boolean, /* value_extended_error_code */ WdsDsProfileError | null ]
    get_gprs_minimum_qos(): [ /* returnType */ boolean, /* value_gprs_minimum_qos_precedence_class */ number | null, /* value_gprs_minimum_qos_delay_class */ number | null, /* value_gprs_minimum_qos_reliability_class */ number | null, /* value_gprs_minimum_qos_peak_throughput_class */ number | null, /* value_gprs_minimum_qos_mean_throughput_class */ number | null ]
    get_gprs_requested_qos(): [ /* returnType */ boolean, /* value_gprs_requested_qos_precedence_class */ number | null, /* value_gprs_requested_qos_delay_class */ number | null, /* value_gprs_requested_qos_reliability_class */ number | null, /* value_gprs_requested_qos_peak_throughput_class */ number | null, /* value_gprs_requested_qos_mean_throughput_class */ number | null ]
    get_imcn_flag(): [ /* returnType */ boolean, /* value_imcn_flag */ boolean | null ]
    get_ipv4_address_preference(): [ /* returnType */ boolean, /* value_ipv4_address_preference */ number | null ]
    get_ipv6_address_preference(): [ /* returnType */ boolean, /* value_ipv6_address_preference_address */ number[] | null ]
    get_ipv6_primary_dns_address_preference(): [ /* returnType */ boolean, /* value_ipv6_primary_dns_address_preference */ number[] | null ]
    get_ipv6_secondary_dns_address_preference(): [ /* returnType */ boolean, /* value_ipv6_secondary_dns_address_preference */ number[] | null ]
    get_lte_qos_parameters(): [ /* returnType */ boolean, /* value_lte_qos_parameters_qos_class_identifier */ WdsQosClassIdentifier | null, /* value_lte_qos_parameters_guaranteed_downlink_bitrate */ number | null, /* value_lte_qos_parameters_max_downlink_bitrate */ number | null, /* value_lte_qos_parameters_guaranteed_uplink_bitrate */ number | null, /* value_lte_qos_parameters_max_uplink_bitrate */ number | null ]
    get_password(): [ /* returnType */ boolean, /* value_password */ string | null ]
    get_pcscf_address_using_dhcp(): [ /* returnType */ boolean, /* value_pcscf_address_using_dhcp */ boolean | null ]
    get_pcscf_address_using_pco(): [ /* returnType */ boolean, /* value_pcscf_address_using_pco */ boolean | null ]
    get_pdp_context_number(): [ /* returnType */ boolean, /* value_pdp_context_number */ number | null ]
    get_pdp_context_primary_id(): [ /* returnType */ boolean, /* value_pdp_context_primary_id */ number | null ]
    get_pdp_context_secondary_flag(): [ /* returnType */ boolean, /* value_pdp_context_secondary_flag */ boolean | null ]
    get_pdp_data_compression_type(): [ /* returnType */ boolean, /* value_pdp_data_compression_type */ WdsPdpDataCompressionType | null ]
    get_pdp_header_compression_type(): [ /* returnType */ boolean, /* value_pdp_header_compression_type */ WdsPdpHeaderCompressionType | null ]
    get_pdp_type(): [ /* returnType */ boolean, /* value_pdp_type */ WdsPdpType | null ]
    get_primary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_primary_ipv4_dns_address */ number | null ]
    get_profile_name(): [ /* returnType */ boolean, /* value_profile_name */ string | null ]
    get_result(): boolean
    get_roaming_disallowed_flag(): [ /* returnType */ boolean, /* value_roaming_disallowed_flag */ boolean | null ]
    get_secondary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_secondary_ipv4_dns_address */ number | null ]
    get_umts_minimum_qos(): [ /* returnType */ boolean, /* value_umts_minimum_qos_traffic_class */ WdsTrafficClass | null, /* value_umts_minimum_qos_max_uplink_bitrate */ number | null, /* value_umts_minimum_qos_max_downlink_bitrate */ number | null, /* value_umts_minimum_qos_guaranteed_uplink_bitrate */ number | null, /* value_umts_minimum_qos_guaranteed_downlink_bitrate */ number | null, /* value_umts_minimum_qos_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_minimum_qos_maximum_sdu_size */ number | null, /* value_umts_minimum_qos_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_minimum_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_minimum_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_minimum_qos_transfer_delay */ number | null, /* value_umts_minimum_qos_traffic_handling_priority */ number | null ]
    get_umts_minimum_qos_with_signaling_indication_flag(): [ /* returnType */ boolean, /* value_umts_minimum_qos_with_signaling_indication_flag_traffic_class */ WdsTrafficClass | null, /* value_umts_minimum_qos_with_signaling_indication_flag_max_uplink_bitrate */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_max_downlink_bitrate */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_minimum_qos_with_signaling_indication_flag_maximum_sdu_size */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_minimum_qos_with_signaling_indication_flag_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_minimum_qos_with_signaling_indication_flag_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_minimum_qos_with_signaling_indication_flag_transfer_delay */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_traffic_handling_priority */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_signaling_indication */ number | null ]
    get_umts_requested_qos(): [ /* returnType */ boolean, /* value_umts_requested_qos_traffic_class */ WdsTrafficClass | null, /* value_umts_requested_qos_max_uplink_bitrate */ number | null, /* value_umts_requested_qos_max_downlink_bitrate */ number | null, /* value_umts_requested_qos_guaranteed_uplink_bitrate */ number | null, /* value_umts_requested_qos_guaranteed_downlink_bitrate */ number | null, /* value_umts_requested_qos_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_requested_qos_maximum_sdu_size */ number | null, /* value_umts_requested_qos_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_requested_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_requested_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_requested_qos_transfer_delay */ number | null, /* value_umts_requested_qos_traffic_handling_priority */ number | null ]
    get_umts_requested_qos_with_signaling_indication_flag(): [ /* returnType */ boolean, /* value_umts_requested_qos_with_signaling_indication_flag_traffic_class */ WdsTrafficClass | null, /* value_umts_requested_qos_with_signaling_indication_flag_max_uplink_bitrate */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_max_downlink_bitrate */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_requested_qos_with_signaling_indication_flag_maximum_sdu_size */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_requested_qos_with_signaling_indication_flag_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_requested_qos_with_signaling_indication_flag_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_requested_qos_with_signaling_indication_flag_transfer_delay */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_traffic_handling_priority */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_signaling_indication */ number | null ]
    get_username(): [ /* returnType */ boolean, /* value_username */ string | null ]
    ref(): MessageWdsGetProfileSettingsOutput
    unref(): void
    static name: string
}
class MessageWdsGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGetSupportedMessagesOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ Uint8Array[] | null ]
    get_result(): boolean
    ref(): MessageWdsGetSupportedMessagesOutput
    unref(): void
    static name: string
}
class MessageWdsGoActiveOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGoActiveOutput */
    get_result(): boolean
    ref(): MessageWdsGoActiveOutput
    unref(): void
    static name: string
}
class MessageWdsGoDormantOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsGoDormantOutput */
    get_result(): boolean
    ref(): MessageWdsGoDormantOutput
    unref(): void
    static name: string
}
class MessageWdsModifyProfileInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsModifyProfileInput */
    get_apn_disabled_flag(): [ /* returnType */ boolean, /* value_apn_disabled_flag */ boolean | null ]
    get_apn_name(): [ /* returnType */ boolean, /* value_apn_name */ string | null ]
    get_apn_type_mask(): [ /* returnType */ boolean, /* value_apn_type_mask */ WdsApnTypeMask | null ]
    get_authentication(): [ /* returnType */ boolean, /* value_authentication */ WdsAuthentication | null ]
    get_gprs_minimum_qos(): [ /* returnType */ boolean, /* value_gprs_minimum_qos_precedence_class */ number | null, /* value_gprs_minimum_qos_delay_class */ number | null, /* value_gprs_minimum_qos_reliability_class */ number | null, /* value_gprs_minimum_qos_peak_throughput_class */ number | null, /* value_gprs_minimum_qos_mean_throughput_class */ number | null ]
    get_gprs_requested_qos(): [ /* returnType */ boolean, /* value_gprs_requested_qos_precedence_class */ number | null, /* value_gprs_requested_qos_delay_class */ number | null, /* value_gprs_requested_qos_reliability_class */ number | null, /* value_gprs_requested_qos_peak_throughput_class */ number | null, /* value_gprs_requested_qos_mean_throughput_class */ number | null ]
    get_imcn_flag(): [ /* returnType */ boolean, /* value_imcn_flag */ boolean | null ]
    get_ipv4_address_preference(): [ /* returnType */ boolean, /* value_ipv4_address_preference */ number | null ]
    get_ipv6_address_preference(): [ /* returnType */ boolean, /* value_ipv6_address_preference_address */ number[] | null ]
    get_ipv6_primary_dns_address_preference(): [ /* returnType */ boolean, /* value_ipv6_primary_dns_address_preference */ number[] | null ]
    get_ipv6_secondary_dns_address_preference(): [ /* returnType */ boolean, /* value_ipv6_secondary_dns_address_preference */ number[] | null ]
    get_lte_qos_parameters(): [ /* returnType */ boolean, /* value_lte_qos_parameters_qos_class_identifier */ WdsQosClassIdentifier | null, /* value_lte_qos_parameters_guaranteed_downlink_bitrate */ number | null, /* value_lte_qos_parameters_max_downlink_bitrate */ number | null, /* value_lte_qos_parameters_guaranteed_uplink_bitrate */ number | null, /* value_lte_qos_parameters_max_uplink_bitrate */ number | null ]
    get_password(): [ /* returnType */ boolean, /* value_password */ string | null ]
    get_pcscf_address_using_dhcp(): [ /* returnType */ boolean, /* value_pcscf_address_using_dhcp */ boolean | null ]
    get_pcscf_address_using_pco(): [ /* returnType */ boolean, /* value_pcscf_address_using_pco */ boolean | null ]
    get_pdp_context_number(): [ /* returnType */ boolean, /* value_pdp_context_number */ number | null ]
    get_pdp_context_primary_id(): [ /* returnType */ boolean, /* value_pdp_context_primary_id */ number | null ]
    get_pdp_context_secondary_flag(): [ /* returnType */ boolean, /* value_pdp_context_secondary_flag */ boolean | null ]
    get_pdp_data_compression_type(): [ /* returnType */ boolean, /* value_pdp_data_compression_type */ WdsPdpDataCompressionType | null ]
    get_pdp_header_compression_type(): [ /* returnType */ boolean, /* value_pdp_header_compression_type */ WdsPdpHeaderCompressionType | null ]
    get_pdp_type(): [ /* returnType */ boolean, /* value_pdp_type */ WdsPdpType | null ]
    get_primary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_primary_ipv4_dns_address */ number | null ]
    get_profile_identifier(): [ /* returnType */ boolean, /* value_profile_identifier_profile_type */ WdsProfileType | null, /* value_profile_identifier_profile_index */ number | null ]
    get_profile_name(): [ /* returnType */ boolean, /* value_profile_name */ string | null ]
    get_roaming_disallowed_flag(): [ /* returnType */ boolean, /* value_roaming_disallowed_flag */ boolean | null ]
    get_secondary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_secondary_ipv4_dns_address */ number | null ]
    get_umts_minimum_qos(): [ /* returnType */ boolean, /* value_umts_minimum_qos_traffic_class */ WdsTrafficClass | null, /* value_umts_minimum_qos_max_uplink_bitrate */ number | null, /* value_umts_minimum_qos_max_downlink_bitrate */ number | null, /* value_umts_minimum_qos_guaranteed_uplink_bitrate */ number | null, /* value_umts_minimum_qos_guaranteed_downlink_bitrate */ number | null, /* value_umts_minimum_qos_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_minimum_qos_maximum_sdu_size */ number | null, /* value_umts_minimum_qos_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_minimum_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_minimum_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_minimum_qos_transfer_delay */ number | null, /* value_umts_minimum_qos_traffic_handling_priority */ number | null ]
    get_umts_minimum_qos_with_signaling_indication_flag(): [ /* returnType */ boolean, /* value_umts_minimum_qos_with_signaling_indication_flag_traffic_class */ WdsTrafficClass | null, /* value_umts_minimum_qos_with_signaling_indication_flag_max_uplink_bitrate */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_max_downlink_bitrate */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_minimum_qos_with_signaling_indication_flag_maximum_sdu_size */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_minimum_qos_with_signaling_indication_flag_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_minimum_qos_with_signaling_indication_flag_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_minimum_qos_with_signaling_indication_flag_transfer_delay */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_traffic_handling_priority */ number | null, /* value_umts_minimum_qos_with_signaling_indication_flag_signaling_indication */ number | null ]
    get_umts_requested_qos(): [ /* returnType */ boolean, /* value_umts_requested_qos_traffic_class */ WdsTrafficClass | null, /* value_umts_requested_qos_max_uplink_bitrate */ number | null, /* value_umts_requested_qos_max_downlink_bitrate */ number | null, /* value_umts_requested_qos_guaranteed_uplink_bitrate */ number | null, /* value_umts_requested_qos_guaranteed_downlink_bitrate */ number | null, /* value_umts_requested_qos_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_requested_qos_maximum_sdu_size */ number | null, /* value_umts_requested_qos_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_requested_qos_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_requested_qos_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_requested_qos_transfer_delay */ number | null, /* value_umts_requested_qos_traffic_handling_priority */ number | null ]
    get_umts_requested_qos_with_signaling_indication_flag(): [ /* returnType */ boolean, /* value_umts_requested_qos_with_signaling_indication_flag_traffic_class */ WdsTrafficClass | null, /* value_umts_requested_qos_with_signaling_indication_flag_max_uplink_bitrate */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_max_downlink_bitrate */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_qos_delivery_order */ WdsDeliveryOrder | null, /* value_umts_requested_qos_with_signaling_indication_flag_maximum_sdu_size */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_sdu_error_ratio */ WdsSduErrorRatio | null, /* value_umts_requested_qos_with_signaling_indication_flag_residual_bit_error_ratio */ WdsSduResidualBitErrorRatio | null, /* value_umts_requested_qos_with_signaling_indication_flag_delivery_erroneous_sdu */ WdsSduErroneousDelivery | null, /* value_umts_requested_qos_with_signaling_indication_flag_transfer_delay */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_traffic_handling_priority */ number | null, /* value_umts_requested_qos_with_signaling_indication_flag_signaling_indication */ number | null ]
    get_username(): [ /* returnType */ boolean, /* value_username */ string | null ]
    ref(): MessageWdsModifyProfileInput
    set_apn_disabled_flag(value_apn_disabled_flag: boolean): boolean
    set_apn_name(value_apn_name: string): boolean
    set_apn_type_mask(value_apn_type_mask: WdsApnTypeMask): boolean
    set_authentication(value_authentication: WdsAuthentication): boolean
    set_gprs_minimum_qos(value_gprs_minimum_qos_precedence_class: number, value_gprs_minimum_qos_delay_class: number, value_gprs_minimum_qos_reliability_class: number, value_gprs_minimum_qos_peak_throughput_class: number, value_gprs_minimum_qos_mean_throughput_class: number): boolean
    set_gprs_requested_qos(value_gprs_requested_qos_precedence_class: number, value_gprs_requested_qos_delay_class: number, value_gprs_requested_qos_reliability_class: number, value_gprs_requested_qos_peak_throughput_class: number, value_gprs_requested_qos_mean_throughput_class: number): boolean
    set_imcn_flag(value_imcn_flag: boolean): boolean
    set_ipv4_address_preference(value_ipv4_address_preference: number): boolean
    set_ipv6_address_preference(value_ipv6_address_preference_address: number[]): boolean
    set_ipv6_primary_dns_address_preference(value_ipv6_primary_dns_address_preference: number[]): boolean
    set_ipv6_secondary_dns_address_preference(value_ipv6_secondary_dns_address_preference: number[]): boolean
    set_lte_qos_parameters(value_lte_qos_parameters_qos_class_identifier: WdsQosClassIdentifier, value_lte_qos_parameters_guaranteed_downlink_bitrate: number, value_lte_qos_parameters_max_downlink_bitrate: number, value_lte_qos_parameters_guaranteed_uplink_bitrate: number, value_lte_qos_parameters_max_uplink_bitrate: number): boolean
    set_password(value_password: string): boolean
    set_pcscf_address_using_dhcp(value_pcscf_address_using_dhcp: boolean): boolean
    set_pcscf_address_using_pco(value_pcscf_address_using_pco: boolean): boolean
    set_pdp_context_number(value_pdp_context_number: number): boolean
    set_pdp_context_primary_id(value_pdp_context_primary_id: number): boolean
    set_pdp_context_secondary_flag(value_pdp_context_secondary_flag: boolean): boolean
    set_pdp_data_compression_type(value_pdp_data_compression_type: WdsPdpDataCompressionType): boolean
    set_pdp_header_compression_type(value_pdp_header_compression_type: WdsPdpHeaderCompressionType): boolean
    set_pdp_type(value_pdp_type: WdsPdpType): boolean
    set_primary_ipv4_dns_address(value_primary_ipv4_dns_address: number): boolean
    set_profile_identifier(value_profile_identifier_profile_type: WdsProfileType, value_profile_identifier_profile_index: number): boolean
    set_profile_name(value_profile_name: string): boolean
    set_roaming_disallowed_flag(value_roaming_disallowed_flag: boolean): boolean
    set_secondary_ipv4_dns_address(value_secondary_ipv4_dns_address: number): boolean
    set_umts_minimum_qos(value_umts_minimum_qos_traffic_class: WdsTrafficClass, value_umts_minimum_qos_max_uplink_bitrate: number, value_umts_minimum_qos_max_downlink_bitrate: number, value_umts_minimum_qos_guaranteed_uplink_bitrate: number, value_umts_minimum_qos_guaranteed_downlink_bitrate: number, value_umts_minimum_qos_qos_delivery_order: WdsDeliveryOrder, value_umts_minimum_qos_maximum_sdu_size: number, value_umts_minimum_qos_sdu_error_ratio: WdsSduErrorRatio, value_umts_minimum_qos_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_minimum_qos_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_minimum_qos_transfer_delay: number, value_umts_minimum_qos_traffic_handling_priority: number): boolean
    set_umts_minimum_qos_with_signaling_indication_flag(value_umts_minimum_qos_with_signaling_indication_flag_traffic_class: WdsTrafficClass, value_umts_minimum_qos_with_signaling_indication_flag_max_uplink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_max_downlink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate: number, value_umts_minimum_qos_with_signaling_indication_flag_qos_delivery_order: WdsDeliveryOrder, value_umts_minimum_qos_with_signaling_indication_flag_maximum_sdu_size: number, value_umts_minimum_qos_with_signaling_indication_flag_sdu_error_ratio: WdsSduErrorRatio, value_umts_minimum_qos_with_signaling_indication_flag_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_minimum_qos_with_signaling_indication_flag_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_minimum_qos_with_signaling_indication_flag_transfer_delay: number, value_umts_minimum_qos_with_signaling_indication_flag_traffic_handling_priority: number, value_umts_minimum_qos_with_signaling_indication_flag_signaling_indication: number): boolean
    set_umts_requested_qos(value_umts_requested_qos_traffic_class: WdsTrafficClass, value_umts_requested_qos_max_uplink_bitrate: number, value_umts_requested_qos_max_downlink_bitrate: number, value_umts_requested_qos_guaranteed_uplink_bitrate: number, value_umts_requested_qos_guaranteed_downlink_bitrate: number, value_umts_requested_qos_qos_delivery_order: WdsDeliveryOrder, value_umts_requested_qos_maximum_sdu_size: number, value_umts_requested_qos_sdu_error_ratio: WdsSduErrorRatio, value_umts_requested_qos_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_requested_qos_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_requested_qos_transfer_delay: number, value_umts_requested_qos_traffic_handling_priority: number): boolean
    set_umts_requested_qos_with_signaling_indication_flag(value_umts_requested_qos_with_signaling_indication_flag_traffic_class: WdsTrafficClass, value_umts_requested_qos_with_signaling_indication_flag_max_uplink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_max_downlink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate: number, value_umts_requested_qos_with_signaling_indication_flag_qos_delivery_order: WdsDeliveryOrder, value_umts_requested_qos_with_signaling_indication_flag_maximum_sdu_size: number, value_umts_requested_qos_with_signaling_indication_flag_sdu_error_ratio: WdsSduErrorRatio, value_umts_requested_qos_with_signaling_indication_flag_residual_bit_error_ratio: WdsSduResidualBitErrorRatio, value_umts_requested_qos_with_signaling_indication_flag_delivery_erroneous_sdu: WdsSduErroneousDelivery, value_umts_requested_qos_with_signaling_indication_flag_transfer_delay: number, value_umts_requested_qos_with_signaling_indication_flag_traffic_handling_priority: number, value_umts_requested_qos_with_signaling_indication_flag_signaling_indication: number): boolean
    set_username(value_username: string): boolean
    unref(): void
    static name: string
    static new(): MessageWdsModifyProfileInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsModifyProfileInput
}
class MessageWdsModifyProfileOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsModifyProfileOutput */
    get_extended_error_code(): [ /* returnType */ boolean, /* value_extended_error_code */ WdsDsProfileError | null ]
    get_result(): boolean
    ref(): MessageWdsModifyProfileOutput
    unref(): void
    static name: string
}
class MessageWdsResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsResetOutput */
    get_result(): boolean
    ref(): MessageWdsResetOutput
    unref(): void
    static name: string
}
class MessageWdsSetAutoconnectSettingsInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetAutoconnectSettingsInput */
    get_roaming(): [ /* returnType */ boolean, /* value_roaming */ WdsAutoconnectSettingRoaming | null ]
    get_status(): [ /* returnType */ boolean, /* value_status */ WdsAutoconnectSetting | null ]
    ref(): MessageWdsSetAutoconnectSettingsInput
    set_roaming(value_roaming: WdsAutoconnectSettingRoaming): boolean
    set_status(value_status: WdsAutoconnectSetting): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSetAutoconnectSettingsInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSetAutoconnectSettingsInput
}
class MessageWdsSetAutoconnectSettingsOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetAutoconnectSettingsOutput */
    get_result(): boolean
    ref(): MessageWdsSetAutoconnectSettingsOutput
    unref(): void
    static name: string
}
class MessageWdsSetDefaultProfileNumberInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetDefaultProfileNumberInput */
    get_profile_identifier(): [ /* returnType */ boolean, /* value_profile_identifier_type */ WdsProfileType | null, /* value_profile_identifier_family */ WdsProfileFamily | null, /* value_profile_identifier_index */ number | null ]
    ref(): MessageWdsSetDefaultProfileNumberInput
    set_profile_identifier(value_profile_identifier_type: WdsProfileType, value_profile_identifier_family: WdsProfileFamily, value_profile_identifier_index: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSetDefaultProfileNumberInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSetDefaultProfileNumberInput
}
class MessageWdsSetDefaultProfileNumberOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetDefaultProfileNumberOutput */
    get_extended_error_code(): [ /* returnType */ boolean, /* value_extended_error_code */ WdsDsProfileError | null ]
    get_result(): boolean
    ref(): MessageWdsSetDefaultProfileNumberOutput
    unref(): void
    static name: string
}
class MessageWdsSetEventReportInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetEventReportInput */
    get_channel_rate(): [ /* returnType */ boolean, /* value_channel_rate */ boolean | null ]
    get_current_data_bearer_technology(): [ /* returnType */ boolean, /* value_current_data_bearer_technology */ boolean | null ]
    get_data_bearer_technology(): [ /* returnType */ boolean, /* value_data_bearer_technology */ boolean | null ]
    get_data_call_status(): [ /* returnType */ boolean, /* value_data_call_status */ boolean | null ]
    get_data_systems(): [ /* returnType */ boolean, /* value_data_systems */ boolean | null ]
    get_dormancy_status(): [ /* returnType */ boolean, /* value_dormancy_status */ boolean | null ]
    get_evdo_pm_change(): [ /* returnType */ boolean, /* value_evdo_pm_change */ boolean | null ]
    get_extended_data_bearer_technology(): [ /* returnType */ boolean, /* value_extended_data_bearer_technology */ boolean | null ]
    get_limited_data_system_status(): [ /* returnType */ boolean, /* value_limited_data_system_status */ boolean | null ]
    get_mip_status(): [ /* returnType */ boolean, /* value_mip_status */ number | null ]
    get_pdn_filter_removals(): [ /* returnType */ boolean, /* value_pdn_filter_removals */ boolean | null ]
    get_preferred_data_system(): [ /* returnType */ boolean, /* value_preferred_data_system */ boolean | null ]
    get_transfer_statistics(): [ /* returnType */ boolean, /* value_transfer_statistics_interval_seconds */ number | null, /* value_transfer_statistics_indicators */ WdsSetEventReportTransferStatistics | null ]
    get_uplink_flow_control(): [ /* returnType */ boolean, /* value_uplink_flow_control */ boolean | null ]
    ref(): MessageWdsSetEventReportInput
    set_channel_rate(value_channel_rate: boolean): boolean
    set_current_data_bearer_technology(value_current_data_bearer_technology: boolean): boolean
    set_data_bearer_technology(value_data_bearer_technology: boolean): boolean
    set_data_call_status(value_data_call_status: boolean): boolean
    set_data_systems(value_data_systems: boolean): boolean
    set_dormancy_status(value_dormancy_status: boolean): boolean
    set_evdo_pm_change(value_evdo_pm_change: boolean): boolean
    set_extended_data_bearer_technology(value_extended_data_bearer_technology: boolean): boolean
    set_limited_data_system_status(value_limited_data_system_status: boolean): boolean
    set_mip_status(value_mip_status: number): boolean
    set_pdn_filter_removals(value_pdn_filter_removals: boolean): boolean
    set_preferred_data_system(value_preferred_data_system: boolean): boolean
    set_transfer_statistics(value_transfer_statistics_interval_seconds: number, value_transfer_statistics_indicators: WdsSetEventReportTransferStatistics): boolean
    set_uplink_flow_control(value_uplink_flow_control: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSetEventReportInput
}
class MessageWdsSetEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetEventReportOutput */
    get_result(): boolean
    ref(): MessageWdsSetEventReportOutput
    unref(): void
    static name: string
}
class MessageWdsSetIpFamilyInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetIpFamilyInput */
    get_preference(): [ /* returnType */ boolean, /* value_preference */ WdsIpFamily | null ]
    ref(): MessageWdsSetIpFamilyInput
    set_preference(value_preference: WdsIpFamily): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSetIpFamilyInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSetIpFamilyInput
}
class MessageWdsSetIpFamilyOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetIpFamilyOutput */
    get_result(): boolean
    ref(): MessageWdsSetIpFamilyOutput
    unref(): void
    static name: string
}
class MessageWdsSetLteAttachPdnListInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetLteAttachPdnListInput */
    get_action(): [ /* returnType */ boolean, /* value_action */ WdsAttachPdnListAction | null ]
    get_list(): [ /* returnType */ boolean, /* value_list */ number[] | null ]
    ref(): MessageWdsSetLteAttachPdnListInput
    set_action(value_action: WdsAttachPdnListAction): boolean
    set_list(value_list: number[]): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSetLteAttachPdnListInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSetLteAttachPdnListInput
}
class MessageWdsSetLteAttachPdnListOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSetLteAttachPdnListOutput */
    get_result(): boolean
    ref(): MessageWdsSetLteAttachPdnListOutput
    unref(): void
    static name: string
}
class MessageWdsStartNetworkInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsStartNetworkInput */
    get_apn(): [ /* returnType */ boolean, /* value_apn */ string | null ]
    get_authentication_preference(): [ /* returnType */ boolean, /* value_authentication_preference */ WdsAuthentication | null ]
    get_call_type(): [ /* returnType */ boolean, /* value_call_type */ WdsCallType | null ]
    get_enable_autoconnect(): [ /* returnType */ boolean, /* value_enable_autoconnect */ boolean | null ]
    get_extended_technology_preference(): [ /* returnType */ boolean, /* value_extended_technology_preference */ WdsExtendedTechnologyPreference | null ]
    get_ip_family_preference(): [ /* returnType */ boolean, /* value_ip_family_preference */ WdsIpFamily | null ]
    get_ipv4_address_preference(): [ /* returnType */ boolean, /* value_ipv4_address_preference */ number | null ]
    get_password(): [ /* returnType */ boolean, /* value_password */ string | null ]
    get_primary_dns_address_preference(): [ /* returnType */ boolean, /* value_primary_dns_address_preference */ number | null ]
    get_primary_nbns_address_preference(): [ /* returnType */ boolean, /* value_primary_nbns_address_preference */ number | null ]
    get_profile_index_3gpp(): [ /* returnType */ boolean, /* value_profile_index_3gpp */ number | null ]
    get_profile_index_3gpp2(): [ /* returnType */ boolean, /* value_profile_index_3gpp2 */ number | null ]
    get_secondary_dns_address_preference(): [ /* returnType */ boolean, /* value_secondary_dns_address_preference */ number | null ]
    get_secondary_nbns_address_preference(): [ /* returnType */ boolean, /* value_secondary_nbns_address_preference */ number | null ]
    get_technology_preference(): [ /* returnType */ boolean, /* value_technology_preference */ WdsTechnologyPreference | null ]
    get_username(): [ /* returnType */ boolean, /* value_username */ string | null ]
    ref(): MessageWdsStartNetworkInput
    set_apn(value_apn: string): boolean
    set_authentication_preference(value_authentication_preference: WdsAuthentication): boolean
    set_call_type(value_call_type: WdsCallType): boolean
    set_enable_autoconnect(value_enable_autoconnect: boolean): boolean
    set_extended_technology_preference(value_extended_technology_preference: WdsExtendedTechnologyPreference): boolean
    set_ip_family_preference(value_ip_family_preference: WdsIpFamily): boolean
    set_ipv4_address_preference(value_ipv4_address_preference: number): boolean
    set_password(value_password: string): boolean
    set_primary_dns_address_preference(value_primary_dns_address_preference: number): boolean
    set_primary_nbns_address_preference(value_primary_nbns_address_preference: number): boolean
    set_profile_index_3gpp(value_profile_index_3gpp: number): boolean
    set_profile_index_3gpp2(value_profile_index_3gpp2: number): boolean
    set_secondary_dns_address_preference(value_secondary_dns_address_preference: number): boolean
    set_secondary_nbns_address_preference(value_secondary_nbns_address_preference: number): boolean
    set_technology_preference(value_technology_preference: WdsTechnologyPreference): boolean
    set_username(value_username: string): boolean
    unref(): void
    static name: string
    static new(): MessageWdsStartNetworkInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsStartNetworkInput
}
class MessageWdsStartNetworkOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsStartNetworkOutput */
    get_call_end_reason(): [ /* returnType */ boolean, /* value_call_end_reason */ WdsCallEndReason | null ]
    get_packet_data_handle(): [ /* returnType */ boolean, /* value_packet_data_handle */ number | null ]
    get_result(): boolean
    get_verbose_call_end_reason(): [ /* returnType */ boolean, /* value_verbose_call_end_reason_type */ WdsVerboseCallEndReasonType | null, /* value_verbose_call_end_reason_reason */ number | null ]
    ref(): MessageWdsStartNetworkOutput
    unref(): void
    static name: string
}
class MessageWdsStopNetworkInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsStopNetworkInput */
    get_disable_autoconnect(): [ /* returnType */ boolean, /* value_disable_autoconnect */ boolean | null ]
    get_packet_data_handle(): [ /* returnType */ boolean, /* value_packet_data_handle */ number | null ]
    ref(): MessageWdsStopNetworkInput
    set_disable_autoconnect(value_disable_autoconnect: boolean): boolean
    set_packet_data_handle(value_packet_data_handle: number): boolean
    unref(): void
    static name: string
    static new(): MessageWdsStopNetworkInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsStopNetworkInput
}
class MessageWdsStopNetworkOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsStopNetworkOutput */
    get_result(): boolean
    ref(): MessageWdsStopNetworkOutput
    unref(): void
    static name: string
}
class MessageWdsSwiCreateProfileIndexedInput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSwiCreateProfileIndexedInput */
    get_apn_disabled_flag(): [ /* returnType */ boolean, /* value_apn_disabled_flag */ boolean | null ]
    get_apn_name(): [ /* returnType */ boolean, /* value_apn_name */ string | null ]
    get_authentication(): [ /* returnType */ boolean, /* value_authentication */ WdsAuthentication | null ]
    get_ipv4_address_preference(): [ /* returnType */ boolean, /* value_ipv4_address_preference */ number | null ]
    get_password(): [ /* returnType */ boolean, /* value_password */ string | null ]
    get_pdp_context_number(): [ /* returnType */ boolean, /* value_pdp_context_number */ number | null ]
    get_pdp_type(): [ /* returnType */ boolean, /* value_pdp_type */ WdsPdpType | null ]
    get_primary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_primary_ipv4_dns_address */ number | null ]
    get_profile_identifier(): [ /* returnType */ boolean, /* value_profile_identifier_profile_type */ WdsProfileType | null, /* value_profile_identifier_profile_index */ number | null ]
    get_profile_name(): [ /* returnType */ boolean, /* value_profile_name */ string | null ]
    get_roaming_disallowed_flag(): [ /* returnType */ boolean, /* value_roaming_disallowed_flag */ boolean | null ]
    get_secondary_ipv4_dns_address(): [ /* returnType */ boolean, /* value_secondary_ipv4_dns_address */ number | null ]
    get_username(): [ /* returnType */ boolean, /* value_username */ string | null ]
    ref(): MessageWdsSwiCreateProfileIndexedInput
    set_apn_disabled_flag(value_apn_disabled_flag: boolean): boolean
    set_apn_name(value_apn_name: string): boolean
    set_authentication(value_authentication: WdsAuthentication): boolean
    set_ipv4_address_preference(value_ipv4_address_preference: number): boolean
    set_password(value_password: string): boolean
    set_pdp_context_number(value_pdp_context_number: number): boolean
    set_pdp_type(value_pdp_type: WdsPdpType): boolean
    set_primary_ipv4_dns_address(value_primary_ipv4_dns_address: number): boolean
    set_profile_identifier(value_profile_identifier_profile_type: WdsProfileType, value_profile_identifier_profile_index: number): boolean
    set_profile_name(value_profile_name: string): boolean
    set_roaming_disallowed_flag(value_roaming_disallowed_flag: boolean): boolean
    set_secondary_ipv4_dns_address(value_secondary_ipv4_dns_address: number): boolean
    set_username(value_username: string): boolean
    unref(): void
    static name: string
    static new(): MessageWdsSwiCreateProfileIndexedInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWdsSwiCreateProfileIndexedInput
}
class MessageWdsSwiCreateProfileIndexedOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWdsSwiCreateProfileIndexedOutput */
    get_profile_identifier(): [ /* returnType */ boolean, /* value_profile_identifier_profile_type */ WdsProfileType | null, /* value_profile_identifier_profile_index */ number | null ]
    get_result(): boolean
    ref(): MessageWdsSwiCreateProfileIndexedOutput
    unref(): void
    static name: string
}
class MessageWmsDeleteInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsDeleteInput */
    get_memory_index(): [ /* returnType */ boolean, /* value_memory_index */ number | null ]
    get_memory_storage(): [ /* returnType */ boolean, /* value_memory_storage */ WmsStorageType | null ]
    get_message_mode(): [ /* returnType */ boolean, /* value_message_mode */ WmsMessageMode | null ]
    get_message_tag(): [ /* returnType */ boolean, /* value_message_tag */ WmsMessageTagType | null ]
    ref(): MessageWmsDeleteInput
    set_memory_index(value_memory_index: number): boolean
    set_memory_storage(value_memory_storage: WmsStorageType): boolean
    set_message_mode(value_message_mode: WmsMessageMode): boolean
    set_message_tag(value_message_tag: WmsMessageTagType): boolean
    unref(): void
    static name: string
    static new(): MessageWmsDeleteInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsDeleteInput
}
class MessageWmsDeleteOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsDeleteOutput */
    get_result(): boolean
    ref(): MessageWmsDeleteOutput
    unref(): void
    static name: string
}
class MessageWmsGetMessageProtocolOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsGetMessageProtocolOutput */
    get_message_protocol(): [ /* returnType */ boolean, /* value_message_protocol */ WmsMessageProtocol | null ]
    get_result(): boolean
    ref(): MessageWmsGetMessageProtocolOutput
    unref(): void
    static name: string
}
class MessageWmsGetRoutesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsGetRoutesOutput */
    get_result(): boolean
    get_route_list(): [ /* returnType */ boolean, /* value_route_list */ MessageWmsGetRoutesOutputRouteListElement[] | null ]
    get_transfer_status_report(): [ /* returnType */ boolean, /* value_transfer_status_report */ WmsTransferIndication | null ]
    ref(): MessageWmsGetRoutesOutput
    unref(): void
    static name: string
}
class MessageWmsGetRoutesOutputRouteListElement {
    /* Fields of Qmi-1.0.Qmi.MessageWmsGetRoutesOutputRouteListElement */
    message_type: WmsMessageType
    message_class: WmsMessageClass
    storage: WmsStorageType
    receipt_action: WmsReceiptAction
    static name: string
}
class MessageWmsGetSupportedMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsGetSupportedMessagesOutput */
    get_list(): [ /* returnType */ boolean, /* value_list */ Uint8Array[] | null ]
    get_result(): boolean
    ref(): MessageWmsGetSupportedMessagesOutput
    unref(): void
    static name: string
}
class MessageWmsListMessagesInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsListMessagesInput */
    get_message_mode(): [ /* returnType */ boolean, /* value_message_mode */ WmsMessageMode | null ]
    get_message_tag(): [ /* returnType */ boolean, /* value_message_tag */ WmsMessageTagType | null ]
    get_storage_type(): [ /* returnType */ boolean, /* value_storage_type */ WmsStorageType | null ]
    ref(): MessageWmsListMessagesInput
    set_message_mode(value_message_mode: WmsMessageMode): boolean
    set_message_tag(value_message_tag: WmsMessageTagType): boolean
    set_storage_type(value_storage_type: WmsStorageType): boolean
    unref(): void
    static name: string
    static new(): MessageWmsListMessagesInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsListMessagesInput
}
class MessageWmsListMessagesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsListMessagesOutput */
    get_message_list(): [ /* returnType */ boolean, /* value_message_list */ MessageWmsListMessagesOutputMessageListElement[] | null ]
    get_result(): boolean
    ref(): MessageWmsListMessagesOutput
    unref(): void
    static name: string
}
class MessageWmsListMessagesOutputMessageListElement {
    /* Fields of Qmi-1.0.Qmi.MessageWmsListMessagesOutputMessageListElement */
    memory_index: number
    message_tag: WmsMessageTagType
    static name: string
}
class MessageWmsModifyTagInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsModifyTagInput */
    get_message_mode(): [ /* returnType */ boolean, /* value_message_mode */ WmsMessageMode | null ]
    get_message_tag(): [ /* returnType */ boolean, /* value_message_tag_storage_type */ WmsStorageType | null, /* value_message_tag_memory_index */ number | null, /* value_message_tag_message_tag */ WmsMessageTagType | null ]
    ref(): MessageWmsModifyTagInput
    set_message_mode(value_message_mode: WmsMessageMode): boolean
    set_message_tag(value_message_tag_storage_type: WmsStorageType, value_message_tag_memory_index: number, value_message_tag_message_tag: WmsMessageTagType): boolean
    unref(): void
    static name: string
    static new(): MessageWmsModifyTagInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsModifyTagInput
}
class MessageWmsModifyTagOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsModifyTagOutput */
    get_result(): boolean
    ref(): MessageWmsModifyTagOutput
    unref(): void
    static name: string
}
class MessageWmsRawReadInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsRawReadInput */
    get_message_memory_storage_id(): [ /* returnType */ boolean, /* value_message_memory_storage_id_storage_type */ WmsStorageType | null, /* value_message_memory_storage_id_memory_index */ number | null ]
    get_message_mode(): [ /* returnType */ boolean, /* value_message_mode */ WmsMessageMode | null ]
    get_sms_on_ims(): [ /* returnType */ boolean, /* value_sms_on_ims */ boolean | null ]
    ref(): MessageWmsRawReadInput
    set_message_memory_storage_id(value_message_memory_storage_id_storage_type: WmsStorageType, value_message_memory_storage_id_memory_index: number): boolean
    set_message_mode(value_message_mode: WmsMessageMode): boolean
    set_sms_on_ims(value_sms_on_ims: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWmsRawReadInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsRawReadInput
}
class MessageWmsRawReadOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsRawReadOutput */
    get_raw_message_data(): [ /* returnType */ boolean, /* value_raw_message_data_message_tag */ WmsMessageTagType | null, /* value_raw_message_data_format */ WmsMessageFormat | null, /* value_raw_message_data_raw_data */ Uint8Array[] | null ]
    get_result(): boolean
    ref(): MessageWmsRawReadOutput
    unref(): void
    static name: string
}
class MessageWmsRawSendInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsRawSendInput */
    get_cdma_follow_on_dc(): [ /* returnType */ boolean, /* value_cdma_follow_on_dc_follow */ boolean | null ]
    get_cdma_force_on_dc(): [ /* returnType */ boolean, /* value_cdma_force_on_dc_force */ boolean | null, /* value_cdma_force_on_dc_service_option */ WmsCdmaServiceOption | null ]
    get_gsm_wcdma_link_timer(): [ /* returnType */ boolean, /* value_gsm_wcdma_link_timer */ number | null ]
    get_raw_message_data(): [ /* returnType */ boolean, /* value_raw_message_data_format */ WmsMessageFormat | null, /* value_raw_message_data_raw_data */ Uint8Array[] | null ]
    get_sms_on_ims(): [ /* returnType */ boolean, /* value_sms_on_ims */ boolean | null ]
    ref(): MessageWmsRawSendInput
    set_cdma_follow_on_dc(value_cdma_follow_on_dc_follow: boolean): boolean
    set_cdma_force_on_dc(value_cdma_force_on_dc_force: boolean, value_cdma_force_on_dc_service_option: WmsCdmaServiceOption): boolean
    set_gsm_wcdma_link_timer(value_gsm_wcdma_link_timer: number): boolean
    set_raw_message_data(value_raw_message_data_format: WmsMessageFormat, value_raw_message_data_raw_data: Uint8Array[]): boolean
    set_sms_on_ims(value_sms_on_ims: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWmsRawSendInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsRawSendInput
}
class MessageWmsRawSendOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsRawSendOutput */
    get_cdma_cause_code(): [ /* returnType */ boolean, /* value_cdma_cause_code */ WmsCdmaCauseCode | null ]
    get_cdma_error_class(): [ /* returnType */ boolean, /* value_cdma_error_class */ WmsCdmaErrorClass | null ]
    get_gsm_wcdma_cause_info(): [ /* returnType */ boolean, /* value_gsm_wcdma_cause_info_rp_cause */ WmsGsmUmtsRpCause | null, /* value_gsm_wcdma_cause_info_tp_cause */ WmsGsmUmtsTpCause | null ]
    get_message_delivery_failure_type(): [ /* returnType */ boolean, /* value_message_delivery_failure_type */ WmsMessageDeliveryFailureType | null ]
    get_message_id(): [ /* returnType */ boolean, /* value_message_id */ number | null ]
    get_result(): boolean
    ref(): MessageWmsRawSendOutput
    unref(): void
    static name: string
}
class MessageWmsRawWriteInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsRawWriteInput */
    get_raw_message_data(): [ /* returnType */ boolean, /* value_raw_message_data_storage_type */ WmsStorageType | null, /* value_raw_message_data_format */ WmsMessageFormat | null, /* value_raw_message_data_raw_data */ Uint8Array[] | null ]
    ref(): MessageWmsRawWriteInput
    set_raw_message_data(value_raw_message_data_storage_type: WmsStorageType, value_raw_message_data_format: WmsMessageFormat, value_raw_message_data_raw_data: Uint8Array[]): boolean
    unref(): void
    static name: string
    static new(): MessageWmsRawWriteInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsRawWriteInput
}
class MessageWmsRawWriteOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsRawWriteOutput */
    get_memory_index(): [ /* returnType */ boolean, /* value_memory_index */ number | null ]
    get_result(): boolean
    ref(): MessageWmsRawWriteOutput
    unref(): void
    static name: string
}
class MessageWmsResetOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsResetOutput */
    get_result(): boolean
    ref(): MessageWmsResetOutput
    unref(): void
    static name: string
}
class MessageWmsSendAckInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSendAckInput */
    get_3gpp2_failure_information(): [ /* returnType */ boolean, /* value_3gpp2_failure_information_error_class */ WmsCdmaErrorClass | null, /* value_3gpp2_failure_information_cause_code */ WmsCdmaCauseCode | null ]
    get_3gpp_failure_information(): [ /* returnType */ boolean, /* value_3gpp_failure_information_rp_cause */ WmsGsmUmtsRpCause | null, /* value_3gpp_failure_information_tp_cause */ WmsGsmUmtsTpCause | null ]
    get_information(): [ /* returnType */ boolean, /* value_information_transaction_id */ number | null, /* value_information_message_protocol */ WmsMessageProtocol | null, /* value_information_success */ boolean | null ]
    get_sms_on_ims(): [ /* returnType */ boolean, /* value_sms_on_ims */ boolean | null ]
    ref(): MessageWmsSendAckInput
    set_3gpp2_failure_information(value_3gpp2_failure_information_error_class: WmsCdmaErrorClass, value_3gpp2_failure_information_cause_code: WmsCdmaCauseCode): boolean
    set_3gpp_failure_information(value_3gpp_failure_information_rp_cause: WmsGsmUmtsRpCause, value_3gpp_failure_information_tp_cause: WmsGsmUmtsTpCause): boolean
    set_information(value_information_transaction_id: number, value_information_message_protocol: WmsMessageProtocol, value_information_success: boolean): boolean
    set_sms_on_ims(value_sms_on_ims: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWmsSendAckInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsSendAckInput
}
class MessageWmsSendAckOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSendAckOutput */
    get_failure_cause(): [ /* returnType */ boolean, /* value_failure_cause */ WmsAckFailureCause | null ]
    get_result(): boolean
    ref(): MessageWmsSendAckOutput
    unref(): void
    static name: string
}
class MessageWmsSendFromMemoryStorageInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSendFromMemoryStorageInput */
    get_information(): [ /* returnType */ boolean, /* value_information_storage_type */ WmsStorageType | null, /* value_information_memory_index */ number | null, /* value_information_message_mode */ WmsMessageMode | null ]
    get_sms_on_ims(): [ /* returnType */ boolean, /* value_sms_on_ims */ boolean | null ]
    ref(): MessageWmsSendFromMemoryStorageInput
    set_information(value_information_storage_type: WmsStorageType, value_information_memory_index: number, value_information_message_mode: WmsMessageMode): boolean
    set_sms_on_ims(value_sms_on_ims: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWmsSendFromMemoryStorageInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsSendFromMemoryStorageInput
}
class MessageWmsSendFromMemoryStorageOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSendFromMemoryStorageOutput */
    get_cdma_cause_code(): [ /* returnType */ boolean, /* value_cdma_cause_code */ WmsCdmaCauseCode | null ]
    get_cdma_error_class(): [ /* returnType */ boolean, /* value_cdma_error_class */ WmsCdmaErrorClass | null ]
    get_gsm_wcdma_cause_info(): [ /* returnType */ boolean, /* value_gsm_wcdma_cause_info_rp_cause */ WmsGsmUmtsRpCause | null, /* value_gsm_wcdma_cause_info_tp_cause */ WmsGsmUmtsTpCause | null ]
    get_message_delivery_failure_type(): [ /* returnType */ boolean, /* value_message_delivery_failure_type */ WmsMessageDeliveryFailureType | null ]
    get_message_id(): [ /* returnType */ boolean, /* value_message_id */ number | null ]
    get_result(): boolean
    ref(): MessageWmsSendFromMemoryStorageOutput
    unref(): void
    static name: string
}
class MessageWmsSetEventReportInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSetEventReportInput */
    get_new_mt_message_indicator(): [ /* returnType */ boolean, /* value_new_mt_message_indicator_report */ boolean | null ]
    ref(): MessageWmsSetEventReportInput
    set_new_mt_message_indicator(value_new_mt_message_indicator_report: boolean): boolean
    unref(): void
    static name: string
    static new(): MessageWmsSetEventReportInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsSetEventReportInput
}
class MessageWmsSetEventReportOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSetEventReportOutput */
    get_result(): boolean
    ref(): MessageWmsSetEventReportOutput
    unref(): void
    static name: string
}
class MessageWmsSetRoutesInput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSetRoutesInput */
    get_route_list(): [ /* returnType */ boolean, /* value_route_list */ MessageWmsSetRoutesInputRouteListElement[] | null ]
    get_transfer_status_report(): [ /* returnType */ boolean, /* value_transfer_status_report */ WmsTransferIndication | null ]
    ref(): MessageWmsSetRoutesInput
    set_route_list(value_route_list: MessageWmsSetRoutesInputRouteListElement[]): boolean
    set_transfer_status_report(value_transfer_status_report: WmsTransferIndication): boolean
    unref(): void
    static name: string
    static new(): MessageWmsSetRoutesInput
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageWmsSetRoutesInput
}
class MessageWmsSetRoutesInputRouteListElement {
    /* Fields of Qmi-1.0.Qmi.MessageWmsSetRoutesInputRouteListElement */
    message_type: WmsMessageType
    message_class: WmsMessageClass
    storage: WmsStorageType
    receipt_action: WmsReceiptAction
    static name: string
}
class MessageWmsSetRoutesOutput {
    /* Methods of Qmi-1.0.Qmi.MessageWmsSetRoutesOutput */
    get_result(): boolean
    ref(): MessageWmsSetRoutesOutput
    unref(): void
    static name: string
}
class PhysicalSlotInformationSlot {
    /* Fields of Qmi-1.0.Qmi.PhysicalSlotInformationSlot */
    card_protocol: UimCardProtocol
    valid_applications: number
    atr_value: object[]
    is_euicc: boolean
    static name: string
}
class PhysicalSlotStatusSlot {
    /* Fields of Qmi-1.0.Qmi.PhysicalSlotStatusSlot */
    physical_card_status: UimPhysicalCardState
    physical_slot_status: UimSlotState
    logical_slot: number
    iccid: object[]
    static name: string
}
abstract class ProxyClass {
    /* Fields of Qmi-1.0.Qmi.ProxyClass */
    parent: GObject.ObjectClass
    static name: string
}
class ProxyPrivate {
    static name: string
}
type Message = Uint8Array
}
export default Qmi;