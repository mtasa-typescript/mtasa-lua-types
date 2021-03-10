/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

export class Team {
    /**
     * @see {@link countPlayersInTeam}
     */
    playerCount: number;
    /**
     * @see {@link getPlayersInTeam}
     */
    players: LuaTable;
    /**
     * @see {@link getTeamFriendlyFire}
     */
    friendlyFire: boolean;
    /**
     * @see {@link getTeamName}
     */
    name: string;

    /**
     * @see {@link countPlayersInTeam}
     */
    countPlayers(): number;

    /**
     * @see {@link getPlayersInTeam}
     */
    getPlayers(): LuaTable;

    /**
     * @see {@link getTeamColor}
     */
    getColor(): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getTeamFriendlyFire}
     */
    getFriendlyFire(): boolean;

    /**
     * @see {@link getTeamName}
     */
    getName(): string;
}
