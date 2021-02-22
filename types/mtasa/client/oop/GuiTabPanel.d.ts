/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element } from '../structure';

export class GuiTabPanel {
    /**
     * @see {@link guiGetSelectedTab}
     */
    selectedTab: Element;

    /**
     * @see {@link guiGetSelectedTab}
     */
    getSelectedTab(tabPanel: Element): Element;
}
