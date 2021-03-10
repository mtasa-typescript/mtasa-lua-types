/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Player, Team } from '../structure';

/**
 * This function returns a table of all the alive players on the server. Opposite function of
 * [[getDeadPlayers]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getAlivePlayers|MTASA Wiki}
 * @return Returns a table of all the alive players.
 */
export function getAlivePlayers(): LuaTable;

/**
 * This function returns a table of all currently dead players on the server.
 * @see {@link https://wiki.multitheftauto.com/wiki/getDeadPlayers|MTASA Wiki}
 * @return Returns a table of all the dead players.
 */
export function getDeadPlayers(): LuaTable;

/**
 * This function returns anti-cheat info for a player. The info returned by this function can
 * change over time, so use the server event [[onPlayerACInfo]] instead.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerACInfo|MTASA Wiki}
 * @param thePlayer The player whose anti-cheat info you want to check.
 * @return Returns a table with the following entries:
 * * * '''DetectedAC:''' A string containing a comma separated list of
 * [[Anti-cheat_guide|anti-cheat]] codes the player has triggered.
 * * *'''d3d9Size:''' A number representing the file size of any custom d3d9.dll the player may
 * have installed.
 * * *'''d3d9MD5:''' A string containing the MD5 of any custom d3d9.dll the player may have
 * installed.
 * * *'''d3d9SHA256:''' A string containing the SHA256 of any custom d3d9.dll the player may have
 * installed.
 * * <!--
 */
export function getPlayerACInfo(thePlayer: Element): LuaTable;

/**
 *
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerAnnounceValue|MTASA Wiki}
 * @param thePlayer This is the Player whos value you want to retrieve.
 * @param key The name of the key.
 * @return This function returns a ''string'' containing the requested value if a valid key was
 * specified or ''false'' otherwise.
 */
export function getPlayerAnnounceValue(thePlayer: Element, key: string): string;

/**
 * This function returns the number of players currently connected to the server.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerCount|MTASA Wiki}
 * @return Returns the number of players connected to the server as an [[int]].
 */
export function getPlayerCount(): number;

/**
 * This function gets the amount of time in milliseconds that a players position has not changed.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerIdleTime|MTASA Wiki}
 * @param thePlayer : The player you wish to get the idle time of.
 * @return Returns the amount of '''time in milliseconds''' that a player has been idle,
 * '''false''' otherwise.
 */
export function getPlayerIdleTime(thePlayer: Player): number;

/**
 * This function returns a [[string]] containing the IP address of the [[player]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerIP|MTASA Wiki}
 * @param thePlayer The player element you want to get the IP of.
 * @return Returns a [[string]] containing the requested players's IP, or ''false'' if the player
 * passed to the function is invalid.
 */
export function getPlayerIP(thePlayer: Player): string;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This will allow you to retrieve the player current debug script level.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerScriptDebugLevel|MTASA Wiki}
 * @param thePlayer The person whose debug script level you want
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns an ''int'' with the player debug script level, ''false'' if the player is invalid.
 */
export function getPlayerScriptDebugLevel(thePlayer: Player): number;

/**
 * This function returns the [[serial]] for a specified [[player]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerSerial|MTASA Wiki}
 * @param thePlayer A player object referencing the specified player.
 * @return Returns the serial as a ''string'' if it was found, ''false'' otherwise.
 */
export function getPlayerSerial(thePlayer: Player): string;

/**
 * This function gets the client version of the specified [[player]] as a sortable string. The
 * string is always 15 characters long and is formatted as follows:
 * * 1 character representing the major version
 * * 1 dot character
 * * 1 character representing the minor version
 * * 1 dot character
 * * 1 character representing the maintenance version
 * * 1 dash character
 * * 1 character representing the build type
 * * 1 dot character
 * * 5 characters representing the build number
 * * 1 dot character
 * * 1 character representing the build revision
 * An example of a version string would be: 1.0.4-9.01746.0
 * Where the first three numbers represent the major/minor/maintenance version, i.e. 1.0.4<br>
 * The fourth number is 9, which means it's a release build, (Development and beta builds have
 * lower numbers here)<br>
 * And the fifth and sixth numbers represent the build number.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerVersion|MTASA Wiki}
 * @param thePlayer The player whose client version you wish to get.
 * @return Returns a string containing the client version, or false if the [[player]] is invalid.
 */
export function getPlayerVersion(thePlayer: Player): string;

/**
 * This function returns a random [[player]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getRandomPlayer|MTASA Wiki}
 * @return Returns a random [[player]], ''false'' if the server is empty.
 */
export function getRandomPlayer(): Player;

/**
 * Use this function to check if a player has been muted.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPlayerMuted|MTASA Wiki}
 * @param thePlayer The player you are checking.
 * @return Returns ''true'' if the player is muted and ''false'' otherwise.
 */
export function isPlayerMuted(thePlayer: Player): boolean;

/**
 * This function redirects the player to a specified server.
 * @see {@link https://wiki.multitheftauto.com/wiki/redirectPlayer|MTASA Wiki}
 * @param thePlayer The player you want to redirect
 * @param serverIP The IP address (or domain name that resolves to the IP address) of the server
 * you want to redirect the player to. Use an empty string to reconnect to the same server.
 * @default ""
 * @param serverPort The game port of the server you want to redirect the player to, this is
 * usually 22003. Set to zero to use the same port as the current server.
 * @default 0 [
 * @param serverPassword The password for the server if its protected
 * @default ""
 * @return Returns ''true'' if the player was redirected successfully, ''false'' if bad arguments
 * were passed.
 */
export function redirectPlayer(
    thePlayer: Player,
    serverIP: string,
    serverPort: number,
    serverPassword?: string,
): boolean;

/**
 * This function will force the specified player to resend their AC info, triggering the
 * [[onPlayerACInfo]] event again.
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/resendPlayerACInfo|MTASA Wiki}
 * @param thePlayer : A player object referencing the specified player
 * @return Returns ''true'' if the AC info will be resent, ''false'' otherwise.
 */
export function resendPlayerACInfo(thePlayer: Player): boolean;

/**
 * This function will force the specified player to resend their mod info, triggering the
 * [[onPlayerModInfo]] event again.
 * @see {@link https://wiki.multitheftauto.com/wiki/resendPlayerModInfo|MTASA Wiki}
 * @param thePlayer : A player object referencing the specified player
 * @return Returns ''true'' if the mod info will be resent, ''false'' otherwise.
 */
export function resendPlayerModInfo(thePlayer: Player): boolean;

/**
 * This function allows you to change ASE announce values for any player using a specified key.
 * As an example this can be used to change the "score" value which will be shown at
 * [https://www.game-state.com/ game-state.com]'s server list.
 * For server-wide changes you can use [[setRuleValue]]!
 * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerAnnounceValue|MTASA Wiki}
 * @param thePlayer The player whos announce value you wish to change.
 * @param key The key which the value will be stored at.
 * @param value The value you wish to store.
 * @return Returns ''true'' if the value was set succesfully, ''false'' otherwise.
 */
export function setPlayerAnnounceValue(thePlayer: Element, key: string, value: string): boolean;

/**
 * Use this function to mute or unmute the player.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerMuted|MTASA Wiki}
 * @param thePlayer The player you are muting or unmuting.
 * @param state Use true to mute and false to unmute the player.
 * @return Returns ''true'' if the player was successfully muted or unmuted, ''false'' otherwise.
 */
export function setPlayerMuted(thePlayer: Player, state: boolean): boolean;

/**
 * This function changes the specified [[player]]'s name. Note that any change made to a players
 * name with this function is not saved in their settings so the name change only lasts till they
 * disconnect.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerName|MTASA Wiki}
 * @param thePlayer the player that will have its name set.
 * @param newName the new name to set for the player.
 * @return Returns ''true'' if the player name was changed succesfully, ''false'' if invalid
 * arguments are specified.
 */
export function setPlayerName(thePlayer: Player, newName: string): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This will set player's debug level, equivalent to [[Debugging|debugscript <level>]].
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerScriptDebugLevel|MTASA Wiki}
 * @param thePlayer The player whose debug level you wish to change
 * @param level 0: close debug console, 1: only errors, 2: errors and warnings, 3: errors, warnings
 * and info messages
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if successful, ''false'' otherwise.
 */
export function setPlayerScriptDebugLevel(thePlayer: Player, level: number): boolean;

/**
 * This function allows you to change who can hear the voice of a player.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerVoiceBroadcastTo|MTASA Wiki}
 * @param thePlayer The player you wish to change
 * @return Returns ''true'' if the value was set successfully, ''false'' otherwise.
 */
export function setPlayerVoiceBroadcastTo(thePlayer: Element, broadcastTo: string): boolean;

/**
 * This function allows you to mute voices for a player.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerVoiceIgnoreFrom|MTASA Wiki}
 * @param thePlayer The player you wish to change
 * @param ignoreFrom Element or table of elements which the player should not hear voices from. Use
 * nil if no one should be ignored.
 * @return Returns ''true'' if the value was set successfully, ''false'' otherwise.
 */
export function setPlayerVoiceIgnoreFrom(thePlayer: Element, ignoreFrom: string): boolean;

/**
 * This function is used to set a player's wanted level. The wanted level is indicated by the
 * amount of stars a player has on the GTA HUD.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerWantedLevel|MTASA Wiki}
 * @param thePlayer The player whose wanted level is to be set
 * @param stars An integer from 0 to 6 representing the wanted level
 * @return Returns ''true'' if the wanted level was set successfully, ''false'' if any of the
 * arguments were invalid.
 */
export function setPlayerWantedLevel(thePlayer: Player, stars: number): boolean;

/**
 * This function spawns the player at an arbitary point on the map.<br>
 * @see {@link https://wiki.multitheftauto.com/wiki/spawnPlayer|MTASA Wiki}
 * @param thePlayer The player you want to spawn.
 * @param x The x co-ordinate to spawn the player at.
 * @param y The y co-ordinate to spawn the player at.
 * @param z The z co-ordinate to spawn the player at.
 * @param rotation rotation of the player on spawn.
 * @default 0
 * @param skinID players skin on spawn. Character Skins
 * @default 0
 * @param interior interior the player will spawn into. Interior IDs
 * @default 0
 * @param dimension The ID of the dimension that the player should be in.
 * @default 0
 * @param theTeam the team the player will join.
 * @default getPlayerTeam(thePlayer
 * @return Returns ''true'' if the player was spawned successfully, ''false'' otherwise.
 */
export function spawnPlayer(
    thePlayer: Player,
    x: number,
    y: number,
    z: number,
    rotation: number,
    skinID: number,
    interior: number,
    dimension: number,
    theTeam: Team,
): boolean;

/**
 * This function forces a client to capture the current screen output and send it back to the
 * server. The image will contain the GTA HUD and the output of any dxDraw functions that are not flagged as
 * 'post GUI'. The image specifically excludes the chat box and all GUI (including the client
 * console). The result is received with the event [[onPlayerScreenShot]].
 * @see {@link https://wiki.multitheftauto.com/wiki/takePlayerScreenShot|MTASA Wiki}
 * @param thePlayer the player to get the screen capture from.
 * @param width the width of the capture image.
 * @param height the height of the capture image.
 * @param tag A string to help identify the screen capture. The string is passed to the matching
 * onPlayerScreenShot event for your personal convenience.
 * @default ""
 * @param quality Quality of the final JPEG image from 0 to 100. A lower value can reduce the
 * memory used by the image considerably which will result in faster and less intrusive uploads.
 * @default 30
 * @param maxBandwith The amount of client upload bandwidth to use (in bytes per second) when
 * sending the image.  *'''maxPacketSize: ''' The maximum size of one packet.
 * @default 5000
 * @return Returns ''true'' if the function was successfully, ''false'' if invalid arguments are
 * specified.
 */
export function takePlayerScreenShot(
    thePlayer: Player,
    width: number,
    height: number,
    tag?: string,
    quality?: number,
    maxBandwith?: number,
    maxPacketSize?: number,
): boolean;

/**
 * This function is used to forcefully show a player's radar map.
 * @see {@link https://wiki.multitheftauto.com/wiki/forcePlayerMap|MTASA Wiki}
 * @param thePlayer : A player object referencing the specified player
 * @param forceOn : A boolean value representing whether or not the players radar map will be
 * forced on
 * @return Returns ''true'' if the player's radar map was forced on, ''false'' otherwise.
 */
export function forcePlayerMap(thePlayer: Player, forceOn: boolean): boolean;

/**
 * This function allows you to check the current blur level of a specified [[player]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerBlurLevel|MTASA Wiki}
 * @param thePlayer The player whose blur level you want to check.
 * @return Returns the player's blur level if successful, ''false'' if an invalid player was given.
 */
export function getPlayerBlurLevel(thePlayer: Player): number;

/**
 * This function returns a [[player]] [[element]] for the player with the name passed to the
 * function.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerFromName|MTASA Wiki}
 * @param playerName : A string containing the name of the player you want to reference
 * @return Returns a [[player]] [[element]] for the player with the nickname provided. If there is
 * no player with that name, ''false'' is returned.
 */
export function getPlayerFromName(playerName: string): Player;

/**
 * Returns the amount of money a player currently has.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerMoney|MTASA Wiki}
 * @param thePlayer The player you wish the retrieve the amount of money from.
 * @return Returns an integer with the amount of money the specified player has, ''false'' if the
 * player is invalid.
 */
export function getPlayerMoney(thePlayer: Player): number;

/**
 * This function returns a string containing the name of the specified player.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerName|MTASA Wiki}
 * @param thePlayer the player you want to get the name of
 * @return Returns a string containing the requested player's name, or ''false'' if the player
 * passed to the function is invalid.
 */
export function getPlayerName(thePlayer: Player): string;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function gets the current color of a player's name tag as RGB values. These are in the
 * range 0-255.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerNametagColor|MTASA Wiki}
 * @param thePlayer The player whose name tag RGB color values you wish to retrieve.
 * @return Returns ''red'', ''green'' and ''blue'' values if an existent player was specified,
 * ''false'' otherwise.
 */
export function getPlayerNametagColor(thePlayer: Player): LuaMultiReturn<[number, number, number]>;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This will allow you to retrieve the name tag a player is currently using.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerNametagText|MTASA Wiki}
 * @param thePlayer The person whose name tag you want to retrieve
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns a ''string'' with the nametag text, ''false'' if the player is invalid.
 */
export function getPlayerNametagText(thePlayer: Player): string;

/**
 * This function returns the ping of a specified [[player]]. The ping is the number of milliseconds
 * that data takes to travel from the player's client to the server or vice versa.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerPing|MTASA Wiki}
 * @param thePlayer : The player whose ping you want to determine.
 * @return Returns the ping as an [[int]], or ''false'' if the player is invalid.
 */
export function getPlayerPing(thePlayer: Player): number;

/**
 * This function gets a player's current wanted level. The wanted level is indicated by the amount
 * of stars a player has on the GTA HUD.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerWantedLevel|MTASA Wiki}
 * @param thePlayer The player whose wanted level you wish to get
 * @return Returns an ''int'' from 0 to 6 representing the player's wanted level, ''false'' if the
 * player does not exist.
 */
export function getPlayerWantedLevel(thePlayer: Player): number;

/**
 * This function adds money to a [[player]]'s current money amount.  To set absolute values,
 * [[setPlayerMoney]] can be used.<br>
 * @see {@link https://wiki.multitheftauto.com/wiki/givePlayerMoney|MTASA Wiki}
 * @param thePlayer the player you are giving the money to.
 * @param amount a positive integer number specifying the amount of money to give to the player.
 * @return Returns ''true'' if the money was added, or ''false'' if invalid parameters were passed.
 */
export function givePlayerMoney(thePlayer: Player, amount: number): boolean;

/**
 * This function checks if the specified player's radar map has been forced on or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPlayerMapForced|MTASA Wiki}
 * @param thePlayer A player object referencing the specified player
 * @return Returns ''true'' if the player's radar map is forced on, ''false'' otherwise.
 */
export function isPlayerMapForced(thePlayer: Player): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function will allow you to determine if a player's name tag is currently showing.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPlayerNametagShowing|MTASA Wiki}
 * @param thePlayer The player whose current name tag condition you want to check
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if the player's name tag is being shown, ''false'' otherwise.
 */
export function isPlayerNametagShowing(thePlayer: Player): boolean;

/**
 * Added to client side.
 * }}
 * This function allows you to make the server reveal whether or not voice is currently enabled.
 * @see {@link https://wiki.multitheftauto.com/wiki/isVoiceEnabled|MTASA Wiki}
 * @return Returns ''true'' if the voice is enabled on the server, ''false'' otherwise.
 */
export function isVoiceEnabled(): boolean;

/**
 * Sets the motion blur level on the clients screen. Accepts a value between 0 and 255.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerBlurLevel|MTASA Wiki}
 * @param thePlayer The player whose blur level will be changed.
 * @param level The level to set the blur to (default: 36)
 * @return
 */
export function setPlayerBlurLevel(thePlayer: Player, level: number): boolean;

/**
 * This function will show or hide a part of the player's HUD.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerHudComponentVisible|MTASA Wiki}
 * @param thePlayer The player element for which you wish to show/hide a HUD component
 * @param component The component you wish to show or hide. Valid values are:
 * @param show Specify if the component should be shown (true) or hidden (false)
 * @return Returns ''true'' if the component was shown or hidden succesfully, ''false'' if an
 * invalid argument was specified.
 */
export function setPlayerHudComponentVisible(thePlayer: Player, component: string, show: boolean): boolean;

/**
 * Sets a player's money to a certain value, regardless of current player money. It should be noted
 * that setting negative values does not work and in fact gives the player large amounts of money.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerMoney|MTASA Wiki}
 * @param thePlayer Which player to set the money of.
 * @param amount A whole integer specifying the new amount of money the player will have.
 * {{OptionalArg}}  {{New items|3.0140|1.4|
 * @param instant If set to true money will be set instantly without counting up/down like in
 * singleplayer.}}
 * @default false
 * @return Returns ''true'' if the money was added, or ''false'' if invalid parameters were passed.
 */
export function setPlayerMoney(thePlayer: Player, amount: number, instant?: boolean): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This allows you to change the RGB color mixture in the name tags of players.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerNametagColor|MTASA Wiki}
 * @param thePlayer The player whose name tag text you wish to change the color of
 * @param r The amount of red you want in the mixture of RGB (0-255 is valid)
 * @param g The amount of green you want in the mixture of RGB (0-255 is valid)
 * @param b The amount of blue you want in the mixture of RGB (0-255 is valid)  {{New feature|2|DP2|
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if the function was successful, ''false'' otherwise.
 */
export function setPlayerNametagColor(thePlayer: Player, r: number, g: number, b: number): boolean;

/**
 * Use this to define whether the player's name tag is visible or invisible.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerNametagShowing|MTASA Wiki}
 * @param thePlayer Define the player whos tag visiblity status you want to change
 * @param showing Use true or false to show/hide the tag
 * @return Returns ''true'' if successful, ''false'' otherwise
 */
export function setPlayerNametagShowing(thePlayer: Player, showing: boolean): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This will change the text of a player's nickname in the world to something besides the nickname
 * he chose. This will not change the player's actual nickname, it only changes the visible aspect
 * inside the world (you will see his original nickname in the scoreboard and will refer to his original
 * name in scripts).
 * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerNametagText|MTASA Wiki}
 * @param thePlayer The player whose nickname text you wish to change
 * @param text The new nickname text that will be displayed
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if successful, ''false'' otherwise.
 */
export function setPlayerNametagText(thePlayer: Player, text: string): boolean;

/**
 * This function subtracts money from a [[player]]'s current money amount.
 * @see {@link https://wiki.multitheftauto.com/wiki/takePlayerMoney|MTASA Wiki}
 * @param thePlayer the player you are taking the money from.
 * @param amount an integer number specifying the amount of money to take from the player.
 * @return Returns ''true'' if the money was taken, or ''false'' if invalid parameters were passed.
 */
export function takePlayerMoney(thePlayer: Player, amount: number): boolean;
