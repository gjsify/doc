/* valum.vapi generated by valac 0.32.1, do not modify. */

/**
 * Valum is a web micro-framework written in Vala.
 */
[CCode (gir_namespace = "Valum", gir_version = "0.2")]
namespace Valum {
	/**
	 * Route provides a {@link Valum.MatcherCallback} and {@link Valum.HandlerCallback} to
	 * respectively match and handle a {@link VSGI.Request} and
	 * {@link VSGI.Response}.
	 *
	 * Route can be declared using the rule system, a regular expression or an
	 * arbitrary request-matching callback.
	 *
	 * @since 0.0.1
	 */
	[CCode (cheader_filename = "valum.h")]
	public class Route : GLib.Object {
		/**
		 * Apply the handler on the request and response.
		 *
		 * @since 0.0.1
		 */
		public Valum.HandlerCallback fire;
		/**
		 * Matches the given request and populate its parameters on success.
		 *
		 * @since 0.0.1
		 */
		public Valum.MatcherCallback match;
		/**
		 * Create a Route using a custom matcher.
		 *
		 * This is the lowest-level mean to create a Route instance.
		 *
		 * The matcher should take in consideration the {@link Router.scopes}
		 * stack if it has to deal with the {@link VSGI.Request.uri}.
		 *
		 * @since 0.1
		 */
		public Route (Valum.Router router, string? method, owned Valum.MatcherCallback matcher, owned Valum.HandlerCallback callback);
		/**
		 * Create a Route for a given callback using a {@link GLib.Regex}.
		 *
		 * The providen regular expression pattern will be extracted, scoped,
		 * anchored and optimized. This means you must not anchor the regex
		 * yourself with '^' and '$' characters and providing a pre-optimized
		 * {@link GLib.Regex} is useless.
		 *
		 * Like for the rules, the regular expression starts matching after the
		 * scopes and the leading '/' character.
		 *
		 * @since 0.1
		 */
		public Route.from_regex (Valum.Router router, string? method, GLib.Regex regex, owned Valum.HandlerCallback callback) throws GLib.RegexError;
		/**
		 * Create a Route for a given callback from a rule.
		 *
		 * Rule are scoped from the {@link Router.scope} fragment stack and
		 * compiled down to {@link GLib.Regex}.
		 *
		 * Rule start matching after the first '/' character of the request URI
		 * path.
		 *
		 * @since 0.0.1
		 *
		 * @param rule compiled down ot a regular expression and captures all
		 *             paths if set to null
		 */
		public Route.from_rule (Valum.Router router, string? method, string? rule, owned Valum.HandlerCallback callback) throws GLib.RegexError;
		/**
		 * Pushes the handler in the {@link Router} queue to produce a sequence
		 * of callbacks that reuses the same matcher.
		 */
		public Valum.Route then (owned Valum.HandlerCallback handler);
		/**
		 * HTTP method this is matching or 'null' if it does apply.
		 *
		 * @since 0.2
		 */
		public string? method { get; construct; }
		/**
		 * Router that declared this route.
		 *
		 * This is used to hold parameters types and have an access to the
		 * scope stack.
		 *
		 * @since 0.1
		 */
		public Valum.Router router { get; construct; }
	}
	/**
	 * Dispatches incoming requests to the appropriate registered handler.
	 *
	 * @since 0.0.1
	 */
	[CCode (cheader_filename = "valum.h")]
	public class Router : GLib.Object {
		/**
		 * Stack of scopes.
		 *
		 * @since 0.1
		 */
		public GLib.Queue<string> scopes;
		/**
		 * Registered types used to extract {@link VSGI.Request} parameters.
		 *
		 * @since 0.1
		 */
		public GLib.HashTable<string,GLib.Regex> types;
		/**
		 * @since 0.0.1
		 */
		public Router ();
		/**
		 * Bind a callback to all HTTP methods defined in {@link VSGI.Request.METHODS}.
		 *
		 * @since 0.1
		 */
		public Valum.Route[] all (string? rule, owned Valum.HandlerCallback cb) throws GLib.RegexError;
		/**
		 * @since 0.0.1
		 */
		public new Valum.Route connect (string? rule, owned Valum.HandlerCallback cb) throws GLib.RegexError;
		/**
		 * @since 0.0.1
		 */
		public Valum.Route @delete (string? rule, owned Valum.HandlerCallback cb) throws GLib.RegexError;
		/**
		 * @since 0.0.1
		 */
		public new Valum.Route @get (string? rule, owned Valum.HandlerCallback cb) throws GLib.RegexError;
		/**
		 * Perform the routing of the request by calling {@link Valum.Router.invoke}.
		 *
		 * If nothing matches the request, look for alternate HTTP methods and
		 * raise a {@link Valum.ClientError.METHOD_NOT_ALLOWED}, otherwise
		 * raise a {@link Valum.ClientError.NOT_FOUND} exception.
		 *
		 * @since 0.1
		 */
		public void handle (VSGI.Request req, VSGI.Response res);
		/**
		 * @since 0.0.1
		 */
		public Valum.Route head (string? rule, owned Valum.HandlerCallback cb) throws GLib.RegexError;
		/**
		 * Invoke the {@link NextCallback} in the routing context.
		 *
		 * This is particularly useful to invoke next in an async callback when
		 * the routing context is lost.
		 *
		 * @since 0.2
		 *
		 * @param req   request for the context
		 * @param res   response for the context
		 * @param next  callback to be invoked in the routing context
		 */
		public void invoke (VSGI.Request req, VSGI.Response res, owned Valum.NextCallback next);
		/**
		 * Bind a callback with a custom HTTP method and a matcher callback.
		 *
		 * @since 0.1
		 *
		 * @param method  HTTP method or 'null' for any
		 * @param matcher callback used to match the request
		 * @param cb      callback used to process the pair of request and response.
		 */
		public Valum.Route matcher (string? method, owned Valum.MatcherCallback matcher, owned Valum.HandlerCallback cb);
		/**
		 * Bind a callback with a custom method.
		 *
		 * Useful if you need to support a non-standard HTTP method, otherwise you
		 * should use the predefined methods.
		 *
		 * @since 0.1
		 *
		 * @param method HTTP method
		 * @param rule   rule
		 * @param cb     callback used to process the pair of request and response.
		 */
		public Valum.Route method (string? method, string? rule, owned Valum.HandlerCallback cb) throws GLib.RegexError;
		/**
		 * Bind a callback to a list of HTTP methods.
		 *
		 * @since 0.1
		 *
		 * @param methods methods to which the callback will be bound
		 * @param rule    rule
		 */
		public Valum.Route[] methods (string[] methods, string? rule, owned Valum.HandlerCallback cb) throws GLib.RegexError;
		/**
		 * @since 0.0.1
		 */
		public Valum.Route options (string? rule, owned Valum.HandlerCallback cb) throws GLib.RegexError;
		/**
		 * [[http://tools.ietf.org/html/rfc5789]]
		 *
		 * @since 0.0.1
		 */
		public Valum.Route patch (string? rule, owned Valum.HandlerCallback cb) throws GLib.RegexError;
		/**
		 * @since 0.0.1
		 */
		public Valum.Route post (string? rule, owned Valum.HandlerCallback cb) throws GLib.RegexError;
		/**
		 * @since 0.0.1
		 */
		public Valum.Route put (string? rule, owned Valum.HandlerCallback cb) throws GLib.RegexError;
		/**
		 * Bind a callback with a custom HTTP method and regular expression.
		 *
		 * The regular expression will be scoped, anchored and optimized by the
		 * {@link Route} automatically.
		 *
		 * @since 0.1
		 *
		 * @param method HTTP method or 'null' for any
		 * @param regex  regular expression matching the request path.
		 * @param cb     callback used to process the pair of request and response.
		 */
		public Valum.Route regex (string? method, GLib.Regex regex, owned Valum.HandlerCallback cb) throws GLib.RegexError;
		/**
		 * Add a fragment to the scope stack and nest a router in this new
		 * environment.
		 *
		 * Scoping will only work with rules and regular expressions.
		 *
		 * @since 0.0.1
		 *
		 * @param fragment fragment to push on the scopes stack
		 * @param loader   nests a router in the new scoped environment
		 */
		public void scope (string fragment, owned Valum.LoaderCallback loader);
		/**
		 * Bind a callback to handle a particular thrown status code.
		 *
		 * This only applies to status thrown by one of {@link Redirection}
		 * {@link ClientError} or {@link ServerError} domains.
		 *
		 * @param status status handled
		 * @param cb     callback used to handle the status
		 */
		public void status (uint status, owned Valum.HandlerCallback cb);
		/**
		 * @since 0.0.1
		 */
		public Valum.Route trace (string? rule, owned Valum.HandlerCallback cb) throws GLib.RegexError;
	}
	/**
	 * Client errors corresponding to the 4xx HTTP status codes.
	 *
	 * @see   Soup.Status
	 * @since 0.1
	 */
	[CCode (cheader_filename = "valum.h")]
	public errordomain ClientError {
		BAD_REQUEST,
		UNAUTHORIZED,
		PAYMENT_REQUIRED,
		FORBIDDEN,
		NOT_FOUND,
		/**
		 * The error message is used for the 'Allow' header value.
		 */
		METHOD_NOT_ALLOWED,
		NOT_ACCEPTABLE,
		PROXY_AUTHENTICATION_REQUIRED,
		PROXY_UNAUTHORIZED,
		REQUEST_TIMEOUT,
		CONFLICT,
		GONE,
		LENGTH_REQUIRED,
		PRECONDITION_FAILED,
		REQUEST_ENTITY_TOO_LARGE,
		REQUEST_URI_TOO_LONG,
		UNSUPPORTED_MEDIA_TYPE,
		REQUESTED_RANGE_NOT_SATISFIABLE,
		INVALID_RANGE,
		EXPECTATION_FAILED,
		IM_A_TEAPOT,
		AUTHENTICATION_TIMEOUT,
		MISDIRECTED_REQUEST,
		UNPROCESSABLE_ENTITY,
		LOCKED,
		FAILED_DEPENDENCY,
		/**
		 * The error message is used for the 'Upgrade' header.
		 */
		UPGRADE_REQUIRED,
		PRECONDITION_REQUIRED,
		TOO_MANY_REQUESTS,
		REQUEST_HEADER_FIELDS_TOO_LARGE
	}
	/**
	 * Informational status corresponding to the 1xx HTTP status codes.
	 *
	 * @see   Soup.Status
	 * @since 0.1
	 */
	[CCode (cheader_filename = "valum.h")]
	public errordomain Informational {
		CONTINUE,
		/**
		 * The error message will be used for the 'Upgrade' header.
		 */
		SWITCHING_PROTOCOLS,
		PROCESSING
	}
	/**
	 * Redirection corresponding to the 3xx HTTP status codes.
	 *
	 * The error message will be used in the 'Location' header.
	 *
	 * @see   Soup.Status
	 * @since 0.1
	 */
	[CCode (cheader_filename = "valum.h")]
	public errordomain Redirection {
		MULTIPLE_CHOICES,
		MOVED_PERMANENTLY,
		FOUND,
		MOVED_TEMPORARILY,
		SEE_OTHER,
		NOT_MODIFIED,
		USE_PROXY,
		NOT_APPEARING_IN_THIS_PROTOCOL,
		TEMPORARY_REDIRECT,
		PERMANENT_REDIRECT
	}
	/**
	 * Server errors corresponding to the 5xx HTTP status codes.
	 *
	 * @see   Soup.Status
	 * @since 0.1
	 */
	[CCode (cheader_filename = "valum.h")]
	public errordomain ServerError {
		INTERNAL_SERVER_ERROR,
		NOT_IMPLEMENTED,
		BAD_GATEWAY,
		SERVICE_UNAVAILABLE,
		GATEWAY_TIMEOUT,
		HTTP_VERSION_NOT_SUPPORTED,
		VARIANT_ALSO_NEGOTIATES,
		INSUFFICIENT_STORAGE,
		LOOP_DETECTED,
		NOT_EXTENDED,
		NETWORK_AUTHENTICATION_REQUIRED
	}
	/**
	 * Success corresponding to the 2xx HTTP status codes.
	 *
	 * @see   Soup.Status
	 * @since 0.1
	 */
	[CCode (cheader_filename = "valum.h")]
	public errordomain Success {
		OK,
		/**
		 * The error message will be used for the 'Location' header which
		 * should point to the newly created resource.
		 */
		CREATED,
		ACCEPTED,
		NON_AUTHORITATIVE,
		NO_CONTENT,
		RESET_CONTENT,
		/**
		 * The error message will be used for the 'Range' header.
		 */
		PARTIAL_CONTENT,
		MULTI_STATUS,
		ALREADY_REPORTED,
		IM_USED
	}
	/**
	 * Handle a pair of request and response.
	 *
	 * @since 0.0.1
	 *
	 * @throws Informational trigger a 1xx informational status
	 * @throws Success       trigger a 2xx success status
	 * @throws Redirection   perform a 3xx HTTP redirection
	 * @throws ClientError   trigger a 4xx client error
	 * @throws ServerError   trigger a 5xx server error
	 * @throws Error         any other error which will be handled as a {@link Valum.ServerError.INTERNAL_SERVER_ERROR}
	 *
	 * @param req   request being handled
	 * @param res   response to send back to the requester
	 * @param next  keep routing
	 * @param stack routing stack as altered by the preceeding next invocation
	 *              or initialized by the first {@link Valum.MatcherCallback}
	 */
	[CCode (cheader_filename = "valum.h")]
	public delegate void HandlerCallback (VSGI.Request req, VSGI.Response res, Valum.NextCallback next, GLib.Queue<GLib.Value?> stack) throws Valum.Informational, Valum.Success, Valum.Redirection, Valum.ClientError, Valum.ServerError, GLib.Error;
	/**
	 * Loads {@link Route} instances on a provided router.
	 *
	 * This is used for scoping and as a general definition for callback
	 * taking a {@link Router} as parameter like modules.
	 *
	 * @since 0.0.1
	 */
	[CCode (cheader_filename = "valum.h")]
	public delegate void LoaderCallback (Valum.Router router);
	/**
	 * Match the request and populate the {@link VSGI.Request.params}.
	 *
	 * It is important for a matcher to populate the
	 * {@link VSGI.Request.params} only if it matches the request.
	 *
	 * @since 0.1
	 *
	 * @param req           request being matched
	 * @param initial_stack destination for the initial routing stack
	 */
	[CCode (cheader_filename = "valum.h")]
	public delegate bool MatcherCallback (VSGI.Request req, GLib.Queue<GLib.Value?> initial_stack);
	/**
	 * Continuation passed in a {@link Valum.HandlerCallback} to *keep routing*
	 * both {@link VSGI.Request} and {@link VSGI.Response}.
	 *
	 * It is also used as a generic continuation that propagates a thrown status
	 * code or invoke processing in the {@link Valum.Router} context.
	 *
	 * The passed {@link VSGI.Request} and {@link VSGI.Response} objects can be
	 * optionally filtered using {@link VSGI.FilteredRequest} and {@link VSGI.FilteredResponse}.
	 *
	 * @since 0.1
	 *
	 * @param req request for the next handler
	 * @param res response for the next handler
	 */
	[CCode (cheader_filename = "valum.h")]
	public delegate void NextCallback (VSGI.Request req, VSGI.Response res) throws Valum.Informational, Valum.Success, Valum.Redirection, Valum.ClientError, Valum.ServerError, GLib.Error;
}
