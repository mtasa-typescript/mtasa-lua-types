/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element, Gui } from 'types/mtasa/client/structure';

export class GuiEdit {
    /**
     * @see {@link guiEditGetCaretIndex}
     */
    caretIndex: number;
    /**
     * @see {@link guiEditGetMaxLength}
     */
    maxLength: number;

    /**
     * @see {@link guiEditGetCaretIndex}
     */
    getCaretIndex(theElement: Element): number;

    /**
     * @see {@link guiEditGetMaxLength}
     */
    getMaxLength(edit: Gui): number;

    /**
     * @see {@link guiEditSetCaretIndex}
     */
    setCaretIndex(theElement: Element, index: number): boolean;

    /**
     * @see {@link guiEditSetMasked}
     */
    setMasked(theElement: Element, status: boolean): boolean;

    /**
     * @see {@link guiEditSetMaxLength}
     */
    setMaxLength(guiEdit: Element, length: number): boolean;

    /**
     * @see {@link guiEditSetReadOnly}
     */
    setReadOnly(editField: Element, status: boolean): boolean;
}
