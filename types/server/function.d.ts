import {
    account,
    acl,
    aclgroup,
    player,
    table,
    ban,
    blip,
    colshape,
    element,
    ped,
    pickup,
    resource,
    team,
    textdisplay,
    vehicle,
    xmlnode,
    textitem,
    HandleFunction,
    file,
    marker,
    radararea,
    request,
    userdata,
    timer,
    water,
} from 'mtasa/server/structures';

declare module 'mtasa/server/functions' {

    /**
     * This function adds an account to the list of registered accounts of the current server.
     * @see {@link https://wiki.multitheftauto.com/wiki/addAccount|MTASA Wiki}
     * @param name The name of the account you wish to make, this normally is the players name.
     * @param pass The password to set for this account for future logins.
     * @param allowCaseVariations Whether the username is case sensitive (if this is set to true, usernames Bob and bob will refer to different accounts)
     * @default false
     * @return Returns an [[account]] or ''false'' if the account already exists or an error occured.
     */
    export function addAccount(name: string, pass: string, allowCaseVariations?: boolean): account;

    /**
     * This function copies all of the data from one [[account]] to another.
     * @see {@link https://wiki.multitheftauto.com/wiki/copyAccountData|MTASA Wiki}
     * @param theAccount The account you wish to copy the data to.
     * @param fromAccount The account you wish to copy the data from.
     * @return Returns a ''true'' if the accounts were valid, ''false'' otherwise.
     */
    export function copyAccountData(theAccount: account, fromAccount: account): boolean;

    /**
     * This function returns an [[account]] for a specific user.
     * @see {@link https://wiki.multitheftauto.com/wiki/getAccount|MTASA Wiki}
     * @param username The username of the account you want to retrieve  {{OptionalArg}}
     * @param password The password for the account. If this argument is not specified, you can get the account whatever password it is, otherwise the password must match the accounts.  {{New items|3.0157|1.5.6|
     * @param caseSensitive : Specifies whether to ignore the case when searching for an account.  |16257}}
     * @default true
     * @return Returns an [[account]] or ''false'' if an account matching the username specified (and password, if specified) could not be found.
     */
    export function getAccount(username: string, password?: string, caseSensitive?: boolean): account;

    /**
     * This function retrieves a string that has been stored using [[setAccountData]]. Data stored as account data is persistent across user's sessions and maps, unless they are logged into a guest account.
     * @see {@link https://wiki.multitheftauto.com/wiki/getAccountData|MTASA Wiki}
     * @param theAccount The account you wish to retrieve the data from.
     * @param key The key under which the data is stored
     * @return Returns a [[string]] containing the stored data or ''false'' if no data was stored under that key.
     */
    export function getAccountData(theAccount: account, key: string): string;

    /**
     * This function retrieves the name of an [[account]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getAccountName|MTASA Wiki}
     * @param theAccount The account you wish to get the name of.
     * @return Returns a string containing the account's name, ''false'' if the account does not exist or an invalid argument was passed to the function.
     */
    export function getAccountName(theAccount: account): string;

    /**
     * This function returns the [[player]] element that is currently using a specified [[account]], i.e. is logged into it. Only one player can use an account at a time.
     * @see {@link https://wiki.multitheftauto.com/wiki/getAccountPlayer|MTASA Wiki}
     * @param theAccount The account you wish to get the player of.
     * @return Returns a [[player]] element if the account is currently in use, ''false'' otherwise.
     */
    export function getAccountPlayer(theAccount: account): player;

    /**
     * This function returns the last [[serial]] that logged onto the specified [[account]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getAccountSerial|MTASA Wiki}
     * @param theAccount The account to get serial from
     * @return Returns ''string'' containing the serial, the string is empty if the account was never used. Returns ''false'' if invalid arguments were specified.
     */
    export function getAccountSerial(theAccount: account): string;

    /**
     * This function returns a table over all the [[account]]s that exist in the server internal.db file. (Note: accounts.xml is no longer used after version 1.0.4)
     * @see {@link https://wiki.multitheftauto.com/wiki/getAccounts|MTASA Wiki}
     * @return A [[table]] over the accounts that exist in the server internal.db file. This table might be empty.
     */
    export function getAccounts(): table;

    /**
     * This function returns a [[table]] containing all accounts that were logged onto from specified [[serial]]. If the serial is empty string, it will return all accounts that were never logged onto.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getAccountsBySerial|MTASA Wiki}
     * @param serial The serial to get accounts from
     * @return Returns ''[[table]]'' containing the accounts associated with specified serial. Returns ''false'' if invalid arguments were specified.
     */
    export function getAccountsBySerial(serial: string): table;

    /**
     * This function returns a table containing all the user data for the [[account]] provided
     * @see {@link https://wiki.multitheftauto.com/wiki/getAllAccountData|MTASA Wiki}
     * @param theAccount The account you wish to retrieve all data from.
     * @return A [[table]] containing all the user data. This table might be empty.
     */
    export function getAllAccountData(theAccount: account): table;

    /**
     * This function returns the specified player's [[account]] object.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerAccount|MTASA Wiki}
     * @param thePlayer The player element you want to get the account of.
     * @return Returns the player's account object, or ''false'' if the player passed to the function is invalid.
     */
    export function getPlayerAccount(thePlayer: player): account;

    /**
     * This function checks to see if an [[account]] is a guest account. A guest account is an account automatically created for a user when they join the server and deleted when they quit or login to another account. Data stored in a guest account is not stored after the player has left the server. As a consequence, this function will check if a player is logged in or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isGuestAccount|MTASA Wiki}
     * @param theAccount The account you want to check to see if it is a guest account.
     * @return Returns ''true'' if the account is a guest account, ''false'' otherwise.
     */
    export function isGuestAccount(theAccount: account): boolean;

    /**
     * This functions logs the given player in to the given [[account]]. You need to provide the password needed to log into that account.
     * @see {@link https://wiki.multitheftauto.com/wiki/logIn|MTASA Wiki}
     * @param thePlayer The player to log into an account
     * @param theAccount The account to log the player into
     * @param thePassword The password needed to sign into this account
     * @return Returns ''true'' if the player was successfully logged into the given account. Returns ''false'' or ''nil'' if the log in failed for some reason, ie. the player was already logged in to some account (use [[logOut]] first), if the account was already in use or if it failed for some other reason.
     */
    export function logIn(thePlayer: player, theAccount: account, thePassword: string): boolean;

    /**
     * This function logs the given player out of his current [[account]].
     * @see {@link https://wiki.multitheftauto.com/wiki/logOut|MTASA Wiki}
     * @param thePlayer The player to log out of his current account
     * @return Returns ''true'' if the player was successfully logged out, ''false'' or ''nil'' if it failed for some reason, ie. the player was never logged in.
     */
    export function logOut(thePlayer: player): boolean;

    /**
     * This function is used to delete existing player [[account]]s.
     * @see {@link https://wiki.multitheftauto.com/wiki/removeAccount|MTASA Wiki}
     * @param theAccount The account you wish to remove
     * @return Returns ''true'' if account was successfully removed, ''false'' if the account does not exist.
     */
    export function removeAccount(theAccount: account): boolean;

    /**
     * This function sets a string to be stored in an [[account]]. This can then be retrieved using [[getAccountData]]. Data stored as account data is persistent across user's sessions and maps, unless they are logged into a guest account. Even if logged into a guest account, account data can be useful as a way to store a reference to your own account system, though it's persistence is equivalent to that of using [[setElementData]] on the player's element.
     * @see {@link https://wiki.multitheftauto.com/wiki/setAccountData|MTASA Wiki}
     * @param theAccount The account you wish to retrieve the data from.
     * @param key The key under which you wish to store the data
     * @param value The value you wish to store. Set to false to remove the data. NOTE: you cannot store tables as values, but you can use toJSON strings.
     * @return Returns a ''true'' if the account data was set, ''false'' if an invalid argument was specified.
     */
    export function setAccountData(theAccount: account, key: string, value: any): boolean;

    /**
     * This function sets the password of the specified [[account]].
     * @see {@link https://wiki.multitheftauto.com/wiki/setAccountPassword|MTASA Wiki}
     * @param theAccount the account whose password you want to set
     * @param password the password  {{Note|The password will always be encrypted with '''sha256''', other types are no longer supported. See [https://github.com/multitheftauto/mtasa-blue/wiki/CAccountPassword CAccountPassword] for more information.}}
     * @return Returns ''true'' if the password was set correctly, ''false'' otherwise.
     */
    export function setAccountPassword(theAccount: account, password: string): boolean;

    /**
     * This function returns the account with the specific ID.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getAccountByID|MTASA Wiki}
     * @param id The ID to get account from
     * @return Returns ''[[account]]'' associated with specified ID. Returns ''false'' if invalid arguments were specified or there is no account with this ID.
     */
    export function getAccountByID(id: number): account;

    /**
     * This function retrieves the ID of an [[account]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getAccountID|MTASA Wiki}
     * @param theAccount The account you wish to get the ID of.
     * @return Returns a int containing the account's ID, ''false'' if the account does not exist or an invalid argument was passed to the function.
     */
    export function getAccountID(theAccount: account): number;

    /**
     * This function retrieves the IP address of an [[account]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getAccountIP|MTASA Wiki}
     * @param theAccount The account you wish to get the IP of.
     * @return Returns a string containing the account's IP, ''false'' if the account does not exist or an invalid argument was passed to the function.
     */
    export function getAccountIP(theAccount: account): string;

    /**
     * This function returns a [[table]] containing all accounts with specified dataName and value (set with setAccountData).
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getAccountsByData|MTASA Wiki}
     * @param dataName The name of the data
     * @param value The value the dataName should have
     * @return Returns ''[[table]]'' containing the accounts associated with specified value at dataName. Returns ''false'' if invalid arguments were specified.
     */
    export function getAccountsByData(dataName: string, value: string): table;

    /**
     * This function returns a [[table]] containing all accounts that were logged onto from specified IP-address.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getAccountsByIP|MTASA Wiki}
     * @param ip The IP to get accounts from
     * @return Returns ''[[table]]'' containing the accounts associated with specified IP-address. Returns ''false'' if invalid arguments were specified.
     */
    export function getAccountsByIP(ip: string): table;

    /**
     * This function sets the name of an [[account]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setAccountName|MTASA Wiki}
     * @param theAccount The account you wish to change the name.
     * @param name The new name.
     * @param allowCaseVariations Whether the username is case sensitive (if this is set to true, usernames Bob and bob will refer to different accounts)
     * @default false
     * @return Returns a ''true'' if the account name was set, ''false'' if an invalid argument was specified.
     */
    export function setAccountName(theAccount: account, name: string, allowCaseVariations?: boolean): boolean;

    /**
     * This function creates an ACL entry in the Access Control List system with the specified name.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclCreate|MTASA Wiki}
     * @param aclName The name of the ACL entry to add.
     * @return Returns the created ACL object if successful. Returns false if an ACL of the given name could not be created.
     */
    export function aclCreate(aclName: string): acl;

    /**
     * This function creates a group in the ACL. An ACL group can contain objects like players and resources. They specify who has access to the ACL's in this group.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclCreateGroup|MTASA Wiki}
     * @param groupName The name of the group to create
     * @return Returns the pointer to the created aclgroup if successful. Returns false if failed.
     */
    export function aclCreateGroup(groupName: string): aclgroup;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function destroys the ACL passed. The destroyed ACL will no longer be valid.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclDestroy|MTASA Wiki}
     * @param theACL The ACL to destroy
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if successfully destroyed and ''false'' if it could not be deleted (ie. it's not valid).
     */
    export function aclDestroy(theACL: acl): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function destroys the given ACL group. The destroyed ACL group will no longer be valid.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclDestroyGroup|MTASA Wiki}
     * @param aclGroup The aclgroup element to destroy
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if the ACL group was successfully deleted, ''false'' if it could not be deleted for some reason (ie. invalid argument).
     */
    export function aclDestroyGroup(aclGroup: aclgroup): boolean;

    /**
     * Get the ACL with the given name. If need to get most of the ACL's, you should consider using [[aclList]] to get a table of them all.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclGet|MTASA Wiki}
     * @param aclName The name to get the ACL belonging to
     * @return Returns the ACL with that name if it could be retrieved, ''false''/''nil'' if the ACL does not exist or it fails for some other reason.
     */
    export function aclGet(aclName: string): acl;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function is used to get the ACL group with the given name. If you need most of the groups you should consider using [[aclGroupList]] instead to get a table containing them all.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclGetGroup|MTASA Wiki}
     * @param groupName The name to get the ACL group from
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns the ACL group if it could be found. Returns false/nil if it did not exist or failed for some reason.
     */
    export function aclGetGroup(groupName: string): aclgroup;

    /**
     * Get the name of given ACL.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclGetName|MTASA Wiki}
     * @return Returns the name of the given ACL as a string if successful. Returns ''false''/''nil'' if unsuccessful, ie the ACL is invalid.
     */
    export function aclGetName(theAcl: acl): string;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function returns whether the access for the given right is set to true or false in the ACL.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclGetRight|MTASA Wiki}
     * @param theAcl The ACL to get the right from
     * @param rightName The right name to return the access value of.
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' or ''false'' if the ACL gives access or not to the given function. Returns ''nil'' if it failed for some reason, e.g. an invalid ACL was specified or the right specified does not exist in the ACL.
     */
    export function aclGetRight(theAcl: acl, rightName: string): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function adds the given ACL to the given ACL group. This makes the resources and players in the given ACL group have access to what's specified in the given ACL. The rights for something in the different ACL's in a group are OR-ed together, which means if one ACL gives access to something, this ACL group will have access to that.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclGroupAddACL|MTASA Wiki}
     * @param theGroup The group to add the ACL to
     * @param theACL The ACL to add to the group
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if the ACL could be successfully added to the ACL group, ''false''/''nil'' if either of the elements are invalid, the ACL is already in that group or if something else goes wrong.
     */
    export function aclGroupAddACL(theGroup: aclgroup, theACL: acl): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function adds an object to the given ACL group. An object can be a player's account, specified as:
     *   ''user.<accountname>''
     * Or a resource, specified as:
     *   ''resource.<resourcename>''
     * Objects are specified as strings. The ACL groups work for the user accounts and the resources that are specified in them.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclGroupAddObject|MTASA Wiki}
     * @param theGroup The group to add the object name string too.
     * @param theObjectName The object string to add to the given ACL.
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if the object was successfully added to the ACL, ''false'' if it already existed in the list.
     */
    export function aclGroupAddObject(theGroup: aclgroup, theObjectName: string): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function is used to get the name of the given ACL group.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclGroupGetName|MTASA Wiki}
     * @param aclGroup The ACL group to get the name of
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns the name of the given ACL group as a string if successful, otherwise ''false'' or ''nil'' if the aclGroup is invalid or it fails for some other reason.
     */
    export function aclGroupGetName(aclGroup: aclgroup): string;

    /**
     * This function returns a table of all the ACL groups.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclGroupList|MTASA Wiki}
     * @return Returns a table of all the ACL groups if successful, returns an empty table if no ACL groups exist. ''false''/''nil'' can be returned if this function fails for some other reason.
     */
    export function aclGroupList(): table;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function returns a table over all the ACL's that exist in a given ACL group.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclGroupListACL|MTASA Wiki}
     * @param theGroup The ACL group to get the ACL elements from
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns a table of the ACL elements in the given ACL group. This table might be empty. Returns ''false'' or ''nil'' if theGroup is invalid or it fails for some other reason.
     */
    export function aclGroupListACL(theGroup: aclgroup): table;

    /**
     * <!-- Change this to "Client function" or "Server function" appropriately-->
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function returns a table over all the objects that exist in a given ACL group. These are objects like players and resources.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclGroupListObjects|MTASA Wiki}
     * @param theGroup The ACL group to get the objects from
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns a table of strings in the given ACL group. This table might be empty. Returns ''false'' or ''nil'' if theGroup is invalid or it fails for some other reason.
     */
    export function aclGroupListObjects(theGroup: aclgroup): table;

    /**
     * This function removes the given ACL from the given ACL group.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclGroupRemoveACL|MTASA Wiki}
     * @param theGroup The group to remove the given ACL from
     * @param theACL The ACL to remove from the given group
     * @return Returns ''true'' if the ACL was successfully removed from the ACL group, ''false''/''nil'' if it could not be removed for some reason, ie. either of the elements were invalid.
     */
    export function aclGroupRemoveACL(theGroup: aclgroup, theACL: acl): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function removes the given object from the given ACL group. The object can be a resource or a player. See [[aclGroupAddObject]] for more details.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclGroupRemoveObject|MTASA Wiki}
     * @param theGroup The ACL group to remove the object string from
     * @param theObjectString The object to remove from the ACL group
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if the object existed in the ACL and could be remoevd, ''false'' if it could not be removed for some reason, ie. it did not exist in the given ACL group.
     */
    export function aclGroupRemoveObject(theGroup: aclgroup, theObjectString: string): boolean;

    /**
     * This function returns a list of all the ACLs.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclList|MTASA Wiki}
     * @return Returns a table of all the ACLs. This table can be empty if no ACLs exist. It can also return ''false''/''nil'' if it failed for some reason.
     */
    export function aclList(): table;

    /**
     * This function returns a table of all the rights that a given ACL has.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclListRights|MTASA Wiki}
     * @param theACL The ACL to get the rights from
     * @param allowedType The allowed right type. Possible values are general, function, resource and command
     * @return Returns a table over the rights as strings in the given ACL. This table might be empty. Returns ''false'' or ''nil'' if theACL is invalid or it fails for some other reason.
     */
    export function aclListRights(theACL: acl, allowedType: string): table;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function reloads the ACL's and the ACL groups from the ACL XML file. All ACL and ACL group elements are invalid after a call to this and should not be used anymore.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclReload|MTASA Wiki}
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if the XML was successfully reloaded from the file, ''false'' or ''nil'' if the XML was invalid, didn't exist or could not be loaded for some other reason.
     */
    export function aclReload(): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function removes the given right (string) from the given ACL.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclRemoveRight|MTASA Wiki}
     * @param theAcl The ACL to remove the right from
     * @param rightName The ACL name to remove from the right from
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if the given right was successfully removed from the given ACL, ''false'' or ''nil'' if it could not be removed for some reason, ie. it didn't exist in the ACL.
     */
    export function aclRemoveRight(theAcl: acl, rightName: string): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * The ACL XML file is automatically saved whenever the ACL is modified, but the automatic save can be delayed by up to 10 seconds for performance reasons. Calling this function will force an immediate save.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclSave|MTASA Wiki}
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if the ACL was successfully changed, ''false'' or ''nil'' if it could not be saved for some reason, ie. file in use.
     */
    export function aclSave(): boolean;

    /**
     * This functions changes or adds the given right in the given ACL. The access can be ''true'' or ''false'' and specifies whether the ACL gives access to the right or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/aclSetRight|MTASA Wiki}
     * @param theAcl The ACL to change the right of
     * @param rightName The right to add/change the access property of
     * @param hasAccess Whether the access should be set to true or false
     * @return Returns ''true'' if the access was successfully changed, ''false'' or ''nil'' if it failed for some reason, ie. invalid ACL or the rightname is invalid.
     */
    export function aclSetRight(theAcl: acl, rightName: string, hasAccess: boolean): boolean;

    /**
     * This function is used to determine if an object is in a group.
     * @see {@link https://wiki.multitheftauto.com/wiki/isObjectInACLGroup|MTASA Wiki}
     * @param theObject the name of the object to check. Examples: resource.ctf, user.Jim.
     * @param theGroup the ACL group pointer of the group from which the object should be found.
     * @return Returns ''true'' if the object is in the specified group, ''false'' otherwise.
     */
    export function isObjectInACLGroup(theObject: string, theGroup: aclgroup): boolean;

    /**
     * This function will add a [[ban]] for the specified IP/username/serial to the server.
     * @see {@link https://wiki.multitheftauto.com/wiki/addBan|MTASA Wiki}
     * @param IP The IP to be banned. If you dont want to ban by IP, set this to nil.  '''or'''
     * @param Username The http://community.mtasa.com/ MTA Community username to be banned (now obsolete). If you dont want to ban by username, set this to nil.  '''or'''
     * @param Serial The serial to be banned. If you dont want to ban by serial, set this to nil.  ''' or any combination.'''  {{OptionalArg}}
     * @param responsibleElement The element that is responsible for banning the IP/username/serial. This can be a player or the root (getRootElement()).
     * @param reason The reason the IP/username/serial will be banned from the server.
     * @param seconds The amount of seconds the player will be banned from the server for. This can be 0 for an infinite amount of time.
     * @default 0
     * @return Returns the new [[ban]] if the IP/username/serial was banned successfully, ''false'' if invalid arguments are specified.
     */
    export function addBan(IP: string, Username: string, Serial: string, responsibleElement: player, reason: string, seconds: number): ban;

    /**
     * This function will ban the specified player by either IP, [[serial]] or username
     * }}
     * This function will ban the specified player from the server by IP.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/banPlayer|MTASA Wiki}
     * @param bannedPlayer The player that will be banned from the server.  {{OptionalArg}}   {{New feature|3|1.0|
     * @param IP Will player be banned by IP?
     * @default true
     * @param Username Will player be banned by username?
     * @default false
     * @param Serial Will player be banned by serial?  }}
     * @default false
     * @param reason The reason the player will be banned from the server.
     * @default nil
     * @param seconds The amount of seconds the player will be banned from the server for. This can be 0 for an infinite amount of time.
     * @default 0
     * @return Returns a [[ban]] object if banned successfully, or ''false'' if unsuccessful.
     */
    export function banPlayer(bannedPlayer: player, IP: boolean, Username: boolean, Serial: boolean, string: player, reason: string, seconds: number): ban;

    /**
     * This function will return the responsible admin (nickname of the admin) of the specified [[ban]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getBanAdmin|MTASA Wiki}
     * @param theBan The ban you want to return the admin of.
     * @return Returns a ''string'' of the admin if everything was successful, ''false'' if invalid arguments are specified if there was no admin specified for the [[ban]].
     */
    export function getBanAdmin(theBan: ban): string;

    /**
     * This function will return the IP of the specified [[ban]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getBanIP|MTASA Wiki}
     * @param theBan The ban in which you want to return the IP of.
     * @return Returns a ''string'' of the IP if everything was successful, ''false'' if invalid arguments are specified if there was no IP specified for the [[ban]].
     */
    export function getBanIP(theBan: ban): string;

    /**
     * This function will return the nickname (nickname that the player had when he was banned) of the specified [[ban]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getBanNick|MTASA Wiki}
     * @param theBan The ban element which nickname you want to return.
     * @return Returns a ''string'' of the nickname if everything was successfull, ''false'' if invalid arguments are specified if there was no nickname specified for the [[ban]] element.
     */
    export function getBanNick(theBan: ban): string;

    /**
     * This function will return the ban reason of the specified [[ban]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getBanReason|MTASA Wiki}
     * @param theBan The ban in which you want to return the reason of.
     * @return Returns a ''string'' of the reason if everything was successful, ''false'' if invalid arguments are specified if there was no reason specified for the [[ban]].
     */
    export function getBanReason(theBan: ban): string;

    /**
     * This function will return the [[serial]] of the specified [[ban]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getBanSerial|MTASA Wiki}
     * @param theBan The ban you want to retrieve the serial of.
     * @return Returns a ''string'' of the serial if everything was successful, ''false'' if invalid arguments are specified or if there was no serial specified for the [[ban]].
     */
    export function getBanSerial(theBan: ban): string;

    /**
     * This function will return the time the specified [[ban]] was created, in '''seconds'''.
     * @see {@link https://wiki.multitheftauto.com/wiki/getBanTime|MTASA Wiki}
     * @param theBan The ban of which you wish to retrieve the time of.
     * @return * Returns an integer of the banning time in the format of seconds from the year 1970.  Use in conjunction with [[getRealTime]] in order to retrieve detailed information.
     * * * Returns '''false''' if invalid arguments were specified or if there was no banning time specified for the [[ban]].
     */
    export function getBanTime(theBan: ban): number;

    /**
     * This function will return the username of the specified [[ban]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getBanUsername|MTASA Wiki}
     * @param theBan The ban in which you wish to retrieve the username of.
     * @return Returns a ''string'' of the username if everything was successful, ''false'' if invalid arguments are specified if there was no username specified for the [[ban]].
     */
    export function getBanUsername(theBan: ban): string;

    /**
     * This function will return a table containing all the [[ban]]s present in the server's banlist.xml.
     * @see {@link https://wiki.multitheftauto.com/wiki/getBans|MTASA Wiki}
     * @return Returns a [[table]] containing all the [[ban]]s.
     */
    export function getBans(): table;

    /**
     * This function will return the unbanning time of the specified [[ban]] in '''seconds'''.
     * @see {@link https://wiki.multitheftauto.com/wiki/getUnbanTime|MTASA Wiki}
     * @param theBan The ban in which you wish to retrieve the unban time of.
     * @return * Returns an integer of the unbanning time in the format of seconds from the year 1970.  Use in conjunction with [[getRealTime]] in order to retrieve detailed information.
     * * * Returns '''false''' if invalid arguments are specified or if there was no unbanning time specified for the [[ban]].
     */
    export function getUnbanTime(theBan: ban): number;

    /**
     * This function checks whether the passed value is valid [[ban]] or not.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/isBan|MTASA Wiki}
     * @param theBan The value to check
     * @return Returns ''true'' if the value is a ban, ''false'' otherwise.
     */
    export function isBan(theBan: ban): boolean;

    /**
     * This function will kick the specified player from the server.
     * @see {@link https://wiki.multitheftauto.com/wiki/kickPlayer|MTASA Wiki}
     * @param kickedPlayer The player that will be kicked from the server
     * @param reason The reason for the kick. (Maximum 64 characters)
     * @default ""
     * @return Returns ''true'' if the player was kicked succesfully, ''false'' if invalid arguments are specified.
     */
    export function kickPlayer(kickedPlayer: player, string: player, reason: string): boolean;

    /**
     * This function sets a new admin for a [[ban]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setBanAdmin|MTASA Wiki}
     * @param theBan The ban you want to change the admin of.
     * @param theAdmin The new admin.
     * @return Returns ''true'' if changed, ''false'' otherwise.
     */
    export function setBanAdmin(theBan: ban, theAdmin: string): boolean;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/setBanNick|MTASA Wiki}
     * @param theBan The ban you want to change the nick of.
     * @param theNick A string representing the nick you want to set the ban to.
     * @return
     */
    export function setBanNick(theBan: ban, theNick: string): boolean;

    /**
     * This function sets the reason for the specified [[ban]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setBanReason|MTASA Wiki}
     * @param theBan The ban that you wish to set the reason of.
     * @param theReason the new reason (max 60 characters).
     * @return Returns ''true'' if the new reason was set successfully, ''false'' otherwise.
     */
    export function setBanReason(theBan: ban, theReason: string): boolean;

    /**
     * This function sets a new unban time of a given [[ban]] using unix timestamp (seconds since Jan 01 1970).
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setUnbanTime|MTASA Wiki}
     * @param theBan The ban of which to change the unban time of
     * @param theTime the new unban time
     * @return Returns ''true'' if changed successfully, ''false'' otherwise.
     */
    export function setUnbanTime(theBan: ban, theTime: number): boolean;

    /**
     * This function will reload the server ban list file.
     * @see {@link https://wiki.multitheftauto.com/wiki/reloadBans|MTASA Wiki}
     * @return Returns ''true'' if the ban list was reloaded successfully, ''false'' otherwise.
     */
    export function reloadBans(): boolean;

    /**
     * This function will remove a specific [[ban]].
     * @see {@link https://wiki.multitheftauto.com/wiki/removeBan|MTASA Wiki}
     * @param theBan The ban to be removed.  {{OptionalArg}}
     * @param responsibleElement The element that is responsible for removing the ban element. This can be a player or the root (getRootElement()).
     * @default nil
     * @return Returns ''true'' if the [[ban]] was removed succesfully, ''false'' if invalid arguments are specified.
     */
    export function removeBan(theBan: ban, responsibleElement?: player): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function retrieves the current gametype as set by [[setGameType]]. The game type is displayed in the server browser next to the server's name.
     * @see {@link https://wiki.multitheftauto.com/wiki/getGameType|MTASA Wiki}
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns the gametype as a string. If no gametype is set it returns ''nil''.
     */
    export function getGameType(): string;

    /**
     * This function retrieves the current mapname as set by [[setMapName]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getMapName|MTASA Wiki}
     * @return Returns the mapname as a string. If no mapname is set it returns ''nil''.
     */
    export function getMapName(): string;

    /**
     * This function gets a rule value. A rule value is a string that can be viewed by server browsers and used for filtering the server list.
     * @see {@link https://wiki.multitheftauto.com/wiki/getRuleValue|MTASA Wiki}
     * @param key The name of the rule
     * @return Returns a string containing the value set for the specified ''key'', ''false'' if invalid arguments were specified.
     */
    export function getRuleValue(key: string): string;

    /**
     * This function removes a set rule value that can be viewed by server browsers.
     * @see {@link https://wiki.multitheftauto.com/wiki/removeRuleValue|MTASA Wiki}
     * @param key The name of the rule you wish to remove
     * @return Returns ''true'' if the rule value was removed, ''false'' if it failed.
     */
    export function removeRuleValue(key: string): boolean;

    /**
     * This function sets a string containing a name for the game type. This should be the game-mode that is active, for example "Capture The Flag" or "Deathmatch". This is then displayed in the server browser and external server browsers.
     * '''It should be noted that [[mapmanager]] handles this automatically for gamemodes that utilise the map/gamemode system.'''
     * @see {@link https://wiki.multitheftauto.com/wiki/setGameType|MTASA Wiki}
     * @param gameType A string containing a name for the game mode, or false to clear it.
     * @return Returns ''true'' if the game type was set, ''false'' if an invalid argument was passed to the function.
     */
    export function setGameType(gameType: string): boolean;

    /**
     * This function is used to set a map name that will be visible in the server browser. In practice you should generally rely on the mapmanager to do this for you.
     * @see {@link https://wiki.multitheftauto.com/wiki/setMapName|MTASA Wiki}
     * @param mapName The name you wish the server browser to show.
     * @return Returns ''true'' if map name was set successfully, ''false'' otherwise.
     */
    export function setMapName(mapName: string): boolean;

    /**
     * This function sets a rule value that can be viewed by server browsers.
     * @see {@link https://wiki.multitheftauto.com/wiki/setRuleValue|MTASA Wiki}
     * @param key The name of the rule
     * @param value The value you wish to set for the rule
     * @return Returns ''true'' if the rule value was set, ''false'' if invalid arguments were specified.
     */
    export function setRuleValue(key: string, value: string): boolean;

    /**
     * This function is used together with [[setElementData]] in ''"subscribe"'' mode.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/addElementDataSubscriber|MTASA Wiki}
     * @param theElement The element you wish to subscribe the player to.
     * @param key The key you wish to subscribe the player to.
     * @param thePlayer The player you wish to subscribe.
     * @return Returns ''true'' if the player was subscribed, ''false'' otherwise.
     */
    export function addElementDataSubscriber(theElement: element, key: string, thePlayer: player): boolean;

    /**
     * This function clears any settings added by setElementVisibleTo and restores an element to its default visibility.  This does not work with all entities - [[vehicle]]s, [[player]]s and [[object]]s are exempt. This is because these objects are required for accurate sync (they're physical objects). This function is particularily useful for changing the visibility of markers, radar blips and radar areas.
     * @see {@link https://wiki.multitheftauto.com/wiki/clearElementVisibleTo|MTASA Wiki}
     * @param theElement The element in which you wish to restore to its default visibility
     * @return Returns ''true'' if the operation was successful, ''false'' otherwise.
     */
    export function clearElementVisibleTo(theElement: element): boolean;

    /**
     * This function clones (creates an exact copy of) an already existing element. The root node, and player elements, cannot be cloned. If a player element is a child of an element that is cloned, it will be skipped, along with the elements that exist as a child to the player element.
     * Players are not the only elements that cannot be cloned. This list also includes remoteclients, and console elements.
     * The cloned element will be placed on the [[element tree]] as a child of the same parent as the cloned element.
     * @see {@link https://wiki.multitheftauto.com/wiki/cloneElement|MTASA Wiki}
     * @param theElement The element that you wish to clone.  {{OptionalArg}}
     * @param xPos : A floating point number representing the X coordinate on the map.
     * @default 0
     * @param yPos : A floating point number representing the Y coordinate on the map.
     * @default 0
     * @param zPos : A floating point number representing the Z coordinate on the map.
     * @default 0
     * @param cloneChildren : A boolean value representing whether or not the elements children will be cloned.  '''Note: if 'cloneChildren' is true, the position floats will be offsets from the cloned element's position.'''
     * @default false
     * @return Returns the handle of the new cloned element of the parent, ''false'' if invalid arguments were passed.
     */
    export function cloneElement(theElement: element, xPos: number, yPos: number, zPos: number, cloneChildren: boolean): element;

    /**
     * Returns a table of all element data of an element.
     * @see {@link https://wiki.multitheftauto.com/wiki/getAllElementData|MTASA Wiki}
     * @param theElement the element you want to get the element data of.
     * @return If successful, returns a table with as keys the names of the element data and as values the corresponding element data values. Returns ''false'' in case of failure.
     */
    export function getAllElementData(theElement: element): table;

    /**
     * This function returns an element of the specified type with the specified index.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementByIndex|MTASA Wiki}
     * @param theType the type of the element to be returned. Examples include player, vehicle, or a custom type.
     * @param index the elements index (0 for the first element, 1 for the second, etc).
     * @return Returns the requested [[element]], or ''false'' if it doesn't exist.
     */
    export function getElementByIndex(theType: string, index: number): element;

    /**
     * This function gets the syncer of an element. The syncer is the player who is in control of the element.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementSyncer|MTASA Wiki}
     * @param theElement : The element to get the syncer of.
     * @return Returns the [[element]] that is the syncer of ''theElement'' or ''false'' if the element does not have a syncer.
     */
    export function getElementSyncer(theElement: element): element;

    /**
     * This function allows you to retrieve the zone name of an element (eg. Verdant Bluffs or Ocean Docks)
     * The same can be achieved client side by getting element coordinates and using [[GetZoneName]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementZoneName|MTASA Wiki}
     * @param theElement The element which youd like to retrieve the zone name from  {{OptionalArg}}
     * @param citiesonly : An optional argument to choose if you want to return the city name (eg Las Venturas)
     * @default false
     * @return Returns the string of the elements zone name.
     */
    export function getElementZoneName(theElement: element, citiesonly: boolean): string;

    /**
     * This function is used together with [[setElementData]] in ''"subscribe"'' mode.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/hasElementDataSubscriber|MTASA Wiki}
     * @param theElement The element you wish to check whether the player is subscribed to.
     * @param key The key you wish to check whether the player is subscribed to.
     * @param thePlayer The player you wish to check.
     * @return Returns ''true'' if the player is subscribed, ''false'' otherwise.
     */
    export function hasElementDataSubscriber(theElement: element, key: string, thePlayer: player): boolean;

    /**
     * This functions checks if certain element has call propagation enabled.
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementCallPropagationEnabled|MTASA Wiki}
     * @param theElement The element to check
     * @return Returns ''true'' if the propagation is enabled, ''false'' if disabled or invalid arguments have been passed.
     */
    export function isElementCallPropagationEnabled(theElement: element): boolean;

    /**
     * This checks if an element is visible to a player. This does not check if the player can literally see the element, just that they are aware that it exists. Some so-called [[per-player elements]] are able to be visible only to some players, as such this checks if this is the case for a particular element/player combination.
     * @see {@link https://wiki.multitheftauto.com/wiki/isElementVisibleTo|MTASA Wiki}
     * @param theElement The element you want to check the visibility of
     * @param visibleTo The player you want to check against
     * @return Returns ''true'' if element is visible to the specified player, ''false'' if not or an invalid argument was passed to the function.
     */
    export function isElementVisibleTo(theElement: element, visibleTo: element): boolean;

    /**
     * This function removes the [[element data]] with the given key for that element. The element data removal is synced with all the clients.
     * @see {@link https://wiki.multitheftauto.com/wiki/removeElementData|MTASA Wiki}
     * @param theElement The element you wish to remove the data from.
     * @param key The key string you wish to remove.
     * @return Returns ''true'' if the data was removed succesfully, ''false'' if the given key does not exist in the element or the element is invalid.
     */
    export function removeElementData(theElement: element, key: string): boolean;

    /**
     * This function is used together with [[setElementData]] in ''"subscribe"'' mode.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/removeElementDataSubscriber|MTASA Wiki}
     * @param theElement The element you wish to unsubscribe the player from.
     * @param key The key you wish to unsubscribe the player from.
     * @param thePlayer The player you wish to unsubscribe.
     * @return Returns ''true'' if the player was unsubscribed, ''false'' otherwise.
     */
    export function removeElementDataSubscriber(theElement: element, key: string, thePlayer: player): boolean;

    /**
     * This function enables/disables call propagation on a certain element. Look at the example for a practical application.
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementCallPropagationEnabled|MTASA Wiki}
     * @param theElement The element whose propagation behaviour youd like to change
     * @param enabled Whether propagation should be enabled or not
     * @return Returns ''true'', if the propagation behaviour has been changed successfully, ''false'' otherwise.
     */
    export function setElementCallPropagationEnabled(theElement: element, enabled: boolean): boolean;

    /**
     * This function can be used to change the syncer ([[player]]) of an element. The syncer is the player who is responsible for informing the server about the state of that element - it's position, orientation and other state information. The function can be also used to remove an element's syncer.
     * Only [[vehicle]] and [[ped]] elements can have a syncer, other element types are not currently automatically synced by MTA.
     * Please note that using this function to change an element's syncer will only last as long as the element is within syncable range of the player. This is within 140 units for vehicles and 100 units for peds. As soon as it becomes impossible for your chosen player to sync the element, another player (or no player) will be automatically selected, and your setting will be lost. With vehicles, the last occupant to leave a vehicle will be selected as the syncer and override any setting you may have made.
     * Using this function to remove an element's syncer, means no player will be assigned to syncing the element. That will not be changed until setElementSyncer is called again.
     * It should also be noted that certain network changes to an element do not require a syncer. Actions such as destroying an element or explicitly setting the element's position (in a server side script), will still be updated on all clients regardless of this setting.
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementSyncer|MTASA Wiki}
     * @param theElement The element whose syncer you wish to change.
     * @param thePlayer The player who should be the new syncer of the element. If set to false, this element will not have a syncer. If set to true, MTA will pick automatically the nearest or most relevant player to that element.
     * @return Returns ''true'' if the syncer was changed successfully, ''false'' if the element passed was not a ped or vehicle.
     */
    export function setElementSyncer(theElement: element, thePlayer: player): boolean;

    /**
     * Does the order of setElementVisibleTo calls really not matter? [[visibility|Visibility]] seems to ''imply'' that the order does matter.
     * Is this function particularly ''or only'' useful for changing the visibility of markers, radar blips and radar areas?|[[User:EAi|EAi]][[User:Iam2noob4u|Iam2noob4u]]
     * }}
     * This function can change an [[element]]'s [[visibility]]. This does not work with all entities - [[vehicle]]s, [[player]]s and [[object]]s are exempt. This is because these objects are required for accurate sync (they're physical objects that contribute to the physics engine). This function is particularly useful for changing the visibility of markers, radar blips and radar areas.
     * Visibility settings of lower elements in the element tree override higher ones - if visibility for root is set to false and for a player is set to true, it will be visible to the player.
     * If you want to clear all visibility settings of an object, try [[clearElementVisibleTo]]
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementVisibleTo|MTASA Wiki}
     * @param theElement The element you want to control the visibility of.
     * @param visibleTo The element you wish the element to be visible or invisible to. Any child elements that are players will also be able to see the element. See visibility.
     * @param visible Whether you are making it visible or invisible to the player.
     * @return Returns ''true'' if the element's visibility was changed successfully, ''false'' otherwise, for example if you are trying to change the visibility of a vehicle, player or object.
     */
    export function setElementVisibleTo(theElement: element, visibleTo: element, visible: boolean): boolean;

    /**
     * Gets the reason for cancelling an event.
     * @see {@link https://wiki.multitheftauto.com/wiki/getCancelReason|MTASA Wiki}
     * @return Returns the reason that was given with [[cancelEvent]]
     */
    export function getCancelReason(): string;

    /**
     * <!--{{Needs_Checking|Something needs to be said about the steps required to help keep an event inside a resource. i.e. Setting 'theElement' to resourceRoot here, and setting the matching event handler's 'attachedTo' also to resourceRoot.}}
     * -->__NOTOC__
     * This function triggers an event previously registered on a client. This is the primary means of passing information between the server and the client. Clients have a similar [[triggerServerEvent]] function that can do the reverse. You can treat this function as if it was an asynchronous function call, using [[triggerServerEvent]] to pass back any returned information if necessary.
     * Almost any data types can be passed as expected, including [[element]]s and complex nested [[table]]s. Non-element MTA data types like xmlNodes or resource pointers will not be able to be passed as they do not necessarily have a valid representation on the client.
     * Events are sent reliably, so clients will receive them, but there may be (but shouldn't be) a significant delay before they are received. You should take this into account when using them.
     * Keep in mind the bandwidth issues when using events - don't pass a large list of arguments unless you really need to. '''It is marginally more efficient to pass one large event than two smaller ones'''.
     * @see {@link https://wiki.multitheftauto.com/wiki/triggerClientEvent|MTASA Wiki}
     * @param name The name of the event to trigger client side. You should register this event with addEvent and add at least one event handler using addEventHandler.
     * @param sourceElement The element that is the Event system#Event handlers|source of the event.  {{Note|To save client CPU, you should avoid setting '''sourceElement''' to the [[root element]] where possible. Using [[GetThisResource|resourceRoot]] is usually sufficient if the event is handled by the same resource on the client.}}  {{OptionalArg}}
     * @return Returns ''true'' if the event trigger has been sent, ''false'' if invalid arguments were specified.
     */
    export function triggerClientEvent(element: table, name: string, sourceElement: element, ...args: any[]): boolean;

    /**
     * This function is the same as [[triggerClientEvent ]] except the transmission rate of the data contained in the arguments can be limited
     * and other network traffic is not blocked while the data is being transferred.
     * @see {@link https://wiki.multitheftauto.com/wiki/triggerLatentClientEvent|MTASA Wiki}
     * @param name The name of the event to trigger client side. You should register this event with addEvent and add at least one event handler using addEventHandler.
     * @param bandwidth The bytes per second rate to send the data contained in the arguments.
     * @default 50000
     * @param persist A bool indicating whether the transmission should be allowed to continue even after the resource that triggered it has since stopped.
     * @default false
     * @param theElement The element that is the Event system#Event handlers|source of the event. This could be another player, or if this isnt relevant, use the root element.
     * @return Returns ''true'' if the event trigger has been sent, ''false'' if invalid arguments were specified.
     */
    export function triggerLatentClientEvent(element: table, name: string, bandwidth: number, persist: boolean, theElement: element, ...args: any[]): boolean;

    /**
     * This function will check if a player is pressing a particular control. Controls are those that affect GTA. If you wish to get the state of another key, use [[bindKey]] and a command function.
     * Note: Not all control states are sent to the server at all times, as such their state may be given incorrectly. As a rule, keys that move or affect the player or their vehicle are most likely to be accurate. For increased accuracy (and also increased bandwidth usage) use bindKey instead to bind a GTA control name to a function.
     * @see {@link https://wiki.multitheftauto.com/wiki/getControlState|MTASA Wiki}
     * @param thePlayer The player you wish to get the control state of. Do not use this parameter when scripting for client.
     * @param controlName The control that you want to get the state of. See control names for a list of possible controls.  '''Note:''' several controls are not synched with the server, therefore the function will always return ''false'' for these controls serverside. These controls are:  *next_weapon  *previous_weapon  *jump  *zoom_in  *zoom_out  *look_behind  *change_camera  *conversation_yes  *conversation_no  *group_control_forwards  *group_control_back  *sub_mission  *radio_next  *radio_previous  *vehicle_look_left  *vehicle_look_right  *vehicle_look_behind  *vehicle_mouse_look  *special_control_*
     * @return Returns the state of the control, ''false'' if the control doesn't exist or if the player is dead.
     */
    export function getControlState(thePlayer: player, controlName: string): boolean;

    /**
     * This function can be used to find out if a key has already been bound. If you do not specify a keyState or handler, any instances of key being bound will cause isKeyBound to return true.
     * @see {@link https://wiki.multitheftauto.com/wiki/isKeyBound|MTASA Wiki}
     * @param thePlayer The player youre checking.
     * @param key The key youre checking. See Key names for a list of valid key names.
     * @param keyState Is the state of the key when it calls the function, Can be either:
     * @param handler The function youre checking against
     * @return Returns ''true'' if the key is bound, ''false'' otherwise.
     */
    export function isKeyBound(thePlayer: player, key: string, keyState: string, handler: HandleFunction): boolean;

    /**
     * Sets a state of a specified player's control, as if they pressed or released it.
     * @see {@link https://wiki.multitheftauto.com/wiki/setControlState|MTASA Wiki}
     * @param thePlayer The player you wish to set the control state of.
     * @param control The control that you want to set the state of. See control names for a list of possible controls.
     * @param state A boolean value representing whether or not the key will be set to pressed or not.
     * @return Returns ''true'' if the control state was successfully set, ''false'' otherwise.
     */
    export function setControlState(thePlayer: player, control: string, state: boolean): boolean;

    /**
     * This function is intended to load data from a loaded XML file into the element tree. This could be used for loading an external map, or part of another map.
     * @see {@link https://wiki.multitheftauto.com/wiki/loadMapData|MTASA Wiki}
     * @param node The node that you wish to load into the element tree.
     * @param parent The node you wish to be the parent of the new map data.
     * @return Returns an [[element]] object that corresponds to the root of the new data added, i.e. an element that represents the ''node'' xmlnode passed to the function. Returns ''false'' if the arguments are invalid.
     */
    export function loadMapData(node: xmlnode, parent: element): element;

    /**
     * This function is used to reset the state of a player.  It is intended to restore a player to his default state as if he had just joined the server, without any scripts affecting him.
     * @see {@link https://wiki.multitheftauto.com/wiki/resetMapInfo|MTASA Wiki}
     * @param thePlayer The specific player you wish to restore the state of.  Not specifying this will result in all players map info being reset.
     * @default getRootElement(
     * @return Returns ''true'' if the map info was reset successfully, otherwise ''false''.
     */
    export function resetMapInfo(thePlayer: player): boolean;

    /**
     * This converts a set of elements in the element tree into XML. This is a format that can then be loaded as a map file. Each element represents a single XML node.
     * @see {@link https://wiki.multitheftauto.com/wiki/saveMapData|MTASA Wiki}
     * @param node : An existing node that should contain the contents of baseElement
     * @param baseElement : The first element to output to the XML tree. This element and all its children (and their children, etc) will be output.  {{OptionalArg}}
     * @param childrenOnly : Defines if you want to only save children of the specified element.
     * @default false
     * @return
     */
    export function saveMapData(node: xmlnode, baseElement: element, childrenOnly?: boolean): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function returns all the currently loaded [[modules]] of the server.
     * @see {@link https://wiki.multitheftauto.com/wiki/getLoadedModules|MTASA Wiki}
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns a table of all the currently loaded [[modules]]. If no modules are loaded, the table will be empty.
     */
    export function getLoadedModules(): table;

    /**
     * This function returns information about the specified [[Modules|module]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getModuleInfo|MTASA Wiki}
     * @param moduleName A string containing the module you wish to get information of e.g. hashing.dll
     * @return Returns a [[table]] containing information about module. These keys are present in the table:
     * * *'''version''': Module version in format X.XX
     * * *'''name''': Module name
     * * *'''author''': Module author
     * * If invalid name for module is passed, it will return ''false''.
     */
    export function getModuleInfo(moduleName: string): table;

    /**
     * This outputs a line of text to the server's log. This could be useful for debugging.
     * @see {@link https://wiki.multitheftauto.com/wiki/outputServerLog|MTASA Wiki}
     * @param text The text to be output to the log.
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function outputServerLog(text: string): boolean;

    /**
     * This function returns the current gravity for the specified [[ped]]. The default gravity is 0.008.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPedGravity|MTASA Wiki}
     * @param thePed The ped whose gravity you want to check.
     * @return Returns a [[float]] indicating the ped's gravity, or ''false'' if the ped is invalid. Default value is 0.008.
     */
    export function getPedGravity(thePed: ped): number;

    /**
     * This function checks if the specified [[ped]] is dead or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPedDead|MTASA Wiki}
     * @param thePed : the ped you want to check up on.
     * @return Returns ''true'' if the ped is dead, ''false'' otherwise.
     */
    export function isPedDead(thePed: ped): boolean;

    /**
     * This function makes a pedestrian reload their weapon.
     * @see {@link https://wiki.multitheftauto.com/wiki/reloadPedWeapon|MTASA Wiki}
     * @param thePed The ped who will reload their weapon.
     * @return Returns ''true'' if the pedestrian was made to reload, or ''false'' if invalid arguments were passed or that pedestrian has a weapon which cannot be reloaded.
     * * '''Note:''' this will fail but return true if
     * * 1) the ped is crouched and moving
     * * 2) the ped is using a weapon without clip ammo (or minigun/flamethrower/fire
     * * extinguisher)
     * * 3) the ped is using his weapon (shooting/aiming)
     * * 4) the ped moved while crouching recently
     * * Due to these circumstances causing problems with this function
     */
    export function reloadPedWeapon(thePed: ped): boolean;

    /**
     * This function can be used to force the ped to do the choking (coughing) animation until he respawns or toggled off using this function. The animation can not be cancelled by a player it's applied to, and he will not loose health.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedChoking|MTASA Wiki}
     * @param thePed The ped whose choking status to toggle
     * @param choking true to make the ped choke, false to no longer force his choking animation
     * @return Returns ''true'' if successful, ''false'' otherwise (e.g. player handle is invalid)
     */
    export function setPedChoking(thePed: ped, choking: boolean): boolean;

    /**
     * This function sets the gravity level of a ped.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedGravity|MTASA Wiki}
     * @param thePed : The ped whose gravity to change.
     * @return Returns ''true'' if the gravity was successfully set, ''false'' otherwise
     */
    export function setPedGravity(thePed: ped, gravity: number): boolean;

    /**
     * This function is used to give or take a jetpack from a ped, it won't work if the ped is in a vehicle.
     * As such, you should either expect it to fail sometimes, or repeatedly try to give a jetpack every second or so until [[isPedWearingJetpack]] returns true. Alternatively, you can force the ped into a 'safe' position (e.g. standing on the ground) before giving the jetpack, or use a [[pickup]] to handle it.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/setPedWearingJetpack|MTASA Wiki}
     * @param thePed The ped you want to give a jetpack to.
     * @param state A boolean representing whether to give or take the jetpack.
     * @return Returns ''true'' if a jetpack was successfully set for the ped, ''false'' if setting it failed.
     */
    export function setPedWearingJetpack(thePed: ped, state: boolean): boolean;

    /**
     * Returns the time it takes before a pickup respawns after a player picked it up. The time is specified in milliseconds.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPickupRespawnInterval|MTASA Wiki}
     * @param thePickup the pickup you want the respawn time of
     * @return Returns the respawn time of the pickup if successful, ''false'' in case of failure.
     */
    export function getPickupRespawnInterval(thePickup: pickup): number;

    /**
     * This function checks if a pickup is currently spawned (is visible and can be picked up) or not (a player picked it up recently).
     * @see {@link https://wiki.multitheftauto.com/wiki/isPickupSpawned|MTASA Wiki}
     * @param thePickup the pickup you want to check.
     * @return Returns ''true'' if the pickup is spawned, ''false'' if it's not spawned or an invalid pickup was specified.
     */
    export function isPickupSpawned(thePickup: pickup): boolean;

    /**
     * Sets the time it takes for a pickup to respawn after a player picked it up.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPickupRespawnInterval|MTASA Wiki}
     * @param thePickup the pickup to set the respawn time of
     * @param ms the new respawn time in ms
     * @return Returns ''true'' if the new respawn time was set successfully, ''false'' otherwise.
     */
    export function setPickupRespawnInterval(thePickup: pickup, ms: number): boolean;

    /**
     * This function returns a table of all the alive players on the server. Opposite function of [[getDeadPlayers]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getAlivePlayers|MTASA Wiki}
     * @return Returns a table of all the alive players.
     */
    export function getAlivePlayers(): table;

    /**
     * This function returns a table of all currently dead players on the server.
     * @see {@link https://wiki.multitheftauto.com/wiki/getDeadPlayers|MTASA Wiki}
     * @return Returns a table of all the dead players.
     */
    export function getDeadPlayers(): table;

    /**
     * This function returns anti-cheat info for a player. The info returned by this function can change over time, so use the server event [[onPlayerACInfo]] instead.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerACInfo|MTASA Wiki}
     * @param thePlayer The player whose anti-cheat info you want to check.
     * @return Returns a table with the following entries:
     * * * '''DetectedAC:''' A string containing a comma separated list of [[Anti-cheat_guide|anti-cheat]] codes the player has triggered.
     * * *'''d3d9Size:''' A number representing the file size of any custom d3d9.dll the player may have installed.
     * * *'''d3d9MD5:''' A string containing the MD5 of any custom d3d9.dll the player may have installed.
     * * *'''d3d9SHA256:''' A string containing the SHA256 of any custom d3d9.dll the player may have installed.
     * * <!--
     */
    export function getPlayerACInfo(thePlayer: element): table;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerAnnounceValue|MTASA Wiki}
     * @param thePlayer This is the Player whos value you want to retrieve.
     * @param key The name of the key.
     * @return This function returns a ''string'' containing the requested value if a valid key was specified or ''false'' otherwise.
     */
    export function getPlayerAnnounceValue(thePlayer: element, key: string): string;

    /**
     * This function returns the number of players currently connected to the server.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerCount|MTASA Wiki}
     * @return Returns the number of players connected to the server as an [[int]].
     */
    export function getPlayerCount(): number;

    /**
     * This function gets the amount of time in milliseconds that a players position has not changed.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerIdleTime|MTASA Wiki}
     * @param thePlayer : The player you wish to get the idle time of.
     * @return Returns the amount of '''time in milliseconds''' that a player has been idle, '''false''' otherwise.
     */
    export function getPlayerIdleTime(thePlayer: player): number;

    /**
     * This function returns a [[string]] containing the IP address of the [[player]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerIP|MTASA Wiki}
     * @param thePlayer The player element you want to get the IP of.
     * @return Returns a [[string]] containing the requested players's IP, or ''false'' if the player passed to the function is invalid.
     */
    export function getPlayerIP(thePlayer: player): string;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This will allow you to retrieve the player current debug script level.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerScriptDebugLevel|MTASA Wiki}
     * @param thePlayer The person whose debug script level you want
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns an ''int'' with the player debug script level, ''false'' if the player is invalid.
     */
    export function getPlayerScriptDebugLevel(thePlayer: player): number;

    /**
     * This function returns the [[serial]] for a specified [[player]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerSerial|MTASA Wiki}
     * @param thePlayer A player object referencing the specified player.
     * @return Returns the serial as a ''string'' if it was found, ''false'' otherwise.
     */
    export function getPlayerSerial(thePlayer: player): string;

    /**
     * This function gets the client version of the specified [[player]] as a sortable string. The string is always 15 characters long and is formatted as follows:
     * * 1 character representing the major version
     * * 1 dot character
     * * 1 character representing the minor version
     * * 1 dot character
     * * 1 character representing the maintenance version
     * * 1 dash character
     * * 1 character representing the build type
     * * 1 dot character
     * * 5 characters representing the build number
     * * 1 dot character
     * * 1 character representing the build revision
     * An example of a version string would be: 1.0.4-9.01746.0
     * Where the first three numbers represent the major/minor/maintenance version, i.e. 1.0.4<br>
     * The fourth number is 9, which means it's a release build, (Development and beta builds have lower numbers here)<br>
     * And the fifth and sixth numbers represent the build number.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerVersion|MTASA Wiki}
     * @param thePlayer The player whose client version you wish to get.
     * @return Returns a string containing the client version, or false if the [[player]] is invalid.
     */
    export function getPlayerVersion(thePlayer: player): string;

    /**
     * This function returns a random [[player]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getRandomPlayer|MTASA Wiki}
     * @return Returns a random [[player]], ''false'' if the server is empty.
     */
    export function getRandomPlayer(): player;

    /**
     * Use this function to check if a player has been muted.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPlayerMuted|MTASA Wiki}
     * @param thePlayer The player you are checking.
     * @return Returns ''true'' if the player is muted and ''false'' otherwise.
     */
    export function isPlayerMuted(thePlayer: player): boolean;

    /**
     * This function redirects the player to a specified server.
     * @see {@link https://wiki.multitheftauto.com/wiki/redirectPlayer|MTASA Wiki}
     * @param thePlayer The player you want to redirect
     * @param serverIP The IP address (or domain name that resolves to the IP address) of the server you want to redirect the player to. Use an empty string to reconnect to the same server.
     * @default ""
     * @param serverPort The game port of the server you want to redirect the player to, this is usually 22003. Set to zero to use the same port as the current server.
     * @default 0 [
     * @param serverPassword The password for the server if its protected
     * @default ""
     * @return Returns ''true'' if the player was redirected successfully, ''false'' if bad arguments were passed.
     */
    export function redirectPlayer(thePlayer: player, serverIP: string, serverPort: number, serverPassword?: string): boolean;

    /**
     * This function will force the specified player to resend their AC info, triggering the [[onPlayerACInfo]] event again.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/resendPlayerACInfo|MTASA Wiki}
     * @param thePlayer : A player object referencing the specified player
     * @return Returns ''true'' if the AC info will be resent, ''false'' otherwise.
     */
    export function resendPlayerACInfo(thePlayer: player): boolean;

    /**
     * This function will force the specified player to resend their mod info, triggering the [[onPlayerModInfo]] event again.
     * @see {@link https://wiki.multitheftauto.com/wiki/resendPlayerModInfo|MTASA Wiki}
     * @param thePlayer : A player object referencing the specified player
     * @return Returns ''true'' if the mod info will be resent, ''false'' otherwise.
     */
    export function resendPlayerModInfo(thePlayer: player): boolean;

    /**
     * This function allows you to change ASE announce values for any player using a specified key.
     * As an example this can be used to change the "score" value which will be shown at [https://www.game-state.com/ game-state.com]'s server list.
     * For server-wide changes you can use [[setRuleValue]]!
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerAnnounceValue|MTASA Wiki}
     * @param thePlayer The player whos announce value you wish to change.
     * @param key The key which the value will be stored at.
     * @param value The value you wish to store.
     * @return Returns ''true'' if the value was set succesfully, ''false'' otherwise.
     */
    export function setPlayerAnnounceValue(thePlayer: element, key: string, value: string): boolean;

    /**
     * Use this function to mute or unmute the player.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerMuted|MTASA Wiki}
     * @param thePlayer The player you are muting or unmuting.
     * @param state Use true to mute and false to unmute the player.
     * @return Returns ''true'' if the player was successfully muted or unmuted, ''false'' otherwise.
     */
    export function setPlayerMuted(thePlayer: player, state: boolean): boolean;

    /**
     * This function changes the specified [[player]]'s name. Note that any change made to a players name with this function is not saved in their settings so the name change only lasts till they disconnect.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerName|MTASA Wiki}
     * @param thePlayer the player that will have its name set.
     * @param newName the new name to set for the player.
     * @return Returns ''true'' if the player name was changed succesfully, ''false'' if invalid arguments are specified.
     */
    export function setPlayerName(thePlayer: player, newName: string): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This will set player's debug level, equivalent to [[Debugging|debugscript <level>]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerScriptDebugLevel|MTASA Wiki}
     * @param thePlayer The player whose debug level you wish to change
     * @param level 0: close debug console, 1: only errors, 2: errors and warnings, 3: errors, warnings and info messages
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if successful, ''false'' otherwise.
     */
    export function setPlayerScriptDebugLevel(thePlayer: player, level: number): boolean;

    /**
     * This function adds a [[player]] to an existing [[team]]. The player will automatically be removed from his current team if he's on one.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerTeam|MTASA Wiki}
     * @param thePlayer The player you wish to add to a team.
     * @param theTeam The team you want to add the player to, or nil if you wish to unassign a player from his team.
     * @return Returns ''true'' if the player was successfully added to the specified team or removed from his previous one, ''false'' otherwise.
     */
    export function setPlayerTeam(thePlayer: player, theTeam: team): boolean;

    /**
     * This function allows you to change who can hear the voice of a player.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerVoiceBroadcastTo|MTASA Wiki}
     * @param thePlayer The player you wish to change
     * @return Returns ''true'' if the value was set successfully, ''false'' otherwise.
     */
    export function setPlayerVoiceBroadcastTo(thePlayer: element, broadcastTo: string): boolean;

    /**
     * This function allows you to mute voices for a player.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerVoiceIgnoreFrom|MTASA Wiki}
     * @param thePlayer The player you wish to change
     * @param ignoreFrom Element or table of elements which the player should not hear voices from. Use nil if no one should be ignored.
     * @return Returns ''true'' if the value was set successfully, ''false'' otherwise.
     */
    export function setPlayerVoiceIgnoreFrom(thePlayer: element, ignoreFrom: string): boolean;

    /**
     * This function is used to set a player's wanted level. The wanted level is indicated by the amount of stars a player has on the GTA HUD.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerWantedLevel|MTASA Wiki}
     * @param thePlayer The player whose wanted level is to be set
     * @param stars An integer from 0 to 6 representing the wanted level
     * @return Returns ''true'' if the wanted level was set successfully, ''false'' if any of the arguments were invalid.
     */
    export function setPlayerWantedLevel(thePlayer: player, stars: number): boolean;

    /**
     * This function spawns the player at an arbitary point on the map.<br>
     * @see {@link https://wiki.multitheftauto.com/wiki/spawnPlayer|MTASA Wiki}
     * @param thePlayer The player you want to spawn.
     * @param x The x co-ordinate to spawn the player at.
     * @param y The y co-ordinate to spawn the player at.
     * @param z The z co-ordinate to spawn the player at.
     * @param rotation rotation of the player on spawn.
     * @default 0
     * @param skinID players skin on spawn. Character Skins
     * @default 0
     * @param interior interior the player will spawn into. Interior IDs
     * @default 0
     * @param dimension The ID of the dimension that the player should be in.
     * @default 0
     * @param theTeam the team the player will join.
     * @default getPlayerTeam(thePlayer
     * @return Returns ''true'' if the player was spawned successfully, ''false'' otherwise.
     */
    export function spawnPlayer(thePlayer: player, x: number, y: number, z: number, rotation: number, skinID: number, interior: number, dimension: number, theTeam: team): boolean;

    /**
     * This function forces a client to capture the current screen output and send it back to the server. The image will contain the GTA HUD and the output of any dxDraw functions that are not flagged as 'post GUI'. The image specifically excludes the chat box and all GUI (including the client console). The result is received with the event [[onPlayerScreenShot]].
     * @see {@link https://wiki.multitheftauto.com/wiki/takePlayerScreenShot|MTASA Wiki}
     * @param thePlayer the player to get the screen capture from.
     * @param width the width of the capture image.
     * @param height the height of the capture image.
     * @param tag A string to help identify the screen capture. The string is passed to the matching onPlayerScreenShot event for your personal convenience.
     * @default ""
     * @param quality Quality of the final JPEG image from 0 to 100. A lower value can reduce the memory used by the image considerably which will result in faster and less intrusive uploads.
     * @default 30
     * @param maxBandwith The amount of client upload bandwidth to use (in bytes per second) when sending the image.  *'''maxPacketSize: ''' The maximum size of one packet.
     * @default 5000
     * @return Returns ''true'' if the function was successfully, ''false'' if invalid arguments are specified.
     */
    export function takePlayerScreenShot(thePlayer: player, width: number, height: number, tag?: string, quality?: number, maxBandwith?: number, maxPacketSize?: number): boolean;

    /**
     * This function adds a new empty config file to an existing resource.
     * @see {@link https://wiki.multitheftauto.com/wiki/addResourceConfig|MTASA Wiki}
     * @param filePath The filepath of the file to be created in the following format: :resourceName/path. resourceName is the name of the resource the file is in, and path is the path from the root directory of the resource to the file.  :For example, if you want to create a config named 'settings.xml' in the resource 'ctf', it can be created from another resource this way: ''addResourceConfig(":ctf/settings.xml", "server")''.  :If you want to create the file in the current resource, only the file path is necessary, e.g. ''addResourceConfig("settings.xml", "server")''.  {{OptionalArg}}
     * @param filetype a string indicating whether the file is serverside (server) or clientside (client).
     * @default "server"
     * @return Returns the new config's root [[xmlnode]] if the config was added successfully, ''false'' otherwise.
     */
    export function addResourceConfig(filePath: string, filetype: string): xmlnode;

    /**
     * This function adds a new empty mapfile to an existing resource.
     * @see {@link https://wiki.multitheftauto.com/wiki/addResourceMap|MTASA Wiki}
     * @param filePath The filepath of the resource map in the following format: :resourceName/path. resourceName is the name of the resource the map file will be in, and path is the path from the root directory of the resource to the file.  :For example, if you want to create a map file named 'manycars.map' in the resource 'cdm', it can be created from another resource this way: ''addResourceMap(":cdm/manycars.map")''.  :If you want to create the map file in the current resource, only the file path is necessary, e.g. ''addResourceMap("manycars.map")''.  {{OptionalArg}}
     * @param dimension the dimension in which the maps objects will be placed.
     * @default 0
     * @return Returns the new map's root [[xmlnode]] if the map was added successfully, ''false'' otherwise.
     */
    export function addResourceMap(filePath: string, dimension: number): xmlnode;

    /**
     * This function allows you to call functions that have been exported with HTTP access by other MTA servers. The calls are asynchronous so you do not get an immediate result from the call, instead a callback function you specify is called when the call returns.
     * You can also use this function to access a standard web page on a server you own by specifying the URL. The arguments you specify to callRemote are passed to the web page using HTTP POST as a [[JSON]] array. This will always have an array as the root element. The page must return a JSON formated *array* in the page's body with the results of the call (or an empty array if there are no results).
     * You can use the [[PHP SDK]] to create PHP pages that can be called by this function. See the PHP SDK page for an example.
     * In addition, it is possible to use this function to get information about a resource in the MTA community, besides other things. Check out the [[Community Resources]] article.
     * In the case when the call fails, a string containing "ERROR" followed by an integer containing the error reason will be passed to the callback function. The reason for failure will be similar to errors found with websites - file not found, server not found and timeouts.
     * @see {@link https://wiki.multitheftauto.com/wiki/callRemote|MTASA Wiki}
     * @param host This is a host name - including the HTTP port - of the server you wish to connect to.
     * @param queueName Name of the queue to use. Any name can be used. If not set, the queue name is default. Requests in the same queue are processed in order, one at a time.  }}  {{New_feature|3.0139|1.3.1|
     * @default "default"
     * @param connectionAttempts Number of times to retry if the remote host does not respond. In the case of a non-responding remote server, each connection attempt will timeout after 6 seconds. Therefore, the default setting of 10 connection attempts means it will be 60 seconds before your script gets a callback about the error. Reducing this value to 2 for example, will decrease that period to 12 seconds
     * @default 10
     * @param connectTimeout Number of milliseconds each connection attempt will take before timing out  }}
     * @default 10000
     * @param resourceName This is a name of the resource that contains the exported function you want to call.
     * @param functionName This is a string with the name of the function which you want to call.
     * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing ERROR followed by an integer indicating the error code when an error occurs calling the function. A list of error codes Template:Error_codes_for_callRemote_and_fetchRemote |can be found here.  {{OptionalArg}}   {{New items|4.0153|1.5.3-9.11270|
     * @return Returns ''true'' if the function has been called, ''false'' otherwise.
     */
    export function callRemote(host: string, queueName?: string, connectionAttempts?: number, connectTimeout?: number, resourceName?: string, functionName?: string, callbackFunction?: HandleFunction, ...args: any[]): boolean;

    /**
     * This function copies a specified [[resource]] with a new name.
     * @see {@link https://wiki.multitheftauto.com/wiki/copyResource|MTASA Wiki}
     * @param theResource the resource which is going to be copied
     * @param newResourceName the name that the copied resource will receive  {{OptionalArg}}
     * @param organizationalDir : A string containing the path where the resource should be copied to (e.g. gamemodes/amx).
     * @return Returns the [[resource]] element of the copy. Returns ''false'' if the arguments are incorrect.
     */
    export function copyResource(theResource: resource, newResourceName: string, organizationalDir?: string): resource;

    /**
     * This function creates an new, empty resource. This creates a directory matching the name you specify on disk, then creates an empty meta.xml file with a <meta> element in it.
     * @see {@link https://wiki.multitheftauto.com/wiki/createResource|MTASA Wiki}
     * @param resourceName The name of the new resource. This should be a valid file name. Its recommended that you do not have spaces or non-ASCII characters in resource names.  {{OptionalArg}}
     * @param organizationalDir : A string containing the path where the resource should be created (e.g. gamemodes/amx).
     * @return Returns the [[resource]] element of the new resource if successful, ''false'' otherwise. This could fail if the resource name already is in use, if a directory already exists with the name you've specified (but this isn't a valid resource) or if the name you specify isn't valid. It could also fail if the disk was full or for other similar reasons.
     */
    export function createResource(resourceName: string, organizationalDir?: string): resource;

    /**
     * This function deletes a resource from the MTA memory and moves it to the '''/resources-cache/trash/''' directory.
     * @see {@link https://wiki.multitheftauto.com/wiki/deleteResource|MTASA Wiki}
     * @param resourceName The name of resource to delete.
     * @return Returns ''true'' if the resource has been deleted successfully, ''false'' otherwise.
     */
    export function deleteResource(resourceName: string): boolean;

    /**
     * This function retrieves the ACL request section from the meta.xml file of the given resource.
     * @see {@link https://wiki.multitheftauto.com/wiki/getResourceACLRequests|MTASA Wiki}
     * @param theResource the resource to get the ACL requests for.
     * @return Returns a ''table'' with the ACL requests for the given resource, or ''false'' if the resource is not valid. A valid resource with no ACL requests will return an empty table.
     */
    export function getResourceACLRequests(theResource: resource): table;

    /**
     * This function retrieves the value of any attribute in a resource info tag.
     * @see {@link https://wiki.multitheftauto.com/wiki/getResourceInfo|MTASA Wiki}
     * @param theResource the resource we are getting the info from.
     * @param attribute the name of the attribute we want info about.
     * @return Returns a ''string'' with the attribute value if it exists, ''false'' otherwise.
     */
    export function getResourceInfo(theResource: resource, attribute: string): string;

    /**
     * Used to check the last starting time and date of a resource
     * @see {@link https://wiki.multitheftauto.com/wiki/getResourceLastStartTime|MTASA Wiki}
     * @param theResource The resource of which youd like to check the last starting time.
     * @return {{New feature/item|3|1.0|840|
     * * If successful, returns the UNIX timestamp when the resource was last started, or the string "never" if the resource has not been started yet, otherwise false. Use in conjunction with [[getRealTime]] in order to retrieve detailed information. 
     * * }}
     * * {{Deprecated_feature|3|1.0|
     * * Returns a string with the time and date, or false if the resource does not exist.
     * * }}
     */
    export function getResourceLastStartTime(theResource: resource): number;

    /**
     * This function retrieves the reason why a resource failed to start.
     * @see {@link https://wiki.multitheftauto.com/wiki/getResourceLoadFailureReason|MTASA Wiki}
     * @param theResource The resource you wish to check.
     * @return If the resource failed to load, returns a string with the failure reason in it. If it loaded successfully, returns an empty string. Returns ''false'' if the resource doesn't exist.
     */
    export function getResourceLoadFailureReason(theResource: resource): string;

    /**
     * Gets the date and time at which a resource was last loaded in the server.
     * @see {@link https://wiki.multitheftauto.com/wiki/getResourceLoadTime|MTASA Wiki}
     * @param res the resource you want to know the load time of.
     * @return {{New feature|3|1.0 r840|
     * * If successful, returns the UNIX timestamp when the resource was loaded, otherwise false. Use in conjunction with [[getRealTime]] in order to retrieve detailed information. 
     * * }}
     * * {{Deprecated_feature|3|1.0|
     * * If successful, returns a string with the date and time that the resource was last loaded into memory (for example when the server started, or when the resource was changed and reloaded). Returns ''false'' on failure.
     * * An example string is "Fri Mar 28 13:51:04 2008".
     * * }}
     */
    export function getResourceLoadTime(res: resource): number;

    /**
     * This function retrieves the root element of a certain [[map]] in a specified [[resource]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getResourceMapRootElement|MTASA Wiki}
     * @param theResource the resource where the map is located
     * @param mapName name of the maps which root element we want to retrieve, file extension is required
     * @return Returns an the resource's map root [[element]] if the map exists and resource specified was valid and active (currently running), ''false'' otherwise.
     */
    export function getResourceMapRootElement(theResource: resource, mapName: string): element;

    /**
     * This function returns the organizational file path (e.g. ''[admin]'') of a resource.
     * @see {@link https://wiki.multitheftauto.com/wiki/getResourceOrganizationalPath|MTASA Wiki}
     * @param theResource the resource of which you want to know the organizational path
     * @return Returns the organizational folder name of the [[resource]]. It returns empty string if the resource is on root ''resources'' folder. It returns '''false''' if the resource could not be found.
     */
    export function getResourceOrganizationalPath(theResource: resource): string;

    /**
     * This function retrieves a table of all the resources that exist on the server.
     * @see {@link https://wiki.multitheftauto.com/wiki/getResources|MTASA Wiki}
     * @return Returns a table of resources.
     */
    export function getResources(): table;

    /**
     * Checks whether a resource is currently archived (running from within a ZIP file).
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/isResourceArchived|MTASA Wiki}
     * @return Returns ''true'' if a resource is archived, ''false'' if it is not archived, or ''nil'' if there is problem with resource.
     */
    export function isResourceArchived(resourceElement: resource): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This will check if a resource is currently protected, as defined in [[Server_mtaserver.conf#resource|mtaserver.conf]].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/isResourceProtected|MTASA Wiki}
     * @param theResource the resource to check
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if the resource is 'protected', ''false'' otherwise.
     */
    export function isResourceProtected(theResource: resource): boolean;

    /**
     * This function finds new resources and checks for changes to the current ones.
     * @see {@link https://wiki.multitheftauto.com/wiki/refreshResources|MTASA Wiki}
     * @param refreshAll : If true MTA will check for changes in all resources. If false, MTA will only check for new resources and try to reload resources with errors  {{New items|5.0155|1.5.5-9.11718|
     * @default false
     * @param targetResource : If set, the refresh is restricted to the supplied resource only  }}  '''Note:''' Checking for changes in all resources can result in lag for a short period of time. It should generally be avoided to set refreshAll to ''true''.
     * @default nil
     * @return Returns true if refresh was successful, false otherwise.
     */
    export function refreshResources(refreshAll: boolean, targetResource: resource): boolean;

    /**
     * This function removes a file from the resource.
     * @see {@link https://wiki.multitheftauto.com/wiki/removeResourceFile|MTASA Wiki}
     * @param theResource The resource element.
     * @param fileName The filename what you want to delete.
     * @return Returns ''true'' if file was deleted, otherwise ''false'' if the resource is in use or the file doesn't exist.
     */
    export function removeResourceFile(theResource: resource, fileName: string): boolean;

    /**
     * This function renames a resource.
     * @see {@link https://wiki.multitheftauto.com/wiki/renameResource|MTASA Wiki}
     * @param newResourceName The name of what the resource should be renamed to.
     * @param organizationalPath If you want to store the new resource inside a category.
     * @return Returns ''true'' if the resource has been renamed successfully, ''false'' otherwise. This could fail if the resource name already is in use, if a directory already exists with the name you've specified (but this isn't a valid resource) or if the name you specify isn't valid. It could also fail if the disk was full or for other similar reasons. Won't work on a started resource or if the resource is not loaded (not known by MTA (use /refresh))
     */
    export function renameResource(resource: string, newResourceName: string, organizationalPath: string): boolean;

    /**
     * This function restarts a running resource. Restarting will destroy all the elements that the resource has created (as stopping the resource does).
     * *Don't forget to give admin rights to the resource, in which you are using restartResource function or it won't work.
     * *This function does not restart the resource immediately. Restarts are queued up until the end of the server's frame to ensure that they occur in the correct order (and that dependent resources can start and stop correctly). The resource being restarted will have an [[onResourceStop]] event triggered and the restarted instance will receive an [[onResourceStart]] event. Remember that the element and resource variables will be invalidated during the restart, though of course, the resource's name will not.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/restartResource|MTASA Wiki}
     * @param theResource the resource you want to restart.
     * @param persistent Unused
     * @default false
     * @param configs Reload configs?
     * @default true
     * @param maps Reload maps?
     * @default true
     * @param scripts Reload (server) scripts?
     * @default true
     * @param html Reload html files (for resource web access)?
     * @default true
     * @param clientConfigs Reload client configs?
     * @default true
     * @param clientScripts Reload client scripts?
     * @default true
     * @param clientFiles Reload files?
     * @default true
     * @return Returns ''true'' if the resource was restarted, ''false'' if the resource wasn't running, or an invalid resource was passed.
     */
    export function restartResource(theResource: resource, persistent?: boolean, configs?: boolean, maps?: boolean, scripts?: boolean, html?: boolean, clientConfigs?: boolean, clientScripts?: boolean, clientFiles?: boolean): boolean;

    /**
     * This function sets the value of any attribute in a resource info tag.
     * @see {@link https://wiki.multitheftauto.com/wiki/setResourceInfo|MTASA Wiki}
     * @param theResource the resource we are setting info to.
     * @param attribute the name of the attribute that is to be set.
     * @param value the value of this attribute
     * @return Returns ''true'' if the info was successfully set, ''false'' otherwise
     */
    export function setResourceInfo(theResource: resource, attribute: string, value: string): boolean;

    /**
     * This function starts a resource either persistently or as a dependency of the current resource. If you start the resource persistently, the resource will run until stopped either using [[stopResource]] or by the server admin. A resource started as a dependency will stop when your resource stops, if no other resources have it as a depdendency. This is the same effect as using an ''include'' in your [[meta.xml]] file.
     * The function also allows you to specify a number of boolean options. These allow you to disable the loading of various aspects of the resource. This is generally useful for editors rather than for actual gamemodes. It could also be used as a way to preview a resource before enabling the scripting aspects, though this could produce unreliable results. There is no way for a resource to tell if it is being run with any of these booleans set.
     * @see {@link https://wiki.multitheftauto.com/wiki/startResource|MTASA Wiki}
     * @param resourceToStart The resource that should be started.  {{OptionalArg}}
     * @param persistent A boolean specifying if the resource should continue to run even after the current resource has been stopped or not. If this is true then the resource will run until another resource or user terminates it or the server shuts down. If this is false then resourceToStart will stop when thisResource stops.
     * @default false
     * @param startIncludedResources A boolean specifying if the resources included/dependant resources will be started.
     * @default true
     * @param loadServerConfigs A boolean specifying if server side config (XML) files should be loaded with the resource.
     * @default true
     * @param loadMaps A boolean specifying if any .map files will be started with the resource.
     * @default true
     * @param loadServerScripts A boolean specifying if server side script files should be started alongside the resource.
     * @default true
     * @param loadHTML A boolean specifying if HTML files should be started alongside the resource.
     * @default true
     * @param loadClientConfigs A boolean specifying if client configs should be loaded alongside the resource.
     * @default true
     * @param loadClientScripts A boolean specifying if client scripts should be loaded and started alongside the resource.
     * @default true
     * @param loadFiles A boolean specifying if client-side files should be loaded alongside the resource.
     * @default true
     * @return Returns ''true'' if the resource has been started successfully, ''false'' otherwise.
     */
    export function startResource(resourceToStart: resource, persistent: boolean, startIncludedResources: boolean, loadServerConfigs: boolean, loadMaps: boolean, loadServerScripts: boolean, loadHTML: boolean, loadClientConfigs: boolean, loadClientScripts: boolean, loadFiles: boolean): boolean;

    /**
     * This function stops a running resource.<br>
     * @see {@link https://wiki.multitheftauto.com/wiki/stopResource|MTASA Wiki}
     * @param theResource the resource that should be stopped.
     * @return Returns ''true'' if the resource was stopped, ''false'' if the stopping failed, or an invalid resource was passed.
     */
    export function stopResource(theResource: resource): boolean;

    /**
     * This function changes the access for one ACL request of the given resource.
     * @see {@link https://wiki.multitheftauto.com/wiki/updateResourceACLRequest|MTASA Wiki}
     * @param theResource the resource to set the ACL request for.
     * @param rightName a string with the name of the right to set the access for. This has to match an existing ACL request.
     * @param access a boolean value setting the access. True is for allow, and false for deny.
     * @param byWho a string value to identity who is changing the setting.
     * @default ""
     * @return Returns true if the setting was changed, or ''false'' if no change was required or there was a problem with the arguments.
     */
    export function updateResourceACLRequest(theResource: resource, rightName: string, access: boolean, byWho?: string): boolean;

    /**
     * This function returns the maximum number of player slots on the server.
     * @see {@link https://wiki.multitheftauto.com/wiki/getMaxPlayers|MTASA Wiki}
     * @return Returns the maximum number of players allowed on the server.
     */
    export function getMaxPlayers(): number;

    /**
     * This function retrieves the server's HTTP port.
     * @see {@link https://wiki.multitheftauto.com/wiki/getServerHttpPort|MTASA Wiki}
     * @return An integer corresponding to the server's HTTP port.
     */
    export function getServerHttpPort(): number;

    /**
     * This function retrieves the server's name.
     * @see {@link https://wiki.multitheftauto.com/wiki/getServerName|MTASA Wiki}
     * @return A string containing the server's name.
     */
    export function getServerName(): string;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function returns the current password required to join the server.
     * @see {@link https://wiki.multitheftauto.com/wiki/getServerPassword|MTASA Wiki}
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns the current server password as a string if it has a password, if not it returns ''nil''.
     */
    export function getServerPassword(): string;

    /**
     * This function retrieves the server's port.
     * @see {@link https://wiki.multitheftauto.com/wiki/getServerPort|MTASA Wiki}
     * @return An integer corresponding to the server's port.
     */
    export function getServerPort(): number;

    /**
     * This function retrieves whether San Andreas game glitches are enabled or not, set by using [[setGlitchEnabled]]
     * @see {@link https://wiki.multitheftauto.com/wiki/isGlitchEnabled|MTASA Wiki}
     * @param glitchName the name of the property to set. Possible values are:  {{Glitches}}
     * @return Returns ''true'' if if the glitch was enabled, or ''false'' if it is disabled.
     */
    export function isGlitchEnabled(glitchName: string): boolean;

    /**
     * This function enables or disables glitches that are found in the original Single Player game that can be used to gain an advantage in multiplayer.
     * Users of the '''fastmove''' glitch may additionally want to install [https://community.mtasa.com/index.php?p=resources&s=details&id=13368 this resource to disable crouchsliding].
     * @see {@link https://wiki.multitheftauto.com/wiki/setGlitchEnabled|MTASA Wiki}
     * @param glitchName the name of the property to set. Possible values are:  {{Glitches}}
     * @param enable whether or not to enable the glitch.
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function setGlitchEnabled(glitchName: string, enable: boolean): boolean;

    /**
     * This function sets the maximum number of player slots on the server.
     * @see {@link https://wiki.multitheftauto.com/wiki/setMaxPlayers|MTASA Wiki}
     * @param slots Maximum number of player slots on the server.
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if number of player slots was successfully changed, ''false'' or ''nil'' otherwise.
     */
    export function setMaxPlayers(slots: number): boolean;

    /**
     * <!-- Describe in plain english what this function does. Don't go into details, just give an overview -->
     * This function changes the password required to join the server to the given string.
     * @see {@link https://wiki.multitheftauto.com/wiki/setServerPassword|MTASA Wiki}
     * @param thePassword The new server password you want. Pass nil or an empty string to remove the password.
     * @return <!-- Make this descriptive. Explain what cases will return false. If you're unsure, add a tag to it so we can check -->
     * * Returns ''true'' if the password was successfully changed or removed, ''false'' or ''nil'' otherwise.
     */
    export function setServerPassword(thePassword: string): boolean;

    /**
     * This function shuts down the server.
     * Make sure your server ACL setup has function.shutdown object protected.
     * @see {@link https://wiki.multitheftauto.com/wiki/shutdown|MTASA Wiki}
     * @param reason the reason why the server has been shut down.
     * @return Returns ''false'' if it was not possible to shut down the server.
     */
    export function shutdown(reason: string): boolean;

    /**
     * This function gets a setting's value, or a group of settings' values, from the [[settings system|settings registry]].
     * @see {@link https://wiki.multitheftauto.com/wiki/get|MTASA Wiki}
     * @return Returns the value of the setting if a single setting was specified and found, or a ''table'' (in associative-array form) containing:
     * * *the list of global setting name/value pairs if "." is passed as a setting name,
     * * *the list of resource settings if a resource name followed by a "." is passed,
     * * *the list of the script's resource settings if an empty string is passed.
     * * It returns ''false'' if the specified setting or settings group doesn't exist, or if the settings group you are trying to retrieve doesn't have any public or protected settings.
     */
    export function get(settingName: string): any;

    /**
     * This function is used to save arbitrary data under a certain name on the [[settings system|settings registry]].
     * It's important to note that set ''always'' writes to the settings.xml file, even if [[get]] read the value from a resource's meta.xml. This means that the admin can specify settings in the settings.xml that override the resource's defaults, but that the defaults can still be retrieved if need be. As a general principle, resources should not be designed so that the admin is required to modify them, they should be 'black boxes'.
     * @see {@link https://wiki.multitheftauto.com/wiki/set|MTASA Wiki}
     * @param settingName The name of the setting you want to set. See settings system#Setting names|setting names for information on settings names.
     * @param value The value to set the setting to. This can be any Lua data type, except for functions, most userdata (only resources cant be stored) and threads.
     * @return Returns ''true'' if the setting has been set, ''false'' if you do not have access to the setting or invalid arguments were passed.
     */
    export function set(settingName: string, value: any): boolean;

    /**
     * This function executes an arbitrary SQL query and returns the result rows if there are any. It allows parameter binding for security (SQL injection is rendered impossible).
     * @see {@link https://wiki.multitheftauto.com/wiki/executeSQLQuery|MTASA Wiki}
     * @param query An SQL query. Positions where parameter values will be inserted are marked with a ?.
     * @return Returns a table with the result of the query if it was a SELECT query, or ''false'' if otherwise. In case of a SELECT query the result table may be empty (if there are no result rows). The table is of the form:
     * * <syntaxhighlight lang="lua">
     * * {
     * *     { colname1=value1, colname2=value2, ... },
     * *     { colname1=value3, colname2=value4, ... },
     * *     ...
     * * }
     * * </syntaxhighlight>
     * * A subsequent table represents the next row.
     */
    export function executeSQLQuery(query: string, param1?: any, ...args: any[]): table;

    /**
     * This function opens a connection to a database and returns an element that can be used with [[dbQuery]]. To disconnect use [[destroyElement]].
     * @see {@link https://wiki.multitheftauto.com/wiki/dbConnect|MTASA Wiki}
     * @param databaseType The type of database. This can be either sqlite or mysql
     * @param host : Host address e.g. host=127.0.0.1
     * @param username Usually required for MySQL, ignored by SQLite
     * @default ""
     * @param password Usually required for MySQL, ignored by SQLite
     * @default ""
     * @return Returns a database connection element unless there are problems, in which case it return ''false''.
     */
    export function dbConnect(databaseType: string, host: string, username?: string, password?: string, options?: string): element;

    /**
     * This function executes a database query using the supplied connection. No result is returned.
     * @see {@link https://wiki.multitheftauto.com/wiki/dbExec|MTASA Wiki}
     * @param databaseConnection A database connection element previously returned from dbConnect
     * @param query An SQL query. Positions where parameter values will be inserted are marked with a ?
     * @return Returns ''true'' unless the connection is incorrect, in which case it returns ''false''.
     */
    export function dbExec(databaseConnection: element, query: string, param1?: any, ...args: any[]): boolean;

    /**
     * This function frees a database query handle. dbFree only needs to be used if a result has not been obtained with [[dbPoll]]
     * @see {@link https://wiki.multitheftauto.com/wiki/dbFree|MTASA Wiki}
     * @param queryHandle A query handle previously returned from dbQuery
     * @return Returns ''true'' if the handle was successfully freed, ''false'' otherwise.
     */
    export function dbFree(queryHandle: HandleFunction): boolean;

    /**
     * This function checks the progress of a database query.
     * @see {@link https://wiki.multitheftauto.com/wiki/dbPoll|MTASA Wiki}
     * @param queryHandle A query handle previously returned from dbQuery
     * @param timeout How many milliseconds to wait for a result. Use 0 for an instant response (which may return nil). Use -1 to wait until a result is ready. Note: A wait here will freeze the entire server just like executeSQLQuery  {{Important Note|It is strongly recommended to use this function in callback, as presented in "This example shows how to obtain data without server freeze."}}  {{New items|3.0152|1.5.2|
     * @param multipleResults Set to true to enable the return values from multiple queries  |7972}}
     * @default false
     * @return *''nil:'' Returns nil if the query results are not yet ready. You should try again in a little while. (If you give up waiting for a result, be sure to call [[dbFree]])
     * * *''false:'' Returns false if the query string contained an error, the connection has been lost or the query handle is incorrect. This automatically frees the query handle, so you do not have to call [[dbFree]].
     * * ** This also returns two extra values: (See the example on how the retrieve them)
     * * ***''int:'' error code
     * * ***''string'' error message
     * * *''table:'' Returns a table with the result of the query when the query has successfully completed. This automatically frees the query handle, so you do not have to call [[dbFree]]. If multipleResults is set to true, it will first return a table pertaining to one query, followed by the results for that query and so on for the next queries.
     * * ** This also returns extra values (only when multipleResults is set to true):
     * * ***''int:'' number of affected rows
     * * ***''int:'' last insert id
     * * The table is of the format:
     * * <syntaxhighlight lang="lua">
     * * {
     * *     { colname1=value1, colname2=value2, ... },
     * *     { colname1=value3, colname2=value4, ... },
     * *     ...
     * * }
     * * </syntaxhighlight>
     * * A subsequent table represents the next row.
     * * {{Note|If a column contained a number it is returned as a number, this includes things which were stored as string but are numbers such as "1" would be returned as 1.}}
     */
    export function dbPoll(queryHandle: HandleFunction, timeout: number, multipleResults?: boolean): table;

    /**
     * This function escapes arguments in the same way as [[dbQuery]], except dbPrepareString returns the query string instead of processing the query. This allows you to safely build complex query strings from component parts and help prevent (one class of) SQL injection.}}
     * @see {@link https://wiki.multitheftauto.com/wiki/dbPrepareString|MTASA Wiki}
     * @param databaseConnection A database connection element previously returned from dbConnect
     * @param query An SQL query. Positions where parameter values will be inserted are marked with a ?
     * @return Returns a prepare SQL query string, or ''false'' if an error occurred.
     */
    export function dbPrepareString(databaseConnection: element, query: string, param1?: any, ...args: any[]): string;

    /**
     * This function starts a database query using the supplied connection. Use the returned query handle with [[dbPoll]] to get the result, or [[dbFree]] if you don't want the result.
     * @see {@link https://wiki.multitheftauto.com/wiki/dbQuery|MTASA Wiki}
     * @param callbackFunction An optional function to be called when a result is ready. The function will only be called if the result has not already been read with dbPoll. The function is called with the query handle as the first argument.
     * @param callbackArguments An optional table containing extra arguments to be sent to the callback function.
     * @param databaseConnection A database connection element previously returned from dbConnect
     * @param query An SQL query. Positions where parameter values will be inserted are marked with a ?
     * @return Returns a query handle unless the connection is incorrect, in which case it return ''false''.
     */
    export function dbQuery(callbackFunction: HandleFunction, callbackArguments: table, databaseConnection: element, query: string, param1?: any, ...args: any[]): HandleFunction;

    /**
     * This function is for creating a new [[team]], which can be used to group players. Players will not join the team until they are respawned.
     * @see {@link https://wiki.multitheftauto.com/wiki/createTeam|MTASA Wiki}
     * @param teamName A string representing the teams name.
     * @param colorR An integer representing the red color value.
     * @default 255
     * @param colorG An integer representing the green color value.
     * @default 255
     * @param colorB An integer representing the blue color value.
     * @default 255
     * @return Returns a team element if it was successfully created, ''false'' if invalid arguments are passed or a team with that name already exists.
     */
    export function createTeam(teamName: string, colorR?: number, colorG?: number, colorB?: number): team;

    /**
     * This function adds a [[player]] to an existing [[team]]. The player will automatically be removed from his current team if he's on one.
     * @param thePlayer The player you wish to add to a team.
     * @param theTeam The team you want to add the player to, or nil if you wish to unassign a player from his team.
     * @return Returns ''true'' if the player was successfully added to the specified team or removed from his previous one, ''false'' otherwise.
     */
    export function setPlayerTeam(thePlayer: player, theTeam: team): boolean;

    /**
     * This function is for setting the color of a specified team. This color is shown, for example, in the team players' nametags.
     * @see {@link https://wiki.multitheftauto.com/wiki/setTeamColor|MTASA Wiki}
     * @param theTeam The team you want to change the color of.
     * @param colorR An integer representing the red color value, from 0 to 255.
     * @param colorG An integer representing the green color value, from 0 to 255.
     * @param colorB An integer representing the blue color value, from 0 to 255.
     * @return Returns ''true'' if the team is valid and the color is different, otherwise ''false''.
     */
    export function setTeamColor(theTeam: team, colorR: number, colorG: number, colorB: number): boolean;

    /**
     * This function sets the friendly fire value for the specified team.
     * @see {@link https://wiki.multitheftauto.com/wiki/setTeamFriendlyFire|MTASA Wiki}
     * @param theTeam The  team that will have friendly fire set
     * @param friendlyFire A boolean denoting whether the players from the same team can kill each other (true) or whether the players cant kill each other (false).
     * @return Returns ''true'' if the friendly fire value is set for the specified team, ''false'' if the friendly fire value can't be set for the specified team or if invalid arguments are specified.
     */
    export function setTeamFriendlyFire(theTeam: team, friendlyFire: boolean): boolean;

    /**
     * This function is used to set a team's name.
     * @see {@link https://wiki.multitheftauto.com/wiki/setTeamName|MTASA Wiki}
     * @param theTeam The team you want to change the name of.
     * @param newName A string representing the name you want the team to be called.
     * @return Returns ''true'' if the team was valid and the name was changed, ''false'' otherwise.
     */
    export function setTeamName(theTeam: team, newName: string): boolean;

    /**
     * A [[textdisplay|text display]] is like a canvas that can contain many [[textitem|items of text]]. Each display can be seen by multiple observers (players) and each player can see multiple displays.
     * @see {@link https://wiki.multitheftauto.com/wiki/textCreateDisplay|MTASA Wiki}
     * @return
     */
    export function textCreateDisplay(): textdisplay;

    /**
     * This function creates a text item. A text item represents a single area of text, much like a label does in standard GUI programming. A text item can only be seen by players if it is added to a [[textdisplay]] using [[textDisplayAddText]]. Each text item can be added to multiple displays, if need be.
     * @see {@link https://wiki.multitheftauto.com/wiki/textCreateTextItem|MTASA Wiki}
     * @param text : A string of text you want to display
     * @param x : A floating point number between 0.0 and 1.0 indicating how far across the screen the text should be shown, as a percentage of the width, from the left hand side.
     * @param y : A floating point number between 0.0 and 1.0 indicating how far down the screen the text should be shown, as a percentage of the height, from the top.  {{OptionalArg}}
     * @param priority : How important it is that this text should be up to date on clients screens. Valid values are: low, medium, high which are aliases for 0, 1 and 2 respectively.
     * @param red : A value between 0 and 255 indicating how red the text should be.
     * @default 255
     * @param green : A value between 0 and 255 indicating how green the text should be.
     * @default 255
     * @param blue : A value between 0 and 255 indicating how blue the text should be.
     * @default 255
     * @param alpha : A value between 0 and 255 indicating how transparent the text should be, with 0 being fully transparent, and 255 being opaque.
     * @default 255
     * @param scale : A floating point value indicating the scale of the text. The default is 1.0, which is around 12pt.
     * @default 1
     * @param alignX : A string representing the X-alignment of the text. (left, center, right)
     * @default "left"
     * @param alignY : A string representing the Y-alignment of the text. (top, center, bottom)
     * @default "top"
     * @param shadowAlpha : A value between 0 and 255 indicating how dark the drop shadow should be.
     * @default 0
     * @return Returns a [[textitem]] object.
     */
    export function textCreateTextItem(text: string, x: number, y: number, priority: string, red: number, green: number, blue: number, alpha: number, scale: number, alignX: string, alignY: string, shadowAlpha: number): textitem;

    /**
     * This function destroys a text display and will unlink all the [[textitem]]s on it. This does not stop the textitems existing, but anyone who was observing the textitems through this display will stop seeing them.
     * @see {@link https://wiki.multitheftauto.com/wiki/textDestroyDisplay|MTASA Wiki}
     * @param display This is the textdisplay that you wish to have destroyed.
     * @return
     */
    export function textDestroyDisplay(display: textdisplay): boolean;

    /**
     * This function destroys a [[textitem]] object.
     * @see {@link https://wiki.multitheftauto.com/wiki/textDestroyTextItem|MTASA Wiki}
     * @param theTextitem The text item you wish to destroy.
     * @return
     */
    export function textDestroyTextItem(theTextitem: textitem): void;

    /**
     * This function adds a [[player]] as an observer of a [[textdisplay]]. This allows the [[player]] to see any [[textitem]]s that the [[textdisplay]] contains.
     * @see {@link https://wiki.multitheftauto.com/wiki/textDisplayAddObserver|MTASA Wiki}
     * @param display : The textdisplay to add the player to as an observer.
     * @param playerToAdd : The player that should observe the textdisplay.
     * @return
     */
    export function textDisplayAddObserver(display: textdisplay, playerToAdd: player): void;

    /**
     * This function adds a [[textitem]] to a [[textdisplay]]. This allows any observers of the [[textdisplay]] to see the [[textitem]].
     * @see {@link https://wiki.multitheftauto.com/wiki/textDisplayAddText|MTASA Wiki}
     * @param displayToAddTo : The textdisplay to add the textitem to.
     * @param itemToAdd : The textitem to add to the display.
     * @return
     */
    export function textDisplayAddText(displayToAddTo: textdisplay, itemToAdd: textitem): void;

    /**
     * This function can be used to retrieve all the [[player]]s  currently observing a specified [[textdisplay]].
     * @see {@link https://wiki.multitheftauto.com/wiki/textDisplayGetObservers|MTASA Wiki}
     * @param theDisplay : The textdisplay of which observers you want to get.
     * @return Returns a [[table]] of players that are observers of the display or ''false'' if invalid textdisplay is passed.
     */
    export function textDisplayGetObservers(theDisplay: textdisplay): table;

    /**
     * This function checks if a player can see the specified [[textdisplay]].
     * @see {@link https://wiki.multitheftauto.com/wiki/textDisplayIsObserver|MTASA Wiki}
     * @param display : The textdisplay.
     * @param thePlayer : The player.
     * @return Return true if [[textdisplay]] is showing, or false if not.
     */
    export function textDisplayIsObserver(display: textdisplay, thePlayer: player): boolean;

    /**
     * This function removes a [[player]] observer of a [[textdisplay]]. This stops the [[player]] from being able to see [[textitem]]s that the [[textdisplay]] contains.
     * @see {@link https://wiki.multitheftauto.com/wiki/textDisplayRemoveObserver|MTASA Wiki}
     * @param display : The textdisplay to remove the player from as an observer.
     * @param playerToRemove : The player that should be removed from the textdisplay.
     * @return
     */
    export function textDisplayRemoveObserver(display: textdisplay, playerToRemove: player): boolean;

    /**
     * This function removes a [[textitem]] from a [[textdisplay]]. This stops any observers of the [[textdisplay]] from being able to see the [[textitem]].
     * @see {@link https://wiki.multitheftauto.com/wiki/textDisplayRemoveText|MTASA Wiki}
     * @param displayToRemoveFrom : The textdisplay to remove the textitem from.
     * @param itemToRemove : The textitem to remove from the display.
     * @return
     */
    export function textDisplayRemoveText(displayToRemoveFrom: textdisplay, itemToRemove: textitem): void;

    /**
     * This function allows you to retrieve the color of a text item.
     * @see {@link https://wiki.multitheftauto.com/wiki/textItemGetColor|MTASA Wiki}
     * @param theTextItem The text item you wish to retrieve the color of.
     * @return Returns four integers in RGBA format, with a maximum value of 255 for each. The values are, in order, ''red'', ''green'', ''blue'', and ''alpha''. Alpha decides transparency where 255 is opaque and 0 is transparent. ''false'' is returned if the text item is invalid.
     */
    export function textItemGetColor(theTextItem: textitem): LuaMultiReturn<[number, number, number, number]>;

    /**
     * This function allows retrieval of the position of a text item.
     * @see {@link https://wiki.multitheftauto.com/wiki/textItemGetPosition|MTASA Wiki}
     * @param theTextItem The textitem you wish to retrieve the position of
     * @return Returns two floats of the ''x'' and ''y'' position on the screen, where the maximum value is 1.0.
     */
    export function textItemGetPosition(theTextItem: textitem): LuaMultiReturn<[number, number]>;

    /**
     * This function retrieves the priority of a text item.  Priority defines the rate at whihc a text item is updated
     * @see {@link https://wiki.multitheftauto.com/wiki/textItemGetPriority|MTASA Wiki}
     * @param textitemToCheck The text item you wish to retrieve the priority of.
     * @return Returns a integer of the priority of a text item, 0 = low, 1 = medium, 2 = high.
     */
    export function textItemGetPriority(textitemToCheck: textitem): number;

    /**
     * This function allows retrieval of the scale or size of a text item.
     * @see {@link https://wiki.multitheftauto.com/wiki/textItemGetScale|MTASA Wiki}
     * @param theTextitem The text item you wish to retrieve the scale of
     * @return Returns a floating point of the scale of the text. 1.0 is around 12pt.
     */
    export function textItemGetScale(theTextitem: textitem): number;

    /**
     * This function returns the current text of the specified [[textitem]].
     * @see {@link https://wiki.multitheftauto.com/wiki/textItemGetText|MTASA Wiki}
     * @param theTextitem A valid textitem.
     * @return Returns a [[string]] containing the text if the function was successful, ''false'' otherwise.
     */
    export function textItemGetText(theTextitem: textitem): string;

    /**
     * This function sets the color of a text item.
     * @see {@link https://wiki.multitheftauto.com/wiki/textItemSetColor|MTASA Wiki}
     * @param theTextItem The textitem you wish to set the color of.
     * @return Returns ''true'' if the color was successfully set, ''false'' otherwise.
     */
    export function textItemSetColor(theTextItem: textitem, r: number, g: number, b: number, a: number): boolean;

    /**
     * This function allows the setting of the position of a text item.
     * @see {@link https://wiki.multitheftauto.com/wiki/textItemSetPosition|MTASA Wiki}
     * @param theTextItem The text item that you want to move
     * @param x A floating point number between 0.0 and 1.0 indicating how far across the screen the text should be shown, as a percentage of the width, from the left hand side.
     * @param y A floating point number between 0.0 and 1.0 indicating how far down the screen the text should be shown, as a percentage of the height, from the top.
     * @return Returns ''true'' if the position was successfully set, ''false'' otherwise.
     */
    export function textItemSetPosition(theTextItem: textitem, x: number, y: number): boolean;

    /**
     * This function sets the priority for a text item.  Priority is the importance of sending updated text to the client. The system is implemented as 3 queues, with the ''high'' queue being emptied before the ''medium'' queue is processed, and with one update sent per server frame. Hence, if you set all your text items to ''medium'' priority it has the same effect as if you set them all to ''high'' or ''low''.
     * @see {@link https://wiki.multitheftauto.com/wiki/textItemSetPriority|MTASA Wiki}
     * @param theTextItem The text item you wish to set priority to.
     * @param priority The priority you wish to set to the item, which can be high, medium, or low respective of their priority.
     * @return
     */
    export function textItemSetPriority(theTextItem: textitem, priority: string): void;

    /**
     * This function allows the setting of the scale of a text item.
     * @see {@link https://wiki.multitheftauto.com/wiki/textItemSetScale|MTASA Wiki}
     * @param theTextitem The text item you wish to set the scale of.
     * @param scale A floating point value indicating the scale of the text you wish to set to. 1.0 is around 12pt.
     * @return Returns ''true'' if the scale was successfully set, ''false'' otherwise.
     */
    export function textItemSetScale(theTextitem: textitem, scale: number): boolean;

    /**
     * Overwrites a previously created text item with the specified text.
     * @see {@link https://wiki.multitheftauto.com/wiki/textItemSetText|MTASA Wiki}
     * @param theTextitem An existing text item that was previously created with textCreateTextItem
     * @param text The new text for the text item
     * @return
     */
    export function textItemSetText(theTextitem: textitem, text: string): void;

    /**
     * This function retrieves server settings which are usually stored in the '''mtaserver.conf''' file.
     * Available in 1.1 and onwards
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/getServerConfigSetting|MTASA Wiki}
     * @return Returns a string containing the current value for the named setting, or ''false'' if the setting does not exist.<br>
     * * If the setting name is ''serverip'', may return the string ''"auto"'' on local servers.
     */
    export function getServerConfigSetting(name: string): string;

    /**
     * This function sets server settings which are stored in the [[Server mtaserver.conf|mtaserver.conf]] file.
     * @see {@link https://wiki.multitheftauto.com/wiki/setServerConfigSetting|MTASA Wiki}
     * @param value The value of the setting
     * @param bSave Set to true to make the setting permanent, or false for use only until the next server restart.
     * @default false
     * @return Returns ''true'' if the setting was successfully set, or ''false'' otherwise.
     */
    export function setServerConfigSetting(name: string, value: string, bSave?: boolean): boolean;

    /**
     * This function decrypts given [https://en.wikipedia.org/wiki/Base64 base64] representation of encrypted data using the [https://en.wikipedia.org/wiki/Tiny_Encryption_Algorithm Tiny Encryption Algorithm].
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/teaDecode|MTASA Wiki}
     * @param data The block of data you want to decrypt
     * @param key The key that should be used for decryption (Only first 16 characters are used)
     * @return Returns string containing the decrypted data if the decryption process was successfully completed, ''false'' otherwise.
     */
    export function teaDecode(data: string, key: string): string;

    /**
     * This functions performs the [https://en.wikipedia.org/wiki/Tiny_Encryption_Algorithm Tiny Encryption Algorithm] on the given string and returns the [https://en.wikipedia.org/wiki/Base64 base64] representation of the encrypted string.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/teaEncode|MTASA Wiki}
     * @param text The string you want to encrypt. (See second example if you want to encode binary data)
     * @param key The key that should be used for encryption (Only first 16 characters are used)
     * @return Returns the [https://en.wikipedia.org/wiki/Base64 base64] representation of the encrypted string if the encryption process was successfully completed, ''false'' otherwise.
     */
    export function teaEncode(text: string, key: string): string;

    /**
     * This function adds sirens to a vehicle.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/addVehicleSirens|MTASA Wiki}
     * @param theVehicle The vehicle to add sirens
     * @param sirenCount The amount of siren points on the vehicle (8 maximum)
     * @param sirenType An integer between 1 and 6 (1: invisible, 2: single, 3+: dual)
     * @param flag360 Visible from all directions (applies to single type only)
     * @default false
     * @param checkLosFlag Check line of sight between camera and light so it wont draw if blocked
     * @default true
     * @param useRandomiser Randomise the light order, false for sequential
     * @param silentFlag If you want the siren to be silent set this to true
     * @default false
     * @return Returns ''true'' if sirens were successfully added to the vehicle, ''false'' otherwise.
     */
    export function addVehicleSirens(theVehicle: vehicle, sirenCount: number, sirenType: number, flag360?: boolean, checkLosFlag?: boolean, useRandomiser?: boolean, silentFlag?: boolean): boolean;

    /**
     * This function returns a table containing the handling data of the specified vehicle model.
     * Note: the data returned may not reflect the actual handling of a particular vehicle, since this may be overriden by the [[setVehicleHandling]] function.
     * @see {@link https://wiki.multitheftauto.com/wiki/getModelHandling|MTASA Wiki}
     * @param modelId the vehicle model you wish to get the handling data of.
     * @return Returns a ''table'' containing all the handling data, ''false'' if an invalid vehicle model is specified. Here is a list of valid table properties and what they return:
     * * {{Handling Properties}}
     */
    export function getModelHandling(modelId: number): table;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleRespawnPosition|MTASA Wiki}
     * @param theVehicle The vehicle which youd like to retrieve the respawn coordinates of.
     * @return Returns three [[float|floats]] indicating the respawn coordinates of the [[vehicle]], ''x'', ''y'' and ''z'' respectively.
     */
    export function getVehicleRespawnPosition(theVehicle: element): LuaMultiReturn<[number, number, number]>;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehicleRespawnRotation|MTASA Wiki}
     * @param theVehicle The vehicle which youd like to retrieve the respawn rotation of.
     * @return Returns three [[float|floats]] indicating the respawn rotation of the [[vehicle]], ''x'', ''y'' and ''z'' respectively.
     */
    export function getVehicleRespawnRotation(theVehicle: element): LuaMultiReturn<[number, number, number]>;

    /**
     * This function scans through all the current vehicles and returns the ones matching the given model.
     * @see {@link https://wiki.multitheftauto.com/wiki/getVehiclesOfType|MTASA Wiki}
     * @param model : The model of vehicles you want.
     * @return Returns a table of existing vehicles matching the specified model.
     */
    export function getVehiclesOfType(model: number): table;

    /**
     * This function removes sirens from a vehicle.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/removeVehicleSirens|MTASA Wiki}
     * @param theVehicle The vehicle to remove the sirens of
     * @return Returns ''true'' if sirens were successfully removed from the vehicle, ''false'' otherwise.
     */
    export function removeVehicleSirens(theVehicle: vehicle): boolean;

    /**
     * Resets the vehicle explosion time. This is the point in time at which the vehicle last exploded: at this time plus the vehicle's respawn delay, the vehicle is respawned. You can use this function to prevent the vehicle from respawning.
     * @see {@link https://wiki.multitheftauto.com/wiki/resetVehicleExplosionTime|MTASA Wiki}
     * @param theVehicle The vehicle you wish to reset the explosion time from.
     * @return Returns ''true'' if the vehicle explosion time has been reset, ''false'' if it failed to reset the explosion time.
     */
    export function resetVehicleExplosionTime(theVehicle: vehicle): boolean;

    /**
     * Resets the vehicle idle time
     * @see {@link https://wiki.multitheftauto.com/wiki/resetVehicleIdleTime|MTASA Wiki}
     * @param theVehicle The vehicle you wish to reset the idle time from.
     * @return Returns ''true'' if the vehicle idle time has been reset, ''false'' if it failed to reset the idle time.
     */
    export function resetVehicleIdleTime(theVehicle: vehicle): boolean;

    /**
     * This function respawns a vehicle according to its set respawn position, set by [[setVehicleRespawnPosition]] or the position and rotation it was created on. To spawn a vehicle to a specific location just once, [[spawnVehicle]] can be used.
     * @see {@link https://wiki.multitheftauto.com/wiki/respawnVehicle|MTASA Wiki}
     * @param theVehicle The vehicle you wish to respawn
     * @return Returns ''true'' if the vehicle respawned successfully, ''false'' if the passed argument does not exist or is not a vehicle.
     */
    export function respawnVehicle(theVehicle: vehicle): boolean;

    /**
     * This function is used to change the handling data of all vehicles of a specified model.
     * @see {@link https://wiki.multitheftauto.com/wiki/setModelHandling|MTASA Wiki}
     * @param modelId The Vehicle_IDs|vehicle model you wish to set the handling of.
     * @param property The property you wish to set the handling of the vehicle to, or nil if you want to reset the all the handling properties.
     * @param value The value of the modelss handling property you wish to set, or nil if you want to reset the handling property to its default value.
     * @return Returns ''true'' if the handling was set successfully, ''false'' otherwise.
     */
    export function setModelHandling(modelId: number, property: string, value: any): boolean;

    /**
     * This function sets the time delay (in milliseconds) the vehicle will remain at its position while empty.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleIdleRespawnDelay|MTASA Wiki}
     * @param theVehicle : The vehicle you wish to change the respawn delay of.
     * @param timeDelay : The number of milliseconds the vehicle will be allowed to remain unused until it respawns.
     * @return Returns ''true'' if the vehicle was found and edited.
     */
    export function setVehicleIdleRespawnDelay(theVehicle: vehicle, timeDelay: number): boolean;

    /**
     * This function sets the time delay (in milliseconds) the vehicle will remain wrecked before respawning.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleRespawnDelay|MTASA Wiki}
     * @param theVehicle : The vehicle you wish to change the respawn delay of.
     * @param timeDelay : The amount of milliseconds to delay.
     * @return Returns ''true'' if the vehicle was found and edited.
     */
    export function setVehicleRespawnDelay(theVehicle: vehicle, timeDelay: number): boolean;

    /**
     * This function sets the position (and rotation) the vehicle will respawn to.
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleRespawnPosition|MTASA Wiki}
     * @param theVehicle : The vehicle you wish to change the respawn position of.
     * @param x : A floating point number representing the X coordinate on the map.
     * @param y : A floating point number representing the Y coordinate on the map.
     * @param z : A floating point number representing the Z coordinate on the map.  {{OptionalArg}}
     * @param rx : A floating point number representing the rotation about the X axis in Degrees.
     * @param ry : A floating point number representing the rotation about the Y axis in Degrees.
     * @param rz : A floating point number representing the rotation about the Z axis in Degrees.
     * @return Returns ''true'' if the vehicle was found and edited, ''false'' otherwise.
     */
    export function setVehicleRespawnPosition(theVehicle: vehicle, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number): boolean;

    /**
     * This function sets the rotation the vehicle will respawn to.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setVehicleRespawnRotation|MTASA Wiki}
     * @param theVehicle : The vehicle you wish to change the respawn position of.
     * @param rx : A float representing the rotation about the X axis in degrees.
     * @param ry : A float representing the rotation about the Y axis in degrees.
     * @param rz : A float representing the rotation about the Z axis in degrees.
     * @return Returns ''true'' if the [[vehicle]] respawn rotation was set successfully, ''false'' otherwise.
     */
    export function setVehicleRespawnRotation(theVehicle: vehicle, rx: number, ry: number, rz: number): boolean;

    /**
     * Spawns a vehicle at any given position and rotation
     * @see {@link https://wiki.multitheftauto.com/wiki/spawnVehicle|MTASA Wiki}
     * @param theVehicle The vehicle you wish to spawn
     * @param x The x position you wish to spawn the vehicle at
     * @param y The x position you wish to spawn the vehicle at
     * @param z The x position you wish to spawn the vehicle at  {{OptionalArg}}
     * @param rx The x rotation you wish to spawn the vehicle at
     * @param ry The y rotation you wish to spawn the vehicle at
     * @param rz The z rotation you wish to spawn the vehicle at
     * @return Returns ''true'' if the vehicle spawned successfully, ''false'' if the passed argument does not exist or is not a vehicle.
     */
    export function spawnVehicle(theVehicle: vehicle, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number): boolean;

    /**
     * This function toggles whether or not the vehicle will be respawned after blown or idle.
     * @see {@link https://wiki.multitheftauto.com/wiki/toggleVehicleRespawn|MTASA Wiki}
     * @param theVehicle : The vehicle you wish to toggle the respawning of.
     * @param Respawn : A boolean determining if the vehicle will respawn or not.
     * @return Returns ''true'' if the vehicle was found and edited.
     */
    export function toggleVehicleRespawn(theVehicle: vehicle, Respawn: boolean): boolean;

    /**
     * giveWeapon gives a specified weapon to a certain player or ped. There is an optional argument to specify ammunition. For example, a melee weapon doesn't need an ammo argument.
     * *When setting ammo for [[Weapon|weapons in slot]] 0,1,10,11 or 12, the ammo max is 1
     * *When setting ammo for [[Weapon|weapons in slot]] 3,4,5, the ammo is added
     * *When setting ammo for [[Weapon|weapons in slot]] 2,6,7,8,9 and the slot weapon is changing, the ammo is replaced
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/giveWeapon|MTASA Wiki}
     * @param thePlayer A player or ped object referencing the specified player (or ped)
     * @param weapon A whole number integer that refers to a Weapon ID. Click Weapon|here for a list of possible weapon IDs.  {{OptionalArg}}
     * @param ammo A whole number integer serving as the ammo amount for the given weapon.  For weapons that do not require ammo, such as melee, this should be at least 1.
     * @default 30
     * @param setAsCurrent A boolean value determining whether or not the weapon will be set as the players current.
     * @default false
     * @return Returns ''true'' if weapon was successfully acquired, ''false'' otherwise.
     */
    export function giveWeapon(thePlayer: ped, weapon: number, ammo?: number, setAsCurrent?: boolean): boolean;

    /**
     * This function removes every weapons from a specified [[ped]], rendering it unarmed.
     * @see {@link https://wiki.multitheftauto.com/wiki/takeAllWeapons|MTASA Wiki}
     * @param thePed : A ped element referencing the specified ped
     * @return Returns ''true'' if the function succeeded, ''false'' otherwise.
     */
    export function takeAllWeapons(thePed: ped): boolean;

    /**
     * This function removes a specified weapon or ammo from a certain player's inventory.
     * @see {@link https://wiki.multitheftauto.com/wiki/takeWeapon|MTASA Wiki}
     * @param thePlayer : A player object referencing the specified player.
     * @param weaponId : An integer that refers to a weapon that you wish to remove.
     * @param ammo : If used, this amount of ammo will be taken instead and the weapon will not be removed.
     * @return Returns a ''true'' if the weapon/ammo was removed successfully, ''false'' otherwise.
     */
    export function takeWeapon(thePlayer: player, weaponId: number, ammo?: number): boolean;

    /**
     * This function checks if a weapon is usable while on a Jetpack.
     * @see {@link https://wiki.multitheftauto.com/wiki/getJetpackWeaponEnabled|MTASA Wiki}
     * @param weapon The weapon thats being checked if its usable on a Jetpack.
     * @return Returns true if the weapon is enabled, else false if the weapon isn't or invalid arguments are passed.
     */
    export function getJetpackWeaponEnabled(weapon: string): boolean;

    /**
     * This function sets a weapon usable while using the Jetpack.
     * @see {@link https://wiki.multitheftauto.com/wiki/setJetpackWeaponEnabled|MTASA Wiki}
     * @param weapon The weapon thats being set usable on a Jetpack. Names can be: (Case is ignored)  {{All Weapon Types}}
     * @param enabled A bool representing whether the weapon is enabled or disabled.
     * @return Returns true, else false if invalid arguments are passed.
     */
    export function setJetpackWeaponEnabled(weapon: string, enabled: boolean): boolean;

    /**
     * This function plays a frontend sound for the specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/playSoundFrontEnd|MTASA Wiki}
     * @param thePlayer the player you want the sound to play for.
     * @param sound a whole int specifying the sound id to play. Valid values are:  {{Sounds}}
     * @return Returns ''true'' if the sound was successfully played, ''false'' otherwise.
     */
    export function playSoundFrontEnd(thePlayer: player, sound: number): boolean;

    /**
     * This function creates a [[blip]] [[element]], which is displayed as an icon on the client's radar.
     * @see {@link https://wiki.multitheftauto.com/wiki/createBlip|MTASA Wiki}
     * @return Returns an [[element]] of the [[blip]] if it was created successfully, ''false'' otherwise.
     */
    export function createBlip(x: number, y: number, z: number, icon?: number, size?: number, r?: number, g?: number, b?: number, a?: number, ordering?: number, visibleDistance?: number, visibleTo?: element): blip;

    /**
     * This function creates a [[blip]] that is attached to an [[element]]. This blip is displayed as an icon on the client's radar and will 'follow' the element that it is attached to around.
     * @see {@link https://wiki.multitheftauto.com/wiki/createBlipAttachedTo|MTASA Wiki}
     * @return Returns a [[blip]] if the blip was created succesfully, or ''false'' otherwise.
     */
    export function createBlipAttachedTo(elementToAttachTo: element, icon?: number, size?: number, r?: number, g?: number, b?: number, a?: number, ordering?: number, visibleDistance?: number, visibleTo?: element): blip;

    /**
     * This function will fade a player's camera to a color or back to normal over a specified time period. This will also affect the sound volume for the player (50% faded = 50% volume, full fade = no sound). For clientside scripts you can perform 2 fade ins or fade outs in a row, but for serverside scripts you must use one then the other.
     * @see {@link https://wiki.multitheftauto.com/wiki/fadeCamera|MTASA Wiki}
     * @param thePlayer The player whose camera you wish to fade.
     * @param fadeIn Should the camera be faded in or out? Pass true to fade the camera in, false to fade it out to a color.
     * @param timeToFade The number of seconds it should take to fade.
     * @default 1.0
     * @param red The amount of red in the color that the camera fades out to (0 - 255). Not required for fading in.
     * @default 0
     * @param green The amount of green in the color that the camera fades out to (0 - 255). Not required for fading in.
     * @default 0
     * @param blue The amount of blue in the color that the camera fades out to (0 - 255). Not required for fading in.
     * @default 0
     * @return Returns ''true'' if the camera was faded successfully, ''false'' if invalid arguments were passed to the function.
     */
    export function fadeCamera(thePlayer: player, fadeIn: boolean, timeToFade: number, red: number, green: number, blue: number): boolean;

    /**
     * Returns the interior of the local camera (independent of the interior of the local player).
     * @see {@link https://wiki.multitheftauto.com/wiki/getCameraInterior|MTASA Wiki}
     * @param thePlayer : The player whose camera interior you want to get.
     * @return Returns an ''integer'' indicating the camera's interior, ''false'' if the argument is invalid.
     */
    export function getCameraInterior(thePlayer: player): number;

    /**
     * This function gets the position of the camera and the position of the point it is facing.
     * @see {@link https://wiki.multitheftauto.com/wiki/getCameraMatrix|MTASA Wiki}
     * @param thePlayer The player whose camera matrix is to be returned.
     * @return This function returns 8 [[float|floats]] if the argument is valid (when applicable); the first three indicate the position of the camera, the next three indicate the position of the point it's facing, and the last two are the roll and field of view. Returns ''false'' if the argument is invalid.
     */
    export function getCameraMatrix(thePlayer: player): LuaMultiReturn<[number, number, number, number, number, number, number, number]>;

    /**
     * This function returns an [[element]] that corresponds to the current target of the specified player's camera (i.e. what it is following).
     * @see {@link https://wiki.multitheftauto.com/wiki/getCameraTarget|MTASA Wiki}
     * @param thePlayer The player whose camera you wish to receive the target of.
     * @return * Returns an [[element]] of the target if the function was successful, or ''false'' if bad arguments were specified
     * * {{New feature|3|1.0|
     * * * Returns ''false'' if the camera is in Fixed mode and has no target.
     * * }}
     */
    export function getCameraTarget(thePlayer: player): element;

    /**
     * Sets the interior of the local camera. Only the interior of the camera is changed, the local player stays in the interior he was in.
     * @see {@link https://wiki.multitheftauto.com/wiki/setCameraInterior|MTASA Wiki}
     * @param thePlayer the player whose camera interior will be set.
     * @param interior the interior to place the camera in.
     * @return Returns ''true'' if the camera's interior was changed successfully, ''false'' otherwise.
     */
    export function setCameraInterior(thePlayer: player, interior: number): boolean;

    /**
     * This function sets the camera's position and direction. The first three arguments are the point at which the camera lies, the last three are the point the camera faces (or the point it "looks at").
     * @see {@link https://wiki.multitheftauto.com/wiki/setCameraMatrix|MTASA Wiki}
     * @param thePlayer The player whose camera is to be changed.
     * @param positionX The x coordinate of the cameras position.
     * @param positionY The y coordinate of the cameras position.
     * @param positionZ The z coordinate of the cameras position.
     * @param lookAtX The x coordinate of the point the camera faces.
     * @param lookAtY The y coordinate of the point the camera faces.
     * @param lookAtZ The z coordinate of the point the camera faces.
     * @param roll The camera roll angle, -180 to 180. A value of 0 means the camera sits straight, positive values will turn it counter-clockwise and negative values will turn it clockwise. -180 or 180 means the camera is upside down.
     * @default 0
     * @param fov the field of view angle, 0.01 to 180. The higher this value is, the more you will be able to see what is to your sides.
     * @default 70
     * @return Returns ''true'' if the arguments are valid, ''false'' otherwise.
     */
    export function setCameraMatrix(thePlayer: player, positionX: number, positionY: number, positionZ: number, lookAtX?: number, lookAtY?: number, lookAtZ?: number, roll?: number, fov?: number): boolean;

    /**
     * This function allows you to set a player's camera to follow other elements instead. Currently supported element type is:
     * *[[Player]]s
     * @see {@link https://wiki.multitheftauto.com/wiki/setCameraTarget|MTASA Wiki}
     * @param thePlayer The player whose camera you wish to modify.
     * @param target The player who you want the camera to follow. If none is specified, the camera will target the player.
     * @default nil
     * @return Returns ''true'' if the function was successful, ''false'' otherwise.
     */
    export function setCameraTarget(thePlayer: player, target?: player): boolean;

    /**
     * This function is used to determine whether or not a player's cursor is showing.
     * @see {@link https://wiki.multitheftauto.com/wiki/isCursorShowing|MTASA Wiki}
     * @param thePlayer The player you want to get cursor state of.
     * @return Returns ''true'' if the player's cursor is showing, ''false'' if it isn't or if invalid parameters were passed.
     */
    export function isCursorShowing(thePlayer: player): boolean;

    /**
     * This function is used to show or hide a [[player]]'s cursor.
     * @see {@link https://wiki.multitheftauto.com/wiki/showCursor|MTASA Wiki}
     * @param thePlayer The player you want to show or hide the cursor of.
     * @param show A boolean value determining whether to show (true) or hide (false) the cursor.  {{OptionalArg}}
     * @param toggleControls A boolean value determining whether to disable controls whilst the cursor is showing.  true implies controls are disabled, false implies controls remain enabled.
     * @default true
     * @return Returns ''true'' if the player's cursor was shown or hidden successfully, ''false'' otherwise.
     */
    export function showCursor(thePlayer: player, show: boolean, toggleControls: boolean): boolean;

    /**
     * This function is used to retrieve a list of all elements of the specified type. This can be useful, as it disregards ''where'' in the element tree it is. It can be used with either the built in types (listed below) or with any custom type used in a .map file. For example, if there is an element of type "flag" (e.g. <flag />) in the .map file, the using "flag" as the type argument would find it.
     * @see {@link https://wiki.multitheftauto.com/wiki/getElementsByType|MTASA Wiki}
     * @return Returns a ''table'' containing all the elements of the specified type. Returns an empty ''table'' if there are no elements of the specified type. Returns ''false'' if the string specified is invalid (or not a string).
     */
    export function getElementsByType(theType: string, startat: element): table;

    /**
     * This function stores [[element data]] under a certain key, attached to an element. Element data set using this is then synced with all clients and the server. The data can contain server created elements, but you should avoid passing data that is not able to be synced such as xmlnodes, acls, aclgroups etc.
     * As element data is synced to all clients, it can generate a lot of network traffic and be heavy on performance. Events are much more efficient for sending data from a client to the server only, or from the server to a specific client. <br/>
     * Usage of element data should be disencouraged where your goal can be achieved with events like above, and [[table|tables]] for storing and retrieving data.
     * Note this mode only works when setting element data serverside. Setting data clientside still sends the update to all clients if 'synchronize' is set to true.
     * }}
     * @see {@link https://wiki.multitheftauto.com/wiki/setElementData|MTASA Wiki}
     * @param theElement The element you wish to attach the data to.
     * @param key The key you wish to store the data under. (Maximum 31 characters.)
     * @param value The value you wish to store. See element data for a list of acceptable datatypes.
     * @param syncMode Synchronisation mode.
     * @default "broadcast"
     * @return Returns ''true'' if the data was set succesfully, ''false'' otherwise.
     * * {{New items|5.0157|1.5.7-9.20477|
     */
    export function setElementData(theElement: element, key: string, value: any, syncMode?: any): boolean;

    /**
     * This function is used to stop the automatic internal handling of events, for example this can be used to prevent an item being given to a player when they walk over a pickup, by canceling the [[onPickupUse]] event.
     * [[cancelEvent]] does not have an effect on all events, see the individual event's pages for information on what happens when the event is canceled. [[cancelEvent]] does not stop further event handlers from being called, as the order of event handlers being called is undefined in many cases. Instead, you can see if the currently active event has been cancelled using [[wasEventCancelled]].
     * The use of cancelEvent outside of an event handler has no effect.
     * If you implement your own custom events and want to handle them being cancelled, you should call [[wasEventCancelled]] to check after your call to [[triggerEvent]].
     * @see {@link https://wiki.multitheftauto.com/wiki/cancelEvent|MTASA Wiki}
     * @return Always returns ''true''.
     */
    export function cancelEvent(cancel: boolean, reason: string): boolean;

    /**
     * Stops a latent event from completing
     * @see {@link https://wiki.multitheftauto.com/wiki/cancelLatentEvent|MTASA Wiki}
     * @param thePlayer The player who is receiving the event.
     * @param handle A handle previous got from getLatentEventHandles.
     * @return Returns a true if the latent event was successfully cancelled, or false if it was not
     */
    export function cancelLatentEvent(thePlayer: player, handle: number): boolean;

    /**
     * Gets the currently queued latent events. The last one in the table is always the latest event queued. Each returned handle can be used with [[getLatentEventStatus]] or [[cancelLatentEvent]]
     * @see {@link https://wiki.multitheftauto.com/wiki/getLatentEventHandles|MTASA Wiki}
     * @param thePlayer The player who is receiving the events.
     * @return Returns a table of handles or false if invalid arguments were passed.
     */
    export function getLatentEventHandles(thePlayer: player): table;

    /**
     * Gets the status of one queued latent event.
     * @see {@link https://wiki.multitheftauto.com/wiki/getLatentEventStatus|MTASA Wiki}
     * @param thePlayer The player who is receiving the event.
     * @param handle A handle previous got from getLatentEventHandles.
     * @return Returns a table with the following info or false if invalid arguments were passed:
     * * *'''tickStart:''' A number estimating how many ticks until the data transfer starts (Negative means the transfer has already started)
     * * *'''tickEnd:''' A number estimating how many ticks until the data transfer completes
     * * *'''totalSize:''' A number representing how many bytes in total this transfer will transfer
     * * *'''percentComplete:''' A number between 0-100 saying how much is done
     */
    export function getLatentEventStatus(thePlayer: player, handle: number): table;

    /**
     * Creates an explosion of a certain type at a specified point in the world. If creator is specified, the explosion will occur only in its dimension.
     * @see {@link https://wiki.multitheftauto.com/wiki/createExplosion|MTASA Wiki}
     * @param x a float value that specifies the X world coordinate where the explosion is created at.
     * @param y a float value that specifies the Y world coordinate where the explosion is created at.
     * @param z a float value that specifies the Z world coordinate where the explosion is created at.
     * @param theType an integer specifying the explosion type. Valid types are:  {{Explosions}}
     * @param creator the explosions simulated creator, the player responsible for it.
     * @default nil
     * @return *''true'' if the explosion was created.
     * * * ''false'' if invalid parameters were passed.
     */
    export function createExplosion(x: number, y: number, z: number, theType: number, creator?: player): boolean;

    /**
     * This function will attach a scripting function (handler) to a console command, so that whenever a player or administrator uses the command the function is called.
     * Multiple command handlers can be attached to a single command, and they will be called in the order that the handlers were attached. Equally, multiple commands can be handled by a single function, and the ''commandName'' parameter used to decide the course of action.
     * For users, a command is in the format:
     * ''commandName'' ''argument1'' ''argument2''
     * This can be triggered from the player's console or directly from the chat box by prefixing the message with a forward slash (''/''). For server side handlers, the server admin is also able to trigger these directly from the server's console in the same way as they are triggered from a player's console.
     * @see {@link https://wiki.multitheftauto.com/wiki/addCommandHandler|MTASA Wiki}
     * @param commandName This is the name of the command you wish to attach a handler to. This is what must be typed into the console to trigger the function.
     * @param handlerFunction This is the function that you want the command to trigger, which has to be defined before you add the handler. This function can take two parameters, playerSource and commandName, followed by as many parameters as you expect after your command (see below). These are all optional.  {{OptionalArg}}
     * @param restricted Specify whether or not this command should be restricted by default. Use this on commands that should be inaccessible to everyone as default except special users specified in the ACL (Access Control List). This is to make sure admin commands such as ie. punish wont be available to everyone if a server administrator forgets masking it in ACL. Make sure to add the command to your ACL under the proper group for it to be usefull (i.e <right name=command.killEveryone access=true></right>). This argument defaults to false if nothing is specified.  {{New feature|3|1.0|
     * @default false
     * @param caseSensitive Specifies if the command handler will ignore the case for this command name.  }}
     * @default true
     * @return Returns ''true'' if the command handler was added successfully, ''false'' otherwise.
     */
    export function addCommandHandler(commandName: string, handlerFunction: HandleFunction, restricted?: boolean, caseSensitive?: boolean): boolean;

    /**
     * Binds a player's key to a handler function or command, which will be called when the key is pressed.
     * @see {@link https://wiki.multitheftauto.com/wiki/bindKey|MTASA Wiki}
     * @param thePlayer The player you wish to bind the key of.
     * @param key The key that was pressed
     * @param keyState The state of the key that was pressed, down if it was pressed, up if it was released.
     * @param handlerFunction The function that will be triggered when the players key is pressed. This function should have the form:  :<syntaxhighlight lang="lua">function functionName ( player keyPresser, string key, string keyState, [ var arguments, ... ] )</syntaxhighlight>  :The values passed to this function are:
     * @param arguments The optional arguments you specified when calling bindKey (see below).
     * @return Returns ''true'' if the key was bound, ''false'' otherwise.
     */
    export function bindKey(thePlayer: player, key: string, keyState: string, handlerFunction: HandleFunction, arguments: any, ...args: any[]): boolean;

    /**
     * This function will call all the attached functions of an existing console command, for a specified player.
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/executeCommandHandler|MTASA Wiki}
     * @param commandName The name of the command you wish to execute. This is what must be typed into the console to trigger the function.
     * @param thePlayer The player that will be presented as executer of the command to the handler function(s) of the command.  {{OptionalArg}}
     * @param args Additional parameters that will be passed to the handler function(s) of the command that is called, separated by spaces.
     * @return Returns ''true'' if the command handler was called successfully, ''false'' otherwise.
     */
    export function executeCommandHandler(commandName: string, thePlayer: player, args: string): boolean;

    /**
     * Gets the functions bound to a key. To bind a function to a key use the [[bindKey]] function
     * @see {@link https://wiki.multitheftauto.com/wiki/getFunctionsBoundToKey|MTASA Wiki}
     * @param thePlayer The player to get the functions from a key.
     * @param keyState A string that has one of the following values:
     * @return Returns a table of the key function(s).
     */
    export function getFunctionsBoundToKey(thePlayer: player, key: string, keyState: string): table;

    /**
     * getKeyBoundToFunction allows retrieval of the first key bound to a function.
     * @see {@link https://wiki.multitheftauto.com/wiki/getKeyBoundToFunction|MTASA Wiki}
     * @param thePlayer The player you are checking the function bound to a key
     * @param theFunction The function in which you would like to check the bound key
     * @return Returns a string of the first key the function was bound to.
     */
    export function getKeyBoundToFunction(thePlayer: player, theFunction: HandleFunction): string;

    /**
     * Checks whether a GTA control is enabled or disabled for a certain player.
     * @see {@link https://wiki.multitheftauto.com/wiki/isControlEnabled|MTASA Wiki}
     * @param thePlayer The player you wish the control status of.
     * @param control The control you wish to check. See control names for a list of possible controls.
     * @return Returns ''true'' if control is enabled, ''false'' otherwise.
     */
    export function isControlEnabled(thePlayer: player, control: string): boolean;

    /**
     * Enables or disables the use of all GTA controls for a specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/toggleAllControls|MTASA Wiki}
     * @param thePlayer The player you wish to toggle the control ability of.
     * @param enabled A boolean value representing whether or not the controls will be usable.  {{OptionalArg}}
     * @param gtaControls A boolean deciding whether the enabled parameter will affect GTAs internal controls.
     * @default true
     * @param mtaControls A boolean deciding whether the enabled parameter will affect MTAs own controls., e.g. chatbox.
     * @default true
     * @return This function returns ''true'' if controls were toggled successfully, false otherwise.
     */
    export function toggleAllControls(thePlayer: player, enabled: boolean, gtaControls: boolean, mtaControls: boolean): boolean;

    /**
     * Enables or disables the use of a GTA control for a specific player.
     * @see {@link https://wiki.multitheftauto.com/wiki/toggleControl|MTASA Wiki}
     * @param thePlayer The player you wish to toggle the control ability of.
     * @param control The control that you want to toggle the ability of. See control names for a list of possible controls.
     * @param enabled A boolean value representing whether or not the key will be usable or not.
     * @return This function ''true'' if the control was set successfully, ''false'' otherwise.
     */
    export function toggleControl(thePlayer: player, control: string, enabled: boolean): boolean;

    /**
     * Removes an existing key bind from the specified player.
     * @see {@link https://wiki.multitheftauto.com/wiki/unbindKey|MTASA Wiki}
     * @param thePlayer The player you wish to unbind the key of.
     * @param key The key you wish to unbind. See Key names for a list of valid key names.
     * @param keyState is optional in Syntax 2.
     * @return Returns '''true'' if the key was unbound, ''false'' if it was not previously bound or invalid arguments were passed to the function.
     */
    export function unbindKey(thePlayer: player, key: string, keyState: string, command: string): boolean;

    /**
     * [[Image:Mtasa_markers.png|thumb|337px|This image shows all the different marker types available using this function.]]
     * This function creates a marker. A marker is a 3D model in the world that can highlight a particular point or area, often used to instruct players where to go to perform actions such as entering buildings.
     * There are various limits that govern the maximum number of each type that can be visible at once. These are:
     * * Coronas: 32
     * * Checkpoints, Rings, Cylinders and Arrows combined: 32
     * You are able to create as many markers as you wish (memory and element limit permitting), but the player will only be able to see the nearest ones up to the limit.
     * <br><br><br><br>
     * @see {@link https://wiki.multitheftauto.com/wiki/createMarker|MTASA Wiki}
     * @param x : A floating point number representing the X coordinate on the map.
     * @param y : A floating point number representing the Y coordinate on the map.
     * @param z : A floating point number representing the Z coordinate on the map.  {{OptionalArg}}
     * @param theType : The visual type of the marker to be created. Possible values:  {{Marker_types}}
     * @default "checkpoint"
     * @param size : The diameter of the marker to be created, in meters.
     * @default 4.0
     * @param r : An integer number representing the amount of red to use in the colouring of the marker (0 - 255).
     * @default 0
     * @param g : An integer number representing the amount of green to use in the colouring of the marker (0 - 255).
     * @default 0
     * @param b : An integer number representing the amount of blue to use in the colouring of the marker (0 - 255).
     * @default 255
     * @param a : An integer number representing the amount of alpha to use in the colouring of the marker (0 - 255 where 0 is transparent and 255 is opaque).
     * @default 255
     * @param visibleTo : This defines which elements can see the marker. Defaults to visible to everyone. See visibility.
     * @default getRootElement(
     * @return Returns the [[marker]] element that was created, or ''false'' if the arguments are incorrect.
     */
    export function createMarker(x: number, y: number, z: number, theType?: string, size?: number, r?: number, g?: number, b?: number, a?: number, visibleTo?: element): marker;

    /**
     *
     * @see {@link https://wiki.multitheftauto.com/wiki/clearChatBox|MTASA Wiki}
     * @return Returns ''true'' if the player's chat was cleared successfully, ''false'' otherwise.
     */
    export function clearChatBox(clearFor: element): boolean;

    /**
     * This outputs the specified text string to the chatbox. It can be specified as a message to certain player(s) or all players.
     * It can optionally allow you to embed color changes into the string by setting the colorCoded boolean to true. This allows:
     * <syntaxhighlight lang="lua">
     * outputChatBox ( "#FF0000Hello #00FF00World", root, 255, 255, 255, true )
     * </syntaxhighlight>
     * This will display as: '''<span style='color:red;'>Hello</span> <span style='color:green'>World</span> '''
     * @see {@link https://wiki.multitheftauto.com/wiki/outputChatBox|MTASA Wiki}
     * @param text The text string that you wish to send to the chat window. If more than 256 characters it will not be showed in chat.  {{OptionalArg}}
     * @param r The amount of red in the color of the text. Default value is 231.
     * @default 231
     * @param g The amount of green in the color of the text. Default value is 217.
     * @default 217
     * @param b The amount of blue in the color of the text. Default value is 176.
     * @default 176
     * @param colorCoded A boolean value determining whether or not #RRGGBB tags should be used.  Note: The #RRGGBB format must contain capital letters a-f is not acceptable but A-F is. Default RGB values in this format are: '#E7D9B0'.
     * @default false
     * @return Returns ''true'' if the message was displayed successfully. Returns ''false'' if invalid arguments are specified.
     */
    export function outputChatBox(text: string, element?: table, r?: number, g?: number, b?: number, colorCoded?: boolean): boolean;

    /**
     * This outputs the specified text string to the console window (accessed with F8 or ~ key). It can be specified as a message to certain player(s) or all players.
     * @see {@link https://wiki.multitheftauto.com/wiki/outputConsole|MTASA Wiki}
     * @param text The text string that you wish to send to the console window
     * @param visibleTo This specifies who the chat is visible to. Any players in this element will see the chat message. See visibility.  {{Note|'''visibleTo''' can also be a Team object, in this case, the text will be visible to all the players of that team.}}
     * @default getRootElement(
     * @return
     */
    export function outputConsole(text: string, visibleTo: element): boolean;

    /**
     * This function is used to show or hide the player's chat.
     * @see {@link https://wiki.multitheftauto.com/wiki/showChat|MTASA Wiki}
     * @param thePlayer The player whose chat is to be hidden or shown.
     * @param show A boolean value determining whether to show (true) or hide (false) the chat.
     * @return Returns ''true'' if the player's chat was shown or hidden successfully, ''false'' otherwise.
     */
    export function showChat(thePlayer: player, show: boolean): boolean;

    /**
     * Creates a Ped in the GTA world.
     * @see {@link https://wiki.multitheftauto.com/wiki/createPed|MTASA Wiki}
     * @param modelid A whole integer specifying the Character_Skins|GTASA skin ID.
     * @param x A floating point number representing the X coordinate on the map.
     * @param y A floating point number representing the Y coordinate on the map.
     * @param z A floating point number representing the Z coordinate on the map.  {{OptionalArg}}
     * @param rot A floating point number representing the rotation in degrees.
     * @default 0.0
     * @param synced A boolean value representing whether or not the ped will be synced. Disabling the sync might be useful for frozen or static peds to increase the server performance.
     * @default true
     * @return Returns a ped element if it was successfully created.
     */
    export function createPed(modelid: number, x: number, y: number, z: number, rot?: number, synced?: boolean): ped;

    /**
     * This function is used to forcefully show a player's radar map.
     * @see {@link https://wiki.multitheftauto.com/wiki/forcePlayerMap|MTASA Wiki}
     * @param thePlayer : A player object referencing the specified player
     * @param forceOn : A boolean value representing whether or not the players radar map will be forced on
     * @return Returns ''true'' if the player's radar map was forced on, ''false'' otherwise.
     */
    export function forcePlayerMap(thePlayer: player, forceOn: boolean): boolean;

    /**
     * This function allows you to check the current blur level of a specified [[player]].
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerBlurLevel|MTASA Wiki}
     * @param thePlayer The player whose blur level you want to check.
     * @return Returns the player's blur level if successful, ''false'' if an invalid player was given.
     */
    export function getPlayerBlurLevel(thePlayer: player): number;

    /**
     * Returns the amount of money a player currently has.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerMoney|MTASA Wiki}
     * @param thePlayer The player you wish the retrieve the amount of money from.
     * @return Returns an integer with the amount of money the specified player has, ''false'' if the player is invalid.
     */
    export function getPlayerMoney(thePlayer: player): number;

    /**
     * This function gets a player's current wanted level. The wanted level is indicated by the amount of stars a player has on the GTA HUD.
     * @see {@link https://wiki.multitheftauto.com/wiki/getPlayerWantedLevel|MTASA Wiki}
     * @param thePlayer The player whose wanted level you wish to get
     * @return Returns an ''int'' from 0 to 6 representing the player's wanted level, ''false'' if the player does not exist.
     */
    export function getPlayerWantedLevel(thePlayer: player): number;

    /**
     * This function adds money to a [[player]]'s current money amount.  To set absolute values, [[setPlayerMoney]] can be used.<br>
     * @see {@link https://wiki.multitheftauto.com/wiki/givePlayerMoney|MTASA Wiki}
     * @param thePlayer the player you are giving the money to.
     * @param amount a positive integer number specifying the amount of money to give to the player.
     * @return Returns ''true'' if the money was added, or ''false'' if invalid parameters were passed.
     */
    export function givePlayerMoney(thePlayer: player, amount: number): boolean;

    /**
     * This function checks if the specified player's radar map has been forced on or not.
     * @see {@link https://wiki.multitheftauto.com/wiki/isPlayerMapForced|MTASA Wiki}
     * @param thePlayer A player object referencing the specified player
     * @return Returns ''true'' if the player's radar map is forced on, ''false'' otherwise.
     */
    export function isPlayerMapForced(thePlayer: player): boolean;

    /**
     * Sets the motion blur level on the clients screen. Accepts a value between 0 and 255.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerBlurLevel|MTASA Wiki}
     * @param thePlayer The player whose blur level will be changed.
     * @param level The level to set the blur to (default: 36)
     * @return
     */
    export function setPlayerBlurLevel(thePlayer: player, level: number): boolean;

    /**
     * This function will show or hide a part of the player's HUD.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerHudComponentVisible|MTASA Wiki}
     * @param thePlayer The player element for which you wish to show/hide a HUD component
     * @param component The component you wish to show or hide. Valid values are:
     * @param show Specify if the component should be shown (true) or hidden (false)
     * @return Returns ''true'' if the component was shown or hidden succesfully, ''false'' if an invalid argument was specified.
     */
    export function setPlayerHudComponentVisible(thePlayer: player, component: string, show: boolean): boolean;

    /**
     * Sets a player's money to a certain value, regardless of current player money. It should be noted that setting negative values does not work and in fact gives the player large amounts of money.
     * @see {@link https://wiki.multitheftauto.com/wiki/setPlayerMoney|MTASA Wiki}
     * @param thePlayer Which player to set the money of.
     * @param amount A whole integer specifying the new amount of money the player will have.  {{OptionalArg}}  {{New items|3.0140|1.4|
     * @param instant If set to true money will be set instantly without counting up/down like in singleplayer.}}
     * @default false
     * @return Returns ''true'' if the money was added, or ''false'' if invalid parameters were passed.
     */
    export function setPlayerMoney(thePlayer: player, amount: number, instant?: boolean): boolean;

    /**
     * This function subtracts money from a [[player]]'s current money amount.
     * @see {@link https://wiki.multitheftauto.com/wiki/takePlayerMoney|MTASA Wiki}
     * @param thePlayer the player you are taking the money from.
     * @param amount an integer number specifying the amount of money to take from the player.
     * @return Returns ''true'' if the money was taken, or ''false'' if invalid parameters were passed.
     */
    export function takePlayerMoney(thePlayer: player, amount: number): boolean;

    /**
     * This function can be used to detonate a players satchels.
     * @see {@link https://wiki.multitheftauto.com/wiki/detonateSatchels|MTASA Wiki}
     * @return Returns ''true'' if successful, ''false'' otherwise.
     */
    export function detonateSatchels(Player: player): boolean;

    /**
     * This function returns network status information.
     * @see {@link https://wiki.multitheftauto.com/wiki/getNetworkStats|MTASA Wiki}
     * @return Returns a table, the indexes in the table are the following:
     * * * '''bytesReceived''' - Total number of bytes received since the connection was started
     * * * '''bytesSent''' - Total number of bytes sent since the connection was started
     * * * '''packetsReceived''' - Total number of packets received since the connection was started
     * * * '''packetsSent''' - Total number of packets sent since the connection was started
     * * * '''packetlossTotal''' - (0-100) Total packet loss percentage of sent data, since the connection was started
     * * * '''packetlossLastSecond''' - (0-100) Packet loss percentage of sent data, during the previous second
     * * * '''messagesInSendBuffer'''
     * * * '''messagesInResendBuffer''' - Number of packets queued to be resent (due to packet loss)
     * * * '''isLimitedByCongestionControl'''
     * * * '''isLimitedByOutgoingBandwidthLimit'''
     * * * '''encryptionStatus'''
     */
    export function getNetworkStats(thePlayer: element): table;

    /**
     * This function will blow up a vehicle. This will cause an explosion and will kill the driver and any passengers inside it.
     * @see {@link https://wiki.multitheftauto.com/wiki/blowVehicle|MTASA Wiki}
     * @param vehicleToBlow the vehicle that you wish to blow up.  {{OptionalArg}}
     * @param explode if this argument is true then the vehicle will explode, otherwise it will just be blown up silently.
     * @default true
     * @return Returns ''true'' if the vehicle was blown up, ''false'' if invalid arguments were passed to the function.
     */
    export function blowVehicle(vehicleToBlow: vehicle, explode: boolean): boolean;

    /**
     * <section name="Server" class="server" show="true">
     * This function sets the weapon property of the specified weapons specified weapon type. See lower down the page for documentation related to weapon creation.
     * @see {@link https://wiki.multitheftauto.com/wiki/setWeaponProperty|MTASA Wiki}
     * @param weaponID The ID or name of the Weapons|weapon you want to set a property of. Names can be:  {{Some Weapon Types}}
     * @param weaponSkill Either: pro, std or poor. The player must have this skill level set to have the effect.
     * @param property The property you want to set the value of:  {{Weapon Properties Writable}}
     * @return On success:
     * * '''bool:''' Returns true if the weapon property was successfully set
     * * On failure:
     * * '''bool:''' Returns false if the weapon property was unable to be set
     */
    export function setWeaponProperty(weaponID: number, weaponSkill: string, property: string, float: number): boolean;

}