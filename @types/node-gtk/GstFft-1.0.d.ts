/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstFft-1.0
 */

import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstFft {

enum FFTWindow {
    RECTANGULAR,
    HAMMING,
    HANN,
    BARTLETT,
    BLACKMAN,
}
function fftNextFastLength(n: number): number
class FFTF32 {
    /* Methods of GstFft-1.0.GstFft.FFTF32 */
    fft(timedata: number, freqdata: FFTF32Complex): void
    free(): void
    inverseFft(freqdata: FFTF32Complex, timedata: number): void
    window(timedata: number, window: FFTWindow): void
    static name: string
}
class FFTF32Complex {
    /* Fields of GstFft-1.0.GstFft.FFTF32Complex */
    readonly r: number
    readonly i: number
    static name: string
}
class FFTF64 {
    /* Methods of GstFft-1.0.GstFft.FFTF64 */
    fft(timedata: number, freqdata: FFTF64Complex): void
    free(): void
    inverseFft(freqdata: FFTF64Complex, timedata: number): void
    window(timedata: number, window: FFTWindow): void
    static name: string
}
class FFTF64Complex {
    /* Fields of GstFft-1.0.GstFft.FFTF64Complex */
    readonly r: number
    readonly i: number
    static name: string
}
class FFTS16 {
    /* Methods of GstFft-1.0.GstFft.FFTS16 */
    fft(timedata: number, freqdata: FFTS16Complex): void
    free(): void
    inverseFft(freqdata: FFTS16Complex, timedata: number): void
    window(timedata: number, window: FFTWindow): void
    static name: string
}
class FFTS16Complex {
    /* Fields of GstFft-1.0.GstFft.FFTS16Complex */
    readonly r: number
    readonly i: number
    static name: string
}
class FFTS32 {
    /* Methods of GstFft-1.0.GstFft.FFTS32 */
    fft(timedata: number, freqdata: FFTS32Complex): void
    free(): void
    inverseFft(freqdata: FFTS32Complex, timedata: number): void
    window(timedata: number, window: FFTWindow): void
    static name: string
}
class FFTS32Complex {
    /* Fields of GstFft-1.0.GstFft.FFTS32Complex */
    readonly r: number
    readonly i: number
    static name: string
}
}
export default GstFft;