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
 * Creates an object element at a given position and rotation.
 * @see {@link https://wiki.multitheftauto.com/wiki/CreateObject Wiki, createObject }
 * @param modelId A whole integer specifying the GTA:SA object model ID.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param rx A floating point number representing the rotation about the X axis in degrees.
 * @param ry A floating point number representing the rotation about the Y axis in degrees.
 * @param rz A floating point number representing the rotation about the Z axis in degrees.
 * @param isLowLOD A bool value specifying if the object will be low LOD. A low LOD object has no collision
 * and a longer draw distance.
 * @return * returns the object element if the creation was successful, false otherwise.
 * @noSelf
 */
export declare function createObject(
    modelId: number,
    x: number,
    y: number,
    z: number,
    rx?: number,
    ry?: number,
    rz?: number,
    isLowLOD?: boolean
): MTASAObject;

/**
 * This function returns the visible size of an object.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetObjectScale Wiki, getObjectScale }
 * @param theObject : the object you wish to return the scale of.
 * @return * three float values indicating the scale of the object on the x, y, and z axis if
 * successful, false otherwise.
 * @noSelf
 */
export declare function getObjectScale(
    theObject: MTASAObject
): LuaMultiReturn<[
    number,
    number,
    number
]>;

/**
 * This function will smoothly move an object from its current position to a specified
 * rotation and position.
 * @see {@link https://wiki.multitheftauto.com/wiki/MoveObject Wiki, moveObject }
 * @param theObject the object that will be moved.
 * @param time the time in milliseconds the object will arrive at the destination.
 * @param targetx the X value of the target position
 * @param targety the Y value of the target position
 * @param targetz the Z value of the target position
 * @param moverx the rotation along the X axis relative to its current rotation, which is its starting
 * angle.
 * @param movery the rotation along the Y axis relative to its current rotation, which is its starting
 * angle.
 * @param moverz the rotation along the Z axis relative to its current rotation, which is its starting
 * angle.
 * @param strEasingType the Easing|easing function to use for the interpolation (default is Linear)
 * @param fEasingPeriod the period of the Easing|easing function (only some easing functions use this parameter)
 * @param fEasingAmplitude the amplitude of the Easing|easing function (only some easing functions use this
 * parameter)
 * @param fEasingOvershoot the overshoot of the Easing|easing function (only some easing functions use this
 * parameter)
 * @return * true if the function moved the object succesfully.
 * * false otherwise.
 * @noSelf
 */
export declare function moveObject(
    theObject: MTASAObject,
    time: number,
    targetx: number,
    targety: number,
    targetz: number,
    moverx?: number,
    movery?: number,
    moverz?: number,
    strEasingType?: string,
    fEasingPeriod?: number,
    fEasingAmplitude?: number,
    fEasingOvershoot?: number
): boolean;

/**
 * This function changes the visible size of an object.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetObjectScale Wiki, setObjectScale }
 * @param theObject : the object you wish to change the scale of.
 * @param scale : a float containing the new scale. 1.0 is the standard scale, with 0.5 being half the
 * size and 2.0 being twice the size. If the scaleY is set, this will be scaleX.
 * @param scaleY : a float containing the new scale on the Y axis
 * @param scaleZ : a float containing the new scale on the Z axis
 * @return * true if the scale was set properly.
 * * false otherwise.
 * @noSelf
 */
export declare function setObjectScale(
    theObject: MTASAObject,
    scale: number,
    scaleY?: number,
    scaleZ?: number
): boolean;

/**
 * This will allow you to stop an object that is currently moving.
 * @see {@link https://wiki.multitheftauto.com/wiki/StopObject Wiki, stopObject }
 * @param theobject the object whose movement you wish to stop
 * @return * true if successful.
 * * false otherwise.
 * @noSelf
 */
export declare function stopObject(
    theobject: MTASAObject
): boolean;
