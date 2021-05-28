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
    DxTexture,
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
 * This function creates a pickup element, which is placed in the GTA world and can be
 * picked up to retrieve a health, armour or a weapon.
 * @see {@link https://wiki.multitheftauto.com/wiki/CreatePickup Wiki, createPickup }
 * @param x : A floating point number representing the X coordinate on the map.
 * @param y : A floating point number representing the Y coordinate on the map.
 * @param z : A floating point number representing the Z coordinate on the map.
 * @param theType : This is an integer representing the type of pickup, representing the following types:
 * @param 0 : Health Pickup
 * @param 1 : Armour Pickup
 * @param 2 : Weapon Pickup
 * @param 3 : Custom Pickup
 * @param amount : This is an integer representing the amount of Health points or Armour points a pickup
 * has.
 * '''OR'''
 * @param weapon : If the type is a Weapon pickup, then it represents the Weapon|weapon ID of the weapon
 * pickup. When used with the weapon pickup type set, the ammo parameter can be used.
 * '''OR'''
 * @param model : If the pickup is a custom model, this is the model id to use. Many non-pickup models
 * can be used, though some may cause crashes. The following is a list of models designed to
 * be used as pickups.
 * @param 1212 Money (wad of cash)
 * @param 1240 Health (heart)
 * @param 1242 Armour
 * @param 1239 Info icon
 * @param 1272 House (blue)
 * @param 1273 House (green)
 * @param 1241 Adrenaline
 * @param 1247 Bribe
 * @param 1248 GTA III sign
 * @param 1252 Bomb from GTA III
 * @param 1253 Photo op
 * @param 1254 Skull
 * @param 1274 Money icon
 * @param 1275 Blue t-shirt
 * @param 1277 Save disk
 * @param 1313 2 Skulls
 * @param 1314 2 Players icon
 * @param 1276 Tiki statue
 * @param 1310 Parachute (with leg straps)
 * @param 1318 Down arrow
 * @param 1279 Drug bundle
 * '''OR'''
 * Other ID Object
 * @param respawnTime : How long before the pickup respawns in milliseconds (This parameter is ignored on the
 * client!)
 * @param ammo : An integer representing the amount of ammo a pickup contains.  This is only valid when
 * the pickup type is a weapon pickup.
 * @return returns pickup element if the pickup was created succesfully, otherwise returns false.
 * @noSelf
 */
export declare function createPickup(
    x: number,
    y: number,
    z: number,
    theType: number,
    amount_weapon_model: number,
    respawnTime?: number,
    ammo?: number
): Pickup;

/**
 * This function retrieves the amount of ammo in a weapon pickup.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPickupAmmo Wiki, getPickupAmmo }
 * @param thePickup The pickup in which you wish to retrieve the ammo of
 * @return returns an integer of the amount of ammo in the pickup, false if the pickup element is
 * invalid, 0 if its no weapon pickup.
 * @noSelf
 */
export declare function getPickupAmmo(
    thePickup: Pickup
): number;

/**
 * This function retrieves the amount of health or armor given from a pickup.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPickupAmount Wiki, getPickupAmount }
 * @param thePickup The pickup you wish to retrieve the amount from.
 * @return returns an integer of the amount the pickup is set to, false if its invalid, 0 if its no
 * health or amor pickup.
 * @noSelf
 */
export declare function getPickupAmount(
    thePickup: Pickup
): number;

/**
 * This function retrieves the type of a pickup, either a health, armour or weapon pickup.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPickupType Wiki, getPickupType }
 * @param thePickup The pickup you wish to retrieve the type of.
 * @return returns false if the pickup is invalid, or an integer of the type of the pickup, which
 * include:
 * *0: health pickup
 * *1: armour pickup
 * *2: weapon pickup
 * *3: custom pickup
 * @noSelf
 */
export declare function getPickupType(
    thePickup: Pickup
): number;

/**
 * This function retrieves the weapon ID of a weapon pickup.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetPickupWeapon Wiki, getPickupWeapon }
 * @param thePickup The pickup of which you wish to retrieve the weapon
 * @return returns the weapons|weapon id of the pickup, or false if the pickup is invalid.
 * @noSelf
 */
export declare function getPickupWeapon(
    thePickup: Pickup
): number;

/**
 * This function allows changing the type of a pickup to a Weapon, Armour or Health pickup,
 * and allows you to set the health points or the weapon and ammo that the pickup will give.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetPickupType Wiki, setPickupType }
 * @param thePickup The pickup which you wish to change the settings of
 * @param theType : An integer representing the type of pickup. You can choose from:
 * @param 0 : Health Pickup
 * @param 1 : Armour Pickup
 * @param 2 : Weapon Pickup
 * @param 3 : Custom Pickup
 * @param amount : This is an integer representing the amount of Health points or Armour points a pickup
 * has.
 * '''OR'''
 * @param weapon : If the type is a Weapon pickup, then it represents the Weapon|weapon ID of the weapon
 * pickup the ammo field must be entered if the type is Weapon Pickup.
 * '''OR'''
 * @param model : If the pickup is a custom model, this is the model id to use. Many non-pickup models
 * can be used, though some may cause crashes. The following is a list of models designed to
 * be used as pickups.
 * @param 370 Jetpack
 * @param 1240 Health (heart)
 * @param 1242 Armour
 * @param 1272 House (blue)
 * @param 1273 House (green)
 * @param 1274 Money (dollar symbol)
 * @param 1277 Save (floppy disk)
 * @param ammo : An integer representing the amount of ammo a pickup contains. This argument is only
 * valid when the pickup type is a Weapon Pickup, and must be specified in that case.
 * @return returns true if successful, false otherwise.
 * @noSelf
 */
export declare function setPickupType(
    thePickup: Pickup,
    theType: number,
    amount_weapon_model: number,
    ammo?: number
): boolean;

/**
 * This function is used to simulate the player using a pickup
 * @see {@link https://wiki.multitheftauto.com/wiki/UsePickup Wiki, usePickup }
 * @param thePickup : The pickup element to be picked up/used.
 * @param thePlayer : The player to use the pickup.
 * @noSelf
 */
export declare function usePickup(
    thePickup: Pickup,
    thePlayer: Player
): boolean;
