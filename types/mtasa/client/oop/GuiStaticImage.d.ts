/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element } from '../structure';

export class GuiStaticImage {
    /**
     * @see {@link guiStaticImageLoadImage}
     */
    loadImage(theElement: Element, filename: string): boolean;
}
