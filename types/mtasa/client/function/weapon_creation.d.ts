/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Weapon } from 'types/mtasa/client/structure';

/**
 * Creates a [[Element/Weapon|custom weapon]] that can fire bullets. '''Do not confuse this with
 * player held weapons'''.
 * @see {@link https://wiki.multitheftauto.com/wiki/createWeapon|MTASA Wiki}
 * @param theType The weapon type which can be:  {{Custom Weapon Types}}
 * @param x The x position to create the weapon.
 * @param y The y position to create the weapon.
 * @param z The z position to create the weapon.
 * @return Returns a [[Element/Weapon|custom weapon]] element, which represents a weapon floating
 * at that position.
 */
export function createWeapon(theType: string, x: number, y: number, z: number): Weapon;

/**
 * Fires one shot from a [[Element/Weapon|custom weapon]].
 * @see {@link https://wiki.multitheftauto.com/wiki/fireWeapon|MTASA Wiki}
 * @param theWeapon The weapon to be fired.
 * @return Returns ''true'' if the shot weapon is valid and therefore the shot was fired, ''false''
 * otherwise.
 */
export function fireWeapon(theWeapon: Weapon): boolean;

/**
 * This function gets the total ammo a [[Element/Weapon|custom weapon]] has.
 * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponAmmo|MTASA Wiki}
 * @param theWeapon : The weapon to get the ammo of.
 * @return Returns an [[int|integer]] containing how many ammo left has the weapon. Returns
 * ''false'' if an error occured.
 */
export function getWeaponAmmo(theWeapon: Weapon): number;

/**
 * This function gets the amount of ammo left in a [[Element/Weapon|custom weapon]]'s magazine/clip.
 * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponClipAmmo|MTASA Wiki}
 * @param theWeapon the weapon to get the clip ammo of.
 * @return Returns the amount of ammo in the [[Element/Weapon|custom weapon]]'s clip, ''false'' if
 * an error occured.
 */
export function getWeaponClipAmmo(theWeapon: Weapon): number;

/**
 * This gets the firing rate to be used when a [[Element/Weapon|custom weapon]] opens fire.
 * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponFiringRate|MTASA Wiki}
 * @param theWeapon The weapon to modify the firing rate of.
 * @return Returns an ''integer'' with the firing rate of the custom weapon, ''false'' otherwise.
 */
export function getWeaponFiringRate(theWeapon: Weapon): number;

/**
 * This function gets the flags of a [[Element/Weapon|custom weapon]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponFlags|MTASA Wiki}
 * @param theWeapon the weapon to get the flag of.
 * @param theFlag the weapon flag to get:
 * @return Returns the ''true'' or ''false'' on success (''flags'' flag returns 8 values) if the
 * flag is enabled or not. Returns ''false'' if the weapon element isn't valid or an error occured.
 */
export function getWeaponFlags(theWeapon: Weapon, theFlag: string): boolean;

/**
 * This function gets the owner of a [[Element/Weapon|custom weapon]]. Weapon ownership system was,
 * however, disabled, so this function always returns ''false''. Please refer to [[setWeaponOwner]]
 * for details.
 * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponOwner|MTASA Wiki}
 * @param theWeapon The weapon to get the owner of.
 * @return This function was intended to return the [[player]] which owns the
 * [[Element/Weapon|custom weapon]], and ''false'' if an error occured. However, at the moment it always returns ''false''.
 */
export function getWeaponOwner(theWeapon: Weapon): boolean;

/**
 * This function gets the state of a [[Element/Weapon|custom weapon]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponState|MTASA Wiki}
 * @param theWeapon the Element/Weapon|weapon to get the state of.
 * @return * A [[string]] if the [[Element/Weapon|weapon]] is valid, indicating the weapon state,
 * which can be:
 * * ** '''reloading''': the weapon is reloading.
 * * ** '''firing''': the weapon is constantly shooting (unless any shooting blocking flags are
 * set) according to its assigned firing rate.
 * * ** '''ready''': the weapon is idle.
 * * * ''false'' if an error occured or the [[Element/Weapon|weapon]] is invalid.
 */
export function getWeaponState(theWeapon: Weapon): string;

/**
 * This functions gets the target of a [[Element/Weapon|custom weapon]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponTarget|MTASA Wiki}
 * @param theWeapon The weapon to get the target of.
 * @return * Returns the ''target'' of the [[Element/Weapon|custom weapon]], which can be:
 * * **''[[nil]]'' if the weapon is in rotation based targeting.
 * * **3 [[float|floats]] if the weapon is firing at a fixed point.
 * * **an [[element]] if the weapon is firing an entity.
 * * * Returns ''false'' if the weapon element is not valid.
 */
export function getWeaponTarget(theWeapon: Weapon): null | Element | number;

/**
 * This function resets the firing rate of a [[Element/Weapon|custom weapon]] to the default one.
 * @see {@link https://wiki.multitheftauto.com/wiki/resetWeaponFiringRate|MTASA Wiki}
 * @param theWeapon the weapon to reset the firing rate of.
 * @return Returns ''true'' on success, ''false'' otherwise.
 */
export function resetWeaponFiringRate(theWeapon: Weapon): boolean;

/**
 * This function sets the ammo left in a [[Element/Weapon|custom weapon]]'s magazine/clip.
 * @see {@link https://wiki.multitheftauto.com/wiki/setWeaponClipAmmo|MTASA Wiki}
 * @param theWeapon The Element/Weapon|weapon to set the clip ammo of.
 * @param clipAmmo The amount of ammo in the clip.
 * @return This function returns ''true'' if the arguments are valid and the weapon clip ammo could
 * be changed; ''false'' otherwise.
 */
export function setWeaponClipAmmo(theWeapon: Weapon, clipAmmo: number): boolean;

/**
 * This function sets the firing rate to be used when a [[Element/Weapon|custom weapon]] is in
 * ''firing'' state.
 * @see {@link https://wiki.multitheftauto.com/wiki/setWeaponFiringRate|MTASA Wiki}
 * @param theWeapon The weapon to modify the firing rate of.
 * @param firingRate The weapon firing rate. It seems to be a kind of frecuency value, so the lower
 * the quicker the Element/Weapon|custom weapon will shoot.
 * @return Returns ''true'' on success, ''false'' otherwise.
 */
export function setWeaponFiringRate(theWeapon: Weapon, firingRate: number): boolean;

/**
 * This function sets a [[Element/Weapon|custom weapon]] flags, used to change how it behaves or
 * finds a possible target to shoot.
 * @see {@link https://wiki.multitheftauto.com/wiki/setWeaponFlags|MTASA Wiki}
 * @param theWeapon the Element/Weapon|weapon element to set the flag of.
 * @param theFlag the weapon flag to change (all of them can be true or false):
 * @param enable : whether to enable or disable the specified flag.
 * @return Returns ''true'' if all arguments are valid and the flags where changed; ''false''
 * otherwise.
 */
export function setWeaponFlags(theWeapon: Weapon, theFlag: string, enable: boolean): boolean;

/**
 * This function sets a [[Element/Weapon|custom weapon]]'s state.
 * @see {@link https://wiki.multitheftauto.com/wiki/setWeaponState|MTASA Wiki}
 * @param theWeapon : the weapon you wish to set the state of.
 * @param theState : the state you wish to set:
 * @return Returns ''true'' on success, ''false'' otherwise.
 */
export function setWeaponState(theWeapon: Weapon, theState: string): boolean;

/**
 * This function sets the target of a [[Element/Weapon|custom weapon]]. There are 3 different
 * targeting modes, which are explained below.
 * @see {@link https://wiki.multitheftauto.com/wiki/setWeaponTarget|MTASA Wiki}
 * @param theWeapon The weapon to set the target of.
 * @param theTarget The element to shoot at. It can be a player, ped, vehicle or object.
 * @param theComponent The component of the target to shoot at. This argument is only relevant when
 * used in the following element types:
 * @default 255
 * @return Returns ''true'' on success, ''false'' otherwise.
 */
export function setWeaponTarget(theWeapon: Weapon, theTarget: Element, theComponent?: number): boolean;
