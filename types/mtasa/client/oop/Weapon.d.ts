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

/** @customConstructor Weapon */
export class Weapon extends Element {
    /**
     * This function gets the total ammo a Element/Weapon|custom weapon has.
     */
    ammo: number;

    /**
     * This function gets the amount of ammo left in a Element/Weapon|custom weapons
     * magazine/clip.
     */
    clipAmmo: number;

    /**
     * This gets the firing rate to be used when a Element/Weapon|custom weapon opens fire.
     */
    firingRate: number;

    /**
     * This function gets the owner of a Element/Weapon|custom weapon. Weapon ownership system
     * was, however, disabled, so this function always returns false. Please refer to
     * setWeaponOwner for details.
     */
    owner: boolean;

    /**
     * This function gets the state of a Element/Weapon|custom weapon.
     */
    state: string;

    /**
     * This functions gets the target of a Element/Weapon|custom weapon.
     */
    target: null | Element | number;

    /**
     * This function gets a weapon property of the specified Element/Weapon|custom weapon
     * (clientside only) or specified Weapons|player-held weapon (both client and server).
     * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponProperty Wiki, getWeaponProperty }
     * @param weaponID or weaponName The ID or name of the weapon you want to get info of. Names can be:
     * @param property The property you want to get the value of:
     * The following properties are get only:
     * @return on success:
     * int: the weapon property
     * on failure:
     * bool: false if the passed arguments were invalid
     */
    getProperty(
        property: string
    ): number;

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
     * @param theValue The value to set the property to.
     * @return returns true if the property was set.
     */
    setProperty(
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
     */
    constructor(
        theType: string,
        x: number,
        y: number,
        z: number
    );

    /**
     * Fires one shot from a Element/Weapon|custom weapon.
     * @see {@link https://wiki.multitheftauto.com/wiki/FireWeapon Wiki, fireWeapon }
     * @return returns true if the shot weapon is valid and therefore the shot was fired, false
     * otherwise.
     */
    fire(): boolean;

    /**
     * This function gets the total ammo a Element/Weapon|custom weapon has.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponAmmo Wiki, getWeaponAmmo }
     * @return returns an int|integer containing how many ammo left has the weapon. returns false if an
     * error occured.
     */
    getAmmo(): number;

    /**
     * This function gets the amount of ammo left in a Element/Weapon|custom weapons
     * magazine/clip.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponClipAmmo Wiki, getWeaponClipAmmo }
     * @return returns the amount of ammo in the element/weapon|custom weapons clip, false if an error
     * occured.
     */
    getClipAmmo(): number;

    /**
     * This gets the firing rate to be used when a Element/Weapon|custom weapon opens fire.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponFiringRate Wiki, getWeaponFiringRate }
     * @return returns an integer with the firing rate of the custom weapon, false otherwise.
     */
    getFiringRate(): number;

    /**
     * This function gets the flags of a Element/Weapon|custom weapon.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponFlags Wiki, getWeaponFlags }
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
     */
    getFlags(): boolean;

    /**
     * This function gets the owner of a Element/Weapon|custom weapon. Weapon ownership system
     * was, however, disabled, so this function always returns false. Please refer to
     * setWeaponOwner for details.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponOwner Wiki, getWeaponOwner }
     * @return this function was intended to return the player which owns the element/weapon|custom
     * weapon, and false if an error occured. however, at the moment it always returns false.
     */
    getOwner(): boolean;

    /**
     * This function gets the state of a Element/Weapon|custom weapon.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponState Wiki, getWeaponState }
     * @return * a string if the element/weapon|weapon is valid, indicating the weapon state, which can
     * be:
     * ** reloading: the weapon is reloading.
     * ** firing: the weapon is constantly shooting (unless any shooting blocking flags are set)
     * according to its assigned firing rate.
     * ** ready: the weapon is idle.
     * * false if an error occured or the element/weapon|weapon is invalid.
     */
    getState(): string;

    /**
     * This functions gets the target of a Element/Weapon|custom weapon.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetWeaponTarget Wiki, getWeaponTarget }
     * @return * returns the target of the element/weapon|custom weapon, which can be:
     * **nil if the weapon is in rotation based targeting.
     * **3 float|floats if the weapon is firing at a fixed point.
     * **an element if the weapon is firing an entity.
     * * returns false if the weapon element is not valid.
     */
    getTarget(): null | Element | number;

    /**
     * This function resets the firing rate of a Element/Weapon|custom weapon to the default one.
     * @see {@link https://wiki.multitheftauto.com/wiki/ResetWeaponFiringRate Wiki, resetWeaponFiringRate }
     * @return returns true on success, false otherwise.
     */
    resetFiringRate(): boolean;

    /**
     * This function sets the ammo left in a Element/Weapon|custom weapons magazine/clip.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetWeaponClipAmmo Wiki, setWeaponClipAmmo }
     * @return this function returns true if the arguments are valid and the weapon clip ammo could be
     * changed; false otherwise.
     */
    setClipAmmo(): boolean;

    /**
     * This function sets the firing rate to be used when a Element/Weapon|custom weapon is in
     * firing state.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetWeaponFiringRate Wiki, setWeaponFiringRate }
     * @return returns true on success, false otherwise.
     */
    setFiringRate(): boolean;

    /**
     * This function sets a Element/Weapon|custom weapon flags, used to change how it behaves or
     * finds a possible target to shoot.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetWeaponFlags Wiki, setWeaponFlags }
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
     */
    setFlags(
        enable: boolean
    ): boolean;

    /**
     * This function sets a Element/Weapon|custom weapons state.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetWeaponState Wiki, setWeaponState }
     * @param reloading : makes the weapon reload.
     * @param firing : makes the weapon constantly fire its target (unless any shooting blocking flags are
     * set) according to its assigned firing rate.
     * @param ready : makes the weapon stop reloading or firing.
     * @return returns true on success, false otherwise.
     */
    setState(): boolean;
}
