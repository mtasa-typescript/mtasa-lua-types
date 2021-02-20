/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

export class Effect {
    /**
     * @see {@link getEffectDensity}
     */
    density: number;
    /**
     * @see {@link getEffectSpeed}
     */
    speed: number;

    /**
     * @see {@link getEffectDensity}
     */
    getDensity(): number;

    /**
     * @see {@link getEffectSpeed}
     */
    getSpeed(): number;

    /**
     * @see {@link setEffectDensity}
     */
    setDensity(density: number): boolean;

    /**
     * @see {@link setEffectSpeed}
     */
    setSpeed(speed: number): boolean;
}
