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
    CommandHandler,
    BindKeyCallback,
    ControlName,
    KeyName,
    KeyState
} from '../structure';

/** @customConstructor Searchlight */
export class Searchlight extends Element {
    /**
     * This function gets the end position of a Element/Searchlight|searchlight element.
     */
    endPosition: LuaMultiReturn<[
        number,
        number,
        number
    ]>;

    /**
     * This function gets the end radius of a Element/Searchlight|searchlight element.
     */
    endRadius: number;

    /**
     * This function gets the start position of a Element/Searchlight|searchlight element.
     */
    startPosition: LuaMultiReturn<[
        number,
        number,
        number
    ]>;

    /**
     * This function gets the start radius of a Element/Searchlight|searchlight element.
     */
    startRadius: number;

    /**
     * @see {@link https://wiki.multitheftauto.com/wiki/CreateSearchLight Wiki, createSearchLight }
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
     */
    constructor(
        startX: number,
        startY: number,
        startZ: number,
        endX: number,
        endY: number,
        endZ: number,
        startRadius: number,
        endRadius: number,
        renderSpot?: boolean
    );

    /**
     * @see {@link https://wiki.multitheftauto.com/wiki/SetSearchLightEndPosition Wiki, setSearchLightEndPosition }
     * @param endX : the X coordinate where the searchlight light cone will end.
     * @param endY : the Y coordinate where the searchlight light cone will end.
     * @param endZ : the Z coordinate where the searchlight light cone will end.
     * @return if every argument is correct, this function returns true. if not, it will return false
     * plus an error message.
     */
    setEndPosition(
        endX: number,
        endY: number,
        endZ: number
    ): boolean;

    /**
     * This function gets the end position of a Element/Searchlight|searchlight element.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSearchLightEndPosition Wiki, getSearchLightEndPosition }
     * @return if the specified searchlight element is valid, this function will return three float,
     * which are the three coordinates of searchlights end position. if not, it will return
     * false plus an error message.
     */
    getEndPosition(): LuaMultiReturn<[
        number,
        number,
        number
    ]>;

    /**
     * This function gets the end radius of a Element/Searchlight|searchlight element.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSearchLightEndRadius Wiki, getSearchLightEndRadius }
     * @return if the specified searchlight element is valid, this function will return one float, which
     * is the searchlights end radius. if not, it will return false plus an error message.
     */
    getEndRadius(): number;

    /**
     * This function gets the start position of a Element/Searchlight|searchlight element.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSearchLightStartPosition Wiki, getSearchLightStartPosition }
     * @return if the specified searchlight element is valid, this function will return three float,
     * which are the three coordinates of searchlights start position. if not, it will return
     * false plus an error message.
     */
    getStartPosition(): LuaMultiReturn<[
        number,
        number,
        number
    ]>;

    /**
     * This function gets the start radius of a Element/Searchlight|searchlight element.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetSearchLightStartRadius Wiki, getSearchLightStartRadius }
     * @return if the specified searchlight element is valid, this function will return one float, which
     * is the searchlights start radius. if not, it will return false plus an error message.
     */
    getStartRadius(): number;

    /**
     * This function sets the end radius of a Element/Searchlight|searchlight element.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetSearchLightEndRadius Wiki, setSearchLightEndRadius }
     * @param theSearchLight : the searchlight to modify the property of.
     * @param endRadius : the radius of the searchlights light cone in its end.
     * @return if every argument is correct, this function returns true. if not, it will return false
     * plus an error message.
     */
    setEndRadius(
        endRadius: number
    ): boolean;

    /**
     * This function sets the start position of a Element/Searchlight|searchlight element.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetSearchLightStartPosition Wiki, setSearchLightStartPosition }
     * @param startX : the X coordinate where the searchlight light cone will start.
     * @param startY : the Y coordinate where the searchlight light cone will start.
     * @param startZ : the Z coordinate where the searchlight light cone will start.
     * @return if every argument is correct, this function returns true. if not, it will return false
     * plus an error message.
     */
    setStartPosition(
        startX: number,
        startY: number,
        startZ: number
    ): boolean;

    /**
     * This function sets the start radius of a Element/Searchlight|searchlight element.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetSearchLightStartRadius Wiki, setSearchLightStartRadius }
     * @param theSearchLight : the searchlight to modify the property of.
     * @param startRadius : the radius of the searchlights light cone in its beginning.
     * @return if every argument is correct, this function returns true. if not, it will return false
     * plus an error message.
     */
    setStartRadius(
        startRadius: number
    ): boolean;
}
