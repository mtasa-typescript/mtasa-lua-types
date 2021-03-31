/// <reference types="typescript-to-lua/language-extensions" />
import { Element } from "./Element";

/** @noSelfInFile */

export class Marker extends Element {
    /**
     * @see {@link getMarkerIcon}
     */
    icon: string;
    /**
     * @see {@link getMarkerSize}
     */
    size: number;
    /**
     * @see {@link getMarkerTarget}
     */
    target: LuaMultiReturn<[number, number, number]>;
    /**
     * @see {@link getMarkerType}
     */
    markerType: string;

    /**
     * @see {@link getMarkerColor}
     */
    getColor(): LuaMultiReturn<[number, number, number, number]>;

    /**
     * @see {@link getMarkerIcon}
     */
    getIcon(): string;

    /**
     * @see {@link getMarkerSize}
     */
    getSize(): number;

    /**
     * @see {@link getMarkerTarget}
     */
    getTarget(): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getMarkerType}
     */
    getMarkerType(): string;

    /**
     * @see {@link setMarkerColor}
     */
    setColor(r: number, g: number, b: number, a: number): boolean;

    /**
     * @see {@link setMarkerIcon}
     */
    setIcon(icon: string): boolean;

    /**
     * @see {@link setMarkerSize}
     */
    setSize(size: number): boolean;

    /**
     * @see {@link setMarkerTarget}
     */
    setTarget(x: number, y: number, z: number): boolean;

    /**
     * @see {@link setMarkerType}
     */
    setMarkerType(markerType: string): boolean;
}
