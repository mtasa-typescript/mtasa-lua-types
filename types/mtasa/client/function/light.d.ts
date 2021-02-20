/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Light } from 'types/mtasa/client/structure';

/**
 * * The direction of the light only has any effect if the light type is ''spot light''.
 * * One light will only apply illumination effects to [[Element/Ped|peds]],
 * [[Element/Player|players]], wheels and number plates (like a emergency vehicle siren light does).
 * * Two or more lights will apply illumination effects to everything (excluding objects) that is
 * in range of, at least, two of them.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/createLight|MTASA Wiki}
 * @param lightType An integer representing the type of light to create.  {{Light_types}}
 * @param posX A floating point number representing the X coordinate on the map.
 * @param posY A floating point number representing the Y coordinate on the map.
 * @param posZ A floating point number representing the Z coordinate on the map.  {{OptionalArg}}
 * @param radius A floating point number representing the radius of the light.
 * @default 3
 * @param r An integer number representing the amount of red to use in the colouring of the light
 * (0 - 255).
 * @default 255
 * @param g An integer number representing the amount of green to use in the colouring of the light
 * (0 - 255).
 * @default 0
 * @param b An integer number representing the amount of blue to use in the colouring of the light
 * (0 - 255).
 * @default 0
 * @param dirX A floating point number representing the light directions X coordinate on the map.
 * @default 0
 * @param dirY A floating point number representing the light directions Y coordinate on the map.
 * @default 0
 * @param dirZ A floating point number representing the light directions Z coordinate on the map.
 * @default 0
 * @param createsShadow A boolean representing whether or not does the light cast shadows.
 * @default false
 * @return
 */
export function createLight(
    lightType: number,
    posX: number,
    posY: number,
    posZ: number,
    radius?: number,
    r?: number,
    g?: number,
    b?: number,
    dirX?: number,
    dirY?: number,
    dirZ?: number,
    createsShadow?: boolean,
): Light;

/**
 * This function returns the color for a [[Element/Light|light]] element.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getLightColor|MTASA Wiki}
 * @param theLight The Element/Light|light that you wish to retrieve the color of.
 * @return
 */
export function getLightColor(theLight: Light): LuaMultiReturn<[number, number, number]>;

/**
 * This function returns the direction for a [[Element/Light|light]] element.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getLightDirection|MTASA Wiki}
 * @param theLight The Element/Light|light that you wish to retrieve the direction of.
 * @return
 */
export function getLightDirection(theLight: Light): LuaMultiReturn<[number, number, number]>;

/**
 * This function returns the radius for a [[Element/Light|light]] element.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getLightRadius|MTASA Wiki}
 * @param theLight The Element/Light|light that you wish to retrieve the radius of.
 * @return
 */
export function getLightRadius(theLight: Light): number;

/**
 * This function returns the type for a [[Element/Light|light]] element.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getLightType|MTASA Wiki}
 * @param theLight The Element/Light|light that you wish to retrieve the type of.
 * @return
 */
export function getLightType(theLight: Light): number;

/**
 * This function sets the color for a [[Element/Light|light]] element.
 * @see {@link https://wiki.multitheftauto.com/wiki/setLightColor|MTASA Wiki}
 * @param theLight The Element/Light|light that you wish to set the color of.
 * @return
 */
export function setLightColor(theLight: Light, r: number, g: number, b: number): boolean;

/**
 * This function sets the direction for a [[Element/Light|light]] element.
 * @see {@link https://wiki.multitheftauto.com/wiki/setLightDirection|MTASA Wiki}
 * @param theLight The Element/Light|light that you wish to set the direction of.
 * @return
 */
export function setLightDirection(theLight: Light, x: number, y: number, z: number): boolean;

/**
 * This function sets the radius for a [[Element/Light|light]] element.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setLightRadius|MTASA Wiki}
 * @param theLight The Element/Light|light that you wish to set the radius of.
 * @return
 */
export function setLightRadius(theLight: Light, radius: number): boolean;
