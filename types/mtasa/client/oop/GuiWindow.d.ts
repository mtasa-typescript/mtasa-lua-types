/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element } from '../structure';

export class GuiWindow {
    /**
     * @see {@link guiWindowSetMovable}
     */
    setMovable(theElement: Element, status: boolean): boolean;

    /**
     * @see {@link guiWindowSetSizable}
     */
    setSizable(theElement: Element, status: boolean): boolean;
}
