/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

export class ColShape {
    /**
     * @see {@link getColShapeType}
     */
    shapeType: number;
    /**
     * @see {@link getElementsWithinColShape}
     */
    elementsWithin: LuaTable;

    /**
     * @see {@link addColPolygonPoint}
     */
    addPoint(fX: number, fY: number, index?: number): boolean;

    /**
     * @see {@link getColPolygonHeight}
     */
    getHeight(): LuaMultiReturn<[number, number]>;

    /**
     * @see {@link getColPolygonPointPosition}
     */
    getPointPosition(index: number): LuaMultiReturn<[number, number]>;

    /**
     * @see {@link getColShapeType}
     */
    getShapeType(): number;

    /**
     * @see {@link getColShapeRadius}
     */
    getRadius(): number;

    /**
     * @see {@link getColShapeSize}
     */
    getSize(): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getElementsWithinColShape}
     */
    getElementsWithin(elemType?: string): LuaTable;

    /**
     * @see {@link removeColPolygonPoint}
     */
    removePoint(index: number): boolean;

    /**
     * @see {@link setColPolygonHeight}
     */
    setHeight(floor: number, ceil: number): boolean;

    /**
     * @see {@link setColPolygonPointPosition}
     */
    setPointPosition(index: number, fX: number, fY: number): boolean;

    /**
     * @see {@link setColShapeRadius}
     */
    setRadius(radius: number): boolean;

    /**
     * @see {@link setColShapeSize}
     */
    setSize(width: number, depth: number, height: number): boolean;
}
