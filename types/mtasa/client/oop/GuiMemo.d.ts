/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Gui } from '../structure';

export class GuiMemo {
    /**
     * @see {@link guiMemoSetReadOnly}
     */
    setReadOnly(memo: Gui, status: boolean): boolean;
}
