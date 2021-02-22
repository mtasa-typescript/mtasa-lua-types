/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Weapon } from '../structure';

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
 * @param theWeapon the weapon to change the property of.
 * @param strProperty the property to edit:  {{Custom Weapon Properties Writable}}
 * @param theValue The value to set the property to.
 * @return Returns ''true'' if the property was set.
 */
export function setWeaponProperty(theWeapon: Weapon, strProperty: string, theValue: any): boolean;
