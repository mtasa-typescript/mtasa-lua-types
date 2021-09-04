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
    ControlName,
    KeyName,
    KeyState,
    Vector2,
    Vector3,
    Vector4,
    Matrix,
} from '../structure';

/** @customConstructor Pickup */
export class Pickup extends Element {
    /**
     * This function creates a pickup element, which is placed in the GTA world and can be
     * picked up to retrieve a health, armour or a weapon.
     * @see https://wiki.multitheftauto.com/wiki/CreatePickup
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
     */
    constructor(
        x: number,
        y: number,
        z: number,
        theType: number,
        amount_weapon_model: number,
        respawnTime?: number,
        ammo?: number,
    );
}
