/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import {
    Account,
    Acl,
    AclGroup,
    Player,
    Table,
    Ban,
    Blip,
    ColShape,
    Element,
    Ped,
    Pickup,
    Resource,
    Team,
    TextDisplay,
    Vehicle,
    XmlNode,
    TextItem,
    HandleFunction,
    File,
    Marker,
    RadarArea,
    Request,
    Userdata,
    Timer,
    Water,
    Browser,
    ProgressBar,
    Light,
    Effect,
    Gui,
    Searchlight,
    Weapon,
    GuiBrowser,
    Txd,
    Dff,
    Col,
    Ifp,
    PrimitiveType,
    GuiScrollBar,
    GuiMemo,
    Texture,
    ObjectGroup,
    Projectile,
    Matrix
} from "types/mtasa/client/structure";

/**
 * This function is for returning the number of players in the specified team.
 * @see {@link https://wiki.multitheftauto.com/wiki/countPlayersInTeam|MTASA Wiki}
 * @param theTeam The team you wish to retrieve the player count of.
 * @return Returns an integer containing the number of players in the team, ''false'' if it could
 * not be retrieved.
 */
export function countPlayersInTeam(theTeam: Team): number;

/**
 * This function gets the current [[team]] a [[player]] is on.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerTeam|MTASA Wiki}
 * @param thePlayer : The player whose team you want to find out.
 * @return Returns a ''team'' element representing the team the player is on, ''false'' if the
 * player is not part of a team.
 */
export function getPlayerTeam(thePlayer: Player): Team;

/**
 * This function retrieves all the players of the specified team.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayersInTeam|MTASA Wiki}
 * @param theTeam The team you wish to retrieve all the players from.
 * @return Returns a [[table]] of all the players in the team, or an empty one if there are none
 * else false if invalid arguments are passed.
 */
export function getPlayersInTeam(theTeam: Team): Table;

/**
 * This function retrieves the color of a team.
 * @see {@link https://wiki.multitheftauto.com/wiki/getTeamColor|MTASA Wiki}
 * @param theTeam The team you want to get the color of.
 * @return Returns 3 integers representing the red, green, and blue color components of the team if
 * it's valid, ''false'' otherwise.
 */
export function getTeamColor(theTeam: Team): LuaMultiReturn<[number, number, number]>;

/**
 * This function tells you if friendly fire is turned on for the specified team.
 * @see {@link https://wiki.multitheftauto.com/wiki/getTeamFriendlyFire|MTASA Wiki}
 * @param theTeam The team object that will be checked
 * @return Returns ''true'' if friendly fire is on for the specified team, ''false'' if it is
 * turned off or if invalid arguments are specified.
 */
export function getTeamFriendlyFire(theTeam: Team): boolean;

/**
 * This function finds a [[team]] element using the provided team name.
 * @see {@link https://wiki.multitheftauto.com/wiki/getTeamFromName|MTASA Wiki}
 * @param teamName A string determining the name of the team you wish to find.
 * @return Returns the [[team]] element if it was found, ''false'' otherwise.
 */
export function getTeamFromName(teamName: string): Team;

/**
 * This function gets the team name of a team object.
 * @see {@link https://wiki.multitheftauto.com/wiki/getTeamName|MTASA Wiki}
 * @param theTeam The team you want to retrieve the name of.
 * @return Returns a string representing the team's name if the team object was valid, ''false''
 * otherwise.
 */
export function getTeamName(theTeam: Team): string;
