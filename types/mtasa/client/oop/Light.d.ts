/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

export class Light {
    /**
     * @see {@link getLightColor}
     */
    color: LuaMultiReturn<[number, number, number]>;
    /**
     * @see {@link getLightDirection}
     */
    direction: LuaMultiReturn<[number, number, number]>;
    /**
     * @see {@link getLightRadius}
     */
    radius: number;
    /**
     * @see {@link getLightType}
     */
    light: number;

    /**
     * @see {@link getLightColor}
     */
    getColor(): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getLightDirection}
     */
    getDirection(): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getLightRadius}
     */
    getRadius(): number;

    /**
     * @see {@link getLightType}
     */
    getType(): number;

    /**
     * @see {@link setLightColor}
     */
    setColor(r: number, g: number, b: number): boolean;

    /**
     * @see {@link setLightDirection}
     */
    setDirection(x: number, y: number, z: number): boolean;

    /**
     * @see {@link setLightRadius}
     */
    setRadius(radius: number): boolean;
}
