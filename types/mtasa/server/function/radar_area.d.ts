/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, RadarArea } from '../structure';

/**
 * This function can be used to create custom radar areas on the radar.
 * @see {@link https://wiki.multitheftauto.com/wiki/createRadarArea|MTASA Wiki}
 * @param startPosX A float representing the origin x position of the radar area.
 * @param startPosY A float representing the origin y position of the radar area.
 * @param sizeX A float representing the width of the radar area.
 * @param sizeY A float representing the height of the radar area.  {{OptionalArg}}
 * @param r An integer representing the amount of red in the color.  Maximum value is 255
 * @default 255
 * @param g An integer representing the amount of green in the color.  Maximum value is 255
 * @default 0
 * @param b An integer representing the amount of blue in the color.  Maximum value is 255
 * @default 0
 * @param a An integer representing the amount of alpha in the color.  This allows setting the
 * transparency of the radar area.  255 is opaque and 0 is transparent.
 * @default 255
 * @param visibleTo An element that you wish to restrict the visibility of the radar area to.
 * (Server function only)
 * @default root
 * @return
 */
export function createRadarArea(
    startPosX: number,
    startPosY: number,
    sizeX: number,
    sizeY: number,
    r: number,
    g: number,
    b: number,
    a: number,
    visibleTo: Element,
): RadarArea;

/**
 * This function can be used to retrieve the current color of a [[radararea|radar area]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getRadarAreaColor|MTASA Wiki}
 * @param theRadararea The radararea|radar area you wish to retrieve the colour of.
 * @return Returns four integers in RGBA format (''red'', ''green'', ''blue'', ''alpha''), with a
 * maximum value of 255 for each.  Alpha decides transparency where 255 is opaque and 0 is transparent.
 * Returns ''false'' if the radararea is invalid.
 */
export function getRadarAreaColor(theRadararea: RadarArea): LuaMultiReturn<[number, number, number, number]>;

/**
 * This function is used for getting the X and Y size of an existing [[radararea|radar area]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getRadarAreaSize|MTASA Wiki}
 * @param theRadararea The radararea|radar area element whose size you wish to get.
 * @return Returns two ''floats'' indicating the X and Y length of the radar area respectively,
 * ''false'' if the radar area is invalid.
 */
export function getRadarAreaSize(theRadararea: RadarArea): LuaMultiReturn<[number, number]>;

/**
 * This function checks if a 2D position is inside a [[radararea|radar area]] or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isInsideRadarArea|MTASA Wiki}
 * @param theArea The radararea|radar area youre checking the position against.
 * @param posX The X coordinate of the position youre checking.
 * @param posY The Y coordinate of the position youre checking.
 * @return Returns ''true'' if the position is inside the radar area, ''false'' if it isn't or if
 * any parameters are invalid.
 */
export function isInsideRadarArea(theArea: RadarArea, posX: number, posY: number): boolean;

/**
 * This function allows detection of whether a radar area is flashing or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isRadarAreaFlashing|MTASA Wiki}
 * @param theRadararea The radar area you wish to check the state of flashing
 * @return Returns ''true'' if the radar area is flashing, ''false'' if it is not or if it doesn't
 * exist.
 */
export function isRadarAreaFlashing(theRadararea: RadarArea): boolean;

/**
 * Sets the color of an existing radar area.
 * @see {@link https://wiki.multitheftauto.com/wiki/setRadarAreaColor|MTASA Wiki}
 * @param theRadarArea the radararea element whose color you wish to set.
 * @param r an integer representing the amount of red in the color (0 for no red, 255 for solid red)
 * @param g an integer representing the amount of green in the color (0 for no green, 255 for solid
 * green)
 * @param b an integer representing the amount of blue in the color (0 for no blue, 255 for solid
 * blue)
 * @param a an integer representing the colors alpha (0 for transparent, 255 for opaque)
 * @return Returns ''true'' if the color was set successfully, ''false'' if the radar area doesn't
 * exist or the color arguments are improper.
 */
export function setRadarAreaColor(theRadarArea: RadarArea, r: number, g: number, b: number, a: number): boolean;

/**
 * This function makes an existing radar area flash in transparency.
 * @see {@link https://wiki.multitheftauto.com/wiki/setRadarAreaFlashing|MTASA Wiki}
 * @param theRadarArea the radararea element we want to change flashing state of.
 * @param flash a bool indicating whether the radar area should flash (true to flash, false to not
 * flash).
 * @return Returns ''true'' if the new flash state was successfully set, ''false'' if the radar
 * area doesn't exist or invalid arguments were passed.
 */
export function setRadarAreaFlashing(theRadarArea: RadarArea, flash: boolean): boolean;

/**
 * This function changes the size of an existing [[radararea|radar area]].
 * @see {@link https://wiki.multitheftauto.com/wiki/setRadarAreaSize|MTASA Wiki}
 * @param theRadararea the radararea element whose size is to be changed.
 * @param x the x length of the radar area.
 * @param y the y length of the radar area.
 * @return Returns ''true'' if the size was set successfully, ''false'' if invalid arguments are
 * passed.
 */
export function setRadarAreaSize(theRadararea: RadarArea, x: number, y: number): boolean;
