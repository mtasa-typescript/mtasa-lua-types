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
    HandleFunction,
    TimerCallbackFunction,
    FetchRemoteCallback,
    GenericEventHandler,
    CommandHandler
} from '../structure';

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/GetObjectProperty Wiki, getObjectProperty }
 * @param theObject : the object you wish to get a property of.
 * @param property : the property you want to get the value of:
 * <div style="padding-left:20px">
 * * "all" - ''table'' with values of all properties below (OOP method: ''getProperties'')
 * </div>
 * @return on success: table for all, 3 float|floats for center_of_mass or float for other properties
 * on failure: false
 * @noSelf
 */
export declare function getObjectProperty(
    theObject: MTASAObject,
    property: string
): any;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/IsObjectMoving Wiki, isObjectMoving }
 * @param theObject The object
 * @return * true if the object is moving.
 * * false if the object is not moving.
 * @noSelf
 */
export declare function isObjectMoving(
    theObject: MTASAObject
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/SetObjectProperty Wiki, setObjectProperty }
 * @param theObject : the object you wish to change a property of.
 * @param property : the property you want to set the value of:
 * @param value : the new value for the property.
 * @return returns true if the property was set successfully, false otherwise.
 * @noSelf
 */
export declare function setObjectProperty(
    theObject: MTASAObject,
    property: string,
    value: unknown
): boolean;

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
 * This function breaks a specific object.
 * @see {@link https://wiki.multitheftauto.com/wiki/BreakObject Wiki, breakObject }
 * @param theObject an object element
 * @return * true if the object was successfully broken.
 * * false if the object is not breakable, or a wrong object was given.
 * @noSelf
 */
export declare function breakObject(
    theObject: MTASAObject
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
 * This function checks if an object / model ID is breakable.
 * @see {@link https://wiki.multitheftauto.com/wiki/IsObjectBreakable Wiki, isObjectBreakable }
 * @param theObject / modelId The object / model ID thats being checked.
 * @return * true if the object is breakable.
 * * false if the object is not breakable.
 * @noSelf
 */
export declare function isObjectBreakable(
    theObject: MTASAObject | number
): boolean;

/**
 * This function is used to toggle if an object should respawn after it got destroyed
 * @see {@link https://wiki.multitheftauto.com/wiki/ToggleObjectRespawn Wiki, toggleObjectRespawn }
 * @param theObject : the object you want to toggle the respawn from
 * @param respawn : a bool denoting whether we want to enable (true) or disable (false) respawning
 * @return * true when the it was changed successfully.
 * * false otherwise.
 * @noSelf
 */
export declare function toggleObjectRespawn(
    theObject: MTASAObject,
    respawn: boolean
): boolean;

/**
 * This function respawns a specific object.
 * @see {@link https://wiki.multitheftauto.com/wiki/RespawnObject Wiki, respawnObject }
 * @param theObject an object element
 * @return * true if the object was sucessfully respawned.
 * * false if the object is not breakable, or a wrong object was given.
 * @noSelf
 */
export declare function respawnObject(
    theObject: MTASAObject
): boolean;

/**
 * This function returns the mass of a specified object.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetObjectMass Wiki, getObjectMass }
 * @param theObject the object whose mass you want to get.
 * @return * a float representing the mass of the object.
 * * false if invalid arguments were passed.
 * * -1 if object was never streamed in.
 * @noSelf
 */
export declare function getObjectMass(
    theObject: MTASAObject
): number;

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
 * This function sets an object to be breakable/unbreakable.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetObjectBreakable Wiki, setObjectBreakable }
 * @param object the object thats being set.
 * @param breakable a boolean whether the object is breakable (true) or unbreakable (false).
 * @return * true if the object is now breakable.
 * * false if it cant or if invalid arguments are passed.
 * @noSelf
 */
export declare function setObjectBreakable(
    theObject: MTASAObject,
    breakable: boolean
): boolean;

/**
 * This function sets the mass of a specified object. Changing the mass leads to a different
 * movement behavior for especially dynamic objects.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetObjectMass Wiki, setObjectMass }
 * @param theObject the object whose mass will be set.
 * @param mass the new mass.
 * @return * true if the new mass value has been.
 * * false otherwise.
 * @noSelf
 */
export declare function setObjectMass(
    theObject: MTASAObject,
    mass: number
): boolean;

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
