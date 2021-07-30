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
    Water,
    Timer,
    HandleFunction,
    TimerCallbackFunction,
    FetchRemoteCallback,
    GenericEventHandler,
    CommandHandler
} from '../structure';

/** @customConstructor RadarArea */
export class RadarArea extends Element {
    /**
     * This function allows detection of whether a radar area is flashing or not.
     */
    flashing: boolean;

    /**
     * Sets the color of an existing radar area.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetRadarAreaColor Wiki, setRadarAreaColor }
     * @param r an integer representing the amount of red in the color (0 for no red, 255 for solid red)
     * @param g an integer representing the amount of green in the color (0 for no green, 255 for solid
     * green)
     * @param b an integer representing the amount of blue in the color (0 for no blue, 255 for solid
     * blue)
     * @param a an integer representing the colors alpha (0 for transparent, 255 for opaque)
     * @return returns true if the color was set successfully, false if the radar area doesnt exist or
     * the color arguments are improper.
     */
    setColor(
        r: number,
        g: number,
        b: number,
        a: number
    ): boolean;

    /**
     * This function allows detection of whether a radar area is flashing or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsRadarAreaFlashing Wiki, isRadarAreaFlashing }
     * @return returns true if the radar area is flashing, false if it is not or if it doesnt exist.
     */
    isFlashing(): boolean;

    /**
     * This function can be used to create custom radar areas on the radar.
     * @see {@link https://wiki.multitheftauto.com/wiki/CreateRadarArea Wiki, createRadarArea }
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
     */
    constructor(
        startPosX: number,
        startPosY: number,
        sizeX: number,
        sizeY: number,
        r?: number,
        g?: number,
        b?: number,
        a?: number,
        visibleTo?: Element
    );

    /**
     * This function can be used to retrieve the current color of a radararea|radar area.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetRadarAreaColor Wiki, getRadarAreaColor }
     * @return returns four integers in rgba format (red, green, blue, alpha), with a maximum value of
     * 255 for each.  alpha decides transparency where 255 is opaque and 0 is transparent.
     * returns false if the radararea is invalid.
     */
    getColor(): LuaMultiReturn<[
        number,
        number,
        number,
        number
    ]>;

    /**
     * This function changes the size of an existing radararea|radar area.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetRadarAreaSize Wiki, setRadarAreaSize }
     * @param x the x length of the radar area.
     * @param y the y length of the radar area.
     * @return returns true if the size was set successfully, false if invalid arguments are passed.
     */
    setSize(
        x: number,
        y: number
    ): boolean;

    /**
     * This function checks if a 2D position is inside a radararea|radar area or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsInsideRadarArea Wiki, isInsideRadarArea }
     * @param posX The X coordinate of the position youre checking.
     * @param posY The Y coordinate of the position youre checking.
     * @return returns true if the position is inside the radar area, false if it isnt or if any
     * parameters are invalid.
     */
    isInside(
        posX: number,
        posY: number
    ): boolean;

    /**
     * This function is used for getting the X and Y size of an existing radararea|radar area.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetRadarAreaSize Wiki, getRadarAreaSize }
     * @return returns two floats indicating the x and y length of the radar area respectively, false if
     * the radar area is invalid.
     */
    getSize(): LuaMultiReturn<[
        number,
        number
    ]>;

    /**
     * This function makes an existing radar area flash in transparency.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetRadarAreaFlashing Wiki, setRadarAreaFlashing }
     * @param flash a bool indicating whether the radar area should flash (true to flash, false to not flash).
     * @return returns true if the new flash state was successfully set, false if the radar area doesnt
     * exist or invalid arguments were passed.
     */
    setFlashing(
        flash: boolean
    ): boolean;
}
