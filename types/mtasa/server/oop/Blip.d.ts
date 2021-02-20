/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

export class Blip {
    /**
     * @see {@link getBlipIcon}
     */
    icon: number;
    /**
     * @see {@link getBlipOrdering}
     */
    ordering: number;
    /**
     * @see {@link getBlipSize}
     */
    size: number;
    /**
     * @see {@link getBlipVisibleDistance}
     */
    visibleDistance: number;

    /**
     * @see {@link getBlipColor}
     */
    getColor(): LuaMultiReturn<[number, number, number, number]>;

    /**
     * @see {@link getBlipIcon}
     */
    getIcon(): number;

    /**
     * @see {@link getBlipOrdering}
     */
    getOrdering(): number;

    /**
     * @see {@link getBlipSize}
     */
    getSize(): number;

    /**
     * @see {@link getBlipVisibleDistance}
     */
    getVisibleDistance(): number;

    /**
     * @see {@link setBlipColor}
     */
    setColor(red: number, green: number, blue: number, alpha: number): boolean;

    /**
     * @see {@link setBlipIcon}
     */
    setIcon(icon: number): boolean;

    /**
     * @see {@link setBlipOrdering}
     */
    setOrdering(ordering: number): boolean;

    /**
     * @see {@link setBlipSize}
     */
    setSize(iconSize: number): boolean;

    /**
     * @see {@link setBlipVisibleDistance}
     */
    setVisibleDistance(theDistance: number): boolean;
}
