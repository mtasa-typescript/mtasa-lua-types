// Autogenerated file.
// DO NOT EDIT. ANY CHANGES WILL BE OVERWRITTEN

import {
    TextDisplay,
    Account,
    ACLGroup,
    Ban,
    XML,
    Userdata,
    TextItem,
    Pickup,
    Request,
    Player,
    Blip,
    ColShape,
    Element,
    Ped,
    Resource,
    Team,
    Vehicle,
    XmlNode,
    File,
    Marker,
    MTASAObject,
    RadarArea,
    Water,
    Timer,
    HandleFunction,
    TimerCallbackFunction,
    FetchRemoteCallback,
    GenericEventHandler,
    CommandHandler,
    BindKeyCallback,
    ControlName,
    KeyName,
    KeyState,
    Vector2,
    Vector3,
    Vector4,
    Matrix,
} from '../structure';

/** @customConstructor ACL */
export class ACL {
    /**
     * Get the name of given ACL.
     */
    name: string;

    /**
     * This function creates an ACL entry in the Access Control List system with the specified
     * name.
     * @see https://wiki.multitheftauto.com/wiki/AclCreate
     * @param aclName The name of the ACL entry to add.
     * @return returns the created acl object if successful. returns false if an acl of the given name
     * could not be created.
     */
    constructor(aclName: string);

    /**
     * This function destroys the ACL passed. The destroyed ACL will no longer be valid.
     * @see https://wiki.multitheftauto.com/wiki/AclDestroy
     * @return returns true if successfully destroyed and false if it could not be deleted (ie. its not
     * valid).
     */
    destroy(): boolean;

    /**
     * Get the ACL with the given name. If need to get most of the ACLs, you should consider
     * using aclList to get a table of them all.
     * @see https://wiki.multitheftauto.com/wiki/AclGet
     * @param aclName The name to get the ACL belonging to
     * @return returns the acl with that name if it could be retrieved, false/nil if the acl does not
     * exist or it fails for some other reason.
     */
    static get(aclName: string): ACL;

    /**
     * Get the name of given ACL.
     * @see https://wiki.multitheftauto.com/wiki/AclGetName
     * @param theACL The ACL to get the name of
     * @return returns the name of the given acl as a string if successful. returns false/nil if
     * unsuccessful, ie the acl is invalid.
     */
    getName(): string;

    /**
     * This function returns whether the access for the given right is set to true or false in
     * the ACL.
     * @see https://wiki.multitheftauto.com/wiki/AclGetRight
     * @param rightName The right name to return the access value of.
     * @return returns true or false if the acl gives access or not to the given function. returns nil
     * if it failed for some reason, e.g. an invalid acl was specified or the right specified
     * does not exist in the acl.
     */
    getRight(rightName: string): boolean;

    /**
     * This function returns a list of all the ACLs.
     * @see https://wiki.multitheftauto.com/wiki/AclList
     * @return returns a table of all the acls. this table can be empty if no acls exist. it can also
     * return false/nil if it failed for some reason.
     */
    static list(): LuaTable;

    /**
     * This function returns a table of all the rights that a given ACL has.
     * @see https://wiki.multitheftauto.com/wiki/AclListRights
     * @param allowedType The allowed right type. Possible values are general, function, resource and command
     * @return returns a table over the rights as strings in the given acl. this table might be empty.
     * returns false or nil if theacl is invalid or it fails for some other reason.
     */
    listRights(allowedType: string): LuaTable;

    /**
     * This function reloads the ACLs and the ACL groups from the ACL XML file. All ACL and ACL
     * group elements are invalid after a call to this and should not be used anymore.
     * @see https://wiki.multitheftauto.com/wiki/AclReload
     * @return returns true if the xml was successfully reloaded from the file, false or nil if the xml
     * was invalid, didnt exist or could not be loaded for some other reason.
     */
    static reload(): boolean;

    /**
     * This function removes the given right (string) from the given ACL.
     * @see https://wiki.multitheftauto.com/wiki/AclRemoveRight
     * @param rightName The ACL name to remove from the right from
     * @return returns true if the given right was successfully removed from the given acl, false or nil
     * if it could not be removed for some reason, ie. it didnt exist in the acl.
     */
    removeRight(rightName: string): boolean;

    /**
     * The ACL XML file is automatically saved whenever the ACL is modified, but the automatic
     * save can be delayed by up to 10 seconds for performance reasons. Calling this function
     * will force an immediate save.
     * @see https://wiki.multitheftauto.com/wiki/AclSave
     * @return returns true if the acl was successfully changed, false or nil if it could not be saved
     * for some reason, ie. file in use.
     */
    static save(): boolean;

    /**
     * This functions changes or adds the given right in the given ACL. The access can be true
     * or false and specifies whether the ACL gives access to the right or not.
     * @see https://wiki.multitheftauto.com/wiki/AclSetRight
     * @param rightName The right to add/change the access property of
     * @param hasAccess Whether the access should be set to true or false
     * @return returns true if the access was successfully changed, false or nil if it failed for some
     * reason, ie. invalid acl or the rightname is invalid.
     */
    setRight(rightName: string, hasAccess: boolean): boolean;

    /**
     * This function returns whether or not the given object has access to perform the given
     * action.
     * Scripts frequently wish to limit access to features to particular users. The naïve way to
     * do this would be to check if the player who is attempting to perform an action is in a
     * particular group (usually the Admin group). The main issue with doing this is that the
     * Admin group is not guaranteed to exist. It also doesnt give the server admin any
     * flexibility. He might want to allow his moderators access to the function youre limiting
     * access to, or he may want it disabled entirely.
     * This is where using the ACL properly comes in, and luckily this is very easy. It all
     * comes down to using this function. This, somewhat confusingly named function lets you
     * check if an ACL object (a player or a resource) has a particular ACL right. In this case,
     * we just care about players.
     * So, first of all, think of a name for your right. Lets say we want a private area only
     * certain people can go in, well call our right accessPrivateArea. Then, all you need to do
     * is add one if statement to your code:
     * <syntaxhighlight lang=lua>if hasObjectPermissionTo ( player,
     * resource.YourResourceName.accessPrivateArea, false ) then
     * -- Whatever you want to happen if theyre allowed in
     * else
     * -- Whatever you want to happen if they arent
     * end
     * </syntaxhighlight>
     * Notice that weve named the right using resource.YourResourceName.accessPrivateArea - this
     * is just for neatness, so that the admin knows what resource the right belongs to. Its
     * strongly advised you follow this convention. The false argument specifies the
     * defaultPermission, false indicating that if the user hasnt had the right allowed or
     * dissallowed (i.e. the admin hasnt added it to the config), that it should default to
     * being not allowed.
     * The only downside of using this method is that the admin has to modify his config. The
     * upsides are that the admin has much more control and your script will work for any
     * server, however the admin has configured it.
     * @see https://wiki.multitheftauto.com/wiki/HasObjectPermissionTo
     * @param theObject The object to test if has permission to. This can be a client element (ie. a player), a
     * resource or a string in the form user.<name> or resource.<name>.
     * @param theAction The action to test if the given object has access to. Ie. function.kickPlayer.
     * @param defaultPermission The default permission if none is specified in either of the groups the given object is a
     * member of. If this is left to true, the given object will have permissions to perform the
     * action unless the opposite is explicitly specified in the ACL. If false, the action will
     * be denied by default unless explicitly approved by the Access Control List.
     * @return returns true if the given object has permission to perform the given action, false
     * otherwise. returns nil if the function failed because of bad arguments.
     */
    static hasObjectPermissionTo(
        theObject: string | Element,
        theAction: string,
        defaultPermission?: boolean,
    ): boolean;
}
