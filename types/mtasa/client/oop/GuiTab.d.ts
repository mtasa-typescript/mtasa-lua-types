/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element } from 'types/mtasa/client/structure';

export class GuiTab {
    /**
     * @see {@link guiDeleteTab}
     */
    delete(tabPanel: Element): boolean;
}
