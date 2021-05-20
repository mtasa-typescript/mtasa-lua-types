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
    HandleFunction
} from '../structure';

/**
 * This function creates a blip element, which is displayed as an icon on the clients radar.
 * @see {@link https://wiki.multitheftauto.com/wiki/CreateBlip Wiki, createBlip }
 * @noSelf
 */
export declare function createBlip(
    x: number,
    y: number,
    z: number,
    icon?: number,
    size?: number,
    r?: number,
    g?: number,
    b?: number,
    a?: number,
    ordering?: number,
    visibleDistance?: number,
    visibleTo?: Element
): Blip;

/**
 * This function creates a blip that is attached to an element. This blip is displayed as an
 * icon on the clients radar and will follow the element that it is attached to around.
 * @see {@link https://wiki.multitheftauto.com/wiki/CreateBlipAttachedTo Wiki, createBlipAttachedTo }
 * @noSelf
 */
export declare function createBlipAttachedTo(
    elementToAttachTo: Element,
    icon?: number,
    size?: number,
    r?: number,
    g?: number,
    b?: number,
    a?: number,
    ordering?: number,
    visibleDistance?: number,
    visibleTo?: Element
): Blip;

/**
 * This function will tell you what color a blip is. This color is only applicable to the
 * default blip icon (Image:Blipid0s.png|12px, Image:Blipid0u.png|12px or
 * Image:Blipid0d.png|12px). All other icons will ignore this.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetBlipColor Wiki, getBlipColor }
 * @param theBlip The blip whose color you wish to get.
 * @return returns four integers in rgba format, with a maximum value of 255 for each. the values
 * are, in order, red, green, blue, and alpha.  alpha decides the transparancy where 255 is
 * opaque and 0 is fully transparent. false is returned if the blip is invalid.
 * @noSelf
 */
export declare function getBlipColor(
    theBlip: Blip
): LuaMultiReturn<[
    number,
    number,
    number,
    number
]>;

/**
 * This function returns the icon a blip currently has.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetBlipIcon Wiki, getBlipIcon }
 * @param theBlip : the blip were getting the icon number of.
 * @return returns an int indicating which icon the blip has. valid values are listed on the radar
 * blips page.
 * @noSelf
 */
export declare function getBlipIcon(
    theBlip: Blip
): number;

/**
 * This function gets the Z ordering value of a blip. The Z ordering determines if a blip
 * appears on top of or below other blips. Blips with a higher Z ordering value appear on
 * top of blips with a lower value. The default value for all blips is 0.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetBlipOrdering Wiki, getBlipOrdering }
 * @param theBlip the blip to retrieve the Z ordering value of.
 * @return returns the z ordering value of the blip if successful, false otherwise.
 * @noSelf
 */
export declare function getBlipOrdering(
    theBlip: Blip
): number;

/**
 * This function gets the size of a blip..
 * @see {@link https://wiki.multitheftauto.com/wiki/GetBlipSize Wiki, getBlipSize }
 * @param theBlip The blip you wish to get the size of.
 * @return returns an int indicating the size of the blip. the default value is 2. the maximum value
 * is 25.
 * @noSelf
 */
export declare function getBlipSize(
    theBlip: Blip
): number;

/**
 * This function will tell you what visible distance a blip has.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetBlipVisibleDistance Wiki, getBlipVisibleDistance }
 * @param theBlip The blip whose visible distance you wish to get.
 * @return returns one float with the blips visible distance, false if the blip is invalid.
 * @noSelf
 */
export declare function getBlipVisibleDistance(
    theBlip: Blip
): number;

/**
 * This function will let you change the color of a blip. This color is only applicable to
 * the default blip icon (Image:Blipid0s.png|12px, Image:Blipid0u.png|12px or
 * Image:Blipid0d.png|12px). All other icons will ignore this.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetBlipColor Wiki, setBlipColor }
 * @param theBlip The blip whos color you wish to set.
 * @param red The amount of red in the blips color (0 - 255).
 * @param green The amount of green in the blips color (0 - 255).
 * @param blue The amount of blue in the blips color (0 - 255).
 * @param alpha The amount of alpha in the blips color (0 - 255).  Alpha decides transparancy where 255
 * is opaque and 0 is transparent.
 * @return returns true if the blips color was set successfully. returns false if the blip passed to
 * the function is invalid, or any of the colors are out of the valid range.
 * @noSelf
 */
export declare function setBlipColor(
    theBlip: Blip,
    red: number,
    green: number,
    blue: number,
    alpha: number
): boolean;

/**
 * This function sets the icon for an existing blip element.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetBlipIcon Wiki, setBlipIcon }
 * @param theBlip The blip you wish to set the icon of.
 * @param icon A number indicating the icon you wish to change it do. Valid values are listed on the
 * Radar Blips page.
 * @return returns true if the icon was successfully set, false if the element passed was not a
 * valid blip or the icon value was not a valid icon number.
 * @noSelf
 */
export declare function setBlipIcon(
    theBlip: Blip,
    icon: number
): boolean;

/**
 * This function sets the Z ordering of a blip. It allows you to make a blip appear on top
 * of or below other blips.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetBlipOrdering Wiki, setBlipOrdering }
 * @param theBlip the blip whose Z ordering to change.
 * @param ordering the new Z ordering value. Blips with higher values will appear on top of blips with lower
 * values. Possible range: -32767 to 32767. Default: 0.
 * @return returns true if the blip ordering was changed successfully, false otherwise.
 * @noSelf
 */
export declare function setBlipOrdering(
    theBlip: Blip,
    ordering: number
): boolean;

/**
 * This function sets the size of a blips icon.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetBlipSize Wiki, setBlipSize }
 * @param theBlip The blip you wish to get the size of.
 * @param iconSize The size you wish the icon to be. 2 is the default value. 25 is the maximum value. Value
 * gets clamped between 0 and 25.
 * @return returns an true if the blips size was set successfully. returns false if the element
 * passed was not a blip or if the icon size passed was invalid.
 * @noSelf
 */
export declare function setBlipSize(
    theBlip: Blip,
    iconSize: number
): boolean;

/**
 * This function will set the visible distance of a blip.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetBlipVisibleDistance Wiki, setBlipVisibleDistance }
 * @param theBlip The blip whose visible distance you wish to get.
 * @param theDistance The distance you want the blip to be visible for. Value gets clamped between 0 and 65535.
 * @return returns true if successful, false otherwise.
 * @noSelf
 */
export declare function setBlipVisibleDistance(
    theBlip: Blip,
    theDistance: number
): boolean;
