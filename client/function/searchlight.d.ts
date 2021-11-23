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
 * @see https://wiki.multitheftauto.com/wiki/CreateSearchLight
 * @param startX : the X coordinate where the searchlight light cone will start.
 * @param startY : the Y coordinate where the searchlight light cone will start.
 * @param startZ : the Z coordinate where the searchlight light cone will start.
 * @param endX : the X coordinate of the direction where the searchlight will point to.
 * @param endY : the Y coordinate of the direction where the searchlight will point to.
 * @param endZ : the Z coordinate of the direction where the searchlight will point to.
 * @param startRadius : the radius of the searchlights light cone in its beginning.
 * @param endRadius : the radius of the searchlights light cone in its end.
 * @param renderSpot : if true, the searchlight will lighten the surface where it ends.
 * @return if every argument is correct and the limit of 1000 searchlights has not been reached,
 * this function returns a element/searchlight|searchlight element. otherwise, it returns
 * false.
 * @noSelf
 */
export declare function createSearchLight(
    startX: number,
    startY: number,
    startZ: number,
    endX: number,
    endY: number,
    endZ: number,
    startRadius: number,
    endRadius: number,
    renderSpot?: boolean,
): Searchlight;

/**
 * This function gets the end position of a Element/Searchlight|searchlight element.
 * @see https://wiki.multitheftauto.com/wiki/GetSearchLightEndPosition
 * @param theSearchLight : the searchlight to get the position where the searchlights light cone ends.
 * @return if the specified searchlight element is valid, this function will return three float,
 * which are the three coordinates of searchlights end position. if not, it will return
 * false plus an error message.
 * @noSelf
 */
export declare function getSearchLightEndPosition(
    theSearchLight: Searchlight,
): LuaMultiReturn<[number, number, number]>;

/**
 * This function gets the end radius of a Element/Searchlight|searchlight element.
 * @see https://wiki.multitheftauto.com/wiki/GetSearchLightEndRadius
 * @param theSearchLight : the searchlight to get the radius of the searchlights light cone in its end.
 * @return if the specified searchlight element is valid, this function will return one float, which
 * is the searchlights end radius. if not, it will return false plus an error message.
 * @noSelf
 */
export declare function getSearchLightEndRadius(
    theSearchLight: Searchlight,
): number;

/**
 * This function gets the start position of a Element/Searchlight|searchlight element.
 * @see https://wiki.multitheftauto.com/wiki/GetSearchLightStartPosition
 * @param theSearchLight : the searchlight to get the position where the searchlights light cone starts.
 * @return if the specified searchlight element is valid, this function will return three float,
 * which are the three coordinates of searchlights start position. if not, it will return
 * false plus an error message.
 * @noSelf
 */
export declare function getSearchLightStartPosition(
    theSearchLight: Searchlight,
): LuaMultiReturn<[number, number, number]>;

/**
 * This function gets the start radius of a Element/Searchlight|searchlight element.
 * @see https://wiki.multitheftauto.com/wiki/GetSearchLightStartRadius
 * @param theSearchLight : the searchlight to get the radius of the searchlights light cone in its beginning.
 * @return if the specified searchlight element is valid, this function will return one float, which
 * is the searchlights start radius. if not, it will return false plus an error message.
 * @noSelf
 */
export declare function getSearchLightStartRadius(
    theSearchLight: Searchlight,
): number;

/**
 * @see https://wiki.multitheftauto.com/wiki/SetSearchLightEndPosition
 * @param theSearchLight : the searchlight to modify the property of.
 * @param endX : the X coordinate where the searchlight light cone will end.
 * @param endY : the Y coordinate where the searchlight light cone will end.
 * @param endZ : the Z coordinate where the searchlight light cone will end.
 * @return if every argument is correct, this function returns true. if not, it will return false
 * plus an error message.
 * @noSelf
 */
export declare function setSearchLightEndPosition(
    theSearchLight: Searchlight,
    endX: number,
    endY: number,
    endZ: number,
): boolean;

/**
 * This function sets the end radius of a Element/Searchlight|searchlight element.
 * @see https://wiki.multitheftauto.com/wiki/SetSearchLightEndRadius
 * @param theSearchLight : the searchlight to modify the property of.
 * @param endRadius : the radius of the searchlights light cone in its end.
 * @return if every argument is correct, this function returns true. if not, it will return false
 * plus an error message.
 * @noSelf
 */
export declare function setSearchLightEndRadius(
    theSearchlight: Searchlight,
    endRadius: number,
): boolean;

/**
 * This function sets the start position of a Element/Searchlight|searchlight element.
 * @see https://wiki.multitheftauto.com/wiki/SetSearchLightStartPosition
 * @param theSearchLight : the searchlight to modify the property of.
 * @param startX : the X coordinate where the searchlight light cone will start.
 * @param startY : the Y coordinate where the searchlight light cone will start.
 * @param startZ : the Z coordinate where the searchlight light cone will start.
 * @return if every argument is correct, this function returns true. if not, it will return false
 * plus an error message.
 * @noSelf
 */
export declare function setSearchLightStartPosition(
    theSearchLight: Searchlight,
    startX: number,
    startY: number,
    startZ: number,
): boolean;

/**
 * This function sets the start radius of a Element/Searchlight|searchlight element.
 * @see https://wiki.multitheftauto.com/wiki/SetSearchLightStartRadius
 * @param theSearchLight : the searchlight to modify the property of.
 * @param startRadius : the radius of the searchlights light cone in its beginning.
 * @return if every argument is correct, this function returns true. if not, it will return false
 * plus an error message.
 * @noSelf
 */
export declare function setSearchLightStartRadius(
    theSearchlight: Searchlight,
    startRadius: number,
): boolean;
