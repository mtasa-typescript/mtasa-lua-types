/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import {
    Account,
    ACL,
    ACLGroup,
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
 * This function gets the player element of the client running the current script.
 * You can use the predefined variable '''localPlayer''' instead of typing getLocalPlayer()
 * }}
 * @see {@link https://wiki.multitheftauto.com/wiki/getLocalPlayer|MTASA Wiki}
 * @return Returns the local [[player]] element.
 */
export function getLocalPlayer(): Player;

/**
 * This function gets the GUI bounding box of the radar map texture.
 * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerMapBoundingBox|MTASA Wiki}
 * @return * If the player's map is showing, it returns four integers: ''minX'', ''minY'',
 * ''maxX'', ''maxY''.  These are '''absolute''' position coordinates of where the player's map is drawn on the
 * screen.
 * * ** ''minX, minY'' represent the world coordinates ''-3000, 3000'' (upper-left corner of the
 * world map).
 * * ** ''maxX, maxY'' represent the world coordinates ''3000, -3000'' (lower-right corner of the
 * world map).
 * * ** Negative values may be returned if these coordinates are off screen.
 * * * If the map is not showing, a ''false'' boolean value is returned.
 */
export function getPlayerMapBoundingBox(): LuaMultiReturn<[number, number, number, number]>;

/**
 * This function can be used to check whether an hud component is visable or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPlayerHudComponentVisible|MTASA Wiki}
 * @param component The component you wish to check. Valid values are:
 * @return Returns ''true'' if the component is visable, ''false'' if not.
 */
export function isPlayerHudComponentVisible(component: string): boolean;

/**
 * [[Image:MTAsa_Default_Map.png|thumb|224px|Screenshot of the default map]]
 * This function checks if the local player has their map showing.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPlayerMapVisible|MTASA Wiki}
 * @return Returns ''true'' if the player has the map visible, ''false'' otherwise.
 */
export function isPlayerMapVisible(): boolean;

/**
 * This function is used to forcefully show a player's radar map.
 * @see {@link https://wiki.multitheftauto.com/wiki/forcePlayerMap|MTASA Wiki}
 * @param forceOn : A boolean value representing whether or not the players radar map will be
 * forced on
 * @return Returns ''true'' if the player's radar map was forced on, ''false'' otherwise.
 */
export function forcePlayerMap(forceOn: boolean): boolean;

/**
 * This function allows you to check the current blur level of a specified [[player]].
 * @see {@link https://wiki.multitheftauto.com/wiki/getBlurLevel|MTASA Wiki}
 * @return Returns the local blur level.
 */
export function getBlurLevel(): number;

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
 * @return Returns an integer with the amount of money the local player has.
 */
export function getPlayerMoney(): number;

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
 * @return Returns an ''int'' from 0 to 6 representing the player's wanted level, ''false'' if the
 * player does not exist.
 */
export function getPlayerWantedLevel(): number;

/**
 * This function adds money to a [[player]]'s current money amount.  To set absolute values,
 * [[setPlayerMoney]] can be used.<br>
 * @see {@link https://wiki.multitheftauto.com/wiki/givePlayerMoney|MTASA Wiki}
 * @param amount a positive integer number specifying the amount of money to give to the player.
 * @return Returns ''true'' if the money was added, or ''false'' if invalid parameters were passed.
 */
export function givePlayerMoney(amount: number): boolean;

/**
 * This function checks if the specified player's radar map has been forced on or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/isPlayerMapForced|MTASA Wiki}
 * @return Returns ''true'' if the local player's radar map is forced on, ''false'' otherwise.
 */
export function isPlayerMapForced(): boolean;

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
 * @see {@link https://wiki.multitheftauto.com/wiki/setBlurLevel|MTASA Wiki}
 * @param level The level to set the blur to (default: 36)
 * @return
 */
export function setBlurLevel(level: number): boolean;

/**
 * This function will show or hide a part of the player's HUD.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerHudComponentVisible|MTASA Wiki}
 * @param component The component you wish to show or hide. Valid values are:
 * @param show Specify if the component should be shown (true) or hidden (false)
 * @return Returns ''true'' if the component was shown or hidden succesfully, ''false'' if an
 * invalid argument was specified.
 */
export function setPlayerHudComponentVisible(component: string, show: boolean): boolean;

/**
 * Sets a player's money to a certain value, regardless of current player money. It should be noted
 * that setting negative values does not work and in fact gives the player large amounts of money.
 * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerMoney|MTASA Wiki}
 * @param amount A whole integer specifying the new amount of money the local player will have.
 * {{OptionalArg}}  {{New items|3.0140|1.4|
 * @param instant If set to true money will be set instantly without counting up/down like in
 * singleplayer.}}
 * @default false
 * @return Returns ''true'' if the money was added, or ''false'' if invalid parameters were passed.
 */
export function setPlayerMoney(amount: number, instant?: boolean): boolean;

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
 * @param amount an integer number specifying the amount of money to take from the player.
 * @return Returns ''true'' if the money was taken, or ''false'' if invalid parameters were passed.
 */
export function takePlayerMoney(amount: number): boolean;
