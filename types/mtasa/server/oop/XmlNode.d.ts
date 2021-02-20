/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Table } from 'types/mtasa/server/structure';

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
    copy(nodeToCopy: XmlNode, newFilePath: string): XmlNode;

    /**
     * @see {@link xmlNodeGetAttribute}
     */
    getAttribute(node: XmlNode, name: string): string;

    /**
     * @see {@link xmlNodeGetAttributes}
     */
    getAttributes(node: XmlNode): Table;

    /**
     * @see {@link xmlNodeGetChildren}
     */
    getChildren(parent: XmlNode, index: number): Table | XmlNode;

    /**
     * @see {@link xmlNodeGetName}
     */
    getName(node: XmlNode): string;

    /**
     * @see {@link xmlNodeGetParent}
     */
    getParent(node: XmlNode): XmlNode;

    /**
     * @see {@link xmlNodeGetValue}
     */
    getValue(theXMLNode: XmlNode): string;

    /**
     * @see {@link xmlNodeSetAttribute}
     */
    setAttribute(node: XmlNode, name: string, float: string): boolean;

    /**
     * @see {@link xmlNodeSetName}
     */
    setName(node: XmlNode, name: string): boolean;

    /**
     * @see {@link xmlNodeSetValue}
     */
    setValue(theXMLNode: XmlNode, value: string, setCDATA?: boolean): boolean;
}
