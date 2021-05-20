// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    ProgressBar,
    Gui,
    EngineTXD,
    EngineDFF,
    EngineCOL,
    EngineIFP,
    PrimitiveType,
    Texture,
    ObjectGroup,
    Matrix,
    Browser,
    Light,
    Effect,
    Searchlight,
    Weapon,
    GuiBrowser,
    GuiMemo,
    GuiElement,
    GuiEdit,
    GuiScrollBar,
    GuiWindow,
    Projectile,
    Material,
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
    HandleFunction
} from '../structure';

/**
 * This function gets the original weapon property of the specified weapons specified weapon
 * type.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetOriginalWeaponProperty Wiki, getOriginalWeaponProperty }
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
    property: string
): number;

/**
 * This function allows you to identify the weapon slot that a weapon belongs to.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetSlotFromWeapon Wiki, getSlotFromWeapon }
 * @param weaponid Weapon to find the weapon slot of.
 * @return returns an integer representing the given weapon ids associated weapon slot, false if the
 * id was invalid.
 * @noSelf
 */
export declare function getSlotFromWeapon(
    weaponid: number
): number;

/**
 * This function will obtain the ID of a particular weapon from its name.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponIDFromName Wiki, getWeaponIDFromName }
 * @param name A string containing the name of the weapon. Names can be: (Case is ignored)
 * @return returns an int if the name matches that of a weapon, false otherwise.
 * @noSelf
 */
export declare function getWeaponIDFromName(
    name: string
): number;

/**
 * This function allows you to retrieve the name of a weapon from an ID.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponNameFromID Wiki, getWeaponNameFromID }
 * @param id The ID you wish to retrieve the name of
 * @return returns a string of the name of the weapon or death type, false otherwise. names will be
 * like these: (ignoring case)
 * @noSelf
 */
export declare function getWeaponNameFromID(
    id: number
): string;

/**
 * This function gets a weapon property of the specified Element/Weapon|custom weapon
 * (clientside only) or specified Weapons|player-held weapon (both client and server).
 * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponProperty Wiki, getWeaponProperty }
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
    property: string
): number;

/**
 * <section name=setWeaponAmmo class=server show=true>
 * Sets the ammo to a certain amount for a specified weapon (if they already have it),
 * regardless of current ammo.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetWeaponAmmo Wiki, setWeaponAmmo }
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
    ammoInClip?: number
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
 * @see {@link https://wiki.multitheftauto.com/wiki/SetWeaponProperty Wiki, setWeaponProperty }
 * @param theWeapon the weapon to change the property of.
 * @param strProperty the property to edit:
 * @param theValue The value to set the property to.
 * @return returns true if the property was set.
 * @noSelf
 */
export declare function setWeaponProperty(
    theWeapon: Weapon,
    strProperty: string,
    theValue: unknown
): boolean;

/**
 * Creates a Element/Weapon|custom weapon that can fire bullets. Do not confuse this with
 * player held weapons.
 * @see {@link https://wiki.multitheftauto.com/wiki/CreateWeapon Wiki, createWeapon }
 * @param theType The weapon type which can be:
 * @param x The x position to create the weapon.
 * @param y The y position to create the weapon.
 * @param z The z position to create the weapon.
 * @return returns a element/weapon|custom weapon element, which represents a weapon floating at
 * that position.
 * @noSelf
 */
export declare function createWeapon(
    theType: string,
    x: number,
    y: number,
    z: number
): Weapon;

/**
 * Fires one shot from a Element/Weapon|custom weapon.
 * @see {@link https://wiki.multitheftauto.com/wiki/FireWeapon Wiki, fireWeapon }
 * @param theWeapon The weapon to be fired.
 * @return returns true if the shot weapon is valid and therefore the shot was fired, false
 * otherwise.
 * @noSelf
 */
export declare function fireWeapon(
    theWeapon: Weapon
): boolean;

/**
 * This function gets the total ammo a Element/Weapon|custom weapon has.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponAmmo Wiki, getWeaponAmmo }
 * @param theWeapon : The weapon to get the ammo of.
 * @return returns an int|integer containing how many ammo left has the weapon. returns false if an
 * error occured.
 * @noSelf
 */
export declare function getWeaponAmmo(
    theWeapon: Weapon
): number;

/**
 * This function gets the amount of ammo left in a Element/Weapon|custom weapons
 * magazine/clip.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponClipAmmo Wiki, getWeaponClipAmmo }
 * @param theWeapon the weapon to get the clip ammo of.
 * @return returns the amount of ammo in the element/weapon|custom weapons clip, false if an error
 * occured.
 * @noSelf
 */
export declare function getWeaponClipAmmo(
    theWeapon: Weapon
): number;

/**
 * This gets the firing rate to be used when a Element/Weapon|custom weapon opens fire.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponFiringRate Wiki, getWeaponFiringRate }
 * @param theWeapon The weapon to modify the firing rate of.
 * @return returns an integer with the firing rate of the custom weapon, false otherwise.
 * @noSelf
 */
export declare function getWeaponFiringRate(
    theWeapon: Weapon
): number;

/**
 * This function gets the flags of a Element/Weapon|custom weapon.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponFlags Wiki, getWeaponFlags }
 * @param theWeapon the weapon to get the flag of.
 * @param theFlag the weapon flag to get:
 * @param disable_model : makes the weapon and muzzle effect invisible or not.
 * @param flags : returns the flags used to get where the gun shoots at. These flags are (by order):
 * @param checkBuildings : allows the shoot to be blocked by GTAs internally placed buildings, i.e. the world map.
 * @param checkCarTires : allows the shoot to be blocked by vehicle tires.
 * @param checkDummies : allows the shoot to be blocked by GTAs internal dummies. These are not used in the
 * current MTA version so this argument can be set to false.
 * @param checkObjects : allows the shoot to be blocked by object|objects.
 * @param checkPeds : allows the shoot to be blocked by ped|peds and player|players.
 * @param checkVehicles : allows the shoot to be blocked by vehicle|vehicles.
 * @param checkSeeThroughStuff : allows the shoot to be blocked by translucent game objects, e.g. glass.
 * @param checkShootThroughStuff : allows the shoot to be blocked by things that can be shot through.
 * @param instant_reload : if enabled, the weapon reloads instantly rather than waiting the reload time until
 * shooting again.
 * @param shoot_if_out_of_range : if enabled, the weapon still fires its target beyond the weapon range distance.
 * @param shoot_if_blocked : if enabled, the weapon still fires its target even if its blocked by something.
 * @return returns the true or false on success (flags flag returns 8 values) if the flag is enabled
 * or not. returns false if the weapon element isnt valid or an error occured.
 * @noSelf
 */
export declare function getWeaponFlags(
    theWeapon: Weapon,
    theFlag: string
): boolean;

/**
 * This function gets the owner of a Element/Weapon|custom weapon. Weapon ownership system
 * was, however, disabled, so this function always returns false. Please refer to
 * setWeaponOwner for details.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponOwner Wiki, getWeaponOwner }
 * @param theWeapon The weapon to get the owner of.
 * @return this function was intended to return the player which owns the element/weapon|custom
 * weapon, and false if an error occured. however, at the moment it always returns false.
 * @noSelf
 */
export declare function getWeaponOwner(
    theWeapon: Weapon
): boolean;

/**
 * This function gets the state of a Element/Weapon|custom weapon.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponState Wiki, getWeaponState }
 * @param theWeapon the Element/Weapon|weapon to get the state of.
 * @return * a string if the element/weapon|weapon is valid, indicating the weapon state, which can
 * be:
 * ** reloading: the weapon is reloading.
 * ** firing: the weapon is constantly shooting (unless any shooting blocking flags are set)
 * according to its assigned firing rate.
 * ** ready: the weapon is idle.
 * * false if an error occured or the element/weapon|weapon is invalid.
 * @noSelf
 */
export declare function getWeaponState(
    theWeapon: Weapon
): string;

/**
 * This functions gets the target of a Element/Weapon|custom weapon.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponTarget Wiki, getWeaponTarget }
 * @param theWeapon The weapon to get the target of.
 * @return * returns the target of the element/weapon|custom weapon, which can be:
 * **nil if the weapon is in rotation based targeting.
 * **3 float|floats if the weapon is firing at a fixed point.
 * **an element if the weapon is firing an entity.
 * * returns false if the weapon element is not valid.
 * @noSelf
 */
export declare function getWeaponTarget(
    theWeapon: Weapon
): null | Element | number;

/**
 * This function resets the firing rate of a Element/Weapon|custom weapon to the default one.
 * @see {@link https://wiki.multitheftauto.com/wiki/ResetWeaponFiringRate Wiki, resetWeaponFiringRate }
 * @param theWeapon the weapon to reset the firing rate of.
 * @return returns true on success, false otherwise.
 * @noSelf
 */
export declare function resetWeaponFiringRate(
    theWeapon: Weapon
): boolean;

/**
 * This function sets the ammo left in a Element/Weapon|custom weapons magazine/clip.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetWeaponClipAmmo Wiki, setWeaponClipAmmo }
 * @param theWeapon The Element/Weapon|weapon to set the clip ammo of.
 * @param clipAmmo The amount of ammo in the clip.
 * @return this function returns true if the arguments are valid and the weapon clip ammo could be
 * changed; false otherwise.
 * @noSelf
 */
export declare function setWeaponClipAmmo(
    theWeapon: Weapon,
    clipAmmo: number
): boolean;

/**
 * This function sets the firing rate to be used when a Element/Weapon|custom weapon is in
 * firing state.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetWeaponFiringRate Wiki, setWeaponFiringRate }
 * @param theWeapon The weapon to modify the firing rate of.
 * @param firingRate The weapon firing rate. It seems to be a kind of frecuency value, so the lower the
 * quicker the Element/Weapon|custom weapon will shoot.
 * @return returns true on success, false otherwise.
 * @noSelf
 */
export declare function setWeaponFiringRate(
    theWeapon: Weapon,
    firingRate: number
): boolean;

/**
 * This function sets a Element/Weapon|custom weapon flags, used to change how it behaves or
 * finds a possible target to shoot.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetWeaponFlags Wiki, setWeaponFlags }
 * @param theWeapon the Element/Weapon|weapon element to set the flag of.
 * @param theFlag the weapon flag to change (all of them can be true or false):
 * @param disable_model : makes the weapon and muzzle effect invisible or not.
 * @param flags : configures the flags used to get where the gun shoots at. They are based on
 * processLineOfSights. You have to specify all the eight flags for the function to succeed.
 * These flags are (by order):
 * @param checkBuildings : allows the shoot to be blocked by GTAs internally placed buildings, i.e. the world map.
 * @param checkCarTires : allows the shoot to be blocked by vehicle tires.
 * @param checkDummies : allows the shoot to be blocked by GTAs internal dummies. These are not used in the
 * current MTA version so this argument can be set to false.
 * @param checkObjects : allows the shoot to be blocked by object|objects.
 * @param checkPeds : allows the shoot to be blocked by ped|peds and player|players.
 * @param checkVehicles : allows the shoot to be blocked by vehicle|vehicles.
 * @param checkSeeThroughStuff : allows the shoot to be blocked by translucent game objects, e.g. glass.
 * @param checkShootThroughStuff : allows the shoot to be blocked by things that can be shot through.
 * @param instant_reload : if enabled, the weapon will reload instantly rather than waiting the reload time until
 * shooting again.
 * @param shoot_if_out_of_range : if enabled, the weapon will still fire its target beyond the weapon range distance.
 * @param shoot_if_blocked : if enabled, the weapon will still fire its target even if its blocked by something.
 * @param enable : whether to enable or disable the specified flag.
 * @return returns true if all arguments are valid and the flags where changed; false otherwise.
 * @noSelf
 */
export declare function setWeaponFlags(
    theWeapon: Weapon,
    theFlag: string,
    enable: boolean
): boolean;

/**
 * This function sets a Element/Weapon|custom weapons state.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetWeaponState Wiki, setWeaponState }
 * @param theWeapon : the weapon you wish to set the state of.
 * @param theState : the state you wish to set:
 * @param reloading : makes the weapon reload.
 * @param firing : makes the weapon constantly fire its target (unless any shooting blocking flags are
 * set) according to its assigned firing rate.
 * @param ready : makes the weapon stop reloading or firing.
 * @return returns true on success, false otherwise.
 * @noSelf
 */
export declare function setWeaponState(
    theWeapon: Weapon,
    theState: string
): boolean;

/**
 * This function sets the target of a Element/Weapon|custom weapon. There are 3 different
 * targeting modes, which are explained below.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetWeaponTarget Wiki, setWeaponTarget }
 * @param theWeapon The weapon to clear the target of.
 * @param theTarget The element to shoot at. It can be a player, ped, vehicle or object.
 * @param theComponent The component of the target to shoot at. This argument is only relevant when used in the
 * following element types:
 * @param Vehicle|Vehicles :
 * @param 0 : front left tire.
 * @param 1 BONE_PELVIS1 position.
 * @param 2 BONE_PELVIS position.
 * @param 3 BONE_SPINE1 position.
 * @param 255 : center of the ped (position returned by getElementPosition).
 * @param Ped|Peds (players not included; see getPedBonePosition to know where is located each bone):
 * @param 4 BONE_UPPERTORSO position.
 * @param 5 BONE_NECK position.
 * @param 6 BONE_HEAD2 position.
 * @param 7 BONE_HEAD1 position.
 * @param 8 BONE_HEAD position.
 * @param 21 BONE_RIGHTUPPERTORSO position.
 * @param 22 BONE_RIGHTSHOULDER position.
 * @param 23 BONE_RIGHTELBOW position.
 * @param 24 BONE_RIGHTWRIST position.
 * @param 25 BONE_RIGHTHAND position.
 * @param 26 BONE_RIGHTTHUMB position.
 * @param 31 BONE_LEFTUPPERTORSO position.
 * @param 32 BONE_LEFTSHOULDER position.
 * @param 33 BONE_LEFTELBOW position.
 * @param 34 BONE_LEFTWRIST position.
 * @param 35 BONE_LEFTHAND position.
 * @param 36 BONE_LEFTTHUMB position.
 * @param 41 BONE_LEFTHIP position.
 * @param 42 BONE_LEFTKNEE position.
 * @param 43 BONE_LEFTANKLE position.
 * @param 44 BONE_LEFTFOOT position.
 * @param 51 BONE_RIGHTHIP position.
 * @param 52 BONE_RIGHTKNEE position.
 * @param 53 BONE_RIGHTANKLE position.
 * @param 54 BONE_RIGHTFOOT position.
 * @param targetX The target X.
 * @param targetY The target Y.
 * @param targetZ The target Z.
 * @return returns true on success, false otherwise.
 * returns true on success, false otherwise.
 * returns true on success, false otherwise.
 * @noSelf
 */
export declare function setWeaponTarget(
    theWeapon: Weapon,
    theTarget: Element,
    theComponent?: number
): boolean;
