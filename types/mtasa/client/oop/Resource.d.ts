/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element } from 'types/mtasa/client/structure';

export class Resource {
    /**
     * @see {@link getResourceName}
     */
    name: string;
    /**
     * @see {@link getResourceRootElement}
     */
    rootElement: Element;
    /**
     * @see {@link getResourceState}
     */
    state: string;

    /**
     * @see {@link getResourceName}
     */
    getName(): string;

    /**
     * @see {@link getResourceRootElement}
     */
    getRootElement(): Element;

    /**
     * @see {@link getResourceState}
     */
    getState(): string;
}
