/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

export class Water {
    /**
     * @see {@link getWaterColor}
     */
    getColor(): LuaMultiReturn<[number, number, number, number]>;

    /**
     * @see {@link getWaterVertexPosition}
     */
    getVertexPosition(theWater: Water, vertexIndex: number): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getWaveHeight}
     */
    getWaveHeight(): number;

    /**
     * @see {@link setWaterColor}
     */
    setColor(red: number, green: number, blue: number, alpha: number): boolean;

    /**
     * @see {@link setWaterVertexPosition}
     */
    setVertexPosition(theWater: Water, vertexIndex: number, x: number, y: number, z: number): boolean;

    /**
     * @see {@link setWaveHeight}
     */
    setWaveHeight(height: number): boolean;
}
