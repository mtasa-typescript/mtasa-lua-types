/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

export class RadarArea {
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
