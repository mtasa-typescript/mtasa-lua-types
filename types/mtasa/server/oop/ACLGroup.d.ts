/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { ACL } from "./ACL";

export class ACLGroup {
    /**
     * @see {@link aclGroupGetName}
     */
    name: string;
    /**
     * @see {@link aclGroupListACL}
     */
    aclList: LuaTable;
    /**
     * @see {@link aclGroupListObjects}
     */
    objects: LuaTable;

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
    list(): LuaTable;

    /**
     * @see {@link aclGroupListACL}
     */
    listACL(): LuaTable;

    /**
     * @see {@link aclGroupListObjects}
     */
    listObjects(): LuaTable;

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
