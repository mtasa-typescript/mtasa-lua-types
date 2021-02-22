/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Table } from '../structure';

export class XmlNode {
    /**
     * @see {@link xmlNodeGetAttributes}
     */
    attributes: Table;
    /**
     * @see {@link xmlNodeGetChildren}
     */
    children: Table | XmlNode;
    /**
     * @see {@link xmlNodeGetName}
     */
    name: string;
    /**
     * @see {@link xmlNodeGetParent}
     */
    parent: XmlNode;
    /**
     * @see {@link xmlNodeGetValue}
     */
    value: string;

    /**
     * @see {@link xmlCopyFile}
     */
    copy(newFilePath: string): XmlNode;

    /**
     * @see {@link xmlNodeGetAttribute}
     */
    getAttribute(name: string): string;

    /**
     * @see {@link xmlNodeGetAttributes}
     */
    getAttributes(): Table;

    /**
     * @see {@link xmlNodeGetChildren}
     */
    getChildren(index: number): Table | XmlNode;

    /**
     * @see {@link xmlNodeGetName}
     */
    getName(): string;

    /**
     * @see {@link xmlNodeGetParent}
     */
    getParent(): XmlNode;

    /**
     * @see {@link xmlNodeGetValue}
     */
    getValue(): string;

    /**
     * @see {@link xmlNodeSetAttribute}
     */
    setAttribute(name: string, float: string): boolean;

    /**
     * @see {@link xmlNodeSetName}
     */
    setName(name: string): boolean;

    /**
     * @see {@link xmlNodeSetValue}
     */
    setValue(value: string, setCDATA?: boolean): boolean;
}
