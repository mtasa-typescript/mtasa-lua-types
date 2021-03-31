/// <reference types="typescript-to-lua/language-extensions" />
import { Element } from "./Element";

/** @noSelfInFile */

export class RadarArea extends Element {
    /**
     * @see {@link isRadarAreaFlashing}
     */
    flashing: boolean;

    /**
     * @see {@link getRadarAreaColor}
     */
    getColor(): LuaMultiReturn<[number, number, number, number]>;

    /**
     * @see {@link getRadarAreaSize}
     */
    getSize(): LuaMultiReturn<[number, number]>;

    /**
     * @see {@link isInsideRadarArea}
     */
    isInside(posX: number, posY: number): boolean;

    /**
     * @see {@link isRadarAreaFlashing}
     */
    isFlashing(): boolean;

    /**
     * @see {@link setRadarAreaFlashing}
     */
    setFlashing(flash: boolean): boolean;
}
