/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

export class Searchlight {
    /**
     * @see {@link getSearchLightEndPosition}
     */
    endPosition: LuaMultiReturn<[number, number, number]>;
    /**
     * @see {@link getSearchLightEndRadius}
     */
    endRadius: number;
    /**
     * @see {@link getSearchLightStartPosition}
     */
    startPosition: LuaMultiReturn<[number, number, number]>;
    /**
     * @see {@link getSearchLightStartRadius}
     */
    startRadius: number;

    /**
     * @see {@link getSearchLightEndPosition}
     */
    getEndPosition(): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getSearchLightEndRadius}
     */
    getEndRadius(): number;

    /**
     * @see {@link getSearchLightStartPosition}
     */
    getStartPosition(): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getSearchLightStartRadius}
     */
    getStartRadius(): number;

    /**
     * @see {@link setSearchLightEndPosition}
     */
    setEndPosition(endX: number, endY: number, endZ: number): boolean;

    /**
     * @see {@link setSearchLightEndRadius}
     */
    setEndRadius(endRadius: number): boolean;

    /**
     * @see {@link setSearchLightStartPosition}
     */
    setStartPosition(startX: number, startY: number, startZ: number): boolean;

    /**
     * @see {@link setSearchLightStartRadius}
     */
    setStartRadius(startRadius: number): boolean;
}
