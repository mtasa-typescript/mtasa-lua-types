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
    Texture,
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
    HandleFunction
} from '../structure';

/**
 * This function creates a marker. A marker is a 3D model in the world that can highlight a
 * particular point or area, often used to instruct players where to go to perform actions
 * such as entering buildings.
 * There are various limits that govern the maximum number of each type that can be visible
 * at once. These are:
 * * Coronas: 32
 * * Checkpoints, Rings, Cylinders and Arrows combined: 32
 * You are able to create as many markers as you wish (memory and element limit permitting),
 * but the player will only be able to see the nearest ones up to the limit.
 * <br><br><br><br>
 * @see {@link https://wiki.multitheftauto.com/wiki/CreateMarker Wiki, createMarker }
 * @param x : A floating point number representing the X coordinate on the map.
 * @param y : A floating point number representing the Y coordinate on the map.
 * @param z : A floating point number representing the Z coordinate on the map.
 * @param theType : The visual type of the marker to be created. Possible values:
 * @param size : The diameter of the marker to be created, in meters.
 * @param r : An integer number representing the amount of red to use in the colouring of the marker
 * (0 - 255).
 * @param g : An integer number representing the amount of green to use in the colouring of the
 * marker (0 - 255).
 * @param b : An integer number representing the amount of blue to use in the colouring of the marker
 * (0 - 255).
 * @param a : An integer number representing the amount of alpha to use in the colouring of the
 * marker (0 - 255 where 0 is transparent and 255 is opaque).
 */
export function createMarker(
    x: number,
    y: number,
    z: number,
    theType?: string,
    size?: number,
    r?: number,
    g?: number,
    b?: number,
    a?: number
): Marker;

/**
 * This function returns the color and transparency for a marker element. Not all marker
 * types support transparency.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetMarkerColor Wiki, getMarkerColor }
 * @param theMarker : The marker that you wish to retrieve the color of.
 * @return returns four ints corresponding to the amount of red, green, blue and alpha
 * (respectively) of the marker, false if invalid arguments were passed.
 */
export function getMarkerColor(
    theMarker: Marker
): LuaMultiReturn<[
    number,
    number,
    number,
    number
]>;

/**
 * Returns the number of markers that currently exist in the world.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetMarkerCount Wiki, getMarkerCount }
 * @return returns the number of markers that currently exist.
 */
export function getMarkerCount(): number;

/**
 * This function returns the icon name for a marker.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetMarkerIcon Wiki, getMarkerIcon }
 * @param theMarker : A marker element referencing the specified marker.
 * @return returns false if the marker passed is invalid or a string containing one of the following:
 * * none: no icon
 * * arrow: arrow icon
 * * finish: finish (end-race) icon
 */
export function getMarkerIcon(
    theMarker: Marker
): string;

/**
 * This function returns a float containing the size of the specified marker.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetMarkerSize Wiki, getMarkerSize }
 * @param myMarker : The marker that you wish to retrieve the size of.
 * @return returns a float containing the size of the specified marker.
 */
export function getMarkerSize(
    myMarker: Marker
): number;

/**
 * This function returns the position of the specified markers target, the position it
 * points to. This only works for checkpoint markers and ring markers. For checkpoints it
 * returns the position the arrow is pointing to, for ring markers it returns the position
 * the ring is facing. You can set this target with setMarkerTarget.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetMarkerTarget Wiki, getMarkerTarget }
 * @param theMarker The marker you wish to retrieve the target position of.
 * @return returns three floats if a target is set, or false in the first variable and nil in the
 * two others if the marker is invalid or no target is set.
 */
export function getMarkerTarget(
    theMarker: Marker
): LuaMultiReturn<[
    number,
    number,
    number
]>;

/**
 * This function returns a markers type.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetMarkerType Wiki, getMarkerType }
 * @param theMarker : A marker element referencing the specified marker.
 * @return * returns one of the following strings:
 * if an invalid marker is specified, false is returned.
 */
export function getMarkerType(
    theMarker: Marker
): string;

/**
 * This function sets the color of the specified marker by modifying the values for red,
 * green, blue and alpha.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetMarkerColor Wiki, setMarkerColor }
 * @param theMarker The marker that you wish to set the color of.
 * @param r The amount of red in the final color (0 to 255).
 * @param g The amount of green in the final color (0 to 255).
 * @param b The amount of blue in the final color (0 to 255).
 * @param a The amount of alpha in the final color (0 to 255).
 */
export function setMarkerColor(
    theMarker: Marker,
    r: number,
    g: number,
    b: number,
    a: number
): boolean;

/**
 * @see {@link https://wiki.multitheftauto.com/wiki/SetMarkerIcon Wiki, setMarkerIcon }
 * @param theMarker The marker to change the visual style of
 * @param icon A string referring to the type of icon, acceptable values are:
 * @param none : No icon
 * @param arrow : Arrow icon
 * @param finish : Finish icon (at end of race)
 */
export function setMarkerIcon(
    theMarker: Marker,
    icon: string
): boolean;

/**
 * This function sets the size of the specified marker.
 * Setting negative value will flip the marker, do nothing or make it invisible:
 * * cylinder or arrow: upside down
 * * ring: inside out
 * * checkpoint: disappear
 * * corona: bigger
 * @see {@link https://wiki.multitheftauto.com/wiki/SetMarkerSize Wiki, setMarkerSize }
 * @param theMarker The marker that you wish to set the size of.
 * @param size A float representing new size of the marker.
 * @return returns true if successful, false if failed.
 */
export function setMarkerSize(
    theMarker: Marker,
    size: number
): boolean;

/**
 * This function sets the target for a marker. Only the checkpoint and ring marker types can
 * have a target.
 * For checkpoint markers, the target is shown as an arrow aiming at the point specified.
 * For ring markers, the target is shown by rotating the whole ring so that it faces the
 * point specified.
 * This function is most useful for setting up markers for races, where each marker points
 * to the next ones position.
 * (This is mostly used in races!)
 * @see {@link https://wiki.multitheftauto.com/wiki/SetMarkerTarget Wiki, setMarkerTarget }
 * @param theMarker The marker to set the target of
 * @param x The x axis of the coordinate to target the marker at
 * @param y The y axis of the coordinate to target the marker at
 * @param z The z axis of the coordinate to target the marker at
 * @return returns true if target was set, false otherwise.
 */
export function setMarkerTarget(
    theMarker: Marker,
    x: number,
    y: number,
    z: number
): boolean;

/**
 * This function changes a markers type. The type controls how the marker is displayed in
 * the game. Its important that you use marker types that users are used to from the single
 * player game. For example, checkpoints are used in races, rings are used for aircraft
 * races, arrows are used for entering buildings etc.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetMarkerType Wiki, setMarkerType }
 * @param theMarker : A marker element referencing the specified marker.
 * @param markerType : A string denoting the marker type. Valid values are:
 * @return returns true if the marker type was changed, false if it wasnt or marker values were
 * invalid.
 */
export function setMarkerType(
    theMarker: Marker,
    markerType: string
): boolean;
