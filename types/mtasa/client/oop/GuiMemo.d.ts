/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Gui } from 'types/mtasa/client/structure';

export class GuiMemo {
    /**
     * @see {@link guiMemoSetReadOnly}
     */
    setReadOnly(memo: Gui, status: boolean): boolean;
}
