/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Table } from '../structure';

export class GuiElement {
    /**
     * @see {@link guiGetAlpha}
     */
    alpha: number;
    /**
     * @see {@link guiGetCursorType}
     */
    cursorType: string;
    /**
     * @see {@link guiGetEnabled}
     */
    enabled: boolean;
    /**
     * @see {@link guiGetFont}
     */
    font: LuaMultiReturn<[string, Element]>;
    /**
     * @see {@link guiGetInputEnabled}
     */
    inputEnabled: boolean;
    /**
     * @see {@link guiGetInputMode}
     */
    inputMode: string;
    /**
     * @see {@link guiGetPosition}
     */
    position: LuaMultiReturn<[number, number]>;
    /**
     * @see {@link guiGetProperties}
     */
    properties: Table;
    /**
     * @see {@link guiGetText}
     */
    text: string;
    /**
     * @see {@link guiGetVisible}
     */
    visible: boolean;
    /**
     * @see {@link isChatBoxInputActive}
     */
    chatBoxInputActive: boolean;
    /**
     * @see {@link isConsoleActive}
     */
    consoleActive: boolean;
    /**
     * @see {@link isDebugViewActive}
     */
    debugViewActive: boolean;

    /**
     * @see {@link guiBringToFront}
     */
    bringToFront(guiElement: Element): boolean;

    /**
     * @see {@link guiBlur}
     */
    blur(guiElement: Element): boolean;

    /**
     * @see {@link guiFocus}
     */
    focus(guiElement: Element): boolean;

    /**
     * @see {@link guiGetAlpha}
     */
    getAlpha(guiElement: Element): number;

    /**
     * @see {@link guiGetCursorType}
     */
    getCursorType(): string;

    /**
     * @see {@link guiGetEnabled}
     */
    getEnabled(guiElement: Element): boolean;

    /**
     * @see {@link guiGetFont}
     */
    getFont(guiElement: Element): LuaMultiReturn<[string, Element]>;

    /**
     * @see {@link guiGetInputEnabled}
     */
    isInputEnabled(): boolean;

    /**
     * @see {@link guiGetInputMode}
     */
    getInputMode(): string;

    /**
     * @see {@link guiGetPosition}
     */
    getPosition(guiElement: Element, relative: boolean): LuaMultiReturn<[number, number]>;

    /**
     * @see {@link guiGetProperties}
     */
    getProperties(guiElement: Element): Table;

    /**
     * @see {@link guiGetProperty}
     */
    getProperty(guiElement: Element, property: string): string;

    /**
     * @see {@link guiGetScreenSize}
     */
    getScreenSize(): LuaMultiReturn<[number, number]>;

    /**
     * @see {@link guiGetSize}
     */
    getSize(theElement: Element, relative: boolean): LuaMultiReturn<[number, number]>;

    /**
     * @see {@link guiGetText}
     */
    getText(guiElement: Element): string;

    /**
     * @see {@link guiGetVisible}
     */
    getVisible(guiElement: Element): boolean;

    /**
     * @see {@link guiMoveToBack}
     */
    moveToBack(guiElement: Element): boolean;

    /**
     * @see {@link guiSetAlpha}
     */
    setAlpha(guielement: Element, alpha: number): boolean;

    /**
     * @see {@link guiSetEnabled}
     */
    setEnabled(guiElement: Element, enabled: boolean): boolean;

    /**
     * @see {@link guiSetFont}
     */
    setFont(guiElement: Element, font: string): boolean;

    /**
     * @see {@link guiSetInputEnabled}
     */
    setInputEnabled(enabled: boolean): boolean;

    /**
     * @see {@link guiSetInputMode}
     */
    setInputMode(mode: string): boolean;

    /**
     * @see {@link guiSetPosition}
     */
    setPosition(theElement: Element, x: number, y: number, relative: boolean): boolean;

    /**
     * @see {@link guiSetProperty}
     */
    setProperty(guiElement: Element, property: string, value: string): boolean;

    /**
     * @see {@link guiSetSize}
     */
    setSize(guiElement: Element, width: number, height: number, relative: boolean): boolean;

    /**
     * @see {@link guiSetText}
     */
    setText(guiElement: Element, text: string): boolean;

    /**
     * @see {@link guiSetVisible}
     */
    setVisible(guiElement: Element, state: boolean): boolean;

    /**
     * @see {@link isChatBoxInputActive}
     */
    isChatBoxInputActive(): boolean;

    /**
     * @see {@link isConsoleActive}
     */
    isConsoleActive(): boolean;

    /**
     * @see {@link isDebugViewActive}
     */
    isDebugViewActive(): boolean;

    /**
     * @see {@link isTransferBoxActive}
     */
    isTransferBoxActive(): boolean;

    /**
     * @see {@link setDebugViewActive}
     */
    setDebugViewActive(enabled: boolean): boolean;
}
