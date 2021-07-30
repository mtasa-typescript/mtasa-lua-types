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

/** @customConstructor Team */
export class Team extends Element {
    /**
     * This function gets the team name of a team object.
     */
    name: string;

    /**
     * This function is for returning the number of players in the specified team.
     */
    playerCount: number;

    /**
     * This function retrieves all the players of the specified team.
     */
    players: LuaTable;

    /**
     * This function tells you if friendly fire is turned on for the specified team.
     */
    friendlyFire: boolean;

    /**
     * This function finds a team element using the provided team name.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetTeamFromName Wiki, getTeamFromName }
     * @param teamName A string determining the name of the team you wish to find.
     * @return returns the team element if it was found, false otherwise.
     */
    static getFromName(
        teamName: string
    ): Team;

    /**
     * This function gets the team name of a team object.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetTeamName Wiki, getTeamName }
     * @return returns a string representing the teams name if the team object was valid, false
     * otherwise.
     */
    getName(): string;

    /**
     * This function is for creating a new team, which can be used to group players. Players
     * will not join the team until they are respawned.
     * @see {@link https://wiki.multitheftauto.com/wiki/CreateTeam Wiki, createTeam }
     * @param teamName A string representing the teams name.
     * @param colorR An integer representing the red color value.
     * @param colorG An integer representing the green color value.
     * @param colorB An integer representing the blue color value.
     * @return returns a team element if it was successfully created, false if invalid arguments are
     * passed or a team with that name already exists.
     */
    static create(
        teamName: string,
        colorR?: number,
        colorG?: number,
        colorB?: number
    ): Team;

    /**
     * This function is for returning the number of players in the specified team.
     * @see {@link https://wiki.multitheftauto.com/wiki/CountPlayersInTeam Wiki, countPlayersInTeam }
     * @return returns an integer containing the number of players in the team, false if it could not be
     * retrieved.
     */
    countPlayers(): number;

    /**
     * This function is for setting the color of a specified team. This color is shown, for
     * example, in the team players nametags.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetTeamColor Wiki, setTeamColor }
     * @param colorR An integer representing the red color value, from 0 to 255.
     * @param colorG An integer representing the green color value, from 0 to 255.
     * @param colorB An integer representing the blue color value, from 0 to 255.
     * @return returns true if the team is valid and the color is different, otherwise false.
     */
    setColor(
        colorR: number,
        colorG: number,
        colorB: number
    ): boolean;

    /**
     * This function is used to set a teams name.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetTeamName Wiki, setTeamName }
     * @param newName A string representing the name you want the team to be called.
     * @return returns true if the team was valid and the name was changed, false otherwise.
     */
    setName(
        newName: string
    ): boolean;

    /**
     * This function retrieves all the players of the specified team.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetPlayersInTeam Wiki, getPlayersInTeam }
     * @return returns a table of all the players in the team, or an empty one if there are none else
     * false if invalid arguments are passed.
     */
    getPlayers(): LuaTable;

    /**
     * This function retrieves the color of a team.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetTeamColor Wiki, getTeamColor }
     * @return returns 3 integers representing the red, green, and blue color components of the team if
     * its valid, false otherwise.
     */
    getColor(): LuaMultiReturn<[
        number,
        number,
        number
    ]>;

    /**
     * This function sets the friendly fire value for the specified team.
     * @see {@link https://wiki.multitheftauto.com/wiki/SetTeamFriendlyFire Wiki, setTeamFriendlyFire }
     * @param friendlyFire A boolean denoting whether the players from the same team can kill each other (true) or
     * whether the players cant kill each other (false).
     * @return returns true if the friendly fire value is set for the specified team, false if the
     * friendly fire value cant be set for the specified team or if invalid arguments are
     * specified.
     */
    setFriendlyFire(
        friendlyFire: boolean
    ): boolean;

    /**
     * This function tells you if friendly fire is turned on for the specified team.
     * @see {@link https://wiki.multitheftauto.com/wiki/GetTeamFriendlyFire Wiki, getTeamFriendlyFire }
     * @return returns true if friendly fire is on for the specified team, false if it is turned off or
     * if invalid arguments are specified.
     */
    getFriendlyFire(): boolean;
}
