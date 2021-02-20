/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Searchlight } from 'types/mtasa/client/structure';

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/createSearchLight|MTASA Wiki}
 * @param startX : the X coordinate where the searchlight light cone will start.
 * @param startY : the Y coordinate where the searchlight light cone will start.
 * @param startZ : the Z coordinate where the searchlight light cone will start.
 * @param endX : the X coordinate of the direction where the searchlight will point to.
 * @param endY : the Y coordinate of the direction where the searchlight will point to.
 * @param endZ : the Z coordinate of the direction where the searchlight will point to.
 * @param startRadius : the radius of the searchlights light cone in its beginning.
 * @param endRadius : the radius of the searchlights light cone in its end.  {{OptionalArg}}
 * @param renderSpot : if true, the searchlight will lighten the surface where it ends.
 * @default true
 * @return If every argument is correct and the limit of 1000 searchlights has not been reached,
 * this function returns a [[Element/Searchlight|searchlight element]]. Otherwise, it returns ''false''.
 */
export function createSearchLight(
    startX: number,
    startY: number,
    startZ: number,
    endX: number,
    endY: number,
    endZ: number,
    startRadius: number,
    endRadius: number,
    renderSpot?: boolean,
): Searchlight;

/**
 * This function gets the end position of a [[Element/Searchlight|searchlight]] element.
 * @see {@link https://wiki.multitheftauto.com/wiki/getSearchLightEndPosition|MTASA Wiki}
 * @param theSearchLight : the searchlight to get the position where the searchlights light cone
 * ends.
 * @return If the specified searchlight element is valid, this function will return three
 * ''float'', which are the three coordinates of searchlight's end position. If not, it will return ''false''
 * plus an error message.
 */
export function getSearchLightEndPosition(theSearchLight: Searchlight): LuaMultiReturn<[number, number, number]>;

/**
 * This function gets the end radius of a [[Element/Searchlight|searchlight]] element.
 * @see {@link https://wiki.multitheftauto.com/wiki/getSearchLightEndRadius|MTASA Wiki}
 * @param theSearchLight : the searchlight to get the radius of the searchlights light cone in its
 * end.
 * @return If the specified searchlight element is valid, this function will return one ''float'',
 * which is the searchlight's end radius. If not, it will return ''false'' plus an error message.
 */
export function getSearchLightEndRadius(theSearchLight: Searchlight): number;

/**
 * This function gets the start position of a [[Element/Searchlight|searchlight]] element.
 * @see {@link https://wiki.multitheftauto.com/wiki/getSearchLightStartPosition|MTASA Wiki}
 * @param theSearchLight : the searchlight to get the position where the searchlights light cone
 * starts.
 * @return If the specified searchlight element is valid, this function will return three
 * ''float'', which are the three coordinates of searchlight's start position. If not, it will return ''false''
 * plus an error message.
 */
export function getSearchLightStartPosition(theSearchLight: Searchlight): LuaMultiReturn<[number, number, number]>;

/**
 * This function gets the start radius of a [[Element/Searchlight|searchlight]] element.
 * @see {@link https://wiki.multitheftauto.com/wiki/getSearchLightStartRadius|MTASA Wiki}
 * @param theSearchLight : the searchlight to get the radius of the searchlights light cone in its
 * beginning.
 * @return If the specified searchlight element is valid, this function will return one ''float'',
 * which is the searchlight's start radius. If not, it will return ''false'' plus an error message.
 */
export function getSearchLightStartRadius(theSearchLight: Searchlight): number;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/setSearchLightEndPosition|MTASA Wiki}
 * @param theSearchLight : the searchlight to modify the property of.
 * @param endX : the X coordinate where the searchlight light cone will end.
 * @param endY : the Y coordinate where the searchlight light cone will end.
 * @param endZ : the Z coordinate where the searchlight light cone will end.
 * @return If every argument is correct, this function returns ''true''. If not, it will return
 * ''false'' plus an error message.
 */
export function setSearchLightEndPosition(
    theSearchLight: Searchlight,
    endX: number,
    endY: number,
    endZ: number,
): boolean;

/**
 * This function sets the end radius of a [[Element/Searchlight|searchlight]] element.
 * @see {@link https://wiki.multitheftauto.com/wiki/setSearchLightEndRadius|MTASA Wiki}
 * @param endRadius : the radius of the searchlights light cone in its end.
 * @return If every argument is correct, this function returns ''true''. If not, it will return
 * ''false'' plus an error message.
 */
export function setSearchLightEndRadius(theSearchlight: Searchlight, endRadius: number): boolean;

/**
 * This function sets the start position of a [[Element/Searchlight|searchlight]] element.
 * @see {@link https://wiki.multitheftauto.com/wiki/setSearchLightStartPosition|MTASA Wiki}
 * @param theSearchLight : the searchlight to modify the property of.
 * @param startX : the X coordinate where the searchlight light cone will start.
 * @param startY : the Y coordinate where the searchlight light cone will start.
 * @param startZ : the Z coordinate where the searchlight light cone will start.
 * @return If every argument is correct, this function returns ''true''. If not, it will return
 * ''false'' plus an error message.
 */
export function setSearchLightStartPosition(
    theSearchLight: Searchlight,
    startX: number,
    startY: number,
    startZ: number,
): boolean;

/**
 * This function sets the start radius of a [[Element/Searchlight|searchlight]] element.
 * @see {@link https://wiki.multitheftauto.com/wiki/setSearchLightStartRadius|MTASA Wiki}
 * @param startRadius : the radius of the searchlights light cone in its beginning.
 * @return If every argument is correct, this function returns ''true''. If not, it will return
 * ''false'' plus an error message.
 */
export function setSearchLightStartRadius(theSearchlight: Searchlight, startRadius: number): boolean;
