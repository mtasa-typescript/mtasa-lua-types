/// <reference types="typescript-to-lua/language-extensions" />
import { Element } from "./Element";

/** @noSelfInFile */

export class Object extends Element {
    /**
     * @see {@link getObjectScale}
     */
    scale: LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getObjectScale}
     */
    getScale(): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link moveObject}
     */
    move(
        time: number,
        targetx: number,
        targety: number,
        targetz: number,
        moverx: number,
        movery: number,
        moverz: number,
        strEasingType: string,
        fEasingPeriod: number,
        fEasingAmplitude: number,
        fEasingOvershoot: number,
    ): boolean;

    /**
     * @see {@link setObjectScale}
     */
    setScale(scale: number, scaleY?: number, scaleZ?: number): boolean;

    /**
     * @see {@link stopObject}
     */
    stop(): boolean;
}
