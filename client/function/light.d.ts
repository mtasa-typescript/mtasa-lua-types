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
    Svg,
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
 * * The direction of the light only has any effect if the light type is spot light.
 * * One light will only apply illumination effects to Element/Ped|peds,
 * Element/Player|players, wheels and number plates (like a emergency vehicle siren light
 * does).
 * * Two or more lights will apply illumination effects to everything (excluding objects)
 * that is in range of, at least, two of them.
 * @see https://wiki.multitheftauto.com/wiki/CreateLight
 * @param lightType An integer representing the type of light to create.
 * @param posX A floating point number representing the X coordinate on the map.
 * @param posY A floating point number representing the Y coordinate on the map.
 * @param posZ A floating point number representing the Z coordinate on the map.
 * @param radius A floating point number representing the radius of the light.
 * @param r An integer number representing the amount of red to use in the colouring of the light (0
 * - 255).
 * @param g An integer number representing the amount of green to use in the colouring of the light
 * (0 - 255).
 * @param b An integer number representing the amount of blue to use in the colouring of the light (0
 * - 255).
 * @param dirX A floating point number representing the light directions X coordinate on the map.
 * @param dirY A floating point number representing the light directions Y coordinate on the map.
 * @param dirZ A floating point number representing the light directions Z coordinate on the map.
 * @param createsShadow A boolean representing whether or not does the light cast shadows.
 * @return returns the element/light|light element if creation was successful, false otherwise.
 * @noSelf
 */
export declare function createLight(
    lightType: number,
    posX: number,
    posY: number,
    posZ: number,
    radius?: number,
    r?: number,
    g?: number,
    b?: number,
    dirX?: number,
    dirY?: number,
    dirZ?: number,
    createsShadow?: boolean,
): Light;

/**
 * This function returns the color for a Element/Light|light element.
 * @see https://wiki.multitheftauto.com/wiki/GetLightColor
 * @param theLight The Element/Light|light that you wish to retrieve the color of.
 * @return returns three ints corresponding to the amount of red, green and blue (respectively) of
 * the light, false if invalid arguments were passed.
 * @noSelf
 */
export declare function getLightColor(
    theLight: Light,
): LuaMultiReturn<[number, number, number]>;

/**
 * This function returns the direction for a Element/Light|light element.
 * @see https://wiki.multitheftauto.com/wiki/GetLightDirection
 * @param theLight The Element/Light|light that you wish to retrieve the direction of.
 * @return returns three ints corresponding to the x, y and z coordinates (respectively) of the
 * light direction, false if invalid arguments were passed.
 * @noSelf
 */
export declare function getLightDirection(
    theLight: Light,
): LuaMultiReturn<[number, number, number]>;

/**
 * This function returns the radius for a Element/Light|light element.
 * @see https://wiki.multitheftauto.com/wiki/GetLightRadius
 * @param theLight The Element/Light|light that you wish to retrieve the radius of.
 * @return returns a float containing the radius of the specified light, false if invalid arguments
 * were passed.
 * @noSelf
 */
export declare function getLightRadius(theLight: Light): number;

/**
 * This function returns the type for a Element/Light|light element.
 * @see https://wiki.multitheftauto.com/wiki/GetLightType
 * @param theLight The Element/Light|light that you wish to retrieve the type of.
 * @return returns an int containing the type of the specified light, false if invalid arguments
 * were passed.
 * @noSelf
 */
export declare function getLightType(theLight: Light): number;

/**
 * This function sets the color for a Element/Light|light element.
 * @see https://wiki.multitheftauto.com/wiki/SetLightColor
 * @param theLight The Element/Light|light that you wish to set the color of.
 * @return returns true if the function was successful, false otherwise.
 * @noSelf
 */
export declare function setLightColor(
    theLight: Light,
    r: number,
    g: number,
    b: number,
): boolean;

/**
 * This function sets the direction for a Element/Light|light element.
 * @see https://wiki.multitheftauto.com/wiki/SetLightDirection
 * @param theLight The Element/Light|light that you wish to set the direction of.
 * @return returns true if the function was successful, false otherwise.
 * @noSelf
 */
export declare function setLightDirection(
    theLight: Light,
    x: number,
    y: number,
    z: number,
): boolean;

/**
 * This function sets the radius for a Element/Light|light element.
 * @see https://wiki.multitheftauto.com/wiki/SetLightRadius
 * @param theLight The Element/Light|light that you wish to set the radius of.
 * @return returns true if the function was successful, false otherwise.
 * @noSelf
 */
export declare function setLightRadius(
    theLight: Light,
    radius: number,
): boolean;
