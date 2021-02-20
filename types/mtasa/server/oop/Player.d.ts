/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Account, Ban, Element, Table, Team } from 'types/mtasa/server/structure';

export class Player {
    /**
     * @see {@link getPlayerAccount}
     */
    account: Account;
    /**
     * @see {@link getPlayerACInfo}
     */
    ACInfo: Table;
    /**
     * @see {@link getPlayerIdleTime}
     */
    idleTime: number;
    /**
     * @see {@link getPlayerIP}
     */
    ip: string;
    /**
     * @see {@link getPlayerScriptDebugLevel}
     */
    scriptDebugLevel: number;
    /**
     * @see {@link getPlayerSerial}
     */
    serial: string;
    /**
     * @see {@link getPlayerVersion}
     */
    version: string;
    /**
     * @see {@link isPlayerMuted}
     */
    muted: boolean;

    /**
     * @see {@link setPlayerVoiceBroadcastTo}
     */
    voiceBroadcastTo: boolean;
    /**
     * @see {@link setPlayerVoiceIgnoreFrom}
     */
    voiceIgnoreFrom: boolean;

    /**
     * @see {@link getCameraInterior}
     */
    cameraInterior: number;
    /**
     * @see {@link getCameraMatrix}
     */
    cameraMatrix: LuaMultiReturn<[number, number, number, number, number, number, number, number]>;
    /**
     * @see {@link getCameraTarget}
     */
    cameraTarget: Element;
    /**
     * @see {@link forcePlayerMap}
     */
    mapForced: boolean;
    /**
     * @see {@link getPlayerMoney}
     */
    money: number;
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
     * @see {@link getPlayerWantedLevel}
     */
    wantedLevel: number;
    /**
     * @see {@link isPlayerNametagShowing}
     */
    nametagShowing: boolean;
    /**
     * @see {@link setPlayerBlurLevel}
     */
    blurLevel: boolean;
    /**
     * @see {@link getPlayerTeam}
     */
    team: Team;

    /**
     * @see {@link getPlayerAccount}
     */
    getAccount(): Account;

    /**
     * @see {@link logIn}
     */
    logIn(theAccount: Account, thePassword: string): boolean;

    /**
     * @see {@link banPlayer}
     */
    ban(IP: boolean, Username: boolean, Serial: boolean, string: Player, reason: string, seconds: number): Ban;

    /**
     * @see {@link kickPlayer}
     */
    kick(string: Player, reason: string): boolean;

    /**
     * @see {@link triggerClientEvent}
     */
    triggerEvent(element: Table, name: string, sourceElement: Element, ...args: any[]): boolean;

    /**
     * @see {@link getAlivePlayers}
     */
    getAllAlive(): Table;

    /**
     * @see {@link getDeadPlayers}
     */
    getAllDead(): Table;

    /**
     * @see {@link getPlayerACInfo}
     */
    getACInfo(thePlayer: Element): Table;

    /**
     * @see {@link getPlayerAnnounceValue}
     */
    getAnnounceValue(thePlayer: Element, key: string): string;

    /**
     * @see {@link getPlayerCount}
     */
    getCount(): number;

    /**
     * @see {@link getPlayerIdleTime}
     */
    getIdleTime(): number;

    /**
     * @see {@link getPlayerIP}
     */
    getIP(): string;

    /**
     * @see {@link getPlayerScriptDebugLevel}
     */
    getScriptDebugLevel(): number;

    /**
     * @see {@link getPlayerSerial}
     */
    getSerial(): string;

    /**
     * @see {@link getPlayerVersion}
     */
    getVersion(): string;

    /**
     * @see {@link isPlayerMuted}
     */
    isMuted(): boolean;

    /**
     * @see {@link redirectPlayer}
     */
    redirect(serverIP: string, serverPort: number, serverPassword?: string): boolean;

    /**
     * @see {@link resendPlayerModInfo}
     */
    resendModInfo(): boolean;

    /**
     * @see {@link setPlayerAnnounceValue}
     */
    setAnnounceValue(thePlayer: Element, key: string, value: string): boolean;

    /**
     * @see {@link setPlayerMuted}
     */
    setMuted(state: boolean): boolean;

    /**
     * @see {@link setPlayerName}
     */
    setName(newName: string): boolean;

    /**
     * @see {@link setPlayerScriptDebugLevel}
     */
    setScriptDebugLevel(level: number): boolean;

    /**
     * @see {@link setPlayerVoiceBroadcastTo}
     */
    setVoiceBroadcastTo(thePlayer: Element, broadcastTo: string): boolean;

    /**
     * @see {@link setPlayerVoiceIgnoreFrom}
     */
    setVoiceIgnoreFrom(thePlayer: Element, ignoreFrom: string): boolean;

    /**
     * @see {@link setPlayerWantedLevel}
     */
    setWantedLevel(stars: number): boolean;

    /**
     * @see {@link spawnPlayer}
     */
    spawn(
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
     * @see {@link takePlayerScreenShot}
     */
    takeScreenShot(
        width: number,
        height: number,
        tag?: string,
        quality?: number,
        maxBandwith?: number,
        maxPacketSize?: number,
    ): boolean;

    /**
     * @see {@link setPlayerTeam}
     */
    setTeam(theTeam: Team): boolean;

    /**
     * @see {@link getCameraInterior}
     */
    getCameraInterior(): number;

    /**
     * @see {@link getCameraMatrix}
     */
    getCameraMatrix(): LuaMultiReturn<[number, number, number, number, number, number, number, number]>;

    /**
     * @see {@link getCameraTarget}
     */
    getCameraTarget(): Element;

    /**
     * @see {@link setCameraInterior}
     */
    setCameraInterior(interior: number): boolean;

    /**
     * @see {@link setCameraMatrix}
     */
    setCameraMatrix(
        positionX: number,
        positionY: number,
        positionZ: number,
        lookAtX?: number,
        lookAtY?: number,
        lookAtZ?: number,
        roll?: number,
        fov?: number,
    ): boolean;

    /**
     * @see {@link setCameraTarget}
     */
    setCameraTarget(target?: Player): boolean;

    /**
     * @see {@link outputChatBox}
     */
    outputChat(text: string, element?: Table, r?: number, g?: number, b?: number, colorCoded?: boolean): boolean;

    /**
     * @see {@link forcePlayerMap}
     */
    forceMap(forceOn: boolean): boolean;

    /**
     * @see {@link getPlayerBlurLevel}
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
     * @see {@link givePlayerMoney}
     */
    giveMoney(amount: number): boolean;

    /**
     * @see {@link isPlayerMapForced}
     */
    isMapForced(): boolean;

    /**
     * @see {@link isPlayerNametagShowing}
     */
    isNametagShowing(): boolean;

    /**
     * @see {@link setPlayerBlurLevel}
     */
    setBlurLevel(level: number): boolean;

    /**
     * @see {@link setPlayerHudComponentVisible}
     */
    setHudComponentVisible(component: string, show: boolean): boolean;

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
     * @see {@link takePlayerMoney}
     */
    takeMoney(amount: number): boolean;

    /**
     * @see {@link getPlayerTeam}
     */
    getTeam(): Team;
}
