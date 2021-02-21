/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

export class Object {
    /**
     * @see {@link getObjectMass}
     */
    mass: number;
    /**
     * @see {@link isObjectBreakable}
     */
    breakable: boolean;
    /**
     * @see {@link getObjectScale}
     */
    scale: LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getObjectMass}
     */
    getMass(): number;

    /**
     * @see {@link isObjectBreakable}
     */
    isBreakable(): boolean;

    /**
     * @see {@link setObjectBreakable}
     */
    setBreakable(breakable: boolean): boolean;

    /**
     * @see {@link setObjectMass}
     */
    setMass(mass: number): boolean;

    /**
     * @see {@link getObjectProperty}
     */
    getProperty(property: string): string;

    /**
     * @see {@link setObjectProperty}
     */
    setProperty(property: string, value: any): boolean;

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
