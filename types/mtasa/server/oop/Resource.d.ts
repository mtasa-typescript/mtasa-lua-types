/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Element } from 'types/mtasa/server/structure';

export class Resource {
    /**
     * @see {@link isResourceArchived}
     */
    archived: boolean;
    /**
     * @see {@link isResourceProtected}
     */
    protected: boolean;
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
     * @see {@link isResourceArchived}
     */
    isArchived(): boolean;

    /**
     * @see {@link isResourceProtected}
     */
    isProtected(): boolean;

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
