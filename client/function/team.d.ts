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
    SvgCallback,
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
 * This function is for returning the number of players in the specified team.
 * @see https://wiki.multitheftauto.com/wiki/CountPlayersInTeam
 * @param theTeam The team you wish to retrieve the player count of.
 * @return returns an integer containing the number of players in the team, false if it could not be
 * retrieved.
 * @noSelf
 */
export declare function countPlayersInTeam(theTeam: Team): number;

/**
 * This function retrieves all the players of the specified team.
 * @see https://wiki.multitheftauto.com/wiki/GetPlayersInTeam
 * @param theTeam The team you wish to retrieve all the players from.
 * @return returns a table of all the players in the team, or an empty one if there are none else
 * false if invalid arguments are passed.
 * @noSelf
 */
export declare function getPlayersInTeam(theTeam: Team): LuaTable;

/**
 * This function gets the current team a player is on.
 * @see https://wiki.multitheftauto.com/wiki/GetPlayerTeam
 * @param thePlayer : The player whose team you want to find out.
 * @return returns a team element representing the team the player is on, false if the player is not
 * part of a team.
 * @noSelf
 */
export declare function getPlayerTeam(thePlayer: Player): Team;

/**
 * This function retrieves the color of a team.
 * @see https://wiki.multitheftauto.com/wiki/GetTeamColor
 * @param theTeam The team you want to get the color of.
 * @return returns 3 integers representing the red, green, and blue color components of the team if
 * its valid, false otherwise.
 * @noSelf
 */
export declare function getTeamColor(
    theTeam: Team,
): LuaMultiReturn<[number, number, number]>;

/**
 * This function tells you if friendly fire is turned on for the specified team.
 * @see https://wiki.multitheftauto.com/wiki/GetTeamFriendlyFire
 * @param theTeam The team object that will be checked
 * @return returns true if friendly fire is on for the specified team, false if it is turned off or
 * if invalid arguments are specified.
 * @noSelf
 */
export declare function getTeamFriendlyFire(theTeam: Team): boolean;

/**
 * This function finds a team element using the provided team name.
 * @see https://wiki.multitheftauto.com/wiki/GetTeamFromName
 * @param teamName A string determining the name of the team you wish to find.
 * @return returns the team element if it was found, false otherwise.
 * @noSelf
 */
export declare function getTeamFromName(teamName: string): Team;

/**
 * This function gets the team name of a team object.
 * @see https://wiki.multitheftauto.com/wiki/GetTeamName
 * @param theTeam The team you want to retrieve the name of.
 * @return returns a string representing the teams name if the team object was valid, false
 * otherwise.
 * @noSelf
 */
export declare function getTeamName(theTeam: Team): string;
