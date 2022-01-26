/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GrlPls-0.2
 */

import type Grl from './Grl-0.2';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GrlPls {

function browse(source: Grl.Source, playlist: Grl.Media, keys: Grl.KeyID[], options: Grl.OperationOptions, filterFunc: FilterFunc | null, callback: Grl.SourceResultCb): number
function browseBySpec(source: Grl.Source, filterFunc: FilterFunc | null, bs: Grl.SourceBrowseSpec): void
function browseSync(source: Grl.Source, playlist: Grl.Media, keys: Grl.KeyID[], options: Grl.OperationOptions, filterFunc?: FilterFunc | null): Grl.Media[]
function fileToMedia(content: Grl.Media, file: Gio.File, info: Gio.FileInfo, handlePls: boolean, options: Grl.OperationOptions): Grl.Media
function getFileAttributes(): string
function mediaIsPlaylist(media: Grl.Media): boolean
interface FilterFunc {
    (source: Grl.Source, media: Grl.Media): Grl.Media
}
}
export default GrlPls;