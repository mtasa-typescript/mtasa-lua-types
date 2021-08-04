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
    ControlName,
    KeyName,
    KeyState
} from '../structure';

/**
 * Creates an explosion of a certain type at a specified point in the world. If creator is
 * specified, the explosion will occur only in its dimension.
 * @see https://wiki.multitheftauto.com/wiki/CreateExplosion
 * @param x a float value that specifies the X world coordinate where the explosion is created at.
 * @param y a float value that specifies the Y world coordinate where the explosion is created at.
 * @param z a float value that specifies the Z world coordinate where the explosion is created at.
 * @param theType an integer specifying the explosion type. Valid types are:
 * @param creator the explosions simulated creator, the player responsible for it.
 * @noSelf
 */
export declare function createExplosion(
    x: number,
    y: number,
    z: number,
    theType: number,
    creator?: Player
): boolean;
