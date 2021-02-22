/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { ACL, Table } from '../structure';

export class ACLGroup {
    /**
     * @see {@link aclGroupGetName}
     */
    name: string;
    /**
     * @see {@link aclGroupListACL}
     */
    aclList: Table;
    /**
     * @see {@link aclGroupListObjects}
     */
    objects: Table;

    /**
     * @see {@link aclDestroyGroup}
     */
    destroy(): boolean;

    /**
     * @see {@link aclGetGroup}
     */
    get(groupName: string): ACLGroup;

    /**
     * @see {@link aclGroupAddACL}
     */
    addACL(theACL: ACL): boolean;

    /**
     * @see {@link aclGroupAddObject}
     */
    addObject(theObjectName: string): boolean;

    /**
     * @see {@link aclGroupGetName}
     */
    getName(): string;

    /**
     * @see {@link aclGroupList}
     */
    list(): Table;

    /**
     * @see {@link aclGroupListACL}
     */
    listACL(): Table;

    /**
     * @see {@link aclGroupListObjects}
     */
    listObjects(): Table;

    /**
     * @see {@link aclGroupRemoveACL}
     */
    removeACL(theACL: ACL): boolean;

    /**
     * @see {@link aclGroupRemoveObject}
     */
    removeObject(theObjectString: string): boolean;

    /**
     * @see {@link isObjectInACLGroup}
     */
    doesContainObject(theObject: string, theGroup: ACLGroup): boolean;
}
