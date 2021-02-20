/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

/**
 * This function breaks a specific object.
 * @see {@link https://wiki.multitheftauto.com/wiki/breakObject|MTASA Wiki}
 * @param theObject an object element
 * @return * ''true'' if the object was successfully broken.
 * * * ''false'' if the object is not breakable, or a wrong object was given.
 */
export function breakObject(theObject: object): boolean;

/**
 * This function returns the mass of a specified object.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getObjectMass|MTASA Wiki}
 * @param theObject the object whose mass you want to get.
 * @return * A [[float]] representing the mass of the object.
 * * * ''false'' if invalid arguments were passed.
 * * * ''-1'' if object was never streamed in.
 */
export function getObjectMass(theObject: object): number;

/**
 * This function checks if an object / model ID is breakable.
 * @see {@link https://wiki.multitheftauto.com/wiki/isObjectBreakable|MTASA Wiki}
 * @return * ''true'' if the object is breakable.
 * * * ''false'' if the object is not breakable.
 */
export function isObjectBreakable(theObject: object): boolean;

/**
 * This function respawns a specific object.
 * @see {@link https://wiki.multitheftauto.com/wiki/respawnObject|MTASA Wiki}
 * @param theObject an object element
 * @return * ''true'' if the object was sucessfully respawned.
 * * * ''false'' if the object is not breakable, or a wrong object was given.
 */
export function respawnObject(theObject: object): boolean;

/**
 * This function sets an object to be breakable/unbreakable.
 * @see {@link https://wiki.multitheftauto.com/wiki/setObjectBreakable|MTASA Wiki}
 * @param breakable a boolean whether the object is breakable (true) or unbreakable (false).
 * @return * ''true'' if the object is now breakable.
 * * * ''false'' if it can't or if invalid arguments are passed.
 */
export function setObjectBreakable(theObject: object, breakable: boolean): boolean;

/**
 * This function sets the mass of a specified object. Changing the mass leads to a different
 * movement behavior for especially dynamic objects.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setObjectMass|MTASA Wiki}
 * @param theObject the object whose mass will be set.
 * @param mass the new mass.
 * @return * ''true'' if the new mass value has been.
 * * * ''false'' otherwise.
 */
export function setObjectMass(theObject: object, mass: number): boolean;

/**
 * This function is used to toggle if an object should respawn after it got destroyed
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/toggleObjectRespawn|MTASA Wiki}
 * @param theObject : the object you want to toggle the respawn from
 * @return * ''true'' when the it was changed successfully.
 * * * ''false'' otherwise.
 */
export function toggleObjectRespawn(theObject: object, respawn: boolean): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getObjectProperty|MTASA Wiki}
 * @param theObject : the object you wish to get a property of.
 * @param property : the property you want to get the value of:  <div style="padding-left:20px">  *
 * "all" - ''table'' with values of all properties below (OOP method: ''getProperties'')  </div>
 * {{Object Properties}}
 * @return On success: [[table]] for '''all''', 3 [[float|floats]] for '''center_of_mass''' or
 * [[float]] for other properties
 * * On failure: ''false''
 */
export function getObjectProperty(theObject: object, property: string): string;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/setObjectProperty|MTASA Wiki}
 * @param theObject : the object you wish to change a property of.
 * @param property : the property you want to set the value of:  {{Object Properties}}
 * @param value : the new value for the property.
 * @return Returns ''true'' if the property was set successfully, ''false'' otherwise.
 */
export function setObjectProperty(theObject: object, property: string, value: any): boolean;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/isObjectMoving|MTASA Wiki}
 * @param theObject The object
 * @return * ''true'' if the object is moving.
 * * * ''false'' if the object is not moving.
 */
export function isObjectMoving(theObject: object): boolean;

/**
 * Creates an [[object]] [[element]] at a given position and rotation.
 * @see {@link https://wiki.multitheftauto.com/wiki/createObject|MTASA Wiki}
 * @param modelId A whole integer specifying the GTA:SA object model ID.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.  {{OptionalArg}}
 * @param rx A floating point number representing the rotation about the X axis in degrees.
 * @param ry A floating point number representing the rotation about the Y axis in degrees.
 * @param rz A floating point number representing the rotation about the Z axis in degrees.  {{New
 * items|3.0120|1.2|
 * @param isLowLOD A bool value specifying if the object will be low LOD. A low LOD object has no
 * collision and a longer draw distance.  }}
 * @default false
 * @return * Returns the [[object]] element if the creation was successful, ''false'' otherwise.
 */
export function createObject(
    modelId: number,
    x: number,
    y: number,
    z: number,
    rx: number,
    ry: number,
    rz: number,
    isLowLOD: boolean,
): object;

/**
 * This function returns the visible size of an object.
 * @see {@link https://wiki.multitheftauto.com/wiki/getObjectScale|MTASA Wiki}
 * @param theObject : the object you wish to return the scale of.
 * @return * Three [[float]] values indicating the scale of the object on the x, y, and z axis if
 * successful, ''false'' otherwise.
 */
export function getObjectScale(theObject: object): LuaMultiReturn<[number, number, number]>;

/**
 * This function will smoothly move an object from its current position to a specified rotation and
 * position.
 * @see {@link https://wiki.multitheftauto.com/wiki/moveObject|MTASA Wiki}
 * @param theObject the object that will be moved.
 * @param time the time in milliseconds the object will arrive at the destination.
 * @param targetx the X value of the target position
 * @param targety the Y value of the target position
 * @param targetz the Z value of the target position
 * @param moverx the rotation along the X axis relative to its current rotation, which is its
 * starting angle.
 * @param movery the rotation along the Y axis relative to its current rotation, which is its
 * starting angle.
 * @param moverz the rotation along the Z axis relative to its current rotation, which is its
 * starting angle.
 * @param strEasingType the Easing|easing function to use for the interpolation (default is Linear)
 * @param fEasingPeriod the period of the Easing|easing function (only some easing functions use
 * this parameter)
 * @param fEasingAmplitude the amplitude of the Easing|easing function (only some easing functions
 * use this parameter)
 * @param fEasingOvershoot the overshoot of the Easing|easing function (only some easing functions
 * use this parameter)
 * @return * ''true'' if the function moved the object succesfully.
 * * * ''false'' otherwise.
 */
export function moveObject(
    theObject: object,
    time: number,
    targetx: number,
    targety: number,
    targetz: number,
    moverx: number,
    movery: number,
    moverz: number,
    strEasingType: string,
    fEasingPeriod: number,
    fEasingAmplitude: number,
    fEasingOvershoot: number,
): boolean;

/**
 * This function changes the visible size of an object.
 * @see {@link https://wiki.multitheftauto.com/wiki/setObjectScale|MTASA Wiki}
 * @param theObject : the object you wish to change the scale of.
 * @param scale : a float containing the new scale. 1.0 is the standard scale, with 0.5 being half
 * the size and 2.0 being twice the size. If the scaleY is set, this will be scaleX.
 * @param scaleY : a float containing the new scale on the Y axis
 * @default scale
 * @param scaleZ : a float containing the new scale on the Z axis
 * @default scale
 * @return * ''true'' if the scale was set properly.
 * * * ''false'' otherwise.
 */
export function setObjectScale(theObject: object, scale: number, scaleY?: number, scaleZ?: number): boolean;

/**
 * This will allow you to stop an object that is currently moving.
 * @see {@link https://wiki.multitheftauto.com/wiki/stopObject|MTASA Wiki}
 * @param theobject the object whose movement you wish to stop
 * @return * ''true'' if successful.
 * * * ''false'' otherwise.
 */
export function stopObject(theobject: object): boolean;
