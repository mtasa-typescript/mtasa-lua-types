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

/** @customConstructor Blip */
export class Blip extends Element {
    /**
     * This function returns the icon a blip currently has.
     */
    icon: number;

    /**
     * This function gets the Z ordering value of a blip. The Z ordering determines if a blip
     * appears on top of or below other blips. Blips with a higher Z ordering value appear on
     * top of blips with a lower value. The default value for all blips is 0.
     */
    ordering: number;

    /**
     * This function gets the size of a blip..
     */
    size: number;

    /**
     * This function will tell you what visible distance a blip has.
     */
    visibleDistance: number;

    /**
     * This function will tell you what color a blip is. This color is only applicable to the
     * default blip icon (Image:Blipid0s.png|12px, Image:Blipid0u.png|12px or
     * Image:Blipid0d.png|12px). All other icons will ignore this.
     * @see https://wiki.multitheftauto.com/wiki/GetBlipColor
     * @return returns four integers in rgba format, with a maximum value of 255 for each. the values
     * are, in order, red, green, blue, and alpha.  alpha decides the transparancy where 255 is
     * opaque and 0 is fully transparent. false is returned if the blip is invalid.
     */
    getColor(): LuaMultiReturn<[number, number, number, number]>;

    /**
     * This function returns the icon a blip currently has.
     * @see https://wiki.multitheftauto.com/wiki/GetBlipIcon
     * @return returns an int indicating which icon the blip has. valid values are listed on the radar
     * blips page.
     */
    getIcon(): number;

    /**
     * This function gets the Z ordering value of a blip. The Z ordering determines if a blip
     * appears on top of or below other blips. Blips with a higher Z ordering value appear on
     * top of blips with a lower value. The default value for all blips is 0.
     * @see https://wiki.multitheftauto.com/wiki/GetBlipOrdering
     * @return returns the z ordering value of the blip if successful, false otherwise.
     */
    getOrdering(): number;

    /**
     * This function gets the size of a blip..
     * @see https://wiki.multitheftauto.com/wiki/GetBlipSize
     * @return returns an int indicating the size of the blip. the default value is 2. the maximum value
     * is 25.
     */
    getSize(): number;

    /**
     * This function will tell you what visible distance a blip has.
     * @see https://wiki.multitheftauto.com/wiki/GetBlipVisibleDistance
     * @return returns one float with the blips visible distance, false if the blip is invalid.
     */
    getVisibleDistance(): number;

    /**
     * This function will let you change the color of a blip. This color is only applicable to
     * the default blip icon (Image:Blipid0s.png|12px, Image:Blipid0u.png|12px or
     * Image:Blipid0d.png|12px). All other icons will ignore this.
     * @see https://wiki.multitheftauto.com/wiki/SetBlipColor
     * @param red The amount of red in the blips color (0 - 255).
     * @param green The amount of green in the blips color (0 - 255).
     * @param blue The amount of blue in the blips color (0 - 255).
     * @param alpha The amount of alpha in the blips color (0 - 255).  Alpha decides transparancy where 255
     * is opaque and 0 is transparent.
     * @return returns true if the blips color was set successfully. returns false if the blip passed to
     * the function is invalid, or any of the colors are out of the valid range.
     */
    setColor(red: number, green: number, blue: number, alpha: number): boolean;

    /**
     * This function sets the icon for an existing blip element.
     * @see https://wiki.multitheftauto.com/wiki/SetBlipIcon
     * @param icon A number indicating the icon you wish to change it do. Valid values are listed on the
     * Radar Blips page.
     * @return returns true if the icon was successfully set, false if the element passed was not a
     * valid blip or the icon value was not a valid icon number.
     */
    setIcon(icon: number): boolean;

    /**
     * This function sets the Z ordering of a blip. It allows you to make a blip appear on top
     * of or below other blips.
     * @see https://wiki.multitheftauto.com/wiki/SetBlipOrdering
     * @param ordering the new Z ordering value. Blips with higher values will appear on top of blips with lower
     * values. Possible range: -32767 to 32767. Default: 0.
     * @return returns true if the blip ordering was changed successfully, false otherwise.
     */
    setOrdering(ordering: number): boolean;

    /**
     * This function sets the size of a blips icon.
     * @see https://wiki.multitheftauto.com/wiki/SetBlipSize
     * @param iconSize The size you wish the icon to be. 2 is the default value. 25 is the maximum value. Value
     * gets clamped between 0 and 25.
     * @return returns an true if the blips size was set successfully. returns false if the element
     * passed was not a blip or if the icon size passed was invalid.
     */
    setSize(iconSize: number): boolean;

    /**
     * This function will set the visible distance of a blip.
     * @see https://wiki.multitheftauto.com/wiki/SetBlipVisibleDistance
     * @param theDistance The distance you want the blip to be visible for. Value gets clamped between 0 and 65535.
     * @return returns true if successful, false otherwise.
     */
    setVisibleDistance(theDistance: number): boolean;
}