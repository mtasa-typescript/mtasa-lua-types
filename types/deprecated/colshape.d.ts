/**
 * 
 * 
 * 
 * 
 * 
 * 
 */

declare function createColCircle(fX: number, fY: number, radius: number): Colshape

declare function createColCuboid(fX: number, fY: number, fZ: number, fWidth: number, fDepth: number, fHeight: number): Colshape

declare function createColRectangle(fX: number, fY: number, fWidth: number, fHeight: number): Colshape

declare function createColSphere(fX: number, fY: number, fZ: number, fRadius: number): Colshape

declare function createColTube(fX: number, fY: number, fZ: number, fRadius: number, fHeight: number): Colshape

declare function createColPolygon(fX: number, fY: number, fX1: number, fY1: number, fX2: number, fY2: number, ...args: number[]): Colshape