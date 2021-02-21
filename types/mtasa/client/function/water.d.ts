/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Water } from 'types/mtasa/client/structure';

/**
 * This function allows you to retrieve the water level from a certain location. The water level is
 * 0 in most places though it can vary (e.g. it's higher near the dam).
 * @see {@link https://wiki.multitheftauto.com/wiki/getWaterLevel|MTASA Wiki}
 * @param bCheckWaves Include the water levels of waves in the ocean, lakes and ...
 * @default false
 * @return Returns an ''integer'' of the water level if the [[localPlayer]]/position is near the
 * water (-3 to 20 on the Z coordinate) else ''false'' if there's no water near the
 * [[localPlayer]]/position.
 */
export function getWaterLevel(posX: number, posY: number, posZ: number, bCheckWaves?: boolean): number;

/**
 * This function determines whether [[water]] is drawn last in the rendering order.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/isWaterDrawnLast|MTASA Wiki}
 * @return Returns ''true'' if water is drawn last in the rendering order, ''false'' otherwise.
 */
export function isWaterDrawnLast(): boolean;

/**
 * This function changes the [[water]] rendering order.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setWaterDrawnLast|MTASA Wiki}
 * @param bEnabled : A boolean value determining whether water should be drawn last.
 * @return Returns ''true'' if the rendering order was changed successfully, ''false'' otherwise.
 */
export function setWaterDrawnLast(bEnabled: boolean): boolean;

/**
 * Creates an area of [[water]].
 * The largest possible size of a water area is 5996&#0215;5996. Also be aware that the function
 * will change all x and y coordinates you specify into even integer numbers if necessary: this is
 * because of a limitation of San Andreas.
 * You are able to give the water a shallow water effect, which practically changes the water
 * invisible to the eye. However, all elements still work the same way as without the shallow effect -
 * allowing swimming, diving, vehicles to sink, etc.
 * @see {@link https://wiki.multitheftauto.com/wiki/createWater|MTASA Wiki}
 * @param bShallow gives the water a shallow water effect.
 * @default false
 * @return Returns a water element if successful, ''false'' otherwise. The water element can be
 * repositioned with [[setElementPosition]] and destroyed with [[destroyElement]].
 */
export function createWater(
    x1: number,
    y1: number,
    z1: number,
    x2: number,
    y2: number,
    z2: number,
    x3: number,
    y3: number,
    z3: number,
    x4?: number,
    y4?: number,
    z4?: number,
    bShallow?: boolean,
): Water;

/**
 * This function returns the water color of the GTA world.
 * '''Note:''' The server can only return the water color, if it has actually been set by script.
 * @see {@link https://wiki.multitheftauto.com/wiki/getWaterColor|MTASA Wiki}
 * @return Returns 4 [[int|ints]], indicating the color of the water. (RGBA)
 */
export function getWaterColor(): LuaMultiReturn<[number, number, number, number]>;

/**
 * Gets the world position of a vertex (i.e. corner) of a [[water]] area. Each water area is either
 * a triangle or quad (rectangle) so each has 3 or 4 corners.
 * @see {@link https://wiki.multitheftauto.com/wiki/getWaterVertexPosition|MTASA Wiki}
 * @param theWater the water element to get the vertex of
 * @param vertexIndex the index of the vertex whose position to get. Values range from 1 to 4 for a
 * water quad, or 1 to 3 for a triangle.
 * @return Returns the x, y and z coordinates of the specified vertex if successful, ''false''
 * otherwise.
 */
export function getWaterVertexPosition(theWater: Water, vertexIndex: number): LuaMultiReturn<[number, number, number]>;

/**
 * This function returns the current wave height.
 * @see {@link https://wiki.multitheftauto.com/wiki/getWaveHeight|MTASA Wiki}
 * @return Returns the height as a [[float]], ''false'' otherwise.
 */
export function getWaveHeight(): number;

/**
 * This function reset the water color of the GTA world to default.
 * @see {@link https://wiki.multitheftauto.com/wiki/resetWaterColor|MTASA Wiki}
 * @return Returns ''true'' if water color was reset correctly, ''false'' otherwise.
 */
export function resetWaterColor(): boolean;

/**
 * This function resets the water of the GTA world back to its default level. [[water|Water
 * elements]] are not affected.
 * @see {@link https://wiki.multitheftauto.com/wiki/resetWaterLevel|MTASA Wiki}
 * @return Returns ''true'' if water level was reset correctly, ''false'' otherwise.
 */
export function resetWaterLevel(): boolean;

/**
 * This function changes the water color of the GTA world.
 * @see {@link https://wiki.multitheftauto.com/wiki/setWaterColor|MTASA Wiki}
 * @param red The red value of the water, from 0 to 255.
 * @param green The green value of the water, from 0 to 255.
 * @param blue The blue value of the water, from 0 to 255.  {{OptionalArg}}
 * @param alpha The alpha (visibility) value of the water, from 0 to 255. Defaults to 200 if not
 * declared.
 * @default 200
 * @return Returns ''true'' if water color was set correctly, ''false'' if invalid values were
 * passed.
 */
export function setWaterColor(red: number, green: number, blue: number, alpha: number): boolean;

/**
 * Sets the world position of a corner point of a water area.
 * @see {@link https://wiki.multitheftauto.com/wiki/setWaterVertexPosition|MTASA Wiki}
 * @param theWater the water element of which to change a vertex.
 * @param vertexIndex the index of the vertex to move. Values range from 1 to 4 for water quads,
 * and 1 to 3 for triangles.
 * @param x the X coordinate to set for the vertex.
 * @param y the Y coordinate to set for the vertex.
 * @param z the Z coordinate to set for the vertex.
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function setWaterVertexPosition(theWater: Water, vertexIndex: number, x: number, y: number, z: number): boolean;

/**
 * This function sets the wave height to the desired value, the default is 0.
 * @see {@link https://wiki.multitheftauto.com/wiki/setWaveHeight|MTASA Wiki}
 * @param height A float between 0 and 100.
 * @return Returns a boolean value ''true'' or ''false'' that tells you if it was successful or not.
 */
export function setWaveHeight(height: number): boolean;
