/* libvirt-glib-1.0.vapi generated by vapigen, do not modify. */

[CCode (cprefix = "GVir", gir_namespace = "LibvirtGLib", gir_version = "1.0", lower_case_cprefix = "gvir_")]
namespace GVir {
	[CCode (cheader_filename = "libvirt-glib/libvirt-glib.h")]
	public static GLib.Error error_new_literal (GLib.Quark domain, int code, string message);
	[CCode (cheader_filename = "libvirt-glib/libvirt-glib.h")]
	public static void event_register ();
	[CCode (cheader_filename = "libvirt-glib/libvirt-glib.h")]
	public static void init ([CCode (array_length_cname = "argc", array_length_pos = 0.5)] ref unowned string[]? argv);
	[CCode (cheader_filename = "libvirt-glib/libvirt-glib.h")]
	public static bool init_check ([CCode (array_length_cname = "argc", array_length_pos = 0.5)] ref unowned string[]? argv) throws GLib.Error;
	[CCode (cheader_filename = "libvirt-glib/libvirt-glib.h")]
	public static void set_error_literal (GLib.Error error, GLib.Quark domain, int code, string message);
}
