/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

export class Timer {
    /**
     * @see {@link isTimer}
     */
    valid: boolean;

    /**
     * @see {@link getTimerDetails}
     */
    getDetails(theTimer: Timer): LuaMultiReturn<[number, number, number]>;

    /**
     * @see {@link isTimer}
     */
    isValid(): boolean;

    /**
     * @see {@link killTimer}
     */
    destroy(): boolean;

    /**
     * @see {@link resetTimer}
     */
    reset(): boolean;
}
