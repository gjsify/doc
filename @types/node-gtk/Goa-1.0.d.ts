/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Goa-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Goa {

enum Error {
    FAILED,
    NOT_SUPPORTED,
    DIALOG_DISMISSED,
    ACCOUNT_EXISTS,
    NOT_AUTHORIZED,
    SSL,
}
const ERROR_NUM_ENTRIES: number
function accountInterfaceInfo(): Gio.DBusInterfaceInfo
function accountOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function calendarInterfaceInfo(): Gio.DBusInterfaceInfo
function calendarOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function chatInterfaceInfo(): Gio.DBusInterfaceInfo
function chatOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string
function contactsInterfaceInfo(): Gio.DBusInterfaceInfo
function contactsOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function documentsInterfaceInfo(): Gio.DBusInterfaceInfo
function documentsOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function errorQuark(): GLib.Quark
function exchangeInterfaceInfo(): Gio.DBusInterfaceInfo
function exchangeOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function filesInterfaceInfo(): Gio.DBusInterfaceInfo
function filesOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function mailInterfaceInfo(): Gio.DBusInterfaceInfo
function mailOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function managerInterfaceInfo(): Gio.DBusInterfaceInfo
function managerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function mapsInterfaceInfo(): Gio.DBusInterfaceInfo
function mapsOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function mediaServerInterfaceInfo(): Gio.DBusInterfaceInfo
function mediaServerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function musicInterfaceInfo(): Gio.DBusInterfaceInfo
function musicOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function oauth2BasedInterfaceInfo(): Gio.DBusInterfaceInfo
function oauth2BasedOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function oauthBasedInterfaceInfo(): Gio.DBusInterfaceInfo
function oauthBasedOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function passwordBasedInterfaceInfo(): Gio.DBusInterfaceInfo
function passwordBasedOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function photosInterfaceInfo(): Gio.DBusInterfaceInfo
function photosOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function printersInterfaceInfo(): Gio.DBusInterfaceInfo
function printersOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function readLaterInterfaceInfo(): Gio.DBusInterfaceInfo
function readLaterOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function ticketingInterfaceInfo(): Gio.DBusInterfaceInfo
function ticketingOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function todoInterfaceInfo(): Gio.DBusInterfaceInfo
function todoOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
class Account {
    /* Properties of Goa-1.0.Goa.Account */
    attentionNeeded: boolean
    calendarDisabled: boolean
    chatDisabled: boolean
    contactsDisabled: boolean
    documentsDisabled: boolean
    filesDisabled: boolean
    id: string
    identity: string
    isLocked: boolean
    isTemporary: boolean
    mailDisabled: boolean
    mapsDisabled: boolean
    musicDisabled: boolean
    photosDisabled: boolean
    presentationIdentity: string
    printersDisabled: boolean
    providerIcon: string
    providerName: string
    providerType: string
    readLaterDisabled: boolean
    ticketingDisabled: boolean
    todoDisabled: boolean
    /* Methods of Goa-1.0.Goa.Account */
    callEnsureCredentials(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEnsureCredentialsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outExpiresIn */ number | null ]
    callEnsureCredentialsSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outExpiresIn */ number | null ]
    callRemove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRemoveFinish(res: Gio.AsyncResult): boolean
    callRemoveSync(cancellable?: Gio.Cancellable | null): boolean
    completeEnsureCredentials(invocation: Gio.DBusMethodInvocation, expiresIn: number): void
    completeRemove(invocation: Gio.DBusMethodInvocation): void
    /* Signals of Goa-1.0.Goa.Account */
    connect(sigName: "handle-ensure-credentials", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-ensure-credentials", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-ensure-credentials", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-ensure-credentials", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-ensure-credentials", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-remove", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-remove", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-remove", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-remove", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-remove", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Calendar {
    /* Properties of Goa-1.0.Goa.Calendar */
    acceptSslErrors: boolean
    uri: string
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Chat {
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Contacts {
    /* Properties of Goa-1.0.Goa.Contacts */
    acceptSslErrors: boolean
    uri: string
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Documents {
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Exchange {
    /* Properties of Goa-1.0.Goa.Exchange */
    acceptSslErrors: boolean
    host: string
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Files {
    /* Properties of Goa-1.0.Goa.Files */
    acceptSslErrors: boolean
    uri: string
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Mail {
    /* Properties of Goa-1.0.Goa.Mail */
    emailAddress: string
    imapAcceptSslErrors: boolean
    imapHost: string
    imapSupported: boolean
    imapUseSsl: boolean
    imapUseTls: boolean
    imapUserName: string
    name: string
    smtpAcceptSslErrors: boolean
    smtpAuthLogin: boolean
    smtpAuthPlain: boolean
    smtpAuthXoauth2: boolean
    smtpHost: string
    smtpSupported: boolean
    smtpUseAuth: boolean
    smtpUseSsl: boolean
    smtpUseTls: boolean
    smtpUserName: string
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Manager {
    /* Methods of Goa-1.0.Goa.Manager */
    callAddAccount(argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddAccountFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccountObjectPath */ string | null ]
    callAddAccountSync(argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccountObjectPath */ string | null ]
    callIsSupportedProvider(argProviderType: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callIsSupportedProviderFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outIsSupported */ boolean | null ]
    callIsSupportedProviderSync(argProviderType: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIsSupported */ boolean | null ]
    completeAddAccount(invocation: Gio.DBusMethodInvocation, accountObjectPath: string): void
    completeIsSupportedProvider(invocation: Gio.DBusMethodInvocation, isSupported: boolean): void
    /* Signals of Goa-1.0.Goa.Manager */
    connect(sigName: "handle-add-account", callback: ((invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => boolean)): number
    on(sigName: "handle-add-account", callback: (invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-add-account", callback: (invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-add-account", callback: (invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "handle-add-account", invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant): void
    connect(sigName: "handle-is-supported-provider", callback: ((invocation: Gio.DBusMethodInvocation, argProviderType: string) => boolean)): number
    on(sigName: "handle-is-supported-provider", callback: (invocation: Gio.DBusMethodInvocation, argProviderType: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-is-supported-provider", callback: (invocation: Gio.DBusMethodInvocation, argProviderType: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-is-supported-provider", callback: (invocation: Gio.DBusMethodInvocation, argProviderType: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-is-supported-provider", invocation: Gio.DBusMethodInvocation, argProviderType: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Maps {
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class MediaServer {
    /* Properties of Goa-1.0.Goa.MediaServer */
    dlnaSupported: boolean
    udn: string
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Music {
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class OAuth2Based {
    /* Properties of Goa-1.0.Goa.OAuth2Based */
    clientId: string
    clientSecret: string
    /* Methods of Goa-1.0.Goa.OAuth2Based */
    callGetAccessToken(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetAccessTokenFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    callGetAccessTokenSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    completeGetAccessToken(invocation: Gio.DBusMethodInvocation, accessToken: string, expiresIn: number): void
    /* Signals of Goa-1.0.Goa.OAuth2Based */
    connect(sigName: "handle-get-access-token", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class OAuthBased {
    /* Properties of Goa-1.0.Goa.OAuthBased */
    consumerKey: string
    consumerSecret: string
    /* Methods of Goa-1.0.Goa.OAuthBased */
    callGetAccessToken(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetAccessTokenFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outAccessTokenSecret */ string | null, /* outExpiresIn */ number | null ]
    callGetAccessTokenSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outAccessTokenSecret */ string | null, /* outExpiresIn */ number | null ]
    completeGetAccessToken(invocation: Gio.DBusMethodInvocation, accessToken: string, accessTokenSecret: string, expiresIn: number): void
    /* Signals of Goa-1.0.Goa.OAuthBased */
    connect(sigName: "handle-get-access-token", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Object {
    /* Properties of Goa-1.0.Goa.Object */
    account: Account
    calendar: Calendar
    chat: Chat
    contacts: Contacts
    documents: Documents
    exchange: Exchange
    files: Files
    mail: Mail
    manager: Manager
    maps: Maps
    mediaServer: MediaServer
    music: Music
    oauthBased: OAuthBased
    oauth2Based: OAuth2Based
    passwordBased: PasswordBased
    photos: Photos
    printers: Printers
    readLater: ReadLater
    ticketing: Ticketing
    todo: Todo
    /* Methods of Goa-1.0.Goa.Object */
    getAccount(): Account | null
    getCalendar(): Calendar | null
    getChat(): Chat | null
    getContacts(): Contacts | null
    getDocuments(): Documents | null
    getExchange(): Exchange | null
    getFiles(): Files | null
    getMail(): Mail | null
    getManager(): Manager | null
    getMaps(): Maps | null
    getMediaServer(): MediaServer | null
    getMusic(): Music | null
    getOauth2Based(): OAuth2Based | null
    getOauthBased(): OAuthBased | null
    getPasswordBased(): PasswordBased | null
    getPhotos(): Photos | null
    getPrinters(): Printers | null
    getReadLater(): ReadLater | null
    getTicketing(): Ticketing | null
    getTodo(): Todo | null
    /* Methods of Gio-2.0.Gio.DBusObject */
    getInterface(interfaceName: string): Gio.DBusInterface | null
    getInterfaces(): Gio.DBusInterface[]
    getObjectPath(): string
    /* Signals of Gio-2.0.Gio.DBusObject */
    connect(sigName: "interface-added", callback: ((interface: Gio.DBusInterface) => void)): number
    on(sigName: "interface-added", callback: (interface: Gio.DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (interface: Gio.DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (interface: Gio.DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: ((interface: Gio.DBusInterface) => void)): number
    on(sigName: "interface-removed", callback: (interface: Gio.DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (interface: Gio.DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (interface: Gio.DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    static name: string
}
class PasswordBased {
    /* Methods of Goa-1.0.Goa.PasswordBased */
    callGetPassword(argId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetPasswordFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outPassword */ string | null ]
    callGetPasswordSync(argId: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPassword */ string | null ]
    completeGetPassword(invocation: Gio.DBusMethodInvocation, password: string): void
    /* Signals of Goa-1.0.Goa.PasswordBased */
    connect(sigName: "handle-get-password", callback: ((invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    on(sigName: "handle-get-password", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-password", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-password", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-password", invocation: Gio.DBusMethodInvocation, argId: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Photos {
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Printers {
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class ReadLater {
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Ticketing {
    /* Properties of Goa-1.0.Goa.Ticketing */
    details: GLib.Variant
    /* Methods of Goa-1.0.Goa.Ticketing */
    callGetTicket(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetTicketFinish(res: Gio.AsyncResult): boolean
    callGetTicketSync(cancellable?: Gio.Cancellable | null): boolean
    completeGetTicket(invocation: Gio.DBusMethodInvocation): void
    /* Signals of Goa-1.0.Goa.Ticketing */
    connect(sigName: "handle-get-ticket", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-ticket", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-ticket", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-ticket", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-ticket", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Todo {
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
interface AccountProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.Account */
    attentionNeeded?: boolean
    calendarDisabled?: boolean
    chatDisabled?: boolean
    contactsDisabled?: boolean
    documentsDisabled?: boolean
    filesDisabled?: boolean
    id?: string
    identity?: string
    isLocked?: boolean
    isTemporary?: boolean
    mailDisabled?: boolean
    mapsDisabled?: boolean
    musicDisabled?: boolean
    photosDisabled?: boolean
    presentationIdentity?: string
    printersDisabled?: boolean
    providerIcon?: string
    providerName?: string
    providerType?: string
    readLaterDisabled?: boolean
    ticketingDisabled?: boolean
    todoDisabled?: boolean
}
class AccountProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa-1.0.Goa.Account */
    attentionNeeded: boolean
    calendarDisabled: boolean
    chatDisabled: boolean
    contactsDisabled: boolean
    documentsDisabled: boolean
    filesDisabled: boolean
    id: string
    identity: string
    isLocked: boolean
    isTemporary: boolean
    mailDisabled: boolean
    mapsDisabled: boolean
    musicDisabled: boolean
    photosDisabled: boolean
    presentationIdentity: string
    printersDisabled: boolean
    providerIcon: string
    providerName: string
    providerType: string
    readLaterDisabled: boolean
    ticketingDisabled: boolean
    todoDisabled: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Goa-1.0.Goa.Account */
    callEnsureCredentials(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEnsureCredentialsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outExpiresIn */ number | null ]
    callEnsureCredentialsSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outExpiresIn */ number | null ]
    callRemove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRemoveFinish(res: Gio.AsyncResult): boolean
    callRemoveSync(cancellable?: Gio.Cancellable | null): boolean
    completeEnsureCredentials(invocation: Gio.DBusMethodInvocation, expiresIn: number): void
    completeRemove(invocation: Gio.DBusMethodInvocation): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.Account */
    connect(sigName: "handle-ensure-credentials", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-ensure-credentials", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-ensure-credentials", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-ensure-credentials", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-ensure-credentials", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-remove", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-remove", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-remove", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-remove", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-remove", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attention-needed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-needed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attention-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attention-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attention-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chat-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contacts-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::documents-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::files-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::files-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::files-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::files-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-locked", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-locked", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-temporary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-temporary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-temporary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-temporary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-temporary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mail-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maps-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::music-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::music-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::music-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::music-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::photos-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::presentation-identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presentation-identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::printers-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider-icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-later-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ticketing-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::todo-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AccountProxy_ConstructProps)
    _init (config?: AccountProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): AccountProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): AccountProxy
    static newForBusFinish(res: Gio.AsyncResult): AccountProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): AccountProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): AccountProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): AccountProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): AccountProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): AccountProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface AccountSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.Account */
    attentionNeeded?: boolean
    calendarDisabled?: boolean
    chatDisabled?: boolean
    contactsDisabled?: boolean
    documentsDisabled?: boolean
    filesDisabled?: boolean
    id?: string
    identity?: string
    isLocked?: boolean
    isTemporary?: boolean
    mailDisabled?: boolean
    mapsDisabled?: boolean
    musicDisabled?: boolean
    photosDisabled?: boolean
    presentationIdentity?: string
    printersDisabled?: boolean
    providerIcon?: string
    providerName?: string
    providerType?: string
    readLaterDisabled?: boolean
    ticketingDisabled?: boolean
    todoDisabled?: boolean
}
class AccountSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.Account */
    attentionNeeded: boolean
    calendarDisabled: boolean
    chatDisabled: boolean
    contactsDisabled: boolean
    documentsDisabled: boolean
    filesDisabled: boolean
    id: string
    identity: string
    isLocked: boolean
    isTemporary: boolean
    mailDisabled: boolean
    mapsDisabled: boolean
    musicDisabled: boolean
    photosDisabled: boolean
    presentationIdentity: string
    printersDisabled: boolean
    providerIcon: string
    providerName: string
    providerType: string
    readLaterDisabled: boolean
    ticketingDisabled: boolean
    todoDisabled: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Goa-1.0.Goa.Account */
    callEnsureCredentials(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEnsureCredentialsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outExpiresIn */ number | null ]
    callEnsureCredentialsSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outExpiresIn */ number | null ]
    callRemove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRemoveFinish(res: Gio.AsyncResult): boolean
    callRemoveSync(cancellable?: Gio.Cancellable | null): boolean
    completeEnsureCredentials(invocation: Gio.DBusMethodInvocation, expiresIn: number): void
    completeRemove(invocation: Gio.DBusMethodInvocation): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.Account */
    connect(sigName: "handle-ensure-credentials", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-ensure-credentials", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-ensure-credentials", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-ensure-credentials", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-ensure-credentials", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-remove", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-remove", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-remove", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-remove", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-remove", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attention-needed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-needed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attention-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attention-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attention-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chat-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contacts-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::documents-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::files-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::files-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::files-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::files-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-locked", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-locked", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-temporary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-temporary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-temporary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-temporary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-temporary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mail-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maps-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::music-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::music-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::music-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::music-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::photos-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::presentation-identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presentation-identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::printers-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider-icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-later-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ticketing-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::todo-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo-disabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AccountSkeleton_ConstructProps)
    _init (config?: AccountSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AccountSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface CalendarProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.Calendar */
    acceptSslErrors?: boolean
    uri?: string
}
class CalendarProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa-1.0.Goa.Calendar */
    acceptSslErrors: boolean
    uri: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalendarProxy_ConstructProps)
    _init (config?: CalendarProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): CalendarProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): CalendarProxy
    static newForBusFinish(res: Gio.AsyncResult): CalendarProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): CalendarProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): CalendarProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): CalendarProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): CalendarProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): CalendarProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface CalendarSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.Calendar */
    acceptSslErrors?: boolean
    uri?: string
}
class CalendarSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.Calendar */
    acceptSslErrors: boolean
    uri: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalendarSkeleton_ConstructProps)
    _init (config?: CalendarSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CalendarSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface ChatProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class ChatProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ChatProxy_ConstructProps)
    _init (config?: ChatProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): ChatProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): ChatProxy
    static newForBusFinish(res: Gio.AsyncResult): ChatProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): ChatProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ChatProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ChatProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ChatProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ChatProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface ChatSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
class ChatSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ChatSkeleton_ConstructProps)
    _init (config?: ChatSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ChatSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
class Client {
    /* Properties of Goa-1.0.Goa.Client */
    readonly objectManager: Gio.DBusObjectManager
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Goa-1.0.Goa.Client */
    getAccounts(): Object[]
    getManager(): Manager | null
    getObjectManager(): Gio.DBusObjectManager
    lookupById(id: string): Object
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
    /* Signals of Goa-1.0.Goa.Client */
    connect(sigName: "account-added", callback: ((object: Object) => void)): number
    on(sigName: "account-added", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "account-added", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "account-added", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "account-added", object: Object): void
    connect(sigName: "account-changed", callback: ((object: Object) => void)): number
    on(sigName: "account-changed", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "account-changed", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "account-changed", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "account-changed", object: Object): void
    connect(sigName: "account-removed", callback: ((object: Object) => void)): number
    on(sigName: "account-removed", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "account-removed", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "account-removed", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "account-removed", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::object-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static newFinish(res: Gio.AsyncResult): Client
    static newSync(cancellable?: Gio.Cancellable | null): Client
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface ContactsProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.Contacts */
    acceptSslErrors?: boolean
    uri?: string
}
class ContactsProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa-1.0.Goa.Contacts */
    acceptSslErrors: boolean
    uri: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ContactsProxy_ConstructProps)
    _init (config?: ContactsProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): ContactsProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): ContactsProxy
    static newForBusFinish(res: Gio.AsyncResult): ContactsProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): ContactsProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ContactsProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ContactsProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ContactsProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ContactsProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface ContactsSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.Contacts */
    acceptSslErrors?: boolean
    uri?: string
}
class ContactsSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.Contacts */
    acceptSslErrors: boolean
    uri: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ContactsSkeleton_ConstructProps)
    _init (config?: ContactsSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContactsSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface DocumentsProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class DocumentsProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsProxy_ConstructProps)
    _init (config?: DocumentsProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): DocumentsProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): DocumentsProxy
    static newForBusFinish(res: Gio.AsyncResult): DocumentsProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): DocumentsProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): DocumentsProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): DocumentsProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): DocumentsProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): DocumentsProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface DocumentsSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
class DocumentsSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsSkeleton_ConstructProps)
    _init (config?: DocumentsSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DocumentsSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface ExchangeProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.Exchange */
    acceptSslErrors?: boolean
    host?: string
}
class ExchangeProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa-1.0.Goa.Exchange */
    acceptSslErrors: boolean
    host: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ExchangeProxy_ConstructProps)
    _init (config?: ExchangeProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): ExchangeProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): ExchangeProxy
    static newForBusFinish(res: Gio.AsyncResult): ExchangeProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): ExchangeProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ExchangeProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ExchangeProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ExchangeProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ExchangeProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface ExchangeSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.Exchange */
    acceptSslErrors?: boolean
    host?: string
}
class ExchangeSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.Exchange */
    acceptSslErrors: boolean
    host: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ExchangeSkeleton_ConstructProps)
    _init (config?: ExchangeSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ExchangeSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface FilesProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.Files */
    acceptSslErrors?: boolean
    uri?: string
}
class FilesProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa-1.0.Goa.Files */
    acceptSslErrors: boolean
    uri: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FilesProxy_ConstructProps)
    _init (config?: FilesProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): FilesProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): FilesProxy
    static newForBusFinish(res: Gio.AsyncResult): FilesProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): FilesProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): FilesProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): FilesProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): FilesProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): FilesProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface FilesSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.Files */
    acceptSslErrors?: boolean
    uri?: string
}
class FilesSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.Files */
    acceptSslErrors: boolean
    uri: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FilesSkeleton_ConstructProps)
    _init (config?: FilesSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilesSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface MailProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.Mail */
    emailAddress?: string
    imapAcceptSslErrors?: boolean
    imapHost?: string
    imapSupported?: boolean
    imapUseSsl?: boolean
    imapUseTls?: boolean
    imapUserName?: string
    name?: string
    smtpAcceptSslErrors?: boolean
    smtpAuthLogin?: boolean
    smtpAuthPlain?: boolean
    smtpAuthXoauth2?: boolean
    smtpHost?: string
    smtpSupported?: boolean
    smtpUseAuth?: boolean
    smtpUseSsl?: boolean
    smtpUseTls?: boolean
    smtpUserName?: string
}
class MailProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa-1.0.Goa.Mail */
    emailAddress: string
    imapAcceptSslErrors: boolean
    imapHost: string
    imapSupported: boolean
    imapUseSsl: boolean
    imapUseTls: boolean
    imapUserName: string
    name: string
    smtpAcceptSslErrors: boolean
    smtpAuthLogin: boolean
    smtpAuthPlain: boolean
    smtpAuthXoauth2: boolean
    smtpHost: string
    smtpSupported: boolean
    smtpUseAuth: boolean
    smtpUseSsl: boolean
    smtpUseTls: boolean
    smtpUserName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-supported", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-supported", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-use-ssl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-ssl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-use-tls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-tls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-user-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-user-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-auth-login", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-login", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-auth-plain", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-plain", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-auth-xoauth2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-xoauth2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-supported", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-supported", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-use-auth", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-auth", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-use-ssl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-ssl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-use-tls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-tls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-user-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-user-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MailProxy_ConstructProps)
    _init (config?: MailProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): MailProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): MailProxy
    static newForBusFinish(res: Gio.AsyncResult): MailProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): MailProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): MailProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): MailProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): MailProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): MailProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface MailSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.Mail */
    emailAddress?: string
    imapAcceptSslErrors?: boolean
    imapHost?: string
    imapSupported?: boolean
    imapUseSsl?: boolean
    imapUseTls?: boolean
    imapUserName?: string
    name?: string
    smtpAcceptSslErrors?: boolean
    smtpAuthLogin?: boolean
    smtpAuthPlain?: boolean
    smtpAuthXoauth2?: boolean
    smtpHost?: string
    smtpSupported?: boolean
    smtpUseAuth?: boolean
    smtpUseSsl?: boolean
    smtpUseTls?: boolean
    smtpUserName?: string
}
class MailSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.Mail */
    emailAddress: string
    imapAcceptSslErrors: boolean
    imapHost: string
    imapSupported: boolean
    imapUseSsl: boolean
    imapUseTls: boolean
    imapUserName: string
    name: string
    smtpAcceptSslErrors: boolean
    smtpAuthLogin: boolean
    smtpAuthPlain: boolean
    smtpAuthXoauth2: boolean
    smtpHost: string
    smtpSupported: boolean
    smtpUseAuth: boolean
    smtpUseSsl: boolean
    smtpUseTls: boolean
    smtpUserName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-supported", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-supported", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-use-ssl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-ssl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-use-tls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-tls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imap-user-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-user-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-accept-ssl-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-auth-login", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-login", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-auth-plain", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-plain", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-auth-xoauth2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-xoauth2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-supported", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-supported", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-use-auth", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-auth", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-use-ssl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-ssl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-use-tls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-tls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smtp-user-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-user-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MailSkeleton_ConstructProps)
    _init (config?: MailSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MailSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface ManagerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class ManagerProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Goa-1.0.Goa.Manager */
    callAddAccount(argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddAccountFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccountObjectPath */ string | null ]
    callAddAccountSync(argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccountObjectPath */ string | null ]
    callIsSupportedProvider(argProviderType: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callIsSupportedProviderFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outIsSupported */ boolean | null ]
    callIsSupportedProviderSync(argProviderType: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIsSupported */ boolean | null ]
    completeAddAccount(invocation: Gio.DBusMethodInvocation, accountObjectPath: string): void
    completeIsSupportedProvider(invocation: Gio.DBusMethodInvocation, isSupported: boolean): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.Manager */
    connect(sigName: "handle-add-account", callback: ((invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => boolean)): number
    on(sigName: "handle-add-account", callback: (invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-add-account", callback: (invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-add-account", callback: (invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "handle-add-account", invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant): void
    connect(sigName: "handle-is-supported-provider", callback: ((invocation: Gio.DBusMethodInvocation, argProviderType: string) => boolean)): number
    on(sigName: "handle-is-supported-provider", callback: (invocation: Gio.DBusMethodInvocation, argProviderType: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-is-supported-provider", callback: (invocation: Gio.DBusMethodInvocation, argProviderType: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-is-supported-provider", callback: (invocation: Gio.DBusMethodInvocation, argProviderType: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-is-supported-provider", invocation: Gio.DBusMethodInvocation, argProviderType: string): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ManagerProxy_ConstructProps)
    _init (config?: ManagerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): ManagerProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): ManagerProxy
    static newForBusFinish(res: Gio.AsyncResult): ManagerProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): ManagerProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ManagerProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface ManagerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
class ManagerSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Goa-1.0.Goa.Manager */
    callAddAccount(argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAddAccountFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccountObjectPath */ string | null ]
    callAddAccountSync(argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccountObjectPath */ string | null ]
    callIsSupportedProvider(argProviderType: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callIsSupportedProviderFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outIsSupported */ boolean | null ]
    callIsSupportedProviderSync(argProviderType: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIsSupported */ boolean | null ]
    completeAddAccount(invocation: Gio.DBusMethodInvocation, accountObjectPath: string): void
    completeIsSupportedProvider(invocation: Gio.DBusMethodInvocation, isSupported: boolean): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.Manager */
    connect(sigName: "handle-add-account", callback: ((invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => boolean)): number
    on(sigName: "handle-add-account", callback: (invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-add-account", callback: (invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-add-account", callback: (invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "handle-add-account", invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant): void
    connect(sigName: "handle-is-supported-provider", callback: ((invocation: Gio.DBusMethodInvocation, argProviderType: string) => boolean)): number
    on(sigName: "handle-is-supported-provider", callback: (invocation: Gio.DBusMethodInvocation, argProviderType: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-is-supported-provider", callback: (invocation: Gio.DBusMethodInvocation, argProviderType: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-is-supported-provider", callback: (invocation: Gio.DBusMethodInvocation, argProviderType: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-is-supported-provider", invocation: Gio.DBusMethodInvocation, argProviderType: string): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ManagerSkeleton_ConstructProps)
    _init (config?: ManagerSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ManagerSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface MapsProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class MapsProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MapsProxy_ConstructProps)
    _init (config?: MapsProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): MapsProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): MapsProxy
    static newForBusFinish(res: Gio.AsyncResult): MapsProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): MapsProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): MapsProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): MapsProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): MapsProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): MapsProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface MapsSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
class MapsSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MapsSkeleton_ConstructProps)
    _init (config?: MapsSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MapsSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface MediaServerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.MediaServer */
    dlnaSupported?: boolean
    udn?: string
}
class MediaServerProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa-1.0.Goa.MediaServer */
    dlnaSupported: boolean
    udn: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-supported", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-supported", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaServerProxy_ConstructProps)
    _init (config?: MediaServerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): MediaServerProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): MediaServerProxy
    static newForBusFinish(res: Gio.AsyncResult): MediaServerProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): MediaServerProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): MediaServerProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): MediaServerProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): MediaServerProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): MediaServerProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface MediaServerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.MediaServer */
    dlnaSupported?: boolean
    udn?: string
}
class MediaServerSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.MediaServer */
    dlnaSupported: boolean
    udn: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dlna-supported", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-supported", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaServerSkeleton_ConstructProps)
    _init (config?: MediaServerSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaServerSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface MusicProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class MusicProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MusicProxy_ConstructProps)
    _init (config?: MusicProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): MusicProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): MusicProxy
    static newForBusFinish(res: Gio.AsyncResult): MusicProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): MusicProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): MusicProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): MusicProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): MusicProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): MusicProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface MusicSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
class MusicSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MusicSkeleton_ConstructProps)
    _init (config?: MusicSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MusicSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface OAuth2BasedProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.OAuth2Based */
    clientId?: string
    clientSecret?: string
}
class OAuth2BasedProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa-1.0.Goa.OAuth2Based */
    clientId: string
    clientSecret: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Goa-1.0.Goa.OAuth2Based */
    callGetAccessToken(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetAccessTokenFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    callGetAccessTokenSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    completeGetAccessToken(invocation: Gio.DBusMethodInvocation, accessToken: string, expiresIn: number): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.OAuth2Based */
    connect(sigName: "handle-get-access-token", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-secret", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-secret", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OAuth2BasedProxy_ConstructProps)
    _init (config?: OAuth2BasedProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): OAuth2BasedProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): OAuth2BasedProxy
    static newForBusFinish(res: Gio.AsyncResult): OAuth2BasedProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): OAuth2BasedProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): OAuth2BasedProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): OAuth2BasedProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): OAuth2BasedProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): OAuth2BasedProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface OAuth2BasedSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.OAuth2Based */
    clientId?: string
    clientSecret?: string
}
class OAuth2BasedSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.OAuth2Based */
    clientId: string
    clientSecret: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Goa-1.0.Goa.OAuth2Based */
    callGetAccessToken(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetAccessTokenFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    callGetAccessTokenSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    completeGetAccessToken(invocation: Gio.DBusMethodInvocation, accessToken: string, expiresIn: number): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.OAuth2Based */
    connect(sigName: "handle-get-access-token", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-secret", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-secret", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OAuth2BasedSkeleton_ConstructProps)
    _init (config?: OAuth2BasedSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OAuth2BasedSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface OAuthBasedProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.OAuthBased */
    consumerKey?: string
    consumerSecret?: string
}
class OAuthBasedProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa-1.0.Goa.OAuthBased */
    consumerKey: string
    consumerSecret: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Goa-1.0.Goa.OAuthBased */
    callGetAccessToken(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetAccessTokenFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outAccessTokenSecret */ string | null, /* outExpiresIn */ number | null ]
    callGetAccessTokenSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outAccessTokenSecret */ string | null, /* outExpiresIn */ number | null ]
    completeGetAccessToken(invocation: Gio.DBusMethodInvocation, accessToken: string, accessTokenSecret: string, expiresIn: number): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.OAuthBased */
    connect(sigName: "handle-get-access-token", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::consumer-key", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-key", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::consumer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::consumer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::consumer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::consumer-secret", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-secret", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OAuthBasedProxy_ConstructProps)
    _init (config?: OAuthBasedProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): OAuthBasedProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): OAuthBasedProxy
    static newForBusFinish(res: Gio.AsyncResult): OAuthBasedProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): OAuthBasedProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): OAuthBasedProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): OAuthBasedProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): OAuthBasedProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): OAuthBasedProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface OAuthBasedSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.OAuthBased */
    consumerKey?: string
    consumerSecret?: string
}
class OAuthBasedSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.OAuthBased */
    consumerKey: string
    consumerSecret: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Goa-1.0.Goa.OAuthBased */
    callGetAccessToken(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetAccessTokenFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outAccessTokenSecret */ string | null, /* outExpiresIn */ number | null ]
    callGetAccessTokenSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outAccessTokenSecret */ string | null, /* outExpiresIn */ number | null ]
    completeGetAccessToken(invocation: Gio.DBusMethodInvocation, accessToken: string, accessTokenSecret: string, expiresIn: number): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.OAuthBased */
    connect(sigName: "handle-get-access-token", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-access-token", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::consumer-key", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-key", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::consumer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::consumer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::consumer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::consumer-secret", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-secret", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OAuthBasedSkeleton_ConstructProps)
    _init (config?: OAuthBasedSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OAuthBasedSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface ObjectManagerClient_ConstructProps extends Gio.DBusObjectManagerClient_ConstructProps {
}
class ObjectManagerClient {
    /* Properties of Gio-2.0.Gio.DBusObjectManagerClient */
    readonly nameOwner: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusObjectManagerClient */
    getConnection(): Gio.DBusConnection
    getFlags(): Gio.DBusObjectManagerClientFlags
    getName(): string
    getNameOwner(): string | null
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
    /* Methods of Gio-2.0.Gio.DBusObjectManager */
    getInterface(objectPath: string, interfaceName: string): Gio.DBusInterface | null
    getObject(objectPath: string): Gio.DBusObject | null
    getObjectPath(): string
    getObjects(): Gio.DBusObject[]
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusObjectManagerClient */
    connect(sigName: "interface-proxy-properties-changed", callback: ((objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "interface-proxy-properties-changed", callback: (objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-proxy-properties-changed", callback: (objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-proxy-properties-changed", callback: (objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "interface-proxy-properties-changed", objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "interface-proxy-signal", callback: ((objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "interface-proxy-signal", callback: (objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-proxy-signal", callback: (objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-proxy-signal", callback: (objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "interface-proxy-signal", objectProxy: Gio.DBusObjectProxy, interfaceProxy: Gio.DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: ((object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    on(sigName: "interface-added", callback: (object: Gio.DBusObject, interface: Gio.DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (object: Gio.DBusObject, interface: Gio.DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (object: Gio.DBusObject, interface: Gio.DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-added", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: ((object: Gio.DBusObject, interface: Gio.DBusInterface) => void)): number
    on(sigName: "interface-removed", callback: (object: Gio.DBusObject, interface: Gio.DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (object: Gio.DBusObject, interface: Gio.DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (object: Gio.DBusObject, interface: Gio.DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-removed", object: Gio.DBusObject, interface: Gio.DBusInterface): void
    connect(sigName: "object-added", callback: ((object: Gio.DBusObject) => void)): number
    on(sigName: "object-added", callback: (object: Gio.DBusObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-added", callback: (object: Gio.DBusObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-added", callback: (object: Gio.DBusObject) => void): NodeJS.EventEmitter
    emit(sigName: "object-added", object: Gio.DBusObject): void
    connect(sigName: "object-removed", callback: ((object: Gio.DBusObject) => void)): number
    on(sigName: "object-removed", callback: (object: Gio.DBusObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-removed", callback: (object: Gio.DBusObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-removed", callback: (object: Gio.DBusObject) => void): NodeJS.EventEmitter
    emit(sigName: "object-removed", object: Gio.DBusObject): void
    connect(sigName: "notify::name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ObjectManagerClient_ConstructProps)
    _init (config?: ObjectManagerClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): ObjectManagerClient
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): ObjectManagerClient
    static newForBusFinish(res: Gio.AsyncResult): ObjectManagerClient
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): ObjectManagerClient
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string, getProxyTypeFunc?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null): ObjectManagerClient
    static getProxyType(manager: Gio.DBusObjectManagerClient, objectPath: string, interfaceName?: string | null, userData?: object | null): GObject.Type
    static newForBus(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface ObjectProxy_ConstructProps extends Gio.DBusObjectProxy_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.Object */
    account?: Account
    calendar?: Calendar
    chat?: Chat
    contacts?: Contacts
    documents?: Documents
    exchange?: Exchange
    files?: Files
    mail?: Mail
    manager?: Manager
    maps?: Maps
    mediaServer?: MediaServer
    music?: Music
    oauthBased?: OAuthBased
    oauth2Based?: OAuth2Based
    passwordBased?: PasswordBased
    photos?: Photos
    printers?: Printers
    readLater?: ReadLater
    ticketing?: Ticketing
    todo?: Todo
}
class ObjectProxy {
    /* Properties of Goa-1.0.Goa.Object */
    account: Account
    calendar: Calendar
    chat: Chat
    contacts: Contacts
    documents: Documents
    exchange: Exchange
    files: Files
    mail: Mail
    manager: Manager
    maps: Maps
    mediaServer: MediaServer
    music: Music
    oauthBased: OAuthBased
    oauth2Based: OAuth2Based
    passwordBased: PasswordBased
    photos: Photos
    printers: Printers
    readLater: ReadLater
    ticketing: Ticketing
    todo: Todo
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusObjectProxy */
    getConnection(): Gio.DBusConnection
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
    /* Methods of Gio-2.0.Gio.DBusObject */
    getInterface(interfaceName: string): Gio.DBusInterface | null
    getInterfaces(): Gio.DBusInterface[]
    getObjectPath(): string
    /* Methods of Goa-1.0.Goa.Object */
    getAccount(): Account | null
    getCalendar(): Calendar | null
    getChat(): Chat | null
    getContacts(): Contacts | null
    getDocuments(): Documents | null
    getExchange(): Exchange | null
    getFiles(): Files | null
    getMail(): Mail | null
    getManager(): Manager | null
    getMaps(): Maps | null
    getMediaServer(): MediaServer | null
    getMusic(): Music | null
    getOauth2Based(): OAuth2Based | null
    getOauthBased(): OAuthBased | null
    getPasswordBased(): PasswordBased | null
    getPhotos(): Photos | null
    getPrinters(): Printers | null
    getReadLater(): ReadLater | null
    getTicketing(): Ticketing | null
    getTodo(): Todo | null
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObject */
    connect(sigName: "interface-added", callback: ((interface: Gio.DBusInterface) => void)): number
    on(sigName: "interface-added", callback: (interface: Gio.DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (interface: Gio.DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (interface: Gio.DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: ((interface: Gio.DBusInterface) => void)): number
    on(sigName: "interface-removed", callback: (interface: Gio.DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (interface: Gio.DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (interface: Gio.DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    connect(sigName: "notify::account", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contacts", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contacts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contacts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contacts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::documents", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::documents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::documents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::documents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::exchange", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exchange", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::files", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mail", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-server", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-server", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::music", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::music", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::music", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::music", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::oauth-based", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth-based", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::oauth-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::oauth-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::oauth-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::oauth2-based", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth2-based", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-based", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-based", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::photos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::printers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::printers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::printers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::printers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-later", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-later", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-later", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-later", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ticketing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ticketing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ticketing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ticketing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::todo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::todo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::todo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::todo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ObjectProxy_ConstructProps)
    _init (config?: ObjectProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection, objectPath: string): ObjectProxy
    /* Function overloads */
    static new(connection: Gio.DBusConnection, objectPath: string): ObjectProxy
    static $gtype: GObject.Type
}
interface ObjectSkeleton_ConstructProps extends Gio.DBusObjectSkeleton_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.Object */
    account?: Account
    calendar?: Calendar
    chat?: Chat
    contacts?: Contacts
    documents?: Documents
    exchange?: Exchange
    files?: Files
    mail?: Mail
    manager?: Manager
    maps?: Maps
    mediaServer?: MediaServer
    music?: Music
    oauthBased?: OAuthBased
    oauth2Based?: OAuth2Based
    passwordBased?: PasswordBased
    photos?: Photos
    printers?: Printers
    readLater?: ReadLater
    ticketing?: Ticketing
    todo?: Todo
}
class ObjectSkeleton {
    /* Properties of Gio-2.0.Gio.DBusObjectSkeleton */
    gObjectPath: string
    /* Properties of Goa-1.0.Goa.Object */
    account: Account
    calendar: Calendar
    chat: Chat
    contacts: Contacts
    documents: Documents
    exchange: Exchange
    files: Files
    mail: Mail
    manager: Manager
    maps: Maps
    mediaServer: MediaServer
    music: Music
    oauthBased: OAuthBased
    oauth2Based: OAuth2Based
    passwordBased: PasswordBased
    photos: Photos
    printers: Printers
    readLater: ReadLater
    ticketing: Ticketing
    todo: Todo
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Goa-1.0.Goa.ObjectSkeleton */
    setAccount(interface?: Account | null): void
    setCalendar(interface?: Calendar | null): void
    setChat(interface?: Chat | null): void
    setContacts(interface?: Contacts | null): void
    setDocuments(interface?: Documents | null): void
    setExchange(interface?: Exchange | null): void
    setFiles(interface?: Files | null): void
    setMail(interface?: Mail | null): void
    setManager(interface?: Manager | null): void
    setMaps(interface?: Maps | null): void
    setMediaServer(interface?: MediaServer | null): void
    setMusic(interface?: Music | null): void
    setOauth2Based(interface?: OAuth2Based | null): void
    setOauthBased(interface?: OAuthBased | null): void
    setPasswordBased(interface?: PasswordBased | null): void
    setPhotos(interface?: Photos | null): void
    setPrinters(interface?: Printers | null): void
    setReadLater(interface?: ReadLater | null): void
    setTicketing(interface?: Ticketing | null): void
    setTodo(interface?: Todo | null): void
    /* Methods of Gio-2.0.Gio.DBusObjectSkeleton */
    addInterface(interface: Gio.DBusInterfaceSkeleton): void
    flush(): void
    removeInterface(interface: Gio.DBusInterfaceSkeleton): void
    removeInterfaceByName(interfaceName: string): void
    setObjectPath(objectPath: string): void
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
    /* Methods of Gio-2.0.Gio.DBusObject */
    getInterface(interfaceName: string): Gio.DBusInterface | null
    getInterfaces(): Gio.DBusInterface[]
    getObjectPath(): string
    /* Methods of Goa-1.0.Goa.Object */
    getAccount(): Account | null
    getCalendar(): Calendar | null
    getChat(): Chat | null
    getContacts(): Contacts | null
    getDocuments(): Documents | null
    getExchange(): Exchange | null
    getFiles(): Files | null
    getMail(): Mail | null
    getManager(): Manager | null
    getMaps(): Maps | null
    getMediaServer(): MediaServer | null
    getMusic(): Music | null
    getOauth2Based(): OAuth2Based | null
    getOauthBased(): OAuthBased | null
    getPasswordBased(): PasswordBased | null
    getPhotos(): Photos | null
    getPrinters(): Printers | null
    getReadLater(): ReadLater | null
    getTicketing(): Ticketing | null
    getTodo(): Todo | null
    /* Signals of Gio-2.0.Gio.DBusObjectSkeleton */
    connect(sigName: "authorize-method", callback: ((interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "authorize-method", callback: (interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authorize-method", callback: (interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authorize-method", callback: (interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "authorize-method", interface: Gio.DBusInterfaceSkeleton, invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusObject */
    connect(sigName: "interface-added", callback: ((interface: Gio.DBusInterface) => void)): number
    on(sigName: "interface-added", callback: (interface: Gio.DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-added", callback: (interface: Gio.DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-added", callback: (interface: Gio.DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-added", interface: Gio.DBusInterface): void
    connect(sigName: "interface-removed", callback: ((interface: Gio.DBusInterface) => void)): number
    on(sigName: "interface-removed", callback: (interface: Gio.DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "interface-removed", callback: (interface: Gio.DBusInterface) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "interface-removed", callback: (interface: Gio.DBusInterface) => void): NodeJS.EventEmitter
    emit(sigName: "interface-removed", interface: Gio.DBusInterface): void
    connect(sigName: "notify::g-object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::account", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::chat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contacts", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contacts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contacts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contacts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::documents", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::documents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::documents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::documents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::exchange", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exchange", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::files", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mail", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-server", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-server", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::music", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::music", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::music", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::music", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::oauth-based", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth-based", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::oauth-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::oauth-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::oauth-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::oauth2-based", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth2-based", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-based", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-based", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::photos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::printers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::printers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::printers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::printers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-later", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-later", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-later", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-later", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ticketing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ticketing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ticketing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ticketing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::todo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::todo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::todo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::todo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ObjectSkeleton_ConstructProps)
    _init (config?: ObjectSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(objectPath: string): ObjectSkeleton
    /* Function overloads */
    static new(objectPath: string): ObjectSkeleton
    static $gtype: GObject.Type
}
interface PasswordBasedProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class PasswordBasedProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Goa-1.0.Goa.PasswordBased */
    callGetPassword(argId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetPasswordFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outPassword */ string | null ]
    callGetPasswordSync(argId: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPassword */ string | null ]
    completeGetPassword(invocation: Gio.DBusMethodInvocation, password: string): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.PasswordBased */
    connect(sigName: "handle-get-password", callback: ((invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    on(sigName: "handle-get-password", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-password", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-password", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-password", invocation: Gio.DBusMethodInvocation, argId: string): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PasswordBasedProxy_ConstructProps)
    _init (config?: PasswordBasedProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): PasswordBasedProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): PasswordBasedProxy
    static newForBusFinish(res: Gio.AsyncResult): PasswordBasedProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): PasswordBasedProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): PasswordBasedProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): PasswordBasedProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): PasswordBasedProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): PasswordBasedProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface PasswordBasedSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
class PasswordBasedSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Goa-1.0.Goa.PasswordBased */
    callGetPassword(argId: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetPasswordFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outPassword */ string | null ]
    callGetPasswordSync(argId: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPassword */ string | null ]
    completeGetPassword(invocation: Gio.DBusMethodInvocation, password: string): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.PasswordBased */
    connect(sigName: "handle-get-password", callback: ((invocation: Gio.DBusMethodInvocation, argId: string) => boolean)): number
    on(sigName: "handle-get-password", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-password", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-password", callback: (invocation: Gio.DBusMethodInvocation, argId: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-password", invocation: Gio.DBusMethodInvocation, argId: string): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PasswordBasedSkeleton_ConstructProps)
    _init (config?: PasswordBasedSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PasswordBasedSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface PhotosProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class PhotosProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PhotosProxy_ConstructProps)
    _init (config?: PhotosProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): PhotosProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): PhotosProxy
    static newForBusFinish(res: Gio.AsyncResult): PhotosProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): PhotosProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): PhotosProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): PhotosProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): PhotosProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): PhotosProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface PhotosSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
class PhotosSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PhotosSkeleton_ConstructProps)
    _init (config?: PhotosSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PhotosSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface PrintersProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class PrintersProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PrintersProxy_ConstructProps)
    _init (config?: PrintersProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): PrintersProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): PrintersProxy
    static newForBusFinish(res: Gio.AsyncResult): PrintersProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): PrintersProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): PrintersProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): PrintersProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): PrintersProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): PrintersProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface PrintersSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
class PrintersSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PrintersSkeleton_ConstructProps)
    _init (config?: PrintersSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PrintersSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface ReadLaterProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class ReadLaterProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ReadLaterProxy_ConstructProps)
    _init (config?: ReadLaterProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): ReadLaterProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): ReadLaterProxy
    static newForBusFinish(res: Gio.AsyncResult): ReadLaterProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): ReadLaterProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): ReadLaterProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ReadLaterProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): ReadLaterProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): ReadLaterProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface ReadLaterSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
class ReadLaterSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ReadLaterSkeleton_ConstructProps)
    _init (config?: ReadLaterSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ReadLaterSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface TicketingProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.Ticketing */
    details?: GLib.Variant
}
class TicketingProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Goa-1.0.Goa.Ticketing */
    details: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Goa-1.0.Goa.Ticketing */
    callGetTicket(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetTicketFinish(res: Gio.AsyncResult): boolean
    callGetTicketSync(cancellable?: Gio.Cancellable | null): boolean
    completeGetTicket(invocation: Gio.DBusMethodInvocation): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.Ticketing */
    connect(sigName: "handle-get-ticket", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-ticket", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-ticket", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-ticket", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-ticket", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::details", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TicketingProxy_ConstructProps)
    _init (config?: TicketingProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): TicketingProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): TicketingProxy
    static newForBusFinish(res: Gio.AsyncResult): TicketingProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): TicketingProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): TicketingProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): TicketingProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): TicketingProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): TicketingProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface TicketingSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of Goa-1.0.Goa.Ticketing */
    details?: GLib.Variant
}
class TicketingSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Goa-1.0.Goa.Ticketing */
    details: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Goa-1.0.Goa.Ticketing */
    callGetTicket(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetTicketFinish(res: Gio.AsyncResult): boolean
    callGetTicketSync(cancellable?: Gio.Cancellable | null): boolean
    completeGetTicket(invocation: Gio.DBusMethodInvocation): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Goa-1.0.Goa.Ticketing */
    connect(sigName: "handle-get-ticket", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-ticket", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-ticket", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-ticket", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-ticket", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::details", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TicketingSkeleton_ConstructProps)
    _init (config?: TicketingSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TicketingSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface TodoProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class TodoProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string | null
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TodoProxy_ConstructProps)
    _init (config?: TodoProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): TodoProxy
    /* Function overloads */
    static newFinish(res: Gio.AsyncResult): TodoProxy
    static newForBusFinish(res: Gio.AsyncResult): TodoProxy
    /* Function overloads */
    static newForBusFinish(res: Gio.AsyncResult): TodoProxy
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null): TodoProxy
    /* Function overloads */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): TodoProxy
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable?: Gio.Cancellable | null): TodoProxy
    /* Function overloads */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null): TodoProxy
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface TodoSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
class TodoSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
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
    /* Methods of Gio-2.0.Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: ((invocation: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (invocation: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TodoSkeleton_ConstructProps)
    _init (config?: TodoSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TodoSkeleton
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
abstract class AccountIface {
    /* Fields of Goa-1.0.Goa.AccountIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleEnsureCredentials: (object: Account, invocation: Gio.DBusMethodInvocation) => boolean
    readonly handleRemove: (object: Account, invocation: Gio.DBusMethodInvocation) => boolean
    readonly getAttentionNeeded: (object: Account) => boolean
    readonly getCalendarDisabled: (object: Account) => boolean
    readonly getChatDisabled: (object: Account) => boolean
    readonly getContactsDisabled: (object: Account) => boolean
    readonly getDocumentsDisabled: (object: Account) => boolean
    readonly getId: (object: Account) => string | null
    readonly getIdentity: (object: Account) => string | null
    readonly getIsTemporary: (object: Account) => boolean
    readonly getMailDisabled: (object: Account) => boolean
    readonly getPresentationIdentity: (object: Account) => string | null
    readonly getProviderIcon: (object: Account) => string | null
    readonly getProviderName: (object: Account) => string | null
    readonly getProviderType: (object: Account) => string | null
    readonly getTicketingDisabled: (object: Account) => boolean
    readonly getFilesDisabled: (object: Account) => boolean
    readonly getPhotosDisabled: (object: Account) => boolean
    readonly getPrintersDisabled: (object: Account) => boolean
    readonly getReadLaterDisabled: (object: Account) => boolean
    readonly getMapsDisabled: (object: Account) => boolean
    readonly getIsLocked: (object: Account) => boolean
    readonly getMusicDisabled: (object: Account) => boolean
    readonly getTodoDisabled: (object: Account) => boolean
    static name: string
}
abstract class AccountProxyClass {
    /* Fields of Goa-1.0.Goa.AccountProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class AccountProxyPrivate {
    static name: string
}
abstract class AccountSkeletonClass {
    /* Fields of Goa-1.0.Goa.AccountSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class AccountSkeletonPrivate {
    static name: string
}
abstract class CalendarIface {
    /* Fields of Goa-1.0.Goa.CalendarIface */
    readonly parentIface: GObject.TypeInterface
    readonly getAcceptSslErrors: (object: Calendar) => boolean
    readonly getUri: (object: Calendar) => string | null
    static name: string
}
abstract class CalendarProxyClass {
    /* Fields of Goa-1.0.Goa.CalendarProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class CalendarProxyPrivate {
    static name: string
}
abstract class CalendarSkeletonClass {
    /* Fields of Goa-1.0.Goa.CalendarSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class CalendarSkeletonPrivate {
    static name: string
}
abstract class ChatIface {
    /* Fields of Goa-1.0.Goa.ChatIface */
    readonly parentIface: GObject.TypeInterface
    static name: string
}
abstract class ChatProxyClass {
    /* Fields of Goa-1.0.Goa.ChatProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class ChatProxyPrivate {
    static name: string
}
abstract class ChatSkeletonClass {
    /* Fields of Goa-1.0.Goa.ChatSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class ChatSkeletonPrivate {
    static name: string
}
abstract class ClientClass {
    /* Fields of Goa-1.0.Goa.ClientClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ContactsIface {
    /* Fields of Goa-1.0.Goa.ContactsIface */
    readonly parentIface: GObject.TypeInterface
    readonly getAcceptSslErrors: (object: Contacts) => boolean
    readonly getUri: (object: Contacts) => string | null
    static name: string
}
abstract class ContactsProxyClass {
    /* Fields of Goa-1.0.Goa.ContactsProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class ContactsProxyPrivate {
    static name: string
}
abstract class ContactsSkeletonClass {
    /* Fields of Goa-1.0.Goa.ContactsSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class ContactsSkeletonPrivate {
    static name: string
}
abstract class DocumentsIface {
    /* Fields of Goa-1.0.Goa.DocumentsIface */
    readonly parentIface: GObject.TypeInterface
    static name: string
}
abstract class DocumentsProxyClass {
    /* Fields of Goa-1.0.Goa.DocumentsProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class DocumentsProxyPrivate {
    static name: string
}
abstract class DocumentsSkeletonClass {
    /* Fields of Goa-1.0.Goa.DocumentsSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class DocumentsSkeletonPrivate {
    static name: string
}
abstract class ExchangeIface {
    /* Fields of Goa-1.0.Goa.ExchangeIface */
    readonly parentIface: GObject.TypeInterface
    readonly getHost: (object: Exchange) => string | null
    readonly getAcceptSslErrors: (object: Exchange) => boolean
    static name: string
}
abstract class ExchangeProxyClass {
    /* Fields of Goa-1.0.Goa.ExchangeProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class ExchangeProxyPrivate {
    static name: string
}
abstract class ExchangeSkeletonClass {
    /* Fields of Goa-1.0.Goa.ExchangeSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class ExchangeSkeletonPrivate {
    static name: string
}
abstract class FilesIface {
    /* Fields of Goa-1.0.Goa.FilesIface */
    readonly parentIface: GObject.TypeInterface
    readonly getAcceptSslErrors: (object: Files) => boolean
    readonly getUri: (object: Files) => string | null
    static name: string
}
abstract class FilesProxyClass {
    /* Fields of Goa-1.0.Goa.FilesProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class FilesProxyPrivate {
    static name: string
}
abstract class FilesSkeletonClass {
    /* Fields of Goa-1.0.Goa.FilesSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class FilesSkeletonPrivate {
    static name: string
}
abstract class MailIface {
    /* Fields of Goa-1.0.Goa.MailIface */
    readonly parentIface: GObject.TypeInterface
    readonly getEmailAddress: (object: Mail) => string | null
    readonly getImapHost: (object: Mail) => string | null
    readonly getImapSupported: (object: Mail) => boolean
    readonly getImapUseTls: (object: Mail) => boolean
    readonly getImapUserName: (object: Mail) => string | null
    readonly getSmtpHost: (object: Mail) => string | null
    readonly getSmtpSupported: (object: Mail) => boolean
    readonly getSmtpUseTls: (object: Mail) => boolean
    readonly getSmtpUserName: (object: Mail) => string | null
    readonly getImapAcceptSslErrors: (object: Mail) => boolean
    readonly getImapUseSsl: (object: Mail) => boolean
    readonly getName: (object: Mail) => string | null
    readonly getSmtpAcceptSslErrors: (object: Mail) => boolean
    readonly getSmtpUseAuth: (object: Mail) => boolean
    readonly getSmtpUseSsl: (object: Mail) => boolean
    readonly getSmtpAuthLogin: (object: Mail) => boolean
    readonly getSmtpAuthPlain: (object: Mail) => boolean
    readonly getSmtpAuthXoauth2: (object: Mail) => boolean
    static name: string
}
abstract class MailProxyClass {
    /* Fields of Goa-1.0.Goa.MailProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class MailProxyPrivate {
    static name: string
}
abstract class MailSkeletonClass {
    /* Fields of Goa-1.0.Goa.MailSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class MailSkeletonPrivate {
    static name: string
}
abstract class ManagerIface {
    /* Fields of Goa-1.0.Goa.ManagerIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleAddAccount: (object: Manager, invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => boolean
    readonly handleIsSupportedProvider: (object: Manager, invocation: Gio.DBusMethodInvocation, argProviderType: string) => boolean
    static name: string
}
abstract class ManagerProxyClass {
    /* Fields of Goa-1.0.Goa.ManagerProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class ManagerProxyPrivate {
    static name: string
}
abstract class ManagerSkeletonClass {
    /* Fields of Goa-1.0.Goa.ManagerSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class ManagerSkeletonPrivate {
    static name: string
}
abstract class MapsIface {
    /* Fields of Goa-1.0.Goa.MapsIface */
    readonly parentIface: GObject.TypeInterface
    static name: string
}
abstract class MapsProxyClass {
    /* Fields of Goa-1.0.Goa.MapsProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class MapsProxyPrivate {
    static name: string
}
abstract class MapsSkeletonClass {
    /* Fields of Goa-1.0.Goa.MapsSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class MapsSkeletonPrivate {
    static name: string
}
abstract class MediaServerIface {
    /* Fields of Goa-1.0.Goa.MediaServerIface */
    readonly parentIface: GObject.TypeInterface
    readonly getDlnaSupported: (object: MediaServer) => boolean
    readonly getUdn: (object: MediaServer) => string | null
    static name: string
}
abstract class MediaServerProxyClass {
    /* Fields of Goa-1.0.Goa.MediaServerProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class MediaServerProxyPrivate {
    static name: string
}
abstract class MediaServerSkeletonClass {
    /* Fields of Goa-1.0.Goa.MediaServerSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class MediaServerSkeletonPrivate {
    static name: string
}
abstract class MusicIface {
    /* Fields of Goa-1.0.Goa.MusicIface */
    readonly parentIface: GObject.TypeInterface
    static name: string
}
abstract class MusicProxyClass {
    /* Fields of Goa-1.0.Goa.MusicProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class MusicProxyPrivate {
    static name: string
}
abstract class MusicSkeletonClass {
    /* Fields of Goa-1.0.Goa.MusicSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class MusicSkeletonPrivate {
    static name: string
}
abstract class OAuth2BasedIface {
    /* Fields of Goa-1.0.Goa.OAuth2BasedIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleGetAccessToken: (object: OAuth2Based, invocation: Gio.DBusMethodInvocation) => boolean
    readonly getClientId: (object: OAuth2Based) => string | null
    readonly getClientSecret: (object: OAuth2Based) => string | null
    static name: string
}
abstract class OAuth2BasedProxyClass {
    /* Fields of Goa-1.0.Goa.OAuth2BasedProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class OAuth2BasedProxyPrivate {
    static name: string
}
abstract class OAuth2BasedSkeletonClass {
    /* Fields of Goa-1.0.Goa.OAuth2BasedSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class OAuth2BasedSkeletonPrivate {
    static name: string
}
abstract class OAuthBasedIface {
    /* Fields of Goa-1.0.Goa.OAuthBasedIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleGetAccessToken: (object: OAuthBased, invocation: Gio.DBusMethodInvocation) => boolean
    readonly getConsumerKey: (object: OAuthBased) => string | null
    readonly getConsumerSecret: (object: OAuthBased) => string | null
    static name: string
}
abstract class OAuthBasedProxyClass {
    /* Fields of Goa-1.0.Goa.OAuthBasedProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class OAuthBasedProxyPrivate {
    static name: string
}
abstract class OAuthBasedSkeletonClass {
    /* Fields of Goa-1.0.Goa.OAuthBasedSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class OAuthBasedSkeletonPrivate {
    static name: string
}
abstract class ObjectIface {
    /* Fields of Goa-1.0.Goa.ObjectIface */
    readonly parentIface: GObject.TypeInterface
    static name: string
}
abstract class ObjectManagerClientClass {
    /* Fields of Goa-1.0.Goa.ObjectManagerClientClass */
    readonly parentClass: Gio.DBusObjectManagerClientClass
    static name: string
}
class ObjectManagerClientPrivate {
    static name: string
}
abstract class ObjectProxyClass {
    /* Fields of Goa-1.0.Goa.ObjectProxyClass */
    readonly parentClass: Gio.DBusObjectProxyClass
    static name: string
}
class ObjectProxyPrivate {
    static name: string
}
abstract class ObjectSkeletonClass {
    /* Fields of Goa-1.0.Goa.ObjectSkeletonClass */
    readonly parentClass: Gio.DBusObjectSkeletonClass
    static name: string
}
class ObjectSkeletonPrivate {
    static name: string
}
abstract class PasswordBasedIface {
    /* Fields of Goa-1.0.Goa.PasswordBasedIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleGetPassword: (object: PasswordBased, invocation: Gio.DBusMethodInvocation, argId: string) => boolean
    static name: string
}
abstract class PasswordBasedProxyClass {
    /* Fields of Goa-1.0.Goa.PasswordBasedProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class PasswordBasedProxyPrivate {
    static name: string
}
abstract class PasswordBasedSkeletonClass {
    /* Fields of Goa-1.0.Goa.PasswordBasedSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class PasswordBasedSkeletonPrivate {
    static name: string
}
abstract class PhotosIface {
    /* Fields of Goa-1.0.Goa.PhotosIface */
    readonly parentIface: GObject.TypeInterface
    static name: string
}
abstract class PhotosProxyClass {
    /* Fields of Goa-1.0.Goa.PhotosProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class PhotosProxyPrivate {
    static name: string
}
abstract class PhotosSkeletonClass {
    /* Fields of Goa-1.0.Goa.PhotosSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class PhotosSkeletonPrivate {
    static name: string
}
abstract class PrintersIface {
    /* Fields of Goa-1.0.Goa.PrintersIface */
    readonly parentIface: GObject.TypeInterface
    static name: string
}
abstract class PrintersProxyClass {
    /* Fields of Goa-1.0.Goa.PrintersProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class PrintersProxyPrivate {
    static name: string
}
abstract class PrintersSkeletonClass {
    /* Fields of Goa-1.0.Goa.PrintersSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class PrintersSkeletonPrivate {
    static name: string
}
abstract class ReadLaterIface {
    /* Fields of Goa-1.0.Goa.ReadLaterIface */
    readonly parentIface: GObject.TypeInterface
    static name: string
}
abstract class ReadLaterProxyClass {
    /* Fields of Goa-1.0.Goa.ReadLaterProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class ReadLaterProxyPrivate {
    static name: string
}
abstract class ReadLaterSkeletonClass {
    /* Fields of Goa-1.0.Goa.ReadLaterSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class ReadLaterSkeletonPrivate {
    static name: string
}
abstract class TicketingIface {
    /* Fields of Goa-1.0.Goa.TicketingIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleGetTicket: (object: Ticketing, invocation: Gio.DBusMethodInvocation) => boolean
    readonly getDetails: (object: Ticketing) => GLib.Variant | null
    static name: string
}
abstract class TicketingProxyClass {
    /* Fields of Goa-1.0.Goa.TicketingProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class TicketingProxyPrivate {
    static name: string
}
abstract class TicketingSkeletonClass {
    /* Fields of Goa-1.0.Goa.TicketingSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class TicketingSkeletonPrivate {
    static name: string
}
abstract class TodoIface {
    /* Fields of Goa-1.0.Goa.TodoIface */
    readonly parentIface: GObject.TypeInterface
    static name: string
}
abstract class TodoProxyClass {
    /* Fields of Goa-1.0.Goa.TodoProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class TodoProxyPrivate {
    static name: string
}
abstract class TodoSkeletonClass {
    /* Fields of Goa-1.0.Goa.TodoSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class TodoSkeletonPrivate {
    static name: string
}
}
export default Goa;