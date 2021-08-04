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

/**
 * This function is intended to load data from a loaded XML file into the element tree. This
 * could be used for loading an external map, or part of another map.
 * @see https://wiki.multitheftauto.com/wiki/LoadMapData
 * @param node The node that you wish to load into the element tree.
 * @param parent The node you wish to be the parent of the new map data.
 * @return returns an element object that corresponds to the root of the new data added, i.e. an
 * element that represents the node xmlnode passed to the function. returns false if the
 * arguments are invalid.
 * @noSelf
 */
export declare function loadMapData(
    node: XmlNode,
    parent: Element
): Element;

/**
 * This function is used to reset the state of a player.  It is intended to restore a player
 * to his default state as if he had just joined the server, without any scripts affecting
 * him.
 * @see https://wiki.multitheftauto.com/wiki/ResetMapInfo
 * @param thePlayer The specific player you wish to restore the state of.  Not specifying this will result in
 * all players map info being reset.
 * @return returns true if the map info was reset successfully, otherwise false.
 * @noSelf
 */
export declare function resetMapInfo(
    thePlayer?: Player
): boolean;

/**
 * This converts a set of elements in the element tree into XML. This is a format that can
 * then be loaded as a map file. Each element represents a single XML node.
 * @see https://wiki.multitheftauto.com/wiki/SaveMapData
 * @param node : An existing node that should contain the contents of baseElement
 * @param baseElement : The first element to output to the XML tree. This element and all its children (and
 * their children, etc) will be output.
 * @param childrenOnly : Defines if you want to only save children of the specified element.
 * @noSelf
 */
export declare function saveMapData(
    node: XmlNode,
    baseElement: Element,
    childrenOnly?: boolean
): boolean;
