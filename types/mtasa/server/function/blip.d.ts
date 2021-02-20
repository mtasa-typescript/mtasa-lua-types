/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Blip, Element } from 'types/mtasa/server/structure';

/**
 * This function creates a [[blip]] [[element]], which is displayed as an icon on the client's
 * radar.
 * @see {@link https://wiki.multitheftauto.com/wiki/createBlip|MTASA Wiki}
 * @return Returns an [[element]] of the [[blip]] if it was created successfully, ''false''
 * otherwise.
 */
export function createBlip(
    x: number,
    y: number,
    z: number,
    icon?: number,
    size?: number,
    r?: number,
    g?: number,
    b?: number,
    a?: number,
    ordering?: number,
    visibleDistance?: number,
    visibleTo?: Element,
): Blip;

/**
 * This function creates a [[blip]] that is attached to an [[element]]. This blip is displayed as
 * an icon on the client's radar and will 'follow' the element that it is attached to around.
 * @see {@link https://wiki.multitheftauto.com/wiki/createBlipAttachedTo|MTASA Wiki}
 * @return Returns a [[blip]] if the blip was created succesfully, or ''false'' otherwise.
 */
export function createBlipAttachedTo(
    elementToAttachTo: Element,
    icon?: number,
    size?: number,
    r?: number,
    g?: number,
    b?: number,
    a?: number,
    ordering?: number,
    visibleDistance?: number,
    visibleTo?: Element,
): Blip;

/**
 * This function will tell you what color a blip is. This color is only applicable to the default
 * blip icon ([[Image:Blipid0s.png|12px]], [[Image:Blipid0u.png|12px]] or [[Image:Blipid0d.png|12px]]).
 * All other icons will ignore this.
 * @see {@link https://wiki.multitheftauto.com/wiki/getBlipColor|MTASA Wiki}
 * @param theBlip The blip whose color you wish to get.
 * @return Returns four integers in RGBA format, with a maximum value of 255 for each. The values
 * are, in order, ''red'', ''green'', ''blue'', and ''alpha''.  Alpha decides the transparancy where 255
 * is opaque and 0 is fully transparent. ''false'' is returned if the blip is invalid.
 */
export function getBlipColor(theBlip: Blip): LuaMultiReturn<[number, number, number, number]>;

/**
 * This function returns the icon a [[blip]] currently has.
 * @see {@link https://wiki.multitheftauto.com/wiki/getBlipIcon|MTASA Wiki}
 * @param theBlip : the blip were getting the icon number of.
 * @return Returns an [[int]] indicating which icon the blip has. Valid values are listed on the
 * [[Radar Blips]] page.
 */
export function getBlipIcon(theBlip: Blip): number;

/**
 * This function gets the Z ordering value of a blip. The Z ordering determines if a blip appears
 * on top of or below other blips. Blips with a higher Z ordering value appear on top of blips with a
 * lower value. The default value for all blips is 0.
 * @see {@link https://wiki.multitheftauto.com/wiki/getBlipOrdering|MTASA Wiki}
 * @param theBlip the blip to retrieve the Z ordering value of.
 * @return Returns the Z ordering value of the blip if successful, ''false'' otherwise.
 */
export function getBlipOrdering(theBlip: Blip): number;

/**
 * This function gets the size of a blip..
 * @see {@link https://wiki.multitheftauto.com/wiki/getBlipSize|MTASA Wiki}
 * @param theBlip The blip you wish to get the size of.
 * @return Returns an [[int]] indicating the size of the blip. The default value is 2. The maximum
 * value is 25.
 */
export function getBlipSize(theBlip: Blip): number;

/**
 * This function will tell you what visible distance a blip has.
 * @see {@link https://wiki.multitheftauto.com/wiki/getBlipVisibleDistance|MTASA Wiki}
 * @param theBlip The blip whose visible distance you wish to get.
 * @return Returns one float with the blips visible distance, false if the blip is invalid.
 */
export function getBlipVisibleDistance(theBlip: Blip): number;

/**
 * This function will let you change the color of a blip. This color is only applicable to the
 * default blip icon ([[Image:Blipid0s.png|12px]], [[Image:Blipid0u.png|12px]] or
 * [[Image:Blipid0d.png|12px]]). All other icons will ignore this.
 * @see {@link https://wiki.multitheftauto.com/wiki/setBlipColor|MTASA Wiki}
 * @param theBlip The blip whos color you wish to set.
 * @param red The amount of red in the blips color (0 - 255).
 * @param green The amount of green in the blips color (0 - 255).
 * @param blue The amount of blue in the blips color (0 - 255).
 * @param alpha The amount of alpha in the blips color (0 - 255).  Alpha decides transparancy where
 * 255 is opaque and 0 is transparent.
 * @return Returns ''true'' if the blip's color was set successfully. Returns ''false'' if the blip
 * passed to the function is invalid, or any of the colors are out of the valid range.
 */
export function setBlipColor(theBlip: Blip, red: number, green: number, blue: number, alpha: number): boolean;

/**
 * This function sets the icon for an existing blip element.
 * @see {@link https://wiki.multitheftauto.com/wiki/setBlipIcon|MTASA Wiki}
 * @param theBlip The blip you wish to set the icon of.
 * @param icon A number indicating the icon you wish to change it do. Valid values are listed on
 * the Radar Blips page.
 * @return Returns ''true'' if the icon was successfully set, ''false'' if the element passed was
 * not a valid blip or the icon value was not a valid icon number.
 */
export function setBlipIcon(theBlip: Blip, icon: number): boolean;

/**
 * This function sets the Z ordering of a blip. It allows you to make a blip appear on top of or
 * below other blips.
 * @see {@link https://wiki.multitheftauto.com/wiki/setBlipOrdering|MTASA Wiki}
 * @param theBlip the blip whose Z ordering to change.
 * @param ordering the new Z ordering value. Blips with higher values will appear on top of blips
 * with lower values. Possible range: -32767 to 32767. Default: 0.
 * @return Returns ''true'' if the blip ordering was changed successfully, ''false'' otherwise.
 */
export function setBlipOrdering(theBlip: Blip, ordering: number): boolean;

/**
 * This function sets the size of a blip's icon.
 * @see {@link https://wiki.multitheftauto.com/wiki/setBlipSize|MTASA Wiki}
 * @param theBlip The blip you wish to get the size of.
 * @param iconSize The size you wish the icon to be. 2 is the default value. 25 is the maximum
 * value. Value gets clamped between 0 and 25.
 * @return Returns an ''true'' if the blip's size was set successfully. Returns ''false'' if the
 * [[element]] passed was not a [[blip]] or if the icon size passed was invalid.
 */
export function setBlipSize(theBlip: Blip, iconSize: number): boolean;

/**
 * This function will set the visible distance of a blip.
 * @see {@link https://wiki.multitheftauto.com/wiki/setBlipVisibleDistance|MTASA Wiki}
 * @param theBlip The blip whose visible distance you wish to get.
 * @param theDistance The distance you want the blip to be visible for. Value gets clamped between
 * 0 and 65535.
 * @return Returns true if successful, false otherwise.
 */
export function setBlipVisibleDistance(theBlip: Blip, theDistance: number): boolean;
