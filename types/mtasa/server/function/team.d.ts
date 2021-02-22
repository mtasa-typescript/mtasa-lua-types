/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Player, Table, Team } from '../structure';

/**
 * This function is for creating a new [[team]], which can be used to group players. Players will
 * not join the team until they are respawned.
 * @see {@link https://wiki.multitheftauto.com/wiki/createTeam|MTASA Wiki}
 * @param teamName A string representing the teams name.
 * @param colorR An integer representing the red color value.
 * @default 255
 * @param colorG An integer representing the green color value.
 * @default 255
 * @param colorB An integer representing the blue color value.
 * @default 255
 * @return Returns a team element if it was successfully created, ''false'' if invalid arguments
 * are passed or a team with that name already exists.
 */
export function createTeam(teamName: string, colorR?: number, colorG?: number, colorB?: number): Team;

/**
 * This function adds a [[player]] to an existing [[team]]. The player will automatically be
 * removed from his current team if he's on one.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerTeam|MTASA Wiki}
 * @param thePlayer The player you wish to add to a team.
 * @param theTeam The team you want to add the player to, or nil if you wish to unassign a player
 * from his team.
 * @return Returns ''true'' if the player was successfully added to the specified team or removed
 * from his previous one, ''false'' otherwise.
 */
export function setPlayerTeam(thePlayer: Player, theTeam: Team): boolean;

/**
 * This function is for setting the color of a specified team. This color is shown, for example, in
 * the team players' nametags.
 * @see {@link https://wiki.multitheftauto.com/wiki/setTeamColor|MTASA Wiki}
 * @param theTeam The team you want to change the color of.
 * @param colorR An integer representing the red color value, from 0 to 255.
 * @param colorG An integer representing the green color value, from 0 to 255.
 * @param colorB An integer representing the blue color value, from 0 to 255.
 * @return Returns ''true'' if the team is valid and the color is different, otherwise ''false''.
 */
export function setTeamColor(theTeam: Team, colorR: number, colorG: number, colorB: number): boolean;

/**
 * This function sets the friendly fire value for the specified team.
 * @see {@link https://wiki.multitheftauto.com/wiki/setTeamFriendlyFire|MTASA Wiki}
 * @param theTeam The  team that will have friendly fire set
 * @param friendlyFire A boolean denoting whether the players from the same team can kill each
 * other (true) or whether the players cant kill each other (false).
 * @return Returns ''true'' if the friendly fire value is set for the specified team, ''false'' if
 * the friendly fire value can't be set for the specified team or if invalid arguments are specified.
 */
export function setTeamFriendlyFire(theTeam: Team, friendlyFire: boolean): boolean;

/**
 * This function is used to set a team's name.
 * @see {@link https://wiki.multitheftauto.com/wiki/setTeamName|MTASA Wiki}
 * @param theTeam The team you want to change the name of.
 * @param newName A string representing the name you want the team to be called.
 * @return Returns ''true'' if the team was valid and the name was changed, ''false'' otherwise.
 */
export function setTeamName(theTeam: Team, newName: string): boolean;

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
