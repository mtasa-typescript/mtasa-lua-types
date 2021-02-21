/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

export class Ban {
    /**
     * @see {@link getBanAdmin}
     */
    admin: string;
    /**
     * @see {@link getBanIP}
     */
    ip: string;
    /**
     * @see {@link getBanNick}
     */
    nick: string;
    /**
     * @see {@link getBanReason}
     */
    reason: string;
    /**
     * @see {@link getUnbanTime}
     */
    unbanTime: number;

    /**
     * @see {@link getBanAdmin}
     */
    getAdmin(): string;

    /**
     * @see {@link getBanIP}
     */
    getIP(): string;

    /**
     * @see {@link getBanNick}
     */
    getNick(): string;

    /**
     * @see {@link getBanReason}
     */
    getReason(): string;

    /**
     * @see {@link getBanSerial}
     */
    getSerial(): string;

    /**
     * @see {@link getBanTime}
     */
    getTime(): number;

    /**
     * @see {@link getUnbanTime}
     */
    getUnbanTime(): number;

    /**
     * @see {@link setBanAdmin}
     */
    setAdmin(theAdmin: string): boolean;

    /**
     * @see {@link setBanNick}
     */
    setNick(theNick: string): boolean;

    /**
     * @see {@link setBanReason}
     */
    setReason(theReason: string): boolean;

    /**
     * @see {@link setUnbanTime}
     */
    setUnbanTime(theTime: number): boolean;
}
