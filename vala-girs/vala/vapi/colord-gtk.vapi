/* colord-gtk.vapi generated by vapigen, do not modify. */

[CCode (cprefix = "Cd", gir_namespace = "ColordGtk", gir_version = "1.0", lower_case_cprefix = "cd_")]
namespace Cd {
	[CCode (cheader_filename = "colord-gtk.h", type_id = "cd_sample_widget_get_type ()")]
	public class SampleWidget : Gtk.DrawingArea, Atk.Implementor, Gtk.Buildable {
		[CCode (has_construct_function = false, type = "GtkWidget*")]
		[Version (since = "0.1.24")]
		public SampleWidget ();
		[Version (since = "0.1.24")]
		public void set_color (Cd.ColorRGB color);
		[NoAccessorMethod]
		public Cd.ColorRGB color { owned get; set; }
	}
	[CCode (cheader_filename = "colord-gtk.h", type_id = "cd_sample_window_get_type ()")]
	public class SampleWindow : Gtk.Window, Atk.Implementor, Gtk.Buildable {
		[CCode (has_construct_function = false, type = "GtkWindow*")]
		[Version (since = "0.1.22")]
		public SampleWindow ();
		[Version (since = "0.1.22")]
		public void set_color (Cd.ColorRGB color);
		[Version (since = "0.1.22")]
		public void set_fraction (double fraction);
	}
	[CCode (cheader_filename = "colord-gtk.h", type_id = "cd_window_get_type ()")]
	public class Window : GLib.Object {
		[CCode (has_construct_function = false)]
		[Version (since = "0.1.20")]
		public Window ();
		[Version (since = "0.1.20")]
		public static GLib.Quark error_quark ();
		[Version (since = "0.1.20")]
		public unowned Cd.Profile get_last_profile ();
		[Version (since = "0.1.20")]
		public async Cd.Profile get_profile (Gtk.Widget widget, GLib.Cancellable? cancellable) throws GLib.Error;
		[Version (since = "0.1.20")]
		public Cd.Profile get_profile_sync (Gtk.Widget widget, GLib.Cancellable? cancellable = null) throws GLib.Error;
		[NoAccessorMethod]
		public string Profile { owned get; }
		[Version (since = "0.1.20")]
		public virtual signal void changed (Cd.Profile profile);
	}
	[CCode (cheader_filename = "colord-gtk.h", cprefix = "CD_WINDOW_ERROR_", has_type_id = false)]
	public enum WindowError {
		FAILED,
		LAST
	}
	[CCode (cheader_filename = "colord-gtk.h", cname = "CD_GTK_MAJOR_VERSION")]
	public const int GTK_MAJOR_VERSION;
	[CCode (cheader_filename = "colord-gtk.h", cname = "CD_GTK_MICRO_VERSION")]
	public const int GTK_MICRO_VERSION;
	[CCode (cheader_filename = "colord-gtk.h", cname = "CD_GTK_MINOR_VERSION")]
	public const int GTK_MINOR_VERSION;
}
