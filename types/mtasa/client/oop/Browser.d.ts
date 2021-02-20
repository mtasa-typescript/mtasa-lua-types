/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { HandleFunction } from 'types/mtasa/client/structure';

export class Browser {
    /**
     * @see {@link getBrowserTitle}
     */
    title: string;
    /**
     * @see {@link getBrowserURL}
     */
    url: string;
    /**
     * @see {@link isBrowserLoading}
     */
    loading: boolean;
    /**
     * @see {@link setBrowserVolume}
     */
    volume: boolean;
    /**
     * @see {@link toggleBrowserDevTools}
     */
    devTools: boolean;

    /**
     * @see {@link getBrowserProperty}
     */
    getProperty(key: string): boolean;

    /**
     * @see {@link getBrowserTitle}
     */
    getTitle(): string;

    /**
     * @see {@link getBrowserURL}
     */
    getURL(): string;

    /**
     * @see {@link injectBrowserMouseWheel}
     */
    injectMouseWheel(verticalScroll: number, horizontalScroll: number): boolean;

    /**
     * @see {@link isBrowserLoading}
     */
    isLoading(): boolean;

    /**
     * @see {@link loadBrowserURL}
     */
    loadURL(url: string, postData?: string, urlEncoded?: boolean): boolean;

    /**
     * @see {@link setBrowserAjaxHandler}
     */
    setAjaxHandler(url: string, handler?: HandleFunction): boolean;

    /**
     * @see {@link setBrowserProperty}
     */
    setProperty(key: string, value: string): boolean;

    /**
     * @see {@link setBrowserVolume}
     */
    setVolume(volume: number): boolean;

    /**
     * @see {@link toggleBrowserDevTools}
     */
    toggleDevTools(visible: boolean): boolean;
}
