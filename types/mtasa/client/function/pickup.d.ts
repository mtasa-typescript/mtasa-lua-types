/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Pickup, Player } from '../structure';

/**
 * This function creates a pickup element, which is placed in the GTA world and can be picked up to
 * retrieve a health, armour or a weapon.
 * @see {@link https://wiki.multitheftauto.com/wiki/createPickup|MTASA Wiki}
 * @param x : A floating point number representing the X coordinate on the map.
 * @param y : A floating point number representing the Y coordinate on the map.
 * @param z : A floating point number representing the Z coordinate on the map.
 * @param theType : This is an integer representing the type of pickup, representing the following
 * types:
 * @param amount : This is an integer representing the amount of Health points or Armour points a
 * pickup has.  '''OR'''
 * @param respawnTime : How long before the pickup respawns in milliseconds (This parameter is
 * ignored on the client!)
 * @default 30000
 * @param ammo : An integer representing the amount of ammo a pickup contains.  This is only valid
 * when the pickup type is a weapon pickup.
 * @default 50
 * @return Returns [[pickup]] [[element]] if the pickup was created succesfully, otherwise returns
 * ''false''.
 */
export function createPickup(
    x: number,
    y: number,
    z: number,
    theType: number,
    amount: number,
    respawnTime: number,
    ammo: number,
): Pickup;

/**
 * This function retrieves the amount of ammo in a weapon pickup.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPickupAmmo|MTASA Wiki}
 * @param thePickup The pickup in which you wish to retrieve the ammo of
 * @return Returns an ''integer'' of the amount of ammo in the pickup, ''false'' if the pickup
 * element is invalid, 0 if it's no weapon pickup.
 */
export function getPickupAmmo(thePickup: Pickup): number;

/**
 * This function retrieves the amount of health or armor given from a pickup.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPickupAmount|MTASA Wiki}
 * @param thePickup The pickup you wish to retrieve the amount from.
 * @return Returns an ''integer'' of the amount the pickup is set to, ''false'' if it's invalid, 0
 * if it's no health or amor pickup.
 */
export function getPickupAmount(thePickup: Pickup): number;

/**
 * This function retrieves the type of a pickup, either a health, armour or weapon pickup.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPickupType|MTASA Wiki}
 * @param thePickup The pickup you wish to retrieve the type of.
 * @return Returns ''false'' if the pickup is invalid, or an integer of the type of the pickup,
 * which include:
 * * *'''0:''' Health pickup
 * * *'''1:''' Armour pickup
 * * *'''2:''' Weapon pickup
 * * *'''3:''' Custom Pickup
 */
export function getPickupType(thePickup: Pickup): number;

/**
 * This function retrieves the weapon ID of a weapon pickup.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPickupWeapon|MTASA Wiki}
 * @param thePickup The pickup of which you wish to retrieve the weapon
 * @return Returns the [[Weapons|Weapon ID]] of the pickup, or ''false'' if the pickup is invalid.
 */
export function getPickupWeapon(thePickup: Pickup): number;

/**
 * This function allows changing the type of a pickup to a Weapon, Armour or Health pickup, and
 * allows you to set the health points '''or''' the weapon and ammo that the pickup will give.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPickupType|MTASA Wiki}
 * @param thePickup The pickup which you wish to change the settings of
 * @param theType : An integer representing the type of pickup. You can choose from:
 * @param amount : This is an integer representing the amount of Health points or Armour points a
 * pickup has.  '''OR'''
 * @param ammo : An integer representing the amount of ammo a pickup contains. This argument is
 * only valid when the pickup type is a Weapon Pickup, and must be specified in that case.
 * @return Returns ''true'' if successful, ''false'' otherwise.
 */
export function setPickupType(thePickup: Pickup, theType: number, amount: number, ammo?: number): boolean;

/**
 * This function is used to simulate the player using a pickup
 * @see {@link https://wiki.multitheftauto.com/wiki/usePickup|MTASA Wiki}
 * @param thePickup : The pickup element to be picked up/used.
 * @param thePlayer : The player to use the pickup.
 * @return
 */
export function usePickup(thePickup: Pickup, thePlayer: Player): boolean;
