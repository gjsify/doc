/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gdm-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Gdm {

enum ClientError {
    CLIENT_ERROR_GENERIC,
}
function chooserInterfaceInfo(): Gio.DBusInterfaceInfo
function chooserOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function getSessionIds(): string[]
function getSessionNameAndDescription(id: string): [ /* returnType */ string, /* description */ string ]
function gotoLoginSessionSync(cancellable?: Gio.Cancellable | null): boolean
function greeterInterfaceInfo(): Gio.DBusInterfaceInfo
function greeterOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function managerInterfaceInfo(): Gio.DBusInterfaceInfo
function managerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function remoteGreeterInterfaceInfo(): Gio.DBusInterfaceInfo
function remoteGreeterOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function userVerifierChoiceListInterfaceInfo(): Gio.DBusInterfaceInfo
function userVerifierChoiceListOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function userVerifierInterfaceInfo(): Gio.DBusInterfaceInfo
function userVerifierOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function workerManagerInterfaceInfo(): Gio.DBusInterfaceInfo
function workerManagerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
class Chooser {
    /* Methods of Gdm-1.0.Gdm.Chooser */
    callDisconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable?: Gio.Cancellable | null): boolean
    callSelectHostname(argHostname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectHostnameFinish(res: Gio.AsyncResult): boolean
    callSelectHostnameSync(argHostname: string, cancellable?: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void
    completeSelectHostname(invocation: Gio.DBusMethodInvocation): void
    /* Signals of Gdm-1.0.Gdm.Chooser */
    connect(sigName: "handle-disconnect", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-select-hostname", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-select-hostname", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-hostname", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-hostname", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-select-hostname", object: Gio.DBusMethodInvocation, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Greeter {
    /* Methods of Gdm-1.0.Gdm.Greeter */
    callBeginAutoLogin(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginAutoLoginFinish(res: Gio.AsyncResult): boolean
    callBeginAutoLoginSync(argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callGetTimedLoginDetails(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetTimedLoginDetailsFinish(outEnabled: boolean, outUsername: string, outDelay: number, res: Gio.AsyncResult): boolean
    callGetTimedLoginDetailsSync(outEnabled: boolean, outUsername: string, outDelay: number, cancellable?: Gio.Cancellable | null): boolean
    callSelectSession(argSession: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectSessionFinish(res: Gio.AsyncResult): boolean
    callSelectSessionSync(argSession: string, cancellable?: Gio.Cancellable | null): boolean
    callSelectUser(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectUserFinish(res: Gio.AsyncResult): boolean
    callSelectUserSync(argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callStartSessionWhenReady(argServiceName: string, argShouldStartSession: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartSessionWhenReadyFinish(res: Gio.AsyncResult): boolean
    callStartSessionWhenReadySync(argServiceName: string, argShouldStartSession: boolean, cancellable?: Gio.Cancellable | null): boolean
    completeBeginAutoLogin(invocation: Gio.DBusMethodInvocation): void
    completeGetTimedLoginDetails(invocation: Gio.DBusMethodInvocation, enabled: boolean, username: string, delay: number): void
    completeSelectSession(invocation: Gio.DBusMethodInvocation): void
    completeSelectUser(invocation: Gio.DBusMethodInvocation): void
    completeStartSessionWhenReady(invocation: Gio.DBusMethodInvocation): void
    emitDefaultLanguageNameChanged(argLanguageName: string): void
    emitDefaultSessionNameChanged(argSessionName: string): void
    emitReauthenticated(argServiceName: string): void
    emitSelectedUserChanged(argUsername: string): void
    emitSessionOpened(argServiceName: string): void
    emitTimedLoginRequested(argUsername: string, argDelay: number): void
    /* Signals of Gdm-1.0.Gdm.Greeter */
    connect(sigName: "default-language-name-changed", callback: ((object: string) => void)): number
    on(sigName: "default-language-name-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "default-language-name-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "default-language-name-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "default-language-name-changed", object: string): void
    connect(sigName: "default-session-name-changed", callback: ((object: string) => void)): number
    on(sigName: "default-session-name-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "default-session-name-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "default-session-name-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "default-session-name-changed", object: string): void
    connect(sigName: "handle-begin-auto-login", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-begin-auto-login", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-begin-auto-login", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-begin-auto-login", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-begin-auto-login", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-get-timed-login-details", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-timed-login-details", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-timed-login-details", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-timed-login-details", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-timed-login-details", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-select-session", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-select-session", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-session", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-session", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-select-session", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-select-user", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-select-user", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-user", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-user", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-select-user", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-start-session-when-ready", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => boolean)): number
    on(sigName: "handle-start-session-when-ready", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-start-session-when-ready", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-start-session-when-ready", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "handle-start-session-when-ready", object: Gio.DBusMethodInvocation, p0: string, p1: boolean): void
    connect(sigName: "reauthenticated", callback: ((object: string) => void)): number
    on(sigName: "reauthenticated", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reauthenticated", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reauthenticated", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "reauthenticated", object: string): void
    connect(sigName: "selected-user-changed", callback: ((object: string) => void)): number
    on(sigName: "selected-user-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selected-user-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selected-user-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "selected-user-changed", object: string): void
    connect(sigName: "session-opened", callback: ((object: string) => void)): number
    on(sigName: "session-opened", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "session-opened", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "session-opened", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "session-opened", object: string): void
    connect(sigName: "timed-login-requested", callback: ((object: string, p0: number) => void)): number
    on(sigName: "timed-login-requested", callback: (object: string, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "timed-login-requested", callback: (object: string, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "timed-login-requested", callback: (object: string, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "timed-login-requested", object: string, p0: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class Manager {
    /* Properties of Gdm-1.0.Gdm.Manager */
    version: string
    /* Methods of Gdm-1.0.Gdm.Manager */
    callOpenReauthenticationChannel(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenReauthenticationChannelFinish(outAddress: string, res: Gio.AsyncResult): boolean
    callOpenReauthenticationChannelSync(argUsername: string, outAddress: string, cancellable?: Gio.Cancellable | null): boolean
    callOpenSession(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenSessionFinish(outAddress: string, res: Gio.AsyncResult): boolean
    callOpenSessionSync(outAddress: string, cancellable?: Gio.Cancellable | null): boolean
    callRegisterDisplay(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRegisterDisplayFinish(res: Gio.AsyncResult): boolean
    callRegisterDisplaySync(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callRegisterSession(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRegisterSessionFinish(res: Gio.AsyncResult): boolean
    callRegisterSessionSync(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeOpenReauthenticationChannel(invocation: Gio.DBusMethodInvocation, address: string): void
    completeOpenSession(invocation: Gio.DBusMethodInvocation, address: string): void
    completeRegisterDisplay(invocation: Gio.DBusMethodInvocation): void
    completeRegisterSession(invocation: Gio.DBusMethodInvocation): void
    dupVersion(): string
    getVersion(): string
    setVersion(value: string): void
    /* Signals of Gdm-1.0.Gdm.Manager */
    connect(sigName: "handle-open-reauthentication-channel", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-open-reauthentication-channel", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-open-reauthentication-channel", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-open-reauthentication-channel", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-open-reauthentication-channel", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-open-session", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-open-session", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-open-session", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-open-session", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-open-session", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-register-display", callback: ((object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    on(sigName: "handle-register-display", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-register-display", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-register-display", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "handle-register-display", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    connect(sigName: "handle-register-session", callback: ((object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    on(sigName: "handle-register-session", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-register-session", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-register-session", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "handle-register-session", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class RemoteGreeter {
    /* Methods of Gdm-1.0.Gdm.RemoteGreeter */
    callDisconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable?: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void
    /* Signals of Gdm-1.0.Gdm.RemoteGreeter */
    connect(sigName: "handle-disconnect", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class UserVerifier {
    /* Methods of Gdm-1.0.Gdm.UserVerifier */
    callAnswerQuery(argServiceName: string, argAnswer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAnswerQueryFinish(res: Gio.AsyncResult): boolean
    callAnswerQuerySync(argServiceName: string, argAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callBeginVerification(argServiceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginVerificationFinish(res: Gio.AsyncResult): boolean
    callBeginVerificationForUser(argServiceName: string, argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginVerificationForUserFinish(res: Gio.AsyncResult): boolean
    callBeginVerificationForUserSync(argServiceName: string, argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callBeginVerificationSync(argServiceName: string, cancellable?: Gio.Cancellable | null): boolean
    callCancel(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCancelFinish(res: Gio.AsyncResult): boolean
    callCancelSync(cancellable?: Gio.Cancellable | null): boolean
    callEnableExtensions(argExtensions: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEnableExtensionsFinish(res: Gio.AsyncResult): boolean
    callEnableExtensionsSync(argExtensions: string, cancellable?: Gio.Cancellable | null): boolean
    completeAnswerQuery(invocation: Gio.DBusMethodInvocation): void
    completeBeginVerification(invocation: Gio.DBusMethodInvocation): void
    completeBeginVerificationForUser(invocation: Gio.DBusMethodInvocation): void
    completeCancel(invocation: Gio.DBusMethodInvocation): void
    completeEnableExtensions(invocation: Gio.DBusMethodInvocation): void
    emitConversationStarted(argServiceName: string): void
    emitConversationStopped(argServiceName: string): void
    emitInfo(argServiceName: string, argInfo: string): void
    emitInfoQuery(argServiceName: string, argQuery: string): void
    emitProblem(argServiceName: string, argProblem: string): void
    emitReauthenticationStarted(argPidOfCaller: number): void
    emitReset(): void
    emitSecretInfoQuery(argServiceName: string, argQuery: string): void
    emitServiceUnavailable(argServiceName: string, argMessage: string): void
    emitVerificationComplete(argServiceName: string): void
    emitVerificationFailed(argServiceName: string): void
    /* Signals of Gdm-1.0.Gdm.UserVerifier */
    connect(sigName: "conversation-started", callback: ((object: string) => void)): number
    on(sigName: "conversation-started", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conversation-started", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conversation-started", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "conversation-started", object: string): void
    connect(sigName: "conversation-stopped", callback: ((object: string) => void)): number
    on(sigName: "conversation-stopped", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conversation-stopped", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conversation-stopped", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "conversation-stopped", object: string): void
    connect(sigName: "handle-answer-query", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-answer-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-answer-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-answer-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-answer-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-begin-verification", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-begin-verification", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-begin-verification", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-begin-verification", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-begin-verification", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-begin-verification-for-user", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-begin-verification-for-user", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-begin-verification-for-user", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-begin-verification-for-user", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-begin-verification-for-user", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-cancel", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-cancel", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-cancel", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-cancel", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-cancel", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-enable-extensions", callback: ((object: Gio.DBusMethodInvocation, p0: string[]) => boolean)): number
    on(sigName: "handle-enable-extensions", callback: (object: Gio.DBusMethodInvocation, p0: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-enable-extensions", callback: (object: Gio.DBusMethodInvocation, p0: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-enable-extensions", callback: (object: Gio.DBusMethodInvocation, p0: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "handle-enable-extensions", object: Gio.DBusMethodInvocation, p0: string[]): void
    connect(sigName: "info", callback: ((object: string, p0: string) => void)): number
    on(sigName: "info", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "info", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "info", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "info", object: string, p0: string): void
    connect(sigName: "info-query", callback: ((object: string, p0: string) => void)): number
    on(sigName: "info-query", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "info-query", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "info-query", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "info-query", object: string, p0: string): void
    connect(sigName: "problem", callback: ((object: string, p0: string) => void)): number
    on(sigName: "problem", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "problem", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "problem", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "problem", object: string, p0: string): void
    connect(sigName: "reauthentication-started", callback: ((object: number) => void)): number
    on(sigName: "reauthentication-started", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reauthentication-started", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reauthentication-started", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "reauthentication-started", object: number): void
    connect(sigName: "reset", callback: (() => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "secret-info-query", callback: ((object: string, p0: string) => void)): number
    on(sigName: "secret-info-query", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "secret-info-query", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "secret-info-query", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "secret-info-query", object: string, p0: string): void
    connect(sigName: "service-unavailable", callback: ((object: string, p0: string) => void)): number
    on(sigName: "service-unavailable", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-unavailable", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-unavailable", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "service-unavailable", object: string, p0: string): void
    connect(sigName: "verification-complete", callback: ((object: string) => void)): number
    on(sigName: "verification-complete", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "verification-complete", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "verification-complete", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "verification-complete", object: string): void
    connect(sigName: "verification-failed", callback: ((object: string) => void)): number
    on(sigName: "verification-failed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "verification-failed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "verification-failed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "verification-failed", object: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class UserVerifierChoiceList {
    /* Methods of Gdm-1.0.Gdm.UserVerifierChoiceList */
    callSelectChoice(argServiceName: string, argChoice: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectChoiceFinish(res: Gio.AsyncResult): boolean
    callSelectChoiceSync(argServiceName: string, argChoice: string, cancellable?: Gio.Cancellable | null): boolean
    completeSelectChoice(invocation: Gio.DBusMethodInvocation): void
    emitChoiceQuery(argServiceName: string, argPromptMessage: string, argList: GLib.Variant): void
    /* Signals of Gdm-1.0.Gdm.UserVerifierChoiceList */
    connect(sigName: "choice-query", callback: ((object: string, p0: string, p1: GLib.Variant) => void)): number
    on(sigName: "choice-query", callback: (object: string, p0: string, p1: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "choice-query", callback: (object: string, p0: string, p1: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "choice-query", callback: (object: string, p0: string, p1: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "choice-query", object: string, p0: string, p1: GLib.Variant): void
    connect(sigName: "handle-select-choice", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-select-choice", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-choice", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-choice", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-select-choice", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
class WorkerManager {
    /* Methods of Gdm-1.0.Gdm.WorkerManager */
    callChoiceListQuery(argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callChoiceListQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callChoiceListQuerySync(argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callHello(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callHelloFinish(res: Gio.AsyncResult): boolean
    callHelloSync(cancellable?: Gio.Cancellable | null): boolean
    callInfo(argServiceName: string, argInfo: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callInfoFinish(res: Gio.AsyncResult): boolean
    callInfoQuery(argServiceName: string, argQuery: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callInfoQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callInfoQuerySync(argServiceName: string, argQuery: string, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callInfoSync(argServiceName: string, argInfo: string, cancellable?: Gio.Cancellable | null): boolean
    callProblem(argServiceName: string, argProblem: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callProblemFinish(res: Gio.AsyncResult): boolean
    callProblemSync(argServiceName: string, argProblem: string, cancellable?: Gio.Cancellable | null): boolean
    callSecretInfoQuery(argServiceName: string, argQuery: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSecretInfoQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callSecretInfoQuerySync(argServiceName: string, argQuery: string, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    completeChoiceListQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    completeHello(invocation: Gio.DBusMethodInvocation): void
    completeInfo(invocation: Gio.DBusMethodInvocation): void
    completeInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    completeProblem(invocation: Gio.DBusMethodInvocation): void
    completeSecretInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    /* Signals of Gdm-1.0.Gdm.WorkerManager */
    connect(sigName: "handle-choice-list-query", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => boolean)): number
    on(sigName: "handle-choice-list-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-choice-list-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-choice-list-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "handle-choice-list-query", object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant): void
    connect(sigName: "handle-hello", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-hello", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-hello", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-hello", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-hello", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-info", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-info", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-info", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-info", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-info", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-info-query", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-problem", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-problem", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-problem", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-problem", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-problem", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-secret-info-query", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-secret-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-secret-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-secret-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-secret-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
interface ChooserProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class ChooserProxy {
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
    /* Methods of Gdm-1.0.Gdm.Chooser */
    callDisconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable?: Gio.Cancellable | null): boolean
    callSelectHostname(argHostname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectHostnameFinish(res: Gio.AsyncResult): boolean
    callSelectHostnameSync(argHostname: string, cancellable?: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void
    completeSelectHostname(invocation: Gio.DBusMethodInvocation): void
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
    /* Signals of Gdm-1.0.Gdm.Chooser */
    connect(sigName: "handle-disconnect", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-select-hostname", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-select-hostname", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-hostname", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-hostname", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-select-hostname", object: Gio.DBusMethodInvocation, p0: string): void
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
    constructor (config?: ChooserProxy_ConstructProps)
    _init (config?: ChooserProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface ChooserSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
class ChooserSkeleton {
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
    /* Methods of Gdm-1.0.Gdm.Chooser */
    callDisconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable?: Gio.Cancellable | null): boolean
    callSelectHostname(argHostname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectHostnameFinish(res: Gio.AsyncResult): boolean
    callSelectHostnameSync(argHostname: string, cancellable?: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void
    completeSelectHostname(invocation: Gio.DBusMethodInvocation): void
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
    /* Signals of Gdm-1.0.Gdm.Chooser */
    connect(sigName: "handle-disconnect", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-select-hostname", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-select-hostname", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-hostname", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-hostname", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-select-hostname", object: Gio.DBusMethodInvocation, p0: string): void
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
    constructor (config?: ChooserSkeleton_ConstructProps)
    _init (config?: ChooserSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
class Client {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdm-1.0.Gdm.Client */
    getChooser(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getChooserFinish(result: Gio.AsyncResult): Chooser
    getChooserSync(cancellable?: Gio.Cancellable | null): Chooser
    getGreeter(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getGreeterFinish(result: Gio.AsyncResult): Greeter
    getGreeterSync(cancellable?: Gio.Cancellable | null): Greeter
    getRemoteGreeter(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getRemoteGreeterFinish(result: Gio.AsyncResult): RemoteGreeter
    getRemoteGreeterSync(cancellable?: Gio.Cancellable | null): RemoteGreeter
    getUserVerifier(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getUserVerifierChoiceList(): UserVerifierChoiceList
    getUserVerifierFinish(result: Gio.AsyncResult): UserVerifier
    getUserVerifierSync(cancellable?: Gio.Cancellable | null): UserVerifier
    openReauthenticationChannel(username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openReauthenticationChannelFinish(result: Gio.AsyncResult): UserVerifier
    openReauthenticationChannelSync(username: string, cancellable?: Gio.Cancellable | null): UserVerifier
    setEnabledExtensions(extensions: string[]): void
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
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface GreeterProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class GreeterProxy {
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
    /* Methods of Gdm-1.0.Gdm.Greeter */
    callBeginAutoLogin(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginAutoLoginFinish(res: Gio.AsyncResult): boolean
    callBeginAutoLoginSync(argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callGetTimedLoginDetails(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetTimedLoginDetailsFinish(outEnabled: boolean, outUsername: string, outDelay: number, res: Gio.AsyncResult): boolean
    callGetTimedLoginDetailsSync(outEnabled: boolean, outUsername: string, outDelay: number, cancellable?: Gio.Cancellable | null): boolean
    callSelectSession(argSession: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectSessionFinish(res: Gio.AsyncResult): boolean
    callSelectSessionSync(argSession: string, cancellable?: Gio.Cancellable | null): boolean
    callSelectUser(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectUserFinish(res: Gio.AsyncResult): boolean
    callSelectUserSync(argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callStartSessionWhenReady(argServiceName: string, argShouldStartSession: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartSessionWhenReadyFinish(res: Gio.AsyncResult): boolean
    callStartSessionWhenReadySync(argServiceName: string, argShouldStartSession: boolean, cancellable?: Gio.Cancellable | null): boolean
    completeBeginAutoLogin(invocation: Gio.DBusMethodInvocation): void
    completeGetTimedLoginDetails(invocation: Gio.DBusMethodInvocation, enabled: boolean, username: string, delay: number): void
    completeSelectSession(invocation: Gio.DBusMethodInvocation): void
    completeSelectUser(invocation: Gio.DBusMethodInvocation): void
    completeStartSessionWhenReady(invocation: Gio.DBusMethodInvocation): void
    emitDefaultLanguageNameChanged(argLanguageName: string): void
    emitDefaultSessionNameChanged(argSessionName: string): void
    emitReauthenticated(argServiceName: string): void
    emitSelectedUserChanged(argUsername: string): void
    emitSessionOpened(argServiceName: string): void
    emitTimedLoginRequested(argUsername: string, argDelay: number): void
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
    /* Signals of Gdm-1.0.Gdm.Greeter */
    connect(sigName: "default-language-name-changed", callback: ((object: string) => void)): number
    on(sigName: "default-language-name-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "default-language-name-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "default-language-name-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "default-language-name-changed", object: string): void
    connect(sigName: "default-session-name-changed", callback: ((object: string) => void)): number
    on(sigName: "default-session-name-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "default-session-name-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "default-session-name-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "default-session-name-changed", object: string): void
    connect(sigName: "handle-begin-auto-login", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-begin-auto-login", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-begin-auto-login", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-begin-auto-login", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-begin-auto-login", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-get-timed-login-details", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-timed-login-details", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-timed-login-details", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-timed-login-details", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-timed-login-details", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-select-session", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-select-session", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-session", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-session", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-select-session", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-select-user", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-select-user", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-user", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-user", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-select-user", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-start-session-when-ready", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => boolean)): number
    on(sigName: "handle-start-session-when-ready", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-start-session-when-ready", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-start-session-when-ready", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "handle-start-session-when-ready", object: Gio.DBusMethodInvocation, p0: string, p1: boolean): void
    connect(sigName: "reauthenticated", callback: ((object: string) => void)): number
    on(sigName: "reauthenticated", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reauthenticated", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reauthenticated", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "reauthenticated", object: string): void
    connect(sigName: "selected-user-changed", callback: ((object: string) => void)): number
    on(sigName: "selected-user-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selected-user-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selected-user-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "selected-user-changed", object: string): void
    connect(sigName: "session-opened", callback: ((object: string) => void)): number
    on(sigName: "session-opened", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "session-opened", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "session-opened", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "session-opened", object: string): void
    connect(sigName: "timed-login-requested", callback: ((object: string, p0: number) => void)): number
    on(sigName: "timed-login-requested", callback: (object: string, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "timed-login-requested", callback: (object: string, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "timed-login-requested", callback: (object: string, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "timed-login-requested", object: string, p0: number): void
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
    constructor (config?: GreeterProxy_ConstructProps)
    _init (config?: GreeterProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface GreeterSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
class GreeterSkeleton {
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
    /* Methods of Gdm-1.0.Gdm.Greeter */
    callBeginAutoLogin(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginAutoLoginFinish(res: Gio.AsyncResult): boolean
    callBeginAutoLoginSync(argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callGetTimedLoginDetails(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetTimedLoginDetailsFinish(outEnabled: boolean, outUsername: string, outDelay: number, res: Gio.AsyncResult): boolean
    callGetTimedLoginDetailsSync(outEnabled: boolean, outUsername: string, outDelay: number, cancellable?: Gio.Cancellable | null): boolean
    callSelectSession(argSession: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectSessionFinish(res: Gio.AsyncResult): boolean
    callSelectSessionSync(argSession: string, cancellable?: Gio.Cancellable | null): boolean
    callSelectUser(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectUserFinish(res: Gio.AsyncResult): boolean
    callSelectUserSync(argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callStartSessionWhenReady(argServiceName: string, argShouldStartSession: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartSessionWhenReadyFinish(res: Gio.AsyncResult): boolean
    callStartSessionWhenReadySync(argServiceName: string, argShouldStartSession: boolean, cancellable?: Gio.Cancellable | null): boolean
    completeBeginAutoLogin(invocation: Gio.DBusMethodInvocation): void
    completeGetTimedLoginDetails(invocation: Gio.DBusMethodInvocation, enabled: boolean, username: string, delay: number): void
    completeSelectSession(invocation: Gio.DBusMethodInvocation): void
    completeSelectUser(invocation: Gio.DBusMethodInvocation): void
    completeStartSessionWhenReady(invocation: Gio.DBusMethodInvocation): void
    emitDefaultLanguageNameChanged(argLanguageName: string): void
    emitDefaultSessionNameChanged(argSessionName: string): void
    emitReauthenticated(argServiceName: string): void
    emitSelectedUserChanged(argUsername: string): void
    emitSessionOpened(argServiceName: string): void
    emitTimedLoginRequested(argUsername: string, argDelay: number): void
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
    /* Signals of Gdm-1.0.Gdm.Greeter */
    connect(sigName: "default-language-name-changed", callback: ((object: string) => void)): number
    on(sigName: "default-language-name-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "default-language-name-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "default-language-name-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "default-language-name-changed", object: string): void
    connect(sigName: "default-session-name-changed", callback: ((object: string) => void)): number
    on(sigName: "default-session-name-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "default-session-name-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "default-session-name-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "default-session-name-changed", object: string): void
    connect(sigName: "handle-begin-auto-login", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-begin-auto-login", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-begin-auto-login", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-begin-auto-login", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-begin-auto-login", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-get-timed-login-details", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-get-timed-login-details", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-timed-login-details", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-timed-login-details", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-get-timed-login-details", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-select-session", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-select-session", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-session", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-session", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-select-session", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-select-user", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-select-user", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-user", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-user", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-select-user", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-start-session-when-ready", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => boolean)): number
    on(sigName: "handle-start-session-when-ready", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-start-session-when-ready", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-start-session-when-ready", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "handle-start-session-when-ready", object: Gio.DBusMethodInvocation, p0: string, p1: boolean): void
    connect(sigName: "reauthenticated", callback: ((object: string) => void)): number
    on(sigName: "reauthenticated", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reauthenticated", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reauthenticated", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "reauthenticated", object: string): void
    connect(sigName: "selected-user-changed", callback: ((object: string) => void)): number
    on(sigName: "selected-user-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selected-user-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selected-user-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "selected-user-changed", object: string): void
    connect(sigName: "session-opened", callback: ((object: string) => void)): number
    on(sigName: "session-opened", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "session-opened", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "session-opened", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "session-opened", object: string): void
    connect(sigName: "timed-login-requested", callback: ((object: string, p0: number) => void)): number
    on(sigName: "timed-login-requested", callback: (object: string, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "timed-login-requested", callback: (object: string, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "timed-login-requested", callback: (object: string, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "timed-login-requested", object: string, p0: number): void
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
    constructor (config?: GreeterSkeleton_ConstructProps)
    _init (config?: GreeterSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface ManagerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Gdm-1.0.Gdm.Manager */
    version?: string
}
class ManagerProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Gdm-1.0.Gdm.Manager */
    version: string
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
    /* Methods of Gdm-1.0.Gdm.Manager */
    callOpenReauthenticationChannel(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenReauthenticationChannelFinish(outAddress: string, res: Gio.AsyncResult): boolean
    callOpenReauthenticationChannelSync(argUsername: string, outAddress: string, cancellable?: Gio.Cancellable | null): boolean
    callOpenSession(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenSessionFinish(outAddress: string, res: Gio.AsyncResult): boolean
    callOpenSessionSync(outAddress: string, cancellable?: Gio.Cancellable | null): boolean
    callRegisterDisplay(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRegisterDisplayFinish(res: Gio.AsyncResult): boolean
    callRegisterDisplaySync(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callRegisterSession(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRegisterSessionFinish(res: Gio.AsyncResult): boolean
    callRegisterSessionSync(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeOpenReauthenticationChannel(invocation: Gio.DBusMethodInvocation, address: string): void
    completeOpenSession(invocation: Gio.DBusMethodInvocation, address: string): void
    completeRegisterDisplay(invocation: Gio.DBusMethodInvocation): void
    completeRegisterSession(invocation: Gio.DBusMethodInvocation): void
    dupVersion(): string
    getVersion(): string
    setVersion(value: string): void
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
    /* Signals of Gdm-1.0.Gdm.Manager */
    connect(sigName: "handle-open-reauthentication-channel", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-open-reauthentication-channel", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-open-reauthentication-channel", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-open-reauthentication-channel", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-open-reauthentication-channel", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-open-session", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-open-session", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-open-session", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-open-session", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-open-session", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-register-display", callback: ((object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    on(sigName: "handle-register-display", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-register-display", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-register-display", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "handle-register-display", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    connect(sigName: "handle-register-session", callback: ((object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    on(sigName: "handle-register-session", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-register-session", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-register-session", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "handle-register-session", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
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
    connect(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface ManagerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of Gdm-1.0.Gdm.Manager */
    version?: string
}
class ManagerSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Gdm-1.0.Gdm.Manager */
    version: string
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
    /* Methods of Gdm-1.0.Gdm.Manager */
    callOpenReauthenticationChannel(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenReauthenticationChannelFinish(outAddress: string, res: Gio.AsyncResult): boolean
    callOpenReauthenticationChannelSync(argUsername: string, outAddress: string, cancellable?: Gio.Cancellable | null): boolean
    callOpenSession(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenSessionFinish(outAddress: string, res: Gio.AsyncResult): boolean
    callOpenSessionSync(outAddress: string, cancellable?: Gio.Cancellable | null): boolean
    callRegisterDisplay(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRegisterDisplayFinish(res: Gio.AsyncResult): boolean
    callRegisterDisplaySync(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callRegisterSession(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRegisterSessionFinish(res: Gio.AsyncResult): boolean
    callRegisterSessionSync(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeOpenReauthenticationChannel(invocation: Gio.DBusMethodInvocation, address: string): void
    completeOpenSession(invocation: Gio.DBusMethodInvocation, address: string): void
    completeRegisterDisplay(invocation: Gio.DBusMethodInvocation): void
    completeRegisterSession(invocation: Gio.DBusMethodInvocation): void
    dupVersion(): string
    getVersion(): string
    setVersion(value: string): void
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
    /* Signals of Gdm-1.0.Gdm.Manager */
    connect(sigName: "handle-open-reauthentication-channel", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-open-reauthentication-channel", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-open-reauthentication-channel", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-open-reauthentication-channel", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-open-reauthentication-channel", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-open-session", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-open-session", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-open-session", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-open-session", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-open-session", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-register-display", callback: ((object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    on(sigName: "handle-register-display", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-register-display", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-register-display", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "handle-register-display", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    connect(sigName: "handle-register-session", callback: ((object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    on(sigName: "handle-register-session", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-register-session", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-register-session", callback: (object: Gio.DBusMethodInvocation, p0: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "handle-register-session", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface RemoteGreeterProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class RemoteGreeterProxy {
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
    /* Methods of Gdm-1.0.Gdm.RemoteGreeter */
    callDisconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable?: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void
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
    /* Signals of Gdm-1.0.Gdm.RemoteGreeter */
    connect(sigName: "handle-disconnect", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
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
    constructor (config?: RemoteGreeterProxy_ConstructProps)
    _init (config?: RemoteGreeterProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface RemoteGreeterSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
class RemoteGreeterSkeleton {
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
    /* Methods of Gdm-1.0.Gdm.RemoteGreeter */
    callDisconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable?: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void
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
    /* Signals of Gdm-1.0.Gdm.RemoteGreeter */
    connect(sigName: "handle-disconnect", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-disconnect", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
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
    constructor (config?: RemoteGreeterSkeleton_ConstructProps)
    _init (config?: RemoteGreeterSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface UserVerifierChoiceListProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class UserVerifierChoiceListProxy {
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
    /* Methods of Gdm-1.0.Gdm.UserVerifierChoiceList */
    callSelectChoice(argServiceName: string, argChoice: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectChoiceFinish(res: Gio.AsyncResult): boolean
    callSelectChoiceSync(argServiceName: string, argChoice: string, cancellable?: Gio.Cancellable | null): boolean
    completeSelectChoice(invocation: Gio.DBusMethodInvocation): void
    emitChoiceQuery(argServiceName: string, argPromptMessage: string, argList: GLib.Variant): void
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
    /* Signals of Gdm-1.0.Gdm.UserVerifierChoiceList */
    connect(sigName: "choice-query", callback: ((object: string, p0: string, p1: GLib.Variant) => void)): number
    on(sigName: "choice-query", callback: (object: string, p0: string, p1: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "choice-query", callback: (object: string, p0: string, p1: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "choice-query", callback: (object: string, p0: string, p1: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "choice-query", object: string, p0: string, p1: GLib.Variant): void
    connect(sigName: "handle-select-choice", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-select-choice", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-choice", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-choice", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-select-choice", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
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
    constructor (config?: UserVerifierChoiceListProxy_ConstructProps)
    _init (config?: UserVerifierChoiceListProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface UserVerifierChoiceListSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
class UserVerifierChoiceListSkeleton {
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
    /* Methods of Gdm-1.0.Gdm.UserVerifierChoiceList */
    callSelectChoice(argServiceName: string, argChoice: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectChoiceFinish(res: Gio.AsyncResult): boolean
    callSelectChoiceSync(argServiceName: string, argChoice: string, cancellable?: Gio.Cancellable | null): boolean
    completeSelectChoice(invocation: Gio.DBusMethodInvocation): void
    emitChoiceQuery(argServiceName: string, argPromptMessage: string, argList: GLib.Variant): void
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
    /* Signals of Gdm-1.0.Gdm.UserVerifierChoiceList */
    connect(sigName: "choice-query", callback: ((object: string, p0: string, p1: GLib.Variant) => void)): number
    on(sigName: "choice-query", callback: (object: string, p0: string, p1: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "choice-query", callback: (object: string, p0: string, p1: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "choice-query", callback: (object: string, p0: string, p1: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "choice-query", object: string, p0: string, p1: GLib.Variant): void
    connect(sigName: "handle-select-choice", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-select-choice", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-choice", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-choice", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-select-choice", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
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
    constructor (config?: UserVerifierChoiceListSkeleton_ConstructProps)
    _init (config?: UserVerifierChoiceListSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface UserVerifierProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class UserVerifierProxy {
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
    /* Methods of Gdm-1.0.Gdm.UserVerifier */
    callAnswerQuery(argServiceName: string, argAnswer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAnswerQueryFinish(res: Gio.AsyncResult): boolean
    callAnswerQuerySync(argServiceName: string, argAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callBeginVerification(argServiceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginVerificationFinish(res: Gio.AsyncResult): boolean
    callBeginVerificationForUser(argServiceName: string, argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginVerificationForUserFinish(res: Gio.AsyncResult): boolean
    callBeginVerificationForUserSync(argServiceName: string, argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callBeginVerificationSync(argServiceName: string, cancellable?: Gio.Cancellable | null): boolean
    callCancel(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCancelFinish(res: Gio.AsyncResult): boolean
    callCancelSync(cancellable?: Gio.Cancellable | null): boolean
    callEnableExtensions(argExtensions: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEnableExtensionsFinish(res: Gio.AsyncResult): boolean
    callEnableExtensionsSync(argExtensions: string, cancellable?: Gio.Cancellable | null): boolean
    completeAnswerQuery(invocation: Gio.DBusMethodInvocation): void
    completeBeginVerification(invocation: Gio.DBusMethodInvocation): void
    completeBeginVerificationForUser(invocation: Gio.DBusMethodInvocation): void
    completeCancel(invocation: Gio.DBusMethodInvocation): void
    completeEnableExtensions(invocation: Gio.DBusMethodInvocation): void
    emitConversationStarted(argServiceName: string): void
    emitConversationStopped(argServiceName: string): void
    emitInfo(argServiceName: string, argInfo: string): void
    emitInfoQuery(argServiceName: string, argQuery: string): void
    emitProblem(argServiceName: string, argProblem: string): void
    emitReauthenticationStarted(argPidOfCaller: number): void
    emitReset(): void
    emitSecretInfoQuery(argServiceName: string, argQuery: string): void
    emitServiceUnavailable(argServiceName: string, argMessage: string): void
    emitVerificationComplete(argServiceName: string): void
    emitVerificationFailed(argServiceName: string): void
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
    /* Signals of Gdm-1.0.Gdm.UserVerifier */
    connect(sigName: "conversation-started", callback: ((object: string) => void)): number
    on(sigName: "conversation-started", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conversation-started", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conversation-started", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "conversation-started", object: string): void
    connect(sigName: "conversation-stopped", callback: ((object: string) => void)): number
    on(sigName: "conversation-stopped", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conversation-stopped", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conversation-stopped", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "conversation-stopped", object: string): void
    connect(sigName: "handle-answer-query", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-answer-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-answer-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-answer-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-answer-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-begin-verification", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-begin-verification", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-begin-verification", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-begin-verification", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-begin-verification", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-begin-verification-for-user", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-begin-verification-for-user", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-begin-verification-for-user", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-begin-verification-for-user", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-begin-verification-for-user", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-cancel", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-cancel", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-cancel", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-cancel", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-cancel", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-enable-extensions", callback: ((object: Gio.DBusMethodInvocation, p0: string[]) => boolean)): number
    on(sigName: "handle-enable-extensions", callback: (object: Gio.DBusMethodInvocation, p0: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-enable-extensions", callback: (object: Gio.DBusMethodInvocation, p0: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-enable-extensions", callback: (object: Gio.DBusMethodInvocation, p0: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "handle-enable-extensions", object: Gio.DBusMethodInvocation, p0: string[]): void
    connect(sigName: "info", callback: ((object: string, p0: string) => void)): number
    on(sigName: "info", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "info", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "info", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "info", object: string, p0: string): void
    connect(sigName: "info-query", callback: ((object: string, p0: string) => void)): number
    on(sigName: "info-query", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "info-query", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "info-query", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "info-query", object: string, p0: string): void
    connect(sigName: "problem", callback: ((object: string, p0: string) => void)): number
    on(sigName: "problem", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "problem", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "problem", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "problem", object: string, p0: string): void
    connect(sigName: "reauthentication-started", callback: ((object: number) => void)): number
    on(sigName: "reauthentication-started", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reauthentication-started", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reauthentication-started", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "reauthentication-started", object: number): void
    connect(sigName: "reset", callback: (() => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "secret-info-query", callback: ((object: string, p0: string) => void)): number
    on(sigName: "secret-info-query", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "secret-info-query", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "secret-info-query", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "secret-info-query", object: string, p0: string): void
    connect(sigName: "service-unavailable", callback: ((object: string, p0: string) => void)): number
    on(sigName: "service-unavailable", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-unavailable", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-unavailable", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "service-unavailable", object: string, p0: string): void
    connect(sigName: "verification-complete", callback: ((object: string) => void)): number
    on(sigName: "verification-complete", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "verification-complete", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "verification-complete", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "verification-complete", object: string): void
    connect(sigName: "verification-failed", callback: ((object: string) => void)): number
    on(sigName: "verification-failed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "verification-failed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "verification-failed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "verification-failed", object: string): void
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
    constructor (config?: UserVerifierProxy_ConstructProps)
    _init (config?: UserVerifierProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface UserVerifierSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
class UserVerifierSkeleton {
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
    /* Methods of Gdm-1.0.Gdm.UserVerifier */
    callAnswerQuery(argServiceName: string, argAnswer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAnswerQueryFinish(res: Gio.AsyncResult): boolean
    callAnswerQuerySync(argServiceName: string, argAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callBeginVerification(argServiceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginVerificationFinish(res: Gio.AsyncResult): boolean
    callBeginVerificationForUser(argServiceName: string, argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginVerificationForUserFinish(res: Gio.AsyncResult): boolean
    callBeginVerificationForUserSync(argServiceName: string, argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callBeginVerificationSync(argServiceName: string, cancellable?: Gio.Cancellable | null): boolean
    callCancel(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCancelFinish(res: Gio.AsyncResult): boolean
    callCancelSync(cancellable?: Gio.Cancellable | null): boolean
    callEnableExtensions(argExtensions: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEnableExtensionsFinish(res: Gio.AsyncResult): boolean
    callEnableExtensionsSync(argExtensions: string, cancellable?: Gio.Cancellable | null): boolean
    completeAnswerQuery(invocation: Gio.DBusMethodInvocation): void
    completeBeginVerification(invocation: Gio.DBusMethodInvocation): void
    completeBeginVerificationForUser(invocation: Gio.DBusMethodInvocation): void
    completeCancel(invocation: Gio.DBusMethodInvocation): void
    completeEnableExtensions(invocation: Gio.DBusMethodInvocation): void
    emitConversationStarted(argServiceName: string): void
    emitConversationStopped(argServiceName: string): void
    emitInfo(argServiceName: string, argInfo: string): void
    emitInfoQuery(argServiceName: string, argQuery: string): void
    emitProblem(argServiceName: string, argProblem: string): void
    emitReauthenticationStarted(argPidOfCaller: number): void
    emitReset(): void
    emitSecretInfoQuery(argServiceName: string, argQuery: string): void
    emitServiceUnavailable(argServiceName: string, argMessage: string): void
    emitVerificationComplete(argServiceName: string): void
    emitVerificationFailed(argServiceName: string): void
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
    /* Signals of Gdm-1.0.Gdm.UserVerifier */
    connect(sigName: "conversation-started", callback: ((object: string) => void)): number
    on(sigName: "conversation-started", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conversation-started", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conversation-started", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "conversation-started", object: string): void
    connect(sigName: "conversation-stopped", callback: ((object: string) => void)): number
    on(sigName: "conversation-stopped", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conversation-stopped", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conversation-stopped", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "conversation-stopped", object: string): void
    connect(sigName: "handle-answer-query", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-answer-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-answer-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-answer-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-answer-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-begin-verification", callback: ((object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    on(sigName: "handle-begin-verification", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-begin-verification", callback: (object: Gio.DBusMethodInvocation, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-begin-verification", callback: (object: Gio.DBusMethodInvocation, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-begin-verification", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-begin-verification-for-user", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-begin-verification-for-user", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-begin-verification-for-user", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-begin-verification-for-user", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-begin-verification-for-user", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-cancel", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-cancel", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-cancel", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-cancel", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-cancel", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-enable-extensions", callback: ((object: Gio.DBusMethodInvocation, p0: string[]) => boolean)): number
    on(sigName: "handle-enable-extensions", callback: (object: Gio.DBusMethodInvocation, p0: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-enable-extensions", callback: (object: Gio.DBusMethodInvocation, p0: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-enable-extensions", callback: (object: Gio.DBusMethodInvocation, p0: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "handle-enable-extensions", object: Gio.DBusMethodInvocation, p0: string[]): void
    connect(sigName: "info", callback: ((object: string, p0: string) => void)): number
    on(sigName: "info", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "info", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "info", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "info", object: string, p0: string): void
    connect(sigName: "info-query", callback: ((object: string, p0: string) => void)): number
    on(sigName: "info-query", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "info-query", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "info-query", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "info-query", object: string, p0: string): void
    connect(sigName: "problem", callback: ((object: string, p0: string) => void)): number
    on(sigName: "problem", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "problem", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "problem", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "problem", object: string, p0: string): void
    connect(sigName: "reauthentication-started", callback: ((object: number) => void)): number
    on(sigName: "reauthentication-started", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reauthentication-started", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reauthentication-started", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "reauthentication-started", object: number): void
    connect(sigName: "reset", callback: (() => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "secret-info-query", callback: ((object: string, p0: string) => void)): number
    on(sigName: "secret-info-query", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "secret-info-query", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "secret-info-query", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "secret-info-query", object: string, p0: string): void
    connect(sigName: "service-unavailable", callback: ((object: string, p0: string) => void)): number
    on(sigName: "service-unavailable", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-unavailable", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-unavailable", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "service-unavailable", object: string, p0: string): void
    connect(sigName: "verification-complete", callback: ((object: string) => void)): number
    on(sigName: "verification-complete", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "verification-complete", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "verification-complete", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "verification-complete", object: string): void
    connect(sigName: "verification-failed", callback: ((object: string) => void)): number
    on(sigName: "verification-failed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "verification-failed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "verification-failed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "verification-failed", object: string): void
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
    constructor (config?: UserVerifierSkeleton_ConstructProps)
    _init (config?: UserVerifierSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
interface WorkerManagerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class WorkerManagerProxy {
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
    /* Methods of Gdm-1.0.Gdm.WorkerManager */
    callChoiceListQuery(argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callChoiceListQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callChoiceListQuerySync(argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callHello(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callHelloFinish(res: Gio.AsyncResult): boolean
    callHelloSync(cancellable?: Gio.Cancellable | null): boolean
    callInfo(argServiceName: string, argInfo: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callInfoFinish(res: Gio.AsyncResult): boolean
    callInfoQuery(argServiceName: string, argQuery: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callInfoQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callInfoQuerySync(argServiceName: string, argQuery: string, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callInfoSync(argServiceName: string, argInfo: string, cancellable?: Gio.Cancellable | null): boolean
    callProblem(argServiceName: string, argProblem: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callProblemFinish(res: Gio.AsyncResult): boolean
    callProblemSync(argServiceName: string, argProblem: string, cancellable?: Gio.Cancellable | null): boolean
    callSecretInfoQuery(argServiceName: string, argQuery: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSecretInfoQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callSecretInfoQuerySync(argServiceName: string, argQuery: string, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    completeChoiceListQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    completeHello(invocation: Gio.DBusMethodInvocation): void
    completeInfo(invocation: Gio.DBusMethodInvocation): void
    completeInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    completeProblem(invocation: Gio.DBusMethodInvocation): void
    completeSecretInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
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
    /* Signals of Gdm-1.0.Gdm.WorkerManager */
    connect(sigName: "handle-choice-list-query", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => boolean)): number
    on(sigName: "handle-choice-list-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-choice-list-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-choice-list-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "handle-choice-list-query", object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant): void
    connect(sigName: "handle-hello", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-hello", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-hello", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-hello", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-hello", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-info", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-info", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-info", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-info", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-info", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-info-query", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-problem", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-problem", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-problem", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-problem", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-problem", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-secret-info-query", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-secret-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-secret-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-secret-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-secret-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
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
    constructor (config?: WorkerManagerProxy_ConstructProps)
    _init (config?: WorkerManagerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface WorkerManagerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
class WorkerManagerSkeleton {
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
    /* Methods of Gdm-1.0.Gdm.WorkerManager */
    callChoiceListQuery(argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callChoiceListQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callChoiceListQuerySync(argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callHello(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callHelloFinish(res: Gio.AsyncResult): boolean
    callHelloSync(cancellable?: Gio.Cancellable | null): boolean
    callInfo(argServiceName: string, argInfo: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callInfoFinish(res: Gio.AsyncResult): boolean
    callInfoQuery(argServiceName: string, argQuery: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callInfoQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callInfoQuerySync(argServiceName: string, argQuery: string, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callInfoSync(argServiceName: string, argInfo: string, cancellable?: Gio.Cancellable | null): boolean
    callProblem(argServiceName: string, argProblem: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callProblemFinish(res: Gio.AsyncResult): boolean
    callProblemSync(argServiceName: string, argProblem: string, cancellable?: Gio.Cancellable | null): boolean
    callSecretInfoQuery(argServiceName: string, argQuery: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSecretInfoQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callSecretInfoQuerySync(argServiceName: string, argQuery: string, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    completeChoiceListQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    completeHello(invocation: Gio.DBusMethodInvocation): void
    completeInfo(invocation: Gio.DBusMethodInvocation): void
    completeInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    completeProblem(invocation: Gio.DBusMethodInvocation): void
    completeSecretInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
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
    /* Signals of Gdm-1.0.Gdm.WorkerManager */
    connect(sigName: "handle-choice-list-query", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => boolean)): number
    on(sigName: "handle-choice-list-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-choice-list-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-choice-list-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "handle-choice-list-query", object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant): void
    connect(sigName: "handle-hello", callback: ((object: Gio.DBusMethodInvocation) => boolean)): number
    on(sigName: "handle-hello", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-hello", callback: (object: Gio.DBusMethodInvocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-hello", callback: (object: Gio.DBusMethodInvocation) => void): NodeJS.EventEmitter
    emit(sigName: "handle-hello", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-info", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-info", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-info", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-info", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-info", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-info-query", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-problem", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-problem", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-problem", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-problem", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-problem", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-secret-info-query", callback: ((object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    on(sigName: "handle-secret-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-secret-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-secret-info-query", callback: (object: Gio.DBusMethodInvocation, p0: string, p1: string) => void): NodeJS.EventEmitter
    emit(sigName: "handle-secret-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
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
    constructor (config?: WorkerManagerSkeleton_ConstructProps)
    _init (config?: WorkerManagerSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
abstract class ChooserIface {
    /* Fields of Gdm-1.0.Gdm.ChooserIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleDisconnect: (object: Chooser, invocation: Gio.DBusMethodInvocation) => boolean
    readonly handleSelectHostname: (object: Chooser, invocation: Gio.DBusMethodInvocation, argHostname: string) => boolean
    static name: string
}
abstract class ChooserProxyClass {
    /* Fields of Gdm-1.0.Gdm.ChooserProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class ChooserProxyPrivate {
    static name: string
}
abstract class ChooserSkeletonClass {
    /* Fields of Gdm-1.0.Gdm.ChooserSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class ChooserSkeletonPrivate {
    static name: string
}
abstract class ClientClass {
    /* Fields of Gdm-1.0.Gdm.ClientClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class GreeterIface {
    /* Fields of Gdm-1.0.Gdm.GreeterIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleBeginAutoLogin: (object: Greeter, invocation: Gio.DBusMethodInvocation, argUsername: string) => boolean
    readonly handleGetTimedLoginDetails: (object: Greeter, invocation: Gio.DBusMethodInvocation) => boolean
    readonly handleSelectSession: (object: Greeter, invocation: Gio.DBusMethodInvocation, argSession: string) => boolean
    readonly handleSelectUser: (object: Greeter, invocation: Gio.DBusMethodInvocation, argUsername: string) => boolean
    readonly handleStartSessionWhenReady: (object: Greeter, invocation: Gio.DBusMethodInvocation, argServiceName: string, argShouldStartSession: boolean) => boolean
    readonly defaultLanguageNameChanged: (object: Greeter, argLanguageName: string) => void
    readonly defaultSessionNameChanged: (object: Greeter, argSessionName: string) => void
    readonly reauthenticated: (object: Greeter, argServiceName: string) => void
    readonly selectedUserChanged: (object: Greeter, argUsername: string) => void
    readonly sessionOpened: (object: Greeter, argServiceName: string) => void
    readonly timedLoginRequested: (object: Greeter, argUsername: string, argDelay: number) => void
    static name: string
}
abstract class GreeterProxyClass {
    /* Fields of Gdm-1.0.Gdm.GreeterProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class GreeterProxyPrivate {
    static name: string
}
abstract class GreeterSkeletonClass {
    /* Fields of Gdm-1.0.Gdm.GreeterSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class GreeterSkeletonPrivate {
    static name: string
}
abstract class ManagerIface {
    /* Fields of Gdm-1.0.Gdm.ManagerIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleOpenReauthenticationChannel: (object: Manager, invocation: Gio.DBusMethodInvocation, argUsername: string) => boolean
    readonly handleOpenSession: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    readonly handleRegisterDisplay: (object: Manager, invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant) => boolean
    readonly handleRegisterSession: (object: Manager, invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant) => boolean
    readonly getVersion: (object: Manager) => string
    static name: string
}
abstract class ManagerProxyClass {
    /* Fields of Gdm-1.0.Gdm.ManagerProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class ManagerProxyPrivate {
    static name: string
}
abstract class ManagerSkeletonClass {
    /* Fields of Gdm-1.0.Gdm.ManagerSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class ManagerSkeletonPrivate {
    static name: string
}
abstract class RemoteGreeterIface {
    /* Fields of Gdm-1.0.Gdm.RemoteGreeterIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleDisconnect: (object: RemoteGreeter, invocation: Gio.DBusMethodInvocation) => boolean
    static name: string
}
abstract class RemoteGreeterProxyClass {
    /* Fields of Gdm-1.0.Gdm.RemoteGreeterProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class RemoteGreeterProxyPrivate {
    static name: string
}
abstract class RemoteGreeterSkeletonClass {
    /* Fields of Gdm-1.0.Gdm.RemoteGreeterSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class RemoteGreeterSkeletonPrivate {
    static name: string
}
abstract class UserVerifierChoiceListIface {
    /* Fields of Gdm-1.0.Gdm.UserVerifierChoiceListIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleSelectChoice: (object: UserVerifierChoiceList, invocation: Gio.DBusMethodInvocation, argServiceName: string, argChoice: string) => boolean
    readonly choiceQuery: (object: UserVerifierChoiceList, argServiceName: string, argPromptMessage: string, argList: GLib.Variant) => void
    static name: string
}
abstract class UserVerifierChoiceListProxyClass {
    /* Fields of Gdm-1.0.Gdm.UserVerifierChoiceListProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class UserVerifierChoiceListProxyPrivate {
    static name: string
}
abstract class UserVerifierChoiceListSkeletonClass {
    /* Fields of Gdm-1.0.Gdm.UserVerifierChoiceListSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class UserVerifierChoiceListSkeletonPrivate {
    static name: string
}
abstract class UserVerifierIface {
    /* Fields of Gdm-1.0.Gdm.UserVerifierIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleAnswerQuery: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, argServiceName: string, argAnswer: string) => boolean
    readonly handleBeginVerification: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, argServiceName: string) => boolean
    readonly handleBeginVerificationForUser: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, argServiceName: string, argUsername: string) => boolean
    readonly handleCancel: (object: UserVerifier, invocation: Gio.DBusMethodInvocation) => boolean
    readonly handleEnableExtensions: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, argExtensions: string) => boolean
    readonly conversationStarted: (object: UserVerifier, argServiceName: string) => void
    readonly conversationStopped: (object: UserVerifier, argServiceName: string) => void
    readonly info: (object: UserVerifier, argServiceName: string, argInfo: string) => void
    readonly infoQuery: (object: UserVerifier, argServiceName: string, argQuery: string) => void
    readonly problem: (object: UserVerifier, argServiceName: string, argProblem: string) => void
    readonly reauthenticationStarted: (object: UserVerifier, argPidOfCaller: number) => void
    readonly reset: (object: UserVerifier) => void
    readonly secretInfoQuery: (object: UserVerifier, argServiceName: string, argQuery: string) => void
    readonly serviceUnavailable: (object: UserVerifier, argServiceName: string, argMessage: string) => void
    readonly verificationComplete: (object: UserVerifier, argServiceName: string) => void
    readonly verificationFailed: (object: UserVerifier, argServiceName: string) => void
    static name: string
}
abstract class UserVerifierProxyClass {
    /* Fields of Gdm-1.0.Gdm.UserVerifierProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class UserVerifierProxyPrivate {
    static name: string
}
abstract class UserVerifierSkeletonClass {
    /* Fields of Gdm-1.0.Gdm.UserVerifierSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class UserVerifierSkeletonPrivate {
    static name: string
}
abstract class WorkerManagerIface {
    /* Fields of Gdm-1.0.Gdm.WorkerManagerIface */
    readonly parentIface: GObject.TypeInterface
    readonly handleChoiceListQuery: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant) => boolean
    readonly handleHello: (object: WorkerManager, invocation: Gio.DBusMethodInvocation) => boolean
    readonly handleInfo: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argInfo: string) => boolean
    readonly handleInfoQuery: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argQuery: string) => boolean
    readonly handleProblem: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argProblem: string) => boolean
    readonly handleSecretInfoQuery: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argQuery: string) => boolean
    static name: string
}
abstract class WorkerManagerProxyClass {
    /* Fields of Gdm-1.0.Gdm.WorkerManagerProxyClass */
    readonly parentClass: Gio.DBusProxyClass
    static name: string
}
class WorkerManagerProxyPrivate {
    static name: string
}
abstract class WorkerManagerSkeletonClass {
    /* Fields of Gdm-1.0.Gdm.WorkerManagerSkeletonClass */
    readonly parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class WorkerManagerSkeletonPrivate {
    static name: string
}
}
export default Gdm;