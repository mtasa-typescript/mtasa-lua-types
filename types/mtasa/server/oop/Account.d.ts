/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Player, Table } from 'types/mtasa/server/structure';

export class Account {
    /**
     * @see {@link getAccountName}
     */
    name: string;
    /**
     * @see {@link getAccountPlayer}
     */
    player: Player;
    /**
     * @see {@link getAccountSerial}
     */
    serial: string;
    /**
     * @see {@link getAllAccountData}
     */
    data: Table;
    /**
     * @see {@link isGuestAccount}
     */
    guest: boolean;
    /**
     * @see {@link setAccountPassword}
     */
    password: boolean;
    /**
     * @see {@link getAccountID}
     */
    id: number;
    /**
     * @see {@link getAccountIP}
     */
    ip: string;

    /**
     * @see {@link copyAccountData}
     */
    copyDataTo(fromAccount: Account): boolean;

    /**
     * @see {@link getAccountData}
     */
    getData(key: string): string;

    /**
     * @see {@link getAccountName}
     */
    getName(): string;

    /**
     * @see {@link getAccountPlayer}
     */
    getPlayer(): Player;

    /**
     * @see {@link getAccountSerial}
     */
    getSerial(): string;

    /**
     * @see {@link getAccounts}
     */
    getAll(): Table;

    /**
     * @see {@link getAllAccountData}
     */
    getAllData(): Table;

    /**
     * @see {@link isGuestAccount}
     */
    isGuest(): boolean;

    /**
     * @see {@link removeAccount}
     */
    remove(): boolean;

    /**
     * @see {@link setAccountData}
     */
    setData(key: string, value: any): boolean;

    /**
     * @see {@link setAccountPassword}
     */
    setPassword(password: string): boolean;

    /**
     * @see {@link getAccountID}
     */
    getID(): number;

    /**
     * @see {@link getAccountIP}
     */
    getIP(): string;

    /**
     * @see {@link setAccountName}
     */
    setName(name: string, allowCaseVariations?: boolean): boolean;
}
