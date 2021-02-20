/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { XmlNode } from 'types/mtasa/client/structure';

export class XML {
    /**
     * @see {@link xmlLoadFile}
     */
    load(filePath: string, readOnly?: boolean): XmlNode;

    /**
     * @see {@link xmlLoadString}
     */
    loadstring(xmlString: string): XmlNode;
}
