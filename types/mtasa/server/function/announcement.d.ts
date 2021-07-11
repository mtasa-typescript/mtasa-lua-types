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
    FetchRemoteCallback
} from '../structure';

/**
 * This function retrieves the current gametype as set by setGameType. The game type is
 * displayed in the server browser next to the servers name.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetGameType Wiki, getGameType }
 * @return returns the gametype as a string. if no gametype is set it returns nil.
 * @noSelf
 */
export declare function getGameType(): string;

/**
 * This function retrieves the current mapname as set by setMapName.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetMapName Wiki, getMapName }
 * @return returns the mapname as a string. if no mapname is set it returns nil.
 * @noSelf
 */
export declare function getMapName(): string;

/**
 * This function gets a rule value. A rule value is a string that can be viewed by server
 * browsers and used for filtering the server list.
 * @see {@link https://wiki.multitheftauto.com/wiki/GetRuleValue Wiki, getRuleValue }
 * @param key The name of the rule
 * @return returns a string containing the value set for the specified key, false if invalid
 * arguments were specified.
 * @noSelf
 */
export declare function getRuleValue(
    key: string
): string;

/**
 * This function removes a set rule value that can be viewed by server browsers.
 * @see {@link https://wiki.multitheftauto.com/wiki/RemoveRuleValue Wiki, removeRuleValue }
 * @param key The name of the rule you wish to remove
 * @return returns true if the rule value was removed, false if it failed.
 * @noSelf
 */
export declare function removeRuleValue(
    key: string
): boolean;

/**
 * This function sets a string containing a name for the game type. This should be the
 * game-mode that is active, for example Capture The Flag or Deathmatch. This is then
 * displayed in the server browser and external server browsers.
 * It should be noted that mapmanager handles this automatically for gamemodes that utilise
 * the map/gamemode system.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetGameType Wiki, setGameType }
 * @param gameType A string containing a name for the game mode, or false to clear it.
 * @return returns true if the game type was set, false if an invalid argument was passed to the
 * function.
 * @noSelf
 */
export declare function setGameType(
    gameType: string
): boolean;

/**
 * This function is used to set a map name that will be visible in the server browser. In
 * practice you should generally rely on the mapmanager to do this for you.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetMapName Wiki, setMapName }
 * @param mapName The name you wish the server browser to show.
 * @return returns true if map name was set successfully, false otherwise.
 * @noSelf
 */
export declare function setMapName(
    mapName: string
): boolean;

/**
 * This function sets a rule value that can be viewed by server browsers.
 * @see {@link https://wiki.multitheftauto.com/wiki/SetRuleValue Wiki, setRuleValue }
 * @param key The name of the rule
 * @param value The value you wish to set for the rule
 * @return returns true if the rule value was set, false if invalid arguments were specified.
 * @noSelf
 */
export declare function setRuleValue(
    key: string,
    value: string
): boolean;
