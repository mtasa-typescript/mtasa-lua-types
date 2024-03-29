// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    TextDisplay,
    Account,
    ACL,
    ACLGroup,
    Ban,
    XML,
    Userdata,
    TextItem,
    Pickup,
    Request,
    Player,
    Blip,
    ColShape,
    Element,
    Ped,
    Resource,
    Team,
    Vehicle,
    XmlNode,
    File,
    Marker,
    MTASAObject,
    RadarArea,
    Water,
    Timer,
    HandleFunction,
    TimerCallbackFunction,
    FetchRemoteCallback,
    GenericEventHandler,
    CommandHandler,
    BindKeyCallback,
    BindKeyCallbackVarArgs,
    ControlName,
    KeyName,
    KeyState,
    Vector2,
    Vector3,
    Vector4,
    Matrix,
} from '../structure';

/**
 * This function gets the original weapon property of the specified weapons specified weapon
 * type.
 * @see https://wiki.multitheftauto.com/wiki/GetOriginalWeaponProperty
 * @param weaponID or weaponName The ID or name of the weapon you want to get info of. Names can be:
 * @param weaponSkill Either: pro, std or poor
 * @param property The property you want to get the value of:
 * The following properties are get only:
 * @return on success:
 * int: the weapon property
 * on failure:
 * bool: false if the passed arguments were invalid
 * @noSelf
 */
export declare function getOriginalWeaponProperty(
    weaponID: number | string,
    weaponSkill: string,
    property: string,
): number;

/**
 * This function allows you to identify the weapon slot that a weapon belongs to.
 * @see https://wiki.multitheftauto.com/wiki/GetSlotFromWeapon
 * @param weaponid Weapon to find the weapon slot of.
 * @return returns an integer representing the given weapon ids associated weapon slot, false if the
 * id was invalid.
 * @noSelf
 */
export declare function getSlotFromWeapon(weaponid: number): number;

/**
 * This function will obtain the ID of a particular weapon from its name.
 * @see https://wiki.multitheftauto.com/wiki/GetWeaponIDFromName
 * @param name A string containing the name of the weapon. Names can be: (Case is ignored)
 * @return returns an int if the name matches that of a weapon, false otherwise.
 * @noSelf
 */
export declare function getWeaponIDFromName(name: string): number;

/**
 * This function allows you to retrieve the name of a weapon from an ID.
 * @see https://wiki.multitheftauto.com/wiki/GetWeaponNameFromID
 * @param id The ID you wish to retrieve the name of
 * @return returns a string of the name of the weapon or death type, false otherwise. names will be
 * like these: (ignoring case)
 * @noSelf
 */
export declare function getWeaponNameFromID(id: number): string;

/**
 * This function gets a weapon property of the specified Element/Weapon|custom weapon
 * (clientside only) or specified Weapons|player-held weapon (both client and server).
 * @see https://wiki.multitheftauto.com/wiki/GetWeaponProperty
 * @param weaponID or weaponName The ID or name of the weapon you want to get info of. Names can be:
 * @param weaponSkill Either: pro, std or poor
 * @param property The property you want to get the value of:
 * The following properties are get only:
 * @return on success:
 * int: the weapon property
 * on failure:
 * bool: false if the passed arguments were invalid
 * @noSelf
 */
export declare function getWeaponProperty(
    weaponID: number | string,
    weaponSkill: string,
    property: string,
): number;

/**
 * giveWeapon gives a specified weapon to a certain player or ped. There is an optional
 * argument to specify ammunition. For example, a melee weapon doesnt need an ammo argument.
 * *When setting ammo for Weapon|weapons in slot 0,1,10,11 or 12, the ammo max is 1
 * *When setting ammo for Weapon|weapons in slot 3,4,5, the ammo is added
 * *When setting ammo for Weapon|weapons in slot 2,6,7,8,9 and the slot weapon is changing,
 * the ammo is replaced
 * @see https://wiki.multitheftauto.com/wiki/GiveWeapon
 * @param thePlayer A player or ped object referencing the specified player (or ped)
 * @param weapon A whole number integer that refers to a Weapon ID.
 * @param ammo A whole number integer serving as the ammo amount for the given weapon.  For weapons that
 * do not require ammo, such as melee, this should be at least 1.
 * @param setAsCurrent A boolean value determining whether or not the weapon will be set as the players current.
 * @return returns true if weapon was successfully acquired, false otherwise.
 * @noSelf
 */
export declare function giveWeapon(
    thePlayer: Ped,
    weapon: number,
    ammo?: number,
    setAsCurrent?: boolean,
): boolean;

/**
 * <section name=setWeaponAmmo class=server show=true>
 * Sets the ammo to a certain amount for a specified weapon (if they already have it),
 * regardless of current ammo.
 * @see https://wiki.multitheftauto.com/wiki/SetWeaponAmmo
 * @param thePlayer A player object referencing the specified player
 * @param weapon A whole number integer that refers to a weapon ID.
 * @param totalAmmo A whole number integer serving as the total ammo amount for the given weapon (including
 * ammo in clip).
 * @param ammoInClip The amount of ammo to set in the players clip.  This will be taken from the main ammo.
 * If left unspecified or set to 0, the current clip will remain.
 * @return returns a boolean value true or false that tells you if it was successful or not.
 * @noSelf
 */
export declare function setWeaponAmmo(
    thePlayer: Player,
    weapon: number,
    totalAmmo: number,
    ammoInClip?: number,
): boolean;

/**
 * <section name=Server class=server show=true>
 * This function sets the weapon property of the specified weapons specified weapon type.
 * See lower down the page for documentation related to weapon creation.
 * <syntaxhighlight lang=lua>bool setWeaponProperty ( int weaponID/string weaponName, string
 * weaponSkill, string property, int/float theValue )</syntaxhighlight>
 * *weaponID: The ID or name of the Weapons|weapon you want to set a property of. Names can
 * be:
 * *weaponSkill: Either: pro, std or poor. The player must have this skill level set to have
 * the effect.
 * *property: The property you want to set the value of:
 * *theValue: The value to set the property to.
 * On success:
 * bool: Returns true if the weapon property was successfully set
 * On failure:
 * bool: Returns false if the weapon property was unable to be set
 * </section>
 * <section name=Client class=client show=true>
 * <p>The client side function only applies to custom weapons created client sided.</p>
 * <syntaxhighlight lang=lua>bool setWeaponProperty ( weapon theWeapon, string strProperty,
 * value theValue )</syntaxhighlight>
 * * theWeapon: the weapon to change the property of.
 * * strProperty: the property to edit:
 * * theValue: The value to set the property to.
 * Returns true if the property was set.
 * </section>
 * @see https://wiki.multitheftauto.com/wiki/SetWeaponProperty
 * @param weaponID The ID or name of the Weapons|weapon you want to set a property of. Names can be:
 * @param weaponSkill Either: pro, std or poor. The player must have this skill level set to have the effect.
 * @param property The property you want to set the value of:
 * @param theValue The value to set the property to.
 * @return on success:
 * bool: returns true if the weapon property was successfully set
 * on failure:
 * bool: returns false if the weapon property was unable to be set
 * @noSelf
 */
export declare function setWeaponProperty(
    weaponID: number | string,
    weaponSkill: string,
    property: string,
    theValue: number | number,
): boolean;

/**
 * This function removes every weapons from a specified ped, rendering it unarmed.
 * @see https://wiki.multitheftauto.com/wiki/TakeAllWeapons
 * @param thePed : A ped element referencing the specified ped
 * @return returns true if the function succeeded, false otherwise.
 * @noSelf
 */
export declare function takeAllWeapons(thePed: Ped): boolean;

/**
 * This function removes a specified weapon or ammo from a certain players inventory.
 * @see https://wiki.multitheftauto.com/wiki/TakeWeapon
 * @param thePlayer : A player object referencing the specified player.
 * @param weaponId : An integer that refers to a weapon that you wish to remove.
 * @param ammo : If used, this amount of ammo will be taken instead and the weapon will not be removed.
 * @return returns a true if the weapon/ammo was removed successfully, false otherwise.
 * @noSelf
 */
export declare function takeWeapon(
    thePlayer: Player,
    weaponId: number,
    ammo?: number,
): boolean;
