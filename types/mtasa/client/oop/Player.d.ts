/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Team } from 'types/mtasa/client/structure';

export class Player {
    /**
     * @see {@link getBlurLevel}
     */
    blurLevel: number;
    /**
     * @see {@link getPlayerName}
     */
    name: string;
    /**
     * @see {@link getPlayerNametagText}
     */
    nametagText: string;
    /**
     * @see {@link getPlayerPing}
     */
    ping: number;
    /**
     * @see {@link isPlayerNametagShowing}
     */
    nametagShowing: boolean;
    /**
     * @see {@link getPlayerTeam}
     */
    team: Team;

    /**
     * @see {@link forcePlayerMap}
     */
    forceMap(forceOn: boolean): boolean;

    /**
     * @see {@link getBlurLevel}
     */
    getBlurLevel(): number;

    /**
     * @see {@link getPlayerMoney}
     */
    getMoney(): number;

    /**
     * @see {@link getPlayerName}
     */
    getName(): string;

    /**
     * @see {@link getPlayerNametagColor}
     */
    getNametagColor(): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link getPlayerNametagText}
     */
    getNametagText(): string;

    /**
     * @see {@link getPlayerPing}
     */
    getPing(): number;

    /**
     * @see {@link getPlayerWantedLevel}
     */
    getWantedLevel(): number;

    /**
     * @see {@link isPlayerMapForced}
     */
    isMapForced(): boolean;

    /**
     * @see {@link isPlayerNametagShowing}
     */
    isNametagShowing(): boolean;

    /**
     * @see {@link setBlurLevel}
     */
    setBlurLevel(level: number): boolean;

    /**
     * @see {@link setPlayerMoney}
     */
    setMoney(amount: number, instant?: boolean): boolean;

    /**
     * @see {@link setPlayerNametagColor}
     */
    setNametagColor(r: number, g: number, b: number): boolean;

    /**
     * @see {@link setPlayerNametagShowing}
     */
    setNametagShowing(showing: boolean): boolean;

    /**
     * @see {@link setPlayerNametagText}
     */
    setNametagText(text: string): boolean;

    /**
     * @see {@link getPlayerTeam}
     */
    getTeam(): Team;
}
