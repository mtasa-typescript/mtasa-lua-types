/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function retrieves the current gametype as set by [[setGameType]]. The game type is
 * displayed in the server browser next to the server's name.
 * @see {@link https://wiki.multitheftauto.com/wiki/getGameType|MTASA Wiki}
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns the gametype as a string. If no gametype is set it returns ''nil''.
 */
export function getGameType(): string;

/**
 * This function retrieves the current mapname as set by [[setMapName]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getMapName|MTASA Wiki}
 * @return Returns the mapname as a string. If no mapname is set it returns ''nil''.
 */
export function getMapName(): string;

/**
 * This function gets a rule value. A rule value is a string that can be viewed by server browsers
 * and used for filtering the server list.
 * @see {@link https://wiki.multitheftauto.com/wiki/getRuleValue|MTASA Wiki}
 * @param key The name of the rule
 * @return Returns a string containing the value set for the specified ''key'', ''false'' if
 * invalid arguments were specified.
 */
export function getRuleValue(key: string): string;

/**
 * This function removes a set rule value that can be viewed by server browsers.
 * @see {@link https://wiki.multitheftauto.com/wiki/removeRuleValue|MTASA Wiki}
 * @param key The name of the rule you wish to remove
 * @return Returns ''true'' if the rule value was removed, ''false'' if it failed.
 */
export function removeRuleValue(key: string): boolean;

/**
 * This function sets a string containing a name for the game type. This should be the game-mode
 * that is active, for example "Capture The Flag" or "Deathmatch". This is then displayed in the server
 * browser and external server browsers.
 * '''It should be noted that [[mapmanager]] handles this automatically for gamemodes that utilise
 * the map/gamemode system.'''
 * @see {@link https://wiki.multitheftauto.com/wiki/setGameType|MTASA Wiki}
 * @param gameType A string containing a name for the game mode, or false to clear it.
 * @return Returns ''true'' if the game type was set, ''false'' if an invalid argument was passed
 * to the function.
 */
export function setGameType(gameType: string): boolean;

/**
 * This function is used to set a map name that will be visible in the server browser. In practice
 * you should generally rely on the mapmanager to do this for you.
 * @see {@link https://wiki.multitheftauto.com/wiki/setMapName|MTASA Wiki}
 * @param mapName The name you wish the server browser to show.
 * @return Returns ''true'' if map name was set successfully, ''false'' otherwise.
 */
export function setMapName(mapName: string): boolean;

/**
 * This function sets a rule value that can be viewed by server browsers.
 * @see {@link https://wiki.multitheftauto.com/wiki/setRuleValue|MTASA Wiki}
 * @param key The name of the rule
 * @param value The value you wish to set for the rule
 * @return Returns ''true'' if the rule value was set, ''false'' if invalid arguments were
 * specified.
 */
export function setRuleValue(key: string, value: string): boolean;
