/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Accounts-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Accounts {

/**
 * These identify the various errors that can occur with methods in
 * libaccounts-glib that return a #GError.
 */
enum AccountsError {
    /**
     * there was an error accessing the accounts database
     */
    DB,
    /**
     * the account was in the process of being
     * disposed
     */
    DISPOSED,
    /**
     * the account was in the process of being deleted
     */
    DELETED,
    /**
     * the database was locked
     */
    DB_LOCKED,
    /**
     * the requested account was not found
     */
    ACCOUNT_NOT_FOUND,
    /**
     * an asynchronous store operation is
     * already in progress. Since 1.4
     */
    STORE_IN_PROGRESS,
    /**
     * the accounts DB is in read-only mode. Since 1.4
     */
    READONLY,
}
enum Error {
    DB,
    DISPOSED,
    DELETED,
    DB_LOCKED,
    ACCOUNT_NOT_FOUND,
}
/**
 * The source of a setting on a #AgAccount.
 */
enum SettingSource {
    /**
     * the setting is not present
     */
    NONE,
    /**
     * the setting comes from the current account
     * configuration
     */
    ACCOUNT,
    /**
     * the setting comes from the predefined profile
     */
    PROFILE,
}
const MANAGER_INTERFACE: string
const MANAGER_OBJECT_PATH: string
const MANAGER_SERVICE_NAME: string
function accounts_error_quark(): GLib.Quark
function errors_quark(): GLib.Quark
function provider_list_free(list: Provider[]): void
function service_list_free(list: Service[]): void
function service_type_list_free(list: ServiceType[]): void
/**
 * This callback is invoked when the value of an account configuration setting
 * changes. If the callback was installed with ag_account_watch_key() then `key`
 * is the name of the configuration setting which changed; if it was installed
 * with ag_account_watch_dir() then `key` is the same key prefix that was used
 * when installing this callback.
 */
interface AccountNotifyCb {
    (account: Account, key: string): void
}
/**
 * This callback is invoked when storing the account settings is completed. If
 * `error` is not %NULL, then some error occurred and the data has most likely
 * not been written.
 */
interface AccountStoreCb {
    (account: Account, error: GLib.Error): void
}
interface Account_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Accounts-1.0.Accounts.Account */
    foreign?: boolean
    /**
     * The AgAccountId for the account.
     */
    id?: number
    /**
     * The #AgManager from which the account was instantiated.
     */
    manager?: Manager
    /**
     * The ID of the provider for the account.
     */
    provider?: string
}
class Account {
    /* Properties of Accounts-1.0.Accounts.Account */
    /**
     * The display name of the account.
     */
    readonly display_name: string
    /**
     * Whether the account is currently enabled.
     */
    readonly enabled: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Accounts-1.0.Accounts.Account */
    /**
     * Deletes the account. Call ag_account_store() in order to record the change
     * in the storage.
     */
    delete(): void
    /**
     * Get the display name of `account`.
     */
    get_display_name(): string
    /**
     * Gets whether the selected service is enabled for `account`.
     */
    get_enabled(): boolean
    /**
     * Get the #AgManager for `account`.
     */
    get_manager(): Manager
    /**
     * Get the name of the provider of `account`.
     */
    get_provider_name(): string
    /**
     * Gets the selected #AgService for `account`.
     */
    get_selected_service(): Service
    /**
     * Creates a new iterator. This method is useful for language bindings only.
     */
    get_settings_iter(key_prefix?: string | null): AccountSettingIter
    /**
     * Gets the value of the configuration setting `key:` `value` must be a
     * #GValue initialized to the type of the setting.
     */
    get_value(key: string, value: any): [ /* returnType */ SettingSource, /* value */ any ]
    /**
     * Gets the value of the configuration setting `key`.
     */
    get_variant(key: string): [ /* returnType */ GLib.Variant, /* source */ SettingSource | null ]
    /**
     * Gets a list of services that are enabled for `account`.
     */
    list_enabled_services(): Service[]
    /**
     * Get the list of services for `account`. If the #AgManager was created with
     * specified service_type this will return only services with this service_type.
     */
    list_services(): Service[]
    /**
     * Get the list of services supported by `account,` filtered by `service_type`.
     */
    list_services_by_type(service_type: string): Service[]
    /**
     * Removes the notification callback identified by `watch`.
     */
    remove_watch(watch: AccountWatch): void
    /**
     * Selects the configuration of service `service:` from now on, all the
     * subsequent calls on the #AgAccount configuration will act on the `service`.
     * If `service` is %NULL, the global account configuration is selected.
     * 
     * Note that if `account` is being shared with other code one must take special
     * care to make sure the desired service is always selected.
     */
    select_service(service?: Service | null): void
    /**
     * Changes the display name for `account` to `display_name`.
     */
    set_display_name(display_name: string): void
    /**
     * Sets the "enabled" flag on the selected service for `account`.
     */
    set_enabled(enabled: boolean): void
    /**
     * Sets the value of the configuration setting `key` to the value `value`.
     * If `value` is %NULL, then the setting is unset.
     */
    set_value(key: string, value?: any | null): void
    /**
     * Sets the value of the configuration setting `key` to the value `value`.
     * If `value` has a floating reference, the `account` will take ownership
     * of it.
     * If `value` is %NULL, then the setting is unset.
     */
    set_variant(key: string, value?: GLib.Variant | null): void
    /**
     * Initializes `iter` to iterate over the account settings. If `key_prefix` is
     * not %NULL, only keys whose names start with `key_prefix` will be iterated
     * over.
     */
    settings_iter_init(iter: AccountSettingIter, key_prefix?: string | null): void
    /**
     * Creates signature of the `key` with given `token`. The account must be
     * stored prior to calling this function.
     */
    sign(key: string, token: string): void
    /**
     * Commit the changed account settings to the account database, and invoke
     * `callback` when the operation has been completed.
     */
    store(callback: AccountStoreCb): void
    /**
     * Commit the changed account settings to the account database, and invoke
     * `callback` when the operation has been completed.
     */
    store_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Commit the changed account settings to the account database, and invoke
     * `callback` when the operation has been completed.
     */
    store_blocking(): boolean
    /**
     * Finishes the store operation started by ag_account_store_async().
     */
    store_finish(res: Gio.AsyncResult): boolean
    /**
     * Get whether `service_type` is supported on `account`.
     */
    supports_service(service_type: string): boolean
    /**
     * Verify if the key is signed and the signature matches the value
     * and provides the aegis token which was used for signing the `key`.
     */
    verify(key: string, token: string): boolean
    /**
     * Verify if the `key` is signed with any of the tokens from the `tokens`
     * and the signature is valid.
     */
    verify_with_tokens(key: string, tokens: string): boolean
    /**
     * Installs a watch on all the keys under `key_prefix:` `callback` will be
     * invoked whenever the value of any of these keys changes (or a key is
     * removed).
     */
    watch_dir(key_prefix: string, callback: AccountNotifyCb): AccountWatch
    /**
     * Installs a watch on `key:` `callback` will be invoked whenever the value of
     * `key` changes (or the key is removed).
     */
    watch_key(key: string, callback: AccountNotifyCb): AccountWatch
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Accounts-1.0.Accounts.Account */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Accounts-1.0.Accounts.Account */
    /**
     * Emitted when the account has been deleted.
     */
    connect(sigName: "deleted", callback: (($obj: Account) => void)): number
    connect_after(sigName: "deleted", callback: (($obj: Account) => void)): number
    emit(sigName: "deleted"): void
    /**
     * Emitted when the account display name has changed.
     */
    connect(sigName: "display-name-changed", callback: (($obj: Account) => void)): number
    connect_after(sigName: "display-name-changed", callback: (($obj: Account) => void)): number
    emit(sigName: "display-name-changed"): void
    /**
     * Emitted when the account "enabled" status was changed for one of its
     * services, or for the account globally.
     */
    connect(sigName: "enabled", callback: (($obj: Account, service: string, enabled: boolean) => void)): number
    connect_after(sigName: "enabled", callback: (($obj: Account, service: string, enabled: boolean) => void)): number
    emit(sigName: "enabled", service: string, enabled: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display-name", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Account_ConstructProps)
    _init (config?: Account_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface AccountService_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Accounts-1.0.Accounts.AccountService */
    /**
     * The #AgAccount used by the account service.
     */
    account?: Account
    /**
     * The #AgService used by the account service.
     */
    service?: Service
}
class AccountService {
    /* Properties of Accounts-1.0.Accounts.AccountService */
    /**
     * Whether the account service is currently enabled. The value of
     * this property is %TRUE if and only if the underlying #AgAccount
     * is enabled and the selected #AgService is enabled on it. If this
     * property is %FALSE, applications should not try to use this
     * object.
     */
    readonly enabled: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Accounts-1.0.Accounts.AccountService */
    /**
     * Get the #AgAccount associated with `self`.
     */
    get_account(): Account
    /**
     * Reads the authentication data stored in the account (merging the
     * service-specific settings with the global account settings) and returns an
     * #AgAuthData structure.
     * The method and mechanism are read from the "auth/method" and
     * "auth/mechanism" keys, respectively. The authentication parameters are
     * found under the "auth/&lt;method&gt;/&lt;mechanism&gt;/" group.
     */
    get_auth_data(): AuthData
    /**
     * This method should be called only in the context of a handler of the
     * #AgAccountService::changed signal, and can be used to retrieve the set of
     * changes.
     */
    get_changed_fields(): string[]
    /**
     * Checks whether the underlying #AgAccount is enabled and the selected
     * #AgService is enabled on it. If this method returns %FALSE, applications
     * should not try to use this object.
     */
    get_enabled(): boolean
    /**
     * Get the #AgService associated with `self`.
     */
    get_service(): Service
    /**
     * Creates a new iterator. This method is useful for language bindings only.
     */
    get_settings_iter(key_prefix?: string | null): AccountSettingIter
    /**
     * Gets the value of the configuration setting `key:` `value` must be a
     * #GValue initialized to the type of the setting.
     */
    get_value(key: string, value: any): [ /* returnType */ SettingSource, /* value */ any ]
    /**
     * Gets the value of the configuration setting `key`.
     */
    get_variant(key: string): [ /* returnType */ GLib.Variant, /* source */ SettingSource | null ]
    /**
     * Sets the value of the configuration setting `key` to the value `value`.
     * If `value` is %NULL, then the setting is unset.
     */
    set_value(key: string, value?: any | null): void
    /**
     * Sets the value of the configuration setting `key` to the value `value`.
     * If `value` has a floating reference, the `account` will take ownership
     * of it.
     * If `value` is %NULL, then the setting is unset.
     */
    set_variant(key: string, value?: GLib.Variant | null): void
    /**
     * Initializes `iter` to iterate over the account settings. If `key_prefix` is
     * not %NULL, only keys whose names start with `key_prefix` will be iterated
     * over.
     * After calling this method, one would typically call
     * ag_account_settings_iter_get_next() to read the settings one by one.
     */
    settings_iter_init(iter: AccountSettingIter, key_prefix?: string | null): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Accounts-1.0.Accounts.AccountService */
    /**
     * Emitted when some setting has changed on the account service. You can
     * use the ag_account_service_get_changed_fields() method to retrieve the
     * list of the settings which have changed.
     */
    connect(sigName: "changed", callback: (($obj: AccountService) => void)): number
    connect_after(sigName: "changed", callback: (($obj: AccountService) => void)): number
    emit(sigName: "changed"): void
    /**
     * Emitted when the service enabled state changes.
     */
    connect(sigName: "enabled", callback: (($obj: AccountService, enabled: boolean) => void)): number
    connect_after(sigName: "enabled", callback: (($obj: AccountService, enabled: boolean) => void)): number
    emit(sigName: "enabled", enabled: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enabled", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AccountService_ConstructProps)
    _init (config?: AccountService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(account: Account, service?: Service | null): AccountService
    /**
     * Iterates over the account keys. `iter` must be an iterator previously
     * initialized with ag_account_service_settings_iter_init().
     */
    static settings_iter_next(iter: AccountSettingIter): [ /* returnType */ boolean, /* key */ string, /* value */ any ]
    static $gtype: GObject.Type
}
interface Manager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Accounts-1.0.Accounts.Manager */
    /**
     * Whether to abort the application when a database timeout occurs.
     */
    abort_on_db_timeout?: boolean
    /**
     * Timeout for database operations, in milliseconds.
     */
    db_timeout?: number
    /**
     * If the service type is set, certain operations on the #AgManager, such
     * as ag_manager_list() and ag_manager_list_services(), will be restricted
     * to only affect accounts or services with that service type.
     */
    service_type?: string
    /**
     * Whether to use D-Bus for inter-process change notification. Setting this
     * property to %FALSE causes libaccounts not to emit the change
     * notification signals, and also not react to changes made by other
     * processes. Disabling D-Bus is only meant to be used for specific cases,
     * such as maintenance programs.
     */
    use_dbus?: boolean
}
class Manager {
    /* Properties of Accounts-1.0.Accounts.Manager */
    /**
     * Whether to abort the application when a database timeout occurs.
     */
    abort_on_db_timeout: boolean
    /**
     * Timeout for database operations, in milliseconds.
     */
    db_timeout: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Accounts-1.0.Accounts.Manager */
    /**
     * Create a new account. The account is not stored in the database until
     * ag_account_store() has successfully returned; the `id` field in the
     * #AgAccount structure is also not meant to be valid until the account has
     * been stored.
     */
    create_account(provider_name: string): Account
    /**
     * Get whether the library will abort when a timeout error occurs.
     */
    get_abort_on_db_timeout(): boolean
    /**
     * Instantiates the object representing the account identified by
     * `account_id`.
     */
    get_account(account_id: AccountId): Account
    /**
     * Gets all the account services. If the `manager` was created for a
     * specific service type, only services with that type will be returned.
     * <note>
     *   <para>
     *   This method causes the loading of all the service settings for all the
     *   returned accounts (unless they have been loaded previously). If you are
     *   interested in a specific account/service, consider using
     *   ag_manager_load_account() to first load the the account, and then create
     *   the AgAccountService for that account only.
     *   </para>
     * </note>
     */
    get_account_services(): AccountService[]
    /**
     * Search for `application_name` in the list of applications, and return a new
     * #AgApplication if a matching application was found.
     */
    get_application(application_name: string): Application
    /**
     * Get the timeout of database operations for `manager,` in milliseconds.
     */
    get_db_timeout(): number
    /**
     * Gets all the enabled account services. If the `manager` was created for a
     * specific service type, only services with that type will be returned.
     * <note>
     *   <para>
     *   This method causes the loading of all the service settings for all the
     *   returned accounts (unless they have been loaded previously). If you are
     *   interested in a specific account/service, consider using
     *   ag_manager_load_account() to first load the the account, and then create
     *   the AgAccountService for that account only.
     *   </para>
     * </note>
     */
    get_enabled_account_services(): AccountService[]
    /**
     * Loads the provider identified by `provider_name`.
     */
    get_provider(provider_name: string): Provider
    /**
     * Loads the service identified by `service_name`.
     */
    get_service(service_name: string): Service
    /**
     * Get the service type for `manager`.
     */
    get_service_type(): string
    /**
     * Lists the accounts. If the #AgManager is created with a specified
     * #AgManager:service-type, it will return only the accounts supporting this
     * service type.
     */
    list(): AccountId[]
    /**
     * Lists the registered applications which support the given service.
     */
    list_applications_by_service(service: Service): Application[]
    /**
     * Lists the accounts supporting the given service type.
     */
    list_by_service_type(service_type: string): AccountId[]
    /**
     * Lists the enabled accounts.
     */
    list_enabled(): AccountId[]
    /**
     * Lists the enabled accounts supporting the given service type.
     */
    list_enabled_by_service_type(service_type: string): AccountId[]
    /**
     * Gets a list of all the installed providers.
     */
    list_providers(): Provider[]
    /**
     * Gets a list of all the installed service types.
     */
    list_service_types(): ServiceType[]
    /**
     * Gets a list of all the installed services.
     * If the #AgManager was created with a specified #AgManager:service_type
     * it will return only the installed services supporting that service type.
     */
    list_services(): Service[]
    /**
     * Gets a list of all the installed services where the service type name is
     * `service_type`.
     */
    list_services_by_type(service_type: string): Service[]
    /**
     * Instantiates the object representing the account identified by
     * `account_id`.
     */
    load_account(account_id: AccountId): Account
    /**
     * Instantiate the service type with the name `service_type`.
     */
    load_service_type(service_type: string): ServiceType
    /**
     * Tells libaccounts whether it should make the client application abort when
     * a timeout error occurs. The default is %FALSE.
     */
    set_abort_on_db_timeout(abort: boolean): void
    /**
     * Sets the timeout for database operations. This tells the library how long
     * it is allowed to block while waiting for a locked DB to become accessible.
     * Higher values mean a higher chance of successful reads, but also mean that
     * the execution might be blocked for a longer time.
     * The default is 5 seconds.
     */
    set_db_timeout(timeout_ms: number): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Accounts-1.0.Accounts.Manager */
    vfunc_account_deleted(id: AccountId): void
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Accounts-1.0.Accounts.Manager */
    /**
     * Emitted when a new account has been created; note that the account must
     * have been stored in the database: the signal is not emitted just in
     * response to ag_manager_create_account().
     */
    connect(sigName: "account-created", callback: (($obj: Manager, account_id: number) => void)): number
    connect_after(sigName: "account-created", callback: (($obj: Manager, account_id: number) => void)): number
    emit(sigName: "account-created", account_id: number): void
    /**
     * Emitted when an account has been deleted.
     * This signal is redundant with #AgAccount::deleted, but it is convenient
     * to provide full change notification with #AgManager.
     */
    connect(sigName: "account-deleted", callback: (($obj: Manager, account_id: number) => void)): number
    connect_after(sigName: "account-deleted", callback: (($obj: Manager, account_id: number) => void)): number
    emit(sigName: "account-deleted", account_id: number): void
    /**
     * Emitted when particular service of an account has been updated.
     * This signal is redundant with #AgAccount::deleted, but it is convenient
     * to provide full change notification with #AgManager.
     */
    connect(sigName: "account-updated", callback: (($obj: Manager, account_id: number) => void)): number
    connect_after(sigName: "account-updated", callback: (($obj: Manager, account_id: number) => void)): number
    emit(sigName: "account-updated", account_id: number): void
    /**
     * If the manager has been created with ag_manager_new_for_service_type(),
     * this signal will be emitted when an account (identified by `account_id)`
     * has been modified in such a way that the application might be interested
     * to start or stop using it: the "enabled" flag on the account or in some
     * service supported by the account and matching the
     * #AgManager:service-type have changed.
     * In practice, this signal might be emitted more often than when strictly
     * needed; applications must call ag_account_list_enabled_services() or
     * ag_manager_list_enabled() to get the current state.
     */
    connect(sigName: "enabled-event", callback: (($obj: Manager, account_id: number) => void)): number
    connect_after(sigName: "enabled-event", callback: (($obj: Manager, account_id: number) => void)): number
    emit(sigName: "enabled-event", account_id: number): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::abort-on-db-timeout", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-on-db-timeout", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::db-timeout", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::db-timeout", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Manager_ConstructProps)
    _init (config?: Manager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Manager
    static new_for_service_type(service_type: string): Manager
    /**
     * Frees the memory taken by a #GList of #AgAccountId allocated by #AgManager,
     * such as by ag_manager_list(), ag_manager_list_enabled() or
     * ag_manager_list_enabled_by_service_type().
     */
    static list_free(list: AccountId[]): void
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class AccountClass {
    /* Fields of Accounts-1.0.Accounts.AccountClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class AccountPrivate {
    static name: string
}
abstract class AccountServiceClass {
    /* Fields of Accounts-1.0.Accounts.AccountServiceClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class AccountServicePrivate {
    static name: string
}
class AccountSettingIter {
    /* Fields of Accounts-1.0.Accounts.AccountSettingIter */
    /**
     * the AgAccount to iterate over
     */
    readonly account: Account
    /* Methods of Accounts-1.0.Accounts.AccountSettingIter */
    /**
     * Frees the memory associated with an #AgAccountSettingIter.
     */
    free(): void
    /**
     * Iterates over the account keys. `iter` must be an iterator previously
     * initialized with ag_account_settings_iter_init().
     */
    get_next(): [ /* returnType */ boolean, /* key */ string, /* value */ GLib.Variant ]
    /**
     * Iterates over the account keys. `iter` must be an iterator previously
     * initialized with ag_account_settings_iter_init().
     */
    next(): [ /* returnType */ boolean, /* key */ string, /* value */ any ]
    static name: string
}
class AccountWatch {
    static name: string
}
class Application {
    /* Methods of Accounts-1.0.Accounts.Application */
    /**
     * Get the description of the #AgApplication.
     */
    get_description(): string
    /**
     * Get the #GDesktopAppInfo of the application.
     */
    get_desktop_app_info(): Gio.DesktopAppInfo
    /**
     * Get the translation domain of the #AgApplication.
     */
    get_i18n_domain(): string
    /**
     * Get the name of the #AgApplication.
     */
    get_name(): string
    /**
     * Get the description from the application XML file, for the specified
     * service; if not found, get the service-type description instead.
     */
    get_service_usage(service: Service): string
    /**
     * Increment the reference count of `self`.
     */
    ref(): Application
    /**
     * Decrements the reference count of `self`. The item is destroyed when the
     * count gets to 0.
     */
    unref(): void
    static name: string
}
class AuthData {
    /* Methods of Accounts-1.0.Accounts.AuthData */
    /**
     * Gets the ID of the credentials associated with this account.
     */
    get_credentials_id(): number
    /**
     * Gets the authentication parameters.
     */
    get_login_parameters(extra_parameters?: GLib.Variant | null): GLib.Variant
    /**
     * Gets the authentication mechanism.
     */
    get_mechanism(): string
    /**
     * Gets the authentication method.
     */
    get_method(): string
    /**
     * Gets the authentication parameters.
     */
    get_parameters(): GLib.HashTable
    /**
     * Insert the given authentication parameters into the authentication data. If
     * some parameters were already present, the parameters passed with this method
     * take precedence.
     */
    insert_parameters(parameters: GLib.HashTable): void
    /**
     * Increment the reference count of `self`.
     */
    ref(): AuthData
    /**
     * Decrements the reference count of `self`. The item is destroyed when the
     * count gets to 0.
     */
    unref(): void
    static name: string
}
abstract class ManagerClass {
    /* Fields of Accounts-1.0.Accounts.ManagerClass */
    readonly parent_class: GObject.ObjectClass
    readonly account_deleted: (manager: Manager, id: AccountId) => void
    static name: string
}
class ManagerPrivate {
    static name: string
}
class Provider {
    /* Methods of Accounts-1.0.Accounts.Provider */
    /**
     * Get the description of the #AgProvider.
     */
    get_description(): string
    /**
     * Get the display name of the #AgProvider.
     */
    get_display_name(): string
    /**
     * Get a regular expression matching all domains where this provider's accounts
     * can be used.
     */
    get_domains_regex(): string
    /**
     * Gets the contents of the XML provider file.  The buffer returned in `contents`
     * should not be modified or freed, and is guaranteed to be valid as long as
     * `provider` is referenced.
     * If some error occurs, `contents` is set to %NULL.
     */
    get_file_contents(contents: string): void
    /**
     * Get the translation domain of the #AgProvider.
     */
    get_i18n_domain(): string
    /**
     * Get the icon name of the #AgProvider.
     */
    get_icon_name(): string
    /**
     * Get the name of the #AgProvider.
     */
    get_name(): string
    /**
     * Get the name of the account plugin which manages all accounts created from
     * this #AgProvider.
     * Some platforms might find it useful to store plugin names in the provider
     * XML files, especially when the same plugin can work for different providers.
     */
    get_plugin_name(): string
    /**
     * Tell whether the provider doesn't support creating more than one account.
     * Note that libaccounts itself does not enforce preventing the creation of
     * multiple accounts when this flag is set: the flag is only informative, and
     * its implementation is left to the client.
     */
    get_single_account(): boolean
    /**
     * Check whether `domain` is supported by this provider, by matching it with the
     * regex returned by ag_provider_get_domains_regex().
     * If the provider does not define a regular expression to match the supported
     * domains, this function will return %FALSE.
     */
    match_domain(domain: string): boolean
    /**
     * Adds a reference to `provider`.
     */
    ref(): Provider
    /**
     * Used to unreference the #AgProvider structure.
     */
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the list `list`.
     */
    static list_free(list: Provider[]): void
}
class Service {
    /* Methods of Accounts-1.0.Accounts.Service */
    /**
     * Gets the description of the #AgService.
     */
    get_description(): string
    /**
     * Gets the display name of the #AgService.
     */
    get_display_name(): string
    /**
     * Gets the contents of the XML service file.  The buffer returned in `contents`
     * should not be modified or freed, and is guaranteed to be valid as long as
     * `service` is referenced. If `data_offset` is not %NULL, it is set to the
     * offset where the &lt;type_data&gt; element can be found.
     * If some error occurs, `contents` is set to %NULL.
     */
    get_file_contents(contents: string, data_offset: number): void
    /**
     * Gets the translation domain of the #AgService.
     */
    get_i18n_domain(): string
    /**
     * Gets the icon name of the #AgService.
     */
    get_icon_name(): string
    /**
     * Gets the name of the #AgService.
     */
    get_name(): string
    /**
     * Gets the provider name of the #AgService.
     */
    get_provider(): string
    /**
     * Gets the service type of the #AgService.
     */
    get_service_type(): string
    /**
     * Get list of tags specified for the #AgService. If the service has not
     * defined tags, tags from the service type will be returned.
     */
    get_tags(): string[]
    /**
     * Checks if the #AgService has the requested tag.
     */
    has_tag(tag: string): boolean
    /**
     * Adds a reference to `service`.
     */
    ref(): Service
    /**
     * Used to unreference the #AgService structure.
     */
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the list `list`.
     */
    static list_free(list: Service[]): void
}
class ServiceType {
    /* Methods of Accounts-1.0.Accounts.ServiceType */
    /**
     * Get the description of the #AgServiceType.
     */
    get_description(): string
    /**
     * Get the display name of the #AgServiceType.
     */
    get_display_name(): string
    /**
     * Gets the contents of the XML service type file.  The buffer returned in
     * `contents` should not be modified or freed, and is guaranteed to be valid as
     * long as `service_type` is referenced.
     * If some error occurs, `contents` is set to %NULL.
     */
    get_file_contents(contents: string, len: number): void
    /**
     * Get the translation domain of the #AgServiceType.
     */
    get_i18n_domain(): string
    /**
     * Get the icon name of the #AgServiceType.
     */
    get_icon_name(): string
    /**
     * Get the name of the #AgServiceType.
     */
    get_name(): string
    /**
     * Get list of tags specified for the #AgServiceType.
     */
    get_tags(): string[]
    /**
     * Check if the #AgServiceType has the requested tag.
     */
    has_tag(tag: string): boolean
    /**
     * Adds a reference to `service_type`.
     */
    ref(): ServiceType
    /**
     * Used to unreference the #AgServiceType structure.
     */
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the list `list`.
     */
    static list_free(list: ServiceType[]): void
}
    type AccountId = number
}
export default Accounts;