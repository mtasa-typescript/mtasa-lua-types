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

/** @customConstructor Player */
export class Player extends Ped {
    /**
     * This function allows you to check the current blur level of a specified player.
     */
    static blurLevel: number;

    /**
     * This function gets the current team a player is on.
     */
    team: Team;

    /**
     * This function returns a string containing the name of the specified player.
     */
    name: string;

    /**
     * This function returns the ping of a specified player. The ping is the number of
     * milliseconds that data takes to travel from the players client to the server or vice
     * versa.
     */
    ping: number;

    /**
     * This function will allow you to determine if a players name tag is currently showing.
     */
    nametagShowing: boolean;

    /**
     * This will allow you to retrieve the name tag a player is currently using.
     */
    nametagText: string;

    /**
     * Added to client side.
     * This function allows you to make the server reveal whether or not voice is currently
     * enabled.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsVoiceEnabled Wiki, isVoiceEnabled }
     * @return returns true if the voice is enabled on the server, false otherwise.
     */
    static isVoiceEnabled(): boolean;

    /**
     * Returns the amount of money a player currently has.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerMoney Wiki, getPlayerMoney }
     * @return returns an integer with the amount of money the local player has.
     */
    static getMoney(): number;

    /**
     * Sets a players money to a certain value, regardless of current player money. It should be
     * noted that setting negative values does not work and in fact gives the player large
     * amounts of money.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerMoney Wiki, setPlayerMoney }
     * @param amount A whole integer specifying the new amount of money the local player will have.
     * @param instant If set to true money will be set instantly without counting up/down like in
     * singleplayer.}}
     */
    static setMoney(
        amount: number,
        instant?: boolean
    ): boolean;

    /**
     * Sets the motion blur level on the clients screen. Accepts a value between 0 and 255.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerBlurLevel Wiki, setPlayerBlurLevel }
     * @param level The level to set the blur to (default: 36)
     */
    static setBlurLevel(
        level: number
    ): boolean;

    /**
     * This allows you to change the RGB color mixture in the name tags of players.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerNametagColor Wiki, setPlayerNametagColor }
     * @param r The amount of red you want in the mixture of RGB (0-255 is valid)
     * @param g The amount of green you want in the mixture of RGB (0-255 is valid)
     * @param b The amount of blue you want in the mixture of RGB (0-255 is valid)
     * @param false If false is specified instead of the colors, the nametag color will reset to defaulting
     * to your team color.
     * @return returns true if the function was successful, false otherwise.
     */
    setNametagColor(
        r: number,
        g: number,
        b: number
    ): boolean;

    /**
     * This function adds money to a players current money amount.  To set absolute values,
     * setPlayerMoney can be used.<br>
     * @see {@link https://wiki.multitheftauto.com/wiki/GivePlayerMoney Wiki, givePlayerMoney }
     * @param amount a positive integer number specifying the amount of money to give to the player.
     */
    static giveMoney(
        amount: number
    ): boolean;

    /**
     * This function allows you to check the current blur level of a specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerBlurLevel Wiki, getPlayerBlurLevel }
     * @return returns the local blur level.
     */
    static getBlurLevel(): number;

    /**
     * This function checks if the specified players radar map has been forced on or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsPlayerMapForced Wiki, isPlayerMapForced }
     * @return returns true if the local players radar map is forced on, false otherwise.
     */
    static isMapForced(): boolean;

    /**
     * This function gets a players current wanted level. The wanted level is indicated by the
     * amount of stars a player has on the GTA HUD.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerWantedLevel Wiki, getPlayerWantedLevel }
     */
    static getWantedLevel(): number;

    /**
     * This function gets the current color of a players name tag as RGB values. These are in
     * the range 0-255.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerNametagColor Wiki, getPlayerNametagColor }
     * @return returns red, green and blue values if an existent player was specified, false otherwise.
     */
    getNametagColor(): LuaMultiReturn<[
        number,
        number,
        number
    ]>;

    /**
     * This function gets the current team a player is on.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerTeam Wiki, getPlayerTeam }
     * @return returns a team element representing the team the player is on, false if the player is not
     * part of a team.
     */
    getTeam(): Team;

    /**
     * This function is used to forcefully show a players radar map.
     * @see {@link https://wiki.multitheftauto.com/wiki/ForcePlayerMap Wiki, forcePlayerMap }
     * @param forceOn : A boolean value representing whether or not the players radar map will be forced on
     */
    static forceMap(
        forceOn: boolean
    ): boolean;

    /**
     * This function returns a player element for the player with the name passed to the
     * function.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerFromName Wiki, getPlayerFromName }
     * @param playerName : A string containing the name of the player you want to reference
     * @return returns a player element for the player with the nickname provided. if there is no player
     * with that name, false is returned.
     */
    constructor(
        playerName: string
    );

    /**
     * This function returns a string containing the name of the specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerName Wiki, getPlayerName }
     * @return returns a string containing the requested players name, or false if the player passed to
     * the function is invalid.
     */
    getName(): string;

    /**
     * This function returns the ping of a specified player. The ping is the number of
     * milliseconds that data takes to travel from the players client to the server or vice
     * versa.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerPing Wiki, getPlayerPing }
     * @return returns the ping as an int, or false if the player is invalid.
     */
    getPing(): number;

    /**
     * This function subtracts money from a players current money amount.
     * @see {@link https://wiki.multitheftauto.com/wiki/TakePlayerMoney Wiki, takePlayerMoney }
     * @param amount an integer number specifying the amount of money to take from the player.
     */
    static takeMoney(
        amount: number
    ): boolean;

    /**
     * This function will allow you to determine if a players name tag is currently showing.
     * @see {@link https://wiki.multitheftauto.com/wiki/IsPlayerNametagShowing Wiki, isPlayerNametagShowing }
     * @return returns true if the players name tag is being shown, false otherwise.
     */
    isNametagShowing(): boolean;

    /**
     * This will allow you to retrieve the name tag a player is currently using.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayerNametagText Wiki, getPlayerNametagText }
     * @return returns a string with the nametag text, false if the player is invalid.
     */
    getNametagText(): string;

    /**
     * This will change the text of a players nickname in the world to something besides the
     * nickname he chose. This will not change the players actual nickname, it only changes the
     * visible aspect inside the world (you will see his original nickname in the scoreboard and
     * will refer to his original name in scripts).
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerNametagText Wiki, setPlayerNametagText }
     * @param text The new nickname text that will be displayed
     * @return returns true if successful, false otherwise.
     */
    setNametagText(
        text: string
    ): boolean;

    /**
     * Use this to define whether the players name tag is visible or invisible.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetPlayerNametagShowing Wiki, setPlayerNametagShowing }
     * @param showing Use true or false to show/hide the tag
     * @return returns true if successful, false otherwise
     */
    setNametagShowing(
        showing: boolean
    ): boolean;
}
