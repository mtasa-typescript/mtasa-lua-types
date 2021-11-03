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

/** @customConstructor MTASAObject */
export class MTASAObject {
    /**
     * This function returns the mass of a specified object.
     */
    mass: number;

    /**
     * This function returns the visible size of an object.
     */
    scale: LuaMultiReturn<[number, number, number]>;

    /**
     * This function checks if an object / model ID is breakable.
     */
    breakable: boolean;

    /**
     */
    moving: boolean;

    /**
     * This function breaks a specific object.
     * @see https://wiki.multitheftauto.com/wiki/BreakObject
     * @return * true if the object was successfully broken.
     * * false if the object is not breakable, or a wrong object was given.
     */
    break(): boolean;

    /**
     * Creates an object element at a given position and rotation.
     * @see https://wiki.multitheftauto.com/wiki/CreateObject
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
     */
    constructor(
        modelId: number,
        x: number,
        y: number,
        z: number,
        rx?: number,
        ry?: number,
        rz?: number,
        isLowLOD?: boolean,
    );

    /**
     * This function returns the mass of a specified object.
     * @see https://wiki.multitheftauto.com/wiki/GetObjectMass
     * @return * a float representing the mass of the object.
     * * false if invalid arguments were passed.
     * * -1 if object was never streamed in.
     */
    getMass(): number;

    /**
     * @see https://wiki.multitheftauto.com/wiki/GetObjectProperty
     * @param property : the property you want to get the value of:
     * <div style="padding-left:20px">
     * * "all" - ''table'' with values of all properties below (OOP method: ''getProperties'')
     * </div>
     * @return on success: table for all, 3 float|floats for center_of_mass or float for other properties
     * on failure: false
     */
    getProperty(property: string): any;

    /**
     * This function returns the visible size of an object.
     * @see https://wiki.multitheftauto.com/wiki/GetObjectScale
     * @return * three float values indicating the scale of the object on the x, y, and z axis if
     * successful, false otherwise.
     */
    getScale(): Vector3;

    /**
     * This function checks if an object / model ID is breakable.
     * @see https://wiki.multitheftauto.com/wiki/IsObjectBreakable
     * @param theObject / modelId The object / model ID thats being checked.
     * @return * true if the object is breakable.
     * * false if the object is not breakable.
     */
    isBreakable(): boolean;

    /**
     * @see https://wiki.multitheftauto.com/wiki/IsObjectMoving
     * @return * true if the object is moving.
     * * false if the object is not moving.
     */
    isMoving(): boolean;

    /**
     * This function will smoothly move an object from its current position to a specified
     * rotation and position.
     * @see https://wiki.multitheftauto.com/wiki/MoveObject
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
     */
    move(
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
        fEasingOvershoot?: number,
    ): boolean;

    /**
     * This function respawns a specific object.
     * @see https://wiki.multitheftauto.com/wiki/RespawnObject
     * @return * true if the object was sucessfully respawned.
     * * false if the object is not breakable, or a wrong object was given.
     */
    respawn(): boolean;

    /**
     * This function sets an object to be breakable/unbreakable.
     * @see https://wiki.multitheftauto.com/wiki/SetObjectBreakable
     * @param object the object thats being set.
     * @param breakable a boolean whether the object is breakable (true) or unbreakable (false).
     * @return * true if the object is now breakable.
     * * false if it cant or if invalid arguments are passed.
     */
    setBreakable(breakable: boolean): boolean;

    /**
     * This function sets the mass of a specified object. Changing the mass leads to a different
     * movement behavior for especially dynamic objects.
     * @see https://wiki.multitheftauto.com/wiki/SetObjectMass
     * @param mass the new mass.
     * @return * true if the new mass value has been.
     * * false otherwise.
     */
    setMass(mass: number): boolean;

    /**
     * @see https://wiki.multitheftauto.com/wiki/SetObjectProperty
     * @param property : the property you want to set the value of:
     * @param value : the new value for the property.
     * @return returns true if the property was set successfully, false otherwise.
     */
    setProperty(property: string, value: unknown): boolean;

    /**
     * This function changes the visible size of an object.
     * @see https://wiki.multitheftauto.com/wiki/SetObjectScale
     * @param scale : a float containing the new scale. 1.0 is the standard scale, with 0.5 being half the
     * size and 2.0 being twice the size. If the scaleY is set, this will be scaleX.
     * @param scaleY : a float containing the new scale on the Y axis
     * @param scaleZ : a float containing the new scale on the Z axis
     * @return * true if the scale was set properly.
     * * false otherwise.
     */
    setScale(vectorized: Vector3): boolean;

    /**
     * This will allow you to stop an object that is currently moving.
     * @see https://wiki.multitheftauto.com/wiki/StopObject
     * @return * true if successful.
     * * false otherwise.
     */
    stop(): boolean;

    /**
     * This function is used to toggle if an object should respawn after it got destroyed
     * @see https://wiki.multitheftauto.com/wiki/ToggleObjectRespawn
     * @param respawn : a bool denoting whether we want to enable (true) or disable (false) respawning
     * @return * true when the it was changed successfully.
     * * false otherwise.
     */
    toggleRespawn(respawn: boolean): boolean;
}