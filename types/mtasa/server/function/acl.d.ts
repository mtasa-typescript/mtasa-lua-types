/// <reference types="typescript-to-lua/language-extensions" />
/** @noSelfInFile */

import { ACL, ACLGroup, } from '../structure';

/**
 * This function creates an ACL entry in the Access Control List system with the specified name.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclCreate|MTASA Wiki}
 * @param aclName The name of the ACL entry to add.
 * @return Returns the created ACL object if successful. Returns false if an ACL of the given name
 * could not be created.
 */
export function aclCreate(aclName: string): ACL;

/**
 * This function creates a group in the ACL. An ACL group can contain objects like players and
 * resources. They specify who has access to the ACL's in this group.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclCreateGroup|MTASA Wiki}
 * @param groupName The name of the group to create
 * @return Returns the pointer to the created aclgroup if successful. Returns false if failed.
 */
export function aclCreateGroup(groupName: string): ACLGroup;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function destroys the ACL passed. The destroyed ACL will no longer be valid.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclDestroy|MTASA Wiki}
 * @param theACL The ACL to destroy
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if successfully destroyed and ''false'' if it could not be deleted (ie. it's
 * not valid).
 */
export function aclDestroy(theACL: ACL): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function destroys the given ACL group. The destroyed ACL group will no longer be valid.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclDestroyGroup|MTASA Wiki}
 * @param aclGroup The aclgroup element to destroy
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if the ACL group was successfully deleted, ''false'' if it could not be
 * deleted for some reason (ie. invalid argument).
 */
export function aclDestroyGroup(aclGroup: ACLGroup): boolean;

/**
 * Get the ACL with the given name. If need to get most of the ACL's, you should consider using
 * [[aclList]] to get a table of them all.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclGet|MTASA Wiki}
 * @param aclName The name to get the ACL belonging to
 * @return Returns the ACL with that name if it could be retrieved, ''false''/''nil'' if the ACL
 * does not exist or it fails for some other reason.
 */
export function aclGet(aclName: string): ACL;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function is used to get the ACL group with the given name. If you need most of the groups
 * you should consider using [[aclGroupList]] instead to get a table containing them all.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclGetGroup|MTASA Wiki}
 * @param groupName The name to get the ACL group from
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns the ACL group if it could be found. Returns false/nil if it did not exist or failed
 * for some reason.
 */
export function aclGetGroup(groupName: string): ACLGroup;

/**
 * Get the name of given ACL.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclGetName|MTASA Wiki}
 * @return Returns the name of the given ACL as a string if successful. Returns ''false''/''nil''
 * if unsuccessful, ie the ACL is invalid.
 */
export function aclGetName(theAcl: ACL): string;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function returns whether the access for the given right is set to true or false in the ACL.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclGetRight|MTASA Wiki}
 * @param theAcl The ACL to get the right from
 * @param rightName The right name to return the access value of.
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' or ''false'' if the ACL gives access or not to the given function. Returns
 * ''nil'' if it failed for some reason, e.g. an invalid ACL was specified or the right specified does
 * not exist in the ACL.
 */
export function aclGetRight(theAcl: ACL, rightName: string): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function adds the given ACL to the given ACL group. This makes the resources and players in
 * the given ACL group have access to what's specified in the given ACL. The rights for something in
 * the different ACL's in a group are OR-ed together, which means if one ACL gives access to something,
 * this ACL group will have access to that.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclGroupAddACL|MTASA Wiki}
 * @param theGroup The group to add the ACL to
 * @param theACL The ACL to add to the group
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if the ACL could be successfully added to the ACL group, ''false''/''nil'' if
 * either of the elements are invalid, the ACL is already in that group or if something else goes
 * wrong.
 */
export function aclGroupAddACL(theGroup: ACLGroup, theACL: ACL): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function adds an object to the given ACL group. An object can be a player's account,
 * specified as:
 *   ''user.<accountname>''
 * Or a resource, specified as:
 *   ''resource.<resourcename>''
 * Objects are specified as strings. The ACL groups work for the user accounts and the resources
 * that are specified in them.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclGroupAddObject|MTASA Wiki}
 * @param theGroup The group to add the object name string too.
 * @param theObjectName The object string to add to the given ACL.
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if the object was successfully added to the ACL, ''false'' if it already
 * existed in the list.
 */
export function aclGroupAddObject(theGroup: ACLGroup, theObjectName: string): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function is used to get the name of the given ACL group.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclGroupGetName|MTASA Wiki}
 * @param aclGroup The ACL group to get the name of
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns the name of the given ACL group as a string if successful, otherwise ''false'' or
 * ''nil'' if the aclGroup is invalid or it fails for some other reason.
 */
export function aclGroupGetName(aclGroup: ACLGroup): string;

/**
 * This function returns a table of all the ACL groups.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclGroupList|MTASA Wiki}
 * @return Returns a table of all the ACL groups if successful, returns an empty table if no ACL
 * groups exist. ''false''/''nil'' can be returned if this function fails for some other reason.
 */
export function aclGroupList(): LuaTable;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function returns a table over all the ACL's that exist in a given ACL group.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclGroupListACL|MTASA Wiki}
 * @param theGroup The ACL group to get the ACL elements from
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns a table of the ACL elements in the given ACL group. This table might be empty. Returns
 * ''false'' or ''nil'' if theGroup is invalid or it fails for some other reason.
 */
export function aclGroupListACL(theGroup: ACLGroup): LuaTable;

/**
 * <!-- Change this to "Client function" or "Server function" appropriately-->
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function returns a table over all the objects that exist in a given ACL group. These are
 * objects like players and resources.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclGroupListObjects|MTASA Wiki}
 * @param theGroup The ACL group to get the objects from
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns a table of strings in the given ACL group. This table might be empty. Returns
 * ''false'' or ''nil'' if theGroup is invalid or it fails for some other reason.
 */
export function aclGroupListObjects(theGroup: ACLGroup): LuaTable;

/**
 * This function removes the given ACL from the given ACL group.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclGroupRemoveACL|MTASA Wiki}
 * @param theGroup The group to remove the given ACL from
 * @param theACL The ACL to remove from the given group
 * @return Returns ''true'' if the ACL was successfully removed from the ACL group,
 * ''false''/''nil'' if it could not be removed for some reason, ie. either of the elements were invalid.
 */
export function aclGroupRemoveACL(theGroup: ACLGroup, theACL: ACL): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function removes the given object from the given ACL group. The object can be a resource or
 * a player. See [[aclGroupAddObject]] for more details.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclGroupRemoveObject|MTASA Wiki}
 * @param theGroup The ACL group to remove the object string from
 * @param theObjectString The object to remove from the ACL group
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if the object existed in the ACL and could be remoevd, ''false'' if it could
 * not be removed for some reason, ie. it did not exist in the given ACL group.
 */
export function aclGroupRemoveObject(theGroup: ACLGroup, theObjectString: string): boolean;

/**
 * This function returns a list of all the ACLs.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclList|MTASA Wiki}
 * @return Returns a table of all the ACLs. This table can be empty if no ACLs exist. It can also
 * return ''false''/''nil'' if it failed for some reason.
 */
export function aclList(): LuaTable;

/**
 * This function returns a table of all the rights that a given ACL has.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclListRights|MTASA Wiki}
 * @param theACL The ACL to get the rights from
 * @param allowedType The allowed right type. Possible values are general, function, resource and
 * command
 * @return Returns a table over the rights as strings in the given ACL. This table might be empty.
 * Returns ''false'' or ''nil'' if theACL is invalid or it fails for some other reason.
 */
export function aclListRights(theACL: ACL, allowedType: string): LuaTable;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function reloads the ACL's and the ACL groups from the ACL XML file. All ACL and ACL group
 * elements are invalid after a call to this and should not be used anymore.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclReload|MTASA Wiki}
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if the XML was successfully reloaded from the file, ''false'' or ''nil'' if
 * the XML was invalid, didn't exist or could not be loaded for some other reason.
 */
export function aclReload(): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * This function removes the given right (string) from the given ACL.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclRemoveRight|MTASA Wiki}
 * @param theAcl The ACL to remove the right from
 * @param rightName The ACL name to remove from the right from
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if the given right was successfully removed from the given ACL, ''false'' or
 * ''nil'' if it could not be removed for some reason, ie. it didn't exist in the ACL.
 */
export function aclRemoveRight(theAcl: ACL, rightName: string): boolean;

/**
 * <!-- Describe in plain english what this function does. Don't go into details, just give an
 * overview -->
 * The ACL XML file is automatically saved whenever the ACL is modified, but the automatic save can
 * be delayed by up to 10 seconds for performance reasons. Calling this function will force an
 * immediate save.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclSave|MTASA Wiki}
 * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add
 * a tag to it so we can check -->
 * * Returns ''true'' if the ACL was successfully changed, ''false'' or ''nil'' if it could not be
 * saved for some reason, ie. file in use.
 */
export function aclSave(): boolean;

/**
 * This functions changes or adds the given right in the given ACL. The access can be ''true'' or
 * ''false'' and specifies whether the ACL gives access to the right or not.
 * @see {@link https://wiki.multitheftauto.com/wiki/aclSetRight|MTASA Wiki}
 * @param theAcl The ACL to change the right of
 * @param rightName The right to add/change the access property of
 * @param hasAccess Whether the access should be set to true or false
 * @return Returns ''true'' if the access was successfully changed, ''false'' or ''nil'' if it
 * failed for some reason, ie. invalid ACL or the rightname is invalid.
 */
export function aclSetRight(theAcl: ACL, rightName: string, hasAccess: boolean): boolean;

/**
 * This function is used to determine if an object is in a group.
 * @see {@link https://wiki.multitheftauto.com/wiki/isObjectInACLGroup|MTASA Wiki}
 * @param theObject the name of the object to check. Examples: resource.ctf, user.Jim.
 * @param theGroup the ACL group pointer of the group from which the object should be found.
 * @return Returns ''true'' if the object is in the specified group, ''false'' otherwise.
 */
export function isObjectInACLGroup(theObject: string, theGroup: ACLGroup): boolean;
