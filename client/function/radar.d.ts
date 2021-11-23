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
 * This function can be used to create custom radar areas on the radar.
 * @see https://wiki.multitheftauto.com/wiki/CreateRadarArea
 * @param startPosX A float representing the origin x position of the radar area.
 * @param startPosY A float representing the origin y position of the radar area.
 * @param sizeX A float representing the width of the radar area.
 * @param sizeY A float representing the height of the radar area.
 * @param r An integer representing the amount of red in the color.  Maximum value is 255
 * @param g An integer representing the amount of green in the color.  Maximum value is 255
 * @param b An integer representing the amount of blue in the color.  Maximum value is 255
 * @param a An integer representing the amount of alpha in the color.  This allows setting the
 * transparency of the radar area.  255 is opaque and 0 is transparent.
 * @param visibleTo An element that you wish to restrict the visibility of the radar area to. (Server
 * function only)
 * @noSelf
 */
export declare function createRadarArea(
    startPosX: number,
    startPosY: number,
    sizeX: number,
    sizeY: number,
    r?: number,
    g?: number,
    b?: number,
    a?: number,
    visibleTo?: Element,
): RadarArea;

/**
 * This function can be used to retrieve the current color of a radararea|radar area.
 * @see https://wiki.multitheftauto.com/wiki/GetRadarAreaColor
 * @param theRadararea The radararea|radar area you wish to retrieve the colour of.
 * @return returns four integers in rgba format (red, green, blue, alpha), with a maximum value of
 * 255 for each.  alpha decides transparency where 255 is opaque and 0 is transparent.
 * returns false if the radararea is invalid.
 * @noSelf
 */
export declare function getRadarAreaColor(
    theRadararea: RadarArea,
): LuaMultiReturn<[number, number, number, number]>;

/**
 * This function is used for getting the X and Y size of an existing radararea|radar area.
 * @see https://wiki.multitheftauto.com/wiki/GetRadarAreaSize
 * @param theRadararea The radararea|radar area element whose size you wish to get.
 * @return returns two floats indicating the x and y length of the radar area respectively, false if
 * the radar area is invalid.
 * @noSelf
 */
export declare function getRadarAreaSize(
    theRadararea: RadarArea,
): LuaMultiReturn<[number, number]>;

/**
 * This function checks if a 2D position is inside a radararea|radar area or not.
 * @see https://wiki.multitheftauto.com/wiki/IsInsideRadarArea
 * @param theArea The radararea|radar area youre checking the position against.
 * @param posX The X coordinate of the position youre checking.
 * @param posY The Y coordinate of the position youre checking.
 * @return returns true if the position is inside the radar area, false if it isnt or if any
 * parameters are invalid.
 * @noSelf
 */
export declare function isInsideRadarArea(
    theArea: RadarArea,
    posX: number,
    posY: number,
): boolean;

/**
 * This function allows detection of whether a radar area is flashing or not.
 * @see https://wiki.multitheftauto.com/wiki/IsRadarAreaFlashing
 * @param theRadararea The radar area you wish to check the state of flashing
 * @return returns true if the radar area is flashing, false if it is not or if it doesnt exist.
 * @noSelf
 */
export declare function isRadarAreaFlashing(theRadararea: RadarArea): boolean;

/**
 * Sets the color of an existing radar area.
 * @see https://wiki.multitheftauto.com/wiki/SetRadarAreaColor
 * @param theRadarArea the radararea element whose color you wish to set.
 * @param r an integer representing the amount of red in the color (0 for no red, 255 for solid red)
 * @param g an integer representing the amount of green in the color (0 for no green, 255 for solid
 * green)
 * @param b an integer representing the amount of blue in the color (0 for no blue, 255 for solid
 * blue)
 * @param a an integer representing the colors alpha (0 for transparent, 255 for opaque)
 * @return returns true if the color was set successfully, false if the radar area doesnt exist or
 * the color arguments are improper.
 * @noSelf
 */
export declare function setRadarAreaColor(
    theRadarArea: RadarArea,
    r: number,
    g: number,
    b: number,
    a: number,
): boolean;

/**
 * This function makes an existing radar area flash in transparency.
 * @see https://wiki.multitheftauto.com/wiki/SetRadarAreaFlashing
 * @param theRadarArea the radararea element we want to change flashing state of.
 * @param flash a bool indicating whether the radar area should flash (true to flash, false to not flash).
 * @return returns true if the new flash state was successfully set, false if the radar area doesnt
 * exist or invalid arguments were passed.
 * @noSelf
 */
export declare function setRadarAreaFlashing(
    theRadarArea: RadarArea,
    flash: boolean,
): boolean;

/**
 * This function changes the size of an existing radararea|radar area.
 * @see https://wiki.multitheftauto.com/wiki/SetRadarAreaSize
 * @param theRadararea the radararea element whose size is to be changed.
 * @param x the x length of the radar area.
 * @param y the y length of the radar area.
 * @return returns true if the size was set successfully, false if invalid arguments are passed.
 * @noSelf
 */
export declare function setRadarAreaSize(
    theRadararea: RadarArea,
    x: number,
    y: number,
): boolean;
