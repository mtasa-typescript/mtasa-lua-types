/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element } from '../structure';

export class GuiCheckBox {
    /**
     * @see {@link guiCheckBoxGetSelected}
     */
    selected: boolean;

    /**
     * @see {@link guiCheckBoxGetSelected}
     */
    getSelected(theCheckbox: Element): boolean;

    /**
     * @see {@link guiCheckBoxSetSelected}
     */
    setSelected(theCheckbox: Element, state: boolean): boolean;
}
