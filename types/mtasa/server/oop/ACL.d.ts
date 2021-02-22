/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { Table } from '../structure';

export class ACL {
    /**
     * @see {@link aclGetName}
     */
    name: string;

    /**
     * @see {@link aclDestroy}
     */
    destroy(): boolean;

    /**
     * @see {@link aclGet}
     */
    get(aclName: string): ACL;

    /**
     * @see {@link aclGetName}
     */
    getName(): string;

    /**
     * @see {@link aclGetRight}
     */
    getRight(rightName: string): boolean;

    /**
     * @see {@link aclList}
     */
    list(): Table;

    /**
     * @see {@link aclListRights}
     */
    listRights(allowedType: string): Table;

    /**
     * @see {@link aclReload}
     */
    reload(): boolean;

    /**
     * @see {@link aclRemoveRight}
     */
    removeRight(rightName: string): boolean;

    /**
     * @see {@link aclSave}
     */
    save(): boolean;

    /**
     * @see {@link aclSetRight}
     */
    setRight(rightName: string, hasAccess: boolean): boolean;
}
