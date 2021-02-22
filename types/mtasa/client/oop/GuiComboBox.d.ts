/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element } from '../structure';

export class GuiComboBox {
    /**
     * @see {@link guiComboBoxGetSelected}
     */
    selected: number;
    /**
     * @see {@link guiComboBoxIsOpen}
     */
    open: boolean;

    /**
     * @see {@link guiComboBoxGetSelected}
     */
    getSelected(comboBox: Element): number;

    /**
     * @see {@link guiComboBoxIsOpen}
     */
    isOpen(comboBox: Element): boolean;

    /**
     * @see {@link guiComboBoxSetOpen}
     */
    setOpen(comboBox: Element, state: boolean): boolean;

    /**
     * @see {@link guiComboBoxSetSelected}
     */
    setSelected(comboBox: Element, itemIndex: number): boolean;
}
