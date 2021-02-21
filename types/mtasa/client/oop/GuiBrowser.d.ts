/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Browser } from 'types/mtasa/client/structure';

export class GuiBrowser {
    /**
     * @see {@link guiGetBrowser}
     */
    browser: Browser;

    /**
     * @see {@link guiGetBrowser}
     */
    getBrowser(): Browser;
}
