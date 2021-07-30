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
    CommandHandler
} from '../structure';

/**
 * This function is used to determine whether or not a players cursor is showing.
 * @see {@link https://wiki.multitheftauto.com/wiki/IsCursorShowing Wiki, isCursorShowing }
 * @param thePlayer The player you want to get cursor state of.
 * @return returns true if the players cursor is showing, false if it isnt or if invalid parameters
 * were passed.
 * @noSelf
 */
export declare function isCursorShowing(
    thePlayer: Player
): boolean;

/**
 * This function is used to show or hide a players cursor.
 * @see {@link https://wiki.multitheftauto.com/wiki/ShowCursor Wiki, showCursor }
 * @param thePlayer The player you want to show or hide the cursor of.
 * @param show A boolean value determining whether to show (true) or hide (false) the cursor.
 * @param toggleControls A boolean value determining whether to disable controls whilst the cursor is showing.
 * true implies controls are disabled, false implies controls remain enabled.
 * @noSelf
 */
export declare function showCursor(
    thePlayer: Player,
    show: boolean,
    toggleControls?: boolean
): boolean;
