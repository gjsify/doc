/* libuhttpmock-0.0.vapi generated by vapigen-0.50, do not modify. */

[CCode (cprefix = "Uhm", gir_namespace = "Uhm", gir_version = "0.0", lower_case_cprefix = "uhm_")]
namespace Uhm {
	[CCode (cheader_filename = "uhttpmock/uhm.h", type_id = "uhm_resolver_get_type ()")]
	[Version (since = "0.1.0")]
	public class Resolver : GLib.Resolver {
		[CCode (has_construct_function = false)]
		public Resolver ();
		public bool add_A (string hostname, string addr);
		public bool add_SRV (string service, string protocol, string domain, string addr, uint16 port);
		public void reset ();
	}
	[CCode (cheader_filename = "uhttpmock/uhm.h", type_id = "uhm_server_get_type ()")]
	[Version (since = "0.1.0")]
	public class Server : GLib.Object {
		[CCode (has_construct_function = false)]
		public Server ();
		[Version (since = "0.5.0")]
		public void compare_messages_remove_filter (ulong filter_id);
		public void end_trace ();
		public static GLib.Quark error_quark ();
		[Version (since = "0.5.0")]
		public ulong filter_ignore_parameter_values ([CCode (array_length = false, array_null_terminated = true)] string[] parameter_names);
		public unowned string? get_address ();
		public bool get_enable_logging ();
		public bool get_enable_online ();
		public uint get_port ();
		public unowned Uhm.Resolver? get_resolver ();
		public unowned GLib.TlsCertificate? get_tls_certificate ();
		public unowned GLib.File? get_trace_directory ();
		public void load_trace (GLib.File trace_file, GLib.Cancellable? cancellable = null) throws GLib.Error;
		public async void load_trace_async (GLib.File trace_file, GLib.Cancellable? cancellable) throws GLib.Error;
		public void received_message_chunk (string message_chunk, int64 message_chunk_length) throws GLib.Error;
		[Version (since = "0.3.0")]
		public static void received_message_chunk_from_soup (Soup.Logger logger, Soup.LoggerLogLevel level, char direction, string data, void* user_data);
		[Version (since = "0.3.0")]
		public void received_message_chunk_with_direction (char direction, string data, int64 data_length) throws GLib.Error;
		public void run ();
		public unowned GLib.TlsCertificate set_default_tls_certificate ();
		public void set_enable_logging (bool enable_logging);
		public void set_enable_online (bool enable_online);
		[Version (since = "0.3.0")]
		public void set_expected_domain_names ([CCode (array_length = false, array_null_terminated = true)] string[]? domain_names);
		public void set_tls_certificate (GLib.TlsCertificate? tls_certificate);
		public void set_trace_directory (GLib.File? trace_directory);
		public void start_trace (string trace_name) throws GLib.Error;
		public void start_trace_full (GLib.File trace_file) throws GLib.Error;
		public void stop ();
		public void unload_trace ();
		public string address { get; }
		public bool enable_logging { get; set; }
		public bool enable_online { get; set; }
		public uint port { get; }
		public Uhm.Resolver resolver { get; }
		public GLib.TlsCertificate tls_certificate { get; set; }
		public GLib.File trace_directory { get; set; }
		public virtual signal bool compare_messages (Soup.Message expected_message, Soup.Message actual_message, Soup.ClientContext actual_client);
		public virtual signal bool handle_message (Soup.Message message, Soup.ClientContext client);
	}
	[CCode (cheader_filename = "uhttpmock/uhm.h", cprefix = "UHM_SERVER_ERROR_MESSAGE_", has_type_id = false)]
	public enum ServerError {
		[CCode (cname = "UHM_SERVER_ERROR_MESSAGE_MISMATCH")]
		SERVER_ERROR_MESSAGE_MISMATCH
	}
	[CCode (cheader_filename = "uhttpmock/uhm.h", cname = "UHM_MAJOR_VERSION")]
	[Version (since = "0.1.0")]
	public const int MAJOR_VERSION;
	[CCode (cheader_filename = "uhttpmock/uhm.h", cname = "UHM_MICRO_VERSION")]
	[Version (since = "0.1.0")]
	public const int MICRO_VERSION;
	[CCode (cheader_filename = "uhttpmock/uhm.h", cname = "UHM_MINOR_VERSION")]
	[Version (since = "0.1.0")]
	public const int MINOR_VERSION;
}
