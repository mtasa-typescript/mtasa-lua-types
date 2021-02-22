/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Ped, Player } from '../structure';

/**
 * giveWeapon gives a specified weapon to a certain player or ped. There is an optional argument to
 * specify ammunition. For example, a melee weapon doesn't need an ammo argument.
 * *When setting ammo for [[Weapon|weapons in slot]] 0,1,10,11 or 12, the ammo max is 1
 * *When setting ammo for [[Weapon|weapons in slot]] 3,4,5, the ammo is added
 * *When setting ammo for [[Weapon|weapons in slot]] 2,6,7,8,9 and the slot weapon is changing, the
 * ammo is replaced
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/giveWeapon|MTASA Wiki}
 * @param thePlayer A player or ped object referencing the specified player (or ped)
 * @param weapon A whole number integer that refers to a Weapon ID. Click Weapon|here for a list of
 * possible weapon IDs.  {{OptionalArg}}
 * @param ammo A whole number integer serving as the ammo amount for the given weapon.  For weapons
 * that do not require ammo, such as melee, this should be at least 1.
 * @default 30
 * @param setAsCurrent A boolean value determining whether or not the weapon will be set as the
 * players current.
 * @default false
 * @return Returns ''true'' if weapon was successfully acquired, ''false'' otherwise.
 */
export function giveWeapon(thePlayer: Ped, weapon: number, ammo?: number, setAsCurrent?: boolean): boolean;

/**
 * This function removes every weapons from a specified [[ped]], rendering it unarmed.
 * @see {@link https://wiki.multitheftauto.com/wiki/takeAllWeapons|MTASA Wiki}
 * @param thePed : A ped element referencing the specified ped
 * @return Returns ''true'' if the function succeeded, ''false'' otherwise.
 */
export function takeAllWeapons(thePed: Ped): boolean;

/**
 * This function removes a specified weapon or ammo from a certain player's inventory.
 * @see {@link https://wiki.multitheftauto.com/wiki/takeWeapon|MTASA Wiki}
 * @param thePlayer : A player object referencing the specified player.
 * @param weaponId : An integer that refers to a weapon that you wish to remove.
 * @param ammo : If used, this amount of ammo will be taken instead and the weapon will not be
 * removed.
 * @return Returns a ''true'' if the weapon/ammo was removed successfully, ''false'' otherwise.
 */
export function takeWeapon(thePlayer: Player, weaponId: number, ammo?: number): boolean;

/**
 * This function gets the original weapon property of the specified weapons specified weapon type.
 * @see {@link https://wiki.multitheftauto.com/wiki/getOriginalWeaponProperty|MTASA Wiki}
 * @param weaponSkill Either: pro, std or poor
 * @param property The property you want to get the value of:  {{Weapon Properties Writable}}  The
 * following properties are get only:  {{Weapon Properties ReadOnly}}
 * @return On success:
 * * '''int:''' The weapon property
 * * On failure:
 * * '''bool:''' False if the passed arguments were invalid
 */
export function getOriginalWeaponProperty(weaponID: number, weaponSkill: string, property: string): number;

/**
 * This function allows you to identify the weapon slot that a weapon belongs to.
 * @see {@link https://wiki.multitheftauto.com/wiki/getSlotFromWeapon|MTASA Wiki}
 * @param weaponid Weapon to find the weapon slot of.
 * @return Returns an integer representing the given weapon ID's associated weapon slot, ''false''
 * if the ID was invalid.
 */
export function getSlotFromWeapon(weaponid: number): number;

/**
 * This function will obtain the ID of a particular weapon from its name.
 * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponIDFromName|MTASA Wiki}
 * @param name A string containing the name of the weapon. Names can be: (Case is ignored)  {{All
 * Weapon Types}}
 * @return Returns an [[int]] if the name matches that of a weapon, ''false'' otherwise.
 */
export function getWeaponIDFromName(name: string): number;

/**
 * This function allows you to retrieve the name of a weapon from an ID.
 * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponNameFromID|MTASA Wiki}
 * @param id The ID you wish to retrieve the name of
 * @return Returns a string of the name of the weapon or death type, ''false'' otherwise. Names
 * will be like these: (Ignoring case)
 * * {{All Weapon Types}}
 */
export function getWeaponNameFromID(id: number): string;

/**
 * This function gets a weapon property of the specified [[Element/Weapon|custom weapon]]
 * (clientside only) or specified [[Weapons|player-held weapon]] (both client and server).
 * @see {@link https://wiki.multitheftauto.com/wiki/getWeaponProperty|MTASA Wiki}
 * @param weaponSkill Either: pro, std or poor
 * @param property The property you want to get the value of:  {{Weapon Properties Writable}}  The
 * following properties are get only:  {{Weapon Properties ReadOnly}}
 * @return On success:
 * * '''int:''' The weapon property
 * * On failure:
 * * '''bool:''' False if the passed arguments were invalid
 */
export function getWeaponProperty(weaponID: number, weaponSkill: string, property: string): number;

/**
 * <section name="Server" class="server" show="true">
 * This function sets the weapon property of the specified weapons specified weapon type. See lower
 * down the page for documentation related to weapon creation.
 * @see {@link https://wiki.multitheftauto.com/wiki/setWeaponProperty|MTASA Wiki}
 * @param weaponID The ID or name of the Weapons|weapon you want to set a property of. Names can
 * be:  {{Some Weapon Types}}
 * @param weaponSkill Either: pro, std or poor. The player must have this skill level set to have
 * the effect.
 * @param property The property you want to set the value of:  {{Weapon Properties Writable}}
 * @return On success:
 * * '''bool:''' Returns true if the weapon property was successfully set
 * * On failure:
 * * '''bool:''' Returns false if the weapon property was unable to be set
 */
export function setWeaponProperty(weaponID: number, weaponSkill: string, property: string, float: number): boolean;
