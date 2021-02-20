/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Table } from 'types/mtasa/server/structure';

export class Team {
    /**
     * @see {@link setTeamFriendlyFire}
     */
    friendlyFire: boolean;
    /**
     * @see {@link countPlayersInTeam}
     */
    playerCount: number;
    /**
     * @see {@link getPlayersInTeam}
     */
    players: Table;
    /**
     * @see {@link getTeamName}
     */
    name: string;

    /**
     * @see {@link setTeamColor}
     */
    setColor(colorR: number, colorG: number, colorB: number): boolean;

    /**
     * @see {@link setTeamFriendlyFire}
     */
    setFriendlyFire(friendlyFire: boolean): boolean;

    /**
     * @see {@link setTeamName}
     */
    setName(newName: string): boolean;

    /**
     * @see {@link countPlayersInTeam}
     */
    countPlayers(): number;

    /**
     * @see {@link getPlayersInTeam}
     */
    getPlayers(): Table;

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
